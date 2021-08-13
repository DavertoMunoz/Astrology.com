/// <reference types="cypress" />

import AboutUsPage from '/Users/dmunoz/Documents/Testing_Projects/Cypress/Astrology.com/cypress/pages/horoscope_pages/aboutUsPage.js';


describe('aboutUsPage Elements', function() {
    const aboutUsPage=new AboutUsPage();

beforeEach(() => {
    aboutUsPage.visitAboutUsPage();

})

it('Opens About Us Page and confirm text', function() {
    aboutUsPage.confirmTitle();

})
})
