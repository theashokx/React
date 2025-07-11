// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div1", { id: "child1" }, [
    React.createElement("h1", {}, "Hello this is h1 tag"),
    React.createElement("h2", {}, "Hello this is h2 tag"),
  ]),
  [
    React.createElement("div2", { id: "child2" }, [
      React.createElement("h1", {}, "Hello this is h1 tag"),
      React.createElement("h2", {}, "Hello this is h2 tag"),
    ]),
  ],
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
