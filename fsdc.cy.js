describe('DuniaCoding Website', () => {
    it('Should load the homepage', () => {
      cy.visit('http://duniacoding.id/');
      cy.url()
      cy.get(':nth-child(1) > .nav-link');
    });
    it('Should navigate to the "Courses" page', () => {
        cy.visit('http://duniacoding.id/');
        cy.get(':nth-child(3) > .nav-link > span').click().should('be.visible');
        cy.wait(2000);
    });
    it('Should navigate to the "Event" page', () => {
        cy.visit('http://duniacoding.id/course');
        cy.get(':nth-child(2) > .nav-link > span').click().should('be.visible');
        cy.wait(2000);
    });
    it('Login succesfully', () => {
        // Melakukan Login
           cy.visit('http://duniacoding.id/event');
           cy.get('.col-12 > .btn').click();
           cy.wait(2000);
           cy.url().should('include','/login');
    });
    it('Should login with validate data', () => {
            cy.visit('http://duniacoding.id/login/');
            cy.get('#email').type('dheamarentys@gmail.com');
            cy.get('#password').type('Shxx1303');
            cy.get('#remember-me').click();
            cy.wait(2000);
            cy.get('form').submit();
            cy.visit('https://duniacoding.id/?success=true');
    });
});