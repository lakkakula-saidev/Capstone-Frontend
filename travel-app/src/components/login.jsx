import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button, Row, Col, Spinner } from "react-bootstrap";
import LoadingAnimation from "./loadingAnime";
import BallsAnimation from "./ballsAnime";
import LogoAnimation from "./logoAnimation";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions/index.js";

const endpoint = process.env.REACT_APP_BACK_URL;

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
                <div className="container">
                    <Row>
                        <Col md={4}></Col>
                        <Col xs={8} md={7}>
                            <p className="loginOptions pl-1 d-flex justify-content-end  mt-3 align-items-center">
                                {alreadyUser ? (
                                    <>
                                        Not a member?
                                        <button block className="btn btn-secondary py-1 ml-2" onClick={() => setAlreadyUser(false)}>
                                            Register
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        Already a member?
                                        <button block className="btn btn-secondary py-1 ml-2" onClick={() => setAlreadyUser(true)}>
                                            Login
                                        </button>
                                    </>
                                )}
                            </p>
                            <div className="px-6 mx-5 mt-3 ">
                                <h2 className="font-weight-bold mb-4" style={{ width: "250px" }}>
                                    Register now...
                                </h2>
                                <Form onSubmit={handleSubmit}>
                                    <div className=" p-1 bg-white">
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
                                        <Form.Group className={` font-weight-bold ${alreadyUser ? "d-none" : ""}`} size="lg" controlId="email">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control className="bg-light" autoFocus type="username" value={username} onChange={(e) => setUserame(e.target.value)} />
                                        </Form.Group>
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
                                        <Form.Group className="font-weight-bold" size="lg" controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control className="bg-light" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </Form.Group>
                                        <p className={`${alreadyUser ? "d-none" : ""} flex-inline align-items-center`}>
                                            <input type="checkbox" aria-label="Checkbox for following text input"></input> Creating an account means you’re okay with our Terms of Service, Privacy
                                            Policy, and our default Notification Settings.
                                        </p>
                                    </div>

                                    <Form.Group className="d-flex">
                                        <Button block variant="outline-success" className={`${alreadyUser ? "d-none flex-grow-1" : ""}  py-2 mt-1 mr-2`} type="submit" onClick={() => handleRegister()}>
                                            Register
                                        </Button>
                                        <Button block className={`${alreadyUser ? "" : "d-none flex-grow-1 "} btn btn-success py-2 mt-1 ml-2`} onClick={() => handleLogin()}>
                                            Log in
                                        </Button>

                                        <Button block disabled className={` py-2 mt-1 ml-2`} onClick={() => handleGoogleLogin()}>
                                            Log in with Google
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            )}
        </>
    );
}
