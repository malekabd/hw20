import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
function DashBoard() {
  const [cart, setCart, state] = useContext(CartContext);

  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Masaq Store</span>
        </a>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            href="#"
          >
            Products
          </a>
          <a
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            href="#"
          >
            Enterprise
          </a>
          <a
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            href="#"
          >
            Support
          </a>
          <span className="py-2 link-body-emphasis text-decoration-none">
            {!state.isLoggedIn ? (
              <Link to="/login">Login</Link>
            ) : (
              <div onClick={() => console.log("hello")}>Name</div>
            )}
          </span>
        </nav>
      </div>
    </>
  );
}

export default DashBoard;
