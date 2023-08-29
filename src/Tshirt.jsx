import { useContext } from "react";
import { CartContext } from "./CartContext";

export const Tshirt = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tshirt = { name: props.name, price: props.price };
    setCart((currentState) => [...currentState, tshirt]);
  };
  const CName = props.name.split(" ")[0];
  console.log(CName);
  console.log(CName == "blue");
  return (
    <>
      <div className="col ">
        <div className="card mb-4 rounded-3 shadow-sm ">
          <div
            className={`card-header py-3  bg-${
              CName == "blue"
                ? "primary"
                : CName == "red"
                ? "danger"
                : CName == "yellow"
                ? "warning"
                : ""
            } text-white`}
          >
            <h4 className="my-0 fw-normal">{props.name}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              <small className="text-muted fw-light"></small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{props.name}</li>
              <li>{props.price}</li>
            </ul>
            <button
              className={`w-100 btn  btn-lg btn-lg btn-${
                CName == "blue"
                  ? "primary"
                  : CName == "red"
                  ? "danger"
                  : CName == "yellow"
                  ? "warning"
                  : ""
              }`}
              onClick={addToCart}
            >
              {" "}
              Add to Cart {props.price} $
            </button>
          </div>
        </div>
      </div>

      {/* <div>
        <h2>{props.name}</h2>
        <h4>{props.price}</h4>
        <button
          className={`w-100 btn  btn-lg btn-lg btn-${
            CName == "blue"
              ? "primary"
              : CName == "red"
              ? "danger"
              : CName == "yellow"
              ? "warning"
              : ""
          }`}
          onClick={addToCart}
        >
          Add to cart
        </button>
        <hr />
      </div> */}
    </>
  );
};
