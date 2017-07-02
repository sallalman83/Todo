import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService} from '../../Services/Login/login.service';
import { RegisterUserViewModel } from "../../Model/RegisterUserViewModel";


@Component({
    selector: "register-user",
    templateUrl: '../app/Components/Register/register.component.html',
    styleUrls: ['../app/Components/Register/register.component.css']
})

export class RegisterComponent implements OnInit {
    isProcessing: boolean = false;
    registrationError: boolean = false;
    ngRegisterForm: FormGroup;
    initialized: boolean = false;
    registerViewModel: RegisterUserViewModel;
    errors: string[];

    isValidCaharacter(input: AbstractControl) {
        return new Promise((resolve, reject) => {
            let _reg = new RegExp(/^s*([0-9a-zA-Z]*)*$/);
            if (input != null && input.value != null && input.value != "") {
                if (_reg.test(input.value)) {
                    resolve({ "isValidCaharacter": null });
                }
                else
                    resolve({ "isValidCaharacter": true });
            }
        });
    }

    isValidEmail(input: AbstractControl) {
        return new Promise((resolve, reject) => {
            let _reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
            if (input != null && input.value != null && input.value != "") {
                if (_reg.test(input.value)) {
                    resolve({ "isValidEmail": null });
                }
                else
                    resolve({ "isValidEmail": true });
            }
        });
    }

    userNameExists(input: AbstractControl) {
        return new Promise((resolve, reject) => {
            if (input != null && input.value != null && input.value != "") {
                this.loginService.isUserNameExists(input.value)
                    .subscribe(x => {
                        if (x)
                            resolve({ "userNameExists": true });
                        else
                            resolve({ "userNameExists": null });
                    });
            }
            else
                resolve({ "userNameExists": null });
        });
    }

    passwordCompare(input: AbstractControl) {
        return new Promise((resolve, reject) => {
            if (this.ngRegisterForm.controls['ConfirmPassword'].value == this.ngRegisterForm.controls['password'].value) {
                resolve({ "passwordCompare": null });
            }
            else {
                resolve({ "passwordCompare": true });
            }
        });
    }

    constructor(private loginService: LoginService, fb: FormBuilder,
        private router: Router) {
        this.registerViewModel = new RegisterUserViewModel();
        this.ngRegisterForm = fb.group({
            userName: [null, Validators.required, this.userNameExists.bind(this)],
            password: ["", Validators.required],
            ConfirmPassword: ["", Validators.required, this.passwordCompare.bind(this)],
            EmailAddress: ["", Validators.required, this.isValidEmail.bind(this)]
        });
    }

    ngOnInit(): void {
        this.isProcessing = false;
        eval('$("#userName").focus();');
    }

    isValidForm(): boolean {
        return !this.ngRegisterForm.controls['userName'].hasError('required') &&
            !this.ngRegisterForm.controls['userName'].hasError('userNameExists') &&
            !this.ngRegisterForm.controls['password'].hasError('required') &&
            !this.ngRegisterForm.controls['ConfirmPassword'].hasError('required') &&
            !this.ngRegisterForm.controls['ConfirmPassword'].hasError('passwordCompare') &&
            !this.ngRegisterForm.controls['EmailAddress'].hasError('required') &&
            !this.ngRegisterForm.controls['EmailAddress'].hasError('isValidEmail');
    }

    submit(): void {
        this.registrationError = false;
        this.initialized = true;
        if (this.isValidForm()) {
            this.isProcessing = true;
            this.loginService.registerNewUser(this.registerViewModel).subscribe(
                x => {
                    if (x.Message.toString() == "1") {
                        this.registrationError = false;
                        this.isProcessing = false;
                        alert("User registered successfully...");
                        this.router.navigate(['/login']);
                    }
                    else {
                        this.registrationError = true;
                        this.errors = x.Result;
                    }
                },
                e => {
                    this.isProcessing = false;
                }
            );
        }
    }
}