import React, { useState, useMemo, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import LogoAnimation from "./logoAnimation";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { Button } from "react-bootstrap";
import countryList from "react-select-country-list";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import allActions from "../actions/index.js";
import SearchIcon from "@material-ui/icons/Search";
import PlaceIcon from "@material-ui/icons/Place";
import { Dialog, DialogTitle, DialogContentText, DialogContent } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import List from "@material-ui/core/List";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import ReactCountryFlag from "react-country-flag";

const useStyles = makeStyles((theme) => ({
    root: {
        // (Note: space or no space after & matters. See SASS "parent selector".)
        width: "100%",

        "& .MuiOutlinedInput-root": {
            // - The Input-root, inside the TextField-root
            borderRadius: "20px",
            "& fieldset": {
                // - The <fieldset> inside the Input-root
                borderColor: grey[400] // - Set the Input border
            },
            "&:hover fieldset": {
                borderColor: grey[400] // - Set the Input border when parent has :hover
            },
            "&.Mui-focused fieldset": {
                // - Set the Input border when parent is focused
                borderColor: grey[400]
            }
        }
    },
    input: {
        backgroundColor: "white"
    },
    searchIcon: {
        backgroundColor: "white"
    },
    dialog: {
        minWidth: "45%",
        maxWidth: "45%",
        position: "absolute",
        left: "25%",
        top: "10%",
        borderRadius: "20px"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const countries = [
    { code: "USA", name: "USA" },
    { code: "GB", name: "UK" },
    { code: "KR", name: "South Korea" },
    { code: "VN", name: "Vietnam" }
];

export default function Navbar() {
    const classes = useStyles();
    const [address, setAddress] = useState("");
    const [open, setOpen] = React.useState(false);
    const user = useSelector((store) => store.user);
    const [scroll, setScroll] = React.useState("paper");
    const options = useMemo(() => countryList().setLabel("US", "USA"), []);
    /*   options.setLabel("GB", "UK");
    options.setLabel("KR", "south korea");
    options.setLabel("VN", "vietnam"); */

    useEffect(() => {
        countries.forEach((country) => options.setLabel(country.code, country.name));
    }, [options]);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelect = async (value) => {
        handleClose();
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        dispatch(allActions.searchActions.set_query(value));
        dispatch(allActions.searchActions.search_Place(value));
        if (latLng) history.push("/search");
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const handleLogout = async (e) => {
        console.log("I am here..");
        await axios.post(process.env.REACT_APP_BACK_URL + "/user/logout", { withCredentials: true });
        window.location.reload();
    };

    return (
        <div>
            <nav className="navbar navbar-light px-5 py-3 customBackgound" /* style={{ backgroundColor: "#395076" }} */>
                <div className="d-flex flex-row justify-content-end align-items-center">
                    <div className="">
                        <LogoAnimation />
                    </div>

                    <Link to="/" className="navbar-brand" style={{ textDecoration: "none", color: "white" }}>
                        Trav Companion
                    </Link>
                </div>

                <div className="d-flex flex-row justify-content-end align-items-center">
                    <div className={`py-1 px-2 mt-1 mx-3 rounded-pill cursor-pointer`} style={{ backgroundColor: "#506C94" }} onClick={() => setOpen(true)}>
                        <SearchIcon />
                    </div>
                    <Button block className=" py-1 px-4 mt-1 mx-3 rounded-pill navBar-button" onClick={handleLogout}>
                        LOGOUT
                    </Button>
                </div>
            </nav>

            <Dialog open={open} classes={{ paper: classes.dialog }} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                        return (
                            <>
                                <DialogTitle id="scroll-dialog-title">
                                    <TextField
                                        classes={classes}
                                        value={address}
                                        size="large"
                                        {...getInputProps({ placeholder: "Search", autoFocus: "true", className: classes.input })}
                                        variant="outlined"
                                    />
                                </DialogTitle>

                                {suggestions.length > 0 || loading ? (
                                    <DialogContent>
                                        <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
                                            <List className="cursor-pointer">
                                                {loading ? <div>...loading</div> : <></>}
                                                {suggestions.map((suggestion) => {
                                                    const style = { backgroundColor: suggestion.active ? "#9fa8da" : "white", borderRadius: "5px" };
                                                    const country = suggestion.description.split(", ")[suggestion.description.split(", ").length - 1];

                                                    /* country = country.length > 2 ? options.getValue(country) : country; */

                                                    return (
                                                        <ListItem {...getSuggestionItemProps(suggestion, { style })}>
                                                            <ListItemAvatar>
                                                                <PlaceIcon />
                                                                <ReactCountryFlag
                                                                    countryCode={options.getValue(country)}
                                                                    className="px-2"
                                                                    svg
                                                                    style={{
                                                                        width: "2.5em",
                                                                        height: "2.5em"
                                                                    }}
                                                                    cdnSuffix="svg"
                                                                    title="US"
                                                                />
                                                            </ListItemAvatar>
                                                            <ListItemText primary={suggestion.description} />
                                                        </ListItem>
                                                    );
                                                })}
                                            </List>
                                        </DialogContentText>
                                    </DialogContent>
                                ) : (
                                    <></>
                                )}
                            </>
                        );
                    }}
                </PlacesAutocomplete>
            </Dialog>
        </div>
    );
}
