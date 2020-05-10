import React, { Component } from 'react';
import PageTop from '../util/page_top';

import { price } from '../util/fixed_categories';

import { connect } from 'react-redux';
import { getProductToShop, getCategory } from '../../actions/product';

import CollapseCheckbox from '../util/CollapseCheckbox';
import CollapseRadio from '../util/CollapseRadio';

import LoadmoreCards from './loadmore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { alignCenter } from '@fortawesome/free-solid-svg-icons'
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';


class Shop extends Component {

    state = {
        grid: '',
        limit: 6,
        skip: 0,
        filters: {
            category: [],
            price: []
        }
    }

    componentDidMount() {
        this.props.dispatch(getCategory());

        this.props.dispatch(getProductToShop(
            this.state.skip,
            this.state.limit,
            this.state.filters
        ))
    }

    handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array
            }
        }
        return array;
    }


    handleFilters = (filters, category) => {
        const newFilters = { ...this.state.filters }
        newFilters[category] = filters;

        if (category === "price") {
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues
        }

        this.showFilteredResults(newFilters)
        this.setState({
            filters: newFilters
        })
    }

    showFilteredResults = (filters) => {
        this.props.dispatch(getProductToShop(
            0,
            this.state.limit,
            filters
        )).then(() => {
            this.setState({
                skip: 0
            })
        })
    }

    loadMoreCards = () => {
        let skip = this.state.skip + this.state.limit;

        this.props.dispatch(getProductToShop(
            skip,
            this.state.limit,
            this.state.filters,
            this.props.products.toShop
        )).then(() => {
            this.setState({
                skip
            })
        })
    }

    handleGrid = () => {
        this.setState({
            grid: !this.state.grid ? 'grid_bars' : ''
        })
    }


    render() {
        const products = this.props.products;
        console.log('index', products)
        return (
            <div>

                <div className="container" style={{ marginTop: "50px" }}>
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapseCheckbox
                                initState={true}
                                title="category"
                                list={products.category}
                                handleFilters={(filters) => this.handleFilters(filters, 'category')}
                            />
                            <CollapseRadio
                                initState={true}
                                title="Price"
                                list={price}
                                handleFilters={(filters) => this.handleFilters(filters, 'price')}
                            />

                        </div>
                        <div className="right">
                            <div className="shop_options">
                                <div className="shop_grids clear">
                                    <div
                                        className={`grid_btn ${this.state.grid ? '' : 'active'}`}
                                        onClick={() => this.handleGrid()}
                                    >
                                        <FormatAlignCenterIcon />
                                    </div>
                                    <div
                                        className={`grid_btn ${!this.state.grid ? '' : 'active'}`}
                                        onClick={() => this.handleGrid()}
                                    >

                                        <FormatAlignJustifyIcon />
                                    </div>
                                </div>
                            </div>
                            <div style={{ clear: 'both' }}>
                                <LoadmoreCards
                                    grid={this.state.grid}
                                    limit={this.state.limit}
                                    size={products.toShopSize}
                                    products={products.toShop}
                                    loadMore={() => this.loadMoreCards()}
                                />
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps)(Shop);