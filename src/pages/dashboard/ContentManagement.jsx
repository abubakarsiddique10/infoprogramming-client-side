import { useSelector } from "react-redux";
import TableRow from "./TableRow";

const ContentManagement = () => {
    const { blogs: { blogs } } = useSelector((state) => state);

    return (
        <section >
            <div className="flex flex-col justify-center h-full">
                <div className="bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <div className="font-semibold text-3xl text-gray-800">Manage Content</div>
                    </header>
                    <div className="overflow-x-auto p-3">
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th></th>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">Author Name</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">Blog Title</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">Date</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">Action</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                                {blogs.map(blog => <TableRow key={blog._id} blog={blog} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default ContentManagement;