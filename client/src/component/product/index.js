import React, { Component } from 'react';
import PageTop from '../util/page_top';

import ProdNfo from './prodNfo';
import ProdImg from './prodImg';

import { connect } from 'react-redux';
import { addToCart } from '../../actions/user';
import { getProductDetail, clearProductDetail } from '../../actions/product';

class ProductPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.dispatch(getProductDetail(id)).then(()=>{
            if(!this.props.products.prodDetail){
                this.props.history.push('/');
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearProductDetail())
    }


    addToCartHandler(id){
        this.props.dispatch(addToCart(id))
    }
    
    render() {
        return (
            <div>
                <PageTop
                    title="Product detail"
                />
                {console.log('imh',this.props.products)}
                <div className="container">
                {
                    this.props.products.prodDetail ?
                    <div className="product_detail_wrapper">
                        <div className="left">
                            <div style={{width:'500px'}}>
                                <ProdImg
                                    detail={this.props.products.prodDetail}
                                />
                            </div>
                        </div>
                        <div className="right">
                            <ProdNfo
                                addToCart={(id)=> this.addToCartHandler(id)}
                                detail={this.props.products.prodDetail}
                            />
                        </div>
                    </div>
                    : 'Loading'
                }

                </div>                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product
    }
}

export default connect(mapStateToProps)(ProductPage);