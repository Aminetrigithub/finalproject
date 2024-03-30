// import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Brands from "./Components/Brands/Brands";
import { Cart } from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "categories", element: <Categories /> },
      { path: "brands", element: <Brands /> },
      { path: "cart", element: <Cart /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers}> </RouterProvider>;
}

export default App;
