describe('Página de cadastro', () => {
    it('Preencher os campos do formulário de forma incorreta', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.contains ('a', 'Register now').click(); // faz o cypress clicar no botão de Register now
      cy.contains ('button', 'Register').click(); 
      cy.contains ('button', 'Register').click(); // testa se o botão de Register está funcionando
      cy.contains ('Email is required!').should('be.visible'); // aqui o Cy ira ver se é visivel a mensagem que consta no cy.contains
      cy.contains ('Full name is required!').should('be.visible'); // aqui o Cy ira ver se é visivel a mensagem que consta no cy.contains
      cy.contains ('User name is required!').should('be.visible'); // aqui o Cy ira ver se é visivel a mensagem que consta no cy.contains
      cy.contains ('Password is required!').should('be.visible'); // aqui o Cy ira ver se é visivel a mensagem que consta no cy.contains     
    })
  })                                       // ao invés de usar o click (que faria  a ação de clicar), usamos should para apenas visualizar.