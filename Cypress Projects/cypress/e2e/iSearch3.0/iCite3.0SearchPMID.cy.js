//Opening iCite 3.0 page and searching by a PMID
describe('Search', () => {
    it('opens the home page for a search', () => {
        //opens iCite 3.0
        cy.visit('https://icite-dev.od.nih.gov/analysis');
        //Input pcsk9 into text field amd hitting enter ***field name for text is '.v-textarea testarea'
        cy.get('.v-textarea textarea')
            .type('12552133')
            .type('{enter}');

    });
});