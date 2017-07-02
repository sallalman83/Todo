"use strict";
(function (DBOperation) {
    DBOperation[DBOperation["create"] = 1] = "create";
    DBOperation[DBOperation["update"] = 2] = "update";
    DBOperation[DBOperation["delete"] = 3] = "delete";
})(exports.DBOperation || (exports.DBOperation = {}));
var DBOperation = exports.DBOperation;
(function (UserTaskStatus) {
    UserTaskStatus[UserTaskStatus["create"] = 1] = "create";
    UserTaskStatus[UserTaskStatus["update"] = 2] = "update";
    UserTaskStatus[UserTaskStatus["delete"] = 3] = "delete";
})(exports.UserTaskStatus || (exports.UserTaskStatus = {}));
var UserTaskStatus = exports.UserTaskStatus;
//# sourceMappingURL=enum.js.map