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
        define("@angular/compiler-cli/src/ngtsc/transform/src/declaration", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/translator", "@angular/compiler-cli/src/ngtsc/transform/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var translator_1 = require("@angular/compiler-cli/src/ngtsc/translator");
    var utils_1 = require("@angular/compiler-cli/src/ngtsc/transform/src/utils");
    /**
     * Keeps track of `DtsTransform`s per source file, so that it is known which source files need to
     * have their declaration file transformed.
     */
    var DtsTransformRegistry = /** @class */ (function () {
        function DtsTransformRegistry() {
            this.ivyDeclarationTransforms = new Map();
            this.returnTypeTransforms = new Map();
        }
        DtsTransformRegistry.prototype.getIvyDeclarationTransform = function (sf) {
            if (!this.ivyDeclarationTransforms.has(sf)) {
                this.ivyDeclarationTransforms.set(sf, new IvyDeclarationDtsTransform());
            }
            return this.ivyDeclarationTransforms.get(sf);
        };
        DtsTransformRegistry.prototype.getReturnTypeTransform = function (sf) {
            if (!this.returnTypeTransforms.has(sf)) {
                this.returnTypeTransforms.set(sf, new ReturnTypeTransform());
            }
            return this.returnTypeTransforms.get(sf);
        };
        /**
         * Gets the dts transforms to be applied for the given source file, or `null` if no transform is
         * necessary.
         */
        DtsTransformRegistry.prototype.getAllTransforms = function (sf) {
            // No need to transform if it's not a declarations file, or if no changes have been requested
            // to the input file. Due to the way TypeScript afterDeclarations transformers work, the
            // `ts.SourceFile` path is the same as the original .ts. The only way we know it's actually a
            // declaration file is via the `isDeclarationFile` property.
            if (!sf.isDeclarationFile) {
                return null;
            }
            var originalSf = ts.getOriginalNode(sf);
            var transforms = null;
            if (this.ivyDeclarationTransforms.has(originalSf)) {
                transforms = [];
                transforms.push(this.ivyDeclarationTransforms.get(originalSf));
            }
            if (this.returnTypeTransforms.has(originalSf)) {
                transforms = transforms || [];
                transforms.push(this.returnTypeTransforms.get(originalSf));
            }
            return transforms;
        };
        return DtsTransformRegistry;
    }());
    exports.DtsTransformRegistry = DtsTransformRegistry;
    function declarationTransformFactory(transformRegistry, importRewriter, importPrefix) {
        return function (context) {
            var transformer = new DtsTransformer(context, importRewriter, importPrefix);
            return function (fileOrBundle) {
                if (ts.isBundle(fileOrBundle)) {
                    // Only attempt to transform source files.
                    return fileOrBundle;
                }
                var transforms = transformRegistry.getAllTransforms(fileOrBundle);
                if (transforms === null) {
                    return fileOrBundle;
                }
                return transformer.transform(fileOrBundle, transforms);
            };
        };
    }
    exports.declarationTransformFactory = declarationTransformFactory;
    /**
     * Processes .d.ts file text and adds static field declarations, with types.
     */
    var DtsTransformer = /** @class */ (function () {
        function DtsTransformer(ctx, importRewriter, importPrefix) {
            this.ctx = ctx;
            this.importRewriter = importRewriter;
            this.importPrefix = importPrefix;
        }
        /**
         * Transform the declaration file and add any declarations which were recorded.
         */
        DtsTransformer.prototype.transform = function (sf, transforms) {
            var _this = this;
            var imports = new translator_1.ImportManager(this.importRewriter, this.importPrefix);
            var visitor = function (node) {
                if (ts.isClassDeclaration(node)) {
                    return _this.transformClassDeclaration(node, transforms, imports);
                }
                else if (ts.isFunctionDeclaration(node)) {
                    return _this.transformFunctionDeclaration(node, transforms, imports);
                }
                else {
                    // Otherwise return node as is.
                    return ts.visitEachChild(node, visitor, _this.ctx);
                }
            };
            // Recursively scan through the AST and process all nodes as desired.
            sf = ts.visitNode(sf, visitor);
            // Add new imports for this file.
            return utils_1.addImports(imports, sf);
        };
        DtsTransformer.prototype.transformClassDeclaration = function (clazz, transforms, imports) {
            var e_1, _a, e_2, _b;
            var elements = clazz.members;
            var elementsChanged = false;
            try {
                for (var transforms_1 = tslib_1.__values(transforms), transforms_1_1 = transforms_1.next(); !transforms_1_1.done; transforms_1_1 = transforms_1.next()) {
                    var transform = transforms_1_1.value;
                    if (transform.transformClassElement !== undefined) {
                        for (var i = 0; i < elements.length; i++) {
                            var res = transform.transformClassElement(elements[i], imports);
                            if (res !== elements[i]) {
                                if (!elementsChanged) {
                                    elements = tslib_1.__spread(elements);
                                    elementsChanged = true;
                                }
                                elements[i] = res;
                            }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (transforms_1_1 && !transforms_1_1.done && (_a = transforms_1.return)) _a.call(transforms_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var newClazz = clazz;
            try {
                for (var transforms_2 = tslib_1.__values(transforms), transforms_2_1 = transforms_2.next(); !transforms_2_1.done; transforms_2_1 = transforms_2.next()) {
                    var transform = transforms_2_1.value;
                    if (transform.transformClass !== undefined) {
                        // If no DtsTransform has changed the class yet, then the (possibly mutated) elements have
                        // not yet been incorporated. Otherwise, `newClazz.members` holds the latest class members.
                        var inputMembers = (clazz === newClazz ? elements : newClazz.members);
                        newClazz = transform.transformClass(newClazz, inputMembers, imports);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (transforms_2_1 && !transforms_2_1.done && (_b = transforms_2.return)) _b.call(transforms_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // If some elements have been transformed but the class itself has not been transformed, create
            // an updated class declaration with the updated elements.
            if (elementsChanged && clazz === newClazz) {
                newClazz = ts.updateClassDeclaration(
                /* node */ clazz, 
                /* decorators */ clazz.decorators, 
                /* modifiers */ clazz.modifiers, 
                /* name */ clazz.name, 
                /* typeParameters */ clazz.typeParameters, 
                /* heritageClauses */ clazz.heritageClauses, 
                /* members */ elements);
            }
            return newClazz;
        };
        DtsTransformer.prototype.transformFunctionDeclaration = function (declaration, transforms, imports) {
            var e_3, _a;
            var newDecl = declaration;
            try {
                for (var transforms_3 = tslib_1.__values(transforms), transforms_3_1 = transforms_3.next(); !transforms_3_1.done; transforms_3_1 = transforms_3.next()) {
                    var transform = transforms_3_1.value;
                    if (transform.transformFunctionDeclaration !== undefined) {
                        newDecl = transform.transformFunctionDeclaration(newDecl, imports);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (transforms_3_1 && !transforms_3_1.done && (_a = transforms_3.return)) _a.call(transforms_3);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return newDecl;
        };
        return DtsTransformer;
    }());
    var IvyDeclarationDtsTransform = /** @class */ (function () {
        function IvyDeclarationDtsTransform() {
            this.declarationFields = new Map();
        }
        IvyDeclarationDtsTransform.prototype.addFields = function (decl, fields) {
            this.declarationFields.set(decl, fields);
        };
        IvyDeclarationDtsTransform.prototype.transformClass = function (clazz, members, imports) {
            var original = ts.getOriginalNode(clazz);
            if (!this.declarationFields.has(original)) {
                return clazz;
            }
            var fields = this.declarationFields.get(original);
            var newMembers = fields.map(function (decl) {
                var modifiers = [ts.createModifier(ts.SyntaxKind.StaticKeyword)];
                var typeRef = translator_1.translateType(decl.type, imports);
                markForEmitAsSingleLine(typeRef);
                return ts.createProperty(
                /* decorators */ undefined, 
                /* modifiers */ modifiers, 
                /* name */ decl.name, 
                /* questionOrExclamationToken */ undefined, 
                /* type */ typeRef, 
                /* initializer */ undefined);
            });
            return ts.updateClassDeclaration(
            /* node */ clazz, 
            /* decorators */ clazz.decorators, 
            /* modifiers */ clazz.modifiers, 
            /* name */ clazz.name, 
            /* typeParameters */ clazz.typeParameters, 
            /* heritageClauses */ clazz.heritageClauses, tslib_1.__spread(members, newMembers));
        };
        return IvyDeclarationDtsTransform;
    }());
    exports.IvyDeclarationDtsTransform = IvyDeclarationDtsTransform;
    function markForEmitAsSingleLine(node) {
        ts.setEmitFlags(node, ts.EmitFlags.SingleLine);
        ts.forEachChild(node, markForEmitAsSingleLine);
    }
    var ReturnTypeTransform = /** @class */ (function () {
        function ReturnTypeTransform() {
            this.typeReplacements = new Map();
        }
        ReturnTypeTransform.prototype.addTypeReplacement = function (declaration, type) {
            this.typeReplacements.set(declaration, type);
        };
        ReturnTypeTransform.prototype.transformClassElement = function (element, imports) {
            if (!ts.isMethodSignature(element)) {
                return element;
            }
            var original = ts.getOriginalNode(element);
            if (!this.typeReplacements.has(original)) {
                return element;
            }
            var returnType = this.typeReplacements.get(original);
            var tsReturnType = translator_1.translateType(returnType, imports);
            var methodSignature = ts.updateMethodSignature(
            /* node */ element, 
            /* typeParameters */ element.typeParameters, 
            /* parameters */ element.parameters, 
            /* type */ tsReturnType, 
            /* name */ element.name, 
            /* questionToken */ element.questionToken);
            // Copy over any modifiers, these cannot be set during the `ts.updateMethodSignature` call.
            methodSignature.modifiers = element.modifiers;
            // A bug in the TypeScript declaration causes `ts.MethodSignature` not to be assignable to
            // `ts.ClassElement`. Since `element` was a `ts.MethodSignature` already, transforming it into
            // this type is actually correct.
            return methodSignature;
        };
        ReturnTypeTransform.prototype.transformFunctionDeclaration = function (element, imports) {
            var original = ts.getOriginalNode(element);
            if (!this.typeReplacements.has(original)) {
                return element;
            }
            var returnType = this.typeReplacements.get(original);
            var tsReturnType = translator_1.translateType(returnType, imports);
            return ts.updateFunctionDeclaration(
            /* node */ element, 
            /* decorators */ element.decorators, 
            /* modifiers */ element.modifiers, 
            /* asteriskToken */ element.asteriskToken, 
            /* name */ element.name, 
            /* typeParameters */ element.typeParameters, 
            /* parameters */ element.parameters, 
            /* type */ tsReturnType, 
            /* body */ element.body);
        };
        return ReturnTypeTransform;
    }());
    exports.ReturnTypeTransform = ReturnTypeTransform;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3RyYW5zZm9ybS9zcmMvZGVjbGFyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBR0gsK0JBQWlDO0lBSWpDLHlFQUE4RDtJQUc5RCw2RUFBbUM7SUFFbkM7OztPQUdHO0lBQ0g7UUFBQTtZQUNVLDZCQUF3QixHQUFHLElBQUksR0FBRyxFQUE2QyxDQUFDO1lBQ2hGLHlCQUFvQixHQUFHLElBQUksR0FBRyxFQUFzQyxDQUFDO1FBeUMvRSxDQUFDO1FBdkNDLHlEQUEwQixHQUExQixVQUEyQixFQUFpQjtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSwwQkFBMEIsRUFBRSxDQUFDLENBQUM7YUFDekU7WUFDRCxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDaEQsQ0FBQztRQUVELHFEQUFzQixHQUF0QixVQUF1QixFQUFpQjtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7YUFDOUQ7WUFDRCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDNUMsQ0FBQztRQUVEOzs7V0FHRztRQUNILCtDQUFnQixHQUFoQixVQUFpQixFQUFpQjtZQUNoQyw2RkFBNkY7WUFD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LFVBQVU7WUFDbkMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1lBQ2pDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxhQUFhO1lBQ3pDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUN2QixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsY0FBYztZQUMzQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUNuQyxVQUFVLENBQUMsWUFBWTtZQUN2QixVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDSCwwQkFBQztJQUFELENBQUMsQUF4REQsSUF3REM7SUF4RFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0ltcG9ydFJld3JpdGVyfSBmcm9tICcuLi8uLi9pbXBvcnRzJztcbmltcG9ydCB7Q2xhc3NEZWNsYXJhdGlvbn0gZnJvbSAnLi4vLi4vcmVmbGVjdGlvbic7XG5pbXBvcnQge0ltcG9ydE1hbmFnZXIsIHRyYW5zbGF0ZVR5cGV9IGZyb20gJy4uLy4uL3RyYW5zbGF0b3InO1xuXG5pbXBvcnQge0R0c1RyYW5zZm9ybX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHthZGRJbXBvcnRzfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiBgRHRzVHJhbnNmb3JtYHMgcGVyIHNvdXJjZSBmaWxlLCBzbyB0aGF0IGl0IGlzIGtub3duIHdoaWNoIHNvdXJjZSBmaWxlcyBuZWVkIHRvXG4gKiBoYXZlIHRoZWlyIGRlY2xhcmF0aW9uIGZpbGUgdHJhbnNmb3JtZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEdHNUcmFuc2Zvcm1SZWdpc3RyeSB7XG4gIHByaXZhdGUgaXZ5RGVjbGFyYXRpb25UcmFuc2Zvcm1zID0gbmV3IE1hcDx0cy5Tb3VyY2VGaWxlLCBJdnlEZWNsYXJhdGlvbkR0c1RyYW5zZm9ybT4oKTtcbiAgcHJpdmF0ZSByZXR1cm5UeXBlVHJhbnNmb3JtcyA9IG5ldyBNYXA8dHMuU291cmNlRmlsZSwgUmV0dXJuVHlwZVRyYW5zZm9ybT4oKTtcblxuICBnZXRJdnlEZWNsYXJhdGlvblRyYW5zZm9ybShzZjogdHMuU291cmNlRmlsZSk6IEl2eURlY2xhcmF0aW9uRHRzVHJhbnNmb3JtIHtcbiAgICBpZiAoIXRoaXMuaXZ5RGVjbGFyYXRpb25UcmFuc2Zvcm1zLmhhcyhzZikpIHtcbiAgICAgIHRoaXMuaXZ5RGVjbGFyYXRpb25UcmFuc2Zvcm1zLnNldChzZiwgbmV3IEl2eURlY2xhcmF0aW9uRHRzVHJhbnNmb3JtKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pdnlEZWNsYXJhdGlvblRyYW5zZm9ybXMuZ2V0KHNmKSE7XG4gIH1cblxuICBnZXRSZXR1cm5UeXBlVHJhbnNmb3JtKHNmOiB0cy5Tb3VyY2VGaWxlKTogUmV0dXJuVHlwZVRyYW5zZm9ybSB7XG4gICAgaWYgKCF0aGlzLnJldHVyblR5cGVUcmFuc2Zvcm1zLmhhcyhzZikpIHtcbiAgICAgIHRoaXMucmV0dXJuVHlwZVRyYW5zZm9ybXMuc2V0KHNmLCBuZXcgUmV0dXJuVHlwZVRyYW5zZm9ybSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuVHlwZVRyYW5zZm9ybXMuZ2V0KHNmKSE7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZHRzIHRyYW5zZm9ybXMgdG8gYmUgYXBwbGllZCBmb3IgdGhlIGdpdmVuIHNvdXJjZSBmaWxlLCBvciBgbnVsbGAgaWYgbm8gdHJhbnNmb3JtIGlzXG4gICAqIG5lY2Vzc2FyeS5cbiAgICovXG4gIGdldEFsbFRyYW5zZm9ybXMoc2Y6IHRzLlNvdXJjZUZpbGUpOiBEdHNUcmFuc2Zvcm1bXXxudWxsIHtcbiAgICAvLyBObyBuZWVkIHRvIHRyYW5zZm9ybSBpZiBpdCdzIG5vdCBhIGRlY2xhcmF0aW9ucyBmaWxlLCBvciBpZiBubyBjaGFuZ2VzIGhhdmUgYmVlbiByZXF1ZXN0ZWRcbiAgICAvLyB0byB0aGUgaW5wdXQgZmlsZS4gRHVlIHRvIHRoZSB3YXkgVHlwZVNjcmlwdCBhZnRlckRlY2xhcmF0aW9ucyB0cmFuc2Zvcm1lcnMgd29yaywgdGhlXG4gICAgLy8gYHRzLlNvdXJjZUZpbGVgIHBhdGggaXMgdGhlIHNhbWUgYXMgdGhlIG9yaWdpbmFsIC50cy4gVGhlIG9ubHkgd2F5IHdlIGtub3cgaXQncyBhY3R1YWxseSBhXG4gICAgLy8gZGVjbGFyYXRpb24gZmlsZSBpcyB2aWEgdGhlIGBpc0RlY2xhcmF0aW9uRmlsZWAgcHJvcGVydHkuXG4gICAgaWYgKCFzZi5pc0RlY2xhcmF0aW9uRmlsZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG9yaWdpbmFsU2YgPSB0cy5nZXRPcmlnaW5hbE5vZGUoc2YpIGFzIHRzLlNvdXJjZUZpbGU7XG5cbiAgICBsZXQgdHJhbnNmb3JtczogRHRzVHJhbnNmb3JtW118bnVsbCA9IG51bGw7XG4gICAgaWYgKHRoaXMuaXZ5RGVjbGFyYXRpb25UcmFuc2Zvcm1zLmhhcyhvcmlnaW5hbFNmKSkge1xuICAgICAgdHJhbnNmb3JtcyA9IFtdO1xuICAgICAgdHJhbnNmb3Jtcy5wdXNoKHRoaXMuaXZ5RGVjbGFyYXRpb25UcmFuc2Zvcm1zLmdldChvcmlnaW5hbFNmKSEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXR1cm5UeXBlVHJhbnNmb3Jtcy5oYXMob3JpZ2luYWxTZikpIHtcbiAgICAgIHRyYW5zZm9ybXMgPSB0cmFuc2Zvcm1zIHx8IFtdO1xuICAgICAgdHJhbnNmb3Jtcy5wdXNoKHRoaXMucmV0dXJuVHlwZVRyYW5zZm9ybXMuZ2V0KG9yaWdpbmFsU2YpISk7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2Zvcm1zO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJhdGlvblRyYW5zZm9ybUZhY3RvcnkoXG4gICAgdHJhbnNmb3JtUmVnaXN0cnk6IER0c1RyYW5zZm9ybVJlZ2lzdHJ5LCBpbXBvcnRSZXdyaXRlcjogSW1wb3J0UmV3cml0ZXIsXG4gICAgaW1wb3J0UHJlZml4Pzogc3RyaW5nKTogdHMuVHJhbnNmb3JtZXJGYWN0b3J5PHRzLlNvdXJjZUZpbGU+IHtcbiAgcmV0dXJuIChjb250ZXh0OiB0cy5UcmFuc2Zvcm1hdGlvbkNvbnRleHQpID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm1lciA9IG5ldyBEdHNUcmFuc2Zvcm1lcihjb250ZXh0LCBpbXBvcnRSZXdyaXRlciwgaW1wb3J0UHJlZml4KTtcbiAgICByZXR1cm4gKGZpbGVPckJ1bmRsZSkgPT4ge1xuICAgICAgaWYgKHRzLmlzQnVuZGxlKGZpbGVPckJ1bmRsZSkpIHtcbiAgICAgICAgLy8gT25seSBhdHRlbXB0IHRvIHRyYW5zZm9ybSBzb3VyY2UgZmlsZXMuXG4gICAgICAgIHJldHVybiBmaWxlT3JCdW5kbGU7XG4gICAgICB9XG4gICAgICBjb25zdCB0cmFuc2Zvcm1zID0gdHJhbnNmb3JtUmVnaXN0cnkuZ2V0QWxsVHJhbnNmb3JtcyhmaWxlT3JCdW5kbGUpO1xuICAgICAgaWYgKHRyYW5zZm9ybXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZpbGVPckJ1bmRsZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cmFuc2Zvcm1lci50cmFuc2Zvcm0oZmlsZU9yQnVuZGxlLCB0cmFuc2Zvcm1zKTtcbiAgICB9O1xuICB9O1xufVxuXG4vKipcbiAqIFByb2Nlc3NlcyAuZC50cyBmaWxlIHRleHQgYW5kIGFkZHMgc3RhdGljIGZpZWxkIGRlY2xhcmF0aW9ucywgd2l0aCB0eXBlcy5cbiAqL1xuY2xhc3MgRHRzVHJhbnNmb3JtZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY3R4OiB0cy5UcmFuc2Zvcm1hdGlvbkNvbnRleHQsIHByaXZhdGUgaW1wb3J0UmV3cml0ZXI6IEltcG9ydFJld3JpdGVyLFxuICAgICAgcHJpdmF0ZSBpbXBvcnRQcmVmaXg/OiBzdHJpbmcpIHt9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0aGUgZGVjbGFyYXRpb24gZmlsZSBhbmQgYWRkIGFueSBkZWNsYXJhdGlvbnMgd2hpY2ggd2VyZSByZWNvcmRlZC5cbiAgICovXG4gIHRyYW5zZm9ybShzZjogdHMuU291cmNlRmlsZSwgdHJhbnNmb3JtczogRHRzVHJhbnNmb3JtW10pOiB0cy5Tb3VyY2VGaWxlIHtcbiAgICBjb25zdCBpbXBvcnRzID0gbmV3IEltcG9ydE1hbmFnZXIodGhpcy5pbXBvcnRSZXdyaXRlciwgdGhpcy5pbXBvcnRQcmVmaXgpO1xuXG4gICAgY29uc3QgdmlzaXRvcjogdHMuVmlzaXRvciA9IChub2RlOiB0cy5Ob2RlKTogdHMuVmlzaXRSZXN1bHQ8dHMuTm9kZT4gPT4ge1xuICAgICAgaWYgKHRzLmlzQ2xhc3NEZWNsYXJhdGlvbihub2RlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1DbGFzc0RlY2xhcmF0aW9uKG5vZGUsIHRyYW5zZm9ybXMsIGltcG9ydHMpO1xuICAgICAgfSBlbHNlIGlmICh0cy5pc0Z1bmN0aW9uRGVjbGFyYXRpb24obm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtRnVuY3Rpb25EZWNsYXJhdGlvbihub2RlLCB0cmFuc2Zvcm1zLCBpbXBvcnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gbm9kZSBhcyBpcy5cbiAgICAgICAgcmV0dXJuIHRzLnZpc2l0RWFjaENoaWxkKG5vZGUsIHZpc2l0b3IsIHRoaXMuY3R4KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmVjdXJzaXZlbHkgc2NhbiB0aHJvdWdoIHRoZSBBU1QgYW5kIHByb2Nlc3MgYWxsIG5vZGVzIGFzIGRlc2lyZWQuXG4gICAgc2YgPSB0cy52aXNpdE5vZGUoc2YsIHZpc2l0b3IpO1xuXG4gICAgLy8gQWRkIG5ldyBpbXBvcnRzIGZvciB0aGlzIGZpbGUuXG4gICAgcmV0dXJuIGFkZEltcG9ydHMoaW1wb3J0cywgc2YpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1DbGFzc0RlY2xhcmF0aW9uKFxuICAgICAgY2xheno6IHRzLkNsYXNzRGVjbGFyYXRpb24sIHRyYW5zZm9ybXM6IER0c1RyYW5zZm9ybVtdLFxuICAgICAgaW1wb3J0czogSW1wb3J0TWFuYWdlcik6IHRzLkNsYXNzRGVjbGFyYXRpb24ge1xuICAgIGxldCBlbGVtZW50czogdHMuQ2xhc3NFbGVtZW50W118UmVhZG9ubHlBcnJheTx0cy5DbGFzc0VsZW1lbnQ+ID0gY2xhenoubWVtYmVycztcbiAgICBsZXQgZWxlbWVudHNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKGNvbnN0IHRyYW5zZm9ybSBvZiB0cmFuc2Zvcm1zKSB7XG4gICAgICBpZiAodHJhbnNmb3JtLnRyYW5zZm9ybUNsYXNzRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCByZXMgPSB0cmFuc2Zvcm0udHJhbnNmb3JtQ2xhc3NFbGVtZW50KGVsZW1lbnRzW2ldLCBpbXBvcnRzKTtcbiAgICAgICAgICBpZiAocmVzICE9PSBlbGVtZW50c1tpXSkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50c0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgZWxlbWVudHMgPSBbLi4uZWxlbWVudHNdO1xuICAgICAgICAgICAgICBlbGVtZW50c0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGVsZW1lbnRzIGFzIHRzLkNsYXNzRWxlbWVudFtdKVtpXSA9IHJlcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbmV3Q2xheno6IHRzLkNsYXNzRGVjbGFyYXRpb24gPSBjbGF6ejtcblxuICAgIGZvciAoY29uc3QgdHJhbnNmb3JtIG9mIHRyYW5zZm9ybXMpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0udHJhbnNmb3JtQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBJZiBubyBEdHNUcmFuc2Zvcm0gaGFzIGNoYW5nZWQgdGhlIGNsYXNzIHlldCwgdGhlbiB0aGUgKHBvc3NpYmx5IG11dGF0ZWQpIGVsZW1lbnRzIGhhdmVcbiAgICAgICAgLy8gbm90IHlldCBiZWVuIGluY29ycG9yYXRlZC4gT3RoZXJ3aXNlLCBgbmV3Q2xhenoubWVtYmVyc2AgaG9sZHMgdGhlIGxhdGVzdCBjbGFzcyBtZW1iZXJzLlxuICAgICAgICBjb25zdCBpbnB1dE1lbWJlcnMgPSAoY2xhenogPT09IG5ld0NsYXp6ID8gZWxlbWVudHMgOiBuZXdDbGF6ei5tZW1iZXJzKTtcblxuICAgICAgICBuZXdDbGF6eiA9IHRyYW5zZm9ybS50cmFuc2Zvcm1DbGFzcyhuZXdDbGF6eiwgaW5wdXRNZW1iZXJzLCBpbXBvcnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBzb21lIGVsZW1lbnRzIGhhdmUgYmVlbiB0cmFuc2Zvcm1lZCBidXQgdGhlIGNsYXNzIGl0c2VsZiBoYXMgbm90IGJlZW4gdHJhbnNmb3JtZWQsIGNyZWF0ZVxuICAgIC8vIGFuIHVwZGF0ZWQgY2xhc3MgZGVjbGFyYXRpb24gd2l0aCB0aGUgdXBkYXRlZCBlbGVtZW50cy5cbiAgICBpZiAoZWxlbWVudHNDaGFuZ2VkICYmIGNsYXp6ID09PSBuZXdDbGF6eikge1xuICAgICAgbmV3Q2xhenogPSB0cy51cGRhdGVDbGFzc0RlY2xhcmF0aW9uKFxuICAgICAgICAgIC8qIG5vZGUgKi8gY2xhenosXG4gICAgICAgICAgLyogZGVjb3JhdG9ycyAqLyBjbGF6ei5kZWNvcmF0b3JzLFxuICAgICAgICAgIC8qIG1vZGlmaWVycyAqLyBjbGF6ei5tb2RpZmllcnMsXG4gICAgICAgICAgLyogbmFtZSAqLyBjbGF6ei5uYW1lLFxuICAgICAgICAgIC8qIHR5cGVQYXJhbWV0ZXJzICovIGNsYXp6LnR5cGVQYXJhbWV0ZXJzLFxuICAgICAgICAgIC8qIGhlcml0YWdlQ2xhdXNlcyAqLyBjbGF6ei5oZXJpdGFnZUNsYXVzZXMsXG4gICAgICAgICAgLyogbWVtYmVycyAqLyBlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0NsYXp6O1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1GdW5jdGlvbkRlY2xhcmF0aW9uKFxuICAgICAgZGVjbGFyYXRpb246IHRzLkZ1bmN0aW9uRGVjbGFyYXRpb24sIHRyYW5zZm9ybXM6IER0c1RyYW5zZm9ybVtdLFxuICAgICAgaW1wb3J0czogSW1wb3J0TWFuYWdlcik6IHRzLkZ1bmN0aW9uRGVjbGFyYXRpb24ge1xuICAgIGxldCBuZXdEZWNsID0gZGVjbGFyYXRpb247XG5cbiAgICBmb3IgKGNvbnN0IHRyYW5zZm9ybSBvZiB0cmFuc2Zvcm1zKSB7XG4gICAgICBpZiAodHJhbnNmb3JtLnRyYW5zZm9ybUZ1bmN0aW9uRGVjbGFyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdEZWNsID0gdHJhbnNmb3JtLnRyYW5zZm9ybUZ1bmN0aW9uRGVjbGFyYXRpb24obmV3RGVjbCwgaW1wb3J0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0RlY2w7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJdnlEZWNsYXJhdGlvbkZpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBUeXBlO1xufVxuXG5leHBvcnQgY2xhc3MgSXZ5RGVjbGFyYXRpb25EdHNUcmFuc2Zvcm0gaW1wbGVtZW50cyBEdHNUcmFuc2Zvcm0ge1xuICBwcml2YXRlIGRlY2xhcmF0aW9uRmllbGRzID0gbmV3IE1hcDxDbGFzc0RlY2xhcmF0aW9uLCBJdnlEZWNsYXJhdGlvbkZpZWxkW10+KCk7XG5cbiAgYWRkRmllbGRzKGRlY2w6IENsYXNzRGVjbGFyYXRpb24sIGZpZWxkczogSXZ5RGVjbGFyYXRpb25GaWVsZFtdKTogdm9pZCB7XG4gICAgdGhpcy5kZWNsYXJhdGlvbkZpZWxkcy5zZXQoZGVjbCwgZmllbGRzKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUNsYXNzKFxuICAgICAgY2xheno6IHRzLkNsYXNzRGVjbGFyYXRpb24sIG1lbWJlcnM6IFJlYWRvbmx5QXJyYXk8dHMuQ2xhc3NFbGVtZW50PixcbiAgICAgIGltcG9ydHM6IEltcG9ydE1hbmFnZXIpOiB0cy5DbGFzc0RlY2xhcmF0aW9uIHtcbiAgICBjb25zdCBvcmlnaW5hbCA9IHRzLmdldE9yaWdpbmFsTm9kZShjbGF6eikgYXMgQ2xhc3NEZWNsYXJhdGlvbjtcblxuICAgIGlmICghdGhpcy5kZWNsYXJhdGlvbkZpZWxkcy5oYXMob3JpZ2luYWwpKSB7XG4gICAgICByZXR1cm4gY2xheno7XG4gICAgfVxuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuZGVjbGFyYXRpb25GaWVsZHMuZ2V0KG9yaWdpbmFsKSE7XG5cbiAgICBjb25zdCBuZXdNZW1iZXJzID0gZmllbGRzLm1hcChkZWNsID0+IHtcbiAgICAgIGNvbnN0IG1vZGlmaWVycyA9IFt0cy5jcmVhdGVNb2RpZmllcih0cy5TeW50YXhLaW5kLlN0YXRpY0tleXdvcmQpXTtcbiAgICAgIGNvbnN0IHR5cGVSZWYgPSB0cmFuc2xhdGVUeXBlKGRlY2wudHlwZSwgaW1wb3J0cyk7XG4gICAgICBtYXJrRm9yRW1pdEFzU2luZ2xlTGluZSh0eXBlUmVmKTtcbiAgICAgIHJldHVybiB0cy5jcmVhdGVQcm9wZXJ0eShcbiAgICAgICAgICAvKiBkZWNvcmF0b3JzICovIHVuZGVmaW5lZCxcbiAgICAgICAgICAvKiBtb2RpZmllcnMgKi8gbW9kaWZpZXJzLFxuICAgICAgICAgIC8qIG5hbWUgKi8gZGVjbC5uYW1lLFxuICAgICAgICAgIC8qIHF1ZXN0aW9uT3JFeGNsYW1hdGlvblRva2VuICovIHVuZGVmaW5lZCxcbiAgICAgICAgICAvKiB0eXBlICovIHR5cGVSZWYsXG4gICAgICAgICAgLyogaW5pdGlhbGl6ZXIgKi8gdW5kZWZpbmVkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cy51cGRhdGVDbGFzc0RlY2xhcmF0aW9uKFxuICAgICAgICAvKiBub2RlICovIGNsYXp6LFxuICAgICAgICAvKiBkZWNvcmF0b3JzICovIGNsYXp6LmRlY29yYXRvcnMsXG4gICAgICAgIC8qIG1vZGlmaWVycyAqLyBjbGF6ei5tb2RpZmllcnMsXG4gICAgICAgIC8qIG5hbWUgKi8gY2xhenoubmFtZSxcbiAgICAgICAgLyogdHlwZVBhcmFtZXRlcnMgKi8gY2xhenoudHlwZVBhcmFtZXRlcnMsXG4gICAgICAgIC8qIGhlcml0YWdlQ2xhdXNlcyAqLyBjbGF6ei5oZXJpdGFnZUNsYXVzZXMsXG4gICAgICAgIC8qIG1lbWJlcnMgKi9bLi4ubWVtYmVycywgLi4ubmV3TWVtYmVyc10pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtGb3JFbWl0QXNTaW5nbGVMaW5lKG5vZGU6IHRzLk5vZGUpIHtcbiAgdHMuc2V0RW1pdEZsYWdzKG5vZGUsIHRzLkVtaXRGbGFncy5TaW5nbGVMaW5lKTtcbiAgdHMuZm9yRWFjaENoaWxkKG5vZGUsIG1hcmtGb3JFbWl0QXNTaW5nbGVMaW5lKTtcbn1cblxuZXhwb3J0IGNsYXNzIFJldHVyblR5cGVUcmFuc2Zvcm0gaW1wbGVtZW50cyBEdHNUcmFuc2Zvcm0ge1xuICBwcml2YXRlIHR5cGVSZXBsYWNlbWVudHMgPSBuZXcgTWFwPHRzLkRlY2xhcmF0aW9uLCBUeXBlPigpO1xuXG4gIGFkZFR5cGVSZXBsYWNlbWVudChkZWNsYXJhdGlvbjogdHMuRGVjbGFyYXRpb24sIHR5cGU6IFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGVSZXBsYWNlbWVudHMuc2V0KGRlY2xhcmF0aW9uLCB0eXBlKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUNsYXNzRWxlbWVudChlbGVtZW50OiB0cy5DbGFzc0VsZW1lbnQsIGltcG9ydHM6IEltcG9ydE1hbmFnZXIpOiB0cy5DbGFzc0VsZW1lbnQge1xuICAgIGlmICghdHMuaXNNZXRob2RTaWduYXR1cmUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IG9yaWdpbmFsID0gdHMuZ2V0T3JpZ2luYWxOb2RlKGVsZW1lbnQpIGFzIHRzLk1ldGhvZERlY2xhcmF0aW9uO1xuICAgIGlmICghdGhpcy50eXBlUmVwbGFjZW1lbnRzLmhhcyhvcmlnaW5hbCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCByZXR1cm5UeXBlID0gdGhpcy50eXBlUmVwbGFjZW1lbnRzLmdldChvcmlnaW5hbCkhO1xuICAgIGNvbnN0IHRzUmV0dXJuVHlwZSA9IHRyYW5zbGF0ZVR5cGUocmV0dXJuVHlwZSwgaW1wb3J0cyk7XG5cbiAgICBjb25zdCBtZXRob2RTaWduYXR1cmUgPSB0cy51cGRhdGVNZXRob2RTaWduYXR1cmUoXG4gICAgICAgIC8qIG5vZGUgKi8gZWxlbWVudCxcbiAgICAgICAgLyogdHlwZVBhcmFtZXRlcnMgKi8gZWxlbWVudC50eXBlUGFyYW1ldGVycyxcbiAgICAgICAgLyogcGFyYW1ldGVycyAqLyBlbGVtZW50LnBhcmFtZXRlcnMsXG4gICAgICAgIC8qIHR5cGUgKi8gdHNSZXR1cm5UeXBlLFxuICAgICAgICAvKiBuYW1lICovIGVsZW1lbnQubmFtZSxcbiAgICAgICAgLyogcXVlc3Rpb25Ub2tlbiAqLyBlbGVtZW50LnF1ZXN0aW9uVG9rZW4pO1xuXG4gICAgLy8gQ29weSBvdmVyIGFueSBtb2RpZmllcnMsIHRoZXNlIGNhbm5vdCBiZSBzZXQgZHVyaW5nIHRoZSBgdHMudXBkYXRlTWV0aG9kU2lnbmF0dXJlYCBjYWxsLlxuICAgIG1ldGhvZFNpZ25hdHVyZS5tb2RpZmllcnMgPSBlbGVtZW50Lm1vZGlmaWVycztcblxuICAgIC8vIEEgYnVnIGluIHRoZSBUeXBlU2NyaXB0IGRlY2xhcmF0aW9uIGNhdXNlcyBgdHMuTWV0aG9kU2lnbmF0dXJlYCBub3QgdG8gYmUgYXNzaWduYWJsZSB0b1xuICAgIC8vIGB0cy5DbGFzc0VsZW1lbnRgLiBTaW5jZSBgZWxlbWVudGAgd2FzIGEgYHRzLk1ldGhvZFNpZ25hdHVyZWAgYWxyZWFkeSwgdHJhbnNmb3JtaW5nIGl0IGludG9cbiAgICAvLyB0aGlzIHR5cGUgaXMgYWN0dWFsbHkgY29ycmVjdC5cbiAgICByZXR1cm4gbWV0aG9kU2lnbmF0dXJlIGFzIHVua25vd24gYXMgdHMuQ2xhc3NFbGVtZW50O1xuICB9XG5cbiAgdHJhbnNmb3JtRnVuY3Rpb25EZWNsYXJhdGlvbihlbGVtZW50OiB0cy5GdW5jdGlvbkRlY2xhcmF0aW9uLCBpbXBvcnRzOiBJbXBvcnRNYW5hZ2VyKTpcbiAgICAgIHRzLkZ1bmN0aW9uRGVjbGFyYXRpb24ge1xuICAgIGNvbnN0IG9yaWdpbmFsID0gdHMuZ2V0T3JpZ2luYWxOb2RlKGVsZW1lbnQpIGFzIHRzLkZ1bmN0aW9uRGVjbGFyYXRpb247XG4gICAgaWYgKCF0aGlzLnR5cGVSZXBsYWNlbWVudHMuaGFzKG9yaWdpbmFsKSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHJldHVyblR5cGUgPSB0aGlzLnR5cGVSZXBsYWNlbWVudHMuZ2V0KG9yaWdpbmFsKSE7XG4gICAgY29uc3QgdHNSZXR1cm5UeXBlID0gdHJhbnNsYXRlVHlwZShyZXR1cm5UeXBlLCBpbXBvcnRzKTtcblxuICAgIHJldHVybiB0cy51cGRhdGVGdW5jdGlvbkRlY2xhcmF0aW9uKFxuICAgICAgICAvKiBub2RlICovIGVsZW1lbnQsXG4gICAgICAgIC8qIGRlY29yYXRvcnMgKi8gZWxlbWVudC5kZWNvcmF0b3JzLFxuICAgICAgICAvKiBtb2RpZmllcnMgKi8gZWxlbWVudC5tb2RpZmllcnMsXG4gICAgICAgIC8qIGFzdGVyaXNrVG9rZW4gKi8gZWxlbWVudC5hc3Rlcmlza1Rva2VuLFxuICAgICAgICAvKiBuYW1lICovIGVsZW1lbnQubmFtZSxcbiAgICAgICAgLyogdHlwZVBhcmFtZXRlcnMgKi8gZWxlbWVudC50eXBlUGFyYW1ldGVycyxcbiAgICAgICAgLyogcGFyYW1ldGVycyAqLyBlbGVtZW50LnBhcmFtZXRlcnMsXG4gICAgICAgIC8qIHR5cGUgKi8gdHNSZXR1cm5UeXBlLFxuICAgICAgICAvKiBib2R5ICovIGVsZW1lbnQuYm9keSk7XG4gIH1cbn1cbiJdfQ==