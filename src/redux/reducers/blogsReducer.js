import { DELETE_BLOG, FETCHIN_START, FETCH_BLOGS } from "../actionTypes/actionTypes";

const initialState = {
    loading: false,
    blogs: [],
    blog: {},
    error: ""
}
const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHIN_START:
            return {
                ...state,
                loading: true,
            }
        case FETCH_BLOGS:
            return {
                ...state,
                loading: true,
                blogs: action.payload,
                error: ""
            }
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload)
            }
        default:
            return state
    }
}
export default blogsReducer;