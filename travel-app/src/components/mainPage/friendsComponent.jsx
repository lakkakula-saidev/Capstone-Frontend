import React, { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import FriendRequest from "./friendRequest";
import FriendsList from "./friendsList";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { Accordion, AccordionDetails, AccordionSummary, Badge, Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    medium: {
        width: theme.spacing(4),
        height: theme.spacing(4)
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
    },
    root_accordion: {
        width: "100%"
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
    },
    details: {
        width: "100%"
    },
    accordion: {
        boxShadow: "none"
    }
}));

export default function FriendsComponent() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const user = useSelector((store) => store.user.currentUser);

    const friendRequests =
        Object.keys(user).length > 0 && user.hasOwnProperty("friends") && user.friends.length > 0
            ? user.friends.filter((connection) => connection.requester._id.toString() === user._id.toString() && connection.status === 2)
            : null;
    const friendsList = Object.keys(user).length > 0 && user.hasOwnProperty("friends") && user.friends.length > 0 ? user.friends.filter((connection) => connection.status === 3) : null;

    const pendingRequests =
        Object.keys(user).length > 0 && user.hasOwnProperty("friends") && user.friends.length > 0
            ? user.friends.filter((connection) => connection.requester._id.toString() === user._id.toString() && connection.status === 1)
            : null;

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container fluid className="h-100 w-100 px-0 no-gutters mt-4">
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <div className="d-flex w-100 justify-content-between align-items-center px-2 my-2">
                        <div>
                            <Box component="span" className={classes.divElement}>
                                REQUESTS
                            </Box>
                        </div>
                        {friendRequests !== null && friendRequests.length > 0 ? <Badge badgeContent={friendRequests.length} color="primary"></Badge> : <></>}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <FriendRequest />
                </AccordionDetails>
            </Accordion>{" "}
            <Accordion className={classes.Accordion} expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <div className="d-flex w-100 justify-content-between align-items-center px-2 my-2">
                        <div>
                            <Box component="span" className={classes.divElement}>
                                CONTACTS
                            </Box>
                        </div>
                        {friendsList !== null && friendsList.length > 0 ? <Badge badgeContent={friendsList.length} color="primary"></Badge> : <></>}
                    </div>
                </AccordionSummary>

                <AccordionDetails className={classes.details}>
                    <FriendsList />
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}
