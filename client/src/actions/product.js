import axios from 'axios';
import {
    ADD_PRODUCT,
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_CATEGORY,
    GET_PRODUCTS_TO_SHOP,
    CLEAR_PRODUCT,
    ADD_CATEGORY,
    GET_PRODUCT_DETAIL,
    CLEAR_PRODUCT_DETAIL,
    GET_SITE_DATA,
    UPDATE_SITE_DATA
} from './types';


export function getSiteData(){

    const request = axios.get(`/api/site/site_data`)
                    .then(response => response.data);

    return {
        type: GET_SITE_DATA,
        payload: request
    }

}

export function updateSiteData(dataToSubmit){

    const request = axios.post(`/api/site/site_data`, dataToSubmit)
        .then(response => response.data);

    return {
        type: UPDATE_SITE_DATA,
        payload: request
    }

}


// import { USER_SERVER } from '../components/utils/misc';

export function getProductDetail(id){

    const request = axios.get(`/api/product/articles_by_id?id=${id}&type=single`)
    .then(response=>{
        return response.data[0]
    });

    return {
        type: GET_PRODUCT_DETAIL,
        payload: request
    }

}


export function clearProductDetail(){
    return {
        type: CLEAR_PRODUCT_DETAIL,
        payload:''
    }
}


export function getProductsBySell(){
    //?sortBy=sold&order=desc&limit=100
    const request = axios.get(`/api/product/articles?sortBy=sold&order=desc&limit=4`)
                    .then(response => response.data);
    console.log('request',request)
    return {
        type: GET_PRODUCTS_BY_SELL,
        payload: request
    }

}

export function getProductsByArrival(){
    const request = axios.get(`/api/product/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(response => response.data);
    console.log('request',request)
    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}

export function getCategory(){
    const request = axios.get('/api/product/category')
    .then(response=>(response.data))

    return{
        type: GET_CATEGORY,
        payload: request
    }
}

export function addCategory(dataToSubmit, existingBrands){
    const request = axios.post(`/api/product/category`,dataToSubmit)
    .then(response=>{
        console.log('add',response)
        let brands = [
            ...existingBrands,
            response.data.category
        ];
        return {
            success: response.data.success,
            brands
        }
    });
    return {
        type: ADD_CATEGORY,
        payload: request
    }
}

export function getProductToShop(skip,limit,filters,previous=[]){
    console.log('filter',filters,skip,limit)
    const data = {
        skip,
        limit,
        filters
    }
    const request = axios.post('/api/product/shop',data).
    then(response=>{
        console.log('shop',response)
        let newData=[
            ...previous,
            ...response.data.articles
        ]
        return{
            size: response.data.size,
            articles: newData
        }
    })

    return{
        type:GET_PRODUCTS_TO_SHOP,
        payload: request
    }

}

export function addProduct(datatoSubmit){

    const request = axios.post(`/api/product/article`,datatoSubmit)
                    .then(response => response.data);

    return {
        type: ADD_PRODUCT,
        payload: request
    }
}

export function clearProduct(){
    return {
        type: CLEAR_PRODUCT,
        payload: ''
    }
}