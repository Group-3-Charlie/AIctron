import React from 'react';
import {Link} from "react-router-dom";

import logo from "../assets/images/logo_no_margin.svg";
import "../assets/style/home.css";

const Home = () => {
    return (
        <main id="home" className={"wrap"}>
            <img
                src={logo}
                alt="logo"
                width={"384"}/>
            <div className={"home-content"}>
                <h1>AIctron</h1>
                <p>Predict the future within one minute by importing a .csv dataset with AIctron.</p>
                <Link to={"/predict"} className={"blue-btn"}>Upload a file</Link>
                <p className={"comment"}>An open source project by Arnaud Michel & Quentin Macheda</p>
            </div>
        </main>
    );
};

export default Home;