import { CommanPageData } from "../pages/common-page/common-page.data";
import { CommanPageMethods } from "../pages/common-page/common-page.methods";
import { SignupMethods } from "../pages/signup/sigup.methods";
import { Logger } from "../util/logger";

const user = CommanPageMethods.generateRandomString();
const passoword = CommanPageMethods.generateRandomString(7);

describe(CommanPageData.testSuites.registroYAutenticacion, () => {
    it('Registro de Usuario Válido', () => {
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');
        CommanPageMethods.navegateToDemoBlaze();

        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Sign up" en la barra de navegación.');
        CommanPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3);
        Logger.step('Completar todos los campos obligatorios con información válida.');
        SignupMethods.insertUsername(user);
        SignupMethods.inserPassword(passoword);

        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.');
        SignupMethods.clickSignUpButton();
        cy.wait(20000);
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful."');
        SignupMethods.verifySignUpSuccessFulMessageDisplayed();
    })
});