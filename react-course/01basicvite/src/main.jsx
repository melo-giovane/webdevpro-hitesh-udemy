import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
}
const AnotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

const AreactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click to visit google"
);

createRoot(document.getElementById("root")).render(

    <App />

);
