import { useState, useEffect } from "react";
import "./RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const { areaName, avgRating, costForTwoMessage, cuisines, name, sla } =
    resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const categories =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="res-body">
      <h1 className="res-title">{name}</h1>
      <div className="resmenu-card">
        <div className="res-left">
          <h3 className="res-rating">⭐ {avgRating}</h3>
          <p className="res-line cuisines">{cuisines.join(",")}</p>
          <p className="res-line">{costForTwoMessage}</p>
        </div>
        <div className="res-right">
          <p className="res-line">Outlet: {areaName}</p>
          <p className="res-line">Delivery Time: {sla.slaString}</p>
        </div>
      </div>

      <div className="menu">
        <h3 className="menu-heading">Menu</h3>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.categoryId}
            data={category}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
