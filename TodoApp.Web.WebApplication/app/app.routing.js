"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./components/Login/login.component');
var user_task_component_1 = require('./components/UserTasks/user.task.component');
var register_component_1 = require('./components/Register/register.component');
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: user_task_component_1.UserTaskComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'RegisterUser', component: register_component_1.RegisterComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map