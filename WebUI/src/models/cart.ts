import { BicycleResponse } from "./../services/client/bicycleService";

export class Cart
{
    private _bicycles: BicycleResponse[] = [];

    public add = (bicycle: BicycleResponse): void =>
    {
        this._bicycles.push(bicycle);
    }

    public remove = (bicycle: BicycleResponse): void =>
    {
        this._bicycles.remove(bicycle);
    }

    public clear = (): void =>
    {
        this._bicycles = [];
    }

    public count = (): number =>
    {
        return this._bicycles.length;
    }

    public content = (): BicycleResponse[] =>
    {
        return this._bicycles;
    }
}