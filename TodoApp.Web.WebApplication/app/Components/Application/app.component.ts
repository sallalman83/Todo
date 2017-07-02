import { Component, OnInit, EventEmitter, Output  } from "@angular/core";
import { LoginService } from "../../services/Login/login.service";

@Component({
    selector: "todo-app",
    templateUrl: '../app/Components/Application/app.component.html',
    providers: [LoginService]
})

export class AppComponent implements OnInit {
    isProcessing: boolean = false;
    isAuthenticated: boolean = false;
    cssMainClass: string = "col-md-8";

    @Output() myEvent = new EventEmitter();
    constructor(public loginService: LoginService) {
        LoginService.onAuthentication.subscribe((x: boolean) => {
            this.isAuthenticated = x;
            this.updateCssClass();
        });
    }

    updateCssClass(): void {
        if (this.isAuthenticated)
            this.cssMainClass = "col-md-8";
        else
            this.cssMainClass = "col-md-12";
    }

    ngOnInit(): void {
        this.loginService.isAuthenticated().subscribe(x => {
            this.isAuthenticated = x.Result;
            this.updateCssClass();
        });
    }

    onAuthentication(status: boolean) {
        this.isAuthenticated = status;
        this.updateCssClass();
    }
}