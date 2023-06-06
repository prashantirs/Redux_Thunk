import React from 'react'
import { useSelector } from 'react-redux'

const ProductListing = () => {
    const products = useSelector(state => state);
    console.log(products); // accessing all products from store
  return (
    <div>ProductListing</div> 
  )
}

export default ProductListing