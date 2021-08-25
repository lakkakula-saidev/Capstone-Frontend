import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import allActions from "../actions/index.js";

const useStyles = makeStyles((theme) => ({
    root: {
        // (Note: space or no space after & matters. See SASS "parent selector".)
        width: "100%",
        "& .MuiOutlinedInput-root": {
            // - The Input-root, inside the TextField-root

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
    }
}));

export default function Navbar() {
    const classes = useStyles();
    const [address, setAddress] = useState("");

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        dispatch(allActions.searchActions.search_Place(value));
        if (latLng) history.push("/search");
    };

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        Trav Companion
                    </Link>
                </a>

                <div className="w-25 mr-5">
                    <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div className="w-100">
                                <TextField classes={classes} size="small" {...getInputProps({ placeholder: "Search" })} variant="outlined" />

                                <div id="searchList">
                                    {loading ? <div>...loading</div> : null}
                                    {suggestions.map((suggestion) => {
                                        const style = { backgroundColor: suggestion.active ? "blue" : "white" };
                                        return <div {...getSuggestionItemProps(suggestion, { style })} /* onClick={() => handlePlaceSearch()} */>{suggestion.description}</div>;
                                    })}
                                </div>
                            </div>
                        )}
                    </PlacesAutocomplete>
                </div>
            </nav>
        </div>
    );
}
