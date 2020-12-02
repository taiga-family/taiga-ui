"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var Lint = require("tslint");
var tsutils_1 = require("tsutils");
var UNSPECIFIED_BROWSER_VERSION = 'unspecified version';
var JSDOC_BROWSERSPECIFIC = '@browserspecific';
var COMMENT_BROWSERSPECIFIC = 'Browser Specific:';
var FAILURE_BROWSER_STRING = 'Unsupported browser';
var FAILURE_VERSION_STRING = 'Unsupported browser version';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.parseSupportedBrowsers(this.getOptions()));
    };
    Rule.prototype.parseSupportedBrowsers = function (options) {
        var result = {};
        var ruleArguments = options.ruleArguments;
        (ruleArguments || []).forEach(function (option) {
            if (option instanceof Array) {
                option.forEach(function (browserString) {
                    var browser = parseBrowserString(browserString);
                    if (browser !== undefined) {
                        result[browser.name.toLowerCase()] = browser;
                    }
                });
            }
        });
        return {
            supportedBrowsers: result
        };
    };
    Rule.metadata = {
        ruleName: 'no-unsupported-browser-code',
        type: 'maintainability',
        description: 'Avoid writing browser-specific code for unsupported browser versions',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Clarity'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function parseBrowserString(browser) {
    var regex = /([a-zA-Z ]*)(>=|<=|<|>)?\s*(\d*)/i;
    var match = browser.match(regex);
    if (match === null) {
        return undefined;
    }
    return {
        name: match[1].trim(),
        comparison: match[2] || '=',
        version: parseInt(match[3], 10) || UNSPECIFIED_BROWSER_VERSION
    };
}
function walk(ctx) {
    var supportedBrowsers = ctx.options.supportedBrowsers;
    function findUnsupportedBrowserFailures(targetBrowser, startPos, length) {
        if (!isSupportedBrowser(targetBrowser)) {
            ctx.addFailureAt(startPos, length, FAILURE_BROWSER_STRING + ": " + targetBrowser.name);
        }
        else if (!isSupportedBrowserVersion(targetBrowser)) {
            ctx.addFailureAt(startPos, length, FAILURE_VERSION_STRING + ": " + targetBrowser.name + " " + targetBrowser.version);
        }
    }
    function isSupportedBrowser(targetBrowser) {
        return targetBrowser.name.toLowerCase() in supportedBrowsers;
    }
    function isSupportedBrowserVersion(targetBrowser) {
        var supportedBrowser = supportedBrowsers[targetBrowser.name.toLowerCase()];
        if (supportedBrowser.version === UNSPECIFIED_BROWSER_VERSION) {
            return true;
        }
        switch (supportedBrowser.comparison) {
            case '>':
                return targetBrowser.version > supportedBrowser.version;
            case '>=':
                return targetBrowser.version >= supportedBrowser.version;
            case '<':
                return targetBrowser.version < supportedBrowser.version;
            case '<=':
                return targetBrowser.version <= supportedBrowser.version;
            case '=':
                return targetBrowser.version === supportedBrowser.version;
            default:
                return false;
        }
    }
    function cb(node) {
        tsutils_1.forEachTokenWithTrivia(node, function (text, tokenSyntaxKind, range) {
            var regex;
            if (tokenSyntaxKind === ts.SyntaxKind.MultiLineCommentTrivia) {
                regex = new RegExp(JSDOC_BROWSERSPECIFIC + "\\s*(.*)", 'gi');
            }
            else if (tokenSyntaxKind === ts.SyntaxKind.SingleLineCommentTrivia) {
                regex = new RegExp(COMMENT_BROWSERSPECIFIC + "\\s*(.*)", 'gi');
            }
            else {
                return;
            }
            var match;
            var tokenText = text.substring(range.pos, range.end);
            while ((match = regex.exec(tokenText))) {
                var browser = parseBrowserString(match[1]);
                if (browser === undefined) {
                    break;
                }
                findUnsupportedBrowserFailures(browser, range.pos, range.end - range.pos);
            }
        });
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noUnsupportedBrowserCodeRule.js.map