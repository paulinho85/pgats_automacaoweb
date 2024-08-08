class Checkout {
    verificaSeCarrinhoVisivel(){
        cy.get('.btn-default.check_out').should('be.visible');
        return this;
    }

    verificaPaginaCheckoutVisivel(){
        cy.get(':nth-child(2) > .heading').should('have.text', 'Address Details');
        cy.get(':nth-child(4) > .heading').should('have.text', 'Review Your Order');
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