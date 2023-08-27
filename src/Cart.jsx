import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  console.log(cart);
  const navigate = useNavigate();
  return (
    <div>
      <span>items in cart : {cart.length}</span>
      <br />
      <span>total price : {totalPrice}</span>
      <br />
      {cart.map((item) => (
        <h6>
          {item.name} - {item.price}
        </h6>
      ))}

      <button
        onClick={() => {
          if (!totalPrice) return alert("Please add Itmes to the Cart");
          navigate("./checkout");
        }}
      >
        CheckOut
      </button>
    </div>
  );
};
