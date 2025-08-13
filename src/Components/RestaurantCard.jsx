import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resData.info;
  const cuisineText = cuisines.slice(0, 3).join(", ");
  return (
    <div data-testid="resCard" className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="Image" />
      <h3>{name}</h3>
      <h4>{cuisineText}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} </h4>
    </div>
  );
};

export const isOpenRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="wrapper">
        <label className="overlap-label">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
