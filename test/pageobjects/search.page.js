const Page = require('./page');


class SearchPage extends Page {
    get searchSetFirstElem() {
        return $$('div.search-title>a')[0];
    }

}

module.exports = new SearchPage();
