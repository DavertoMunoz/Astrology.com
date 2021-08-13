/// <reference types="cypress" />

export default {

// Panel cards elements
firstPanelCard: '.first > .panel-card', // Card 1
zodiacSignsWidgetTitle: '.bg-gradient-sapphire > .card__title',
zodiacSignsWidgetImage: "[alt='zodiac signs']", // Zodiac image}

secondPanelCard: '.second > .panel-card', // Card 2
birthChartWidgetTitle: '.grid-items-center > .card__title',
birthChartWidgetImage:  "[alt='birth chart']", // Birthchart card image

lastPanelCard: '.last > .panel-card', // Card 3
chineseWidgetTitle: '.bg-gradient-ruby > .card__title',
chineseWidgetImage: "[alt='chinese zodiac']", // Chinese card image

// Carousel images
learnCarouselPlanets: '.icon-planets',
learnCarouselAsteroids: '.icon-asteroids',
learnCarouselElements: '.icon-elements',
learnCarouselModalities: '.icon-modalities',
learnCarouselHouses: '.icon-houses',
learnCarouselTransits: '.icon-aspects-and-transits',
learnCarouselCusp: '.icon-born-on-the-cusp',
learnCarouselRetrograde: '.icon-planets-in-retrograde',

// Carousel links
carouselPlanetLink: ".panel-card[href='https://www.astrology.com/planets']",
carouselAsteroidsLink: ".panel-card[href='https://www.astrology.com/asteroids']",
carouselElementsLink: ".panel-card[href='https://www.astrology.com/elements']",
carouselModalitiesLink: ".panel-card[href='https://www.astrology.com/modalities']",
carouselHousesLink: ".panel-card[href='https://www.astrology.com/houses']",
carouselTransitsLink: ".panel-card[href='https://www.astrology.com/aspects-and-transits']",
carouselCuspLink: ".panel-card[href='https://www.astrology.com/on-the-cusp']",
carouselRetroLink: ".panel-card[href='https://www.astrology.com/retrograde']",

// Previous and Next arrows
carouselPrevious: '.blue-widgets-carousel .previous',
carouselNext: '.blue-widgets-carousel .next',

// Learn section locators
numerologyImageCard: "[alt='numerology']",
numerologyLinkCard: ".image-card--horz[href='https://www.astrology.com/numerology']",
numerologyPreview: ".image-card--horz[href='https://www.astrology.com/numerology'] .card__description",
psychicsImageCard: "[alt='psychics']",
psychicsLinkCard: ".image-card--horz[href='https://www.astrology.com/psychic-readings']",
psychicsPreview: ".image-card--horz[href='https://www.astrology.com/psychic-readings'] .card__description",

// Article section locators (images)
firstArticleImage: '.latest-articles-carousel .flickity-slider > div:nth-of-type(1)',
secondArticleImage: '.latest-articles-carousel .flickity-slider > div:nth-of-type(2)',
thirdArticleImage: '.latest-articles-carousel .flickity-slider > div:nth-of-type(3)',
   
// Reports images - STORE section
learnAplusImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(1)', // A+ First carousel card
learnBirthImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(2)',
learnNatalMoonImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(3)',
learnfullMoonImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(4)',
learnmonthTransits: '.recommended-reports-carousel > div > div > div > div > div:nth-child(5)',
learnCareerImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(6)',
learnNumerologyImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(7)',
learnVedicImage: '.recommended-reports-carousel > div > div > div > div > div:nth-child(8)',

// Recommended reports carousel arrows, next and previous
carouselRecommendedNext: '.recommended-reports-carousel > .carousel-container > .main-carousel > .next',
carouselRecommendedPrevious: '.recommended-reports-carousel > .carousel-container > .main-carousel > .previous',

}