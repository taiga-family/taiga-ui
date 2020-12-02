var tempy = require('tempy');
var fs = require('fs');
var Allure = require('../');
var tmpDir = tempy.directory();

describe('integration tests', function() {
    it('should write resulting xml', function() {
        var allure = new Allure();
        allure.setOptions({
            targetDir: tmpDir
        });

        allure.startSuite('suite');
        allure.startCase('test');
        allure.startStep('step');
        allure.addAttachment('attachement', 'test content');
        allure.endStep('passed');
        allure.endCase('passed');
        allure.endSuite();

        expect(fs.readdirSync(tmpDir).length).toBe(2);
    });
});
