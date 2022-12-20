import { DELETE_BLOG, FETCH_BLOGS, FILTER_BLOG } from "../actionTypes/actionTypes"

export const loadBlogs = (blogs) => {
    return {
        type: FETCH_BLOGS,
        payload: blogs
    }
}

export const deleteBlog = (id) => {
    return {
        type: DELETE_BLOG,
        payload: id,
    }
}

export const filterBlog = (category) => {
    return {
        type: FILTER_BLOG,
        payload: category,
        status: true,
    }
}