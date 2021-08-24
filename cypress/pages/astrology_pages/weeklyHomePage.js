/// <reference types="cypress" />

import weeklyHoro_locators from "../../support/weeklyHoro_locators";

class WeeklyHomePage {

    visitWeeklyPage() {
        cy.visit(Cypress.env('weeklyHomepage'));
    }

}

export default WeeklyHomePage