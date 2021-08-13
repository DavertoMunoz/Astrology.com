/// <reference types="cypress" />

import HoroscopesDailyPage from '/Users/dmunoz/Documents/Testing_Projects/Cypress/Astrology.com/cypress/pages/astrology_pages/horoscopesDaily.js';
import Homepage from '/Users/dmunoz/Documents/Testing_Projects/Cypress/Astrology.com/cypress/pages/astrology_pages/homepage.js';


describe('dailyHoroyNav', function() {
    const horoscopesDaily=new HoroscopesDailyPage();
    const homepage=new Homepage();

beforeEach(() => {
    horoscopesDaily.visitHoroscopesDaily();
})

it('Confirm all sign icons are loading correctly', function()  {
    homepage.signIconsConfirmation();
})

it('Open daily page and confirm main elements', function() {
    horoscopesDaily.theSkyToday();

})

})