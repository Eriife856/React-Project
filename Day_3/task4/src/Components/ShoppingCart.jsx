import { useState } from "react";
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "bucket",
      price: 500,
      quantity: 20,
    },
    {
      name: "bowl",
      price: 500,
      quantity: 20,
    },
    {
      name: "plate",
      price: 500,
      quantity: 20,
    },
  ]);
  function increaseQuantity(index) {
    const newState = [...cartItems];
    newState[index].quantity += 1;
    setCartItems(newState);
  }
  function decreaseQuantity(index) {
    const newState = [...cartItems];
    if (newState[index].quantity > 0) {
      newState[index].quantity -= 1;
      setCartItems(newState);
    }
  }
  return (
    <div className="container">
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name}- ₦{item.price} X {item.quantity} =(
            {item.price * item.quantity}) <br />
            <div className="btn-container">
              <button onClick={() => increaseQuantity(index)}>+</button>
              <button onClick={() => decreaseQuantity(index)}>-</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShoppingCart;
