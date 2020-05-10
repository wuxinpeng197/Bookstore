import React from 'react';
import Slider from 'react-slick';
import MyButton from '../util/Button';
import { Zoom } from 'react-slideshow-image';



const HomeSlider = (props) => {


    const images = [
        {
            img: '/images/featured/BestBooks.png',
            lineOne: 'Fender',
            lineTwo: 'Custom shop',
            linkTitle: 'Shop now',
            linkTo: '/shop'
        },
        {
            img: '/images/featured/Grove.jpg',
            lineOne: 'B-Stock',
            lineTwo: 'Awesome discounts',
            linkTitle: 'View offers',
            linkTo: '/shop'
        }
    ];

    const zoomOutProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        scale: 1.0,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }



    return (
        <div className="featured_container">
         
            <div>
                <Zoom {...zoomOutProperties}>
                    {
                        images.map((each, index) => (<div key={index}>
                        
                        <div className="featured_image"
                             style={{
                                background:`url(${each.img})`,
                                height:`${window.innerHeight}px`,
                            }}>
                                
                        
                        <div className="featured_action">
                            <div className="tag title">{each.lineOne}</div>
                            <div className="tag low_title">{each.lineTwo}</div>
                        <div>
                                <MyButton
                                    type="default"
                                    title={each.linkTitle}
                                    linkTo={each.linkTo}
                                    addStyles={{
                                        margin:'10px 0 0 0'
                                    }}
                                />
                            </div>
                        </div>
                    </div>    
                    </div>
                        ))
                    }
                 
                </Zoom>           
          
            </div>
    </div>
    );
};

export default HomeSlider;