import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { Avatar, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6)
    },
    divElement: {
        fontWeight: 700,
        color: blueGrey["800"],
        paddingRight: "5px"
    },
    listItemText: {
        fontWeight: 800,
        color: blueGrey["700"]
    }
}));

export default function FriendRequest() {
    const classes = useStyles();

    return (
        <div className="d-flex flex-column p-4 my-3 bg-white customRounding">
            <div className="d-flex justify-content-start align-items-center">
                <div className="px-2">
                    <Avatar variant="rounded" className={classes.large} src="https://source.unsplash.com/random" />
                </div>
                <div className="px-2">
                    <Box component="div" display="inline">
                        <Box component="span" className={classes.divElement}>
                            Block
                        </Box>
                        wants to add you to friends
                    </Box>
                </div>
            </div>
            <Form className="px-2 mt-3">
                <Form.Group className="d-flex">
                    <Button block className="btn-primary mt-1 mr-2 buttonRounding" type="submit">
                        Accept
                    </Button>
                    <Button block className="btn btn-light btn-outline-secondary mt-1 ml-2 buttonRounding" /* onClick={() => handleLogin()} */>
                        Decline
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}
