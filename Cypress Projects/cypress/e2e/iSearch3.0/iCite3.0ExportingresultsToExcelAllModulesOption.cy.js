describe('Exporting my results to an excel module - this module option ', () => {
    it('opens the home page for a search', () => {
        //opens iCite 3.0
        cy.visit('https://icite-dev.od.nih.gov/analysis');
        //Input pcsk9 into text field amd hitting enter ***field name for text is '.vtext-field input'
        cy.get('.v-text-field input')
            .type('hutchins bi')
            .type('{enter}');
        //Click the Export button
        cy.get('#export-btn').click();
        //Click Play button to start gif
        cy.contains('Export (All Modules)').click();
        //Verify download file
        cy.verifyDownload('.xlsx', { contains:true});

    });
});