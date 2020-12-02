"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var OPTION_ALWAYS = 'always';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new ObjectCurlySpacingWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = {
        always: {
            start: "A space is required after '{'",
            end: "A space is required before '}'"
        },
        never: {
            start: "There should be no space after '{'",
            end: "There should be no space before '}'"
        }
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var ObjectCurlySpacingWalker = (function (_super) {
    tslib_1.__extends(ObjectCurlySpacingWalker, _super);
    function ObjectCurlySpacingWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.always = _this.hasOption(OPTION_ALWAYS) || (_this.getOptions() && _this.getOptions().length === 0);
        var opt = _this.getOptions();
        _this.exceptions = opt[1] || {};
        if (_this.exceptions.arraysInObjects === undefined) {
            _this.exceptions.arraysInObjects = _this.always;
        }
        if (_this.exceptions.objectsInObjects === undefined) {
            _this.exceptions.objectsInObjects = _this.always;
        }
        return _this;
    }
    ObjectCurlySpacingWalker.prototype.visitNode = function (node) {
        var bracedKind = [
            ts.SyntaxKind.ObjectLiteralExpression,
            ts.SyntaxKind.ObjectBindingPattern,
            ts.SyntaxKind.NamedImports,
            ts.SyntaxKind.NamedExports
        ];
        if (bracedKind.indexOf(node.kind) > -1) {
            this.checkSpacingInsideBraces(node);
        }
        _super.prototype.visitNode.call(this, node);
    };
    ObjectCurlySpacingWalker.prototype.checkSpacingInsideBraces = function (node) {
        var text = node.getText();
        if (text.indexOf('\n') !== -1 || /^\{\s*\}$/.test(text)) {
            return;
        }
        var endsWithObjectLiteral = false;
        var endsWithArrayLiteral = false;
        if (node.getChildren().length === 3) {
            var contents = node.getChildren()[1].getChildren();
            if (contents.length > 0) {
                var lastElement = contents[contents.length - 1];
                if (lastElement.kind === ts.SyntaxKind.PropertyAssignment || lastElement.kind === ts.SyntaxKind.BindingElement) {
                    var value = lastElement.getChildren();
                    if (value.length === 3) {
                        endsWithObjectLiteral = value[2].kind === ts.SyntaxKind.ObjectLiteralExpression || value[2].kind === ts.SyntaxKind.ObjectBindingPattern;
                        endsWithArrayLiteral = value[2].kind === ts.SyntaxKind.ArrayLiteralExpression;
                    }
                }
            }
        }
        var leadingSpace = text.match(/^\{(\s{0,2})/)[1].length;
        if (this.always) {
            if (leadingSpace === 0) {
                var fix = Lint.Replacement.appendText(node.getStart() + 1, ' ');
                this.addFailure(this.createFailure(node.getStart(), 1, Rule.FAILURE_STRING.always.start, fix));
            }
        }
        else {
            if (leadingSpace > 0) {
                var fix = Lint.Replacement.deleteText(node.getStart() + 1, leadingSpace);
                this.addFailure(this.createFailure(node.getStart(), 1, Rule.FAILURE_STRING.never.start, fix));
            }
        }
        var trailingSpace = text.match(/(\s{0,2})}$/)[1].length;
        var arrayExceptionApplies = this.always !== this.exceptions.arraysInObjects && endsWithArrayLiteral;
        var objectExceptionApplies = this.always !== this.exceptions.objectsInObjects && endsWithObjectLiteral;
        var spaceRequired = arrayExceptionApplies || objectExceptionApplies ? !this.always : this.always;
        if (spaceRequired) {
            if (trailingSpace === 0) {
                var fix = Lint.Replacement.appendText(node.getEnd() - 1, ' ');
                this.addFailure(this.createFailure(node.getEnd() - 1, 1, Rule.FAILURE_STRING.always.end, fix));
            }
        }
        else {
            if (trailingSpace > 0) {
                var fix = Lint.Replacement.deleteText(node.getEnd() - trailingSpace - 1, trailingSpace);
                this.addFailure(this.createFailure(node.getEnd() - 1, 1, Rule.FAILURE_STRING.never.end, fix));
            }
        }
    };
    return ObjectCurlySpacingWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL29iamVjdEN1cmx5U3BhY2luZ1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQixJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUM7QUFFL0I7SUFBMEIsZ0NBQXVCO0lBQWpEOztJQWdCQSxDQUFDO0lBSlEsb0JBQUssR0FBWixVQUFhLFVBQXlCO1FBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksd0JBQXdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBZGEsbUJBQWMsR0FBRztRQUM3QixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsK0JBQStCO1lBQ3RDLEdBQUcsRUFBRSxnQ0FBZ0M7U0FDdEM7UUFDRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsb0NBQW9DO1lBQzNDLEdBQUcsRUFBRSxxQ0FBcUM7U0FDM0M7S0FDRixDQUFDO0lBTUosV0FBQztDQWhCRCxBQWdCQyxDQWhCeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBZ0JoRDtBQWhCWSxvQkFBSTtBQWtCakI7SUFBdUMsb0RBQWU7SUFRcEQsa0NBQVksVUFBeUIsRUFBRSxPQUFzQjtRQUE3RCxZQUNFLGtCQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FZM0I7UUFYQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVyRyxJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUks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QUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNoRztTQUNGO2FBQU07WUFDTCxJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxhQUFhLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDL0Y7U0FDRjtJQUNILENBQUM7SUFDSCwrQkFBQztBQUFELENBM0ZBLEFBMkZDLENBM0ZzQyxJQUFJLENBQUMsVUFBVSxHQTJGckQiLCJmaWxlIjoicnVsZXMvb2JqZWN0Q3VybHlTcGFjaW5nUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1sb3Blei90c2xpbnQtZXNsaW50LXJ1bGVzL3NyYyJ9
