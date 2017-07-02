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
var user_task_service_1 = require("../../../services/UserTask/user.task.service");
var TabularUserTaskComponent = (function () {
    function TabularUserTaskComponent(tasksService) {
        this.tasksService = tasksService;
        this.isProcessing = true;
    }
    TabularUserTaskComponent.prototype.ngOnInit = function () {
        this.loadUserTasks();
    };
    TabularUserTaskComponent.prototype.loadUserTasks = function () {
        var _this = this;
        this.tasksService.getAllUserTasks().subscribe(function (x) {
            _this.isProcessing = false;
            _this.userTasks = x.Result;
        }, function (e) { });
    };
    TabularUserTaskComponent.prototype.deleteUserTask = function (userTaskViewModel, index) {
        if (confirm("Are you sure you want to delete this task?")) {
            this.tasksService.deleteUserTask(userTaskViewModel.Id).subscribe(function (x) { }, function (e) { });
            ;
            this.userTasks.splice(index, 1);
        }
    };
    TabularUserTaskComponent.prototype.editUserTask = function (userTaskViewModel) {
        alert(userTaskViewModel.Id);
    };
    TabularUserTaskComponent = __decorate([
        core_1.Component({
            selector: 'tabular-tasks',
            templateUrl: '../app/Components/UserTasks/Tabular/TabularUserTask.component.html',
            providers: [user_task_service_1.TasksService]
        }), 
        __metadata('design:paramtypes', [user_task_service_1.TasksService])
    ], TabularUserTaskComponent);
    return TabularUserTaskComponent;
}());
exports.TabularUserTaskComponent = TabularUserTaskComponent;
//# sourceMappingURL=TabularUserTask.component.js.map