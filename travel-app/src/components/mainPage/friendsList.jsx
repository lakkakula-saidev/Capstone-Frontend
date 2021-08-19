import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Avatar } from "@material-ui/core";
import { grey, blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(2.5),
        height: theme.spacing(2.5),
        color: grey["500"]
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

export default function FriendsList() {
    const classes = useStyles();
    return (
        <div className="d-flex flex-column px-4 pb-4 my-3 bg-white customRounding">
            <div className="d-flex justify-content-between align-items-center pt-4">
                <div className="d-flex justify-content-start align-items-center">
                    <div className="px-2">
                        <Avatar variant="rounded" className={classes.large} src="https://source.unsplash.com/random" />
                    </div>
                    <div className="px-2">
                        <div>Nancyyyy</div>
                    </div>
                </div>
                <MoreHorizOutlinedIcon className={classes.small} />
            </div>
            <div className="d-flex justify-content-between align-items-center pt-4">
                <div className="d-flex justify-content-start align-items-center">
                    <div className="px-2">
                        <Avatar variant="rounded" className={classes.large} src="https://source.unsplash.com/random" />
                    </div>
                    <div className="px-2">
                        <div>Nancyyyy</div>
                    </div>
                </div>
                <MoreHorizOutlinedIcon className={classes.small} />
            </div>
        </div>
    );
}
