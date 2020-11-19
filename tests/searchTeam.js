module.exports = {
    '@tags': ['searchTeam'],
    'Transfermarkt search: Manchester City' (browser) {
        const mainQuery = 'Manchester City';
        const page = browser.page.searchTeam();
        page.navigate().setQuery(mainQuery).search();
        browser.assert.urlContains('query=Manchester+City', 'Params: Query is Manchester City');

        browser.elements('css selector', 'div.responsive-table table.items > tbody > tr', function(result){
            browser.assert.ok(result.value.length > 0, 'Search results > 0');
        });

        browser.saveScreenshot('tests_output/searchMancity1.png');
    }
};
