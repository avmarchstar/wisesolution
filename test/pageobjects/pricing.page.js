const Page = require('./page');


class PricingPage extends Page {

    get textCompleteElem() {
        return $('h1.h2-mktg');
    }

    get linkCompare() {
        return $('a[href="#compare-features"]');
    }

    get textCompareFeaturesElem() {
        return $('h1.h1');
    }

    async clickLinkCompare() {
        await this.linkCompare.click();
    }

}

module.exports = new PricingPage();
