import {types} from "../types";

const initialState = {
    loading: false,
    posts: []
}

export function postsReducer(state = initialState, action) {
    switch (action.type) {
            case types.SET_POSTS:
                return {
                    ...state,
                    posts: action.payload
            }
            case types.ON_LOADING:
                return {
                    ...state,
                    loading: true
                }

            case types.OFF_LOADING:
                return {
                    ...state,
                    loading: false
            }
        default: return state
    }
}