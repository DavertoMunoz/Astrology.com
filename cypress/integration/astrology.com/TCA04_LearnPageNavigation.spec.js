/// <reference types="cypress" />

import LearnHomePage from '/Users/dmunoz/Documents/Testing_Projects/Cypress/Astrology.com/cypress/pages/astrology_pages/learnPage.js'; 

describe('Confirm Learn Page loading styles', function() {
    const learnhomepage=new LearnHomePage();

beforeEach(() => {
    learnhomepage.visitLearnPage();
    cy.viewport(1366, 768);
})

it('Confirm widgets content', function()  {
    learnhomepage.learnWidgetsVerification();
})

it('Learn carousel functionality', function() {
    learnhomepage.carouselWidget();
})

it('Learn More section verification', function() {
    learnhomepage.learnSectionVerification();
})

it('Article Section Verification', function() {
    learnhomepage.articlesSectionVerification();
})

it('Store section verification', function() {
    learnhomepage.storeSectionVerification();
})

})

