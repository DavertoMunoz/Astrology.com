/// <reference types="cypress" />

import learnPage_locators from "./learnPage_locators"

export default {

    // 8 tarot card images
    dailyTarotCard: "[alt='daily tarot']", // nth-child(1) > .tarot-card > .card__media > .image-wrapper > img",
    dailyLoveCard: "[alt='daily love tarot']",
    dailyCareerCard: "[alt='daily career tarot']", // nth-child(3) > .tarot-card > .card__media > .image-wrapper > img",
    yesNoCard: "[alt='yes/no tarot']", //":nth-child(4) > .tarot-card > .card__media > .image-wrapper > img",
    lovePotentialCard: "[alt='love potential tarot']", //":nth-child(5) > .tarot-card > .card__media > .image-wrapper > img",
    breakUptarotCard: "[alt='breakup tarot']", //":nth-child(6) > .tarot-card > .card__media > .image-wrapper > img",
    dailyFlirtCard: "[alt='daily flirt tarot']", //":nth-child(7) > .tarot-card > .card__media > .image-wrapper > img",
    yinYangCard: "[alt='yin yang tarot']", //":nth-child(8) > .tarot-card > .card__media > .image-wrapper > img",

    // 8 tarot subtitles text
    tarotCardSub: ".grid-2c > :nth-child(1) > p",
    loveCardSub: ":nth-child(2) > p",
    careerCardSub: ":nth-child(3) > p",
    yesNoCardSub: ":nth-child(4) > p",
    PotentialCardSub: ":nth-child(5) > p",
    breakUptarotCardSub: ":nth-child(6) > p",
    flirtCardSub: ":nth-child(7) > p",
    yinYangCardSub: ":nth-child(8) > p",

    // Tarot For Begginers locators
    howToReadImage: "[alt='How To Read Tarot Cards']",
    howToReadDescription: ".image-card--horz[href='https://www.astrology.com/tarot/how-to-tarot'] .card__description",
    learnAboutTarotImage: "[alt='Learn About Tarot Cards Meaning']",
    learnAboutDescription: ".image-card--horz[href='https://www.astrology.com/tarot/card-meanings'] .card__description",
    
    // Major Arcana cards section
    tarotHomecardFool: "[alt='the fool major arcana card']",
    tarotHomecardMagician: "[alt='the magician major arcana card']",
    tarotHomecardPriestess: "[alt='the high priestess major arcana card']",
    tarotHomecardEmpress: "[alt='the empress major arcana card']",
    tarotHomecardWands: "[alt='ace of fire minor arcana card']",
    tarotHomecardCups: "[alt='ace of water minor arcana card']",
    tarotHomecardSwords: "[alt='ace of air minor arcana card']",
    tarotHomecardPentacles: "[alt='ace of earth minor arcana card']",

    // Weekly Tarot readings carousel images locators
    firstReadingImage: '.weekly-tarot-readings-carousel .flickity-slider > div:nth-of-type(1)',
    secondReadingImage: '.weekly-tarot-readings-carousel .flickity-slider > div:nth-of-type(2)',
    thirdReadingImage: '.weekly-tarot-readings-carousel .flickity-slider > div:nth-of-type(3)',

    // Tarot recomended Reports images - STORE section
    recommendedFirstImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(1)', // A+ First carousel card
    recommendedSecondImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(2)',
    recommendedThirdImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(3)',
    recommendedFourthImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(4)',
    recommendedFifthImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(5)',
    recommendedSixthImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(6)',
    recommendedSeventhImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(7)',
    recommendedEigthImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(8)',
    recommendedNinthImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(9)',

    // Recommended reports carousel arrows, next and previous
    carouselRecommendedNext: '.recommended-reports-carousel > .carousel-container > .main-carousel > .next',
    carouselRecommendedPrevious: '.recommended-reports-carousel > .carousel-container > .main-carousel > .previous',
    

    // Tarot report name in carousel (links)
    YesNoCarouselReportLink: '.recommended-reports-carousel > div > div > div > div > div:nth-child(1) > a',
    tarotPastPresentReportLink: '.recommended-reports-carousel > div > div > div > div > div:nth-child(2) > a',
    tarotLoveReportLink: '.recommended-reports-carousel > div > div > div > div > div:nth-child(3) > a',
    tarotSoulmateReportLink: '.recommended-reports-carousel > div > div > div > div > div:nth-child(4) > a',
    tarotMakeaWishReportLink: '.recommended-reports-carousel > div > div > div > div > div:nth-child(5) > a',
    tarotAngelsReportLink: '.recommended-reports-carousel > div > div > div > div > div:nth-child(6) > a',
    tarotChakraReportLink: '.recommended-reports-carousel > div > div > div > div > div:nth-child(7) > a',
    tarot2021ReportLink: '.recommended-reports-carousel > div > div > div > div > div:nth-child(8) > a',
    tarot2021LoveReportLink: '.recommended-reports-carousel > div > div > div > div > div:nth-child(9) > a',


}