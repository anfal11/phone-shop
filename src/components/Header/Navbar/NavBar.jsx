import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-5 shadow-gray-400 shadow-md px-5">
                <Logo></Logo>
                <ul className="flex gap-5 text-xl">

                    <li>
                    <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-green-500 hover:text-red-500 hover:underline" : ""}> Home </NavLink>
                    </li>

                    <li>
                    <NavLink to='/favorites' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-green-500 hover:text-red-500 hover:underline" : ""}> Favorites </NavLink>
                    </li>

                    <li>
                    <NavLink to='/login' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-green-500 hover:text-red-500 hover:underline" : ""}> Log In</NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default NavBar;