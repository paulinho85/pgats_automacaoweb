class Carrinho {
    verificaSeCarrinhoVisivel(){
        cy.get('.btn-default.check_out').should('be.visible');
        return this;
    }

    clicaFazerCheckout(){
        cy.get('.btn-default.check_out').click()
        return this;
    }
}

export default new Carrinho();