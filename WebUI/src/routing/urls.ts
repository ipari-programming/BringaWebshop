export enum Routes
{
    Home = "",
    Products = "products"
}

export module Urls
{
    export const home = `/${Routes.Home}`;
    export const products = `/${Routes.Products}`;
}