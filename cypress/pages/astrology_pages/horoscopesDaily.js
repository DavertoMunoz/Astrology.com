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
}

export default HoroscopesDailyPage