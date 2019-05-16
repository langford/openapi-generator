/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import IHttpClient from "../IHttpClient";
import { inject, injectable } from "inversify";
import { IAPIConfiguration } from "../IAPIConfiguration";
import { Headers } from "../Headers";
import HttpResponse from "../HttpResponse";

import { User } from '../model/user';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class UserService {
    private basePath: string = 'http://petstore.swagger.io/v2';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Create user
     * This can only be done by the logged in user.
     * @param body Created user object
     
     */
    public createUser(body: User, observe?: 'body', headers?: Headers): Observable<any>;
    public createUser(body: User, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public createUser(body: User, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!body){
            throw new Error('Required parameter body was null or undefined when calling createUser.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/user`, body , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <any>(httpResponse.response));
        }
        return response;
    }


    /**
     * Creates list of users with given input array
     * 
     * @param body List of user object
     
     */
    public createUsersWithArrayInput(body: Array<User>, observe?: 'body', headers?: Headers): Observable<any>;
    public createUsersWithArrayInput(body: Array<User>, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public createUsersWithArrayInput(body: Array<User>, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!body){
            throw new Error('Required parameter body was null or undefined when calling createUsersWithArrayInput.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/user/createWithArray`, body , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <any>(httpResponse.response));
        }
        return response;
    }


    /**
     * Creates list of users with given input array
     * 
     * @param body List of user object
     
     */
    public createUsersWithListInput(body: Array<User>, observe?: 'body', headers?: Headers): Observable<any>;
    public createUsersWithListInput(body: Array<User>, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public createUsersWithListInput(body: Array<User>, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!body){
            throw new Error('Required parameter body was null or undefined when calling createUsersWithListInput.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/user/createWithList`, body , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <any>(httpResponse.response));
        }
        return response;
    }


    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param username The name that needs to be deleted
     
     */
    public deleteUser(username: string, observe?: 'body', headers?: Headers): Observable<any>;
    public deleteUser(username: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public deleteUser(username: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!username){
            throw new Error('Required parameter username was null or undefined when calling deleteUser.');
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.delete(`${this.basePath}/user/${encodeURIComponent(String(username))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <any>(httpResponse.response));
        }
        return response;
    }


    /**
     * Get user by user name
     * 
     * @param username The name that needs to be fetched. Use user1 for testing.
     
     */
    public getUserByName(username: string, observe?: 'body', headers?: Headers): Observable<User>;
    public getUserByName(username: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<User>>;
    public getUserByName(username: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!username){
            throw new Error('Required parameter username was null or undefined when calling getUserByName.');
        }

        headers['Accept'] = 'application/xml';

        const response: Observable<HttpResponse<User>> = this.httpClient.get(`${this.basePath}/user/${encodeURIComponent(String(username))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <User>(httpResponse.response));
        }
        return response;
    }


    /**
     * Logs user into the system
     * 
     * @param username The user name for login
     * @param password The password for login in clear text
     
     */
    public loginUser(username: string, password: string, observe?: 'body', headers?: Headers): Observable<string>;
    public loginUser(username: string, password: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public loginUser(username: string, password: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!username){
            throw new Error('Required parameter username was null or undefined when calling loginUser.');
        }

        if (!password){
            throw new Error('Required parameter password was null or undefined when calling loginUser.');
        }

        let queryParameters: string[] = [];
        if (username !== undefined) {
            queryParameters.push("username="+encodeURIComponent(String(username)));
        }
        if (password !== undefined) {
            queryParameters.push("password="+encodeURIComponent(String(password)));
        }

        headers['Accept'] = 'application/xml';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.basePath}/user/login?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <string>(httpResponse.response));
        }
        return response;
    }


    /**
     * Logs out current logged in user session
     * 
     
     */
    public logoutUser(observe?: 'body', headers?: Headers): Observable<any>;
    public logoutUser(observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public logoutUser(observe: any = 'body', headers: Headers = {}): Observable<any> {
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.get(`${this.basePath}/user/logout`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <any>(httpResponse.response));
        }
        return response;
    }


    /**
     * Updated user
     * This can only be done by the logged in user.
     * @param username name that need to be deleted
     * @param body Updated user object
     
     */
    public updateUser(username: string, body: User, observe?: 'body', headers?: Headers): Observable<any>;
    public updateUser(username: string, body: User, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public updateUser(username: string, body: User, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!username){
            throw new Error('Required parameter username was null or undefined when calling updateUser.');
        }

        if (!body){
            throw new Error('Required parameter body was null or undefined when calling updateUser.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.put(`${this.basePath}/user/${encodeURIComponent(String(username))}`, body , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <any>(httpResponse.response));
        }
        return response;
    }

}
