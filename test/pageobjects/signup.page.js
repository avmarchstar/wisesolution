const Page = require('./page');


class SignUpPage extends Page {

    get textWelcomeElem() {
        return $('.js-signup-typed-welcome')
    }

    get inputEmail() {
        return $('#email')
    }

    get buttonContinueEmail() {
        return $('button[data-optimizely-event="click.signup_continue.email"]')
    }

    get inputPassword() {
        return $('#password')
    }

    get buttonContinuePassword() {
        return $('button[data-optimizely-event="click.signup_continue.password"]')
    }

    get inputUsername() {
        return $('#login')
    }

    get buttonContinueUsername() {
        return $('button[data-optimizely-event="click.signup_continue.username"]')
    }

    get inputOption() {
        return $('#opt_in')
    }

    get buttonContinueOption() {
        return $('button[data-optimizely-event="click.signup_continue.opt-in"]')
    }

    get textVerifyElem() {
        return $('#captcha-and-submit-container')
    }




    async setEmail(email = '123test@email.com') {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.addValue(email);
    }

    async clickButtonContinueEmail() {
        await this.buttonContinueEmail.waitForEnabled();
        await this.buttonContinueEmail.click();
    }

    async setPassword(password = 'A123qw123A') {
         await this.inputPassword.waitForDisplayed();
         await this.inputPassword.addValue(password);
    }

    async clickButtonContinuePassword() {
        await this.buttonContinuePassword.waitForEnabled();
        await this.buttonContinuePassword.click();
    }

    async setUsername(userName = 'Garpintier50') {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.addValue(userName);
    }

    async clickButtonContinueUsername() {
        await this.buttonContinueUsername.waitForEnabled();
        await this.buttonContinueUsername.click();
    }

    async setOption(option = 'y') {
        await this.inputOption.waitForDisplayed();
        await this.inputOption.addValue(option);
    }

    async clickButtonContinueOption() {
        await this.buttonContinueOption.waitForEnabled();
        await this.buttonContinueOption.click();
    }

}

module.exports = new SignUpPage();
