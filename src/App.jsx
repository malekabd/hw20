import { AppLayout } from "./AppLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CheckOut from "./CheckOut";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />

        <Route path="/checkout" element={<CheckOut />} />
        <Route path="*" element={<h1>nothing to render</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
