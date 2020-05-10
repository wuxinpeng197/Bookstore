import React from 'react';
import Card from '../util/card';

const CardBlockShop = (props) => {
    const show=()=>{
        // console.log('props card',t)
        console.log('props card',props.list)

        
    }
    const renderCards = (i) => (
        
        props.list? 
        props.list.map(card=>(
                <Card
                    key={card._id}
                    {...card}
                    grid={props.grid}
                />
            ))
        :null
    )

    return (
        
        <div className="card_block_shop">
            <div>
            {show()}
                <div>
                    {props.list ?
                        props.list.length === 0 ?
                            <div className="no_result">
                                Sorry, no results
                            </div>
                        :null
                    :null}
                    { renderCards(props.list)}
                </div>

            </div>
        </div>
    );
};

export default CardBlockShop;