'use strict';
var assign = require('object-assign'),
    Suite = require('./beans/suite'),
    Test = require('./beans/test'),
    Step = require('./beans/step'),
    Attachment = require('./beans/attachment'),
    util = require('./util'),
    writer = require('./writer');

function Allure() {
    this.suites = [];
    this.options = {
        targetDir: 'allure-results'
    };
}
Allure.prototype.setOptions = function(options) {
    assign(this.options, options);
};

Allure.prototype.getCurrentSuite = function() {
    return this.suites[0];
};

Allure.prototype.getCurrentTest = function() {
    return this.getCurrentSuite().currentTest;
};

Allure.prototype.startSuite = function(suiteName, timestamp) {
    this.suites.unshift(new Suite(suiteName, timestamp));
};

Allure.prototype.endSuite = function(timestamp) {
    var suite = this.getCurrentSuite();
    suite.end(timestamp);
    if(suite.hasTests()) {
        writer.writeSuite(this.options.targetDir, suite);
    }
    this.suites.shift();
};

Allure.prototype.startCase = function(testName, timestamp) {
    var test = new Test(testName, timestamp),
        suite = this.getCurrentSuite();
    suite.currentTest = test;
    suite.currentStep = test;
    suite.addTest(test);
};

Allure.prototype.endCase = function(status, err, timestamp) {
    this.getCurrentTest().end(status, err, timestamp);
};

Allure.prototype.startStep = function(stepName, timestamp) {
    var step = new Step(stepName, timestamp),
        suite = this.getCurrentSuite();
    if (!suite || !suite.currentStep) {
        console.warn('allure-js-commons: Unexpected startStep() of ' + stepName + '. There is no parent step');
        return;
    }

    step.parent = suite.currentStep;
    step.parent.addStep(step);
    suite.currentStep = step;

};

Allure.prototype.endStep = function(status, timestamp) {
    var suite = this.getCurrentSuite();
    if (!suite || !(suite.currentStep instanceof Step)) {
        console.warn('allure-js-commons: Unexpected endStep(). There are no any steps running');
        return;
    }

    suite.currentStep.end(status, timestamp);
    suite.currentStep = suite.currentStep.parent;
};

Allure.prototype.setDescription = function(description, type) {
    this.getCurrentTest().setDescription(description, type);
};

Allure.prototype.addAttachment = function(attachmentName, buffer, type) {
    var info = util.getBufferInfo(buffer, type),
        name = writer.writeBuffer(this.options.targetDir, buffer, info.ext),
        attachment = new Attachment(attachmentName, name, buffer.length, info.mime),
        currentStep = this.getCurrentSuite().currentStep;

    if (currentStep) {
        currentStep.addAttachment(attachment);
    } else {
        console.warn('Trying to add attachment ' + attachmentName + ' to non-existent step');
    }
};

Allure.prototype.pendingCase = function(testName, timestamp) {
    this.startCase(testName, timestamp);
    this.endCase('pending', {message: 'Test ignored'}, timestamp);
};

module.exports = Allure;
