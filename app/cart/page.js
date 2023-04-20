import { age, name } from "./data";

const CartItem = () => {
  return (
    <div className="cart-item">
      <p>상품명 {age}</p>
      <p>$40 {name}</p>
      <p>1개</p>
    </div>
  );
};

const Cart = () => {
  return (
    <>
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
    </>
  );
};

export default Cart;
