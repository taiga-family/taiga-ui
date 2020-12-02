(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/rendering/esm5_rendering_formatter", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/src/ngtsc/translator", "@angular/compiler-cli/ngcc/src/host/esm5_host", "@angular/compiler-cli/ngcc/src/rendering/esm_rendering_formatter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var translator_1 = require("@angular/compiler-cli/src/ngtsc/translator");
    var esm5_host_1 = require("@angular/compiler-cli/ngcc/src/host/esm5_host");
    var esm_rendering_formatter_1 = require("@angular/compiler-cli/ngcc/src/rendering/esm_rendering_formatter");
    /**
     * A RenderingFormatter that works with files that use ECMAScript Module `import` and `export`
     * statements, but instead of `class` declarations it uses ES5 `function` wrappers for classes.
     */
    var Esm5RenderingFormatter = /** @class */ (function (_super) {
        tslib_1.__extends(Esm5RenderingFormatter, _super);
        function Esm5RenderingFormatter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Add the definitions inside the IIFE of each decorated class
         */
        Esm5RenderingFormatter.prototype.addDefinitions = function (output, compiledClass, definitions) {
            var iifeBody = esm5_host_1.getIifeBody(compiledClass.declaration);
            if (!iifeBody) {
                throw new Error("Compiled class declaration is not inside an IIFE: " + compiledClass.name + " in " + compiledClass.declaration.getSourceFile().fileName);
            }
            var returnStatement = iifeBody.statements.find(ts.isReturnStatement);
            if (!returnStatement) {
                throw new Error("Compiled class wrapper IIFE does not have a return statement: " + compiledClass.name + " in " + compiledClass.declaration.getSourceFile().fileName);
            }
            var insertionPoint = returnStatement.getFullStart();
            output.appendLeft(insertionPoint, '\n' + definitions);
        };
        /**
         * Convert a `Statement` to JavaScript code in a format suitable for rendering by this formatter.
         *
         * @param stmt The `Statement` to print.
         * @param sourceFile A `ts.SourceFile` that provides context for the statement. See
         *     `ts.Printer#printNode()` for more info.
         * @param importManager The `ImportManager` to use for managing imports.
         *
         * @return The JavaScript code corresponding to `stmt` (in the appropriate format).
         */
        Esm5RenderingFormatter.prototype.printStatement = function (stmt, sourceFile, importManager) {
            var node = translator_1.translateStatement(stmt, importManager, imports_1.NOOP_DEFAULT_IMPORT_RECORDER, ts.ScriptTarget.ES5);
            var code = this.printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
            return code;
        };
        return Esm5RenderingFormatter;
    }(esm_rendering_formatter_1.EsmRenderingFormatter));
    exports.Esm5RenderingFormatter = Esm5RenderingFormatter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNtNV9yZW5kZXJpbmdfZm9ybWF0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL3JlbmRlcmluZy9lc201X3JlbmRlcmluZ19mb3JtYXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBU0EsK0JBQWlDO0lBQ2pDLG1FQUF3RTtJQUN4RSx5RUFBZ0Y7SUFFaEYsMkVBQThDO0lBQzlDLDRHQUFnRTtJQUVoRTs7O09BR0c7SUFDSDtRQUE0QyxrREFBcUI7UUFBakU7O1FBc0NBLENBQUM7UUFyQ0M7O1dBRUc7UUFDSCwrQ0FBYyxHQUFkLFVBQWUsTUFBbUIsRUFBRSxhQUE0QixFQUFFLFdBQW1CO1lBQ25GLElBQU0sUUFBUSxHQUFHLHVCQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyx1REFBcUQsYUFBYSxDQUFDLElBQUksWUFDbkYsYUFBYSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFVLENBQUMsQ0FBQzthQUMzRDtZQUVELElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUVBQ1osYUFBYSxDQUFDLElBQUksWUFBTyxhQUFhLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVUsQ0FBQyxDQUFDO2FBQ3BGO1lBRUQsSUFBTSxjQUFjLEdBQUcsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBQ0gsK0NBQWMsR0FBZCxVQUFlLElBQWUsRUFBRSxVQUF5QixFQUFFLGFBQTRCO1lBQ3JGLElBQU0sSUFBSSxHQUNOLCtCQUFrQixDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsc0NBQTRCLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvRixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFL0UsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0gsNkJBQUM7SUFBRCxDQUFDLEFBdENELENBQTRDLCtDQUFxQixHQXNDaEU7SUF0Q1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtTdGF0ZW1lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCBNYWdpY1N0cmluZyBmcm9tICdtYWdpYy1zdHJpbmcnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge05PT1BfREVGQVVMVF9JTVBPUlRfUkVDT1JERVJ9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9pbXBvcnRzJztcbmltcG9ydCB7SW1wb3J0TWFuYWdlciwgdHJhbnNsYXRlU3RhdGVtZW50fSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvdHJhbnNsYXRvcic7XG5pbXBvcnQge0NvbXBpbGVkQ2xhc3N9IGZyb20gJy4uL2FuYWx5c2lzL3R5cGVzJztcbmltcG9ydCB7Z2V0SWlmZUJvZHl9IGZyb20gJy4uL2hvc3QvZXNtNV9ob3N0JztcbmltcG9ydCB7RXNtUmVuZGVyaW5nRm9ybWF0dGVyfSBmcm9tICcuL2VzbV9yZW5kZXJpbmdfZm9ybWF0dGVyJztcblxuLyoqXG4gKiBBIFJlbmRlcmluZ0Zvcm1hdHRlciB0aGF0IHdvcmtzIHdpdGggZmlsZXMgdGhhdCB1c2UgRUNNQVNjcmlwdCBNb2R1bGUgYGltcG9ydGAgYW5kIGBleHBvcnRgXG4gKiBzdGF0ZW1lbnRzLCBidXQgaW5zdGVhZCBvZiBgY2xhc3NgIGRlY2xhcmF0aW9ucyBpdCB1c2VzIEVTNSBgZnVuY3Rpb25gIHdyYXBwZXJzIGZvciBjbGFzc2VzLlxuICovXG5leHBvcnQgY2xhc3MgRXNtNVJlbmRlcmluZ0Zvcm1hdHRlciBleHRlbmRzIEVzbVJlbmRlcmluZ0Zvcm1hdHRlciB7XG4gIC8qKlxuICAgKiBBZGQgdGhlIGRlZmluaXRpb25zIGluc2lkZSB0aGUgSUlGRSBvZiBlYWNoIGRlY29yYXRlZCBjbGFzc1xuICAgKi9cbiAgYWRkRGVmaW5pdGlvbnMob3V0cHV0OiBNYWdpY1N0cmluZywgY29tcGlsZWRDbGFzczogQ29tcGlsZWRDbGFzcywgZGVmaW5pdGlvbnM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGlpZmVCb2R5ID0gZ2V0SWlmZUJvZHkoY29tcGlsZWRDbGFzcy5kZWNsYXJhdGlvbik7XG4gICAgaWYgKCFpaWZlQm9keSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb21waWxlZCBjbGFzcyBkZWNsYXJhdGlvbiBpcyBub3QgaW5zaWRlIGFuIElJRkU6ICR7Y29tcGlsZWRDbGFzcy5uYW1lfSBpbiAke1xuICAgICAgICAgIGNvbXBpbGVkQ2xhc3MuZGVjbGFyYXRpb24uZ2V0U291cmNlRmlsZSgpLmZpbGVOYW1lfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHJldHVyblN0YXRlbWVudCA9IGlpZmVCb2R5LnN0YXRlbWVudHMuZmluZCh0cy5pc1JldHVyblN0YXRlbWVudCk7XG4gICAgaWYgKCFyZXR1cm5TdGF0ZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcGlsZWQgY2xhc3Mgd3JhcHBlciBJSUZFIGRvZXMgbm90IGhhdmUgYSByZXR1cm4gc3RhdGVtZW50OiAke1xuICAgICAgICAgIGNvbXBpbGVkQ2xhc3MubmFtZX0gaW4gJHtjb21waWxlZENsYXNzLmRlY2xhcmF0aW9uLmdldFNvdXJjZUZpbGUoKS5maWxlTmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnNlcnRpb25Qb2ludCA9IHJldHVyblN0YXRlbWVudC5nZXRGdWxsU3RhcnQoKTtcbiAgICBvdXRwdXQuYXBwZW5kTGVmdChpbnNlcnRpb25Qb2ludCwgJ1xcbicgKyBkZWZpbml0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhIGBTdGF0ZW1lbnRgIHRvIEphdmFTY3JpcHQgY29kZSBpbiBhIGZvcm1hdCBzdWl0YWJsZSBmb3IgcmVuZGVyaW5nIGJ5IHRoaXMgZm9ybWF0dGVyLlxuICAgKlxuICAgKiBAcGFyYW0gc3RtdCBUaGUgYFN0YXRlbWVudGAgdG8gcHJpbnQuXG4gICAqIEBwYXJhbSBzb3VyY2VGaWxlIEEgYHRzLlNvdXJjZUZpbGVgIHRoYXQgcHJvdmlkZXMgY29udGV4dCBmb3IgdGhlIHN0YXRlbWVudC4gU2VlXG4gICAqICAgICBgdHMuUHJpbnRlciNwcmludE5vZGUoKWAgZm9yIG1vcmUgaW5mby5cbiAgICogQHBhcmFtIGltcG9ydE1hbmFnZXIgVGhlIGBJbXBvcnRNYW5hZ2VyYCB0byB1c2UgZm9yIG1hbmFnaW5nIGltcG9ydHMuXG4gICAqXG4gICAqIEByZXR1cm4gVGhlIEphdmFTY3JpcHQgY29kZSBjb3JyZXNwb25kaW5nIHRvIGBzdG10YCAoaW4gdGhlIGFwcHJvcHJpYXRlIGZvcm1hdCkuXG4gICAqL1xuICBwcmludFN0YXRlbWVudChzdG10OiBTdGF0ZW1lbnQsIHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUsIGltcG9ydE1hbmFnZXI6IEltcG9ydE1hbmFnZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5vZGUgPVxuICAgICAgICB0cmFuc2xhdGVTdGF0ZW1lbnQoc3RtdCwgaW1wb3J0TWFuYWdlciwgTk9PUF9ERUZBVUxUX0lNUE9SVF9SRUNPUkRFUiwgdHMuU2NyaXB0VGFyZ2V0LkVTNSk7XG4gICAgY29uc3QgY29kZSA9IHRoaXMucHJpbnRlci5wcmludE5vZGUodHMuRW1pdEhpbnQuVW5zcGVjaWZpZWQsIG5vZGUsIHNvdXJjZUZpbGUpO1xuXG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cbn1cbiJdfQ==