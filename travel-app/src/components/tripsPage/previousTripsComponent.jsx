import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Typography from "@material-ui/core/Typography";
import allActions from "../../actions";

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
            <Row className=" mt-4">
                {userPosts.user_posts.map((item) => (
                    <Col sm={12} md={4} className="pb-4" key={item._id} onClick={() => setTrip(item)}>
                        <ImageList className={classes.ImageList}>
                            <ImageListItem className="w-100 tripsItem">
                                <img src={`https://source.unsplash.com/1600x900/?${item.country}`} className="cursor-pointer" />
                                <ImageListItemBar className={classes.ImageListItemBar} title={`${item.country}`} /* subtitle={<span> {item.country}</span> }*/ />
                            </ImageListItem>
                        </ImageList>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
