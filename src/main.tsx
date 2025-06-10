import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layout.tsx";
import EventScreen from "./app/routes/events/events.tsx";
import StoriesScreen from "./app/routes/stories/stories.tsx";
import DynamicStory from "./app/routes/stories/stories.id.tsx";
import GalleryScreen from "./app/routes/gallery/gallery.tsx";
import TimelineScreen from "./app/routes/timeline/timeline.tsx";
import ContributeScreen from "./app/routes/contribute/contribute.tsx";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Layout />, // Wrap all with layout
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "events",
        element: <EventScreen />,
      },
      {
        path: "gallery",
        element: <GalleryScreen />,
      },
      {
        path: "stories",
        element: <StoriesScreen />,
      },
      {
        path: "stories/:storiesId",
        element: <DynamicStory />,
      },
      {
        path: "timeline",
        element: <TimelineScreen />,
      },
      {
        path: "contribute",
        element: <ContributeScreen />,
      },
    ],
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
