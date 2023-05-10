describe('Exmplo de utilização do intercept', () => {
    /***
     * Intercept
     * 
     * SPY -> Espionar
     * STUB -> Modificar/Alterar (mokando o serviço)
     */
    
    beforeEach(() => {
        cy.visit('https://agapito-server.herokuapp.com/users')
        cy.intercept('GET', 'https://agapito-server.herokuapp.com/users/997/edit','json')   
    })

    it('buscar pelo usuário e mokar o ID do user', () => {
        cy.get('#btn-edit_997').click()
            
    });
})