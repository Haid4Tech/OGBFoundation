import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GridLoader } from "react-spinners";
import EventScreen from "./app/routes/events/events.tsx";
import StoriesScreen from "./app/routes/stories/stories.tsx";
import GalleryScreen from "./app/routes/gallery/gallery.tsx";
import TimelineScreen from "./app/routes/timeline/timeline.tsx";
import ContributeScreen from "./app/routes/contribute/contribute.tsx";
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
    element: <GalleryScreen />,
    loader: GridLoader,
  },
  {
    path: "/stories",
    element: <StoriesScreen />,
    loader: GridLoader,
  },
  {
    path: "/timeline",
    element: <TimelineScreen />,
    loader: GridLoader,
  },
  {
    path: "/contribute",
    element: <ContributeScreen />,
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
