const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginadecadastro (){
        cy.visit('http://localhost:4200/#/home');
        cy.contains ('a', 'Register now').click();
    }
    preencherFormulario(){
        cy.get('[data-test="email"]').type('teste@gmail.com');
        cy.get('[data-test="fullName"]').type('marcelo miranda');
        cy.get('[data-test="registerUserName"]').type('mamazito2');
        cy.get('[data-test="registerPassword"]').type('Marcelo123');
    }
    submeterCadastro(){
        cy.contains ('button', 'Register').click();
    }
}

export default new Cadastro();