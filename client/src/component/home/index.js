import React, { Component } from 'react';
import HomeSlider from './promote';
import HomePromotion from './home_promotion'
import CardBlock from '../util/card_block';

import { connect } from 'react-redux';
import { getProductsBySell, getProductsByArrival } from '../../actions/product';

class Home extends Component {

    componentDidMount(){
        this.props.dispatch(getProductsBySell());
        this.props.dispatch(getProductsByArrival());
    }
    showprp(){
        console.log('proplist',this.props.products)
    }

    render() {
        return (
            <div>
                 {/* {this.showprp()} */}
            
                <HomeSlider/>
                <CardBlock
                    list={this.props.products.bySell}
                    title="Best Selling books"
                />
                <HomePromotion/>
                <CardBlock
                    list={this.props.products.byArrival}
                    title="New arrivals"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('prod',state.product)
    return {
        products: state.product
    }
}

export default connect(mapStateToProps)(Home);