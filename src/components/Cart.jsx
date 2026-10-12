import React from 'react';

const Cart = ({cart,removeFromCart,increaseQuantity,decreaseQuantity,clearCart,setView}) => {
  const totalPrice = cart.reduce((total, elem) => {
    return total + elem.price * elem.quantity;
  }, 0);

  return (
    <div>
      <h4>Cart</h4>
      <button className="home-button" onClick={() => setView("")}>🏠 Home</button>

      {cart.length === 0 ? (
        <p className="empty-message">Your cart is empty</p>
      ) : (
        <>
          <div className="item-list">
            {cart.map((elem) => (
              <div className="cart-item" key={elem.id}>
                <img src={elem.image} alt={elem.title} />

                <div className="item-info">
                  <h4>{elem.title}</h4>
                  <p>Price: ${elem.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(elem.id)}>
                      -
                    </button>

                    <span>Quantity: {elem.quantity}</span>

                    <button onClick={() => increaseQuantity(elem.id)}>
                      +
                    </button>
                  </div>

                  <p>
                    Subtotal: ${(elem.price * elem.quantity).toFixed(2)}
                  </p>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(elem.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

            <button className="clear-cart-button" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
          
        </>
      )}
    </div>
  );
};

export default Cart;

