class Conta{
    verificaSeContaFoiDeletada(){
        cy.get('b').should('contain', 'Account Deleted!');
        return this;
    }

    clicaEmContinuar(){
        cy.get('[data-qa="continue-button"]').click();
        return this;
    }
}

export default new Conta();