import React from "react";
import { Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import blueGrey from "@material-ui/core/colors/blueGrey";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Avatar, Divider, List, ListItem, ListItemText, ListItemAvatar, Box } from "@material-ui/core";

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
    }
}));

export default function NavComponent() {
    const classes = useStyles();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Container>
            <div className="d-flex justify-content-start align-items-center p-4 my-3 bg-white customRounding">
                <div className="px-2">
                    <Avatar variant="rounded" className={classes.large} src="https://source.unsplash.com/random" />
                </div>
                <div className="px-2">
                    <Box component="div" display="inline" className={classes.divElement}>
                        {user.currentUser.firstname} {user.currentUser.surname}
                    </Box>

                    <div>@{user.currentUser.username}</div>
                </div>
            </div>

            <List component="nav" className="classes.root py-3 px-4 my-3 bg-white customRounding" aria-label="mailbox folders">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "white", color: "black" }}>
                            <HomeOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Home" classes={{ primary: classes.listItemText }} />
                </ListItem>
                <Divider variant="middle" className={classes.divider} />

                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "white", color: "black" }}>
                            <PermContactCalendarOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="People" classes={{ primary: classes.listItemText }} />
                </ListItem>
                <Divider variant="middle" className={classes.divider} />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "white", color: "black" }}>
                            <PhotoSizeSelectActualOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" classes={{ primary: classes.listItemText }} />
                </ListItem>
                <Divider variant="middle" className={classes.divider} />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "white", color: "black" }}>
                            <PersonOutlineOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Profile" classes={{ primary: classes.listItemText }} />
                </ListItem>
                <Divider variant="middle" className={classes.divider} />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "white", color: "black" }}>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" classes={{ primary: classes.listItemText }} />
                </ListItem>
            </List>
        </Container>
    );
}
