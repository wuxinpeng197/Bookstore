import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './component/home';
import Layout from './component/hoc/layout';
import RegisterLogin from './component/login_regis/index';
import UserDashboard from './component/user/index';
import Register from './component/login_regis/register';
import Auth from './component/hoc/auth';
import Shop from './component/shop/index';
import ProductPage from './component/product/index';
import Add_product from './component/user/product';
import manageCategory from './component/user/manageCategory';
import UserCart from './component/user/cart';
import UpdateProfil from './component/user/UpdateProfil';
import ManageSite from './component/user/site';
import ResetUser from './component/reset/index';
import ResetPass from './component/reset/resetpass';

const Routes = () => {
    return(
      <Layout>
        <Switch>
          <Route path="/reset_user" exact component={Auth(ResetUser,false)}/>
          <Route path="/reset_password/:token" exact component={Auth(ResetPass,false)}/>
          <Route path="/admin/site_info" exact component={Auth(ManageSite,true)}/>
          <Route path="/user/user_profile" exact component={Auth(UpdateProfil,true)}/>
          <Route path="/user/cart" exact component={Auth(UserCart,true)}/>
          <Route path="/product_detail/:id" exact component={Auth(ProductPage,null)}/>
          <Route path="/admin/manage_categories" exact component={Auth(manageCategory,true)}/>
          <Route path="/admin/add_product" exact component={Auth(Add_product,true)}/>
          <Route path="/user/dashboard" exact component={Auth(UserDashboard,true)}/>
          <Route path="/register" exact component={Auth(Register,false)}/>
          <Route path="/register_login" exact component={Auth(RegisterLogin,false)}/>
          <Route path="/shop" exact component={Auth(Shop,null)}/>
          <Route path="/" exact component={Auth(Home,null)}/>
        </Switch>
      </Layout>
  
    )
  }
  
  export default Routes;