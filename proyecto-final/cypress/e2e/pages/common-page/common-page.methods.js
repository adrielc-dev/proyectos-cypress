import { CommanPageData } from "./common-page.data";
import { CommanPageElements } from "./common-page.elements";

export class CommanPageMethods {
    static navegateToDemoBlaze() {
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
}