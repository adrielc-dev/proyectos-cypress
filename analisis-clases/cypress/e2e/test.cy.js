import { LoginPage } from "./LoginPage"

//const logginPage = new LoginPage();

// describe('test', () =>{
//     it('test', () =>{
//         const titulo = LoginPage.obtenerTituloDePagina();
//         //const titulo = logginPage.obtenerTituloDePagina();
//         cy.log(titulo);
//         cy.wait(20000);
//     })
// });

describe('test', () =>{
    it('test', () =>{
        cy.visit('https://www.demoblaze.com/index.html');
        LoginPage.linkDeLogin.click();

        cy.wait(20000);
    })
})