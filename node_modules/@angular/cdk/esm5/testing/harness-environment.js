/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __awaiter, __generator, __read, __spread, __values } from "tslib";
import { ComponentHarness, HarnessPredicate, } from './component-harness';
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
export { HarnessEnvironment };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFybmVzcy1lbnZpcm9ubWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGVzdGluZy9oYXJuZXNzLWVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBRUwsZ0JBQWdCLEVBR2hCLGdCQUFnQixHQUlqQixNQUFNLHFCQUFxQixDQUFDO0FBcUI3Qjs7Ozs7R0FLRztBQUNIO0lBSUUsNEJBQWdDLGNBQWlCO1FBQWpCLG1CQUFjLEdBQWQsY0FBYyxDQUFHO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx5REFBeUQ7SUFDekQsdURBQTBCLEdBQTFCO1FBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHlEQUF5RDtJQUN6RCx1Q0FBVSxHQUFWO1FBQUEsaUJBS0M7UUFMb0QsaUJBQWE7YUFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO1lBQWIsNEJBQWE7O1FBRWhFLE9BQU8sY0FBTSxPQUFBLGtCQUFrQixDQUMzQixLQUFJLENBQUMsK0JBQStCLENBQUMsT0FBTyxDQUFDLEVBQzdDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBRnBDLENBRW9DLENBQUM7SUFDcEQsQ0FBQztJQUVELHlEQUF5RDtJQUN6RCwrQ0FBa0IsR0FBbEI7UUFBQSxpQkFHQztRQUg0RCxpQkFBYTthQUFiLFVBQWEsRUFBYixxQkFBYSxFQUFiLElBQWE7WUFBYiw0QkFBYTs7UUFFeEUsT0FBTzs7d0JBQWEscUJBQU0sSUFBSSxDQUFDLCtCQUErQixDQUFDLE9BQU8sQ0FBQyxFQUFBO3dCQUFwRCxzQkFBQSxDQUFDLFNBQW1ELENBQUMsQ0FBQyxD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TSxnQkFBZ0IsR0FDbEIsS0FBSyxZQUFZLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLElBQUEsaUNBQW1ELEVBQWxELGNBQUksRUFBRSw4QkFBNEMsQ0FBQztJQUMxRCxJQUFNLFdBQVcsR0FBTSxJQUFJLGdEQUEwQyxZQUFZLE9BQUcsQ0FBQztJQUNyRixJQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN0RCxPQUFPLFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9CLGtDQUFnQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDaEYsQ0FBQztBQUVELDJEQUEyRDtBQUMzRCxTQUFTLGtDQUFrQyxDQUFDLFFBQWdCO0lBQzFELE9BQU8sa0RBQStDLFFBQVEsT0FBRyxDQUFDO0FBQ3BFLENBQUM7QUFFRCw2REFBNkQ7QUFDN0QsU0FBUyxvQ0FBb0MsQ0FBQyxRQUFnQjtJQUM1RCxPQUFPLG9EQUFpRCxRQUFRLE9BQUcsQ0FBQztBQUN0RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIEFzeW5jRmFjdG9yeUZuLFxuICBDb21wb25lbnRIYXJuZXNzLFxuICBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3IsXG4gIEhhcm5lc3NMb2FkZXIsXG4gIEhhcm5lc3NQcmVkaWNhdGUsXG4gIEhhcm5lc3NRdWVyeSxcbiAgTG9jYXRvckZhY3RvcnksXG4gIExvY2F0b3JGblJlc3VsdCxcbn0gZnJvbSAnLi9jb21wb25lbnQtaGFybmVzcyc7XG5pbXBvcnQge1Rlc3RFbGVtZW50fSBmcm9tICcuL3Rlc3QtZWxlbWVudCc7XG5cbi8qKiBQYXJzZWQgZm9ybSBvZiB0aGUgcXVlcmllcyBwYXNzZWQgdG8gdGhlIGBsb2NhdG9yRm9yKmAgbWV0aG9kcy4gKi9cbnR5cGUgUGFyc2VkUXVlcmllczxUIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcz4gPSB7XG4gIC8qKiBUaGUgZnVsbCBsaXN0IG9mIHF1ZXJpZXMsIGluIHRoZWlyIG9yaWdpbmFsIG9yZGVyLiAqL1xuICBhbGxRdWVyaWVzOiAoc3RyaW5nIHwgSGFybmVzc1ByZWRpY2F0ZTxUPilbXSxcbiAgLyoqXG4gICAqIEEgZmlsdGVyZWQgdmlldyBvZiBgYWxsUXVlcmllc2AgY29udGFpbmluZyBvbmx5IHRoZSBxdWVyaWVzIHRoYXQgYXJlIGxvb2tpbmcgZm9yIGFcbiAgICogYENvbXBvbmVudEhhcm5lc3NgXG4gICAqL1xuICBoYXJuZXNzUXVlcmllczogSGFybmVzc1ByZWRpY2F0ZTxUPltdLFxuICAvKipcbiAgICogQSBmaWx0ZXJlZCB2aWV3IG9mIGBhbGxRdWVyaWVzYCBjb250YWluaW5nIG9ubHkgdGhlIHF1ZXJpZXMgdGhhdCBhcmUgbG9va2luZyBmb3IgYVxuICAgKiBgVGVzdEVsZW1lbnRgXG4gICAqL1xuICBlbGVtZW50UXVlcmllczogc3RyaW5nW10sXG4gIC8qKiBUaGUgc2V0IG9mIGFsbCBgQ29tcG9uZW50SGFybmVzc2Agc3ViY2xhc3NlcyByZXByZXNlbnRlZCBpbiB0aGUgb3JpZ2luYWwgcXVlcnkgbGlzdC4gKi9cbiAgaGFybmVzc1R5cGVzOiBTZXQ8Q29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yPFQ+Pixcbn07XG5cbi8qKlxuICogQmFzZSBoYXJuZXNzIGVudmlyb25tZW50IGNsYXNzIHRoYXQgY2FuIGJlIGV4dGVuZGVkIHRvIGFsbG93IGBDb21wb25lbnRIYXJuZXNzYGVzIHRvIGJlIHVzZWQgaW5cbiAqIGRpZmZlcmVudCB0ZXN0IGVudmlyb25tZW50cyAoZS5nLiB0ZXN0YmVkLCBwcm90cmFjdG9yLCBldGMuKS4gVGhpcyBjbGFzcyBpbXBsZW1lbnRzIHRoZVxuICogZnVuY3Rpb25hbGl0eSBvZiBib3RoIGEgYEhhcm5lc3NMb2FkZXJgIGFuZCBgTG9jYXRvckZhY3RvcnlgLiBUaGlzIGNsYXNzIGlzIGdlbmVyaWMgb24gdGhlIHJhd1xuICogZWxlbWVudCB0eXBlLCBgRWAsIHVzZWQgYnkgdGhlIHBhcnRpY3VsYXIgdGVzdCBlbnZpcm9ubWVudC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhhcm5lc3NFbnZpcm9ubWVudDxFPiBpbXBsZW1lbnRzIEhhcm5lc3NMb2FkZXIsIExvY2F0b3JGYWN0b3J5IHtcbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiB0aGUgYExvY2F0b3JGYWN0b3J5YCBpbnRlcmZhY2UuXG4gIHJvb3RFbGVtZW50OiBUZXN0RWxlbWVudDtcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHJhd1Jvb3RFbGVtZW50OiBFKSB7XG4gICAgdGhpcy5yb290RWxlbWVudCA9IHRoaXMuY3JlYXRlVGVzdEVsZW1lbnQocmF3Um9vdEVsZW1lbnQpO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiB0aGUgYExvY2F0b3JGYWN0b3J5YCBpbnRlcmZhY2UuXG4gIGRvY3VtZW50Um9vdExvY2F0b3JGYWN0b3J5KCk6IExvY2F0b3JGYWN0b3J5IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVFbnZpcm9ubWVudCh0aGlzLmdldERvY3VtZW50Um9vdCgpKTtcbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgdGhlIGBMb2NhdG9yRmFjdG9yeWAgaW50ZXJmYWNlLlxuICBsb2NhdG9yRm9yPFQgZXh0ZW5kcyAoSGFybmVzc1F1ZXJ5PGFueT4gfCBzdHJpbmcpW10+KC4uLnF1ZXJpZXM6IFQpOlxuICAgICAgQXN5bmNGYWN0b3J5Rm48TG9jYXRvckZuUmVzdWx0PFQ+PiB7XG4gICAgcmV0dXJuICgpID0+IF9hc3NlcnRSZXN1bHRGb3VuZChcbiAgICAgICAgdGhpcy5fZ2V0QWxsSGFybmVzc2VzQW5kVGVzdEVsZW1lbnRzKHF1ZXJpZXMpLFxuICAgICAgICBfZ2V0RGVzY3JpcHRpb25Gb3JMb2NhdG9yRm9yUXVlcmllcyhxdWVyaWVzKSk7XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIHRoZSBgTG9jYXRvckZhY3RvcnlgIGludGVyZmFjZS5cbiAgbG9jYXRvckZvck9wdGlvbmFsPFQgZXh0ZW5kcyAoSGFybmVzc1F1ZXJ5PGFueT4gfCBzdHJpbmcpW10+KC4uLnF1ZXJpZXM6IFQpOlxuICAgICAgQXN5bmNGYWN0b3J5Rm48TG9jYXRvckZuUmVzdWx0PFQ+IHwgbnVsbD4ge1xuICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgdGhpcy5fZ2V0QWxsSGFybmVzc2VzQW5kVGVzdEVsZW1lbnRzKHF1ZXJpZXMpKVswXSB8fCBudWxsO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiB0aGUgYExvY2F0b3JGYWN0b3J5YCBpbnRlcmZhY2UuXG4gIGxvY2F0b3JGb3JBbGw8VCBleHRlbmRzIChIYXJuZXNzUXVlcnk8YW55PiB8IHN0cmluZylbXT4oLi4ucXVlcmllczogVCk6XG4gICAgICBBc3luY0ZhY3RvcnlGbjxMb2NhdG9yRm5SZXN1bHQ8VD5bXT4ge1xuICAgIHJldHVybiAoKSA9PiB0aGlzLl9nZXRBbGxIYXJuZXNzZXNBbmRUZXN0RWxlbWVudHMocXVlcmllcyk7XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIHRoZSBgTG9jYXRvckZhY3RvcnlgIGludGVyZmFjZS5cbiAgYXN5bmMgaGFybmVzc0xvYWRlckZvcihzZWxlY3Rvcjogc3RyaW5nKTogUHJvbWlzZTxIYXJuZXNzTG9hZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRW52aXJvbm1lbnQoYXdhaXQgX2Fzc2VydFJlc3VsdEZvdW5kKHRoaXMuZ2V0QWxsUmF3RWxlbWVudHMoc2VsZWN0b3IpLFxuICAgICAgICBbX2dldERlc2NyaXB0aW9uRm9ySGFybmVzc0xvYWRlclF1ZXJ5KHNlbGVjdG9yKV0pKTtcbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgdGhlIGBMb2NhdG9yRmFjdG9yeWAgaW50ZXJmYWNlLlxuICBhc3luYyBoYXJuZXNzTG9hZGVyRm9yT3B0aW9uYWwoc2VsZWN0b3I6IHN0cmluZyk6IFByb21pc2U8SGFybmVzc0xvYWRlciB8IG51bGw+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGF3YWl0IHRoaXMuZ2V0QWxsUmF3RWxlbWVudHMoc2VsZWN0b3IpO1xuICAgIHJldHVybiBlbGVtZW50c1swXSA/IHRoaXMuY3JlYXRlRW52aXJvbm1lbnQoZWxlbWVudHNbMF0pIDogbnVsbDtcbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgdGhlIGBMb2NhdG9yRmFjdG9yeWAgaW50ZXJmYWNlLlxuICBhc3luYyBoYXJuZXNzTG9hZGVyRm9yQWxsKHNlbGVjdG9yOiBzdHJpbmcpOiBQcm9taXNlPEhhcm5lc3NMb2FkZXJbXT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gYXdhaXQgdGhpcy5nZXRBbGxSYXdFbGVtZW50cyhzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGVsZW1lbnRzLm1hcChlbGVtZW50ID0+IHRoaXMuY3JlYXRlRW52aXJvbm1lbnQoZWxlbWVudCkpO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiB0aGUgYEhhcm5lc3NMb2FkZXJgIGludGVyZmFjZS5cbiAgZ2V0SGFybmVzczxUIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcz4ocXVlcnk6IEhhcm5lc3NRdWVyeTxUPik6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiB0aGlzLmxvY2F0b3JGb3IocXVlcnkpKCk7XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIHRoZSBgSGFybmVzc0xvYWRlcmAgaW50ZXJmYWNlLlxuICBnZXRBbGxIYXJuZXNzZXM8VCBleHRlbmRzIENvbXBvbmVudEhhcm5lc3M+KHF1ZXJ5OiBIYXJuZXNzUXVlcnk8VD4pOiBQcm9taXNlPFRbXT4ge1xuICAgIHJldHVybiB0aGlzLmxvY2F0b3JGb3JBbGwocXVlcnkpKCk7XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIHRoZSBgSGFybmVzc0xvYWRlcmAgaW50ZXJmYWNlLlxuICBhc3luYyBnZXRDaGlsZExvYWRlcihzZWxlY3Rvcjogc3RyaW5nKTogUHJvbWlzZTxIYXJuZXNzTG9hZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRW52aXJvbm1lbnQoYXdhaXQgX2Fzc2VydFJlc3VsdEZvdW5kKHRoaXMuZ2V0QWxsUmF3RWxlbWVudHMoc2VsZWN0b3IpLFxuICAgICAgICBbX2dldERlc2NyaXB0aW9uRm9ySGFybmVzc0xvYWRlclF1ZXJ5KHNlbGVjdG9yKV0pKTtcbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgdGhlIGBIYXJuZXNzTG9hZGVyYCBpbnRlcmZhY2UuXG4gIGFzeW5jIGdldEFsbENoaWxkTG9hZGVycyhzZWxlY3Rvcjogc3RyaW5nKTogUHJvbWlzZTxIYXJuZXNzTG9hZGVyW10+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuZ2V0QWxsUmF3RWxlbWVudHMoc2VsZWN0b3IpKS5tYXAoZSA9PiB0aGlzLmNyZWF0ZUVudmlyb25tZW50KGUpKTtcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgYENvbXBvbmVudEhhcm5lc3NgIGZvciB0aGUgZ2l2ZW4gaGFybmVzcyB0eXBlIHdpdGggdGhlIGdpdmVuIHJhdyBob3N0IGVsZW1lbnQuICovXG4gIHByb3RlY3RlZCBjcmVhdGVDb21wb25lbnRIYXJuZXNzPFQgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzPihcbiAgICAgIGhhcm5lc3NUeXBlOiBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3I8VD4sIGVsZW1lbnQ6IEUpOiBUIHtcbiAgICByZXR1cm4gbmV3IGhhcm5lc3NUeXBlKHRoaXMuY3JlYXRlRW52aXJvbm1lbnQoZWxlbWVudCkpO1xuICB9XG5cbiAgLy8gUGFydCBvZiBMb2NhdG9yRmFjdG9yeSBpbnRlcmZhY2UsIHN1YmNsYXNzZXMgd2lsbCBpbXBsZW1lbnQuXG4gIGFic3RyYWN0IGZvcmNlU3RhYmlsaXplKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLy8gUGFydCBvZiBMb2NhdG9yRmFjdG9yeSBpbnRlcmZhY2UsIHN1YmNsYXNzZXMgd2lsbCBpbXBsZW1lbnQuXG4gIGFic3RyYWN0IHdhaXRGb3JUYXNrc091dHNpZGVBbmd1bGFyKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqIEdldHMgdGhlIHJvb3QgZWxlbWVudCBmb3IgdGhlIGRvY3VtZW50LiAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0RG9jdW1lbnRSb290KCk6IEU7XG5cbiAgLyoqIENyZWF0ZXMgYSBgVGVzdEVsZW1lbnRgIGZyb20gYSByYXcgZWxlbWVudC4gKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZVRlc3RFbGVtZW50KGVsZW1lbnQ6IEUpOiBUZXN0RWxlbWVudDtcblxuICAvKiogQ3JlYXRlcyBhIGBIYXJuZXNzTG9hZGVyYCByb290ZWQgYXQgdGhlIGdpdmVuIHJhdyBlbGVtZW50LiAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlRW52aXJvbm1lbnQoZWxlbWVudDogRSk6IEhhcm5lc3NFbnZpcm9ubWVudDxFPjtcblxuICAvKipcbiAgICogR2V0cyBhIGxpc3Qgb2YgYWxsIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBnaXZlbiBzZWxlY3RvciB1bmRlciB0aGlzIGVudmlyb25tZW50J3Mgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEFsbFJhd0VsZW1lbnRzKHNlbGVjdG9yOiBzdHJpbmcpOiBQcm9taXNlPEVbXT47XG5cbiAgLyoqXG4gICAqIE1hdGNoZXMgdGhlIGdpdmVuIHJhdyBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBsaXN0IG9mIGVsZW1lbnQgYW5kIGhhcm5lc3MgcXVlcmllcyB0byBwcm9kdWNlIGFcbiAgICogbGlzdCBvZiBtYXRjaGVkIGhhcm5lc3NlcyBhbmQgdGVzdCBlbGVtZW50cy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX2dldEFsbEhhcm5lc3Nlc0FuZFRlc3RFbGVtZW50czxUIGV4dGVuZHMgKEhhcm5lc3NRdWVyeTxhbnk+IHwgc3RyaW5nKVtdPihcbiAgICAgIHF1ZXJpZXM6IFQpOiBQcm9taXNlPExvY2F0b3JGblJlc3VsdDxUPltdPiB7XG4gICAgY29uc3Qge2FsbFF1ZXJpZXMsIGhhcm5lc3NRdWVyaWVzLCBlbGVtZW50UXVlcmllcywgaGFybmVzc1R5cGVzfSA9IF9wYXJzZVF1ZXJpZXMocXVlcmllcyk7XG5cbiAgICAvLyBDb21iaW5lIGFsbCBvZiB0aGUgcXVlcmllcyBpbnRvIG9uZSBsYXJnZSBjb21tYS1kZWxpbWl0ZWQgc2VsZWN0b3IgYW5kIHVzZSBpdCB0byBnZXQgYWxsIHJhd1xuICAgIC8vIGVsZW1lbnRzIG1hdGNoaW5nIGFueSBvZiB0aGUgaW5kaXZpZHVhbCBxdWVyaWVzLlxuICAgIGNvbnN0IHJhd0VsZW1lbnRzID0gYXdhaXQgdGhpcy5nZXRBbGxSYXdFbGVtZW50cyhcbiAgICAgICAgWy4uLmVsZW1lbnRRdWVyaWVzLCAuLi5oYXJuZXNzUXVlcmllcy5tYXAocHJlZGljYXRlID0+IHByZWRpY2F0ZS5nZXRTZWxlY3RvcigpKV0uam9pbignLCcpKTtcblxuICAgIC8vIElmIGV2ZXJ5IHF1ZXJ5IGlzIHNlYXJjaGluZyBmb3IgdGhlIHNhbWUgaGFybmVzcyBzdWJjbGFzcywgd2Uga25vdyBldmVyeSByZXN1bHQgY29ycmVzcG9uZHNcbiAgICAvLyB0byBhbiBpbnN0YW5jZSBvZiB0aGF0IHN1YmNsYXNzLiBMaWtld2lzZSwgaWYgZXZlcnkgcXVlcnkgaXMgZm9yIGEgYFRlc3RFbGVtZW50YCwgd2Uga25vd1xuICAgIC8vIGV2ZXJ5IHJlc3VsdCBjb3JyZXNwb25kcyB0byBhIGBUZXN0RWxlbWVudGAuIE90aGVyd2lzZSB3ZSBuZWVkIHRvIHZlcmlmeSB3aGljaCByZXN1bHQgd2FzXG4gICAgLy8gZm91bmQgYnkgd2hpY2ggc2VsZWN0b3Igc28gaXQgY2FuIGJlIG1hdGNoZWQgdG8gdGhlIGFwcHJvcHJpYXRlIGluc3RhbmNlLlxuICAgIGNvbnN0IHNraXBTZWxlY3RvckNoZWNrID0gKGVsZW1lbnRRdWVyaWVzLmxlbmd0aCA9PT0gMCAmJiBoYXJuZXNzVHlwZXMuc2l6ZSA9PT0gMSkgfHxcbiAgICAgICAgaGFybmVzc1F1ZXJpZXMubGVuZ3RoID09PSAwO1xuXG4gICAgY29uc3QgcGVyRWxlbWVudE1hdGNoZXMgPSBhd2FpdCBQcm9taXNlLmFsbChyYXdFbGVtZW50cy5tYXAoYXN5bmMgcmF3RWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB0ZXN0RWxlbWVudCA9IHRoaXMuY3JlYXRlVGVzdEVsZW1lbnQocmF3RWxlbWVudCk7XG4gICAgICBjb25zdCBhbGxSZXN1bHRzRm9yRWxlbWVudCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgIC8vIEZvciBlYWNoIHF1ZXJ5LCBnZXQgYG51bGxgIGlmIGl0IGRvZXNuJ3QgbWF0Y2gsIG9yIGEgYFRlc3RFbGVtZW50YCBvclxuICAgICAgICAgIC8vIGBDb21wb25lbnRIYXJuZXNzYCBhcyBhcHByb3ByaWF0ZSBpZiBpdCBkb2VzIG1hdGNoLiBUaGlzIGdpdmVzIHVzIGV2ZXJ5dGhpbmcgdGhhdFxuICAgICAgICAgIC8vIG1hdGNoZXMgdGhlIGN1cnJlbnQgcmF3IGVsZW1lbnQsIGJ1dCBpdCBtYXkgY29udGFpbiBkdXBsaWNhdGUgZW50cmllcyAoZS5nLiBtdWx0aXBsZVxuICAgICAgICAgIC8vIGBUZXN0RWxlbWVudGAgb3IgbXVsdGlwbGUgYENvbXBvbmVudEhhcm5lc3NgIG9mIHRoZSBzYW1lIHR5cGUuXG4gICAgICAgICAgYWxsUXVlcmllcy5tYXAocXVlcnkgPT5cbiAgICAgICAgICAgICAgdGhpcy5fZ2V0UXVlcnlSZXN1bHRGb3JFbGVtZW50KHF1ZXJ5LCByYXdFbGVtZW50LCB0ZXN0RWxlbWVudCwgc2tpcFNlbGVjdG9yQ2hlY2spKSk7XG4gICAgICByZXR1cm4gX3JlbW92ZUR1cGxpY2F0ZVF1ZXJ5UmVzdWx0cyhhbGxSZXN1bHRzRm9yRWxlbWVudCk7XG4gICAgfSkpO1xuICAgIHJldHVybiAoW10gYXMgYW55KS5jb25jYXQoLi4ucGVyRWxlbWVudE1hdGNoZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHF1ZXJ5IG1hdGNoZXMgdGhlIGdpdmVuIGVsZW1lbnQsIGlmIGl0IGRvZXMgcmV0dXJuIHRoZSBtYXRjaGVkXG4gICAqIGBUZXN0RWxlbWVudGAgb3IgYENvbXBvbmVudEhhcm5lc3NgLCBpZiBpdCBkb2VzIG5vdCwgcmV0dXJuIG51bGwuIEluIGNhc2VzIHdoZXJlIHRoZSBjYWxsZXJcbiAgICoga25vd3MgZm9yIHN1cmUgdGhhdCB0aGUgcXVlcnkgbWF0Y2hlcyB0aGUgZWxlbWVudCdzIHNlbGVjdG9yLCBgc2tpcFNlbGVjdG9yQ2hlY2tgIGNhbiBiZSB1c2VkXG4gICAqIHRvIHNraXAgdmVyaWZpY2F0aW9uIGFuZCBvcHRpbWl6ZSBwZXJmb3JtYW5jZS5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX2dldFF1ZXJ5UmVzdWx0Rm9yRWxlbWVudDxUIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcz4oXG4gICAgICBxdWVyeTogc3RyaW5nIHwgSGFybmVzc1ByZWRpY2F0ZTxUPiwgcmF3RWxlbWVudDogRSwgdGVzdEVsZW1lbnQ6IFRlc3RFbGVtZW50LFxuICAgICAgc2tpcFNlbGVjdG9yQ2hlY2s6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8VCB8IFRlc3RFbGVtZW50IHwgbnVsbD4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gKChza2lwU2VsZWN0b3JDaGVjayB8fCBhd2FpdCB0ZXN0RWxlbWVudC5tYXRjaGVzU2VsZWN0b3IocXVlcnkpKSA/IHRlc3RFbGVtZW50IDogbnVsbCk7XG4gICAgfVxuICAgIGlmIChza2lwU2VsZWN0b3JDaGVjayB8fCBhd2FpdCB0ZXN0RWxlbWVudC5tYXRjaGVzU2VsZWN0b3IocXVlcnkuZ2V0U2VsZWN0b3IoKSkpIHtcbiAgICAgIGNvbnN0IGhhcm5lc3MgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudEhhcm5lc3MocXVlcnkuaGFybmVzc1R5cGUsIHJhd0VsZW1lbnQpO1xuICAgICAgcmV0dXJuIChhd2FpdCBxdWVyeS5ldmFsdWF0ZShoYXJuZXNzKSkgPyBoYXJuZXNzIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZXMgYSBsaXN0IG9mIHF1ZXJpZXMgaW4gdGhlIGZvcm1hdCBhY2NlcHRlZCBieSB0aGUgYGxvY2F0b3JGb3IqYCBtZXRob2RzIGludG8gYW4gZWFzaWVyIHRvXG4gKiB3b3JrIHdpdGggZm9ybWF0LlxuICovXG5mdW5jdGlvbiBfcGFyc2VRdWVyaWVzPFQgZXh0ZW5kcyAoSGFybmVzc1F1ZXJ5PGFueT4gfCBzdHJpbmcpW10+KHF1ZXJpZXM6IFQpOlxuICAgIFBhcnNlZFF1ZXJpZXM8TG9jYXRvckZuUmVzdWx0PFQ+ICYgQ29tcG9uZW50SGFybmVzcz4ge1xuICBjb25zdCBhbGxRdWVyaWVzID0gW107XG4gIGNvbnN0IGhhcm5lc3NRdWVyaWVzID0gW107XG4gIGNvbnN0IGVsZW1lbnRRdWVyaWVzID0gW107XG4gIGNvbnN0IGhhcm5lc3NUeXBlcyA9XG4gICAgICBuZXcgU2V0PENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcjxMb2NhdG9yRm5SZXN1bHQ8VD4gJiBDb21wb25lbnRIYXJuZXNzPj4oKTtcblxuICBmb3IgKGNvbnN0IHF1ZXJ5IG9mIHF1ZXJpZXMpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgYWxsUXVlcmllcy5wdXNoKHF1ZXJ5KTtcbiAgICAgIGVsZW1lbnRRdWVyaWVzLnB1c2gocXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVkaWNhdGUgPSBxdWVyeSBpbnN0YW5jZW9mIEhhcm5lc3NQcmVkaWNhdGUgPyBxdWVyeSA6IG5ldyBIYXJuZXNzUHJlZGljYXRlKHF1ZXJ5LCB7fSk7XG4gICAgICBhbGxRdWVyaWVzLnB1c2gocHJlZGljYXRlKTtcbiAgICAgIGhhcm5lc3NRdWVyaWVzLnB1c2gocHJlZGljYXRlKTtcbiAgICAgIGhhcm5lc3NUeXBlcy5hZGQocHJlZGljYXRlLmhhcm5lc3NUeXBlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge2FsbFF1ZXJpZXMsIGhhcm5lc3NRdWVyaWVzLCBlbGVtZW50UXVlcmllcywgaGFybmVzc1R5cGVzfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGR1cGxpY2F0ZSBxdWVyeSByZXN1bHRzIGZvciBhIHBhcnRpY3VsYXIgZWxlbWVudC4gKGUuZy4gbXVsdGlwbGUgYFRlc3RFbGVtZW50YFxuICogaW5zdGFuY2VzIG9yIG11bHRpcGxlIGluc3RhbmNlcyBvZiB0aGUgc2FtZSBgQ29tcG9uZW50SGFybmVzc2AgY2xhc3MuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIF9yZW1vdmVEdXBsaWNhdGVRdWVyeVJlc3VsdHM8VCBleHRlbmRzIChDb21wb25lbnRIYXJuZXNzIHwgVGVzdEVsZW1lbnQgfCBudWxsKVtdPihcbiAgICByZXN1bHRzOiBUKTogUHJvbWlzZTxUPiB7XG4gIGxldCB0ZXN0RWxlbWVudE1hdGNoZWQgPSBmYWxzZTtcbiAgbGV0IG1hdGNoZWRIYXJuZXNzVHlwZXMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IGRlZHVwZWRNYXRjaGVzID0gW107XG4gIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDb21wb25lbnRIYXJuZXNzKSB7XG4gICAgICBpZiAoIW1hdGNoZWRIYXJuZXNzVHlwZXMuaGFzKHJlc3VsdC5jb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgbWF0Y2hlZEhhcm5lc3NUeXBlcy5hZGQocmVzdWx0LmNvbnN0cnVjdG9yKTtcbiAgICAgICAgZGVkdXBlZE1hdGNoZXMucHVzaChyZXN1bHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRlc3RFbGVtZW50TWF0Y2hlZCkge1xuICAgICAgdGVzdEVsZW1lbnRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgIGRlZHVwZWRNYXRjaGVzLnB1c2gocmVzdWx0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlZHVwZWRNYXRjaGVzIGFzIFQ7XG59XG5cbi8qKiBWZXJpZmllcyB0aGF0IHRoZXJlIGlzIGF0IGxlYXN0IG9uZSByZXN1bHQgaW4gYW4gYXJyYXkuICovXG5hc3luYyBmdW5jdGlvbiBfYXNzZXJ0UmVzdWx0Rm91bmQ8VD4ocmVzdWx0czogUHJvbWlzZTxUW10+LCBxdWVyeURlc2NyaXB0aW9uczogc3RyaW5nW10pOlxuICAgIFByb21pc2U8VD4ge1xuICBjb25zdCByZXN1bHQgPSAoYXdhaXQgcmVzdWx0cylbMF07XG4gIGlmIChyZXN1bHQgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgRXJyb3IoYEZhaWxlZCB0byBmaW5kIGVsZW1lbnQgbWF0Y2hpbmcgb25lIG9mIHRoZSBmb2xsb3dpbmcgcXVlcmllczpcXG5gICtcbiAgICAgICAgcXVlcnlEZXNjcmlwdGlvbnMubWFwKGRlc2MgPT4gYCgke2Rlc2N9KWApLmpvaW4oJyxcXG4nKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIEdldHMgYSBsaXN0IG9mIGRlc2NyaXB0aW9uIHN0cmluZ3MgZnJvbSBhIGxpc3Qgb2YgcXVlcmllcy4gKi9cbmZ1bmN0aW9uIF9nZXREZXNjcmlwdGlvbkZvckxvY2F0b3JGb3JRdWVyaWVzKHF1ZXJpZXM6IChzdHJpbmcgfCBIYXJuZXNzUXVlcnk8YW55PilbXSkge1xuICByZXR1cm4gcXVlcmllcy5tYXAocXVlcnkgPT4gdHlwZW9mIHF1ZXJ5ID09PSAnc3RyaW5nJyA/XG4gICAgICBfZ2V0RGVzY3JpcHRpb25Gb3JUZXN0RWxlbWVudFF1ZXJ5KHF1ZXJ5KSA6IF9nZXREZXNjcmlwdGlvbkZvckNvbXBvbmVudEhhcm5lc3NRdWVyeShxdWVyeSkpO1xufVxuXG4vKiogR2V0cyBhIGRlc2NyaXB0aW9uIHN0cmluZyBmb3IgYSBgQ29tcG9uZW50SGFybmVzc2AgcXVlcnkuICovXG5mdW5jdGlvbiBfZ2V0RGVzY3JpcHRpb25Gb3JDb21wb25lbnRIYXJuZXNzUXVlcnkocXVlcnk6IEhhcm5lc3NRdWVyeTxhbnk+KSB7XG4gIGNvbnN0IGhhcm5lc3NQcmVkaWNhdGUgPVxuICAgICAgcXVlcnkgaW5zdGFuY2VvZiBIYXJuZXNzUHJlZGljYXRlID8gcXVlcnkgOiBuZXcgSGFybmVzc1ByZWRpY2F0ZShxdWVyeSwge30pO1xuICBjb25zdCB7bmFtZSwgaG9zdFNlbGVjdG9yfSA9IGhhcm5lc3NQcmVkaWNhdGUuaGFybmVzc1R5cGU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYCR7bmFtZX0gd2l0aCBob3N0IGVsZW1lbnQgbWF0Y2hpbmcgc2VsZWN0b3I6IFwiJHtob3N0U2VsZWN0b3J9XCJgO1xuICBjb25zdCBjb25zdHJhaW50cyA9IGhhcm5lc3NQcmVkaWNhdGUuZ2V0RGVzY3JpcHRpb24oKTtcbiAgcmV0dXJuIGRlc2NyaXB0aW9uICsgKGNvbnN0cmFpbnRzID9cbiAgICAgIGAgc2F0aXNmeWluZyB0aGUgY29uc3RyYWludHM6ICR7aGFybmVzc1ByZWRpY2F0ZS5nZXREZXNjcmlwdGlvbigpfWAgOiAnJyk7XG59XG5cbi8qKiBHZXRzIGEgZGVzY3JpcHRpb24gc3RyaW5nIGZvciBhIGBUZXN0RWxlbWVudGAgcXVlcnkuICovXG5mdW5jdGlvbiBfZ2V0RGVzY3JpcHRpb25Gb3JUZXN0RWxlbWVudFF1ZXJ5KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBUZXN0RWxlbWVudCBmb3IgZWxlbWVudCBtYXRjaGluZyBzZWxlY3RvcjogXCIke3NlbGVjdG9yfVwiYDtcbn1cblxuLyoqIEdldHMgYSBkZXNjcmlwdGlvbiBzdHJpbmcgZm9yIGEgYEhhcm5lc3NMb2FkZXJgIHF1ZXJ5LiAqL1xuZnVuY3Rpb24gX2dldERlc2NyaXB0aW9uRm9ySGFybmVzc0xvYWRlclF1ZXJ5KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBIYXJuZXNzTG9hZGVyIGZvciBlbGVtZW50IG1hdGNoaW5nIHNlbGVjdG9yOiBcIiR7c2VsZWN0b3J9XCJgO1xufVxuIl19