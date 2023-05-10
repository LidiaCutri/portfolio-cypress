describe('exemplo de uma estrutura de suíte de teste', () => {
    // o que colocar aqui os dois contextos irão ver
    beforeEach(() => {
        cy.visit('')
        cy.loginseubarriga();
    })     
    
    context('Adicionar conta', () => {
        beforeEach(() => {
            cy.contains('Contas').click();
            cy.contains('Adicionar').click();            
        })         

        it('CT001 - Editando a conta', () => {                        
           cy.get('#nome').type('Conta Lidia');
           cy.contains('Salvar').click();
           cy.get('span[class*="glyphicon-edit"]').click();
           cy.get('#nome').type('Conta Lidia Editada');
           cy.contains('Salvar').click();
        });

        it('CT002 - Excluindo a conta', () => {   
           cy.get('#nome').type('Conta LidiaDenovo');
           cy.contains('Salvar').click();
           cy.get('span[class*="glyphicon-remove-circle"]').click();           
        });        
    });
});