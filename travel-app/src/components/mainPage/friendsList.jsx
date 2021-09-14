import React, { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { grey, blueGrey } from "@material-ui/core/colors";
import { MicFill, Paperclip, EmojiLaughing } from "react-bootstrap-icons";
import Typography from "@material-ui/core/Typography";
import Picker from "emoji-picker-react";
import Popover from "@material-ui/core/Popover";
import io from "socket.io-client";
import allActions from "../../actions/index.js";
import { makeStyles, DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog, Avatar, TextField, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        // (Note: space or no space after & matters. See SASS "parent selector".)
        minWidth: "22%",
        maxWidth: "22%",
        height: "50%",
        position: "absolute",
        right: "1%",
        bottom: "0%",
        borderRadius: "5px",

        "& .MuiDialogContent-root": {
            // - The Input-root, inside the TextField-root
            paddingRight: "0px",
            paddingLeft: "0px",
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
    },
    small: {
        width: theme.spacing(2.5),
        height: theme.spacing(2.5),
        color: grey["500"]
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5)
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
    dialog: {
        minWidth: "22%",
        maxWidth: "22%",
        height: "50%",
        position: "absolute",
        right: "1%",
        bottom: "0%",
        borderRadius: "5px"
    },
    popoverRoot: {
        transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important"
    }
}));

const endpoint = process.env.REACT_APP_BACK_URL;

export default function FriendsList() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user.currentUser);
    const hosts = useSelector((store) => store.search.search_hosts);
    const friendRequests =
        Object.keys(user).length > 0 && user.hasOwnProperty("friends") && user.friends.length > 0
            ? user.friends.filter((connection) => connection.requester._id.toString() === user._id.toString() && connection.status === 2)
            : null;
    const friendsList = Object.keys(user).length > 0 && user.hasOwnProperty("friends") && user.friends.length > 0 ? user.friends.filter((connection) => connection.status === 3) : null;

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState("paper");

    // Chat initializations or variables

    const chat = useSelector((store) => store.chat);
    const socket = useMemo(() => io(endpoint, { transports: ["websocket"] }), []);
    const [message, setMessage] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openEmoji = Boolean(anchorEl);
    const id = openEmoji ? "simple-popover" : undefined;
    const receiver = chat.current_chat_room.members?.filter((member) => member._id !== user._id)[0];

    // Socked useEffect
    useEffect(() => {
        /* ss */
        console.log("adding event listeners");
        socket.on("connect", () => {
            // with on we're listening for an event

            socket.emit("did-connect" /*userId */);
        });

        socket.on("message", ({ message, roomId, createdAt }) => {
            console.log({ message, roomId }, "This is emit from back..");
            dispatch(allActions.chatActions.push_new_message({ message: message.message, sender: message.sender, createdAt: createdAt }));
        });
    }, [socket]);

    useEffect(() => {
        socket.emit("joinRoom", { username: user.username, roomId: chat.current_chat_room._id });

        socket.on("joinRoom", { username: user.username, roomId: chat.current_chat_room._id });
    }, [chat.current_chat_room._id, user.username]);
    const [testing, setTesting] = useState(0);

    function handleNewMessage(e) {
        e.preventDefault();
        const roomId = chat.current_chat_room._id;
        const i = testing + 1;
        setTesting(i);
        socket.emit("sendMessage", {
            roomId,
            message: {
                message: message,
                sender: user._id
            }
        });
        const date = new Date().toISOString();

        console.log(testing);
        dispatch(allActions.chatActions.push_new_message({ message: message, sender: user._id, createdAt: date }));
        setMessage("");
    }

    function handleStartChat(e, target) {
        dispatch(allActions.chatActions.fetch_new_chat_rooms({ members: [target._id, user._id] }));
        handleClickOpen("paper");
    }

    // Functions...
    function handleClickOpen(scrollType) {
        setOpen(true);
        setScroll(scrollType);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    function parseISOString(s) {
        var b = s.split(/\D+/);
        let date = new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
        /*  ${date.getFullYear()} */
        return `${date.toLocaleDateString("en-us", { weekday: "short" })} ${date.getDate()}. ${date.toLocaleString("en-us", { month: "short" })}`;
    }

    const dates = [];

    function renderDate(message, dateNum) {
        // Add to Set so it does not render again
        dates.push(dateNum);
        return (
            <div class="badge badge-pill badge-secondary font-weight-normal" style={{ fontSize: "10px" }}>
                {parseISOString(message.createdAt)}
            </div>
        );
    }

    const handleClickEmoji = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseEmoji = () => {
        setAnchorEl(null);
    };

    return (
        <div className="w-100">
            {friendsList !== null
                ? friendsList.map((connection) => {
                      const contact = connection.requester._id.toString() === user._id.toString() ? connection.recipient : connection.requester;
                      return (
                          <div className="pb-2 customRounding cursor-pointer hoverClass" id={contact._id} onClick={(e) => handleStartChat(e, contact)}>
                              <div className="d-flex justify-content-between align-items-center pt-2">
                                  <div className="d-flex justify-content-start align-items-center">
                                      <div className="px-2">
                                          <Avatar variant="rounded" className={classes.large} src="https://source.unsplash.com/random" />
                                      </div>
                                      <div className="px-2">
                                          <div>
                                              {contact.firstname} {contact.surname}
                                          </div>
                                      </div>
                                  </div>
                                  <MoreHorizOutlinedIcon className={classes.small} />
                              </div>
                          </div>
                      );
                  })
                : "No contact yet"}
            <Dialog
                classes={{ paper: classes.root }}
                PaperProps={{
                    style: { borderColor: "#28477A", borderStyle: "solid", borderWidth: "5px thin thin thin" }
                }}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title" style={{ backgroundColor: "#F1F3F4" }}>
                    <div className="d-flex flex-column customRounding">
                        <div className="d-flex justify-content-between align-items-center ">
                            <div className="d-flex justify-content-start align-items-center">
                                <div className="">
                                    <Avatar variant="rounded" className={classes.medium} src="https://source.unsplash.com/random" />
                                </div>
                                <div className="pl-3">
                                    <Typography variant="subtitle1" gutterBottom>
                                        {chat.current_chat_room.members ? receiver.firstname : "No username"}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent dividers={false}>
                    <div>
                        {chat.current_chat_room.chats?.length > 0 ? (
                            chat.current_chat_room.chats.map((message, index) => {
                                /*  setBadgeDate(parseISOString(message.createdAt) === badgeDate ? badgeDate : parseISOString(message.createdAt)); */
                                const date = new Date(message.createdAt);

                                const dateNum = date.toISOString().substring(0, 10);
                                var timeString = date.toLocaleTimeString([], { timeStyle: "short", hour12: false });

                                return (
                                    <div className="d-flex flex-column align-items-center">
                                        {/* <Chip label={parseISOString(message.createdAt)} style={{ fontSize: "10px" }} /> */}
                                        {dates.includes(dateNum) ? null : renderDate(message, dateNum)}

                                        <div className={`w-100 d-flex flex-row${message.sender.toString() === user?._id.toString() ? "-reverse" : ""}`}>
                                            <div
                                                key={message._id}
                                                className={` ${message.sender.toString() === user?._id.toString() ? "messageSent round py-1 px-2 m-3" : "messageRecieved round py-1 px-2 m-3"}`}
                                            >
                                                <p className="mb-3">{message.message} </p>
                                                <div className="text-secondary pt-2" style={{ position: "absolute", bottom: "2px", right: "8px", fontSize: "8px" }}>
                                                    {timeString}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div>
                                <p className="py-4 ">
                                    <strong>Click and Start a chat</strong>
                                </p>
                            </div>
                        )}
                    </div>
                </DialogContent>
                <DialogActions>
                    <div className="d-flex flex-row w-100 align-items-center mx-3 mb-1">
                        <form className="messageInput pr-1" onSubmit={(e) => handleNewMessage(e)} autoComplete="off">
                            <TextField
                                className="w-100"
                                id="outlined-size-small"
                                value={message}
                                inputRef={(input) => input && input.focus()}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message"
                                variant="outlined"
                                size="small"
                            />
                            {/* <InputEmoji value={message} height={10} onChange={setMessage} cleanOnEnter onEnter={(e) => handleNewMessage(e)} placeholder="Type a message" /> */}
                        </form>
                        <div className="px-1" onClick={handleClickEmoji}>
                            <EmojiLaughing size="20" />
                        </div>

                        <div className="px-1">
                            <Paperclip size="20" />
                        </div>
                    </div>
                </DialogActions>
            </Dialog>
            <Popover
                id={id}
                open={openEmoji}
                anchorEl={anchorEl}
                onClose={handleCloseEmoji}
                disableAutoFocus={true}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
            >
                <Picker onEmojiClick={(e, emojiObject) => setMessage(message + emojiObject.emoji)} />
            </Popover>
        </div>
    );
}
