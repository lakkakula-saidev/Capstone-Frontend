import { useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@material-ui/icons/NavigateBeforeOutlined";
import allActions from "../../actions/index.js";

export default function TripDetails() {
    const dispatch = useDispatch();
    const posts = useSelector((store) => store.post);
    const selectedTripDetails = useSelector((store) => store.post.selected_trip_details);
    const selectedCountry = useSelector((store) => store.post.selected_trip_country);
    const [currentPage, setCurrentPage] = useState(0);
    const selectedPlace = useSelector((store) => store.post.selected_place);

    function photosCarousel() {
        if (selectedTripDetails && Object.keys(selectedTripDetails).length > 0 && selectedTripDetails.hasOwnProperty(selectedPlace)) {
            console.log(currentPage);
            const place = selectedTripDetails[selectedPlace][currentPage];
            const carousel = [
                {
                    image: place.hasOwnProperty("cover") ? place.cover : `https://source.unsplash.com/1600x900/?${selectedPlace} `
                }
            ];

            return carousel;
        } else return null;
    }

    const imagesData = photosCarousel();

    function handleNextPost() {
        if (currentPage >= selectedTripDetails[selectedPlace].length - 1) {
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage + 1);
        }
    }

    function handlePrevPost() {
        if (currentPage <= 0) {
            setCurrentPage(selectedTripDetails[selectedPlace].length - 1);
        } else {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <div className="d-flex flex-column bg-white customRounding justify-content-between my-3 py-2 px-2 h-100" style={{ maxHeight: "100%" }}>
            <div className="">
                <Col sm={12} md={12} className="py-2">
                    <div className="d-flex flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <div>
                                <Typography variant="h5" color="textPrimary" component="p">
                                    Expedition Details: {posts.selected_trip_country.length > 0 ? posts.selected_trip_country : ""}
                                </Typography>
                            </div>
                            <div className="d-flex align-items-center cursor-pointer" onClick={() => dispatch(allActions.postActions.delete_selected_trip({}))}>
                                <div>
                                    <KeyboardBackspaceIcon />
                                </div>
                                <div>
                                    <Typography color="textPrimary" component="p">
                                        Back
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4" style={{ minWidth: "100%" }}>
                            {imagesData ? (
                                <Carousel showThumbs={false} autoPlay={true} interval={10000} showIndicators={false}>
                                    {imagesData.map((item) => (
                                        <div>
                                            <img src={item.image} alt="No item found" />
                                        </div>
                                    ))}
                                </Carousel>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </Col>

                {selectedTripDetails && Object.keys(selectedTripDetails).length > 0 && selectedPlace !== "" ? (
                    <>
                        <div className="d-flex flex-column justify-content-between">
                            <Col sm={12} md={12} className="py-2 d-flex flex-column">
                                <div className="d-flex flex-row align-items-center">
                                    {/*  <Typography variant="h6" color="textPrimary" component="p">
                                    Details:
                                </Typography>
 */}
                                    <LocationOnOutlinedIcon />
                                    <div>
                                        {selectedPlace}, {selectedCountry}
                                    </div>
                                </div>
                                <div>{selectedTripDetails[selectedPlace][currentPage].content}</div>
                            </Col>
                        </div>

                        <div className="customScrollbar " style={{ overflowY: "scroll" }}>
                            <Col sm={12} md={12} className=""></Col>
                        </div>
                    </>
                ) : (
                    <div>{"No place selected"}</div>
                )}
            </div>
            {Object.keys(selectedTripDetails).length > 0 && selectedPlace !== "" && selectedTripDetails[selectedPlace].length > 1 ? (
                <div className="mb-2">
                    <Col className="d-flex justify-content-between">
                        <div className="d-flex align-items-center cursor-pointer" onClick={() => handlePrevPost()}>
                            <div>
                                <NavigateBeforeOutlinedIcon />
                            </div>
                            <div>Previous Post</div>
                        </div>
                        <div className="d-flex align-items-center cursor-pointer" onClick={() => handleNextPost()}>
                            <div>Next Post</div>
                            <div>
                                <NavigateNextOutlinedIcon />
                            </div>
                        </div>
                    </Col>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
