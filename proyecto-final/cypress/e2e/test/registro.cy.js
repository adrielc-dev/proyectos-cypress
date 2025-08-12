import { CommanPageData } from "../pages/common-page/common-page.data";
import { CommanPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { SignupMethods } from "../pages/signup/sigup.methods";
import { Logger } from "../util/logger";

const user = CommanPageMethods.generateRandomString();
const passoword = CommanPageMethods.generateRandomString(7);
const existingUser = LoginData.validCredentials.username;

describe(CommanPageData.testSuites.registro, () => {

    it('C1 - Registro de Usuario Válido', () => {

        cy.allure().label('testId', 'C1');
        cy.allure().story('Registro válido');
        cy.allure().severity('critical');

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
    });

    it('C2 - Registro de Usuario Inválido', () => {

        cy.allure().label('testId', 'C2');
        cy.allure().story('Registro inválido');
        cy.allure().severity('normal');

        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');
        CommanPageMethods.navegateToDemoBlaze();

        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Sign up" en la barra de navegación.');
        CommanPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3);
        Logger.step('Completar algunos campos con información inválida.');
        SignupMethods.insertUsername(existingUser);
        SignupMethods.inserPassword(passoword);

        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.');
        SignupMethods.clickSignUpButton();
        Logger.verification('Verificar que se muestre el mensaje "This user already exist."');
        SignupMethods.verifyThatThisUserAlreadyExitMessageIsDisplayed();
    });
});