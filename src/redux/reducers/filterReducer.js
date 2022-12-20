import { FILTER_BLOG } from "../actionTypes/actionTypes";

const initialState = {
    category: "",
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BLOG:
            return {
                ...state,
                category: action.payload,
            }
    }
    return state
}
export default filterReducer;