import React from 'react';
import {Link} from "react-router-dom";

import "../assets/style/contribute.css";

const Home = () => {
    return (
        <main id="contribute" className={"wrap"}>
            <h1>Contribute</h1>
            <div>
                <p id="intro">AIctron is a free and open-source project ! By contributing to this project, you're helping us build a better web application that can be useful to many people. There are several ways you can contribute to AIctron :</p>
                <div id="items-container">
                    <div className="contribute-item">
                        <h2>📚 Share your knowledge</h2>
                        <p>Write tutorials, blog posts, or create videos on how to use AIctron for various applications and share them on social media or our community forum.</p>
                    </div>
                    <div className="contribute-item">
                        <h2>🖥️ Code contributions</h2>
                        <p>Improve the platform, add new features, or fix bugs by submitting pull requests to our GitHub repository.</p>
                    </div>
                    <div className="contribute-item">
                        <h2>📝 Documentation</h2>
                        <p>Help us create and maintain comprehensive documentation for users to easily understand how to use AIctron effectively.</p>
                    </div>
                    <div className="contribute-item">
                        <h2>🗣️ Translations</h2>
                        <p>Expand our reach by translating the platform into different languages.</p>
                    </div>
                    <div className="contribute-item">
                        <h2>↩️ Provide feedback</h2>
                        <p>Share your thoughts on how we can improve AIctron and help us prioritize features based on user needs.</p>
                    </div>
                </div>
                
                <p>By contributing to AIctron, you'll not only learn new skills but also make a valuable impact on the machine learning community. Join us today and be part of the journey to democratize machine learning!</p>
            </div>
        </main>
    );
};

export default Home;