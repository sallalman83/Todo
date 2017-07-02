import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/Login/login.service";
import { Router } from "@angular/router";
declare var $: any;


@Component({
    //selector: "todo-app",
    templateUrl: '../app/Components/UserTasks/user.task.component.html',
    providers: [LoginService]
})

export class UserTaskComponent implements OnInit {
    isProcessing: boolean;
    isAuthenticated: boolean = false;

    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit(): void {
        this.isProcessing = true;
        this.loginService.isAuthenticated().subscribe(x => {
            this.isProcessing = false;
            this.isAuthenticated = x.Result;
            if (!this.isAuthenticated)
                this.router.navigate(['login']);
        });
    }
}