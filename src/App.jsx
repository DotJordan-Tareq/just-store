import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Fav from "./components/Fav";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [view,setView]=useState("")
  const [fav, setfav] = useState(() => {
  return JSON.parse(localStorage.getItem("fav") || "[]");
});
  const [view1,setView1]=useState("")
  useEffect(() => {
  localStorage.setItem("fav", JSON.stringify(fav));
}, [fav]);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    // console.log(result);
    setProducts(result);
  };
  useEffect(() => {
    // console.log("from use effect");

    fetchProducts();
  }, []);

  const filterdProducts =
    category === "all"
      ? products
      : products.filter((elem, i) => {
          return elem.category === category;
        });
const addtofav = (product) => {
  console.log("Favorite clicked:", product.title);

  const exists = fav.find((elem) => elem.id === product.id);

  if (exists) {
    return;
  }

  const update1 = [...fav, product];
  setfav(update1);
};

const removeFromFav = (id) => {
  const update1 = fav.filter((elem) => elem.id !== id);
  setfav(update1);
};
  console.log("filterd", filterdProducts);
  const addToCart = (product) => {
  const exists = cart.find((elem) => elem.id === product.id);

  if (exists) {
    const updated = cart.map((elem) =>
      elem.id === product.id
        ? { ...elem, quantity: elem.quantity + 1 }
        : elem
    );

    setCart(updated);
  } else {
    const updated = [...cart, { ...product, quantity: 1 }];
    setCart(updated);
  }
};
  console.log(cart);
  const removeFromCart=(id)=>{
   const updated= cart.filter((elem,i)=>{
      return elem.id !==id
    })
setCart(updated)
  }
  
const increaseQuantity = (id) => {
  const updated = cart.map((elem) =>
    elem.id === id
      ? { ...elem, quantity: elem.quantity + 1 }
      : elem
  );

  setCart(updated);
};

const decreaseQuantity = (id) => {
  const updated = cart
    .map((elem) =>
      elem.id === id
        ? { ...elem, quantity: elem.quantity - 1 }
        : elem
    )
    .filter((elem) => elem.quantity > 0);

  setCart(updated);
};
const clearCart = () => {
  setCart([]);
};

  return (
    <div>
      <Nav setView={setView}/>
      
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setCategory(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
      {view==="cart"?(<Cart
  cart={cart}
  removeFromCart={removeFromCart}
  increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
  clearCart={clearCart}
  setView={setView}
/>):view === "fav" ? (<Fav fav={fav}
      removeFromFav={removeFromFav} setView={setView}/>) :( <ProductsList products={filterdProducts}  addToCart={addToCart} addtofav={addtofav}/>)}
     
    </div>
  );
};


export default App;
