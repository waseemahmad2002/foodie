import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import ProfileImg2 from "../assets/britisher.png";
import ProfileImg3 from "../assets/indianwomen.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonial</p>
                <h1 className="primary-heading">What They Are Saying</h1>
                <p className="primary-text">
                    Our customers love us! Here’s what they have to say about their experience with our service.
                </p>
            </div>
            <div className="testimonials-container">
              <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>
                    Ye ek bhutt acha experience tha iss hotel me dinner krna. Yha veg and non-veg dono ka taste lajawab hai.
                </p>
                <div className="testimonial-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />              
                    <AiFillStar /> 
                    <AiFillStar />
                </div>
                <h2>Robert James</h2>
            </div>

             <div className="testimonial-section-bottom">
                <img src={ProfileImg2} alt="" />
                <p>
                    Ye ek bhutt acha experience tha iss hotel me dinner krna. Yha veg and non-veg dono ka taste lajawab hai.
                </p>
                <div className="testimonial-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />              
                    <AiFillStar /> 
                    <AiFillStar />
                </div>
                <h2>Robert James</h2>
            </div>
             <div className="testimonial-section-bottom">
                <img src={ProfileImg3} alt="" />
                <p>
                    Ye ek bhutt acha experience tha iss hotel me dinner krna. Yha veg and non-veg dono ka taste lajawab hai.
                </p>
                <div className="testimonial-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />              
                    <AiFillStar /> 
                    <AiFillStar />
                </div>
                <h2>Robert James</h2>
            </div>
          </div>   
        </div>
    );
};

export default Testimonial;