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
require("rxjs/Rx");
var settings_1 = require("../../Shared/settings");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
var jsonRequestOptions_1 = require("../../Shared/jsonRequestOptions");
var CategoryService = (function () {
    function CategoryService(_http) {
        this._http = _http;
    }
    CategoryService.prototype.getUserCategories = function () {
        var jsonRequestOptions = new jsonRequestOptions_1.JsonRequestOptions();
        var url = settings_1.settings.serverURL + '/api/Category/GetUserCategories?isArchived=false';
        return this._http.get(url, jsonRequestOptions)
            .map(function (response) { return response.json(); })
            .catch(this.handleServerError);
    };
    CategoryService.prototype.addNewUserCategory = function (taskCategory) {
        var jsonRequestOptions = new jsonRequestOptions_1.JsonRequestOptions();
        var url = settings_1.settings.serverURL + '/api/Category/CreateNewTaskCategory';
        return this._http.post(url, JSON.stringify(taskCategory), jsonRequestOptions)
            .map(function (response) { return response.json(); })
            .catch(this.handleServerError);
    };
    CategoryService.prototype.handleServerError = function (error) {
        return Observable_1.Observable.throw(error.json().error);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map