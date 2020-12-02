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
var AstUtils_1 = require("./utils/AstUtils");
var PATH_PARAMETER_POSITIONS = {
    appendFile: [0],
    appendFileSync: [0],
    chmod: [0],
    chmodSync: [0],
    chown: [0],
    chownSync: [0],
    createReadStream: [0],
    createWriteStream: [0],
    exists: [0],
    existsSync: [0],
    lchmod: [0],
    lchmodSync: [0],
    lchown: [0],
    lchownSync: [0],
    link: [0, 1],
    linkSync: [0, 1],
    lstat: [0],
    lstatSync: [0],
    mkdir: [0],
    mkdirSync: [0],
    open: [0],
    openSync: [0],
    readdir: [0],
    readdirSync: [0],
    readFile: [0],
    readFileSync: [0],
    readlink: [0],
    readlinkSync: [0],
    realpath: [0],
    realpathSync: [0],
    rename: [0, 1],
    renameSync: [0, 1],
    rmdir: [0],
    rmdirSync: [0],
    stat: [0],
    statSync: [0],
    symlink: [0, 1],
    symlinkSync: [0, 1],
    truncate: [0],
    truncateSync: [0],
    unlink: [0],
    unlinkSync: [0],
    unwatchFile: [0],
    utimes: [0],
    utimesSync: [0],
    watch: [0],
    watchFile: [0],
    writeFile: [0],
    writeFileSync: [0]
};
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'non-literal-fs-path',
        type: 'functionality',
        description: 'Detect calls to fs functions with a non literal filepath',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security',
        commonWeaknessEnumeration: '22'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isCallExpression(node)) {
            if (AstUtils_1.AstUtils.getFunctionTarget(node) === 'fs' && node.arguments.length > 0) {
                var functionName = AstUtils_1.AstUtils.getFunctionName(node);
                var positions = PATH_PARAMETER_POSITIONS[functionName];
                if (positions && node.arguments.length >= positions.length) {
                    positions.forEach(function (position) {
                        var argument = node.arguments[position];
                        if (!tsutils.isStringLiteral(argument)) {
                            fail(AstUtils_1.AstUtils.getFunctionName(node), argument);
                        }
                    });
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    function fail(functionName, argument) {
        var start = argument.getStart();
        var width = argument.getWidth();
        var message = "Non-literal (insecure) path passed to fs." + functionName + ": " + argument.getText();
        ctx.addFailureAt(start, width, message);
    }
}
//# sourceMappingURL=nonLiteralFsPathRule.js.map