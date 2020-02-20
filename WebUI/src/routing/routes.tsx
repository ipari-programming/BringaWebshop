import * as React from "react";
import { Route } from "react-router-dom";
import { Urls } from "./urls";

import HomePage from "../pages/home/home";
import { ProtectedRoute } from "./protectedRoute";
import ProductsPage from "../pages/products/products";
import DetailsPage from "../pages/details/details";
import CartPage from "../pages/cart/cart";
import { ProtectedRouteProps } from "./protectedRouteProps";
import { AdmindRoute } from "./adminRoute";
import AddProductPage from "./../pages/admin/product/add/addProducts";
import AdminPage from "./../pages/admin/admin";

const defaultProtectedRouteProps: ProtectedRouteProps =
{
    authenticationPath: Urls.home
};

export const AppRoutes = () =>
    <React.Fragment>
        <Route exact path={ Urls.home } component={ HomePage } />

        <ProtectedRoute {...defaultProtectedRouteProps} exact path={ Urls.products } component={ ProductsPage } />
        <ProtectedRoute {...defaultProtectedRouteProps} exact path={ Urls.details } component={ DetailsPage } />
        <ProtectedRoute {...defaultProtectedRouteProps} exact path={ Urls.cart } component={ CartPage } />
        <ProtectedRoute {...defaultProtectedRouteProps} exact path={ Urls.admin } component={ AdminPage } />
        
        <AdmindRoute {...defaultProtectedRouteProps} exact path={ Urls.addProduct } component={ AddProductPage } />
    </React.Fragment>
