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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lint = require("tslint");
var ts = require("typescript");
var NodeDocs_1 = require("./utils/NodeDocs");
var defaultUselessWords = ['a', 'an', 'of', 'our', 'the'];
var defaultAliases = {
    a: ['an', 'our']
};
var failureString = "This comment is roughly the same as the object's name. Either be more informative or don't include a comment.";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, parseOptions(this.getOptions().ruleArguments));
    };
    Rule.metadata = {
        description: 'Enforces that comments do more than just reiterate names of objects.',
        options: undefined,
        optionsDescription: 'Not configurable.',
        optionExamples: [
            true,
            [
                true,
                {
                    aliases: {
                        a: ['an', 'our'],
                        emoji: ['smiley']
                    },
                    uselessWords: defaultUselessWords.concat(['also'])
                }
            ]
        ],
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            The documentation for an object should not be equivalent to just the object's name.\n            If we strip out non-alphabet characters, common words such as \"the\" or \"a\",\n            and lowercase everything, they shouldn't be the same.\n\n            Using informative documentation can be helpful for variables to help explain their usage.\n            Alternately, if something's name is so descriptive that it doesn't need to be fully documented,\n            just leave out documentation altogether.\n        "], ["\n            The documentation for an object should not be equivalent to just the object's name.\n            If we strip out non-alphabet characters, common words such as \"the\" or \"a\",\n            and lowercase everything, they shouldn't be the same.\n\n            Using informative documentation can be helpful for variables to help explain their usage.\n            Alternately, if something's name is so descriptive that it doesn't need to be fully documented,\n            just leave out documentation altogether.\n        "]))),
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Moderate',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        recommendation: 'true',
        ruleName: 'informative-docs',
        type: 'maintainability',
        typescriptOnly: false
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function parseOptions(ruleArguments) {
    var rawOptions = ruleArguments.length === 0 ? {} : ruleArguments[0];
    return {
        aliases: parseAliasesOption(rawOptions.aliases === undefined ? defaultAliases : rawOptions.aliases),
        uselessWords: new Set(rawOptions.uselessWords === undefined ? defaultUselessWords : rawOptions.uselessWords)
    };
}
function parseAliasesOption(rawAliases) {
    var aliases = new Map();
    for (var _i = 0, _a = Object.keys(rawAliases); _i < _a.length; _i++) {
        var alias = _a[_i];
        for (var _b = 0, _c = rawAliases[alias]; _b < _c.length; _b++) {
            var aliasedName = _c[_b];
            aliases.set(aliasedName.toLowerCase(), alias.toLowerCase());
        }
    }
    return aliases;
}
function walk(context) {
    var _a = context.options, aliases = _a.aliases, uselessWords = _a.uselessWords;
    function nodeNameContainsUsefulWords(nameWords, docWords) {
        var realDocWords = new Set(docWords);
        for (var _i = 0, nameWords_1 = nameWords; _i < nameWords_1.length; _i++) {
            var nameWord = nameWords_1[_i];
            realDocWords.delete(nameWord);
        }
        uselessWords.forEach(function (uselessWord) {
            realDocWords.delete(uselessWord);
        });
        return realDocWords.size !== 0;
    }
    function normalizeWord(word) {
        word = word.toLowerCase();
        var aliasedWord = aliases.get(word);
        if (aliasedWord !== undefined) {
            word = aliasedWord;
        }
        return word;
    }
    function splitNameIntoWords(name) {
        if (name.length > 2 && name[0] === 'I' && Lint.Utils.isUpperCase(name[1])) {
            name = name.substring(1);
        }
        var nameSpaced = name
            .replace(/\W/g, '')
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .trim();
        if (nameSpaced.length === 0) {
            return undefined;
        }
        return nameSpaced.split(' ').map(normalizeWord);
    }
    function getNodeDocComments(node) {
        var docsRaw = NodeDocs_1.getApparentJsDoc(node);
        if (docsRaw === undefined) {
            return undefined;
        }
        var docs = docsRaw.map(function (doc) { return doc.comment; }).filter(function (comment) { return comment !== undefined; });
        if (docs.length === 0) {
            return undefined;
        }
        return docs
            .join(' ')
            .replace(/[^A-Za-z0-9 ]/g, '')
            .split(' ')
            .map(normalizeWord);
    }
    function verifyNodeWithName(node, name) {
        var docs = getNodeDocComments(node);
        if (docs === undefined) {
            return;
        }
        var nameSplit = splitNameIntoWords(name);
        if (nameSplit === undefined) {
            return;
        }
        if (!nodeNameContainsUsefulWords(nameSplit, docs)) {
            context.addFailureAtNode(node, failureString);
        }
    }
    function visitNode(node) {
        var name = NodeDocs_1.getNodeName(node);
        if (name !== undefined) {
            verifyNodeWithName(node, name);
        }
        return ts.forEachChild(node, visitNode);
    }
    return ts.forEachChild(context.sourceFile, visitNode);
}
var templateObject_1;
//# sourceMappingURL=informativeDocsRule.js.map