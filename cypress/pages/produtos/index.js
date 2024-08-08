class Produtos {
    verificaSePaginaCarregou(){
        cy.url().should('contain', 'products');
        cy.get('.title').should('be.visible').and('contain', 'All Products');
        return this;
    }

    verificaListaContemProdutos(){
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1);
        return this;
    }

    clicaVerProdutoPrimeiroItem(){
        cy.get('.single-products')            
            .first()
            .parent()
            .contains('View Product')
            .click();
        return this;
    }

    verificaSePaginaProdutoCarregou(){
        cy.get('.product-information > h2').should('be.visible');
        return this;
    }

    verificaDadosProdutoVisivel(){
        cy.get('.product-information p').should('be.visible').and('have.length', 4);
        cy.get('.product-information span span').should('be.visible');
        return this;
    }

    buscaProduto(produto){
        cy.get('input#search_product').type(produto);
        cy.get('button#submit_search').click();
        return this;
    }

    verificaListaResultadosVisivel(){
        cy.get('.title').should('be.visible').and('contain', 'Searched Products');
        return this;
    }    

    adicionaProdutoNoCarrinho(){
        cy.contains("Add to cart").click();
        return this;
    }

    clicaVisualizarCarrinho(){
        cy.contains("View Cart").click();
    }

}

export default new Produtos();