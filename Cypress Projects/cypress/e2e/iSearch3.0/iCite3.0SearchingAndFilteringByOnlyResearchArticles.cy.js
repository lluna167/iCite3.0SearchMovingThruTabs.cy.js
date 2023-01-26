describe('Search', () => {
    it('opens the home page for a search', () => {
        //opens iCite 3.0
        cy.visit('https://icite-dev.od.nih.gov/analysis');
        //Input pcsk9 into text field amd hitting enter ***field name for text is '.vtext-field input'
        cy.get('.v-text-field input')
            .type('Bruce Hutchinson')
            .type('{enter}');
        cy.wait(2000);
        //Verify Filter Options
        cy.contains('Only research articles');
        cy.contains('Only papers cited by clinical articles');
        cy.contains('Only clinical articles');
        //Clicking the Only research articles.
        cy.contains('Only research articles').click();
        //Clicking the Only papers cited by clinical articles
        cy.contains('Only papers cited by clinical article').click();
        //Clicking Only clinical articles
        cy.contains('Only clinical articles').click();
        //Click the Clear button
        cy.get('#clear-btn').click();

    });
});