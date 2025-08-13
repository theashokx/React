import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mockData/resData.json";
import { render, screen } from "@testing-library/react";

it("Should load the restaurant card", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("KFC");
  expect(name).toBeInTheDocument();
});
