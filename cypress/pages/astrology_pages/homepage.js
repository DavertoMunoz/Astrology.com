/// <reference types="cypress" />

import homepage_locators from "../../support/homepage_locators";
import Homepage_Locators from "../../support/homepage_locators";

 // COMPLETED


class Homepage {


visitHomepage() {
cy.visit("https://www.astrology.com/us/home.aspx");

}

confirmMainElements() {
// Assert subtitles for each section
cy.get('.nav__items > :nth-child(1) > a').contains('Horoscopes');
cy.get('.page__title').contains('Welcome to Astrology.com');
cy.get('.signs').should('be.visible') // Signs section element should be visible
cy.scrollTo(0, 500) // Scroll the window 500px down
// Horoscope section subtitle
cy.get(homepage_locators.horoscopeSub).contains("Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what's to come.") 
cy.scrollTo(0, 500) // Scroll the window 500px down
// Learn section sub
cy.get(homepage_locators.learnSub).contains("Learn about astrology, zodiac signs, retrogrades, and more! Your world becomes clear once you understand how the universe influences it.")
cy.scrollTo(0, 500) // Scroll the window 500px down
// Tarot section sub
cy.get(homepage_locators.tarotSub).contains("Unveil the meaning behind your past, present, and future with a Tarot reading.")
cy.scrollTo(0, 500) // Scroll the window 500px down
// Shop section sub
cy.get(homepage_locators.shopSub).contains("Reveal what's in store for you with our personalized horoscopes, birth chart, love compatibility, Tarot readings, and more!")
cy.scrollTo(0, 500) // Scroll the window 500px down
// Compatibility section sub
cy.get(homepage_locators.compatibilitySub).contains("Test your compatibility and find out how your love and work relationships rank with your partner, colleagues, friends and family.")

}

signIconsConfirmation() { 
// Icons assertions and locators from /support/homepage_locators.js
cy.get(homepage_locators.ariesIcon).should('be.visible');
cy.get(homepage_locators.taurusIcon).should('be.visible');
cy.get(homepage_locators.geminiIcon).should('be.visible');
cy.get(homepage_locators.cancerIcon).should('be.visible')
cy.get(homepage_locators.leoIcon).should('be.visible')
cy.get(homepage_locators.virgoIcon).should('be.visible')
cy.get(homepage_locators.libraIcon).should('be.visible')
cy.get(homepage_locators.scorpioIcon).should('be.visible')
cy.get(homepage_locators.saggIcon).should('be.visible')
cy.get(homepage_locators.capricornIcon).should('be.visible')
cy.get(homepage_locators.aquariusIcon).should('be.visible')
cy.get(homepage_locators.piscesIcon).should('be.visible')

}

horoscopeSectionImages() {
// Images assertions
cy.scrollTo(0, 500)
//Monthly
cy.get(homepage_locators.monthlyMain).should('be.visible');
// Chinese
cy.get(homepage_locators.chineseImage).should('be.visible');
// Yearly
cy.get(homepage_locators.yearlyImage).should('be.visible');
// Love
cy.get(homepage_locators.loveImage).should('be.visible')
// Work
cy.get(homepage_locators.workImage).should('be.visible')
// Dating
cy.get(homepage_locators.datingImage).should('be.visible')

}

horoscopeImagesIcons() {
cy.scrollTo(0, 300);
cy.get("[alt='july Horoscopes']").should('be.visible');
cy.get("[alt='Chinese Zodiac Horoscopes']").should('be.visible');
cy.get("[alt='2021 Yearly Horoscopes']").should('be.visible');
cy.get('.icon-widget-love').should('be.visible');
cy.get('.icon-widget-career').should('be.visible');
cy.get('.icon-widget-dating').should('be.visible');

}

learnSectionImages() {
// Locators

cy.scrollTo(0, 1000)
// Birth Chart widget selection
cy.get('#birth-chart-widget').should('be.visible');
cy.get('#month').select('3');
cy.get('#day').select('15');
cy.get('#year').select('1981');
cy.get('#bc-submit').click();
cy.wait(300);
cy.url().should('contain', '/birth-chart/');
cy.go('back');
cy.wait(300);

// Card images assertions
cy.scrollTo(100, 0)
cy.get(homepage_locators.learnZodiacCard).should('be.visible');
cy.get(homepage_locators.learnChineseCard).should('be.visible');
cy.get(homepage_locators.learnHousesCard).should('be.visible');
cy.get(homepage_locators.learnPlanetsCard).should('be.visible');

// cy.get("[alt='Your Weekly Tarot Reading for June 21-27, 2021: It’s Time to Consider Your Choices Carefully!']").should('be.visible')
// cy.get("[alt='Your Weekly Horoscope for June 20-26, 2021: Mercury Goes Direct & Cancer Season Arrives!']").should('be.visible')
// cy.get("[alt='A Summer Solstice 2021 Ritual to Bring Back Magic Into Your Life']").should('be.visible')
cy.get('.section-learn > .section__cta').click();
cy.wait(300);
cy.url().should('eq', 'https://www.astrology.com/learn');
    
}

confirmTarotSectionElements() {

// Assertions
cy.scrollTo(0, 2000) // Scroll to tarot section
cy.get(homepage_locators.tarotLoveCard) // Love image card
cy.get(homepage_locators.tarotLoveCompCard).should('be.visible') // Love Complete card
cy.get(homepage_locators.tarotCareerCard).should('be.visible') // Career image card
cy.get(homepage_locators.tarotCareerCompCard).should('be.visible') // Career Complete card
cy.get(homepage_locators.howToUseImage).should('be.visible') // How to use, image
cy.get(homepage_locators.cardMeaningImage) // Card meanings image
cy.get(homepage_locators.yesNoWidgetCard).click() //Card No. 3 from yes/no widget
cy.wait(300)

// Correct Link assertions
cy.url().should('eq', 'https://www.astrology.com/tarot/yes-no.html')
cy.go('back')
cy.get(homepage_locators.tarotLoveCard).click()
cy.wait(300)
cy.url().should('eq', 'https://www.astrology.com/tarot/daily-love.html')
cy.go('back')
cy.get(homepage_locators.tarotCareerCard).should('be.visible').click()
cy.wait(300)
cy.url().should('eq', 'https://www.astrology.com/tarot/daily-career.html')
cy.go('back')
cy.get(homepage_locators.howToUseImage).click()
cy.wait(300)
cy.url().should('eq', 'https://www.astrology.com/tarot/how-to-tarot')
cy.go('back')
cy.get(homepage_locators.cardMeaningImage).click()
cy.url().should('eq', 'https://www.astrology.com/tarot/card-meanings')
cy.go('back')

}

confirmShopSectionElements() {
cy.scrollTo(0, 3000) // Scroll to shop section

// Verify that the images are visible
cy.get(homepage_locators.homePremiumMonthlyImage).should('be.visible')
cy.get(homepage_locators.homeBcImage).should('be.visible')
cy.get(homepage_locators.homeLoveCompImage).should('be.visible')
cy.get(homepage_locators.homeYearImage).should('be.visible')
cy.get(homepage_locators.homeTarotImage).should('be.visible')
cy.get(homepage_locators.homeNumerologyImage).should('be.visible')

// Links and page confirmation
// Shop Monthly Page Description
cy.get(homepage_locators.homePremiumMonthlyImage).click()
cy.get(homepage_locators.monthlyDescription).should('contain.text', 'Featuring the natal planets mostly in water and fire signs, the astrology forecast for July is full of emotions, drive—and of course, a little bit of drama. While the sun and Mercury will be in Cancer, Venus and Mars will be in Leo.')
cy.go('back')
cy.wait(300)

// Shop Birth chart page description
cy.get("[alt='birth horoscope + natal chart']").click()
cy.get(homepage_locators.birthChartDescription).should('contain.text', 'Your birth chart is a map of the stars’ alignments at the exact moment you were born, which reveals your areas of greatest potential and your unique personality characteristics. Find out how the planets’ positions at your birth influence your entire life, from your relationships to your finances and much more.')
cy.go('back')
cy.wait(300)

// Shop Love Compatibility
cy.get("[alt='Love Compatibility Report']").click()
cy.get(homepage_locators.loveCompDescription).should('contain.text', 'Check out the love potential between you and your partner (or potential love interest). Discover how to build a healthy and sincere bond. This report takes you one step further in an accurate compatibility assessment by analyzing each person’s Natal Chart. This easy-to-understand report will help you get the love you desire.')
cy.go('back')

// Shop Premium Horoscope
cy.get("[alt='2021 Premium Horoscope']").click()
cy.get(homepage_locators.premiumHoroDescription).should('contain.text', 'Get ready to experience full freedom, as the year ahead will support your individuality like no other. What have you always secretly wished for? Now more than ever, it’s at your disposal!')
cy.go('back')
cy.wait(300)

// Shop tarot reading
cy.get("[alt='2021 Tarot Reading']").click()
cy.get(homepage_locators.tarotReadDescription).should('contain.text', 'It’s time to clear away the confusion and see things more clearly with your 2021 Tarot Reading. This detailed 13-card reading makes your path crystal-clear so you can make important life-changing decisions. With the information revealed in this reading, you’ll finally see the light!')
cy.go('back')
cy.wait(300)

// Shop Numerology
cy.get("[alt='2021 numerology forecast']").click()
cy.get(homepage_locators.numDescription).should('contain.text', 'In numerology, 2021 is a five year. It will be about embracing curiosity, self-expression, and personal freedom. The essence of the number five will encourage you to break free and live your life to the fullest by embracing your uniqueness.')
cy.go('back')
cy.wait(300)

cy.get('.section-shop > .section__cta').click()
cy.url().should('eq', 'https://shop.astrology.com/?utm_source=direct&utm_medium=button&utm_campaign=home-shop-most-popular-shop-now-button')

}

confirmCompatibilitySectionElements() {
cy.scrollTo(0, 3700) // Scroll to compatibility section

cy.get('#compat-widget').should('be.visible');
cy.get("[alt='work compatibility']").should('be.visible');
cy.get("[alt='chinese compatibility']").should('be.visible');
cy.get("[alt='zodiac woman']").should('be.visible');
cy.get("[alt='zodiac man']").should('be.visible');

// Compatibility widget sign selector checker
cy.get('#first-sign').click();
cy.get('#compat-sign-list > .aries').click();
cy.get('#second-sign').click();
cy.get('#compat-sign-list > .pisces').click();
cy.wait(300);
cy.get('#instruction').click();
cy.wait(300);
cy.url().should('include', '/love-compatibility-aries-pisces');
cy.go('back');

// Compatibility link checker
cy.get("[alt='work compatibility']").click();
cy.url().should('eq', 'https://www.astrology.com/compatibility/zodiac-signs/career.html');
cy.go('back');

cy.get("[alt='chinese compatibility']").click();
cy.url().should('eq', 'https://www.astrology.com/compatibility/chinese-signs/love.html');
cy.go('back')

cy.get("[alt='zodiac woman']").should('be.visible').click();
cy.url().should('eq', 'https://www.astrology.com/zodiac-woman')
cy.go('back')

cy.get("[alt='zodiac man']").should('be.visible').click();
cy.url().should('eq', 'https://www.astrology.com/zodiac-man');
cy.go('back');

}

confirmMiscElements() {
cy.scrollTo(0, 4400);
cy.get('.aplus-banner').should('be.visible'); // banner
cy.get("[src='/images-US/astrology-plus/aplus-graphic-circle.png']").should('be.visible'); // banner image A plus
cy.get('.text-container > .btn').click();
cy.wait(300);
cy.url().should('include', '/product/astrology-plus/?utm_source=site&utm_medium=footer&utm_campaign=home-aplus'); // Link banner
cy.go('back');
cy.scrollTo('bottom');
cy.get('[href="/us/aboutus.aspx"]').click() // About us footer link
cy.wait(300);
cy.location();
cy.url().should('eq', 'https://www.astrology.com/us/aboutus.aspx');
cy.go('back');

cy.get('[href="/us/feedback.aspx"]').click() // Contact us link form
cy.url().should('eq', 'https://www.astrology.com/us/feedback.aspx');
cy.go('back');

cy.get('[href="/us/advertising-inquiry.aspx"]').click(); // Advertising footer link
cy.url().should('eq', 'https://www.astrology.com/us/advertising-inquiry.aspx');
cy.go('back');

cy.get('[href="https://www.astrology.com/privacy.html"]').click() ;// Privacy footer link
cy.url().should('eq', 'https://www.astrology.com/privacy.html');
cy.go('back');

cy.get('[href="https://www.astrology.com/tos.html"]').click(); // Terms footer link
cy.url().should('eq', 'https://www.astrology.com/tos.html');
cy.go('back');

cy.get('[href="/us/do-not-sell-my-info.aspx"]').click(); // Do not sell info footer link
cy.url().should('eq', 'https://www.astrology.com/us/do-not-sell-my-info.aspx');
cy.go('back');

}
  
}

export default Homepage