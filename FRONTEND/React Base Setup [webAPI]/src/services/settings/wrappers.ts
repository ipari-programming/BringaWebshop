import { SecurityService } from "./../client/securityService";
<<<<<<< Updated upstream:FRONTEND/React Base Setup [webAPI]/src/services/settings/wrappers.ts
import { DiakService } from "./../client/diakService";
import { StorageService } from "./../client/storage.service";
import { UserService } from "../client/userService";
=======
import { UserService } from "./../client/userService";
import { BicycleService } from "./../client/bicycleService";
import { BrandService } from "./../client/brandService";
import { SizeService } from "./../client/sizeService";
import { ShifterService } from "./../client/shifterService";
import { TypeService } from "./../client/typeService";
import { WheelDiameterService } from "./../client/wheelDiameterService";

export class SecurityAPI extends SecurityService
{
    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> })
    {
        super(baseUrl, http);
        this.jsonParseReviver = ReviveDateTime;
    }
}

export class UserAPI extends UserService
{
    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> })
    {
        super(baseUrl, http);
        this.jsonParseReviver = ReviveDateTime;
    }
}

export class BicycleAPI extends BicycleService
{
    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> })
    {
        super(baseUrl, http);
        this.jsonParseReviver = ReviveDateTime;
    }
}

export class BrandAPI extends BrandService
{
    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> })
    {
        super(baseUrl, http);
        this.jsonParseReviver = ReviveDateTime;
    }
}
>>>>>>> Stashed changes:WebUI/src/services/settings/wrappers.ts

export class ShifterAPI extends ShifterService
{
    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> })
    {
        super(baseUrl, http);
        this.jsonParseReviver = ReviveDateTime;
    }
}

<<<<<<< Updated upstream:FRONTEND/React Base Setup [webAPI]/src/services/settings/wrappers.ts
export class DiakAPI extends DiakService
=======
export class SizeAPI extends SizeService
>>>>>>> Stashed changes:WebUI/src/services/settings/wrappers.ts
{
    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> })
    {
        super(baseUrl, http);
        this.jsonParseReviver = ReviveDateTime;
    }
}

<<<<<<< Updated upstream:FRONTEND/React Base Setup [webAPI]/src/services/settings/wrappers.ts
export class UserAPI extends UserService
=======
export class TypeAPI extends TypeService
{
    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> })
    {
        super(baseUrl, http);
        this.jsonParseReviver = ReviveDateTime;
    }
}

export class WheelDiameterAPI extends WheelDiameterService
>>>>>>> Stashed changes:WebUI/src/services/settings/wrappers.ts
{
    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> })
    {
        super(baseUrl, http);
        this.jsonParseReviver = ReviveDateTime;
    }
}

function ReviveDateTime(key: any, value: any): any
{
    const DATE_PREFIX = "JsonDateHandling";
    if (typeof value === "string" && value.startsWith(DATE_PREFIX))
    {
        const datePart = value.substr(DATE_PREFIX.length);
        const converted = new Date(datePart)
        return converted;
    }

    return value;
}