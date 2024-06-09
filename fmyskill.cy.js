/// <reference types="cypress" />

describe('MySkill Website', () => {
    it('Should load the homepage',() =>{
        cy.visit('https://myskill.id/')
        cy.url()
        cy.get('.MuiToolbar-root');
    });
    it('Should navigate to the "E-Learning" page', () => {
        cy.visit('https://myskill.id/'); 
        cy.get('.mui-style-mjdgbj').click().should('be.visible');
        cy.wait(2000)
    });
    it('Should navigate to login page', () => {
        cy.visit('https://myskill.id/e-learning');
        cy.wait(2000);
        cy.get('.MuiContainer-root > .MuiButton-outlined').click();
        cy.url({ timeout: 15000 }).should('include', '/auth/login?next=/e-learning');
        cy.wait(2000)
    });
    it('Register successfully', () => {
        cy.visit('https://myskill.id/auth/login?next=/e-learning')
        cy.wait(2000);
        cy.get('.mui-style-103o8ot > .MuiTypography-body2 > .MuiTypography-root', { timeout: 15000 }).click();
        cy.url().should('include', '/auth/register?next=/e-learning');
    }); 
})