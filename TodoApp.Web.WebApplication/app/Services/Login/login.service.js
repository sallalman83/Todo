"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/Rx');
var settings_1 = require("../../Shared/settings");
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var jsonRequestOptions_1 = require("../../Shared/jsonRequestOptions");
var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.isAuthenticated = function () {
        var jsonRequestOptions = new jsonRequestOptions_1.JsonRequestOptions();
        var url = settings_1.settings.serverURL + '/api/User/IsAuthenticated';
        return this._http.get(url, jsonRequestOptions)
            .map(function (response) {
            var _result = response.json();
            LoginService.onAuthentication.emit(_result.Result);
            return _result;
        })
            .catch(this.handleServerError);
    };
    LoginService.prototype.loginUser = function (loginViewModel) {
        var jsonRequestOptions = new jsonRequestOptions_1.JsonRequestOptions();
        var url = settings_1.settings.serverURL + '/api/User/LoginUser';
        return this._http.post(url, JSON.stringify(loginViewModel), jsonRequestOptions)
            .map(function (response) {
            var _result = response.json();
            if (typeof (_result.error) == "undefined")
                LoginService.onAuthentication.emit(true);
            return _result;
        })
            .catch(this.handleServerError);
    };
    LoginService.prototype.registerNewUser = function (registerUserViewModel) {
        var jsonRequestOptions = new jsonRequestOptions_1.JsonRequestOptions();
        var url = settings_1.settings.serverURL + '/api/User/RegisterNewUser';
        return this._http.post(url, JSON.stringify(registerUserViewModel), jsonRequestOptions)
            .map(function (response) { return response.json(); })
            .catch(this.handleServerError);
    };
    LoginService.prototype.isUserNameExists = function (userName) {
        var jsonRequestOptions = new jsonRequestOptions_1.JsonRequestOptions();
        var url = settings_1.settings.serverURL + '/api/User/IsUserNameExists?userName=' + userName;
        return this._http.get(url, jsonRequestOptions)
            .map(function (response) { return response.json(); })
            .catch(this.handleServerError);
    };
    LoginService.prototype.logoutUser = function () {
        var jsonRequestOptions = new jsonRequestOptions_1.JsonRequestOptions();
        var url = settings_1.settings.serverURL + '/api/User/Logout';
        localStorage.setItem("access_token", "");
        localStorage.setItem("token_type", "");
        LoginService.onAuthentication.emit(false);
        return this._http.post(url, jsonRequestOptions)
            .map(function (response) { return response.json(); })
            .catch(this.handleServerError);
    };
    LoginService.prototype.handleServerError = function (error) {
        return Observable_1.Observable.throw(error.json().error);
    };
    LoginService.onAuthentication = new core_1.EventEmitter();
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginService, "onAuthentication", void 0);
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map