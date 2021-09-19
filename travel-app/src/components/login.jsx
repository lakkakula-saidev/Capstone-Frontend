import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button, Row, Col, Container } from "react-bootstrap";
import BallsAnimation from "./ballsAnime";
import LoginPageAnimation from "./loginPageAnimation";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions/index.js";

export default function Login() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const [firstname, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUserame] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [alreadyUser, setAlreadyUser] = useState(false);
    const [password, setPassword] = useState("");

    useEffect(() => {
        dispatch(allActions.userActions.persist_user_login());

        if (Object.keys(user.currentUser).length > 0 && user.currentUser._id) {
            // All redux store actions are to be performed to get the 'User' and his 'Chat' details
            history.push("/searchPlaces");
        }
    }, []);

    async function handleRegister() {
        dispatch(allActions.userActions.register_User({ firstname, surname, username, city, country, email, password }));

        if (Object.keys(user.currentUser).length > 0 && user.currentUser._id) {
            history.push("/");
        }
        console.log("I am not here..");
    }

    function handleSubmit() {}

    async function handleLogin() {
        dispatch(allActions.userActions.login_User({ email, password }));

        if (Object.keys(user.currentUser).length > 0 && user.currentUser._id) {
            history.push("/");
        }
        console.log("I am not here..");
    }

    async function handleGoogleLogin() {}

    return (
        <>
            {user.loading ? (
                <div className="container">
                    <BallsAnimation />
                </div>
            ) : (
                <div className="container-fluid" style={{ height: "100vh", backgroundColor: "#e3f2fd" }}>
                    <h2 className="font-weight-bold" style={{ position: "absolute", top: "5%", left: "5%" }}>
                        TravCompanion
                    </h2>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className=" py-4 my-5 d-flex flex-column align-items-center justify-content-center ">
                            <Container fluid className=" h-100 w-100">
                                <LoginPageAnimation />
                            </Container>
                        </Col>

                        <Col xs={12} sm={12} md={5} lg={5} className={`${alreadyUser ? "py-4 my-4" : "py-4 my-4"} ml-4`} style={{ height: "80vh" }}>
                            <div className="px-6 mx-5 mt-3 ">
                                <h3 className=" mb-4">Welcome to TravCompanion</h3>
                                <p className={`${alreadyUser ? "" : "d-none"} flex-inline align-items-center`}>If you already have an account in Trav Companion, please sign in below</p>
                                <Form onSubmit={handleSubmit}>
                                    <div className=" p-1">
                                        <div className={`${alreadyUser ? "d-none" : "d-flex"} flex-row space-between `}>
                                            <Form.Group className=" pr-2 flex-grow-1 font-weight-bold" size="" controlId="name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control autoFocus type="name" value={firstname} className="bg-light" onChange={(e) => setFirstName(e.target.value)} />
                                            </Form.Group>
                                            <Form.Group className=" pl-2 flex-grow-1 font-weight-bold" size="" controlId="surname">
                                                <Form.Label>Surname</Form.Label>
                                                <Form.Control className="bg-light" autoFocus type="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                                            </Form.Group>
                                        </div>
                                        <div className={`${alreadyUser ? "d-none" : "d-flex"} flex-row justify-content-between `}>
                                            <Form.Group className={` font-weight-bold ${alreadyUser ? "d-none" : "pr-2 flex-grow-1 font-weight-bold"}`} size="lg" controlId="email">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control className="bg-light" autoFocus type="username" value={username} onChange={(e) => setUserame(e.target.value)} />
                                            </Form.Group>
                                            <Form.Group className="font-weight-bold pl-2 flex-grow-1 font-weight-bold" size="lg" controlId="password">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control className="bg-light" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </Form.Group>
                                        </div>
                                        <div className={`${alreadyUser ? "d-none" : "d-flex"} flex-row space-between `}>
                                            <Form.Group className=" pr-2 flex-grow-1 font-weight-bold" size="" controlId="name">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control autoFocus type="city" value={city} className="bg-light" onChange={(e) => setCity(e.target.value)} />
                                            </Form.Group>
                                            <Form.Group className=" pl-2 flex-grow-1 font-weight-bold" size="" controlId="surname">
                                                <Form.Label>Country</Form.Label>
                                                <Form.Control className="bg-light" autoFocus type="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                                            </Form.Group>
                                        </div>
                                        <Form.Group className="font-weight-bold" size="lg" controlId="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control className="bg-light" autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className={`font-weight-bold pr-2 flex-grow-1 font-weight-bold ${alreadyUser ? "" : "d-none"}`} size="lg" controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control className="bg-light" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </Form.Group>
                                        <p className={`${alreadyUser ? "d-none" : ""} flex-inline align-items-center`}>
                                            <input type="checkbox" aria-label="Checkbox for following text input"></input> Creating an account means you’re okay with our Terms of Service.
                                        </p>
                                    </div>

                                    <Form.Group className="d-flex flex-row justify-content-between">
                                        <Button block variant="outline-success" className={`${alreadyUser ? "d-none " : ""}w-25  py-2 mt-1 mr-2`} type="submit" onClick={() => handleRegister()}>
                                            Register
                                        </Button>
                                        <Button block className={`${alreadyUser ? "" : "d-none  "} btn btn-success py-2 mt-1 ml-2 w-25 `} onClick={() => handleLogin()}>
                                            Log in
                                        </Button>
                                        <Button disabled className={`cursor-pointer py-2 mt-1 ml-2`} onClick={() => handleGoogleLogin()}>
                                            Log in with Google
                                        </Button>{" "}
                                    </Form.Group>
                                </Form>
                                <p className="loginOptions pl-1 d-flex justify-content-start mt-3 align-items-center">
                                    {alreadyUser ? (
                                        <>
                                            Don't have an account?
                                            <strong block className="cursor-pointer py-1 ml-2" onClick={() => setAlreadyUser(false)}>
                                                <u>Register now</u>
                                            </strong>
                                        </>
                                    ) : (
                                        <>
                                            Already a member? Click here to
                                            <strong block className="cursor-pointer py-1 ml-2">
                                                <u onClick={() => setAlreadyUser(true)}>Login</u>
                                            </strong>
                                        </>
                                    )}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            )}
        </>
    );
}
