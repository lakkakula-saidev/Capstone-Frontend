import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DiscoverAnimation from "./discoverAnime";
import { Carousel } from "react-responsive-carousel";
import { Avatar, Divider } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

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
    const history = useHistory();
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

    function handleTrips() {
        console.log("i ma here..");
        history.push("/trips");
    }

    function handleHome() {
        history.push("/");
    }

    const imagesData = photosCarousel();

    return (
        <div className="d-flex flex-row h-100 ">
            <div className="d-flex flex-column align-items-center bg-white py-3 cursor-pointer " style={{ height: "100%", maxHeight: "100%", zIndex: "500" }}>
                <div onClick={() => handleHome()} className="d-flex flex-column justify-content-center align-items-center hoverClass my-2">
                    <Avatar style={{ background: "none", color: "black" }}>
                        <HomeOutlinedIcon />
                    </Avatar>
                    <div className="px-3" style={{ fontSize: "12px" }}>
                        Home
                    </div>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center hoverClass my-2">
                    <Avatar style={{ background: "none", color: "black" }}>
                        <PermContactCalendarOutlinedIcon />
                    </Avatar>
                    <div className="px-3" style={{ fontSize: "12px" }}>
                        People
                    </div>
                </div>
                <div onClick={() => handleTrips()} className="d-flex flex-column justify-content-center align-items-center hoverClass my-2">
                    <Avatar style={{ background: "none", color: "black" }}>
                        <PhotoSizeSelectActualOutlinedIcon />
                    </Avatar>
                    <div className="px-3" style={{ fontSize: "12px" }}>
                        Trips
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center hoverClass my-2">
                    <Avatar style={{ background: "none", color: "black" }}>
                        <PersonOutlineOutlinedIcon />
                    </Avatar>
                    <div className="px-3" style={{ fontSize: "12px" }}>
                        Profile
                    </div>
                </div>
            </div>

            <div className={`d-flex flex-column px-2 mx-2 my-4 customRounding ${Object.keys(selectedPlace).length !== 0 ? "bg-white" : ""}`} style={{ maxHeight: "100%" }}>
                <Row className="font-weight-bold no-gutters">
                    <Col sm={12} md={12} className="py-2 pl-0 ">
                        <div className="d-flex flex-column align-items-start">
                            {Object.keys(selectedPlace).length === 0 ? (
                                <></>
                            ) : (
                                <>
                                    <div>
                                        <Typography variant="h6" color="textPrimary" component="p">
                                            Photography: {selectedPlace ? selectedPlace.name : ""}
                                        </Typography>
                                    </div>
                                    <div className="mt-2" style={{ minWidth: "100%" }}>
                                        {imagesData ? (
                                            <Carousel showThumbs={false} autoPlay={true} interval={10000} showIndicators={false}>
                                                {imagesData.map((item) => (
                                                    <div>
                                                        <img src={item.image} alt={"No item"} />
                                                    </div>
                                                ))}
                                            </Carousel>
                                        ) : (
                                            "No images yet"
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </Col>
                </Row>
                {selectedPlace && Object.keys(selectedPlace).length > 0 ? (
                    <>
                        <Row className="font-weight-bold no-gutters">
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

                        <Row className="customScrollbar no-gutters" style={{ overflowY: "scroll" }}>
                            <Col sm={12} md={12} className=" ">
                                {selectedPlace.hasOwnProperty("reviews") && selectedPlace.reviews.length > 0
                                    ? selectedPlace.reviews.map((review) => (
                                          <>
                                              <Row className="no-gutters" key={review.author_name}>
                                                  <Col sm={3} md={3} className="py-2 pl-0">
                                                      <div className="d-flex flex-column align-items-center ">
                                                          <div>
                                                              <Avatar style={{ backgroundColor: "white", color: "black" }}></Avatar>
                                                          </div>
                                                          <div>
                                                              <Typography variant="body2" classes={classes.Typography} color="textPrimary" component="p">
                                                                  Review by:
                                                              </Typography>
                                                          </div>
                                                          <div className="textAlignCenter">
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
                    <div className="container h-100">
                        <DiscoverAnimation />
                    </div>
                )}
            </div>
        </div>
    );
}
