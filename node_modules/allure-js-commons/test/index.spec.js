var proxyquire = require('proxyquire');
var Allure = proxyquire('../index', {'fs-extra': require('./helpers/mock-fs')});
var joc = jasmine.objectContaining.bind(jasmine);
var writer = require('../writer');

describe('allure-reporter', function () {
    var allure;

    beforeEach(function () {
        allure = new Allure();
        allure.startSuite('test suite');
    });

    describe('testcase not existing(beforeAll case)', function () {

        beforeEach(function () {
            spyOn(console, 'warn');
        });

        it('should not try to append step to non-existent case', function () {
            allure.startStep('test step');
            expect(allure.getCurrentSuite().testcases.length).toBe(0);
        });

        it('should warn if trying to append step to non-existent case', function () {
            allure.startStep('test step');
            expect(console.warn).toHaveBeenCalledTimes(1);
        });

        it('should warn on adding attachment on non-existent step', function () {
            spyOn(writer, 'writeBuffer').and.returnValue('someAttachmentName');

            allure.addAttachment('attachmentName', 'someBuffer', 'txt');

            expect(console.warn).toHaveBeenCalledTimes(1);
        });

    });

    describe('testcase existing', function () {

        beforeEach(function () {
            allure.startCase('test case');
        });

        it('should provide custom step start and stop time', function () {
            allure.startStep('test step', 123);
            allure.endStep('passed', 130);
            expect(allure.getCurrentSuite().currentTest.steps).toEqual([
                joc({
                    name: 'test step',
                    start: 123,
                    stop: 130
                })
            ]);
        });

        it('should allow to change test case status after end but only to failed', function () {
            var testCase = allure.getCurrentSuite().testcases[0];
            allure.endCase('passed');
            expect(testCase.status).toBe('passed');
            allure.endCase('failed', new Error('test error'));
            expect(testCase.status).toBe('failed');
            allure.endCase('passed');
            expect(testCase.status).toBe('failed');
        });

        it('should print warning on finishing missing step', function () {
            var suite = allure.getCurrentSuite();
            spyOn(console, 'warn');

            allure.startStep('test step');
            expect(suite.currentTest).not.toBe(suite.currentStep);

            allure.endStep('passed');
            expect(suite.currentTest).toBe(suite.currentStep);

            allure.endStep('passed');
            expect(console.warn).toHaveBeenCalledTimes(1);
            expect(suite.currentTest).toBe(suite.currentStep);
        });

        it('should add text type description by default', function () {
            var testCase = allure.getCurrentSuite().testcases[0];
            var description = 'test desc';

            allure.setDescription(description);

            expect(testCase.description.value).toBe(description);
            expect(testCase.description.type).toBe('text');
        });

        it('should add description with markdown', function () {
            var testCase = allure.getCurrentSuite().testcases[0];
            var description = 'test desc';
            var type = 'markdown';

            allure.setDescription(description, type);

            expect(testCase.description.value).toBe(description);
            expect(testCase.description.type).toBe(type);
        });
    });
});
