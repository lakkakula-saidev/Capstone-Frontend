import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./map";
import Hosts from "./hosts";

import SearchOptions from "./searchOptions";

export default function SearchPlaces() {
    const [place, setPlace] = useState("");

    return (
        <Row className="px-5 mainContianerRow">
            <Col sm={4} md={4} className="p-3" style={{ maxHeight: "100%" }}>
                <SearchOptions />
            </Col>
            <Col sm={5} md={5} className="p-4 mt-2" style={{ maxHeight: "100%" }}>
                <Map />
            </Col>
            <Col sm={3} md={3} className="p-3" style={{ maxHeight: "100%" }}>
                <Hosts />
            </Col>
        </Row>
    );
}
