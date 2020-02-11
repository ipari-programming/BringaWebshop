export enum Routes
{
    Home = "",
    Products = "products",
    Details = "details"
}

export module Urls
{
    export const home = `/${Routes.Home}`;
    export const products = `/${Routes.Products}`;
    export const details = `/${Routes.Details}`;
}