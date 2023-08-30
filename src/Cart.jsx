import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [cart, setCart, state] = useContext(CartContext);
  //
  const navigate = useNavigate();

  return (
    <>
      {state.total !== 0 ? (
        <div>
          {state.cBlue !== 0 ? <div>Blue Polo :{state.cBlue}</div> : ""}
          {state.cYellow !== 0 ? <div>Yellow Tshirt :{state.cYellow}</div> : ""}
          {state.cRed !== 0 ? <div>Red Tshirt :{state.cRed}</div> : ""}
          {state.total !== 0 ? <span>items in cart : {state.total}</span> : ""}
          <br />
          {state.totalPrice !== 0 ? (
            <span>total price : {state.totalPrice}</span>
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
