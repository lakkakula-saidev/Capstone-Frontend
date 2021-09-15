import axios from 'axios'


const search_Place = (query) => {
    return async (dispatch) => {

        const endpoint = process.env.REACT_APP_BACK_URL;
        let response;
        try {
            dispatch({
                type: 'SEARCH_HOSTS_LOADING',
                payload: true,
            })

            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.get(endpoint + '/places?city=' + query, { withCredentials: true });

            if (response) {
                console.log(response.data)
                dispatch({
                    type: 'ADD_SEARCH_RESULTS',
                    payload: response.data.google
                })
                dispatch({
                    type: 'ADD_HOST_RESULTS',
                    payload: response.data.hosts
                })
                dispatch({
                    type: 'SEARCH_HOSTS_LOADING',
                    payload: false,
                })
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
            }
            else {
                console.log('Error has Occured!!')
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: true,
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            dispatch({
                type: 'SET_ERROR',
                payload: true,
            })
        }
    }
}


const set_current_selection = (place) => {
    return async (dispatch) => {


        const endpoint = process.env.REACT_APP_BACK_URL;
        let response;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.get(endpoint + '/places/' + place.place_id, { withCredentials: true });
            console.log(response)
            if (response) {

                dispatch({
                    type: 'ADD_CURRENT_SELECTION',
                    payload: response.data.result
                })
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
            }
            else {
                console.log('Error has Occured!!')
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: true,
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            dispatch({
                type: 'SET_ERROR',
                payload: true,
            })
        }
    }
}

export const set_query = (data) => {

    return async (dispatch) => {

        console.log(data)
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            dispatch({
                type: 'ADD_QUERY',
                payload: data
            })
            dispatch({
                type: 'ADD_CURRENT_SELECTION',
                payload: {}
            })

            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
        } catch (error) {

            console.log(error);
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            dispatch({
                type: 'SET_ERROR',
                payload: true,
            })
        }
    }
}

export default { search_Place, set_current_selection, set_query }

/*
"/users?firstname=/^" */