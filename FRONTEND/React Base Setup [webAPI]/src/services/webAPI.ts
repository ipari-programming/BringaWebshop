<<<<<<< Updated upstream:FRONTEND/React Base Setup [webAPI]/src/services/webAPI.ts
import { SecurityAPI, DiakAPI, UserAPI } from "./settings/wrappers";
=======
import { SecurityAPI, UserAPI, BicycleAPI, BrandAPI, SizeAPI, ShifterAPI, TypeAPI, WheelDiameterAPI } from "./settings/wrappers";
>>>>>>> Stashed changes:WebUI/src/services/webAPI.ts
import { baseURL } from "./settings/base.url";
import { FetchProxy } from "./settings/fetch.proxy";
import { StorageKeys } from "./../settings/constats";
import { StorageService } from "./client/storage.service";

export module WebAPI
{
    const storageService: StorageService = new StorageService();

    const proxy = new FetchProxy();
    proxy.bearerToken = getToken()!;

    let signOutCallback: (() => void) | null = null;

    export const Security: SecurityAPI = new SecurityAPI(baseURL, proxy);
    export const Diak: DiakAPI = new DiakAPI(baseURL, proxy);
    export const User: UserAPI = new UserAPI(baseURL, proxy);
<<<<<<< Updated upstream:FRONTEND/React Base Setup [webAPI]/src/services/webAPI.ts
=======
    export const Bicycle : BicycleAPI = new BicycleAPI(baseURL, proxy);
    export const Brand : BrandAPI = new BrandAPI(baseURL, proxy);
    export const Size : SizeAPI = new SizeAPI(baseURL, proxy);
    export const Shifter : ShifterAPI = new ShifterAPI(baseURL, proxy);
    export const Type : TypeAPI = new TypeAPI(baseURL, proxy);
    export const WheelDiameter : WheelDiameterAPI = new WheelDiameterAPI(baseURL, proxy);
>>>>>>> Stashed changes:WebUI/src/services/webAPI.ts

    export function attachToConnectionCallback(callback: (res: Response) => void)
    {
        proxy.attachToConnectionCallback(callback);
    }

    export function clearConnectionCallback()
    {
        proxy.clearConnectionCallback();
    }

    export function IsTokenAssigned() : boolean
    {
        const token = getToken();
        return  token != null &&  token !== undefined;
    }

    export function getToken() : string | undefined
    {
        const token: string | undefined = storageService.read<string>(StorageKeys.JWT);
        return token;
    }
}