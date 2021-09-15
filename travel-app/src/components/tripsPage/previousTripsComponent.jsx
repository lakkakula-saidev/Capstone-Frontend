import React, { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Typography from "@material-ui/core/Typography";
import allActions from "../../actions";
import NoTripAnimation from "./noTripsAnime";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    imageList: {
        width: "100%"
    },
    ImageListItemBar: {
        background: "transparent"
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    },
    images: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
}));

const itemData = [
    {
        img: "https://source.unsplash.com/1600x900/?delhi",
        title: "Image",
        author: "author"
    },
    {
        img: "https://source.unsplash.com/1600x900/?new york",
        title: "Image1",
        author: "author"
    },
    {
        img: "https://source.unsplash.com/1600x900/?paris",
        title: "Image2",
        author: "author"
    }
];

export default function PreviousTripsComponent() {
    const user = useSelector((store) => store.user);
    const userPosts = useSelector((store) => store.post);
    const dispatch = useDispatch();
    const classes = useStyles();

    function setTrip(data) {
        dispatch(allActions.postActions.set_selected_trip(data));
    }

    return (
        <Container className="h-100 customScrollbar bg-white mt-3 py-3 px-4 customRoundingContainer" style={{ overflowY: "scroll" }}>
            <Row className="no-gutters ">
                <Typography variant="h5" color="textPrimary" component="p">
                    Your completed expeditions
                </Typography>
            </Row>
            <Row className=" mt-4" style={{ overflowY: "scroll" }}>
                {userPosts.loading ? (
                    <Spinner animation="border" role="status" />
                ) : userPosts.user_posts.length > 0 ? (
                    userPosts.user_posts.map((item) => (
                        <Col sm={12} md={4} className="pb-4" key={item._id} onClick={() => setTrip(item)}>
                            <Card className={classes.images}>
                                <CardActionArea>
                                    <CardMedia className={classes.media} image={`https://source.unsplash.com/1000x900/?${item}`} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {`${item}`}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <NoTripAnimation />
                )}
            </Row>
        </Container>
    );
}
