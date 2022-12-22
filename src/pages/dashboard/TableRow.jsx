import { useDispatch } from "react-redux";
import { deleteBlog } from "../../redux/actionCreators/blogsAction";
import { FaPencilAlt, FaPen } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const TableRow = ({ blog }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { author, title, date, _id } = blog;

    const handleClick = (id) => {
        fetch('https://infoprogramming-server-side.onrender.com/blog', {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ id })
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    dispatch(deleteBlog(id))
                }
            })
    }

    return (
        <>
            <tr>
                <td className="p-2">
                    <input type="checkbox" className="w-5 h-5" value="id-1"
                    />
                </td>
                <td className="p-2">
                    <div className="font-medium text-gray-800">
                        {author}
                    </div>
                </td>
                <td className="p-2">
                    <div className="text-left">
                        {title?.slice(0, 30) + "..."}
                    </div>
                </td>
                <td className="p-2">
                    <div className="text-left font-medium text-green-500">
                        {date?.split('-').reverse().join('-')}
                    </div>
                </td>
                <td className="p-2">
                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={() => navigate(`/dashboard/updateblog/${_id}`)}
                            className="text-2xl">
                            <FaPen className="w-7 h-7 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1.5" />
                        </button>
                        <button
                            onClick={() => handleClick(_id)}>
                            <svg className="w-7 h-7 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                </path>
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}
export default TableRow;