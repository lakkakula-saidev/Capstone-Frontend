import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Card, CardHeader, CardMedia, CardContent, Avatar, IconButton } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import MoreHoriIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    },
    cardText: {
        paddingTop: "0px"
    }
}));

export default function Posts() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <div className="px-2 py-1">
                            <Avatar variant="rounded" className={classes.large} src="https://source.unsplash.com/random" />
                        </div>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreHoriIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardContent className={classes.cardText}>
                    <div className="px-2 ">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </div>
                </CardContent>
                <div className="px-4 pb-4">
                    <CardMedia className={classes.media} image="https://source.unsplash.com/random" title="Paella dish" />
                </div>
            </Card>
        </div>
    );
}
