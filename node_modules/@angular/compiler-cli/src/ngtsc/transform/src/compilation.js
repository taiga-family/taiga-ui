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
        define("@angular/compiler-cli/src/ngtsc/transform/src/compilation", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/diagnostics", "@angular/compiler-cli/src/ngtsc/util/src/typescript", "@angular/compiler-cli/src/ngtsc/transform/src/api", "@angular/compiler-cli/src/ngtsc/transform/src/trait"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var diagnostics_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    var api_1 = require("@angular/compiler-cli/src/ngtsc/transform/src/api");
    var trait_1 = require("@angular/compiler-cli/src/ngtsc/transform/src/trait");
    /**
     * The heart of Angular compilation.
     *
     * The `TraitCompiler` is responsible for processing all classes in the program. Any time a
     * `DecoratorHandler` matches a class, a "trait" is created to represent that Angular aspect of the
     * class (such as the class having a component definition).
     *
     * The `TraitCompiler` transitions each trait through the various phases of compilation, culminating
     * in the production of `CompileResult`s instructing the compiler to apply various mutations to the
     * class (like adding fields or type declarations).
     */
    var TraitCompiler = /** @class */ (function () {
        function TraitCompiler(handlers, reflector, perf, incrementalBuild, compileNonExportedClasses, dtsTransforms) {
            var e_1, _a;
            this.handlers = handlers;
            this.reflector = reflector;
            this.perf = perf;
            this.incrementalBuild = incrementalBuild;
            this.compileNonExportedClasses = compileNonExportedClasses;
            this.dtsTransforms = dtsTransforms;
            /**
             * Maps class declarations to their `ClassRecord`, which tracks the Ivy traits being applied to
             * those classes.
             */
            this.classes = new Map();
            /**
             * Maps source files to any class declaration(s) within them which have been discovered to contain
             * Ivy traits.
             */
            this.fileToClasses = new Map();
            this.reexportMap = new Map();
            this.handlersByName = new Map();
            try {
                for (var handlers_1 = tslib_1.__values(handlers), handlers_1_1 = handlers_1.next(); !handlers_1_1.done; handlers_1_1 = handlers_1.next()) {
                    var handler = handlers_1_1.value;
                    this.handlersByName.set(handler.name, handler);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (handlers_1_1 && !handlers_1_1.done && (_a = handlers_1.return)) _a.call(handlers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        TraitCompiler.prototype.analyzeSync = function (sf) {
            this.analyze(sf, false);
        };
        TraitCompiler.prototype.analyzeAsync = function (sf) {
            return this.analyze(sf, true);
        };
        TraitCompiler.prototype.analyze = function (sf, preanalyze) {
            var e_2, _a;
            var _this = this;
            // We shouldn't analyze declaration files.
            if (sf.isDeclarationFile) {
                return undefined;
            }
            // analyze() really wants to return `Promise<void>|void`, but TypeScript cannot narrow a return
            // type of 'void', so `undefined` is used instead.
            var promises = [];
            var priorWork = this.incrementalBuild.priorWorkFor(sf);
            if (priorWork !== null) {
                try {
                    for (var priorWork_1 = tslib_1.__values(priorWork), priorWork_1_1 = priorWork_1.next(); !priorWork_1_1.done; priorWork_1_1 = priorWork_1.next()) {
                        var priorRecord = priorWork_1_1.value;
                        this.adopt(priorRecord);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (priorWork_1_1 && !priorWork_1_1.done && (_a = priorWork_1.return)) _a.call(priorWork_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                // Skip the rest of analysis, as this file's prior traits are being reused.
                return;
            }
            var visit = function (node) {
                if (_this.reflector.isClass(node)) {
                    _this.analyzeClass(node, preanalyze ? promises : null);
                }
                ts.forEachChild(node, visit);
            };
            visit(sf);
            if (preanalyze && promises.length > 0) {
                return Promise.all(promises).then(function () { return undefined; });
            }
            else {
                return undefined;
            }
        };
        TraitCompiler.prototype.recordFor = function (clazz) {
            if (this.classes.has(clazz)) {
                return this.classes.get(clazz);
            }
            else {
                return null;
            }
        };
        TraitCompiler.prototype.recordsFor = function (sf) {
            var e_3, _a;
            if (!this.fileToClasses.has(sf)) {
                return null;
            }
            var records = [];
            try {
                for (var _b = tslib_1.__values(this.fileToClasses.get(sf)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var clazz = _c.value;
                    records.push(this.classes.get(clazz));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return records;
        };
        /**
         * Import a `ClassRecord` from a previous compilation.
         *
         * Traits from the `ClassRecord` have accurate metadata, but the `handler` is from the old program
         * and needs to be updated (matching is done by name). A new pending trait is created and then
         * transitioned to analyzed using the previous analysis. If the trait is in the errored state,
         * instead the errors are copied over.
         */
        TraitCompiler.prototype.adopt = function (priorRecord) {
            var e_4, _a;
            var record = {
                hasPrimaryHandler: priorRecord.hasPrimaryHandler,
                hasWeakHandlers: priorRecord.hasWeakHandlers,
                metaDiagnostics: priorRecord.metaDiagnostics,
                node: priorRecord.node,
                traits: [],
            };
            try {
                for (var _b = tslib_1.__values(priorRecord.traits), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var priorTrait = _c.value;
                    var handler = this.handlersByName.get(priorTrait.handler.name);
                    var trait = trait_1.Trait.pending(handler, priorTrait.detected);
                    if (priorTrait.state === trait_1.TraitState.ANALYZED || priorTrait.state === trait_1.TraitState.RESOLVED) {
                        trait = trait.toAnalyzed(priorTrait.analysis);
                        if (trait.handler.register !== undefined) {
                            trait.handler.register(record.node, trait.analysis);
                        }
                    }
                    else if (priorTrait.state === trait_1.TraitState.SKIPPED) {
                        trait = trait.toSkipped();
                    }
                    else if (priorTrait.state === trait_1.TraitState.ERRORED) {
                        trait = trait.toErrored(priorTrait.diagnostics);
                    }
                    record.traits.push(trait);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            this.classes.set(record.node, record);
            var sf = record.node.getSourceFile();
            if (!this.fileToClasses.has(sf)) {
                this.fileToClasses.set(sf, new Set());
            }
            this.fileToClasses.get(sf).add(record.node);
        };
        TraitCompiler.prototype.scanClassForTraits = function (clazz) {
            if (!this.compileNonExportedClasses && !typescript_1.isExported(clazz)) {
                return null;
            }
            var decorators = this.reflector.getDecoratorsOfDeclaration(clazz);
            return this.detectTraits(clazz, decorators);
        };
        TraitCompiler.prototype.detectTraits = function (clazz, decorators) {
            var e_5, _a;
            var record = this.recordFor(clazz);
            var foundTraits = [];
            try {
                for (var _b = tslib_1.__values(this.handlers), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var handler = _c.value;
                    var result = handler.detect(clazz, decorators);
                    if (result === undefined) {
                        continue;
                    }
                    var isPrimaryHandler = handler.precedence === api_1.HandlerPrecedence.PRIMARY;
                    var isWeakHandler = handler.precedence === api_1.HandlerPrecedence.WEAK;
                    var trait = trait_1.Trait.pending(handler, result);
                    foundTraits.push(trait);
                    if (record === null) {
                        // This is the first handler to match this class. This path is a fast path through which
                        // most classes will flow.
                        record = {
                            node: clazz,
                            traits: [trait],
                            metaDiagnostics: null,
                            hasPrimaryHandler: isPrimaryHandler,
                            hasWeakHandlers: isWeakHandler,
                        };
                        this.classes.set(clazz, record);
                        var sf = clazz.getSourceFile();
                        if (!this.fileToClasses.has(sf)) {
                            this.fileToClasses.set(sf, new Set());
                        }
                        this.fileToClasses.get(sf).add(clazz);
                    }
                    else {
                        // This is at least the second handler to match this class. This is a slower path that some
                        // classes will go through, which validates that the set of decorators applied to the class
                        // is valid.
                        // Validate according to rules as follows:
                        //
                        // * WEAK handlers are removed if a non-WEAK handler matches.
                        // * Only one PRIMARY handler can match at a time. Any other PRIMARY handler matching a
                        //   class with an existing PRIMARY handler is an error.
                        if (!isWeakHandler && record.hasWeakHandlers) {
                            // The current handler is not a WEAK handler, but the class has other WEAK handlers.
                            // Remove them.
                            record.traits =
                                record.traits.filter(function (field) { return field.handler.precedence !== api_1.HandlerPrecedence.WEAK; });
                            record.hasWeakHandlers = false;
                        }
                        else if (isWeakHandler && !record.hasWeakHandlers) {
                            // The current handler is a WEAK handler, but the class has non-WEAK handlers already.
                            // Drop the current one.
                            continue;
                        }
                        if (isPrimaryHandler && record.hasPrimaryHandler) {
                            // The class already has a PRIMARY handler, and another one just matched.
                            record.metaDiagnostics = [{
                                    category: ts.DiagnosticCategory.Error,
                                    code: Number('-99' + diagnostics_1.ErrorCode.DECORATOR_COLLISION),
                                    file: typescript_1.getSourceFile(clazz),
                                    start: clazz.getStart(undefined, false),
                                    length: clazz.getWidth(),
                                    messageText: 'Two incompatible decorators on class',
                                }];
                            record.traits = foundTraits = [];
                            break;
                        }
                        // Otherwise, it's safe to accept the multiple decorators here. Update some of the metadata
                        // regarding this class.
                        record.traits.push(trait);
                        record.hasPrimaryHandler = record.hasPrimaryHandler || isPrimaryHandler;
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return foundTraits.length > 0 ? foundTraits : null;
        };
        TraitCompiler.prototype.analyzeClass = function (clazz, preanalyzeQueue) {
            var e_6, _a;
            var _this = this;
            var traits = this.scanClassForTraits(clazz);
            if (traits === null) {
                // There are no Ivy traits on the class, so it can safely be skipped.
                return;
            }
            var _loop_1 = function (trait) {
                var analyze = function () { return _this.analyzeTrait(clazz, trait); };
                var preanalysis = null;
                if (preanalyzeQueue !== null && trait.handler.preanalyze !== undefined) {
                    // Attempt to run preanalysis. This could fail with a `FatalDiagnosticError`; catch it if it
                    // does.
                    try {
                        preanalysis = trait.handler.preanalyze(clazz, trait.detected.metadata) || null;
                    }
                    catch (err) {
                        if (err instanceof diagnostics_1.FatalDiagnosticError) {
                            trait.toErrored([err.toDiagnostic()]);
                            return { value: void 0 };
                        }
                        else {
                            throw err;
                        }
                    }
                }
                if (preanalysis !== null) {
                    preanalyzeQueue.push(preanalysis.then(analyze));
                }
                else {
                    analyze();
                }
            };
            try {
                for (var traits_1 = tslib_1.__values(traits), traits_1_1 = traits_1.next(); !traits_1_1.done; traits_1_1 = traits_1.next()) {
                    var trait = traits_1_1.value;
                    var state_1 = _loop_1(trait);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (traits_1_1 && !traits_1_1.done && (_a = traits_1.return)) _a.call(traits_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
        };
        TraitCompiler.prototype.analyzeTrait = function (clazz, trait, flags) {
            if (trait.state !== trait_1.TraitState.PENDING) {
                throw new Error("Attempt to analyze trait of " + clazz.name.text + " in state " + trait_1.TraitState[trait.state] + " (expected DETECTED)");
            }
            // Attempt analysis. This could fail with a `FatalDiagnosticError`; catch it if it does.
            var result;
            try {
                result = trait.handler.analyze(clazz, trait.detected.metadata, flags);
            }
            catch (err) {
                if (err instanceof diagnostics_1.FatalDiagnosticError) {
                    trait = trait.toErrored([err.toDiagnostic()]);
                    return;
                }
                else {
                    throw err;
                }
            }
            if (result.diagnostics !== undefined) {
                trait = trait.toErrored(result.diagnostics);
            }
            else if (result.analysis !== undefined) {
                // Analysis was successful. Trigger registration.
                if (trait.handler.register !== undefined) {
                    trait.handler.register(clazz, result.analysis);
                }
                // Successfully analyzed and registered.
                trait = trait.toAnalyzed(result.analysis);
            }
            else {
                trait = trait.toSkipped();
            }
        };
        TraitCompiler.prototype.resolve = function () {
            var e_7, _a, e_8, _b, e_9, _c;
            var classes = Array.from(this.classes.keys());
            try {
                for (var classes_1 = tslib_1.__values(classes), classes_1_1 = classes_1.next(); !classes_1_1.done; classes_1_1 = classes_1.next()) {
                    var clazz = classes_1_1.value;
                    var record = this.classes.get(clazz);
                    try {
                        for (var _d = (e_8 = void 0, tslib_1.__values(record.traits)), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var trait = _e.value;
                            var handler = trait.handler;
                            switch (trait.state) {
                                case trait_1.TraitState.SKIPPED:
                                case trait_1.TraitState.ERRORED:
                                    continue;
                                case trait_1.TraitState.PENDING:
                                    throw new Error("Resolving a trait that hasn't been analyzed: " + clazz.name.text + " / " + Object.getPrototypeOf(trait.handler).constructor.name);
                                case trait_1.TraitState.RESOLVED:
                                    throw new Error("Resolving an already resolved trait");
                            }
                            if (handler.resolve === undefined) {
                                // No resolution of this trait needed - it's considered successful by default.
                                trait = trait.toResolved(null);
                                continue;
                            }
                            var result = void 0;
                            try {
                                result = handler.resolve(clazz, trait.analysis);
                            }
                            catch (err) {
                                if (err instanceof diagnostics_1.FatalDiagnosticError) {
                                    trait = trait.toErrored([err.toDiagnostic()]);
                                    continue;
                                }
                                else {
                                    throw err;
                                }
                            }
                            if (result.diagnostics !== undefined && result.diagnostics.length > 0) {
                                trait = trait.toErrored(result.diagnostics);
                            }
                            else {
                                if (result.data !== undefined) {
                                    trait = trait.toResolved(result.data);
                                }
                                else {
                                    trait = trait.toResolved(null);
                                }
                            }
                            if (result.reexports !== undefined) {
                                var fileName = clazz.getSourceFile().fileName;
                                if (!this.reexportMap.has(fileName)) {
                                    this.reexportMap.set(fileName, new Map());
                                }
                                var fileReexports = this.reexportMap.get(fileName);
                                try {
                                    for (var _f = (e_9 = void 0, tslib_1.__values(result.reexports)), _g = _f.next(); !_g.done; _g = _f.next()) {
                                        var reexport = _g.value;
                                        fileReexports.set(reexport.asAlias, [reexport.fromModule, reexport.symbolName]);
                                    }
                                }
                                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                                finally {
                                    try {
                                        if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                                    }
                                    finally { if (e_9) throw e_9.error; }
                                }
                            }
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (classes_1_1 && !classes_1_1.done && (_a = classes_1.return)) _a.call(classes_1);
                }
                finally { if (e_7) throw e_7.error; }
            }
        };
        TraitCompiler.prototype.typeCheck = function (ctx) {
            var e_10, _a, e_11, _b;
            try {
                for (var _c = tslib_1.__values(this.classes.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var clazz = _d.value;
                    var record = this.classes.get(clazz);
                    try {
                        for (var _e = (e_11 = void 0, tslib_1.__values(record.traits)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var trait = _f.value;
                            if (trait.state !== trait_1.TraitState.RESOLVED) {
                                continue;
                            }
                            else if (trait.handler.typeCheck === undefined) {
                                continue;
                            }
                            trait.handler.typeCheck(ctx, clazz, trait.analysis, trait.resolution);
                        }
                    }
                    catch (e_11_1) { e_11 = { error: e_11_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_11) throw e_11.error; }
                    }
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_10) throw e_10.error; }
            }
        };
        TraitCompiler.prototype.index = function (ctx) {
            var e_12, _a, e_13, _b;
            try {
                for (var _c = tslib_1.__values(this.classes.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var clazz = _d.value;
                    var record = this.classes.get(clazz);
                    try {
                        for (var _e = (e_13 = void 0, tslib_1.__values(record.traits)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var trait = _f.value;
                            if (trait.state !== trait_1.TraitState.RESOLVED) {
                                // Skip traits that haven't been resolved successfully.
                                continue;
                            }
                            else if (trait.handler.index === undefined) {
                                // Skip traits that don't affect indexing.
                                continue;
                            }
                            trait.handler.index(ctx, clazz, trait.analysis, trait.resolution);
                        }
                    }
                    catch (e_13_1) { e_13 = { error: e_13_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_13) throw e_13.error; }
                    }
                }
            }
            catch (e_12_1) { e_12 = { error: e_12_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_12) throw e_12.error; }
            }
        };
        TraitCompiler.prototype.compile = function (clazz, constantPool) {
            var e_14, _a;
            var original = ts.getOriginalNode(clazz);
            if (!this.reflector.isClass(clazz) || !this.reflector.isClass(original) ||
                !this.classes.has(original)) {
                return null;
            }
            var record = this.classes.get(original);
            var res = [];
            var _loop_2 = function (trait) {
                var e_15, _a;
                if (trait.state !== trait_1.TraitState.RESOLVED) {
                    return "continue";
                }
                var compileSpan = this_1.perf.start('compileClass', original);
                var compileMatchRes = trait.handler.compile(clazz, trait.analysis, trait.resolution, constantPool);
                this_1.perf.stop(compileSpan);
                if (Array.isArray(compileMatchRes)) {
                    var _loop_3 = function (result) {
                        if (!res.some(function (r) { return r.name === result.name; })) {
                            res.push(result);
                        }
                    };
                    try {
                        for (var compileMatchRes_1 = (e_15 = void 0, tslib_1.__values(compileMatchRes)), compileMatchRes_1_1 = compileMatchRes_1.next(); !compileMatchRes_1_1.done; compileMatchRes_1_1 = compileMatchRes_1.next()) {
                            var result = compileMatchRes_1_1.value;
                            _loop_3(result);
                        }
                    }
                    catch (e_15_1) { e_15 = { error: e_15_1 }; }
                    finally {
                        try {
                            if (compileMatchRes_1_1 && !compileMatchRes_1_1.done && (_a = compileMatchRes_1.return)) _a.call(compileMatchRes_1);
                        }
                        finally { if (e_15) throw e_15.error; }
                    }
                }
                else if (!res.some(function (result) { return result.name === compileMatchRes.name; })) {
                    res.push(compileMatchRes);
                }
            };
            var this_1 = this;
            try {
                for (var _b = tslib_1.__values(record.traits), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var trait = _c.value;
                    _loop_2(trait);
                }
            }
            catch (e_14_1) { e_14 = { error: e_14_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_14) throw e_14.error; }
            }
            // Look up the .d.ts transformer for the input file and record that at least one field was
            // generated, which will allow the .d.ts to be transformed later.
            this.dtsTransforms.getIvyDeclarationTransform(original.getSourceFile())
                .addFields(original, res);
            // Return the instruction to the transformer so the fields will be added.
            return res.length > 0 ? res : null;
        };
        TraitCompiler.prototype.decoratorsFor = function (node) {
            var e_16, _a;
            var original = ts.getOriginalNode(node);
            if (!this.reflector.isClass(original) || !this.classes.has(original)) {
                return [];
            }
            var record = this.classes.get(original);
            var decorators = [];
            try {
                for (var _b = tslib_1.__values(record.traits), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var trait = _c.value;
                    if (trait.state !== trait_1.TraitState.RESOLVED) {
                        continue;
                    }
                    if (trait.detected.trigger !== null && ts.isDecorator(trait.detected.trigger)) {
                        decorators.push(trait.detected.trigger);
                    }
                }
            }
            catch (e_16_1) { e_16 = { error: e_16_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_16) throw e_16.error; }
            }
            return decorators;
        };
        Object.defineProperty(TraitCompiler.prototype, "diagnostics", {
            get: function () {
                var e_17, _a, e_18, _b;
                var diagnostics = [];
                try {
                    for (var _c = tslib_1.__values(this.classes.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var clazz = _d.value;
                        var record = this.classes.get(clazz);
                        if (record.metaDiagnostics !== null) {
                            diagnostics.push.apply(diagnostics, tslib_1.__spread(record.metaDiagnostics));
                        }
                        try {
                            for (var _e = (e_18 = void 0, tslib_1.__values(record.traits)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var trait = _f.value;
                                if (trait.state === trait_1.TraitState.ERRORED) {
                                    diagnostics.push.apply(diagnostics, tslib_1.__spread(trait.diagnostics));
                                }
                            }
                        }
                        catch (e_18_1) { e_18 = { error: e_18_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_18) throw e_18.error; }
                        }
                    }
                }
                catch (e_17_1) { e_17 = { error: e_17_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_17) throw e_17.error; }
                }
                return diagnostics;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TraitCompiler.prototype, "exportStatements", {
            get: function () {
                return this.reexportMap;
            },
            enumerable: true,
            configurable: true
        });
        return TraitCompiler;
    }());
    exports.TraitCompiler = TraitCompiler;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3RyYW5zZm9ybS9zcmMvY29tcGlsYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBR0gsK0JBQWlDO0lBRWpDLDJFQUFrRTtJQU1sRSxrRkFBb0U7SUFFcEUseUVBQXNIO0lBRXRILDZFQUF3RDtJQXFDeEQ7Ozs7Ozs7Ozs7T0FVRztJQUNIO1FBaUJFLHVCQUNZLFFBQXVELEVBQ3ZELFNBQXlCLEVBQVUsSUFBa0IsRUFDckQsZ0JBQStDLEVBQy9DLHlCQUFrQyxFQUFVLGFBQW1DOztZQUgvRSxhQUFRLEdBQVIsUUFBUSxDQUErQztZQUN2RCxjQUFTLEdBQVQsU0FBUyxDQUFnQjtZQUFVLFNBQUksR0FBSixJQUFJLENBQWM7WUFDckQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUErQjtZQUMvQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQVM7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7WUFwQjNGOzs7ZUFHRztZQUNLLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztZQUUzRDs7O2VBR0c7WUFDTyxrQkFBYSxHQUFHLElBQUksR0FBRyxFQUF3QyxDQUFDO1lBRWxFLGdCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQXlDLENBQUM7WUFFL0QsbUJBQWMsR0FBRyxJQUFJLEdBQUcsRUFBdUQsQ0FBQzs7Z0JBT3RGLEtBQXNCLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUEsd0RBQUU7b0JBQTNCLElBQU0sT0FBTyxxQkFBQTtvQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDaEQ7Ozs7Ozs7OztRQUNILENBQUM7UUFFRCxtQ0FB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Q3hDOzZCQUNGOzs7Ozs7Ozs7cUJBQ0Y7Ozs7Ozs7OztnQkFDRCxPQUFPLFdBQVcsQ0FBQztZQUNyQixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDJDQUFnQjtpQkFBcEI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFCLENBQUM7OztXQUFBO1FBQ0gsb0JBQUM7SUFBRCxDQUFDLEFBcGRELElBb2RDO0lBcGRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbnN0YW50UG9vbH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7RXJyb3JDb2RlLCBGYXRhbERpYWdub3N0aWNFcnJvcn0gZnJvbSAnLi4vLi4vZGlhZ25vc3RpY3MnO1xuaW1wb3J0IHtJbmNyZW1lbnRhbEJ1aWxkfSBmcm9tICcuLi8uLi9pbmNyZW1lbnRhbC9hcGknO1xuaW1wb3J0IHtJbmRleGluZ0NvbnRleHR9IGZyb20gJy4uLy4uL2luZGV4ZXInO1xuaW1wb3J0IHtQZXJmUmVjb3JkZXJ9IGZyb20gJy4uLy4uL3BlcmYnO1xuaW1wb3J0IHtDbGFzc0RlY2xhcmF0aW9uLCBEZWNvcmF0b3IsIFJlZmxlY3Rpb25Ib3N0fSBmcm9tICcuLi8uLi9yZWZsZWN0aW9uJztcbmltcG9ydCB7VHlwZUNoZWNrQ29udGV4dH0gZnJvbSAnLi4vLi4vdHlwZWNoZWNrJztcbmltcG9ydCB7Z2V0U291cmNlRmlsZSwgaXNFeHBvcnRlZH0gZnJvbSAnLi4vLi4vdXRpbC9zcmMvdHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7QW5hbHlzaXNPdXRwdXQsIENvbXBpbGVSZXN1bHQsIERlY29yYXRvckhhbmRsZXIsIEhhbmRsZXJGbGFncywgSGFuZGxlclByZWNlZGVuY2UsIFJlc29sdmVSZXN1bHR9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7RHRzVHJhbnNmb3JtUmVnaXN0cnl9IGZyb20gJy4vZGVjbGFyYXRpb24nO1xuaW1wb3J0IHtQZW5kaW5nVHJhaXQsIFRyYWl0LCBUcmFpdFN0YXRlfSBmcm9tICcuL3RyYWl0JztcblxuXG4vKipcbiAqIFJlY29yZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBjbGFzcyB0aGF0IGhhcyBtYXRjaGVkIHRyYWl0cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDbGFzc1JlY29yZCB7XG4gIC8qKlxuICAgKiBUaGUgYENsYXNzRGVjbGFyYXRpb25gIG9mIHRoZSBjbGFzcyB3aGljaCBoYXMgQW5ndWxhciB0cmFpdHMgYXBwbGllZC5cbiAgICovXG4gIG5vZGU6IENsYXNzRGVjbGFyYXRpb247XG5cbiAgLyoqXG4gICAqIEFsbCB0cmFpdHMgd2hpY2ggbWF0Y2hlZCBvbiB0aGUgY2xhc3MuXG4gICAqL1xuICB0cmFpdHM6IFRyYWl0PHVua25vd24sIHVua25vd24sIHVua25vd24+W107XG5cbiAgLyoqXG4gICAqIE1ldGEtZGlhZ25vc3RpY3MgYWJvdXQgdGhlIGNsYXNzLCB3aGljaCBhcmUgdXN1YWxseSByZWxhdGVkIHRvIHdoZXRoZXIgY2VydGFpbiBjb21iaW5hdGlvbnMgb2ZcbiAgICogQW5ndWxhciBkZWNvcmF0b3JzIGFyZSBub3QgcGVybWl0dGVkLlxuICAgKi9cbiAgbWV0YURpYWdub3N0aWNzOiB0cy5EaWFnbm9zdGljW118bnVsbDtcblxuICAvLyBTdWJzZXF1ZW50IGZpZWxkcyBhcmUgXCJpbnRlcm5hbFwiIGFuZCB1c2VkIGR1cmluZyB0aGUgbWF0Y2hpbmcgb2YgYERlY29yYXRvckhhbmRsZXJgcy4gVGhpcyBpc1xuICAvLyBtdXRhYmxlIHN0YXRlIGR1cmluZyB0aGUgYGRldGVjdGAvYGFuYWx5emVgIHBoYXNlcyBvZiBjb21waWxhdGlvbi5cblxuICAvKipcbiAgICogV2hldGhlciBgdHJhaXRzYCBjb250YWlucyB0cmFpdHMgbWF0Y2hlZCBmcm9tIGBEZWNvcmF0b3JIYW5kbGVyYHMgbWFya2VkIGFzIGBXRUFLYC5cbiAgICovXG4gIGhhc1dlYWtIYW5kbGVyczogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciBgdHJhaXRzYCBjb250YWlucyBhIHRyYWl0IGZyb20gYSBgRGVjb3JhdG9ySGFuZGxlcmAgbWF0Y2hlZCBhcyBgUFJJTUFSWWAuXG4gICAqL1xuICBoYXNQcmltYXJ5SGFuZGxlcjogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGUgaGVhcnQgb2YgQW5ndWxhciBjb21waWxhdGlvbi5cbiAqXG4gKiBUaGUgYFRyYWl0Q29tcGlsZXJgIGlzIHJlc3BvbnNpYmxlIGZvciBwcm9jZXNzaW5nIGFsbCBjbGFzc2VzIGluIHRoZSBwcm9ncmFtLiBBbnkgdGltZSBhXG4gKiBgRGVjb3JhdG9ySGFuZGxlcmAgbWF0Y2hlcyBhIGNsYXNzLCBhIFwidHJhaXRcIiBpcyBjcmVhdGVkIHRvIHJlcHJlc2VudCB0aGF0IEFuZ3VsYXIgYXNwZWN0IG9mIHRoZVxuICogY2xhc3MgKHN1Y2ggYXMgdGhlIGNsYXNzIGhhdmluZyBhIGNvbXBvbmVudCBkZWZpbml0aW9uKS5cbiAqXG4gKiBUaGUgYFRyYWl0Q29tcGlsZXJgIHRyYW5zaXRpb25zIGVhY2ggdHJhaXQgdGhyb3VnaCB0aGUgdmFyaW91cyBwaGFzZXMgb2YgY29tcGlsYXRpb24sIGN1bG1pbmF0aW5nXG4gKiBpbiB0aGUgcHJvZHVjdGlvbiBvZiBgQ29tcGlsZVJlc3VsdGBzIGluc3RydWN0aW5nIHRoZSBjb21waWxlciB0byBhcHBseSB2YXJpb3VzIG11dGF0aW9ucyB0byB0aGVcbiAqIGNsYXNzIChsaWtlIGFkZGluZyBmaWVsZHMgb3IgdHlwZSBkZWNsYXJhdGlvbnMpLlxuICovXG5leHBvcnQgY2xhc3MgVHJhaXRDb21waWxlciB7XG4gIC8qKlxuICAgKiBNYXBzIGNsYXNzIGRlY2xhcmF0aW9ucyB0byB0aGVpciBgQ2xhc3NSZWNvcmRgLCB3aGljaCB0cmFja3MgdGhlIEl2eSB0cmFpdHMgYmVpbmcgYXBwbGllZCB0b1xuICAgKiB0aG9zZSBjbGFzc2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBjbGFzc2VzID0gbmV3IE1hcDxDbGFzc0RlY2xhcmF0aW9uLCBDbGFzc1JlY29yZD4oKTtcblxuICAvKipcbiAgICogTWFwcyBzb3VyY2UgZmlsZXMgdG8gYW55IGNsYXNzIGRlY2xhcmF0aW9uKHMpIHdpdGhpbiB0aGVtIHdoaWNoIGhhdmUgYmVlbiBkaXNjb3ZlcmVkIHRvIGNvbnRhaW5cbiAgICogSXZ5IHRyYWl0cy5cbiAgICovXG4gIHByb3RlY3RlZCBmaWxlVG9DbGFzc2VzID0gbmV3IE1hcDx0cy5Tb3VyY2VGaWxlLCBTZXQ8Q2xhc3NEZWNsYXJhdGlvbj4+KCk7XG5cbiAgcHJpdmF0ZSByZWV4cG9ydE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBbc3RyaW5nLCBzdHJpbmddPj4oKTtcblxuICBwcml2YXRlIGhhbmRsZXJzQnlOYW1lID0gbmV3IE1hcDxzdHJpbmcsIERlY29yYXRvckhhbmRsZXI8dW5rbm93biwgdW5rbm93biwgdW5rbm93bj4+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGhhbmRsZXJzOiBEZWNvcmF0b3JIYW5kbGVyPHVua25vd24sIHVua25vd24sIHVua25vd24+W10sXG4gICAgICBwcml2YXRlIHJlZmxlY3RvcjogUmVmbGVjdGlvbkhvc3QsIHByaXZhdGUgcGVyZjogUGVyZlJlY29yZGVyLFxuICAgICAgcHJpdmF0ZSBpbmNyZW1lbnRhbEJ1aWxkOiBJbmNyZW1lbnRhbEJ1aWxkPENsYXNzUmVjb3JkPixcbiAgICAgIHByaXZhdGUgY29tcGlsZU5vbkV4cG9ydGVkQ2xhc3NlczogYm9vbGVhbiwgcHJpdmF0ZSBkdHNUcmFuc2Zvcm1zOiBEdHNUcmFuc2Zvcm1SZWdpc3RyeSkge1xuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiBoYW5kbGVycykge1xuICAgICAgdGhpcy5oYW5kbGVyc0J5TmFtZS5zZXQoaGFuZGxlci5uYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBhbmFseXplU3luYyhzZjogdHMuU291cmNlRmlsZSk6IHZvaWQge1xuICAgIHRoaXMuYW5hbHl6ZShzZiwgZmFsc2UpO1xuICB9XG5cbiAgYW5hbHl6ZUFzeW5jKHNmOiB0cy5Tb3VyY2VGaWxlKTogUHJvbWlzZTx2b2lkPnx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmFuYWx5emUoc2YsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhbmFseXplKHNmOiB0cy5Tb3VyY2VGaWxlLCBwcmVhbmFseXplOiBmYWxzZSk6IHZvaWQ7XG4gIHByaXZhdGUgYW5hbHl6ZShzZjogdHMuU291cmNlRmlsZSwgcHJlYW5hbHl6ZTogdHJ1ZSk6IFByb21pc2U8dm9pZD58dW5kZWZpbmVkO1xuICBwcml2YXRlIGFuYWx5emUoc2Y6IHRzLlNvdXJjZUZpbGUsIHByZWFuYWx5emU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+fHVuZGVmaW5lZCB7XG4gICAgLy8gV2Ugc2hvdWxkbid0IGFuYWx5emUgZGVjbGFyYXRpb24gZmlsZXMuXG4gICAgaWYgKHNmLmlzRGVjbGFyYXRpb25GaWxlKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIGFuYWx5emUoKSByZWFsbHkgd2FudHMgdG8gcmV0dXJuIGBQcm9taXNlPHZvaWQ+fHZvaWRgLCBidXQgVHlwZVNjcmlwdCBjYW5ub3QgbmFycm93IGEgcmV0dXJuXG4gICAgLy8gdHlwZSBvZiAndm9pZCcsIHNvIGB1bmRlZmluZWRgIGlzIHVzZWQgaW5zdGVhZC5cbiAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTx2b2lkPltdID0gW107XG5cbiAgICBjb25zdCBwcmlvcldvcmsgPSB0aGlzLmluY3JlbWVudGFsQnVpbGQucHJpb3JXb3JrRm9yKHNmKTtcbiAgICBpZiAocHJpb3JXb3JrICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IHByaW9yUmVjb3JkIG9mIHByaW9yV29yaykge1xuICAgICAgICB0aGlzLmFkb3B0KHByaW9yUmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2tpcCB0aGUgcmVzdCBvZiBhbmFseXNpcywgYXMgdGhpcyBmaWxlJ3MgcHJpb3IgdHJhaXRzIGFyZSBiZWluZyByZXVzZWQuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmlzaXQgPSAobm9kZTogdHMuTm9kZSk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMucmVmbGVjdG9yLmlzQ2xhc3Mobm9kZSkpIHtcbiAgICAgICAgdGhpcy5hbmFseXplQ2xhc3Mobm9kZSwgcHJlYW5hbHl6ZSA/IHByb21pc2VzIDogbnVsbCk7XG4gICAgICB9XG4gICAgICB0cy5mb3JFYWNoQ2hpbGQobm9kZSwgdmlzaXQpO1xuICAgIH07XG5cbiAgICB2aXNpdChzZik7XG5cbiAgICBpZiAocHJlYW5hbHl6ZSAmJiBwcm9taXNlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4gdW5kZWZpbmVkIGFzIHZvaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHJlY29yZEZvcihjbGF6ejogQ2xhc3NEZWNsYXJhdGlvbik6IENsYXNzUmVjb3JkfG51bGwge1xuICAgIGlmICh0aGlzLmNsYXNzZXMuaGFzKGNsYXp6KSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2xhc3Nlcy5nZXQoY2xhenopITtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVjb3Jkc0ZvcihzZjogdHMuU291cmNlRmlsZSk6IENsYXNzUmVjb3JkW118bnVsbCB7XG4gICAgaWYgKCF0aGlzLmZpbGVUb0NsYXNzZXMuaGFzKHNmKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHJlY29yZHM6IENsYXNzUmVjb3JkW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNsYXp6IG9mIHRoaXMuZmlsZVRvQ2xhc3Nlcy5nZXQoc2YpISkge1xuICAgICAgcmVjb3Jkcy5wdXNoKHRoaXMuY2xhc3Nlcy5nZXQoY2xhenopISk7XG4gICAgfVxuICAgIHJldHVybiByZWNvcmRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBhIGBDbGFzc1JlY29yZGAgZnJvbSBhIHByZXZpb3VzIGNvbXBpbGF0aW9uLlxuICAgKlxuICAgKiBUcmFpdHMgZnJvbSB0aGUgYENsYXNzUmVjb3JkYCBoYXZlIGFjY3VyYXRlIG1ldGFkYXRhLCBidXQgdGhlIGBoYW5kbGVyYCBpcyBmcm9tIHRoZSBvbGQgcHJvZ3JhbVxuICAgKiBhbmQgbmVlZHMgdG8gYmUgdXBkYXRlZCAobWF0Y2hpbmcgaXMgZG9uZSBieSBuYW1lKS4gQSBuZXcgcGVuZGluZyB0cmFpdCBpcyBjcmVhdGVkIGFuZCB0aGVuXG4gICAqIHRyYW5zaXRpb25lZCB0byBhbmFseXplZCB1c2luZyB0aGUgcHJldmlvdXMgYW5hbHlzaXMuIElmIHRoZSB0cmFpdCBpcyBpbiB0aGUgZXJyb3JlZCBzdGF0ZSxcbiAgICogaW5zdGVhZCB0aGUgZXJyb3JzIGFyZSBjb3BpZWQgb3Zlci5cbiAgICovXG4gIHByaXZhdGUgYWRvcHQocHJpb3JSZWNvcmQ6IENsYXNzUmVjb3JkKTogdm9pZCB7XG4gICAgY29uc3QgcmVjb3JkOiBDbGFzc1JlY29yZCA9IHtcbiAgICAgIGhhc1ByaW1hcnlIYW5kbGVyOiBwcmlvclJlY29yZC5oYXNQcmltYXJ5SGFuZGxlcixcbiAgICAgIGhhc1dlYWtIYW5kbGVyczogcHJpb3JSZWNvcmQuaGFzV2Vha0hhbmRsZXJzLFxuICAgICAgbWV0YURpYWdub3N0aWNzOiBwcmlvclJlY29yZC5tZXRhRGlhZ25vc3RpY3MsXG4gICAgICBub2RlOiBwcmlvclJlY29yZC5ub2RlLFxuICAgICAgdHJhaXRzOiBbXSxcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBwcmlvclRyYWl0IG9mIHByaW9yUmVjb3JkLnRyYWl0cykge1xuICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlcnNCeU5hbWUuZ2V0KHByaW9yVHJhaXQuaGFuZGxlci5uYW1lKSE7XG4gICAgICBsZXQgdHJhaXQ6IFRyYWl0PHVua25vd24sIHVua25vd24sIHVua25vd24+ID0gVHJhaXQucGVuZGluZyhoYW5kbGVyLCBwcmlvclRyYWl0LmRldGVjdGVkKTtcblxuICAgICAgaWYgKHByaW9yVHJhaXQuc3RhdGUgPT09IFRyYWl0U3RhdGUuQU5BTFlaRUQgfHwgcHJpb3JUcmFpdC5zdGF0ZSA9PT0gVHJhaXRTdGF0ZS5SRVNPTFZFRCkge1xuICAgICAgICB0cmFpdCA9IHRyYWl0LnRvQW5hbHl6ZWQocHJpb3JUcmFpdC5hbmFseXNpcyk7XG4gICAgICAgIGlmICh0cmFpdC5oYW5kbGVyLnJlZ2lzdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0cmFpdC5oYW5kbGVyLnJlZ2lzdGVyKHJlY29yZC5ub2RlLCB0cmFpdC5hbmFseXNpcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocHJpb3JUcmFpdC5zdGF0ZSA9PT0gVHJhaXRTdGF0ZS5TS0lQUEVEKSB7XG4gICAgICAgIHRyYWl0ID0gdHJhaXQudG9Ta2lwcGVkKCk7XG4gICAgICB9IGVsc2UgaWYgKHByaW9yVHJhaXQuc3RhdGUgPT09IFRyYWl0U3RhdGUuRVJST1JFRCkge1xuICAgICAgICB0cmFpdCA9IHRyYWl0LnRvRXJyb3JlZChwcmlvclRyYWl0LmRpYWdub3N0aWNzKTtcbiAgICAgIH1cblxuICAgICAgcmVjb3JkLnRyYWl0cy5wdXNoKHRyYWl0KTtcbiAgICB9XG5cbiAgICB0aGlzLmNsYXNzZXMuc2V0KHJlY29yZC5ub2RlLCByZWNvcmQpO1xuICAgIGNvbnN0IHNmID0gcmVjb3JkLm5vZGUuZ2V0U291cmNlRmlsZSgpO1xuICAgIGlmICghdGhpcy5maWxlVG9DbGFzc2VzLmhhcyhzZikpIHtcbiAgICAgIHRoaXMuZmlsZVRvQ2xhc3Nlcy5zZXQoc2YsIG5ldyBTZXQ8Q2xhc3NEZWNsYXJhdGlvbj4oKSk7XG4gICAgfVxuICAgIHRoaXMuZmlsZVRvQ2xhc3Nlcy5nZXQoc2YpIS5hZGQocmVjb3JkLm5vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzY2FuQ2xhc3NGb3JUcmFpdHMoY2xheno6IENsYXNzRGVjbGFyYXRpb24pOlxuICAgICAgUGVuZGluZ1RyYWl0PHVua25vd24sIHVua25vd24sIHVua25vd24+W118bnVsbCB7XG4gICAgaWYgKCF0aGlzLmNvbXBpbGVOb25FeHBvcnRlZENsYXNzZXMgJiYgIWlzRXhwb3J0ZWQoY2xhenopKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvcmF0b3JzID0gdGhpcy5yZWZsZWN0b3IuZ2V0RGVjb3JhdG9yc09mRGVjbGFyYXRpb24oY2xhenopO1xuXG4gICAgcmV0dXJuIHRoaXMuZGV0ZWN0VHJhaXRzKGNsYXp6LCBkZWNvcmF0b3JzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZXRlY3RUcmFpdHMoY2xheno6IENsYXNzRGVjbGFyYXRpb24sIGRlY29yYXRvcnM6IERlY29yYXRvcltdfG51bGwpOlxuICAgICAgUGVuZGluZ1RyYWl0PHVua25vd24sIHVua25vd24sIHVua25vd24+W118bnVsbCB7XG4gICAgbGV0IHJlY29yZDogQ2xhc3NSZWNvcmR8bnVsbCA9IHRoaXMucmVjb3JkRm9yKGNsYXp6KTtcbiAgICBsZXQgZm91bmRUcmFpdHM6IFBlbmRpbmdUcmFpdDx1bmtub3duLCB1bmtub3duLCB1bmtub3duPltdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5oYW5kbGVycykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlci5kZXRlY3QoY2xhenosIGRlY29yYXRvcnMpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1ByaW1hcnlIYW5kbGVyID0gaGFuZGxlci5wcmVjZWRlbmNlID09PSBIYW5kbGVyUHJlY2VkZW5jZS5QUklNQVJZO1xuICAgICAgY29uc3QgaXNXZWFrSGFuZGxlciA9IGhhbmRsZXIucHJlY2VkZW5jZSA9PT0gSGFuZGxlclByZWNlZGVuY2UuV0VBSztcbiAgICAgIGNvbnN0IHRyYWl0ID0gVHJhaXQucGVuZGluZyhoYW5kbGVyLCByZXN1bHQpO1xuXG4gICAgICBmb3VuZFRyYWl0cy5wdXNoKHRyYWl0KTtcblxuICAgICAgaWYgKHJlY29yZCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCBoYW5kbGVyIHRvIG1hdGNoIHRoaXMgY2xhc3MuIFRoaXMgcGF0aCBpcyBhIGZhc3QgcGF0aCB0aHJvdWdoIHdoaWNoXG4gICAgICAgIC8vIG1vc3QgY2xhc3NlcyB3aWxsIGZsb3cuXG4gICAgICAgIHJlY29yZCA9IHtcbiAgICAgICAgICBub2RlOiBjbGF6eixcbiAgICAgICAgICB0cmFpdHM6IFt0cmFpdF0sXG4gICAgICAgICAgbWV0YURpYWdub3N0aWNzOiBudWxsLFxuICAgICAgICAgIGhhc1ByaW1hcnlIYW5kbGVyOiBpc1ByaW1hcnlIYW5kbGVyLFxuICAgICAgICAgIGhhc1dlYWtIYW5kbGVyczogaXNXZWFrSGFuZGxlcixcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNsYXNzZXMuc2V0KGNsYXp6LCByZWNvcmQpO1xuICAgICAgICBjb25zdCBzZiA9IGNsYXp6LmdldFNvdXJjZUZpbGUoKTtcbiAgICAgICAgaWYgKCF0aGlzLmZpbGVUb0NsYXNzZXMuaGFzKHNmKSkge1xuICAgICAgICAgIHRoaXMuZmlsZVRvQ2xhc3Nlcy5zZXQoc2YsIG5ldyBTZXQ8Q2xhc3NEZWNsYXJhdGlvbj4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWxlVG9DbGFzc2VzLmdldChzZikhLmFkZChjbGF6eik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGlzIGlzIGF0IGxlYXN0IHRoZSBzZWNvbmQgaGFuZGxlciB0byBtYXRjaCB0aGlzIGNsYXNzLiBUaGlzIGlzIGEgc2xvd2VyIHBhdGggdGhhdCBzb21lXG4gICAgICAgIC8vIGNsYXNzZXMgd2lsbCBnbyB0aHJvdWdoLCB3aGljaCB2YWxpZGF0ZXMgdGhhdCB0aGUgc2V0IG9mIGRlY29yYXRvcnMgYXBwbGllZCB0byB0aGUgY2xhc3NcbiAgICAgICAgLy8gaXMgdmFsaWQuXG5cbiAgICAgICAgLy8gVmFsaWRhdGUgYWNjb3JkaW5nIHRvIHJ1bGVzIGFzIGZvbGxvd3M6XG4gICAgICAgIC8vXG4gICAgICAgIC8vICogV0VBSyBoYW5kbGVycyBhcmUgcmVtb3ZlZCBpZiBhIG5vbi1XRUFLIGhhbmRsZXIgbWF0Y2hlcy5cbiAgICAgICAgLy8gKiBPbmx5IG9uZSBQUklNQVJZIGhhbmRsZXIgY2FuIG1hdGNoIGF0IGEgdGltZS4gQW55IG90aGVyIFBSSU1BUlkgaGFuZGxlciBtYXRjaGluZyBhXG4gICAgICAgIC8vICAgY2xhc3Mgd2l0aCBhbiBleGlzdGluZyBQUklNQVJZIGhhbmRsZXIgaXMgYW4gZXJyb3IuXG5cbiAgICAgICAgaWYgKCFpc1dlYWtIYW5kbGVyICYmIHJlY29yZC5oYXNXZWFrSGFuZGxlcnMpIHtcbiAgICAgICAgICAvLyBUaGUgY3VycmVudCBoYW5kbGVyIGlzIG5vdCBhIFdFQUsgaGFuZGxlciwgYnV0IHRoZSBjbGFzcyBoYXMgb3RoZXIgV0VBSyBoYW5kbGVycy5cbiAgICAgICAgICAvLyBSZW1vdmUgdGhlbS5cbiAgICAgICAgICByZWNvcmQudHJhaXRzID1cbiAgICAgICAgICAgICAgcmVjb3JkLnRyYWl0cy5maWx0ZXIoZmllbGQgPT4gZmllbGQuaGFuZGxlci5wcmVjZWRlbmNlICE9PSBIYW5kbGVyUHJlY2VkZW5jZS5XRUFLKTtcbiAgICAgICAgICByZWNvcmQuaGFzV2Vha0hhbmRsZXJzID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNXZWFrSGFuZGxlciAmJiAhcmVjb3JkLmhhc1dlYWtIYW5kbGVycykge1xuICAgICAgICAgIC8vIFRoZSBjdXJyZW50IGhhbmRsZXIgaXMgYSBXRUFLIGhhbmRsZXIsIGJ1dCB0aGUgY2xhc3MgaGFzIG5vbi1XRUFLIGhhbmRsZXJzIGFscmVhZHkuXG4gICAgICAgICAgLy8gRHJvcCB0aGUgY3VycmVudCBvbmUuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNQcmltYXJ5SGFuZGxlciAmJiByZWNvcmQuaGFzUHJpbWFyeUhhbmRsZXIpIHtcbiAgICAgICAgICAvLyBUaGUgY2xhc3MgYWxyZWFkeSBoYXMgYSBQUklNQVJZIGhhbmRsZXIsIGFuZCBhbm90aGVyIG9uZSBqdXN0IG1hdGNoZWQuXG4gICAgICAgICAgcmVjb3JkLm1ldGFEaWFnbm9zdGljcyA9IFt7XG4gICAgICAgICAgICBjYXRlZ29yeTogdHMuRGlhZ25vc3RpY0NhdGVnb3J5LkVycm9yLFxuICAgICAgICAgICAgY29kZTogTnVtYmVyKCctOTknICsgRXJyb3JDb2RlLkRFQ09SQVRPUl9DT0xMSVNJT04pLFxuICAgICAgICAgICAgZmlsZTogZ2V0U291cmNlRmlsZShjbGF6eiksXG4gICAgICAgICAgICBzdGFydDogY2xhenouZ2V0U3RhcnQodW5kZWZpbmVkLCBmYWxzZSksXG4gICAgICAgICAgICBsZW5ndGg6IGNsYXp6LmdldFdpZHRoKCksXG4gICAgICAgICAgICBtZXNzYWdlVGV4dDogJ1R3byBpbmNvbXBhdGlibGUgZGVjb3JhdG9ycyBvbiBjbGFzcycsXG4gICAgICAgICAgfV07XG4gICAgICAgICAgcmVjb3JkLnRyYWl0cyA9IGZvdW5kVHJhaXRzID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIGl0J3Mgc2FmZSB0byBhY2NlcHQgdGhlIG11bHRpcGxlIGRlY29yYXRvcnMgaGVyZS4gVXBkYXRlIHNvbWUgb2YgdGhlIG1ldGFkYXRhXG4gICAgICAgIC8vIHJlZ2FyZGluZyB0aGlzIGNsYXNzLlxuICAgICAgICByZWNvcmQudHJhaXRzLnB1c2godHJhaXQpO1xuICAgICAgICByZWNvcmQuaGFzUHJpbWFyeUhhbmRsZXIgPSByZWNvcmQuaGFzUHJpbWFyeUhhbmRsZXIgfHwgaXNQcmltYXJ5SGFuZGxlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmRUcmFpdHMubGVuZ3RoID4gMCA/IGZvdW5kVHJhaXRzIDogbnVsbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBhbmFseXplQ2xhc3MoY2xheno6IENsYXNzRGVjbGFyYXRpb24sIHByZWFuYWx5emVRdWV1ZTogUHJvbWlzZTx2b2lkPltdfG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCB0cmFpdHMgPSB0aGlzLnNjYW5DbGFzc0ZvclRyYWl0cyhjbGF6eik7XG5cbiAgICBpZiAodHJhaXRzID09PSBudWxsKSB7XG4gICAgICAvLyBUaGVyZSBhcmUgbm8gSXZ5IHRyYWl0cyBvbiB0aGUgY2xhc3MsIHNvIGl0IGNhbiBzYWZlbHkgYmUgc2tpcHBlZC5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHRyYWl0IG9mIHRyYWl0cykge1xuICAgICAgY29uc3QgYW5hbHl6ZSA9ICgpID0+IHRoaXMuYW5hbHl6ZVRyYWl0KGNsYXp6LCB0cmFpdCk7XG5cbiAgICAgIGxldCBwcmVhbmFseXNpczogUHJvbWlzZTx2b2lkPnxudWxsID0gbnVsbDtcbiAgICAgIGlmIChwcmVhbmFseXplUXVldWUgIT09IG51bGwgJiYgdHJhaXQuaGFuZGxlci5wcmVhbmFseXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBydW4gcHJlYW5hbHlzaXMuIFRoaXMgY291bGQgZmFpbCB3aXRoIGEgYEZhdGFsRGlhZ25vc3RpY0Vycm9yYDsgY2F0Y2ggaXQgaWYgaXRcbiAgICAgICAgLy8gZG9lcy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBwcmVhbmFseXNpcyA9IHRyYWl0LmhhbmRsZXIucHJlYW5hbHl6ZShjbGF6eiwgdHJhaXQuZGV0ZWN0ZWQubWV0YWRhdGEpIHx8IG51bGw7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBGYXRhbERpYWdub3N0aWNFcnJvcikge1xuICAgICAgICAgICAgdHJhaXQudG9FcnJvcmVkKFtlcnIudG9EaWFnbm9zdGljKCldKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByZWFuYWx5c2lzICE9PSBudWxsKSB7XG4gICAgICAgIHByZWFuYWx5emVRdWV1ZSEucHVzaChwcmVhbmFseXNpcy50aGVuKGFuYWx5emUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuYWx5emUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYW5hbHl6ZVRyYWl0KFxuICAgICAgY2xheno6IENsYXNzRGVjbGFyYXRpb24sIHRyYWl0OiBUcmFpdDx1bmtub3duLCB1bmtub3duLCB1bmtub3duPixcbiAgICAgIGZsYWdzPzogSGFuZGxlckZsYWdzKTogdm9pZCB7XG4gICAgaWYgKHRyYWl0LnN0YXRlICE9PSBUcmFpdFN0YXRlLlBFTkRJTkcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdCB0byBhbmFseXplIHRyYWl0IG9mICR7Y2xhenoubmFtZS50ZXh0fSBpbiBzdGF0ZSAke1xuICAgICAgICAgIFRyYWl0U3RhdGVbdHJhaXQuc3RhdGVdfSAoZXhwZWN0ZWQgREVURUNURUQpYCk7XG4gICAgfVxuXG4gICAgLy8gQXR0ZW1wdCBhbmFseXNpcy4gVGhpcyBjb3VsZCBmYWlsIHdpdGggYSBgRmF0YWxEaWFnbm9zdGljRXJyb3JgOyBjYXRjaCBpdCBpZiBpdCBkb2VzLlxuICAgIGxldCByZXN1bHQ6IEFuYWx5c2lzT3V0cHV0PHVua25vd24+O1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSB0cmFpdC5oYW5kbGVyLmFuYWx5emUoY2xhenosIHRyYWl0LmRldGVjdGVkLm1ldGFkYXRhLCBmbGFncyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRmF0YWxEaWFnbm9zdGljRXJyb3IpIHtcbiAgICAgICAgdHJhaXQgPSB0cmFpdC50b0Vycm9yZWQoW2Vyci50b0RpYWdub3N0aWMoKV0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5kaWFnbm9zdGljcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0cmFpdCA9IHRyYWl0LnRvRXJyb3JlZChyZXN1bHQuZGlhZ25vc3RpY3MpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmFuYWx5c2lzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEFuYWx5c2lzIHdhcyBzdWNjZXNzZnVsLiBUcmlnZ2VyIHJlZ2lzdHJhdGlvbi5cbiAgICAgIGlmICh0cmFpdC5oYW5kbGVyLnJlZ2lzdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdHJhaXQuaGFuZGxlci5yZWdpc3RlcihjbGF6eiwgcmVzdWx0LmFuYWx5c2lzKTtcbiAgICAgIH1cblxuICAgICAgLy8gU3VjY2Vzc2Z1bGx5IGFuYWx5emVkIGFuZCByZWdpc3RlcmVkLlxuICAgICAgdHJhaXQgPSB0cmFpdC50b0FuYWx5emVkKHJlc3VsdC5hbmFseXNpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYWl0ID0gdHJhaXQudG9Ta2lwcGVkKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc2VzID0gQXJyYXkuZnJvbSh0aGlzLmNsYXNzZXMua2V5cygpKTtcbiAgICBmb3IgKGNvbnN0IGNsYXp6IG9mIGNsYXNzZXMpIHtcbiAgICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuY2xhc3Nlcy5nZXQoY2xhenopITtcbiAgICAgIGZvciAobGV0IHRyYWl0IG9mIHJlY29yZC50cmFpdHMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRyYWl0LmhhbmRsZXI7XG4gICAgICAgIHN3aXRjaCAodHJhaXQuc3RhdGUpIHtcbiAgICAgICAgICBjYXNlIFRyYWl0U3RhdGUuU0tJUFBFRDpcbiAgICAgICAgICBjYXNlIFRyYWl0U3RhdGUuRVJST1JFRDpcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIGNhc2UgVHJhaXRTdGF0ZS5QRU5ESU5HOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXNvbHZpbmcgYSB0cmFpdCB0aGF0IGhhc24ndCBiZWVuIGFuYWx5emVkOiAke2NsYXp6Lm5hbWUudGV4dH0gLyAke1xuICAgICAgICAgICAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZih0cmFpdC5oYW5kbGVyKS5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICAgICAgICAgIGNhc2UgVHJhaXRTdGF0ZS5SRVNPTFZFRDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmVzb2x2aW5nIGFuIGFscmVhZHkgcmVzb2x2ZWQgdHJhaXRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYW5kbGVyLnJlc29sdmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIE5vIHJlc29sdXRpb24gb2YgdGhpcyB0cmFpdCBuZWVkZWQgLSBpdCdzIGNvbnNpZGVyZWQgc3VjY2Vzc2Z1bCBieSBkZWZhdWx0LlxuICAgICAgICAgIHRyYWl0ID0gdHJhaXQudG9SZXNvbHZlZChudWxsKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ6IFJlc29sdmVSZXN1bHQ8dW5rbm93bj47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gaGFuZGxlci5yZXNvbHZlKGNsYXp6LCB0cmFpdC5hbmFseXNpcyBhcyBSZWFkb25seTx1bmtub3duPik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBGYXRhbERpYWdub3N0aWNFcnJvcikge1xuICAgICAgICAgICAgdHJhaXQgPSB0cmFpdC50b0Vycm9yZWQoW2Vyci50b0RpYWdub3N0aWMoKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmRpYWdub3N0aWNzICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0LmRpYWdub3N0aWNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0cmFpdCA9IHRyYWl0LnRvRXJyb3JlZChyZXN1bHQuZGlhZ25vc3RpY3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cmFpdCA9IHRyYWl0LnRvUmVzb2x2ZWQocmVzdWx0LmRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFpdCA9IHRyYWl0LnRvUmVzb2x2ZWQobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5yZWV4cG9ydHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gY2xhenouZ2V0U291cmNlRmlsZSgpLmZpbGVOYW1lO1xuICAgICAgICAgIGlmICghdGhpcy5yZWV4cG9ydE1hcC5oYXMoZmlsZU5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlZXhwb3J0TWFwLnNldChmaWxlTmFtZSwgbmV3IE1hcDxzdHJpbmcsIFtzdHJpbmcsIHN0cmluZ10+KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBmaWxlUmVleHBvcnRzID0gdGhpcy5yZWV4cG9ydE1hcC5nZXQoZmlsZU5hbWUpITtcbiAgICAgICAgICBmb3IgKGNvbnN0IHJlZXhwb3J0IG9mIHJlc3VsdC5yZWV4cG9ydHMpIHtcbiAgICAgICAgICAgIGZpbGVSZWV4cG9ydHMuc2V0KHJlZXhwb3J0LmFzQWxpYXMsIFtyZWV4cG9ydC5mcm9tTW9kdWxlLCByZWV4cG9ydC5zeW1ib2xOYW1lXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHlwZUNoZWNrKGN0eDogVHlwZUNoZWNrQ29udGV4dCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgY2xhenogb2YgdGhpcy5jbGFzc2VzLmtleXMoKSkge1xuICAgICAgY29uc3QgcmVjb3JkID0gdGhpcy5jbGFzc2VzLmdldChjbGF6eikhO1xuICAgICAgZm9yIChjb25zdCB0cmFpdCBvZiByZWNvcmQudHJhaXRzKSB7XG4gICAgICAgIGlmICh0cmFpdC5zdGF0ZSAhPT0gVHJhaXRTdGF0ZS5SRVNPTFZFRCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYWl0LmhhbmRsZXIudHlwZUNoZWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0cmFpdC5oYW5kbGVyLnR5cGVDaGVjayhjdHgsIGNsYXp6LCB0cmFpdC5hbmFseXNpcywgdHJhaXQucmVzb2x1dGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5kZXgoY3R4OiBJbmRleGluZ0NvbnRleHQpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGNsYXp6IG9mIHRoaXMuY2xhc3Nlcy5rZXlzKCkpIHtcbiAgICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuY2xhc3Nlcy5nZXQoY2xhenopITtcbiAgICAgIGZvciAoY29uc3QgdHJhaXQgb2YgcmVjb3JkLnRyYWl0cykge1xuICAgICAgICBpZiAodHJhaXQuc3RhdGUgIT09IFRyYWl0U3RhdGUuUkVTT0xWRUQpIHtcbiAgICAgICAgICAvLyBTa2lwIHRyYWl0cyB0aGF0IGhhdmVuJ3QgYmVlbiByZXNvbHZlZCBzdWNjZXNzZnVsbHkuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhaXQuaGFuZGxlci5pbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gU2tpcCB0cmFpdHMgdGhhdCBkb24ndCBhZmZlY3QgaW5kZXhpbmcuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB0cmFpdC5oYW5kbGVyLmluZGV4KGN0eCwgY2xhenosIHRyYWl0LmFuYWx5c2lzLCB0cmFpdC5yZXNvbHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21waWxlKGNsYXp6OiB0cy5EZWNsYXJhdGlvbiwgY29uc3RhbnRQb29sOiBDb25zdGFudFBvb2wpOiBDb21waWxlUmVzdWx0W118bnVsbCB7XG4gICAgY29uc3Qgb3JpZ2luYWwgPSB0cy5nZXRPcmlnaW5hbE5vZGUoY2xhenopIGFzIHR5cGVvZiBjbGF6ejtcbiAgICBpZiAoIXRoaXMucmVmbGVjdG9yLmlzQ2xhc3MoY2xhenopIHx8ICF0aGlzLnJlZmxlY3Rvci5pc0NsYXNzKG9yaWdpbmFsKSB8fFxuICAgICAgICAhdGhpcy5jbGFzc2VzLmhhcyhvcmlnaW5hbCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuY2xhc3Nlcy5nZXQob3JpZ2luYWwpITtcblxuICAgIGxldCByZXM6IENvbXBpbGVSZXN1bHRbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCB0cmFpdCBvZiByZWNvcmQudHJhaXRzKSB7XG4gICAgICBpZiAodHJhaXQuc3RhdGUgIT09IFRyYWl0U3RhdGUuUkVTT0xWRUQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBpbGVTcGFuID0gdGhpcy5wZXJmLnN0YXJ0KCdjb21waWxlQ2xhc3MnLCBvcmlnaW5hbCk7XG4gICAgICBjb25zdCBjb21waWxlTWF0Y2hSZXMgPVxuICAgICAgICAgIHRyYWl0LmhhbmRsZXIuY29tcGlsZShjbGF6eiwgdHJhaXQuYW5hbHlzaXMsIHRyYWl0LnJlc29sdXRpb24sIGNvbnN0YW50UG9vbCk7XG4gICAgICB0aGlzLnBlcmYuc3RvcChjb21waWxlU3Bhbik7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb21waWxlTWF0Y2hSZXMpKSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIGNvbXBpbGVNYXRjaFJlcykge1xuICAgICAgICAgIGlmICghcmVzLnNvbWUociA9PiByLm5hbWUgPT09IHJlc3VsdC5uYW1lKSkge1xuICAgICAgICAgICAgcmVzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXJlcy5zb21lKHJlc3VsdCA9PiByZXN1bHQubmFtZSA9PT0gY29tcGlsZU1hdGNoUmVzLm5hbWUpKSB7XG4gICAgICAgIHJlcy5wdXNoKGNvbXBpbGVNYXRjaFJlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTG9vayB1cCB0aGUgLmQudHMgdHJhbnNmb3JtZXIgZm9yIHRoZSBpbnB1dCBmaWxlIGFuZCByZWNvcmQgdGhhdCBhdCBsZWFzdCBvbmUgZmllbGQgd2FzXG4gICAgLy8gZ2VuZXJhdGVkLCB3aGljaCB3aWxsIGFsbG93IHRoZSAuZC50cyB0byBiZSB0cmFuc2Zvcm1lZCBsYXRlci5cbiAgICB0aGlzLmR0c1RyYW5zZm9ybXMuZ2V0SXZ5RGVjbGFyYXRpb25UcmFuc2Zvcm0ob3JpZ2luYWwuZ2V0U291cmNlRmlsZSgpKVxuICAgICAgICAuYWRkRmllbGRzKG9yaWdpbmFsLCByZXMpO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBpbnN0cnVjdGlvbiB0byB0aGUgdHJhbnNmb3JtZXIgc28gdGhlIGZpZWxkcyB3aWxsIGJlIGFkZGVkLlxuICAgIHJldHVybiByZXMubGVuZ3RoID4gMCA/IHJlcyA6IG51bGw7XG4gIH1cblxuICBkZWNvcmF0b3JzRm9yKG5vZGU6IHRzLkRlY2xhcmF0aW9uKTogdHMuRGVjb3JhdG9yW10ge1xuICAgIGNvbnN0IG9yaWdpbmFsID0gdHMuZ2V0T3JpZ2luYWxOb2RlKG5vZGUpIGFzIHR5cGVvZiBub2RlO1xuICAgIGlmICghdGhpcy5yZWZsZWN0b3IuaXNDbGFzcyhvcmlnaW5hbCkgfHwgIXRoaXMuY2xhc3Nlcy5oYXMob3JpZ2luYWwpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVjb3JkID0gdGhpcy5jbGFzc2VzLmdldChvcmlnaW5hbCkhO1xuICAgIGNvbnN0IGRlY29yYXRvcnM6IHRzLkRlY29yYXRvcltdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHRyYWl0IG9mIHJlY29yZC50cmFpdHMpIHtcbiAgICAgIGlmICh0cmFpdC5zdGF0ZSAhPT0gVHJhaXRTdGF0ZS5SRVNPTFZFRCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYWl0LmRldGVjdGVkLnRyaWdnZXIgIT09IG51bGwgJiYgdHMuaXNEZWNvcmF0b3IodHJhaXQuZGV0ZWN0ZWQudHJpZ2dlcikpIHtcbiAgICAgICAgZGVjb3JhdG9ycy5wdXNoKHRyYWl0LmRldGVjdGVkLnRyaWdnZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWNvcmF0b3JzO1xuICB9XG5cbiAgZ2V0IGRpYWdub3N0aWNzKCk6IFJlYWRvbmx5QXJyYXk8dHMuRGlhZ25vc3RpYz4ge1xuICAgIGNvbnN0IGRpYWdub3N0aWNzOiB0cy5EaWFnbm9zdGljW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNsYXp6IG9mIHRoaXMuY2xhc3Nlcy5rZXlzKCkpIHtcbiAgICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuY2xhc3Nlcy5nZXQoY2xhenopITtcbiAgICAgIGlmIChyZWNvcmQubWV0YURpYWdub3N0aWNzICE9PSBudWxsKSB7XG4gICAgICAgIGRpYWdub3N0aWNzLnB1c2goLi4ucmVjb3JkLm1ldGFEaWFnbm9zdGljcyk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHRyYWl0IG9mIHJlY29yZC50cmFpdHMpIHtcbiAgICAgICAgaWYgKHRyYWl0LnN0YXRlID09PSBUcmFpdFN0YXRlLkVSUk9SRUQpIHtcbiAgICAgICAgICBkaWFnbm9zdGljcy5wdXNoKC4uLnRyYWl0LmRpYWdub3N0aWNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGlhZ25vc3RpY3M7XG4gIH1cblxuICBnZXQgZXhwb3J0U3RhdGVtZW50cygpOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBbc3RyaW5nLCBzdHJpbmddPj4ge1xuICAgIHJldHVybiB0aGlzLnJlZXhwb3J0TWFwO1xuICB9XG59XG4iXX0=