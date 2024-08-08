class Menu {
    irParaProdutos(){
        cy.contains('Products').click();    
    }

    irParaLoginCadastro(){
        cy.contains('Signup').click();
    }

    irParaContato(){
        cy.contains('Contact us').click();
    }

    deletarConta(){
        cy.get('[href *="delete"]').click();        
    }
}

export default new Menu();