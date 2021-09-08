import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavComponent from "../mainPage/navComponent";
import PreviousTripsComponent from "./previousTripsComponent";
import allActions from "../../actions/index.js";
import TripDetail from "./tripDetail";

export default function TripsPage() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user.currentUser);

    useEffect(() => {
        dispatch(allActions.postActions.get_user_posts());
    }, []);

    return (
        <Row className="px-5 mainContianerRow">
            <Col sm={3} md={3} className="p-3" style={{ maxHeight: "100%" }}>
                <NavComponent />
            </Col>
            <Col sm={6} md={6} className="p-2" style={{ maxHeight: "100%" }}>
                <PreviousTripsComponent />
            </Col>
            <Col sm={3} md={3} className="p-2" style={{ maxHeight: "100%" }}>
                <TripDetail />
            </Col>
        </Row>
    );
}
