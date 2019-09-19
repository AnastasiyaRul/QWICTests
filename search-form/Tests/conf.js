exports.config = {

    frameworks: ['ng-scenario', 'jasmine'],

    // Capabilities to be passed to the webdriver instance
    // For local execution.

    multiCapabilities:
        [{     'browserName': 'chrome',
            'chromeOptions':
                { 'args': ['incognito'] }},
            {     'browserName': 'firefox'   }],
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['QWICtests.js'],




    SELENIUM_PROMISE_MANAGER: true,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000
    },
    onPrepare: function() {
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reports',
            takeScreenshots: true
        }))
    },
};