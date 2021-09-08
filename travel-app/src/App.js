import './App.css';
import './components/searchPlaces/styles.css'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import LoginPage from './components/login.jsx'
import MainPage from './components/mainPage/index.jsx'
import TripsPage from './components/tripsPage/index.jsx'
import Navbar from './components/navBar'
import SearchPlaces from './components/searchPlaces/index.jsx'
import { Container } from 'react-bootstrap';

export default function App() {


  axios.defaults.withCredentials = true
  const user = useSelector(state => state.user)
  const history = useHistory();
  const endpoint = process.env.REACT_APP_BACK_URL;
  const loggedIn = user.loggedIn


  useEffect(() => {
    setInterval(() => {

      if (loggedIn) {
        axios.post(endpoint + "/user/refreshToken", { withCredentials: true });
        console.log("beep")
      }
    }, 1000 * 60 * 10);
  }, [loggedIn])


  if (!user.currentUser._id) {
    console.log(!user.currentUser._id)
    return <Router>
      <Route render={routerProps => <LoginPage {...routerProps} />} exact path='/' />
    </Router>
  } else {

    return (
      <HashRouter>
        <Container fluid className="mainContainer px-0">
          <Navbar />
          <Switch>
            <Route render={routerProps => <MainPage {...routerProps} />} exact path='/' />
            <Route render={routerProps => <SearchPlaces {...routerProps} />} exact path='/search' />
            <Route render={routerProps => <TripsPage {...routerProps} />} exact path='/trips' />
          </Switch>
        </Container>
      </HashRouter>
    );
  }


}





