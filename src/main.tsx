import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GridLoader } from "react-spinners";
import EventScreen from "./app/routes/events/events.tsx";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: GridLoader,
  },
  {
    path: "/events",
    element: <EventScreen />,
    loader: GridLoader,
  },
  {
    path: "/gallery",
    element: <div>Gallery</div>,
    loader: GridLoader,
  },
  {
    path: "/stories",
    element: <div>Stories</div>,
    loader: GridLoader,
  },
  {
    path: "/timeline",
    element: <div>Timeline</div>,
    loader: GridLoader,
  },
  {
    path: "/contribute",
    element: <div>Contribute</div>,
    loader: GridLoader,
  },
];

let router = createBrowserRouter(routes);

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
