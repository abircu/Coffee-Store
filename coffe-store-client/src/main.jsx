import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffe from "./Components/AddCoffe.jsx";
import UpdateCoffe from "./Components/UpdateCoffe.jsx";
import SignUp from "./Components/SignUp.jsx";
import SignIn from "./Components/SignIn.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/addCoffe",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "/updateCoffe/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
