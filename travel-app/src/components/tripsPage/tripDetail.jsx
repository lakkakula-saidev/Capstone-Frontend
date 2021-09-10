import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Divider } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import allActions from "../../actions/index.js";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1)
        },
        Typography: {
            textAlign: "center"
        }
    }
}));

const photos_Endpoint = process.env.REACT_APP_PHOTO_URL;
const placesKey = process.env.REACT_APP_GOOGLE_PLACES_KEY;

export default function TripDetails() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedTrip = useSelector((store) => store.post.selected_trip_details);

    function firstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function photosCarousel() {
        if (selectedTrip && Object.keys(selectedTrip).length > 0 && selectedTrip.hasOwnProperty("cover")) {
            const carousel = [
                {
                    image: selectedTrip.cover === "none" ? `https://source.unsplash.com/1600x900/?${selectedTrip.country}` : selectedTrip.cover
                }
            ];

            return carousel;
        } else return null;
    }

    const imagesData = photosCarousel();

    return (
        <div className="d-flex flex-column bg-white customRounding my-3 py-2" style={{ maxHeight: "100%" }}>
            <div className="font-weight-bold ">
                <Col sm={12} md={12} className="py-2">
                    <div className="d-flex flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <div>
                                <Typography variant="h5" color="textPrimary" component="p">
                                    Expedition Details: {Object.keys(selectedTrip).length > 0 ? selectedTrip.country : ""}
                                </Typography>
                            </div>
                            <div className="d-flex align-items-center cursor-pointer" onClick={() => dispatch(allActions.postActions.set_selected_trip({}))}>
                                <KeyboardBackspaceIcon />
                                <Typography color="textPrimary" component="p">
                                    back
                                </Typography>
                            </div>
                        </div>
                        <div className="mt-2" style={{ minWidth: "100%" }}>
                            {imagesData ? (
                                <Carousel showThumbs={false} autoPlay={true} interval={10000} showIndicators={false}>
                                    {imagesData.map((item) => (
                                        <div>
                                            <img src={item.image} />
                                        </div>
                                    ))}
                                </Carousel>
                            ) : (
                                "No images yet"
                            )}
                        </div>
                    </div>
                </Col>
            </div>
            {selectedTrip && Object.keys(selectedTrip).length > 0 ? (
                <>
                    <div className="font-weight-bold">
                        <Col sm={12} md={12} className="py-2">
                            <div className="d-flex flex-row">
                                <Typography variant="h6" color="textPrimary" component="p">
                                    Trip details:
                                </Typography>
                            </div>
                        </Col>
                    </div>

                    <div className="customScrollbar " style={{ overflowY: "scroll" }}>
                        <Col sm={12} md={12} className="">
                            {selectedTrip.hasOwnProperty("reviews") && selectedTrip.reviews.length > 0
                                ? selectedTrip.reviews.map((review) => (
                                      <>
                                          <Row key={review.author_name}>
                                              <Col sm={3} md={3} className="py-2 pl-0">
                                                  <div className="d-flex flex-column align-items-center ">
                                                      <div>
                                                          <Avatar style={{ backgroundColor: "white", color: "black" }}></Avatar>
                                                      </div>
                                                      <div>
                                                          <Typography variant="body2" classes={classes.Typography} color="textPrimary" component="p">
                                                              Reviewed by:
                                                          </Typography>
                                                      </div>
                                                      <div>
                                                          <Typography variant="body2" classes={classes.Typography} color="textPrimary" component="p">
                                                              {firstLetter(review.author_name)}
                                                          </Typography>
                                                      </div>
                                                  </div>
                                              </Col>
                                              <Col sm={9} md={9} className="p-2 ">
                                                  <div className="d-flex flex-column align-items-start ">
                                                      <div>
                                                          <Rating name="read-only" value={review.rating} precision={0.1} size="small" readOnly />
                                                      </div>
                                                      <div>
                                                          <Typography variant="body2" id="reviewParagraph" color="textPrimary" component="p">
                                                              {review.text}
                                                          </Typography>
                                                      </div>
                                                  </div>
                                              </Col>
                                          </Row>
                                          <Divider variant="fullWidth" className={classes.divider} />
                                      </>
                                  ))
                                : "No reviews yet"}
                        </Col>
                    </div>
                </>
            ) : (
                <div>{"No place selected"}</div>
            )}
        </div>
    );
}
