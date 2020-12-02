(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics", ["require", "exports", "@angular/compiler", "typescript", "@angular/compiler-cli/src/ngtsc/util/src/typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var compiler_1 = require("@angular/compiler");
    var ts = require("typescript");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    /**
     * Wraps the node in parenthesis such that inserted span comments become attached to the proper
     * node. This is an alias for `ts.createParen` with the benefit that it signifies that the
     * inserted parenthesis are for diagnostic purposes, not for correctness of the rendered TCB code.
     *
     * Note that it is important that nodes and its attached comment are not wrapped into parenthesis
     * by default, as it prevents correct translation of e.g. diagnostics produced for incorrect method
     * arguments. Such diagnostics would then be produced for the parenthesised node whereas the
     * positional comment would be located within that node, resulting in a mismatch.
     */
    function wrapForDiagnostics(expr) {
        return ts.createParen(expr);
    }
    exports.wrapForDiagnostics = wrapForDiagnostics;
    var IGNORE_MARKER = 'ignore';
    /**
     * Adds a marker to the node that signifies that any errors within the node should not be reported.
     */
    function ignoreDiagnostics(node) {
        ts.addSyntheticTrailingComment(node, ts.SyntaxKind.MultiLineCommentTrivia, IGNORE_MARKER, /* hasTrailingNewLine */ false);
    }
    exports.ignoreDiagnostics = ignoreDiagnostics;
    /**
     * Adds a synthetic comment to the expression that represents the parse span of the provided node.
     * This comment can later be retrieved as trivia of a node to recover original source locations.
     */
    function addParseSpanInfo(node, span) {
        var commentText;
        if (span instanceof compiler_1.AbsoluteSourceSpan) {
            commentText = span.start + "," + span.end;
        }
        else {
            commentText = span.start.offset + "," + span.end.offset;
        }
        ts.addSyntheticTrailingComment(node, ts.SyntaxKind.MultiLineCommentTrivia, commentText, /* hasTrailingNewLine */ false);
    }
    exports.addParseSpanInfo = addParseSpanInfo;
    /**
     * Adds a synthetic comment to the function declaration that contains the template id
     * of the class declaration.
     */
    function addTemplateId(tcb, id) {
        ts.addSyntheticLeadingComment(tcb, ts.SyntaxKind.MultiLineCommentTrivia, id, true);
    }
    exports.addTemplateId = addTemplateId;
    /**
     * Determines if the diagnostic should be reported. Some diagnostics are produced because of the
     * way TCBs are generated; those diagnostics should not be reported as type check errors of the
     * template.
     */
    function shouldReportDiagnostic(diagnostic) {
        var code = diagnostic.code;
        if (code === 6133 /* $var is declared but its value is never read. */) {
            return false;
        }
        else if (code === 6199 /* All variables are unused. */) {
            return false;
        }
        else if (code === 2695 /* Left side of comma operator is unused and has no side effects. */) {
            return false;
        }
        else if (code === 7006 /* Parameter '$event' implicitly has an 'any' type. */) {
            return false;
        }
        return true;
    }
    exports.shouldReportDiagnostic = shouldReportDiagnostic;
    /**
     * Attempts to translate a TypeScript diagnostic produced during template type-checking to their
     * location of origin, based on the comments that are emitted in the TCB code.
     *
     * If the diagnostic could not be translated, `null` is returned to indicate that the diagnostic
     * should not be reported at all. This prevents diagnostics from non-TCB code in a user's source
     * file from being reported as type-check errors.
     */
    function translateDiagnostic(diagnostic, resolver) {
        if (diagnostic.file === undefined || diagnostic.start === undefined) {
            return null;
        }
        // Locate the node that the diagnostic is reported on and determine its location in the source.
        var node = typescript_1.getTokenAtPosition(diagnostic.file, diagnostic.start);
        var sourceLocation = findSourceLocation(node, diagnostic.file);
        if (sourceLocation === null) {
            return null;
        }
        // Now use the external resolver to obtain the full `ParseSourceFile` of the template.
        var span = resolver.toParseSourceSpan(sourceLocation.id, sourceLocation.span);
        if (span === null) {
            return null;
        }
        var mapping = resolver.getSourceMapping(sourceLocation.id);
        return makeTemplateDiagnostic(mapping, span, diagnostic.category, diagnostic.code, diagnostic.messageText);
    }
    exports.translateDiagnostic = translateDiagnostic;
    /**
     * Constructs a `ts.Diagnostic` for a given `ParseSourceSpan` within a template.
     */
    function makeTemplateDiagnostic(mapping, span, category, code, messageText, relatedMessage) {
        if (mapping.type === 'direct') {
            var relatedInformation = undefined;
            if (relatedMessage !== undefined) {
                relatedInformation = [{
                        category: ts.DiagnosticCategory.Message,
                        code: 0,
                        file: mapping.node.getSourceFile(),
                        start: relatedMessage.span.start.offset,
                        length: relatedMessage.span.end.offset - relatedMessage.span.start.offset,
                        messageText: relatedMessage.text,
                    }];
            }
            // For direct mappings, the error is shown inline as ngtsc was able to pinpoint a string
            // constant within the `@Component` decorator for the template. This allows us to map the error
            // directly into the bytes of the source file.
            return {
                source: 'ngtsc',
                code: code,
                category: category,
                messageText: messageText,
                file: mapping.node.getSourceFile(),
                componentFile: mapping.node.getSourceFile(),
                start: span.start.offset,
                length: span.end.offset - span.start.offset,
                relatedInformation: relatedInformation,
            };
        }
        else if (mapping.type === 'indirect' || mapping.type === 'external') {
            // For indirect mappings (template was declared inline, but ngtsc couldn't map it directly
            // to a string constant in the decorator), the component's file name is given with a suffix
            // indicating it's not the TS file being displayed, but a template.
            // For external temoplates, the HTML filename is used.
            var componentSf = mapping.componentClass.getSourceFile();
            var componentName = mapping.componentClass.name.text;
            // TODO(alxhub): remove cast when TS in g3 supports this narrowing.
            var fileName = mapping.type === 'indirect' ?
                componentSf.fileName + " (" + componentName + " template)" :
                mapping.templateUrl;
            // TODO(alxhub): investigate creating a fake `ts.SourceFile` here instead of invoking the TS
            // parser against the template (HTML is just really syntactically invalid TypeScript code ;).
            // Also investigate caching the file to avoid running the parser multiple times.
            var sf = ts.createSourceFile(fileName, mapping.template, ts.ScriptTarget.Latest, false, ts.ScriptKind.JSX);
            var relatedInformation = [];
            if (relatedMessage !== undefined) {
                relatedInformation.push({
                    category: ts.DiagnosticCategory.Message,
                    code: 0,
                    file: sf,
                    start: relatedMessage.span.start.offset,
                    length: relatedMessage.span.end.offset - relatedMessage.span.start.offset,
                    messageText: relatedMessage.text,
                });
            }
            relatedInformation.push({
                category: ts.DiagnosticCategory.Message,
                code: 0,
                file: componentSf,
                // mapping.node represents either the 'template' or 'templateUrl' expression. getStart()
                // and getEnd() are used because they don't include surrounding whitespace.
                start: mapping.node.getStart(),
                length: mapping.node.getEnd() - mapping.node.getStart(),
                messageText: "Error occurs in the template of component " + componentName + ".",
            });
            return {
                source: 'ngtsc',
                category: category,
                code: code,
                messageText: messageText,
                file: sf,
                componentFile: componentSf,
                start: span.start.offset,
                length: span.end.offset - span.start.offset,
                // Show a secondary message indicating the component whose template contains the error.
                relatedInformation: relatedInformation,
            };
        }
        else {
            throw new Error("Unexpected source mapping type: " + mapping.type);
        }
    }
    exports.makeTemplateDiagnostic = makeTemplateDiagnostic;
    /**
     * Traverses up the AST starting from the given node to extract the source location from comments
     * that have been emitted into the TCB. If the node does not exist within a TCB, or if an ignore
     * marker comment is found up the tree, this function returns null.
     */
    function findSourceLocation(node, sourceFile) {
        // Search for comments until the TCB's function declaration is encountered.
        while (node !== undefined && !ts.isFunctionDeclaration(node)) {
            if (hasIgnoreMarker(node, sourceFile)) {
                // There's an ignore marker on this node, so the diagnostic should not be reported.
                return null;
            }
            var span = readSpanComment(sourceFile, node);
            if (span !== null) {
                // Once the positional information has been extracted, search further up the TCB to extract
                // the unique id that is attached with the TCB's function declaration.
                var id = getTemplateId(node, sourceFile);
                if (id === null) {
                    return null;
                }
                return { id: id, span: span };
            }
            node = node.parent;
        }
        return null;
    }
    function getTemplateId(node, sourceFile) {
        // Walk up to the function declaration of the TCB, the file information is attached there.
        while (!ts.isFunctionDeclaration(node)) {
            if (hasIgnoreMarker(node, sourceFile)) {
                // There's an ignore marker on this node, so the diagnostic should not be reported.
                return null;
            }
            node = node.parent;
            // Bail once we have reached the root.
            if (node === undefined) {
                return null;
            }
        }
        var start = node.getFullStart();
        return ts.forEachLeadingCommentRange(sourceFile.text, start, function (pos, end, kind) {
            if (kind !== ts.SyntaxKind.MultiLineCommentTrivia) {
                return null;
            }
            var commentText = sourceFile.text.substring(pos + 2, end - 2);
            return commentText;
        }) || null;
    }
    var parseSpanComment = /^(\d+),(\d+)$/;
    function readSpanComment(sourceFile, node) {
        return ts.forEachTrailingCommentRange(sourceFile.text, node.getEnd(), function (pos, end, kind) {
            if (kind !== ts.SyntaxKind.MultiLineCommentTrivia) {
                return null;
            }
            var commentText = sourceFile.text.substring(pos + 2, end - 2);
            var match = commentText.match(parseSpanComment);
            if (match === null) {
                return null;
            }
            return new compiler_1.AbsoluteSourceSpan(+match[1], +match[2]);
        }) || null;
    }
    function hasIgnoreMarker(node, sourceFile) {
        return ts.forEachTrailingCommentRange(sourceFile.text, node.getEnd(), function (pos, end, kind) {
            if (kind !== ts.SyntaxKind.MultiLineCommentTrivia) {
                return null;
            }
            var commentText = sourceFile.text.substring(pos + 2, end - 2);
            return commentText === IGNORE_MARKER;
        }) === true;
    }
    function isTemplateDiagnostic(diagnostic) {
        return diagnostic.hasOwnProperty('componentFile') &&
            ts.isSourceFile(diagnostic.componentFile);
    }
    exports.isTemplateDiagnostic = isTemplateDiagnostic;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc3RpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3R5cGVjaGVjay9zcmMvZGlhZ25vc3RpY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCw4Q0FBc0U7SUFDdEUsK0JBQWlDO0lBRWpDLGtGQUE2RDtJQWtDN0Q7Ozs7Ozs7OztPQVNHO0lBQ0gsU0FBZ0Isa0JBQWtCLENBQUMsSUFBbUI7UUFDcEQsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFGRCxnREFFQztJQUVELElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQztJQUUvQjs7T0FFRztJQUNILFNBQWdCLGlCQUFpQixDQUFDLElBQWE7UUFDN0MsRUFBRSxDQUFDLDJCQUEyQixDQUMxQixJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxhQUFhLEVBQUUsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUhELDhDQUdDO0lBRUQ7OztPQUdHO0lBQ0gsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBYSxFQUFFLElBQXdDO1FBQ3RGLElBQUksV0FBbUIsQ0FBQztRQUN4QixJQUFJLElBQUksWUFBWSw2QkFBa0IsRUFBRTtZQUN0QyxXQUFXLEdBQU0sSUFBSSxDQUFDLEtBQUssU0FBSSxJQUFJLENBQUMsR0FBSyxDQUFDO1NBQzNDO2FBQU07WUFDTCxXQUFXLEdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFNBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFRLENBQUM7U0FDekQ7UUFDRCxFQUFFLENBQUMsMkJBQTJCLENBQzFCLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFFLFdBQVcsRUFBRSx3QkFBd0Is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R29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0Fic29sdXRlU291cmNlU3BhbiwgUGFyc2VTb3VyY2VTcGFufSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtnZXRUb2tlbkF0UG9zaXRpb259IGZyb20gJy4uLy4uL3V0aWwvc3JjL3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0V4dGVybmFsVGVtcGxhdGVTb3VyY2VNYXBwaW5nLCBUZW1wbGF0ZUlkLCBUZW1wbGF0ZVNvdXJjZU1hcHBpbmd9IGZyb20gJy4vYXBpJztcblxuLyoqXG4gKiBBIGB0cy5EaWFnbm9zdGljYCB3aXRoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGRpYWdub3N0aWMgcmVsYXRlZCB0byB0ZW1wbGF0ZVxuICogdHlwZS1jaGVja2luZy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZURpYWdub3N0aWMgZXh0ZW5kcyB0cy5EaWFnbm9zdGljIHtcbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgd2l0aCB0aGUgdGVtcGxhdGUgdGhhdCByZXN1bHRlZCBpbiB0aGlzIGRpYWdub3N0aWMuXG4gICAqL1xuICBjb21wb25lbnRGaWxlOiB0cy5Tb3VyY2VGaWxlO1xufVxuXG4vKipcbiAqIEFkYXB0ZXIgaW50ZXJmYWNlIHdoaWNoIGFsbG93cyB0aGUgdGVtcGxhdGUgdHlwZS1jaGVja2luZyBkaWFnbm9zdGljcyBjb2RlIHRvIGludGVycHJldCBvZmZzZXRzXG4gKiBpbiBhIFRDQiBhbmQgbWFwIHRoZW0gYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvbnMgaW4gdGhlIHRlbXBsYXRlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlU291cmNlUmVzb2x2ZXIge1xuICAvKipcbiAgICogRm9yIHRoZSBnaXZlbiB0ZW1wbGF0ZSBpZCwgcmV0cmlldmUgdGhlIG9yaWdpbmFsIHNvdXJjZSBtYXBwaW5nIHdoaWNoIGRlc2NyaWJlcyBob3cgdGhlIG9mZnNldHNcbiAgICogaW4gdGhlIHRlbXBsYXRlIHNob3VsZCBiZSBpbnRlcnByZXRlZC5cbiAgICovXG4gIGdldFNvdXJjZU1hcHBpbmcoaWQ6IFRlbXBsYXRlSWQpOiBUZW1wbGF0ZVNvdXJjZU1hcHBpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gYWJzb2x1dGUgc291cmNlIHNwYW4gYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiB0ZW1wbGF0ZSBpZCBpbnRvIGEgZnVsbFxuICAgKiBgUGFyc2VTb3VyY2VTcGFuYC4gVGhlIHJldHVybmVkIHBhcnNlIHNwYW4gaGFzIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzIGluIGFkZGl0aW9uIHRvIG9ubHlcbiAgICogYWJzb2x1dGUgb2Zmc2V0cyBhbmQgZ2l2ZXMgYWNjZXNzIHRvIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSBzb3VyY2UuXG4gICAqL1xuICB0b1BhcnNlU291cmNlU3BhbihpZDogVGVtcGxhdGVJZCwgc3BhbjogQWJzb2x1dGVTb3VyY2VTcGFuKTogUGFyc2VTb3VyY2VTcGFufG51bGw7XG59XG5cbi8qKlxuICogV3JhcHMgdGhlIG5vZGUgaW4gcGFyZW50aGVzaXMgc3VjaCB0aGF0IGluc2VydGVkIHNwYW4gY29tbWVudHMgYmVjb21lIGF0dGFjaGVkIHRvIHRoZSBwcm9wZXJcbiAqIG5vZGUuIFRoaXMgaXMgYW4gYWxpYXMgZm9yIGB0cy5jcmVhdGVQYXJlbmAgd2l0aCB0aGUgYmVuZWZpdCB0aGF0IGl0IHNpZ25pZmllcyB0aGF0IHRoZVxuICogaW5zZXJ0ZWQgcGFyZW50aGVzaXMgYXJlIGZvciBkaWFnbm9zdGljIHB1cnBvc2VzLCBub3QgZm9yIGNvcnJlY3RuZXNzIG9mIHRoZSByZW5kZXJlZCBUQ0IgY29kZS5cbiAqXG4gKiBOb3RlIHRoYXQgaXQgaXMgaW1wb3J0YW50IHRoYXQgbm9kZXMgYW5kIGl0cyBhdHRhY2hlZCBjb21tZW50IGFyZSBub3Qgd3JhcHBlZCBpbnRvIHBhcmVudGhlc2lzXG4gKiBieSBkZWZhdWx0LCBhcyBpdCBwcmV2ZW50cyBjb3JyZWN0IHRyYW5zbGF0aW9uIG9mIGUuZy4gZGlhZ25vc3RpY3MgcHJvZHVjZWQgZm9yIGluY29ycmVjdCBtZXRob2RcbiAqIGFyZ3VtZW50cy4gU3VjaCBkaWFnbm9zdGljcyB3b3VsZCB0aGVuIGJlIHByb2R1Y2VkIGZvciB0aGUgcGFyZW50aGVzaXNlZCBub2RlIHdoZXJlYXMgdGhlXG4gKiBwb3NpdGlvbmFsIGNvbW1lbnQgd291bGQgYmUgbG9jYXRlZCB3aXRoaW4gdGhhdCBub2RlLCByZXN1bHRpbmcgaW4gYSBtaXNtYXRjaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBGb3JEaWFnbm9zdGljcyhleHByOiB0cy5FeHByZXNzaW9uKTogdHMuRXhwcmVzc2lvbiB7XG4gIHJldHVybiB0cy5jcmVhdGVQYXJlbihleHByKTtcbn1cblxuY29uc3QgSUdOT1JFX01BUktFUiA9ICdpZ25vcmUnO1xuXG4vKipcbiAqIEFkZHMgYSBtYXJrZXIgdG8gdGhlIG5vZGUgdGhhdCBzaWduaWZpZXMgdGhhdCBhbnkgZXJyb3JzIHdpdGhpbiB0aGUgbm9kZSBzaG91bGQgbm90IGJlIHJlcG9ydGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaWdub3JlRGlhZ25vc3RpY3Mobm9kZTogdHMuTm9kZSk6IHZvaWQge1xuICB0cy5hZGRTeW50aGV0aWNUcmFpbGluZ0NvbW1lbnQoXG4gICAgICBub2RlLCB0cy5TeW50YXhLaW5kLk11bHRpTGluZUNvbW1lbnRUcml2aWEsIElHTk9SRV9NQVJLRVIsIC8qIGhhc1RyYWlsaW5nTmV3TGluZSAqLyBmYWxzZSk7XG59XG5cbi8qKlxuICogQWRkcyBhIHN5bnRoZXRpYyBjb21tZW50IHRvIHRoZSBleHByZXNzaW9uIHRoYXQgcmVwcmVzZW50cyB0aGUgcGFyc2Ugc3BhbiBvZiB0aGUgcHJvdmlkZWQgbm9kZS5cbiAqIFRoaXMgY29tbWVudCBjYW4gbGF0ZXIgYmUgcmV0cmlldmVkIGFzIHRyaXZpYSBvZiBhIG5vZGUgdG8gcmVjb3ZlciBvcmlnaW5hbCBzb3VyY2UgbG9jYXRpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFyc2VTcGFuSW5mbyhub2RlOiB0cy5Ob2RlLCBzcGFuOiBBYnNvbHV0ZVNvdXJjZVNwYW58UGFyc2VTb3VyY2VTcGFuKTogdm9pZCB7XG4gIGxldCBjb21tZW50VGV4dDogc3RyaW5nO1xuICBpZiAoc3BhbiBpbnN0YW5jZW9mIEFic29sdXRlU291cmNlU3Bhbikge1xuICAgIGNvbW1lbnRUZXh0ID0gYCR7c3Bhbi5zdGFydH0sJHtzcGFuLmVuZH1gO1xuICB9IGVsc2Uge1xuICAgIGNvbW1lbnRUZXh0ID0gYCR7c3Bhbi5zdGFydC5vZmZzZXR9LCR7c3Bhbi5lbmQub2Zmc2V0fWA7XG4gIH1cbiAgdHMuYWRkU3ludGhldGljVHJhaWxpbmdDb21tZW50KFxuICAgICAgbm9kZSwgdHMuU3ludGF4S2luZC5NdWx0aUxpbmVDb21tZW50VHJpdmlhLCBjb21tZW50VGV4dCwgLyogaGFzVHJhaWxpbmdOZXdMaW5lICovIGZhbHNlKTtcbn1cblxuLyoqXG4gKiBBZGRzIGEgc3ludGhldGljIGNvbW1lbnQgdG8gdGhlIGZ1bmN0aW9uIGRlY2xhcmF0aW9uIHRoYXQgY29udGFpbnMgdGhlIHRlbXBsYXRlIGlkXG4gKiBvZiB0aGUgY2xhc3MgZGVjbGFyYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUZW1wbGF0ZUlkKHRjYjogdHMuRnVuY3Rpb25EZWNsYXJhdGlvbiwgaWQ6IFRlbXBsYXRlSWQpOiB2b2lkIHtcbiAgdHMuYWRkU3ludGhldGljTGVhZGluZ0NvbW1lbnQodGNiLCB0cy5TeW50YXhLaW5kLk11bHRpTGluZUNvbW1lbnRUcml2aWEsIGlkLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBkaWFnbm9zdGljIHNob3VsZCBiZSByZXBvcnRlZC4gU29tZSBkaWFnbm9zdGljcyBhcmUgcHJvZHVjZWQgYmVjYXVzZSBvZiB0aGVcbiAqIHdheSBUQ0JzIGFyZSBnZW5lcmF0ZWQ7IHRob3NlIGRpYWdub3N0aWNzIHNob3VsZCBub3QgYmUgcmVwb3J0ZWQgYXMgdHlwZSBjaGVjayBlcnJvcnMgb2YgdGhlXG4gKiB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFJlcG9ydERpYWdub3N0aWMoZGlhZ25vc3RpYzogdHMuRGlhZ25vc3RpYyk6IGJvb2xlYW4ge1xuICBjb25zdCB7Y29kZX0gPSBkaWFnbm9zdGljO1xuICBpZiAoY29kZSA9PT0gNjEzMyAvKiAkdmFyIGlzIGRlY2xhcmVkIGJ1dCBpdHMgdmFsdWUgaXMgbmV2ZXIgcmVhZC4gKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoY29kZSA9PT0gNjE5OSAvKiBBbGwgdmFyaWFibGVzIGFyZSB1bnVzZWQuICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKGNvZGUgPT09IDI2OTUgLyogTGVmdCBzaWRlIG9mIGNvbW1hIG9wZXJhdG9yIGlzIHVudXNlZCBhbmQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoY29kZSA9PT0gNzAwNiAvKiBQYXJhbWV0ZXIgJyRldmVudCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gdHJhbnNsYXRlIGEgVHlwZVNjcmlwdCBkaWFnbm9zdGljIHByb2R1Y2VkIGR1cmluZyB0ZW1wbGF0ZSB0eXBlLWNoZWNraW5nIHRvIHRoZWlyXG4gKiBsb2NhdGlvbiBvZiBvcmlnaW4sIGJhc2VkIG9uIHRoZSBjb21tZW50cyB0aGF0IGFyZSBlbWl0dGVkIGluIHRoZSBUQ0IgY29kZS5cbiAqXG4gKiBJZiB0aGUgZGlhZ25vc3RpYyBjb3VsZCBub3QgYmUgdHJhbnNsYXRlZCwgYG51bGxgIGlzIHJldHVybmVkIHRvIGluZGljYXRlIHRoYXQgdGhlIGRpYWdub3N0aWNcbiAqIHNob3VsZCBub3QgYmUgcmVwb3J0ZWQgYXQgYWxsLiBUaGlzIHByZXZlbnRzIGRpYWdub3N0aWNzIGZyb20gbm9uLVRDQiBjb2RlIGluIGEgdXNlcidzIHNvdXJjZVxuICogZmlsZSBmcm9tIGJlaW5nIHJlcG9ydGVkIGFzIHR5cGUtY2hlY2sgZXJyb3JzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlRGlhZ25vc3RpYyhcbiAgICBkaWFnbm9zdGljOiB0cy5EaWFnbm9zdGljLCByZXNvbHZlcjogVGVtcGxhdGVTb3VyY2VSZXNvbHZlcik6IHRzLkRpYWdub3N0aWN8bnVsbCB7XG4gIGlmIChkaWFnbm9zdGljLmZpbGUgPT09IHVuZGVmaW5lZCB8fCBkaWFnbm9zdGljLnN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIExvY2F0ZSB0aGUgbm9kZSB0aGF0IHRoZSBkaWFnbm9zdGljIGlzIHJlcG9ydGVkIG9uIGFuZCBkZXRlcm1pbmUgaXRzIGxvY2F0aW9uIGluIHRoZSBzb3VyY2UuXG4gIGNvbnN0IG5vZGUgPSBnZXRUb2tlbkF0UG9zaXRpb24oZGlhZ25vc3RpYy5maWxlLCBkaWFnbm9zdGljLnN0YXJ0KTtcbiAgY29uc3Qgc291cmNlTG9jYXRpb24gPSBmaW5kU291cmNlTG9jYXRpb24obm9kZSwgZGlhZ25vc3RpYy5maWxlKTtcbiAgaWYgKHNvdXJjZUxvY2F0aW9uID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBOb3cgdXNlIHRoZSBleHRlcm5hbCByZXNvbHZlciB0byBvYnRhaW4gdGhlIGZ1bGwgYFBhcnNlU291cmNlRmlsZWAgb2YgdGhlIHRlbXBsYXRlLlxuICBjb25zdCBzcGFuID0gcmVzb2x2ZXIudG9QYXJzZVNvdXJjZVNwYW4oc291cmNlTG9jYXRpb24uaWQsIHNvdXJjZUxvY2F0aW9uLnNwYW4pO1xuICBpZiAoc3BhbiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbWFwcGluZyA9IHJlc29sdmVyLmdldFNvdXJjZU1hcHBpbmcoc291cmNlTG9jYXRpb24uaWQpO1xuICByZXR1cm4gbWFrZVRlbXBsYXRlRGlhZ25vc3RpYyhcbiAgICAgIG1hcHBpbmcsIHNwYW4sIGRpYWdub3N0aWMuY2F0ZWdvcnksIGRpYWdub3N0aWMuY29kZSwgZGlhZ25vc3RpYy5tZXNzYWdlVGV4dCk7XG59XG5cbi8qKlxuICogQ29uc3RydWN0cyBhIGB0cy5EaWFnbm9zdGljYCBmb3IgYSBnaXZlbiBgUGFyc2VTb3VyY2VTcGFuYCB3aXRoaW4gYSB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUZW1wbGF0ZURpYWdub3N0aWMoXG4gICAgbWFwcGluZzogVGVtcGxhdGVTb3VyY2VNYXBwaW5nLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sIGNhdGVnb3J5OiB0cy5EaWFnbm9zdGljQ2F0ZWdvcnksXG4gICAgY29kZTogbnVtYmVyLCBtZXNzYWdlVGV4dDogc3RyaW5nfHRzLkRpYWdub3N0aWNNZXNzYWdlQ2hhaW4sIHJlbGF0ZWRNZXNzYWdlPzoge1xuICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgc3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgIH0pOiBUZW1wbGF0ZURpYWdub3N0aWMge1xuICBpZiAobWFwcGluZy50eXBlID09PSAnZGlyZWN0Jykge1xuICAgIGxldCByZWxhdGVkSW5mb3JtYXRpb246IHRzLkRpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb25bXXx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHJlbGF0ZWRNZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlbGF0ZWRJbmZvcm1hdGlvbiA9IFt7XG4gICAgICAgIGNhdGVnb3J5OiB0cy5EaWFnbm9zdGljQ2F0ZWdvcnkuTWVzc2FnZSxcbiAgICAgICAgY29kZTogMCxcbiAgICAgICAgZmlsZTogbWFwcGluZy5ub2RlLmdldFNvdXJjZUZpbGUoKSxcbiAgICAgICAgc3RhcnQ6IHJlbGF0ZWRNZXNzYWdlLnNwYW4uc3RhcnQub2Zmc2V0LFxuICAgICAgICBsZW5ndGg6IHJlbGF0ZWRNZXNzYWdlLnNwYW4uZW5kLm9mZnNldCAtIHJlbGF0ZWRNZXNzYWdlLnNwYW4uc3RhcnQub2Zmc2V0LFxuICAgICAgICBtZXNzYWdlVGV4dDogcmVsYXRlZE1lc3NhZ2UudGV4dCxcbiAgICAgIH1dO1xuICAgIH1cbiAgICAvLyBGb3IgZGlyZWN0IG1hcHBpbmdzLCB0aGUgZXJyb3IgaXMgc2hvd24gaW5saW5lIGFzIG5ndHNjIHdhcyBhYmxlIHRvIHBpbnBvaW50IGEgc3RyaW5nXG4gICAgLy8gY29uc3RhbnQgd2l0aGluIHRoZSBgQENvbXBvbmVudGAgZGVjb3JhdG9yIGZvciB0aGUgdGVtcGxhdGUuIFRoaXMgYWxsb3dzIHVzIHRvIG1hcCB0aGUgZXJyb3JcbiAgICAvLyBkaXJlY3RseSBpbnRvIHRoZSBieXRlcyBvZiB0aGUgc291cmNlIGZpbGUuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogJ25ndHNjJyxcbiAgICAgIGNvZGUsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIG1lc3NhZ2VUZXh0LFxuICAgICAgZmlsZTogbWFwcGluZy5ub2RlLmdldFNvdXJjZUZpbGUoKSxcbiAgICAgIGNvbXBvbmVudEZpbGU6IG1hcHBpbmcubm9kZS5nZXRTb3VyY2VGaWxlKCksXG4gICAgICBzdGFydDogc3Bhbi5zdGFydC5vZmZzZXQsXG4gICAgICBsZW5ndGg6IHNwYW4uZW5kLm9mZnNldCAtIHNwYW4uc3RhcnQub2Zmc2V0LFxuICAgICAgcmVsYXRlZEluZm9ybWF0aW9uLFxuICAgIH07XG4gIH0gZWxzZSBpZiAobWFwcGluZy50eXBlID09PSAnaW5kaXJlY3QnIHx8IG1hcHBpbmcudHlwZSA9PT0gJ2V4dGVybmFsJykge1xuICAgIC8vIEZvciBpbmRpcmVjdCBtYXBwaW5ncyAodGVtcGxhdGUgd2FzIGRlY2xhcmVkIGlubGluZSwgYnV0IG5ndHNjIGNvdWxkbid0IG1hcCBpdCBkaXJlY3RseVxuICAgIC8vIHRvIGEgc3RyaW5nIGNvbnN0YW50IGluIHRoZSBkZWNvcmF0b3IpLCB0aGUgY29tcG9uZW50J3MgZmlsZSBuYW1lIGlzIGdpdmVuIHdpdGggYSBzdWZmaXhcbiAgICAvLyBpbmRpY2F0aW5nIGl0J3Mgbm90IHRoZSBUUyBmaWxlIGJlaW5nIGRpc3BsYXllZCwgYnV0IGEgdGVtcGxhdGUuXG4gICAgLy8gRm9yIGV4dGVybmFsIHRlbW9wbGF0ZXMsIHRoZSBIVE1MIGZpbGVuYW1lIGlzIHVzZWQuXG4gICAgY29uc3QgY29tcG9uZW50U2YgPSBtYXBwaW5nLmNvbXBvbmVudENsYXNzLmdldFNvdXJjZUZpbGUoKTtcbiAgICBjb25zdCBjb21wb25lbnROYW1lID0gbWFwcGluZy5jb21wb25lbnRDbGFzcy5uYW1lLnRleHQ7XG4gICAgLy8gVE9ETyhhbHhodWIpOiByZW1vdmUgY2FzdCB3aGVuIFRTIGluIGczIHN1cHBvcnRzIHRoaXMgbmFycm93aW5nLlxuICAgIGNvbnN0IGZpbGVOYW1lID0gbWFwcGluZy50eXBlID09PSAnaW5kaXJlY3QnID9cbiAgICAgICAgYCR7Y29tcG9uZW50U2YuZmlsZU5hbWV9ICgke2NvbXBvbmVudE5hbWV9IHRlbXBsYXRlKWAgOlxuICAgICAgICAobWFwcGluZyBhcyBFeHRlcm5hbFRlbXBsYXRlU291cmNlTWFwcGluZykudGVtcGxhdGVVcmw7XG4gICAgLy8gVE9ETyhhbHhodWIpOiBpbnZlc3RpZ2F0ZSBjcmVhdGluZyBhIGZha2UgYHRzLlNvdXJjZUZpbGVgIGhlcmUgaW5zdGVhZCBvZiBpbnZva2luZyB0aGUgVFNcbiAgICAvLyBwYXJzZXIgYWdhaW5zdCB0aGUgdGVtcGxhdGUgKEhUTUwgaXMganVzdCByZWFsbHkgc3ludGFjdGljYWxseSBpbnZhbGlkIFR5cGVTY3JpcHQgY29kZSA7KS5cbiAgICAvLyBBbHNvIGludmVzdGlnYXRlIGNhY2hpbmcgdGhlIGZpbGUgdG8gYXZvaWQgcnVubmluZyB0aGUgcGFyc2VyIG11bHRpcGxlIHRpbWVzLlxuICAgIGNvbnN0IHNmID0gdHMuY3JlYXRlU291cmNlRmlsZShcbiAgICAgICAgZmlsZU5hbWUsIG1hcHBpbmcudGVtcGxhdGUsIHRzLlNjcmlwdFRhcmdldC5MYXRlc3QsIGZhbHNlLCB0cy5TY3JpcHRLaW5kLkpTWCk7XG5cbiAgICBsZXQgcmVsYXRlZEluZm9ybWF0aW9uOiB0cy5EaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uW10gPSBbXTtcbiAgICBpZiAocmVsYXRlZE1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVsYXRlZEluZm9ybWF0aW9uLnB1c2goe1xuICAgICAgICBjYXRlZ29yeTogdHMuRGlhZ25vc3RpY0NhdGVnb3J5Lk1lc3NhZ2UsXG4gICAgICAgIGNvZGU6IDAsXG4gICAgICAgIGZpbGU6IHNmLFxuICAgICAgICBzdGFydDogcmVsYXRlZE1lc3NhZ2Uuc3Bhbi5zdGFydC5vZmZzZXQsXG4gICAgICAgIGxlbmd0aDogcmVsYXRlZE1lc3NhZ2Uuc3Bhbi5lbmQub2Zmc2V0IC0gcmVsYXRlZE1lc3NhZ2Uuc3Bhbi5zdGFydC5vZmZzZXQsXG4gICAgICAgIG1lc3NhZ2VUZXh0OiByZWxhdGVkTWVzc2FnZS50ZXh0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVsYXRlZEluZm9ybWF0aW9uLnB1c2goe1xuICAgICAgY2F0ZWdvcnk6IHRzLkRpYWdub3N0aWNDYXRlZ29yeS5NZXNzYWdlLFxuICAgICAgY29kZTogMCxcbiAgICAgIGZpbGU6IGNvbXBvbmVudFNmLFxuICAgICAgLy8gbWFwcGluZy5ub2RlIHJlcHJlc2VudHMgZWl0aGVyIHRoZSAndGVtcGxhdGUnIG9yICd0ZW1wbGF0ZVVybCcgZXhwcmVzc2lvbi4gZ2V0U3RhcnQoKVxuICAgICAgLy8gYW5kIGdldEVuZCgpIGFyZSB1c2VkIGJlY2F1c2UgdGhleSBkb24ndCBpbmNsdWRlIHN1cnJvdW5kaW5nIHdoaXRlc3BhY2UuXG4gICAgICBzdGFydDogbWFwcGluZy5ub2RlLmdldFN0YXJ0KCksXG4gICAgICBsZW5ndGg6IG1hcHBpbmcubm9kZS5nZXRFbmQoKSAtIG1hcHBpbmcubm9kZS5nZXRTdGFydCgpLFxuICAgICAgbWVzc2FnZVRleHQ6IGBFcnJvciBvY2N1cnMgaW4gdGhlIHRlbXBsYXRlIG9mIGNvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9LmAsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc291cmNlOiAnbmd0c2MnLFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBjb2RlLFxuICAgICAgbWVzc2FnZVRleHQsXG4gICAgICBmaWxlOiBzZixcbiAgICAgIGNvbXBvbmVudEZpbGU6IGNvbXBvbmVudFNmLFxuICAgICAgc3RhcnQ6IHNwYW4uc3RhcnQub2Zmc2V0LFxuICAgICAgbGVuZ3RoOiBzcGFuLmVuZC5vZmZzZXQgLSBzcGFuLnN0YXJ0Lm9mZnNldCxcbiAgICAgIC8vIFNob3cgYSBzZWNvbmRhcnkgbWVzc2FnZSBpbmRpY2F0aW5nIHRoZSBjb21wb25lbnQgd2hvc2UgdGVtcGxhdGUgY29udGFpbnMgdGhlIGVycm9yLlxuICAgICAgcmVsYXRlZEluZm9ybWF0aW9uLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHNvdXJjZSBtYXBwaW5nIHR5cGU6ICR7KG1hcHBpbmcgYXMge3R5cGU6IHN0cmluZ30pLnR5cGV9YCk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFNvdXJjZUxvY2F0aW9uIHtcbiAgaWQ6IFRlbXBsYXRlSWQ7XG4gIHNwYW46IEFic29sdXRlU291cmNlU3Bhbjtcbn1cblxuLyoqXG4gKiBUcmF2ZXJzZXMgdXAgdGhlIEFTVCBzdGFydGluZyBmcm9tIHRoZSBnaXZlbiBub2RlIHRvIGV4dHJhY3QgdGhlIHNvdXJjZSBsb2NhdGlvbiBmcm9tIGNvbW1lbnRzXG4gKiB0aGF0IGhhdmUgYmVlbiBlbWl0dGVkIGludG8gdGhlIFRDQi4gSWYgdGhlIG5vZGUgZG9lcyBub3QgZXhpc3Qgd2l0aGluIGEgVENCLCBvciBpZiBhbiBpZ25vcmVcbiAqIG1hcmtlciBjb21tZW50IGlzIGZvdW5kIHVwIHRoZSB0cmVlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgbnVsbC5cbiAqL1xuZnVuY3Rpb24gZmluZFNvdXJjZUxvY2F0aW9uKG5vZGU6IHRzLk5vZGUsIHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUpOiBTb3VyY2VMb2NhdGlvbnxudWxsIHtcbiAgLy8gU2VhcmNoIGZvciBjb21tZW50cyB1bnRpbCB0aGUgVENCJ3MgZnVuY3Rpb24gZGVjbGFyYXRpb24gaXMgZW5jb3VudGVyZWQuXG4gIHdoaWxlIChub2RlICE9PSB1bmRlZmluZWQgJiYgIXRzLmlzRnVuY3Rpb25EZWNsYXJhdGlvbihub2RlKSkge1xuICAgIGlmIChoYXNJZ25vcmVNYXJrZXIobm9kZSwgc291cmNlRmlsZSkpIHtcbiAgICAgIC8vIFRoZXJlJ3MgYW4gaWdub3JlIG1hcmtlciBvbiB0aGlzIG5vZGUsIHNvIHRoZSBkaWFnbm9zdGljIHNob3VsZCBub3QgYmUgcmVwb3J0ZWQuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzcGFuID0gcmVhZFNwYW5Db21tZW50KHNvdXJjZUZpbGUsIG5vZGUpO1xuICAgIGlmIChzcGFuICE9PSBudWxsKSB7XG4gICAgICAvLyBPbmNlIHRoZSBwb3NpdGlvbmFsIGluZm9ybWF0aW9uIGhhcyBiZWVuIGV4dHJhY3RlZCwgc2VhcmNoIGZ1cnRoZXIgdXAgdGhlIFRDQiB0byBleHRyYWN0XG4gICAgICAvLyB0aGUgdW5pcXVlIGlkIHRoYXQgaXMgYXR0YWNoZWQgd2l0aCB0aGUgVENCJ3MgZnVuY3Rpb24gZGVjbGFyYXRpb24uXG4gICAgICBjb25zdCBpZCA9IGdldFRlbXBsYXRlSWQobm9kZSwgc291cmNlRmlsZSk7XG4gICAgICBpZiAoaWQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4ge2lkLCBzcGFufTtcbiAgICB9XG5cbiAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0VGVtcGxhdGVJZChub2RlOiB0cy5Ob2RlLCBzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlKTogVGVtcGxhdGVJZHxudWxsIHtcbiAgLy8gV2FsayB1cCB0byB0aGUgZnVuY3Rpb24gZGVjbGFyYXRpb24gb2YgdGhlIFRDQiwgdGhlIGZpbGUgaW5mb3JtYXRpb24gaXMgYXR0YWNoZWQgdGhlcmUuXG4gIHdoaWxlICghdHMuaXNGdW5jdGlvbkRlY2xhcmF0aW9uKG5vZGUpKSB7XG4gICAgaWYgKGhhc0lnbm9yZU1hcmtlcihub2RlLCBzb3VyY2VGaWxlKSkge1xuICAgICAgLy8gVGhlcmUncyBhbiBpZ25vcmUgbWFya2VyIG9uIHRoaXMgbm9kZSwgc28gdGhlIGRpYWdub3N0aWMgc2hvdWxkIG5vdCBiZSByZXBvcnRlZC5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG5cbiAgICAvLyBCYWlsIG9uY2Ugd2UgaGF2ZSByZWFjaGVkIHRoZSByb290LlxuICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gbm9kZS5nZXRGdWxsU3RhcnQoKTtcbiAgcmV0dXJuIHRzLmZvckVhY2hMZWFkaW5nQ29tbWVudFJhbmdlKHNvdXJjZUZpbGUudGV4dCwgc3RhcnQsIChwb3MsIGVuZCwga2luZCkgPT4ge1xuICAgIGlmIChraW5kICE9PSB0cy5TeW50YXhLaW5kLk11bHRpTGluZUNvbW1lbnRUcml2aWEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb21tZW50VGV4dCA9IHNvdXJjZUZpbGUudGV4dC5zdWJzdHJpbmcocG9zICsgMiwgZW5kIC0gMik7XG4gICAgcmV0dXJuIGNvbW1lbnRUZXh0O1xuICB9KSBhcyBUZW1wbGF0ZUlkIHx8IG51bGw7XG59XG5cbmNvbnN0IHBhcnNlU3BhbkNvbW1lbnQgPSAvXihcXGQrKSwoXFxkKykkLztcblxuZnVuY3Rpb24gcmVhZFNwYW5Db21tZW50KHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUsIG5vZGU6IHRzLk5vZGUpOiBBYnNvbHV0ZVNvdXJjZVNwYW58bnVsbCB7XG4gIHJldHVybiB0cy5mb3JFYWNoVHJhaWxpbmdDb21tZW50UmFuZ2Uoc291cmNlRmlsZS50ZXh0LCBub2RlLmdldEVuZCgpLCAocG9zLCBlbmQsIGtpbmQpID0+IHtcbiAgICBpZiAoa2luZCAhPT0gdHMuU3ludGF4S2luZC5NdWx0aUxpbmVDb21tZW50VHJpdmlhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29tbWVudFRleHQgPSBzb3VyY2VGaWxlLnRleHQuc3Vic3RyaW5nKHBvcyArIDIsIGVuZCAtIDIpO1xuICAgIGNvbnN0IG1hdGNoID0gY29tbWVudFRleHQubWF0Y2gocGFyc2VTcGFuQ29tbWVudCk7XG4gICAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEFic29sdXRlU291cmNlU3BhbigrbWF0Y2hbMV0sICttYXRjaFsyXSk7XG4gIH0pIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIGhhc0lnbm9yZU1hcmtlcihub2RlOiB0cy5Ob2RlLCBzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlKTogYm9vbGVhbiB7XG4gIHJldHVybiB0cy5mb3JFYWNoVHJhaWxpbmdDb21tZW50UmFuZ2Uoc291cmNlRmlsZS50ZXh0LCBub2RlLmdldEVuZCgpLCAocG9zLCBlbmQsIGtpbmQpID0+IHtcbiAgICBpZiAoa2luZCAhPT0gdHMuU3ludGF4S2luZC5NdWx0aUxpbmVDb21tZW50VHJpdmlhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29tbWVudFRleHQgPSBzb3VyY2VGaWxlLnRleHQuc3Vic3RyaW5nKHBvcyArIDIsIGVuZCAtIDIpO1xuICAgIHJldHVybiBjb21tZW50VGV4dCA9PT0gSUdOT1JFX01BUktFUjtcbiAgfSkgPT09IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RlbXBsYXRlRGlhZ25vc3RpYyhkaWFnbm9zdGljOiB0cy5EaWFnbm9zdGljKTogZGlhZ25vc3RpYyBpcyBUZW1wbGF0ZURpYWdub3N0aWMge1xuICByZXR1cm4gZGlhZ25vc3RpYy5oYXNPd25Qcm9wZXJ0eSgnY29tcG9uZW50RmlsZScpICYmXG4gICAgICB0cy5pc1NvdXJjZUZpbGUoKGRpYWdub3N0aWMgYXMgYW55KS5jb21wb25lbnRGaWxlKTtcbn1cbiJdfQ==