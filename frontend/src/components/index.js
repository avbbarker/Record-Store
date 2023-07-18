import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./error";
import Root from "./routes/root";
import Welcome from "./welcome";
import Playlist from "./routes/playlist";
import Cart from "./routes/cart";

const router = createBrowserRouter([
  {
    // Render <Root> at [URL].
    path: "/",
    element: <Root />,
    // Render <Error> when errors occur.
    errorElement: <Error />,
    // Render these children in the root's outlet when...
    children: [
      {
        // ...the user visits [URL].
        path: "/",
        element: <Welcome />,
      },
      {
        // ...the user visits [URL]/teas.
        path: "playlist",
        element: <Playlist />,
        //loader: async () => fetch("http://localhost:3000/albums").then(response => response.json())
      },
      {
        // ...the user visits [URL]/about.
        path: "cart",
        element: <Cart />,
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
