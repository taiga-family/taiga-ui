/*jslint node: true */
"use strict";
var AllureReporter = require('./src/AllureReporter');

// PUBLISH DI MODULE
module.exports = {
    'reporter:allure': ['type', AllureReporter]
};