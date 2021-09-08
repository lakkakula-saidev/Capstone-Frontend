import axios from 'axios'


const new_connection = (data) => {
    return async (dispatch) => {


        const endpoint = process.env.REACT_APP_BACK_URL;
        let response;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.post(endpoint + '/user/me/newConnection', data, { withCredentials: true });

            if (response) {

                dispatch({
                    type: 'SET_USER',
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

const accept_connection = (data) => {
    return async (dispatch) => {


        const endpoint = process.env.REACT_APP_BACK_URL;
        let response;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.post(endpoint + '/user/me/acceptConnection', data, { withCredentials: true });

            if (response) {

                dispatch({
                    type: 'SET_USER',
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

const reject_connection = (data) => {
    return async (dispatch) => {


        const endpoint = process.env.REACT_APP_BACK_URL;
        let response;
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            response = await axios.post(endpoint + '/user/me/rejectConnection', data, { withCredentials: true });

            if (response) {

                dispatch({
                    type: 'SET_USER',
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

export default { new_connection, accept_connection, reject_connection }
