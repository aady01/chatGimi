import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage";
import DashBoard from "./routes/dashBoard/dashBoard";
import ChatPage from "./routes/chatPage/ChatPage";
import RootLayout from "./layouts/routeLayout/RootLayout";
import DasboardLayout from "./layouts/dashboardLayout/DasboardLayout";
import { SignIn, SignUp } from "@clerk/clerk-react";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignIn />,
      },
      {
        path: "/sign-up/*",
        element: <SignUp />,
      },
      {
        element: <DasboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashBoard />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
      {},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
