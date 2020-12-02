(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib')) :
    typeof define === 'function' && define.amd ? define(['exports', 'tslib'], factory) :
    (global = global || self, factory(global['injection-js'] = {}, global.tslib));
}(this, (function (exports, tslib) { 'use strict';

    var globalScope;
    if (typeof window === 'undefined') {
        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
            globalScope = self;
        }
        else {
            globalScope = global;
        }
    }
    else {
        globalScope = window;
    }
    // Need to declare a new variable for global here since TypeScript
    // exports the original value of the symbol.
    var _global = globalScope;
    function stringify(token) {
        if (typeof token === 'string') {
            return token;
        }
        if (token == null) {
            return '' + token;
        }
        if (token.overriddenName) {
            return "" + token.overriddenName;
        }
        if (token.name) {
            return "" + token.name;
        }
        var res = token.toString();
        var newLineIndex = res.indexOf('\n');
        return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _nextClassId = 0;
    var Reflect = _global['Reflect'];
    function extractAnnotation(annotation) {
        if (typeof annotation === 'function' && annotation.hasOwnProperty('annotation')) {
            // it is a decorator, extract annotation
            annotation = annotation.annotation;
        }
        return annotation;
    }
    function applyParams(fnOrArray, key) {
        if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function || fnOrArray === Number || fnOrArray === Array) {
            throw new Error("Can not use native " + stringify(fnOrArray) + " as constructor");
        }
        if (typeof fnOrArray === 'function') {
            return fnOrArray;
        }
        if (Array.isArray(fnOrArray)) {
            var annotations = fnOrArray;
            var annoLength = annotations.length - 1;
            var fn = fnOrArray[annoLength];
            if (typeof fn !== 'function') {
                throw new Error("Last position of Class method array must be Function in key " + key + " was '" + stringify(fn) + "'");
            }
            if (annoLength !== fn.length) {
                throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + stringify(fn));
            }
            var paramsAnnotations = [];
            for (var i = 0, ii = annotations.length - 1; i < ii; i++) {
                var paramAnnotations = [];
                paramsAnnotations.push(paramAnnotations);
                var annotation = annotations[i];
                if (Array.isArray(annotation)) {
                    for (var j = 0; j < annotation.length; j++) {
                        paramAnnotations.push(extractAnnotation(annotation[j]));
                    }
                }
                else if (typeof annotation === 'function') {
                    paramAnnotations.push(extractAnnotation(annotation));
                }
                else {
                    paramAnnotations.push(annotation);
                }
            }
            Reflect.defineMetadata('parameters', paramsAnnotations, fn);
            return fn;
        }
        throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + stringify(fnOrArray) + "'");
    }
    /**
     * Provides a way for expressing ES6 classes with parameter annotations in ES5.
     *
     * ## Basic Example
     *
     * ```
     * var Greeter = ng.Class({
     *   constructor: function(name) {
     *     this.name = name;
     *   },
     *
     *   greet: function() {
     *     alert('Hello ' + this.name + '!');
     *   }
     * });
     * ```
     *
     * is equivalent to ES6:
     *
     * ```
     * class Greeter {
     *   constructor(name) {
     *     this.name = name;
     *   }
     *
     *   greet() {
     *     alert('Hello ' + this.name + '!');
     *   }
     * }
     * ```
     *
     * or equivalent to ES5:
     *
     * ```
     * var Greeter = function (name) {
     *   this.name = name;
     * }
     *
     * Greeter.prototype.greet = function () {
     *   alert('Hello ' + this.name + '!');
     * }
     * ```
     *
     * ### Example with parameter annotations
     *
     * ```
     * var MyService = ng.Class({
     *   constructor: [String, [new Optional(), Service], function(name, myService) {
     *     ...
     *   }]
     * });
     * ```
     *
     * is equivalent to ES6:
     *
     * ```
     * class MyService {
     *   constructor(name: string, @Optional() myService: Service) {
     *     ...
     *   }
     * }
     * ```
     *
     * ### Example with inheritance
     *
     * ```
     * var Shape = ng.Class({
     *   constructor: (color) {
     *     this.color = color;
     *   }
     * });
     *
     * var Square = ng.Class({
     *   extends: Shape,
     *   constructor: function(color, size) {
     *     Shape.call(this, color);
     *     this.size = size;
     *   }
     * });
     * ```
     * @suppress {globalThis}
     * @stable
     */
    function Class(clsDef) {
        var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
        var proto = constructor.prototype;
        if (clsDef.hasOwnProperty('extends')) {
            if (typeof clsDef.extends === 'function') {
                constructor.prototype = proto = Object.create(clsDef.extends.prototype);
            }
            else {
                throw new Error("Class definition 'extends' property must be a constructor function was: " + stringify(clsDef.extends));
            }
        }
        for (var key in clsDef) {
            if (key !== 'extends' && key !== 'prototype' && clsDef.hasOwnProperty(key)) {
                proto[key] = applyParams(clsDef[key], key);
            }
        }
        if (this && this.annotations instanceof Array) {
            Reflect.defineMetadata('annotations', this.annotations, constructor);
        }
        var constructorName = constructor['name'];
        if (!constructorName || constructorName === 'constructor') {
            constructor['overriddenName'] = "class" + _nextClassId++;
        }
        return constructor;
    }
    /**
     * @suppress {globalThis}
     */
    function makeDecorator(name, props, parentClass, chainFn) {
        var metaCtor = makeMetadataCtor([props]);
        function DecoratorFactory(objOrType) {
            if (!(Reflect && Reflect.getOwnMetadata)) {
                throw 'reflect-metadata shim is required when using class decorators';
            }
            if (this instanceof DecoratorFactory) {
                metaCtor.call(this, objOrType);
                return this;
            }
            var annotationInstance = new DecoratorFactory(objOrType);
            var chainAnnotation = typeof this === 'function' && Array.isArray(this.annotations) ? this.annotations : [];
            chainAnnotation.push(annotationInstance);
            var TypeDecorator = function TypeDecorator(cls) {
                var annotations = Reflect.getOwnMetadata('annotations', cls) || [];
                annotations.push(annotationInstance);
                Reflect.defineMetadata('annotations', annotations, cls);
                return cls;
            };
            TypeDecorator.annotations = chainAnnotation;
            TypeDecorator.Class = Class;
            if (chainFn)
                chainFn(TypeDecorator);
            return TypeDecorator;
        }
        if (parentClass) {
            DecoratorFactory.prototype = Object.create(parentClass.prototype);
        }
        DecoratorFactory.prototype.toString = function () { return "@" + name; };
        DecoratorFactory.annotationCls = DecoratorFactory;
        return DecoratorFactory;
    }
    function makeMetadataCtor(props) {
        return function ctor() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            props.forEach(function (prop, i) {
                var argVal = args[i];
                if (Array.isArray(prop)) {
                    // plain parameter
                    _this[prop[0]] = argVal === undefined ? prop[1] : argVal;
                }
                else {
                    for (var propName in prop) {
                        _this[propName] = argVal && argVal.hasOwnProperty(propName) ? argVal[propName] : prop[propName];
                    }
                }
            });
        };
    }
    function makeParamDecorator(name, props, parentClass) {
        var metaCtor = makeMetadataCtor(props);
        function ParamDecoratorFactory() {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this instanceof ParamDecoratorFactory) {
                metaCtor.apply(this, args);
                return this;
            }
            var annotationInstance = new ((_a = ParamDecoratorFactory).bind.apply(_a, tslib.__spreadArrays([void 0], args)))();
            ParamDecorator.annotation = annotationInstance;
            return ParamDecorator;
            function ParamDecorator(cls, unusedKey, index) {
                var parameters = Reflect.getOwnMetadata('parameters', cls) || [];
                // there might be gaps if some in between parameters do not have annotations.
                // we pad with nulls.
                while (parameters.length <= index) {
                    parameters.push(null);
                }
                parameters[index] = parameters[index] || [];
                parameters[index].push(annotationInstance);
                Reflect.defineMetadata('parameters', parameters, cls);
                return cls;
            }
        }
        if (parentClass) {
            ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
        }
        ParamDecoratorFactory.prototype.toString = function () { return "@" + name; };
        ParamDecoratorFactory.annotationCls = ParamDecoratorFactory;
        return ParamDecoratorFactory;
    }
    function makePropDecorator(name, props, parentClass) {
        var metaCtor = makeMetadataCtor(props);
        function PropDecoratorFactory() {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this instanceof PropDecoratorFactory) {
                metaCtor.apply(this, args);
                return this;
            }
            var decoratorInstance = new ((_a = PropDecoratorFactory).bind.apply(_a, tslib.__spreadArrays([void 0], args)))();
            return function PropDecorator(target, name) {
                var meta = Reflect.getOwnMetadata('propMetadata', target.constructor) || {};
                meta[name] = (meta.hasOwnProperty(name) && meta[name]) || [];
                meta[name].unshift(decoratorInstance);
                Reflect.defineMetadata('propMetadata', meta, target.constructor);
            };
        }
        if (parentClass) {
            PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
        }
        PropDecoratorFactory.prototype.toString = function () { return "@" + name; };
        PropDecoratorFactory.annotationCls = PropDecoratorFactory;
        return PropDecoratorFactory;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Inject decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var Inject = makeParamDecorator('Inject', [['token', undefined]]);
    /**
     * Optional decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var Optional = makeParamDecorator('Optional', []);
    /**
     * Injectable decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var Injectable = makeDecorator('Injectable', []);
    /**
     * Self decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var Self = makeParamDecorator('Self', []);
    /**
     * SkipSelf decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var SkipSelf = makeParamDecorator('SkipSelf', []);
    /**
     * Host decorator and metadata.
     *
     * @stable
     * @Annotation
     */
    var Host = makeParamDecorator('Host', []);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Allows to refer to references which are not yet defined.
     *
     * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
     * DI is declared,
     * but not yet defined. It is also used when the `token` which we use when creating a query is not
     * yet defined.
     *
     * ### Example
     * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
     * @experimental
     */
    function forwardRef(forwardRefFn) {
        forwardRefFn.__forward_ref__ = forwardRef;
        forwardRefFn.toString = function () {
            return stringify(this());
        };
        return forwardRefFn;
    }
    /**
     * Lazily retrieves the reference value from a forwardRef.
     *
     * Acts as the identity function when given a non-forward-ref value.
     *
     * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
     *
     * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
     *
     * See: {@link forwardRef}
     * @experimental
     */
    function resolveForwardRef(type) {
        if (typeof type === 'function' && type.hasOwnProperty('__forward_ref__') && type.__forward_ref__ === forwardRef) {
            return type();
        }
        else {
            return type;
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _THROW_IF_NOT_FOUND = new Object();
    var THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
    // tslint:disable-next-line:class-name no-use-before-declare
    var _NullInjector = /** @class */ (function () {
        function _NullInjector() {
        }
        _NullInjector.prototype.get = function (token, notFoundValue) {
            if (notFoundValue === void 0) { notFoundValue = _THROW_IF_NOT_FOUND; }
            if (notFoundValue === _THROW_IF_NOT_FOUND) {
                throw new Error("No provider for " + stringify(token) + "!");
            }
            return notFoundValue;
        };
        return _NullInjector;
    }());
    /**
     * @whatItDoes Injector interface
     * @howToUse
     * ```
     * const injector: Injector = ...;
     * injector.get(...);
     * ```
     *
     * @description
     * For more details, see the {@linkDocs guide/dependency-injection "Dependency Injection Guide"}.
     *
     * ### Example
     *
     * {@example core/di/ts/injector_spec.ts region='Injector'}
     *
     * `Injector` returns itself when given `Injector` as a token:
     * {@example core/di/ts/injector_spec.ts region='injectInjector'}
     *
     * @stable
     */
    var Injector = /** @class */ (function () {
        function Injector() {
        }
        Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
        Injector.NULL = new _NullInjector();
        return Injector;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ERROR_ORIGINAL_ERROR = 'ngOriginalError';
    function getOriginalError(error) {
        return error[ERROR_ORIGINAL_ERROR];
    }
    function wrappedError(message, originalError) {
        var msg = message + " caused by: " + (originalError instanceof Error ? originalError.message : originalError);
        var error = Error(msg);
        error[ERROR_ORIGINAL_ERROR] = originalError;
        return error;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function findFirstClosedCycle(keys) {
        var res = [];
        for (var i = 0; i < keys.length; ++i) {
            if (res.indexOf(keys[i]) > -1) {
                res.push(keys[i]);
                return res;
            }
            res.push(keys[i]);
        }
        return res;
    }
    function constructResolvingPath(keys) {
        if (keys.length > 1) {
            var reversed = findFirstClosedCycle(keys.slice().reverse());
            var tokenStrs = reversed.map(function (k) { return stringify(k.token); });
            return ' (' + tokenStrs.join(' -> ') + ')';
        }
        return '';
    }
    function injectionError(injector, key, constructResolvingMessage, originalError) {
        var error = (originalError ? wrappedError('', originalError) : Error());
        error.addKey = addKey;
        error.keys = [key];
        error.injectors = [injector];
        error.constructResolvingMessage = constructResolvingMessage;
        error.message = error.constructResolvingMessage();
        error[ERROR_ORIGINAL_ERROR] = originalError;
        return error;
    }
    function addKey(injector, key) {
        this.injectors.push(injector);
        this.keys.push(key);
        this.message = this.constructResolvingMessage();
    }
    /**
     * Thrown when trying to retrieve a dependency by key from {@link Injector}, but the
     * {@link Injector} does not have a {@link Provider} for the given key.
     *
     * ### Example ([live demo](http://plnkr.co/edit/vq8D3FRB9aGbnWJqtEPE?p=preview))
     *
     * ```typescript
     * class A {
     *   constructor(b:B) {}
     * }
     *
     * expect(() => Injector.resolveAndCreate([A])).toThrowError();
     * ```
     */
    function noProviderError(injector, key) {
        return injectionError(injector, key, function () {
            var first = stringify(this.keys[0].token);
            return "No provider for " + first + "!" + constructResolvingPath(this.keys);
        });
    }
    /**
     * Thrown when dependencies form a cycle.
     *
     * ### Example ([live demo](http://plnkr.co/edit/wYQdNos0Tzql3ei1EV9j?p=info))
     *
     * ```typescript
     * var injector = Injector.resolveAndCreate([
     *   {provide: "one", useFactory: (two) => "two", deps: [[new Inject("two")]]},
     *   {provide: "two", useFactory: (one) => "one", deps: [[new Inject("one")]]}
     * ]);
     *
     * expect(() => injector.get("one")).toThrowError();
     * ```
     *
     * Retrieving `A` or `B` throws a `CyclicDependencyError` as the graph above cannot be constructed.
     */
    function cyclicDependencyError(injector, key) {
        return injectionError(injector, key, function () {
            return "Cannot instantiate cyclic dependency!" + constructResolvingPath(this.keys);
        });
    }
    /**
     * Thrown when a constructing type returns with an Error.
     *
     * The `InstantiationError` class contains the original error plus the dependency graph which caused
     * this object to be instantiated.
     *
     * ### Example ([live demo](http://plnkr.co/edit/7aWYdcqTQsP0eNqEdUAf?p=preview))
     *
     * ```typescript
     * class A {
     *   constructor() {
     *     throw new Error('message');
     *   }
     * }
     *
     * var injector = Injector.resolveAndCreate([A]);

     * try {
     *   injector.get(A);
     * } catch (e) {
     *   expect(e instanceof InstantiationError).toBe(true);
     *   expect(e.originalException.message).toEqual("message");
     *   expect(e.originalStack).toBeDefined();
     * }
     * ```
     */
    function instantiationError(injector, originalException, originalStack, key) {
        return injectionError(injector, key, function () {
            var first = stringify(this.keys[0].token);
            return getOriginalError(this).message + ": Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
        }, originalException);
    }
    /**
     * Thrown when an object other then {@link Provider} (or `Type`) is passed to {@link Injector}
     * creation.
     *
     * ### Example ([live demo](http://plnkr.co/edit/YatCFbPAMCL0JSSQ4mvH?p=preview))
     *
     * ```typescript
     * expect(() => Injector.resolveAndCreate(["not a type"])).toThrowError();
     * ```
     */
    function invalidProviderError(provider) {
        return Error("Invalid provider - only instances of Provider and Type are allowed, got: " + provider);
    }
    /**
     * Thrown when the class has no annotation information.
     *
     * Lack of annotation information prevents the {@link Injector} from determining which dependencies
     * need to be injected into the constructor.
     *
     * ### Example ([live demo](http://plnkr.co/edit/rHnZtlNS7vJOPQ6pcVkm?p=preview))
     *
     * ```typescript
     * class A {
     *   constructor(b) {}
     * }
     *
     * expect(() => Injector.resolveAndCreate([A])).toThrowError();
     * ```
     *
     * This error is also thrown when the class not marked with {@link Injectable} has parameter types.
     *
     * ```typescript
     * class B {}
     *
     * class A {
     *   constructor(b:B) {} // no information about the parameter types of A is available at runtime.
     * }
     *
     * expect(() => Injector.resolveAndCreate([A,B])).toThrowError();
     * ```
     * @stable
     */
    function noAnnotationError(typeOrFunc, params) {
        var signature = [];
        for (var i = 0, ii = params.length; i < ii; i++) {
            var parameter = params[i];
            if (!parameter || parameter.length === 0) {
                signature.push('?');
            }
            else {
                signature.push(parameter.map(stringify).join(' '));
            }
        }
        return Error("Cannot resolve all parameters for '" +
            stringify(typeOrFunc) +
            "'(" +
            signature.join(', ') +
            '). ' +
            "Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" +
            stringify(typeOrFunc) +
            "' is decorated with Injectable.");
    }
    /**
     * Thrown when getting an object by index.
     *
     * ### Example ([live demo](http://plnkr.co/edit/bRs0SX2OTQiJzqvjgl8P?p=preview))
     *
     * ```typescript
     * class A {}
     *
     * var injector = Injector.resolveAndCreate([A]);
     *
     * expect(() => injector.getAt(100)).toThrowError();
     * ```
     * @stable
     */
    function outOfBoundsError(index) {
        return Error("Index " + index + " is out-of-bounds.");
    }
    // TODO: add a working example after alpha38 is released
    /**
     * Thrown when a multi provider and a regular provider are bound to the same token.
     *
     * ### Example
     *
     * ```typescript
     * expect(() => Injector.resolveAndCreate([
     *   { provide: "Strings", useValue: "string1", multi: true},
     *   { provide: "Strings", useValue: "string2", multi: false}
     * ])).toThrowError();
     * ```
     */
    function mixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
        return Error("Cannot mix multi providers and regular providers, got: " + provider1 + " " + provider2);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A unique object used for retrieving items from the {@link ReflectiveInjector}.
     *
     * Keys have:
     * - a system-wide unique `id`.
     * - a `token`.
     *
     * `Key` is used internally by {@link ReflectiveInjector} because its system-wide unique `id` allows
     * the
     * injector to store created objects in a more efficient way.
     *
     * `Key` should not be created directly. {@link ReflectiveInjector} creates keys automatically when
     * resolving
     * providers.
     * @experimental
     */
    var ReflectiveKey = /** @class */ (function () {
        /**
         * Private
         */
        function ReflectiveKey(token, id) {
            this.token = token;
            this.id = id;
            if (!token) {
                throw new Error('Token must be defined!');
            }
        }
        Object.defineProperty(ReflectiveKey.prototype, "displayName", {
            /**
             * Returns a stringified token.
             */
            get: function () {
                return stringify(this.token);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Retrieves a `Key` for a token.
         */
        ReflectiveKey.get = function (token) {
            // tslint:disable-next-line:no-use-before-declare
            return _globalKeyRegistry.get(resolveForwardRef(token));
        };
        Object.defineProperty(ReflectiveKey, "numberOfKeys", {
            /**
             * @returns the number of keys registered in the system.
             */
            get: function () {
                // tslint:disable-next-line:no-use-before-declare
                return _globalKeyRegistry.numberOfKeys;
            },
            enumerable: false,
            configurable: true
        });
        return ReflectiveKey;
    }());
    /**
     * @internal
     */
    var KeyRegistry = /** @class */ (function () {
        function KeyRegistry() {
            this._allKeys = new Map();
        }
        KeyRegistry.prototype.get = function (token) {
            if (token instanceof ReflectiveKey)
                return token;
            if (this._allKeys.has(token)) {
                return this._allKeys.get(token);
            }
            var newKey = new ReflectiveKey(token, ReflectiveKey.numberOfKeys);
            this._allKeys.set(token, newKey);
            return newKey;
        };
        Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
            get: function () {
                return this._allKeys.size;
            },
            enumerable: false,
            configurable: true
        });
        return KeyRegistry;
    }());
    var _globalKeyRegistry = new KeyRegistry();

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @whatItDoes Represents a type that a Component or other object is instances of.
     *
     * @description
     *
     * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
     * the `MyCustomComponent` constructor function.
     *
     * @stable
     */
    var Type = Function;
    function isType(v) {
        return typeof v === 'function';
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Attention: This regex has to hold even if the code is minified!
     */
    var DELEGATE_CTOR = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/;
    var ReflectionCapabilities = /** @class */ (function () {
        function ReflectionCapabilities(reflect) {
            this._reflect = reflect || _global['Reflect'];
        }
        ReflectionCapabilities.prototype.isReflectionEnabled = function () {
            return true;
        };
        ReflectionCapabilities.prototype.factory = function (t) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return new (t.bind.apply(t, tslib.__spreadArrays([void 0], args)))();
            };
        };
        /** @internal */
        ReflectionCapabilities.prototype._zipTypesAndAnnotations = function (paramTypes, paramAnnotations) {
            var result;
            if (typeof paramTypes === 'undefined') {
                result = new Array(paramAnnotations.length);
            }
            else {
                result = new Array(paramTypes.length);
            }
            for (var i = 0; i < result.length; i++) {
                // TS outputs Object for parameters without types, while Traceur omits
                // the annotations. For now we preserve the Traceur behavior to aid
                // migration, but this can be revisited.
                if (typeof paramTypes === 'undefined') {
                    result[i] = [];
                    // tslint:disable-next-line:triple-equals
                }
                else if (paramTypes[i] != Object) {
                    result[i] = [paramTypes[i]];
                }
                else {
                    result[i] = [];
                }
                if (paramAnnotations && paramAnnotations[i] != null) {
                    result[i] = result[i].concat(paramAnnotations[i]);
                }
            }
            return result;
        };
        ReflectionCapabilities.prototype._ownParameters = function (type, parentCtor) {
            // If we have no decorators, we only have function.length as metadata.
            // In that case, to detect whether a child class declared an own constructor or not,
            // we need to look inside of that constructor to check whether it is
            // just calling the parent.
            // This also helps to work around for https://github.com/Microsoft/TypeScript/issues/12439
            // that sets 'design:paramtypes' to []
            // if a class inherits from another class but has no ctor declared itself.
            if (DELEGATE_CTOR.exec(type.toString())) {
                return null;
            }
            // Prefer the direct API.
            if (type.parameters && type.parameters !== parentCtor.parameters) {
                return type.parameters;
            }
            // API of tsickle for lowering decorators to properties on the class.
            var tsickleCtorParams = type.ctorParameters;
            if (tsickleCtorParams && tsickleCtorParams !== parentCtor.ctorParameters) {
                // Newer tsickle uses a function closure
                // Retain the non-function case for compatibility with older tsickle
                var ctorParameters = typeof tsickleCtorParams === 'function' ? tsickleCtorParams() : tsickleCtorParams;
                var paramTypes = ctorParameters.map(function (ctorParam) { return ctorParam && ctorParam.type; });
                var paramAnnotations = ctorParameters.map(function (ctorParam) { return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators); });
                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
            }
            // API for metadata created by invoking the decorators.
            if (this._reflect != null && this._reflect.getOwnMetadata != null) {
                var paramAnnotations = this._reflect.getOwnMetadata('parameters', type);
                var paramTypes = this._reflect.getOwnMetadata('design:paramtypes', type);
                if (paramTypes || paramAnnotations) {
                    return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
                }
            }
            // If a class has no decorators, at least create metadata
            // based on function.length.
            // Note: We know that this is a real constructor as we checked
            // the content of the constructor above.
            return new Array(type.length).fill(undefined);
        };
        ReflectionCapabilities.prototype.parameters = function (type) {
            // Note: only report metadata if we have at least one class decorator
            // to stay in sync with the static reflector.
            if (!isType(type)) {
                return [];
            }
            var parentCtor = getParentCtor(type);
            var parameters = this._ownParameters(type, parentCtor);
            if (!parameters && parentCtor !== Object) {
                parameters = this.parameters(parentCtor);
            }
            return parameters || [];
        };
        ReflectionCapabilities.prototype._ownAnnotations = function (typeOrFunc, parentCtor) {
            // Prefer the direct API.
            if (typeOrFunc.annotations && typeOrFunc.annotations !== parentCtor.annotations) {
                var annotations = typeOrFunc.annotations;
                if (typeof annotations === 'function' && annotations.annotations) {
                    annotations = annotations.annotations;
                }
                return annotations;
            }
            // API of tsickle for lowering decorators to properties on the class.
            if (typeOrFunc.decorators && typeOrFunc.decorators !== parentCtor.decorators) {
                return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);
            }
            // API for metadata created by invoking the decorators.
            if (this._reflect && this._reflect.getOwnMetadata) {
                return this._reflect.getOwnMetadata('annotations', typeOrFunc);
            }
            return null;
        };
        ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
            if (!isType(typeOrFunc)) {
                return [];
            }
            var parentCtor = getParentCtor(typeOrFunc);
            var ownAnnotations = this._ownAnnotations(typeOrFunc, parentCtor) || [];
            var parentAnnotations = parentCtor !== Object ? this.annotations(parentCtor) : [];
            return parentAnnotations.concat(ownAnnotations);
        };
        ReflectionCapabilities.prototype._ownPropMetadata = function (typeOrFunc, parentCtor) {
            // Prefer the direct API.
            if (typeOrFunc.propMetadata && typeOrFunc.propMetadata !== parentCtor.propMetadata) {
                var propMetadata = typeOrFunc.propMetadata;
                if (typeof propMetadata === 'function' && propMetadata.propMetadata) {
                    propMetadata = propMetadata.propMetadata;
                }
                return propMetadata;
            }
            // API of tsickle for lowering decorators to properties on the class.
            if (typeOrFunc.propDecorators && typeOrFunc.propDecorators !== parentCtor.propDecorators) {
                var propDecorators_1 = typeOrFunc.propDecorators;
                var propMetadata_1 = {};
                Object.keys(propDecorators_1).forEach(function (prop) {
                    propMetadata_1[prop] = convertTsickleDecoratorIntoMetadata(propDecorators_1[prop]);
                });
                return propMetadata_1;
            }
            // API for metadata created by invoking the decorators.
            if (this._reflect && this._reflect.getOwnMetadata) {
                return this._reflect.getOwnMetadata('propMetadata', typeOrFunc);
            }
            return null;
        };
        ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
            if (!isType(typeOrFunc)) {
                return {};
            }
            var parentCtor = getParentCtor(typeOrFunc);
            var propMetadata = {};
            if (parentCtor !== Object) {
                var parentPropMetadata_1 = this.propMetadata(parentCtor);
                Object.keys(parentPropMetadata_1).forEach(function (propName) {
                    propMetadata[propName] = parentPropMetadata_1[propName];
                });
            }
            var ownPropMetadata = this._ownPropMetadata(typeOrFunc, parentCtor);
            if (ownPropMetadata) {
                Object.keys(ownPropMetadata).forEach(function (propName) {
                    var decorators = [];
                    if (propMetadata.hasOwnProperty(propName)) {
                        decorators.push.apply(decorators, propMetadata[propName]);
                    }
                    decorators.push.apply(decorators, ownPropMetadata[propName]);
                    propMetadata[propName] = decorators;
                });
            }
            return propMetadata;
        };
        ReflectionCapabilities.prototype.hasLifecycleHook = function (type, lcProperty) {
            return type instanceof Type && lcProperty in type.prototype;
        };
        ReflectionCapabilities.prototype.getter = function (name) {
            return new Function('o', 'return o.' + name + ';');
        };
        ReflectionCapabilities.prototype.setter = function (name) {
            return new Function('o', 'v', 'return o.' + name + ' = v;');
        };
        ReflectionCapabilities.prototype.method = function (name) {
            var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
            return new Function('o', 'args', functionBody);
        };
        // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
        ReflectionCapabilities.prototype.importUri = function (type) {
            // StaticSymbol
            if (typeof type === 'object' && type['filePath']) {
                return type['filePath'];
            }
            // Runtime type
            return "./" + stringify(type);
        };
        ReflectionCapabilities.prototype.resourceUri = function (type) {
            return "./" + stringify(type);
        };
        ReflectionCapabilities.prototype.resolveIdentifier = function (name, moduleUrl, members, runtime) {
            return runtime;
        };
        ReflectionCapabilities.prototype.resolveEnum = function (enumIdentifier, name) {
            return enumIdentifier[name];
        };
        return ReflectionCapabilities;
    }());
    function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
        if (!decoratorInvocations) {
            return [];
        }
        return decoratorInvocations.map(function (decoratorInvocation) {
            var decoratorType = decoratorInvocation.type;
            var annotationCls = decoratorType.annotationCls;
            var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
            return new (annotationCls.bind.apply(annotationCls, tslib.__spreadArrays([void 0], annotationArgs)))();
        });
    }
    function getParentCtor(ctor) {
        if (!ctor.prototype) {
            return Object;
        }
        var parentProto = Object.getPrototypeOf(ctor.prototype);
        var parentCtor = parentProto ? parentProto.constructor : null;
        // Note: We always use `Object` as the null value
        // to simplify checking later on.
        return parentCtor || Object;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Provides read-only access to reflection data about symbols. Used internally by Angular
     * to power dependency injection and compilation.
     */
    var ReflectorReader = /** @class */ (function () {
        function ReflectorReader() {
        }
        return ReflectorReader;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Provides access to reflection data about symbols. Used internally by Angular
     * to power dependency injection and compilation.
     */
    var Reflector = /** @class */ (function (_super) {
        tslib.__extends(Reflector, _super);
        function Reflector(reflectionCapabilities) {
            var _this = _super.call(this) || this;
            _this.reflectionCapabilities = reflectionCapabilities;
            return _this;
        }
        Reflector.prototype.updateCapabilities = function (caps) {
            this.reflectionCapabilities = caps;
        };
        Reflector.prototype.factory = function (type) {
            return this.reflectionCapabilities.factory(type);
        };
        Reflector.prototype.parameters = function (typeOrFunc) {
            return this.reflectionCapabilities.parameters(typeOrFunc);
        };
        Reflector.prototype.annotations = function (typeOrFunc) {
            return this.reflectionCapabilities.annotations(typeOrFunc);
        };
        Reflector.prototype.propMetadata = function (typeOrFunc) {
            return this.reflectionCapabilities.propMetadata(typeOrFunc);
        };
        Reflector.prototype.hasLifecycleHook = function (type, lcProperty) {
            return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
        };
        Reflector.prototype.getter = function (name) {
            return this.reflectionCapabilities.getter(name);
        };
        Reflector.prototype.setter = function (name) {
            return this.reflectionCapabilities.setter(name);
        };
        Reflector.prototype.method = function (name) {
            return this.reflectionCapabilities.method(name);
        };
        Reflector.prototype.importUri = function (type) {
            return this.reflectionCapabilities.importUri(type);
        };
        Reflector.prototype.resourceUri = function (type) {
            return this.reflectionCapabilities.resourceUri(type);
        };
        Reflector.prototype.resolveIdentifier = function (name, moduleUrl, members, runtime) {
            return this.reflectionCapabilities.resolveIdentifier(name, moduleUrl, members, runtime);
        };
        Reflector.prototype.resolveEnum = function (identifier, name) {
            return this.reflectionCapabilities.resolveEnum(identifier, name);
        };
        return Reflector;
    }(ReflectorReader));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * The {@link Reflector} used internally in Angular to access metadata
     * about symbols.
     */
    var reflector = new Reflector(new ReflectionCapabilities());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Creates a token that can be used in a DI Provider.
     *
     * ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
     *
     * ```typescript
     * var t = new OpaqueToken("value");
     *
     * var injector = Injector.resolveAndCreate([
     *   {provide: t, useValue: "bindingValue"}
     * ]);
     *
     * expect(injector.get(t)).toEqual("bindingValue");
     * ```
     *
     * Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
     * caused by multiple providers using the same string as two different tokens.
     *
     * Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
     * error messages.
     * @deprecated since v4.0.0 because it does not support type information, use `InjectionToken<?>`
     * instead.
     */
    var OpaqueToken = /** @class */ (function () {
        function OpaqueToken(_desc) {
            this._desc = _desc;
        }
        OpaqueToken.prototype.toString = function () {
            return "Token " + this._desc;
        };
        return OpaqueToken;
    }());
    /**
     * Creates a token that can be used in a DI Provider.
     *
     * Use an `InjectionToken` whenever the type you are injecting is not reified (does not have a
     * runtime representation) such as when injecting an interface, callable type, array or
     * parametrized type.
     *
     * `InjectionToken` is parameterized on `T` which is the type of object which will be returned by
     * the `Injector`. This provides additional level of type safety.
     *
     * ```
     * interface MyInterface {...}
     * var myInterface = injector.get(new InjectionToken<MyInterface>('SomeToken'));
     * // myInterface is inferred to be MyInterface.
     * ```
     *
     * ### Example
     *
     * {@example core/di/ts/injector_spec.ts region='InjectionToken'}
     *
     * @stable
     */
    var InjectionToken = /** @class */ (function (_super) {
        tslib.__extends(InjectionToken, _super);
        function InjectionToken(desc) {
            return _super.call(this, desc) || this;
        }
        InjectionToken.prototype.toString = function () {
            return "InjectionToken " + this._desc;
        };
        return InjectionToken;
    }(OpaqueToken));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * `Dependency` is used by the framework to extend DI.
     * This is internal to Angular and should not be used directly.
     */
    var ReflectiveDependency = /** @class */ (function () {
        function ReflectiveDependency(key, optional, visibility) {
            this.key = key;
            this.optional = optional;
            this.visibility = visibility;
        }
        ReflectiveDependency.fromKey = function (key) {
            return new ReflectiveDependency(key, false, null);
        };
        return ReflectiveDependency;
    }());
    var _EMPTY_LIST = [];
    // tslint:disable-next-line:class-name
    var ResolvedReflectiveProvider_ = /** @class */ (function () {
        function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
            this.key = key;
            this.resolvedFactories = resolvedFactories;
            this.multiProvider = multiProvider;
        }
        Object.defineProperty(ResolvedReflectiveProvider_.prototype, "resolvedFactory", {
            get: function () {
                return this.resolvedFactories[0];
            },
            enumerable: false,
            configurable: true
        });
        return ResolvedReflectiveProvider_;
    }());
    /**
     * An internal resolved representation of a factory function created by resolving {@link
     * Provider}.
     * @experimental
     */
    var ResolvedReflectiveFactory = /** @class */ (function () {
        function ResolvedReflectiveFactory(
        /**
         * Factory function which can return an instance of an object represented by a key.
         */
        factory, 
        /**
         * Arguments (dependencies) to the `factory` function.
         */
        dependencies) {
            this.factory = factory;
            this.dependencies = dependencies;
        }
        return ResolvedReflectiveFactory;
    }());
    /**
     * Resolve a single provider.
     */
    function resolveReflectiveFactory(provider) {
        var factoryFn;
        var resolvedDeps;
        if (provider.useClass) {
            var useClass = resolveForwardRef(provider.useClass);
            factoryFn = reflector.factory(useClass);
            resolvedDeps = _dependenciesFor(useClass);
        }
        else if (provider.useExisting) {
            factoryFn = function (aliasInstance) { return aliasInstance; };
            resolvedDeps = [ReflectiveDependency.fromKey(ReflectiveKey.get(provider.useExisting))];
        }
        else if (provider.useFactory) {
            factoryFn = provider.useFactory;
            resolvedDeps = constructDependencies(provider.useFactory, provider.deps);
        }
        else {
            factoryFn = function () { return provider.useValue; };
            resolvedDeps = _EMPTY_LIST;
        }
        return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
    }
    /**
     * Converts the {@link Provider} into {@link ResolvedProvider}.
     *
     * {@link Injector} internally only uses {@link ResolvedProvider}, {@link Provider} contains
     * convenience provider syntax.
     */
    function resolveReflectiveProvider(provider) {
        return new ResolvedReflectiveProvider_(ReflectiveKey.get(provider.provide), [resolveReflectiveFactory(provider)], provider.multi || false);
    }
    /**
     * Resolve a list of Providers.
     */
    function resolveReflectiveProviders(providers) {
        var normalized = _normalizeProviders(providers, []);
        var resolved = normalized.map(resolveReflectiveProvider);
        var resolvedProviderMap = mergeResolvedReflectiveProviders(resolved, new Map());
        return Array.from(resolvedProviderMap.values());
    }
    /**
     * Merges a list of ResolvedProviders into a list where
     * each key is contained exactly once and multi providers
     * have been merged.
     */
    function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
        for (var i = 0; i < providers.length; i++) {
            var provider = providers[i];
            var existing = normalizedProvidersMap.get(provider.key.id);
            if (existing) {
                if (provider.multiProvider !== existing.multiProvider) {
                    throw mixingMultiProvidersWithRegularProvidersError(existing, provider);
                }
                if (provider.multiProvider) {
                    for (var j = 0; j < provider.resolvedFactories.length; j++) {
                        existing.resolvedFactories.push(provider.resolvedFactories[j]);
                    }
                }
                else {
                    normalizedProvidersMap.set(provider.key.id, provider);
                }
            }
            else {
                var resolvedProvider = void 0;
                if (provider.multiProvider) {
                    resolvedProvider = new ResolvedReflectiveProvider_(provider.key, provider.resolvedFactories.slice(), provider.multiProvider);
                }
                else {
                    resolvedProvider = provider;
                }
                normalizedProvidersMap.set(provider.key.id, resolvedProvider);
            }
        }
        return normalizedProvidersMap;
    }
    function _normalizeProviders(providers, res) {
        providers.forEach(function (b) {
            if (b instanceof Type) {
                res.push({ provide: b, useClass: b });
            }
            else if (b && typeof b === 'object' && b.provide !== undefined) {
                res.push(b);
            }
            else if (b instanceof Array) {
                _normalizeProviders(b, res);
            }
            else {
                throw invalidProviderError(b);
            }
        });
        return res;
    }
    function constructDependencies(typeOrFunc, dependencies) {
        if (!dependencies) {
            return _dependenciesFor(typeOrFunc);
        }
        else {
            var params_1 = dependencies.map(function (t) { return [t]; });
            return dependencies.map(function (t) { return _extractToken(typeOrFunc, t, params_1); });
        }
    }
    function _dependenciesFor(typeOrFunc) {
        var params = reflector.parameters(typeOrFunc);
        if (!params)
            return [];
        if (params.some(function (p) { return p == null; })) {
            throw noAnnotationError(typeOrFunc, params);
        }
        return params.map(function (p) { return _extractToken(typeOrFunc, p, params); });
    }
    function _extractToken(typeOrFunc, metadata, params) {
        var token = null;
        var optional = false;
        if (!Array.isArray(metadata)) {
            if (metadata instanceof Inject) {
                return _createDependency(metadata['token'], optional, null);
            }
            else {
                return _createDependency(metadata, optional, null);
            }
        }
        var visibility = null;
        for (var i = 0; i < metadata.length; ++i) {
            var paramMetadata = metadata[i];
            if (paramMetadata instanceof Type) {
                token = paramMetadata;
            }
            else if (paramMetadata instanceof Inject) {
                token = paramMetadata['token'];
            }
            else if (paramMetadata instanceof Optional) {
                optional = true;
            }
            else if (paramMetadata instanceof Self || paramMetadata instanceof SkipSelf) {
                visibility = paramMetadata;
            }
            else if (paramMetadata instanceof InjectionToken) {
                token = paramMetadata;
            }
        }
        token = resolveForwardRef(token);
        if (token != null) {
            return _createDependency(token, optional, visibility);
        }
        else {
            throw noAnnotationError(typeOrFunc, params);
        }
    }
    function _createDependency(token, optional, visibility) {
        return new ReflectiveDependency(ReflectiveKey.get(token), optional, visibility);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Threshold for the dynamic version
    var UNDEFINED = new Object();
    /**
     * A ReflectiveDependency injection container used for instantiating objects and resolving
     * dependencies.
     *
     * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
     * constructor dependencies.
     *
     * In typical use, application code asks for the dependencies in the constructor and they are
     * resolved by the `Injector`.
     *
     * ### Example ([live demo](http://plnkr.co/edit/jzjec0?p=preview))
     *
     * The following example creates an `Injector` configured to create `Engine` and `Car`.
     *
     * ```typescript
     * @Injectable()
     * class Engine {
     * }
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
     * var car = injector.get(Car);
     * expect(car instanceof Car).toBe(true);
     * expect(car.engine instanceof Engine).toBe(true);
     * ```
     *
     * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
     * resolve all of the object's dependencies automatically.
     *
     * @stable
     */
    var ReflectiveInjector = /** @class */ (function () {
        function ReflectiveInjector() {
        }
        /**
         * Turns an array of provider definitions into an array of resolved providers.
         *
         * A resolution is a process of flattening multiple nested arrays and converting individual
         * providers into an array of {@link ResolvedReflectiveProvider}s.
         *
         * ### Example ([live demo](http://plnkr.co/edit/AiXTHi?p=preview))
         *
         * ```typescript
         * @Injectable()
         * class Engine {
         * }
         *
         * @Injectable()
         * class Car {
         *   constructor(public engine:Engine) {}
         * }
         *
         * var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);
         *
         * expect(providers.length).toEqual(2);
         *
         * expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
         * expect(providers[0].key.displayName).toBe("Car");
         * expect(providers[0].dependencies.length).toEqual(1);
         * expect(providers[0].factory).toBeDefined();
         *
         * expect(providers[1].key.displayName).toBe("Engine");
         * });
         * ```
         *
         * See {@link ReflectiveInjector#fromResolvedProviders} for more info.
         */
        ReflectiveInjector.resolve = function (providers) {
            return resolveReflectiveProviders(providers);
        };
        /**
         * Resolves an array of providers and creates an injector from those providers.
         *
         * The passed-in providers can be an array of `Type`, {@link Provider},
         * or a recursive array of more providers.
         *
         * ### Example ([live demo](http://plnkr.co/edit/ePOccA?p=preview))
         *
         * ```typescript
         * @Injectable()
         * class Engine {
         * }
         *
         * @Injectable()
         * class Car {
         *   constructor(public engine:Engine) {}
         * }
         *
         * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
         * expect(injector.get(Car) instanceof Car).toBe(true);
         * ```
         *
         * This function is slower than the corresponding `fromResolvedProviders`
         * because it needs to resolve the passed-in providers first.
         * See {@link Injector#resolve} and {@link Injector#fromResolvedProviders}.
         */
        ReflectiveInjector.resolveAndCreate = function (providers, parent) {
            var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
            return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
        };
        /**
         * Creates an injector from previously resolved providers.
         *
         * This API is the recommended way to construct injectors in performance-sensitive parts.
         *
         * ### Example ([live demo](http://plnkr.co/edit/KrSMci?p=preview))
         *
         * ```typescript
         * @Injectable()
         * class Engine {
         * }
         *
         * @Injectable()
         * class Car {
         *   constructor(public engine:Engine) {}
         * }
         *
         * var providers = ReflectiveInjector.resolve([Car, Engine]);
         * var injector = ReflectiveInjector.fromResolvedProviders(providers);
         * expect(injector.get(Car) instanceof Car).toBe(true);
         * ```
         * @experimental
         */
        ReflectiveInjector.fromResolvedProviders = function (providers, parent) {
            // tslint:disable-next-line:no-use-before-declare
            return new ReflectiveInjector_(providers, parent);
        };
        return ReflectiveInjector;
    }());
    // tslint:disable-next-line:class-name
    var ReflectiveInjector_ = /** @class */ (function () {
        /**
         * Private
         */
        function ReflectiveInjector_(_providers, _parent) {
            /** @internal */
            this._constructionCounter = 0;
            this._providers = _providers;
            this._parent = _parent || null;
            var len = _providers.length;
            this.keyIds = new Array(len);
            this.objs = new Array(len);
            for (var i = 0; i < len; i++) {
                this.keyIds[i] = _providers[i].key.id;
                this.objs[i] = UNDEFINED;
            }
        }
        ReflectiveInjector_.prototype.get = function (token, notFoundValue) {
            if (notFoundValue === void 0) { notFoundValue = THROW_IF_NOT_FOUND; }
            return this._getByKey(ReflectiveKey.get(token), null, notFoundValue);
        };
        Object.defineProperty(ReflectiveInjector_.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: false,
            configurable: true
        });
        ReflectiveInjector_.prototype.resolveAndCreateChild = function (providers) {
            var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
            return this.createChildFromResolved(ResolvedReflectiveProviders);
        };
        ReflectiveInjector_.prototype.createChildFromResolved = function (providers) {
            var inj = new ReflectiveInjector_(providers);
            inj._parent = this;
            return inj;
        };
        ReflectiveInjector_.prototype.resolveAndInstantiate = function (provider) {
            return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
        };
        ReflectiveInjector_.prototype.instantiateResolved = function (provider) {
            return this._instantiateProvider(provider);
        };
        ReflectiveInjector_.prototype.getProviderAtIndex = function (index) {
            if (index < 0 || index >= this._providers.length) {
                throw outOfBoundsError(index);
            }
            return this._providers[index];
        };
        /** @internal */
        ReflectiveInjector_.prototype._new = function (provider) {
            if (this._constructionCounter++ > this._getMaxNumberOfObjects()) {
                throw cyclicDependencyError(this, provider.key);
            }
            return this._instantiateProvider(provider);
        };
        ReflectiveInjector_.prototype._getMaxNumberOfObjects = function () {
            return this.objs.length;
        };
        ReflectiveInjector_.prototype._instantiateProvider = function (provider) {
            if (provider.multiProvider) {
                var res = new Array(provider.resolvedFactories.length);
                for (var i = 0; i < provider.resolvedFactories.length; ++i) {
                    res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
                }
                return res;
            }
            else {
                return this._instantiate(provider, provider.resolvedFactories[0]);
            }
        };
        ReflectiveInjector_.prototype._instantiate = function (provider, ResolvedReflectiveFactory) {
            var _this = this;
            var factory = ResolvedReflectiveFactory.factory;
            var deps;
            try {
                deps = ResolvedReflectiveFactory.dependencies.map(function (dep) { return _this._getByReflectiveDependency(dep); });
            }
            catch (e) {
                if (e.addKey) {
                    e.addKey(this, provider.key);
                }
                throw e;
            }
            var obj;
            try {
                obj = factory.apply(void 0, deps);
            }
            catch (e) {
                throw instantiationError(this, e, e.stack, provider.key);
            }
            return obj;
        };
        ReflectiveInjector_.prototype._getByReflectiveDependency = function (dep) {
            return this._getByKey(dep.key, dep.visibility, dep.optional ? null : THROW_IF_NOT_FOUND);
        };
        ReflectiveInjector_.prototype._getByKey = function (key, visibility, notFoundValue) {
            // tslint:disable-next-line:no-use-before-declare
            if (key === INJECTOR_KEY) {
                return this;
            }
            if (visibility instanceof Self) {
                return this._getByKeySelf(key, notFoundValue);
            }
            else {
                return this._getByKeyDefault(key, notFoundValue, visibility);
            }
        };
        ReflectiveInjector_.prototype._getObjByKeyId = function (keyId) {
            for (var i = 0; i < this.keyIds.length; i++) {
                if (this.keyIds[i] === keyId) {
                    if (this.objs[i] === UNDEFINED) {
                        this.objs[i] = this._new(this._providers[i]);
                    }
                    return this.objs[i];
                }
            }
            return UNDEFINED;
        };
        /** @internal */
        ReflectiveInjector_.prototype._throwOrNull = function (key, notFoundValue) {
            if (notFoundValue !== THROW_IF_NOT_FOUND) {
                return notFoundValue;
            }
            else {
                throw noProviderError(this, key);
            }
        };
        /** @internal */
        ReflectiveInjector_.prototype._getByKeySelf = function (key, notFoundValue) {
            var obj = this._getObjByKeyId(key.id);
            return obj !== UNDEFINED ? obj : this._throwOrNull(key, notFoundValue);
        };
        /** @internal */
        ReflectiveInjector_.prototype._getByKeyDefault = function (key, notFoundValue, visibility) {
            var inj;
            if (visibility instanceof SkipSelf) {
                inj = this._parent;
            }
            else {
                inj = this;
            }
            while (inj instanceof ReflectiveInjector_) {
                var inj_ = inj;
                var obj = inj_._getObjByKeyId(key.id);
                if (obj !== UNDEFINED)
                    return obj;
                inj = inj_._parent;
            }
            if (inj !== null) {
                return inj.get(key.token, notFoundValue);
            }
            else {
                return this._throwOrNull(key, notFoundValue);
            }
        };
        Object.defineProperty(ReflectiveInjector_.prototype, "displayName", {
            get: function () {
                var providers = _mapProviders(this, function (b) { return ' "' + b.key.displayName + '" '; }).join(', ');
                return "ReflectiveInjector(providers: [" + providers + "])";
            },
            enumerable: false,
            configurable: true
        });
        ReflectiveInjector_.prototype.toString = function () {
            return this.displayName;
        };
        return ReflectiveInjector_;
    }());
    var INJECTOR_KEY = ReflectiveKey.get(Injector);
    function _mapProviders(injector, fn) {
        var res = new Array(injector._providers.length);
        for (var i = 0; i < injector._providers.length; ++i) {
            res[i] = fn(injector.getProviderAtIndex(i));
        }
        return res;
    }

    /**
     * This utility function receives a spread of injectable classes
     * and returns an array of all their dependencies. Also resolves
     * optional dependencies.
     *
     * ### Important:
     *
     * Dynamically resolving dependencies using this function
     * will not play nice with static analysis tools, including tree-shaking.
     * From a static analysis perspective, any dependencies which are only resolved
     * using this function will look as though they are not used (and will be
     * removed by tree-shaking). This *severely* limits the usefulness of this function.
     *
     * ### Example:
     *
     * ```typescript
     * class HTTP {}
     * class Database {}
     *
     * // commenting out the decorator because the `@` symbol is spoiling
     * // jsDoc rendering in vscode
     * // @Injectable()
     * class PersonService {
     *   constructor(
     *     private http: HTTP,
     *     private database: Database,
     *   ) {}
     * }
     *
     * // @Injectable()
     * class OrganizationService {
     *   constructor(
     *     private http: HTTP,
     *     private personService: PersonService,
     *   ) {}
     * }
     *
     * const injector = ReflectiveInjector.resolveAndCreate(
     *   resolveDependencies(OrganizationService)
     * );
     *
     * const organizationService = injector.get(OrganizationService);
     * ```
     */
    function resolveDependencies() {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        var deps = new Set();
        function resolver(klass) {
            if (deps.has(klass))
                return;
            deps.add(klass);
            // resolve all dependencies of the provided class and run the `resolver()` function
            // on their constructor functions.
            ReflectiveInjector.resolve([klass])
                .reduce(function (a, x) { return a.concat(x.resolvedFactories); }, [])
                .reduce(function (a, r) { return a.concat(r.dependencies); }, [])
                .forEach(function (d) { return resolver(d.key.token); });
        }
        for (var _a = 0, inputs_1 = inputs; _a < inputs_1.length; _a++) {
            var input = inputs_1[_a];
            resolver(input);
        }
        return Array.from(deps);
    }

    exports.Class = Class;
    exports.Host = Host;
    exports.Inject = Inject;
    exports.Injectable = Injectable;
    exports.InjectionToken = InjectionToken;
    exports.Injector = Injector;
    exports.OpaqueToken = OpaqueToken;
    exports.Optional = Optional;
    exports.ReflectiveInjector = ReflectiveInjector;
    exports.ReflectiveKey = ReflectiveKey;
    exports.ResolvedReflectiveFactory = ResolvedReflectiveFactory;
    exports.Self = Self;
    exports.SkipSelf = SkipSelf;
    exports.Type = Type;
    exports.forwardRef = forwardRef;
    exports.isType = isType;
    exports.makeDecorator = makeDecorator;
    exports.makeParamDecorator = makeParamDecorator;
    exports.makePropDecorator = makePropDecorator;
    exports.resolveDependencies = resolveDependencies;
    exports.resolveForwardRef = resolveForwardRef;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
