import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService} from '../../Services/Login/login.service';
import { LoginViewModel } from "../../Model/LoginViewModel";


@Component({
    templateUrl: '../app/Components/Login/login.component.html',
    styleUrls: ['../app/Components/Login/login.component.css']
})

export class LoginComponent implements OnInit {
    isProcessing: boolean = false;
    isAuthenticated: boolean = false;
    userName: string;
    password: string;
    ngLoginForm: FormGroup;
    initialized: boolean = false;
    invalidLogin: boolean = false;
    loginViewModel: LoginViewModel;
    @Output() static onAuthentication = new EventEmitter<boolean>();

    constructor(private loginService: LoginService, fb: FormBuilder,
        private router: Router) {
        this.loginViewModel = new LoginViewModel();
        this.ngLoginForm = fb.group({
            userName: ["", Validators.required],
            password: ["", Validators.required]
        });
    }



    ngOnInit(): void {
        this.isProcessing = false;
        eval('$("#userName").focus();');
    }

    submit(): void {
        this.initialized = true;
        this.invalidLogin = false;
        if (this.ngLoginForm.valid) {
            this.isProcessing = true;
            this.loginService.loginUser(this.loginViewModel).subscribe(
                x => {
                    this.isProcessing = false;
                    var _result = JSON.parse(x.Result);
                    if (typeof (_result.error) != "undefined") {
                        this.invalidLogin = true;
                    }
                    else {
                        this.invalidLogin = false;
                        localStorage.setItem("access_token", _result.access_token);
                        localStorage.setItem("token_type", _result.token_type);
                        localStorage.setItem("userName", _result.userName);
                        LoginComponent.onAuthentication.emit(true);
                        this.router.navigate(['home']);
                    }
                }, e => {
                    this.invalidLogin = true;
                }
            );
        }
    }
}