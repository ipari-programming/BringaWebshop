import { Cart } from "../models/cart";

export interface IAppState
{
    //readonly variableName: objectType;
    readonly cart: Cart;
}

export const setIntitialAppState = (): IAppState =>
{
    const appState: IAppState =
    {
        cart: new Cart()
    };

    return appState;
}

export const intitialAppState: IAppState = setIntitialAppState();
