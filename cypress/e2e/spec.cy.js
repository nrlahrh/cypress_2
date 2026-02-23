describe('Ujian Laman Web',() => {
    it('Harus membolehkan pengguna mengisi borang', () => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html');
        cy.get('#name').type('Boe Doe');
        cy.get('#submit').click();

        cy.contains('Terima Kasih, Boe Doe');
    });
});