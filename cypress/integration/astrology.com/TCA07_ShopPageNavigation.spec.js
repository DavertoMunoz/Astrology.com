/// <reference types="cypress" />

import shopPage_locators from "../../support/shopPage_locators";
import ShopPage from "/Users/dmunoz/Documents/Testing_Projects/Cypress/Astrology.com/cypress/pages/astrology_pages/shopPage.js";

describe('Confirm Shop Page Navigation', function() {
    const shopPage = new ShopPage();

    beforeEach(() => {
        shopPage.visitShopPage();
        cy.viewport(1366, 768);

    })

it('Confirm products images in shop', function() {
    shopPage.ImageProductsVerification();
})

it('Confirm Products Prices in Shop Main page', function() {
    shopPage.productsPricesVerification();
})

it('Sort Products by different order', function() {
    shopPage.sortOrderProducts();
})

it.skip('Monthly purchase report flow', function() {
    shopPage.monthlyReportPurchase();
})
})