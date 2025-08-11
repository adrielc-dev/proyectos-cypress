export class PlaceOrderElements {
    static get textboxes() {
        return {
            get name() {
                cy.get('input#name');
            },
            get country() {
                cy.get('input#country');
            },
            get city() {
                cy.get('input#city');
            },
            get creditCard() {
                cy.get('input#card');
            },
            get month() {
                cy.get('input#month');
            },
            get year() {
                cy.get('input#year');
            }
        }
    }

    static get buttons() {
        return {
            get close() {
                return cy.get('div[id="orderModal"] button').eq(1);
            },
            get purchase(){
                return cy.contains('button', 'Purchase');
            }
        }
    }
}