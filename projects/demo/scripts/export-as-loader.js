const path = require('node:path');

module.exports = function (source) {
    try {
        const currentDir = path.basename(path.dirname(this.resourcePath));

        const searchString = 'standalone: true,';
        const insertString = `    exportAs: "Example${currentDir}",`;

        const regex = new RegExp(searchString);

        if (regex.test(source)) {
            return source.replace(regex, `$&\n${insertString}`);
        }

        return source;
    } catch (error) {
        this.emitError(error);

        return source;
    }
};
