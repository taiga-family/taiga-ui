"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Lint = require("tslint");
var ts = require("typescript");
var RULE_NAME = 'sort-imports';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new RuleWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        description: 'enforce sorting import declarations within module',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      When declaring multiple imports, a sorted list of import declarations make it easier for developers to\n      read the code and find necessary imports later. This rule is purely a matter of style.\n\n      This rule checks all import declarations and verifies that all imports are first sorted by the used member\n      syntax and then alphabetically by the first member or alias name.\n      "], ["\n      When declaring multiple imports, a sorted list of import declarations make it easier for developers to\n      read the code and find necessary imports later. This rule is purely a matter of style.\n\n      This rule checks all import declarations and verifies that all imports are first sorted by the used member\n      syntax and then alphabetically by the first member or alias name.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      - `\"ignore-case\"` does case-insensitive comparisons (default: `false`)\n      - `\"ignore-member-sort\"` allows members in multiple type imports to occur in any order (default: `false`)\n      - `\"member-syntax-sort-order\"` (default: `[\"none\", \"all\", \"multiple\", \"single\", \"alias\"]`); all 5 items must be\n      present in the array, but you can change the order:\n        - `none` = import module without exported bindings.\n        - `all` = import all members provided by exported bindings.\n        - `multiple` = import multiple members.\n        - `single` = import a single member.\n        - `alias` = creates an alias for a member. This is unique to TER and not in ESLint's `sort-imports`.\n      "], ["\n      - \\`\"ignore-case\"\\` does case-insensitive comparisons (default: \\`false\\`)\n      - \\`\"ignore-member-sort\"\\` allows members in multiple type imports to occur in any order (default: \\`false\\`)\n      - \\`\"member-syntax-sort-order\"\\` (default: \\`[\"none\", \"all\", \"multiple\", \"single\", \"alias\"]\\`); all 5 items must be\n      present in the array, but you can change the order:\n        - \\`none\\` = import module without exported bindings.\n        - \\`all\\` = import all members provided by exported bindings.\n        - \\`multiple\\` = import multiple members.\n        - \\`single\\` = import a single member.\n        - \\`alias\\` = creates an alias for a member. This is unique to TER and not in ESLint's \\`sort-imports\\`.\n      "]))),
        options: {
            type: 'object',
            properties: {
                'member-syntax-sort-order': {
                    type: 'array',
                    items: {
                        type: 'string',
                        enum: ['none', 'all', 'multiple', 'single', 'alias']
                    },
                    minLength: 5,
                    maxLength: 5
                },
                'ignore-case': {
                    type: 'boolean'
                },
                'ignore-member-sort': {
                    type: 'boolean'
                }
            }
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true]\n        "], ["\n        \"", "\": [true]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, { \"ignore-case\" }]\n        "], ["\n        \"", "\": [true, { \"ignore-case\" }]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, { \"ignore-member-sort\" }]\n        "], ["\n        \"", "\": [true, { \"ignore-member-sort\" }]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, { \"member-syntax-sort-order\": [\"all\", \"single\", \"multiple\", \"none\", \"alias\"] }]\n        "], ["\n        \"", "\": [true, { \"member-syntax-sort-order\": [\"all\", \"single\", \"multiple\", \"none\", \"alias\"] }]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'style'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var MemberSyntaxType;
(function (MemberSyntaxType) {
    MemberSyntaxType[MemberSyntaxType["None"] = 0] = "None";
    MemberSyntaxType[MemberSyntaxType["All"] = 1] = "All";
    MemberSyntaxType[MemberSyntaxType["Multiple"] = 2] = "Multiple";
    MemberSyntaxType[MemberSyntaxType["Single"] = 3] = "Single";
    MemberSyntaxType[MemberSyntaxType["Alias"] = 4] = "Alias";
})(MemberSyntaxType || (MemberSyntaxType = {}));
var RuleWalker = (function (_super) {
    tslib_1.__extends(RuleWalker, _super);
    function RuleWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.currentImportIndex = 0;
        var optionSet = _this.getOptions()[0] || {};
        _this.ignoreCase = _this.hasOption('ignore-case');
        _this.ignoreMemberSort = _this.hasOption('ignore-member-sort');
        _this.expectedOrder = RuleWalker._processMemberSyntaxSortOrder(optionSet['member-syntax-sort-order']);
        _this.currentSortValue = { sortValue: '', originalValue: '' };
        if (_this.ignoreCase) {
            _this.caseConverter = function (s) { return s.toUpperCase(); };
        }
        else {
            _this.caseConverter = function (s) { return s; };
        }
        return _this;
    }
    RuleWalker.prototype.visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.ImportDeclaration ||
            node.kind === ts.SyntaxKind.ImportEqualsDeclaration) {
            this._validateOrder(node);
        }
        _super.prototype.visitNode.call(this, node);
    };
    RuleWalker.prototype.visitNamedImports = function (node) {
        if (!this.ignoreMemberSort) {
            this._validateMemberSort(node);
        }
        _super.prototype.visitNamedImports.call(this, node);
    };
    RuleWalker.prototype._validateMemberSort = function (node) {
        var _this = this;
        var imports = node.elements.map(function (e) { return _this.caseConverter(e.getText()); });
        var importReduction = imports.reduce(function (prev, current) { return prev + current; });
        var sortedImports = imports.sort();
        var sortedReduction = sortedImports.reduce(function (prev, current) { return prev + current; });
        if (importReduction !== sortedReduction) {
            this.addFailureAtNode(node, 'Member imports must be sorted alphabetically.');
        }
    };
    RuleWalker.prototype._validateOrder = function (node) {
        var importData = this._determineImportType(node);
        if (importData) {
            var importName = importData.sortValue.trim();
            var index = this.expectedOrder.indexOf(importData.memberSyntaxType, this.currentImportIndex);
            if (index !== -1) {
                if (this.expectedOrder[this.currentImportIndex] !== importData.memberSyntaxType) {
                    this.currentImportIndex = index;
                    this.currentSortValue = {
                        sortValue: this.caseConverter(importName),
                        originalValue: importName
                    };
                }
                else if (this.currentSortValue.sortValue > this.caseConverter(importName)) {
                    this.addFailureAtNode(node, "All imports of the same type must be sorted alphabetically. \"" + importName + "\" must come before \"" + this.currentSortValue.originalValue + "\"");
                }
                else {
                    this.currentSortValue = {
                        sortValue: this.caseConverter(importName),
                        originalValue: importName
                    };
                }
            }
            else {
                var currentSyntaxType = MemberSyntaxType[importData.memberSyntaxType];
                var previousSyntaxType = MemberSyntaxType[this.expectedOrder[this.currentImportIndex]];
                this.addFailureAtNode(node, "All imports of type \"" + currentSyntaxType + "\" must occur before all imports of type \"" + previousSyntaxType + "\"");
            }
        }
        else {
            this.addFailureAtNode(node, 'Could not determine import type');
        }
    };
    RuleWalker.prototype._determineImportType = function (node) {
        var nodeText = node.getFullText();
        if (node.kind === ts.SyntaxKind.ImportEqualsDeclaration) {
            var aliasMatch = /\bimport\s+(\w+)\s*=.+/g.exec(nodeText);
            return {
                memberSyntaxType: MemberSyntaxType.Alias,
                sortValue: aliasMatch[1]
            };
        }
        else {
            var singleMatch = /\bimport\s+(?:{?([^,{}\*]+?)}?)\s*from\s+[\'"](?:[^"\']+)["\']/g.exec(nodeText);
            var multipleMatch = /\bimport\s*{?\s*([^{}\'",]+?)\s*,(?:\s*.+\s*,\s*)*\s*.+\s*}?\s*from\s+[\'"](?:[^"\']+)["\']/g.exec(nodeText);
            var noneMatch = /\bimport\s+[\'"]([^"\']+)["\']/g.exec(nodeText);
            var allMatch = /\bimport\s+\*\s+as\s+(.+)\s+from\s+[\'"](?:[^"\']+)["\']/g.exec(nodeText);
            var result = void 0;
            if (singleMatch !== null) {
                result = {
                    memberSyntaxType: MemberSyntaxType.Single,
                    sortValue: singleMatch[1]
                };
            }
            else if (multipleMatch !== null) {
                result = {
                    memberSyntaxType: MemberSyntaxType.Multiple,
                    sortValue: multipleMatch[1]
                };
            }
            else if (noneMatch !== null) {
                result = {
                    memberSyntaxType: MemberSyntaxType.None,
                    sortValue: noneMatch[1]
                };
            }
            else if (allMatch !== null) {
                result = {
                    memberSyntaxType: MemberSyntaxType.All,
                    sortValue: allMatch[1]
                };
            }
            else {
                result = {
                    memberSyntaxType: MemberSyntaxType.None,
                    sortValue: ''
                };
            }
            return result;
        }
    };
    RuleWalker._processMemberSyntaxSortOrder = function (sortOption) {
        var defaultOrder = [MemberSyntaxType.None, MemberSyntaxType.All, MemberSyntaxType.Multiple, MemberSyntaxType.Single, MemberSyntaxType.Alias];
        if (Array.isArray(sortOption) && typeof sortOption[0] === 'string' && sortOption.length === 5) {
            var memberSyntaxTypeMap_1 = {
                none: MemberSyntaxType.None,
                all: MemberSyntaxType.All,
                multiple: MemberSyntaxType.Multiple,
                single: MemberSyntaxType.Single,
                alias: MemberSyntaxType.Alias
            };
            var order_1 = [];
            var usedOptions_1 = {};
            sortOption.forEach(function (t) {
                if (usedOptions_1[t] !== undefined) {
                }
                else {
                    usedOptions_1[t] = t;
                    if (memberSyntaxTypeMap_1[t]) {
                        order_1.push(memberSyntaxTypeMap_1[t]);
                    }
                }
            });
            return order_1;
        }
        else {
            return defaultOrder;
        }
    };
    return RuleWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3NvcnRJbXBvcnRzUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBK0I7QUFDL0IsK0JBQWlDO0FBRWpDLElBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUVqQztJQUEwQixnQ0FBdUI7SUFBakQ7O0lBZ0VBLENBQUM7SUFKUSxvQkFBSyxHQUFaLFVBQWEsVUFBeUI7UUFDcEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzdELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBOURhLGFBQVEsR0FBdUI7UUFDM0MsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLG1EQUFtRDtRQUNoRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLDhkQUFBLG1aQU16QixJQUFBO1FBQ0gsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLHF5QkFBQSwwd0JBVWxDLElBQUE7UUFDSCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRTtnQkFDViwwQkFBMEIsRUFBRTtvQkFDMUIsSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFO3dCQUNMLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7cUJBQ3JEO29CQUNELFNBQVMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRSxDQUFDO2lCQUNiO2dCQUNELGFBQWEsRUFBRTtvQkFDYixJQUFJLEVBQUUsU0FBUztpQkFDaEI7Z0JBQ0Qsb0JBQW9CLEVBQUU7b0JBQ3BCLElBQUksRUFBRSxTQUFTO2lCQUNoQjthQUNGO1NBQ0Y7UUFDRCxjQUFjLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FB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Q0FBQzthQUNIO1lBRUQsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7SUFFYyx3Q0FBNkIsR0FBNUMsVUFBNkMsVUFBb0I7UUFDL0QsSUFBTSxZQUFZLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0ksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3RixJQUFNLHFCQUFtQixHQUFHO2dCQUMxQixJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSTtnQkFDM0IsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUc7Z0JBQ3pCLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRO2dCQUNuQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsTUFBTTtnQkFDL0IsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUs7YUFDOUIsQ0FBQztZQUVGLElBQU0sT0FBSyxHQUF1QixFQUFFLENBQUM7WUFDckMsSUFBTSxhQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO2dCQUNuQixJQUFJLGFBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7aUJBRWpDO3FCQUFNO29CQUNMLGFBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLElBQUkscUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzFCLE9BQUssQ0FBQyxJQUFJLENBQUMscUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDcEM7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sT0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0F0S0EsQUFzS0MsQ0F0S3dCLElBQUksQ0FBQyxVQUFVLEdBc0t2QyIsImZpbGUiOiJydWxlcy9zb3J0SW1wb3J0c1J1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptbG9wZXovdHNsaW50LWVzbGludC1ydWxlcy9zcmMifQ==
