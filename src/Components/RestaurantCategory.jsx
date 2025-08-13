import { useState } from "react";
import "./RestaurantMenu.css";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const toggleItems = () => {
    setShowIndex();
  };

  return (
    <div className="menu-wrapper">
      {/* Category Heading + Toggle Button */}
      <div className="menu-row" style={{ cursor: "pointer" }}>
        <span className="category-title">
          {data.card.card.title} ({data.card.card.itemCards?.length || 0})
        </span>
        <button
          onClick={toggleItems}
          style={{
            background: "#ff5722",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {showItems ? "Hide" : "Show"}
        </button>
      </div>

      {/* Toggled Item List */}
      {showItems && <ItemList items={data.card.card.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
