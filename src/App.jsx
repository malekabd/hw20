import { AppLayout } from "./AppLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CheckOut from "./CheckOut";
import { CartProvider } from "./CartContext";
import DashBoard from "./DashBoard";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <DashBoard />
        <Routes>
          <Route index element={<AppLayout />} />

          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<h1>nothing to render</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
