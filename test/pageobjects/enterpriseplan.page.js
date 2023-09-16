const Page = require('./page');


class EnterprisePlanPage extends Page {

    get textPickPlan() {
        return $('.lh-condensed-ultra');
    }

    get linkRecommendedPlan() {
        return $('a>div.pricing-recommended-plan');
    }

    async clickLinkRecommendedPlan() {
        await this.linkRecommendedPlan.click();
    }


}

module.exports = new EnterprisePlanPage();
