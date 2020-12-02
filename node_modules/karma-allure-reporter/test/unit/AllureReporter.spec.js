var mockery = require('mockery');
describe('AllureReporter', function() {
    var baseReporterDecorator, config, emitter, logger, helper,
        Allure, allure,
        Reporter;

    function TestResult(suite, description, error, success, skipped) {
        this.suite = [suite];
        this.description = description;
        this.log = [error];
        this.success = success;
        this.skipped = skipped;
    }

    function Browser(name) {
        this.name = name;
    }

    beforeEach(function() {
        mockery.enable({ useCleanCache: true });
        mockery.registerMock('allure-js-commons', Allure = jasmine.createSpy('Allure'));
        allure = jasmine.createSpyObj('allure', ['startSuite', 'endSuite', 'startCase', 'endCase', 'pendingCase', 'setOptions']);
        Allure.and.returnValue(allure);
        mockery.registerAllowable('../../src/AllureReporter.js');
        mockery.registerAllowable('path');
        Reporter = require('../../src/AllureReporter.js');
    });

    afterEach(function() {
        mockery.deregisterAll();
        mockery.resetCache();
        mockery.disable();
    });
    
    beforeEach(function() {
        baseReporterDecorator = jasmine.createSpy('decorator');
        config = {
            files: [],
            basePath: '/'
        };
        emitter = jasmine.createSpyObj('emitter', ['on']);
        logger = {};
        helper = {};
    });

    it('should use default as out dir by default', function() {
        var reporter = new Reporter(baseReporterDecorator, config);
        expect(allure.setOptions).toHaveBeenCalledWith({targetDir: undefined});
    });

    it('should use allure report dir when it is set', function() {
        config.allureReport = {reportDir : "reports"};
        var reporter = new Reporter(baseReporterDecorator, config);
        expect(allure.setOptions).toHaveBeenCalledWith({targetDir: '/reports'});
    });

    describe("reporting", function () {
        var reporter;

        beforeEach(function() {
            reporter = new Reporter(baseReporterDecorator, config);
        });

        it("should report tests in one suite", function () {
            reporter.specSuccess('test', new TestResult('a suite', 'first', null, true, false));
            expect(allure.startSuite).toHaveBeenCalled();
            expect(allure.startCase).toHaveBeenCalled();
            expect(allure.endCase).toHaveBeenCalledWith('passed', undefined, jasmine.any(Number));
            expect(allure.endSuite).not.toHaveBeenCalled();

            allure.startSuite.calls.reset();
            reporter.specSuccess('test', new TestResult('a suite', 'second', null, true, false));
            expect(allure.endCase).toHaveBeenCalledWith('passed', undefined, jasmine.any(Number));
            expect(allure.startSuite).not.toHaveBeenCalled();
        });

        it("should report failed tests", function () {
            reporter.specFailure('test', new TestResult('fails', 'first', 'Expected but not happened', false, false));
            expect(allure.endCase).toHaveBeenCalledWith('failed', jasmine.any(Object), jasmine.any(Number));

            reporter.specFailure('test', new TestResult('fails', 'second', 'Error without reason', false, false));
            expect(allure.endCase).toHaveBeenCalledWith('broken', jasmine.any(Object), jasmine.any(Number));
        });

        it("should report skipped tests", function () {
            reporter.specSkipped('test', new TestResult('future', 'ignored test', null, false, true));
            expect(allure.startCase).toHaveBeenCalledWith('ignored test', jasmine.any(Number));
            expect(allure.endCase).toHaveBeenCalledWith('pending', jasmine.any(Object), jasmine.any(Number));
        });

        it("should finish suites on testrun finish", function () {
            reporter.suites = {
                'a': [{start: 0,  stop: 2},  {start: 6,  stop: 7}],
                'b': [{start: 45, stop: 48}, {start: 51, stop: 57}]
            };
            reporter.onRunComplete();
            expect(allure.endSuite).toHaveBeenCalledWith(7);
            expect(allure.endSuite).toHaveBeenCalledWith(57);
        });

        it("should add browser to suitName as default option", function () {
            reporter.specSuccess(new Browser('browser'), new TestResult('a suite', 'first', null, true, false));
            expect(allure.startSuite).toHaveBeenCalledWith('[browser] a suite', jasmine.any(Number));
        });

        it("should add browser to suitName", function () {
            config.allureReport.useBrowserName = true;
            reporter = new Reporter(baseReporterDecorator, config);
            reporter.specSuccess(new Browser('browser'), new TestResult('a suite', 'first', null, true, false));
            expect(allure.startSuite).toHaveBeenCalledWith('[browser] a suite', jasmine.any(Number));
        });

        it("should not add browser to suitName", function () {
            config.allureReport.useBrowserName = false;
            reporter = new Reporter(baseReporterDecorator, config);
            reporter.specSuccess(new Browser('browser'), new TestResult('a suite', 'first', null, true, false));
            expect(allure.startSuite).toHaveBeenCalledWith('a suite', jasmine.any(Number));
        });
    });
});
