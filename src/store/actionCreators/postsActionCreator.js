import {types} from "../types";


function setPostActionCreators(data){
    return {
        type: types.SET_POSTS,
        payload: data
    }
}

function getPostsActionCreators(postData) {
    return async function (dispatch) {
        dispatch(setLoader())
        try {
            const response = await fetch("http://localhost:8000/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postData)
            });

        const data = await response.json();
        console.log(data)
        dispatch(setPostActionCreators(data))
    }
    catch (error) {
        console.log(error)
    }
    finally {
        dispatch(stopLoader())
    }
}}



function setLoader(){
    return{
        type: types.SET_LOADING
    }
}

function stopLoader(){
    return{
        type: types.STOP_LOADING
    }
}

export {getPostsActionCreators, setPostActionCreators, stopLoader, setLoader};