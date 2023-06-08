import React from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../Redux/Actions/product'
const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);

    useEffect(() => {
        fetchProducts()
    }, [])

    const dispatch = useDispatch();

    const fetchProducts = async() => {
        const response = await axios.get("https://fakestoreapi.com/products")
        dispatch(setProducts(response.data))
    }
    console.log(products)
  return (
    <div>
        <ProductComponent />
    </div> 
  )
}

export default ProductListing