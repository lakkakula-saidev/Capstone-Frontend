import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../searchPlaces/map";
import NavComponent from "./navComponent";
import FriendsComponent from "./friendsComponent";
import PostComponent from "./postComponent";

export default function SearchPlaces() {
    const [place, setPlace] = useState("");

    return (
        <Container fluid className="bg-light">
            <Row className="px-5">
                <Col sm={3} md={3} className="p-3">
                    <NavComponent />
                </Col>
                <Col sm={6} md={6} className="p-2">
                    <PostComponent />
                </Col>
                <Col sm={3} md={3} className="p-2">
                    <FriendsComponent />
                </Col>
            </Row>
        </Container>
    );
}
