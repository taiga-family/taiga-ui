/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __awaiter, __generator, __read, __spread } from "tslib";
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
export { ComponentHarness };
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
export { HarnessPredicate };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWhhcm5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3Rlc3RpbmcvY29tcG9uZW50LWhhcm5lc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQTJPSDs7OztHQUlHO0FBQ0g7SUFDRSwwQkFBK0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUVqRSw2RkFBNkY7SUFDdkYsK0JBQUksR0FBVjs7O2dCQUNFLHNCQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFDOzs7S0FDeEM7SUFFRDs7OztPQUlHO0lBQ08scURBQTBCLEdBQXBDO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CRztJQUNPLHFDQUFVLEdBQXBCOztRQUErRCxpQkFBYTthQUFiLFVBQWEsRUFBYixxQkFBYSxFQUFiLElBQWE7WUFBYiw0QkFBYTs7UUFFMUUsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQSxDQUFDLFVBQVUsb0JBQUksT0FBTyxHQUFFO0lBQ3BELENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FvQkc7SUFDTyw2Q0FBa0IsR0FBNUI7O1FBQXVFLGlCQUFhO2FBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtZQUFiLDRCQUFhOztRQUVsRixPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsY0FBYyxDQUFBLENBQUMsa0JBQWtCLG9CQUFJLE9BQU8sR0FBRTtJQUM1RCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbUNHO0lBQ08sd0NBQWEsR0FBdkI7O1FBQWtFLGlCQUFhO2FBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtZQUFi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QyxRQUFRLENBQUMsRUFBQzs7O2lCQUN0RCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUF0R0QsSUFzR0M7O0FBRUQsZ0VBQWdFO0FBQ2hFLFNBQVMsY0FBYyxDQUFDLEtBQWM7SUFDcEMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQ3ZCLE9BQU8sV0FBVyxDQUFDO0tBQ3BCO0lBQ0QsaUZBQWlGO0lBQ2pGLElBQUk7UUFDRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksTUFBTSxFQUFFO2dCQUN2QixPQUFPLE1BQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFHLENBQUM7YUFDNUI7WUFFRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztLQUM1RTtJQUFDLFdBQU07UUFDTix5REFBeUQ7UUFDekQsa0VBQWtFO1FBQ2xFLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1Rlc3RFbGVtZW50fSBmcm9tICcuL3Rlc3QtZWxlbWVudCc7XG5cbi8qKiBBbiBhc3luYyBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwcm9taXNlIHdoZW4gY2FsbGVkLiAqL1xuZXhwb3J0IHR5cGUgQXN5bmNGYWN0b3J5Rm48VD4gPSAoKSA9PiBQcm9taXNlPFQ+O1xuXG4vKiogQW4gYXN5bmMgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBpdGVtIGFuZCByZXR1cm5zIGEgYm9vbGVhbiBwcm9taXNlICovXG5leHBvcnQgdHlwZSBBc3luY1ByZWRpY2F0ZTxUPiA9IChpdGVtOiBUKSA9PiBQcm9taXNlPGJvb2xlYW4+O1xuXG4vKiogQW4gYXN5bmMgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBpdGVtIGFuZCBhbiBvcHRpb24gdmFsdWUgYW5kIHJldHVybnMgYSBib29sZWFuIHByb21pc2UuICovXG5leHBvcnQgdHlwZSBBc3luY09wdGlvblByZWRpY2F0ZTxULCBPPiA9IChpdGVtOiBULCBvcHRpb246IE8pID0+IFByb21pc2U8Ym9vbGVhbj47XG5cbi8qKlxuICogQSBxdWVyeSBmb3IgYSBgQ29tcG9uZW50SGFybmVzc2AsIHdoaWNoIGlzIGV4cHJlc3NlZCBhcyBlaXRoZXIgYSBgQ29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yYCBvclxuICogYSBgSGFybmVzc1ByZWRpY2F0ZWAuXG4gKi9cbmV4cG9ydCB0eXBlIEhhcm5lc3NRdWVyeTxUIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcz4gPVxuICAgIENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcjxUPiB8IEhhcm5lc3NQcmVkaWNhdGU8VD47XG5cbi8qKlxuICogVGhlIHJlc3VsdCB0eXBlIG9idGFpbmVkIHdoZW4gc2VhcmNoaW5nIHVzaW5nIGEgcGFydGljdWxhciBsaXN0IG9mIHF1ZXJpZXMuIFRoaXMgdHlwZSBkZXBlbmRzIG9uXG4gKiB0aGUgcGFydGljdWxhciBpdGVtcyBiZWluZyBxdWVyaWVkLlxuICogLSBJZiBvbmUgb2YgdGhlIHF1ZXJpZXMgaXMgZm9yIGEgYENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcjxDMT5gLCBpdCBtZWFucyB0aGF0IHRoZSByZXN1bHRcbiAqICAgbWlnaHQgYmUgYSBoYXJuZXNzIG9mIHR5cGUgYEMxYFxuICogLSBJZiBvbmUgb2YgdGhlIHF1ZXJpZXMgaXMgZm9yIGEgYEhhcm5lc3NQcmVkaWNhdGU8QzI+YCwgaXQgbWVhbnMgdGhhdCB0aGUgcmVzdWx0IG1pZ2h0IGJlIGFcbiAqICAgaGFybmVzcyBvZiB0eXBlIGBDMmBcbiAqIC0gSWYgb25lIG9mIHRoZSBxdWVyaWVzIGlzIGZvciBhIGBzdHJpbmdgLCBpdCBtZWFucyB0aGF0IHRoZSByZXN1bHQgbWlnaHQgYmUgYSBgVGVzdEVsZW1lbnRgLlxuICpcbiAqIFNpbmNlIHdlIGRvbid0IGtub3cgZm9yIHN1cmUgd2hpY2ggcXVlcnkgd2lsbCBtYXRjaCwgdGhlIHJlc3VsdCB0eXBlIGlmIHRoZSB1bmlvbiBvZiB0aGUgdHlwZXNcbiAqIGZvciBhbGwgcG9zc2libGUgcmVzdWx0cy5cbiAqXG4gKiBlLmcuXG4gKiBUaGUgdHlwZTpcbiAqIGBMb2NhdG9yRm5SZXN1bHQmbHQ7W1xuICogICBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3ImbHQ7TXlIYXJuZXNzJmd0OyxcbiAqICAgSGFybmVzc1ByZWRpY2F0ZSZsdDtNeU90aGVySGFybmVzcyZndDssXG4gKiAgIHN0cmluZ1xuICogXSZndDtgXG4gKiBpcyBlcXVpdmFsZW50IHRvOlxuICogYE15SGFybmVzcyB8IE15T3RoZXJIYXJuZXNzIHwgVGVzdEVsZW1lbnRgLlxuICovXG5leHBvcnQgdHlwZSBMb2NhdG9yRm5SZXN1bHQ8VCBleHRlbmRzIChIYXJuZXNzUXVlcnk8YW55PiB8IHN0cmluZylbXT4gPSB7XG4gIFtJIGluIGtleW9mIFRdOlxuICAgICAgLy8gTWFwIGBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3I8Qz5gIHRvIGBDYC5cbiAgICAgIFRbSV0gZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBpbmZlciBDID8gQyA6XG4gICAgICAvLyBNYXAgYEhhcm5lc3NQcmVkaWNhdGU8Qz5gIHRvIGBDYC5cbiAgICAgIFRbSV0gZXh0ZW5kcyB7IGhhcm5lc3NUeXBlOiBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBpbmZlciBDIH0gPyBDIDpcbiAgICAgIC8vIE1hcCBgc3RyaW5nYCB0byBgVGVzdEVsZW1lbnRgLlxuICAgICAgVFtJXSBleHRlbmRzIHN0cmluZyA/IFRlc3RFbGVtZW50IDpcbiAgICAgIC8vIE1hcCBldmVyeXRoaW5nIGVsc2UgdG8gYG5ldmVyYCAoc2hvdWxkIG5vdCBoYXBwZW4gZHVlIHRvIHRoZSB0eXBlIGNvbnN0cmFpbnQgb24gYFRgKS5cbiAgICAgIG5ldmVyO1xufVtudW1iZXJdO1xuXG5cbi8qKlxuICogSW50ZXJmYWNlIHVzZWQgdG8gbG9hZCBDb21wb25lbnRIYXJuZXNzIG9iamVjdHMuIFRoaXMgaW50ZXJmYWNlIGlzIHVzZWQgYnkgdGVzdCBhdXRob3JzIHRvXG4gKiBpbnN0YW50aWF0ZSBgQ29tcG9uZW50SGFybmVzc2Blcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIYXJuZXNzTG9hZGVyIHtcbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBhbiBlbGVtZW50IHdpdGggdGhlIGdpdmVuIHNlbGVjdG9yIHVuZGVyIHRoZSBjdXJyZW50IGluc3RhbmNlcydzIHJvb3QgZWxlbWVudCxcbiAgICogYW5kIHJldHVybnMgYSBgSGFybmVzc0xvYWRlcmAgcm9vdGVkIGF0IHRoZSBtYXRjaGluZyBlbGVtZW50LiBJZiBtdWx0aXBsZSBlbGVtZW50cyBtYXRjaCB0aGVcbiAgICogc2VsZWN0b3IsIHRoZSBmaXJzdCBpcyB1c2VkLiBJZiBubyBlbGVtZW50cyBtYXRjaCwgYW4gZXJyb3IgaXMgdGhyb3duLlxuICAgKiBAcGFyYW0gc2VsZWN0b3IgVGhlIHNlbGVjdG9yIGZvciB0aGUgcm9vdCBlbGVtZW50IG9mIHRoZSBuZXcgYEhhcm5lc3NMb2FkZXJgXG4gICAqIEByZXR1cm4gQSBgSGFybmVzc0xvYWRlcmAgcm9vdGVkIGF0IHRoZSBlbGVtZW50IG1hdGNoaW5nIHRoZSBnaXZlbiBzZWxlY3Rvci5cbiAgICogQHRocm93cyBJZiBhIG1hdGNoaW5nIGVsZW1lbnQgY2FuJ3QgYmUgZm91bmQuXG4gICAqL1xuICBnZXRDaGlsZExvYWRlcihzZWxlY3Rvcjogc3RyaW5nKTogUHJvbWlzZTxIYXJuZXNzTG9hZGVyPjtcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIGFsbCBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBzZWxlY3RvciB1bmRlciB0aGUgY3VycmVudCBpbnN0YW5jZXMncyByb290IGVsZW1lbnQsXG4gICAqIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGBIYXJuZXNzTG9hZGVyYHMsIG9uZSBmb3IgZWFjaCBtYXRjaGluZyBlbGVtZW50LCByb290ZWQgYXQgdGhhdFxuICAgKiBlbGVtZW50LlxuICAgKiBAcGFyYW0gc2VsZWN0b3IgVGhlIHNlbGVjdG9yIGZvciB0aGUgcm9vdCBlbGVtZW50IG9mIHRoZSBuZXcgYEhhcm5lc3NMb2FkZXJgXG4gICAqIEByZXR1cm4gQSBsaXN0IG9mIGBIYXJuZXNzTG9hZGVyYHMsIG9uZSBmb3IgZWFjaCBtYXRjaGluZyBlbGVtZW50LCByb290ZWQgYXQgdGhhdCBlbGVtZW50LlxuICAgKi9cbiAgZ2V0QWxsQ2hpbGRMb2FkZXJzKHNlbGVjdG9yOiBzdHJpbmcpOiBQcm9taXNlPEhhcm5lc3NMb2FkZXJbXT47XG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBhbiBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGhhcm5lc3MgdHlwZSB1bmRlciB0aGVcbiAgICogYEhhcm5lc3NMb2FkZXJgJ3Mgcm9vdCBlbGVtZW50LCBhbmQgcmV0dXJucyBhIGBDb21wb25lbnRIYXJuZXNzYCBmb3IgdGhhdCBpbnN0YW5jZS4gSWYgbXVsdGlwbGVcbiAgICogbWF0Y2hpbmcgY29tcG9uZW50cyBhcmUgZm91bmQsIGEgaGFybmVzcyBmb3IgdGhlIGZpcnN0IG9uZSBpcyByZXR1cm5lZC4gSWYgbm8gbWF0Y2hpbmdcbiAgICogY29tcG9uZW50IGlzIGZvdW5kLCBhbiBlcnJvciBpcyB0aHJvd24uXG4gICAqIEBwYXJhbSBxdWVyeSBBIHF1ZXJ5IGZvciBhIGhhcm5lc3MgdG8gY3JlYXRlXG4gICAqIEByZXR1cm4gQW4gaW5zdGFuY2Ugb2YgdGhlIGdpdmVuIGhhcm5lc3MgdHlwZVxuICAgKiBAdGhyb3dzIElmIGEgbWF0Y2hpbmcgY29tcG9uZW50IGluc3RhbmNlIGNhbid0IGJlIGZvdW5kLlxuICAgKi9cbiAgZ2V0SGFybmVzczxUIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcz4ocXVlcnk6IEhhcm5lc3NRdWVyeTxUPik6IFByb21pc2U8VD47XG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBhbGwgaW5zdGFuY2VzIG9mIHRoZSBjb21wb25lbnQgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaGFybmVzcyB0eXBlIHVuZGVyIHRoZVxuICAgKiBgSGFybmVzc0xvYWRlcmAncyByb290IGVsZW1lbnQsIGFuZCByZXR1cm5zIGEgbGlzdCBgQ29tcG9uZW50SGFybmVzc2AgZm9yIGVhY2ggaW5zdGFuY2UuXG4gICAqIEBwYXJhbSBxdWVyeSBBIHF1ZXJ5IGZvciBhIGhhcm5lc3MgdG8gY3JlYXRlXG4gICAqIEByZXR1cm4gQSBsaXN0IGluc3RhbmNlcyBvZiB0aGUgZ2l2ZW4gaGFybmVzcyB0eXBlLlxuICAgKi9cbiAgZ2V0QWxsSGFybmVzc2VzPFQgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzPihxdWVyeTogSGFybmVzc1F1ZXJ5PFQ+KTogUHJvbWlzZTxUW10+O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSB1c2VkIHRvIGNyZWF0ZSBhc3luY2hyb25vdXMgbG9jYXRvciBmdW5jdGlvbnMgdXNlZCBmaW5kIGVsZW1lbnRzIGFuZCBjb21wb25lbnRcbiAqIGhhcm5lc3Nlcy4gVGhpcyBpbnRlcmZhY2UgaXMgdXNlZCBieSBgQ29tcG9uZW50SGFybmVzc2AgYXV0aG9ycyB0byBjcmVhdGUgbG9jYXRvciBmdW5jdGlvbnMgZm9yXG4gKiB0aGVpciBgQ29tcG9uZW50SGFybmVzc2Agc3ViY2xhc3MuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRvckZhY3Rvcnkge1xuICAvKiogR2V0cyBhIGxvY2F0b3IgZmFjdG9yeSByb290ZWQgYXQgdGhlIGRvY3VtZW50IHJvb3QuICovXG4gIGRvY3VtZW50Um9vdExvY2F0b3JGYWN0b3J5KCk6IExvY2F0b3JGYWN0b3J5O1xuXG4gIC8qKiBUaGUgcm9vdCBlbGVtZW50IG9mIHRoaXMgYExvY2F0b3JGYWN0b3J5YCBhcyBhIGBUZXN0RWxlbWVudGAuICovXG4gIHJvb3RFbGVtZW50OiBUZXN0RWxlbWVudDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBhc3luY2hyb25vdXMgbG9jYXRvciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGZpbmQgYSBgQ29tcG9uZW50SGFybmVzc2AgaW5zdGFuY2VcbiAgICogb3IgZWxlbWVudCB1bmRlciB0aGUgcm9vdCBlbGVtZW50IG9mIHRoaXMgYExvY2F0b3JGYWN0b3J5YC5cbiAgICogQHBhcmFtIHF1ZXJpZXMgQSBsaXN0IG9mIHF1ZXJpZXMgc3BlY2lmeWluZyB3aGljaCBoYXJuZXNzZXMgYW5kIGVsZW1lbnRzIHRvIHNlYXJjaCBmb3I6XG4gICAqICAgLSBBIGBzdHJpbmdgIHNlYXJjaGVzIGZvciBlbGVtZW50cyBtYXRjaGluZyB0aGUgQ1NTIHNlbGVjdG9yIHNwZWNpZmllZCBieSB0aGUgc3RyaW5nLlxuICAgKiAgIC0gQSBgQ29tcG9uZW50SGFybmVzc2AgY29uc3RydWN0b3Igc2VhcmNoZXMgZm9yIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZXMgbWF0Y2hpbmcgdGhlXG4gICAqICAgICBnaXZlbiBjbGFzcy5cbiAgICogICAtIEEgYEhhcm5lc3NQcmVkaWNhdGVgIHNlYXJjaGVzIGZvciBgQ29tcG9uZW50SGFybmVzc2AgaW5zdGFuY2VzIG1hdGNoaW5nIHRoZSBnaXZlblxuICAgKiAgICAgcHJlZGljYXRlLlxuICAgKiBAcmV0dXJuIEFuIGFzeW5jaHJvbm91cyBsb2NhdG9yIGZ1bmN0aW9uIHRoYXQgc2VhcmNoZXMgZm9yIGFuZCByZXR1cm5zIGEgYFByb21pc2VgIGZvciB0aGVcbiAgICogICBmaXJzdCBlbGVtZW50IG9yIGhhcm5lc3MgbWF0Y2hpbmcgdGhlIGdpdmVuIHNlYXJjaCBjcml0ZXJpYS4gTWF0Y2hlcyBhcmUgb3JkZXJlZCBmaXJzdCBieVxuICAgKiAgIG9yZGVyIGluIHRoZSBET00sIGFuZCBzZWNvbmQgYnkgb3JkZXIgaW4gdGhlIHF1ZXJpZXMgbGlzdC4gSWYgbm8gbWF0Y2hlcyBhcmUgZm91bmQsIHRoZVxuICAgKiAgIGBQcm9taXNlYCByZWplY3RzLiBUaGUgdHlwZSB0aGF0IHRoZSBgUHJvbWlzZWAgcmVzb2x2ZXMgdG8gaXMgYSB1bmlvbiBvZiBhbGwgcmVzdWx0IHR5cGVzIGZvclxuICAgKiAgIGVhY2ggcXVlcnkuXG4gICAqXG4gICAqIGUuZy4gR2l2ZW4gdGhlIGZvbGxvd2luZyBET006IGA8ZGl2IGlkPVwiZDFcIiAvPjxkaXYgaWQ9XCJkMlwiIC8+YCwgYW5kIGFzc3VtaW5nXG4gICAqIGBEaXZIYXJuZXNzLmhvc3RTZWxlY3RvciA9PT0gJ2RpdidgOlxuICAgKiAtIGBhd2FpdCBsZi5sb2NhdG9yRm9yKERpdkhhcm5lc3MsICdkaXYnKSgpYCBnZXRzIGEgYERpdkhhcm5lc3NgIGluc3RhbmNlIGZvciBgI2QxYFxuICAgKiAtIGBhd2FpdCBsZi5sb2NhdG9yRm9yKCdkaXYnLCBEaXZIYXJuZXNzKSgpYCBnZXRzIGEgYFRlc3RFbGVtZW50YCBpbnN0YW5jZSBmb3IgYCNkMWBcbiAgICogLSBgYXdhaXQgbGYubG9jYXRvckZvcignc3BhbicpKClgIHRocm93cyBiZWNhdXNlIHRoZSBgUHJvbWlzZWAgcmVqZWN0cy5cbiAgICovXG4gIGxvY2F0b3JGb3I8VCBleHRlbmRzIChIYXJuZXNzUXVlcnk8YW55PiB8IHN0cmluZylbXT4oLi4ucXVlcmllczogVCk6XG4gICAgICBBc3luY0ZhY3RvcnlGbjxMb2NhdG9yRm5SZXN1bHQ8VD4+O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGFzeW5jaHJvbm91cyBsb2NhdG9yIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZmluZCBhIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZVxuICAgKiBvciBlbGVtZW50IHVuZGVyIHRoZSByb290IGVsZW1lbnQgb2YgdGhpcyBgTG9jYXRvckZhY3RvcnlgLlxuICAgKiBAcGFyYW0gcXVlcmllcyBBIGxpc3Qgb2YgcXVlcmllcyBzcGVjaWZ5aW5nIHdoaWNoIGhhcm5lc3NlcyBhbmQgZWxlbWVudHMgdG8gc2VhcmNoIGZvcjpcbiAgICogICAtIEEgYHN0cmluZ2Agc2VhcmNoZXMgZm9yIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBDU1Mgc2VsZWN0b3Igc3BlY2lmaWVkIGJ5IHRoZSBzdHJpbmcuXG4gICAqICAgLSBBIGBDb21wb25lbnRIYXJuZXNzYCBjb25zdHJ1Y3RvciBzZWFyY2hlcyBmb3IgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlcyBtYXRjaGluZyB0aGVcbiAgICogICAgIGdpdmVuIGNsYXNzLlxuICAgKiAgIC0gQSBgSGFybmVzc1ByZWRpY2F0ZWAgc2VhcmNoZXMgZm9yIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZXMgbWF0Y2hpbmcgdGhlIGdpdmVuXG4gICAqICAgICBwcmVkaWNhdGUuXG4gICAqIEByZXR1cm4gQW4gYXN5bmNocm9ub3VzIGxvY2F0b3IgZnVuY3Rpb24gdGhhdCBzZWFyY2hlcyBmb3IgYW5kIHJldHVybnMgYSBgUHJvbWlzZWAgZm9yIHRoZVxuICAgKiAgIGZpcnN0IGVsZW1lbnQgb3IgaGFybmVzcyBtYXRjaGluZyB0aGUgZ2l2ZW4gc2VhcmNoIGNyaXRlcmlhLiBNYXRjaGVzIGFyZSBvcmRlcmVkIGZpcnN0IGJ5XG4gICAqICAgb3JkZXIgaW4gdGhlIERPTSwgYW5kIHNlY29uZCBieSBvcmRlciBpbiB0aGUgcXVlcmllcyBsaXN0LiBJZiBubyBtYXRjaGVzIGFyZSBmb3VuZCwgdGhlXG4gICAqICAgYFByb21pc2VgIGlzIHJlc29sdmVkIHdpdGggYG51bGxgLiBUaGUgdHlwZSB0aGF0IHRoZSBgUHJvbWlzZWAgcmVzb2x2ZXMgdG8gaXMgYSB1bmlvbiBvZiBhbGxcbiAgICogICByZXN1bHQgdHlwZXMgZm9yIGVhY2ggcXVlcnkgb3IgbnVsbC5cbiAgICpcbiAgICogZS5nLiBHaXZlbiB0aGUgZm9sbG93aW5nIERPTTogYDxkaXYgaWQ9XCJkMVwiIC8+PGRpdiBpZD1cImQyXCIgLz5gLCBhbmQgYXNzdW1pbmdcbiAgICogYERpdkhhcm5lc3MuaG9zdFNlbGVjdG9yID09PSAnZGl2J2A6XG4gICAqIC0gYGF3YWl0IGxmLmxvY2F0b3JGb3JPcHRpb25hbChEaXZIYXJuZXNzLCAnZGl2JykoKWAgZ2V0cyBhIGBEaXZIYXJuZXNzYCBpbnN0YW5jZSBmb3IgYCNkMWBcbiAgICogLSBgYXdhaXQgbGYubG9jYXRvckZvck9wdGlvbmFsKCdkaXYnLCBEaXZIYXJuZXNzKSgpYCBnZXRzIGEgYFRlc3RFbGVtZW50YCBpbnN0YW5jZSBmb3IgYCNkMWBcbiAgICogLSBgYXdhaXQgbGYubG9jYXRvckZvck9wdGlvbmFsKCdzcGFuJykoKWAgZ2V0cyBgbnVsbGAuXG4gICAqL1xuICBsb2NhdG9yRm9yT3B0aW9uYWw8VCBleHRlbmRzIChIYXJuZXNzUXVlcnk8YW55PiB8IHN0cmluZylbXT4oLi4ucXVlcmllczogVCk6XG4gICAgICBBc3luY0ZhY3RvcnlGbjxMb2NhdG9yRm5SZXN1bHQ8VD4gfCBudWxsPjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBhc3luY2hyb25vdXMgbG9jYXRvciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGZpbmQgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlc1xuICAgKiBvciBlbGVtZW50cyB1bmRlciB0aGUgcm9vdCBlbGVtZW50IG9mIHRoaXMgYExvY2F0b3JGYWN0b3J5YC5cbiAgICogQHBhcmFtIHF1ZXJpZXMgQSBsaXN0IG9mIHF1ZXJpZXMgc3BlY2lmeWluZyB3aGljaCBoYXJuZXNzZXMgYW5kIGVsZW1lbnRzIHRvIHNlYXJjaCBmb3I6XG4gICAqICAgLSBBIGBzdHJpbmdgIHNlYXJjaGVzIGZvciBlbGVtZW50cyBtYXRjaGluZyB0aGUgQ1NTIHNlbGVjdG9yIHNwZWNpZmllZCBieSB0aGUgc3RyaW5nLlxuICAgKiAgIC0gQSBgQ29tcG9uZW50SGFybmVzc2AgY29uc3RydWN0b3Igc2VhcmNoZXMgZm9yIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZXMgbWF0Y2hpbmcgdGhlXG4gICAqICAgICBnaXZlbiBjbGFzcy5cbiAgICogICAtIEEgYEhhcm5lc3NQcmVkaWNhdGVgIHNlYXJjaGVzIGZvciBgQ29tcG9uZW50SGFybmVzc2AgaW5zdGFuY2VzIG1hdGNoaW5nIHRoZSBnaXZlblxuICAgKiAgICAgcHJlZGljYXRlLlxuICAgKiBAcmV0dXJuIEFuIGFzeW5jaHJvbm91cyBsb2NhdG9yIGZ1bmN0aW9uIHRoYXQgc2VhcmNoZXMgZm9yIGFuZCByZXR1cm5zIGEgYFByb21pc2VgIGZvciBhbGxcbiAgICogICBlbGVtZW50cyBhbmQgaGFybmVzc2VzIG1hdGNoaW5nIHRoZSBnaXZlbiBzZWFyY2ggY3JpdGVyaWEuIE1hdGNoZXMgYXJlIG9yZGVyZWQgZmlyc3QgYnlcbiAgICogICBvcmRlciBpbiB0aGUgRE9NLCBhbmQgc2Vjb25kIGJ5IG9yZGVyIGluIHRoZSBxdWVyaWVzIGxpc3QuIElmIGFuIGVsZW1lbnQgbWF0Y2hlcyBtb3JlIHRoYW5cbiAgICogICBvbmUgYENvbXBvbmVudEhhcm5lc3NgIGNsYXNzLCB0aGUgbG9jYXRvciBnZXRzIGFuIGluc3RhbmNlIG9mIGVhY2ggZm9yIHRoZSBzYW1lIGVsZW1lbnQuIElmXG4gICAqICAgYW4gZWxlbWVudCBtYXRjaGVzIG11bHRpcGxlIGBzdHJpbmdgIHNlbGVjdG9ycywgb25seSBvbmUgYFRlc3RFbGVtZW50YCBpbnN0YW5jZSBpcyByZXR1cm5lZFxuICAgKiAgIGZvciB0aGF0IGVsZW1lbnQuIFRoZSB0eXBlIHRoYXQgdGhlIGBQcm9taXNlYCByZXNvbHZlcyB0byBpcyBhbiBhcnJheSB3aGVyZSBlYWNoIGVsZW1lbnQgaXNcbiAgICogICB0aGUgdW5pb24gb2YgYWxsIHJlc3VsdCB0eXBlcyBmb3IgZWFjaCBxdWVyeS5cbiAgICpcbiAgICogZS5nLiBHaXZlbiB0aGUgZm9sbG93aW5nIERPTTogYDxkaXYgaWQ9XCJkMVwiIC8+PGRpdiBpZD1cImQyXCIgLz5gLCBhbmQgYXNzdW1pbmdcbiAgICogYERpdkhhcm5lc3MuaG9zdFNlbGVjdG9yID09PSAnZGl2J2AgYW5kIGBJZElzRDFIYXJuZXNzLmhvc3RTZWxlY3RvciA9PT0gJyNkMSdgOlxuICAgKiAtIGBhd2FpdCBsZi5sb2NhdG9yRm9yQWxsKERpdkhhcm5lc3MsICdkaXYnKSgpYCBnZXRzIGBbXG4gICAqICAgICBEaXZIYXJuZXNzLCAvLyBmb3IgI2QxXG4gICAqICAgICBUZXN0RWxlbWVudCwgLy8gZm9yICNkMVxuICAgKiAgICAgRGl2SGFybmVzcywgLy8gZm9yICNkMlxuICAgKiAgICAgVGVzdEVsZW1lbnQgLy8gZm9yICNkMlxuICAgKiAgIF1gXG4gICAqIC0gYGF3YWl0IGxmLmxvY2F0b3JGb3JBbGwoJ2RpdicsICcjZDEnKSgpYCBnZXRzIGBbXG4gICAqICAgICBUZXN0RWxlbWVudCwgLy8gZm9yICNkMVxuICAgKiAgICAgVGVzdEVsZW1lbnQgLy8gZm9yICNkMlxuICAgKiAgIF1gXG4gICAqIC0gYGF3YWl0IGxmLmxvY2F0b3JGb3JBbGwoRGl2SGFybmVzcywgSWRJc0QxSGFybmVzcykoKWAgZ2V0cyBgW1xuICAgKiAgICAgRGl2SGFybmVzcywgLy8gZm9yICNkMVxuICAgKiAgICAgSWRJc0QxSGFybmVzcywgLy8gZm9yICNkMVxuICAgKiAgICAgRGl2SGFybmVzcyAvLyBmb3IgI2QyXG4gICAqICAgXWBcbiAgICogLSBgYXdhaXQgbGYubG9jYXRvckZvckFsbCgnc3BhbicpKClgIGdldHMgYFtdYC5cbiAgICovXG4gIGxvY2F0b3JGb3JBbGw8VCBleHRlbmRzIChIYXJuZXNzUXVlcnk8YW55PiB8IHN0cmluZylbXT4oLi4ucXVlcmllczogVCk6XG4gICAgICBBc3luY0ZhY3RvcnlGbjxMb2NhdG9yRm5SZXN1bHQ8VD5bXT47XG5cbiAgLyoqXG4gICAqIEdldHMgYSBgSGFybmVzc0xvYWRlcmAgaW5zdGFuY2UgZm9yIGFuIGVsZW1lbnQgdW5kZXIgdGhlIHJvb3Qgb2YgdGhpcyBgTG9jYXRvckZhY3RvcnlgLlxuICAgKiBAcGFyYW0gc2VsZWN0b3IgVGhlIHNlbGVjdG9yIGZvciB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIEEgYEhhcm5lc3NMb2FkZXJgIHJvb3RlZCBhdCB0aGUgZmlyc3QgZWxlbWVudCBtYXRjaGluZyB0aGUgZ2l2ZW4gc2VsZWN0b3IuXG4gICAqIEB0aHJvd3MgSWYgbm8gbWF0Y2hpbmcgZWxlbWVudCBpcyBmb3VuZCBmb3IgdGhlIGdpdmVuIHNlbGVjdG9yLlxuICAgKi9cbiAgaGFybmVzc0xvYWRlckZvcihzZWxlY3Rvcjogc3RyaW5nKTogUHJvbWlzZTxIYXJuZXNzTG9hZGVyPjtcblxuICAvKipcbiAgICogR2V0cyBhIGBIYXJuZXNzTG9hZGVyYCBpbnN0YW5jZSBmb3IgYW4gZWxlbWVudCB1bmRlciB0aGUgcm9vdCBvZiB0aGlzIGBMb2NhdG9yRmFjdG9yeWBcbiAgICogQHBhcmFtIHNlbGVjdG9yIFRoZSBzZWxlY3RvciBmb3IgdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHJldHVybiBBIGBIYXJuZXNzTG9hZGVyYCByb290ZWQgYXQgdGhlIGZpcnN0IGVsZW1lbnQgbWF0Y2hpbmcgdGhlIGdpdmVuIHNlbGVjdG9yLCBvciBudWxsIGlmXG4gICAqICAgICBubyBtYXRjaGluZyBlbGVtZW50IGlzIGZvdW5kLlxuICAgKi9cbiAgaGFybmVzc0xvYWRlckZvck9wdGlvbmFsKHNlbGVjdG9yOiBzdHJpbmcpOiBQcm9taXNlPEhhcm5lc3NMb2FkZXIgfCBudWxsPjtcblxuICAvKipcbiAgICogR2V0cyBhIGxpc3Qgb2YgYEhhcm5lc3NMb2FkZXJgIGluc3RhbmNlcywgb25lIGZvciBlYWNoIG1hdGNoaW5nIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBzZWxlY3RvciBUaGUgc2VsZWN0b3IgZm9yIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEByZXR1cm4gQSBsaXN0IG9mIGBIYXJuZXNzTG9hZGVyYCwgb25lIHJvb3RlZCBhdCBlYWNoIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIGdpdmVuIHNlbGVjdG9yLlxuICAgKi9cbiAgaGFybmVzc0xvYWRlckZvckFsbChzZWxlY3Rvcjogc3RyaW5nKTogUHJvbWlzZTxIYXJuZXNzTG9hZGVyW10+O1xuXG4gIC8qKlxuICAgKiBGbHVzaGVzIGNoYW5nZSBkZXRlY3Rpb24gYW5kIGFzeW5jIHRhc2tzIGNhcHR1cmVkIGluIHRoZSBBbmd1bGFyIHpvbmUuXG4gICAqIEluIG1vc3QgY2FzZXMgaXQgc2hvdWxkIG5vdCBiZSBuZWNlc3NhcnkgdG8gY2FsbCB0aGlzIG1hbnVhbGx5LiBIb3dldmVyLCB0aGVyZSBtYXkgYmUgc29tZSBlZGdlXG4gICAqIGNhc2VzIHdoZXJlIGl0IGlzIG5lZWRlZCB0byBmdWxseSBmbHVzaCBhbmltYXRpb24gZXZlbnRzLlxuICAgKi9cbiAgZm9yY2VTdGFiaWxpemUoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogV2FpdHMgZm9yIGFsbCBzY2hlZHVsZWQgb3IgcnVubmluZyBhc3luYyB0YXNrcyB0byBjb21wbGV0ZS4gVGhpcyBhbGxvd3MgaGFybmVzc1xuICAgKiBhdXRob3JzIHRvIHdhaXQgZm9yIGFzeW5jIHRhc2tzIG91dHNpZGUgb2YgdGhlIEFuZ3VsYXIgem9uZS5cbiAgICovXG4gIHdhaXRGb3JUYXNrc091dHNpZGVBbmd1bGFyKCk6IFByb21pc2U8dm9pZD47XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY29tcG9uZW50IGhhcm5lc3NlcyB0aGF0IGFsbCBjb21wb25lbnQgaGFybmVzcyBhdXRob3JzIHNob3VsZCBleHRlbmQuIFRoaXMgYmFzZVxuICogY29tcG9uZW50IGhhcm5lc3MgcHJvdmlkZXMgdGhlIGJhc2ljIGFiaWxpdHkgdG8gbG9jYXRlIGVsZW1lbnQgYW5kIHN1Yi1jb21wb25lbnQgaGFybmVzcy4gSXRcbiAqIHNob3VsZCBiZSBpbmhlcml0ZWQgd2hlbiBkZWZpbmluZyB1c2VyJ3Mgb3duIGhhcm5lc3MuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnRIYXJuZXNzIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGxvY2F0b3JGYWN0b3J5OiBMb2NhdG9yRmFjdG9yeSkge31cblxuICAvKiogR2V0cyBhIGBQcm9taXNlYCBmb3IgdGhlIGBUZXN0RWxlbWVudGAgcmVwcmVzZW50aW5nIHRoZSBob3N0IGVsZW1lbnQgb2YgdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgaG9zdCgpOiBQcm9taXNlPFRlc3RFbGVtZW50PiB7XG4gICAgcmV0dXJuIHRoaXMubG9jYXRvckZhY3Rvcnkucm9vdEVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGBMb2NhdG9yRmFjdG9yeWAgZm9yIHRoZSBkb2N1bWVudCByb290IGVsZW1lbnQuIFRoaXMgZmFjdG9yeSBjYW4gYmUgdXNlZCB0byBjcmVhdGVcbiAgICogbG9jYXRvcnMgZm9yIGVsZW1lbnRzIHRoYXQgYSBjb21wb25lbnQgY3JlYXRlcyBvdXRzaWRlIG9mIGl0cyBvd24gcm9vdCBlbGVtZW50LiAoZS5nLiBieVxuICAgKiBhcHBlbmRpbmcgdG8gZG9jdW1lbnQuYm9keSkuXG4gICAqL1xuICBwcm90ZWN0ZWQgZG9jdW1lbnRSb290TG9jYXRvckZhY3RvcnkoKTogTG9jYXRvckZhY3Rvcnkge1xuICAgIHJldHVybiB0aGlzLmxvY2F0b3JGYWN0b3J5LmRvY3VtZW50Um9vdExvY2F0b3JGYWN0b3J5KCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBhc3luY2hyb25vdXMgbG9jYXRvciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGZpbmQgYSBgQ29tcG9uZW50SGFybmVzc2AgaW5zdGFuY2VcbiAgICogb3IgZWxlbWVudCB1bmRlciB0aGUgaG9zdCBlbGVtZW50IG9mIHRoaXMgYENvbXBvbmVudEhhcm5lc3NgLlxuICAgKiBAcGFyYW0gcXVlcmllcyBBIGxpc3Qgb2YgcXVlcmllcyBzcGVjaWZ5aW5nIHdoaWNoIGhhcm5lc3NlcyBhbmQgZWxlbWVudHMgdG8gc2VhcmNoIGZvcjpcbiAgICogICAtIEEgYHN0cmluZ2Agc2VhcmNoZXMgZm9yIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBDU1Mgc2VsZWN0b3Igc3BlY2lmaWVkIGJ5IHRoZSBzdHJpbmcuXG4gICAqICAgLSBBIGBDb21wb25lbnRIYXJuZXNzYCBjb25zdHJ1Y3RvciBzZWFyY2hlcyBmb3IgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlcyBtYXRjaGluZyB0aGVcbiAgICogICAgIGdpdmVuIGNsYXNzLlxuICAgKiAgIC0gQSBgSGFybmVzc1ByZWRpY2F0ZWAgc2VhcmNoZXMgZm9yIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZXMgbWF0Y2hpbmcgdGhlIGdpdmVuXG4gICAqICAgICBwcmVkaWNhdGUuXG4gICAqIEByZXR1cm4gQW4gYXN5bmNocm9ub3VzIGxvY2F0b3IgZnVuY3Rpb24gdGhhdCBzZWFyY2hlcyBmb3IgYW5kIHJldHVybnMgYSBgUHJvbWlzZWAgZm9yIHRoZVxuICAgKiAgIGZpcnN0IGVsZW1lbnQgb3IgaGFybmVzcyBtYXRjaGluZyB0aGUgZ2l2ZW4gc2VhcmNoIGNyaXRlcmlhLiBNYXRjaGVzIGFyZSBvcmRlcmVkIGZpcnN0IGJ5XG4gICAqICAgb3JkZXIgaW4gdGhlIERPTSwgYW5kIHNlY29uZCBieSBvcmRlciBpbiB0aGUgcXVlcmllcyBsaXN0LiBJZiBubyBtYXRjaGVzIGFyZSBmb3VuZCwgdGhlXG4gICAqICAgYFByb21pc2VgIHJlamVjdHMuIFRoZSB0eXBlIHRoYXQgdGhlIGBQcm9taXNlYCByZXNvbHZlcyB0byBpcyBhIHVuaW9uIG9mIGFsbCByZXN1bHQgdHlwZXMgZm9yXG4gICAqICAgZWFjaCBxdWVyeS5cbiAgICpcbiAgICogZS5nLiBHaXZlbiB0aGUgZm9sbG93aW5nIERPTTogYDxkaXYgaWQ9XCJkMVwiIC8+PGRpdiBpZD1cImQyXCIgLz5gLCBhbmQgYXNzdW1pbmdcbiAgICogYERpdkhhcm5lc3MuaG9zdFNlbGVjdG9yID09PSAnZGl2J2A6XG4gICAqIC0gYGF3YWl0IGNoLmxvY2F0b3JGb3IoRGl2SGFybmVzcywgJ2RpdicpKClgIGdldHMgYSBgRGl2SGFybmVzc2AgaW5zdGFuY2UgZm9yIGAjZDFgXG4gICAqIC0gYGF3YWl0IGNoLmxvY2F0b3JGb3IoJ2RpdicsIERpdkhhcm5lc3MpKClgIGdldHMgYSBgVGVzdEVsZW1lbnRgIGluc3RhbmNlIGZvciBgI2QxYFxuICAgKiAtIGBhd2FpdCBjaC5sb2NhdG9yRm9yKCdzcGFuJykoKWAgdGhyb3dzIGJlY2F1c2UgdGhlIGBQcm9taXNlYCByZWplY3RzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGxvY2F0b3JGb3I8VCBleHRlbmRzIChIYXJuZXNzUXVlcnk8YW55PiB8IHN0cmluZylbXT4oLi4ucXVlcmllczogVCk6XG4gICAgICBBc3luY0ZhY3RvcnlGbjxMb2NhdG9yRm5SZXN1bHQ8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdG9yRmFjdG9yeS5sb2NhdG9yRm9yKC4uLnF1ZXJpZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYXN5bmNocm9ub3VzIGxvY2F0b3IgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBmaW5kIGEgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlXG4gICAqIG9yIGVsZW1lbnQgdW5kZXIgdGhlIGhvc3QgZWxlbWVudCBvZiB0aGlzIGBDb21wb25lbnRIYXJuZXNzYC5cbiAgICogQHBhcmFtIHF1ZXJpZXMgQSBsaXN0IG9mIHF1ZXJpZXMgc3BlY2lmeWluZyB3aGljaCBoYXJuZXNzZXMgYW5kIGVsZW1lbnRzIHRvIHNlYXJjaCBmb3I6XG4gICAqICAgLSBBIGBzdHJpbmdgIHNlYXJjaGVzIGZvciBlbGVtZW50cyBtYXRjaGluZyB0aGUgQ1NTIHNlbGVjdG9yIHNwZWNpZmllZCBieSB0aGUgc3RyaW5nLlxuICAgKiAgIC0gQSBgQ29tcG9uZW50SGFybmVzc2AgY29uc3RydWN0b3Igc2VhcmNoZXMgZm9yIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZXMgbWF0Y2hpbmcgdGhlXG4gICAqICAgICBnaXZlbiBjbGFzcy5cbiAgICogICAtIEEgYEhhcm5lc3NQcmVkaWNhdGVgIHNlYXJjaGVzIGZvciBgQ29tcG9uZW50SGFybmVzc2AgaW5zdGFuY2VzIG1hdGNoaW5nIHRoZSBnaXZlblxuICAgKiAgICAgcHJlZGljYXRlLlxuICAgKiBAcmV0dXJuIEFuIGFzeW5jaHJvbm91cyBsb2NhdG9yIGZ1bmN0aW9uIHRoYXQgc2VhcmNoZXMgZm9yIGFuZCByZXR1cm5zIGEgYFByb21pc2VgIGZvciB0aGVcbiAgICogICBmaXJzdCBlbGVtZW50IG9yIGhhcm5lc3MgbWF0Y2hpbmcgdGhlIGdpdmVuIHNlYXJjaCBjcml0ZXJpYS4gTWF0Y2hlcyBhcmUgb3JkZXJlZCBmaXJzdCBieVxuICAgKiAgIG9yZGVyIGluIHRoZSBET00sIGFuZCBzZWNvbmQgYnkgb3JkZXIgaW4gdGhlIHF1ZXJpZXMgbGlzdC4gSWYgbm8gbWF0Y2hlcyBhcmUgZm91bmQsIHRoZVxuICAgKiAgIGBQcm9taXNlYCBpcyByZXNvbHZlZCB3aXRoIGBudWxsYC4gVGhlIHR5cGUgdGhhdCB0aGUgYFByb21pc2VgIHJlc29sdmVzIHRvIGlzIGEgdW5pb24gb2YgYWxsXG4gICAqICAgcmVzdWx0IHR5cGVzIGZvciBlYWNoIHF1ZXJ5IG9yIG51bGwuXG4gICAqXG4gICAqIGUuZy4gR2l2ZW4gdGhlIGZvbGxvd2luZyBET006IGA8ZGl2IGlkPVwiZDFcIiAvPjxkaXYgaWQ9XCJkMlwiIC8+YCwgYW5kIGFzc3VtaW5nXG4gICAqIGBEaXZIYXJuZXNzLmhvc3RTZWxlY3RvciA9PT0gJ2RpdidgOlxuICAgKiAtIGBhd2FpdCBjaC5sb2NhdG9yRm9yT3B0aW9uYWwoRGl2SGFybmVzcywgJ2RpdicpKClgIGdldHMgYSBgRGl2SGFybmVzc2AgaW5zdGFuY2UgZm9yIGAjZDFgXG4gICAqIC0gYGF3YWl0IGNoLmxvY2F0b3JGb3JPcHRpb25hbCgnZGl2JywgRGl2SGFybmVzcykoKWAgZ2V0cyBhIGBUZXN0RWxlbWVudGAgaW5zdGFuY2UgZm9yIGAjZDFgXG4gICAqIC0gYGF3YWl0IGNoLmxvY2F0b3JGb3JPcHRpb25hbCgnc3BhbicpKClgIGdldHMgYG51bGxgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGxvY2F0b3JGb3JPcHRpb25hbDxUIGV4dGVuZHMgKEhhcm5lc3NRdWVyeTxhbnk+IHwgc3RyaW5nKVtdPiguLi5xdWVyaWVzOiBUKTpcbiAgICAgIEFzeW5jRmFjdG9yeUZuPExvY2F0b3JGblJlc3VsdDxUPiB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdG9yRmFjdG9yeS5sb2NhdG9yRm9yT3B0aW9uYWwoLi4ucXVlcmllcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBhc3luY2hyb25vdXMgbG9jYXRvciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGZpbmQgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlc1xuICAgKiBvciBlbGVtZW50cyB1bmRlciB0aGUgaG9zdCBlbGVtZW50IG9mIHRoaXMgYENvbXBvbmVudEhhcm5lc3NgLlxuICAgKiBAcGFyYW0gcXVlcmllcyBBIGxpc3Qgb2YgcXVlcmllcyBzcGVjaWZ5aW5nIHdoaWNoIGhhcm5lc3NlcyBhbmQgZWxlbWVudHMgdG8gc2VhcmNoIGZvcjpcbiAgICogICAtIEEgYHN0cmluZ2Agc2VhcmNoZXMgZm9yIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBDU1Mgc2VsZWN0b3Igc3BlY2lmaWVkIGJ5IHRoZSBzdHJpbmcuXG4gICAqICAgLSBBIGBDb21wb25lbnRIYXJuZXNzYCBjb25zdHJ1Y3RvciBzZWFyY2hlcyBmb3IgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlcyBtYXRjaGluZyB0aGVcbiAgICogICAgIGdpdmVuIGNsYXNzLlxuICAgKiAgIC0gQSBgSGFybmVzc1ByZWRpY2F0ZWAgc2VhcmNoZXMgZm9yIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZXMgbWF0Y2hpbmcgdGhlIGdpdmVuXG4gICAqICAgICBwcmVkaWNhdGUuXG4gICAqIEByZXR1cm4gQW4gYXN5bmNocm9ub3VzIGxvY2F0b3IgZnVuY3Rpb24gdGhhdCBzZWFyY2hlcyBmb3IgYW5kIHJldHVybnMgYSBgUHJvbWlzZWAgZm9yIGFsbFxuICAgKiAgIGVsZW1lbnRzIGFuZCBoYXJuZXNzZXMgbWF0Y2hpbmcgdGhlIGdpdmVuIHNlYXJjaCBjcml0ZXJpYS4gTWF0Y2hlcyBhcmUgb3JkZXJlZCBmaXJzdCBieVxuICAgKiAgIG9yZGVyIGluIHRoZSBET00sIGFuZCBzZWNvbmQgYnkgb3JkZXIgaW4gdGhlIHF1ZXJpZXMgbGlzdC4gSWYgYW4gZWxlbWVudCBtYXRjaGVzIG1vcmUgdGhhblxuICAgKiAgIG9uZSBgQ29tcG9uZW50SGFybmVzc2AgY2xhc3MsIHRoZSBsb2NhdG9yIGdldHMgYW4gaW5zdGFuY2Ugb2YgZWFjaCBmb3IgdGhlIHNhbWUgZWxlbWVudC4gSWZcbiAgICogICBhbiBlbGVtZW50IG1hdGNoZXMgbXVsdGlwbGUgYHN0cmluZ2Agc2VsZWN0b3JzLCBvbmx5IG9uZSBgVGVzdEVsZW1lbnRgIGluc3RhbmNlIGlzIHJldHVybmVkXG4gICAqICAgZm9yIHRoYXQgZWxlbWVudC4gVGhlIHR5cGUgdGhhdCB0aGUgYFByb21pc2VgIHJlc29sdmVzIHRvIGlzIGFuIGFycmF5IHdoZXJlIGVhY2ggZWxlbWVudCBpc1xuICAgKiAgIHRoZSB1bmlvbiBvZiBhbGwgcmVzdWx0IHR5cGVzIGZvciBlYWNoIHF1ZXJ5LlxuICAgKlxuICAgKiBlLmcuIEdpdmVuIHRoZSBmb2xsb3dpbmcgRE9NOiBgPGRpdiBpZD1cImQxXCIgLz48ZGl2IGlkPVwiZDJcIiAvPmAsIGFuZCBhc3N1bWluZ1xuICAgKiBgRGl2SGFybmVzcy5ob3N0U2VsZWN0b3IgPT09ICdkaXYnYCBhbmQgYElkSXNEMUhhcm5lc3MuaG9zdFNlbGVjdG9yID09PSAnI2QxJ2A6XG4gICAqIC0gYGF3YWl0IGNoLmxvY2F0b3JGb3JBbGwoRGl2SGFybmVzcywgJ2RpdicpKClgIGdldHMgYFtcbiAgICogICAgIERpdkhhcm5lc3MsIC8vIGZvciAjZDFcbiAgICogICAgIFRlc3RFbGVtZW50LCAvLyBmb3IgI2QxXG4gICAqICAgICBEaXZIYXJuZXNzLCAvLyBmb3IgI2QyXG4gICAqICAgICBUZXN0RWxlbWVudCAvLyBmb3IgI2QyXG4gICAqICAgXWBcbiAgICogLSBgYXdhaXQgY2gubG9jYXRvckZvckFsbCgnZGl2JywgJyNkMScpKClgIGdldHMgYFtcbiAgICogICAgIFRlc3RFbGVtZW50LCAvLyBmb3IgI2QxXG4gICAqICAgICBUZXN0RWxlbWVudCAvLyBmb3IgI2QyXG4gICAqICAgXWBcbiAgICogLSBgYXdhaXQgY2gubG9jYXRvckZvckFsbChEaXZIYXJuZXNzLCBJZElzRDFIYXJuZXNzKSgpYCBnZXRzIGBbXG4gICAqICAgICBEaXZIYXJuZXNzLCAvLyBmb3IgI2QxXG4gICAqICAgICBJZElzRDFIYXJuZXNzLCAvLyBmb3IgI2QxXG4gICAqICAgICBEaXZIYXJuZXNzIC8vIGZvciAjZDJcbiAgICogICBdYFxuICAgKiAtIGBhd2FpdCBjaC5sb2NhdG9yRm9yQWxsKCdzcGFuJykoKWAgZ2V0cyBgW11gLlxuICAgKi9cbiAgcHJvdGVjdGVkIGxvY2F0b3JGb3JBbGw8VCBleHRlbmRzIChIYXJuZXNzUXVlcnk8YW55PiB8IHN0cmluZylbXT4oLi4ucXVlcmllczogVCk6XG4gICAgICBBc3luY0ZhY3RvcnlGbjxMb2NhdG9yRm5SZXN1bHQ8VD5bXT4ge1xuICAgIHJldHVybiB0aGlzLmxvY2F0b3JGYWN0b3J5LmxvY2F0b3JGb3JBbGwoLi4ucXVlcmllcyk7XG4gIH1cblxuICAvKipcbiAgICogRmx1c2hlcyBjaGFuZ2UgZGV0ZWN0aW9uIGFuZCBhc3luYyB0YXNrcyBpbiB0aGUgQW5ndWxhciB6b25lLlxuICAgKiBJbiBtb3N0IGNhc2VzIGl0IHNob3VsZCBub3QgYmUgbmVjZXNzYXJ5IHRvIGNhbGwgdGhpcyBtYW51YWxseS4gSG93ZXZlciwgdGhlcmUgbWF5IGJlIHNvbWUgZWRnZVxuICAgKiBjYXNlcyB3aGVyZSBpdCBpcyBuZWVkZWQgdG8gZnVsbHkgZmx1c2ggYW5pbWF0aW9uIGV2ZW50cy5cbiAgICovXG4gIHByb3RlY3RlZCBhc3luYyBmb3JjZVN0YWJpbGl6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdG9yRmFjdG9yeS5mb3JjZVN0YWJpbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhaXRzIGZvciBhbGwgc2NoZWR1bGVkIG9yIHJ1bm5pbmcgYXN5bmMgdGFza3MgdG8gY29tcGxldGUuIFRoaXMgYWxsb3dzIGhhcm5lc3NcbiAgICogYXV0aG9ycyB0byB3YWl0IGZvciBhc3luYyB0YXNrcyBvdXRzaWRlIG9mIHRoZSBBbmd1bGFyIHpvbmUuXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgd2FpdEZvclRhc2tzT3V0c2lkZUFuZ3VsYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYXRvckZhY3Rvcnkud2FpdEZvclRhc2tzT3V0c2lkZUFuZ3VsYXIoKTtcbiAgfVxufVxuXG4vKiogQ29uc3RydWN0b3IgZm9yIGEgQ29tcG9uZW50SGFybmVzcyBzdWJjbGFzcy4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yPFQgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzPiB7XG4gIG5ldyhsb2NhdG9yRmFjdG9yeTogTG9jYXRvckZhY3RvcnkpOiBUO1xuXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50SGFybmVzc2Agc3ViY2xhc3NlcyBtdXN0IHNwZWNpZnkgYSBzdGF0aWMgYGhvc3RTZWxlY3RvcmAgcHJvcGVydHkgdGhhdCBpcyB1c2VkIHRvXG4gICAqIGZpbmQgdGhlIGhvc3QgZWxlbWVudCBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgY29tcG9uZW50LiBUaGlzIHByb3BlcnR5IHNob3VsZCBtYXRjaCB0aGUgc2VsZWN0b3JcbiAgICogZm9yIHRoZSBBbmd1bGFyIGNvbXBvbmVudC5cbiAgICovXG4gIGhvc3RTZWxlY3Rvcjogc3RyaW5nO1xufVxuXG4vKiogQSBzZXQgb2YgY3JpdGVyaWEgdGhhdCBjYW4gYmUgdXNlZCB0byBmaWx0ZXIgYSBsaXN0IG9mIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZXMuICovXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VIYXJuZXNzRmlsdGVycyB7XG4gIC8qKiBPbmx5IGZpbmQgaW5zdGFuY2VzIHdob3NlIGhvc3QgZWxlbWVudCBtYXRjaGVzIHRoZSBnaXZlbiBzZWxlY3Rvci4gKi9cbiAgc2VsZWN0b3I/OiBzdHJpbmc7XG4gIC8qKiBPbmx5IGZpbmQgaW5zdGFuY2VzIHRoYXQgYXJlIG5lc3RlZCB1bmRlciBhbiBlbGVtZW50IHdpdGggdGhlIGdpdmVuIHNlbGVjdG9yLiAqL1xuICBhbmNlc3Rvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIGNsYXNzIHVzZWQgdG8gYXNzb2NpYXRlIGEgQ29tcG9uZW50SGFybmVzcyBjbGFzcyB3aXRoIHByZWRpY2F0ZXMgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAqIGZpbHRlciBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzLlxuICovXG5leHBvcnQgY2xhc3MgSGFybmVzc1ByZWRpY2F0ZTxUIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcz4ge1xuICBwcml2YXRlIF9wcmVkaWNhdGVzOiBBc3luY1ByZWRpY2F0ZTxUPltdID0gW107XG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBfYW5jZXN0b3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaGFybmVzc1R5cGU6IENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcjxUPiwgb3B0aW9uczogQmFzZUhhcm5lc3NGaWx0ZXJzKSB7XG4gICAgdGhpcy5fYWRkQmFzZU9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBzcGVjaWZpZWQgbnVsbGFibGUgc3RyaW5nIHZhbHVlIG1hdGNoZXMgdGhlIGdpdmVuIHBhdHRlcm4uXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVsbGFibGUgc3RyaW5nIHZhbHVlIHRvIGNoZWNrLCBvciBhIFByb21pc2UgcmVzb2x2aW5nIHRvIHRoZVxuICAgKiAgIG51bGxhYmxlIHN0cmluZyB2YWx1ZS5cbiAgICogQHBhcmFtIHBhdHRlcm4gVGhlIHBhdHRlcm4gdGhlIHZhbHVlIGlzIGV4cGVjdGVkIHRvIG1hdGNoLiBJZiBgcGF0dGVybmAgaXMgYSBzdHJpbmcsXG4gICAqICAgYHZhbHVlYCBpcyBleHBlY3RlZCB0byBtYXRjaCBleGFjdGx5LiBJZiBgcGF0dGVybmAgaXMgYSByZWdleCwgYSBwYXJ0aWFsIG1hdGNoIGlzXG4gICAqICAgYWxsb3dlZC4gSWYgYHBhdHRlcm5gIGlzIGBudWxsYCwgdGhlIHZhbHVlIGlzIGV4cGVjdGVkIHRvIGJlIGBudWxsYC5cbiAgICogQHJldHVybiBXaGV0aGVyIHRoZSB2YWx1ZSBtYXRjaGVzIHRoZSBwYXR0ZXJuLlxuICAgKi9cbiAgc3RhdGljIGFzeW5jIHN0cmluZ01hdGNoZXModmFsdWU6IHN0cmluZyB8IG51bGwgfCBQcm9taXNlPHN0cmluZyB8IG51bGw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBzdHJpbmcgfCBSZWdFeHAgfCBudWxsKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdmFsdWUgPSBhd2FpdCB2YWx1ZTtcbiAgICBpZiAocGF0dGVybiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJyA/IHZhbHVlID09PSBwYXR0ZXJuIDogcGF0dGVybi50ZXN0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcHJlZGljYXRlIGZ1bmN0aW9uIHRvIGJlIHJ1biBhZ2FpbnN0IGNhbmRpZGF0ZSBoYXJuZXNzZXMuXG4gICAqIEBwYXJhbSBkZXNjcmlwdGlvbiBBIGRlc2NyaXB0aW9uIG9mIHRoaXMgcHJlZGljYXRlIHRoYXQgbWF5IGJlIHVzZWQgaW4gZXJyb3IgbWVzc2FnZXMuXG4gICAqIEBwYXJhbSBwcmVkaWNhdGUgQW4gYXN5bmMgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHRoaXMgKGZvciBtZXRob2QgY2hhaW5pbmcpLlxuICAgKi9cbiAgYWRkKGRlc2NyaXB0aW9uOiBzdHJpbmcsIHByZWRpY2F0ZTogQXN5bmNQcmVkaWNhdGU8VD4pIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbnMucHVzaChkZXNjcmlwdGlvbik7XG4gICAgdGhpcy5fcHJlZGljYXRlcy5wdXNoKHByZWRpY2F0ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRlcGVuZHMgb24gYW4gb3B0aW9uIHZhbHVlIHRvIGJlIHJ1biBhZ2FpbnN0IGNhbmRpZGF0ZVxuICAgKiBoYXJuZXNzZXMuIElmIHRoZSBvcHRpb24gdmFsdWUgaXMgdW5kZWZpbmVkLCB0aGUgcHJlZGljYXRlIHdpbGwgYmUgaWdub3JlZC5cbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIG9wdGlvbiAobWF5IGJlIHVzZWQgaW4gZXJyb3IgbWVzc2FnZXMpLlxuICAgKiBAcGFyYW0gb3B0aW9uIFRoZSBvcHRpb24gdmFsdWUuXG4gICAqIEBwYXJhbSBwcmVkaWNhdGUgVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB0byBydW4gaWYgdGhlIG9wdGlvbiB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkLlxuICAgKiBAcmV0dXJuIHRoaXMgKGZvciBtZXRob2QgY2hhaW5pbmcpLlxuICAgKi9cbiAgYWRkT3B0aW9uPE8+KG5hbWU6IHN0cmluZywgb3B0aW9uOiBPIHwgdW5kZWZpbmVkLCBwcmVkaWNhdGU6IEFzeW5jT3B0aW9uUHJlZGljYXRlPFQsIE8+KSB7XG4gICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmFkZChgJHtuYW1lfSA9ICR7X3ZhbHVlQXNTdHJpbmcob3B0aW9uKX1gLCBpdGVtID0+IHByZWRpY2F0ZShpdGVtLCBvcHRpb24pKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVycyBhIGxpc3Qgb2YgaGFybmVzc2VzIG9uIHRoaXMgcHJlZGljYXRlLlxuICAgKiBAcGFyYW0gaGFybmVzc2VzIFRoZSBsaXN0IG9mIGhhcm5lc3NlcyB0byBmaWx0ZXIuXG4gICAqIEByZXR1cm4gQSBsaXN0IG9mIGhhcm5lc3NlcyB0aGF0IHNhdGlzZnkgdGhpcyBwcmVkaWNhdGUuXG4gICAqL1xuICBhc3luYyBmaWx0ZXIoaGFybmVzc2VzOiBUW10pOiBQcm9taXNlPFRbXT4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChoYXJuZXNzZXMubWFwKGggPT4gdGhpcy5ldmFsdWF0ZShoKSkpO1xuICAgIHJldHVybiBoYXJuZXNzZXMuZmlsdGVyKChfLCBpKSA9PiByZXN1bHRzW2ldKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gaGFybmVzcyBzYXRpc2ZpZXMgdGhpcyBwcmVkaWNhdGUuXG4gICAqIEBwYXJhbSBoYXJuZXNzIFRoZSBoYXJuZXNzIHRvIGNoZWNrXG4gICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgaGFybmVzcyBzYXRpc2ZpZXMgdGhpcyBwcmVkaWNhdGUsXG4gICAqICAgYW5kIHJlc29sdmVzIHRvIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGFzeW5jIGV2YWx1YXRlKGhhcm5lc3M6IFQpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5fcHJlZGljYXRlcy5tYXAocCA9PiBwKGhhcm5lc3MpKSk7XG4gICAgcmV0dXJuIHJlc3VsdHMucmVkdWNlKChjb21iaW5lZCwgY3VycmVudCkgPT4gY29tYmluZWQgJiYgY3VycmVudCwgdHJ1ZSk7XG4gIH1cblxuICAvKiogR2V0cyBhIGRlc2NyaXB0aW9uIG9mIHRoaXMgcHJlZGljYXRlIGZvciB1c2UgaW4gZXJyb3IgbWVzc2FnZXMuICovXG4gIGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbnMuam9pbignLCAnKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBzZWxlY3RvciB1c2VkIHRvIGZpbmQgY2FuZGlkYXRlIGVsZW1lbnRzLiAqL1xuICBnZXRTZWxlY3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYW5jZXN0b3Iuc3BsaXQoJywnKVxuICAgICAgICAubWFwKHBhcnQgPT4gYCR7cGFydC50cmltKCl9ICR7dGhpcy5oYXJuZXNzVHlwZS5ob3N0U2VsZWN0b3J9YC50cmltKCkpXG4gICAgICAgIC5qb2luKCcsJyk7XG4gIH1cblxuICAvKiogQWRkcyBiYXNlIG9wdGlvbnMgY29tbW9uIHRvIGFsbCBoYXJuZXNzIHR5cGVzLiAqL1xuICBwcml2YXRlIF9hZGRCYXNlT3B0aW9ucyhvcHRpb25zOiBCYXNlSGFybmVzc0ZpbHRlcnMpIHtcbiAgICB0aGlzLl9hbmNlc3RvciA9IG9wdGlvbnMuYW5jZXN0b3IgfHwgJyc7XG4gICAgaWYgKHRoaXMuX2FuY2VzdG9yKSB7XG4gICAgICB0aGlzLl9kZXNjcmlwdGlvbnMucHVzaChgaGFzIGFuY2VzdG9yIG1hdGNoaW5nIHNlbGVjdG9yIFwiJHt0aGlzLl9hbmNlc3Rvcn1cImApO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3I7XG4gICAgaWYgKHNlbGVjdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYWRkKGBob3N0IG1hdGNoZXMgc2VsZWN0b3IgXCIke3NlbGVjdG9yfVwiYCwgYXN5bmMgaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgaXRlbS5ob3N0KCkpLm1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIFJlcHJlc2VudCBhIHZhbHVlIGFzIGEgc3RyaW5nIGZvciB0aGUgcHVycG9zZSBvZiBsb2dnaW5nLiAqL1xuZnVuY3Rpb24gX3ZhbHVlQXNTdHJpbmcodmFsdWU6IHVua25vd24pIHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgLy8gYEpTT04uc3RyaW5naWZ5YCBkb2Vzbid0IGhhbmRsZSBSZWdFeHAgcHJvcGVybHksIHNvIHdlIG5lZWQgYSBjdXN0b20gcmVwbGFjZXIuXG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCAoXywgdikgPT4ge1xuICAgICAgaWYgKHYgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuIGAvJHt2LnRvU3RyaW5nKCl9L2A7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyB2LnJlcGxhY2UoJy9cXC8vZycsICdcXFxcLycpIDogdjtcbiAgICB9KS5yZXBsYWNlKC9cIlxcL1xcLy9nLCAnXFxcXC8nKS5yZXBsYWNlKC9cXC9cXC9cIi9nLCAnXFxcXC8nKS5yZXBsYWNlKC9cXFxcXFwvL2csICcvJyk7XG4gIH0gY2F0Y2gge1xuICAgIC8vIGBKU09OLnN0cmluZ2lmeWAgd2lsbCB0aHJvdyBpZiB0aGUgb2JqZWN0IGlzIGN5Y2xpY2FsLFxuICAgIC8vIGluIHRoaXMgY2FzZSB0aGUgYmVzdCB3ZSBjYW4gZG8gaXMgcmVwb3J0IHRoZSB2YWx1ZSBhcyBgey4uLn1gLlxuICAgIHJldHVybiAney4uLn0nO1xuICB9XG59XG4iXX0=