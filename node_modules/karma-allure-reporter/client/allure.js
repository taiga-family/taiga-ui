(function(window, karma) {
    function patch(obj, method, fn) {
        var original = obj[method];
        obj[method] = function() {
            fn.apply(this, arguments);
            original.apply(this, arguments);
        }
    }
    function Step(name) {
        this.name = name;
        this.start = Date.now();
        this.steps = [];
    }
    Step.prototype.complete = function(status) {
        this.status = status;
        this.stop = Date.now();
    };

    function Allure(console) {
        this.flushReport();
        this.severity = function(severity) {
            if(!this.severity.hasOwnProperty(severity.toUpperCase())) {
                console.warn('Unknown severity: ' + severity);
            }
            this.label('severity', severity);
        };
        this.severity.BLOCKER = 'blocker';
        this.severity.CRITICAL = 'critical';
        this.severity.NORMAL = 'normal';
        this.severity.MINOR = 'minor';
        this.severity.TRIVIAL = 'trivial';

        this.description = function(description) {
            this.report.description = description;
        };

        var currentStep;
        this.createStep = function(name, stepFunc) {
            var allure = this;
            return function() {
                var parentStep = currentStep,
                    status = 'passed',
                    step = new Step(name);
                if(parentStep) {
                    parentStep.steps.push(step);
                } else {
                    allure.report.steps.push(step);
                }
                currentStep = step;
                try {
                    var result = stepFunc.apply(this, arguments);
                }
                catch(error) {
                    status = 'broken';
                    throw error;
                }
                finally {
                    step.complete(status);
                    currentStep = parentStep;
                }
                return result;
            }
        };
        this.label = function(key, value) {
            this.report.labels.push({key: key, value: value});
        }
    }
    Allure.prototype.flushReport = function() {
        var report = this.report;
        this.report = {steps: [], labels: []};
        return report;
    };
    patch(karma, 'result', function(result) {
        result.allure = window.allure.flushReport();
    });
    window.allure = new Allure(window.console);
})(window, window.__karma__);
