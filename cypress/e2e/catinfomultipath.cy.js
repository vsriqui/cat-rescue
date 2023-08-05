describe('Should be able to navigate to cat info before or after narrowing cat results by breed.', () => {
  it('Should be able to navigate to cat info after narrowing by breed. ', () => {
    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&order=DESC&api_key=sNw9kk1ppt2nofxJ8GLOdkJzKycbk6iOmsQsydl8v4rRmaPkXomMGWamZwmhkH4y', {
      statusCode: 200,
      fixture: 'images.json'
    })
    .as('images')

    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/mZZzMlywy', {
      statusCode: 200,
      fixture: 'mZZzMlywy.json'
    })
    .as('mZZzMlywy')

    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/ea7', {
      statusCode: 200,
      fixture: 'fhYh2PDcC.json'
    })
    .as('fhYh2PDcC')

    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/OhTkBTPnD', {
      statusCode: 200,
      fixture: 'OhTkBTPnD.json'
    })
    .as('OhTkBTPnD')

    
    cy.visit('http://localhost:3000/')
    cy.wait(['@images', '@mZZzMlywy', '@fhYh2PDcC', '@OhTkBTPnD'])
    
    cy.url()
    .should('eq', 'http://localhost:3000/')

    cy.get('input[type="text"]')
    .type('i')

    cy.get('.cats')
    .within(()=>{
      cy.get('a')
      .first()
      .click()
    })
    cy.url()
    .should('eq', 'http://localhost:3000/id/OhTkBTPnD')
    cy.get('a')
    .first()
    .click()

    cy.url()
    .should('eq', 'http://localhost:3000/')

    cy.get('.cats')
    .within(()=>{
      cy.get('a')
      .last()
      .click()
    })

    cy.url()
    .should('eq', 'http://localhost:3000/id/mZZzMlywy')
    cy.get('a')
    .first()
    .click()

    cy.url()
    .should('eq', 'http://localhost:3000/')
 
  })

  it('Should be able to navigate to cat info without narrowing by breed. ', () => {
    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&order=DESC&api_key=sNw9kk1ppt2nofxJ8GLOdkJzKycbk6iOmsQsydl8v4rRmaPkXomMGWamZwmhkH4y', {
      statusCode: 200,
      fixture: 'images.json'
    })
    .as('images')

    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/mZZzMlywy', {
      statusCode: 200,
      fixture: 'mZZzMlywy.json'
    })
    .as('mZZzMlywy')

    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/ea7', {
      statusCode: 200,
      fixture: 'fhYh2PDcC.json'
    })
    .as('fhYh2PDcC')

    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/OhTkBTPnD', {
      statusCode: 200,
      fixture: 'OhTkBTPnD.json'
    })
    .as('OhTkBTPnD')

    
    cy.visit('http://localhost:3000/')
    cy.wait(['@images', '@mZZzMlywy', '@fhYh2PDcC', '@OhTkBTPnD'])
    
    cy.url()
    .should('eq', 'http://localhost:3000/')

    cy.get('.cats')
    .within(()=>{
      cy.get('a')
      .first()
      .click()
    })
    cy.url()
    .should('eq', 'http://localhost:3000/id/OhTkBTPnD')
    cy.get('a')
    .first()
    .click()

    cy.url()
    .should('eq', 'http://localhost:3000/')

    cy.get('.cats')
    .within(()=>{
      cy.get('a')
      .last()
      .click()
    })

    cy.url()
    .should('eq', 'http://localhost:3000/id/mZZzMlywy')
    cy.get('a')
    .first()
    .click()

    cy.url()
    .should('eq', 'http://localhost:3000/')
 
  })

})