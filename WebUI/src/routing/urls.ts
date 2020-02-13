export enum Routes
{
    Home = "",
    Products = "products",
    Details = "details",
    Cart = "cart"
}

export module Urls
{
    export const home = `/${Routes.Home}`;
    export const products = `/${Routes.Products}`;
    export const details = `/${Routes.Details}`;
    export const cart = `/${Routes.Cart}`;
}