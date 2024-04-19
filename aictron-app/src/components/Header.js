import React from "react";
import { Outlet, Link } from "react-router-dom";

import logo from "../assets/images/logo_no_margin.svg";
import github from "../assets/icons/github.svg";
import contribute from "../assets/icons/contribute.svg";
import predict from "../assets/icons/predict.svg";
import home from "../assets/icons/home.svg";

import "../assets/style/header.css";

const Header = () => {
    return (
        <header className="wrap">
            <nav>
                <Link to="/"><img className="icon" src={home} alt="Icon" /><span>Home</span></Link>
                <Link to="/predict"><img className="icon" src={predict} alt="Icon" /><span>Predict</span></Link>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <Link to="/contribute"><img className="icon" src={contribute} alt="Icon" /><span>Contribute</span></Link>
                <Link to="https://github.com/Group-3-Charlie"><img className="icon" src={github} alt="Github Logo" /><span>GitHub</span></Link>
            </nav>
        </header>
    );
}

export default Header;