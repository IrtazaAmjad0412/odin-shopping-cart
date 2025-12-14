import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import { Home } from "../pages/Home.tsx";
import { Shop } from "../pages/Shop.tsx";
import { Cart } from "../pages/Cart.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
