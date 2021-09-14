import { initialState } from "../store";

export const postReducer = (state = initialState.post, action) => {

    switch (action.type) {
        case 'SET_ALL_POSTS': // no update user? no need i guess

            return {
                ...state,
                posts: action.payload
            }
        case 'SET_NEW_USER_POST':
            return {
                ...state,
                user_new_post: action.payload
            }
        case 'SET_ALL_USER_POSTS':
            return {
                ...state,
                user_posts: action.payload
            }

        case 'SET_SELECTED_TRIP':
            return {
                ...state,
                selected_trip_details: action.payload
            }
        case 'SET_SELECTED_TRIP_COUNTRY':
            return {
                ...state,
                selected_trip_country: action.payload
            }
        case 'SET_SELECTED_PLACE':
            return {
                ...state,
                selected_place: action.payload
            }


        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}