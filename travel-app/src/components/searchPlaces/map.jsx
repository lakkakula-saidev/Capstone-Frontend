import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";
import { Container } from "react-bootstrap";

const MapsKey = process.env.REACT_APP_MAPS_KEY;

const containerStyle = {
    width: "100%",
    height: "100%",
    marginTop: "2rem",
    borderRadius: "20px"
};

const center = {
    lat: -3.745,
    lng: -38.523
};

export default function Map() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <LoadScript googleMapsApiKey={MapsKey}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                {/* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    );
}
