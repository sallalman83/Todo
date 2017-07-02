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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("../../services/Login/login.service");
var HeaderComponent = (function () {
    function HeaderComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.isAuthenticated = false;
        this.onAuthentication = new core_1.EventEmitter();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isProcessing = false;
    };
    HeaderComponent.prototype.logoutUser = function () {
        var _this = this;
        this.loginService.logoutUser().subscribe(function (x) {
            _this.onAuthentication.emit(false);
            _this.router.navigate(['login']);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeaderComponent.prototype, "onAuthentication", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: "todo-header",
            templateUrl: '../app/Components/Header/header.component.html'
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map