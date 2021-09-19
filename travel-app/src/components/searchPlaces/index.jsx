import { Row, Col } from "react-bootstrap";
import Map from "./map";
import Hosts from "./hosts";

import SearchOptions from "./searchOptions";

export default function SearchPlaces() {
    return (
        <Row className=" mainContianerRow ">
            <Col sm={4} md={4} className="spx-2" style={{ maxHeight: "100%" }}>
                <SearchOptions />
            </Col>
            <Col sm={5} md={5} className="py-4 px-2 mt-2" style={{ maxHeight: "100%" }}>
                <Map />
            </Col>
            <Col sm={3} md={3} className="py-4 " style={{ maxHeight: "100%" }}>
                <Hosts />
            </Col>
        </Row>
    );
}
