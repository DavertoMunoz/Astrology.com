/// <reference types="cypress" />

import weeklyHoro_locators from "../../support/weeklyHoro_locators";
import WeeklyHomePage from "../../pages/astrology_pages/weeklyHomePage.js";

describe('Confirm weekly page navigation', function() {

    const weeklyHomePage = new WeeklyHomePage();

    beforeEach(() => {
        //weeklyHomePage.visitWeeklyPage();
        cy.viewport(1366, 768);

    })
    
it('visit Weekly Homepage', function() {
    weeklyHomePage.visitWeeklyPage()

})
})