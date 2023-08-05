describe('Cat info should contain proper elements, attributes, text, nestedness, and should be connected the original cat card clicked.', () => {
  it('Should have banner with proper header, paragraph, and go home button. ', () => {
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

    cy.get('#root')
    .within(()=>{
      cy.get('div')
      .first()
      .within(()=>{
        cy.get('div')
        .first()
        .within(()=>{
          cy.get('h1')
          .should('have.text', ' Hi I\'m ready for adoption. ')
          cy.get('p')
          .should('have.text', ' You can call 555 - 555 - 5555 if you\'re interested! ')
          cy.get('a')
          .should('have.attr', 'href')
          .should('eq', '/')
          cy.get('a')
          .within(()=>{
            cy.get('button')
            .should('have.text', ' Go home. Meow. ')
          })
        })
      })
    })
  })

  it('Should have proper image, reflective of cat card the user selected.', () => {
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
      cy.get('img')
      .should('have.attr', 'src')
      .should('eq', 'https://cdn2.thecatapi.com/images/OhTkBTPnD.jpg')
      cy.get('a')
      .first()
      .click()
    })
    cy.url()
    .should('eq', 'http://localhost:3000/id/OhTkBTPnD')

    cy.get('#root')
    .within(()=>{
      cy.get('div')
      .first()
      .within(()=>{
        cy.get('img')
        .first()
        .should('have.attr', 'src')
        .should('eq', 'https://cdn2.thecatapi.com/images/OhTkBTPnD.jpg')
      })
    })
  })
  it('Should have cat info, reflective of the cat card the user selected.', () => {
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
      cy.get('h2')
      .first()
      .should('have.text', ' Birman ')
      cy.get('a')
      .first()
      .click()
    })
    cy.url()
    .should('eq', 'http://localhost:3000/id/OhTkBTPnD')

    cy.get('#root')
    .within(()=>{
      cy.get('div')
      .first()
      .within(()=>{
        cy.get('div')
        .eq(1)
        .within(()=>{
          cy.get('h3')
          .first()
          .should('have.text', 'Breed: Birman')
          cy.get('p')
          .contains('The Birman is a docile')
          cy.get('p')
          .contains('furry baby.')
          cy.get('h3')
          .eq(1)
          .should('have.text', 'Origin: France')
          cy.get('.catstats')
            .within(()=>{
              cy.get('div')
              .eq(0)
              .within(()=>{
                cy.get('h4')
                .should('have.text', 'Adaptability: 5/5')
              })
              cy.get('div')
              .eq(1)
              .within(()=>{
                cy.get('h4')
                .should('have.text', 'Affection: 5/5')
              })
              cy.get('div')
              .eq(2)
              .within(()=>{
                cy.get('h4')
                .should('have.text', 'Intelligence: 3/5')
              })
              cy.get('div')
              .eq(3)
              .within(()=>{
                cy.get('h4')
                .should('have.text', 'Dog Friendly?: 5/5')
              })
              cy.get('div')
              .eq(4)
              .within(()=>{
                cy.get('h4')
                .should('have.text', 'Energy: 3/5')
              })
              cy.get('div')
              .eq(5)
              .within(()=>{
                cy.get('h4')
                .should('have.text', 'Socialability: 4/5')
              })
              cy.get('div')
              .eq(6)
              .within(()=>{
                cy.get('h4')
                .should('have.text', 'Average lifespan: 14 - 15')
              })
            })
        })
      })
    })
  })
})