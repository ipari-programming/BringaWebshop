export enum Routes
{
    Home = "",
    Products = "products",
    Details = "Details"
}

export module Urls
{
    export const home = `/${Routes.Home}`;
    export const products = `/${Routes.Products}`;
    export const details = `/${Routes.Details}`;
}