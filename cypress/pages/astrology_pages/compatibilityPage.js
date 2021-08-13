/// <reference types="cypress" />

import compatibilityPage_locators from "/Users/dmunoz/Documents/Testing_Projects/Cypress/Astrology.com/cypress/support/compatibilityPage_locators.js";
import learnPage_locators from "../../support/learnPage_locators";

class CompatibilityPage {

 // COMPLETED

visitCompatibilityPage() {

cy.visit(Cypress.env('compatibilityHomepage'));
    
}

CompatibilityWidgetsVerification() {

// Assertions
cy.get(compatibilityPage_locators.firstPanelTitle).should('contain' , 'Work');
cy.get(compatibilityPage_locators.workPanelImage).should('be.visible');
cy.get(compatibilityPage_locators.workCompPanelDescription).should('contain', 'colleagues, bosses, and partners')
cy.get(compatibilityPage_locators.firstPanelCard).should('have.attr', 'href').and('contain', '/zodiac-signs/career');

cy.get(compatibilityPage_locators.secondPanelTitle).should('contain' , 'Love');
cy.get(compatibilityPage_locators.lovePanelImage).should('be.visible');
cy.get(compatibilityPage_locators.loveCompPanelDescription).should('contain', 'your love interest are soul mates, best friends');
cy.get(compatibilityPage_locators.secondPanelCard).should('have.attr', 'href').and('contain', '/zodiac-signs/love');

cy.get(compatibilityPage_locators.lastPanelTitle).should('contain' , 'Chinese');
cy.get(compatibilityPage_locators.chinesePanelImage).should('be.visible');
cy.get(compatibilityPage_locators.chineseCompPanelDescription).should('contain', 'How do your Chinese zodiac signs get along?');
cy.get(compatibilityPage_locators.lastPanelCard).should('have.attr', 'href').and('contain', '/chinese-signs/love');

    
}

PersonalityTraitsVerification() {
cy.get(compatibilityPage_locators.zodiacWomanImageComp).should('be.visible');
cy.get(compatibilityPage_locators.zodicManImageComp).should('be.visible');
cy.get(compatibilityPage_locators.zodiacWomanDescrComp).should('contain', "When trying to understand that female-identified person in your life, their zodiac sign is the door into their personal style");
cy.get(compatibilityPage_locators.zodiacManDescrComp).should('contain', "We all know there's more to him than meets the eye... and a little help from the zodiac never hurts!");


}

GamesCarouselFunctionality() {
cy.get(compatibilityPage_locators.gameCarousel8ballImg).should('be.visible');
cy.get(compatibilityPage_locators.gameCarousel8ballLink).should('have.attr', 'href').and('include', '/magic-8-ball-love').then((href) => {
cy.visit(href);
cy.url().should('contain', '/magic-8-ball-love');    
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);
})

cy.go('back');

cy.get(compatibilityPage_locators.gameCarouselCrushImg).should('be.visible');
cy.get(compatibilityPage_locators.gameCarouselCrushLink).should('have.attr', 'href').and('include', '/secret-crush').then((href) => {
cy.visit(href);
cy.url().should('contain', '/secret-crush');    
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);
})

cy.go('back')

cy.get(compatibilityPage_locators.gameCarouselGenieImg).should('be.visible');
cy.get(compatibilityPage_locators.gameCarouselGenieLink).should('have.attr', 'href').and('include', '/game-ask-the-genie').then((href) => {
cy.visit(href);
cy.url().should('contain', '/game-ask-the-genie');    
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);
})

cy.go('back')

cy.get(compatibilityPage_locators.carouselNext).click();


cy.get(compatibilityPage_locators.gameCarouselCookieImg).should('be.visible');
cy.get(compatibilityPage_locators.gameCarouselCookieLink).should('have.attr', 'href').and('include', '/fortune-cookie').then((href) => {
cy.visit(href);
cy.url().should('contain', '/fortune-cookie');    
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);
})

cy.go('back')
cy.get(compatibilityPage_locators.carouselNext).click();

cy.get(compatibilityPage_locators.gameCarouselBookImg).should('be.visible');
cy.get(compatibilityPage_locators.gameCarouselBookLink).should('have.attr', 'href').and('include', '/book-of-love').then((href) => {
cy.visit(href);
cy.url().should('contain', '/book-of-love');    
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);
})

cy.go('back')
cy.get(compatibilityPage_locators.carouselNext).click();

cy.get(compatibilityPage_locators.gameCarouselKarmicImg).should('be.visible');
cy.get(compatibilityPage_locators.gameCarouselKarmicLink).should('have.attr', 'href').and('include', '/daily-karmic-number').then((href) => {
cy.visit(href);
cy.url().should('contain', '/daily-karmic-number');    
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);

cy.go('back');
})

}

RecommendedReportsSlides() {
// First 3 panel reports verification
cy.get(compatibilityPage_locators.sliderLoveReportImg).should('be.visible');
cy.get(compatibilityPage_locators.sliderLoveReportLink).should('have.attr', 'href').and('include', '/love-compatibility-report').then((href) => {
cy.visit(href);
cy.url().should('contain', '/love-compatibility-report');  
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);
cy.go('back');
})


cy.get(compatibilityPage_locators.sliderLoveScoreImg).should('be.visible');
cy.get(compatibilityPage_locators.sliderLoveScoreLink).should('have.attr', 'href').and('include', '/love-score').then((href) => {
cy.visit(href);
cy.url().should('contain', '/love-score');  
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);
cy.go('back');
})


cy.get(compatibilityPage_locators.sliderKarmaLoveImg).should('be.visible');
cy.get(compatibilityPage_locators.sliderKarmaLink).should('have.attr', 'href').and('include', '/karma-love-report').then((href) => {
cy.visit(href);
cy.url().should('contain', '/karma-love-report');  
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);
cy.go('back');
})


// Click next arrow to see more reports
cy.get(learnPage_locators.carouselRecommendedNext).click();

// Second lineup of reports image verification
cy.get(compatibilityPage_locators.sliderLoveTarotImg).should('be.visible');
cy.get(compatibilityPage_locators.sliderLoveTarotLink).should('have.attr', 'href').and('include', '/love-tarot-reading').then((href) => {
cy.visit(href);
cy.url().should('contain', '/love-tarot-reading');  
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);
cy.go('back');
})


cy.get(compatibilityPage_locators.sliderSoulmateImg).should('be.visible');
cy.get(compatibilityPage_locators.sliderSoulMateLink).should('have.attr', 'href').and('include', '/soulmate-tarot-reading').then((href) => {
cy.visit(href);
cy.url().should('contain', '/soulmate-tarot-reading');  
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);
cy.go('back');
})


cy.get(compatibilityPage_locators.slider2021LoveImg).should('be.visible');
cy.get(compatibilityPage_locators.slider2021LoveLink).should('have.attr', 'href').and('include', '/2021-love-tarot-reading').then((href) => {
cy.visit(href);
cy.url().should('contain', '/2021-love-tarot-reading');  
})
cy.request(Cypress.env("compatibilityHomepage")).then((response) => {
expect(response.status).to.eq(200);
cy.go('back');
})
}
}


export default CompatibilityPage;