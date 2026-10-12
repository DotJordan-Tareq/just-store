import React from 'react'

const Nav = ({setView}) => {
  return (
    
        <nav className="navbar" style={{display:"flex",gap:"20px"}}>
<h2>JUST Store</h2>
<div className="nav-links">
<button onClick={()=>{
    setView("cart")
}}>Cart</button>
<button onClick={()=>{
    setView("fav")
}}>Fav</button>
        </div>
        
        </nav>
    
  )
  
}

export default Nav