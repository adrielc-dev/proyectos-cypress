import { CommanPageMethods } from "../common-page/common-page.methods";
import { ProductDetailElements } from "./product-details.elements";

export class ProductDetailMethods {
    static clickOnAddToCartButton() {
        ProductDetailElements.buttons.addToCart.click();
    }
    static verifyProductDetailPageDisplayed() {
        ProductDetailElements.buttons.addToCart.should('be.visible');
    }
    static verifyProductAddedMessage() {
        CommanPageMethods.verifyAlert('Product added');
    }
}