import React from "react";
import { Container, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import { IconButton, Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import Posts from "./posts";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%"
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
    }
}));

export default function PostComponent() {
    const classes = useStyles();
    return (
        <Container>
            <div className="d-flex w-100 mt-4">
                <Paper component="form" className={classes.root}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                        <div className="px-2 py-1">
                            <Avatar variant="rounded" className={classes.large} src="https://source.unsplash.com/random" />
                        </div>
                    </IconButton>
                    <InputBase className={classes.input} placeholder="What's new, Profile name?" inputProps={{ "aria-label": "search google maps" }} />
                    <div className="px-3">
                        <Button className="btn btn-primary mt-1 ml-2 buttonRounding" /* onClick={() => handleLogin()} */>Decline</Button>
                    </div>
                </Paper>
            </div>
            <div className="d-flex w-100 mt-4">
                <Posts />
            </div>
        </Container>
    );
}
