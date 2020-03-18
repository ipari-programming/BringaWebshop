﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.2.1.0 (NJsonSchema v10.1.3.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class BicycleService {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "localhost:8080/";
    }

    /**
     * create
     * @param bicycleEntity bicycleEntity
     * @return OK
     */
    bicyclePost(bicycleEntity: BicycleEntity): Promise<BicycleEntity> {
        let url_ = this.baseUrl + "/api/bicycle";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(bicycleEntity);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBicyclePost(_response);
        });
    }

    protected processBicyclePost(response: Response): Promise<BicycleEntity> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <BicycleEntity>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 201) {
            return response.text().then((_responseText) => {
            return throwException("Created", status, _responseText, _headers);
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            return throwException("Unauthorized", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Forbidden", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not Found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BicycleEntity>(<any>null);
    }

    /**
     * update
     * @param bicycleEntity bicycleEntity
     * @return OK
     */
    bicyclePut(bicycleEntity: BicycleEntity): Promise<BicycleEntity> {
        let url_ = this.baseUrl + "/api/bicycle";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(bicycleEntity);

        let options_ = <RequestInit>{
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBicyclePut(_response);
        });
    }

    protected processBicyclePut(response: Response): Promise<BicycleEntity> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <BicycleEntity>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 201) {
            return response.text().then((_responseText) => {
            return throwException("Created", status, _responseText, _headers);
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            return throwException("Unauthorized", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Forbidden", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not Found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BicycleEntity>(<any>null);
    }

    /**
     * all
     * @return OK
     */
    allGet(): Promise<BicycleEntity[]> {
        let url_ = this.baseUrl + "/api/bicycle/all";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAllGet(_response);
        });
    }

    protected processAllGet(response: Response): Promise<BicycleEntity[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <BicycleEntity[]>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            return throwException("Unauthorized", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Forbidden", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not Found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BicycleEntity[]>(<any>null);
    }

    /**
     * getByItemNumber
     * @param data data
     * @return OK
     */
    byItemNumberPost(data: RequestBicycleSelectByItemNumber): Promise<BicycleEntity> {
        let url_ = this.baseUrl + "/api/bicycle/byItemNumber";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(data);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processByItemNumberPost(_response);
        });
    }

    protected processByItemNumberPost(response: Response): Promise<BicycleEntity> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <BicycleEntity>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 201) {
            return response.text().then((_responseText) => {
            return throwException("Created", status, _responseText, _headers);
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            return throwException("Unauthorized", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Forbidden", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not Found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BicycleEntity>(<any>null);
    }

    /**
     * allData
     * @return OK
     */
    allGet(): Promise<BicycleResponse[]> {
        let url_ = this.baseUrl + "/api/bicycle/data/all";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAllGet(_response);
        });
    }

    protected processAllGet(response: Response): Promise<BicycleResponse[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <BicycleResponse[]>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            return throwException("Unauthorized", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Forbidden", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not Found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BicycleResponse[]>(<any>null);
    }

    /**
     * getDataByItemNumber
     * @param data data
     * @return OK
     */
    byItemNumberPost(data: RequestBicycleSelectByItemNumber): Promise<BicycleResponse> {
        let url_ = this.baseUrl + "/api/bicycle/data/byItemNumber";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(data);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processByItemNumberPost(_response);
        });
    }

    protected processByItemNumberPost(response: Response): Promise<BicycleResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <BicycleResponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 201) {
            return response.text().then((_responseText) => {
            return throwException("Created", status, _responseText, _headers);
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            return throwException("Unauthorized", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Forbidden", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not Found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BicycleResponse>(<any>null);
    }

    /**
     * getDataById
     * @param id id
     * @return OK
     */
    data(id: number): Promise<BicycleResponse> {
        let url_ = this.baseUrl + "/api/bicycle/data/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processData(_response);
        });
    }

    protected processData(response: Response): Promise<BicycleResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <BicycleResponse>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            return throwException("Unauthorized", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Forbidden", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not Found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BicycleResponse>(<any>null);
    }

    /**
     * getById
     * @param id id
     * @return OK
     */
    bicycleGet(id: number): Promise<BicycleEntity> {
        let url_ = this.baseUrl + "/api/bicycle/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBicycleGet(_response);
        });
    }

    protected processBicycleGet(response: Response): Promise<BicycleEntity> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <BicycleEntity>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            return throwException("Unauthorized", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Forbidden", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not Found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BicycleEntity>(<any>null);
    }

    /**
     * delete
     * @param id id
     * @return OK
     */
    bicycleDelete(id: number): Promise<boolean> {
        let url_ = this.baseUrl + "/api/bicycle/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBicycleDelete(_response);
        });
    }

    protected processBicycleDelete(response: Response): Promise<boolean> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <boolean>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 204) {
            return response.text().then((_responseText) => {
            return throwException("No Content", status, _responseText, _headers);
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            return throwException("Unauthorized", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Forbidden", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<boolean>(<any>null);
    }
}

export interface BicycleEntity {
    Ar: number | undefined;
    Cikkszam: string | undefined;
    FelniAtmeroID: number | undefined;
    Id: number | undefined;
    MarkaID: number | undefined;
    TipusID: number | undefined;
    URL: string | undefined;
    ValtoTipus: number | undefined;
    VazmeretID: number | undefined;
}

export interface BicycleResponse {
    Ar: number | undefined;
    Cikkszam: string | undefined;
    FelniAtmero: string | undefined;
    FelniAtmeroID: number | undefined;
    Id: number | undefined;
    Marka: string | undefined;
    MarkaID: number | undefined;
    Tipus: string | undefined;
    TipusID: number | undefined;
    URL: string | undefined;
    Valto: string | undefined;
    ValtoTipus: number | undefined;
    Vazmeret: string | undefined;
    VazmeretID: number | undefined;
}

export interface RequestBicycleSelectByItemNumber {
    Cikkszam: string | undefined;
}

export class ApiException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}