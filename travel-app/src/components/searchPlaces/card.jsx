import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { StarHalf } from "react-bootstrap-icons";

export default function CardComponent() {
    return (
        <Card style={{ width: "100%" }} className="border-0 mb-4">
            <Card.Img variant="top" src="https://source.unsplash.com/random" className="cardImage" />
            <div className="d-flex flex-column mt-3">
                <div className="d-flex justify-content-between mb-2 align-items-center">
                    <div className="font-weight-bold">Host Name</div>
                    <div className="d-flex justify-content-between align-items-center">
                        <StarHalf />
                        <div className="ml-1">5.0</div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
