import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Modal from "./Modal";
import Login from "./Login";
function DashBoard() {
  const [cart, setCart, state, incBlue, incRed, incYellow, logIn, openModal] =
    useContext(CartContext);
  /*   const [isModalOpen, setIsModalOpen] = useState(false);
  function handleModal() {
    setIsModalOpen(!isModalOpen);
  } */
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
              // <Link to="/login">Login</Link>
              <div onClick={openModal}>Login</div>
            ) : (
              <div onClick={() => console.log("hello")}>Name</div>
            )}
          </span>
        </nav>

        {state.isModalOpen ? (
          <Modal>
            <Login />
          </Modal>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default DashBoard;
