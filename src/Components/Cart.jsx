import { useSelector, useDispatch } from "react-redux";
import { clearcart } from "../utils/cartSlice";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearcart());
  };

  const total = cartItems.reduce((acc, item) => {
    const price = item.card.info.price || item.card.info.defaultPrice || 0;
    return acc + price;
  }, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-heading">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <span className="item-name">{item.card.info.name}</span>
                <span className="item-price">
                  ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                </span>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <h3 className="total-price">Total: ₹{total / 100}</h3>
            <button className="clear-btn" onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
