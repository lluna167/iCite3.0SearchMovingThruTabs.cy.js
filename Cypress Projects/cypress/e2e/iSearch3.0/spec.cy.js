//This loads the iSearch 3.0 page.
describe('iSearch3.0', () => {
  it('successfully loads', () => {
    cy.visit('https://analytics-dev.od.nih.gov/')

  cy.focused()
      .should('have.class', '.is-empty is editor-empty')
  })

})