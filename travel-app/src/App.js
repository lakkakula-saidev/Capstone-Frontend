import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import LoginPage from './components/login.jsx'
import MainPage from './components/mainPage/index.jsx'
import Navbar from './components/navBar'
import SearchPlaces from './components/searchPlaces/index.jsx'

export default function App() {


  axios.defaults.withCredentials = true
  const user = useSelector(state => state.user)

  const history = useHistory();
  const endpoint = process.env.REACT_APP_BACK_URL;

  /*   useEffect(() => {
      setInterval(() => {
        axios.post(endpoint + "/users/refreshToken", { withCredentials: true });
        console.log("beep")
      }, 1000 * 60 * 5);
    }, []) */



  if (!user.currentUser._id) {
    console.log(!user.currentUser._id)
    return <Router>
      <Route render={routerProps => <LoginPage {...routerProps} />} path='/' />
    </Router>
  } else {

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route render={routerProps => <MainPage {...routerProps} />} exact path='/' />
            <Route render={routerProps => <SearchPlaces {...routerProps} />} exact path='/search' />
          </Switch>
        </div>
      </Router>
    );
  }


}





