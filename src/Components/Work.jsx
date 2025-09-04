import React from 'react'
import PickMeals from '../assets/pick-meals-image.png';
import ChooseMeals from '../assets/choose-image.png';
import DeliveryMeals from '../assets/delivery-image.png';


const Work = () => {
    const workInfoData = [
        {
            Image: PickMeals,
            Title: "Pick Meals",
            Text: "Pick from a wide variety of meals that suit your taste and dietary need.",
        },
        {
            Image: ChooseMeals,
            Title: "Choose How Often",
            Text: "Choose meals that fit your schedule. Our selection is designed for diets.",
        },
        {
            Image: DeliveryMeals,
            Title: "Fast Deliveries",
            Text: "Enjoy fast and reliable deliveries right to your doorstep.",
        },
    ];
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>
                Our process is simple and efficient, designed to
                 make your meal planning easy and enjoyable.
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data) => (
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.Image} alt='' />
                    </div>
                    <h2>{data.Title}</h2>
                    <p>{data.Text}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Work;