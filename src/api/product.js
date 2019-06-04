import {get} from '../utils/request'

export const getProducts= params=>get('http://api.cat-shop.penkuoer.com/api/v1/products',{params})

export const getProduct= id=>get(`http://api.cat-shop.penkuoer.com/api/v1/products/${id}`)