import React from "react";
import { Outlet, Link } from "react-router-dom";

import "../assets/style/header.css";

const Header = () => {
    return (
        <>
        <header className={"header"}>
            <nav>
            <div className={"nav-links"}>
                <Link to="/predict">Predict</Link>
                <Link to={"/"}><img src={"https://raw.githubusercontent.com/MrArnaudMichel/AIctron/3a3af04319d259dcf30a7a8ecfafac0670902b81/aictron-app/public/images/logo_no_margin.svg"} alt="logo" /></Link>
                <Link to="/contribute">Contribute</Link>
            </div>
            </nav>
        </header>
        </>
    );
}

export default Header;