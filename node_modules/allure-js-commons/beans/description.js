'use srtict';

var TYPES = {
    TEXT: 'text',
    HTML: 'html',
    MARKDOWN: 'markdown'
};

function isAvailableType(type) {
    return Object.keys(TYPES).some(function(key) {
        return TYPES[key] === type;
    });
}

function Description(value, type) {
    this.value = value;
    this.type = isAvailableType(type) ? type : Description.TYPES.TEXT;
}

Description.prototype.toXML = function() {
    return {
        '@': {
            type: this.type
        },
        '#': this.value
    };
};

Description.TYPES = TYPES;

module.exports = Description;
