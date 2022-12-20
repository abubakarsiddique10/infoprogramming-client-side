import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import img from "../assets/blogs-img/coding.jpg";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then(res => res.json())
            .then(blog => setBlog(blog))
    }, [])

    return (
        <div className="container">
            <div className="card bg-base-100 shadow p-10 rounded-md">
                <figure className="cursor-pointer"><img src={blog.imgUrl} alt="Album" /></figure>
                <div className="mt-3 mb-7">
                    <h2 className="card-title mb-0.5 text-4xl font-bold mb-2">{blog.title}</h2>

                    <div className="flex gap-5 mt-2">
                        <div className="flex items-center gap-1.5">
                            <FaUser />
                            <span> By Jhankar Mahbub</span>
                        </div>
                        <div className="flex items-center gap-1.5 ">
                            <FaRegCalendarAlt />
                            <span>12 Dec 2022</span>
                        </div>
                    </div>
                </div>

                <div className="font-medium">
                    <h3 className="text-2xl font-bold mb-2">Must-1: There is no perfect way to learn</h3>
                    <p>Some will say, watch YouTube tutorials. Others might say, read those books. Someone else may say, read blogs on that website.
                        I say, there is no perfect way to learn. Whatever anyone recommends, check it out. If you like it, continue. If you don't like it, Google it or search on YouTube or any mobile app store and find other ways to learn. Once you have tried out multiple ways for a few weeks, you will find out your own way to learn. So, don't try to fit hard on other's way, instead, build your own way to learn. That way, you will learn better!</p>

                    <h3 className="text-2xl font-bold mb-2 mt-10">Must-2: Select a programming language, but don't stick to it</h3>
                    <p>It doesn't matter how robust your plan is, it will not work. Things will not get done according to your plan. So, don't get frustrated. Just make sure that you are learning something new every day. Invest at least 2 to 4 hours every day. So, don't go for plan, go for persuasion, patience and punctuality. If you can do it, no one can stop you.</p>

                    <h3 className="text-2xl font-bold mb-2 mt-10">Must-3: Select a programming language, but don't stick to it</h3>
                    <p>
                        <p>In my journey, I started with PHP. After a few weeks, a friend of mine convinced me to switch to Java. Then, a teacher told to learn C#. After using C# in my first job for six months, I switched to Javascript. I used Javascript for 6 years, and then, last year I moved to Python.</p>
                        <img className="w-96 mx-auto my-10" src="https://miro.medium.com/max/700/1*--TiQaKSW0gsbg9n7Oq45A.png" />
                    </p>

                    <h3 className="text-2xl font-bold mb-2 mt-10">Must-4: Your plan and timeline will not work</h3>
                    <p>It doesn't matter how robust your plan is, it will not work. Things will not get done according to your plan. So, don't get frustrated. Just make sure that you are learning something new every day. Invest at least 2 to 4 hours every day. So, don't go for plan, go for persuasion, patience and punctuality. If you can do it, no one can stop you.</p>
                </div>
            </div>
        </div>
    )
}
export default BlogDetails;