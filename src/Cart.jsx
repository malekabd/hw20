import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [cart, setCart, state] = useContext(CartContext);
  //
  console.log(state);
  const navigate = useNavigate();

  return (
    <>
      {state.total !== 0 ? (
        <div>
          {state.cBlue !== 0 ? <div>Blue Polo :{state.cBlue}</div> : ""}
          {state.cYellow !== 0 ? <div>Yellow Tshirt :{state.cYellow}</div> : ""}
          {state.cRed !== 0 ? <div>Red Tshirt :{state.cRed}</div> : ""}
          {state.total !== 0 ? <span>Items in Cart : {state.total}</span> : ""}
          <br />
          {state.totalPrice !== 0 ? (
            <span>Total Price : {state.totalPrice}</span>
          ) : (
            ""
          )}
          <br />
          <button
            onClick={() => {
              if (!state.total) return alert("Please add Itmes to the Cart");
              navigate("./checkout");
            }}
          >
            CheckOut
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
