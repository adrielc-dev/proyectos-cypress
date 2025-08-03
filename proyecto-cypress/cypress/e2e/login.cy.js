describe("Login", () => {
    it("Login con credenciales de standard user", () =>{
        cy.login("standard_user", "secret_sauce");
        cy.wait(5000);
                
    })
});

// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://accounts.shopify.com/"); // Visitar una página
//         //cy.wait(); // NO SE USA WAIT()
//         cy.get('img[alt="Log in to Shopify"]', {timeout: 10000}).click(); // Se esperará 10 segundos para encontrar la instrucción.
        
//     })
// });

// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://the-internet.herokuapp.com/checkboxes"); // Visitar una página
//         cy.wait(5000); // 5 seg.
//         cy.get('input[type="checkbox"]').eq(0).check(); // Con esto seleccionamos el primer checkbox.
//         cy.wait(5000); // 5 seg.
//         cy.get('input[type="checkbox"]').eq(0).uncheck(); // Con esto deseleccionamos el primer checkbox.
//         cy.wait(10000); // 10 seg.
//     })
// });


// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/"); // Visitar una página
//         cy.get("#user-name").type("Soy desarrollador QA"); // Insertamos texto.
//         cy.get("#user-name").type("{enter}"); // Indicamos que presione enter desde ese campo.
        
//         cy.wait(10000);
        
//     })
// });



// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/"); // Visitar una página
//         cy.get('#login-button').click({force: true}); // Forzamos el click.
        
//     })
// });


// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://the-internet.herokuapp.com/checkboxes"); // Visitar una página
//         //cy.get('input[type="checkbox"]').eq(1).should("not.exist"); // Verificamos que el elemento no existe.
//         cy.get('input[type="checkbox"]').eq(0).should("not.be.checked"); // Verificamos que no este checkeado el campo.
//         cy.get('input[type="checkbox"]').eq(0).should("not.have.text"); // Verificamos que no contenga algo.

//     })
// });


// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://the-internet.herokuapp.com/checkboxes"); // Visitar una página
//         cy.get('input[type="checkbox"]').eq(1).should("be.checked"); // Nos permite comprobar si el chk esta seleccionado.
//     })
// });


// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/"); // Visitar una página
//         cy.get("#user-name").type("standard_user");
//         cy.get("#password").type("secret_sauce");
//         cy.get("#login-button").click();
//         cy.get("#react-burger-menu-btn").click();
//         cy.get(".bm-menu-wrap").should("be.visible");
//     })
// });


// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/"); // Visitar una página
//         //cy.get(".login_logo").should("contain.text", "Swag Labs"); // Comprobamos que el campo contiene Labs.
//         cy.get("#user-name").type("navidad");
//         cy.get("#user-name").should("contain.value", "dad");
        
//     })
// });

// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/"); // Visitar una página
//         cy.get("#user-name").type("hola");
//         cy.get("#user-name").should("have.value", "hola");
//     })
// });



// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/"); // Visitar una página
//         cy.get("#user-name").should("exist"); // Nos permite comprobar si existe un elemento en el DOM.
//     })
// });


// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/"); // Visitar una página
//         cy.get("#user-name").closest("#login_button_container").then(parent =>{
//             cy.log(parent.attr("class"));
//         }); // Busca el elemento padre que contine el elemento.

//         cy.wait(10000);
//     })
// });

// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/") // Visitar una página
//         cy.get(".form_input").eq(1).type("algo"); // eq(// Toma una posición específica.)
//     })
// });

// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/") // Visitar una página
//         cy.get(".form_input").first().type("hola");
//     })
// });

// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/") // Visitar una página
//         cy.get(".login_wrapper-inner").find("#user-name").should('exist');
//     })
// });



// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/") // Visitar una página
//         cy.contains("div", "Swag Labs").then(title => {
//             cy.log(title.attr("class"))
//         })
//         cy.wait(100000000000000)
//     })
// });



/* MI PRIMERA PRUEBA EN CYPRESS*/
// describe("Login", () => {
//     it("Login con credenciales de standard user", () =>{
//         cy.visit("https://www.saucedemo.com/") // Visitar una página
//         cy.get("#user-name").type("standard_user")
//         cy.get("#password").type("secret_sauce")
//         cy.get("#login-button").click()
//         cy.get(".title").should("exist") // Debería existir la clase .title (Ya que al menos existe 1)
//     })
// });


// URL: https://www.saucedemo.com/ [PRINCIPAL]
// URL: https://the-internet.herokuapp.com/checkboxes [PARA CHECKBOX]

/*
cy
.get: Buscar elemento de en toda la página.
.type(): Para escribir.
.contains(): Busca en la página si contiene el elemento buscado.
.find(): Busca un elemento hijo con respecto al padre en la jerarquía.
.first(): Nos permite tomar el primer elemento de varios (Cypress solo puede tomar de 1 uno por vez).
*/
