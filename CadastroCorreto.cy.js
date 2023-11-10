import Cadastro from '../support/pages/cadastro/página-cadastro'


describe('Página de cadastro', () => {

  beforeEach (() => {
    cy.visit('http://localhost:4200/#/home')
  })
  
  const usuarios = require ('../fixtures/usuarios.json')
  usuarios.forEach (usuario => {

    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

     
      Cadastro.acessarPaginadecadastro();
      Cadastro.preencherFormulario();
      Cadastro.submeterCadastro()

  
    })

  })
 
})