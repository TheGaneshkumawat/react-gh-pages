import React from "react";
import ReactDOM from "react-dom";
//import Pet from "./Pet";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "brand" }, "Adopt Me!!!"),
//     React.createElement(Pet, {
//       name: "Tony",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Jack!!!!",
//       animal: "Bird",
//       breed: "Parrot",
//     }),
//     React.createElement(Pet, { name: "Heera", animal: "Cow", breed: "Indian" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1> \
      <SearchParams />
    </div>
  );
};

//ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
