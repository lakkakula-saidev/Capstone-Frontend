import { useState } from "react";
import { Container } from "react-bootstrap";
import "./styles.css";

export default function SearchOptions() {
    return (
        <div>
            <Container>
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
                </div>
            </Container>
        </div>
    );
}
