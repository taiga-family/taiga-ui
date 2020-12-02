/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/language-service/src/diagnostics", ["require", "exports", "tslib", "path", "typescript", "@angular/language-service/src/diagnostic_messages", "@angular/language-service/src/expression_diagnostics", "@angular/language-service/src/ts_utils", "@angular/language-service/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var path = require("path");
    var ts = require("typescript");
    var diagnostic_messages_1 = require("@angular/language-service/src/diagnostic_messages");
    var expression_diagnostics_1 = require("@angular/language-service/src/expression_diagnostics");
    var ts_utils_1 = require("@angular/language-service/src/ts_utils");
    var utils_1 = require("@angular/language-service/src/utils");
    /**
     * Return diagnostic information for the parsed AST of the template.
     * @param ast contains HTML and template AST
     */
    function getTemplateDiagnostics(ast) {
        var parseErrors = ast.parseErrors, templateAst = ast.templateAst, htmlAst = ast.htmlAst, template = ast.template;
        if (parseErrors && parseErrors.length) {
            return parseErrors.map(function (e) {
                return {
                    kind: ts.DiagnosticCategory.Error,
                    span: utils_1.offsetSpan(utils_1.spanOf(e.span), template.span.start),
                    message: e.msg,
                };
            });
        }
        return expression_diagnostics_1.getTemplateExpressionDiagnostics({
            templateAst: templateAst,
            htmlAst: htmlAst,
            offset: template.span.start,
            query: template.query,
            members: template.members,
            source: ast.template.source,
        });
    }
    exports.getTemplateDiagnostics = getTemplateDiagnostics;
    /**
     * Performs a variety diagnostics on directive declarations.
     *
     * @param declarations Angular directive declarations
     * @param modules NgModules in the project
     * @param host TypeScript service host used to perform TypeScript queries
     * @return diagnosed errors, if any
     */
    function getDeclarationDiagnostics(declarations, modules, host) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
        var directives = new Set();
        try {
            for (var _e = tslib_1.__values(modules.ngModules), _f = _e.next(); !_f.done; _f = _e.next()) {
                var ngModule = _f.value;
                try {
                    for (var _g = (e_2 = void 0, tslib_1.__values(ngModule.declaredDirectives)), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var directive = _h.value;
                        directives.add(directive.reference);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var results = [];
        try {
            for (var declarations_1 = tslib_1.__values(declarations), declarations_1_1 = declarations_1.next(); !declarations_1_1.done; declarations_1_1 = declarations_1.next()) {
                var declaration = declarations_1_1.value;
                var errors = declaration.errors, metadata = declaration.metadata, type = declaration.type, declarationSpan = declaration.declarationSpan;
                var sf = host.getSourceFile(type.filePath);
                if (!sf) {
                    host.error("directive " + type.name + " exists but has no source file");
                    return [];
                }
                // TypeScript identifier of the directive declaration annotation (e.g. "Component" or
                // "Directive") on a directive class.
                var directiveIdentifier = ts_utils_1.findTightestNode(sf, declarationSpan.start);
                if (!directiveIdentifier) {
                    host.error("directive " + type.name + " exists but has no identifier");
                    return [];
                }
                try {
                    for (var errors_1 = (e_4 = void 0, tslib_1.__values(errors)), errors_1_1 = errors_1.next(); !errors_1_1.done; errors_1_1 = errors_1.next()) {
                        var error = errors_1_1.value;
                        results.push({
                            kind: ts.DiagnosticCategory.Error,
                            message: error.message,
                            span: error.span,
                        });
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (errors_1_1 && !errors_1_1.done && (_d = errors_1.return)) _d.call(errors_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                if (!modules.ngModuleByPipeOrDirective.has(declaration.type)) {
                    results.push(diagnostic_messages_1.createDiagnostic(declarationSpan, diagnostic_messages_1.Diagnostic.directive_not_in_module, metadata.isComponent ? 'Component' : 'Directive', type.name));
                }
                if (metadata.isComponent) {
                    var _j = metadata.template, template = _j.template, templateUrl = _j.templateUrl, styleUrls = _j.styleUrls;
                    if (template === null && !templateUrl) {
                        results.push(diagnostic_messages_1.createDiagnostic(declarationSpan, diagnostic_messages_1.Diagnostic.missing_template_and_templateurl, type.name));
                    }
                    else if (templateUrl) {
                        if (template) {
                            results.push(diagnostic_messages_1.createDiagnostic(declarationSpan, diagnostic_messages_1.Diagnostic.both_template_and_templateurl, type.name));
                        }
                        // Find templateUrl value from the directive call expression, which is the parent of the
                        // directive identifier.
                        //
                        // TODO: We should create an enum of the various properties a directive can have to use
                        // instead of string literals. We can then perform a mass migration of all literal usages.
                        var templateUrlNode = ts_utils_1.findPropertyValueOfType(directiveIdentifier.parent, 'templateUrl', ts.isLiteralExpression);
                        if (!templateUrlNode) {
                            host.error("templateUrl " + templateUrl + " exists but its TypeScript node doesn't");
                            return [];
                        }
                        results.push.apply(results, tslib_1.__spread(validateUrls([templateUrlNode], host.tsLsHost)));
                    }
                    if (styleUrls.length > 0) {
                        // Find styleUrls value from the directive call expression, which is the parent of the
                        // directive identifier.
                        var styleUrlsNode = ts_utils_1.findPropertyValueOfType(directiveIdentifier.parent, 'styleUrls', ts.isArrayLiteralExpression);
                        if (!styleUrlsNode) {
                            host.error("styleUrls property exists but its TypeScript node doesn't'");
                            return [];
                        }
                        results.push.apply(results, tslib_1.__spread(validateUrls(styleUrlsNode.elements, host.tsLsHost)));
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (declarations_1_1 && !declarations_1_1.done && (_c = declarations_1.return)) _c.call(declarations_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return results;
    }
    exports.getDeclarationDiagnostics = getDeclarationDiagnostics;
    /**
     * Checks that URLs on a directive point to a valid file.
     * Note that this diagnostic check may require a filesystem hit, and thus may be slower than other
     * checks.
     *
     * @param urls urls to check for validity
     * @param tsLsHost TS LS host used for querying filesystem information
     * @return diagnosed url errors, if any
     */
    function validateUrls(urls, tsLsHost) {
        if (!tsLsHost.fileExists) {
            return [];
        }
        var allErrors = [];
        // TODO(ayazhafiz): most of this logic can be unified with the logic in
        // definitions.ts#getUrlFromProperty. Create a utility function to be used by both.
        for (var i = 0; i < urls.length; ++i) {
            var urlNode = urls[i];
            if (!ts.isStringLiteralLike(urlNode)) {
                // If a non-string value is assigned to a URL node (like `templateUrl`), a type error will be
                // picked up by the TS Language Server.
                continue;
            }
            var curPath = urlNode.getSourceFile().fileName;
            var url = path.join(path.dirname(curPath), urlNode.text);
            if (tsLsHost.fileExists(url))
                continue;
            // Exclude opening and closing quotes in the url span.
            var urlSpan = { start: urlNode.getStart() + 1, end: urlNode.end - 1 };
            allErrors.push(diagnostic_messages_1.createDiagnostic(urlSpan, diagnostic_messages_1.Diagnostic.invalid_templateurl));
        }
        return allErrors;
    }
    /**
     * Return a recursive data structure that chains diagnostic messages.
     * @param chain
     */
    function chainDiagnostics(chain) {
        return {
            messageText: chain.message,
            category: ts.DiagnosticCategory.Error,
            code: 0,
            next: chain.next ? chain.next.map(chainDiagnostics) : undefined
        };
    }
    /**
     * Convert ng.Diagnostic to ts.Diagnostic.
     * @param d diagnostic
     * @param file
     */
    function ngDiagnosticToTsDiagnostic(d, file) {
        return {
            file: file,
            start: d.span.start,
            length: d.span.end - d.span.start,
            messageText: typeof d.message === 'string' ? d.message : chainDiagnostics(d.message),
            category: d.kind,
            code: 0,
            source: 'ng',
        };
    }
    exports.ngDiagnosticToTsDiagnostic = ngDiagnosticToTsDiagnostic;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc3RpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy9kaWFnbm9zdGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFHSCwyQkFBNkI7SUFDN0IsK0JBQWlDO0lBRWpDLHlGQUFtRTtJQUNuRSwrRkFBMEU7SUFDMUUsbUVBQXFFO0lBR3JFLDZEQUEyQztJQUUzQzs7O09BR0c7SUFDSCxTQUFnQixzQkFBc0IsQ0FBQyxHQUFpQjtRQUMvQyxJQUFBLDZCQUFXLEVBQUUsNkJBQVcsRUFBRSxxQkFBTyxFQUFFLHVCQUFRLENBQVE7UUFDMUQsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO2dCQUN0QixPQUFPO29CQUNMLElBQUksRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQUMsS0FBSztvQkFDakMsSUFBSSxFQUFFLGtCQUFVLENBQUMsY0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDckQsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHO2lCQUNmLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyx5REFBZ0MsQ0FBQztZQUN0QyxXQUFXLEVBQUUsV0FBVztZQUN4QixPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQzNCLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztZQUNyQixPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87WUFDekIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTTtTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBbkJELHdEQW1CQztJ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LEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQWdCLDBCQUEwQixDQUN0QyxDQUFnQixFQUFFLElBQTZCO1FBQ2pELE9BQU87WUFDTCxJQUFJLE1BQUE7WUFDSixLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ25CLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDakMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDcEYsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJO1lBQ2hCLElBQUksRUFBRSxDQUFDO1lBQ1AsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDO0lBQ0osQ0FBQztJQVhELGdFQVdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nQW5hbHl6ZWRNb2R1bGVzfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7Y3JlYXRlRGlhZ25vc3RpYywgRGlhZ25vc3RpY30gZnJvbSAnLi9kaWFnbm9zdGljX21lc3NhZ2VzJztcbmltcG9ydCB7Z2V0VGVtcGxhdGVFeHByZXNzaW9uRGlhZ25vc3RpY3N9IGZyb20gJy4vZXhwcmVzc2lvbl9kaWFnbm9zdGljcyc7XG5pbXBvcnQge2ZpbmRQcm9wZXJ0eVZhbHVlT2ZUeXBlLCBmaW5kVGlnaHRlc3ROb2RlfSBmcm9tICcuL3RzX3V0aWxzJztcbmltcG9ydCAqIGFzIG5nIGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtUeXBlU2NyaXB0U2VydmljZUhvc3R9IGZyb20gJy4vdHlwZXNjcmlwdF9ob3N0JztcbmltcG9ydCB7b2Zmc2V0U3Bhbiwgc3Bhbk9mfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBSZXR1cm4gZGlhZ25vc3RpYyBpbmZvcm1hdGlvbiBmb3IgdGhlIHBhcnNlZCBBU1Qgb2YgdGhlIHRlbXBsYXRlLlxuICogQHBhcmFtIGFzdCBjb250YWlucyBIVE1MIGFuZCB0ZW1wbGF0ZSBBU1RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlRGlhZ25vc3RpY3MoYXN0OiBuZy5Bc3RSZXN1bHQpOiBuZy5EaWFnbm9zdGljW10ge1xuICBjb25zdCB7cGFyc2VFcnJvcnMsIHRlbXBsYXRlQXN0LCBodG1sQXN0LCB0ZW1wbGF0ZX0gPSBhc3Q7XG4gIGlmIChwYXJzZUVycm9ycyAmJiBwYXJzZUVycm9ycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gcGFyc2VFcnJvcnMubWFwKGUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogdHMuRGlhZ25vc3RpY0NhdGVnb3J5LkVycm9yLFxuICAgICAgICBzcGFuOiBvZmZzZXRTcGFuKHNwYW5PZihlLnNwYW4pLCB0ZW1wbGF0ZS5zcGFuLnN0YXJ0KSxcbiAgICAgICAgbWVzc2FnZTogZS5tc2csXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBnZXRUZW1wbGF0ZUV4cHJlc3Npb25EaWFnbm9zdGljcyh7XG4gICAgdGVtcGxhdGVBc3Q6IHRlbXBsYXRlQXN0LFxuICAgIGh0bWxBc3Q6IGh0bWxBc3QsXG4gICAgb2Zmc2V0OiB0ZW1wbGF0ZS5zcGFuLnN0YXJ0LFxuICAgIHF1ZXJ5OiB0ZW1wbGF0ZS5xdWVyeSxcbiAgICBtZW1iZXJzOiB0ZW1wbGF0ZS5tZW1iZXJzLFxuICAgIHNvdXJjZTogYXN0LnRlbXBsYXRlLnNvdXJjZSxcbiAgfSk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSB2YXJpZXR5IGRpYWdub3N0aWNzIG9uIGRpcmVjdGl2ZSBkZWNsYXJhdGlvbnMuXG4gKlxuICogQHBhcmFtIGRlY2xhcmF0aW9ucyBBbmd1bGFyIGRpcmVjdGl2ZSBkZWNsYXJhdGlvbnNcbiAqIEBwYXJhbSBtb2R1bGVzIE5nTW9kdWxlcyBpbiB0aGUgcHJvamVjdFxuICogQHBhcmFtIGhvc3QgVHlwZVNjcmlwdCBzZXJ2aWNlIGhvc3QgdXNlZCB0byBwZXJmb3JtIFR5cGVTY3JpcHQgcXVlcmllc1xuICogQHJldHVybiBkaWFnbm9zZWQgZXJyb3JzLCBpZiBhbnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRGlhZ25vc3RpY3MoXG4gICAgZGVjbGFyYXRpb25zOiBuZy5EZWNsYXJhdGlvbltdLCBtb2R1bGVzOiBOZ0FuYWx5emVkTW9kdWxlcyxcbiAgICBob3N0OiBSZWFkb25seTxUeXBlU2NyaXB0U2VydmljZUhvc3Q+KTogbmcuRGlhZ25vc3RpY1tdIHtcbiAgY29uc3QgZGlyZWN0aXZlcyA9IG5ldyBTZXQ8bmcuU3RhdGljU3ltYm9sPigpO1xuICBmb3IgKGNvbnN0IG5nTW9kdWxlIG9mIG1vZHVsZXMubmdNb2R1bGVzKSB7XG4gICAgZm9yIChjb25zdCBkaXJlY3RpdmUgb2YgbmdNb2R1bGUuZGVjbGFyZWREaXJlY3RpdmVzKSB7XG4gICAgICBkaXJlY3RpdmVzLmFkZChkaXJlY3RpdmUucmVmZXJlbmNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXN1bHRzOiBuZy5EaWFnbm9zdGljW10gPSBbXTtcblxuICBmb3IgKGNvbnN0IGRlY2xhcmF0aW9uIG9mIGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IHtlcnJvcnMsIG1ldGFkYXRhLCB0eXBlLCBkZWNsYXJhdGlvblNwYW59ID0gZGVjbGFyYXRpb247XG5cbiAgICBjb25zdCBzZiA9IGhvc3QuZ2V0U291cmNlRmlsZSh0eXBlLmZpbGVQYXRoKTtcbiAgICBpZiAoIXNmKSB7XG4gICAgICBob3N0LmVycm9yKGBkaXJlY3RpdmUgJHt0eXBlLm5hbWV9IGV4aXN0cyBidXQgaGFzIG5vIHNvdXJjZSBmaWxlYCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIC8vIFR5cGVTY3JpcHQgaWRlbnRpZmllciBvZiB0aGUgZGlyZWN0aXZlIGRlY2xhcmF0aW9uIGFubm90YXRpb24gKGUuZy4gXCJDb21wb25lbnRcIiBvclxuICAgIC8vIFwiRGlyZWN0aXZlXCIpIG9uIGEgZGlyZWN0aXZlIGNsYXNzLlxuICAgIGNvbnN0IGRpcmVjdGl2ZUlkZW50aWZpZXIgPSBmaW5kVGlnaHRlc3ROb2RlKHNmLCBkZWNsYXJhdGlvblNwYW4uc3RhcnQpO1xuICAgIGlmICghZGlyZWN0aXZlSWRlbnRpZmllcikge1xuICAgICAgaG9zdC5lcnJvcihgZGlyZWN0aXZlICR7dHlwZS5uYW1lfSBleGlzdHMgYnV0IGhhcyBubyBpZGVudGlmaWVyYCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBlcnJvciBvZiBlcnJvcnMpIHtcbiAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgIGtpbmQ6IHRzLkRpYWdub3N0aWNDYXRlZ29yeS5FcnJvcixcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgc3BhbjogZXJyb3Iuc3BhbixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghbW9kdWxlcy5uZ01vZHVsZUJ5UGlwZU9yRGlyZWN0aXZlLmhhcyhkZWNsYXJhdGlvbi50eXBlKSkge1xuICAgICAgcmVzdWx0cy5wdXNoKGNyZWF0ZURpYWdub3N0aWMoXG4gICAgICAgICAgZGVjbGFyYXRpb25TcGFuLCBEaWFnbm9zdGljLmRpcmVjdGl2ZV9ub3RfaW5fbW9kdWxlLFxuICAgICAgICAgIG1ldGFkYXRhLmlzQ29tcG9uZW50ID8gJ0NvbXBvbmVudCcgOiAnRGlyZWN0aXZlJywgdHlwZS5uYW1lKSk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGFkYXRhLmlzQ29tcG9uZW50KSB7XG4gICAgICBjb25zdCB7dGVtcGxhdGUsIHRlbXBsYXRlVXJsLCBzdHlsZVVybHN9ID0gbWV0YWRhdGEudGVtcGxhdGUgITtcbiAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gbnVsbCAmJiAhdGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGNyZWF0ZURpYWdub3N0aWMoXG4gICAgICAgICAgICBkZWNsYXJhdGlvblNwYW4sIERpYWdub3N0aWMubWlzc2luZ190ZW1wbGF0ZV9hbmRfdGVtcGxhdGV1cmwsIHR5cGUubmFtZSkpO1xuICAgICAgfSBlbHNlIGlmICh0ZW1wbGF0ZVVybCkge1xuICAgICAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goY3JlYXRlRGlhZ25vc3RpYyhcbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25TcGFuLCBEaWFnbm9zdGljLmJvdGhfdGVtcGxhdGVfYW5kX3RlbXBsYXRldXJsLCB0eXBlLm5hbWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmQgdGVtcGxhdGVVcmwgdmFsdWUgZnJvbSB0aGUgZGlyZWN0aXZlIGNhbGwgZXhwcmVzc2lvbiwgd2hpY2ggaXMgdGhlIHBhcmVudCBvZiB0aGVcbiAgICAgICAgLy8gZGlyZWN0aXZlIGlkZW50aWZpZXIuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRPRE86IFdlIHNob3VsZCBjcmVhdGUgYW4gZW51bSBvZiB0aGUgdmFyaW91cyBwcm9wZXJ0aWVzIGEgZGlyZWN0aXZlIGNhbiBoYXZlIHRvIHVzZVxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHN0cmluZyBsaXRlcmFscy4gV2UgY2FuIHRoZW4gcGVyZm9ybSBhIG1hc3MgbWlncmF0aW9uIG9mIGFsbCBsaXRlcmFsIHVzYWdlcy5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVVcmxOb2RlID0gZmluZFByb3BlcnR5VmFsdWVPZlR5cGUoXG4gICAgICAgICAgICBkaXJlY3RpdmVJZGVudGlmaWVyLnBhcmVudCwgJ3RlbXBsYXRlVXJsJywgdHMuaXNMaXRlcmFsRXhwcmVzc2lvbik7XG4gICAgICAgIGlmICghdGVtcGxhdGVVcmxOb2RlKSB7XG4gICAgICAgICAgaG9zdC5lcnJvcihgdGVtcGxhdGVVcmwgJHt0ZW1wbGF0ZVVybH0gZXhpc3RzIGJ1dCBpdHMgVHlwZVNjcmlwdCBub2RlIGRvZXNuJ3RgKTtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRzLnB1c2goLi4udmFsaWRhdGVVcmxzKFt0ZW1wbGF0ZVVybE5vZGVdLCBob3N0LnRzTHNIb3N0KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHlsZVVybHMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBGaW5kIHN0eWxlVXJscyB2YWx1ZSBmcm9tIHRoZSBkaXJlY3RpdmUgY2FsbCBleHByZXNzaW9uLCB3aGljaCBpcyB0aGUgcGFyZW50IG9mIHRoZVxuICAgICAgICAvLyBkaXJlY3RpdmUgaWRlbnRpZmllci5cbiAgICAgICAgY29uc3Qgc3R5bGVVcmxzTm9kZSA9IGZpbmRQcm9wZXJ0eVZhbHVlT2ZUeXBlKFxuICAgICAgICAgICAgZGlyZWN0aXZlSWRlbnRpZmllci5wYXJlbnQsICdzdHlsZVVybHMnLCB0cy5pc0FycmF5TGl0ZXJhbEV4cHJlc3Npb24pO1xuICAgICAgICBpZiAoIXN0eWxlVXJsc05vZGUpIHtcbiAgICAgICAgICBob3N0LmVycm9yKGBzdHlsZVVybHMgcHJvcGVydHkgZXhpc3RzIGJ1dCBpdHMgVHlwZVNjcmlwdCBub2RlIGRvZXNuJ3QnYCk7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKC4uLnZhbGlkYXRlVXJscyhzdHlsZVVybHNOb2RlLmVsZW1lbnRzLCBob3N0LnRzTHNIb3N0KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKlxuICogQ2hlY2tzIHRoYXQgVVJMcyBvbiBhIGRpcmVjdGl2ZSBwb2ludCB0byBhIHZhbGlkIGZpbGUuXG4gKiBOb3RlIHRoYXQgdGhpcyBkaWFnbm9zdGljIGNoZWNrIG1heSByZXF1aXJlIGEgZmlsZXN5c3RlbSBoaXQsIGFuZCB0aHVzIG1heSBiZSBzbG93ZXIgdGhhbiBvdGhlclxuICogY2hlY2tzLlxuICpcbiAqIEBwYXJhbSB1cmxzIHVybHMgdG8gY2hlY2sgZm9yIHZhbGlkaXR5XG4gKiBAcGFyYW0gdHNMc0hvc3QgVFMgTFMgaG9zdCB1c2VkIGZvciBxdWVyeWluZyBmaWxlc3lzdGVtIGluZm9ybWF0aW9uXG4gKiBAcmV0dXJuIGRpYWdub3NlZCB1cmwgZXJyb3JzLCBpZiBhbnlcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVVcmxzKFxuICAgIHVybHM6IEFycmF5TGlrZTx0cy5FeHByZXNzaW9uPiwgdHNMc0hvc3Q6IFJlYWRvbmx5PHRzLkxhbmd1YWdlU2VydmljZUhvc3Q+KTogbmcuRGlhZ25vc3RpY1tdIHtcbiAgaWYgKCF0c0xzSG9zdC5maWxlRXhpc3RzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgYWxsRXJyb3JzOiBuZy5EaWFnbm9zdGljW10gPSBbXTtcbiAgLy8gVE9ETyhheWF6aGFmaXopOiBtb3N0IG9mIHRoaXMgbG9naWMgY2FuIGJlIHVuaWZpZWQgd2l0aCB0aGUgbG9naWMgaW5cbiAgLy8gZGVmaW5pdGlvbnMudHMjZ2V0VXJsRnJvbVByb3BlcnR5LiBDcmVhdGUgYSB1dGlsaXR5IGZ1bmN0aW9uIHRvIGJlIHVzZWQgYnkgYm90aC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmxzLmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgdXJsTm9kZSA9IHVybHNbaV07XG4gICAgaWYgKCF0cy5pc1N0cmluZ0xpdGVyYWxMaWtlKHVybE5vZGUpKSB7XG4gICAgICAvLyBJZiBhIG5vbi1zdHJpbmcgdmFsdWUgaXMgYXNzaWduZWQgdG8gYSBVUkwgbm9kZSAobGlrZSBgdGVtcGxhdGVVcmxgKSwgYSB0eXBlIGVycm9yIHdpbGwgYmVcbiAgICAgIC8vIHBpY2tlZCB1cCBieSB0aGUgVFMgTGFuZ3VhZ2UgU2VydmVyLlxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IGN1clBhdGggPSB1cmxOb2RlLmdldFNvdXJjZUZpbGUoKS5maWxlTmFtZTtcbiAgICBjb25zdCB1cmwgPSBwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKGN1clBhdGgpLCB1cmxOb2RlLnRleHQpO1xuICAgIGlmICh0c0xzSG9zdC5maWxlRXhpc3RzKHVybCkpIGNvbnRpbnVlO1xuXG4gICAgLy8gRXhjbHVkZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHF1b3RlcyBpbiB0aGUgdXJsIHNwYW4uXG4gICAgY29uc3QgdXJsU3BhbiA9IHtzdGFydDogdXJsTm9kZS5nZXRTdGFydCgpICsgMSwgZW5kOiB1cmxOb2RlLmVuZCAtIDF9O1xuICAgIGFsbEVycm9ycy5wdXNoKGNyZWF0ZURpYWdub3N0aWModXJsU3BhbiwgRGlhZ25vc3RpYy5pbnZhbGlkX3RlbXBsYXRldXJsKSk7XG4gIH1cbiAgcmV0dXJuIGFsbEVycm9ycztcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSByZWN1cnNpdmUgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBjaGFpbnMgZGlhZ25vc3RpYyBtZXNzYWdlcy5cbiAqIEBwYXJhbSBjaGFpblxuICovXG5mdW5jdGlvbiBjaGFpbkRpYWdub3N0aWNzKGNoYWluOiBuZy5EaWFnbm9zdGljTWVzc2FnZUNoYWluKTogdHMuRGlhZ25vc3RpY01lc3NhZ2VDaGFpbiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZVRleHQ6IGNoYWluLm1lc3NhZ2UsXG4gICAgY2F0ZWdvcnk6IHRzLkRpYWdub3N0aWNDYXRlZ29yeS5FcnJvcixcbiAgICBjb2RlOiAwLFxuICAgIG5leHQ6IGNoYWluLm5leHQgPyBjaGFpbi5uZXh0Lm1hcChjaGFpbkRpYWdub3N0aWNzKSA6IHVuZGVmaW5lZFxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgbmcuRGlhZ25vc3RpYyB0byB0cy5EaWFnbm9zdGljLlxuICogQHBhcmFtIGQgZGlhZ25vc3RpY1xuICogQHBhcmFtIGZpbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5nRGlhZ25vc3RpY1RvVHNEaWFnbm9zdGljKFxuICAgIGQ6IG5nLkRpYWdub3N0aWMsIGZpbGU6IHRzLlNvdXJjZUZpbGV8dW5kZWZpbmVkKTogdHMuRGlhZ25vc3RpYyB7XG4gIHJldHVybiB7XG4gICAgZmlsZSxcbiAgICBzdGFydDogZC5zcGFuLnN0YXJ0LFxuICAgIGxlbmd0aDogZC5zcGFuLmVuZCAtIGQuc3Bhbi5zdGFydCxcbiAgICBtZXNzYWdlVGV4dDogdHlwZW9mIGQubWVzc2FnZSA9PT0gJ3N0cmluZycgPyBkLm1lc3NhZ2UgOiBjaGFpbkRpYWdub3N0aWNzKGQubWVzc2FnZSksXG4gICAgY2F0ZWdvcnk6IGQua2luZCxcbiAgICBjb2RlOiAwLFxuICAgIHNvdXJjZTogJ25nJyxcbiAgfTtcbn1cbiJdfQ==