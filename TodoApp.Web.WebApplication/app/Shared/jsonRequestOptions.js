"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var JsonRequestOptions = (function (_super) {
    __extends(JsonRequestOptions, _super);
    function JsonRequestOptions() {
        var _this = _super.call(this) || this;
        _this.headers.append('Content-Type', 'application/json');
        _this.headers.append('Access-Control-Allow-Origin', '*');
        if (localStorage.getItem("access_token") != null && localStorage.getItem("access_token") != "") {
            if (localStorage.getItem("token_type") != null && localStorage.getItem("token_type") != "") {
                _this.headers.append('Authorization', localStorage.getItem("token_type") + " " + localStorage.getItem("access_token"));
            }
        }
        return _this;
    }
    return JsonRequestOptions;
}(http_1.BaseRequestOptions));
exports.JsonRequestOptions = JsonRequestOptions;
var LoginRequestOptions = (function (_super) {
    __extends(LoginRequestOptions, _super);
    function LoginRequestOptions() {
        var _this = _super.call(this) || this;
        _this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        _this.headers.append('Access-Control-Allow-Origin', '*');
        return _this;
    }
    return LoginRequestOptions;
}(http_1.BaseRequestOptions));
exports.LoginRequestOptions = LoginRequestOptions;
//# sourceMappingURL=jsonRequestOptions.js.map