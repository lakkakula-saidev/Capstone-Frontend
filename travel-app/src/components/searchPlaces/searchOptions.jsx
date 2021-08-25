import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./styles.css";
import { Carousel } from "react-carousel-minimal";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Divider } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

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

export default function SearchOptions() {
    const classes = useStyles();
    const selectedPlace = useSelector((store) => store.search.current_selection);

    function firstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function photosCarousel() {
        if (selectedPlace && Object.keys(selectedPlace).length > 0 && selectedPlace.hasOwnProperty("photos")) {
            const carousel = selectedPlace.photos.map((photo) => {
                return { image: `${photos_Endpoint}=${photo.photo_reference}&maxwidth=1000&key=${placesKey}` };
            });
            return carousel;
        } else return null;
    }

    const imagesData = photosCarousel();
    const slideNumberStyle = {
        fontSize: "20px",
        fontWeight: "bold"
    };

    return (
        <div className="d-flex flex-column" style={{ maxHeight: "100%" }}>
            <Row className="font-weight-bold">
                <Col sm={12} md={12} className="py-2 pl-0 ">
                    <div className="d-flex flex-column align-items-start">
                        <div>
                            <Typography variant="h6" color="textPrimary" component="p">
                                Images:
                            </Typography>
                        </div>
                        <div className="mt-2" style={{ minWidth: "100%" }}>
                            {imagesData ? (
                                <Carousel
                                    data={imagesData}
                                    width="850px"
                                    time={2000}
                                    height="200px"
                                    radius="10px"
                                    /*    slideNumber={true}
                                        slideNumberStyle={slideNumberStyle} */
                                    captionPosition="bottom"
                                    dots={true}
                                    automatic={true}
                                    pauseIconColor="white"
                                    pauseIconSize="40px"
                                    slideImageFit="cover"
                                    style={{
                                        textAlign: "center",
                                        maxWidth: "850px",
                                        maxHeight: "500px"
                                    }}
                                />
                            ) : (
                                "No images yet"
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
            {selectedPlace && Object.keys(selectedPlace).length > 0 ? (
                <>
                    <Row className="font-weight-bold">
                        <Col sm={12} md={12} className="py-2 pl-0">
                            <div className="d-flex flex-row align-items-end">
                                <div>
                                    <Typography variant="h6" color="textPrimary" component="p">
                                        Reviews:
                                    </Typography>
                                </div>
                                <div>
                                    <Rating name="read-only" value={selectedPlace.rating} precision={0.1} size="small" readOnly />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row style={{ overflowY: "scroll" }}>
                        <Col>
                            {selectedPlace.hasOwnProperty("reviews") && selectedPlace.reviews.length > 0
                                ? selectedPlace.reviews.map((review) => (
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
                    </Row>
                </>
            ) : (
                <>{"No place selected"}</>
            )}
        </div>
    );
}

/* 
<div className="d-flex justify-content-between my-5 align-items-center">
                    <p className="font-weight-bold">Map View</p>

                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input " id="customSwitch1" />
                        <label className="custom-control-label" for="customSwitch1"></label>
                    </div>
                </div>
                <div>
                    <p className="font-weight-bold">Category</p>
                    <div className="d-flex justify-content-between ">
                        <button type="button" className="btn btn-dark">
                            Places
                        </button>
                        <button type="button" className="btn btn-dark">
                            Button
                        </button>
                    </div>
                </div>
                <div>
                    <h6 className="my-4">Details</h6>
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between mb-2 align-items-center">
                            <p>Banks</p>
                            <div className="input-group-text border-0 bg-transparent">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mb-2  align-items-center">
                            <p>Theaters</p>
                            <div className="input-group-text border-0 bg-transparent">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mb-2  align-items-center">
                            <p>Stations</p>
                            <div className="input-group-text border-0 bg-transparent">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="font-weight-bold">Price Range</p>
                </div>
                <div>
                    <input type="range" className="custom-range" min="0" max="5" id="customRange1" />
                </div> */
