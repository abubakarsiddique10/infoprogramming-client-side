import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Blogs from "../../components/Blogs";
import { FETCHIN_START } from "../../redux/actionTypes/actionTypes";
import fetchBlogs from "../../redux/thunk/blogs/blogs";
import Filter from "./Filter";
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: FETCHIN_START })
        dispatch(fetchBlogs())
    }, [])
    return (
        <>
            <Filter />
            <Blogs />
        </>
    )
}
export default Home;