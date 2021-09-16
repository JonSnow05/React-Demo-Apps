import React from "react";

const HelloJxs = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h5", null, "This is jsx example.")
  );
};
export default HelloJxs;
