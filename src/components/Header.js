import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom"
const Header = () => {
    return (
        <>
            <div className="bg-base-400 shadow-md mb-5">
                <div className="navbar container">
                    <div className="navbar-start w-full justify-between lg:justify-start flex-row-reverse lg:flex-row">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <FaBars />
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                <li><NavLink>Contact</NavLink></li>
                            </ul>
                        </div>
                        <NavLink to="/" className="cursor-pointer font-medium text-xl">InfoProgramming</NavLink>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="flex items-center gap-4">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            <li><NavLink>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;