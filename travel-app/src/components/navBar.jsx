import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

export default function Navbar() {
    const [address, setAddress] = useState("");

    const handleSelect = async (value) => {};

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <input {...getInputProps({ placeholder: "Search" })} aria-label="Search" />
                                <div>
                                    {loading ? <div>...loading</div> : null}
                                    {suggestions.map((suggestion) => {
                                        const style = { backgroundColor: suggestion.active ? "blue" : "white" };
                                        return <div {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>;
                                    })}
                                </div>
                            </div>
                        )}
                    </PlacesAutocomplete>
                </div>
            </nav>
        </div>
    );
}

<Autocomplete
    id="combo-box-demo"
    options={top100Films}
    getOptionLabel={(option) => option.title}
    style={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
/>;
