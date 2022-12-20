import { loadBlogs } from "../../actionCreators/blogsAction";

const fetchBlogs = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/blogs');
        const blogs = await res.json();
        if (blogs.length) {
            dispatch(loadBlogs(blogs))
        }
    }
}
export default fetchBlogs