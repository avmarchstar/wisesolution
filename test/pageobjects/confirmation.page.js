const Page = require('./page');


class ConfirmationPage extends Page {

    get textThanksElem() {
        return $('#hero-section-brand-heading');
    }

}

module.exports = new ConfirmationPage();
