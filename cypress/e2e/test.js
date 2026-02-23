describe('Ujian Navigasi Sistem', () => {

  it('Harus membuka halaman utama dan menyemak teks', () => {
    cy.visit('http://127.0.0.1:5500/cypress/e2e/');
    cy.contains('Selamat Datang');
  });

  it('Harus membenarkan pengguna log masuk', () => {
    cy.visit('http://127.0.0.1:5500/login.html');

    cy.get('#username').type('Ali');
    cy.get('#password').type('password123');
    cy.get('#submit').click();

    cy.contains('Dashboard Pengguna');
  });

});