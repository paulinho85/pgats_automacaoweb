class Login {    

    preencherLogin(usuario, senha){
        cy.get('[data-qa="login-email"]').type(usuario);
        cy.get('[data-qa="login-password"]').type(senha, { log:false });
        cy.get('[data-qa="login-button"]').click();
        return this;
    }
    
    verificarSeLoginFoiRealizado(nome){            
        cy.get('i.fa-user').parent().should('contain', nome);
        return this;
    }

    verificarSeLoginFalhou(){
        cy.get(`.login-form form p`)
            .should('contain', 'Your email or password is incorrect!');
        return this;
    }

    realizarLogout(){
        cy.contains('Logout').click();
        return this;
    }

    verificarSeLogoutFoiRealizado(){
        cy.url().should('contain', 'login');
        cy.contains('Login to your account').should('be.visible');
        return this;
    }
}

export default new Login();