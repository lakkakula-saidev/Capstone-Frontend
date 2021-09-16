import React, { useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Paper, InputBase, Avatar, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Posts from "./posts";
import allActions from "../../actions/index.js";

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== "undefined" ? isoCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397)) : isoCode;
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%"
    },
    form: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "100%"
        }
    },
    dialog: {
        minWidth: "40%"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconButton: {
        padding: 10
    },
    divider: {
        height: 28,
        margin: 4
    },
    option: {
        fontSize: 15,
        "& > span": {
            marginRight: 10,
            fontSize: 18
        }
    }
}));

export default function ProfileComponent() {
    const classes = useStyles();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [city, setCity] = useState("");
    const [country, setCountry] = useState(null);
    const [content, setContent] = useState("");
    const [cityError, setCityError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [imageFormData, setImageFormData] = useState(null);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleImage(e) {
        console.log(e.target.files);
        setImageFormData(e.target.files[0]);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setCityError(false);
        setCountryError(false);
        setContentError(false);

        if (city == "") setCityError(true);
        if (country == null) {
            setCountryError(true);
        }
        if (content == "") setContentError(true);
        if (!cityError && country && !contentError) {
            if (imageFormData !== null) {
                const formData = new FormData();
                formData.append("city", city);
                formData.append("country", country.label);
                formData.append("content", content);
                formData.append("surname", surname);
                formData.append("cover", imageFormData);
                for (var key of formData.entries()) {
                    console.log(key[0] + ", " + key[1]);
                }

                console.log(imageFormData);
                console.log(formData);
                dispatch(allActions.postActions.new_post(formData));
                handleClose();
            } else {
                const formData = new FormData();
                formData.append("city", city);
                formData.append("country", country.label);
                formData.append("content", content);
                formData.append("surname", surname);

                dispatch(allActions.postActions.new_post(formData));
                handleClose();
            }
        }
    }

    return (
        <Container className="h-100 customScrollbar" style={{ overflowY: "scroll" }}>
            <div className="d-flex w-100 mt-4">
                <Paper component="form" className={classes.root}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                        <div className="px-2 py-1">
                            <Avatar variant="rounded" className={classes.large} src="https://source.unsplash.com/random" />
                        </div>
                    </IconButton>
                    <InputBase className={classes.input} disabled={true} placeholder={`What's new, ${user.currentUser.username}?`} inputProps={{ "aria-label": "search google maps" }} />
                    <div className="px-3">
                        <Button className="py-1 px-3 mt-1 ml-2 rounded-pill " onClick={handleClickOpen}>
                            New post
                        </Button>
                    </div>
                </Paper>
            </div>
            <div className="d-flex w-100 mt-4">
                <Posts />
            </div>

            <Dialog open={open} classes={{ paper: classes.dialog }} onClose={handleClose} aria-labelledby="form-dialog-title">
                <div className="d-flex flex-column align-items-start">
                    <DialogTitle id="form-dialog-title">Post Something!!</DialogTitle>
                    <DialogContent className="w-100">
                        <DialogContentText>Showcase and share your trip by attaching photos and your expericences.</DialogContentText>
                        <form className={classes.form} noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row">
                                    <TextField
                                        className="w-50"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        id="outlined-required"
                                        label="Place or City"
                                        variant="outlined"
                                        required
                                        error={cityError}
                                        helperText={cityError ? "City cannot be emty" : " "}
                                    />
                                    <TextField
                                        className="w-50"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        id="outlined-required"
                                        label="Place or City"
                                        variant="outlined"
                                        required
                                        error={cityError}
                                        helperText={cityError ? "City cannot be emty" : " "}
                                    />
                                </div>
                                <TextField
                                    id="outlined-helperText"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    label="Description"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    required
                                    error={contentError}
                                    helperText={contentError ? "Description required" : "Describe about the place and your expericence and your thoughts..."}
                                />
                            </div>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row">
                                    <TextField
                                        className="w-50"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        id="outlined-required"
                                        label="Place or City"
                                        variant="outlined"
                                        required
                                        error={cityError}
                                        helperText={cityError ? "City cannot be emty" : " "}
                                    />
                                    <TextField
                                        className="w-50"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        id="outlined-required"
                                        label="Place or City"
                                        variant="outlined"
                                        required
                                        error={cityError}
                                        helperText={cityError ? "City cannot be emty" : " "}
                                    />
                                </div>
                                <TextField
                                    id="outlined-helperText"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    label="Description"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    required
                                    error={contentError}
                                    helperText={contentError ? "Description required" : "Describe about the place and your expericence and your thoughts..."}
                                />
                            </div>
                            <input type="file" onChange={(e) => handleImage(e)} class="form-control-file pl-2 pr-3 py-3" id="exampleFormControlFile1" />

                            <div className="d-flex flex-row justify-content-between mb-3 w-100 ">
                                <Button onClick={handleClose} className="py-1 px-3 mt-1 ml-2 rounded-pill" color="primary">
                                    Cancel
                                </Button>
                                <Button type="submit" className="py-1 px-3 mt-1 ml-2 rounded-pill" color="primary">
                                    Post
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </div>
            </Dialog>
        </Container>
    );
}
