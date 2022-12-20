import React from "react";
import { FaAngleDoubleRight, FaUser, FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
    const navigate = useNavigate()
    const { author, title, _id, description, imgUrl, date, category } = blog;

    return (
        <div onClick={() => navigate(`/blogdetails/${_id}`)} className="card bg-base-100 shadow p-10 rounded-md">
            <figure className="cursor-pointer">
                <img src={imgUrl} alt="Album" />
            </figure>
            <div className="mt-3">
                <h2 className="card-title mb-0.5">
                    {title?.length > 30 ? title.slice(0, 27) + "..." : title}
                </h2>
                <p>
                    {description}
                </p>
                <button
                    className="mt-1 btn btn-link px-0 no-underline">Read More <FaAngleDoubleRight className="ml-1" />
                </button>

                <div className="flex gap-5 mt-2">
                    <div className="flex items-center gap-1.5">
                        <FaUser />
                        <span> By {author}</span>
                    </div>
                    <div className="flex items-center gap-1.5 ">
                        <FaRegCalendarAlt />
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog