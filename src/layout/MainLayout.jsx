import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/Header/Navbar/NavBar";
import { useEffect } from "react";


const MainLayout = () => {

    const useLoc = useLocation();
    useEffect(() => {
        if (useLoc.pathname === "/") {
            document.title = `Phone - Home`
        }else{
            document.title = `Phone ${useLoc.pathname.replace("/", "- ")}`
        }

        if (useLoc.state) {
            document.title = `${useLoc.state}`
        }

      }, [useLoc.pathname, useLoc.state]);
    return (
        <div className="max-w-[1450px] mx-auto">
            <NavBar></NavBar>
            <div className="py-20">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;