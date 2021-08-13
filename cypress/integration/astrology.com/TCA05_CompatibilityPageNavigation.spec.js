/// <reference types="cypress" />

import CompatibilityPage from '/Users/dmunoz/Documents/Testing_Projects/Cypress/Astrology.com/cypress/pages/astrology_pages/compatibilityPage.js';

describe('Confirm Compatibility Page Navigation', function() {
    const compatibilityPage = new CompatibilityPage();

beforeEach(() => {
    compatibilityPage.visitCompatibilityPage()
    cy.viewport(1366, 768);
})

it('Confirm Comp Main Widgets', function() {
    compatibilityPage.CompatibilityWidgetsVerification();
})

it('Personality Traits Verification', function() {
    compatibilityPage.PersonalityTraitsVerification();
})

it('Games carousel Verification', function() {
    compatibilityPage.GamesCarouselFunctionality();
})
it('Recommended Reports Slider', function() {
    compatibilityPage.RecommendedReportsSlides();
})



})

