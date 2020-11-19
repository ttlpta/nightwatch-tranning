module.exports = {
    url: 'https://www.transfermarkt.com/',
    elements: {
        mainQueryInput: 'input.header-suche[name="query"]',
        submitButton: '.header-suche-abschicken[alt="Search"]',
    },
    commands: [{
        setQuery(value) {
            return this
                .setValue('@mainQueryInput', value);
        },
        search() {
            return this
                .click('@submitButton');
        }
    }]
};
