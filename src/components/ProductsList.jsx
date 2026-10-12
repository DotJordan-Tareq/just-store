import React from 'react'
import ProductCard from './ProductCard';

const ProductsList = ({products,addToCart,addtofav}) => {
    // console.log(products);
    
  return (
    <div>ProductsList

        <div className="products-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}>
            {products.map((product,i)=>{
                return  <ProductCard product={product} key={product.id} addToCart={addToCart} addtofav={addtofav}/>
            })}
        </div>
       
    </div>
  )
}

export default ProductsList