/// <reference types="cypress" />

import TarotPage from "../../pages/astrology_pages/tarotPage";
import tarotPage_locators from "../../support/tarotPage_locators";

// TAROT PAGE COMPLETED

describe('Confirm Tarot Page Navigation', function() {
    const tarotPage = new TarotPage();

beforeEach(() => {
    tarotPage.visitTarotPage()
    cy.viewport(1366, 768);
})

it('Confirm Comp Main Widgets', function() {
    tarotPage.verifyMainCardContainer();

})

it('Confirm Tarot for Begginers Section', function() {
    tarotPage.verifyTarotForBegginers();
})

it('Arcana cards section', function() {
    tarotPage.verifyArcanaCards();
})

it('Article images verification', function() {
    tarotPage.articlesSectionVerification();
})

it('Recommended Reports Verification', function() {
    tarotPage.recommendedReportsVerification();
})

})