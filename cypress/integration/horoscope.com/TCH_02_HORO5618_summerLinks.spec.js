/// <reference types="cypress" />

// describe('summerLinks is present', function() {

// })

it('summer pages should be active', function() {

    cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx/?sign=1').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx/?sign=1')
    cy.url().should('include', '/summer-horoscope');
})

    cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=2').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=2');
    cy.url().should('include', '/summer-horoscope');
})

    cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=3').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=3');
    cy.url().should('include', '/summer-horoscope');
})

    cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=4').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=4');
    cy.url().should('include', '/summer-horoscope');
})
    
    cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=5').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=5');
    cy.url().should('include', '/summer-horoscope');
})

    cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=6').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=6');
    cy.url().should('include', '/summer-horoscope');
})

    cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=7').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=7');
    cy.url().should('include', '/summer-horoscope');

})
cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=8').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=8');
    cy.url().should('include', '/summer-horoscope');

})

cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=9').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=9');
    cy.url().should('include', '/summer-horoscope');

})

cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=10').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=10');
    cy.url().should('include', '/summer-horoscope');
})

cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=11').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=11');
    cy.url().should('include', '/summer-horoscope');

})

cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=12').then((response) => {
    expect(response.status).to.eq(200);
    cy.visit('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx?sign=12');
    cy.url().should('include', '/summer-horoscope');

})

})


it('links redirection to summer - should be 200', function() {
    cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-today.aspx').then((response) => {
    expect(response.status).to.eq(200);
})
    
    cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-yesterday.aspx').then((response) => {
    expect(response.status).to.eq(200);
})

    cy.request('https://www.horoscope.com/us/horoscopes/general/horoscope-quarantine-daily-tomorrow.aspx').then((response) => {
    expect(response.status).to.eq(200);

})
})
