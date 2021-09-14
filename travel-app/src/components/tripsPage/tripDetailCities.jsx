import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, AccordionDetails, AccordionSummary, Box, Badge } from "@material-ui/core";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import allActions from "../../actions";

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

export default function TripDetailCities() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedTripPlaces = useSelector((store) => Object.keys(store.post.selected_trip_details));
    const selectedTripDetails = useSelector((store) => store.post.selected_trip_details);
    const selectedPlace = useSelector((store) => store.post.selected_place);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function setSelectedPlace(e, place) {
        dispatch(allActions.postActions.set_selected_place(place));
    }

    return (
        <div className="d-flex flex-column customRounding my-2 py-2 px-2 " style={{ maxHeight: "100%" }}>
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <div className="d-flex w-100 justify-content-between align-items-center px-2">
                        <div className="d-flex flext-start align-items-center">
                            <div className="px-2">
                                <LocationCityIcon />
                            </div>
                            <Box component="span" className={classes.divElement}>
                                <Typography variant="h6" color="textPrimary" component="p">
                                    Cities Visited
                                </Typography>
                            </Box>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="w-100">
                        {selectedTripPlaces !== null && selectedTripPlaces.length > 0
                            ? selectedTripPlaces.map((place) => {
                                  console.log(selectedPlace);
                                  return (
                                      <div
                                          className="pb-2 cursor-pointer hoverClass px-2"
                                          id={place}
                                          key={place}
                                          style={{ backgroundColor: selectedPlace === place ? "#9fa8da" : "white" }}
                                          onClick={(e) => setSelectedPlace(e, place)}
                                      >
                                          <div className="d-flex justify-content-between align-items-center py-2">
                                              <div className="d-flex justify-content-start align-items-center">
                                                  <div>{place}</div>
                                              </div>
                                              <div className="pr-1">
                                                  <Badge badgeContent={selectedTripDetails[place].length} color="primary" />
                                              </div>
                                          </div>
                                      </div>
                                  );
                              })
                            : "No contact yet"}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
