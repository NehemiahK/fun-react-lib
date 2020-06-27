import React from "react";
import "./Navbar.css";
import RightNav from "./RightNav";

const Navbar = () => {
    return(
        <div className="nav">
            <div className="logo">
                Fun React Lib
            </div>
            <RightNav/>
        </div>
    )
};

export default Navbar;