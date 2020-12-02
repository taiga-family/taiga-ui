/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __awaiter } from "tslib";
import { ComponentHarness, HarnessPredicate, } from './component-harness';
/**
 * Base harness environment class that can be extended to allow `ComponentHarness`es to be used in
 * different test environments (e.g. testbed, protractor, etc.). This class implements the
 * functionality of both a `HarnessLoader` and `LocatorFactory`. This class is generic on the raw
 * element type, `E`, used by the particular test environment.
 */
export class HarnessEnvironment {
    constructor(rawRootElement) {
        this.rawRootElement = rawRootElement;
        this.rootElement = this.createTestElement(rawRootElement);
    }
    // Implemented as part of the `LocatorFactory` interface.
    documentRootLocatorFactory() {
        return this.createEnvironment(this.getDocumentRoot());
    }
    // Implemented as part of the `LocatorFactory` interface.
    locatorFor(...queries) {
        return () => _assertResultFound(this._getAllHarnessesAndTestElements(queries), _getDescriptionForLocatorForQueries(queries));
    }
    // Implemented as part of the `LocatorFactory` interface.
    locatorForOptional(...queries) {
        return () => __awaiter(this, void 0, void 0, function* () { return (yield this._getAllHarnessesAndTestElements(queries))[0] || null; });
    }
    // Implemented as part of the `LocatorFactory` interface.
    locatorForAll(...queries) {
        return () => this._getAllHarnessesAndTestElements(queries);
    }
    // Implemented as part of the `LocatorFactory` interface.
    harnessLoaderFor(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createEnvironment(yield _assertResultFound(this.getAllRawElements(selector), [_getDescriptionForHarnessLoaderQuery(selector)]));
        });
    }
    // Implemented as part of the `LocatorFactory` interface.
    harnessLoaderForOptional(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const elements = yield this.getAllRawElements(selector);
            return elements[0] ? this.createEnvironment(elements[0]) : null;
        });
    }
    // Implemented as part of the `LocatorFactory` interface.
    harnessLoaderForAll(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const elements = yield this.getAllRawElements(selector);
            return elements.map(element => this.createEnvironment(element));
        });
    }
    // Implemented as part of the `HarnessLoader` interface.
    getHarness(query) {
        return this.locatorFor(query)();
    }
    // Implemented as part of the `HarnessLoader` interface.
    getAllHarnesses(query) {
        return this.locatorForAll(query)();
    }
    // Implemented as part of the `HarnessLoader` interface.
    getChildLoader(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createEnvironment(yield _assertResultFound(this.getAllRawElements(selector), [_getDescriptionForHarnessLoaderQuery(selector)]));
        });
    }
    // Implemented as part of the `HarnessLoader` interface.
    getAllChildLoaders(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getAllRawElements(selector)).map(e => this.createEnvironment(e));
        });
    }
    /** Creates a `ComponentHarness` for the given harness type with the given raw host element. */
    createComponentHarness(harnessType, element) {
        return new harnessType(this.createEnvironment(element));
    }
    /**
     * Matches the given raw elements with the given list of element and harness queries to produce a
     * list of matched harnesses and test elements.
     */
    _getAllHarnessesAndTestElements(queries) {
        return __awaiter(this, void 0, void 0, function* () {
            const { allQueries, harnessQueries, elementQueries, harnessTypes } = _parseQueries(queries);
            // Combine all of the queries into one large comma-delimited selector and use it to get all raw
            // elements matching any of the individual queries.
            const rawElements = yield this.getAllRawElements([...elementQueries, ...harnessQueries.map(predicate => predicate.getSelector())].join(','));
            // If every query is searching for the same harness subclass, we know every result corresponds
            // to an instance of that subclass. Likewise, if every query is for a `TestElement`, we know
            // every result corresponds to a `TestElement`. Otherwise we need to verify which result was
            // found by which selector so it can be matched to the appropriate instance.
            const skipSelectorCheck = (elementQueries.length === 0 && harnessTypes.size === 1) ||
                harnessQueries.length === 0;
            const perElementMatches = yield Promise.all(rawElements.map((rawElement) => __awaiter(this, void 0, void 0, function* () {
                const testElement = this.createTestElement(rawElement);
                const allResultsForElement = yield Promise.all(
                // For each query, get `null` if it doesn't match, or a `TestElement` or
                // `ComponentHarness` as appropriate if it does match. This gives us everything that
                // matches the current raw element, but it may contain duplicate entries (e.g. multiple
                // `TestElement` or multiple `ComponentHarness` of the same type.
                allQueries.map(query => this._getQueryResultForElement(query, rawElement, testElement, skipSelectorCheck)));
                return _removeDuplicateQueryResults(allResultsForElement);
            })));
            return [].concat(...perElementMatches);
        });
    }
    /**
     * Check whether the given query matches the given element, if it does return the matched
     * `TestElement` or `ComponentHarness`, if it does not, return null. In cases where the caller
     * knows for sure that the query matches the element's selector, `skipSelectorCheck` can be used
     * to skip verification and optimize performance.
     */
    _getQueryResultForElement(query, rawElement, testElement, skipSelectorCheck = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof query === 'string') {
                return ((skipSelectorCheck || (yield testElement.matchesSelector(query))) ? testElement : null);
            }
            if (skipSelectorCheck || (yield testElement.matchesSelector(query.getSelector()))) {
                const harness = this.createComponentHarness(query.harnessType, rawElement);
                return (yield query.evaluate(harness)) ? harness : null;
            }
            return null;
        });
    }
}
/**
 * Parses a list of queries in the format accepted by the `locatorFor*` methods into an easier to
 * work with format.
 */
function _parseQueries(queries) {
    const allQueries = [];
    const harnessQueries = [];
    const elementQueries = [];
    const harnessTypes = new Set();
    for (const query of queries) {
        if (typeof query === 'string') {
            allQueries.push(query);
            elementQueries.push(query);
        }
        else {
            const predicate = query instanceof HarnessPredicate ? query : new HarnessPredicate(query, {});
            allQueries.push(predicate);
            harnessQueries.push(predicate);
            harnessTypes.add(predicate.harnessType);
        }
    }
    return { allQueries, harnessQueries, elementQueries, harnessTypes };
}
/**
 * Removes duplicate query results for a particular element. (e.g. multiple `TestElement`
 * instances or multiple instances of the same `ComponentHarness` class.
 */
function _removeDuplicateQueryResults(results) {
    return __awaiter(this, void 0, void 0, function* () {
        let testElementMatched = false;
        let matchedHarnessTypes = new Set();
        const dedupedMatches = [];
        for (const result of results) {
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
        return dedupedMatches;
    });
}
/** Verifies that there is at least one result in an array. */
function _assertResultFound(results, queryDescriptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = (yield results)[0];
        if (result == undefined) {
            throw Error(`Failed to find element matching one of the following queries:\n` +
                queryDescriptions.map(desc => `(${desc})`).join(',\n'));
        }
        return result;
    });
}
/** Gets a list of description strings from a list of queries. */
function _getDescriptionForLocatorForQueries(queries) {
    return queries.map(query => typeof query === 'string' ?
        _getDescriptionForTestElementQuery(query) : _getDescriptionForComponentHarnessQuery(query));
}
/** Gets a description string for a `ComponentHarness` query. */
function _getDescriptionForComponentHarnessQuery(query) {
    const harnessPredicate = query instanceof HarnessPredicate ? query : new HarnessPredicate(query, {});
    const { name, hostSelector } = harnessPredicate.harnessType;
    const description = `${name} with host element matching selector: "${hostSelector}"`;
    const constraints = harnessPredicate.getDescription();
    return description + (constraints ?
        ` satisfying the constraints: ${harnessPredicate.getDescription()}` : '');
}
/** Gets a description string for a `TestElement` query. */
function _getDescriptionForTestElementQuery(selector) {
    return `TestElement for element matching selector: "${selector}"`;
}
/** Gets a description string for a `HarnessLoader` query. */
function _getDescriptionForHarnessLoaderQuery(selector) {
    return `HarnessLoader for element matching selector: "${selector}"`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFybmVzcy1lbnZpcm9ubWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGVzdGluZy9oYXJuZXNzLWVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBRUwsZ0JBQWdCLEVBR2hCLGdCQUFnQixHQUlqQixNQUFNLHFCQUFxQixDQUFDO0FBcUI3Qjs7Ozs7R0FLRztBQUNILE1BQU0sT0FBZ0Isa0JBQWtCO0lBSXRDLFlBQWdDLGNBQWlCO1FBQWpCLG1CQUFjLEdBQWQsY0FBYyxDQUFHO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx5REFBeUQ7SUFDekQsMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx5REFBeUQ7SUFDekQsVUFBVSxDQUEyQyxHQUFHLE9BQVU7UUFFaEUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDM0IsSUFBSSxDQUFDLCtCQUErQixDQUFDLE9BQU8sQ0FBQyxFQUM3QyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCx5REFBeUQ7SUFDekQsa0JBQWtCLENBQTJDLEdBQUcsT0FBVTtRQUV4RSxPQUFPLEdBQVMsRUFBRSxnREFBQyxPQUFBLENBQUMsTUFBTSxJQUFJLENBQUMsK0JBQStCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUEsR0FBQSxDQUFDO0lBQ3RGLENBQUM7SUFFRCx5REFBeUQ7SUFDekQsYUFBYSxDQUEyQyxHQUFHLE9BQVU7UUFFbkUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHlEQUF5RDtJQUNuRCxnQkFBZ0IsQ0FBQyxRQUFnQjs7WUFDckMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQ25GLENBQUMsb0NBQW9DLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0lBRUQseURBQXlEO0lBQ25ELHdCQUF3QixDQUFDLFFBQWdCOztZQUM3QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEUsQ0FBQztLQUFBO0lBRUQseURBQXlEO0lBQ25ELG1CQUFtQixDQUFDLFFBQWdCOztZQUN4QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDO0tBQUE7SUFFRCx3REFBd0Q7SUFDeEQsVUFBVSxDQUE2QixLQUFzQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELGVBQWUsQ0FBNkIsS0FBc0I7UUFDaEUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELHdEQUF3RDtJQUNsRCxjQUFjLENBQUMsUUFBZ0I7O1lBQ25DLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUNuRixDQUFDLG9DQUFvQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtJQUVELHdEQUF3RDtJQUNsRCxrQkFBa0IsQ0FBQyxRQUFnQjs7WUFDdkMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQztLQUFBO0lBRUQsK0ZBQStGO0lBQ3JGLHNCQUFzQixDQUM1QixXQUEyQyxFQUFFLE9BQVU7UUFDekQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBc0JEOzs7T0FHRztJQUNXLCtCQUErQixDQUN6QyxPQUFVOztZQUNaLE1BQU0sRUFBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUMsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFMUYsK0ZBQStGO1lBQy9GLG1EQUFtRDtZQUNuRCxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FDNUMsQ0FBQyxHQUFHLGNBQWMsRUFBRSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWhHLDhGQUE4RjtZQUM5Riw0RkFBNEY7WUFDNUYsNEZBQTRGO1lBQzVGLDRFQUE0RTtZQUM1RSxNQUFNLGlCQUFpQixHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7Z0JBQzlFLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBRWhDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBTSxVQUFVLEVBQUMsRUFBRTtnQkFDN0UsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLG9CQUFvQixHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUc7Z0JBQzFDLHdFQUF3RTtnQkFDeEUsb0ZBQW9GO2dCQUNwRix1RkFBdUY7Z0JBQ3ZGLGlFQUFpRTtnQkFDakUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNuQixJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVGLE9BQU8sNEJBQTRCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7WUFDSixPQUFRLEVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUVEOzs7OztPQUtHO0lBQ1cseUJBQXlCLENBQ25DLEtBQW1DLEVBQUUsVUFBYSxFQUFFLFdBQXdCLEVBQzVFLG9CQUE2QixLQUFLOztZQUNwQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDN0IsT0FBTyxDQUFDLENBQUMsaUJBQWlCLEtBQUksTUFBTSxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvRjtZQUNELElBQUksaUJBQWlCLEtBQUksTUFBTSxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBLEVBQUU7Z0JBQy9FLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMzRSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3pEO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRjtBQUVEOzs7R0FHRztBQUNILFNBQVMsYUFBYSxDQUEyQyxPQUFVO0lBRXpFLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN0QixNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDMUIsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzFCLE1BQU0sWUFBWSxHQUNkLElBQUksR0FBRyxFQUFzRSxDQUFDO0lBRWxGLEtBQUssTUFBTSxLQUFLLElBQUksT0FBTyxFQUFFO1FBQzNCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsTUFBTSxTQUFTLEdBQUcsS0FBSyxZQUFZLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlGLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0IsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvQixZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN6QztLQUNGO0lBRUQsT0FBTyxFQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQ3BFLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFlLDRCQUE0QixDQUN2QyxPQUFVOztRQUNaLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksbUJBQW1CLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNwQyxNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDMUIsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxTQUFTO2FBQ1Y7WUFDRCxJQUFJLE1BQU0sWUFBWSxnQkFBZ0IsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ2hELG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzVDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7aUJBQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUM5QixrQkFBa0IsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0I7U0FDRjtRQUNELE9BQU8sY0FBbUIsQ0FBQztJQUM3QixDQUFDO0NBQUE7QUFFRCw4REFBOEQ7QUFDOUQsU0FBZSxrQkFBa0IsQ0FBSSxPQUFxQixFQUFFLGlCQUEyQjs7UUFFckYsTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksTUFBTSxJQUFJLFNBQVMsRUFBRTtZQUN2QixNQUFNLEtBQUssQ0FBQyxpRUFBaUU7Z0JBQ3pFLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM3RDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FBQTtBQUVELGlFQUFpRTtBQUNqRSxTQUFTLG1DQUFtQyxDQUFDLE9BQXVDO0lBQ2xGLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELGtDQUFrQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ2xHLENBQUM7QUFFRCxnRUFBZ0U7QUFDaEUsU0FBUyx1Q0FBdUMsQ0FBQyxLQUF3QjtJQUN2RSxNQUFNLGdCQUFnQixHQUNsQixLQUFLLFlBQVksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEYsTUFBTSxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDMUQsTUFBTSxXQUFXLEdBQUcsR0FBRyxJQUFJLDBDQUEwQyxZQUFZLEdBQUcsQ0FBQztJQUNyRixNQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN0RCxPQUFPLFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9CLGdDQUFnQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoRixDQUFDO0FBRUQsMkRBQTJEO0FBQzNELFNBQVMsa0NBQWtDLENBQUMsUUFBZ0I7SUFDMUQsT0FBTywrQ0FBK0MsUUFBUSxHQUFHLENBQUM7QUFDcEUsQ0FBQztBQUVELDZEQUE2RDtBQUM3RCxTQUFTLG9DQUFvQyxDQUFDLFFBQWdCO0lBQzVELE9BQU8saURBQWlELFFBQVEsR0FBRyxDQUFDO0FBQ3RFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgQXN5bmNGYWN0b3J5Rm4sXG4gIENvbXBvbmVudEhhcm5lc3MsXG4gIENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcixcbiAgSGFybmVzc0xvYWRlcixcbiAgSGFybmVzc1ByZWRpY2F0ZSxcbiAgSGFybmVzc1F1ZXJ5LFxuICBMb2NhdG9yRmFjdG9yeSxcbiAgTG9jYXRvckZuUmVzdWx0LFxufSBmcm9tICcuL2NvbXBvbmVudC1oYXJuZXNzJztcbmltcG9ydCB7VGVzdEVsZW1lbnR9IGZyb20gJy4vdGVzdC1lbGVtZW50JztcblxuLyoqIFBhcnNlZCBmb3JtIG9mIHRoZSBxdWVyaWVzIHBhc3NlZCB0byB0aGUgYGxvY2F0b3JGb3IqYCBtZXRob2RzLiAqL1xudHlwZSBQYXJzZWRRdWVyaWVzPFQgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzPiA9IHtcbiAgLyoqIFRoZSBmdWxsIGxpc3Qgb2YgcXVlcmllcywgaW4gdGhlaXIgb3JpZ2luYWwgb3JkZXIuICovXG4gIGFsbFF1ZXJpZXM6IChzdHJpbmcgfCBIYXJuZXNzUHJlZGljYXRlPFQ+KVtdLFxuICAvKipcbiAgICogQSBmaWx0ZXJlZCB2aWV3IG9mIGBhbGxRdWVyaWVzYCBjb250YWluaW5nIG9ubHkgdGhlIHF1ZXJpZXMgdGhhdCBhcmUgbG9va2luZyBmb3IgYVxuICAgKiBgQ29tcG9uZW50SGFybmVzc2BcbiAgICovXG4gIGhhcm5lc3NRdWVyaWVzOiBIYXJuZXNzUHJlZGljYXRlPFQ+W10sXG4gIC8qKlxuICAgKiBBIGZpbHRlcmVkIHZpZXcgb2YgYGFsbFF1ZXJpZXNgIGNvbnRhaW5pbmcgb25seSB0aGUgcXVlcmllcyB0aGF0IGFyZSBsb29raW5nIGZvciBhXG4gICAqIGBUZXN0RWxlbWVudGBcbiAgICovXG4gIGVsZW1lbnRRdWVyaWVzOiBzdHJpbmdbXSxcbiAgLyoqIFRoZSBzZXQgb2YgYWxsIGBDb21wb25lbnRIYXJuZXNzYCBzdWJjbGFzc2VzIHJlcHJlc2VudGVkIGluIHRoZSBvcmlnaW5hbCBxdWVyeSBsaXN0LiAqL1xuICBoYXJuZXNzVHlwZXM6IFNldDxDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3I8VD4+LFxufTtcblxuLyoqXG4gKiBCYXNlIGhhcm5lc3MgZW52aXJvbm1lbnQgY2xhc3MgdGhhdCBjYW4gYmUgZXh0ZW5kZWQgdG8gYWxsb3cgYENvbXBvbmVudEhhcm5lc3NgZXMgdG8gYmUgdXNlZCBpblxuICogZGlmZmVyZW50IHRlc3QgZW52aXJvbm1lbnRzIChlLmcuIHRlc3RiZWQsIHByb3RyYWN0b3IsIGV0Yy4pLiBUaGlzIGNsYXNzIGltcGxlbWVudHMgdGhlXG4gKiBmdW5jdGlvbmFsaXR5IG9mIGJvdGggYSBgSGFybmVzc0xvYWRlcmAgYW5kIGBMb2NhdG9yRmFjdG9yeWAuIFRoaXMgY2xhc3MgaXMgZ2VuZXJpYyBvbiB0aGUgcmF3XG4gKiBlbGVtZW50IHR5cGUsIGBFYCwgdXNlZCBieSB0aGUgcGFydGljdWxhciB0ZXN0IGVudmlyb25tZW50LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGFybmVzc0Vudmlyb25tZW50PEU+IGltcGxlbWVudHMgSGFybmVzc0xvYWRlciwgTG9jYXRvckZhY3Rvcnkge1xuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIHRoZSBgTG9jYXRvckZhY3RvcnlgIGludGVyZmFjZS5cbiAgcm9vdEVsZW1lbnQ6IFRlc3RFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmF3Um9vdEVsZW1lbnQ6IEUpIHtcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gdGhpcy5jcmVhdGVUZXN0RWxlbWVudChyYXdSb290RWxlbWVudCk7XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIHRoZSBgTG9jYXRvckZhY3RvcnlgIGludGVyZmFjZS5cbiAgZG9jdW1lbnRSb290TG9jYXRvckZhY3RvcnkoKTogTG9jYXRvckZhY3Rvcnkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUVudmlyb25tZW50KHRoaXMuZ2V0RG9jdW1lbnRSb290KCkpO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiB0aGUgYExvY2F0b3JGYWN0b3J5YCBpbnRlcmZhY2UuXG4gIGxvY2F0b3JGb3I8VCBleHRlbmRzIChIYXJuZXNzUXVlcnk8YW55PiB8IHN0cmluZylbXT4oLi4ucXVlcmllczogVCk6XG4gICAgICBBc3luY0ZhY3RvcnlGbjxMb2NhdG9yRm5SZXN1bHQ8VD4+IHtcbiAgICByZXR1cm4gKCkgPT4gX2Fzc2VydFJlc3VsdEZvdW5kKFxuICAgICAgICB0aGlzLl9nZXRBbGxIYXJuZXNzZXNBbmRUZXN0RWxlbWVudHMocXVlcmllcyksXG4gICAgICAgIF9nZXREZXNjcmlwdGlvbkZvckxvY2F0b3JGb3JRdWVyaWVzKHF1ZXJpZXMpKTtcbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgdGhlIGBMb2NhdG9yRmFjdG9yeWAgaW50ZXJmYWNlLlxuICBsb2NhdG9yRm9yT3B0aW9uYWw8VCBleHRlbmRzIChIYXJuZXNzUXVlcnk8YW55PiB8IHN0cmluZylbXT4oLi4ucXVlcmllczogVCk6XG4gICAgICBBc3luY0ZhY3RvcnlGbjxMb2NhdG9yRm5SZXN1bHQ8VD4gfCBudWxsPiB7XG4gICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCB0aGlzLl9nZXRBbGxIYXJuZXNzZXNBbmRUZXN0RWxlbWVudHMocXVlcmllcykpWzBdIHx8IG51bGw7XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIHRoZSBgTG9jYXRvckZhY3RvcnlgIGludGVyZmFjZS5cbiAgbG9jYXRvckZvckFsbDxUIGV4dGVuZHMgKEhhcm5lc3NRdWVyeTxhbnk+IHwgc3RyaW5nKVtdPiguLi5xdWVyaWVzOiBUKTpcbiAgICAgIEFzeW5jRmFjdG9yeUZuPExvY2F0b3JGblJlc3VsdDxUPltdPiB7XG4gICAgcmV0dXJuICgpID0+IHRoaXMuX2dldEFsbEhhcm5lc3Nlc0FuZFRlc3RFbGVtZW50cyhxdWVyaWVzKTtcbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgdGhlIGBMb2NhdG9yRmFjdG9yeWAgaW50ZXJmYWNlLlxuICBhc3luYyBoYXJuZXNzTG9hZGVyRm9yKHNlbGVjdG9yOiBzdHJpbmcpOiBQcm9taXNlPEhhcm5lc3NMb2FkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVFbnZpcm9ubWVudChhd2FpdCBfYXNzZXJ0UmVzdWx0Rm91bmQodGhpcy5nZXRBbGxSYXdFbGVtZW50cyhzZWxlY3RvciksXG4gICAgICAgIFtfZ2V0RGVzY3JpcHRpb25Gb3JIYXJuZXNzTG9hZGVyUXVlcnkoc2VsZWN0b3IpXSkpO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiB0aGUgYExvY2F0b3JGYWN0b3J5YCBpbnRlcmZhY2UuXG4gIGFzeW5jIGhhcm5lc3NMb2FkZXJGb3JPcHRpb25hbChzZWxlY3Rvcjogc3RyaW5nKTogUHJvbWlzZTxIYXJuZXNzTG9hZGVyIHwgbnVsbD4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gYXdhaXQgdGhpcy5nZXRBbGxSYXdFbGVtZW50cyhzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGVsZW1lbnRzWzBdID8gdGhpcy5jcmVhdGVFbnZpcm9ubWVudChlbGVtZW50c1swXSkgOiBudWxsO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiB0aGUgYExvY2F0b3JGYWN0b3J5YCBpbnRlcmZhY2UuXG4gIGFzeW5jIGhhcm5lc3NMb2FkZXJGb3JBbGwoc2VsZWN0b3I6IHN0cmluZyk6IFByb21pc2U8SGFybmVzc0xvYWRlcltdPiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBhd2FpdCB0aGlzLmdldEFsbFJhd0VsZW1lbnRzKHNlbGVjdG9yKTtcbiAgICByZXR1cm4gZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gdGhpcy5jcmVhdGVFbnZpcm9ubWVudChlbGVtZW50KSk7XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIHRoZSBgSGFybmVzc0xvYWRlcmAgaW50ZXJmYWNlLlxuICBnZXRIYXJuZXNzPFQgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzPihxdWVyeTogSGFybmVzc1F1ZXJ5PFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMubG9jYXRvckZvcihxdWVyeSkoKTtcbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgdGhlIGBIYXJuZXNzTG9hZGVyYCBpbnRlcmZhY2UuXG4gIGdldEFsbEhhcm5lc3NlczxUIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcz4ocXVlcnk6IEhhcm5lc3NRdWVyeTxUPik6IFByb21pc2U8VFtdPiB7XG4gICAgcmV0dXJuIHRoaXMubG9jYXRvckZvckFsbChxdWVyeSkoKTtcbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgdGhlIGBIYXJuZXNzTG9hZGVyYCBpbnRlcmZhY2UuXG4gIGFzeW5jIGdldENoaWxkTG9hZGVyKHNlbGVjdG9yOiBzdHJpbmcpOiBQcm9taXNlPEhhcm5lc3NMb2FkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVFbnZpcm9ubWVudChhd2FpdCBfYXNzZXJ0UmVzdWx0Rm91bmQodGhpcy5nZXRBbGxSYXdFbGVtZW50cyhzZWxlY3RvciksXG4gICAgICAgIFtfZ2V0RGVzY3JpcHRpb25Gb3JIYXJuZXNzTG9hZGVyUXVlcnkoc2VsZWN0b3IpXSkpO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiB0aGUgYEhhcm5lc3NMb2FkZXJgIGludGVyZmFjZS5cbiAgYXN5bmMgZ2V0QWxsQ2hpbGRMb2FkZXJzKHNlbGVjdG9yOiBzdHJpbmcpOiBQcm9taXNlPEhhcm5lc3NMb2FkZXJbXT4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5nZXRBbGxSYXdFbGVtZW50cyhzZWxlY3RvcikpLm1hcChlID0+IHRoaXMuY3JlYXRlRW52aXJvbm1lbnQoZSkpO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBgQ29tcG9uZW50SGFybmVzc2AgZm9yIHRoZSBnaXZlbiBoYXJuZXNzIHR5cGUgd2l0aCB0aGUgZ2l2ZW4gcmF3IGhvc3QgZWxlbWVudC4gKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbXBvbmVudEhhcm5lc3M8VCBleHRlbmRzIENvbXBvbmVudEhhcm5lc3M+KFxuICAgICAgaGFybmVzc1R5cGU6IENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcjxUPiwgZWxlbWVudDogRSk6IFQge1xuICAgIHJldHVybiBuZXcgaGFybmVzc1R5cGUodGhpcy5jcmVhdGVFbnZpcm9ubWVudChlbGVtZW50KSk7XG4gIH1cblxuICAvLyBQYXJ0IG9mIExvY2F0b3JGYWN0b3J5IGludGVyZmFjZSwgc3ViY2xhc3NlcyB3aWxsIGltcGxlbWVudC5cbiAgYWJzdHJhY3QgZm9yY2VTdGFiaWxpemUoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvLyBQYXJ0IG9mIExvY2F0b3JGYWN0b3J5IGludGVyZmFjZSwgc3ViY2xhc3NlcyB3aWxsIGltcGxlbWVudC5cbiAgYWJzdHJhY3Qgd2FpdEZvclRhc2tzT3V0c2lkZUFuZ3VsYXIoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKiogR2V0cyB0aGUgcm9vdCBlbGVtZW50IGZvciB0aGUgZG9jdW1lbnQuICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZXREb2N1bWVudFJvb3QoKTogRTtcblxuICAvKiogQ3JlYXRlcyBhIGBUZXN0RWxlbWVudGAgZnJvbSBhIHJhdyBlbGVtZW50LiAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlVGVzdEVsZW1lbnQoZWxlbWVudDogRSk6IFRlc3RFbGVtZW50O1xuXG4gIC8qKiBDcmVhdGVzIGEgYEhhcm5lc3NMb2FkZXJgIHJvb3RlZCBhdCB0aGUgZ2l2ZW4gcmF3IGVsZW1lbnQuICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVFbnZpcm9ubWVudChlbGVtZW50OiBFKTogSGFybmVzc0Vudmlyb25tZW50PEU+O1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgbGlzdCBvZiBhbGwgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIGdpdmVuIHNlbGVjdG9yIHVuZGVyIHRoaXMgZW52aXJvbm1lbnQncyByb290IGVsZW1lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QWxsUmF3RWxlbWVudHMoc2VsZWN0b3I6IHN0cmluZyk6IFByb21pc2U8RVtdPjtcblxuICAvKipcbiAgICogTWF0Y2hlcyB0aGUgZ2l2ZW4gcmF3IGVsZW1lbnRzIHdpdGggdGhlIGdpdmVuIGxpc3Qgb2YgZWxlbWVudCBhbmQgaGFybmVzcyBxdWVyaWVzIHRvIHByb2R1Y2UgYVxuICAgKiBsaXN0IG9mIG1hdGNoZWQgaGFybmVzc2VzIGFuZCB0ZXN0IGVsZW1lbnRzLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0QWxsSGFybmVzc2VzQW5kVGVzdEVsZW1lbnRzPFQgZXh0ZW5kcyAoSGFybmVzc1F1ZXJ5PGFueT4gfCBzdHJpbmcpW10+KFxuICAgICAgcXVlcmllczogVCk6IFByb21pc2U8TG9jYXRvckZuUmVzdWx0PFQ+W10+IHtcbiAgICBjb25zdCB7YWxsUXVlcmllcywgaGFybmVzc1F1ZXJpZXMsIGVsZW1lbnRRdWVyaWVzLCBoYXJuZXNzVHlwZXN9ID0gX3BhcnNlUXVlcmllcyhxdWVyaWVzKTtcblxuICAgIC8vIENvbWJpbmUgYWxsIG9mIHRoZSBxdWVyaWVzIGludG8gb25lIGxhcmdlIGNvbW1hLWRlbGltaXRlZCBzZWxlY3RvciBhbmQgdXNlIGl0IHRvIGdldCBhbGwgcmF3XG4gICAgLy8gZWxlbWVudHMgbWF0Y2hpbmcgYW55IG9mIHRoZSBpbmRpdmlkdWFsIHF1ZXJpZXMuXG4gICAgY29uc3QgcmF3RWxlbWVudHMgPSBhd2FpdCB0aGlzLmdldEFsbFJhd0VsZW1lbnRzKFxuICAgICAgICBbLi4uZWxlbWVudFF1ZXJpZXMsIC4uLmhhcm5lc3NRdWVyaWVzLm1hcChwcmVkaWNhdGUgPT4gcHJlZGljYXRlLmdldFNlbGVjdG9yKCkpXS5qb2luKCcsJykpO1xuXG4gICAgLy8gSWYgZXZlcnkgcXVlcnkgaXMgc2VhcmNoaW5nIGZvciB0aGUgc2FtZSBoYXJuZXNzIHN1YmNsYXNzLCB3ZSBrbm93IGV2ZXJ5IHJlc3VsdCBjb3JyZXNwb25kc1xuICAgIC8vIHRvIGFuIGluc3RhbmNlIG9mIHRoYXQgc3ViY2xhc3MuIExpa2V3aXNlLCBpZiBldmVyeSBxdWVyeSBpcyBmb3IgYSBgVGVzdEVsZW1lbnRgLCB3ZSBrbm93XG4gICAgLy8gZXZlcnkgcmVzdWx0IGNvcnJlc3BvbmRzIHRvIGEgYFRlc3RFbGVtZW50YC4gT3RoZXJ3aXNlIHdlIG5lZWQgdG8gdmVyaWZ5IHdoaWNoIHJlc3VsdCB3YXNcbiAgICAvLyBmb3VuZCBieSB3aGljaCBzZWxlY3RvciBzbyBpdCBjYW4gYmUgbWF0Y2hlZCB0byB0aGUgYXBwcm9wcmlhdGUgaW5zdGFuY2UuXG4gICAgY29uc3Qgc2tpcFNlbGVjdG9yQ2hlY2sgPSAoZWxlbWVudFF1ZXJpZXMubGVuZ3RoID09PSAwICYmIGhhcm5lc3NUeXBlcy5zaXplID09PSAxKSB8fFxuICAgICAgICBoYXJuZXNzUXVlcmllcy5sZW5ndGggPT09IDA7XG5cbiAgICBjb25zdCBwZXJFbGVtZW50TWF0Y2hlcyA9IGF3YWl0IFByb21pc2UuYWxsKHJhd0VsZW1lbnRzLm1hcChhc3luYyByYXdFbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHRlc3RFbGVtZW50ID0gdGhpcy5jcmVhdGVUZXN0RWxlbWVudChyYXdFbGVtZW50KTtcbiAgICAgIGNvbnN0IGFsbFJlc3VsdHNGb3JFbGVtZW50ID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgLy8gRm9yIGVhY2ggcXVlcnksIGdldCBgbnVsbGAgaWYgaXQgZG9lc24ndCBtYXRjaCwgb3IgYSBgVGVzdEVsZW1lbnRgIG9yXG4gICAgICAgICAgLy8gYENvbXBvbmVudEhhcm5lc3NgIGFzIGFwcHJvcHJpYXRlIGlmIGl0IGRvZXMgbWF0Y2guIFRoaXMgZ2l2ZXMgdXMgZXZlcnl0aGluZyB0aGF0XG4gICAgICAgICAgLy8gbWF0Y2hlcyB0aGUgY3VycmVudCByYXcgZWxlbWVudCwgYnV0IGl0IG1heSBjb250YWluIGR1cGxpY2F0ZSBlbnRyaWVzIChlLmcuIG11bHRpcGxlXG4gICAgICAgICAgLy8gYFRlc3RFbGVtZW50YCBvciBtdWx0aXBsZSBgQ29tcG9uZW50SGFybmVzc2Agb2YgdGhlIHNhbWUgdHlwZS5cbiAgICAgICAgICBhbGxRdWVyaWVzLm1hcChxdWVyeSA9PlxuICAgICAgICAgICAgICB0aGlzLl9nZXRRdWVyeVJlc3VsdEZvckVsZW1lbnQocXVlcnksIHJhd0VsZW1lbnQsIHRlc3RFbGVtZW50LCBza2lwU2VsZWN0b3JDaGVjaykpKTtcbiAgICAgIHJldHVybiBfcmVtb3ZlRHVwbGljYXRlUXVlcnlSZXN1bHRzKGFsbFJlc3VsdHNGb3JFbGVtZW50KTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIChbXSBhcyBhbnkpLmNvbmNhdCguLi5wZXJFbGVtZW50TWF0Y2hlcyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gcXVlcnkgbWF0Y2hlcyB0aGUgZ2l2ZW4gZWxlbWVudCwgaWYgaXQgZG9lcyByZXR1cm4gdGhlIG1hdGNoZWRcbiAgICogYFRlc3RFbGVtZW50YCBvciBgQ29tcG9uZW50SGFybmVzc2AsIGlmIGl0IGRvZXMgbm90LCByZXR1cm4gbnVsbC4gSW4gY2FzZXMgd2hlcmUgdGhlIGNhbGxlclxuICAgKiBrbm93cyBmb3Igc3VyZSB0aGF0IHRoZSBxdWVyeSBtYXRjaGVzIHRoZSBlbGVtZW50J3Mgc2VsZWN0b3IsIGBza2lwU2VsZWN0b3JDaGVja2AgY2FuIGJlIHVzZWRcbiAgICogdG8gc2tpcCB2ZXJpZmljYXRpb24gYW5kIG9wdGltaXplIHBlcmZvcm1hbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0UXVlcnlSZXN1bHRGb3JFbGVtZW50PFQgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzPihcbiAgICAgIHF1ZXJ5OiBzdHJpbmcgfCBIYXJuZXNzUHJlZGljYXRlPFQ+LCByYXdFbGVtZW50OiBFLCB0ZXN0RWxlbWVudDogVGVzdEVsZW1lbnQsXG4gICAgICBza2lwU2VsZWN0b3JDaGVjazogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxUIHwgVGVzdEVsZW1lbnQgfCBudWxsPiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAoKHNraXBTZWxlY3RvckNoZWNrIHx8IGF3YWl0IHRlc3RFbGVtZW50Lm1hdGNoZXNTZWxlY3RvcihxdWVyeSkpID8gdGVzdEVsZW1lbnQgOiBudWxsKTtcbiAgICB9XG4gICAgaWYgKHNraXBTZWxlY3RvckNoZWNrIHx8IGF3YWl0IHRlc3RFbGVtZW50Lm1hdGNoZXNTZWxlY3RvcihxdWVyeS5nZXRTZWxlY3RvcigpKSkge1xuICAgICAgY29uc3QgaGFybmVzcyA9IHRoaXMuY3JlYXRlQ29tcG9uZW50SGFybmVzcyhxdWVyeS5oYXJuZXNzVHlwZSwgcmF3RWxlbWVudCk7XG4gICAgICByZXR1cm4gKGF3YWl0IHF1ZXJ5LmV2YWx1YXRlKGhhcm5lc3MpKSA/IGhhcm5lc3MgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlcyBhIGxpc3Qgb2YgcXVlcmllcyBpbiB0aGUgZm9ybWF0IGFjY2VwdGVkIGJ5IHRoZSBgbG9jYXRvckZvcipgIG1ldGhvZHMgaW50byBhbiBlYXNpZXIgdG9cbiAqIHdvcmsgd2l0aCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIF9wYXJzZVF1ZXJpZXM8VCBleHRlbmRzIChIYXJuZXNzUXVlcnk8YW55PiB8IHN0cmluZylbXT4ocXVlcmllczogVCk6XG4gICAgUGFyc2VkUXVlcmllczxMb2NhdG9yRm5SZXN1bHQ8VD4gJiBDb21wb25lbnRIYXJuZXNzPiB7XG4gIGNvbnN0IGFsbFF1ZXJpZXMgPSBbXTtcbiAgY29uc3QgaGFybmVzc1F1ZXJpZXMgPSBbXTtcbiAgY29uc3QgZWxlbWVudFF1ZXJpZXMgPSBbXTtcbiAgY29uc3QgaGFybmVzc1R5cGVzID1cbiAgICAgIG5ldyBTZXQ8Q29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yPExvY2F0b3JGblJlc3VsdDxUPiAmIENvbXBvbmVudEhhcm5lc3M+PigpO1xuXG4gIGZvciAoY29uc3QgcXVlcnkgb2YgcXVlcmllcykge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhbGxRdWVyaWVzLnB1c2gocXVlcnkpO1xuICAgICAgZWxlbWVudFF1ZXJpZXMucHVzaChxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZWRpY2F0ZSA9IHF1ZXJ5IGluc3RhbmNlb2YgSGFybmVzc1ByZWRpY2F0ZSA/IHF1ZXJ5IDogbmV3IEhhcm5lc3NQcmVkaWNhdGUocXVlcnksIHt9KTtcbiAgICAgIGFsbFF1ZXJpZXMucHVzaChwcmVkaWNhdGUpO1xuICAgICAgaGFybmVzc1F1ZXJpZXMucHVzaChwcmVkaWNhdGUpO1xuICAgICAgaGFybmVzc1R5cGVzLmFkZChwcmVkaWNhdGUuaGFybmVzc1R5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7YWxsUXVlcmllcywgaGFybmVzc1F1ZXJpZXMsIGVsZW1lbnRRdWVyaWVzLCBoYXJuZXNzVHlwZXN9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgZHVwbGljYXRlIHF1ZXJ5IHJlc3VsdHMgZm9yIGEgcGFydGljdWxhciBlbGVtZW50LiAoZS5nLiBtdWx0aXBsZSBgVGVzdEVsZW1lbnRgXG4gKiBpbnN0YW5jZXMgb3IgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIHRoZSBzYW1lIGBDb21wb25lbnRIYXJuZXNzYCBjbGFzcy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gX3JlbW92ZUR1cGxpY2F0ZVF1ZXJ5UmVzdWx0czxUIGV4dGVuZHMgKENvbXBvbmVudEhhcm5lc3MgfCBUZXN0RWxlbWVudCB8IG51bGwpW10+KFxuICAgIHJlc3VsdHM6IFQpOiBQcm9taXNlPFQ+IHtcbiAgbGV0IHRlc3RFbGVtZW50TWF0Y2hlZCA9IGZhbHNlO1xuICBsZXQgbWF0Y2hlZEhhcm5lc3NUeXBlcyA9IG5ldyBTZXQoKTtcbiAgY29uc3QgZGVkdXBlZE1hdGNoZXMgPSBbXTtcbiAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIENvbXBvbmVudEhhcm5lc3MpIHtcbiAgICAgIGlmICghbWF0Y2hlZEhhcm5lc3NUeXBlcy5oYXMocmVzdWx0LmNvbnN0cnVjdG9yKSkge1xuICAgICAgICBtYXRjaGVkSGFybmVzc1R5cGVzLmFkZChyZXN1bHQuY29uc3RydWN0b3IpO1xuICAgICAgICBkZWR1cGVkTWF0Y2hlcy5wdXNoKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghdGVzdEVsZW1lbnRNYXRjaGVkKSB7XG4gICAgICB0ZXN0RWxlbWVudE1hdGNoZWQgPSB0cnVlO1xuICAgICAgZGVkdXBlZE1hdGNoZXMucHVzaChyZXN1bHQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVkdXBlZE1hdGNoZXMgYXMgVDtcbn1cblxuLyoqIFZlcmlmaWVzIHRoYXQgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHJlc3VsdCBpbiBhbiBhcnJheS4gKi9cbmFzeW5jIGZ1bmN0aW9uIF9hc3NlcnRSZXN1bHRGb3VuZDxUPihyZXN1bHRzOiBQcm9taXNlPFRbXT4sIHF1ZXJ5RGVzY3JpcHRpb25zOiBzdHJpbmdbXSk6XG4gICAgUHJvbWlzZTxUPiB7XG4gIGNvbnN0IHJlc3VsdCA9IChhd2FpdCByZXN1bHRzKVswXTtcbiAgaWYgKHJlc3VsdCA9PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBFcnJvcihgRmFpbGVkIHRvIGZpbmQgZWxlbWVudCBtYXRjaGluZyBvbmUgb2YgdGhlIGZvbGxvd2luZyBxdWVyaWVzOlxcbmAgK1xuICAgICAgICBxdWVyeURlc2NyaXB0aW9ucy5tYXAoZGVzYyA9PiBgKCR7ZGVzY30pYCkuam9pbignLFxcbicpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogR2V0cyBhIGxpc3Qgb2YgZGVzY3JpcHRpb24gc3RyaW5ncyBmcm9tIGEgbGlzdCBvZiBxdWVyaWVzLiAqL1xuZnVuY3Rpb24gX2dldERlc2NyaXB0aW9uRm9yTG9jYXRvckZvclF1ZXJpZXMocXVlcmllczogKHN0cmluZyB8IEhhcm5lc3NRdWVyeTxhbnk+KVtdKSB7XG4gIHJldHVybiBxdWVyaWVzLm1hcChxdWVyeSA9PiB0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnID9cbiAgICAgIF9nZXREZXNjcmlwdGlvbkZvclRlc3RFbGVtZW50UXVlcnkocXVlcnkpIDogX2dldERlc2NyaXB0aW9uRm9yQ29tcG9uZW50SGFybmVzc1F1ZXJ5KHF1ZXJ5KSk7XG59XG5cbi8qKiBHZXRzIGEgZGVzY3JpcHRpb24gc3RyaW5nIGZvciBhIGBDb21wb25lbnRIYXJuZXNzYCBxdWVyeS4gKi9cbmZ1bmN0aW9uIF9nZXREZXNjcmlwdGlvbkZvckNvbXBvbmVudEhhcm5lc3NRdWVyeShxdWVyeTogSGFybmVzc1F1ZXJ5PGFueT4pIHtcbiAgY29uc3QgaGFybmVzc1ByZWRpY2F0ZSA9XG4gICAgICBxdWVyeSBpbnN0YW5jZW9mIEhhcm5lc3NQcmVkaWNhdGUgPyBxdWVyeSA6IG5ldyBIYXJuZXNzUHJlZGljYXRlKHF1ZXJ5LCB7fSk7XG4gIGNvbnN0IHtuYW1lLCBob3N0U2VsZWN0b3J9ID0gaGFybmVzc1ByZWRpY2F0ZS5oYXJuZXNzVHlwZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgJHtuYW1lfSB3aXRoIGhvc3QgZWxlbWVudCBtYXRjaGluZyBzZWxlY3RvcjogXCIke2hvc3RTZWxlY3Rvcn1cImA7XG4gIGNvbnN0IGNvbnN0cmFpbnRzID0gaGFybmVzc1ByZWRpY2F0ZS5nZXREZXNjcmlwdGlvbigpO1xuICByZXR1cm4gZGVzY3JpcHRpb24gKyAoY29uc3RyYWludHMgP1xuICAgICAgYCBzYXRpc2Z5aW5nIHRoZSBjb25zdHJhaW50czogJHtoYXJuZXNzUHJlZGljYXRlLmdldERlc2NyaXB0aW9uKCl9YCA6ICcnKTtcbn1cblxuLyoqIEdldHMgYSBkZXNjcmlwdGlvbiBzdHJpbmcgZm9yIGEgYFRlc3RFbGVtZW50YCBxdWVyeS4gKi9cbmZ1bmN0aW9uIF9nZXREZXNjcmlwdGlvbkZvclRlc3RFbGVtZW50UXVlcnkoc2VsZWN0b3I6IHN0cmluZykge1xuICByZXR1cm4gYFRlc3RFbGVtZW50IGZvciBlbGVtZW50IG1hdGNoaW5nIHNlbGVjdG9yOiBcIiR7c2VsZWN0b3J9XCJgO1xufVxuXG4vKiogR2V0cyBhIGRlc2NyaXB0aW9uIHN0cmluZyBmb3IgYSBgSGFybmVzc0xvYWRlcmAgcXVlcnkuICovXG5mdW5jdGlvbiBfZ2V0RGVzY3JpcHRpb25Gb3JIYXJuZXNzTG9hZGVyUXVlcnkoc2VsZWN0b3I6IHN0cmluZykge1xuICByZXR1cm4gYEhhcm5lc3NMb2FkZXIgZm9yIGVsZW1lbnQgbWF0Y2hpbmcgc2VsZWN0b3I6IFwiJHtzZWxlY3Rvcn1cImA7XG59XG4iXX0=