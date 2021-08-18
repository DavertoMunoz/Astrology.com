/// <reference types="cypress" />

import dailyHoro_Locators from "../../support/dailyHoro_Locators";

class HoroscopesDailyPage {


visitHoroscopesDaily() {
cy.visit('https://www.astrology.com/horoscope/daily.html');
    
}

theSkyToday() {

    // Assertions
    cy.get(dailyHoro_Locators.titleDaily).should('be.visible');
    cy.get(dailyHoro_Locators.snippetTitle).should('be.visible'); 
    cy.get(dailyHoro_Locators.iconsContainer).should('be.visible'); 
    cy.get(dailyHoro_Locators.textAd).should('be.visible');
    cy.get(dailyHoro_Locators.textAdLink).click();
    cy.url().should('eq', 'https://shop.astrology.com/product/astrology-plus/?utm_source=direct&utm_medium=acquisition&utm_campaign=aplus-text-link');
    cy.go('back'); 
    cy.get(dailyHoro_Locators.firstParagraph).should('be.visible'); 
    cy.get(dailyHoro_Locators.secondParagraph).should('be.visible'); // Sometimes there is no second paragraph here.
    cy.get(dailyHoro_Locators.carouselWeeklyIcon).should('be.visible'); 
    cy.get(dailyHoro_Locators.carouselMonthlyIcon).should('be.visible'); 
    cy.get(dailyHoro_Locators.carouselNextButton).click();
    cy.get(dailyHoro_Locators.carouselYearlyIcon).should('be.visible'); 
    cy.get(dailyHoro_Locators.carouselChineseIcon).should('be.visible'); 
    cy.get(dailyHoro_Locators.carouselNextButton).click();
    cy.get(dailyHoro_Locators.carouselLoveIcon).should('be.visible');
    cy.get(dailyHoro_Locators.carouseWorkIcon).should('be.visible'); 
    cy.get(dailyHoro_Locators.carouselNextButton).click();
    cy.get(dailyHoro_Locators.carouselDateIcon).should('be.visible'); 


}

signListVerification() {
    cy.get(dailyHoro_Locators.dailyAriesImg).should('be.visible').click();
    cy.url().should('contain', '/daily/aries.html');
    cy.go('back');

    cy.get(dailyHoro_Locators.dailyTaurusImg).should('be.visible').click();
    cy.url().should('contain', '/daily/taurus.html');
    cy.go('back');

    cy.get(dailyHoro_Locators.dailyGeminiImg).should('be.visible').click();
    cy.url().should('contain', '/daily/gemini.html');
    cy.go('back');

    cy.get(dailyHoro_Locators.dailyCancerImg).should('be.visible').click();
    cy.url().should('contain', '/daily/cancer.html');
    cy.go('back');

    cy.get(dailyHoro_Locators.dailyLeoImg).should('be.visible').click();
    cy.url().should('contain', '/daily/leo.html');
    cy.go('back');

    cy.get(dailyHoro_Locators.dailyVirgoImg).should('be.visible').click();
    cy.url().should('contain', '/daily/virgo.html');
    cy.go('back');

    cy.get(dailyHoro_Locators.dailyLibraImg).should('be.visible').click();
    cy.url().should('contain', '/daily/libra.html');
    cy.go('back');

    cy.get(dailyHoro_Locators.dailyScorpioImg).should('be.visible').click();
    cy.url().should('contain', '/daily/scorpio.html');
    cy.go('back');

    cy.get(dailyHoro_Locators.dailySagittariusImg).should('be.visible').click();
    cy.url().should('contain', '/daily/sagittarius.html');
    cy.go('back');

    cy.get(dailyHoro_Locators.dailyCapricornImg).should('be.visible').click();
    cy.url().should('contain', '/daily/capricorn.html');
    cy.go('back');

    cy.get(dailyHoro_Locators.dailyAquariusImg).should('be.visible').click();
    cy.url().should('contain', '/daily/aquarius.html');
    cy.go('back');

    cy.get(dailyHoro_Locators.dailyPiscesImg).should('be.visible').click();
    cy.url().should('contain', '/daily/pisces.html');
    cy.go('back');

}

signPreviewVerification() {
    cy.get(dailyHoro_Locators.dailyAriesPreview).should('be.visible');
    cy.get(dailyHoro_Locators.dailyTaurusPreview).should('be.visible');
    cy.get(dailyHoro_Locators.dailyGeminiPreview).should('be.visible');
    cy.get(dailyHoro_Locators.dailyCancerPreview).should('be.visible');
    cy.get(dailyHoro_Locators.dailyLeoPreview).should('be.visible');
    cy.get(dailyHoro_Locators.dailyVirgoPreview).should('be.visible');
    cy.get(dailyHoro_Locators.dailyLibraPreview).should('be.visible');
    cy.get(dailyHoro_Locators.dailyScorpioPreview).should('be.visible');
    cy.get(dailyHoro_Locators.dailySagittariusPreview).should('be.visible');
    cy.get(dailyHoro_Locators.dailyCapricornPereview).should('be.visible');
    cy.get(dailyHoro_Locators.dailyAquariusPreview).should('be.visible');
    cy.get(dailyHoro_Locators.dailyPiscesPreview).should('be.visible');
}

}

export default HoroscopesDailyPage