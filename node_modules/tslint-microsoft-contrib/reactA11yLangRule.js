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
var tsutils = require("tsutils");
var FAILURE_MISSING_LANG = 'An html element is missing the lang attribute';
var FAILURE_WRONG_LANG_CODE = 'Lang attribute does not have a valid value. Found: ';
var LANGUAGE_CODES = [
    'ab',
    'aa',
    'af',
    'sq',
    'am',
    'ar',
    'an',
    'hy',
    'as',
    'ay',
    'az',
    'ba',
    'eu',
    'bn',
    'dz',
    'bh',
    'bi',
    'br',
    'bg',
    'my',
    'be',
    'km',
    'ca',
    'zh',
    'zh-Hans',
    'zh-Hant',
    'co',
    'hr',
    'cs',
    'da',
    'nl',
    'en',
    'eo',
    'et',
    'fo',
    'fa',
    'fj',
    'fi',
    'fr',
    'fy',
    'gl',
    'gd',
    'gv',
    'ka',
    'de',
    'el',
    'kl',
    'gn',
    'gu',
    'ht',
    'ha',
    'he',
    'iw',
    'hi',
    'hu',
    'is',
    'io',
    'id',
    'in',
    'ia',
    'ie',
    'iu',
    'ik',
    'ga',
    'it',
    'ja',
    'jv',
    'kn',
    'ks',
    'kk',
    'rw',
    'ky',
    'rn',
    'ko',
    'ku',
    'lo',
    'la',
    'lv',
    'li',
    'ln',
    'lt',
    'mk',
    'mg',
    'ms',
    'ml',
    'mt',
    'mi',
    'mr',
    'mo',
    'mn',
    'na',
    'ne',
    'no',
    'oc',
    'or',
    'om',
    'ps',
    'pl',
    'pt',
    'pa',
    'qu',
    'rm',
    'ro',
    'ru',
    'sm',
    'sg',
    'sa',
    'sr',
    'sh',
    'st',
    'tn',
    'sn',
    'ii',
    'sd',
    'si',
    'ss',
    'sk',
    'sl',
    'so',
    'es',
    'su',
    'sw',
    'sv',
    'tl',
    'tg',
    'ta',
    'tt',
    'te',
    'th',
    'bo',
    'ti',
    'to',
    'ts',
    'tr',
    'tk',
    'tw',
    'ug',
    'uk',
    'ur',
    'uz',
    'vi',
    'vo',
    'wa',
    'cy',
    'wo',
    'xh',
    'yi',
    'ji',
    'yo',
    'zu'
];
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (sourceFile.languageVariant === ts.LanguageVariant.JSX) {
            return this.applyWithFunction(sourceFile, walk);
        }
        return [];
    };
    Rule.metadata = {
        ruleName: 'react-a11y-lang',
        type: 'functionality',
        description: 'For accessibility of your website, html elements must have a valid lang attribute.',
        rationale: "References:\n        <ul>\n          <li><a href=\"https://www.w3.org/TR/WCAG20-TECHS/H58.html\">\n            H58: Using language attributes to identify changes in the human language\n          </a></li>\n          <li><a href=\"https://dequeuniversity.com/rules/axe/1.1/valid-lang\">\n            lang attribute must have a valid value\n          </a></li>\n          <li><a href=\"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\">\n            List of ISO 639-1 codes\n          </a></li>\n        </ul>",
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Accessibility'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function validateOpeningElement(parent, openingElement) {
        if (openingElement.tagName.getText() === 'html') {
            var attributes = openingElement.attributes;
            var langFound_1 = false;
            attributes.properties.forEach(function (attribute) {
                if (attribute.kind === ts.SyntaxKind.JsxAttribute) {
                    if (attribute.name.getText() === 'lang') {
                        langFound_1 = true;
                        if (attribute.initializer !== undefined && attribute.initializer.kind === ts.SyntaxKind.StringLiteral) {
                            var langText = attribute.initializer.text;
                            if (LANGUAGE_CODES.indexOf(langText) === -1) {
                                ctx.addFailureAt(parent.getStart(), parent.getWidth(), FAILURE_WRONG_LANG_CODE + langText);
                            }
                        }
                    }
                }
            });
            if (!langFound_1) {
                ctx.addFailureAt(parent.getStart(), parent.getWidth(), FAILURE_MISSING_LANG);
            }
        }
    }
    function cb(node) {
        if (tsutils.isJsxSelfClosingElement(node)) {
            validateOpeningElement(node, node);
        }
        else if (tsutils.isJsxElement(node)) {
            validateOpeningElement(node, node.openingElement);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yLangRule.js.map