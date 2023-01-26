describe('Search', () => {
    it('opens the home page for a search', () => {
        //opens iCite 3.0
        cy.visit('https://icite-dev.od.nih.gov/analysis');
        //Input pcsk9 into text field amd hitting enter ***field name for text is '.vtext-field input'
        cy.get('.v-text-field input')
            .type('hutchins bi')
            .type('{enter}');
        //Click Translations tab
        cy.get('#app > div.v-application--wrap > main > div > div > div > div:nth-child(3) > div > div.v-tabs.theme--light > div > div.v-slide-group__wrapper > div > div:nth-child(3) ')
            .click();
        //Click Play button to start gif
        cy.get('#play-pause-btn').click();

    });
});