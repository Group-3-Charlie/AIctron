import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./css/Header.css";

const Header = () => {
    return (
        <>
        <header className={"header"}>
            <nav>
            <div className={"nav-links"}>
                <Link to="/predict">Predict</Link>
                <Link to={"/"}><img src={"images/logo_no_margin.svg"} alt="logo" /></Link>
                <Link to="/contribute">Contribute</Link>
            </div>
            </nav>
        </header>
        </>
    );
}

export default Header;