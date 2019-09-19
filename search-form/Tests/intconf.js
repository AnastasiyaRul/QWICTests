exports.config = {

    frameworks: ['ng-scenario', 'jasmine'],

    // Capabilities to be passed to the webdriver instance
    // For local execution.
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions':
            { 'args': ['incognito'] }
    },

    directConnect: true,

    specs: ['intTest.js'],

    SELENIUM_PROMISE_MANAGER: true,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000
    },

};