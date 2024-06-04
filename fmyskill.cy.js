/// <reference types="cypress" />

describe('Achieve MySkill Website', () => {
    it('Should load the homepage',() =>{
        cy.visit('https://myskill.id/')
        cy.url()
        cy.get('.MuiToolbar-root > .MuiContainer-root')
    });
    it('Should navigate to the "E-Learning" page', () => {
        cy.visit('https://myskill.id/'); // Ganti dengan URL halaman yang ingin diuji
        cy.get('.MuiContainer-root > .MuiStack-root > [href="/e-learning"]').click().should('be.visible')
    });
    it('Should navigate to login page', () => {
        // Kunjungi halaman utama
        cy.visit('https://myskill.id/e-learning');
        
        // Tunggu beberapa saat untuk memastikan halaman selesai dimuat
        cy.wait(2000); // Tunggu 2 detik (sesuaikan jika perlu)
    
        // Periksa apakah elemen tombol ada dan terlihat
        cy.get('.MuiButton-outlined', { timeout: 15000 }).eq(0).click();
    
        // Verifikasi URL mengandung '/auth/login?next=/'
        cy.url({ timeout: 15000 }).should('include', '/auth/login?next=/e-learning');
    });
    it('Register successfully', () => {
        cy.visit('https://myskill.id/auth/login?next=/e-learning')
        cy.wait(2000);
        cy.get('.mui-style-103o8ot > .MuiTypography-body2 > .MuiTypography-root', { timeout: 15000 })
          .click();
        cy.url().should('include', '/auth/register?next=/e-learning');
    }); 
})
