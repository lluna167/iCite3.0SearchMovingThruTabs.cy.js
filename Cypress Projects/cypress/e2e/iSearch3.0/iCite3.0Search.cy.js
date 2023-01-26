describe('Search', () => {
    it('opens the home page for a search', () => {
        //opens iCite 3.0
        cy.visit('https://icite-dev.od.nih.gov/analysis');
        //Input pcsk9 into text field amd hitting enter ***field name for text is '.vtext-field input'
        cy.get('.v-text-field input')
            .type('pcsk9')
            .type('{enter}');

    });
});