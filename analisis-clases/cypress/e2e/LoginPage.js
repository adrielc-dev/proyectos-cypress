export class LoginPage {
    
    // IMPORTANTE:
    //  Un get es un método que se llama como si fuera un atributo. Puede o no retornar algo.
    static get linkDeLogin(){
        return cy.get('a[data-target="#logInModal"]');
    }
    
    // static obtenerTituloDePagina(){
    //     return 'Log in';
    // }
    // obtenerTituloDePagina(){
    //     return 'Log in';
    // }
}