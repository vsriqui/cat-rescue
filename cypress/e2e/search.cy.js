describe('template spec', () => {
  it('Should be able to type out a breed into the search bar, get results as you type, not have it be case sensitive, and get main results back. ', () => {
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
    
    cy.get('input[type="text"]')
    .should('have.attr', 'value')
    .should('eq', '')

    cy.get('a')
    .should("have.length", 3);
    
    cy.get('input[type="text"]')
    .type('I')
    .should('have.attr', 'value')
    .should('eq', 'I')

    cy.get('a')
    .should("have.length", 2);

    cy.get('a')
    .first()
    .within(()=>{
      cy.get('.catainer')
      .within(()=>{
        cy.get('h2')
        .should('have.text', ' Birman ')
        cy.get('.cat')
        .within(()=>{
          cy.get('img')
          .should('have.attr', 'src')
          .should('eq', 'https://cdn2.thecatapi.com/images/OhTkBTPnD.jpg')
        })
      })
    })

    cy.get('a')
      .last()
      .within(()=>{
        cy.get('.catainer')
        .within(()=>{
          cy.get('h2')
          .should('have.text', ' Munchkin ')
          cy.get('.cat')
          .within(()=>{
            cy.get('img')
            .should('have.attr', 'src')
            .should('eq', 'https://cdn2.thecatapi.com/images/mZZzMlywy.jpg')
          })
        })
      })

    cy.get('input[type="text"]')
    .clear()
    .type('bIrMan')
    .should('have.attr', 'value')
    .should('eq', 'bIrMan')
    
    cy.get('a')
    .should("have.length", 1);

    cy.get('a')
    .first()
    .within(()=>{
      cy.get('.catainer')
      .within(()=>{
        cy.get('h2')
        .should('have.text', ' Birman ')
        cy.get('.cat')
        .within(()=>{
          cy.get('img')
          .should('have.attr', 'src')
          .should('eq', 'https://cdn2.thecatapi.com/images/OhTkBTPnD.jpg')
        })
      })
    })

    cy.get('input[type="text"]')
    .clear()
    .should('have.attr', 'value')
    .should('eq', '')

    cy.get('a')
    .should("have.length", 3);

  })

  it('Should conditionally render a helpful message to user when there are no results. ', () => {
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

    cy.get('input[type="text"]')
    .type('IiIiIi')
    .should('have.attr', 'value')
    .should('eq', 'IiIiIi')

    cy.get('a')
    .should("have.length", 0);

    cy.get('.cats')
    .within(()=>{
      cy.get('h2')
      .should('have.text', 'Your cat query is questionable.')
    })

  })
})