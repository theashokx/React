import RestaurantCard, { isOpenRestaurant } from "./RestaurantCard";
import resList from "../utils/mockData";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineMessage from "./OfflinePage";
import { RESTAURANT_URL } from "../utils/constant";

//Rasya Food App

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedResturant, setSearchedResturant] = useState([]);

  const onlineStatus = useOnlineStatus();

  const RestaurantOpened = isOpenRestaurant(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);

    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setSearchedResturant(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  if (onlineStatus === false) {
    return <OfflineMessage />;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          data-testid="searchinput"
          placeholder="Search Restaurants 🍕"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const searchedOne = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchedResturant(searchedOne);
          }}
        >
          Search 🔍
        </button>

        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setSearchedResturant(filteredList);
          }}
        >
          Show Top Rated 🍽️
        </button>
      </div>
      <div className="res-container">
        {searchedResturant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantOpened resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
