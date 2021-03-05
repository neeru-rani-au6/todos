import axios from 'axios'
import setAuthToken from '../helper/setAuthToken'
import jwt_decode from 'jwt-decode'


const urlHelper = "http://localhost:5000/api/v1"

// const urlHelper = "https://keep-contacts.herokuapp.com/api/v1"

export const userLoginHelper = (data) => {
    return {
        type: "SET_USER",
        payload: data
    }
}

const userLogoutHelper = (data) => {
    return {
        type: "DELETE_USER",
        payload: data
    }
}

const setLoader = (data) => {
    return {
        type: "SET_LOADER",
        payload: data
    }
}


export const setSuccess = (data)=>{
    return {
        type: "SET_SUCCESS",
        payload: data
    }
}

export const userRegister = (userData,history) => {
    return async (dispatch) => {
        try {
            dispatch(setLoader(true))
            const { data } = await axios({
                method: "Post",
                url: `${urlHelper}/user/register`,
                data: userData
            })
            const { token } = data
            localStorage.setItem('userJwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(userLoginHelper(decoded))
            history.push('/home')
        }
        catch (err) {
            dispatch({
                type: "SET_USER_REGISTER_ERRORS",
                payload: err.response.data
            })
            dispatch(setLoader(false))
            console.log("Error in userRegister Action", err.message)
        }

    }
}

export const userLogin = (userData, history) => {
    return async (dispatch) => {
        try {
            dispatch(setLoader(true))
            const { data } = await axios({
                method: "Post",
                url: `${urlHelper}/user/login`,
                data: userData
            })
            const { token } = data
            localStorage.setItem('userJwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(userLoginHelper(decoded))
            history.push('/home')
        }
        catch (err) {
            // dispatch({
            //     type: "SET_USER_LOGIN_ERRORS",
            //     payload: err.response.data
            // })
            dispatch(setLoader(false))
            console.log("Error in userLogin Action", err.message)
        }
    }
}

export const addBucket = (bucketData) => {
    return async (dispatch) => {
        try {
            dispatch(setLoader(true))
            const { data } = await axios({
                method: "Post",
                url: `${urlHelper}/bucket`,
                data: bucketData
            })
            dispatch(setLoader(false))
            if (data.success) {
                dispatch({
                    type: "SET_BUCKET",
                    payload: data.response
                })
                dispatch(setSuccess(true))
                dispatch(setSuccess(false))
            }
            else {
                alert("Error in add user")
            }
        }
        catch (err) {
            dispatch(setLoader(false))
            console.log("Error in addUser Action", err.message)
        }
    }
}

export const addTodo = (bucketId, todo) => {
    return async (dispatch) => {
        try {
            dispatch(setLoader(true))
            const { data } = await axios({
                method: "Post",
                url: `${urlHelper}/todo/${bucketId}`,
                data: todo
            })
            dispatch(setLoader(false))
            if (data.success) {
                dispatch({
                    type: "SET_TODOS",
                    payload: data.response
                })
                dispatch(setSuccess(true))
                dispatch(setSuccess(false))
            }
            else {
                alert("Error in add todo")
            }
        }
        catch (err) {
            dispatch(setLoader(false))
            console.log("Error in addtodo Action", err.message)
        }
    }
}


export const updateTodo = (bucketId,todo) => {
    return async (dispatch) => {
        try {
            dispatch(setLoader(true))
            const { data } = await axios({
                method: "Put",
                url: `${urlHelper}/todo/${bucketId}`,
                data: todo
            })
            dispatch(setLoader(false))
            if (data.success) {
                dispatch({
                    type: "SET_TODOS",
                    payload: data.response
                })
                dispatch(setSuccess(true))
                dispatch(setSuccess(false))
            }
            else {
                alert("Error in update todo")
            }
        }
        catch (err) {
            dispatch(setLoader(false))
            console.log("Error in updatetodo Action", err.message)
        }
    }
}

export const deleteTodo = (bucketId, todoId) => {
    return async (dispatch) => {
        try {
            dispatch(setLoader(true))
            const { data } = await axios({
                method: "Delete",
                url: `${urlHelper}/todo/${bucketId}/${todoId}`,
            })
            dispatch(setLoader(false))
            if (data.success) {
                dispatch({
                    type: "SET_TODOS",
                    payload: data.response
                })
                dispatch(setSuccess(true))
                dispatch(setSuccess(false))
            }
            else {
                alert("Error in delte todo")
            }
        }
        catch (err) {
            dispatch(setLoader(false))
            console.log("Error in delete todo Action", err.message)
        }
    }
}

export const deleteBucket = (bucketId) => {
    return async (dispatch) => {
        try {
            dispatch(setLoader(true))
            const { data } = await axios({
                method: "Delete",
                url: `${urlHelper}/bucket/${bucketId}`,
            })
            dispatch(setLoader(false))
            if (data.success) {
                dispatch({
                    type: "DELETE_BUCKET",
                    payload: data.response
                })
                dispatch(setSuccess(true))
                dispatch(setSuccess(false))
            }
            else {
                alert("Error in delte todo")
            }
        }
        catch (err) {
            dispatch(setLoader(false))
            console.log("Error in delete todo Action", err.message)
        }
    }
}


export const getBuckets = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoader(true))
            const { data } = await axios({
                method: "Get",
                url: `${urlHelper}/bucket`,
            })
            dispatch(setLoader(false))
            if (data.success) {
                dispatch({
                    type: "SET_BUCKETS",
                    payload: data.response
                })
            }
            else {
                alert("Error in getBuckets")
            }
        }
        catch (err) {
            dispatch(setLoader(false))
            console.log("Error in getBuckets Action", err.message)
        }
    }
}

export const getTodos = (bucketId)=>{
    return async(dispatch)=>{
        try{
            dispatch(setLoader(true))
            const { data } = await axios({
                method: "Get",
                url: `${urlHelper}/bucket/${bucketId}`,
            })
            dispatch(setLoader(false))
            if (data.success) {
                dispatch({
                    type: "SET_TODOS",
                    payload: data.response
                })
            }
            else {
                alert("Error in getTodos")
            }
        }
        catch(err){
            dispatch(setLoader(false))
            console.log("Error in getTodos Action", err.message)
        }
    }

}




export const userLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('userJwtToken');
        setAuthToken(false);
        dispatch(userLogoutHelper({}));
        dispatch(setLoader(false))
    }
}