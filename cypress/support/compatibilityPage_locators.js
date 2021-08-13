/// <reference types="cypress" />

import learnPage_locators from "./learnPage_locators"

export default {

// Main Compatibility Subtext
compSubtitle: '.page__subtitle',


// 3 main widgets locators
firstPanelCard: '.first > .panel-card', // Card 1
secondPanelCard: '.second > .panel-card', // Card 2
lastPanelCard: '.last > .panel-card', // Card 3

firstPanelTitle: '.first > .panel-card > .card__title', // Work comp
secondPanelTitle: '.second > .panel-card > .card__title', // Love comp
lastPanelTitle: '.last > .panel-card > .card__title', // chinese comp

workPanelImage: "[alt='work compatibility']", 
lovePanelImage: "[alt='love compatibility']",
chinesePanelImage: "[alt='chinese compatibility']",

workCompPanelDescription: '.first > .panel-card > .card__description',
loveCompPanelDescription: '.second > .panel-card > .card__description',
chineseCompPanelDescription: '.last > .panel-card > .card__description',

// Personality traits and More section locators 
zodiacWomanImageComp: "[alt='Zodiac Woman']",
zodicManImageComp: "[alt='Zodiac Man']",
// When trying to understand that female-identified person in your life, their zodiac sign is the door into their personal style, 
// as well as what makes them tick.
zodiacWomanDescrComp: ".image-card--horz[href='https://www.astrology.com/zodiac-woman'] .card__description", 
// We all know there's more to him than meets the eye... and a little help from the zodiac never hurts! 
// Whether it's someone new you're curious about, or someone you already love
zodiacManDescrComp: ".image-card--horz[href='https://www.astrology.com/zodiac-man'] .card__description",


textAdLink: '#ntv',

// Free games carousel
carouselPrevious: '.blue-widgets-carousel .previous',
carouselNext: '.blue-widgets-carousel .next',

// Games carousel images
gameCarousel8ballImg: ".icon-magic-love-ball",
gameCarouselCrushImg: ".icon-secret-crush",
gameCarouselGenieImg: ".icon-ask-the-genie",
gameCarouselCookieImg: ".icon-fortune-cookie",
gameCarouselBookImg: ".icon-book-of-love",
gameCarouselKarmicImg: ".icon-karmic-number",

// Games carousel links
gameCarousel8ballLink: ".panel-card[href='https://www.astrology.com/compatibility/magic-8-ball-love.html']",
gameCarouselCrushLink: ".panel-card[href='https://www.astrology.com/compatibility/secret-crush.html']",
gameCarouselGenieLink: ".panel-card[href='https://www.astrology.com/compatibility/game-ask-the-genie.html']",
gameCarouselCookieLink: ".panel-card[href='https://www.astrology.com/compatibility/fortune-cookie.html']",
gameCarouselBookLink: ".panel-card[href='https://www.astrology.com/compatibility/book-of-love.html']",
gameCarouselKarmicLink: ".panel-card[href='https://www.astrology.com/compatibility/daily-karmic-number.html']",

// // Recommended reports images - STORE section
sliderLoveReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(1)',//"[alt='Love Compatibility Report']",
sliderLoveScoreImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(2)', // "[alt='Love Score']"
sliderKarmaLoveImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(3)', // "[alt='Karma Love Report']"
sliderLoveTarotImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(4)', // "[alt='Love Tarot Reading']"
sliderSoulmateImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(5)', // "[alt='Soulmate Tarot']"
slider2021LoveImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(6)', // "[alt='2021 Love Tarot Reading']"

sliderLoveReportLink: ".mt-1 div:nth-of-type(1) > .card",
sliderLoveScoreLink: ".mt-1 div:nth-of-type(2) > .card",
sliderKarmaLink: ".mt-1 div:nth-of-type(3) > .card",
sliderLoveTarotLink: ".mt-1 div:nth-of-type(4) > .card",
sliderSoulMateLink: ".mt-1 div:nth-of-type(5) > .card",
slider2021LoveLink: ".mt-1 div:nth-of-type(6) > .card",

// Reccomended reports carousel arrows, next and previous
carouselRecommendedNext: '.recommended-reports-carousel > .carousel-container > .main-carousel > .next',
carouselRecommendedPrevious: '.recommended-reports-carousel > .carousel-container > .main-carousel > .previous',

}