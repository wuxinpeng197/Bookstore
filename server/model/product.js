const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    title:{
        required: true,
        type: String,
        unique: 1,
        maxlength:100
    },
    isbn:{
        required: true,
        type: String,
        unique: 1,
        maxlength:100
    },
    price:{
        // required: true,
        type: Number,
        maxlength:100
    },
    pageCount:{
        required: true,
        type: Number,
        unique: 0,
        maxlength:100
    },
    shortDescription:{
        required: true,
        type: String,
        maxlength:100000
    },
    longDescription:{
        required: true,
        type: String,
        maxlength:100000
    },
    authors:{
        required: true,
        type: Array,
        maxlength:100
    },
    price:{
        required: true,
        type: Number,
        maxlength: 255
    },
    thumbnailUrl:{
        required: false,
        type: String,
        maxlength:100000
    },
    categories:{
        type: Array,
        // ref: 'Category',
        required: true
    },
    shipping:{
        // required: true,
        type: Boolean,
        default: true
    },
    available:{
        // required: true,
        type: Boolean,
        default: true
    },
    frets:{
        required: true,
        type: Number,
        default:22
    },
    sold:{
        type: Number,
        maxlength: 100,
        default: 0
    },
    publishedDate:{
        required: true,
        type: Boolean
    },
    images:{
        type: Array,
        default:[]
    }
},{timestamps:true});

const Product = mongoose.model('Product',productSchema);
module.exports = { Product}