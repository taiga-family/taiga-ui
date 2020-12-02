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
        define("@angular/compiler-cli/src/transformers/r3_strip_decorators", ["require", "exports", "typescript", "@angular/compiler-cli/src/metadata/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    var metadata_1 = require("@angular/compiler-cli/src/metadata/index");
    function getDecoratorStripTransformerFactory(coreDecorators, reflector, checker) {
        return function (context) {
            return function (sourceFile) {
                var stripDecoratorsFromClassDeclaration = function (node) {
                    if (node.decorators === undefined) {
                        return node;
                    }
                    var decorators = node.decorators.filter(function (decorator) {
                        var callExpr = decorator.expression;
                        if (ts.isCallExpression(callExpr)) {
                            var id = callExpr.expression;
                            if (ts.isIdentifier(id)) {
                                var symbol = resolveToStaticSymbol(id, sourceFile.fileName, reflector, checker);
                                return symbol && coreDecorators.has(symbol);
                            }
                        }
                        return true;
                    });
                    if (decorators.length !== node.decorators.length) {
                        return ts.updateClassDeclaration(node, decorators, node.modifiers, node.name, node.typeParameters, node.heritageClauses || [], node.members);
                    }
                    return node;
                };
                var stripDecoratorPropertyAssignment = function (node) {
                    return ts.visitEachChild(node, function (member) {
                        if (!ts.isPropertyDeclaration(member) || !isDecoratorAssignment(member) ||
                            !member.initializer || !ts.isArrayLiteralExpression(member.initializer)) {
                            return member;
                        }
                        var newInitializer = ts.visitEachChild(member.initializer, function (decorator) {
                            if (!ts.isObjectLiteralExpression(decorator)) {
                                return decorator;
                            }
                            var type = lookupProperty(decorator, 'type');
                            if (!type || !ts.isIdentifier(type)) {
                                return decorator;
                            }
                            var symbol = resolveToStaticSymbol(type, sourceFile.fileName, reflector, checker);
                            if (!symbol || !coreDecorators.has(symbol)) {
                                return decorator;
                            }
                            return undefined;
                        }, context);
                        if (newInitializer === member.initializer) {
                            return member;
                        }
                        else if (newInitializer.elements.length === 0) {
                            return undefined;
                        }
                        else {
                            return ts.updateProperty(member, member.decorators, member.modifiers, member.name, member.questionToken, member.type, newInitializer);
                        }
                    }, context);
                };
                return ts.visitEachChild(sourceFile, function (stmt) {
                    if (ts.isClassDeclaration(stmt)) {
                        var decl = stmt;
                        if (stmt.decorators) {
                            decl = stripDecoratorsFromClassDeclaration(stmt);
                        }
                        return stripDecoratorPropertyAssignment(decl);
                    }
                    return stmt;
                }, context);
            };
        };
    }
    exports.getDecoratorStripTransformerFactory = getDecoratorStripTransformerFactory;
    function isDecoratorAssignment(member) {
        if (!ts.isPropertyDeclaration(member)) {
            return false;
        }
        if (!member.modifiers ||
            !member.modifiers.some(function (mod) { return mod.kind === ts.SyntaxKind.StaticKeyword; })) {
            return false;
        }
        if (!ts.isIdentifier(member.name) || member.name.text !== 'decorators') {
            return false;
        }
        if (!member.initializer || !ts.isArrayLiteralExpression(member.initializer)) {
            return false;
        }
        return true;
    }
    function lookupProperty(expr, prop) {
        var decl = expr.properties.find(function (elem) { return !!elem.name && ts.isIdentifier(elem.name) && elem.name.text === prop; });
        if (decl === undefined || !ts.isPropertyAssignment(decl)) {
            return undefined;
        }
        return decl.initializer;
    }
    function resolveToStaticSymbol(id, containingFile, reflector, checker) {
        var res = checker.getSymbolAtLocation(id);
        if (!res || !res.declarations || res.declarations.length === 0) {
            return null;
        }
        var decl = res.declarations[0];
        if (!ts.isImportSpecifier(decl)) {
            return null;
        }
        var moduleSpecifier = decl.parent.parent.parent.moduleSpecifier;
        if (!ts.isStringLiteral(moduleSpecifier)) {
            return null;
        }
        return reflector.tryFindDeclaration(moduleSpecifier.text, id.text, containingFile);
    }
    var StripDecoratorsMetadataTransformer = /** @class */ (function () {
        function StripDecoratorsMetadataTransformer(coreDecorators, reflector) {
            this.coreDecorators = coreDecorators;
            this.reflector = reflector;
        }
        StripDecoratorsMetadataTransformer.prototype.start = function (sourceFile) {
            var _this = this;
            return function (value, node) {
                if (metadata_1.isClassMetadata(value) && ts.isClassDeclaration(node) && value.decorators) {
                    value.decorators = value.decorators.filter(function (d) {
                        if (metadata_1.isMetadataSymbolicCallExpression(d) &&
                            metadata_1.isMetadataImportedSymbolReferenceExpression(d.expression)) {
                            var declaration = _this.reflector.tryFindDeclaration(d.expression.module, d.expression.name, sourceFile.fileName);
                            if (declaration && _this.coreDecorators.has(declaration)) {
                                return false;
                            }
                        }
                        return true;
                    });
                }
                return value;
            };
        };
        return StripDecoratorsMetadataTransformer;
    }());
    exports.StripDecoratorsMetadataTransformer = StripDecoratorsMetadataTransformer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjNfc3RyaXBfZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvdHJhbnNmb3JtZXJzL3IzX3N0cmlwX2RlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFHSCwrQkFBaUM7SUFFakMscUVBQTBJO0lBTzFJLFNBQWdCLG1DQUFtQyxDQUMvQyxjQUFpQyxFQUFFLFNBQTBCLEVBQzdELE9BQXVCO1FBQ3pCLE9BQU8sVUFBUyxPQUFpQztZQUMvQyxPQUFPLFVBQVMsVUFBeUI7Z0JBQ3ZDLElBQU0sbUNBQW1DLEdBQ3JDLFVBQUMsSUFBeUI7b0JBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7d0JBQ2pDLE9BQU8sSUFBSSxDQUFDO3FCQUNiO29CQUNELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsU0FBUzt3QkFDakQsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQzt3QkFDdEMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUU7NEJBQ2pDLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7NEJBQy9CLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQ0FDdkIsSUFBTSxNQUFNLEdBQUcscUJBQXFCLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dDQUNsRixPQUFPLE1BQU0sSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZCQUM3Qzt5QkFDRjt3QkFDRCxPQUFPLElBQUksQ0FBQztvQkFDZCxDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLFVBQVUsQ0FBQyxN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SSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDN0UsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUM7d0JBQzFDLElBQUksMkNBQWdDLENBQUMsQ0FBQyxDQUFDOzRCQUNuQyxzREFBMkMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7NEJBQzdELElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQ2pELENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDakUsSUFBSSxXQUFXLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0NBQ3ZELE9BQU8sS0FBSyxDQUFDOzZCQUNkO3lCQUNGO3dCQUNELE9BQU8sSUFBSSxDQUFDO29CQUNkLENBQUMsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUNILHlDQUFDO0lBQUQsQ0FBQyxBQXJCRCxJQXFCQztJQXJCWSxnRkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7U3RhdGljUmVmbGVjdG9yLCBTdGF0aWNTeW1ib2x9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge2lzQ2xhc3NNZXRhZGF0YSwgaXNNZXRhZGF0YUltcG9ydGVkU3ltYm9sUmVmZXJlbmNlRXhwcmVzc2lvbiwgaXNNZXRhZGF0YVN5bWJvbGljQ2FsbEV4cHJlc3Npb24sIE1ldGFkYXRhVmFsdWV9IGZyb20gJy4uL21ldGFkYXRhJztcblxuaW1wb3J0IHtNZXRhZGF0YVRyYW5zZm9ybWVyLCBWYWx1ZVRyYW5zZm9ybX0gZnJvbSAnLi9tZXRhZGF0YV9jYWNoZSc7XG5cbmV4cG9ydCB0eXBlIFRyYW5zZm9ybWVyID0gKHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUpID0+IHRzLlNvdXJjZUZpbGU7XG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1lckZhY3RvcnkgPSAoY29udGV4dDogdHMuVHJhbnNmb3JtYXRpb25Db250ZXh0KSA9PiBUcmFuc2Zvcm1lcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlY29yYXRvclN0cmlwVHJhbnNmb3JtZXJGYWN0b3J5KFxuICAgIGNvcmVEZWNvcmF0b3JzOiBTZXQ8U3RhdGljU3ltYm9sPiwgcmVmbGVjdG9yOiBTdGF0aWNSZWZsZWN0b3IsXG4gICAgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXIpOiBUcmFuc2Zvcm1lckZhY3Rvcnkge1xuICByZXR1cm4gZnVuY3Rpb24oY29udGV4dDogdHMuVHJhbnNmb3JtYXRpb25Db250ZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUpOiB0cy5Tb3VyY2VGaWxlIHtcbiAgICAgIGNvbnN0IHN0cmlwRGVjb3JhdG9yc0Zyb21DbGFzc0RlY2xhcmF0aW9uID1cbiAgICAgICAgICAobm9kZTogdHMuQ2xhc3NEZWNsYXJhdGlvbik6IHRzLkNsYXNzRGVjbGFyYXRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGVjb3JhdG9ycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycy5maWx0ZXIoZGVjb3JhdG9yID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY2FsbEV4cHIgPSBkZWNvcmF0b3IuZXhwcmVzc2lvbjtcbiAgICAgICAgICAgICAgaWYgKHRzLmlzQ2FsbEV4cHJlc3Npb24oY2FsbEV4cHIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBjYWxsRXhwci5leHByZXNzaW9uO1xuICAgICAgICAgICAgICAgIGlmICh0cy5pc0lkZW50aWZpZXIoaWQpKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSByZXNvbHZlVG9TdGF0aWNTeW1ib2woaWQsIHNvdXJjZUZpbGUuZmlsZU5hbWUsIHJlZmxlY3RvciwgY2hlY2tlcik7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc3ltYm9sICYmIGNvcmVEZWNvcmF0b3JzLmhhcyhzeW1ib2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGRlY29yYXRvcnMubGVuZ3RoICE9PSBub2RlLmRlY29yYXRvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cy51cGRhdGVDbGFzc0RlY2xhcmF0aW9uKFxuICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgIGRlY29yYXRvcnMsXG4gICAgICAgICAgICAgICAgICBub2RlLm1vZGlmaWVycyxcbiAgICAgICAgICAgICAgICAgIG5vZGUubmFtZSxcbiAgICAgICAgICAgICAgICAgIG5vZGUudHlwZVBhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgICBub2RlLmhlcml0YWdlQ2xhdXNlcyB8fCBbXSxcbiAgICAgICAgICAgICAgICAgIG5vZGUubWVtYmVycyxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN0cmlwRGVjb3JhdG9yUHJvcGVydHlBc3NpZ25tZW50ID0gKG5vZGU6IHRzLkNsYXNzRGVjbGFyYXRpb24pOiB0cy5DbGFzc0RlY2xhcmF0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIHRzLnZpc2l0RWFjaENoaWxkKG5vZGUsIG1lbWJlciA9PiB7XG4gICAgICAgICAgaWYgKCF0cy5pc1Byb3BlcnR5RGVjbGFyYXRpb24obWVtYmVyKSB8fCAhaXNEZWNvcmF0b3JBc3NpZ25tZW50KG1lbWJlcikgfHxcbiAgICAgICAgICAgICAgIW1lbWJlci5pbml0aWFsaXplciB8fCAhdHMuaXNBcnJheUxpdGVyYWxFeHByZXNzaW9uKG1lbWJlci5pbml0aWFsaXplcikpIHtcbiAgICAgICAgICAgIHJldHVybiBtZW1iZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3SW5pdGlhbGl6ZXIgPSB0cy52aXNpdEVhY2hDaGlsZChtZW1iZXIuaW5pdGlhbGl6ZXIsIGRlY29yYXRvciA9PiB7XG4gICAgICAgICAgICBpZiAoIXRzLmlzT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24oZGVjb3JhdG9yKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZGVjb3JhdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGxvb2t1cFByb3BlcnR5KGRlY29yYXRvciwgJ3R5cGUnKTtcbiAgICAgICAgICAgIGlmICghdHlwZSB8fCAhdHMuaXNJZGVudGlmaWVyKHR5cGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkZWNvcmF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSByZXNvbHZlVG9TdGF0aWNTeW1ib2wodHlwZSwgc291cmNlRmlsZS5maWxlTmFtZSwgcmVmbGVjdG9yLCBjaGVja2VyKTtcbiAgICAgICAgICAgIGlmICghc3ltYm9sIHx8ICFjb3JlRGVjb3JhdG9ycy5oYXMoc3ltYm9sKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZGVjb3JhdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChuZXdJbml0aWFsaXplciA9PT0gbWVtYmVyLmluaXRpYWxpemVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVtYmVyO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmV3SW5pdGlhbGl6ZXIuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHMudXBkYXRlUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgbWVtYmVyLCBtZW1iZXIuZGVjb3JhdG9ycywgbWVtYmVyLm1vZGlmaWVycywgbWVtYmVyLm5hbWUsIG1lbWJlci5xdWVzdGlvblRva2VuLFxuICAgICAgICAgICAgICAgIG1lbWJlci50eXBlLCBuZXdJbml0aWFsaXplcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0cy52aXNpdEVhY2hDaGlsZChzb3VyY2VGaWxlLCBzdG10ID0+IHtcbiAgICAgICAgaWYgKHRzLmlzQ2xhc3NEZWNsYXJhdGlvbihzdG10KSkge1xuICAgICAgICAgIGxldCBkZWNsID0gc3RtdDtcbiAgICAgICAgICBpZiAoc3RtdC5kZWNvcmF0b3JzKSB7XG4gICAgICAgICAgICBkZWNsID0gc3RyaXBEZWNvcmF0b3JzRnJvbUNsYXNzRGVjbGFyYXRpb24oc3RtdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdHJpcERlY29yYXRvclByb3BlcnR5QXNzaWdubWVudChkZWNsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RtdDtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzRGVjb3JhdG9yQXNzaWdubWVudChtZW1iZXI6IHRzLkNsYXNzRWxlbWVudCk6IGJvb2xlYW4ge1xuICBpZiAoIXRzLmlzUHJvcGVydHlEZWNsYXJhdGlvbihtZW1iZXIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICghbWVtYmVyLm1vZGlmaWVycyB8fFxuICAgICAgIW1lbWJlci5tb2RpZmllcnMuc29tZShtb2QgPT4gbW9kLmtpbmQgPT09IHRzLlN5bnRheEtpbmQuU3RhdGljS2V5d29yZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCF0cy5pc0lkZW50aWZpZXIobWVtYmVyLm5hbWUpIHx8IG1lbWJlci5uYW1lLnRleHQgIT09ICdkZWNvcmF0b3JzJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIW1lbWJlci5pbml0aWFsaXplciB8fCAhdHMuaXNBcnJheUxpdGVyYWxFeHByZXNzaW9uKG1lbWJlci5pbml0aWFsaXplcikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGxvb2t1cFByb3BlcnR5KGV4cHI6IHRzLk9iamVjdExpdGVyYWxFeHByZXNzaW9uLCBwcm9wOiBzdHJpbmcpOiB0cy5FeHByZXNzaW9ufHVuZGVmaW5lZCB7XG4gIGNvbnN0IGRlY2wgPSBleHByLnByb3BlcnRpZXMuZmluZChcbiAgICAgIGVsZW0gPT4gISFlbGVtLm5hbWUgJiYgdHMuaXNJZGVudGlmaWVyKGVsZW0ubmFtZSkgJiYgZWxlbS5uYW1lLnRleHQgPT09IHByb3ApO1xuICBpZiAoZGVjbCA9PT0gdW5kZWZpbmVkIHx8ICF0cy5pc1Byb3BlcnR5QXNzaWdubWVudChkZWNsKSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGRlY2wuaW5pdGlhbGl6ZXI7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVUb1N0YXRpY1N5bWJvbChcbiAgICBpZDogdHMuSWRlbnRpZmllciwgY29udGFpbmluZ0ZpbGU6IHN0cmluZywgcmVmbGVjdG9yOiBTdGF0aWNSZWZsZWN0b3IsXG4gICAgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXIpOiBTdGF0aWNTeW1ib2x8bnVsbCB7XG4gIGNvbnN0IHJlcyA9IGNoZWNrZXIuZ2V0U3ltYm9sQXRMb2NhdGlvbihpZCk7XG4gIGlmICghcmVzIHx8ICFyZXMuZGVjbGFyYXRpb25zIHx8IHJlcy5kZWNsYXJhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZGVjbCA9IHJlcy5kZWNsYXJhdGlvbnNbMF07XG4gIGlmICghdHMuaXNJbXBvcnRTcGVjaWZpZXIoZGVjbCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBtb2R1bGVTcGVjaWZpZXIgPSBkZWNsLnBhcmVudCEucGFyZW50IS5wYXJlbnQhLm1vZHVsZVNwZWNpZmllcjtcbiAgaWYgKCF0cy5pc1N0cmluZ0xpdGVyYWwobW9kdWxlU3BlY2lmaWVyKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiByZWZsZWN0b3IudHJ5RmluZERlY2xhcmF0aW9uKG1vZHVsZVNwZWNpZmllci50ZXh0LCBpZC50ZXh0LCBjb250YWluaW5nRmlsZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpcERlY29yYXRvcnNNZXRhZGF0YVRyYW5zZm9ybWVyIGltcGxlbWVudHMgTWV0YWRhdGFUcmFuc2Zvcm1lciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZURlY29yYXRvcnM6IFNldDxTdGF0aWNTeW1ib2w+LCBwcml2YXRlIHJlZmxlY3RvcjogU3RhdGljUmVmbGVjdG9yKSB7fVxuXG4gIHN0YXJ0KHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUpOiBWYWx1ZVRyYW5zZm9ybXx1bmRlZmluZWQge1xuICAgIHJldHVybiAodmFsdWU6IE1ldGFkYXRhVmFsdWUsIG5vZGU6IHRzLk5vZGUpOiBNZXRhZGF0YVZhbHVlID0+IHtcbiAgICAgIGlmIChpc0NsYXNzTWV0YWRhdGEodmFsdWUpICYmIHRzLmlzQ2xhc3NEZWNsYXJhdGlvbihub2RlKSAmJiB2YWx1ZS5kZWNvcmF0b3JzKSB7XG4gICAgICAgIHZhbHVlLmRlY29yYXRvcnMgPSB2YWx1ZS5kZWNvcmF0b3JzLmZpbHRlcihkID0+IHtcbiAgICAgICAgICBpZiAoaXNNZXRhZGF0YVN5bWJvbGljQ2FsbEV4cHJlc3Npb24oZCkgJiZcbiAgICAgICAgICAgICAgaXNNZXRhZGF0YUltcG9ydGVkU3ltYm9sUmVmZXJlbmNlRXhwcmVzc2lvbihkLmV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IHRoaXMucmVmbGVjdG9yLnRyeUZpbmREZWNsYXJhdGlvbihcbiAgICAgICAgICAgICAgICBkLmV4cHJlc3Npb24ubW9kdWxlLCBkLmV4cHJlc3Npb24ubmFtZSwgc291cmNlRmlsZS5maWxlTmFtZSk7XG4gICAgICAgICAgICBpZiAoZGVjbGFyYXRpb24gJiYgdGhpcy5jb3JlRGVjb3JhdG9ycy5oYXMoZGVjbGFyYXRpb24pKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==