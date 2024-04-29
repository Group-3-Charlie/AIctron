import React from 'react';
import {Link} from "react-router-dom";

import logo from "../assets/images/logo_no_margin.svg";
import uploadIcon from '../assets/icons/upload.svg';
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
                <p>AIctron is an open-source project that allows you to predict data, from a given .csv dataset. Upload your file, choose the column to predict, and get the result in a few seconds. It's that simple!
                </p>
                <Link to={"/predict"} className={"blue-btn"}><img src={uploadIcon} alt="Upload icon"/>Upload a file</Link>
                <p className={"comment"}>An open source project by Arnaud Michel & Quentin Macheda</p>
            </div>
        </main>
    );
};

export default Home;