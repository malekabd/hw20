import React, { useReducer, useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  function reducerFn(state, action) {
    switch (action.type) {
      case "blue":
        return {
          ...state,
          cBlue: state.cBlue + 1,
          total: state.total + 1,
          totalPrice: state.totalPrice + state.pBlue,
        };
      case "yellow":
        return {
          ...state,
          cYellow: state.cYellow + 1,
          total: state.total + 1,
          totalPrice: state.totalPrice + state.pYellow,
        };
      case "red":
        return {
          ...state,
          cRed: state.cRed + 1,
          total: state.total + 1,
          totalPrice: state.totalPrice + state.pRed,
        };
      case "logIn":
        return {
          ...state,
          isLoggedIn: !state.isLoggedIn,
        };
      case "openModal":
        return {
          ...state,
          isModalOpen: !state.isModalOpen,
        };
    }
  }

  const initialState = {
    cBlue: 0,
    cYellow: 0,
    cRed: 0,
    pBlue: 19,
    pYellow: 25,
    pRed: 11,
    total: 0,
    password: "aaAA12@sa!",
    totalPrice: 0,
    isLoggedIn: false,
    emailAddress: "maleksulaiman1@gmail.com",
    isModalOpen: false,
  };
  const [state, dispatch] = useReducer(reducerFn, initialState);

  function incBlue() {
    dispatch({ type: "blue" });
  }
  function incRed() {
    dispatch({ type: "red" });
  }
  function incYellow() {
    dispatch({ type: "yellow" });
  }
  function logIn() {
    dispatch({ type: "logIn" });
  }
  function openModal() {
    dispatch({ type: "openModal" });
  }

  return (
    <CartContext.Provider
      value={[
        cart,
        setCart,
        state,
        incBlue,
        incRed,
        incYellow,
        logIn,
        openModal,
      ]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
