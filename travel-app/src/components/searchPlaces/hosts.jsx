import { useState } from "react";
import Card from "./card";
import { Container, Row, Col } from "react-bootstrap";

export default function Hosts() {
    const [place, setPlace] = useState("");

    return (
        <Container>
            <div className="d-flex justify-content-between my-4 align-items-center">
                <div className="font-weight-bold">16 Hosts</div>
                <div className="input-group-text border-0 bg-transparent">
                    <input type="checkbox" aria-label="Checkbox for following text input" />
                </div>
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
        </Container>
    );
}
