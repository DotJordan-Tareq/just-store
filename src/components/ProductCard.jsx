import React from 'react'

const ProductCard = ({product,addToCart,addtofav}) => {
    // console.log(product);
    
  return (
    <div className="product-card" style={{border:"1px solid #1b0101"}}>
        <img src={product.image} width="50px" alt={product.title}/>
        <h4>{product.title}</h4>
        <h6>{product.price} $</h6>
        <button onClick={()=>{
          addToCart(product)
        }}>cart</button>
        <button onClick={() => {
  addtofav(product);
}}>
  ❤️
</button>
    </div>
  )
}

export default ProductCard