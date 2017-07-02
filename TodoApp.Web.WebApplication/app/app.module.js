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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var loader_component_1 = require('./components/SharedComponents/Loader/loader.component');
var category_component_1 = require('./components/Category/category.component');
var login_component_1 = require('./components/Login/login.component');
var user_task_component_1 = require('./components/UserTasks/user.task.component');
var header_component_1 = require('./components/Header/header.component');
var register_component_1 = require('./components/Register/register.component');
var app_component_1 = require('./components/Application/app.component');
var TabularUserTask_component_1 = require('./components/UserTasks/Tabular/TabularUserTask.component');
var quick_add_component_1 = require('./components/UserTasks/QuickAdd/quick.add.component');
var login_service_1 = require('./Services/Login/login.service');
var category_service_1 = require('./Services/Category/category.service');
var user_task_service_1 = require('./Services/UserTask/user.task.service');
var mydatepicker_1 = require('mydatepicker');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, ng2_bs3_modal_1.Ng2Bs3ModalModule, forms_1.FormsModule, mydatepicker_1.MyDatePickerModule],
            declarations: [app_component_1.AppComponent, loader_component_1.LoaderComponent, category_component_1.CategoryComponent, TabularUserTask_component_1.TabularUserTaskComponent,
                login_component_1.LoginComponent, user_task_component_1.UserTaskComponent, header_component_1.HeaderComponent, register_component_1.RegisterComponent, quick_add_component_1.UserTaskQuickAddComponent],
            providers: [login_service_1.LoginService, { provide: common_1.APP_BASE_HREF, useValue: '/' }, category_service_1.CategoryService, user_task_service_1.TasksService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map