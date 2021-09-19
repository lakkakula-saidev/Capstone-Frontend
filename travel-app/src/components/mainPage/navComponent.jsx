import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import blueGrey from "@material-ui/core/colors/blueGrey";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Avatar, Divider, List, ListItem, ListItemText, ListItemAvatar, Box } from "@material-ui/core";
import { TextField, Dialog, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import allActions from "../../actions/index.js";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        fontWeight: 600
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6)
    },
    divider: {
        height: "1px"
    },
    divElement: {
        fontWeight: 700,
        color: blueGrey["800"]
    },
    listItemText: {
        fontWeight: 800,
        color: blueGrey["700"]
    },
    dialog: {
        minWidth: "40%"
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10)
    }
}));

export default function NavComponent() {
    const classes = useStyles();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();

    // These are variables and functions of Profile Dialog
    const [city, setCity] = useState(user.currentUser.city);
    const [country, setCountry] = useState(user.currentUser.country);
    const [username, setUsername] = useState(user.currentUser.username);
    const [firstname, setFirstname] = useState(user.currentUser.firstname);
    const [lastname, setLastname] = useState(user.currentUser.surname);
    const [email, setEmail] = useState(user.currentUser.email);
    const [cityError, setCityError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [firstnameError, setFirstnameError] = useState(false);
    const [lastnameError, setLastnameError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [countryError, setCountryError] = useState(false);
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
        setFirstnameError(false);
        setLastnameError(false);
        setUsernameError(false);
        setEmailError(false);
        setCityError(false);
        setCountryError(false);

        if (city === "") setCityError(true);
        if (firstname === "") setFirstnameError(true);
        if (lastname === "") setLastnameError(true);
        if (username === "") setUsername(true);
        if (email === "") setEmailError(true);
        if (!cityError && !firstnameError && !lastnameError && !usernameError && !emailError) {
            console.log("I am here");
            if (imageFormData !== null) {
                const formData = new FormData();
                formData.append("city", city);
                formData.append("country", country);
                formData.append("email", email);
                formData.append("firstname", firstname);
                formData.append("lastname", lastname);
                formData.append("username", username);
                formData.append("avatar", imageFormData);
                for (var key of formData.entries()) {
                    console.log(key[0] + ", " + key[1]);
                }

                console.log(imageFormData);
                console.log(formData);
                dispatch(allActions.userActions.update_User(formData));
                handleClose();
            } else {
                const formData = new FormData();
                formData.append("city", city);
                formData.append("country", country);
                formData.append("email", email);
                formData.append("firstname", firstname);
                formData.append("lastname", lastname);
                formData.append("username", username);
                dispatch(allActions.userActions.update_User(formData));
                handleClose();
            }
        }
    }

    function handleTrips() {
        console.log("i ma here..");
        history.push("/trips");
    }

    function handleHome() {
        history.push("/");
    }

    return (
        <Container>
            <div className="d-flex justify-content-start align-items-center p-4 my-3 bg-white customRounding">
                <div className="px-2">
                    <Avatar variant="rounded" className={classes.large} src={user.currentUser !== "none" ? user.currentUser.avatar : "/static/images/avatar/1.jpg"} />
                </div>
                <div className="px-2">
                    <Box component="div" display="inline" className={classes.divElement}>
                        {user.currentUser.firstname} {user.currentUser.surname}
                    </Box>

                    <div>@{user.currentUser.username}</div>
                </div>
            </div>

            <List component="nav" className="classes.root py-3 px-4 my-3 bg-white customRounding cursor-pointer" aria-label="mailbox folders">
                <ListItem onClick={() => handleHome()} className="hoverClass">
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "white", color: "black" }}>
                            <HomeOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Home" classes={{ primary: classes.listItemText }} />
                </ListItem>
                <Divider variant="middle" className={classes.divider} />

                <ListItem className="hoverClass">
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "white", color: "black" }}>
                            <PermContactCalendarOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="People" classes={{ primary: classes.listItemText }} />
                </ListItem>
                <Divider variant="middle" className={classes.divider} />
                <ListItem onClick={() => handleTrips()} className="hoverClass">
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "white", color: "black" }}>
                            <PhotoSizeSelectActualOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Trips" classes={{ primary: classes.listItemText }} />
                </ListItem>
                <Divider variant="middle" className={classes.divider} />
                <ListItem onClick={handleClickOpen} className="hoverClass">
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "white", color: "black" }}>
                            <PersonOutlineOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Profile" classes={{ primary: classes.listItemText }} />
                </ListItem>
            </List>

            <Dialog open={open} classes={{ paper: classes.dialog }} onClose={handleClose} aria-labelledby="form-dialog-title">
                <div className="d-flex flex-column align-items-center">
                    <DialogTitle id="form-dialog-title" className="my-2">
                        <Avatar alt="Demy Sharp" src={user.currentUser !== "none" ? user.currentUser.avatar : "/static/images/avatar/1.jpg"} className={classes.avatar} />
                    </DialogTitle>
                    <DialogContent className="w-100">
                        <DialogContentText></DialogContentText>
                        <form className={classes.form} noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row">
                                    <TextField
                                        className="w-50"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        id="outlined-required"
                                        label="Firstname"
                                        variant="outlined"
                                        required
                                        error={firstnameError}
                                        helperText={firstnameError ? "First name cannot be empty" : " "}
                                    />
                                    <TextField
                                        className="w-50"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                        id="outlined-required"
                                        label="Lastname"
                                        variant="outlined"
                                        required
                                        error={lastnameError}
                                        helperText={lastnameError ? "Lastname cannot be emty" : " "}
                                    />
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row">
                                    <TextField
                                        className="w-50"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        id="outlined-required"
                                        label="Username"
                                        variant="outlined"
                                        required
                                        error={usernameError}
                                        helperText={usernameError ? "Username cannot be emty" : " "}
                                    />
                                    <TextField
                                        className="w-50"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="outlined-required"
                                        label="Email"
                                        variant="outlined"
                                        required
                                        error={emailError}
                                        helperText={emailError ? "Email cannot be emty" : " "}
                                    />
                                </div>
                                <div className="d-flex flex-row">
                                    <TextField
                                        className="w-50"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        id="outlined-required"
                                        label="City"
                                        variant="outlined"
                                        required
                                        error={cityError}
                                        helperText={cityError ? "City cannot be emty" : " "}
                                    />
                                </div>
                            </div>
                            <input type="file" onChange={(e) => handleImage(e)} class="form-control-file pl-2 pr-3 py-3" id="exampleFormControlFile1" />

                            <div className="d-flex flex-row justify-content-between mb-3 w-100 ">
                                <Button onClick={handleClose} className="py-1 px-3 mt-1 ml-2 rounded-pill" color="primary">
                                    Cancel
                                </Button>
                                <Button type="submit" className="py-1 px-3 mt-1 ml-2 rounded-pill" color="primary">
                                    Update
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </div>
            </Dialog>
        </Container>
    );
}
