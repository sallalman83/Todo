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
var RegisterUserViewModel_1 = require("../../Model/RegisterUserViewModel");
var RegisterComponent = (function () {
    function RegisterComponent(loginService, fb, router) {
        this.loginService = loginService;
        this.router = router;
        this.isProcessing = false;
        this.registrationError = false;
        this.initialized = false;
        this.registerViewModel = new RegisterUserViewModel_1.RegisterUserViewModel();
        this.ngRegisterForm = fb.group({
            userName: [null, forms_1.Validators.required, this.userNameExists.bind(this)],
            password: ["", forms_1.Validators.required],
            ConfirmPassword: ["", forms_1.Validators.required, this.passwordCompare.bind(this)],
            EmailAddress: ["", forms_1.Validators.required, this.isValidEmail.bind(this)]
        });
    }
    RegisterComponent.prototype.isValidCaharacter = function (input) {
        return new Promise(function (resolve, reject) {
            var _reg = new RegExp(/^s*([0-9a-zA-Z]*)*$/);
            if (input != null && input.value != null && input.value != "") {
                if (_reg.test(input.value)) {
                    resolve({ "isValidCaharacter": null });
                }
                else
                    resolve({ "isValidCaharacter": true });
            }
        });
    };
    RegisterComponent.prototype.isValidEmail = function (input) {
        return new Promise(function (resolve, reject) {
            var _reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
            if (input != null && input.value != null && input.value != "") {
                if (_reg.test(input.value)) {
                    resolve({ "isValidEmail": null });
                }
                else
                    resolve({ "isValidEmail": true });
            }
        });
    };
    RegisterComponent.prototype.userNameExists = function (input) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (input != null && input.value != null && input.value != "") {
                _this.loginService.isUserNameExists(input.value)
                    .subscribe(function (x) {
                    if (x)
                        resolve({ "userNameExists": true });
                    else
                        resolve({ "userNameExists": null });
                });
            }
            else
                resolve({ "userNameExists": null });
        });
    };
    RegisterComponent.prototype.passwordCompare = function (input) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.ngRegisterForm.controls['ConfirmPassword'].value == _this.ngRegisterForm.controls['password'].value) {
                resolve({ "passwordCompare": null });
            }
            else {
                resolve({ "passwordCompare": true });
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.isProcessing = false;
        eval('$("#userName").focus();');
    };
    RegisterComponent.prototype.isValidForm = function () {
        return !this.ngRegisterForm.controls['userName'].hasError('required') &&
            !this.ngRegisterForm.controls['userName'].hasError('userNameExists') &&
            !this.ngRegisterForm.controls['password'].hasError('required') &&
            !this.ngRegisterForm.controls['ConfirmPassword'].hasError('required') &&
            !this.ngRegisterForm.controls['ConfirmPassword'].hasError('passwordCompare') &&
            !this.ngRegisterForm.controls['EmailAddress'].hasError('required') &&
            !this.ngRegisterForm.controls['EmailAddress'].hasError('isValidEmail');
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.registrationError = false;
        this.initialized = true;
        if (this.isValidForm()) {
            this.isProcessing = true;
            this.loginService.registerNewUser(this.registerViewModel).subscribe(function (x) {
                if (x.Message.toString() == "1") {
                    _this.registrationError = false;
                    _this.isProcessing = false;
                    alert("User registered successfully...");
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.registrationError = true;
                    _this.errors = x.Result;
                }
            }, function (e) {
                _this.isProcessing = false;
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: "register-user",
        templateUrl: '../app/Components/Register/register.component.html',
        styleUrls: ['../app/Components/Register/register.component.css']
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, forms_1.FormBuilder,
        router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map