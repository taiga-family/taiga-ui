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
        define("@angular/compiler-cli/src/ngtsc/annotations/src/directive", ["require", "exports", "tslib", "@angular/compiler", "typescript", "@angular/compiler-cli/src/ngtsc/diagnostics", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/src/ngtsc/metadata/src/util", "@angular/compiler-cli/src/ngtsc/partial_evaluator", "@angular/compiler-cli/src/ngtsc/reflection", "@angular/compiler-cli/src/ngtsc/transform", "@angular/compiler-cli/src/ngtsc/annotations/src/diagnostics", "@angular/compiler-cli/src/ngtsc/annotations/src/factory", "@angular/compiler-cli/src/ngtsc/annotations/src/metadata", "@angular/compiler-cli/src/ngtsc/annotations/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var ts = require("typescript");
    var diagnostics_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var util_1 = require("@angular/compiler-cli/src/ngtsc/metadata/src/util");
    var partial_evaluator_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator");
    var reflection_1 = require("@angular/compiler-cli/src/ngtsc/reflection");
    var transform_1 = require("@angular/compiler-cli/src/ngtsc/transform");
    var diagnostics_2 = require("@angular/compiler-cli/src/ngtsc/annotations/src/diagnostics");
    var factory_1 = require("@angular/compiler-cli/src/ngtsc/annotations/src/factory");
    var metadata_1 = require("@angular/compiler-cli/src/ngtsc/annotations/src/metadata");
    var util_2 = require("@angular/compiler-cli/src/ngtsc/annotations/src/util");
    var EMPTY_OBJECT = {};
    var FIELD_DECORATORS = [
        'Input', 'Output', 'ViewChild', 'ViewChildren', 'ContentChild', 'ContentChildren', 'HostBinding',
        'HostListener'
    ];
    var LIFECYCLE_HOOKS = new Set([
        'ngOnChanges', 'ngOnInit', 'ngOnDestroy', 'ngDoCheck', 'ngAfterViewInit', 'ngAfterViewChecked',
        'ngAfterContentInit', 'ngAfterContentChecked'
    ]);
    var DirectiveDecoratorHandler = /** @class */ (function () {
        function DirectiveDecoratorHandler(reflector, evaluator, metaRegistry, scopeRegistry, metaReader, defaultImportRecorder, injectableRegistry, isCore, annotateForClosureCompiler) {
            this.reflector = reflector;
            this.evaluator = evaluator;
            this.metaRegistry = metaRegistry;
            this.scopeRegistry = scopeRegistry;
            this.metaReader = metaReader;
            this.defaultImportRecorder = defaultImportRecorder;
            this.injectableRegistry = injectableRegistry;
            this.isCore = isCore;
            this.annotateForClosureCompiler = annotateForClosureCompiler;
            this.precedence = transform_1.HandlerPrecedence.PRIMARY;
            this.name = DirectiveDecoratorHandler.name;
        }
        DirectiveDecoratorHandler.prototype.detect = function (node, decorators) {
            var _this = this;
            // If the class is undecorated, check if any of the fields have Angular decorators or lifecycle
            // hooks, and if they do, label the class as an abstract directive.
            if (!decorators) {
                var angularField = this.reflector.getMembersOfClass(node).find(function (member) {
                    if (!member.isStatic && member.kind === reflection_1.ClassMemberKind.Method &&
                        LIFECYCLE_HOOKS.has(member.name)) {
                        return true;
                    }
                    if (member.decorators) {
                        return member.decorators.some(function (decorator) { return FIELD_DECORATORS.some(function (decoratorName) { return util_2.isAngularDecorator(decorator, decoratorName, _this.isCore); }); });
                    }
                    return false;
                });
                return angularField ? { trigger: angularField.node, decorator: null, metadata: null } :
                    undefined;
            }
            else {
                var decorator = util_2.findAngularDecorator(decorators, 'Directive', this.isCore);
                return decorator ? { trigger: decorator.node, decorator: decorator, metadata: decorator } : undefined;
            }
        };
        DirectiveDecoratorHandler.prototype.analyze = function (node, decorator, flags) {
            if (flags === void 0) { flags = transform_1.HandlerFlags.NONE; }
            var directiveResult = extractDirectiveMetadata(node, decorator, this.reflector, this.evaluator, this.defaultImportRecorder, this.isCore, flags, this.annotateForClosureCompiler);
            var analysis = directiveResult && directiveResult.metadata;
            if (analysis === undefined) {
                return {};
            }
            var providersRequiringFactory = null;
            if (directiveResult !== undefined && directiveResult.decorator.has('providers')) {
                providersRequiringFactory = util_2.resolveProvidersRequiringFactory(directiveResult.decorator.get('providers'), this.reflector, this.evaluator);
            }
            return {
                analysis: {
                    meta: analysis,
                    metadataStmt: metadata_1.generateSetClassMetadataCall(node, this.reflector, this.defaultImportRecorder, this.isCore, this.annotateForClosureCompiler),
                    baseClass: util_2.readBaseClass(node, this.reflector, this.evaluator),
                    guards: util_1.extractDirectiveGuards(node, this.reflector),
                    providersRequiringFactory: providersRequiringFactory
                }
            };
        };
        DirectiveDecoratorHandler.prototype.register = function (node, analysis) {
            // Register this directive's information with the `MetadataRegistry`. This ensures that
            // the information about the directive is available during the compile() phase.
            var ref = new imports_1.Reference(node);
            this.metaRegistry.registerDirectiveMetadata(tslib_1.__assign({ ref: ref, name: node.name.text, selector: analysis.meta.selector, exportAs: analysis.meta.exportAs, inputs: analysis.meta.inputs, outputs: analysis.meta.outputs, queries: analysis.meta.queries.map(function (query) { return query.propertyName; }), isComponent: false, baseClass: analysis.baseClass }, analysis.guards));
            this.injectableRegistry.registerInjectable(node);
        };
        DirectiveDecoratorHandler.prototype.resolve = function (node, analysis) {
            var diagnostics = [];
            if (analysis.providersRequiringFactory !== null &&
                analysis.meta.providers instanceof compiler_1.WrappedNodeExpr) {
                var providerDiagnostics = diagnostics_2.getProviderDiagnostics(analysis.providersRequiringFactory, analysis.meta.providers.node, this.injectableRegistry);
                diagnostics.push.apply(diagnostics, tslib_1.__spread(providerDiagnostics));
            }
            var directiveDiagnostics = diagnostics_2.getDirectiveDiagnostics(node, this.metaReader, this.evaluator, this.reflector, this.scopeRegistry, 'Directive');
            if (directiveDiagnostics !== null) {
                diagnostics.push.apply(diagnostics, tslib_1.__spread(directiveDiagnostics));
            }
            return { diagnostics: diagnostics.length > 0 ? diagnostics : undefined };
        };
        DirectiveDecoratorHandler.prototype.compile = function (node, analysis, resolution, pool) {
            var meta = analysis.meta;
            var res = compiler_1.compileDirectiveFromMetadata(meta, pool, compiler_1.makeBindingParser());
            var factoryRes = factory_1.compileNgFactoryDefField(tslib_1.__assign(tslib_1.__assign({}, meta), { injectFn: compiler_1.Identifiers.directiveInject, target: compiler_1.R3FactoryTarget.Directive }));
            if (analysis.metadataStmt !== null) {
                factoryRes.statements.push(analysis.metadataStmt);
            }
            return [
                factoryRes, {
                    name: 'ɵdir',
                    initializer: res.expression,
                    statements: [],
                    type: res.type,
                }
            ];
        };
        return DirectiveDecoratorHandler;
    }());
    exports.DirectiveDecoratorHandler = DirectiveDecoratorHandler;
    /**
     * Helper function to extract metadata from a `Directive` or `Component`. `Directive`s without a
     * selector are allowed to be used for abstract base classes. These abstract directives should not
     * appear in the declarations of an `NgModule` and additional verification is done when processing
     * the module.
     */
    function extractDirectiveMetadata(clazz, decorator, reflector, evaluator, defaultImportRecorder, isCore, flags, annotateForClosureCompiler, defaultSelector) {
        if (defaultSelector === void 0) { defaultSelector = null; }
        var directive;
        if (decorator === null || decorator.args === null || decorator.args.length === 0) {
            directive = new Map();
        }
        else if (decorator.args.length !== 1) {
            throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DECORATOR_ARITY_WRONG, reflection_1.Decorator.nodeForError(decorator), "Incorrect number of arguments to @" + decorator.name + " decorator");
        }
        else {
            var meta = util_2.unwrapExpression(decorator.args[0]);
            if (!ts.isObjectLiteralExpression(meta)) {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DECORATOR_ARG_NOT_LITERAL, meta, "@" + decorator.name + " argument must be an object literal");
            }
            directive = reflection_1.reflectObjectLiteral(meta);
        }
        if (directive.has('jit')) {
            // The only allowed value is true, so there's no need to expand further.
            return undefined;
        }
        var members = reflector.getMembersOfClass(clazz);
        // Precompute a list of ts.ClassElements that have decorators. This includes things like @Input,
        // @Output, @HostBinding, etc.
        var decoratedElements = members.filter(function (member) { return !member.isStatic && member.decorators !== null; });
        var coreModule = isCore ? undefined : '@angular/core';
        // Construct the map of inputs both from the @Directive/@Component
        // decorator, and the decorated
        // fields.
        var inputsFromMeta = parseFieldToPropertyMapping(directive, 'inputs', evaluator);
        var inputsFromFields = parseDecoratedFields(reflection_1.filterToMembersWithDecorator(decoratedElements, 'Input', coreModule), evaluator, resolveInput);
        // And outputs.
        var outputsFromMeta = parseFieldToPropertyMapping(directive, 'outputs', evaluator);
        var outputsFromFields = parseDecoratedFields(reflection_1.filterToMembersWithDecorator(decoratedElements, 'Output', coreModule), evaluator, resolveOutput);
        // Construct the list of queries.
        var contentChildFromFields = queriesFromFields(reflection_1.filterToMembersWithDecorator(decoratedElements, 'ContentChild', coreModule), reflector, evaluator);
        var contentChildrenFromFields = queriesFromFields(reflection_1.filterToMembersWithDecorator(decoratedElements, 'ContentChildren', coreModule), reflector, evaluator);
        var queries = tslib_1.__spread(contentChildFromFields, contentChildrenFromFields);
        // Construct the list of view queries.
        var viewChildFromFields = queriesFromFields(reflection_1.filterToMembersWithDecorator(decoratedElements, 'ViewChild', coreModule), reflector, evaluator);
        var viewChildrenFromFields = queriesFromFields(reflection_1.filterToMembersWithDecorator(decoratedElements, 'ViewChildren', coreModule), reflector, evaluator);
        var viewQueries = tslib_1.__spread(viewChildFromFields, viewChildrenFromFields);
        if (directive.has('queries')) {
            var queriesFromDecorator = extractQueriesFromDecorator(directive.get('queries'), reflector, evaluator, isCore);
            queries.push.apply(queries, tslib_1.__spread(queriesFromDecorator.content));
            viewQueries.push.apply(viewQueries, tslib_1.__spread(queriesFromDecorator.view));
        }
        // Parse the selector.
        var selector = defaultSelector;
        if (directive.has('selector')) {
            var expr = directive.get('selector');
            var resolved = evaluator.evaluate(expr);
            if (typeof resolved !== 'string') {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, expr, "selector must be a string");
            }
            // use default selector in case selector is an empty string
            selector = resolved === '' ? defaultSelector : resolved;
            if (!selector) {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DIRECTIVE_MISSING_SELECTOR, expr, "Directive " + clazz.name.text + " has no selector, please add it!");
            }
        }
        var host = extractHostBindings(decoratedElements, evaluator, coreModule, directive);
        var providers = directive.has('providers') ?
            new compiler_1.WrappedNodeExpr(annotateForClosureCompiler ?
                util_2.wrapFunctionExpressionsInParens(directive.get('providers')) :
                directive.get('providers')) :
            null;
        // Determine if `ngOnChanges` is a lifecycle hook defined on the component.
        var usesOnChanges = members.some(function (member) { return !member.isStatic && member.kind === reflection_1.ClassMemberKind.Method &&
            member.name === 'ngOnChanges'; });
        // Parse exportAs.
        var exportAs = null;
        if (directive.has('exportAs')) {
            var expr = directive.get('exportAs');
            var resolved = evaluator.evaluate(expr);
            if (typeof resolved !== 'string') {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, expr, "exportAs must be a string");
            }
            exportAs = resolved.split(',').map(function (part) { return part.trim(); });
        }
        var rawCtorDeps = util_2.getConstructorDependencies(clazz, reflector, defaultImportRecorder, isCore);
        var ctorDeps;
        // Non-abstract directives (those with a selector) require valid constructor dependencies, whereas
        // abstract directives are allowed to have invalid dependencies, given that a subclass may call
        // the constructor explicitly.
        if (selector !== null) {
            ctorDeps = util_2.validateConstructorDependencies(clazz, rawCtorDeps);
        }
        else {
            ctorDeps = util_2.unwrapConstructorDependencies(rawCtorDeps);
        }
        // Detect if the component inherits from another class
        var usesInheritance = reflector.hasBaseClass(clazz);
        var type = util_2.wrapTypeReference(reflector, clazz);
        var internalType = new compiler_1.WrappedNodeExpr(reflector.getInternalNameOfClass(clazz));
        var metadata = {
            name: clazz.name.text,
            deps: ctorDeps,
            host: host,
            lifecycle: {
                usesOnChanges: usesOnChanges,
            },
            inputs: tslib_1.__assign(tslib_1.__assign({}, inputsFromMeta), inputsFromFields),
            outputs: tslib_1.__assign(tslib_1.__assign({}, outputsFromMeta), outputsFromFields),
            queries: queries,
            viewQueries: viewQueries,
            selector: selector,
            fullInheritance: !!(flags & transform_1.HandlerFlags.FULL_INHERITANCE),
            type: type,
            internalType: internalType,
            typeArgumentCount: reflector.getGenericArityOfClass(clazz) || 0,
            typeSourceSpan: util_2.createSourceSpan(clazz.name),
            usesInheritance: usesInheritance,
            exportAs: exportAs,
            providers: providers
        };
        return { decorator: directive, metadata: metadata };
    }
    exports.extractDirectiveMetadata = extractDirectiveMetadata;
    function extractQueryMetadata(exprNode, name, args, propertyName, reflector, evaluator) {
        if (args.length === 0) {
            throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DECORATOR_ARITY_WRONG, exprNode, "@" + name + " must have arguments");
        }
        var first = name === 'ViewChild' || name === 'ContentChild';
        var node = util_2.unwrapForwardRef(args[0], reflector);
        var arg = evaluator.evaluate(node);
        /** Whether or not this query should collect only static results (see view/api.ts)  */
        var isStatic = false;
        // Extract the predicate
        var predicate = null;
        if (arg instanceof imports_1.Reference || arg instanceof partial_evaluator_1.DynamicValue) {
            // References and predicates that could not be evaluated statically are emitted as is.
            predicate = new compiler_1.WrappedNodeExpr(node);
        }
        else if (typeof arg === 'string') {
            predicate = [arg];
        }
        else if (isStringArrayOrDie(arg, "@" + name + " predicate", node)) {
            predicate = arg;
        }
        else {
            throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, node, "@" + name + " predicate cannot be interpreted");
        }
        // Extract the read and descendants options.
        var read = null;
        // The default value for descendants is true for every decorator except @ContentChildren.
        var descendants = name !== 'ContentChildren';
        if (args.length === 2) {
            var optionsExpr = util_2.unwrapExpression(args[1]);
            if (!ts.isObjectLiteralExpression(optionsExpr)) {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DECORATOR_ARG_NOT_LITERAL, optionsExpr, "@" + name + " options must be an object literal");
            }
            var options = reflection_1.reflectObjectLiteral(optionsExpr);
            if (options.has('read')) {
                read = new compiler_1.WrappedNodeExpr(options.get('read'));
            }
            if (options.has('descendants')) {
                var descendantsExpr = options.get('descendants');
                var descendantsValue = evaluator.evaluate(descendantsExpr);
                if (typeof descendantsValue !== 'boolean') {
                    throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, descendantsExpr, "@" + name + " options.descendants must be a boolean");
                }
                descendants = descendantsValue;
            }
            if (options.has('static')) {
                var staticValue = evaluator.evaluate(options.get('static'));
                if (typeof staticValue !== 'boolean') {
                    throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, node, "@" + name + " options.static must be a boolean");
                }
                isStatic = staticValue;
            }
        }
        else if (args.length > 2) {
            // Too many arguments.
            throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DECORATOR_ARITY_WRONG, node, "@" + name + " has too many arguments");
        }
        return {
            propertyName: propertyName,
            predicate: predicate,
            first: first,
            descendants: descendants,
            read: read,
            static: isStatic,
        };
    }
    exports.extractQueryMetadata = extractQueryMetadata;
    function extractQueriesFromDecorator(queryData, reflector, evaluator, isCore) {
        var content = [], view = [];
        if (!ts.isObjectLiteralExpression(queryData)) {
            throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, queryData, 'Decorator queries metadata must be an object literal');
        }
        reflection_1.reflectObjectLiteral(queryData).forEach(function (queryExpr, propertyName) {
            queryExpr = util_2.unwrapExpression(queryExpr);
            if (!ts.isNewExpression(queryExpr) || !ts.isIdentifier(queryExpr.expression)) {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, queryData, 'Decorator query metadata must be an instance of a query type');
            }
            var type = reflector.getImportOfIdentifier(queryExpr.expression);
            if (type === null || (!isCore && type.from !== '@angular/core') ||
                !QUERY_TYPES.has(type.name)) {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, queryData, 'Decorator query metadata must be an instance of a query type');
            }
            var query = extractQueryMetadata(queryExpr, type.name, queryExpr.arguments || [], propertyName, reflector, evaluator);
            if (type.name.startsWith('Content')) {
                content.push(query);
            }
            else {
                view.push(query);
            }
        });
        return { content: content, view: view };
    }
    exports.extractQueriesFromDecorator = extractQueriesFromDecorator;
    function isStringArrayOrDie(value, name, node) {
        if (!Array.isArray(value)) {
            return false;
        }
        for (var i = 0; i < value.length; i++) {
            if (typeof value[i] !== 'string') {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, node, "Failed to resolve " + name + " at position " + i + " to a string");
            }
        }
        return true;
    }
    function parseFieldArrayValue(directive, field, evaluator) {
        if (!directive.has(field)) {
            return null;
        }
        // Resolve the field of interest from the directive metadata to a string[].
        var expression = directive.get(field);
        var value = evaluator.evaluate(expression);
        if (!isStringArrayOrDie(value, field, expression)) {
            throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, expression, "Failed to resolve @Directive." + field + " to a string array");
        }
        return value;
    }
    exports.parseFieldArrayValue = parseFieldArrayValue;
    /**
     * Interpret property mapping fields on the decorator (e.g. inputs or outputs) and return the
     * correctly shaped metadata object.
     */
    function parseFieldToPropertyMapping(directive, field, evaluator) {
        var metaValues = parseFieldArrayValue(directive, field, evaluator);
        if (!metaValues) {
            return EMPTY_OBJECT;
        }
        return metaValues.reduce(function (results, value) {
            // Either the value is 'field' or 'field: property'. In the first case, `property` will
            // be undefined, in which case the field name should also be used as the property name.
            var _a = tslib_1.__read(value.split(':', 2).map(function (str) { return str.trim(); }), 2), field = _a[0], property = _a[1];
            results[field] = property || field;
            return results;
        }, {});
    }
    /**
     * Parse property decorators (e.g. `Input` or `Output`) and return the correctly shaped metadata
     * object.
     */
    function parseDecoratedFields(fields, evaluator, mapValueResolver) {
        return fields.reduce(function (results, field) {
            var fieldName = field.member.name;
            field.decorators.forEach(function (decorator) {
                // The decorator either doesn't have an argument (@Input()) in which case the property
                // name is used, or it has one argument (@Output('named')).
                if (decorator.args == null || decorator.args.length === 0) {
                    results[fieldName] = fieldName;
                }
                else if (decorator.args.length === 1) {
                    var property = evaluator.evaluate(decorator.args[0]);
                    if (typeof property !== 'string') {
                        throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, reflection_1.Decorator.nodeForError(decorator), "@" + decorator.name + " decorator argument must resolve to a string");
                    }
                    results[fieldName] = mapValueResolver(property, fieldName);
                }
                else {
                    // Too many arguments.
                    throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DECORATOR_ARITY_WRONG, reflection_1.Decorator.nodeForError(decorator), "@" + decorator.name + " can have at most one argument, got " + decorator.args.length + " argument(s)");
                }
            });
            return results;
        }, {});
    }
    function resolveInput(publicName, internalName) {
        return [publicName, internalName];
    }
    function resolveOutput(publicName, internalName) {
        return publicName;
    }
    function queriesFromFields(fields, reflector, evaluator) {
        return fields.map(function (_a) {
            var member = _a.member, decorators = _a.decorators;
            var decorator = decorators[0];
            var node = member.node || reflection_1.Decorator.nodeForError(decorator);
            // Throw in case of `@Input() @ContentChild('foo') foo: any`, which is not supported in Ivy
            if (member.decorators.some(function (v) { return v.name === 'Input'; })) {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DECORATOR_COLLISION, node, 'Cannot combine @Input decorators with query decorators');
            }
            if (decorators.length !== 1) {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DECORATOR_COLLISION, node, 'Cannot have multiple query decorators on the same class member');
            }
            else if (!isPropertyTypeMember(member)) {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DECORATOR_UNEXPECTED, node, 'Query decorator must go on a property-type member');
            }
            return extractQueryMetadata(node, decorator.name, decorator.args || [], member.name, reflector, evaluator);
        });
    }
    exports.queriesFromFields = queriesFromFields;
    function isPropertyTypeMember(member) {
        return member.kind === reflection_1.ClassMemberKind.Getter || member.kind === reflection_1.ClassMemberKind.Setter ||
            member.kind === reflection_1.ClassMemberKind.Property;
    }
    function evaluateHostExpressionBindings(hostExpr, evaluator) {
        var hostMetaMap = evaluator.evaluate(hostExpr);
        if (!(hostMetaMap instanceof Map)) {
            throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, hostExpr, "Decorator host metadata must be an object");
        }
        var hostMetadata = {};
        hostMetaMap.forEach(function (value, key) {
            // Resolve Enum references to their declared value.
            if (value instanceof partial_evaluator_1.EnumValue) {
                value = value.resolved;
            }
            if (typeof key !== 'string') {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, hostExpr, "Decorator host metadata must be a string -> string object, but found unparseable key");
            }
            if (typeof value == 'string') {
                hostMetadata[key] = value;
            }
            else if (value instanceof partial_evaluator_1.DynamicValue) {
                hostMetadata[key] = new compiler_1.WrappedNodeExpr(value.node);
            }
            else {
                throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, hostExpr, "Decorator host metadata must be a string -> string object, but found unparseable value");
            }
        });
        var bindings = compiler_1.parseHostBindings(hostMetadata);
        var errors = compiler_1.verifyHostBindings(bindings, util_2.createSourceSpan(hostExpr));
        if (errors.length > 0) {
            throw new diagnostics_1.FatalDiagnosticError(
            // TODO: provide more granular diagnostic and output specific host expression that
            // triggered an error instead of the whole host object.
            diagnostics_1.ErrorCode.HOST_BINDING_PARSE_ERROR, hostExpr, errors.map(function (error) { return error.msg; }).join('\n'));
        }
        return bindings;
    }
    function extractHostBindings(members, evaluator, coreModule, metadata) {
        var bindings;
        if (metadata && metadata.has('host')) {
            bindings = evaluateHostExpressionBindings(metadata.get('host'), evaluator);
        }
        else {
            bindings = compiler_1.parseHostBindings({});
        }
        reflection_1.filterToMembersWithDecorator(members, 'HostBinding', coreModule)
            .forEach(function (_a) {
            var member = _a.member, decorators = _a.decorators;
            decorators.forEach(function (decorator) {
                var hostPropertyName = member.name;
                if (decorator.args !== null && decorator.args.length > 0) {
                    if (decorator.args.length !== 1) {
                        throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DECORATOR_ARITY_WRONG, reflection_1.Decorator.nodeForError(decorator), "@HostBinding can have at most one argument, got " + decorator.args.length + " argument(s)");
                    }
                    var resolved = evaluator.evaluate(decorator.args[0]);
                    if (typeof resolved !== 'string') {
                        throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, reflection_1.Decorator.nodeForError(decorator), "@HostBinding's argument must be a string");
                    }
                    hostPropertyName = resolved;
                }
                bindings.properties[hostPropertyName] = member.name;
            });
        });
        reflection_1.filterToMembersWithDecorator(members, 'HostListener', coreModule)
            .forEach(function (_a) {
            var member = _a.member, decorators = _a.decorators;
            decorators.forEach(function (decorator) {
                var eventName = member.name;
                var args = [];
                if (decorator.args !== null && decorator.args.length > 0) {
                    if (decorator.args.length > 2) {
                        throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.DECORATOR_ARITY_WRONG, decorator.args[2], "@HostListener can have at most two arguments");
                    }
                    var resolved = evaluator.evaluate(decorator.args[0]);
                    if (typeof resolved !== 'string') {
                        throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, decorator.args[0], "@HostListener's event name argument must be a string");
                    }
                    eventName = resolved;
                    if (decorator.args.length === 2) {
                        var expression = decorator.args[1];
                        var resolvedArgs = evaluator.evaluate(decorator.args[1]);
                        if (!isStringArrayOrDie(resolvedArgs, '@HostListener.args', expression)) {
                            throw new diagnostics_1.FatalDiagnosticError(diagnostics_1.ErrorCode.VALUE_HAS_WRONG_TYPE, decorator.args[1], "@HostListener's second argument must be a string array");
                        }
                        args = resolvedArgs;
                    }
                }
                bindings.listeners[eventName] = member.name + "(" + args.join(',') + ")";
            });
        });
        return bindings;
    }
    exports.extractHostBindings = extractHostBindings;
    var QUERY_TYPES = new Set([
        'ContentChild',
        'ContentChildren',
        'ViewChild',
        'ViewChildren',
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9hbm5vdGF0aW9ucy9zcmMvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILDhDQUF5UztJQUN6UywrQkFBaUM7SUFFakMsMkVBQWtFO0lBQ2xFLG1FQUErRDtJQUUvRCwwRUFBK0Q7SUFDL0QsdUZBQWtGO0lBQ2xGLHlFQUErSjtJQUUvSix1RUFBOEk7SUFFOUksMkZBQThFO0lBQzlFLG1GQUFtRDtJQUNuRCxxRkFBd0Q7SUFDeEQsNkVBQXVUO0lBRXZULElBQU0sWUFBWSxHQUE0QixFQUFFLENBQUM7SUFDakQsSUFBTSxnQkFBZ0IsR0FBRztRQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGFBQWE7UUFDaEcsY0FBYztLQUNmLENBQUM7SUFDRixJQUFNLGVBQWUsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUM5QixhQUFhLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CO1FBQzlGLG9CQUFvQixFQUFFLHVCQUF1QjtLQUM5QyxDQUFDLENBQUM7SUFVSDtRQUVFLG1DQUNZLFNBQXlCLEVBQVUsU0FBMkIsRUFDOUQsWUFBOEIsRUFBVSxhQUF1QyxFQUMvRSxVQUEwQixFQUFVLHFCQUE0QyxFQUNoRixrQkFBMkMsRUFBVSxNQUFlLEVBQ3BFLDBCQUFtQztZQUpuQyxjQUFTLEdBQVQsU0FBUyxDQUFnQjtZQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO1lBQzlELGlCQUFZLEdBQVosWUFBWSxDQUFrQjtZQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtZQUMvRSxlQUFVLEdBQVYsVUFBVSxDQUFnQjtZ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O1FBQzFCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsV0FBVztRQUNYLGNBQWM7S0FDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y29tcGlsZURpcmVjdGl2ZUZyb21NZXRhZGF0YSwgQ29uc3RhbnRQb29sLCBFeHByZXNzaW9uLCBJZGVudGlmaWVycywgbWFrZUJpbmRpbmdQYXJzZXIsIFBhcnNlZEhvc3RCaW5kaW5ncywgUGFyc2VFcnJvciwgcGFyc2VIb3N0QmluZGluZ3MsIFIzRGVwZW5kZW5jeU1ldGFkYXRhLCBSM0RpcmVjdGl2ZU1ldGFkYXRhLCBSM0ZhY3RvcnlUYXJnZXQsIFIzUXVlcnlNZXRhZGF0YSwgU3RhdGVtZW50LCB2ZXJpZnlIb3N0QmluZGluZ3MsIFdyYXBwZWROb2RlRXhwcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7RXJyb3JDb2RlLCBGYXRhbERpYWdub3N0aWNFcnJvcn0gZnJvbSAnLi4vLi4vZGlhZ25vc3RpY3MnO1xuaW1wb3J0IHtEZWZhdWx0SW1wb3J0UmVjb3JkZXIsIFJlZmVyZW5jZX0gZnJvbSAnLi4vLi4vaW1wb3J0cyc7XG5pbXBvcnQge0luamVjdGFibGVDbGFzc1JlZ2lzdHJ5LCBNZXRhZGF0YVJlYWRlciwgTWV0YWRhdGFSZWdpc3RyeX0gZnJvbSAnLi4vLi4vbWV0YWRhdGEnO1xuaW1wb3J0IHtleHRyYWN0RGlyZWN0aXZlR3VhcmRzfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9zcmMvdXRpbCc7XG5pbXBvcnQge0R5bmFtaWNWYWx1ZSwgRW51bVZhbHVlLCBQYXJ0aWFsRXZhbHVhdG9yfSBmcm9tICcuLi8uLi9wYXJ0aWFsX2V2YWx1YXRvcic7XG5pbXBvcnQge0NsYXNzRGVjbGFyYXRpb24sIENsYXNzTWVtYmVyLCBDbGFzc01lbWJlcktpbmQsIERlY29yYXRvciwgZmlsdGVyVG9NZW1iZXJzV2l0aERlY29yYXRvciwgUmVmbGVjdGlvbkhvc3QsIHJlZmxlY3RPYmplY3RMaXRlcmFsfSBmcm9tICcuLi8uLi9yZWZsZWN0aW9uJztcbmltcG9ydCB7TG9jYWxNb2R1bGVTY29wZVJlZ2lzdHJ5fSBmcm9tICcuLi8uLi9zY29wZSc7XG5pbXBvcnQge0FuYWx5c2lzT3V0cHV0LCBDb21waWxlUmVzdWx0LCBEZWNvcmF0b3JIYW5kbGVyLCBEZXRlY3RSZXN1bHQsIEhhbmRsZXJGbGFncywgSGFuZGxlclByZWNlZGVuY2UsIFJlc29sdmVSZXN1bHR9IGZyb20gJy4uLy4uL3RyYW5zZm9ybSc7XG5cbmltcG9ydCB7Z2V0RGlyZWN0aXZlRGlhZ25vc3RpY3MsIGdldFByb3ZpZGVyRGlhZ25vc3RpY3N9IGZyb20gJy4vZGlhZ25vc3RpY3MnO1xuaW1wb3J0IHtjb21waWxlTmdGYWN0b3J5RGVmRmllbGR9IGZyb20gJy4vZmFjdG9yeSc7XG5pbXBvcnQge2dlbmVyYXRlU2V0Q2xhc3NNZXRhZGF0YUNhbGx9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHtjcmVhdGVTb3VyY2VTcGFuLCBmaW5kQW5ndWxhckRlY29yYXRvciwgZ2V0Q29uc3RydWN0b3JEZXBlbmRlbmNpZXMsIGlzQW5ndWxhckRlY29yYXRvciwgcmVhZEJhc2VDbGFzcywgcmVzb2x2ZVByb3ZpZGVyc1JlcXVpcmluZ0ZhY3RvcnksIHVud3JhcENvbnN0cnVjdG9yRGVwZW5kZW5jaWVzLCB1bndyYXBFeHByZXNzaW9uLCB1bndyYXBGb3J3YXJkUmVmLCB2YWxpZGF0ZUNvbnN0cnVjdG9yRGVwZW5kZW5jaWVzLCB3cmFwRnVuY3Rpb25FeHByZXNzaW9uc0luUGFyZW5zLCB3cmFwVHlwZVJlZmVyZW5jZX0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgRU1QVFlfT0JKRUNUOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuY29uc3QgRklFTERfREVDT1JBVE9SUyA9IFtcbiAgJ0lucHV0JywgJ091dHB1dCcsICdWaWV3Q2hpbGQnLCAnVmlld0NoaWxkcmVuJywgJ0NvbnRlbnRDaGlsZCcsICdDb250ZW50Q2hpbGRyZW4nLCAnSG9zdEJpbmRpbmcnLFxuICAnSG9zdExpc3RlbmVyJ1xuXTtcbmNvbnN0IExJRkVDWUNMRV9IT09LUyA9IG5ldyBTZXQoW1xuICAnbmdPbkNoYW5nZXMnLCAnbmdPbkluaXQnLCAnbmdPbkRlc3Ryb3knLCAnbmdEb0NoZWNrJywgJ25nQWZ0ZXJWaWV3SW5pdCcsICduZ0FmdGVyVmlld0NoZWNrZWQnLFxuICAnbmdBZnRlckNvbnRlbnRJbml0JywgJ25nQWZ0ZXJDb250ZW50Q2hlY2tlZCdcbl0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGl2ZUhhbmRsZXJEYXRhIHtcbiAgYmFzZUNsYXNzOiBSZWZlcmVuY2U8Q2xhc3NEZWNsYXJhdGlvbj58J2R5bmFtaWMnfG51bGw7XG4gIGd1YXJkczogUmV0dXJuVHlwZTx0eXBlb2YgZXh0cmFjdERpcmVjdGl2ZUd1YXJkcz47XG4gIG1ldGE6IFIzRGlyZWN0aXZlTWV0YWRhdGE7XG4gIG1ldGFkYXRhU3RtdDogU3RhdGVtZW50fG51bGw7XG4gIHByb3ZpZGVyc1JlcXVpcmluZ0ZhY3Rvcnk6IFNldDxSZWZlcmVuY2U8Q2xhc3NEZWNsYXJhdGlvbj4+fG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmVEZWNvcmF0b3JIYW5kbGVyIGltcGxlbWVudHNcbiAgICBEZWNvcmF0b3JIYW5kbGVyPERlY29yYXRvcnxudWxsLCBEaXJlY3RpdmVIYW5kbGVyRGF0YSwgdW5rbm93bj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcmVmbGVjdG9yOiBSZWZsZWN0aW9uSG9zdCwgcHJpdmF0ZSBldmFsdWF0b3I6IFBhcnRpYWxFdmFsdWF0b3IsXG4gICAgICBwcml2YXRlIG1ldGFSZWdpc3RyeTogTWV0YWRhdGFSZWdpc3RyeSwgcHJpdmF0ZSBzY29wZVJlZ2lzdHJ5OiBMb2NhbE1vZHVsZVNjb3BlUmVnaXN0cnksXG4gICAgICBwcml2YXRlIG1ldGFSZWFkZXI6IE1ldGFkYXRhUmVhZGVyLCBwcml2YXRlIGRlZmF1bHRJbXBvcnRSZWNvcmRlcjogRGVmYXVsdEltcG9ydFJlY29yZGVyLFxuICAgICAgcHJpdmF0ZSBpbmplY3RhYmxlUmVnaXN0cnk6IEluamVjdGFibGVDbGFzc1JlZ2lzdHJ5LCBwcml2YXRlIGlzQ29yZTogYm9vbGVhbixcbiAgICAgIHByaXZhdGUgYW5ub3RhdGVGb3JDbG9zdXJlQ29tcGlsZXI6IGJvb2xlYW4pIHt9XG5cbiAgcmVhZG9ubHkgcHJlY2VkZW5jZSA9IEhhbmRsZXJQcmVjZWRlbmNlLlBSSU1BUlk7XG4gIHJlYWRvbmx5IG5hbWUgPSBEaXJlY3RpdmVEZWNvcmF0b3JIYW5kbGVyLm5hbWU7XG5cbiAgZGV0ZWN0KG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIGRlY29yYXRvcnM6IERlY29yYXRvcltdfG51bGwpOlxuICAgICAgRGV0ZWN0UmVzdWx0PERlY29yYXRvcnxudWxsPnx1bmRlZmluZWQge1xuICAgIC8vIElmIHRoZSBjbGFzcyBpcyB1bmRlY29yYXRlZCwgY2hlY2sgaWYgYW55IG9mIHRoZSBmaWVsZHMgaGF2ZSBBbmd1bGFyIGRlY29yYXRvcnMgb3IgbGlmZWN5Y2xlXG4gICAgLy8gaG9va3MsIGFuZCBpZiB0aGV5IGRvLCBsYWJlbCB0aGUgY2xhc3MgYXMgYW4gYWJzdHJhY3QgZGlyZWN0aXZlLlxuICAgIGlmICghZGVjb3JhdG9ycykge1xuICAgICAgY29uc3QgYW5ndWxhckZpZWxkID0gdGhpcy5yZWZsZWN0b3IuZ2V0TWVtYmVyc09mQ2xhc3Mobm9kZSkuZmluZChtZW1iZXIgPT4ge1xuICAgICAgICBpZiAoIW1lbWJlci5pc1N0YXRpYyAmJiBtZW1iZXIua2luZCA9PT0gQ2xhc3NNZW1iZXJLaW5kLk1ldGhvZCAmJlxuICAgICAgICAgICAgTElGRUNZQ0xFX0hPT0tTLmhhcyhtZW1iZXIubmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVtYmVyLmRlY29yYXRvcnMpIHtcbiAgICAgICAgICByZXR1cm4gbWVtYmVyLmRlY29yYXRvcnMuc29tZShcbiAgICAgICAgICAgICAgZGVjb3JhdG9yID0+IEZJRUxEX0RFQ09SQVRPUlMuc29tZShcbiAgICAgICAgICAgICAgICAgIGRlY29yYXRvck5hbWUgPT4gaXNBbmd1bGFyRGVjb3JhdG9yKGRlY29yYXRvciwgZGVjb3JhdG9yTmFtZSwgdGhpcy5pc0NvcmUpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYW5ndWxhckZpZWxkID8ge3RyaWdnZXI6IGFuZ3VsYXJGaWVsZC5ub2RlLCBkZWNvcmF0b3I6IG51bGwsIG1ldGFkYXRhOiBudWxsfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWNvcmF0b3IgPSBmaW5kQW5ndWxhckRlY29yYXRvcihkZWNvcmF0b3JzLCAnRGlyZWN0aXZlJywgdGhpcy5pc0NvcmUpO1xuICAgICAgcmV0dXJuIGRlY29yYXRvciA/IHt0cmlnZ2VyOiBkZWNvcmF0b3Iubm9kZSwgZGVjb3JhdG9yLCBtZXRhZGF0YTogZGVjb3JhdG9yfSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBhbmFseXplKG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIGRlY29yYXRvcjogUmVhZG9ubHk8RGVjb3JhdG9yfG51bGw+LCBmbGFncyA9IEhhbmRsZXJGbGFncy5OT05FKTpcbiAgICAgIEFuYWx5c2lzT3V0cHV0PERpcmVjdGl2ZUhhbmRsZXJEYXRhPiB7XG4gICAgY29uc3QgZGlyZWN0aXZlUmVzdWx0ID0gZXh0cmFjdERpcmVjdGl2ZU1ldGFkYXRhKFxuICAgICAgICBub2RlLCBkZWNvcmF0b3IsIHRoaXMucmVmbGVjdG9yLCB0aGlzLmV2YWx1YXRvciwgdGhpcy5kZWZhdWx0SW1wb3J0UmVjb3JkZXIsIHRoaXMuaXNDb3JlLFxuICAgICAgICBmbGFncywgdGhpcy5hbm5vdGF0ZUZvckNsb3N1cmVDb21waWxlcik7XG4gICAgY29uc3QgYW5hbHlzaXMgPSBkaXJlY3RpdmVSZXN1bHQgJiYgZGlyZWN0aXZlUmVzdWx0Lm1ldGFkYXRhO1xuXG4gICAgaWYgKGFuYWx5c2lzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBsZXQgcHJvdmlkZXJzUmVxdWlyaW5nRmFjdG9yeTogU2V0PFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPj58bnVsbCA9IG51bGw7XG4gICAgaWYgKGRpcmVjdGl2ZVJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIGRpcmVjdGl2ZVJlc3VsdC5kZWNvcmF0b3IuaGFzKCdwcm92aWRlcnMnKSkge1xuICAgICAgcHJvdmlkZXJzUmVxdWlyaW5nRmFjdG9yeSA9IHJlc29sdmVQcm92aWRlcnNSZXF1aXJpbmdGYWN0b3J5KFxuICAgICAgICAgIGRpcmVjdGl2ZVJlc3VsdC5kZWNvcmF0b3IuZ2V0KCdwcm92aWRlcnMnKSEsIHRoaXMucmVmbGVjdG9yLCB0aGlzLmV2YWx1YXRvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFuYWx5c2lzOiB7XG4gICAgICAgIG1ldGE6IGFuYWx5c2lzLFxuICAgICAgICBtZXRhZGF0YVN0bXQ6IGdlbmVyYXRlU2V0Q2xhc3NNZXRhZGF0YUNhbGwoXG4gICAgICAgICAgICBub2RlLCB0aGlzLnJlZmxlY3RvciwgdGhpcy5kZWZhdWx0SW1wb3J0UmVjb3JkZXIsIHRoaXMuaXNDb3JlLFxuICAgICAgICAgICAgdGhpcy5hbm5vdGF0ZUZvckNsb3N1cmVDb21waWxlciksXG4gICAgICAgIGJhc2VDbGFzczogcmVhZEJhc2VDbGFzcyhub2RlLCB0aGlzLnJlZmxlY3RvciwgdGhpcy5ldmFsdWF0b3IpLFxuICAgICAgICBndWFyZHM6IGV4dHJhY3REaXJlY3RpdmVHdWFyZHMobm9kZSwgdGhpcy5yZWZsZWN0b3IpLFxuICAgICAgICBwcm92aWRlcnNSZXF1aXJpbmdGYWN0b3J5XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlZ2lzdGVyKG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIGFuYWx5c2lzOiBSZWFkb25seTxEaXJlY3RpdmVIYW5kbGVyRGF0YT4pOiB2b2lkIHtcbiAgICAvLyBSZWdpc3RlciB0aGlzIGRpcmVjdGl2ZSdzIGluZm9ybWF0aW9uIHdpdGggdGhlIGBNZXRhZGF0YVJlZ2lzdHJ5YC4gVGhpcyBlbnN1cmVzIHRoYXRcbiAgICAvLyB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGRpcmVjdGl2ZSBpcyBhdmFpbGFibGUgZHVyaW5nIHRoZSBjb21waWxlKCkgcGhhc2UuXG4gICAgY29uc3QgcmVmID0gbmV3IFJlZmVyZW5jZShub2RlKTtcbiAgICB0aGlzLm1ldGFSZWdpc3RyeS5yZWdpc3RlckRpcmVjdGl2ZU1ldGFkYXRhKHtcbiAgICAgIHJlZixcbiAgICAgIG5hbWU6IG5vZGUubmFtZS50ZXh0LFxuICAgICAgc2VsZWN0b3I6IGFuYWx5c2lzLm1ldGEuc2VsZWN0b3IsXG4gICAgICBleHBvcnRBczogYW5hbHlzaXMubWV0YS5leHBvcnRBcyxcbiAgICAgIGlucHV0czogYW5hbHlzaXMubWV0YS5pbnB1dHMsXG4gICAgICBvdXRwdXRzOiBhbmFseXNpcy5tZXRhLm91dHB1dHMsXG4gICAgICBxdWVyaWVzOiBhbmFseXNpcy5tZXRhLnF1ZXJpZXMubWFwKHF1ZXJ5ID0+IHF1ZXJ5LnByb3BlcnR5TmFtZSksXG4gICAgICBpc0NvbXBvbmVudDogZmFsc2UsXG4gICAgICBiYXNlQ2xhc3M6IGFuYWx5c2lzLmJhc2VDbGFzcyxcbiAgICAgIC4uLmFuYWx5c2lzLmd1YXJkcyxcbiAgICB9KTtcblxuICAgIHRoaXMuaW5qZWN0YWJsZVJlZ2lzdHJ5LnJlZ2lzdGVySW5qZWN0YWJsZShub2RlKTtcbiAgfVxuXG4gIHJlc29sdmUobm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgYW5hbHlzaXM6IERpcmVjdGl2ZUhhbmRsZXJEYXRhKTogUmVzb2x2ZVJlc3VsdDx1bmtub3duPiB7XG4gICAgY29uc3QgZGlhZ25vc3RpY3M6IHRzLkRpYWdub3N0aWNbXSA9IFtdO1xuXG4gICAgaWYgKGFuYWx5c2lzLnByb3ZpZGVyc1JlcXVpcmluZ0ZhY3RvcnkgIT09IG51bGwgJiZcbiAgICAgICAgYW5hbHlzaXMubWV0YS5wcm92aWRlcnMgaW5zdGFuY2VvZiBXcmFwcGVkTm9kZUV4cHIpIHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyRGlhZ25vc3RpY3MgPSBnZXRQcm92aWRlckRpYWdub3N0aWNzKFxuICAgICAgICAgIGFuYWx5c2lzLnByb3ZpZGVyc1JlcXVpcmluZ0ZhY3RvcnksIGFuYWx5c2lzLm1ldGEucHJvdmlkZXJzIS5ub2RlLFxuICAgICAgICAgIHRoaXMuaW5qZWN0YWJsZVJlZ2lzdHJ5KTtcbiAgICAgIGRpYWdub3N0aWNzLnB1c2goLi4ucHJvdmlkZXJEaWFnbm9zdGljcyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aXZlRGlhZ25vc3RpY3MgPSBnZXREaXJlY3RpdmVEaWFnbm9zdGljcyhcbiAgICAgICAgbm9kZSwgdGhpcy5tZXRhUmVhZGVyLCB0aGlzLmV2YWx1YXRvciwgdGhpcy5yZWZsZWN0b3IsIHRoaXMuc2NvcGVSZWdpc3RyeSwgJ0RpcmVjdGl2ZScpO1xuICAgIGlmIChkaXJlY3RpdmVEaWFnbm9zdGljcyAhPT0gbnVsbCkge1xuICAgICAgZGlhZ25vc3RpY3MucHVzaCguLi5kaXJlY3RpdmVEaWFnbm9zdGljcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtkaWFnbm9zdGljczogZGlhZ25vc3RpY3MubGVuZ3RoID4gMCA/IGRpYWdub3N0aWNzIDogdW5kZWZpbmVkfTtcbiAgfVxuXG4gIGNvbXBpbGUoXG4gICAgICBub2RlOiBDbGFzc0RlY2xhcmF0aW9uLCBhbmFseXNpczogUmVhZG9ubHk8RGlyZWN0aXZlSGFuZGxlckRhdGE+LFxuICAgICAgcmVzb2x1dGlvbjogUmVhZG9ubHk8dW5rbm93bj4sIHBvb2w6IENvbnN0YW50UG9vbCk6IENvbXBpbGVSZXN1bHRbXSB7XG4gICAgY29uc3QgbWV0YSA9IGFuYWx5c2lzLm1ldGE7XG4gICAgY29uc3QgcmVzID0gY29tcGlsZURpcmVjdGl2ZUZyb21NZXRhZGF0YShtZXRhLCBwb29sLCBtYWtlQmluZGluZ1BhcnNlcigpKTtcbiAgICBjb25zdCBmYWN0b3J5UmVzID0gY29tcGlsZU5nRmFjdG9yeURlZkZpZWxkKFxuICAgICAgICB7Li4ubWV0YSwgaW5qZWN0Rm46IElkZW50aWZpZXJzLmRpcmVjdGl2ZUluamVjdCwgdGFyZ2V0OiBSM0ZhY3RvcnlUYXJnZXQuRGlyZWN0aXZlfSk7XG4gICAgaWYgKGFuYWx5c2lzLm1ldGFkYXRhU3RtdCAhPT0gbnVsbCkge1xuICAgICAgZmFjdG9yeVJlcy5zdGF0ZW1lbnRzLnB1c2goYW5hbHlzaXMubWV0YWRhdGFTdG10KTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIGZhY3RvcnlSZXMsIHtcbiAgICAgICAgbmFtZTogJ8m1ZGlyJyxcbiAgICAgICAgaW5pdGlhbGl6ZXI6IHJlcy5leHByZXNzaW9uLFxuICAgICAgICBzdGF0ZW1lbnRzOiBbXSxcbiAgICAgICAgdHlwZTogcmVzLnR5cGUsXG4gICAgICB9XG4gICAgXTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBleHRyYWN0IG1ldGFkYXRhIGZyb20gYSBgRGlyZWN0aXZlYCBvciBgQ29tcG9uZW50YC4gYERpcmVjdGl2ZWBzIHdpdGhvdXQgYVxuICogc2VsZWN0b3IgYXJlIGFsbG93ZWQgdG8gYmUgdXNlZCBmb3IgYWJzdHJhY3QgYmFzZSBjbGFzc2VzLiBUaGVzZSBhYnN0cmFjdCBkaXJlY3RpdmVzIHNob3VsZCBub3RcbiAqIGFwcGVhciBpbiB0aGUgZGVjbGFyYXRpb25zIG9mIGFuIGBOZ01vZHVsZWAgYW5kIGFkZGl0aW9uYWwgdmVyaWZpY2F0aW9uIGlzIGRvbmUgd2hlbiBwcm9jZXNzaW5nXG4gKiB0aGUgbW9kdWxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdERpcmVjdGl2ZU1ldGFkYXRhKFxuICAgIGNsYXp6OiBDbGFzc0RlY2xhcmF0aW9uLCBkZWNvcmF0b3I6IFJlYWRvbmx5PERlY29yYXRvcnxudWxsPiwgcmVmbGVjdG9yOiBSZWZsZWN0aW9uSG9zdCxcbiAgICBldmFsdWF0b3I6IFBhcnRpYWxFdmFsdWF0b3IsIGRlZmF1bHRJbXBvcnRSZWNvcmRlcjogRGVmYXVsdEltcG9ydFJlY29yZGVyLCBpc0NvcmU6IGJvb2xlYW4sXG4gICAgZmxhZ3M6IEhhbmRsZXJGbGFncywgYW5ub3RhdGVGb3JDbG9zdXJlQ29tcGlsZXI6IGJvb2xlYW4sIGRlZmF1bHRTZWxlY3Rvcjogc3RyaW5nfG51bGwgPSBudWxsKTpcbiAgICB7ZGVjb3JhdG9yOiBNYXA8c3RyaW5nLCB0cy5FeHByZXNzaW9uPiwgbWV0YWRhdGE6IFIzRGlyZWN0aXZlTWV0YWRhdGF9fHVuZGVmaW5lZCB7XG4gIGxldCBkaXJlY3RpdmU6IE1hcDxzdHJpbmcsIHRzLkV4cHJlc3Npb24+O1xuICBpZiAoZGVjb3JhdG9yID09PSBudWxsIHx8IGRlY29yYXRvci5hcmdzID09PSBudWxsIHx8IGRlY29yYXRvci5hcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRpcmVjdGl2ZSA9IG5ldyBNYXA8c3RyaW5nLCB0cy5FeHByZXNzaW9uPigpO1xuICB9IGVsc2UgaWYgKGRlY29yYXRvci5hcmdzLmxlbmd0aCAhPT0gMSkge1xuICAgIHRocm93IG5ldyBGYXRhbERpYWdub3N0aWNFcnJvcihcbiAgICAgICAgRXJyb3JDb2RlLkRFQ09SQVRPUl9BUklUWV9XUk9ORywgRGVjb3JhdG9yLm5vZGVGb3JFcnJvcihkZWNvcmF0b3IpLFxuICAgICAgICBgSW5jb3JyZWN0IG51bWJlciBvZiBhcmd1bWVudHMgdG8gQCR7ZGVjb3JhdG9yLm5hbWV9IGRlY29yYXRvcmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1ldGEgPSB1bndyYXBFeHByZXNzaW9uKGRlY29yYXRvci5hcmdzWzBdKTtcbiAgICBpZiAoIXRzLmlzT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24obWV0YSkpIHtcbiAgICAgIHRocm93IG5ldyBGYXRhbERpYWdub3N0aWNFcnJvcihcbiAgICAgICAgICBFcnJvckNvZGUuREVDT1JBVE9SX0FSR19OT1RfTElURVJBTCwgbWV0YSxcbiAgICAgICAgICBgQCR7ZGVjb3JhdG9yLm5hbWV9IGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0IGxpdGVyYWxgKTtcbiAgICB9XG4gICAgZGlyZWN0aXZlID0gcmVmbGVjdE9iamVjdExpdGVyYWwobWV0YSk7XG4gIH1cblxuICBpZiAoZGlyZWN0aXZlLmhhcygnaml0JykpIHtcbiAgICAvLyBUaGUgb25seSBhbGxvd2VkIHZhbHVlIGlzIHRydWUsIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBleHBhbmQgZnVydGhlci5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgbWVtYmVycyA9IHJlZmxlY3Rvci5nZXRNZW1iZXJzT2ZDbGFzcyhjbGF6eik7XG5cbiAgLy8gUHJlY29tcHV0ZSBhIGxpc3Qgb2YgdHMuQ2xhc3NFbGVtZW50cyB0aGF0IGhhdmUgZGVjb3JhdG9ycy4gVGhpcyBpbmNsdWRlcyB0aGluZ3MgbGlrZSBASW5wdXQsXG4gIC8vIEBPdXRwdXQsIEBIb3N0QmluZGluZywgZXRjLlxuICBjb25zdCBkZWNvcmF0ZWRFbGVtZW50cyA9XG4gICAgICBtZW1iZXJzLmZpbHRlcihtZW1iZXIgPT4gIW1lbWJlci5pc1N0YXRpYyAmJiBtZW1iZXIuZGVjb3JhdG9ycyAhPT0gbnVsbCk7XG5cbiAgY29uc3QgY29yZU1vZHVsZSA9IGlzQ29yZSA/IHVuZGVmaW5lZCA6ICdAYW5ndWxhci9jb3JlJztcblxuICAvLyBDb25zdHJ1Y3QgdGhlIG1hcCBvZiBpbnB1dHMgYm90aCBmcm9tIHRoZSBARGlyZWN0aXZlL0BDb21wb25lbnRcbiAgLy8gZGVjb3JhdG9yLCBhbmQgdGhlIGRlY29yYXRlZFxuICAvLyBmaWVsZHMuXG4gIGNvbnN0IGlucHV0c0Zyb21NZXRhID0gcGFyc2VGaWVsZFRvUHJvcGVydHlNYXBwaW5nKGRpcmVjdGl2ZSwgJ2lucHV0cycsIGV2YWx1YXRvcik7XG4gIGNvbnN0IGlucHV0c0Zyb21GaWVsZHMgPSBwYXJzZURlY29yYXRlZEZpZWxkcyhcbiAgICAgIGZpbHRlclRvTWVtYmVyc1dpdGhEZWNvcmF0b3IoZGVjb3JhdGVkRWxlbWVudHMsICdJbnB1dCcsIGNvcmVNb2R1bGUpLCBldmFsdWF0b3IsXG4gICAgICByZXNvbHZlSW5wdXQpO1xuXG4gIC8vIEFuZCBvdXRwdXRzLlxuICBjb25zdCBvdXRwdXRzRnJvbU1ldGEgPSBwYXJzZUZpZWxkVG9Qcm9wZXJ0eU1hcHBpbmcoZGlyZWN0aXZlLCAnb3V0cHV0cycsIGV2YWx1YXRvcik7XG4gIGNvbnN0IG91dHB1dHNGcm9tRmllbGRzID1cbiAgICAgIHBhcnNlRGVjb3JhdGVkRmllbGRzKFxuICAgICAgICAgIGZpbHRlclRvTWVtYmVyc1dpdGhEZWNvcmF0b3IoZGVjb3JhdGVkRWxlbWVudHMsICdPdXRwdXQnLCBjb3JlTW9kdWxlKSwgZXZhbHVhdG9yLFxuICAgICAgICAgIHJlc29sdmVPdXRwdXQpIGFzIHtbZmllbGQ6IHN0cmluZ106IHN0cmluZ307XG4gIC8vIENvbnN0cnVjdCB0aGUgbGlzdCBvZiBxdWVyaWVzLlxuICBjb25zdCBjb250ZW50Q2hpbGRGcm9tRmllbGRzID0gcXVlcmllc0Zyb21GaWVsZHMoXG4gICAgICBmaWx0ZXJUb01lbWJlcnNXaXRoRGVjb3JhdG9yKGRlY29yYXRlZEVsZW1lbnRzLCAnQ29udGVudENoaWxkJywgY29yZU1vZHVsZSksIHJlZmxlY3RvcixcbiAgICAgIGV2YWx1YXRvcik7XG4gIGNvbnN0IGNvbnRlbnRDaGlsZHJlbkZyb21GaWVsZHMgPSBxdWVyaWVzRnJvbUZpZWxkcyhcbiAgICAgIGZpbHRlclRvTWVtYmVyc1dpdGhEZWNvcmF0b3IoZGVjb3JhdGVkRWxlbWVudHMsICdDb250ZW50Q2hpbGRyZW4nLCBjb3JlTW9kdWxlKSwgcmVmbGVjdG9yLFxuICAgICAgZXZhbHVhdG9yKTtcblxuICBjb25zdCBxdWVyaWVzID0gWy4uLmNvbnRlbnRDaGlsZEZyb21GaWVsZHMsIC4uLmNvbnRlbnRDaGlsZHJlbkZyb21GaWVsZHNdO1xuXG4gIC8vIENvbnN0cnVjdCB0aGUgbGlzdCBvZiB2aWV3IHF1ZXJpZXMuXG4gIGNvbnN0IHZpZXdDaGlsZEZyb21GaWVsZHMgPSBxdWVyaWVzRnJvbUZpZWxkcyhcbiAgICAgIGZpbHRlclRvTWVtYmVyc1dpdGhEZWNvcmF0b3IoZGVjb3JhdGVkRWxlbWVudHMsICdWaWV3Q2hpbGQnLCBjb3JlTW9kdWxlKSwgcmVmbGVjdG9yLFxuICAgICAgZXZhbHVhdG9yKTtcbiAgY29uc3Qgdmlld0NoaWxkcmVuRnJvbUZpZWxkcyA9IHF1ZXJpZXNGcm9tRmllbGRzKFxuICAgICAgZmlsdGVyVG9NZW1iZXJzV2l0aERlY29yYXRvcihkZWNvcmF0ZWRFbGVtZW50cywgJ1ZpZXdDaGlsZHJlbicsIGNvcmVNb2R1bGUpLCByZWZsZWN0b3IsXG4gICAgICBldmFsdWF0b3IpO1xuICBjb25zdCB2aWV3UXVlcmllcyA9IFsuLi52aWV3Q2hpbGRGcm9tRmllbGRzLCAuLi52aWV3Q2hpbGRyZW5Gcm9tRmllbGRzXTtcblxuICBpZiAoZGlyZWN0aXZlLmhhcygncXVlcmllcycpKSB7XG4gICAgY29uc3QgcXVlcmllc0Zyb21EZWNvcmF0b3IgPVxuICAgICAgICBleHRyYWN0UXVlcmllc0Zyb21EZWNvcmF0b3IoZGlyZWN0aXZlLmdldCgncXVlcmllcycpISwgcmVmbGVjdG9yLCBldmFsdWF0b3IsIGlzQ29yZSk7XG4gICAgcXVlcmllcy5wdXNoKC4uLnF1ZXJpZXNGcm9tRGVjb3JhdG9yLmNvbnRlbnQpO1xuICAgIHZpZXdRdWVyaWVzLnB1c2goLi4ucXVlcmllc0Zyb21EZWNvcmF0b3Iudmlldyk7XG4gIH1cblxuICAvLyBQYXJzZSB0aGUgc2VsZWN0b3IuXG4gIGxldCBzZWxlY3RvciA9IGRlZmF1bHRTZWxlY3RvcjtcbiAgaWYgKGRpcmVjdGl2ZS5oYXMoJ3NlbGVjdG9yJykpIHtcbiAgICBjb25zdCBleHByID0gZGlyZWN0aXZlLmdldCgnc2VsZWN0b3InKSE7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSBldmFsdWF0b3IuZXZhbHVhdGUoZXhwcik7XG4gICAgaWYgKHR5cGVvZiByZXNvbHZlZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBGYXRhbERpYWdub3N0aWNFcnJvcihcbiAgICAgICAgICBFcnJvckNvZGUuVkFMVUVfSEFTX1dST05HX1RZUEUsIGV4cHIsIGBzZWxlY3RvciBtdXN0IGJlIGEgc3RyaW5nYCk7XG4gICAgfVxuICAgIC8vIHVzZSBkZWZhdWx0IHNlbGVjdG9yIGluIGNhc2Ugc2VsZWN0b3IgaXMgYW4gZW1wdHkgc3RyaW5nXG4gICAgc2VsZWN0b3IgPSByZXNvbHZlZCA9PT0gJycgPyBkZWZhdWx0U2VsZWN0b3IgOiByZXNvbHZlZDtcbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRmF0YWxEaWFnbm9zdGljRXJyb3IoXG4gICAgICAgICAgRXJyb3JDb2RlLkRJUkVDVElWRV9NSVNTSU5HX1NFTEVDVE9SLCBleHByLFxuICAgICAgICAgIGBEaXJlY3RpdmUgJHtjbGF6ei5uYW1lLnRleHR9IGhhcyBubyBzZWxlY3RvciwgcGxlYXNlIGFkZCBpdCFgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBob3N0ID0gZXh0cmFjdEhvc3RCaW5kaW5ncyhkZWNvcmF0ZWRFbGVtZW50cywgZXZhbHVhdG9yLCBjb3JlTW9kdWxlLCBkaXJlY3RpdmUpO1xuXG4gIGNvbnN0IHByb3ZpZGVyczogRXhwcmVzc2lvbnxudWxsID0gZGlyZWN0aXZlLmhhcygncHJvdmlkZXJzJykgP1xuICAgICAgbmV3IFdyYXBwZWROb2RlRXhwcihcbiAgICAgICAgICBhbm5vdGF0ZUZvckNsb3N1cmVDb21waWxlciA/XG4gICAgICAgICAgICAgIHdyYXBGdW5jdGlvbkV4cHJlc3Npb25zSW5QYXJlbnMoZGlyZWN0aXZlLmdldCgncHJvdmlkZXJzJykhKSA6XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZS5nZXQoJ3Byb3ZpZGVycycpISkgOlxuICAgICAgbnVsbDtcblxuICAvLyBEZXRlcm1pbmUgaWYgYG5nT25DaGFuZ2VzYCBpcyBhIGxpZmVjeWNsZSBob29rIGRlZmluZWQgb24gdGhlIGNvbXBvbmVudC5cbiAgY29uc3QgdXNlc09uQ2hhbmdlcyA9IG1lbWJlcnMuc29tZShcbiAgICAgIG1lbWJlciA9PiAhbWVtYmVyLmlzU3RhdGljICYmIG1lbWJlci5raW5kID09PSBDbGFzc01lbWJlcktpbmQuTWV0aG9kICYmXG4gICAgICAgICAgbWVtYmVyLm5hbWUgPT09ICduZ09uQ2hhbmdlcycpO1xuXG4gIC8vIFBhcnNlIGV4cG9ydEFzLlxuICBsZXQgZXhwb3J0QXM6IHN0cmluZ1tdfG51bGwgPSBudWxsO1xuICBpZiAoZGlyZWN0aXZlLmhhcygnZXhwb3J0QXMnKSkge1xuICAgIGNvbnN0IGV4cHIgPSBkaXJlY3RpdmUuZ2V0KCdleHBvcnRBcycpITtcbiAgICBjb25zdCByZXNvbHZlZCA9IGV2YWx1YXRvci5ldmFsdWF0ZShleHByKTtcbiAgICBpZiAodHlwZW9mIHJlc29sdmVkICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICAgIEVycm9yQ29kZS5WQUxVRV9IQVNfV1JPTkdfVFlQRSwgZXhwciwgYGV4cG9ydEFzIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG4gICAgZXhwb3J0QXMgPSByZXNvbHZlZC5zcGxpdCgnLCcpLm1hcChwYXJ0ID0+IHBhcnQudHJpbSgpKTtcbiAgfVxuXG4gIGNvbnN0IHJhd0N0b3JEZXBzID0gZ2V0Q29uc3RydWN0b3JEZXBlbmRlbmNpZXMoY2xhenosIHJlZmxlY3RvciwgZGVmYXVsdEltcG9ydFJlY29yZGVyLCBpc0NvcmUpO1xuICBsZXQgY3RvckRlcHM6IFIzRGVwZW5kZW5jeU1ldGFkYXRhW118J2ludmFsaWQnfG51bGw7XG5cbiAgLy8gTm9uLWFic3RyYWN0IGRpcmVjdGl2ZXMgKHRob3NlIHdpdGggYSBzZWxlY3RvcikgcmVxdWlyZSB2YWxpZCBjb25zdHJ1Y3RvciBkZXBlbmRlbmNpZXMsIHdoZXJlYXNcbiAgLy8gYWJzdHJhY3QgZGlyZWN0aXZlcyBhcmUgYWxsb3dlZCB0byBoYXZlIGludmFsaWQgZGVwZW5kZW5jaWVzLCBnaXZlbiB0aGF0IGEgc3ViY2xhc3MgbWF5IGNhbGxcbiAgLy8gdGhlIGNvbnN0cnVjdG9yIGV4cGxpY2l0bHkuXG4gIGlmIChzZWxlY3RvciAhPT0gbnVsbCkge1xuICAgIGN0b3JEZXBzID0gdmFsaWRhdGVDb25zdHJ1Y3RvckRlcGVuZGVuY2llcyhjbGF6eiwgcmF3Q3RvckRlcHMpO1xuICB9IGVsc2Uge1xuICAgIGN0b3JEZXBzID0gdW53cmFwQ29uc3RydWN0b3JEZXBlbmRlbmNpZXMocmF3Q3RvckRlcHMpO1xuICB9XG5cbiAgLy8gRGV0ZWN0IGlmIHRoZSBjb21wb25lbnQgaW5oZXJpdHMgZnJvbSBhbm90aGVyIGNsYXNzXG4gIGNvbnN0IHVzZXNJbmhlcml0YW5jZSA9IHJlZmxlY3Rvci5oYXNCYXNlQ2xhc3MoY2xhenopO1xuICBjb25zdCB0eXBlID0gd3JhcFR5cGVSZWZlcmVuY2UocmVmbGVjdG9yLCBjbGF6eik7XG4gIGNvbnN0IGludGVybmFsVHlwZSA9IG5ldyBXcmFwcGVkTm9kZUV4cHIocmVmbGVjdG9yLmdldEludGVybmFsTmFtZU9mQ2xhc3MoY2xhenopKTtcblxuICBjb25zdCBtZXRhZGF0YTogUjNEaXJlY3RpdmVNZXRhZGF0YSA9IHtcbiAgICBuYW1lOiBjbGF6ei5uYW1lLnRleHQsXG4gICAgZGVwczogY3RvckRlcHMsXG4gICAgaG9zdCxcbiAgICBsaWZlY3ljbGU6IHtcbiAgICAgIHVzZXNPbkNoYW5nZXMsXG4gICAgfSxcbiAgICBpbnB1dHM6IHsuLi5pbnB1dHNGcm9tTWV0YSwgLi4uaW5wdXRzRnJvbUZpZWxkc30sXG4gICAgb3V0cHV0czogey4uLm91dHB1dHNGcm9tTWV0YSwgLi4ub3V0cHV0c0Zyb21GaWVsZHN9LFxuICAgIHF1ZXJpZXMsXG4gICAgdmlld1F1ZXJpZXMsXG4gICAgc2VsZWN0b3IsXG4gICAgZnVsbEluaGVyaXRhbmNlOiAhIShmbGFncyAmIEhhbmRsZXJGbGFncy5GVUxMX0lOSEVSSVRBTkNFKSxcbiAgICB0eXBlLFxuICAgIGludGVybmFsVHlwZSxcbiAgICB0eXBlQXJndW1lbnRDb3VudDogcmVmbGVjdG9yLmdldEdlbmVyaWNBcml0eU9mQ2xhc3MoY2xhenopIHx8IDAsXG4gICAgdHlwZVNvdXJjZVNwYW46IGNyZWF0ZVNvdXJjZVNwYW4oY2xhenoubmFtZSksXG4gICAgdXNlc0luaGVyaXRhbmNlLFxuICAgIGV4cG9ydEFzLFxuICAgIHByb3ZpZGVyc1xuICB9O1xuICByZXR1cm4ge2RlY29yYXRvcjogZGlyZWN0aXZlLCBtZXRhZGF0YX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0UXVlcnlNZXRhZGF0YShcbiAgICBleHByTm9kZTogdHMuTm9kZSwgbmFtZTogc3RyaW5nLCBhcmdzOiBSZWFkb25seUFycmF5PHRzLkV4cHJlc3Npb24+LCBwcm9wZXJ0eU5hbWU6IHN0cmluZyxcbiAgICByZWZsZWN0b3I6IFJlZmxlY3Rpb25Ib3N0LCBldmFsdWF0b3I6IFBhcnRpYWxFdmFsdWF0b3IpOiBSM1F1ZXJ5TWV0YWRhdGEge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRmF0YWxEaWFnbm9zdGljRXJyb3IoXG4gICAgICAgIEVycm9yQ29kZS5ERUNPUkFUT1JfQVJJVFlfV1JPTkcsIGV4cHJOb2RlLCBgQCR7bmFtZX0gbXVzdCBoYXZlIGFyZ3VtZW50c2ApO1xuICB9XG4gIGNvbnN0IGZpcnN0ID0gbmFtZSA9PT0gJ1ZpZXdDaGlsZCcgfHwgbmFtZSA9PT0gJ0NvbnRlbnRDaGlsZCc7XG4gIGNvbnN0IG5vZGUgPSB1bndyYXBGb3J3YXJkUmVmKGFyZ3NbMF0sIHJlZmxlY3Rvcik7XG4gIGNvbnN0IGFyZyA9IGV2YWx1YXRvci5ldmFsdWF0ZShub2RlKTtcblxuICAvKiogV2hldGhlciBvciBub3QgdGhpcyBxdWVyeSBzaG91bGQgY29sbGVjdCBvbmx5IHN0YXRpYyByZXN1bHRzIChzZWUgdmlldy9hcGkudHMpICAqL1xuICBsZXQgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBFeHRyYWN0IHRoZSBwcmVkaWNhdGVcbiAgbGV0IHByZWRpY2F0ZTogRXhwcmVzc2lvbnxzdHJpbmdbXXxudWxsID0gbnVsbDtcbiAgaWYgKGFyZyBpbnN0YW5jZW9mIFJlZmVyZW5jZSB8fCBhcmcgaW5zdGFuY2VvZiBEeW5hbWljVmFsdWUpIHtcbiAgICAvLyBSZWZlcmVuY2VzIGFuZCBwcmVkaWNhdGVzIHRoYXQgY291bGQgbm90IGJlIGV2YWx1YXRlZCBzdGF0aWNhbGx5IGFyZSBlbWl0dGVkIGFzIGlzLlxuICAgIHByZWRpY2F0ZSA9IG5ldyBXcmFwcGVkTm9kZUV4cHIobm9kZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICBwcmVkaWNhdGUgPSBbYXJnXTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZ0FycmF5T3JEaWUoYXJnLCBgQCR7bmFtZX0gcHJlZGljYXRlYCwgbm9kZSkpIHtcbiAgICBwcmVkaWNhdGUgPSBhcmc7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICBFcnJvckNvZGUuVkFMVUVfSEFTX1dST05HX1RZUEUsIG5vZGUsIGBAJHtuYW1lfSBwcmVkaWNhdGUgY2Fubm90IGJlIGludGVycHJldGVkYCk7XG4gIH1cblxuICAvLyBFeHRyYWN0IHRoZSByZWFkIGFuZCBkZXNjZW5kYW50cyBvcHRpb25zLlxuICBsZXQgcmVhZDogRXhwcmVzc2lvbnxudWxsID0gbnVsbDtcbiAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgZm9yIGRlc2NlbmRhbnRzIGlzIHRydWUgZm9yIGV2ZXJ5IGRlY29yYXRvciBleGNlcHQgQENvbnRlbnRDaGlsZHJlbi5cbiAgbGV0IGRlc2NlbmRhbnRzOiBib29sZWFuID0gbmFtZSAhPT0gJ0NvbnRlbnRDaGlsZHJlbic7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgIGNvbnN0IG9wdGlvbnNFeHByID0gdW53cmFwRXhwcmVzc2lvbihhcmdzWzFdKTtcbiAgICBpZiAoIXRzLmlzT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24ob3B0aW9uc0V4cHIpKSB7XG4gICAgICB0aHJvdyBuZXcgRmF0YWxEaWFnbm9zdGljRXJyb3IoXG4gICAgICAgICAgRXJyb3JDb2RlLkRFQ09SQVRPUl9BUkdfTk9UX0xJVEVSQUwsIG9wdGlvbnNFeHByLFxuICAgICAgICAgIGBAJHtuYW1lfSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0IGxpdGVyYWxgKTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHJlZmxlY3RPYmplY3RMaXRlcmFsKG9wdGlvbnNFeHByKTtcbiAgICBpZiAob3B0aW9ucy5oYXMoJ3JlYWQnKSkge1xuICAgICAgcmVhZCA9IG5ldyBXcmFwcGVkTm9kZUV4cHIob3B0aW9ucy5nZXQoJ3JlYWQnKSEpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmhhcygnZGVzY2VuZGFudHMnKSkge1xuICAgICAgY29uc3QgZGVzY2VuZGFudHNFeHByID0gb3B0aW9ucy5nZXQoJ2Rlc2NlbmRhbnRzJykhO1xuICAgICAgY29uc3QgZGVzY2VuZGFudHNWYWx1ZSA9IGV2YWx1YXRvci5ldmFsdWF0ZShkZXNjZW5kYW50c0V4cHIpO1xuICAgICAgaWYgKHR5cGVvZiBkZXNjZW5kYW50c1ZhbHVlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICAgICAgRXJyb3JDb2RlLlZBTFVFX0hBU19XUk9OR19UWVBFLCBkZXNjZW5kYW50c0V4cHIsXG4gICAgICAgICAgICBgQCR7bmFtZX0gb3B0aW9ucy5kZXNjZW5kYW50cyBtdXN0IGJlIGEgYm9vbGVhbmApO1xuICAgICAgfVxuICAgICAgZGVzY2VuZGFudHMgPSBkZXNjZW5kYW50c1ZhbHVlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmhhcygnc3RhdGljJykpIHtcbiAgICAgIGNvbnN0IHN0YXRpY1ZhbHVlID0gZXZhbHVhdG9yLmV2YWx1YXRlKG9wdGlvbnMuZ2V0KCdzdGF0aWMnKSEpO1xuICAgICAgaWYgKHR5cGVvZiBzdGF0aWNWYWx1ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHRocm93IG5ldyBGYXRhbERpYWdub3N0aWNFcnJvcihcbiAgICAgICAgICAgIEVycm9yQ29kZS5WQUxVRV9IQVNfV1JPTkdfVFlQRSwgbm9kZSwgYEAke25hbWV9IG9wdGlvbnMuc3RhdGljIG11c3QgYmUgYSBib29sZWFuYCk7XG4gICAgICB9XG4gICAgICBpc1N0YXRpYyA9IHN0YXRpY1ZhbHVlO1xuICAgIH1cblxuICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xuICAgIC8vIFRvbyBtYW55IGFyZ3VtZW50cy5cbiAgICB0aHJvdyBuZXcgRmF0YWxEaWFnbm9zdGljRXJyb3IoXG4gICAgICAgIEVycm9yQ29kZS5ERUNPUkFUT1JfQVJJVFlfV1JPTkcsIG5vZGUsIGBAJHtuYW1lfSBoYXMgdG9vIG1hbnkgYXJndW1lbnRzYCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BlcnR5TmFtZSxcbiAgICBwcmVkaWNhdGUsXG4gICAgZmlyc3QsXG4gICAgZGVzY2VuZGFudHMsXG4gICAgcmVhZCxcbiAgICBzdGF0aWM6IGlzU3RhdGljLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFF1ZXJpZXNGcm9tRGVjb3JhdG9yKFxuICAgIHF1ZXJ5RGF0YTogdHMuRXhwcmVzc2lvbiwgcmVmbGVjdG9yOiBSZWZsZWN0aW9uSG9zdCwgZXZhbHVhdG9yOiBQYXJ0aWFsRXZhbHVhdG9yLFxuICAgIGlzQ29yZTogYm9vbGVhbik6IHtcbiAgY29udGVudDogUjNRdWVyeU1ldGFkYXRhW10sXG4gIHZpZXc6IFIzUXVlcnlNZXRhZGF0YVtdLFxufSB7XG4gIGNvbnN0IGNvbnRlbnQ6IFIzUXVlcnlNZXRhZGF0YVtdID0gW10sIHZpZXc6IFIzUXVlcnlNZXRhZGF0YVtdID0gW107XG4gIGlmICghdHMuaXNPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihxdWVyeURhdGEpKSB7XG4gICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICBFcnJvckNvZGUuVkFMVUVfSEFTX1dST05HX1RZUEUsIHF1ZXJ5RGF0YSxcbiAgICAgICAgJ0RlY29yYXRvciBxdWVyaWVzIG1ldGFkYXRhIG11c3QgYmUgYW4gb2JqZWN0IGxpdGVyYWwnKTtcbiAgfVxuICByZWZsZWN0T2JqZWN0TGl0ZXJhbChxdWVyeURhdGEpLmZvckVhY2goKHF1ZXJ5RXhwciwgcHJvcGVydHlOYW1lKSA9PiB7XG4gICAgcXVlcnlFeHByID0gdW53cmFwRXhwcmVzc2lvbihxdWVyeUV4cHIpO1xuICAgIGlmICghdHMuaXNOZXdFeHByZXNzaW9uKHF1ZXJ5RXhwcikgfHwgIXRzLmlzSWRlbnRpZmllcihxdWVyeUV4cHIuZXhwcmVzc2lvbikpIHtcbiAgICAgIHRocm93IG5ldyBGYXRhbERpYWdub3N0aWNFcnJvcihcbiAgICAgICAgICBFcnJvckNvZGUuVkFMVUVfSEFTX1dST05HX1RZUEUsIHF1ZXJ5RGF0YSxcbiAgICAgICAgICAnRGVjb3JhdG9yIHF1ZXJ5IG1ldGFkYXRhIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBxdWVyeSB0eXBlJyk7XG4gICAgfVxuICAgIGNvbnN0IHR5cGUgPSByZWZsZWN0b3IuZ2V0SW1wb3J0T2ZJZGVudGlmaWVyKHF1ZXJ5RXhwci5leHByZXNzaW9uKTtcbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCAoIWlzQ29yZSAmJiB0eXBlLmZyb20gIT09ICdAYW5ndWxhci9jb3JlJykgfHxcbiAgICAgICAgIVFVRVJZX1RZUEVTLmhhcyh0eXBlLm5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRmF0YWxEaWFnbm9zdGljRXJyb3IoXG4gICAgICAgICAgRXJyb3JDb2RlLlZBTFVFX0hBU19XUk9OR19UWVBFLCBxdWVyeURhdGEsXG4gICAgICAgICAgJ0RlY29yYXRvciBxdWVyeSBtZXRhZGF0YSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgcXVlcnkgdHlwZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gZXh0cmFjdFF1ZXJ5TWV0YWRhdGEoXG4gICAgICAgIHF1ZXJ5RXhwciwgdHlwZS5uYW1lLCBxdWVyeUV4cHIuYXJndW1lbnRzIHx8IFtdLCBwcm9wZXJ0eU5hbWUsIHJlZmxlY3RvciwgZXZhbHVhdG9yKTtcbiAgICBpZiAodHlwZS5uYW1lLnN0YXJ0c1dpdGgoJ0NvbnRlbnQnKSkge1xuICAgICAgY29udGVudC5wdXNoKHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlldy5wdXNoKHF1ZXJ5KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge2NvbnRlbnQsIHZpZXd9O1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZ0FycmF5T3JEaWUodmFsdWU6IGFueSwgbmFtZTogc3RyaW5nLCBub2RlOiB0cy5FeHByZXNzaW9uKTogdmFsdWUgaXMgc3RyaW5nW10ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdmFsdWVbaV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRmF0YWxEaWFnbm9zdGljRXJyb3IoXG4gICAgICAgICAgRXJyb3JDb2RlLlZBTFVFX0hBU19XUk9OR19UWVBFLCBub2RlLFxuICAgICAgICAgIGBGYWlsZWQgdG8gcmVzb2x2ZSAke25hbWV9IGF0IHBvc2l0aW9uICR7aX0gdG8gYSBzdHJpbmdgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpZWxkQXJyYXlWYWx1ZShcbiAgICBkaXJlY3RpdmU6IE1hcDxzdHJpbmcsIHRzLkV4cHJlc3Npb24+LCBmaWVsZDogc3RyaW5nLCBldmFsdWF0b3I6IFBhcnRpYWxFdmFsdWF0b3IpOiBudWxsfFxuICAgIHN0cmluZ1tdIHtcbiAgaWYgKCFkaXJlY3RpdmUuaGFzKGZpZWxkKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gUmVzb2x2ZSB0aGUgZmllbGQgb2YgaW50ZXJlc3QgZnJvbSB0aGUgZGlyZWN0aXZlIG1ldGFkYXRhIHRvIGEgc3RyaW5nW10uXG4gIGNvbnN0IGV4cHJlc3Npb24gPSBkaXJlY3RpdmUuZ2V0KGZpZWxkKSE7XG4gIGNvbnN0IHZhbHVlID0gZXZhbHVhdG9yLmV2YWx1YXRlKGV4cHJlc3Npb24pO1xuICBpZiAoIWlzU3RyaW5nQXJyYXlPckRpZSh2YWx1ZSwgZmllbGQsIGV4cHJlc3Npb24pKSB7XG4gICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICBFcnJvckNvZGUuVkFMVUVfSEFTX1dST05HX1RZUEUsIGV4cHJlc3Npb24sXG4gICAgICAgIGBGYWlsZWQgdG8gcmVzb2x2ZSBARGlyZWN0aXZlLiR7ZmllbGR9IHRvIGEgc3RyaW5nIGFycmF5YCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogSW50ZXJwcmV0IHByb3BlcnR5IG1hcHBpbmcgZmllbGRzIG9uIHRoZSBkZWNvcmF0b3IgKGUuZy4gaW5wdXRzIG9yIG91dHB1dHMpIGFuZCByZXR1cm4gdGhlXG4gKiBjb3JyZWN0bHkgc2hhcGVkIG1ldGFkYXRhIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VGaWVsZFRvUHJvcGVydHlNYXBwaW5nKFxuICAgIGRpcmVjdGl2ZTogTWFwPHN0cmluZywgdHMuRXhwcmVzc2lvbj4sIGZpZWxkOiBzdHJpbmcsXG4gICAgZXZhbHVhdG9yOiBQYXJ0aWFsRXZhbHVhdG9yKToge1tmaWVsZDogc3RyaW5nXTogc3RyaW5nfSB7XG4gIGNvbnN0IG1ldGFWYWx1ZXMgPSBwYXJzZUZpZWxkQXJyYXlWYWx1ZShkaXJlY3RpdmUsIGZpZWxkLCBldmFsdWF0b3IpO1xuICBpZiAoIW1ldGFWYWx1ZXMpIHtcbiAgICByZXR1cm4gRU1QVFlfT0JKRUNUO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFWYWx1ZXMucmVkdWNlKChyZXN1bHRzLCB2YWx1ZSkgPT4ge1xuICAgIC8vIEVpdGhlciB0aGUgdmFsdWUgaXMgJ2ZpZWxkJyBvciAnZmllbGQ6IHByb3BlcnR5Jy4gSW4gdGhlIGZpcnN0IGNhc2UsIGBwcm9wZXJ0eWAgd2lsbFxuICAgIC8vIGJlIHVuZGVmaW5lZCwgaW4gd2hpY2ggY2FzZSB0aGUgZmllbGQgbmFtZSBzaG91bGQgYWxzbyBiZSB1c2VkIGFzIHRoZSBwcm9wZXJ0eSBuYW1lLlxuICAgIGNvbnN0IFtmaWVsZCwgcHJvcGVydHldID0gdmFsdWUuc3BsaXQoJzonLCAyKS5tYXAoc3RyID0+IHN0ci50cmltKCkpO1xuICAgIHJlc3VsdHNbZmllbGRdID0gcHJvcGVydHkgfHwgZmllbGQ7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0sIHt9IGFzIHtbZmllbGQ6IHN0cmluZ106IHN0cmluZ30pO1xufVxuXG4vKipcbiAqIFBhcnNlIHByb3BlcnR5IGRlY29yYXRvcnMgKGUuZy4gYElucHV0YCBvciBgT3V0cHV0YCkgYW5kIHJldHVybiB0aGUgY29ycmVjdGx5IHNoYXBlZCBtZXRhZGF0YVxuICogb2JqZWN0LlxuICovXG5mdW5jdGlvbiBwYXJzZURlY29yYXRlZEZpZWxkcyhcbiAgICBmaWVsZHM6IHttZW1iZXI6IENsYXNzTWVtYmVyLCBkZWNvcmF0b3JzOiBEZWNvcmF0b3JbXX1bXSwgZXZhbHVhdG9yOiBQYXJ0aWFsRXZhbHVhdG9yLFxuICAgIG1hcFZhbHVlUmVzb2x2ZXI6IChwdWJsaWNOYW1lOiBzdHJpbmcsIGludGVybmFsTmFtZTogc3RyaW5nKSA9PlxuICAgICAgICBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddKToge1tmaWVsZDogc3RyaW5nXTogc3RyaW5nfFtzdHJpbmcsIHN0cmluZ119IHtcbiAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKHJlc3VsdHMsIGZpZWxkKSA9PiB7XG4gICAgY29uc3QgZmllbGROYW1lID0gZmllbGQubWVtYmVyLm5hbWU7XG4gICAgZmllbGQuZGVjb3JhdG9ycy5mb3JFYWNoKGRlY29yYXRvciA9PiB7XG4gICAgICAvLyBUaGUgZGVjb3JhdG9yIGVpdGhlciBkb2Vzbid0IGhhdmUgYW4gYXJndW1lbnQgKEBJbnB1dCgpKSBpbiB3aGljaCBjYXNlIHRoZSBwcm9wZXJ0eVxuICAgICAgLy8gbmFtZSBpcyB1c2VkLCBvciBpdCBoYXMgb25lIGFyZ3VtZW50IChAT3V0cHV0KCduYW1lZCcpKS5cbiAgICAgIGlmIChkZWNvcmF0b3IuYXJncyA9PSBudWxsIHx8IGRlY29yYXRvci5hcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXN1bHRzW2ZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgICB9IGVsc2UgaWYgKGRlY29yYXRvci5hcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGV2YWx1YXRvci5ldmFsdWF0ZShkZWNvcmF0b3IuYXJnc1swXSk7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICAgICAgICBFcnJvckNvZGUuVkFMVUVfSEFTX1dST05HX1RZUEUsIERlY29yYXRvci5ub2RlRm9yRXJyb3IoZGVjb3JhdG9yKSxcbiAgICAgICAgICAgICAgYEAke2RlY29yYXRvci5uYW1lfSBkZWNvcmF0b3IgYXJndW1lbnQgbXVzdCByZXNvbHZlIHRvIGEgc3RyaW5nYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0c1tmaWVsZE5hbWVdID0gbWFwVmFsdWVSZXNvbHZlcihwcm9wZXJ0eSwgZmllbGROYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRvbyBtYW55IGFyZ3VtZW50cy5cbiAgICAgICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICAgICAgRXJyb3JDb2RlLkRFQ09SQVRPUl9BUklUWV9XUk9ORywgRGVjb3JhdG9yLm5vZGVGb3JFcnJvcihkZWNvcmF0b3IpLFxuICAgICAgICAgICAgYEAke2RlY29yYXRvci5uYW1lfSBjYW4gaGF2ZSBhdCBtb3N0IG9uZSBhcmd1bWVudCwgZ290ICR7XG4gICAgICAgICAgICAgICAgZGVjb3JhdG9yLmFyZ3MubGVuZ3RofSBhcmd1bWVudChzKWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9LCB7fSBhcyB7W2ZpZWxkOiBzdHJpbmddOiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddfSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbnB1dChwdWJsaWNOYW1lOiBzdHJpbmcsIGludGVybmFsTmFtZTogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXSB7XG4gIHJldHVybiBbcHVibGljTmFtZSwgaW50ZXJuYWxOYW1lXTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU91dHB1dChwdWJsaWNOYW1lOiBzdHJpbmcsIGludGVybmFsTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBwdWJsaWNOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcmllc0Zyb21GaWVsZHMoXG4gICAgZmllbGRzOiB7bWVtYmVyOiBDbGFzc01lbWJlciwgZGVjb3JhdG9yczogRGVjb3JhdG9yW119W10sIHJlZmxlY3RvcjogUmVmbGVjdGlvbkhvc3QsXG4gICAgZXZhbHVhdG9yOiBQYXJ0aWFsRXZhbHVhdG9yKTogUjNRdWVyeU1ldGFkYXRhW10ge1xuICByZXR1cm4gZmllbGRzLm1hcCgoe21lbWJlciwgZGVjb3JhdG9yc30pID0+IHtcbiAgICBjb25zdCBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzWzBdO1xuICAgIGNvbnN0IG5vZGUgPSBtZW1iZXIubm9kZSB8fCBEZWNvcmF0b3Iubm9kZUZvckVycm9yKGRlY29yYXRvcik7XG5cbiAgICAvLyBUaHJvdyBpbiBjYXNlIG9mIGBASW5wdXQoKSBAQ29udGVudENoaWxkKCdmb28nKSBmb286IGFueWAsIHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gSXZ5XG4gICAgaWYgKG1lbWJlci5kZWNvcmF0b3JzIS5zb21lKHYgPT4gdi5uYW1lID09PSAnSW5wdXQnKSkge1xuICAgICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICAgIEVycm9yQ29kZS5ERUNPUkFUT1JfQ09MTElTSU9OLCBub2RlLFxuICAgICAgICAgICdDYW5ub3QgY29tYmluZSBASW5wdXQgZGVjb3JhdG9ycyB3aXRoIHF1ZXJ5IGRlY29yYXRvcnMnKTtcbiAgICB9XG4gICAgaWYgKGRlY29yYXRvcnMubGVuZ3RoICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRmF0YWxEaWFnbm9zdGljRXJyb3IoXG4gICAgICAgICAgRXJyb3JDb2RlLkRFQ09SQVRPUl9DT0xMSVNJT04sIG5vZGUsXG4gICAgICAgICAgJ0Nhbm5vdCBoYXZlIG11bHRpcGxlIHF1ZXJ5IGRlY29yYXRvcnMgb24gdGhlIHNhbWUgY2xhc3MgbWVtYmVyJyk7XG4gICAgfSBlbHNlIGlmICghaXNQcm9wZXJ0eVR5cGVNZW1iZXIobWVtYmVyKSkge1xuICAgICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICAgIEVycm9yQ29kZS5ERUNPUkFUT1JfVU5FWFBFQ1RFRCwgbm9kZSxcbiAgICAgICAgICAnUXVlcnkgZGVjb3JhdG9yIG11c3QgZ28gb24gYSBwcm9wZXJ0eS10eXBlIG1lbWJlcicpO1xuICAgIH1cbiAgICByZXR1cm4gZXh0cmFjdFF1ZXJ5TWV0YWRhdGEoXG4gICAgICAgIG5vZGUsIGRlY29yYXRvci5uYW1lLCBkZWNvcmF0b3IuYXJncyB8fCBbXSwgbWVtYmVyLm5hbWUsIHJlZmxlY3RvciwgZXZhbHVhdG9yKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzUHJvcGVydHlUeXBlTWVtYmVyKG1lbWJlcjogQ2xhc3NNZW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1lbWJlci5raW5kID09PSBDbGFzc01lbWJlcktpbmQuR2V0dGVyIHx8IG1lbWJlci5raW5kID09PSBDbGFzc01lbWJlcktpbmQuU2V0dGVyIHx8XG4gICAgICBtZW1iZXIua2luZCA9PT0gQ2xhc3NNZW1iZXJLaW5kLlByb3BlcnR5O1xufVxuXG50eXBlIFN0cmluZ01hcDxUPiA9IHtcbiAgW2tleTogc3RyaW5nXTogVDtcbn07XG5cbmZ1bmN0aW9uIGV2YWx1YXRlSG9zdEV4cHJlc3Npb25CaW5kaW5ncyhcbiAgICBob3N0RXhwcjogdHMuRXhwcmVzc2lvbiwgZXZhbHVhdG9yOiBQYXJ0aWFsRXZhbHVhdG9yKTogUGFyc2VkSG9zdEJpbmRpbmdzIHtcbiAgY29uc3QgaG9zdE1ldGFNYXAgPSBldmFsdWF0b3IuZXZhbHVhdGUoaG9zdEV4cHIpO1xuICBpZiAoIShob3N0TWV0YU1hcCBpbnN0YW5jZW9mIE1hcCkpIHtcbiAgICB0aHJvdyBuZXcgRmF0YWxEaWFnbm9zdGljRXJyb3IoXG4gICAgICAgIEVycm9yQ29kZS5WQUxVRV9IQVNfV1JPTkdfVFlQRSwgaG9zdEV4cHIsIGBEZWNvcmF0b3IgaG9zdCBtZXRhZGF0YSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICB9XG4gIGNvbnN0IGhvc3RNZXRhZGF0YTogU3RyaW5nTWFwPHN0cmluZ3xFeHByZXNzaW9uPiA9IHt9O1xuICBob3N0TWV0YU1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgLy8gUmVzb2x2ZSBFbnVtIHJlZmVyZW5jZXMgdG8gdGhlaXIgZGVjbGFyZWQgdmFsdWUuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRW51bVZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlc29sdmVkO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICAgIEVycm9yQ29kZS5WQUxVRV9IQVNfV1JPTkdfVFlQRSwgaG9zdEV4cHIsXG4gICAgICAgICAgYERlY29yYXRvciBob3N0IG1ldGFkYXRhIG11c3QgYmUgYSBzdHJpbmcgLT4gc3RyaW5nIG9iamVjdCwgYnV0IGZvdW5kIHVucGFyc2VhYmxlIGtleWApO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICAgIGhvc3RNZXRhZGF0YVtrZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIER5bmFtaWNWYWx1ZSkge1xuICAgICAgaG9zdE1ldGFkYXRhW2tleV0gPSBuZXcgV3JhcHBlZE5vZGVFeHByKHZhbHVlLm5vZGUgYXMgdHMuRXhwcmVzc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBGYXRhbERpYWdub3N0aWNFcnJvcihcbiAgICAgICAgICBFcnJvckNvZGUuVkFMVUVfSEFTX1dST05HX1RZUEUsIGhvc3RFeHByLFxuICAgICAgICAgIGBEZWNvcmF0b3IgaG9zdCBtZXRhZGF0YSBtdXN0IGJlIGEgc3RyaW5nIC0+IHN0cmluZyBvYmplY3QsIGJ1dCBmb3VuZCB1bnBhcnNlYWJsZSB2YWx1ZWApO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgYmluZGluZ3MgPSBwYXJzZUhvc3RCaW5kaW5ncyhob3N0TWV0YWRhdGEpO1xuXG4gIGNvbnN0IGVycm9ycyA9IHZlcmlmeUhvc3RCaW5kaW5ncyhiaW5kaW5ncywgY3JlYXRlU291cmNlU3Bhbihob3N0RXhwcikpO1xuICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRmF0YWxEaWFnbm9zdGljRXJyb3IoXG4gICAgICAgIC8vIFRPRE86IHByb3ZpZGUgbW9yZSBncmFudWxhciBkaWFnbm9zdGljIGFuZCBvdXRwdXQgc3BlY2lmaWMgaG9zdCBleHByZXNzaW9uIHRoYXRcbiAgICAgICAgLy8gdHJpZ2dlcmVkIGFuIGVycm9yIGluc3RlYWQgb2YgdGhlIHdob2xlIGhvc3Qgb2JqZWN0LlxuICAgICAgICBFcnJvckNvZGUuSE9TVF9CSU5ESU5HX1BBUlNFX0VSUk9SLCBob3N0RXhwcixcbiAgICAgICAgZXJyb3JzLm1hcCgoZXJyb3I6IFBhcnNlRXJyb3IpID0+IGVycm9yLm1zZykuam9pbignXFxuJykpO1xuICB9XG5cbiAgcmV0dXJuIGJpbmRpbmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEhvc3RCaW5kaW5ncyhcbiAgICBtZW1iZXJzOiBDbGFzc01lbWJlcltdLCBldmFsdWF0b3I6IFBhcnRpYWxFdmFsdWF0b3IsIGNvcmVNb2R1bGU6IHN0cmluZ3x1bmRlZmluZWQsXG4gICAgbWV0YWRhdGE/OiBNYXA8c3RyaW5nLCB0cy5FeHByZXNzaW9uPik6IFBhcnNlZEhvc3RCaW5kaW5ncyB7XG4gIGxldCBiaW5kaW5nczogUGFyc2VkSG9zdEJpbmRpbmdzO1xuICBpZiAobWV0YWRhdGEgJiYgbWV0YWRhdGEuaGFzKCdob3N0JykpIHtcbiAgICBiaW5kaW5ncyA9IGV2YWx1YXRlSG9zdEV4cHJlc3Npb25CaW5kaW5ncyhtZXRhZGF0YS5nZXQoJ2hvc3QnKSEsIGV2YWx1YXRvcik7XG4gIH0gZWxzZSB7XG4gICAgYmluZGluZ3MgPSBwYXJzZUhvc3RCaW5kaW5ncyh7fSk7XG4gIH1cblxuICBmaWx0ZXJUb01lbWJlcnNXaXRoRGVjb3JhdG9yKG1lbWJlcnMsICdIb3N0QmluZGluZycsIGNvcmVNb2R1bGUpXG4gICAgICAuZm9yRWFjaCgoe21lbWJlciwgZGVjb3JhdG9yc30pID0+IHtcbiAgICAgICAgZGVjb3JhdG9ycy5mb3JFYWNoKGRlY29yYXRvciA9PiB7XG4gICAgICAgICAgbGV0IGhvc3RQcm9wZXJ0eU5hbWU6IHN0cmluZyA9IG1lbWJlci5uYW1lO1xuICAgICAgICAgIGlmIChkZWNvcmF0b3IuYXJncyAhPT0gbnVsbCAmJiBkZWNvcmF0b3IuYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoZGVjb3JhdG9yLmFyZ3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBGYXRhbERpYWdub3N0aWNFcnJvcihcbiAgICAgICAgICAgICAgICAgIEVycm9yQ29kZS5ERUNPUkFUT1JfQVJJVFlfV1JPTkcsIERlY29yYXRvci5ub2RlRm9yRXJyb3IoZGVjb3JhdG9yKSxcbiAgICAgICAgICAgICAgICAgIGBASG9zdEJpbmRpbmcgY2FuIGhhdmUgYXQgbW9zdCBvbmUgYXJndW1lbnQsIGdvdCAke1xuICAgICAgICAgICAgICAgICAgICAgIGRlY29yYXRvci5hcmdzLmxlbmd0aH0gYXJndW1lbnQocylgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBldmFsdWF0b3IuZXZhbHVhdGUoZGVjb3JhdG9yLmFyZ3NbMF0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvbHZlZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICAgICAgICAgICAgRXJyb3JDb2RlLlZBTFVFX0hBU19XUk9OR19UWVBFLCBEZWNvcmF0b3Iubm9kZUZvckVycm9yKGRlY29yYXRvciksXG4gICAgICAgICAgICAgICAgICBgQEhvc3RCaW5kaW5nJ3MgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZ2ApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBob3N0UHJvcGVydHlOYW1lID0gcmVzb2x2ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYmluZGluZ3MucHJvcGVydGllc1tob3N0UHJvcGVydHlOYW1lXSA9IG1lbWJlci5uYW1lO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gIGZpbHRlclRvTWVtYmVyc1dpdGhEZWNvcmF0b3IobWVtYmVycywgJ0hvc3RMaXN0ZW5lcicsIGNvcmVNb2R1bGUpXG4gICAgICAuZm9yRWFjaCgoe21lbWJlciwgZGVjb3JhdG9yc30pID0+IHtcbiAgICAgICAgZGVjb3JhdG9ycy5mb3JFYWNoKGRlY29yYXRvciA9PiB7XG4gICAgICAgICAgbGV0IGV2ZW50TmFtZTogc3RyaW5nID0gbWVtYmVyLm5hbWU7XG4gICAgICAgICAgbGV0IGFyZ3M6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgaWYgKGRlY29yYXRvci5hcmdzICE9PSBudWxsICYmIGRlY29yYXRvci5hcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChkZWNvcmF0b3IuYXJncy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBGYXRhbERpYWdub3N0aWNFcnJvcihcbiAgICAgICAgICAgICAgICAgIEVycm9yQ29kZS5ERUNPUkFUT1JfQVJJVFlfV1JPTkcsIGRlY29yYXRvci5hcmdzWzJdLFxuICAgICAgICAgICAgICAgICAgYEBIb3N0TGlzdGVuZXIgY2FuIGhhdmUgYXQgbW9zdCB0d28gYXJndW1lbnRzYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkID0gZXZhbHVhdG9yLmV2YWx1YXRlKGRlY29yYXRvci5hcmdzWzBdKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb2x2ZWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBGYXRhbERpYWdub3N0aWNFcnJvcihcbiAgICAgICAgICAgICAgICAgIEVycm9yQ29kZS5WQUxVRV9IQVNfV1JPTkdfVFlQRSwgZGVjb3JhdG9yLmFyZ3NbMF0sXG4gICAgICAgICAgICAgICAgICBgQEhvc3RMaXN0ZW5lcidzIGV2ZW50IG5hbWUgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZ2ApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudE5hbWUgPSByZXNvbHZlZDtcblxuICAgICAgICAgICAgaWYgKGRlY29yYXRvci5hcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICBjb25zdCBleHByZXNzaW9uID0gZGVjb3JhdG9yLmFyZ3NbMV07XG4gICAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkQXJncyA9IGV2YWx1YXRvci5ldmFsdWF0ZShkZWNvcmF0b3IuYXJnc1sxXSk7XG4gICAgICAgICAgICAgIGlmICghaXNTdHJpbmdBcnJheU9yRGllKHJlc29sdmVkQXJncywgJ0BIb3N0TGlzdGVuZXIuYXJncycsIGV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEZhdGFsRGlhZ25vc3RpY0Vycm9yKFxuICAgICAgICAgICAgICAgICAgICBFcnJvckNvZGUuVkFMVUVfSEFTX1dST05HX1RZUEUsIGRlY29yYXRvci5hcmdzWzFdLFxuICAgICAgICAgICAgICAgICAgICBgQEhvc3RMaXN0ZW5lcidzIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIGFycmF5YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYXJncyA9IHJlc29sdmVkQXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBiaW5kaW5ncy5saXN0ZW5lcnNbZXZlbnROYW1lXSA9IGAke21lbWJlci5uYW1lfSgke2FyZ3Muam9pbignLCcpfSlgO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICByZXR1cm4gYmluZGluZ3M7XG59XG5cbmNvbnN0IFFVRVJZX1RZUEVTID0gbmV3IFNldChbXG4gICdDb250ZW50Q2hpbGQnLFxuICAnQ29udGVudENoaWxkcmVuJyxcbiAgJ1ZpZXdDaGlsZCcsXG4gICdWaWV3Q2hpbGRyZW4nLFxuXSk7XG4iXX0=