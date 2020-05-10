import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART_USER,
    GET_CART_ITEMS_USER,
    REMOVE_CART_ITEM_USER,
    ON_SUCCESS_BUY_USER,
    UPDATE_DATA_USER,
    CLEAR_UPDATE_USER_DATA
} from './types';

// import { USER_SERVER } from '../components/utils/misc';


export function registerUser(dataToSubmit){
    const request = axios.post(`/api/users/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}


export function loginUser(dataToSubmit){
    console.log('asdasd')
    const request = axios.post(`/api/users/login`,dataToSubmit)
                .then(response => response.data);
    console.log(request)
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth(){

    const request = axios.get(`/api/users/auth`)
    .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }

}

export function logoutUser(){

    const request = axios.get(`/api/users/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }

}

export function addToCart(_id){

    const request = axios.post( `/api/users/addToCart?productId=${_id}`)
    .then(response => response.data)

    return {
        type: ADD_TO_CART_USER,
        payload: request
    }
}


export function getCartItems(cartItems, userCart){

    const request = axios.get(`/api/product/articles_by_id?id=${cartItems}&type=array`)
                    .then(response => {
     
                        userCart.forEach(item=>{
                            response.data.forEach((k,i)=>{
                                if(item.id === k._id){
                                    response.data[i].quantity = item.quantity;
                                }
                            })
                        })
                        return response.data;
                    })
        
    return {
        type: GET_CART_ITEMS_USER,
        payload: request
    }

}


export function removeCartItem(id){

    const request = axios.get(`/api/users/removeFromCart?_id=${id}`)
                    .then(response => {

                        response.data.cart.forEach(item=>{
                            response.data.cartDetail.forEach((k,i)=>{
                                if(item.id === k._id){
                                    response.data.cartDetail[i].quantity = item.quantity;
                                }
                            })
                        })
                            return response.data;
                    })

    return {
        type: REMOVE_CART_ITEM_USER,
        payload: request
    }

}



export function onSuccessBuy(data){ 

    const request = axios.post(`/api/users/successBuy`,data)
                    .then(response => response.data);
    return {
        type: ON_SUCCESS_BUY_USER,
        payload: request
    }
}

export function updateUserData(dataToSubmit){
    const request = axios.post(`/api/users/update_profile`,dataToSubmit)
                    .then(response => {
                        return response.data
                    });
    
    return {
        type: UPDATE_DATA_USER,
        payload: request
    }
}

export function clearUpdateUser(){
    return {
        type: CLEAR_UPDATE_USER_DATA,
        payload: ''
    }
}