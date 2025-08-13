import { CartMethods } from "../pages/cart/cart.methods";
import { CommanPageData } from "../pages/common-page/common-page.data";
import { CommanPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProductDetailMethods } from "../pages/product-details/product-details.methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials;
const product = 'Apple monitor 24';

describe(CommanPageData.testSuites.catalogoYCompras, () => {
    it('Navegación por categorías', () => {
        Logger.stepNumber(1);
        Logger.step('Iniciar sesión como usuario registrado');
        Logger.subStep('Navegar a la Aplicación de Demoblaze');
        CommanPageMethods.navegateToDemoBlaze();
        Logger.subStep('Click en el link de "Log In"');
        CommanPageMethods.clickOnLogInOption();
        LoginMethods.login(user.username, user.password);

        Logger.stepNumber(2);
        Logger.step('Navegar a la página de inicio.');
        CommanPageMethods.clickOnHomeOption();

        Logger.stepNumber(3);
        Logger.step('Seleccionar una categoría de productos en el menú de navegación');
        HomeMethods.clickOnMonitorsOption();
        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada.');
        HomeMethods.verifyProductDisplayed('Apple monitor 24');
        HomeMethods.verifyProductDisplayed('ASUS Full HD');

    });
    
    it('Agregar producto al carrito', () => {
        Logger.stepNumber(1);
        Logger.step('Iniciar sesión como usuario registrado');
        Logger.subStep('Navegar a la Aplicación de Demoblaze');
        CommanPageMethods.navegateToDemoBlaze();
        Logger.subStep('Click en el link de "Log In"');
        CommanPageMethods.clickOnLogInOption();
        LoginMethods.login(user.username, user.password);

        Logger.stepNumber(2);
        Logger.step('Navegar a la página de inicio.');
        CommanPageMethods.clickOnHomeOption();

        Logger.stepNumber(3);
        Logger.step('Seleccionar una categoría de productos en el menú de navegación');
        HomeMethods.clickOnMonitorsOption();
        
        Logger.stepNumber(4);
        Logger.step('Hacer clic en un producto específico.');
        HomeMethods.clickOnProductLink(product);
        
        Logger.stepNumber(5);
        Logger.verification('Verificar que se muestra la página de detalles del producto.');
        ProductDetailMethods.verifyProductDetailPageDisplayed();

        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón "Add to cart".');
        ProductDetailMethods.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.');
        ProductDetailMethods.verifyProductAddedMessage();
        CommanPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product);


    });


});