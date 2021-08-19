import React from "react";
import { Container } from "react-bootstrap";
import FriendRequest from "./friendRequest";
import FriendsList from "./friendsList";
import { Badge, Box } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { makeStyles } from "@material-ui/core/styles";

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
        fontWeight: 650,
        fontSize: "0.9rem",
        color: blueGrey["400"],
        paddingRight: "5px"
    },
    listItemText: {
        fontWeight: 800,
        color: blueGrey["700"]
    }
}));

export default function FriendsComponent() {
    const classes = useStyles();
    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center px-4 mt-3">
                <div>
                    <Box component="span" className={classes.divElement}>
                        REQUESTS
                    </Box>
                </div>
                <Badge badgeContent={4} color="primary"></Badge>
            </div>
            <FriendRequest />
            <div className="d-flex justify-content-between align-items-center px-4 mt-4">
                <div>
                    <Box component="span" className={classes.divElement}>
                        CONTACTS
                    </Box>
                </div>
                <Badge badgeContent={4} color="primary"></Badge>
            </div>
            <FriendsList />
        </Container>
    );
}
