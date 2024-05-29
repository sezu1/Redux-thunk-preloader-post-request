import {types} from "../types";

function setPostsActionCreators(postData) {
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
        type: types.ON_LOADING
    }
}

function stopLoader(){
    return{
        type: types.OFF_LOADING
    }
}

export {setPostsActionCreators, stopLoader, setLoader};