"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var http_1 = require('@angular/http');
var JsonRequestOptions = (function (_super) {
    __extends(JsonRequestOptions, _super);
    function JsonRequestOptions() {
        _super.call(this);
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
        if (localStorage.getItem("access_token") != null && localStorage.getItem("access_token") != "") {
            if (localStorage.getItem("token_type") != null && localStorage.getItem("token_type") != "") {
                this.headers.append('Authorization', localStorage.getItem("token_type") + " " + localStorage.getItem("access_token"));
            }
        }
    }
    return JsonRequestOptions;
}(http_1.BaseRequestOptions));
exports.JsonRequestOptions = JsonRequestOptions;
var LoginRequestOptions = (function (_super) {
    __extends(LoginRequestOptions, _super);
    function LoginRequestOptions() {
        _super.call(this);
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('Access-Control-Allow-Origin', '*');
    }
    return LoginRequestOptions;
}(http_1.BaseRequestOptions));
exports.LoginRequestOptions = LoginRequestOptions;
//# sourceMappingURL=jsonRequestOptions.js.map