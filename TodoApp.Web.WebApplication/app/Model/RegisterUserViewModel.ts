export class RegisterUserViewModel {
    constructor() {
        this.RememberMe = false;
        this.EmailAddress = "";
        this.grant_type = "password";
    }
    public UserName: string;
    public Password: string;
    public ConfirmPassword: string;
    public EmailAddress: string;
    public RememberMe: boolean;
    public grant_type: string;
}