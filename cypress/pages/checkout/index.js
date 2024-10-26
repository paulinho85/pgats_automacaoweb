class Checkout {
    verificaSeCarrinhoVisivel(){
        cy.get('.btn-default.check_out').should('be.visible');
        return this;
    }

    verificaPaginaCheckoutVisivel(){
        cy.get('.heading').contains('Address Details');
        cy.get('.heading').contains('Review Your Order');        
        return this;
    }

    preencheComentario(comentario){
        cy.get('.form-control').type(comentario);
        return this;
    }

    clicarEmFazerPedido(){
        cy.get('.btn-default.check_out').click();
        return this;
    }


}

export default new Checkout();