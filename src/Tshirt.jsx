import { useContext } from "react";
import { CartContext } from "./CartContext";

export const Tshirt = (props) => {
  const [cart, setCart, state, incBlue, incRed, incYellow] =
    useContext(CartContext);

  const CName = props.name.split(" ")[0];

  console.log(state);
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
              {CName === "blue" ? (
                <img src="../imges/blue.jpg" width={197} height={255} />
              ) : (
                ""
              )}
              {CName === "yellow" ? (
                <img src="../imges/yellow.jpg" width={197} height={255} />
              ) : (
                ""
              )}
              {CName === "red" ? (
                <img src="../imges/red.jpg" width={197} height={255} />
              ) : (
                ""
              )}
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
              onClick={() => {
                //    addToCart,
                CName == "blue"
                  ? incBlue()
                  : CName == "red"
                  ? incRed()
                  : CName == "yellow"
                  ? incYellow()
                  : null;
              }}
            >
              {" "}
              Add to Cart {props.price} $
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
