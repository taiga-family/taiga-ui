'use strict';
module.exports = {
    files: {},
    outputFileSync: function(path, content) {
        this.files[path] = content.toString();
    },
    '@global': true
};
