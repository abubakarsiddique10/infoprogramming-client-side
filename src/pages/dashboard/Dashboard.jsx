import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="container">
            <div className="flex gap-5">
                <ul className="menu p-4 w-64 bg-base-100 text-base-content border-r">
                    <li>
                        <Link to="/dashboard/addblog">
                            Add Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            Content Management
                        </Link>
                    </li>
                </ul>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Dashboard;