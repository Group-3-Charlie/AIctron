import React from 'react';
import {Link} from "react-router-dom";

import "../assets/style/home.css";

const Home = () => {
    return (
        <main className={"home"}>
            <img
                src={"images/logo_no_margin.svg"}
                alt="logo"
                width={"384"}/>
            <div className={"home-content"}>
                <h1 className={"home-title"}>AIctron</h1>
                <p>Predict the future within one minute by importing a .csv dataset with AIctron.</p>
                <Link to={"/predict"} className={"button"}><button className={"input-button"}>Import a dataset</button></Link>
                <p className={"comment"}>An open source project by Aaron Broderick, Arnaud Michel & Quentin Macheda</p>
            </div>
        </main>
    );
};

export default Home;