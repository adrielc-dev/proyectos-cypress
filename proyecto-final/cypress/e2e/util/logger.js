export class Logger {
    static stepNumber(number) {
        const texto = `Step # ${number}`;
        cy.log(texto);
        cy.allure().step(texto);
    }

    static step(description) {
        const texto = `Step - ${description}`;
        cy.log(texto);
        cy.allure().step(texto);
    }

    static verification(description) {
        const texto = `Verification - ${description}`;
        cy.log(texto);
        cy.allure().step(texto);
    }

    static subStep(description) {
        const texto = `Substep - ${description}`;
        cy.log(texto);
        cy.allure().step(texto);
    }

    static subVerification(description) {
        const texto = `Substep - ${description}`;
        cy.log(texto);
        cy.allure().step(texto);
    }
}