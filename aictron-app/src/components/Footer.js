import React from "react";
import { Outlet, Link } from "react-router-dom";

import "../assets/style/footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="wrap">
            <span>© {currentYear} AIctron</span>
            <span> </span>
            <Link to="https://github.com/QuentinMacheda/aictron/blob/main/LICENSE">MIT License</Link>
        </footer>
    );
}

export default Footer;