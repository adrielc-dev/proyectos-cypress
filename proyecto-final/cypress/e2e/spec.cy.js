import { LoginMethods } from "./pages/login/login.methods";
import { Logger } from "./util/logger";

describe('template spec', () => {
  it('passes', () => {
    const user = 'random01';
    const password = 'random01';
    
    
    Logger.stepNumber(1);
    Logger.step('Navegar al Sitio Web de Demoblaze Page');
    cy.visit('https://www.demoblaze.com');

    Logger.stepNumber(2);
    Logger.step('Hacer click en el botón de Login');
    cy.get('a[data-target="#logInModal"]').click();
    
    Logger.stepNumber(3);
    Logger.step(`Completa los campos de login: "${user}" / "${password}"}`);
    LoginMethods.login(user, password);
    
    Logger.verification(`El homepage debería mostrar: "Welcome ${user}" text`)
    cy.get('a#nameofuser').should('contain.text', user);
    
  });
  // it('passes', () => {
  //   cy.visit('https://www.demoblaze.com');
  //   HomeMethods.clickOnProductLink('Iphone 6 32gb');
  //   cy.wait(20000);
    
  // });
  
  // it('passes', () => {
  //   const usuario = 'random01';
  //   const password = 'random01';
    
  //   cy.visit('https://www.demoblaze.com');
  //   cy.get('a[data-target="#logInModal"]').click();
  //   LoginMethods.login(usuario, password);
  //   cy.get('a#nameofuser').should('contain.text', usuario);
    
  // });

  // it('passes', () => {
  //   cy.visit('https://www.demoblaze.com')
  //   cy.get('a[data-target="#logInModal"]').click();
  //   LoginMethods.login('username', 'password');
  //   cy.wait(5000);
  // })
})