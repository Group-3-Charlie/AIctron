import React from "react";
import { Outlet, Link } from "react-router-dom";

import logo from "../assets/images/logo_no_margin.svg";
import "../assets/style/header.css";

const Header = () => {
    return (
        <header className="wrap">
            <nav>
                <Link to="/predict">Predict</Link>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <Link to="/contribute">Contribute</Link>
            </nav>
        </header>
    );
}

export default Header;