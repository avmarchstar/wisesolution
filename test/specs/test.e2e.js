const { expect } = require('@wdio/globals')
const { browser } = require('@wdio/globals')
const MainPage = require('../pageobjects/main.page');
const SignupPage = require('../pageobjects/signup.page');
const EnterprisePlanPage = require('../pageobjects/enterpriseplan.page');
const NewsletterPage = require('../pageobjects/newsletter.page');
const ConfirmationPage = require('../pageobjects/confirmation.page');
const SearchPage = require('../pageobjects/search.page');
const PricingPage = require('../pageobjects/pricing.page');


describe('GitHub site', () => {
    it('should register with valid credentials. TestCase#1', async () => {
        await MainPage.open();
        await MainPage.clickButtonSignUp();

        await SignupPage.textWelcomeElem.waitUntil(async function () {
            return (await this.getText()) === "Welcome to GitHub!\nLet’s begin the adventure"
        }, {
            timeout: 20000,
            timeoutMsg: 'expected text to be different after 20s'
        })
        
        await SignupPage.setEmail();
        await SignupPage.clickButtonContinueEmail();
        
        await SignupPage.setPassword();
        await SignupPage.clickButtonContinuePassword();
        
        await SignupPage.setUsername();
        await SignupPage.clickButtonContinueUsername();
        
        await SignupPage.setOption();
        await SignupPage.clickButtonContinueOption();
        
        await expect(SignupPage.textVerifyElem).toHaveText('Verify your account');

    })

    it('should scroll and choose plan. TestCase#2', async ()=>{
        await MainPage.open();
        await MainPage.textPlaceElem.scrollIntoView();
        await expect(MainPage.textPlaceElem).toHaveText('The place for anyone from anywhere to build anything');
        await expect(MainPage.linkStartTrial).toBeDisplayed();
        await MainPage.clickLinkStartTrial();
        await expect(EnterprisePlanPage.textPickPlan).toHaveText('Pick your trial plan');
        await EnterprisePlanPage.clickLinkRecommendedPlan();
    })

    it.only('should scroll and subscribe. TestCase#3', async ()=>{
        await MainPage.open();
        await MainPage.linkSubscribe.scrollIntoView();
        await expect(MainPage.linkSubscribe).toBeClickable();
        await MainPage.clickLinkSubscribe();
        await expect(browser).toHaveUrl('https://resources.github.com/newsletter/');
        await expect(NewsletterPage.textSubscribeElem).toBeExisting();
        await NewsletterPage.setEmail();
        await NewsletterPage.setCountry();
        await NewsletterPage.clickCheckBoxPersonalized();
        await NewsletterPage.clickButtonSubscribe();
        await expect(ConfirmationPage.textThanksElem).toHaveText('Thanks for subscribing!');

    })

    it('should search and be exist. TestCase#4', async ()=>{
        await MainPage.open();
        await MainPage.clickSearchElem();
        await MainPage.enterInputSearch();
        await MainPage.startSearch();
        await expect(SearchPage.searchSetFirstElem).toHaveHrefContaining('act');

    })

    it('should choose pricing and be exist. TestCase#5', async ()=>{
        await MainPage.open();
        await MainPage.clickLinkPricing();
        await expect(PricingPage.textCompleteElem).toBeDisplayed();
        await PricingPage.linkCompare.scrollIntoView();
        await PricingPage.clickLinkCompare();
        await expect(PricingPage.textCompareFeaturesElem).toHaveText('Compare features');

    })

})

