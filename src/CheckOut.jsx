import { useContext } from "react";
import { CartContext } from "./CartContext";
function CheckOut() {
  console.log("hello");
  //  const [cart] = useContext(CartContext);

  console.log(useContext(CartContext));
  /*   const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  console.log(totalPrice); */
  return <div>checkouts</div>;
}

export default CheckOut;
