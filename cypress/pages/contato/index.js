class Contato {
    verificaSeFormularioCarregou(){
        cy.get('.contact-form h2')
            .should('be.visible')
            .and('have.text', 'Get In Touch');     
            return this;
    }

    preencheFormularioContato(){
        cy.get('[data-qa="name"]').type('Paulo R Souza');
        cy.get('[data-qa="email"]').type('paulorsouza@email.com');
        cy.get('[data-qa="subject"]').type('Test Automation');
        cy.get('[data-qa="message"]').type('Learning Test Automation');
        return this;
    }

    anexaArquivoJson(){
        cy.fixture('example.json').as('arquivo');
        cy.get('input[name="upload_file"]').selectFile('@arquivo');
        return this;
    }

    submeteFormulario(){
        cy.get('[data-qa="submit-button"]').click();
        return this;
    }

    verificaSeFormularioFoiSubmetido(){
        cy.get('.status')
            .should('have.text', 'Success! Your details have been submitted successfully.');
        return this;
    }

   
}

export default new Contato();