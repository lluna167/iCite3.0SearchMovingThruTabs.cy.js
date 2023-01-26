describe('Search', () => {
    it('opens the home page for a search', () => {
        //opens iCite 3.0
        cy.visit('https://icite-dev.od.nih.gov/analysis');
        //Input pcsk9 into text field amd hitting enter ***field name for text is '.vtext-field input'
        cy.get('.v-text-field input')
            .type('Bruce Hutchinson')
            .type('{enter}');

        //Clicks Translation Tab
        cy.wait(8000);
        cy.contains('Translation').click();
        //Clicks Citations Tab
        cy.contains('Citations').click();
        //Clicks Influence Tab
        cy.contains('Influence').click();
    });
});