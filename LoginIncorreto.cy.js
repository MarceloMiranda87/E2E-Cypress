describe('Página de login', () => {

  beforeEach (() => {
    cy.visit('http://localhost:4200/#/home')

    cy.intercept('POST', 'http://localhost:3000/user/login', {
      statusCode: 400
    }).as('stubPost')
})
    it('Verificar mensagem de campos obrigatórios', () => {
      cy.visit('http://localhost:4200/#/home')
      
      cy.contains ('User name is required!').should('be.visible'); // aqui o Cy ira ver se é visivel a mensagem que consta no cy.contains
      cy.contains ('Password is required!').should('be.visible'); // aqui o Cy ira ver se é visivel a mensagem que consta no cy.contains
       
    })
    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
      cy.login('mamazito', 'Marcelo87');
      cy.wait('@stubPost')

  })
})