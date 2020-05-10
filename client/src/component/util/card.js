import React, { Component } from 'react';
import MyButton from './Button';

class Card extends Component {

    renderCardImage(images){
        if(images.length > 0){
            return images[0].url
        } else {
            return '/images/image_not_availble.png'
        }
    }


    render() {
        const props = this.props;
        console.log('card',props)
        return (
            <div className={`card_item_wrapper ${props.grid}`}>
                <div
                    className="image"
                    style={{
                        background:`url(/images/image_not_availble.png) no-repeat`
                    }}
                >  </div>
                    <div className="action_container">
                        <div className="tags">
                            <div className="brand">{props.categories[0]}</div>
                            <div className="name">{props.title}</div>
                            <div className="name">${props.price}</div>
                        </div>
                    
                    { props.grid ?
                        <div className="description">
                            <p>
                                {props.shortDescription}
                            </p>    
                        </div>
                        :null
                    }
                    <div className="actions">
                        <div className="button_wrapp">
                            <MyButton
                                type="default"
                                altClass="card_link"
                                title="View product"
                                linkTo={`/product_detail/${props._id}`}
                                addStyles={{
                                    margin: '10px 0 0 0'
                                }}
                            />
                        </div>
                        <div className="button_wrapp">
                            <MyButton
                                type="bag_link"
                                runAction={()=>{
                                    console.log('added to cart')
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;