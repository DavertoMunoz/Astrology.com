/// <reference types="cypress" />

class AboutUsPage {


    visitAboutUsPage() {
    cy.visit('https://www.horoscope.com/us/about-us.aspx');
    
    }

    confirmTitle() {

    // Assertions
    cy.get('h1.text-center').should('be.visible');
    cy.get('.grid > .img-responsive').should('be.visible'); // Image loaded
    cy.get('.about--guide > .grid > div > :nth-child(2)').should('be.visible'); // title, second paragraph


    }

}

export default AboutUsPage;

