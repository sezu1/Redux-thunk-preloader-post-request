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
            case types.SET_LOADING:
                return {
                    ...state,
                    loading: true
                }

        case types.STOP_LOADING:
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}