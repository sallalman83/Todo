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
var category_service_1 = require('../../Services/Category/category.service');
var TaskCategory_1 = require("../../Model/TaskCategory");
var forms_1 = require("@angular/forms");
var CategoryComponent = (function () {
    function CategoryComponent(categoryService, fb) {
        this.categoryService = categoryService;
        this.taskCategory = new TaskCategory_1.TaskCategoryViewModel();
        this.initialized = false;
        this.ngCategoryForm = fb.group({
            Name: ["", forms_1.Validators.required],
            Color: [""],
            IsArchived: [""]
        });
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.isProcessing = true;
        this.taskCategory = new TaskCategory_1.TaskCategoryViewModel();
        this.loadUserCategories();
        this.activateColorPicker(this);
    };
    CategoryComponent.prototype.loadUserCategories = function () {
        var _this = this;
        this.categoryService.getUserCategories().subscribe(function (x) {
            _this.isProcessing = false;
            _this.userCategories = JSON.parse(x.Result);
        });
    };
    CategoryComponent.prototype.submit = function () {
        var _this = this;
        this.initialized = true;
        if (this.ngCategoryForm.valid) {
            this.isProcessing = true;
            this.categoryService.addNewUserCategory(this.taskCategory).subscribe(function (x) {
                _this.taskCategory = new TaskCategory_1.TaskCategoryViewModel();
                _this.isProcessing = false;
                _this.loadUserCategories();
                _this.initialized = false;
                $('#quickAddProject').modal('hide');
            }, function (e) {
            });
        }
    };
    CategoryComponent.prototype.activateColorPicker = function (obj) {
        $('#color').ColorPicker({
            onChange: function (hsb, hex, rgb) {
                obj.taskCategory.Color = '#' + hex;
            }
        });
    };
    CategoryComponent = __decorate([
        core_1.Component({
            selector: "categories",
            templateUrl: '../app/Components/Category/category.component.html',
            styleUrls: ['../app/Components/Category/category.component.css']
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService, forms_1.FormBuilder])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map