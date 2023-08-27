import { TshirtList } from "./TshirtList";
import { Cart } from "./Cart";
import { CartProvider } from "./CartContext";

export function AppLayout() {
  return (
    <CartProvider>
      <div>
        <Cart />
        <TshirtList />
      </div>
    </CartProvider>
  );
}
