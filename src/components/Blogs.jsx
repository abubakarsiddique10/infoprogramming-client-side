import { useSelector } from "react-redux";
import Blog from "./BLog";

const Blogs = () => {
    const { blogs: { blogs, loading }, filter } = useSelector(state => state);

    let content;

    if (loading) {
        content = <p>Loading..</p>
    }
    if (blogs.length) {
        content = blogs.map(blog => <Blog key={blog._id} blog={blog} />)
    }
    if (filter.category) {
        content = blogs
            .filter(blog => blog.category === filter.category)
            .map(blog => <Blog key={blog._id} blog={blog} />);
    }
    if (filter.category === "reset") {
        content = blogs.map(blog => <Blog key={blog._id} blog={blog} />)
    }
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content}
                </div>
            </div>
        </>
    )
}
export default Blogs;