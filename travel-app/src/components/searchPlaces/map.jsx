import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { Spinner } from "react-bootstrap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions/index.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
});

const MapsKey = process.env.REACT_APP_MAPS_KEY;

const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "20px"
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const photos_Endpoint = process.env.REACT_APP_PHOTO_URL;
const placesKey = process.env.REACT_APP_GOOGLE_PLACES_KEY;

export default function Map() {
    const classes = useStyles();
    const result = useSelector((store) => store.search);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const dispatch = useDispatch();
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
    });

    const user = useSelector((store) => store.user.currentUser);

    useEffect(() => {
        console.log("I am here... 1");
        if (result.search_result.length === 0 && result.query.length === 0) {
            console.log("I am here... 2");
            dispatch(allActions.searchActions.search_Place(`${user.city}, ${user.country}`));
        }
    }, []);

    async function handlePlaceSelection(place) {
        setSelectedPlace(place);
        console.log(place);

        dispatch(allActions.searchActions.set_current_selection(place));
    }

    const renderMap = () => {
        return (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={
                    selectedPlace !== null
                        ? { lat: selectedPlace?.geometry.location.lat, lng: selectedPlace?.geometry.location.lng }
                        : { lat: result?.search_result[0].geometry.location.lat, lng: result?.search_result[0].geometry.location.lng }
                }
                zoom={10}
            >
                {result.search_result.map((place) => (
                    <Marker key={place.place_id} position={{ lat: place.geometry.location.lat, lng: place.geometry.location.lng }} onClick={() => handlePlaceSelection(place)} />
                ))}
                {selectedPlace && (
                    <InfoWindow position={{ lat: selectedPlace.geometry.location.lat, lng: selectedPlace.geometry.location.lng }} onCloseClick={() => setSelectedPlace(null)}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={selectedPlace.hasOwnProperty("photos") ? photos_Endpoint + `=${selectedPlace.photos[0].photo_reference}&maxwidth=1000&key=${placesKey}` : ""}
                                    title=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {selectedPlace.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {selectedPlace.formatted_address}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </InfoWindow>
                )}
            </GoogleMap>
        );
    };

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>;
    }

    return isLoaded && result.search_result.length > 0 ? renderMap() : <Spinner />;
}
