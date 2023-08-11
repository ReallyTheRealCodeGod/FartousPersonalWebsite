import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <div className="image-container">
                <img src="images/taleb.webp" alt="Your Image" />
                {[...Array(11)].map((_, idx) => (
                    <div key={idx} className={`overlay overlay-${idx + 1}`}></div>
                ))}
                <div className="text-container">
                    <p>Bruxelles, 2019.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
