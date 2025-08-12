import { CommanPageData } from "../pages/common-page/common-page.data";
import { CommanPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";


describe(CommanPageData.testSuites.autenticacion, () => {
    it('Caso de prueba 3: Inicio de sesión válido', () => {
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio.');
        CommanPageMethods.navegateToDemoBlaze();

        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Log in" en la barra de navegación.');
        CommanPageMethods.clickOnLogInOption();

        Logger.stepNumber(3);
        Logger.step('Ingresar un nombre de usuario y contraseña válidos.');
        LoginMethods.insertUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword(LoginData.validCredentials.password);

        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Log in" para iniciar sesión.');
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se redirige al usuario a la página de inicio.');
        CommanPageMethods.verifySignedUser(LoginData.validCredentials.username);
        
    })
})