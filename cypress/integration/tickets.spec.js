describe("Tickets", () => {


    beforeEach(() => cy.visit('https://bit.ly/2XSuwCW'));


    it.only("fills all the text inout fields", () => {
        
        const firstName = "Felipe";
        const lastName = "Oliveira";

        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type("email.teste@teste.com");
        cy.get('requests').type('${firstName}{enter}');
        cy.get('#signature').type('${lfirstName} ${lastName}');
    });


    
    it("has 'TICKETBOX' headers's heading", () => { });





});