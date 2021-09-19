import React from "react";
import { Container } from "react-bootstrap";
import Posts from "./posts";
import NewPost from "./newPost";

export default function PostComponent() {
    return (
        <Container className="h-100 customScrollbar" style={{ overflowY: "scroll" }}>
            <div className="d-flex w-100 mt-4">
                <NewPost />
            </div>
            <div className="d-flex w-100 mt-4">
                <Posts />
            </div>
        </Container>
    );
}
