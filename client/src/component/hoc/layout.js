import React, { Component } from 'react';

import Header from '../header_footer/Header';
import FooterPage from '../header_footer/Footer';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="page_container">
                    {this.props.children}
                </div>
                <FooterPage/>
            </div>
        );
    }
}

export default Layout;