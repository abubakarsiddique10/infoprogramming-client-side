import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBlog } from "../../redux/actionCreators/blogsAction";

const Filter = () => {
    const dispatch = useDispatch();
    const { filter: { category } } = useSelector((state) => state);

    return (
        <div className="container my-5">
            <div className="flex justify-between items-center">
                <form>
                    <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-6 focus:outline-none" aria-label="Default select example">
                        <option selected>select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </form>

                <div className="flex  uppercase ">
                    <button
                        onClick={() => dispatch(filterBlog("reset"))}
                        className={`px-4 border py-1 font-medium ${category.includes('reset') ? "bg-[#007FFF] text-white" : null}`}
                    >Reset
                    </button>
                    <button
                        onClick={() => dispatch(filterBlog("beginners"))}
                        className={`px-4 border py-1 font-medium ${category.includes('beginners') ? "bg-[#007FFF] text-white" : null}`}
                    >Beginners
                    </button>
                    <button
                        onClick={() => dispatch(filterBlog("javascript"))}
                        className={`px-4 border py-1 font-medium ${category.includes('javascript') ? "bg-[#007FFF] text-white" : null}`}>JavaScript
                    </button>
                    <button
                        onClick={() => dispatch(filterBlog("reactjs"))}
                        className={`px-4 border py-1 font-medium ${category.includes('reactjs') ? "bg-[#007FFF] text-white" : null}`}>React JS
                    </button>
                    <button
                        onClick={() => dispatch(filterBlog("python"))}
                        className={`px-4 border py-1 font-medium ${category.includes('python') ? "bg-[#007FFF] text-white" : null}`}>Python
                    </button>
                    <button
                        onClick={() => dispatch(filterBlog("nextjs"))}
                        className={`px-4 border py-1 font-medium ${category.includes('nextjs') ? "bg-[#007FFF] text-white" : null}`}>Next JS
                    </button>

                </div>
            </div>
        </div>
    )
}
export default Filter;