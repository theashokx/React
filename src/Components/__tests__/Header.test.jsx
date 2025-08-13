import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header component with Home Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Home = screen.getByText("Home");
  expect(Home).toBeInTheDocument();
});

// it("Should load header component with Login logout Button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginBtn = screen.getByRole("Button", { name: "login" });
//   fireEvent.click(loginBtn);
//   const logoutBtn = screen.getByRole("Button", { name: "logout" });

//   expect(logoutBtn).toBeInTheDocument();
// });
