/// <reference types="cypress" />

class HoroscopesDailyPage {


visitHoroscopesDaily() {
cy.visit('https://www.astrology.com/horoscope/daily.html');
    
}

theSkyToday() {

    // Selectors
    let titleDaily = '.snippet > .section__title';
    let snippetTitle = ':nth-child(3) > .snippet__title';
    let iconsContainer = '.snippet > div:nth-of-type(1) > .icons-container'; // Container of icons (sun, moon, trine, pluto, etc)
    let textAd = '.text-link';
    let textAdLink = '#ntv';
    let firstParagraph = '.snippet > .snippet__body'; // First paragraph of firsdt part
    let secondParagraph = '.snippet > .snippet__header p'; // Second paragrap of first part - Sometimes there is no second paragraph here.
    let carouselContainer = '.carousel-container';
    let carouselWeeklyIcon = '.icon-weekly';
    let carouselMonthlyIcon = '.icon-monthly';
    let carouselYearlyIcon = '.icon-yearly';    
    let carouselChineseIcon = '.icon-chinese'
    let carouselLoveIcon = '.icon-love';
    let carouseWorkIcon = '.icon-work';
    let carouselDateIcon = '.icon-love';
    let carouselNextButton = '.next';
    let carouselBackButton = '.previous'
    
    // Assertions
    cy.get(titleDaily).should('be.visible');
    cy.get(snippetTitle).should('be.visible'); 
    cy.get(iconsContainer).should('be.visible'); 
    cy.get(textAd).should('be.visible'); 
    cy.get(firstParagraph).should('be.visible'); 
    cy.get(secondParagraph).should('be.visible'); // Sometimes there is no second paragraph here.
    cy.get(carouselWeeklyIcon).should('be.visible'); 
    cy.get(carouselMonthlyIcon).should('be.visible'); 
    cy.get(carouselNextButton).click();
    cy.get(carouselYearlyIcon).should('be.visible'); 
    cy.get(carouselChineseIcon).should('be.visible'); 
    cy.get(carouselNextButton).click();
    cy.get(carouselLoveIcon).should('be.visible');
    cy.get(carouseWorkIcon).should('be.visible'); 
    cy.get(carouselNextButton).click();
    cy.get(carouselDateIcon).should('be.visible'); 


}
}

export default HoroscopesDailyPage