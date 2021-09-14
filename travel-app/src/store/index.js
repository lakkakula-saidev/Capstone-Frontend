import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { userReducer } from '../reducers/userReducer.js'
import { chatReducer } from '../reducers/chatReducer'
import { searchReducer } from '../reducers/searchReducer'
import thunk from "redux-thunk";
import { postReducer } from "../reducers/postReducer.js";

export const initialState = {

    user: {
        currentUser: {},
        loggedIn: false,
        loading: true,
        error: false
    },
    chat: {
        prev_chat_rooms: [],
        current_chat_room: {},
        chat_history: [],
        new_connection: false,
        loading: false,
        error: false
    },
    post: {
        posts: [],
        user_new_post: {},
        user_posts: [],
        selected_trip_details: {},
        selected_trip_country: '',
        selected_place: '',
        loading: false,
        error: false
    },
    search: {
        query: '',
        search_hosts: {},
        search_hosts_loading: false,
        search_result: [],
        current_selection: [],
        loading: false,
        error: false
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combineReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    search: searchReducer,
    post: postReducer,

})

const configureStore = () => createStore(combineReducer, composeEnhancers(applyMiddleware(thunk)))

export default configureStore