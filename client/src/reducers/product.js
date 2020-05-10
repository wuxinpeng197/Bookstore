import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_CATEGORY,
    ADD_CATEGORY,
    GET_WOODS,
    ADD_WOOD,
    GET_PRODUCTS_TO_SHOP,
    ADD_PRODUCT,
    CLEAR_PRODUCT,
    GET_PRODUCT_DETAIL,
    CLEAR_PRODUCT_DETAIL,
    UPDATE_SITE_DATA,
    GET_SITE_DATA
} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){
        case GET_SITE_DATA:
            return { ...state, siteData: action.payload }
        case UPDATE_SITE_DATA:
            return { ...state, siteData: action.payload.siteInfo }
        case GET_PRODUCTS_BY_SELL:
            return {...state, bySell: action.payload }
        case GET_PRODUCTS_BY_ARRIVAL:
            return {...state, byArrival:  action.payload }
        case GET_CATEGORY:
            return {...state, category: action.payload }
        case ADD_CATEGORY:
            return {
                ...state, 
                addBrand: action.payload.success , 
                brands:action.payload.brands 
            }
        // case GET_WOODS:
        //     return {...state, woods: action.payload }
        // case ADD_WOOD:
        //     return {
        //         ...state, 
        //         addWood: action.payload.success , 
        //         woods:action.payload.woods 
        //     }
        case GET_PRODUCTS_TO_SHOP:
            return {
                ...state,
                toShop: action.payload.articles,
                toShopSize: action.payload.size
            }
        case ADD_PRODUCT:
            return {...state,addProduct: action.payload}
        case CLEAR_PRODUCT:
            return {...state,addProduct: action.payload}
        case GET_PRODUCT_DETAIL:
            return {...state, prodDetail: action.payload }
        case CLEAR_PRODUCT_DETAIL:
            return {...state, prodDetail: action.payload }
        default:
            return state;
    }
}