import { loadBlogs } from "../../actionCreators/blogsAction";

const fetchBlogs = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://infoprogramming-server-side.onrender.com/blogs');
        const blogs = await res.json();
        if (blogs.length) {
            dispatch(loadBlogs(blogs))
        }
    }
}
export default fetchBlogs