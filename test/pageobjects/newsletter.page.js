const Page = require('./page');


class NewsletterPage extends Page {

    get textSubscribeElem() {
        return $('#hero-section-brand-heading');
    }

    get inputEmail(){
        return $('input[type="email"]');
    }

    get selectCountry() {
        return $('#country');
    }

    get checkBoxPersonalized() {
        return $('#gated-agree-marketingEmailOptin1');
    }

    get buttonSubscribe() {
        return $('button[type="submit"]');
    }

    async setEmail(email = '123test@email.com') {
        await this.inputEmail.addValue(email);
    }

    async setCountry(country = 'UA') {
        await this.selectCountry.selectByAttribute('value', country);
    }

    async clickCheckBoxPersonalized() {
        if(!this.checkBoxPersonalized.isSelected()){
        await this.checkBoxPersonalized.click();
        }
    }

    async clickButtonSubscribe() {
        await this.buttonSubscribe.click();
    }

}

module.exports = new NewsletterPage();
