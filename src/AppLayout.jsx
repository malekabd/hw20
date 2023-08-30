import { TshirtList } from "./TshirtList";
import { Cart } from "./Cart";

export function AppLayout() {
  return (
    <div>
      <TshirtList />
      <Cart />
    </div>
  );
}
