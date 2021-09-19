import { Row, Col } from "react-bootstrap";
import NavComponent from "./navComponent";
import FriendsComponent from "./friendsComponent";
import PostComponent from "./postComponent";

export default function SearchPlaces() {
    return (
        <Row className="px-5 mainContianerRow">
            <Col sm={3} md={3} className="p-3" style={{ maxHeight: "100%" }}>
                <NavComponent />
            </Col>
            <Col sm={7} md={7} className="p-2" style={{ maxHeight: "100%" }}>
                <PostComponent />
            </Col>
            <Col sm={2} md={2} className="p-2" style={{ maxHeight: "100%" }}>
                <FriendsComponent />
            </Col>
        </Row>
    );
}
