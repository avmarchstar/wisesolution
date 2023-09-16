const Page = require('./page');


class MainPage extends Page {

    get buttonSignUp() {
        return $('.HeaderMenu-link--sign-up');
    }

    get textPlaceElem() {
        return $('div[class=""]>h2.color-fg-default');
    }

    get linkStartTrial() {
        return $('div.border-top+a.btn-muted-mktg');
    }

    get linkSubscribe() {
        return $('[href="https://resources.github.com/newsletter/"]');
    }

    get searchElem() {
        return $('.search-input-container');
    }

    get inputSearch() {
        return $('#query-builder-test');
    }
  
    open () {
        return super.open();
    }

    async clickButtonSignUp() {
        await this.buttonSignUp.click();
    }

    async clickLinkStartTrial() {
        await this.linkStartTrial.click();
    }

    async clickLinkSubscribe() {
        await this.linkSubscribe.click();
    }

    async clickSearchElem() {
        await this.searchElem.click();
    }

    async enterInputSearch(value = 'act') {
        await this.inputSearch.addValue(value);
    }

    async startSearch() {
        await browser.keys('Enter');
        await browser.pause(5000)
    }

}

module.exports = new MainPage();
