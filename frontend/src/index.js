import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Root from "./routes/Root";
import Welcome from "./Welcome";
import Shop from "./routes/Shop";
import Playlist from "./routes/Playlist";

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
        path: "albums",
        element: <Shop />,
        loader: async () =>
          fetch("http://localhost:3000/albums").then((response) =>
            response.json()
          ),
      },
      {
        path: "Playlist",
        element: <Playlist />,
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
