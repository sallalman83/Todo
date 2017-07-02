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
var login_service_1 = require("../../services/Login/login.service");
var AppComponent = (function () {
    function AppComponent(loginService) {
        var _this = this;
        this.loginService = loginService;
        this.isProcessing = false;
        this.isAuthenticated = false;
        this.cssMainClass = "col-md-8";
        this.myEvent = new core_1.EventEmitter();
        login_service_1.LoginService.onAuthentication.subscribe(function (x) {
            _this.isAuthenticated = x;
            _this.updateCssClass();
        });
    }
    AppComponent.prototype.updateCssClass = function () {
        if (this.isAuthenticated)
            this.cssMainClass = "col-md-8";
        else
            this.cssMainClass = "col-md-12";
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.isAuthenticated().subscribe(function (x) {
            _this.isAuthenticated = x.Result;
            _this.updateCssClass();
        });
    };
    AppComponent.prototype.onAuthentication = function (status) {
        this.isAuthenticated = status;
        this.updateCssClass();
    };
    return AppComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppComponent.prototype, "myEvent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "todo-app",
        templateUrl: '../app/Components/Application/app.component.html',
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map