'use strict';

var Description = require('./description');

var STATUSES = ['passed', 'pending', 'skipped', 'failed', 'broken'];
function Test(name, timestamp) {
    this.name = name;
    this.start = timestamp || Date.now();
    this.steps = [];
    this.attachments = [];
    this.labels = [];
    this.parameters = [];
}

Test.prototype.setDescription = function (description, type) {
    this.description = new Description(description, type);
};

Test.prototype.addLabel = function (name, value) {
    this.labels.push({name: name, value: value});
};

Test.prototype.addParameter = function (kind, name, value) {
    this.parameters.push({kind: kind, name: name, value: value});
};

Test.prototype.addStep = function (step) {
    this.steps.push(step);
};

Test.prototype.addAttachment = function (attachment) {
    this.attachments.push(attachment);
};

Test.prototype.end = function (status, error, timestamp) {
    this.stop = timestamp || Date.now();
    if(STATUSES.indexOf(status) > STATUSES.indexOf(this.status)) {
        this.status = status;
    }
    if (error) {
        this.failure = {
            message: error.message,
            'stack-trace': error.stack
        };
    }
};

Test.prototype.toXML = function () {
    var result = {
        '@': {
            start: this.start,
            status: this.status
        },
        name: this.name,
        title: this.name,
        labels: {
            label: this.labels.map(function (label) {
                return { '@': label };
            })
        },
        parameters: {
            parameter: this.parameters.map(function (param) {
                return { '@': param };
            })
        },
        steps: {
            step: this.steps.map(function (step) {
                return step.toXML();
            })
        },
        attachments: {
            attachment: this.attachments.map(function (attachment) {
                return attachment.toXML();
            })
        }
    };

    if (this.failure) {
        result.failure = this.failure;
    }

    if (this.description) {
        result.description = this.description.toXML();
    }

    if(this.stop) {
        result['@'].stop = this.stop;
    }

    return result;
};

module.exports = Test;
