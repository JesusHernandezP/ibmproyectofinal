import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, price, increment, decrement }) => (

  <div className="cartItem">
    <div className="cartItems">
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>


  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { title: "Cheese Burger", img: burger1, value: 0, price: 3.30 },
    { title: "Bacon Cheese Burger", img: burger2, value: 0, price: 4.50 },
    { title: "Hamburguesa con queso y patatas fritas", img: burger3, value: 0, price: 6.10 },
  ]);

  const increment = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].value += 1;
    setCartItems(updatedItems);
  };

  const decrement = (index) => {
    const updatedItems = [...cartItems];
    if (updatedItems[index].value > 0) {
      updatedItems[index].value -= 1;
      setCartItems(updatedItems);
    }
  };

  const subTotal = cartItems.reduce((total, item) => total + item.value * item.price, 0);
  const tax = subTotal * 0.18;
  const shippingCharges = 200;
  const total = subTotal + tax + shippingCharges;

  return (
    <section className="cart">
      <main>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            title={item.title}
            img={item.img}
            value={item.value}
            price={item.price}
            increment={() => increment(index)}
            decrement={() => decrement(index)}
          />
        ))}
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>${subTotal.toFixed(2)}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>${shippingCharges.toFixed(2)}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>${total.toFixed(2)}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
