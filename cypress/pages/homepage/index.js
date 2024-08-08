class HomePage {
    encontraEVaiNoCampoInscricao(){        
        cy.get('input#susbscribe_email')
            .scrollIntoView();
        return this;
    }

    preencheEmailEConfirma(email){
        cy.get('input#susbscribe_email')            
            .type(email);
        cy.get('button#subscribe').click();
        return this;
    }
    
    verificaInscricaoRealizada(){
        cy.contains('You have been successfully subscribed!');
        return this;
    }

    

}

export default new HomePage();