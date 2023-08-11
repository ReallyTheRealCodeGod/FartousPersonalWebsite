import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Films.css"


class Petanque extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '0',
            nextArrow: <RightArrow />,
            prevArrow: <LeftArrow />,
        };

        return (
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <Slider {...settings}>
                        <div className="carousel-image-container">
                            <img src="../../images/Petanque/1.png" alt="Image 1" className="carousel-image" />
                        </div>
                        <div className="carousel-image-container">
                            <img src="../../images/Petanque/2.png" alt="Image 2" className="carousel-image" />
                        </div>
                        <div className="carousel-image-container">
                            <img src="../../images/Petanque/3.png" alt="Image 3" className="carousel-image" />
                        </div>
                        <div className="carousel-image-container">
                            <img src="../../images/Petanque/4.png" alt="Image 4" className="carousel-image" />
                        </div>
                        <div className="carousel-image-container">
                            <img src="../../images/Petanque/5.png" alt="Image 5" className="carousel-image" />
                        </div>
                        {/* Add more images as needed */}
                    </Slider>

                    <div className="image-description">
                        <p><strong>Petanque, 2023, 16 min</strong></p>
                        <p>Directed by Taleb Fartous</p>
                        <p>Written by Taleb Fartous & Tobias Aman Manczak</p>
                        <p>Produced by MYRA & Halunk</p>
                        <p>Petanque is a film about an architect that gets the assignment to design a petanque court in his own childhood neighbourhood. To do that, he has to tear down the existing football court which the kids in the neighbourhood loves.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Petanque;
function RightArrow(props) {
    const { className, onClick } = props;
    return (
        <svg
            className={`${className} arrow`}
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ position: 'absolute', right: '10px', top: '50%', zIndex: 10, width: '2rem', height: '2rem', color: 'white', transform: 'translateY(-50%)' }}
        >
            <path d="M9 18l6-6-6-6"></path>
        </svg>
    );
}

function LeftArrow(props) {
    const { className, onClick } = props;
    return (
        <svg
            className={`${className} arrow`}
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ position: 'absolute', left: '10px', top: '50%', zIndex: 10, width: '2rem', height: '2rem', color: 'white', transform: 'translateY(-50%)' }}
        >
            <path d="M15 18l-6-6 6-6"></path>
        </svg>
    );
}
