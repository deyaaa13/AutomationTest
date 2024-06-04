describe('DuniaCoding Website', () => {
    it('Should load the homepage', () => {
      cy.visit('http://duniacoding.id/');
      cy.url()
      // Melakukan pengujian terhadap tampilan dan konten di halaman beranda
    });
    it('Should navigate to the "Courses" page', () => {
        cy.visit('http://duniacoding.id/'); // Ganti dengan URL halaman yang ingin diuji
        cy.get(':nth-child(3) > .nav-link > span').click();
// Tunggu beberapa saat untuk memastikan halaman selesai dimuat
        cy.wait(2000);
    });
    it('Login succesfully', () => {
        // Melakukan Login
           cy.visit('http://duniacoding.id/course/');
           cy.wait(2000);
           cy.get('.col-12 > .btn').click();
           cy.url().should('include','/login');
    });
    it('Should login without clearing the page', () => {
            // Kunjungi halaman login
            cy.visit('http://duniacoding.id/login/');
          
            // Masukkan email dan password ke dalam formulir login
            cy.get('#email').type('fitratuliman28@gmail.com');
            cy.get('#password').type('Bismillah2811');
          
            // Submit formulir login menggunakan AJAX atau mekanisme lain yang tidak menyebabkan clear page
            cy.get('form').submit();
          
            // Tunggu sampai login selesai (misalnya, dengan menunggu perubahan URL atau elemen yang muncul setelah login)
            cy.url().should('include', '/duniacoding.id');
    });
});