import 'rxjs/Rx';
import { settings } from "../../Shared/settings";
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { LoginViewModel } from "../../Model/LoginViewModel";
import { RegisterUserViewModel } from "../../Model/RegisterUserViewModel";
import { JsonRequestOptions, LoginRequestOptions } from "../../Shared/jsonRequestOptions";



@Injectable()
export class LoginService {
    @Output() static onAuthentication = new EventEmitter<boolean>();
    constructor(private _http: Http) { }

    isAuthenticated(): Observable<any> {
        let jsonRequestOptions: JsonRequestOptions = new JsonRequestOptions();
        let url: string = settings.serverURL + '/api/User/IsAuthenticated';
        return this._http.get(url, jsonRequestOptions)
            .map((response: Response) => {
                var _result = <any>response.json()
                LoginService.onAuthentication.emit(_result.Result);
                return _result;
            })
            .catch(this.handleServerError);
    }

    loginUser(loginViewModel: LoginViewModel): Observable<any> {
        let jsonRequestOptions: JsonRequestOptions = new JsonRequestOptions();
        let url: string = settings.serverURL + '/api/User/LoginUser';
        return this._http.post(url, JSON.stringify(loginViewModel), jsonRequestOptions)
            .map((response: Response) => {
                var _result = <any>response.json()
                if (typeof (_result.error) == "undefined")
                    LoginService.onAuthentication.emit(true);
                return _result;
            })
            .catch(this.handleServerError);
    }
    registerNewUser(registerUserViewModel: RegisterUserViewModel): Observable<any> {
        let jsonRequestOptions: JsonRequestOptions = new JsonRequestOptions();
        let url: string = settings.serverURL + '/api/User/RegisterNewUser';
        return this._http.post(url, JSON.stringify(registerUserViewModel), jsonRequestOptions)
            .map((response: Response) => <any>response.json())
            .catch(this.handleServerError);
    }
    isUserNameExists(userName: string): Observable<any> {
        let jsonRequestOptions: JsonRequestOptions = new JsonRequestOptions();
        let url: string = settings.serverURL + '/api/User/IsUserNameExists?userName=' + userName;
        return this._http.get(url, jsonRequestOptions)
            .map((response: Response) => <any>response.json())
            .catch(this.handleServerError);
    }
    logoutUser(): Observable<any> {
        let jsonRequestOptions: JsonRequestOptions = new JsonRequestOptions();
        let url: string = settings.serverURL + '/api/User/Logout';
        localStorage.setItem("access_token", "");
        localStorage.setItem("token_type", "");
        LoginService.onAuthentication.emit(false);
        return this._http.post(url, jsonRequestOptions)
            .map((response: Response) => <any>response.json())
            .catch(this.handleServerError);
    }

    private handleServerError(error: Response) {
        return Observable.throw(error.json().error);
    }
}
