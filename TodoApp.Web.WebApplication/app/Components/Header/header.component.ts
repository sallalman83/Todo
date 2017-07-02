import { Component, OnInit, EventEmitter, Output  } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../../services/Login/login.service";


@Component({
    selector: "todo-header",
    templateUrl: '../app/Components/Header/header.component.html'
})

export class HeaderComponent implements OnInit {
    isProcessing: boolean;
    isAuthenticated: boolean = false;
    @Output() onAuthentication = new EventEmitter<boolean>();

    constructor(private loginService: LoginService, private router: Router) {

    }

    ngOnInit(): void {
        this.isProcessing = false;
    }

    logoutUser(): void {
        this.loginService.logoutUser().subscribe(x => {
            this.onAuthentication.emit(false);
            this.router.navigate(['login']);
        });
    }

}