// Photography.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Photography.css';
import { useEffect } from 'react';


const Photography = () => {
    const images = [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
        '/images/image4.jpeg',
        '/images/image5.webp',
        '/images/image6.jpeg',
        '/images/image7.jpg',
        '/images/image8.jpeg',
        '/images/image9.jpg',
    ];

    // Inside the Photography component
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') goLeft();
            if (e.key === 'ArrowRight') goRight();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // Add goLeft and goRight dependencies if they are not using the callback form



    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };



    const goLeft = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goRight = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="container">
            <div className="gallery">
                {images.map((image, index) => (
                    <img key={index} src={image} alt="" onClick={() => openModal(index)} />
                ))}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="modal"
                    overlayClassName="overlay"
                >
                    <div className="modal-navigation">
                        <button className="arrow-button left-arrow" onClick={goLeft}>&lt;</button>
                        <img src={images[currentImageIndex]} alt="" />
                        <button className="arrow-button right-arrow" onClick={goRight}>&gt;</button>
                        <button className="close-button" onClick={closeModal}>X</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Photography;
