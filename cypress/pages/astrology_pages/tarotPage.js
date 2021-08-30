/// <reference types="cypress" />

import compatibilityPage_locators from "/Users/dmunoz/Documents/Testing_Projects/Cypress/Astrology.com/cypress/support/compatibilityPage_locators.js";
import learnPage_locators from "../../support/learnPage_locators";
import tarotPage_locators from "../../support/tarotPage_locators";

// TAROT PAGE COMPLETED


class TarotPage {

visitTarotPage() {

cy.visit(Cypress.env('tarotHomepage'));
    
}

verifyMainCardContainer() {

    // Check all the tarot card images
    cy.get(tarotPage_locators.dailyTarotCard).should('be.visible');
    cy.get(tarotPage_locators.dailyLoveCard).should('be.visible');
    cy.get(tarotPage_locators.dailyCareerCard).should('be.visible');
    cy.get(tarotPage_locators.yesNoCard).should('be.visible');
    cy.get(tarotPage_locators.lovePotentialCard).should('be.visible');
    cy.get(tarotPage_locators.breakUptarotCard).should('be.visible');
    cy.get(tarotPage_locators.dailyFlirtCard).should('be.visible');
    cy.get(tarotPage_locators.yinYangCard).should('be.visible');

    // Check all the subtitles for each tarot card
    cy.get(tarotPage_locators.tarotCardSub).should('contain.text', 'Start your day with this reading to get psyched for all the possibilities.');
    cy.get(tarotPage_locators.loveCardSub).should('contain.text', "Know what's in store for you romantically each day with your Love Tarot reading.");
    cy.get(tarotPage_locators.careerCardSub).should('contain.text', 'Before you go to work or pursue a job opportunity, get your Daily Career Tarot reading.');
    cy.get(tarotPage_locators.yesNoCardSub).should('contain.text', 'This popular reading gives you a simple yes or no answer with actionable advice.');
    cy.get(tarotPage_locators.PotentialCardSub).should('contain.text', 'Before you get too invested in a romance, consult the cards.');
    cy.get(tarotPage_locators.breakUptarotCardSub).should('contain.text', "Get the insight you're looking for as to why the relationship ended and how to move on.");
    cy.get(tarotPage_locators.flirtCardSub).should('contain.text', "Crushing on someone but don't know what your next move should be?");
    cy.get(tarotPage_locators.yinYangCardSub).should('contain.text', 'When your life is off-kilter, your Yin Yang Tarot can help.');

    // check all the tarot pages and titles.
    cy.get(tarotPage_locators.dailyTarotCard).click();
    cy.get('.page__title').should('contain.text', 'Daily Tarot Reading');
    cy.go('back');

    cy.get(tarotPage_locators.dailyLoveCard).click();
    cy.get('.page__title').should('contain.text', 'Daily Love Tarot Reading');
    cy.go('back');

    cy.get(tarotPage_locators.dailyCareerCard).click();
    cy.get('.page__title').should('contain.text', 'Daily Career Tarot Reading');
    cy.go('back');

    cy.get(tarotPage_locators.yesNoCard).click();
    cy.get('.page__title').should('contain.text', 'Yes or No Tarot Reading');
    cy.go('back');

    cy.get(tarotPage_locators.lovePotentialCard).click();
    cy.get('.page__title').should('contain.text', 'Love Potential Tarot Reading');
    cy.go('back');

    cy.get(tarotPage_locators.breakUptarotCard).click();
    cy.get('.page__title').should('contain.text', 'Breakup Tarot Reading');
    cy.go('back');

    cy.get(tarotPage_locators.dailyFlirtCard).click();
    cy.get('.page__title').should('contain.text', 'Daily Flirt Tarot Reading');
    cy.go('back');

    cy.get(tarotPage_locators.yinYangCard).click();
    cy.get('.page__title').should('contain.text', 'Yin Yang Tarot Reading');
    cy.go('back');

}
verifyTarotForBegginers() {

    cy.get(tarotPage_locators.howToReadImage).should('be.visible');
    cy.get(tarotPage_locators.howToReadDescription).should('contain.text', 'Mastering the Tarot requires and familiarization with the symbolism that defines the deck.');
    cy.contains('How To').click();
    cy.get('h1').should('contain.text', 'How To Use & Read Tarot Cards');
    cy.get("[alt='How to Read Tarot Cards']").should('be.visible');
    cy.go('back');

    cy.get('#ntv').should('be.visible');

    cy.get(tarotPage_locators.learnAboutTarotImage).should('be.visible');
    cy.get(tarotPage_locators.learnAboutDescription).should('contain.text', "Learn what each card of the tarot deck means—the major arcana, the minor arcana, they're all here.");
    cy.contains('Learn About').click();
    cy.get('h1').should('contain.text', 'Major & Minor Arcana Tarot Card Meanings');
    cy.get("[alt='The Fool']").should('be.visible');
    cy.go('back');

}

verifyArcanaCards() {
    cy.get(tarotPage_locators.tarotHomecardFool).should('be.visible');
    cy.get(tarotPage_locators.tarotHomecardMagician).should('be.visible');
    cy.get(tarotPage_locators.tarotHomecardPriestess).should('be.visible');
    cy.get(tarotPage_locators.tarotHomecardEmpress).should('be.visible');
    cy.get(tarotPage_locators.tarotHomecardWands).should('be.visible');
    cy.get(tarotPage_locators.tarotHomecardCups).should('be.visible');
    cy.get(tarotPage_locators.tarotHomecardSwords).should('be.visible');
    cy.get(tarotPage_locators.tarotHomecardPentacles).should('be.visible');
}

articlesSectionVerification() {
    // Assertions
    cy.get(tarotPage_locators.firstReadingImage).should('be.visible');
    cy.get(tarotPage_locators.secondReadingImage).should('be.visible');
    cy.get(tarotPage_locators.thirdReadingImage).should('be.visible');

    // cy.get(learnPage_locators.learnCarouselPlanets).should('be.visible');
    // cy.get(learnPage_locators.carouselPlanetLink).should('have.attr', 'href').and('include', '/planets');
}

recommendedReportsVerification() {
    // Confirms that the URL contains the correct URL report
    cy.get(tarotPage_locators.YesNoCarouselReportLink).should('have.attr', 'href').and('include', '/yes-no-tarot-reading');
    cy.get(tarotPage_locators.tarotPastPresentReportLink).should('have.attr', 'href').and('include', '/past-present-future-tarot');
    cy.get(tarotPage_locators.tarotLoveReportLink).should('have.attr', 'href').and('include', '/love-tarot-reading');

    cy.get(learnPage_locators.carouselRecommendedNext).click();

    cy.get(tarotPage_locators.tarotSoulmateReportLink).should('have.attr', 'href').and('include', '/soulmate-tarot-reading');
    cy.get(tarotPage_locators.tarotMakeaWishReportLink).should('have.attr', 'href').and('include', '/make-a-wish-tarot');
    cy.get(tarotPage_locators.tarotAngelsReportLink).should('have.attr', 'href').and('include', '/tarot-of-angels');

    cy.get(learnPage_locators.carouselRecommendedNext).click();

    cy.get(tarotPage_locators.tarotChakraReportLink).should('have.attr', 'href').and('include', '/chakra-tarot-reading');
    cy.get(tarotPage_locators.tarot2021ReportLink).should('have.attr', 'href').and('include', '/2021-tarot-reading');
    cy.get(tarotPage_locators.tarot2021LoveReportLink).should('have.attr', 'href').and('include', '/2021-love-tarot-reading');

}



}



export default TarotPage;