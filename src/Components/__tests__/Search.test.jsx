import Body from "../Body";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mockData/resList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load the search bar Correct in body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByText("Search 🔍");
  const searchInput = screen.getByPlaceholderText("Search Restaurants 🍕");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  //screen should load some restaurant
  const cards = screen.getByRole("heading", { name: "Burger King" });
  expect(cards.length).toBe(1);
});
