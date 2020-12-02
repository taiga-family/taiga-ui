var getNpmFileManager = require("./npm-file-manager"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");


function LessPluginNpmImport(options) {
  this.options = options;
}

LessPluginNpmImport.prototype = {
    install: function(less, pluginManager) {
        var NpmFileManager = getNpmFileManager(less);
        pluginManager.addFileManager(new NpmFileManager(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 1, 1]
};

module.exports = LessPluginNpmImport;
