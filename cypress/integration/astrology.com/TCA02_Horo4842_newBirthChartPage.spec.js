/// <reference types="cypress" />



it('Test new Free Birth Chart page', function() {
    cy.visit('https://test.astrology.com/birth-chart/')
    cy.get('.alpha').contains('Birth Chart Calculator')
    cy.get('.trim-content > :nth-child(1)').contains('Your birth chart, also known as an astrology or natal chart, is a map to the placement of the planets at the exact moment you were born. It holds the key to your unique life path and personality')
    // image loading
    cy.get('.form__media > img').should('be.visible')
    cy.get('#first-name').type('Wayne Godot')
    cy.get('#gender-selector').select('Male')
    cy.get('#date-of-birth').type('08/05/1980')
    cy.get('#time-of-birth').type('12:30')
    cy.get('#birth-location').type('Los ')
    cy.wait(300)
    cy.get('#birth-location').type('{downarrow}')
    cy.get('#birth-location').type('{downarrow}')
    cy.get('#birth-location').type('{downarrow}').click
    cy.get('#TermOfServicesCheckBox').click()
    cy.get('#email').type('cypresstest03@yopmail.com')
    cy.get('.form-skin > [type="submit"]').click()
    cy.wait(300)
    cy.url().should('include', 'https://reports.astrology.com/v1/reports/')
    //cy.get('[width="310"]').should('include', 'Dear Wayne Godot')
    
})