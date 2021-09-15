import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavComponent from "../mainPage/navComponent";
import PreviousTripsComponent from "./previousTripsComponent";
import allActions from "../../actions/index.js";
import TripDetail from "./tripDetail";
import TripDetailCities from "./tripDetailCities";

export default function TripsPage() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user.currentUser);
    const userPosts = useSelector((store) => store.post);

    useEffect(() => {
        dispatch(allActions.postActions.get_user_posts());
    }, []);

    return (
        <Row className="px-5 mainContianerRow">
            {userPosts.loading ? (
                <Spinner animation="border" role="status" />
            ) : (
                <>
                    <Col sm={3} md={3} className="p-3" style={{ maxHeight: "100%" }}>
                        <NavComponent />
                    </Col>
                    <Col sm={6} md={6} className="p-3 mb-3" style={{ maxHeight: "100%", maxWidth: "100%" }}>
                        {userPosts.loading ? <Spinner /> : Object.keys(userPosts.selected_trip_details)?.length > 0 ? <TripDetail /> : <PreviousTripsComponent />}
                    </Col>
                    <Col sm={3} md={3} className="p-3 mb-3" style={{ maxHeight: "100%" }}>
                        {" "}
                        {Object.keys(userPosts.selected_trip_details)?.length > 0 ? <TripDetailCities /> : <> </>}
                    </Col>
                </>
            )}
        </Row>
    );
}

/* {
    Object.keys(userPosts.selected_trip_details)?.length > 0 ? <TripDetail /> : <PreviousTripsComponent />;
} */
