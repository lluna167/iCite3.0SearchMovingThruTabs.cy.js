//iCite 3.0 click test. The purpose of this test is to verify clicking the links on the iCite 3.0 home page
//takes the user to the appropriate landing page.
describe('opens the home page', () => {
  it('opens the home page and verifies the links', () => {
    //opens iCite 3.0
    cy.visit('https://icite-dev.od.nih.gov/analysis');
});
//Clicks Global RCR
  it('clicks the link Global RCR Stats', () => {
    cy.visit('https://icite-dev.od.nih.gov/analysis')
    //click Global RCR
    cy.contains("Global RCR Stats").click();
  });
//Clicks How to Cite
  it('clicks the link How to Cite', () => {
    cy.visit('https://icite-dev.od.nih.gov/analysis')
    //click How to Cite
    cy.contains("How to Cite").click();
  });
//Clicks the User Guide
  it('clicks the link User Guide', () =>{
    cy.visit('https://icite-dev.od.nih.gov/analysis')
    //clicks User Guide
    cy.contains("User Guide").click();
  });
//Clicks the Privacy Notice
  it('clicks the link Privacy Notice', () =>{
    cy.visit('https://icite-dev.od.nih.gov/analysis')
    //clicks Privacy Notice
    cy.contains("Privacy Notice").click();
  });
//Clicks Bulk Data & API
  it('clicks the link Bulk Data & API', () =>{
    cy.visit('https://icite-dev.od.nih.gov/analysis')
    //clicks Bulk Data & API
    cy.contains("Bulk Data & API").click();
  });
});