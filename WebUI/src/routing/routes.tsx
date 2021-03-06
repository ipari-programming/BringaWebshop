import * as React from "react";
import { Route, withRouter } from "react-router-dom";
import { Urls } from "./urls";

import HomePage from "../pages/home/home";
import { ProtectedRoute } from "./protectedRoute";
import ProductsPage from "../pages/products/products";
import DetailsPage from "../pages/details/details";
import { ProtectedRouteProps } from "./protectedRouteProps";
import { AdmindRoute } from "./adminRoute";
import AddProductPage from "./../pages/admin/product/add/addProducts";

import ExampleFormPage from "./../pages/formExample";
import CartPage from "./../pages/cart/cart";
import AdminPage from "./../pages/admin/admin";
import AddBrandPage from "./../pages/admin/brand/add/addBrands";
import AddShifterPage from "./../pages/admin/shifter/add/addShifter";
import AddFrameSizePage from "./../pages/admin/framesize/add/addFrameSize";
import AddTypePage from "./../pages/admin/type/add/addType";
import AddWheelDiameterPage from "./../pages/admin/wheeldiameter/add/addWheelDiameter";

const defaultProtectedRouteProps: ProtectedRouteProps =
{
    authenticationPath: Urls.home
};

export const AppRoutes = () =>
    <React.Fragment>
        <Route exact path={ Urls.home } component={ HomePage } />
        <Route exact path={ "/formexample" } component={ ExampleFormPage } />

        <ProtectedRoute {...defaultProtectedRouteProps} exact path={ Urls.products } component={ ProductsPage } />
        <ProtectedRoute {...defaultProtectedRouteProps} exact path={ Urls.details } component={ DetailsPage } />
        <ProtectedRoute {...defaultProtectedRouteProps} exact path={ Urls.cart } component={ CartPage } />

        <AdmindRoute {...defaultProtectedRouteProps} exact path={Urls.admin} component={ AdminPage } />
        <AdmindRoute {...defaultProtectedRouteProps} exact path={ Urls.addProduct } component={ AddProductPage } />
        <AdmindRoute {...defaultProtectedRouteProps} exact path={ Urls.addBrand } component={ AddBrandPage } />
        <AdmindRoute {...defaultProtectedRouteProps} exact path={ Urls.addShifter } component={ AddShifterPage } />
        <AdmindRoute {...defaultProtectedRouteProps} exact path={ Urls.addSize } component={ AddFrameSizePage } />
        <AdmindRoute {...defaultProtectedRouteProps} exact path={ Urls.addType } component={ AddTypePage } />
        <AdmindRoute {...defaultProtectedRouteProps} exact path={ Urls.AddWheelDiameter } component={ AddWheelDiameterPage } />
    </React.Fragment>
