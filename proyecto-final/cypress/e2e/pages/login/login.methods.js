import { Logger } from "../../util/logger";
import { LoginElements } from "./login.elements";

export class LoginMethods {
    static insertUsername(username) {
        LoginElements.textboxes.username.invoke('val',username);
    }

    static insertPassword(password) {
        LoginElements.textboxes.password.invoke('val',password);
    }

    static clickOnLoginButton() {
        LoginElements.buttons.login.click();
    }

    static login(username, password) {
        Logger.subStep('Inserta el username');
        this.insertUsername(username);
        Logger.subStep('Inserta el password');
        this.insertPassword(password);
        Logger.subStep('Realiza click al botón de Login');
        this.clickOnLoginButton();
    }


}