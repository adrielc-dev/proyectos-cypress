import { CommanPageData } from "./common-page.data";
import { CommanPageElements } from "./common-page.elements";

export class CommanPageMethods {
    static navegateToDemoBlaze() {
        cy.clearCookies();
        cy.visit(CommanPageData.url);
    }

    static clickOnHomeOption() {
        CommanPageElements.topMenu.home.click();
    }
    static clickOnContactOption() {
        CommanPageElements.topMenu.contact.click();
    }
    static clickOnAboutUsOption() {
        CommanPageElements.topMenu.aboutUs.click();
    }
    static clickOnCartOption() {
        CommanPageElements.topMenu.cart.click();
    }
    static clickOnLogInOption() {
        CommanPageElements.topMenu.loginIn.click();
    }
    static clickOnSignUpOption() {
        CommanPageElements.topMenu.signUp.click();
    }
    static clickOnHomeOption() {
        CommanPageElements.topMenu.home.click();
    }

    static verifyAlert(expectedMessage) {
        cy.on('windows:alert', (str) => {
            expect(str).to.equal(expectedMessage);
        })
    }

    static generateRandomString(length = 10) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    static verifySignedUser(username) {
        CommanPageElements.signedUser.should('have.text', `Welcome ${username}`);
    }
}