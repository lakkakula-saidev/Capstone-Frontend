import React from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import { IconButton, Avatar } from "@material-ui/core";
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
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <Container>
            <div className="d-flex w-100 mt-4">
                <Paper component="form" className={classes.root}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                        <div className="px-2 py-1">
                            <Avatar variant="rounded" className={classes.large} src="https://source.unsplash.com/random" />
                        </div>
                    </IconButton>
                    <InputBase className={classes.input} placeholder={`What's new, ${user.currentUser.username}?`} inputProps={{ "aria-label": "search google maps" }} />
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
