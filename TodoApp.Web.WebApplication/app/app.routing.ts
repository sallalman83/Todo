import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/Login/login.component';
import { UserTaskComponent } from './components/UserTasks/user.task.component';
import { RegisterComponent } from './components/Register/register.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: UserTaskComponent },
    { path: 'login', component: LoginComponent },
    { path: 'RegisterUser', component: RegisterComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);