'use strict';

var chai = require('chai'),
    os = require('os'),
    findInFiles = require('../index'),
    stringOne = 'dolor sit amet',
    stringTwo = 'Träumen',
    stringThree = 'This is in both files',
    stringFour = 'This is duplicate',
    ObjectOne = {
        'term': "dolor sit amet",
        'flags': "ig"
    },
    chaiAsPromised = require('chai-as-promised'),
    expect = require('chai').expect;

chai.use(chaiAsPromised);
chai.should();

['find', 'findSync'].forEach(function(method) {
    describe('find some test strings (using "' + method + '")', function() {
        this.timeout(15000);
        it('should handle error properly', function() {
            return expect(findInFiles[method](stringOne, 'directorydoesnotexist', '.txt$')).to.be.rejected;
        });
        
        it('should find stringOne only in fileOne exactly one time', function() {
            return findInFiles[method](stringOne, '.', '.txt$')
                .then(function(result) {
                    var paths = constructPaths({
                        first: "fileOne.txt",
                        second: "fileTwo.txt"
                    })
                    result[paths.first].count.should.equal(1);
                    result.should.not.have.property(paths.second);
                });
        });

        it('should find stringTwo only in fileTwo exactly one time', function() {
            return findInFiles[method](stringTwo, '.', '.txt$')
                .then(function(result) {
                    var paths = constructPaths({
                        first: "fileTwo.txt",
                        second: "fileOne.txt"
                    })
                    result[paths.first].count.should.equal(1);
                    result.should.not.have.property(paths.second);
                });
        });

        it('should find stringThree in both files exactly one time', function() {
            return findInFiles[method](stringThree, '.', '.txt$')
                .then(function(result) {
                    var paths = constructPaths({
                        first: "fileOne.txt",
                        second: "fileTwo.txt"
                    })
                    result[paths.first].count.should.equal(1);
                    result[paths.second].count.should.equal(1);
                });
        });

        it('should find stringFour 2 times in fileOne and 3 times in fileTwo', function() {
            return findInFiles[method](stringFour, '.', '.txt$')
                .then(function(result) {
                    var paths = constructPaths({
                        first: "fileOne.txt",
                        second: "fileTwo.txt"
                    })
                    result[paths.first].count.should.equal(2);
                    result[paths.second].count.should.equal(3);
                });
        });

        it('should not find strings in the .js file', function() {
            return findInFiles[method](stringOne, '.', '.txt$')
                .then(function(result) {
                    var paths = constructPaths({
                        first: "fileOne.txt",
                        second: "fileOne.md"
                    })
                    result[paths.first].count.should.equal(1);
                    result.should.not.have.property(paths.second);
                });
        });

        it('should accept a regex object for fileFilter', function() {
            return findInFiles[method](stringOne, '.', /.txt$/)
                .then(function(result) {

                    var paths = constructPaths({
                        first: "fileOne.txt",
                        second: "fileOne.md"
                    })
                    result[paths.first].count.should.equal(1);
                    result.should.not.have.property(paths.second);
                });
        });

        it('should find strings in all files', function() {
            return findInFiles[method](stringOne, 'test/')
                .then(function(result) {
                    var paths = constructPaths({
                        first: "fileOne.txt",
                        second: "fileOne.md"
                    })
                    result[paths.first].count.should.equal(1);
                    result[paths.second].count.should.equal(1);
                });
        });

        it('should find stringOne twice in fileOne since we are case insensative', function() {
            return findInFiles[method](ObjectOne, '.', '.txt$')
                .then(function(result) {
                    var paths = constructPaths({
                        first: "fileOne.txt",
                        second: "fileOne.md"
                    })
                    result[paths.first].count.should.equal(2);
                    result.should.not.have.property(paths.second);
                });
        });
    });
});

function constructPaths(data) {

    var result = {};

    if (os.platform() == 'win32') {
        result.first = 'test\\' + data.first;
        result.second = 'test\\' + data.second;
    } else {
        result.first = 'test/' + data.first;
        result.second = 'test/' + data.second;
    }

    return result;
}
