export enum Routes
{
    //public
    Home = "",

    //prptected
    Products = "products",
    Details = "details",
    Cart = "cart",

    //admin
    Admin = "admin",
    AddProduct = "admin/product/add",
    AddBrand = "admin/brand/add",
    AddShifter = "admin/shifter/add",
    AddSize = "admin/framesize/add",
    AddType = "admin/type/add"
}

export module Urls
{
    //public
    export const home = `/${Routes.Home}`;

    //protected
    export const products = `/${Routes.Products}`;
    export const details = `/${Routes.Details}`;
    export const cart = `/${Routes.Cart}`;
    
    //admin
    export const admin = `/${Routes.Admin}`;
    export const addProduct = `/${Routes.AddProduct}`;
    export const addBrand = `/${Routes.AddBrand}`;
    export const addShifter = `/${Routes.AddShifter}`;
    export const addSize = `/${Routes.AddSize}`;
    export const addType = `/${Routes.AddType}`;
}