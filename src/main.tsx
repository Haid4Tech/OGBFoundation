import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EventScreen from "./app/routes/events/events.tsx";
import StoriesScreen from "./app/routes/stories/stories.tsx";
import DynamicStory from "./app/routes/stories/stories.id.tsx";
import GalleryScreen from "./app/routes/gallery/gallery.tsx";
import TimelineScreen from "./app/routes/timeline/timeline.tsx";
import ContributeScreen from "./app/routes/contribute/contribute.tsx";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";

const routes = [
  {
    path: "/",
    Component: App,
  },
  {
    path: "/events",
    Component: EventScreen,
  },
  {
    path: "/gallery",
    Component: GalleryScreen,
  },
  {
    path: "/stories",
    Component: StoriesScreen,
  },
  {
    path: "/stories/:storiesId",
    Component: DynamicStory,
  },
  {
    path: "/timeline",
    Component: TimelineScreen,
  },
  {
    path: "/contribute",
    Component: ContributeScreen,
  },
];

const router = createBrowserRouter(routes);

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
