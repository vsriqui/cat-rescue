describe('template spec', () => {
  it('Nav should have proper elements and attributes', () => {
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
    cy.get('#root')
    .within(()=>{
      cy.get('.all')
      .within(()=>{
        cy.get('nav')
          .within(()=>{
            cy.get('h1')
            .should('have.text', ' ᓚᘏᗢ - Cat Rescue ')
            cy.get('.formdiv')
            .within(()=>{
              cy.get('.form')
              .within(()=>{
                cy.get('input')
                .should('have.attr', 'type')
                .should('eq', 'text')
                cy.get('input')
                .should('have.attr', 'placeholder')
                .should('eq', 'Enter preferred breed.')
              })
            })
          })
      })
    })

  })

  it('Main should have proper elements and attributes', () => {
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
    cy.get('#root')
    .within(()=>{
      cy.get('.all')
      .within(()=>{
        cy.get('main')
        .within(()=>{
          cy.get('.cats')
          .within(()=>{
            cy.get('a')
            .should("have.length", 3);
            cy.get('a')
            .first()
            .should('have.attr', 'href')
            .should('eq', '/id/OhTkBTPnD')
            cy.get('a')
            .last()
            .should('have.attr', 'href')
            .should('eq', '/id/mZZzMlywy')

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

                  cy.get('img')
                  .should('have.attr', 'alt')
                  .should('eq', 'A lovely feline.')
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

                  cy.get('img')
                  .should('have.attr', 'alt')
                  .should('eq', 'A lovely feline.')
                })
              })
            })
          })
        })
      })
    })

  })
})