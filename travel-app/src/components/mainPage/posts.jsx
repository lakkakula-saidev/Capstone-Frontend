import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardMedia, CardContent, Avatar, IconButton } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import MoreHoriIcon from "@material-ui/icons/MoreHoriz";
import allActions from "../../actions";
import uniqid from "uniqid";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginBottom: "2rem"
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
    const dispatch = useDispatch();
    const post = useSelector((store) => store.post);
    const user = useSelector((store) => store.user.currentUser);
    const allPosts = post.posts;

    const completePosts = Object.keys(post.user_new_post).length > 0 ? [...allPosts, post.user_new_post] : allPosts;

    useEffect(() => {
        dispatch(allActions.postActions.get_all_posts());
    }, []);

    return (
        <div className="d-flex flex-column-reverse w-100">
            {completePosts?.length > 0
                ? completePosts.map((post) => {
                      const userCheck = post.author._id.toString() === user._id;
                      return (
                          <Card className={classes.root} key={uniqid()}>
                              <CardHeader
                                  avatar={
                                      <div className="w-100 px-2 py-1">
                                          <Avatar variant="rounded" className="img-fluid" src={post.author.avatar !== undefined && post.author.avatar !== "none" ? post.author.avatar : ""} />
                                      </div>
                                  }
                                  action={
                                      <IconButton aria-label="settings">
                                          <MoreHoriIcon />
                                      </IconButton>
                                  }
                                  title={userCheck ? `${user.firstname} ${user.surname}` : `${post.author.firstname} ${post.author.surname}`}
                                  /* subheader="September 14, 2016" */
                                  subheader={` ${post.city}, ${post.country}`}
                              />
                              <CardContent className={classes.cardText}>
                                  <div className="px-2 ">{post.content}</div>
                              </CardContent>
                              <div className="px-4 pb-4">{post.hasOwnProperty("cover") ? <CardMedia className={classes.media} image={post.cover} /> : ""}</div>
                          </Card>
                      );
                  })
                : ""}
        </div>
    );
}
