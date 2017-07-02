import { BaseRequestOptions } from '@angular/http';

export class JsonRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');

        if (localStorage.getItem("access_token") != null && localStorage.getItem("access_token") != "") {
            if (localStorage.getItem("token_type") != null && localStorage.getItem("token_type") != "") {
                this.headers.append('Authorization', localStorage.getItem("token_type") + " " + localStorage.getItem("access_token"));
            }
        }
    }
}
export class LoginRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('Access-Control-Allow-Origin', '*');
    }
}