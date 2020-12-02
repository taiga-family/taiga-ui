'use strict';
var Allure = function(allure) {
    this._allure = allure;
};

Allure.prototype.isPromise = function(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

Allure.prototype.createStep = function(name, stepFunc) {
    var that = this;
    return function() {
        var stepName = that._format(name, Array.prototype.slice.call(arguments, 0)),
            status = 'passed',
            result;
        that._allure.startStep(stepName);
        try {
            result = stepFunc.apply(this, arguments);
        }
        catch(error) {
            status = 'broken';
            throw error;
        }
        finally {
            if(that.isPromise(result)) {
                result.then(function() {
                    that._allure.endStep('passed');
                }, function() {
                    that._allure.endStep('broken');
                });
            } else {
                that._allure.endStep(status);
            }
        }
        return result;
    };
};

Allure.prototype.createAttachment = function(name, content, type) {
    var that = this;
    if(typeof content === 'function') {
        return function() {
            var attachmentName = that._format(name, Array.prototype.slice.call(arguments, 0)),
                buffer = content.apply(this, arguments);
            return that.createAttachment(attachmentName, buffer, type);
        };
    } else {
        return that._allure.addAttachment(name, content, type);
    }
};

Allure.prototype.addLabel = function(name, value) {
    this._allure.getCurrentTest().addLabel(name, value);
};

Allure.prototype.addArgument = function(name, value) {
    this._allure.getCurrentTest().addParameter('argument', name, value);
};

Allure.prototype.addEnvironment = function(name, value) {
    this._allure.getCurrentTest().addParameter('environment-variable', name, value);
};

Allure.prototype.description = function(description, type) {
    this._allure.setDescription(description, type);
};

Allure.prototype.SEVERITY = {
    BLOCKER: 'blocker',
    CRITICAL: 'critical',
    NORMAL: 'normal',
    MINOR: 'minor',
    TRIVIAL: 'trivial'
};

Allure.prototype.severity = function(severity) {
    this.addLabel('severity', severity);
};

Allure.prototype.epic = function(epic) {
    this.addLabel('epic', epic);
};

Allure.prototype.feature = function(feature) {
    this.addLabel('feature', feature);
};

Allure.prototype.story = function(story) {
    this.addLabel('story', story);
};

Allure.prototype._format = function(name, arr) {
    return name.replace(/(\{(\d+)\})/gi, function(match, submatch, index) {
        return arr[index];
    });
};

module.exports = Allure;
