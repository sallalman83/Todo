export class LoginViewModel {
    constructor() {
        this.RememberMe = false;
        this.Email = "";
        this.grant_type = "password";
    }
    public UserName: string;
    public Password: string;
    public Email: string;
    public RememberMe: boolean;
    public grant_type: string;
}