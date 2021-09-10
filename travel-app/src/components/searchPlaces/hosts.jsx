import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Spinner, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Avatar } from "@material-ui/core";
import { green, blueGrey } from "@material-ui/core/colors";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

import allActions from "../../actions/index.js";

const useStyles = makeStyles((theme) => ({
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
    },
    PeopleAltIcon: {
        color: green[500]
    }
}));

export default function FriendsList() {
    const classes = useStyles();
    const hosts = useSelector((store) => store.search.search_hosts);
    const loading = useSelector((store) => store.search.search_hosts_loading);
    const dispatch = useDispatch();

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

    function hostsFilter() {
        if (Object.keys(hosts).length > 0 && hosts.hasOwnProperty("response") && hosts.response.length > 0) {
            const temp = hosts.response.filter((host) => {
                return host._id !== user._id;
            });

            return temp;
        } else return null;
    }

    const filteredHosts = hostsFilter();

    return (
        <Container>
            <Row className="d-flex align-items-center">
                {loading && <Spinner animation="border" variant="primary" />}{" "}
                {!loading && filteredHosts !== null ? (
                    <>
                        <div className="font-weight-normal">
                            <span className="font-weight-bold">
                                {" "}
                                {filteredHosts.length > 1 ? `${filteredHosts.length} Host's` : filteredHosts.length === 1 ? `${filteredHosts.length} Host` : "No Host's"}
                            </span>{" "}
                            found in this region
                        </div>
                        {filteredHosts && filteredHosts.length > 0 ? (
                            <div className="d-flex flex-column p-3 my-3 bg-white customRounding">
                                {filteredHosts && filteredHosts.length > 0 ? (
                                    filteredHosts.map((host) => {
                                        const prevFriends = friendsList.some(
                                            (friend) => friend.recipient._id.toString() === host._id.toString() || friend.requester._id.toString() === host._id.toString()
                                        );
                                        console.log(prevFriends);

                                        return (
                                            <div className="pb-2 customRounding cursor-pointer hoverClass" id={host._id}>
                                                <div className="d-flex justify-content-between align-items-center pt-2">
                                                    <div className="d-flex justify-content-start align-items-center">
                                                        <div className="px-2">
                                                            <Avatar variant="rounded" className={classes.large} src={host.avatar !== "none" ? host.avatar : "https://source.unsplash.com/random"} />
                                                        </div>
                                                        <div className="px-2">
                                                            <div>
                                                                {host.firstname} {host.surname}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="px-2">
                                                        {prevFriends ? (
                                                            <PeopleAltIcon className={classes.PeopleAltIcon} />
                                                        ) : (
                                                            <PersonAddIcon
                                                                className={classes.small}
                                                                onClick={() => dispatch(allActions.connectActions.new_connection({ sender_id: user._id, receiver_id: host._id }))}
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <></>
                                )}
                            </div>
                        ) : (
                            <></>
                        )}
                    </>
                ) : !loading && filteredHosts === null ? (
                    <div>No Host's found</div>
                ) : (
                    <div className="font-weight-normal pl-2">
                        Searching for
                        <span className="font-weight-bold"> Host's</span>
                    </div>
                )}
            </Row>
        </Container>
    );
}
