module.exports = {
    'Transfermarkt is alive'(browser) {
        browser
            .url('https://www.transfermarkt.com/')
            .waitForElementVisible('.icon-logo')
            .assert.cssProperty(".icon-logo", "display", "inline-block");
    }
};
