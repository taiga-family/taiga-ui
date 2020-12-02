var resolveNpmFile = require('resolve').sync,
    win32 = process.platform === 'win32',
    PromiseConstructor = typeof Promise === 'undefined' ? require('promise') : Promise,
    path = require('path');

module.exports = function(less) {
    var FileManager = less.FileManager;

    function NpmFileManager(options) {
      this.options = options || {};

      if (this.options.prefix === undefined) {
          this.options.prefix = 'npm://';
      }
    }

    NpmFileManager.prototype = new FileManager();

    NpmFileManager.prototype.supports = function(filename, currentDirectory, options, environment) {
        var npmProtocolPrefixRegex = new RegExp('^' + this.options.prefix, 'i');
        return filename.match(npmProtocolPrefixRegex) || currentDirectory.match(npmProtocolPrefixRegex);
    };
    NpmFileManager.prototype.supportsSync = NpmFileManager.prototype.supports;

    NpmFileManager.prototype.resolve = function(filename, currentDirectory) {
        filename = filename.replace(this.options.prefix, "");
        currentDirectory = currentDirectory.replace(this.options.prefix, "");
        currentDirectory = path.resolve(currentDirectory);
        return resolveNpmFile(filename, {
            basedir: currentDirectory,
            extensions: ['.less', '.css'],
            packageFilter: function packageFilter(info, pkgdir) {
                // no style field, keep info unchanged
                if (!info.style) {
                    return info;
                }

                // replace main
                if (typeof info.style === 'string') {
                    info.main = info.style;
                    return info;
                }

                return info;
            },
            paths: process.env.NODE_PATH ? process.env.NODE_PATH.split(win32 ? ';' : ':') : []
        });
    };

    NpmFileManager.prototype.loadFile = function(filename, currentDirectory, options, environment) {
        try {
            filename = this.resolve(filename, currentDirectory);
        }
        catch(e) {
            return new PromiseConstructor(
                function(fullfill, reject) {
                    reject(e);
                }
            );
        }
        return FileManager.prototype.loadFile.call(this, filename, "", options, environment);
    };

    NpmFileManager.prototype.loadFileSync = function(filename, currentDirectory, options, environment) {
        try {
            filename = this.resolve(filename, currentDirectory);
        }
        catch(e) {
            return { error: e };
        }
        return FileManager.prototype.loadFileSync.call(this, filename, "", options, environment);
    };

    NpmFileManager.prototype.tryAppendExtension = function(path, ext) {
        return path;
    };

    NpmFileManager.prototype.tryAppendLessExtension = function(path) {
        return path;
    };

    return NpmFileManager;
};
