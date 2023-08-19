import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Root from "./routes/Root";
import Welcome from "./Welcome";
import Shop from "./routes/Shop";
// import Cart from "./Cart";
import About from "./routes/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "shop",
        element: <Shop />,
        loader: async () =>
          fetch("http://localhost:3000/albums")
          .then((response) => response.json()),
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
