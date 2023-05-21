import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main/Main.jsx";
import Details from "./Components/Details/Details.jsx";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:details_id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`featuredjob.json`)
            .then((response) => response.json())
            .then((data) => data.find((job) => job.id === params.details_id)),
      },
      {
        path: "/appliedjob",
        element: <AppliedJobs></AppliedJobs>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
