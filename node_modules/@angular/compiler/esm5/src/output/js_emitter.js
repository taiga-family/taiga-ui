/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
import { EmitterVisitorContext } from './abstract_emitter';
import { AbstractJsEmitterVisitor } from './abstract_js_emitter';
import * as o from './output_ast';
var JavaScriptEmitter = /** @class */ (function () {
    function JavaScriptEmitter() {
    }
    JavaScriptEmitter.prototype.emitStatements = function (genFilePath, stmts, preamble) {
        if (preamble === void 0) { preamble = ''; }
        var converter = new JsEmitterVisitor();
        var ctx = EmitterVisitorContext.createRoot();
        converter.visitAllStatements(stmts, ctx);
        var preambleLines = preamble ? preamble.split('\n') : [];
        converter.importsWithPrefixes.forEach(function (prefix, importedModuleName) {
            // Note: can't write the real word for import as it screws up system.js auto detection...
            preambleLines.push("var " + prefix + " = req" +
                ("uire('" + importedModuleName + "');"));
        });
        var sm = ctx.toSourceMapGenerator(genFilePath, preambleLines.length).toJsComment();
        var lines = __spread(preambleLines, [ctx.toSource(), sm]);
        if (sm) {
            // always add a newline at the end, as some tools have bugs without it.
            lines.push('');
        }
        return lines.join('\n');
    };
    return JavaScriptEmitter;
}());
export { JavaScriptEmitter };
var JsEmitterVisitor = /** @class */ (function (_super) {
    __extends(JsEmitterVisitor, _super);
    function JsEmitterVisitor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.importsWithPrefixes = new Map();
        return _this;
    }
    JsEmitterVisitor.prototype.visitExternalExpr = function (ast, ctx) {
        var _a = ast.value, name = _a.name, moduleName = _a.moduleName;
        if (moduleName) {
            var prefix = this.importsWithPrefixes.get(moduleName);
            if (prefix == null) {
                prefix = "i" + this.importsWithPrefixes.size;
                this.importsWithPrefixes.set(moduleName, prefix);
            }
            ctx.print(ast, prefix + ".");
        }
        ctx.print(ast, name);
        return null;
    };
    JsEmitterVisitor.prototype.visitDeclareVarStmt = function (stmt, ctx) {
        _super.prototype.visitDeclareVarStmt.call(this, stmt, ctx);
        if (stmt.hasModifier(o.StmtModifier.Exported)) {
            ctx.println(stmt, exportVar(stmt.name));
        }
        return null;
    };
    JsEmitterVisitor.prototype.visitDeclareFunctionStmt = function (stmt, ctx) {
        _super.prototype.visitDeclareFunctionStmt.call(this, stmt, ctx);
        if (stmt.hasModifier(o.StmtModifier.Exported)) {
            ctx.println(stmt, exportVar(stmt.name));
        }
        return null;
    };
    JsEmitterVisitor.prototype.visitDeclareClassStmt = function (stmt, ctx) {
        _super.prototype.visitDeclareClassStmt.call(this, stmt, ctx);
        if (stmt.hasModifier(o.StmtModifier.Exported)) {
            ctx.println(stmt, exportVar(stmt.name));
        }
        return null;
    };
    return JsEmitterVisitor;
}(AbstractJsEmitterVisitor));
function exportVar(varName) {
    return "Object.defineProperty(exports, '" + varName + "', { get: function() { return " + varName + "; }});";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNfZW1pdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9vdXRwdXQvanNfZW1pdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBTUgsT0FBTyxFQUFDLHFCQUFxQixFQUFnQixNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sS0FBSyxDQUFDLE1BQU0sY0FBYyxDQUFDO0FBRWxDO0lBQUE7SUFzQkEsQ0FBQztJQXJCQywwQ0FBYyxHQUFkLFVBQWUsV0FBbUIsRUFBRSxLQUFvQixFQUFFLFFBQXFCO1FBQXJCLHlCQUFBLEVBQUEsYUFBcUI7UUFDN0UsSUFBTSxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3pDLElBQU0sR0FBRyxHQUFHLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9DLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFekMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0QsU0FBUyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxrQkFBa0I7WUFDL0QseUZBQXlGO1lBQ3pGLGFBQWEsQ0FBQyxJQUFJLENBQ2QsU0FBTyxNQUFNLFdBQVE7aUJBQ3JCLFdBQVMsa0JBQWtCLFFBQUssQ0FBQSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUs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IEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7U3RhdGljU3ltYm9sfSBmcm9tICcuLi9hb3Qvc3RhdGljX3N5bWJvbCc7XG5pbXBvcnQge0NvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGF9IGZyb20gJy4uL2NvbXBpbGVfbWV0YWRhdGEnO1xuXG5pbXBvcnQge0VtaXR0ZXJWaXNpdG9yQ29udGV4dCwgT3V0cHV0RW1pdHRlcn0gZnJvbSAnLi9hYnN0cmFjdF9lbWl0dGVyJztcbmltcG9ydCB7QWJzdHJhY3RKc0VtaXR0ZXJWaXNpdG9yfSBmcm9tICcuL2Fic3RyYWN0X2pzX2VtaXR0ZXInO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuL291dHB1dF9hc3QnO1xuXG5leHBvcnQgY2xhc3MgSmF2YVNjcmlwdEVtaXR0ZXIgaW1wbGVtZW50cyBPdXRwdXRFbWl0dGVyIHtcbiAgZW1pdFN0YXRlbWVudHMoZ2VuRmlsZVBhdGg6IHN0cmluZywgc3RtdHM6IG8uU3RhdGVtZW50W10sIHByZWFtYmxlOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgY29uc3QgY29udmVydGVyID0gbmV3IEpzRW1pdHRlclZpc2l0b3IoKTtcbiAgICBjb25zdCBjdHggPSBFbWl0dGVyVmlzaXRvckNvbnRleHQuY3JlYXRlUm9vdCgpO1xuICAgIGNvbnZlcnRlci52aXNpdEFsbFN0YXRlbWVudHMoc3RtdHMsIGN0eCk7XG5cbiAgICBjb25zdCBwcmVhbWJsZUxpbmVzID0gcHJlYW1ibGUgPyBwcmVhbWJsZS5zcGxpdCgnXFxuJykgOiBbXTtcbiAgICBjb252ZXJ0ZXIuaW1wb3J0c1dpdGhQcmVmaXhlcy5mb3JFYWNoKChwcmVmaXgsIGltcG9ydGVkTW9kdWxlTmFtZSkgPT4ge1xuICAgICAgLy8gTm90ZTogY2FuJ3Qgd3JpdGUgdGhlIHJlYWwgd29yZCBmb3IgaW1wb3J0IGFzIGl0IHNjcmV3cyB1cCBzeXN0ZW0uanMgYXV0byBkZXRlY3Rpb24uLi5cbiAgICAgIHByZWFtYmxlTGluZXMucHVzaChcbiAgICAgICAgICBgdmFyICR7cHJlZml4fSA9IHJlcWAgK1xuICAgICAgICAgIGB1aXJlKCcke2ltcG9ydGVkTW9kdWxlTmFtZX0nKTtgKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNtID0gY3R4LnRvU291cmNlTWFwR2VuZXJhdG9yKGdlbkZpbGVQYXRoLCBwcmVhbWJsZUxpbmVzLmxlbmd0aCkudG9Kc0NvbW1lbnQoKTtcbiAgICBjb25zdCBsaW5lcyA9IFsuLi5wcmVhbWJsZUxpbmVzLCBjdHgudG9Tb3VyY2UoKSwgc21dO1xuICAgIGlmIChzbSkge1xuICAgICAgLy8gYWx3YXlzIGFkZCBhIG5ld2xpbmUgYXQgdGhlIGVuZCwgYXMgc29tZSB0b29scyBoYXZlIGJ1Z3Mgd2l0aG91dCBpdC5cbiAgICAgIGxpbmVzLnB1c2goJycpO1xuICAgIH1cbiAgICByZXR1cm4gbGluZXMuam9pbignXFxuJyk7XG4gIH1cbn1cblxuY2xhc3MgSnNFbWl0dGVyVmlzaXRvciBleHRlbmRzIEFic3RyYWN0SnNFbWl0dGVyVmlzaXRvciB7XG4gIGltcG9ydHNXaXRoUHJlZml4ZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gIHZpc2l0RXh0ZXJuYWxFeHByKGFzdDogby5FeHRlcm5hbEV4cHIsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICBjb25zdCB7bmFtZSwgbW9kdWxlTmFtZX0gPSBhc3QudmFsdWU7XG4gICAgaWYgKG1vZHVsZU5hbWUpIHtcbiAgICAgIGxldCBwcmVmaXggPSB0aGlzLmltcG9ydHNXaXRoUHJlZml4ZXMuZ2V0KG1vZHVsZU5hbWUpO1xuICAgICAgaWYgKHByZWZpeCA9PSBudWxsKSB7XG4gICAgICAgIHByZWZpeCA9IGBpJHt0aGlzLmltcG9ydHNXaXRoUHJlZml4ZXMuc2l6ZX1gO1xuICAgICAgICB0aGlzLmltcG9ydHNXaXRoUHJlZml4ZXMuc2V0KG1vZHVsZU5hbWUsIHByZWZpeCk7XG4gICAgICB9XG4gICAgICBjdHgucHJpbnQoYXN0LCBgJHtwcmVmaXh9LmApO1xuICAgIH1cbiAgICBjdHgucHJpbnQoYXN0LCBuYW1lISk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXREZWNsYXJlVmFyU3RtdChzdG10OiBvLkRlY2xhcmVWYXJTdG10LCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IGFueSB7XG4gICAgc3VwZXIudmlzaXREZWNsYXJlVmFyU3RtdChzdG10LCBjdHgpO1xuICAgIGlmIChzdG10Lmhhc01vZGlmaWVyKG8uU3RtdE1vZGlmaWVyLkV4cG9ydGVkKSkge1xuICAgICAgY3R4LnByaW50bG4oc3RtdCwgZXhwb3J0VmFyKHN0bXQubmFtZSkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdERlY2xhcmVGdW5jdGlvblN0bXQoc3RtdDogby5EZWNsYXJlRnVuY3Rpb25TdG10LCBjdHg6IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCk6IGFueSB7XG4gICAgc3VwZXIudmlzaXREZWNsYXJlRnVuY3Rpb25TdG10KHN0bXQsIGN0eCk7XG4gICAgaWYgKHN0bXQuaGFzTW9kaWZpZXIoby5TdG10TW9kaWZpZXIuRXhwb3J0ZWQpKSB7XG4gICAgICBjdHgucHJpbnRsbihzdG10LCBleHBvcnRWYXIoc3RtdC5uYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0RGVjbGFyZUNsYXNzU3RtdChzdG10OiBvLkNsYXNzU3RtdCwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpOiBhbnkge1xuICAgIHN1cGVyLnZpc2l0RGVjbGFyZUNsYXNzU3RtdChzdG10LCBjdHgpO1xuICAgIGlmIChzdG10Lmhhc01vZGlmaWVyKG8uU3RtdE1vZGlmaWVyLkV4cG9ydGVkKSkge1xuICAgICAgY3R4LnByaW50bG4oc3RtdCwgZXhwb3J0VmFyKHN0bXQubmFtZSkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBleHBvcnRWYXIodmFyTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJyR7dmFyTmFtZX0nLCB7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiAke3Zhck5hbWV9OyB9fSk7YDtcbn1cbiJdfQ==