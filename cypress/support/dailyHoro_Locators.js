/// <reference types="cypress" />


export default {

    
    // Selectors
    titleDaily: '.snippet > .section__title',
    snippetTitle: ':nth-child(3) > .snippet__title',
    iconsContainer: '.snippet > div:nth-of-type(1) > .icons-container', // Container of icons (sun, moon, trine, pluto, etc)
    textAd: '.text-link',
    textAdLink: '#ntv',
    firstParagraph: '.snippet > .snippet__body', // First paragraph of firsdt part
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
    carouselBackButton: '.previous'

}