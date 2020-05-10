import React from 'react';
import MyButton from '../util/Button';

const HomePromotion = (props) => {

    const promotion = {
        img:'/images/featured/Grove.jpg',
        lineOne:'Up to 40% off',
        lineTwo:'BEST BOOKS',
        linkTitle:'Shop now',
        linkTo:'/shop'
    }

    const renderPromotion = () => (
        promotion ?
        <div className="home_promotion_img"
            style={{
                background:`url(${promotion.img})`
            }}
        >
                <div className="tag title">{promotion.lineOne}</div>
                <div className="tag low_title">{promotion.lineTwo}</div>
                <div>
                    <MyButton
                        type="default"
                        title={promotion.linkTitle}
                        linkTo={promotion.linkTo}
                        addStyles={{
                            margin: '10px 0 0 0'
                        }}
                    />
                </div>
        </div>
        :null
    )

    return (
        <div className="home_promotion">
            {renderPromotion()}
        </div>
    );
};

export default HomePromotion;