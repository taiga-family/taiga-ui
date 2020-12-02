"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("glob");
const path = require("path");
const exitCodes_1 = require("./exitCodes");
const logger_1 = require("./logger");
let logger = new logger_1.Logger('configParser');
// Coffee is required here to enable config files written in coffee-script.
try {
    require('coffee-script').register();
}
catch (e) {
    // Intentionally blank - ignore if coffee-script is not available.
}
// CoffeeScript lost the hyphen in the module name a long time ago, all new version are named this:
try {
    require('coffeescript').register();
}
catch (e) {
    // Intentionally blank - ignore if coffeescript is not available.
}
// LiveScript is required here to enable config files written in LiveScript.
try {
    require('LiveScript');
}
catch (e) {
    // Intentionally blank - ignore if LiveScript is not available.
}
class ConfigParser {
    constructor() {
        // Default configuration.
        this.config_ = {
            specs: [],
            multiCapabilities: [],
            verboseMultiSessions: false,
            rootElement: '',
            allScriptsTimeout: 11000,
            getPageTimeout: 10000,
            params: {},
            framework: 'jasmine',
            jasmineNodeOpts: { showColors: true, defaultTimeoutInterval: (30 * 1000) },
            seleniumArgs: [],
            mochaOpts: { ui: 'bdd', reporter: 'list' },
            configDir: './',
            noGlobals: false,
            plugins: [],
            skipSourceMapSupport: false,
            ng12Hybrid: false
        };
    }
    /**
     * Resolve a list of file patterns into a list of individual file paths.
     *
     * @param {Array.<string> | string} patterns
     * @param {=boolean} opt_omitWarnings Whether to omit did not match warnings
     * @param {=string} opt_relativeTo Path to resolve patterns against
     *
     * @return {Array} The resolved file paths.
     */
    static resolveFilePatterns(patterns, opt_omitWarnings, opt_relativeTo) {
        let resolvedFiles = [];
        let cwd = opt_relativeTo || process.cwd();
        patterns = (typeof patterns === 'string') ? [patterns] : patterns;
        if (patterns) {
            for (let fileName of patterns) {
                let matches = glob.hasMagic(fileName) ? glob.sync(fileName, { cwd }) : [fileName];
                if (!matches.length && !opt_omitWarnings) {
                    logger.warn('pattern ' + fileName + ' did not match any files.');
                }
                for (let match of matches) {
                    let resolvedPath = path.resolve(cwd, match);
                    resolvedFiles.push(resolvedPath);
                }
            }
        }
        return resolvedFiles;
    }
    /**
     * Returns only the specs that should run currently based on `config.suite`
     *
     * @return {Array} An array of globs locating the spec files
     */
    static getSpecs(config) {
        let specs = [];
        if (config.suite) {
            config.suite.split(',').forEach((suite) => {
                let suiteList = config.suites ? config.suites[suite] : null;
                if (suiteList == null) {
                    throw new exitCodes_1.ConfigError(logger, 'Unknown test suite: ' + suite);
                }
                union(specs, makeArray(suiteList));
            });
            return specs;
        }
        if (config.specs.length > 0) {
            return config.specs;
        }
        Object.keys(config.suites || {}).forEach((suite) => {
            union(specs, makeArray(config.suites[suite]));
        });
        return specs;
    }
    /**
     * Add the options in the parameter config to this runner instance.
     *
     * @private
     * @param {Object} additionalConfig
     * @param {string} relativeTo the file path to resolve paths against
     */
    addConfig_(additionalConfig, relativeTo) {
        // All filepaths should be kept relative to the current config location.
        // This will not affect absolute paths.
        ['seleniumServerJar', 'chromeDriver', 'firefoxPath', 'frameworkPath', 'geckoDriver',
            'onPrepare']
            .forEach((name) => {
            if (additionalConfig[name] && typeof additionalConfig[name] === 'string') {
                additionalConfig[name] = path.resolve(relativeTo, additionalConfig[name]);
            }
        });
        merge_(this.config_, additionalConfig);
    }
    /**
     * Public function specialized towards merging in a file's config
     *
     * @public
     * @param {String} filename
     */
    addFileConfig(filename) {
        if (!filename) {
            return this;
        }
        let filePath = path.resolve(process.cwd(), filename);
        let fileConfig;
        try {
            fileConfig = require(filePath).config;
        }
        catch (e) {
            throw new exitCodes_1.ConfigError(logger, 'failed loading configuration file ' + filename, e);
        }
        if (!fileConfig) {
            throw new exitCodes_1.ConfigError(logger, 'configuration file ' + filename + ' did not export a config object');
        }
        fileConfig.configDir = path.dirname(filePath);
        this.addConfig_(fileConfig, fileConfig.configDir);
        return this;
    }
    /**
     * Public function specialized towards merging in config from argv
     *
     * @public
     * @param {Object} argv
     */
    addConfig(argv) {
        this.addConfig_(argv, process.cwd());
        return this;
    }
    /**
     * Public getter for the final, computed config object
     *
     * @public
     * @return {Object} config
     */
    getConfig() {
        return this.config_;
    }
}
exports.ConfigParser = ConfigParser;
/**
 * Merge config objects together.
 *
 * @private
 * @param {Object} into
 * @param {Object} from
 *
 * @return {Object} The 'into' config.
 */
let merge_ = function (into, from) {
    for (let key in from) {
        if (into[key] instanceof Object && !(into[key] instanceof Array) &&
            !(into[key] instanceof Function)) {
            merge_(into[key], from[key]);
        }
        else {
            into[key] = from[key];
        }
    }
    return into;
};
/**
 * Returns the item if it's an array or puts the item in an array
 * if it was not one already.
 */
let makeArray = function (item) {
    return Array.isArray(item) ? item : [item];
};
/**
 * Adds to an array all the elements in another array without adding any
 * duplicates
 *
 * @param {string[]} dest The array to add to
 * @param {string[]} src The array to copy from
 */
let union = function (dest, src) {
    let elems = {};
    for (let key in dest) {
        elems[dest[key]] = true;
    }
    for (let key in src) {
        if (!elems[src[key]]) {
            dest.push(src[key]);
            elems[src[key]] = true;
        }
    }
};
//# sourceMappingURL=configParser.js.map