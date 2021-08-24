/// <reference types="cypress" />


export default {

    
    // Selectors
    titleDaily: '.snippet > .section__title',
    snippetTitle: ':nth-child(3) > .snippet__title',
    iconsContainer: '.snippet > div:nth-of-type(1) > .icons-container', // Container of icons (sun, moon, trine, pluto, etc)
    textAd: '.text-link',
    textAdLink: '#ntv',
    firstParagraph: '.snippet > .snippet__body', // First paragraph of first part
    secondParagraph: '.snippet > .snippet__header p', // Second paragrap of first part - Sometimes there is no second paragraph here.
    carouselContainer: '.carousel-container',
    carouselWeeklyIcon: '.icon-weekly',
    carouselMonthlyIcon: '.icon-monthly',
    carouselYearlyIcon: '.icon-yearly',    
    carouselChineseIcon: '.icon-chinese',
    carouselLoveIcon: '.icon-love',
    carouseWorkIcon: '.icon-work',
    carouselDateIcon: '.icon-love',
    carouselNextButton: '.next',
    carouselBackButton: '.previous',

     // list of Zodiac sign images
     dailyAriesImg: "[alt='aries']",
     dailyTaurusImg: "[alt='taurus']",
     dailyGeminiImg: "[alt='gemini']",
     dailyCancerImg: "[alt='cancer']",
     dailyLeoImg: "[alt='leo']",
     dailyVirgoImg: "[alt='virgo']",
     dailyLibraImg: "[alt='libra']",
     dailyScorpioImg: "[alt='scorpio']",
     dailySagittariusImg: "[alt='sagittarius']",
     dailyCapricornImg: "[alt='capricorn']",
     dailyAquariusImg: "[alt='aquarius']",
     dailyPiscesImg: "[alt='pisces']",

    // Zodiac sign preview
    dailyAriesPreview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/aries.html'] .card__description",
    dailyTaurusPreview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/taurus.html'] .card__description",
    dailyGeminiPreview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/gemini.html'] .card__description",
    dailyCancerPreview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/cancer.html'] .card__description",
    dailyLeoPreview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/leo.html'] .card__description",
    dailyVirgoPreview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/virgo.html'] .card__description",
    dailyLibraPreview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/libra.html'] .card__description",
    dailyScorpioPreview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/scorpio.html'] .card__description",
    dailySagittariusPreview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/sagittarius.html'] .card__description",
    dailyCapricornPereview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/capricorn.html'] .card__description",
    dailyAquariusPreview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/aquarius.html'] .card__description",
    dailyPiscesPreview: ".image-card--horz[href='https://www.astrology.com/horoscope/daily/pisces.html'] .card__description",



}