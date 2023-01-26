describe('empty spec', () => {
  it('Makes an assertion', function () => {
    cy.visit('https://icite.od.nih.gov/analysis')

    cy.contains ('type').click()
    cy.url()
        .should('include', '/new-analysis')

  })
})