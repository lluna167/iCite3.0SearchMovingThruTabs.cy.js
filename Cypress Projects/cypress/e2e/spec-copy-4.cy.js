describe('iSearch 3.0 e2e', () => {
  it('passes', () => {
    cy.visit('https://analytics-dev.od.nih.gov/')

    cy.focused()
        .should('have.class', 'is-empty is-editor-empty')
  })
})