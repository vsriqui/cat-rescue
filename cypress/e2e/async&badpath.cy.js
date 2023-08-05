describe('Async, malformed data, and data mining should have proper handling.', () => {


  it('If user types in gibberish, error page should display, and user should be able to go home.', () => {
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
      fixture: 'ea7.json'
    })
    .as('ea7')

    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/OhTkBTPnD', {
      statusCode: 200,
      fixture: 'OhTkBTPnD.json'
    })
    .as('OhTkBTPnD')

    cy.visit('http://localhost:3000/')
    cy.wait(['@images', '@mZZzMlywy', '@ea7', '@OhTkBTPnD'])
    cy.visit('http://localhost:3000/gibberish')
    cy.url()
    .should('eq', 'http://localhost:3000/gibberish')
    cy.get('#root')
    .within(()=>{
      cy.get('div')
      .within(()=>{
        cy.get('a')
        .should('have.attr', 'href')
        .should('eq', '/')
        cy.get('h2')
        .should('have.text', 'These are not the cats you\'re looking for.')
        cy.get('a')
        .within(()=>{
          cy.get('button')
          .click()
        })
      })
    })
    cy.url()
    .should('eq', 'http://localhost:3000/')
  })

  it('If server fails in the async chain, error page should display.', () => {
    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&order=DESC&api_key=sNw9kk1ppt2nofxJ8GLOdkJzKycbk6iOmsQsydl8v4rRmaPkXomMGWamZwmhkH4y', {
      statusCode: 200,
      fixture: 'images.json'
    })
    .as('images')

    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/mZZzMlywy', {
      statusCode: 500,
      fixture: 'mZZzMlywy.json'
    })
    .as('mZZzMlywy')

    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/ea7', {
      statusCode: 200,
      fixture: 'ea7.json'
    })
    .as('ea7')

    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/OhTkBTPnD', {
      statusCode: 200,
      fixture: 'OhTkBTPnD.json'
    })
    .as('OhTkBTPnD')

    cy.visit('http://localhost:3000/')
    cy.wait(['@images', '@mZZzMlywy', '@ea7', '@OhTkBTPnD'])
    cy.url()
    .should('eq', 'http://localhost:3000/error')
    cy.get('#root')
    .within(()=>{
      cy.get('div')
      .within(()=>{
        cy.get('h2')
        .should('have.text', 'Server communication is not ready Meow.')
      })
    })
  })

  it('Filter function in async should properly weed out malformed data.', () => {
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
      fixture: 'ea7.json'
    })
    .as('ea7')

    cy.intercept("GET", 'https://api.thecatapi.com/v1/images/OhTkBTPnD', {
      statusCode: 200,
      fixture: 'OhTkBTPnD.json'
    })
    .as('OhTkBTPnD')

    cy.visit('http://localhost:3000/')
    cy.wait(['@images', '@mZZzMlywy', '@ea7', '@OhTkBTPnD'])
    cy.url()
    .should('eq', 'http://localhost:3000/')
    
    cy.get('.cats')
    .contains('Birman')
    cy.get('.cats')
    .contains('Munchkin')

    cy.get('.cat')
    .should("have.length", 2);
  })

})