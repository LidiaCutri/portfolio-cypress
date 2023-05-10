describe('Acessar o site do seu Barriga e validar o texto de apresentacao', () => {
    
  beforeEach(() => {
    cy.visit('')
  })

  var txtEmail = '#cpf'
  var txtsenha = '#senha'

  it('Validar o nome do site', () => {
      cy.get('a[class="navbar-brand"]')
      .contains('Seu Barriga')
  }); 

  it('Realizar login', () => {
    cy.get(txtEmail).type('lidiacutri@gmail.com')
    cy.get(txtsenha).type('123')
    cy.contains('Entrar').click()    
  }); 

  it('Realizar login no Toyota', () => {
    cy.get(txtEmail).type('0000000000')
    cy.get(txtsenha).type('123')
    cy.contains('Entrar').click()    
  }); 

  it('Realizar login utilizando fixtures', () => {
      cy.fixture('usuarios').then((users) => {
      cy.get(txtEmail).type(users.email)
      cy.get(txtsenha).type(users.senha)
    });
    cy.contains('Entrar').click()    
  });
  
  it.only('teste mokado',() => {
    cy.get('#cpf').type('0000000000')
    cy.get('#senha').type('1234')
    cy.contains('acessar').click()
    cy.wait(5000)
    cy.get('a[href="https://direct.bctoyota.com.br"]').click()

    cy.intercept({
     url:'api/origens-negocios/v1',
     method: 'GET',
     headers:{
      'Request URL': 'https://direct.bctoyota.com.br/api/origens-negocios/v1/99810295439198'
     }
    })    
  })

})
