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
        var walker = new BlockSpacingWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = {
        always: 'Requires a space',
        never: 'Unexpected space(s)'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var BlockSpacingWalker = (function (_super) {
    tslib_1.__extends(BlockSpacingWalker, _super);
    function BlockSpacingWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.always = _this.hasOption(OPTION_ALWAYS) || (_this.getOptions() && _this.getOptions().length === 0);
        return _this;
    }
    BlockSpacingWalker.prototype.visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.Block || node.kind === ts.SyntaxKind.CaseBlock) {
            this.checkSpacingInsideBraces(node);
        }
        _super.prototype.visitNode.call(this, node);
    };
    BlockSpacingWalker.prototype.checkSpacingInsideBraces = function (node) {
        var blockChildren = node.getChildren();
        var syntaxList = blockChildren[1];
        var openBraceLocation = this.getStartPosition(blockChildren[0]);
        var closeBraceLocation = this.getStartPosition(blockChildren[blockChildren.length - 1]);
        if (syntaxList && syntaxList.getChildCount() > 0 && openBraceLocation.line === closeBraceLocation.line) {
            if (this.isSpaceBetween(blockChildren[0], blockChildren[1]) !== this.always
                || this.isSpaceBetween(blockChildren[blockChildren.length - 2], blockChildren[blockChildren.length - 1]) !== this.always) {
                var failureString = this.always ? Rule.FAILURE_STRING.always : Rule.FAILURE_STRING.never;
                this.addFailure(this.createFailure(node.getStart(), node.getWidth(), failureString));
            }
        }
    };
    BlockSpacingWalker.prototype.isSpaceBetween = function (node, nextNode) {
        return nextNode.getStart() - node.getEnd() > 0;
    };
    BlockSpacingWalker.prototype.getStartPosition = function (node) {
        return node.getSourceFile().getLineAndCharacterOfPosition(node.getStart());
    };
    return BlockSpacingWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2Jsb2NrU3BhY2luZ1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQixJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUM7QUFFL0I7SUFBMEIsZ0NBQXVCO0lBQWpEOztJQVVBLENBQUM7SUFKUSxvQkFBSyxHQUFaLFVBQWEsVUFBeUI7UUFDcEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDckUsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFSYSxtQkFBYyxHQUFHO1FBQzdCLE1BQU0sRUFBRSxrQkFBa0I7UUFDMUIsS0FBSyxFQUFFLHFCQUFxQjtLQUM3QixDQUFDO0lBTUosV0FBQztDQVZELEFBVUMsQ0FWeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBVWhEO0FBVlksb0JBQUk7QUFZakI7SUFBaUMsOENBQWU7SUFJOUMsNEJBQVksVUFBeUIsRUFBRSxPQUFzQjtRQUE3RCxZQUNFLGtCQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FFM0I7UUFEQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQzs7SUFDdkcsQ0FBQztJQUVTLHNDQUFTLEdBQW5CLFVBQW9CLElBQWE7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDOUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsaUJBQU0sU0FBUyxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxxREFBd0IsR0FBaEMsVUFBaUMsSUFBYTtRQUM1QyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsSUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUYsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssa0JBQWtCLENBQUMsSUFBSSxFQUFFO1lBQ3RHLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU07bUJBQ3RFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUUxSCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3pGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDdEY7U0FDRjtJQUNILENBQUM7SUFFTywyQ0FBYyxHQUF0QixVQUF1QixJQUFhLEVBQUUsUUFBaUI7UUFDckQsT0FBTyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8sNkNBQWdCLEdBQXhCLFVBQXlCLElBQWE7UUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsQ0F2Q2dDLElBQUksQ0FBQyxVQUFVLEdBdUMvQyIsImZpbGUiOiJydWxlcy9ibG9ja1NwYWNpbmdSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
