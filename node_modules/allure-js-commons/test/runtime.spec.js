'use strict';
var proxyquire = require('proxyquire');
var Allure = proxyquire('../index', {'fs-extra': require('./helpers/mock-fs')});
var AllureRuntime = require('../runtime');

var joc = jasmine.objectContaining.bind(jasmine);

describe('allure-runtime', function() {
    var runtime, allure;
    beforeEach(function() {
        allure = new Allure();
        runtime = new AllureRuntime(allure);
        allure.startSuite('dummy suite');
        allure.startCase('dummy case');
    });

    it('should add labels', function() {
        runtime.epic('anEpic');
        runtime.feature('labels');
        runtime.story('add');

        expect(allure.getCurrentSuite().currentTest).toEqual(joc({
            labels: [
                {name: 'epic', value: 'anEpic'},
                {name: 'feature', value: 'labels'},
                {name: 'story', value: 'add'}
            ]
        }));
    });

    it('should add text type description by default', function() {
        var description = 'test desc';

        runtime.description(description);

        expect(allure.getCurrentSuite().currentTest.description).toEqual(joc({
            type: 'text',
            value: description
        }));
    });

    it('should add description with markdown', function() {
        var description = 'test desc';
        var type = 'markdown';

        runtime.description(description, type);

        expect(allure.getCurrentSuite().currentTest.description).toEqual(joc({
            type: type,
            value: description
        }));
    });

    it('should add parameters', function() {
        runtime.addArgument('test', 'value');
        runtime.addEnvironment('env', 'ok');
        expect(allure.getCurrentTest()).toEqual(joc({
            parameters: [
                {name: 'test', value: 'value', kind: 'argument'},
                {name: 'env',  value: 'ok',    kind: 'environment-variable'}
            ]
        }));
    });

    it('should create steps and record them', function() {
        var stepSpy = jasmine.createSpy('stepSpy');
        var stepFn = runtime.createStep('demo step [{0}]', stepSpy);
        stepFn('param');
        expect(allure.getCurrentSuite().currentTest.steps).toEqual([
            joc({
                name: 'demo step [param]',
                status: 'passed',
                stop: jasmine.any(Number)
            })
        ]);
        expect(stepSpy).toHaveBeenCalledWith('param');
    });

    it('should mark steps with exception as broken', function() {
        var brokenSpy = jasmine.createSpy('brokenSpy')
            .and.throwError('Unexpected something');
        var brokenStep = runtime.createStep('step 1', brokenSpy);
        expect(brokenStep).toThrow();
        expect(allure.getCurrentSuite().currentTest.steps).toEqual([
            joc({
                name: 'step 1',
                status: 'broken',
                stop: jasmine.any(Number)
            })
        ]);
    });

    it('should create attachements as function', function() {
        var attachmentFunction = runtime.createAttachment('file [{0}]', function() {
            return new Buffer('content', 'utf-8');
        });
        attachmentFunction('test');
        expect(allure.getCurrentSuite().currentTest.attachments).toEqual([
            joc({
                title: 'file [test]',
                type: 'text/plain'
            })
        ]);
    });

    it('should create arbitrary attachements', function() {
        runtime.createAttachment('note', 'I want to save it');
        expect(allure.getCurrentSuite().currentTest.attachments).toEqual([
            joc({
                title: 'note'
            })
        ]);
    });

    it('should add attachments inside step', function() {
        var stepFn = runtime.createStep('save file [{0}]', function(name, content) {
            runtime.createAttachment(name, content);
        });
        stepFn('test', 'test content');
        expect(allure.getCurrentSuite().currentTest.attachments).toEqual([]);
        expect(allure.getCurrentSuite().currentTest.steps).toEqual([joc({
            attachments: [joc({title: 'test', type: 'text/plain'})]
        })]);
    });

    it('should able to assign labels to test', function() {
        runtime.addLabel('feature', 'labels');
        runtime.addLabel('story', 'add from runtime');
        expect(allure.getCurrentSuite().currentTest.labels).toEqual([
            {name: 'feature', value: 'labels'},
            {name: 'story', value: 'add from runtime'}
        ]);
    });

    it('should await promises and can create asynchronous step tree', function(done) {
        var rootStep = runtime.createStep('root', function() {
                return firstNested().then(function(result) {
                    expect(result).toBe('ok result');
                    return secondNested();
                });
            }),
            firstNested = runtime.createStep('passed', function() {
                return Promise.resolve('ok result');
            }),
            secondNested = runtime.createStep('broken', function() {
                return Promise.reject('bad result');
            });
        rootStep().then(done.fail, function(result) {
            expect(result).toBe('bad result');
            expect(allure.getCurrentSuite().currentTest.steps).toEqual([
                joc({
                    name: 'root',
                    steps: [
                        joc({
                            name: 'passed',
                            status: 'passed',
                            start: jasmine.any(Number),
                            stop: jasmine.any(Number)
                        }),
                        joc({
                            name: 'broken',
                            status: 'broken',
                            start: jasmine.any(Number),
                            stop: jasmine.any(Number)
                        })
                    ]
                })
            ]);
            done();
        });
    });
});
