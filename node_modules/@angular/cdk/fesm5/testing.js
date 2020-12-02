import { __awaiter, __generator, __spread, __values } from 'tslib';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class for component harnesses that all component harness authors should extend. This base
 * component harness provides the basic ability to locate element and sub-component harness. It
 * should be inherited when defining user's own harness.
 */
var ComponentHarness = /** @class */ (function () {
    function ComponentHarness(locatorFactory) {
        this.locatorFactory = locatorFactory;
    }
    /** Gets a `Promise` for the `TestElement` representing the host element of the component. */
    ComponentHarness.prototype.host = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.locatorFactory.rootElement];
            });
        });
    };
    /**
     * Gets a `LocatorFactory` for the document root element. This factory can be used to create
     * locators for elements that a component creates outside of its own root element. (e.g. by
     * appending to document.body).
     */
    ComponentHarness.prototype.documentRootLocatorFactory = function () {
        return this.locatorFactory.documentRootLocatorFactory();
    };
    /**
     * Creates an asynchronous locator function that can be used to find a `ComponentHarness` instance
     * or element under the host element of this `ComponentHarness`.
     * @param queries A list of queries specifying which harnesses and elements to search for:
     *   - A `string` searches for elements matching the CSS selector specified by the string.
     *   - A `ComponentHarness` constructor searches for `ComponentHarness` instances matching the
     *     given class.
     *   - A `HarnessPredicate` searches for `ComponentHarness` instances matching the given
     *     predicate.
     * @return An asynchronous locator function that searches for and returns a `Promise` for the
     *   first element or harness matching the given search criteria. Matches are ordered first by
     *   order in the DOM, and second by order in the queries list. If no matches are found, the
     *   `Promise` rejects. The type that the `Promise` resolves to is a union of all result types for
     *   each query.
     *
     * e.g. Given the following DOM: `<div id="d1" /><div id="d2" />`, and assuming
     * `DivHarness.hostSelector === 'div'`:
     * - `await ch.locatorFor(DivHarness, 'div')()` gets a `DivHarness` instance for `#d1`
     * - `await ch.locatorFor('div', DivHarness)()` gets a `TestElement` instance for `#d1`
     * - `await ch.locatorFor('span')()` throws because the `Promise` rejects.
     */
    ComponentHarness.prototype.locatorFor = function () {
        var _a;
        var queries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            queries[_i] = arguments[_i];
        }
        return (_a = this.locatorFactory).locatorFor.apply(_a, __spread(queries));
    };
    /**
     * Creates an asynchronous locator function that can be used to find a `ComponentHarness` instance
     * or element under the host element of this `ComponentHarness`.
     * @param queries A list of queries specifying which harnesses and elements to search for:
     *   - A `string` searches for elements matching the CSS selector specified by the string.
     *   - A `ComponentHarness` constructor searches for `ComponentHarness` instances matching the
     *     given class.
     *   - A `HarnessPredicate` searches for `ComponentHarness` instances matching the given
     *     predicate.
     * @return An asynchronous locator function that searches for and returns a `Promise` for the
     *   first element or harness matching the given search criteria. Matches are ordered first by
     *   order in the DOM, and second by order in the queries list. If no matches are found, the
     *   `Promise` is resolved with `null`. The type that the `Promise` resolves to is a union of all
     *   result types for each query or null.
     *
     * e.g. Given the following DOM: `<div id="d1" /><div id="d2" />`, and assuming
     * `DivHarness.hostSelector === 'div'`:
     * - `await ch.locatorForOptional(DivHarness, 'div')()` gets a `DivHarness` instance for `#d1`
     * - `await ch.locatorForOptional('div', DivHarness)()` gets a `TestElement` instance for `#d1`
     * - `await ch.locatorForOptional('span')()` gets `null`.
     */
    ComponentHarness.prototype.locatorForOptional = function () {
        var _a;
        var queries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            queries[_i] = arguments[_i];
        }
        return (_a = this.locatorFactory).locatorForOptional.apply(_a, __spread(queries));
    };
    /**
     * Creates an asynchronous locator function that can be used to find `ComponentHarness` instances
     * or elements under the host element of this `ComponentHarness`.
     * @param queries A list of queries specifying which harnesses and elements to search for:
     *   - A `string` searches for elements matching the CSS selector specified by the string.
     *   - A `ComponentHarness` constructor searches for `ComponentHarness` instances matching the
     *     given class.
     *   - A `HarnessPredicate` searches for `ComponentHarness` instances matching the given
     *     predicate.
     * @return An asynchronous locator function that searches for and returns a `Promise` for all
     *   elements and harnesses matching the given search criteria. Matches are ordered first by
     *   order in the DOM, and second by order in the queries list. If an element matches more than
     *   one `ComponentHarness` class, the locator gets an instance of each for the same element. If
     *   an element matches multiple `string` selectors, only one `TestElement` instance is returned
     *   for that element. The type that the `Promise` resolves to is an array where each element is
     *   the union of all result types for each query.
     *
     * e.g. Given the following DOM: `<div id="d1" /><div id="d2" />`, and assuming
     * `DivHarness.hostSelector === 'div'` and `IdIsD1Harness.hostSelector === '#d1'`:
     * - `await ch.locatorForAll(DivHarness, 'div')()` gets `[
     *     DivHarness, // for #d1
     *     TestElement, // for #d1
     *     DivHarness, // for #d2
     *     TestElement // for #d2
     *   ]`
     * - `await ch.locatorForAll('div', '#d1')()` gets `[
     *     TestElement, // for #d1
     *     TestElement // for #d2
     *   ]`
     * - `await ch.locatorForAll(DivHarness, IdIsD1Harness)()` gets `[
     *     DivHarness, // for #d1
     *     IdIsD1Harness, // for #d1
     *     DivHarness // for #d2
     *   ]`
     * - `await ch.locatorForAll('span')()` gets `[]`.
     */
    ComponentHarness.prototype.locatorForAll = function () {
        var _a;
        var queries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            queries[_i] = arguments[_i];
        }
        return (_a = this.locatorFactory).locatorForAll.apply(_a, __spread(queries));
    };
    /**
     * Flushes change detection and async tasks in the Angular zone.
     * In most cases it should not be necessary to call this manually. However, there may be some edge
     * cases where it is needed to fully flush animation events.
     */
    ComponentHarness.prototype.forceStabilize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.locatorFactory.forceStabilize()];
            });
        });
    };
    /**
     * Waits for all scheduled or running async tasks to complete. This allows harness
     * authors to wait for async tasks outside of the Angular zone.
     */
    ComponentHarness.prototype.waitForTasksOutsideAngular = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.locatorFactory.waitForTasksOutsideAngular()];
            });
        });
    };
    return ComponentHarness;
}());
/**
 * A class used to associate a ComponentHarness class with predicates functions that can be used to
 * filter instances of the class.
 */
var HarnessPredicate = /** @class */ (function () {
    function HarnessPredicate(harnessType, options) {
        this.harnessType = harnessType;
        this._predicates = [];
        this._descriptions = [];
        this._addBaseOptions(options);
    }
    /**
     * Checks if the specified nullable string value matches the given pattern.
     * @param value The nullable string value to check, or a Promise resolving to the
     *   nullable string value.
     * @param pattern The pattern the value is expected to match. If `pattern` is a string,
     *   `value` is expected to match exactly. If `pattern` is a regex, a partial match is
     *   allowed. If `pattern` is `null`, the value is expected to be `null`.
     * @return Whether the value matches the pattern.
     */
    HarnessPredicate.stringMatches = function (value, pattern) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, value];
                    case 1:
                        value = _a.sent();
                        if (pattern === null) {
                            return [2 /*return*/, value === null];
                        }
                        else if (value === null) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, typeof pattern === 'string' ? value === pattern : pattern.test(value)];
                }
            });
        });
    };
    /**
     * Adds a predicate function to be run against candidate harnesses.
     * @param description A description of this predicate that may be used in error messages.
     * @param predicate An async predicate function.
     * @return this (for method chaining).
     */
    HarnessPredicate.prototype.add = function (description, predicate) {
        this._descriptions.push(description);
        this._predicates.push(predicate);
        return this;
    };
    /**
     * Adds a predicate function that depends on an option value to be run against candidate
     * harnesses. If the option value is undefined, the predicate will be ignored.
     * @param name The name of the option (may be used in error messages).
     * @param option The option value.
     * @param predicate The predicate function to run if the option value is not undefined.
     * @return this (for method chaining).
     */
    HarnessPredicate.prototype.addOption = function (name, option, predicate) {
        if (option !== undefined) {
            this.add(name + " = " + _valueAsString(option), function (item) { return predicate(item, option); });
        }
        return this;
    };
    /**
     * Filters a list of harnesses on this predicate.
     * @param harnesses The list of harnesses to filter.
     * @return A list of harnesses that satisfy this predicate.
     */
    HarnessPredicate.prototype.filter = function (harnesses) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(harnesses.map(function (h) { return _this.evaluate(h); }))];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, harnesses.filter(function (_, i) { return results[i]; })];
                }
            });
        });
    };
    /**
     * Evaluates whether the given harness satisfies this predicate.
     * @param harness The harness to check
     * @return A promise that resolves to true if the harness satisfies this predicate,
     *   and resolves to false otherwise.
     */
    HarnessPredicate.prototype.evaluate = function (harness) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(this._predicates.map(function (p) { return p(harness); }))];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, results.reduce(function (combined, current) { return combined && current; }, true)];
                }
            });
        });
    };
    /** Gets a description of this predicate for use in error messages. */
    HarnessPredicate.prototype.getDescription = function () {
        return this._descriptions.join(', ');
    };
    /** Gets the selector used to find candidate elements. */
    HarnessPredicate.prototype.getSelector = function () {
        var _this = this;
        return this._ancestor.split(',')
            .map(function (part) { return (part.trim() + " " + _this.harnessType.hostSelector).trim(); })
            .join(',');
    };
    /** Adds base options common to all harness types. */
    HarnessPredicate.prototype._addBaseOptions = function (options) {
        var _this = this;
        this._ancestor = options.ancestor || '';
        if (this._ancestor) {
            this._descriptions.push("has ancestor matching selector \"" + this._ancestor + "\"");
        }
        var selector = options.selector;
        if (selector !== undefined) {
            this.add("host matches selector \"" + selector + "\"", function (item) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, item.host()];
                        case 1: return [2 /*return*/, (_a.sent()).matchesSelector(selector)];
                    }
                });
            }); });
        }
    };
    return HarnessPredicate;
}());
/** Represent a value as a string for the purpose of logging. */
function _valueAsString(value) {
    if (value === undefined) {
        return 'undefined';
    }
    // `JSON.stringify` doesn't handle RegExp properly, so we need a custom replacer.
    try {
        return JSON.stringify(value, function (_, v) {
            if (v instanceof RegExp) {
                return "/" + v.toString() + "/";
            }
            return typeof v === 'string' ? v.replace('/\//g', '\\/') : v;
        }).replace(/"\/\//g, '\\/').replace(/\/\/"/g, '\\/').replace(/\\\//g, '/');
    }
    catch (_a) {
        // `JSON.stringify` will throw if the object is cyclical,
        // in this case the best we can do is report the value as `{...}`.
        return '{...}';
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base harness environment class that can be extended to allow `ComponentHarness`es to be used in
 * different test environments (e.g. testbed, protractor, etc.). This class implements the
 * functionality of both a `HarnessLoader` and `LocatorFactory`. This class is generic on the raw
 * element type, `E`, used by the particular test environment.
 */
var HarnessEnvironment = /** @class */ (function () {
    function HarnessEnvironment(rawRootElement) {
        this.rawRootElement = rawRootElement;
        this.rootElement = this.createTestElement(rawRootElement);
    }
    // Implemented as part of the `LocatorFactory` interface.
    HarnessEnvironment.prototype.documentRootLocatorFactory = function () {
        return this.createEnvironment(this.getDocumentRoot());
    };
    // Implemented as part of the `LocatorFactory` interface.
    HarnessEnvironment.prototype.locatorFor = function () {
        var _this = this;
        var queries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            queries[_i] = arguments[_i];
        }
        return function () { return _assertResultFound(_this._getAllHarnessesAndTestElements(queries), _getDescriptionForLocatorForQueries(queries)); };
    };
    // Implemented as part of the `LocatorFactory` interface.
    HarnessEnvironment.prototype.locatorForOptional = function () {
        var _this = this;
        var queries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            queries[_i] = arguments[_i];
        }
        return function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this._getAllHarnessesAndTestElements(queries)];
                case 1: return [2 /*return*/, (_a.sent())[0] || null];
            }
        }); }); };
    };
    // Implemented as part of the `LocatorFactory` interface.
    HarnessEnvironment.prototype.locatorForAll = function () {
        var _this = this;
        var queries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            queries[_i] = arguments[_i];
        }
        return function () { return _this._getAllHarnessesAndTestElements(queries); };
    };
    // Implemented as part of the `LocatorFactory` interface.
    HarnessEnvironment.prototype.harnessLoaderFor = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.createEnvironment;
                        return [4 /*yield*/, _assertResultFound(this.getAllRawElements(selector), [_getDescriptionForHarnessLoaderQuery(selector)])];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    // Implemented as part of the `LocatorFactory` interface.
    HarnessEnvironment.prototype.harnessLoaderForOptional = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            var elements;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllRawElements(selector)];
                    case 1:
                        elements = _a.sent();
                        return [2 /*return*/, elements[0] ? this.createEnvironment(elements[0]) : null];
                }
            });
        });
    };
    // Implemented as part of the `LocatorFactory` interface.
    HarnessEnvironment.prototype.harnessLoaderForAll = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            var elements;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllRawElements(selector)];
                    case 1:
                        elements = _a.sent();
                        return [2 /*return*/, elements.map(function (element) { return _this.createEnvironment(element); })];
                }
            });
        });
    };
    // Implemented as part of the `HarnessLoader` interface.
    HarnessEnvironment.prototype.getHarness = function (query) {
        return this.locatorFor(query)();
    };
    // Implemented as part of the `HarnessLoader` interface.
    HarnessEnvironment.prototype.getAllHarnesses = function (query) {
        return this.locatorForAll(query)();
    };
    // Implemented as part of the `HarnessLoader` interface.
    HarnessEnvironment.prototype.getChildLoader = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.createEnvironment;
                        return [4 /*yield*/, _assertResultFound(this.getAllRawElements(selector), [_getDescriptionForHarnessLoaderQuery(selector)])];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    // Implemented as part of the `HarnessLoader` interface.
    HarnessEnvironment.prototype.getAllChildLoaders = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllRawElements(selector)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (e) { return _this.createEnvironment(e); })];
                }
            });
        });
    };
    /** Creates a `ComponentHarness` for the given harness type with the given raw host element. */
    HarnessEnvironment.prototype.createComponentHarness = function (harnessType, element) {
        return new harnessType(this.createEnvironment(element));
    };
    /**
     * Matches the given raw elements with the given list of element and harness queries to produce a
     * list of matched harnesses and test elements.
     */
    HarnessEnvironment.prototype._getAllHarnessesAndTestElements = function (queries) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, allQueries, harnessQueries, elementQueries, harnessTypes, rawElements, skipSelectorCheck, perElementMatches;
            var _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = _parseQueries(queries), allQueries = _a.allQueries, harnessQueries = _a.harnessQueries, elementQueries = _a.elementQueries, harnessTypes = _a.harnessTypes;
                        return [4 /*yield*/, this.getAllRawElements(__spread(elementQueries, harnessQueries.map(function (predicate) { return predicate.getSelector(); })).join(','))];
                    case 1:
                        rawElements = _c.sent();
                        skipSelectorCheck = (elementQueries.length === 0 && harnessTypes.size === 1) ||
                            harnessQueries.length === 0;
                        return [4 /*yield*/, Promise.all(rawElements.map(function (rawElement) { return __awaiter(_this, void 0, void 0, function () {
                                var testElement, allResultsForElement;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            testElement = this.createTestElement(rawElement);
                                            return [4 /*yield*/, Promise.all(
                                                // For each query, get `null` if it doesn't match, or a `TestElement` or
                                                // `ComponentHarness` as appropriate if it does match. This gives us everything that
                                                // matches the current raw element, but it may contain duplicate entries (e.g. multiple
                                                // `TestElement` or multiple `ComponentHarness` of the same type.
                                                allQueries.map(function (query) {
                                                    return _this._getQueryResultForElement(query, rawElement, testElement, skipSelectorCheck);
                                                }))];
                                        case 1:
                                            allResultsForElement = _a.sent();
                                            return [2 /*return*/, _removeDuplicateQueryResults(allResultsForElement)];
                                    }
                                });
                            }); }))];
                    case 2:
                        perElementMatches = _c.sent();
                        return [2 /*return*/, (_b = []).concat.apply(_b, __spread(perElementMatches))];
                }
            });
        });
    };
    /**
     * Check whether the given query matches the given element, if it does return the matched
     * `TestElement` or `ComponentHarness`, if it does not, return null. In cases where the caller
     * knows for sure that the query matches the element's selector, `skipSelectorCheck` can be used
     * to skip verification and optimize performance.
     */
    HarnessEnvironment.prototype._getQueryResultForElement = function (query, rawElement, testElement, skipSelectorCheck) {
        if (skipSelectorCheck === void 0) { skipSelectorCheck = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, harness;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(typeof query === 'string')) return [3 /*break*/, 3];
                        _a = skipSelectorCheck;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, testElement.matchesSelector(query)];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2: return [2 /*return*/, ((_a) ? testElement : null)];
                    case 3:
                        _b = skipSelectorCheck;
                        if (_b) return [3 /*break*/, 5];
                        return [4 /*yield*/, testElement.matchesSelector(query.getSelector())];
                    case 4:
                        _b = (_c.sent());
                        _c.label = 5;
                    case 5:
                        if (!_b) return [3 /*break*/, 7];
                        harness = this.createComponentHarness(query.harnessType, rawElement);
                        return [4 /*yield*/, query.evaluate(harness)];
                    case 6: return [2 /*return*/, (_c.sent()) ? harness : null];
                    case 7: return [2 /*return*/, null];
                }
            });
        });
    };
    return HarnessEnvironment;
}());
/**
 * Parses a list of queries in the format accepted by the `locatorFor*` methods into an easier to
 * work with format.
 */
function _parseQueries(queries) {
    var e_1, _a;
    var allQueries = [];
    var harnessQueries = [];
    var elementQueries = [];
    var harnessTypes = new Set();
    try {
        for (var queries_1 = __values(queries), queries_1_1 = queries_1.next(); !queries_1_1.done; queries_1_1 = queries_1.next()) {
            var query = queries_1_1.value;
            if (typeof query === 'string') {
                allQueries.push(query);
                elementQueries.push(query);
            }
            else {
                var predicate = query instanceof HarnessPredicate ? query : new HarnessPredicate(query, {});
                allQueries.push(predicate);
                harnessQueries.push(predicate);
                harnessTypes.add(predicate.harnessType);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (queries_1_1 && !queries_1_1.done && (_a = queries_1.return)) _a.call(queries_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return { allQueries: allQueries, harnessQueries: harnessQueries, elementQueries: elementQueries, harnessTypes: harnessTypes };
}
/**
 * Removes duplicate query results for a particular element. (e.g. multiple `TestElement`
 * instances or multiple instances of the same `ComponentHarness` class.
 */
function _removeDuplicateQueryResults(results) {
    return __awaiter(this, void 0, void 0, function () {
        var testElementMatched, matchedHarnessTypes, dedupedMatches, results_1, results_1_1, result;
        var e_2, _a;
        return __generator(this, function (_b) {
            testElementMatched = false;
            matchedHarnessTypes = new Set();
            dedupedMatches = [];
            try {
                for (results_1 = __values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                    result = results_1_1.value;
                    if (!result) {
                        continue;
                    }
                    if (result instanceof ComponentHarness) {
                        if (!matchedHarnessTypes.has(result.constructor)) {
                            matchedHarnessTypes.add(result.constructor);
                            dedupedMatches.push(result);
                        }
                    }
                    else if (!testElementMatched) {
                        testElementMatched = true;
                        dedupedMatches.push(result);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return [2 /*return*/, dedupedMatches];
        });
    });
}
/** Verifies that there is at least one result in an array. */
function _assertResultFound(results, queryDescriptions) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, results];
                case 1:
                    result = (_a.sent())[0];
                    if (result == undefined) {
                        throw Error("Failed to find element matching one of the following queries:\n" +
                            queryDescriptions.map(function (desc) { return "(" + desc + ")"; }).join(',\n'));
                    }
                    return [2 /*return*/, result];
            }
        });
    });
}
/** Gets a list of description strings from a list of queries. */
function _getDescriptionForLocatorForQueries(queries) {
    return queries.map(function (query) { return typeof query === 'string' ?
        _getDescriptionForTestElementQuery(query) : _getDescriptionForComponentHarnessQuery(query); });
}
/** Gets a description string for a `ComponentHarness` query. */
function _getDescriptionForComponentHarnessQuery(query) {
    var harnessPredicate = query instanceof HarnessPredicate ? query : new HarnessPredicate(query, {});
    var _a = harnessPredicate.harnessType, name = _a.name, hostSelector = _a.hostSelector;
    var description = name + " with host element matching selector: \"" + hostSelector + "\"";
    var constraints = harnessPredicate.getDescription();
    return description + (constraints ?
        " satisfying the constraints: " + harnessPredicate.getDescription() : '');
}
/** Gets a description string for a `TestElement` query. */
function _getDescriptionForTestElementQuery(selector) {
    return "TestElement for element matching selector: \"" + selector + "\"";
}
/** Gets a description string for a `HarnessLoader` query. */
function _getDescriptionForHarnessLoaderQuery(selector) {
    return "HarnessLoader for element matching selector: \"" + selector + "\"";
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** An enum of non-text keys that can be used with the `sendKeys` method. */
// NOTE: This is a separate enum from `@angular/cdk/keycodes` because we don't necessarily want to
// support every possible keyCode. We also can't rely on Protractor's `Key` because we don't want a
// dependency on any particular testing framework here. Instead we'll just maintain this supported
// list of keys and let individual concrete `HarnessEnvironment` classes map them to whatever key
// representation is used in its respective testing framework.
// tslint:disable-next-line:prefer-const-enum Seems like this causes some issues with System.js
var TestKey;
(function (TestKey) {
    TestKey[TestKey["BACKSPACE"] = 0] = "BACKSPACE";
    TestKey[TestKey["TAB"] = 1] = "TAB";
    TestKey[TestKey["ENTER"] = 2] = "ENTER";
    TestKey[TestKey["SHIFT"] = 3] = "SHIFT";
    TestKey[TestKey["CONTROL"] = 4] = "CONTROL";
    TestKey[TestKey["ALT"] = 5] = "ALT";
    TestKey[TestKey["ESCAPE"] = 6] = "ESCAPE";
    TestKey[TestKey["PAGE_UP"] = 7] = "PAGE_UP";
    TestKey[TestKey["PAGE_DOWN"] = 8] = "PAGE_DOWN";
    TestKey[TestKey["END"] = 9] = "END";
    TestKey[TestKey["HOME"] = 10] = "HOME";
    TestKey[TestKey["LEFT_ARROW"] = 11] = "LEFT_ARROW";
    TestKey[TestKey["UP_ARROW"] = 12] = "UP_ARROW";
    TestKey[TestKey["RIGHT_ARROW"] = 13] = "RIGHT_ARROW";
    TestKey[TestKey["DOWN_ARROW"] = 14] = "DOWN_ARROW";
    TestKey[TestKey["INSERT"] = 15] = "INSERT";
    TestKey[TestKey["DELETE"] = 16] = "DELETE";
    TestKey[TestKey["F1"] = 17] = "F1";
    TestKey[TestKey["F2"] = 18] = "F2";
    TestKey[TestKey["F3"] = 19] = "F3";
    TestKey[TestKey["F4"] = 20] = "F4";
    TestKey[TestKey["F5"] = 21] = "F5";
    TestKey[TestKey["F6"] = 22] = "F6";
    TestKey[TestKey["F7"] = 23] = "F7";
    TestKey[TestKey["F8"] = 24] = "F8";
    TestKey[TestKey["F9"] = 25] = "F9";
    TestKey[TestKey["F10"] = 26] = "F10";
    TestKey[TestKey["F11"] = 27] = "F11";
    TestKey[TestKey["F12"] = 28] = "F12";
    TestKey[TestKey["META"] = 29] = "META";
})(TestKey || (TestKey = {}));

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export { ComponentHarness, HarnessEnvironment, HarnessPredicate, TestKey };
//# sourceMappingURL=testing.js.map
