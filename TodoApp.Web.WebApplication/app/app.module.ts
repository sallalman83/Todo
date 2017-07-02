import { NgModule, Component} from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { routing } from './app.routing';
import { LoaderComponent } from './components/SharedComponents/Loader/loader.component';
import { CategoryComponent } from './components/Category/category.component';
import { LoginComponent } from './components/Login/login.component';
import { UserTaskComponent } from './components/UserTasks/user.task.component';
import { HeaderComponent } from './components/Header/header.component';
import { RegisterComponent } from './components/Register/register.component';
import { AppComponent } from './components/Application/app.component';
import { TabularUserTaskComponent } from './components/UserTasks/Tabular/TabularUserTask.component';
import { UserTaskQuickAddComponent } from './components/UserTasks/QuickAdd/quick.add.component';
import { LoginService} from './Services/Login/login.service';
import { CategoryService} from './Services/Category/category.service';
import { TasksService} from './Services/UserTask/user.task.service';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule, FormsModule, MyDatePickerModule],
    declarations: [AppComponent, LoaderComponent, CategoryComponent, TabularUserTaskComponent,
        LoginComponent, UserTaskComponent, HeaderComponent, RegisterComponent, UserTaskQuickAddComponent],
    providers: [LoginService, { provide: APP_BASE_HREF, useValue: '/' }, CategoryService, TasksService],
    bootstrap: [AppComponent]
})


export class AppModule {
}
