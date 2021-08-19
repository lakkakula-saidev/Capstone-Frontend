import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./map";
import Hosts from "./hosts";

import SearchOptions from "./searchOptions";

export default function SearchPlaces() {
    const [place, setPlace] = useState("");

    return (
        <Container fluid>
            <Row className="px-5">
                <Col sm={3} md={3} className="p-3">
                    <SearchOptions />
                </Col>
                <Col sm={6} md={6} className="p-2">
                    <Map />
                </Col>
                <Col sm={3} md={3} className="p-2">
                    <Hosts />
                </Col>
            </Row>
        </Container>
    );
}
