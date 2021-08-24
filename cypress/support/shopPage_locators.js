/// <reference types="cypress" />

export default {

    shopTitle: ".woocommerce-products-header__title",
    shopDescription: ".page-description > p", 

    // Product Images
    homeCurrentHoroImg: "[alt='august horoscope']",
    homebirthChartImg: "[alt='birth-natal-chart']",
    homeLoveCompImg: "[alt='love-compatibility']",
    homeYesNoTarotImg: "[alt='Yes No Tarot']",
    homeLoveTarotImg: "[alt='love tarot reading']",
    homeLoveScoreImg: "[alt='love score']",
    homeSoulMateImg: "[alt='soulmate tarot']",
    homeMakeWishImg: "[alt='make a wish tarot']",
    homeKarmaReportImg: "[alt='karma report']",
    homeNatalMoonImg: "[alt='natal moon report']",
    homePastPresentImg: "[alt='past present future tarot']",
    homeTreeLifeImg: "[alt='tree of life tarot']",
    homeTarotAngelsImg: "[alt='tarot of angels']",
    homeCareerReportImg: "[alt='career report']",
    homeTransitsReportImg: "[alt='astrological-transits-report']",
    homeChakraTarotImg: "[alt='chakra tarot reading']",
    home2021HoroImg: "[alt='2021 Horoscope']",
    home2021NumerologyImg: "[alt='2021-numerology-report']",
    home2021VedicImg: "[alt='2021-numerology']",
    home2021ChineseImg: "[alt='2021-chinese-horoscope']",
    home2021TarotImg: "[src='https://shop.astrology.com/wp-content/uploads/sites/5/2020/02/Tarot_01.jpg']",
    home2021LoveTarotImg: "[src='https://shop.astrology.com/wp-content/uploads/sites/5/2020/02/2021-Love-Tarot.jpg']",
    homeAplusSubImg: "[src='https://shop.astrology.com/wp-content/uploads/sites/5/2020/09/acomstoregraphics-17-324x324.png']",

    // Product prices
    homeCurrentMonthHoroPrice: ".post-176620 bdi", // 14.95
    homebirthChartPrice: ".post-22 bdi", // 24.95
    homeLoveCompPrice: ".post-25 bdi", // 16.95
    homeYesNoTarotPrice: ".post-15645 bdi", //8.95
    homeLoveTarotPrice: ".post-5394 bdi", // 6.95
    homeLoveScorePrice: ".post-17385 bdi", // 29.95
    homeSoulMatePrice: ".post-13011 bdi", //24.95
    homeMakeWishPrice: ".post-27741 bdi", // 8.95
    homeKarmaReportPrice: ".post-18444 bdi", // 14.95
    homeNatalMoonPrice: ".post-17382 bdi", // 11.95
    homePastPresentPrice: ".post-27750 bdi", // 9.95
    homeTreeLifePrice: ".post-17503 bdi", // 24.95
    homeTarotAngelsPrice: ".post-27745 bdi", // 11.95
    homeCareerReportPrice: ".post-18030 bdi", // 19.95
    homeTransitsReportPrice: ".post-13882 bdi", // 19.95
    homeChakraTarotPrice: ".post-27744 bdi", // 11.96 
    home2021HoroPrice: ".post-2349 bdi", // 24.95
    home2021NumerologyPrice: ".post-3450 bdi", // 19.95
    home2021VedicPrice: ".post-2786 bdi", // 19.95
    home2021ChinesePrice: ".post-3098 bdi", // 21.95
    home2021TarotPrice: ".post-4802 bdi", // 19.95
    home2021LoveTarotPrice: ".post-7638 bdi", // 19.95
    homeAplusSubPrice: ".post-96410 bdi", // 29.97

    // Sort button
    sortButton: "#main > div:nth-of-type(2) [name='orderby']", // ":nth-child(4) > .woocommerce-ordering > .orderby" 
    sortDefault: "#main > div:nth-of-type(1) [value='menu_order']",
    sortByPopularity: "#main > div:nth-of-type(1) [value='popularity']", 
    sortByLatest: "#main > div:nth-of-type(1) [value='date']",
    sortLowToHigh: "#main > div:nth-of-type(1) [value='price']",
    sortHightoLow: "#main > div:nth-of-type(1) [value='price-desc']",

    // Monthly page locators, forms, etc
    reportFirstName: '#first-name',
    reportGenderSel: '.select > .field-skin',
    reportDoB: '#date-of-birth',
    daySelected: ".xdsoft_day_of_week0[data-date='6'] > div",
    timeOfBirth: "#time-of-birth",
    timeSelected: "div:nth-of-type(488)",
    
    


}