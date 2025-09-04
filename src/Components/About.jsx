import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="About Background" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="About Section Image" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="primary-text">
                    Food is any substance consumed to provide nutritional for an organism.
                     It contains nutrients, or minerals.
                </p>
                <p className="primary-text">
                    Having good nutrition is important for overall health.
                    It helps in growth.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">
                        {" "}<BsFillPlayCircleFill />Watch Video</button>
                </div>
            </div>
        </div>
    );
};

export default About;
