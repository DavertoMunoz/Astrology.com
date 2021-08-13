/// <reference types="cypress" />


export default {

// Icon signs locators
ariesIcon: '.icon-aries',
taurusIcon: '.icon-taurus',
geminiIcon: '.icon-gemini',
cancerIcon: '.icon-cancer',
leoIcon: '.icon-leo',
virgoIcon: '.icon-virgo',
libraIcon: '.icon-libra',
scorpioIcon: '.icon-scorpio',
saggIcon: '.icon-sagittarius',
capricornIcon: '.icon-capricorn',
aquariusIcon: '.icon-aquarius',
piscesIcon: '.icon-pisces',

// Subtitles for each section
horoscopeSub: '.section-horoscopes > .text-center > .section__subtitle',
learnSub: '.section-learn > .text-center > .section__subtitle',
tarotSub: '.section-tarot > header.text-center > .section__subtitle',
shopSub: '.section-shop > .text-center > .section__subtitle',
compatibilitySub: '.section-compatibility > .text-center > .section__subtitle',

// Horoscope section images
monthlyMain: '.section-horoscopes > .grid-container > .news-card > .grid__item > .card__media > .media-wrapper > .img-responsive',
chineseImage: '.horoscope-cards > :nth-child(1) > .card > .card__media > .media-wrapper > .img-responsive',
yearlyImage: '.horoscope-cards > :nth-child(2) > .card > .card__media > .media-wrapper > .img-responsive',
loveImage: '.icon-widget-love',
workImage: '.icon-widget-career',
datingImage: '.icon-widget-dating',

// Learn section images
learnZodiacCard: "[alt='zodiac sign']",
learnChineseCard: "[alt='chinese sign']",
learnPlanetsCard: "[alt='houses']",
learnHousesCard: "[alt='planets']",

// Tarot section locators (cards and images)
tarotLoveCard: "[alt='daily love tarot']",
tarotLoveCompCard: '.section-tarot > .grid-container > .blue-widgets > :nth-child(1) > .panel-card',
tarotCareerCard: "[alt='daily career tarot']",
tarotCareerCompCard: '.section-tarot > .grid-container > .blue-widgets > :nth-child(2) > .panel-card',
howToUseImage: "[alt='How To Use Read Tarot Cards']",
cardMeaningImage: "[alt='Learn About Tarot Cards Meaning']",
yesNoWidgetCard: '.card-3',

// Shop section locators (Images and descriptions)

// Locators
homePremiumMonthlyImage: "[alt='Premium July Horoscope']",
homeBcImage: "[alt='birth horoscope + natal chart']",
homeLoveCompImage: "[alt='Love Compatibility Report']",
homeYearImage: "[alt='2021 Premium Horoscope']",
homeTarotImage: "[alt='2021 Tarot Reading']",
homeNumerologyImage: "[alt='2021 numerology forecast']",
monthlyDescription: '.woocommerce-product-details__short-description > p:nth-of-type(1)',
birthChartDescription: '.woocommerce-product-details__short-description > p',
loveCompDescription: '.woocommerce-product-details__short-description > p',
premiumHoroDescription: ".woocommerce-product-details__short-description > p:nth-of-type(1)",
tarotReadDescription: ".woocommerce-product-details__short-description > p",
numDescription: ".woocommerce-product-details__short-description > p:nth-of-type(1)",
}
// }
// }
//export default Homepage_Locators;