import { Cart } from "../models/cart";
import { BicycleResponse } from "../services/client/bicycleService";

export interface IAppState
{
    //readonly variableName: objectType;
    readonly cart: Cart;
    readonly selectedBicycle: BicycleResponse;
}

export const setIntitialAppState = (): IAppState =>
{
    const appState: IAppState =
    {
        cart: new Cart(),
        selectedBicycle: {}
    };

    return appState;
}

export const intitialAppState: IAppState = setIntitialAppState();
