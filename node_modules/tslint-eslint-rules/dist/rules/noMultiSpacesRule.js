"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new NoMultiSpacesWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoMultiSpacesWalker = (function (_super) {
    tslib_1.__extends(NoMultiSpacesWalker, _super);
    function NoMultiSpacesWalker(sourceFile, options) {
        var _a;
        var _this = _super.call(this, sourceFile, options) || this;
        _this.EXCEPTION_MAP = (_a = {},
            _a[ts.SyntaxKind.VariableDeclaration] = 'VariableDeclaration',
            _a[ts.SyntaxKind.PropertyAssignment] = 'PropertyAssignment',
            _a[ts.SyntaxKind.BinaryExpression] = 'BinaryExpression',
            _a);
        _this.STRING_TYPES = [
            ts.SyntaxKind.NoSubstitutionTemplateLiteral,
            ts.SyntaxKind.LastTemplateToken,
            ts.SyntaxKind.StringLiteral
        ];
        _this.exceptions = {};
        _this.targets = [];
        _this.targetNode = {};
        _this.targetIndex = 0;
        var opt = _this.getOptions();
        _this.src = sourceFile.getFullText();
        if (opt.length) {
            _this.exceptions = opt[0].exceptions || {};
        }
        if (_this.exceptions['PropertyAssignment'] === undefined) {
            _this.exceptions['PropertyAssignment'] = true;
        }
        var pattern = /[^\n\r\u2028\u2029\t ].? {2,}/g;
        while (pattern.test(_this.src)) {
            _this.targets.push(pattern.lastIndex);
            _this.targetNode[pattern.lastIndex] = sourceFile;
        }
        _this.lastNode = sourceFile.getLastToken();
        return _this;
    }
    NoMultiSpacesWalker.prototype.inRange = function (x, range) {
        return x >= range[0] && x <= range[1];
    };
    NoMultiSpacesWalker.prototype.warn = function (value, pos, node) {
        var msg = "Multiple spaces found before '" + value + "'.";
        var exceptionName = this.EXCEPTION_MAP[node.parent.kind];
        var report = true;
        var start = node.getFullStart() - 1;
        var previousChar = this.src.substring(start, start + 1);
        if (exceptionName && this.exceptions[exceptionName]) {
            if (previousChar !== ',') {
                report = false;
            }
        }
        if (previousChar === ':') {
            var crt = node.parent;
            while (crt.kind !== ts.SyntaxKind.SourceFile) {
                crt = crt.parent;
                if (crt.kind === ts.SyntaxKind.PropertyAssignment) {
                    if (this.exceptions['PropertyAssignment']) {
                        report = false;
                    }
                    break;
                }
            }
        }
        if (report) {
            this.addFailure(this.createFailure(pos, value.length, msg));
        }
    };
    NoMultiSpacesWalker.prototype.walkChildren = function (node) {
        var _this = this;
        var range = [node.getStart(), node.getEnd()];
        for (var i = this.targetIndex, len = this.targets.length, target = void 0; i < len; i++) {
            target = this.targets[i];
            if (this.inRange(target, range)) {
                this.targetNode[target] = node;
            }
            if (range[0] > this.targets[this.targetIndex]) {
                this.targetIndex++;
            }
        }
        if (node === this.lastNode) {
            this.targets.forEach(function (target) {
                var valid = _this.targetNode[target];
                if (target === valid.getStart()) {
                    _this.warn(valid.getText(), target, valid);
                }
                else if (target === valid.getEnd() - 1 && _this.STRING_TYPES.indexOf(valid.kind) === -1) {
                    var endChar = _this.src.substring(target, valid.getEnd());
                    _this.warn(endChar, target, valid);
                }
                else {
                    if (_this.src.charAt(target) !== '\n' && valid.kind !== ts.SyntaxKind.SourceFile) {
                    }
                }
            });
        }
        var children = node.getChildren();
        for (var index in children) {
            this.visitNode(children[index]);
        }
    };
    return NoMultiSpacesWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,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T0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0wsSUFBSSxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtxQkFLaEY7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBTSxRQUFRLEdBQWMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9DLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUSxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQXRIQSxBQXNIQyxDQXRIaUMsSUFBSSxDQUFDLFVBQVUsR0FzSGhEIiwiZmlsZSI6InJ1bGVzL25vTXVsdGlTcGFjZXNSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
