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
        define("@angular/compiler-cli/src/ngtsc/metadata/src/util", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/src/ngtsc/reflection", "@angular/compiler-cli/src/ngtsc/util/src/typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var reflection_1 = require("@angular/compiler-cli/src/ngtsc/reflection");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    function extractReferencesFromType(checker, def, ngModuleImportedFrom, resolutionContext) {
        if (!ts.isTupleTypeNode(def)) {
            return [];
        }
        return def.elementTypes.map(function (element) {
            if (!ts.isTypeQueryNode(element)) {
                throw new Error("Expected TypeQueryNode: " + typescript_1.nodeDebugInfo(element));
            }
            var type = element.exprName;
            var _a = reflection_1.reflectTypeEntityToDeclaration(type, checker), node = _a.node, from = _a.from;
            if (!reflection_1.isNamedClassDeclaration(node)) {
                throw new Error("Expected named ClassDeclaration: " + typescript_1.nodeDebugInfo(node));
            }
            var specifier = (from !== null && !from.startsWith('.') ? from : ngModuleImportedFrom);
            if (specifier !== null) {
                return new imports_1.Reference(node, { specifier: specifier, resolutionContext: resolutionContext });
            }
            else {
                return new imports_1.Reference(node);
            }
        });
    }
    exports.extractReferencesFromType = extractReferencesFromType;
    function readStringType(type) {
        if (!ts.isLiteralTypeNode(type) || !ts.isStringLiteral(type.literal)) {
            return null;
        }
        return type.literal.text;
    }
    exports.readStringType = readStringType;
    function readStringMapType(type) {
        if (!ts.isTypeLiteralNode(type)) {
            return {};
        }
        var obj = {};
        type.members.forEach(function (member) {
            if (!ts.isPropertySignature(member) || member.type === undefined || member.name === undefined ||
                !ts.isStringLiteral(member.name)) {
                return;
            }
            var value = readStringType(member.type);
            if (value === null) {
                return null;
            }
            obj[member.name.text] = value;
        });
        return obj;
    }
    exports.readStringMapType = readStringMapType;
    function readStringArrayType(type) {
        if (!ts.isTupleTypeNode(type)) {
            return [];
        }
        var res = [];
        type.elementTypes.forEach(function (el) {
            if (!ts.isLiteralTypeNode(el) || !ts.isStringLiteral(el.literal)) {
                return;
            }
            res.push(el.literal.text);
        });
        return res;
    }
    exports.readStringArrayType = readStringArrayType;
    function extractDirectiveGuards(node, reflector) {
        var staticMembers = reflector.getMembersOfClass(node).filter(function (member) { return member.isStatic; });
        var ngTemplateGuards = staticMembers.map(extractTemplateGuard)
            .filter(function (guard) { return guard !== null; });
        var hasNgTemplateContextGuard = staticMembers.some(function (member) { return member.kind === reflection_1.ClassMemberKind.Method && member.name === 'ngTemplateContextGuard'; });
        var coercedInputFields = new Set(staticMembers.map(extractCoercedInput)
            .filter(function (inputName) { return inputName !== null; }));
        return { hasNgTemplateContextGuard: hasNgTemplateContextGuard, ngTemplateGuards: ngTemplateGuards, coercedInputFields: coercedInputFields };
    }
    exports.extractDirectiveGuards = extractDirectiveGuards;
    function extractTemplateGuard(member) {
        if (!member.name.startsWith('ngTemplateGuard_')) {
            return null;
        }
        var inputName = afterUnderscore(member.name);
        if (member.kind === reflection_1.ClassMemberKind.Property) {
            var type = null;
            if (member.type !== null && ts.isLiteralTypeNode(member.type) &&
                ts.isStringLiteral(member.type.literal)) {
                type = member.type.literal.text;
            }
            // Only property members with string literal type 'binding' are considered as template guard.
            if (type !== 'binding') {
                return null;
            }
            return { inputName: inputName, type: type };
        }
        else if (member.kind === reflection_1.ClassMemberKind.Method) {
            return { inputName: inputName, type: 'invocation' };
        }
        else {
            return null;
        }
    }
    function extractCoercedInput(member) {
        if (member.kind !== reflection_1.ClassMemberKind.Property || !member.name.startsWith('ngAcceptInputType_')) {
            return null;
        }
        return afterUnderscore(member.name);
    }
    /**
     * A `MetadataReader` that reads from an ordered set of child readers until it obtains the requested
     * metadata.
     *
     * This is used to combine `MetadataReader`s that read from different sources (e.g. from a registry
     * and from .d.ts files).
     */
    var CompoundMetadataReader = /** @class */ (function () {
        function CompoundMetadataReader(readers) {
            this.readers = readers;
        }
        CompoundMetadataReader.prototype.getDirectiveMetadata = function (node) {
            var e_1, _a;
            try {
                for (var _b = tslib_1.__values(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var reader = _c.value;
                    var meta = reader.getDirectiveMetadata(node);
                    if (meta !== null) {
                        return meta;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        };
        CompoundMetadataReader.prototype.getNgModuleMetadata = function (node) {
            var e_2, _a;
            try {
                for (var _b = tslib_1.__values(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var reader = _c.value;
                    var meta = reader.getNgModuleMetadata(node);
                    if (meta !== null) {
                        return meta;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return null;
        };
        CompoundMetadataReader.prototype.getPipeMetadata = function (node) {
            var e_3, _a;
            try {
                for (var _b = tslib_1.__values(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var reader = _c.value;
                    var meta = reader.getPipeMetadata(node);
                    if (meta !== null) {
                        return meta;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return null;
        };
        return CompoundMetadataReader;
    }());
    exports.CompoundMetadataReader = CompoundMetadataReader;
    function afterUnderscore(str) {
        var pos = str.indexOf('_');
        if (pos === -1) {
            throw new Error("Expected '" + str + "' to contain '_'");
        }
        return str.substr(pos + 1);
    }
    /** Returns whether a class declaration has the necessary class fields to make it injectable. */
    function hasInjectableFields(clazz, host) {
        var members = host.getMembersOfClass(clazz);
        return members.some(function (_a) {
            var isStatic = _a.isStatic, name = _a.name;
            return isStatic && (name === 'ɵprov' || name === 'ɵfac' || name === 'ɵinj');
        });
    }
    exports.hasInjectableFields = hasInjectableFields;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvbWV0YWRhdGEvc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsK0JBQWlDO0lBRWpDLG1FQUF3QztJQUN4Qyx5RUFBeUo7SUFDekosa0ZBQXdEO0lBSXhELFNBQWdCLHlCQUF5QixDQUNyQyxPQUF1QixFQUFFLEdBQWdCLEVBQUUsb0JBQWlDLEVBQzVFLGlCQUF5QjtRQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU87WUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTJCLDBCQUFhLENBQUMsT0FBTyxDQUFHLENBQUMsQ0FBQzthQUN0RTtZQUNELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDeEIsSUFBQSwrREFBNEQsRUFBM0QsY0FBSSxFQUFFLGNBQXFELENBQUM7WUFDbkUsSUFBSSxDQUFDLG9DQUF1QixDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFvQywwQkFBYSxDQUFDLElBQUksQ0FBRyxDQUFDLENBQUM7YUFDNUU7WUFDRCxJQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDekYsSUFBSSxT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QUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLENBQUM7UUFBcEUsQ0FBb0UsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFKRCxrREFJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICcuLi8uLi9pbXBvcnRzJztcbmltcG9ydCB7Q2xhc3NEZWNsYXJhdGlvbiwgQ2xhc3NNZW1iZXIsIENsYXNzTWVtYmVyS2luZCwgaXNOYW1lZENsYXNzRGVjbGFyYXRpb24sIFJlZmxlY3Rpb25Ib3N0LCByZWZsZWN0VHlwZUVudGl0eVRvRGVjbGFyYXRpb259IGZyb20gJy4uLy4uL3JlZmxlY3Rpb24nO1xuaW1wb3J0IHtub2RlRGVidWdJbmZvfSBmcm9tICcuLi8uLi91dGlsL3NyYy90eXBlc2NyaXB0JztcblxuaW1wb3J0IHtEaXJlY3RpdmVNZXRhLCBNZXRhZGF0YVJlYWRlciwgTmdNb2R1bGVNZXRhLCBQaXBlTWV0YSwgVGVtcGxhdGVHdWFyZE1ldGF9IGZyb20gJy4vYXBpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RSZWZlcmVuY2VzRnJvbVR5cGUoXG4gICAgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsIGRlZjogdHMuVHlwZU5vZGUsIG5nTW9kdWxlSW1wb3J0ZWRGcm9tOiBzdHJpbmd8bnVsbCxcbiAgICByZXNvbHV0aW9uQ29udGV4dDogc3RyaW5nKTogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+W10ge1xuICBpZiAoIXRzLmlzVHVwbGVUeXBlTm9kZShkZWYpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBkZWYuZWxlbWVudFR5cGVzLm1hcChlbGVtZW50ID0+IHtcbiAgICBpZiAoIXRzLmlzVHlwZVF1ZXJ5Tm9kZShlbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBUeXBlUXVlcnlOb2RlOiAke25vZGVEZWJ1Z0luZm8oZWxlbWVudCl9YCk7XG4gICAgfVxuICAgIGNvbnN0IHR5cGUgPSBlbGVtZW50LmV4cHJOYW1lO1xuICAgIGNvbnN0IHtub2RlLCBmcm9tfSA9IHJlZmxlY3RUeXBlRW50aXR5VG9EZWNsYXJhdGlvbih0eXBlLCBjaGVja2VyKTtcbiAgICBpZiAoIWlzTmFtZWRDbGFzc0RlY2xhcmF0aW9uKG5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIG5hbWVkIENsYXNzRGVjbGFyYXRpb246ICR7bm9kZURlYnVnSW5mbyhub2RlKX1gKTtcbiAgICB9XG4gICAgY29uc3Qgc3BlY2lmaWVyID0gKGZyb20gIT09IG51bGwgJiYgIWZyb20uc3RhcnRzV2l0aCgnLicpID8gZnJvbSA6IG5nTW9kdWxlSW1wb3J0ZWRGcm9tKTtcbiAgICBpZiAoc3BlY2lmaWVyICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZShub2RlLCB7c3BlY2lmaWVyLCByZXNvbHV0aW9uQ29udGV4dH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZShub2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFN0cmluZ1R5cGUodHlwZTogdHMuVHlwZU5vZGUpOiBzdHJpbmd8bnVsbCB7XG4gIGlmICghdHMuaXNMaXRlcmFsVHlwZU5vZGUodHlwZSkgfHwgIXRzLmlzU3RyaW5nTGl0ZXJhbCh0eXBlLmxpdGVyYWwpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHR5cGUubGl0ZXJhbC50ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZFN0cmluZ01hcFR5cGUodHlwZTogdHMuVHlwZU5vZGUpOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSB7XG4gIGlmICghdHMuaXNUeXBlTGl0ZXJhbE5vZGUodHlwZSkpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgY29uc3Qgb2JqOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICB0eXBlLm1lbWJlcnMuZm9yRWFjaChtZW1iZXIgPT4ge1xuICAgIGlmICghdHMuaXNQcm9wZXJ0eVNpZ25hdHVyZShtZW1iZXIpIHx8IG1lbWJlci50eXBlID09PSB1bmRlZmluZWQgfHwgbWVtYmVyLm5hbWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAhdHMuaXNTdHJpbmdMaXRlcmFsKG1lbWJlci5uYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHJlYWRTdHJpbmdUeXBlKG1lbWJlci50eXBlKTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBvYmpbbWVtYmVyLm5hbWUudGV4dF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkU3RyaW5nQXJyYXlUeXBlKHR5cGU6IHRzLlR5cGVOb2RlKTogc3RyaW5nW10ge1xuICBpZiAoIXRzLmlzVHVwbGVUeXBlTm9kZSh0eXBlKSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCByZXM6IHN0cmluZ1tdID0gW107XG4gIHR5cGUuZWxlbWVudFR5cGVzLmZvckVhY2goZWwgPT4ge1xuICAgIGlmICghdHMuaXNMaXRlcmFsVHlwZU5vZGUoZWwpIHx8ICF0cy5pc1N0cmluZ0xpdGVyYWwoZWwubGl0ZXJhbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzLnB1c2goZWwubGl0ZXJhbC50ZXh0KTtcbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3REaXJlY3RpdmVHdWFyZHMobm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgcmVmbGVjdG9yOiBSZWZsZWN0aW9uSG9zdCk6IHtcbiAgbmdUZW1wbGF0ZUd1YXJkczogVGVtcGxhdGVHdWFyZE1ldGFbXSxcbiAgaGFzTmdUZW1wbGF0ZUNvbnRleHRHdWFyZDogYm9vbGVhbixcbiAgY29lcmNlZElucHV0RmllbGRzOiBTZXQ8c3RyaW5nPixcbn0ge1xuICBjb25zdCBzdGF0aWNNZW1iZXJzID0gcmVmbGVjdG9yLmdldE1lbWJlcnNPZkNsYXNzKG5vZGUpLmZpbHRlcihtZW1iZXIgPT4gbWVtYmVyLmlzU3RhdGljKTtcbiAgY29uc3QgbmdUZW1wbGF0ZUd1YXJkcyA9IHN0YXRpY01lbWJlcnMubWFwKGV4dHJhY3RUZW1wbGF0ZUd1YXJkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGd1YXJkKTogZ3VhcmQgaXMgVGVtcGxhdGVHdWFyZE1ldGEgPT4gZ3VhcmQgIT09IG51bGwpO1xuICBjb25zdCBoYXNOZ1RlbXBsYXRlQ29udGV4dEd1YXJkID0gc3RhdGljTWVtYmVycy5zb21lKFxuICAgICAgbWVtYmVyID0+IG1lbWJlci5raW5kID09PSBDbGFzc01lbWJlcktpbmQuTWV0aG9kICYmIG1lbWJlci5uYW1lID09PSAnbmdUZW1wbGF0ZUNvbnRleHRHdWFyZCcpO1xuXG4gIGNvbnN0IGNvZXJjZWRJbnB1dEZpZWxkcyA9XG4gICAgICBuZXcgU2V0KHN0YXRpY01lbWJlcnMubWFwKGV4dHJhY3RDb2VyY2VkSW5wdXQpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChpbnB1dE5hbWUpOiBpbnB1dE5hbWUgaXMgc3RyaW5nID0+IGlucHV0TmFtZSAhPT0gbnVsbCkpO1xuICByZXR1cm4ge2hhc05nVGVtcGxhdGVDb250ZXh0R3VhcmQsIG5nVGVtcGxhdGVHdWFyZHMsIGNvZXJjZWRJbnB1dEZpZWxkc307XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RUZW1wbGF0ZUd1YXJkKG1lbWJlcjogQ2xhc3NNZW1iZXIpOiBUZW1wbGF0ZUd1YXJkTWV0YXxudWxsIHtcbiAgaWYgKCFtZW1iZXIubmFtZS5zdGFydHNXaXRoKCduZ1RlbXBsYXRlR3VhcmRfJykpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBpbnB1dE5hbWUgPSBhZnRlclVuZGVyc2NvcmUobWVtYmVyLm5hbWUpO1xuICBpZiAobWVtYmVyLmtpbmQgPT09IENsYXNzTWVtYmVyS2luZC5Qcm9wZXJ0eSkge1xuICAgIGxldCB0eXBlOiBzdHJpbmd8bnVsbCA9IG51bGw7XG4gICAgaWYgKG1lbWJlci50eXBlICE9PSBudWxsICYmIHRzLmlzTGl0ZXJhbFR5cGVOb2RlKG1lbWJlci50eXBlKSAmJlxuICAgICAgICB0cy5pc1N0cmluZ0xpdGVyYWwobWVtYmVyLnR5cGUubGl0ZXJhbCkpIHtcbiAgICAgIHR5cGUgPSBtZW1iZXIudHlwZS5saXRlcmFsLnRleHQ7XG4gICAgfVxuXG4gICAgLy8gT25seSBwcm9wZXJ0eSBtZW1iZXJzIHdpdGggc3RyaW5nIGxpdGVyYWwgdHlwZSAnYmluZGluZycgYXJlIGNvbnNpZGVyZWQgYXMgdGVtcGxhdGUgZ3VhcmQuXG4gICAgaWYgKHR5cGUgIT09ICdiaW5kaW5nJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7aW5wdXROYW1lLCB0eXBlfTtcbiAgfSBlbHNlIGlmIChtZW1iZXIua2luZCA9PT0gQ2xhc3NNZW1iZXJLaW5kLk1ldGhvZCkge1xuICAgIHJldHVybiB7aW5wdXROYW1lLCB0eXBlOiAnaW52b2NhdGlvbid9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RDb2VyY2VkSW5wdXQobWVtYmVyOiBDbGFzc01lbWJlcik6IHN0cmluZ3xudWxsIHtcbiAgaWYgKG1lbWJlci5raW5kICE9PSBDbGFzc01lbWJlcktpbmQuUHJvcGVydHkgfHwgIW1lbWJlci5uYW1lLnN0YXJ0c1dpdGgoJ25nQWNjZXB0SW5wdXRUeXBlXycpKSB7XG4gICAgcmV0dXJuIG51bGwhO1xuICB9XG4gIHJldHVybiBhZnRlclVuZGVyc2NvcmUobWVtYmVyLm5hbWUpO1xufVxuXG4vKipcbiAqIEEgYE1ldGFkYXRhUmVhZGVyYCB0aGF0IHJlYWRzIGZyb20gYW4gb3JkZXJlZCBzZXQgb2YgY2hpbGQgcmVhZGVycyB1bnRpbCBpdCBvYnRhaW5zIHRoZSByZXF1ZXN0ZWRcbiAqIG1ldGFkYXRhLlxuICpcbiAqIFRoaXMgaXMgdXNlZCB0byBjb21iaW5lIGBNZXRhZGF0YVJlYWRlcmBzIHRoYXQgcmVhZCBmcm9tIGRpZmZlcmVudCBzb3VyY2VzIChlLmcuIGZyb20gYSByZWdpc3RyeVxuICogYW5kIGZyb20gLmQudHMgZmlsZXMpLlxuICovXG5leHBvcnQgY2xhc3MgQ29tcG91bmRNZXRhZGF0YVJlYWRlciBpbXBsZW1lbnRzIE1ldGFkYXRhUmVhZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkZXJzOiBNZXRhZGF0YVJlYWRlcltdKSB7fVxuXG4gIGdldERpcmVjdGl2ZU1ldGFkYXRhKG5vZGU6IFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPHRzLkRlY2xhcmF0aW9uPj4pOiBEaXJlY3RpdmVNZXRhfG51bGwge1xuICAgIGZvciAoY29uc3QgcmVhZGVyIG9mIHRoaXMucmVhZGVycykge1xuICAgICAgY29uc3QgbWV0YSA9IHJlYWRlci5nZXREaXJlY3RpdmVNZXRhZGF0YShub2RlKTtcbiAgICAgIGlmIChtZXRhICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldE5nTW9kdWxlTWV0YWRhdGEobm9kZTogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb248dHMuRGVjbGFyYXRpb24+Pik6IE5nTW9kdWxlTWV0YXxudWxsIHtcbiAgICBmb3IgKGNvbnN0IHJlYWRlciBvZiB0aGlzLnJlYWRlcnMpIHtcbiAgICAgIGNvbnN0IG1ldGEgPSByZWFkZXIuZ2V0TmdNb2R1bGVNZXRhZGF0YShub2RlKTtcbiAgICAgIGlmIChtZXRhICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBnZXRQaXBlTWV0YWRhdGEobm9kZTogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb248dHMuRGVjbGFyYXRpb24+Pik6IFBpcGVNZXRhfG51bGwge1xuICAgIGZvciAoY29uc3QgcmVhZGVyIG9mIHRoaXMucmVhZGVycykge1xuICAgICAgY29uc3QgbWV0YSA9IHJlYWRlci5nZXRQaXBlTWV0YWRhdGEobm9kZSk7XG4gICAgICBpZiAobWV0YSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbWV0YTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWZ0ZXJVbmRlcnNjb3JlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgcG9zID0gc3RyLmluZGV4T2YoJ18nKTtcbiAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkICcke3N0cn0nIHRvIGNvbnRhaW4gJ18nYCk7XG4gIH1cbiAgcmV0dXJuIHN0ci5zdWJzdHIocG9zICsgMSk7XG59XG5cbi8qKiBSZXR1cm5zIHdoZXRoZXIgYSBjbGFzcyBkZWNsYXJhdGlvbiBoYXMgdGhlIG5lY2Vzc2FyeSBjbGFzcyBmaWVsZHMgdG8gbWFrZSBpdCBpbmplY3RhYmxlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0luamVjdGFibGVGaWVsZHMoY2xheno6IENsYXNzRGVjbGFyYXRpb24sIGhvc3Q6IFJlZmxlY3Rpb25Ib3N0KTogYm9vbGVhbiB7XG4gIGNvbnN0IG1lbWJlcnMgPSBob3N0LmdldE1lbWJlcnNPZkNsYXNzKGNsYXp6KTtcbiAgcmV0dXJuIG1lbWJlcnMuc29tZShcbiAgICAgICh7aXNTdGF0aWMsIG5hbWV9KSA9PiBpc1N0YXRpYyAmJiAobmFtZSA9PT0gJ8m1cHJvdicgfHwgbmFtZSA9PT0gJ8m1ZmFjJyB8fCBuYW1lID09PSAnybVpbmonKSk7XG59XG4iXX0=