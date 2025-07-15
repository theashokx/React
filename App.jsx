import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = <h1 className="head">Namaste Bhai Sabbbb</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => {
  return <h1>This is Title</h1>;
};

const head = <h3>Hello React</h3>;

const Heading = () => {
  return (
    <div>
      {head}
      <Title />
      {Title()}
      <Title></Title>
      {}
      <h2>This is Heading</h2>
    </div>
  );
};

root.render(<Heading />);
