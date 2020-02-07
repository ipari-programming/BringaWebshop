import { BicycleResponse } from "../services/client/bicycleService";

export class Cart
{
    private bicycles: BicycleResponse[] = [];

    public add = (bicycle: BicycleResponse): void =>
    {
        this.bicycles.push(bicycle);
    }

    public remove = (bicycle: BicycleResponse): void =>
    {
        this.bicycles.remove(bicycle);
    }

    public clear = (): void =>
    {
        this.bicycles = [];
    }

    public count = (): number =>
    {
        return this.bicycles.length;
    }

    public content = (): BicycleResponse[] =>
    {
        return this.bicycles;
    }
}