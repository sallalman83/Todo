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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var login_service_1 = require("../../Services/Login/login.service");
var LoginViewModel_1 = require("../../Model/LoginViewModel");
var LoginComponent = LoginComponent_1 = (function () {
    function LoginComponent(loginService, fb, router) {
        this.loginService = loginService;
        this.router = router;
        this.isProcessing = false;
        this.isAuthenticated = false;
        this.initialized = false;
        this.invalidLogin = false;
        this.loginViewModel = new LoginViewModel_1.LoginViewModel();
        this.ngLoginForm = fb.group({
            userName: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isProcessing = false;
        eval('$("#userName").focus();');
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.initialized = true;
        this.invalidLogin = false;
        if (this.ngLoginForm.valid) {
            this.isProcessing = true;
            this.loginService.loginUser(this.loginViewModel).subscribe(function (x) {
                _this.isProcessing = false;
                var _result = JSON.parse(x.Result);
                if (typeof (_result.error) != "undefined") {
                    _this.invalidLogin = true;
                }
                else {
                    _this.invalidLogin = false;
                    localStorage.setItem("access_token", _result.access_token);
                    localStorage.setItem("token_type", _result.token_type);
                    localStorage.setItem("userName", _result.userName);
                    LoginComponent_1.onAuthentication.emit(true);
                    _this.router.navigate(['home']);
                }
            }, function (e) {
                _this.invalidLogin = true;
            });
        }
    };
    return LoginComponent;
}());
LoginComponent.onAuthentication = new core_1.EventEmitter();
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginComponent, "onAuthentication", void 0);
LoginComponent = LoginComponent_1 = __decorate([
    core_1.Component({
        templateUrl: '../app/Components/Login/login.component.html',
        styleUrls: ['../app/Components/Login/login.component.css']
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, forms_1.FormBuilder,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var LoginComponent_1;
//# sourceMappingURL=login.component.js.map