import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/products/List";
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  PRODUCTS_ROUTE,
  CONTACT_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "./constants/routes";
import MainLayout from "./layouts/MainLayout";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductDetails from "./pages/products/Details";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={ABOUT_ROUTE} element={<AboutUs />} />
        <Route path={CONTACT_ROUTE} element={<ContactUs />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
        <Route path={PRODUCTS_ROUTE}>
          <Route index element={<ProductList />} />
          <Route path={":id"} element={<ProductDetails />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Routes;
