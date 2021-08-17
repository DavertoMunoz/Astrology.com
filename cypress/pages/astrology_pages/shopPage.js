/// <reference types="cypress" />

import shopPage_locators from "../../support/shopPage_locators";

class ShopPage {

visitShopPage() {

cy.visit(Cypress.env('shopHomepage'));
        
}

ImageProductsVerification() {
    cy.get(shopPage_locators.shopTitle).should('be.visible');
    cy.get(shopPage_locators.shopDescription).should('contain.text', 'Welcome to the Astrology.com Shop! Complete with personalized horoscopes, birth chart, love compatibility, tarot readings, and more, take the first step at unlocking your destiny!');

    cy.get(shopPage_locators.homeaugustHoroImg).should('be.visible');
    cy.get(shopPage_locators.homebirthChartImg).should('be.visible');
    cy.get(shopPage_locators.homeLoveCompImg).should('be.visible');
    cy.get(shopPage_locators.homeLoveCompImg).should('be.visible');
    cy.get(shopPage_locators.homeYesNoTarotImg).should('be.visible');
    cy.get(shopPage_locators.homeLoveTarotImg).should('be.visible');
    cy.get(shopPage_locators.homeLoveScoreImg).should('be.visible');
    cy.get(shopPage_locators.homeSoulMateImg).should('be.visible');
    cy.get(shopPage_locators.homeMakeWishImg).should('be.visible');
    cy.get(shopPage_locators.homeKarmaReportImg).should('be.visible');
    cy.get(shopPage_locators.homeNatalMoonImg).should('be.visible');
    cy.get(shopPage_locators.homePastPresentImg).should('be.visible');
    cy.get(shopPage_locators.homeTreeLifeImg).should('be.visible');
    cy.get(shopPage_locators.homeTarotAngelsImg).should('be.visible');
    cy.get(shopPage_locators.homeCareerReportImg).should('be.visible');
    cy.get(shopPage_locators.homeTransitsReportImg).should('be.visible');
    cy.get(shopPage_locators.homeChakraTarotImg).should('be.visible');
    cy.get(shopPage_locators.home2021HoroImg).should('be.visible');
    cy.get(shopPage_locators.home2021NumerologyImg).should('be.visible');
    cy.get(shopPage_locators.home2021VedicImg).should('be.visible');
    cy.get(shopPage_locators.home2021ChineseImg).should('be.visible');
    cy.get(shopPage_locators.home2021TarotImg).should('be.visible');
    cy.get(shopPage_locators.home2021LoveTarotImg).should('be.visible');
    cy.get(shopPage_locators.homeAplusSubImg).should('be.visible');

}

    productsPricesVerification() {
    cy.get(shopPage_locators.homeCurrentMonthHoroPrice).should('contain.text', '14.95');
    cy.get(shopPage_locators.homebirthChartPrice).should('contain.text', '24.95');
    cy.get(shopPage_locators.homeLoveCompPrice).should('contain.text', '16.95');
    cy.get(shopPage_locators.homeYesNoTarotPrice).should('contain.text', '8.95');
    cy.get(shopPage_locators.homeLoveTarotPrice).should('contain.text', '6.95');
    cy.get(shopPage_locators.homeLoveScorePrice).should('contain.text', '29.95');
    cy.get(shopPage_locators.homeSoulMatePrice).should('contain.text', '24.95');
    cy.get(shopPage_locators.homeMakeWishPrice).should('contain.text', '8.95');
    cy.get(shopPage_locators.homeKarmaReportPrice).should('contain.text', '14.95');
    cy.get(shopPage_locators.homeNatalMoonPrice).should('contain.text', '11.95');
    cy.get(shopPage_locators.homePastPresentPrice).should('contain.text', '9.95');
    cy.get(shopPage_locators.homeTreeLifePrice).should('contain.text', '24.95');
    cy.get(shopPage_locators.homeTarotAngelsPrice).should('contain.text', '11.95');
    cy.get(shopPage_locators.homeCareerReportPrice).should('contain.text', '19.95');
    cy.get(shopPage_locators.homeTransitsReportPrice).should('contain.text', '19.95');
    cy.get(shopPage_locators.homeChakraTarotPrice).should('contain.text', '11.96');
    cy.get(shopPage_locators.home2021HoroPrice).should('contain.text', '24.95');
    cy.get(shopPage_locators.home2021NumerologyPrice).should('contain.text', '19.95');
    cy.get(shopPage_locators.home2021VedicPrice).should('contain.text', '19.95');
    cy.get(shopPage_locators.home2021ChinesePrice).should('contain.text', '21.95');
    cy.get(shopPage_locators.home2021TarotPrice).should('contain.text', '19.95');
    cy.get(shopPage_locators.home2021LoveTarotPrice).should('contain.text', '19.95');
    cy.get(shopPage_locators.homeAplusSubPrice).should('contain.text', '29.97');
    }

    sortOrderProducts() {
    cy.scrollTo(0, 2500)
    cy.get(shopPage_locators.sortButton).select('popularity');
    // confirm the selected value
    cy.get(shopPage_locators.sortButton).should('have.value', 'popularity') 
    
    cy.go('back')

    cy.scrollTo(0, 2500)
    cy.get(shopPage_locators.sortButton).select('date');
    // confirm the selected value
    cy.get(shopPage_locators.sortButton).should('have.value', 'date') 
    
    cy.go('back')

    cy.scrollTo(0, 2500)
    cy.get(shopPage_locators.sortButton).select('price');
    // confirm the selected value
    cy.get(shopPage_locators.sortButton).should('have.value', 'price') 
    
    cy.go('back')

    cy.scrollTo(0, 2500)
    cy.get(shopPage_locators.sortButton).select('price-desc');
    // confirm the selected value
    cy.get(shopPage_locators.sortButton).should('have.value', 'price-desc') 
    
    cy.go('back')

    cy.scrollTo(0, 2500)
    cy.get(shopPage_locators.sortButton).select('menu_order');
    // confirm the selected value
    cy.get(shopPage_locators.sortButton).should('have.value', 'menu_order') 
    
    cy.go('back')


    }

    monthlyReportPurchase() {
    cy.get(shopPage_locators.homeCurrentHoroImg).click();
    cy.get(shopPage_locators.homeCurrentMonthHoroPrice).should('be.visible');
    cy.get(shopPage_locators.reportFirstName).type('Ramiroquai');
    cy.get(shopPage_locators.reportGenderSel).select('Male');
    cy.get(shopPage_locators.reportDoB).type('January 12, 1980');
    cy.get(shopPage_locators.reportDoB).click();
    cy.get(shopPage_locators.timeOfBirth).click();
    // cy.get('.product-template-default > div:nth-of-type(5)').focus().pause();
    
    

    }
}

    
export default ShopPage