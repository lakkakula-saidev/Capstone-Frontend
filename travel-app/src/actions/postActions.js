import axios from 'axios'


const new_post = (data) => {
    return async (dispatch) => {


        const endpoint = process.env.REACT_APP_BACK_URL;
        let response;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.post(endpoint + '/posts', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }, { withCredentials: true });

            if (response) {

                dispatch({
                    type: 'SET_NEW_USER_POST',
                    payload: response.data
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


const get_all_posts = (data) => {
    return async (dispatch) => {


        const endpoint = process.env.REACT_APP_BACK_URL;
        let response;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.get(endpoint + '/posts', data, { withCredentials: true });

            if (response) {

                dispatch({
                    type: 'SET_ALL_POSTS',
                    payload: response.data
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


const get_user_posts = (data) => {
    return async (dispatch) => {


        const endpoint = process.env.REACT_APP_BACK_URL;
        let response;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.get(endpoint + '/posts/me', data, { withCredentials: true });

            if (response) {
                console.log(response)
                dispatch({
                    type: 'SET_ALL_USER_POSTS',
                    payload: response.data
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


export const set_selected_trip = (data) => {

    return async (dispatch) => {

        const endpoint = process.env.REACT_APP_BACK_URL;
        let response;
        try {

            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.get(endpoint + `/posts/me/country?country=${data}`, { withCredentials: true });

            if (response) {
                const city = Object.keys(response.data)
                dispatch({
                    type: 'SET_SELECTED_TRIP',
                    payload: response.data
                })
                dispatch({
                    type: 'SET_SELECTED_TRIP_COUNTRY',
                    payload: data
                })
                dispatch({
                    type: 'SET_SELECTED_PLACE',
                    payload: city[0]
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


export const set_selected_place = (data) => {

    return async (dispatch) => {

        console.log(data)
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            dispatch({
                type: 'SET_SELECTED_PLACE',
                payload: data
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


export const delete_selected_trip = (data) => {

    return async (dispatch) => {


        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            dispatch({
                type: 'SET_SELECTED_TRIP',
                payload: {}
            })
            dispatch({
                type: 'SET_SELECTED_PLACE',
                payload: ''
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




export default { new_post, get_all_posts, get_user_posts, set_selected_trip, delete_selected_trip, set_selected_place }
