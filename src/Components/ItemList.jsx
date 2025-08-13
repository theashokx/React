import { useDispatch } from "react-redux";
import "./RestaurantMenu.css";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleClickItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="menu-category-items">
      {items.map((item) => (
        <div key={item.card.info.id} className="menu-row">
          <span className="menu-item-name">
            {"⭐"}
            {item.card.info.name}
          </span>
          {/* <span className="menu-price"> */}
          <hr></hr>
          <h4 className="menu-price">
            {" "}
            ₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </h4>
          {/* </span> */}
          <button className="add-button" onClick={() => handleClickItem(item)}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
