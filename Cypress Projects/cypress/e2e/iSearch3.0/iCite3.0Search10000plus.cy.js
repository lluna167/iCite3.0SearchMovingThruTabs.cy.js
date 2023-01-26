//The purpose of this test is to verify that a message is shown
// to the user that more than 10000 results is shown to the user.
describe('Search', () => {
    it('opens the home page for a search and shows a message to the user that more than 10000 results will be submitted to iCite', () => {
        //opens iCite 3.0
        cy.visit('https://icite-dev.od.nih.gov/analysis');
        //Input pcsk9 into text field amd hitting enter ***field name for text is '.vtext-field input'
        cy.get('.v-text-field input')
            .type('flu')
            .type('{enter}');
        //Verify message is shown to tell the user that more than 10000 results are shown.
        cy.wait(2000);
        cy.contains('Only the first 10,000 will be submitted to iCite');
    });
});