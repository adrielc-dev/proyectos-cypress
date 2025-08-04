import { SignupElements } from "./signup.elements";

export class SignupMethods {
    static insertUsername(username) {
        SignupElements.textboxes.username.invoke('val',username);

    }

    static inserPassword(password){
        SignupElements.textboxes.password.invoke('val', password);
    }

    static clickSignUpButton(){
        SignupElements.buttons.signup.click();
    }

    static signup(username, password){
        this.insertUsername(username);
        this.inserPassword(password);
        this.clickSignUpButton();
    }
}