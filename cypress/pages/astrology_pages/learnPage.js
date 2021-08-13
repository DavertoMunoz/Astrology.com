/// <reference types="cypress" />

import learnPage_locators from "../../support/learnPage_locators";
/*
The following page contains locators, links and assertios for each section of the learn page

1. The 3 Main widgets, confirmation of images and links of ZOdiac Signs, Birth Chart and Chinese Zodiac - COMPLETED
2. Carousel Elements and interactions scrolling - COMPLETED
4. Learn More Section - COMPLETED
5. Astrology Calendar - COMPLETED
6. Latest articles - COMPLETED
7. Recommended reports - COMPLETED

*/

class LearnHomePage {

visitLearnPage() {

cy.visit(Cypress.env('learnHomepage'));

}

learnWidgetsVerification() { // COMPLETED


// Assertions
cy.get(learnPage_locators.zodiacSignsWidgetTitle).should('contain' , 'Zodiac');
cy.get(learnPage_locators.zodiacSignsWidgetImage).should('be.visible');
cy.get(learnPage_locators.firstPanelCard).should('have.attr', 'href').and('contain', '/zodiac-signs');

cy.get(learnPage_locators.birthChartWidgetTitle).should('contain' , 'Birth Chart');
cy.get(learnPage_locators.birthChartWidgetImage).should('be.visible');
cy.get(learnPage_locators.secondPanelCard).should('have.attr', 'href').and('contain', '/birth-chart');

cy.get(learnPage_locators.chineseWidgetTitle).should('contain' , 'Chinese');
cy.get(learnPage_locators.chineseWidgetImage).should('be.visible');
cy.get(learnPage_locators.lastPanelCard).should('have.attr', 'href').and('contain', '/chinese-zodiac');
}

carouselWidget() { // COMPLETED. Confirms 200 response content and, images and links.

cy.viewport(1366, 768);

// Locators

// Assertions => scroll trough the carousel confirming elements and links visibility.

cy.get(learnPage_locators.learnCarouselPlanets).should('be.visible');
cy.get(learnPage_locators.carouselPlanetLink).should('have.attr', 'href').and('include', '/planets').then((href) => {
cy.visit(href);
cy.url().should('contain', '/planets');    
})
cy.request(Cypress.env("planetsHomepage")).then((response) => {
expect(response.status).to.eq(200);
})

cy.go('back');

cy.get(learnPage_locators.learnCarouselAsteroids).should('be.visible');
cy.get(learnPage_locators.carouselAsteroidsLink).should('have.attr', 'href').and('include', '/asteroids').then((href) => {
cy.visit(href);
cy.url().should('contain', '/asteroids');    
})
cy.request(Cypress.env("planetsHomepage")).then((response) => {
expect(response.status).to.eq(200);
})

cy.go('back');

cy.get(learnPage_locators.learnCarouselElements).should('be.visible');
cy.get(learnPage_locators.carouselElementsLink).should('have.attr', 'href').and('include', '/elements').then((href) => {
cy.visit(href);
cy.url().should('contain', '/elements');    
})
cy.request(Cypress.env("planetsHomepage")).then((response) => {
expect(response.status).to.eq(200);
})

cy.go('back');


cy.get(learnPage_locators.learnCarouselModalities).should('be.visible');
cy.get(learnPage_locators.carouselModalitiesLink).should('have.attr', 'href').and('include', '/modalities').then((href) => {
cy.visit(href);
cy.url().should('contain', '/modalities');    
})
cy.request(Cypress.env("planetsHomepage")).then((response) => {
expect(response.status).to.eq(200);
})

cy.go('back');

cy.get(learnPage_locators.learnCarouselHouses).should('be.visible');
cy.get(learnPage_locators.carouselHousesLink).should('have.attr', 'href').and('include', '/houses').then((href) => {
cy.visit(href);
cy.url().should('contain', '/houses');    
})
cy.request(Cypress.env("planetsHomepage")).then((response) => {
expect(response.status).to.eq(200);
})

cy.go('back');

cy.get(learnPage_locators.carouselNext).click();

cy.get(learnPage_locators.learnCarouselTransits).should('be.visible');
cy.get(learnPage_locators.carouselTransitsLink).should('have.attr', 'href').and('include', '/aspects-and-transits').then((href) => {
cy.visit(href);
cy.url().should('contain', '/aspects-and-transits');    
})
cy.request(Cypress.env("planetsHomepage")).then((response) => {
expect(response.status).to.eq(200);
})


cy.go('back');

cy.get(learnPage_locators.carouselNext).click();


cy.get(learnPage_locators.learnCarouselCusp).should('be.visible');
cy.get(learnPage_locators.carouselCuspLink).should('have.attr', 'href').and('include', '/on-the-cusp').then((href) => {
cy.visit(href);
cy.url().should('contain', '/on-the-cusp');    
})
cy.request(Cypress.env("planetsHomepage")).then((response) => {
expect(response.status).to.eq(200);
})

cy.go('back');

cy.get(learnPage_locators.carouselNext).click();


cy.get(learnPage_locators.learnCarouselRetrograde).should('be.visible');
cy.get(learnPage_locators.carouselRetroLink).should('have.attr', 'href').and('include', '/retrograde').then((href) => {
cy.visit(href);
cy.url().should('contain', '/retrograde');    

})
cy.request(Cypress.env("planetsHomepage")).then((response) => {
expect(response.status).to.eq(200);

cy.go('back');

})

}

learnSectionVerification() {
// Assertions
cy.get(learnPage_locators.numerologyPreview).should('contain.text', "Numbers hold value, both numerical and spiritual. Numerology, in its simplest terms, is the relationship between a number and its mystical nature on both an individual and worldly level.");
cy.get(learnPage_locators.psychicsPreview).should('contain.text', "From learning what psychic energy is, to learning how to harness your own psychic powers, in this page you will find everything related to the meaning of psychic energy, psychic mediums, and psychic empaths.");
cy.get(learnPage_locators.numerologyImageCard).should('be.visible');
cy.get(learnPage_locators.psychicsImageCard).should('be.visible');
cy.get(learnPage_locators.numerologyLinkCard).click()
cy.get('h1').should('contain.text', 'Numerology Overview');
cy.go('back');
cy.get(learnPage_locators.psychicsLinkCard).click();
cy.get('.page__title').should('contain.text', 'Online Psychic Readings');
cy.go('back');

}

articlesSectionVerification() {
// Needs to store the articles text and reuse it. One approach is to get the text from the title, go back and compare the results with the 
// name of the article shown in the learn page.

// Assertions
cy.get(learnPage_locators.firstArticleImage).should('be.visible');
cy.get(learnPage_locators.secondArticleImage).should('be.visible');
cy.get(learnPage_locators.thirdArticleImage).should('be.visible');
    
}

storeSectionVerification() {
// Assertions

//Scroll to reccomended report
cy.scrollTo(0, 1700);

// First 3 panel reports verification
cy.get(learnPage_locators.learnAplusImage).should('be.visible');
cy.get(learnPage_locators.learnBirthImage).should('be.visible');
cy.get(learnPage_locators.learnNatalMoonImage).should('be.visible');

// Click next arrow to see more reports
cy.get(learnPage_locators.carouselRecommendedNext).click();

// Second lineup of reports image verification
cy.get(learnPage_locators.learnfullMoonImage).should('be.visible');
cy.get(learnPage_locators.learnmonthTransits).should('be.visible');
cy.get(learnPage_locators.learnCareerImage).should('be.visible');

// Click next arrow to see more reports
cy.get(learnPage_locators.carouselRecommendedNext).click();

// Last line up of reccomended reports
cy.get(learnPage_locators.learnNumerologyImage).should('be.visible');
cy.get(learnPage_locators.learnVedicImage).should('be.visible');
cy.get(learnPage_locators.learnAplusImage).should('be.visible');

// Test previous arrow to test the same reports
cy.get(learnPage_locators.carouselRecommendedPrevious).click();

cy.get(learnPage_locators.learnfullMoonImage).should('be.visible');
cy.get(learnPage_locators.learnmonthTransits).should('be.visible');
cy.get(learnPage_locators.learnCareerImage).should('be.visible');

cy.get(learnPage_locators.carouselRecommendedPrevious).click();

cy.get(learnPage_locators.learnAplusImage).should('be.visible');
cy.get(learnPage_locators.learnBirthImage).should('be.visible');
cy.get(learnPage_locators.learnNatalMoonImage).should('be.visible');

}
}


export default LearnHomePage;
