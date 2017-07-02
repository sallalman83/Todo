"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("../Shared/enum");
var UserTaskViewModel = (function () {
    function UserTaskViewModel() {
        this.StatusId = 1;
        this.statusesVM = enum_1.UserTaskStatus.create;
    }
    return UserTaskViewModel;
}());
exports.UserTaskViewModel = UserTaskViewModel;
//# sourceMappingURL=UserTask.js.map