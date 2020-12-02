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
        define("@angular/language-service/src/definitions", ["require", "exports", "tslib", "path", "typescript", "@angular/language-service/src/locate_symbol", "@angular/language-service/src/ts_utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var path = require("path");
    var ts = require("typescript"); // used as value and is provided at runtime
    var locate_symbol_1 = require("@angular/language-service/src/locate_symbol");
    var ts_utils_1 = require("@angular/language-service/src/ts_utils");
    /**
     * Convert Angular Span to TypeScript TextSpan. Angular Span has 'start' and
     * 'end' whereas TS TextSpan has 'start' and 'length'.
     * @param span Angular Span
     */
    function ngSpanToTsTextSpan(span) {
        return {
            start: span.start,
            length: span.end - span.start,
        };
    }
    /**
     * Traverse the template AST and look for the symbol located at `position`, then
     * return its definition and span of bound text.
     * @param info
     * @param position
     */
    function getDefinitionAndBoundSpan(info, position) {
        var e_1, _a, e_2, _b;
        var symbols = locate_symbol_1.locateSymbols(info, position);
        if (!symbols.length) {
            return;
        }
        var seen = new Set();
        var definitions = [];
        try {
            for (var symbols_1 = tslib_1.__values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                var symbolInfo = symbols_1_1.value;
                var symbol = symbolInfo.symbol;
                // symbol.definition is really the locations of the symbol. There could be
                // more than one. No meaningful info could be provided without any location.
                var kind = symbol.kind, name_1 = symbol.name, container = symbol.container, locations = symbol.definition;
                if (!locations || !locations.length) {
                    continue;
                }
                var containerKind = container ? container.kind : ts.ScriptElementKind.unknown;
                var containerName = container ? container.name : '';
                try {
                    for (var locations_1 = (e_2 = void 0, tslib_1.__values(locations)), locations_1_1 = locations_1.next(); !locations_1_1.done; locations_1_1 = locations_1.next()) {
                        var _c = locations_1_1.value, fileName = _c.fileName, span = _c.span;
                        var textSpan = ngSpanToTsTextSpan(span);
                        // In cases like two-way bindings, a request for the definitions of an expression may return
                        // two of the same definition:
                        //    [(ngModel)]="prop"
                        //                 ^^^^  -- one definition for the property binding, one for the event binding
                        // To prune duplicate definitions, tag definitions with unique location signatures and ignore
                        // definitions whose locations have already been seen.
                        var signature = textSpan.start + ":" + textSpan.length + "@" + fileName;
                        if (seen.has(signature))
                            continue;
                        definitions.push({
                            kind: kind,
                            name: name_1,
                            containerKind: containerKind,
                            containerName: containerName,
                            textSpan: ngSpanToTsTextSpan(span),
                            fileName: fileName,
                        });
                        seen.add(signature);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (locations_1_1 && !locations_1_1.done && (_b = locations_1.return)) _b.call(locations_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return {
            definitions: definitions,
            textSpan: symbols[0].span,
        };
    }
    exports.getDefinitionAndBoundSpan = getDefinitionAndBoundSpan;
    /**
     * Gets an Angular-specific definition in a TypeScript source file.
     */
    function getTsDefinitionAndBoundSpan(sf, position, tsLsHost) {
        var node = ts_utils_1.findTightestNode(sf, position);
        if (!node)
            return;
        switch (node.kind) {
            case ts.SyntaxKind.StringLiteral:
            case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
                // Attempt to extract definition of a URL in a property assignment.
                return getUrlFromProperty(node, tsLsHost);
            default:
                return undefined;
        }
    }
    exports.getTsDefinitionAndBoundSpan = getTsDefinitionAndBoundSpan;
    /**
     * Attempts to get the definition of a file whose URL is specified in a property assignment in a
     * directive decorator.
     * Currently applies to `templateUrl` and `styleUrls` properties.
     */
    function getUrlFromProperty(urlNode, tsLsHost) {
        // Get the property assignment node corresponding to the `templateUrl` or `styleUrls` assignment.
        // These assignments are specified differently; `templateUrl` is a string, and `styleUrls` is
        // an array of strings:
        //   {
        //        templateUrl: './template.ng.html',
        //        styleUrls: ['./style.css', './other-style.css']
        //   }
        // `templateUrl`'s property assignment can be found from the string literal node;
        // `styleUrls`'s property assignment can be found from the array (parent) node.
        //
        // First search for `templateUrl`.
        var asgn = ts_utils_1.getPropertyAssignmentFromValue(urlNode, 'templateUrl');
        if (!asgn) {
            // `templateUrl` assignment not found; search for `styleUrls` array assignment.
            asgn = ts_utils_1.getPropertyAssignmentFromValue(urlNode.parent, 'styleUrls');
            if (!asgn) {
                // Nothing found, bail.
                return;
            }
        }
        // If the property assignment is not a property of a class decorator, don't generate definitions
        // for it.
        if (!ts_utils_1.getClassDeclFromDecoratorProp(asgn)) {
            return;
        }
        var sf = urlNode.getSourceFile();
        // Extract url path specified by the url node, which is relative to the TypeScript source file
        // the url node is defined in.
        var url = path.join(path.dirname(sf.fileName), urlNode.text);
        // If the file does not exist, bail. It is possible that the TypeScript language service host
        // does not have a `fileExists` method, in which case optimistically assume the file exists.
        if (tsLsHost.fileExists && !tsLsHost.fileExists(url))
            return;
        var templateDefinitions = [{
                kind: ts.ScriptElementKind.externalModuleName,
                name: url,
                containerKind: ts.ScriptElementKind.unknown,
                containerName: '',
                // Reading the template is expensive, so don't provide a preview.
                textSpan: { start: 0, length: 0 },
                fileName: url,
            }];
        return {
            definitions: templateDefinitions,
            textSpan: {
                // Exclude opening and closing quotes in the url span.
                start: urlNode.getStart() + 1,
                length: urlNode.getWidth() - 2,
            },
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy9kZWZpbml0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCwyQkFBNkI7SUFDN0IsK0JBQWlDLENBQUUsMkNBQTJDO0lBRTlFLDZFQUE4QztJQUM5QyxtRUFBMkc7SUFHM0c7Ozs7T0FJRztJQUNILFNBQVMsa0JBQWtCLENBQUMsSUFBVTtRQUNwQyxPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO1NBQzlCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFnQix5QkFBeUIsQ0FDckMsSUFBZSxFQUFFLFFBQWdCOztRQUNuQyxJQUFNLE9BQU8sR0FBRyw2QkFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQy9CLElBQU0sV0FBVyxHQUF3QixFQUFFLENBQUM7O1lBQzVDLEtBQXlCLElBQUEsWUFBQSxpQkFBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7Z0JBQTdCLElBQU0sVUFBVSxvQkFBQTtnQkFDWixJQUFBLDBCQUFNLENBQWU7Z0JBRTVCLDBFQUEwRTtnQkFDMUUsNEVBQTRFO2dCQUNyRSxJQUFBLGtCQUFJLEVBQUUsb0JBQUksRUFBRSw0QkFBUyxFQUFFLDZCQUFxQixDQUFXO2dCQUM5RCxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDbkMsU0FBUztpQkFDVjtnQkFFRCxJQUFNLGFBQWEs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RjtRQUM5Riw4QkFBOEI7UUFDOUIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0QsNkZBQTZGO1FBQzdGLDRGQUE0RjtRQUM1RixJQUFJLFFBQVEsQ0FBQyxVQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFFN0QsSUFBTSxtQkFBbUIsR0FBd0IsQ0FBQztnQkFDaEQsSUFBSSxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0I7Z0JBQzdDLElBQUksRUFBRSxHQUFHO2dCQUNULGFBQWEsRUFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTztnQkFDM0MsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGlFQUFpRTtnQkFDakUsUUFBUSxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDO2dCQUMvQixRQUFRLEVBQUUsR0FBRzthQUNkLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFFBQVEsRUFBRTtnQkFDUixzREFBc0Q7Z0JBQ3RELEtBQUssRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDN0IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2FBQy9CO1NBQ0YsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JzsgIC8vIHVzZWQgYXMgdmFsdWUgYW5kIGlzIHByb3ZpZGVkIGF0IHJ1bnRpbWVcblxuaW1wb3J0IHtsb2NhdGVTeW1ib2xzfSBmcm9tICcuL2xvY2F0ZV9zeW1ib2wnO1xuaW1wb3J0IHtmaW5kVGlnaHRlc3ROb2RlLCBnZXRDbGFzc0RlY2xGcm9tRGVjb3JhdG9yUHJvcCwgZ2V0UHJvcGVydHlBc3NpZ25tZW50RnJvbVZhbHVlfSBmcm9tICcuL3RzX3V0aWxzJztcbmltcG9ydCB7QXN0UmVzdWx0LCBTcGFufSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBDb252ZXJ0IEFuZ3VsYXIgU3BhbiB0byBUeXBlU2NyaXB0IFRleHRTcGFuLiBBbmd1bGFyIFNwYW4gaGFzICdzdGFydCcgYW5kXG4gKiAnZW5kJyB3aGVyZWFzIFRTIFRleHRTcGFuIGhhcyAnc3RhcnQnIGFuZCAnbGVuZ3RoJy5cbiAqIEBwYXJhbSBzcGFuIEFuZ3VsYXIgU3BhblxuICovXG5mdW5jdGlvbiBuZ1NwYW5Ub1RzVGV4dFNwYW4oc3BhbjogU3Bhbik6IHRzLlRleHRTcGFuIHtcbiAgcmV0dXJuIHtcbiAgICBzdGFydDogc3Bhbi5zdGFydCxcbiAgICBsZW5ndGg6IHNwYW4uZW5kIC0gc3Bhbi5zdGFydCxcbiAgfTtcbn1cblxuLyoqXG4gKiBUcmF2ZXJzZSB0aGUgdGVtcGxhdGUgQVNUIGFuZCBsb29rIGZvciB0aGUgc3ltYm9sIGxvY2F0ZWQgYXQgYHBvc2l0aW9uYCwgdGhlblxuICogcmV0dXJuIGl0cyBkZWZpbml0aW9uIGFuZCBzcGFuIG9mIGJvdW5kIHRleHQuXG4gKiBAcGFyYW0gaW5mb1xuICogQHBhcmFtIHBvc2l0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZpbml0aW9uQW5kQm91bmRTcGFuKFxuICAgIGluZm86IEFzdFJlc3VsdCwgcG9zaXRpb246IG51bWJlcik6IHRzLkRlZmluaXRpb25JbmZvQW5kQm91bmRTcGFufHVuZGVmaW5lZCB7XG4gIGNvbnN0IHN5bWJvbHMgPSBsb2NhdGVTeW1ib2xzKGluZm8sIHBvc2l0aW9uKTtcbiAgaWYgKCFzeW1ib2xzLmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3QgZGVmaW5pdGlvbnM6IHRzLkRlZmluaXRpb25JbmZvW10gPSBbXTtcbiAgZm9yIChjb25zdCBzeW1ib2xJbmZvIG9mIHN5bWJvbHMpIHtcbiAgICBjb25zdCB7c3ltYm9sfSA9IHN5bWJvbEluZm87XG5cbiAgICAvLyBzeW1ib2wuZGVmaW5pdGlvbiBpcyByZWFsbHkgdGhlIGxvY2F0aW9ucyBvZiB0aGUgc3ltYm9sLiBUaGVyZSBjb3VsZCBiZVxuICAgIC8vIG1vcmUgdGhhbiBvbmUuIE5vIG1lYW5pbmdmdWwgaW5mbyBjb3VsZCBiZSBwcm92aWRlZCB3aXRob3V0IGFueSBsb2NhdGlvbi5cbiAgICBjb25zdCB7a2luZCwgbmFtZSwgY29udGFpbmVyLCBkZWZpbml0aW9uOiBsb2NhdGlvbnN9ID0gc3ltYm9sO1xuICAgIGlmICghbG9jYXRpb25zIHx8ICFsb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXJLaW5kID1cbiAgICAgICAgY29udGFpbmVyID8gY29udGFpbmVyLmtpbmQgYXMgdHMuU2NyaXB0RWxlbWVudEtpbmQgOiB0cy5TY3JpcHRFbGVtZW50S2luZC51bmtub3duO1xuICAgIGNvbnN0IGNvbnRhaW5lck5hbWUgPSBjb250YWluZXIgPyBjb250YWluZXIubmFtZSA6ICcnO1xuXG4gICAgZm9yIChjb25zdCB7ZmlsZU5hbWUsIHNwYW59IG9mIGxvY2F0aW9ucykge1xuICAgICAgY29uc3QgdGV4dFNwYW4gPSBuZ1NwYW5Ub1RzVGV4dFNwYW4oc3Bhbik7XG4gICAgICAvLyBJbiBjYXNlcyBsaWtlIHR3by13YXkgYmluZGluZ3MsIGEgcmVxdWVzdCBmb3IgdGhlIGRlZmluaXRpb25zIG9mIGFuIGV4cHJlc3Npb24gbWF5IHJldHVyblxuICAgICAgLy8gdHdvIG9mIHRoZSBzYW1lIGRlZmluaXRpb246XG4gICAgICAvLyAgICBbKG5nTW9kZWwpXT1cInByb3BcIlxuICAgICAgLy8gICAgICAgICAgICAgICAgIF5eXl4gIC0tIG9uZSBkZWZpbml0aW9uIGZvciB0aGUgcHJvcGVydHkgYmluZGluZywgb25lIGZvciB0aGUgZXZlbnQgYmluZGluZ1xuICAgICAgLy8gVG8gcHJ1bmUgZHVwbGljYXRlIGRlZmluaXRpb25zLCB0YWcgZGVmaW5pdGlvbnMgd2l0aCB1bmlxdWUgbG9jYXRpb24gc2lnbmF0dXJlcyBhbmQgaWdub3JlXG4gICAgICAvLyBkZWZpbml0aW9ucyB3aG9zZSBsb2NhdGlvbnMgaGF2ZSBhbHJlYWR5IGJlZW4gc2Vlbi5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGAke3RleHRTcGFuLnN0YXJ0fToke3RleHRTcGFuLmxlbmd0aH1AJHtmaWxlTmFtZX1gO1xuICAgICAgaWYgKHNlZW4uaGFzKHNpZ25hdHVyZSkpIGNvbnRpbnVlO1xuXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKHtcbiAgICAgICAga2luZDoga2luZCBhcyB0cy5TY3JpcHRFbGVtZW50S2luZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY29udGFpbmVyS2luZCxcbiAgICAgICAgY29udGFpbmVyTmFtZSxcbiAgICAgICAgdGV4dFNwYW46IG5nU3BhblRvVHNUZXh0U3BhbihzcGFuKSxcbiAgICAgICAgZmlsZU5hbWU6IGZpbGVOYW1lLFxuICAgICAgfSk7XG4gICAgICBzZWVuLmFkZChzaWduYXR1cmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGVmaW5pdGlvbnMsXG4gICAgdGV4dFNwYW46IHN5bWJvbHNbMF0uc3BhbixcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIGFuIEFuZ3VsYXItc3BlY2lmaWMgZGVmaW5pdGlvbiBpbiBhIFR5cGVTY3JpcHQgc291cmNlIGZpbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUc0RlZmluaXRpb25BbmRCb3VuZFNwYW4oXG4gICAgc2Y6IHRzLlNvdXJjZUZpbGUsIHBvc2l0aW9uOiBudW1iZXIsXG4gICAgdHNMc0hvc3Q6IFJlYWRvbmx5PHRzLkxhbmd1YWdlU2VydmljZUhvc3Q+KTogdHMuRGVmaW5pdGlvbkluZm9BbmRCb3VuZFNwYW58dW5kZWZpbmVkIHtcbiAgY29uc3Qgbm9kZSA9IGZpbmRUaWdodGVzdE5vZGUoc2YsIHBvc2l0aW9uKTtcbiAgaWYgKCFub2RlKSByZXR1cm47XG4gIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgY2FzZSB0cy5TeW50YXhLaW5kLlN0cmluZ0xpdGVyYWw6XG4gICAgY2FzZSB0cy5TeW50YXhLaW5kLk5vU3Vic3RpdHV0aW9uVGVtcGxhdGVMaXRlcmFsOlxuICAgICAgLy8gQXR0ZW1wdCB0byBleHRyYWN0IGRlZmluaXRpb24gb2YgYSBVUkwgaW4gYSBwcm9wZXJ0eSBhc3NpZ25tZW50LlxuICAgICAgcmV0dXJuIGdldFVybEZyb21Qcm9wZXJ0eShub2RlIGFzIHRzLlN0cmluZ0xpdGVyYWxMaWtlLCB0c0xzSG9zdCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBnZXQgdGhlIGRlZmluaXRpb24gb2YgYSBmaWxlIHdob3NlIFVSTCBpcyBzcGVjaWZpZWQgaW4gYSBwcm9wZXJ0eSBhc3NpZ25tZW50IGluIGFcbiAqIGRpcmVjdGl2ZSBkZWNvcmF0b3IuXG4gKiBDdXJyZW50bHkgYXBwbGllcyB0byBgdGVtcGxhdGVVcmxgIGFuZCBgc3R5bGVVcmxzYCBwcm9wZXJ0aWVzLlxuICovXG5mdW5jdGlvbiBnZXRVcmxGcm9tUHJvcGVydHkoXG4gICAgdXJsTm9kZTogdHMuU3RyaW5nTGl0ZXJhbExpa2UsXG4gICAgdHNMc0hvc3Q6IFJlYWRvbmx5PHRzLkxhbmd1YWdlU2VydmljZUhvc3Q+KTogdHMuRGVmaW5pdGlvbkluZm9BbmRCb3VuZFNwYW58dW5kZWZpbmVkIHtcbiAgLy8gR2V0IHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50IG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgYHRlbXBsYXRlVXJsYCBvciBgc3R5bGVVcmxzYCBhc3NpZ25tZW50LlxuICAvLyBUaGVzZSBhc3NpZ25tZW50cyBhcmUgc3BlY2lmaWVkIGRpZmZlcmVudGx5OyBgdGVtcGxhdGVVcmxgIGlzIGEgc3RyaW5nLCBhbmQgYHN0eWxlVXJsc2AgaXNcbiAgLy8gYW4gYXJyYXkgb2Ygc3RyaW5nczpcbiAgLy8gICB7XG4gIC8vICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGUubmcuaHRtbCcsXG4gIC8vICAgICAgICBzdHlsZVVybHM6IFsnLi9zdHlsZS5jc3MnLCAnLi9vdGhlci1zdHlsZS5jc3MnXVxuICAvLyAgIH1cbiAgLy8gYHRlbXBsYXRlVXJsYCdzIHByb3BlcnR5IGFzc2lnbm1lbnQgY2FuIGJlIGZvdW5kIGZyb20gdGhlIHN0cmluZyBsaXRlcmFsIG5vZGU7XG4gIC8vIGBzdHlsZVVybHNgJ3MgcHJvcGVydHkgYXNzaWdubWVudCBjYW4gYmUgZm91bmQgZnJvbSB0aGUgYXJyYXkgKHBhcmVudCkgbm9kZS5cbiAgLy9cbiAgLy8gRmlyc3Qgc2VhcmNoIGZvciBgdGVtcGxhdGVVcmxgLlxuICBsZXQgYXNnbiA9IGdldFByb3BlcnR5QXNzaWdubWVudEZyb21WYWx1ZSh1cmxOb2RlLCAndGVtcGxhdGVVcmwnKTtcbiAgaWYgKCFhc2duKSB7XG4gICAgLy8gYHRlbXBsYXRlVXJsYCBhc3NpZ25tZW50IG5vdCBmb3VuZDsgc2VhcmNoIGZvciBgc3R5bGVVcmxzYCBhcnJheSBhc3NpZ25tZW50LlxuICAgIGFzZ24gPSBnZXRQcm9wZXJ0eUFzc2lnbm1lbnRGcm9tVmFsdWUodXJsTm9kZS5wYXJlbnQsICdzdHlsZVVybHMnKTtcbiAgICBpZiAoIWFzZ24pIHtcbiAgICAgIC8vIE5vdGhpbmcgZm91bmQsIGJhaWwuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQgaXMgbm90IGEgcHJvcGVydHkgb2YgYSBjbGFzcyBkZWNvcmF0b3IsIGRvbid0IGdlbmVyYXRlIGRlZmluaXRpb25zXG4gIC8vIGZvciBpdC5cbiAgaWYgKCFnZXRDbGFzc0RlY2xGcm9tRGVjb3JhdG9yUHJvcChhc2duKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNmID0gdXJsTm9kZS5nZXRTb3VyY2VGaWxlKCk7XG4gIC8vIEV4dHJhY3QgdXJsIHBhdGggc3BlY2lmaWVkIGJ5IHRoZSB1cmwgbm9kZSwgd2hpY2ggaXMgcmVsYXRpdmUgdG8gdGhlIFR5cGVTY3JpcHQgc291cmNlIGZpbGVcbiAgLy8gdGhlIHVybCBub2RlIGlzIGRlZmluZWQgaW4uXG4gIGNvbnN0IHVybCA9IHBhdGguam9pbihwYXRoLmRpcm5hbWUoc2YuZmlsZU5hbWUpLCB1cmxOb2RlLnRleHQpO1xuXG4gIC8vIElmIHRoZSBmaWxlIGRvZXMgbm90IGV4aXN0LCBiYWlsLiBJdCBpcyBwb3NzaWJsZSB0aGF0IHRoZSBUeXBlU2NyaXB0IGxhbmd1YWdlIHNlcnZpY2UgaG9zdFxuICAvLyBkb2VzIG5vdCBoYXZlIGEgYGZpbGVFeGlzdHNgIG1ldGhvZCwgaW4gd2hpY2ggY2FzZSBvcHRpbWlzdGljYWxseSBhc3N1bWUgdGhlIGZpbGUgZXhpc3RzLlxuICBpZiAodHNMc0hvc3QuZmlsZUV4aXN0cyAmJiAhdHNMc0hvc3QuZmlsZUV4aXN0cyh1cmwpKSByZXR1cm47XG5cbiAgY29uc3QgdGVtcGxhdGVEZWZpbml0aW9uczogdHMuRGVmaW5pdGlvbkluZm9bXSA9IFt7XG4gICAga2luZDogdHMuU2NyaXB0RWxlbWVudEtpbmQuZXh0ZXJuYWxNb2R1bGVOYW1lLFxuICAgIG5hbWU6IHVybCxcbiAgICBjb250YWluZXJLaW5kOiB0cy5TY3JpcHRFbGVtZW50S2luZC51bmtub3duLFxuICAgIGNvbnRhaW5lck5hbWU6ICcnLFxuICAgIC8vIFJlYWRpbmcgdGhlIHRlbXBsYXRlIGlzIGV4cGVuc2l2ZSwgc28gZG9uJ3QgcHJvdmlkZSBhIHByZXZpZXcuXG4gICAgdGV4dFNwYW46IHtzdGFydDogMCwgbGVuZ3RoOiAwfSxcbiAgICBmaWxlTmFtZTogdXJsLFxuICB9XTtcblxuICByZXR1cm4ge1xuICAgIGRlZmluaXRpb25zOiB0ZW1wbGF0ZURlZmluaXRpb25zLFxuICAgIHRleHRTcGFuOiB7XG4gICAgICAvLyBFeGNsdWRlIG9wZW5pbmcgYW5kIGNsb3NpbmcgcXVvdGVzIGluIHRoZSB1cmwgc3Bhbi5cbiAgICAgIHN0YXJ0OiB1cmxOb2RlLmdldFN0YXJ0KCkgKyAxLFxuICAgICAgbGVuZ3RoOiB1cmxOb2RlLmdldFdpZHRoKCkgLSAyLFxuICAgIH0sXG4gIH07XG59XG4iXX0=