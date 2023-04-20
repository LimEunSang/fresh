const Cart = () => {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
    </>
  );
};

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <p>{item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
};

export default Cart;
