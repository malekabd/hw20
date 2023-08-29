import { useContext } from "react";
import { CartContext } from "./CartContext";
function CheckOut() {
  console.log("hello");
  const [cart] = useContext(CartContext);

  console.log(cart);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  console.log(totalPrice);
  return (
    <>
      <div>checkouts</div>
      {cart.map((c) => {
        return (
          <>
            <div>name {c.name}</div>
            <div>price {c.price}</div>
          </>
        );
      })}
    </>
  );
}

export default CheckOut;
