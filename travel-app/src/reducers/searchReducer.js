import { initialState } from "../store";

export const searchReducer = (state = initialState.search, action) => {

    switch (action.type) {
        case 'ADD_SEARCH_RESULTS':

            return {
                ...state,
                search_result: action.payload
            }
        case 'ADD_HOST_RESULTS':

            return {
                ...state,
                search_hosts: { ...action.payload }
            }
        case 'ADD_CURRENT_SELECTION':

            return {
                ...state,
                current_selection: action.payload
            }
        default:
            return state
    }
}