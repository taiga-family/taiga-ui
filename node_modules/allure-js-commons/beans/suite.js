function Suite(name, timestamp) {
    this.name = name;
    this.start = timestamp || Date.now();
    this.testcases = [];
}
Suite.prototype.end = function(timestamp) {
    this.stop = timestamp || Date.now();
};

Suite.prototype.hasTests = function() {
    return this.testcases.length > 0;
};

Suite.prototype.addTest = function(test) {
    this.testcases.push(test);
};

Suite.prototype.toXML = function() {
    var result = {
        '@': {
            'xmlns:ns2' : 'urn:model.allure.qatools.yandex.ru',
            start: this.start
        },
        name: this.name,
        title: this.name,
        'test-cases': {
            'test-case': this.testcases.map(function(testcase) {
                return testcase.toXML();
            })
        }
    };


    if(this.stop) {
        result['@'].stop = this.stop;
    }

    return result;
};

module.exports = Suite;
