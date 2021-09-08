import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { Avatar, Box } from "@material-ui/core";
import allActions from "../../actions/index.js";

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
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user.currentUser);
    const hosts = useSelector((store) => store.search.search_hosts);
    const friendRequests =
        Object.keys(user).length > 0 && user.hasOwnProperty("friends") && user.friends.length > 0
            ? user.friends.filter((connection) => connection.requester._id.toString() === user._id.toString() && connection.status === 2)
            : null;
    const pendingRequests =
        Object.keys(user).length > 0 && user.hasOwnProperty("friends") && user.friends.length > 0
            ? user.friends.filter((connection) => connection.requester._id.toString() === user._id.toString() && connection.status === 1)
            : null;
    const friendsList = Object.keys(user).length > 0 && user.hasOwnProperty("friends") && user.friends.length > 0 ? user.friends.filter((connection) => connection.status === 3) : null;

    return (
        <div className="w-100">
            {friendRequests !== null
                ? friendRequests.map((connection) => (
                      <div className="d-flex flex-column p-4 my-3 bg-white customRounding hoverClass">
                          <div className="d-flex justify-content-start align-items-center">
                              <div className="px-2">
                                  <Avatar
                                      variant="rounded"
                                      className={classes.large}
                                      src={connection.recipient.avatar !== "none" ? connection.recipient.avatar : "https://source.unsplash.com/random"}
                                  />
                              </div>
                              <div className="px-2">
                                  <Box component="div" display="inline">
                                      <Box component="span" className={classes.divElement}>
                                          {connection.recipient.firstname} {connection.recipient.surname}
                                      </Box>
                                      wants to add you to friends
                                  </Box>
                              </div>
                          </div>
                          <Form className="px-2 mt-3">
                              <Form.Group className="d-flex">
                                  <Button
                                      block
                                      className="py-1 px-4 mt-1 ml-2 rounded-pill"
                                      onClick={() => dispatch(allActions.connectActions.accept_connection({ sender_id: connection.recipient._id, receiver_id: user._id }))}
                                  >
                                      Accept
                                  </Button>
                                  <Button
                                      block
                                      className="btn btn-light btn-outline-secondary py-1 px-4 mt-1 ml-2 rounded-pill "
                                      onClick={() => dispatch(allActions.connectActions.reject_connection({ sender_id: connection.recipient._id, receiver_id: user._id }))}
                                  >
                                      Decline
                                  </Button>
                              </Form.Group>
                          </Form>
                      </div>
                  ))
                : "No requests currently"}
        </div>
    );
}
