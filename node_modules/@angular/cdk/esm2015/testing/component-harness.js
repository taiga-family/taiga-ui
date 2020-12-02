/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __awaiter } from "tslib";
/**
 * Base class for component harnesses that all component harness authors should extend. This base
 * component harness provides the basic ability to locate element and sub-component harness. It
 * should be inherited when defining user's own harness.
 */
export class ComponentHarness {
    constructor(locatorFactory) {
        this.locatorFactory = locatorFactory;
    }
    /** Gets a `Promise` for the `TestElement` representing the host element of the component. */
    host() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.locatorFactory.rootElement;
        });
    }
    /**
     * Gets a `LocatorFactory` for the document root element. This factory can be used to create
     * locators for elements that a component creates outside of its own root element. (e.g. by
     * appending to document.body).
     */
    documentRootLocatorFactory() {
        return this.locatorFactory.documentRootLocatorFactory();
    }
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
    locatorFor(...queries) {
        return this.locatorFactory.locatorFor(...queries);
    }
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
    locatorForOptional(...queries) {
        return this.locatorFactory.locatorForOptional(...queries);
    }
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
    locatorForAll(...queries) {
        return this.locatorFactory.locatorForAll(...queries);
    }
    /**
     * Flushes change detection and async tasks in the Angular zone.
     * In most cases it should not be necessary to call this manually. However, there may be some edge
     * cases where it is needed to fully flush animation events.
     */
    forceStabilize() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.locatorFactory.forceStabilize();
        });
    }
    /**
     * Waits for all scheduled or running async tasks to complete. This allows harness
     * authors to wait for async tasks outside of the Angular zone.
     */
    waitForTasksOutsideAngular() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.locatorFactory.waitForTasksOutsideAngular();
        });
    }
}
/**
 * A class used to associate a ComponentHarness class with predicates functions that can be used to
 * filter instances of the class.
 */
export class HarnessPredicate {
    constructor(harnessType, options) {
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
    static stringMatches(value, pattern) {
        return __awaiter(this, void 0, void 0, function* () {
            value = yield value;
            if (pattern === null) {
                return value === null;
            }
            else if (value === null) {
                return false;
            }
            return typeof pattern === 'string' ? value === pattern : pattern.test(value);
        });
    }
    /**
     * Adds a predicate function to be run against candidate harnesses.
     * @param description A description of this predicate that may be used in error messages.
     * @param predicate An async predicate function.
     * @return this (for method chaining).
     */
    add(description, predicate) {
        this._descriptions.push(description);
        this._predicates.push(predicate);
        return this;
    }
    /**
     * Adds a predicate function that depends on an option value to be run against candidate
     * harnesses. If the option value is undefined, the predicate will be ignored.
     * @param name The name of the option (may be used in error messages).
     * @param option The option value.
     * @param predicate The predicate function to run if the option value is not undefined.
     * @return this (for method chaining).
     */
    addOption(name, option, predicate) {
        if (option !== undefined) {
            this.add(`${name} = ${_valueAsString(option)}`, item => predicate(item, option));
        }
        return this;
    }
    /**
     * Filters a list of harnesses on this predicate.
     * @param harnesses The list of harnesses to filter.
     * @return A list of harnesses that satisfy this predicate.
     */
    filter(harnesses) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield Promise.all(harnesses.map(h => this.evaluate(h)));
            return harnesses.filter((_, i) => results[i]);
        });
    }
    /**
     * Evaluates whether the given harness satisfies this predicate.
     * @param harness The harness to check
     * @return A promise that resolves to true if the harness satisfies this predicate,
     *   and resolves to false otherwise.
     */
    evaluate(harness) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield Promise.all(this._predicates.map(p => p(harness)));
            return results.reduce((combined, current) => combined && current, true);
        });
    }
    /** Gets a description of this predicate for use in error messages. */
    getDescription() {
        return this._descriptions.join(', ');
    }
    /** Gets the selector used to find candidate elements. */
    getSelector() {
        return this._ancestor.split(',')
            .map(part => `${part.trim()} ${this.harnessType.hostSelector}`.trim())
            .join(',');
    }
    /** Adds base options common to all harness types. */
    _addBaseOptions(options) {
        this._ancestor = options.ancestor || '';
        if (this._ancestor) {
            this._descriptions.push(`has ancestor matching selector "${this._ancestor}"`);
        }
        const selector = options.selector;
        if (selector !== undefined) {
            this.add(`host matches selector "${selector}"`, (item) => __awaiter(this, void 0, void 0, function* () {
                return (yield item.host()).matchesSelector(selector);
            }));
        }
    }
}
/** Represent a value as a string for the purpose of logging. */
function _valueAsString(value) {
    if (value === undefined) {
        return 'undefined';
    }
    // `JSON.stringify` doesn't handle RegExp properly, so we need a custom replacer.
    try {
        return JSON.stringify(value, (_, v) => {
            if (v instanceof RegExp) {
                return `/${v.toString()}/`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWhhcm5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3Rlc3RpbmcvY29tcG9uZW50LWhhcm5lc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQTJPSDs7OztHQUlHO0FBQ0gsTUFBTSxPQUFnQixnQkFBZ0I7SUFDcEMsWUFBK0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUVqRSw2RkFBNkY7SUFDdkYsSUFBSTs7WUFDUixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQ3pDLENBQUM7S0FBQTtJQUVEOzs7O09BSUc7SUFDTywwQkFBMEI7UUFDbEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CRztJQUNPLFVBQVUsQ0FBMkMsR0FBRyxPQUFVO1FBRTFFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bb0JHO0lBQ08sa0JBQWtCLENBQTJDLEdBQUcsT0FBVTtRQUVsRixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbUNHO0lBQ08sYUFBYSxDQUEyQyxHQUFHLE9BQVU7UUFFN0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7OztPQUlHO0lBQ2EsY0FBYzs7WUFDNUIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FB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QjtZQUVELE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzVFO0lBQUMsV0FBTTtRQUNOLHlEQUF5RDtRQUN6RCxrRUFBa0U7UUFDbEUsT0FBTyxPQUFPLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VGVzdEVsZW1lbnR9IGZyb20gJy4vdGVzdC1lbGVtZW50JztcblxuLyoqIEFuIGFzeW5jIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHByb21pc2Ugd2hlbiBjYWxsZWQuICovXG5leHBvcnQgdHlwZSBBc3luY0ZhY3RvcnlGbjxUPiA9ICgpID0+IFByb21pc2U8VD47XG5cbi8qKiBBbiBhc3luYyBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGl0ZW0gYW5kIHJldHVybnMgYSBib29sZWFuIHByb21pc2UgKi9cbmV4cG9ydCB0eXBlIEFzeW5jUHJlZGljYXRlPFQ+ID0gKGl0ZW06IFQpID0+IFByb21pc2U8Ym9vbGVhbj47XG5cbi8qKiBBbiBhc3luYyBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGl0ZW0gYW5kIGFuIG9wdGlvbiB2YWx1ZSBhbmQgcmV0dXJucyBhIGJvb2xlYW4gcHJvbWlzZS4gKi9cbmV4cG9ydCB0eXBlIEFzeW5jT3B0aW9uUHJlZGljYXRlPFQsIE8+ID0gKGl0ZW06IFQsIG9wdGlvbjogTykgPT4gUHJvbWlzZTxib29sZWFuPjtcblxuLyoqXG4gKiBBIHF1ZXJ5IGZvciBhIGBDb21wb25lbnRIYXJuZXNzYCwgd2hpY2ggaXMgZXhwcmVzc2VkIGFzIGVpdGhlciBhIGBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3JgIG9yXG4gKiBhIGBIYXJuZXNzUHJlZGljYXRlYC5cbiAqL1xuZXhwb3J0IHR5cGUgSGFybmVzc1F1ZXJ5PFQgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzPiA9XG4gICAgQ29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yPFQ+IHwgSGFybmVzc1ByZWRpY2F0ZTxUPjtcblxuLyoqXG4gKiBUaGUgcmVzdWx0IHR5cGUgb2J0YWluZWQgd2hlbiBzZWFyY2hpbmcgdXNpbmcgYSBwYXJ0aWN1bGFyIGxpc3Qgb2YgcXVlcmllcy4gVGhpcyB0eXBlIGRlcGVuZHMgb25cbiAqIHRoZSBwYXJ0aWN1bGFyIGl0ZW1zIGJlaW5nIHF1ZXJpZWQuXG4gKiAtIElmIG9uZSBvZiB0aGUgcXVlcmllcyBpcyBmb3IgYSBgQ29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yPEMxPmAsIGl0IG1lYW5zIHRoYXQgdGhlIHJlc3VsdFxuICogICBtaWdodCBiZSBhIGhhcm5lc3Mgb2YgdHlwZSBgQzFgXG4gKiAtIElmIG9uZSBvZiB0aGUgcXVlcmllcyBpcyBmb3IgYSBgSGFybmVzc1ByZWRpY2F0ZTxDMj5gLCBpdCBtZWFucyB0aGF0IHRoZSByZXN1bHQgbWlnaHQgYmUgYVxuICogICBoYXJuZXNzIG9mIHR5cGUgYEMyYFxuICogLSBJZiBvbmUgb2YgdGhlIHF1ZXJpZXMgaXMgZm9yIGEgYHN0cmluZ2AsIGl0IG1lYW5zIHRoYXQgdGhlIHJlc3VsdCBtaWdodCBiZSBhIGBUZXN0RWxlbWVudGAuXG4gKlxuICogU2luY2Ugd2UgZG9uJ3Qga25vdyBmb3Igc3VyZSB3aGljaCBxdWVyeSB3aWxsIG1hdGNoLCB0aGUgcmVzdWx0IHR5cGUgaWYgdGhlIHVuaW9uIG9mIHRoZSB0eXBlc1xuICogZm9yIGFsbCBwb3NzaWJsZSByZXN1bHRzLlxuICpcbiAqIGUuZy5cbiAqIFRoZSB0eXBlOlxuICogYExvY2F0b3JGblJlc3VsdCZsdDtbXG4gKiAgIENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvciZsdDtNeUhhcm5lc3MmZ3Q7LFxuICogICBIYXJuZXNzUHJlZGljYXRlJmx0O015T3RoZXJIYXJuZXNzJmd0OyxcbiAqICAgc3RyaW5nXG4gKiBdJmd0O2BcbiAqIGlzIGVxdWl2YWxlbnQgdG86XG4gKiBgTXlIYXJuZXNzIHwgTXlPdGhlckhhcm5lc3MgfCBUZXN0RWxlbWVudGAuXG4gKi9cbmV4cG9ydCB0eXBlIExvY2F0b3JGblJlc3VsdDxUIGV4dGVuZHMgKEhhcm5lc3NRdWVyeTxhbnk+IHwgc3RyaW5nKVtdPiA9IHtcbiAgW0kgaW4ga2V5b2YgVF06XG4gICAgICAvLyBNYXAgYENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcjxDPmAgdG8gYENgLlxuICAgICAgVFtJXSBleHRlbmRzIG5ldyAoLi4uYXJnczogYW55W10pID0+IGluZmVyIEMgPyBDIDpcbiAgICAgIC8vIE1hcCBgSGFybmVzc1ByZWRpY2F0ZTxDPmAgdG8gYENgLlxuICAgICAgVFtJXSBleHRlbmRzIHsgaGFybmVzc1R5cGU6IG5ldyAoLi4uYXJnczogYW55W10pID0+IGluZmVyIEMgfSA/IEMgOlxuICAgICAgLy8gTWFwIGBzdHJpbmdgIHRvIGBUZXN0RWxlbWVudGAuXG4gICAgICBUW0ldIGV4dGVuZHMgc3RyaW5nID8gVGVzdEVsZW1lbnQgOlxuICAgICAgLy8gTWFwIGV2ZXJ5dGhpbmcgZWxzZSB0byBgbmV2ZXJgIChzaG91bGQgbm90IGhhcHBlbiBkdWUgdG8gdGhlIHR5cGUgY29uc3RyYWludCBvbiBgVGApLlxuICAgICAgbmV2ZXI7XG59W251bWJlcl07XG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgdXNlZCB0byBsb2FkIENvbXBvbmVudEhhcm5lc3Mgb2JqZWN0cy4gVGhpcyBpbnRlcmZhY2UgaXMgdXNlZCBieSB0ZXN0IGF1dGhvcnMgdG9cbiAqIGluc3RhbnRpYXRlIGBDb21wb25lbnRIYXJuZXNzYGVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhhcm5lc3NMb2FkZXIge1xuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIGFuIGVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gc2VsZWN0b3IgdW5kZXIgdGhlIGN1cnJlbnQgaW5zdGFuY2VzJ3Mgcm9vdCBlbGVtZW50LFxuICAgKiBhbmQgcmV0dXJucyBhIGBIYXJuZXNzTG9hZGVyYCByb290ZWQgYXQgdGhlIG1hdGNoaW5nIGVsZW1lbnQuIElmIG11bHRpcGxlIGVsZW1lbnRzIG1hdGNoIHRoZVxuICAgKiBzZWxlY3RvciwgdGhlIGZpcnN0IGlzIHVzZWQuIElmIG5vIGVsZW1lbnRzIG1hdGNoLCBhbiBlcnJvciBpcyB0aHJvd24uXG4gICAqIEBwYXJhbSBzZWxlY3RvciBUaGUgc2VsZWN0b3IgZm9yIHRoZSByb290IGVsZW1lbnQgb2YgdGhlIG5ldyBgSGFybmVzc0xvYWRlcmBcbiAgICogQHJldHVybiBBIGBIYXJuZXNzTG9hZGVyYCByb290ZWQgYXQgdGhlIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIGdpdmVuIHNlbGVjdG9yLlxuICAgKiBAdGhyb3dzIElmIGEgbWF0Y2hpbmcgZWxlbWVudCBjYW4ndCBiZSBmb3VuZC5cbiAgICovXG4gIGdldENoaWxkTG9hZGVyKHNlbGVjdG9yOiBzdHJpbmcpOiBQcm9taXNlPEhhcm5lc3NMb2FkZXI+O1xuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3IgYWxsIGVsZW1lbnRzIHdpdGggdGhlIGdpdmVuIHNlbGVjdG9yIHVuZGVyIHRoZSBjdXJyZW50IGluc3RhbmNlcydzIHJvb3QgZWxlbWVudCxcbiAgICogYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgYEhhcm5lc3NMb2FkZXJgcywgb25lIGZvciBlYWNoIG1hdGNoaW5nIGVsZW1lbnQsIHJvb3RlZCBhdCB0aGF0XG4gICAqIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBzZWxlY3RvciBUaGUgc2VsZWN0b3IgZm9yIHRoZSByb290IGVsZW1lbnQgb2YgdGhlIG5ldyBgSGFybmVzc0xvYWRlcmBcbiAgICogQHJldHVybiBBIGxpc3Qgb2YgYEhhcm5lc3NMb2FkZXJgcywgb25lIGZvciBlYWNoIG1hdGNoaW5nIGVsZW1lbnQsIHJvb3RlZCBhdCB0aGF0IGVsZW1lbnQuXG4gICAqL1xuICBnZXRBbGxDaGlsZExvYWRlcnMoc2VsZWN0b3I6IHN0cmluZyk6IFByb21pc2U8SGFybmVzc0xvYWRlcltdPjtcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIGFuIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaGFybmVzcyB0eXBlIHVuZGVyIHRoZVxuICAgKiBgSGFybmVzc0xvYWRlcmAncyByb290IGVsZW1lbnQsIGFuZCByZXR1cm5zIGEgYENvbXBvbmVudEhhcm5lc3NgIGZvciB0aGF0IGluc3RhbmNlLiBJZiBtdWx0aXBsZVxuICAgKiBtYXRjaGluZyBjb21wb25lbnRzIGFyZSBmb3VuZCwgYSBoYXJuZXNzIGZvciB0aGUgZmlyc3Qgb25lIGlzIHJldHVybmVkLiBJZiBubyBtYXRjaGluZ1xuICAgKiBjb21wb25lbnQgaXMgZm91bmQsIGFuIGVycm9yIGlzIHRocm93bi5cbiAgICogQHBhcmFtIHF1ZXJ5IEEgcXVlcnkgZm9yIGEgaGFybmVzcyB0byBjcmVhdGVcbiAgICogQHJldHVybiBBbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gaGFybmVzcyB0eXBlXG4gICAqIEB0aHJvd3MgSWYgYSBtYXRjaGluZyBjb21wb25lbnQgaW5zdGFuY2UgY2FuJ3QgYmUgZm91bmQuXG4gICAqL1xuICBnZXRIYXJuZXNzPFQgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzPihxdWVyeTogSGFybmVzc1F1ZXJ5PFQ+KTogUHJvbWlzZTxUPjtcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIGFsbCBpbnN0YW5jZXMgb2YgdGhlIGNvbXBvbmVudCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBoYXJuZXNzIHR5cGUgdW5kZXIgdGhlXG4gICAqIGBIYXJuZXNzTG9hZGVyYCdzIHJvb3QgZWxlbWVudCwgYW5kIHJldHVybnMgYSBsaXN0IGBDb21wb25lbnRIYXJuZXNzYCBmb3IgZWFjaCBpbnN0YW5jZS5cbiAgICogQHBhcmFtIHF1ZXJ5IEEgcXVlcnkgZm9yIGEgaGFybmVzcyB0byBjcmVhdGVcbiAgICogQHJldHVybiBBIGxpc3QgaW5zdGFuY2VzIG9mIHRoZSBnaXZlbiBoYXJuZXNzIHR5cGUuXG4gICAqL1xuICBnZXRBbGxIYXJuZXNzZXM8VCBleHRlbmRzIENvbXBvbmVudEhhcm5lc3M+KHF1ZXJ5OiBIYXJuZXNzUXVlcnk8VD4pOiBQcm9taXNlPFRbXT47XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIHVzZWQgdG8gY3JlYXRlIGFzeW5jaHJvbm91cyBsb2NhdG9yIGZ1bmN0aW9ucyB1c2VkIGZpbmQgZWxlbWVudHMgYW5kIGNvbXBvbmVudFxuICogaGFybmVzc2VzLiBUaGlzIGludGVyZmFjZSBpcyB1c2VkIGJ5IGBDb21wb25lbnRIYXJuZXNzYCBhdXRob3JzIHRvIGNyZWF0ZSBsb2NhdG9yIGZ1bmN0aW9ucyBmb3JcbiAqIHRoZWlyIGBDb21wb25lbnRIYXJuZXNzYCBzdWJjbGFzcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2NhdG9yRmFjdG9yeSB7XG4gIC8qKiBHZXRzIGEgbG9jYXRvciBmYWN0b3J5IHJvb3RlZCBhdCB0aGUgZG9jdW1lbnQgcm9vdC4gKi9cbiAgZG9jdW1lbnRSb290TG9jYXRvckZhY3RvcnkoKTogTG9jYXRvckZhY3Rvcnk7XG5cbiAgLyoqIFRoZSByb290IGVsZW1lbnQgb2YgdGhpcyBgTG9jYXRvckZhY3RvcnlgIGFzIGEgYFRlc3RFbGVtZW50YC4gKi9cbiAgcm9vdEVsZW1lbnQ6IFRlc3RFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGFzeW5jaHJvbm91cyBsb2NhdG9yIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZmluZCBhIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZVxuICAgKiBvciBlbGVtZW50IHVuZGVyIHRoZSByb290IGVsZW1lbnQgb2YgdGhpcyBgTG9jYXRvckZhY3RvcnlgLlxuICAgKiBAcGFyYW0gcXVlcmllcyBBIGxpc3Qgb2YgcXVlcmllcyBzcGVjaWZ5aW5nIHdoaWNoIGhhcm5lc3NlcyBhbmQgZWxlbWVudHMgdG8gc2VhcmNoIGZvcjpcbiAgICogICAtIEEgYHN0cmluZ2Agc2VhcmNoZXMgZm9yIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBDU1Mgc2VsZWN0b3Igc3BlY2lmaWVkIGJ5IHRoZSBzdHJpbmcuXG4gICAqICAgLSBBIGBDb21wb25lbnRIYXJuZXNzYCBjb25zdHJ1Y3RvciBzZWFyY2hlcyBmb3IgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlcyBtYXRjaGluZyB0aGVcbiAgICogICAgIGdpdmVuIGNsYXNzLlxuICAgKiAgIC0gQSBgSGFybmVzc1ByZWRpY2F0ZWAgc2VhcmNoZXMgZm9yIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZXMgbWF0Y2hpbmcgdGhlIGdpdmVuXG4gICAqICAgICBwcmVkaWNhdGUuXG4gICAqIEByZXR1cm4gQW4gYXN5bmNocm9ub3VzIGxvY2F0b3IgZnVuY3Rpb24gdGhhdCBzZWFyY2hlcyBmb3IgYW5kIHJldHVybnMgYSBgUHJvbWlzZWAgZm9yIHRoZVxuICAgKiAgIGZpcnN0IGVsZW1lbnQgb3IgaGFybmVzcyBtYXRjaGluZyB0aGUgZ2l2ZW4gc2VhcmNoIGNyaXRlcmlhLiBNYXRjaGVzIGFyZSBvcmRlcmVkIGZpcnN0IGJ5XG4gICAqICAgb3JkZXIgaW4gdGhlIERPTSwgYW5kIHNlY29uZCBieSBvcmRlciBpbiB0aGUgcXVlcmllcyBsaXN0LiBJZiBubyBtYXRjaGVzIGFyZSBmb3VuZCwgdGhlXG4gICAqICAgYFByb21pc2VgIHJlamVjdHMuIFRoZSB0eXBlIHRoYXQgdGhlIGBQcm9taXNlYCByZXNvbHZlcyB0byBpcyBhIHVuaW9uIG9mIGFsbCByZXN1bHQgdHlwZXMgZm9yXG4gICAqICAgZWFjaCBxdWVyeS5cbiAgICpcbiAgICogZS5nLiBHaXZlbiB0aGUgZm9sbG93aW5nIERPTTogYDxkaXYgaWQ9XCJkMVwiIC8+PGRpdiBpZD1cImQyXCIgLz5gLCBhbmQgYXNzdW1pbmdcbiAgICogYERpdkhhcm5lc3MuaG9zdFNlbGVjdG9yID09PSAnZGl2J2A6XG4gICAqIC0gYGF3YWl0IGxmLmxvY2F0b3JGb3IoRGl2SGFybmVzcywgJ2RpdicpKClgIGdldHMgYSBgRGl2SGFybmVzc2AgaW5zdGFuY2UgZm9yIGAjZDFgXG4gICAqIC0gYGF3YWl0IGxmLmxvY2F0b3JGb3IoJ2RpdicsIERpdkhhcm5lc3MpKClgIGdldHMgYSBgVGVzdEVsZW1lbnRgIGluc3RhbmNlIGZvciBgI2QxYFxuICAgKiAtIGBhd2FpdCBsZi5sb2NhdG9yRm9yKCdzcGFuJykoKWAgdGhyb3dzIGJlY2F1c2UgdGhlIGBQcm9taXNlYCByZWplY3RzLlxuICAgKi9cbiAgbG9jYXRvckZvcjxUIGV4dGVuZHMgKEhhcm5lc3NRdWVyeTxhbnk+IHwgc3RyaW5nKVtdPiguLi5xdWVyaWVzOiBUKTpcbiAgICAgIEFzeW5jRmFjdG9yeUZuPExvY2F0b3JGblJlc3VsdDxUPj47XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYXN5bmNocm9ub3VzIGxvY2F0b3IgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBmaW5kIGEgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlXG4gICAqIG9yIGVsZW1lbnQgdW5kZXIgdGhlIHJvb3QgZWxlbWVudCBvZiB0aGlzIGBMb2NhdG9yRmFjdG9yeWAuXG4gICAqIEBwYXJhbSBxdWVyaWVzIEEgbGlzdCBvZiBxdWVyaWVzIHNwZWNpZnlpbmcgd2hpY2ggaGFybmVzc2VzIGFuZCBlbGVtZW50cyB0byBzZWFyY2ggZm9yOlxuICAgKiAgIC0gQSBgc3RyaW5nYCBzZWFyY2hlcyBmb3IgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIENTUyBzZWxlY3RvciBzcGVjaWZpZWQgYnkgdGhlIHN0cmluZy5cbiAgICogICAtIEEgYENvbXBvbmVudEhhcm5lc3NgIGNvbnN0cnVjdG9yIHNlYXJjaGVzIGZvciBgQ29tcG9uZW50SGFybmVzc2AgaW5zdGFuY2VzIG1hdGNoaW5nIHRoZVxuICAgKiAgICAgZ2l2ZW4gY2xhc3MuXG4gICAqICAgLSBBIGBIYXJuZXNzUHJlZGljYXRlYCBzZWFyY2hlcyBmb3IgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlcyBtYXRjaGluZyB0aGUgZ2l2ZW5cbiAgICogICAgIHByZWRpY2F0ZS5cbiAgICogQHJldHVybiBBbiBhc3luY2hyb25vdXMgbG9jYXRvciBmdW5jdGlvbiB0aGF0IHNlYXJjaGVzIGZvciBhbmQgcmV0dXJucyBhIGBQcm9taXNlYCBmb3IgdGhlXG4gICAqICAgZmlyc3QgZWxlbWVudCBvciBoYXJuZXNzIG1hdGNoaW5nIHRoZSBnaXZlbiBzZWFyY2ggY3JpdGVyaWEuIE1hdGNoZXMgYXJlIG9yZGVyZWQgZmlyc3QgYnlcbiAgICogICBvcmRlciBpbiB0aGUgRE9NLCBhbmQgc2Vjb25kIGJ5IG9yZGVyIGluIHRoZSBxdWVyaWVzIGxpc3QuIElmIG5vIG1hdGNoZXMgYXJlIGZvdW5kLCB0aGVcbiAgICogICBgUHJvbWlzZWAgaXMgcmVzb2x2ZWQgd2l0aCBgbnVsbGAuIFRoZSB0eXBlIHRoYXQgdGhlIGBQcm9taXNlYCByZXNvbHZlcyB0byBpcyBhIHVuaW9uIG9mIGFsbFxuICAgKiAgIHJlc3VsdCB0eXBlcyBmb3IgZWFjaCBxdWVyeSBvciBudWxsLlxuICAgKlxuICAgKiBlLmcuIEdpdmVuIHRoZSBmb2xsb3dpbmcgRE9NOiBgPGRpdiBpZD1cImQxXCIgLz48ZGl2IGlkPVwiZDJcIiAvPmAsIGFuZCBhc3N1bWluZ1xuICAgKiBgRGl2SGFybmVzcy5ob3N0U2VsZWN0b3IgPT09ICdkaXYnYDpcbiAgICogLSBgYXdhaXQgbGYubG9jYXRvckZvck9wdGlvbmFsKERpdkhhcm5lc3MsICdkaXYnKSgpYCBnZXRzIGEgYERpdkhhcm5lc3NgIGluc3RhbmNlIGZvciBgI2QxYFxuICAgKiAtIGBhd2FpdCBsZi5sb2NhdG9yRm9yT3B0aW9uYWwoJ2RpdicsIERpdkhhcm5lc3MpKClgIGdldHMgYSBgVGVzdEVsZW1lbnRgIGluc3RhbmNlIGZvciBgI2QxYFxuICAgKiAtIGBhd2FpdCBsZi5sb2NhdG9yRm9yT3B0aW9uYWwoJ3NwYW4nKSgpYCBnZXRzIGBudWxsYC5cbiAgICovXG4gIGxvY2F0b3JGb3JPcHRpb25hbDxUIGV4dGVuZHMgKEhhcm5lc3NRdWVyeTxhbnk+IHwgc3RyaW5nKVtdPiguLi5xdWVyaWVzOiBUKTpcbiAgICAgIEFzeW5jRmFjdG9yeUZuPExvY2F0b3JGblJlc3VsdDxUPiB8IG51bGw+O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGFzeW5jaHJvbm91cyBsb2NhdG9yIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZmluZCBgQ29tcG9uZW50SGFybmVzc2AgaW5zdGFuY2VzXG4gICAqIG9yIGVsZW1lbnRzIHVuZGVyIHRoZSByb290IGVsZW1lbnQgb2YgdGhpcyBgTG9jYXRvckZhY3RvcnlgLlxuICAgKiBAcGFyYW0gcXVlcmllcyBBIGxpc3Qgb2YgcXVlcmllcyBzcGVjaWZ5aW5nIHdoaWNoIGhhcm5lc3NlcyBhbmQgZWxlbWVudHMgdG8gc2VhcmNoIGZvcjpcbiAgICogICAtIEEgYHN0cmluZ2Agc2VhcmNoZXMgZm9yIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBDU1Mgc2VsZWN0b3Igc3BlY2lmaWVkIGJ5IHRoZSBzdHJpbmcuXG4gICAqICAgLSBBIGBDb21wb25lbnRIYXJuZXNzYCBjb25zdHJ1Y3RvciBzZWFyY2hlcyBmb3IgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlcyBtYXRjaGluZyB0aGVcbiAgICogICAgIGdpdmVuIGNsYXNzLlxuICAgKiAgIC0gQSBgSGFybmVzc1ByZWRpY2F0ZWAgc2VhcmNoZXMgZm9yIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZXMgbWF0Y2hpbmcgdGhlIGdpdmVuXG4gICAqICAgICBwcmVkaWNhdGUuXG4gICAqIEByZXR1cm4gQW4gYXN5bmNocm9ub3VzIGxvY2F0b3IgZnVuY3Rpb24gdGhhdCBzZWFyY2hlcyBmb3IgYW5kIHJldHVybnMgYSBgUHJvbWlzZWAgZm9yIGFsbFxuICAgKiAgIGVsZW1lbnRzIGFuZCBoYXJuZXNzZXMgbWF0Y2hpbmcgdGhlIGdpdmVuIHNlYXJjaCBjcml0ZXJpYS4gTWF0Y2hlcyBhcmUgb3JkZXJlZCBmaXJzdCBieVxuICAgKiAgIG9yZGVyIGluIHRoZSBET00sIGFuZCBzZWNvbmQgYnkgb3JkZXIgaW4gdGhlIHF1ZXJpZXMgbGlzdC4gSWYgYW4gZWxlbWVudCBtYXRjaGVzIG1vcmUgdGhhblxuICAgKiAgIG9uZSBgQ29tcG9uZW50SGFybmVzc2AgY2xhc3MsIHRoZSBsb2NhdG9yIGdldHMgYW4gaW5zdGFuY2Ugb2YgZWFjaCBmb3IgdGhlIHNhbWUgZWxlbWVudC4gSWZcbiAgICogICBhbiBlbGVtZW50IG1hdGNoZXMgbXVsdGlwbGUgYHN0cmluZ2Agc2VsZWN0b3JzLCBvbmx5IG9uZSBgVGVzdEVsZW1lbnRgIGluc3RhbmNlIGlzIHJldHVybmVkXG4gICAqICAgZm9yIHRoYXQgZWxlbWVudC4gVGhlIHR5cGUgdGhhdCB0aGUgYFByb21pc2VgIHJlc29sdmVzIHRvIGlzIGFuIGFycmF5IHdoZXJlIGVhY2ggZWxlbWVudCBpc1xuICAgKiAgIHRoZSB1bmlvbiBvZiBhbGwgcmVzdWx0IHR5cGVzIGZvciBlYWNoIHF1ZXJ5LlxuICAgKlxuICAgKiBlLmcuIEdpdmVuIHRoZSBmb2xsb3dpbmcgRE9NOiBgPGRpdiBpZD1cImQxXCIgLz48ZGl2IGlkPVwiZDJcIiAvPmAsIGFuZCBhc3N1bWluZ1xuICAgKiBgRGl2SGFybmVzcy5ob3N0U2VsZWN0b3IgPT09ICdkaXYnYCBhbmQgYElkSXNEMUhhcm5lc3MuaG9zdFNlbGVjdG9yID09PSAnI2QxJ2A6XG4gICAqIC0gYGF3YWl0IGxmLmxvY2F0b3JGb3JBbGwoRGl2SGFybmVzcywgJ2RpdicpKClgIGdldHMgYFtcbiAgICogICAgIERpdkhhcm5lc3MsIC8vIGZvciAjZDFcbiAgICogICAgIFRlc3RFbGVtZW50LCAvLyBmb3IgI2QxXG4gICAqICAgICBEaXZIYXJuZXNzLCAvLyBmb3IgI2QyXG4gICAqICAgICBUZXN0RWxlbWVudCAvLyBmb3IgI2QyXG4gICAqICAgXWBcbiAgICogLSBgYXdhaXQgbGYubG9jYXRvckZvckFsbCgnZGl2JywgJyNkMScpKClgIGdldHMgYFtcbiAgICogICAgIFRlc3RFbGVtZW50LCAvLyBmb3IgI2QxXG4gICAqICAgICBUZXN0RWxlbWVudCAvLyBmb3IgI2QyXG4gICAqICAgXWBcbiAgICogLSBgYXdhaXQgbGYubG9jYXRvckZvckFsbChEaXZIYXJuZXNzLCBJZElzRDFIYXJuZXNzKSgpYCBnZXRzIGBbXG4gICAqICAgICBEaXZIYXJuZXNzLCAvLyBmb3IgI2QxXG4gICAqICAgICBJZElzRDFIYXJuZXNzLCAvLyBmb3IgI2QxXG4gICAqICAgICBEaXZIYXJuZXNzIC8vIGZvciAjZDJcbiAgICogICBdYFxuICAgKiAtIGBhd2FpdCBsZi5sb2NhdG9yRm9yQWxsKCdzcGFuJykoKWAgZ2V0cyBgW11gLlxuICAgKi9cbiAgbG9jYXRvckZvckFsbDxUIGV4dGVuZHMgKEhhcm5lc3NRdWVyeTxhbnk+IHwgc3RyaW5nKVtdPiguLi5xdWVyaWVzOiBUKTpcbiAgICAgIEFzeW5jRmFjdG9yeUZuPExvY2F0b3JGblJlc3VsdDxUPltdPjtcblxuICAvKipcbiAgICogR2V0cyBhIGBIYXJuZXNzTG9hZGVyYCBpbnN0YW5jZSBmb3IgYW4gZWxlbWVudCB1bmRlciB0aGUgcm9vdCBvZiB0aGlzIGBMb2NhdG9yRmFjdG9yeWAuXG4gICAqIEBwYXJhbSBzZWxlY3RvciBUaGUgc2VsZWN0b3IgZm9yIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEByZXR1cm4gQSBgSGFybmVzc0xvYWRlcmAgcm9vdGVkIGF0IHRoZSBmaXJzdCBlbGVtZW50IG1hdGNoaW5nIHRoZSBnaXZlbiBzZWxlY3Rvci5cbiAgICogQHRocm93cyBJZiBubyBtYXRjaGluZyBlbGVtZW50IGlzIGZvdW5kIGZvciB0aGUgZ2l2ZW4gc2VsZWN0b3IuXG4gICAqL1xuICBoYXJuZXNzTG9hZGVyRm9yKHNlbGVjdG9yOiBzdHJpbmcpOiBQcm9taXNlPEhhcm5lc3NMb2FkZXI+O1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgYEhhcm5lc3NMb2FkZXJgIGluc3RhbmNlIGZvciBhbiBlbGVtZW50IHVuZGVyIHRoZSByb290IG9mIHRoaXMgYExvY2F0b3JGYWN0b3J5YFxuICAgKiBAcGFyYW0gc2VsZWN0b3IgVGhlIHNlbGVjdG9yIGZvciB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIEEgYEhhcm5lc3NMb2FkZXJgIHJvb3RlZCBhdCB0aGUgZmlyc3QgZWxlbWVudCBtYXRjaGluZyB0aGUgZ2l2ZW4gc2VsZWN0b3IsIG9yIG51bGwgaWZcbiAgICogICAgIG5vIG1hdGNoaW5nIGVsZW1lbnQgaXMgZm91bmQuXG4gICAqL1xuICBoYXJuZXNzTG9hZGVyRm9yT3B0aW9uYWwoc2VsZWN0b3I6IHN0cmluZyk6IFByb21pc2U8SGFybmVzc0xvYWRlciB8IG51bGw+O1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgbGlzdCBvZiBgSGFybmVzc0xvYWRlcmAgaW5zdGFuY2VzLCBvbmUgZm9yIGVhY2ggbWF0Y2hpbmcgZWxlbWVudC5cbiAgICogQHBhcmFtIHNlbGVjdG9yIFRoZSBzZWxlY3RvciBmb3IgdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHJldHVybiBBIGxpc3Qgb2YgYEhhcm5lc3NMb2FkZXJgLCBvbmUgcm9vdGVkIGF0IGVhY2ggZWxlbWVudCBtYXRjaGluZyB0aGUgZ2l2ZW4gc2VsZWN0b3IuXG4gICAqL1xuICBoYXJuZXNzTG9hZGVyRm9yQWxsKHNlbGVjdG9yOiBzdHJpbmcpOiBQcm9taXNlPEhhcm5lc3NMb2FkZXJbXT47XG5cbiAgLyoqXG4gICAqIEZsdXNoZXMgY2hhbmdlIGRldGVjdGlvbiBhbmQgYXN5bmMgdGFza3MgY2FwdHVyZWQgaW4gdGhlIEFuZ3VsYXIgem9uZS5cbiAgICogSW4gbW9zdCBjYXNlcyBpdCBzaG91bGQgbm90IGJlIG5lY2Vzc2FyeSB0byBjYWxsIHRoaXMgbWFudWFsbHkuIEhvd2V2ZXIsIHRoZXJlIG1heSBiZSBzb21lIGVkZ2VcbiAgICogY2FzZXMgd2hlcmUgaXQgaXMgbmVlZGVkIHRvIGZ1bGx5IGZsdXNoIGFuaW1hdGlvbiBldmVudHMuXG4gICAqL1xuICBmb3JjZVN0YWJpbGl6ZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBXYWl0cyBmb3IgYWxsIHNjaGVkdWxlZCBvciBydW5uaW5nIGFzeW5jIHRhc2tzIHRvIGNvbXBsZXRlLiBUaGlzIGFsbG93cyBoYXJuZXNzXG4gICAqIGF1dGhvcnMgdG8gd2FpdCBmb3IgYXN5bmMgdGFza3Mgb3V0c2lkZSBvZiB0aGUgQW5ndWxhciB6b25lLlxuICAgKi9cbiAgd2FpdEZvclRhc2tzT3V0c2lkZUFuZ3VsYXIoKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnQgaGFybmVzc2VzIHRoYXQgYWxsIGNvbXBvbmVudCBoYXJuZXNzIGF1dGhvcnMgc2hvdWxkIGV4dGVuZC4gVGhpcyBiYXNlXG4gKiBjb21wb25lbnQgaGFybmVzcyBwcm92aWRlcyB0aGUgYmFzaWMgYWJpbGl0eSB0byBsb2NhdGUgZWxlbWVudCBhbmQgc3ViLWNvbXBvbmVudCBoYXJuZXNzLiBJdFxuICogc2hvdWxkIGJlIGluaGVyaXRlZCB3aGVuIGRlZmluaW5nIHVzZXIncyBvd24gaGFybmVzcy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudEhhcm5lc3Mge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgbG9jYXRvckZhY3Rvcnk6IExvY2F0b3JGYWN0b3J5KSB7fVxuXG4gIC8qKiBHZXRzIGEgYFByb21pc2VgIGZvciB0aGUgYFRlc3RFbGVtZW50YCByZXByZXNlbnRpbmcgdGhlIGhvc3QgZWxlbWVudCBvZiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBob3N0KCk6IFByb21pc2U8VGVzdEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdG9yRmFjdG9yeS5yb290RWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgYExvY2F0b3JGYWN0b3J5YCBmb3IgdGhlIGRvY3VtZW50IHJvb3QgZWxlbWVudC4gVGhpcyBmYWN0b3J5IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZVxuICAgKiBsb2NhdG9ycyBmb3IgZWxlbWVudHMgdGhhdCBhIGNvbXBvbmVudCBjcmVhdGVzIG91dHNpZGUgb2YgaXRzIG93biByb290IGVsZW1lbnQuIChlLmcuIGJ5XG4gICAqIGFwcGVuZGluZyB0byBkb2N1bWVudC5ib2R5KS5cbiAgICovXG4gIHByb3RlY3RlZCBkb2N1bWVudFJvb3RMb2NhdG9yRmFjdG9yeSgpOiBMb2NhdG9yRmFjdG9yeSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYXRvckZhY3RvcnkuZG9jdW1lbnRSb290TG9jYXRvckZhY3RvcnkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGFzeW5jaHJvbm91cyBsb2NhdG9yIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZmluZCBhIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZVxuICAgKiBvciBlbGVtZW50IHVuZGVyIHRoZSBob3N0IGVsZW1lbnQgb2YgdGhpcyBgQ29tcG9uZW50SGFybmVzc2AuXG4gICAqIEBwYXJhbSBxdWVyaWVzIEEgbGlzdCBvZiBxdWVyaWVzIHNwZWNpZnlpbmcgd2hpY2ggaGFybmVzc2VzIGFuZCBlbGVtZW50cyB0byBzZWFyY2ggZm9yOlxuICAgKiAgIC0gQSBgc3RyaW5nYCBzZWFyY2hlcyBmb3IgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIENTUyBzZWxlY3RvciBzcGVjaWZpZWQgYnkgdGhlIHN0cmluZy5cbiAgICogICAtIEEgYENvbXBvbmVudEhhcm5lc3NgIGNvbnN0cnVjdG9yIHNlYXJjaGVzIGZvciBgQ29tcG9uZW50SGFybmVzc2AgaW5zdGFuY2VzIG1hdGNoaW5nIHRoZVxuICAgKiAgICAgZ2l2ZW4gY2xhc3MuXG4gICAqICAgLSBBIGBIYXJuZXNzUHJlZGljYXRlYCBzZWFyY2hlcyBmb3IgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlcyBtYXRjaGluZyB0aGUgZ2l2ZW5cbiAgICogICAgIHByZWRpY2F0ZS5cbiAgICogQHJldHVybiBBbiBhc3luY2hyb25vdXMgbG9jYXRvciBmdW5jdGlvbiB0aGF0IHNlYXJjaGVzIGZvciBhbmQgcmV0dXJucyBhIGBQcm9taXNlYCBmb3IgdGhlXG4gICAqICAgZmlyc3QgZWxlbWVudCBvciBoYXJuZXNzIG1hdGNoaW5nIHRoZSBnaXZlbiBzZWFyY2ggY3JpdGVyaWEuIE1hdGNoZXMgYXJlIG9yZGVyZWQgZmlyc3QgYnlcbiAgICogICBvcmRlciBpbiB0aGUgRE9NLCBhbmQgc2Vjb25kIGJ5IG9yZGVyIGluIHRoZSBxdWVyaWVzIGxpc3QuIElmIG5vIG1hdGNoZXMgYXJlIGZvdW5kLCB0aGVcbiAgICogICBgUHJvbWlzZWAgcmVqZWN0cy4gVGhlIHR5cGUgdGhhdCB0aGUgYFByb21pc2VgIHJlc29sdmVzIHRvIGlzIGEgdW5pb24gb2YgYWxsIHJlc3VsdCB0eXBlcyBmb3JcbiAgICogICBlYWNoIHF1ZXJ5LlxuICAgKlxuICAgKiBlLmcuIEdpdmVuIHRoZSBmb2xsb3dpbmcgRE9NOiBgPGRpdiBpZD1cImQxXCIgLz48ZGl2IGlkPVwiZDJcIiAvPmAsIGFuZCBhc3N1bWluZ1xuICAgKiBgRGl2SGFybmVzcy5ob3N0U2VsZWN0b3IgPT09ICdkaXYnYDpcbiAgICogLSBgYXdhaXQgY2gubG9jYXRvckZvcihEaXZIYXJuZXNzLCAnZGl2JykoKWAgZ2V0cyBhIGBEaXZIYXJuZXNzYCBpbnN0YW5jZSBmb3IgYCNkMWBcbiAgICogLSBgYXdhaXQgY2gubG9jYXRvckZvcignZGl2JywgRGl2SGFybmVzcykoKWAgZ2V0cyBhIGBUZXN0RWxlbWVudGAgaW5zdGFuY2UgZm9yIGAjZDFgXG4gICAqIC0gYGF3YWl0IGNoLmxvY2F0b3JGb3IoJ3NwYW4nKSgpYCB0aHJvd3MgYmVjYXVzZSB0aGUgYFByb21pc2VgIHJlamVjdHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgbG9jYXRvckZvcjxUIGV4dGVuZHMgKEhhcm5lc3NRdWVyeTxhbnk+IHwgc3RyaW5nKVtdPiguLi5xdWVyaWVzOiBUKTpcbiAgICAgIEFzeW5jRmFjdG9yeUZuPExvY2F0b3JGblJlc3VsdDxUPj4ge1xuICAgIHJldHVybiB0aGlzLmxvY2F0b3JGYWN0b3J5LmxvY2F0b3JGb3IoLi4ucXVlcmllcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBhc3luY2hyb25vdXMgbG9jYXRvciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGZpbmQgYSBgQ29tcG9uZW50SGFybmVzc2AgaW5zdGFuY2VcbiAgICogb3IgZWxlbWVudCB1bmRlciB0aGUgaG9zdCBlbGVtZW50IG9mIHRoaXMgYENvbXBvbmVudEhhcm5lc3NgLlxuICAgKiBAcGFyYW0gcXVlcmllcyBBIGxpc3Qgb2YgcXVlcmllcyBzcGVjaWZ5aW5nIHdoaWNoIGhhcm5lc3NlcyBhbmQgZWxlbWVudHMgdG8gc2VhcmNoIGZvcjpcbiAgICogICAtIEEgYHN0cmluZ2Agc2VhcmNoZXMgZm9yIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBDU1Mgc2VsZWN0b3Igc3BlY2lmaWVkIGJ5IHRoZSBzdHJpbmcuXG4gICAqICAgLSBBIGBDb21wb25lbnRIYXJuZXNzYCBjb25zdHJ1Y3RvciBzZWFyY2hlcyBmb3IgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlcyBtYXRjaGluZyB0aGVcbiAgICogICAgIGdpdmVuIGNsYXNzLlxuICAgKiAgIC0gQSBgSGFybmVzc1ByZWRpY2F0ZWAgc2VhcmNoZXMgZm9yIGBDb21wb25lbnRIYXJuZXNzYCBpbnN0YW5jZXMgbWF0Y2hpbmcgdGhlIGdpdmVuXG4gICAqICAgICBwcmVkaWNhdGUuXG4gICAqIEByZXR1cm4gQW4gYXN5bmNocm9ub3VzIGxvY2F0b3IgZnVuY3Rpb24gdGhhdCBzZWFyY2hlcyBmb3IgYW5kIHJldHVybnMgYSBgUHJvbWlzZWAgZm9yIHRoZVxuICAgKiAgIGZpcnN0IGVsZW1lbnQgb3IgaGFybmVzcyBtYXRjaGluZyB0aGUgZ2l2ZW4gc2VhcmNoIGNyaXRlcmlhLiBNYXRjaGVzIGFyZSBvcmRlcmVkIGZpcnN0IGJ5XG4gICAqICAgb3JkZXIgaW4gdGhlIERPTSwgYW5kIHNlY29uZCBieSBvcmRlciBpbiB0aGUgcXVlcmllcyBsaXN0LiBJZiBubyBtYXRjaGVzIGFyZSBmb3VuZCwgdGhlXG4gICAqICAgYFByb21pc2VgIGlzIHJlc29sdmVkIHdpdGggYG51bGxgLiBUaGUgdHlwZSB0aGF0IHRoZSBgUHJvbWlzZWAgcmVzb2x2ZXMgdG8gaXMgYSB1bmlvbiBvZiBhbGxcbiAgICogICByZXN1bHQgdHlwZXMgZm9yIGVhY2ggcXVlcnkgb3IgbnVsbC5cbiAgICpcbiAgICogZS5nLiBHaXZlbiB0aGUgZm9sbG93aW5nIERPTTogYDxkaXYgaWQ9XCJkMVwiIC8+PGRpdiBpZD1cImQyXCIgLz5gLCBhbmQgYXNzdW1pbmdcbiAgICogYERpdkhhcm5lc3MuaG9zdFNlbGVjdG9yID09PSAnZGl2J2A6XG4gICAqIC0gYGF3YWl0IGNoLmxvY2F0b3JGb3JPcHRpb25hbChEaXZIYXJuZXNzLCAnZGl2JykoKWAgZ2V0cyBhIGBEaXZIYXJuZXNzYCBpbnN0YW5jZSBmb3IgYCNkMWBcbiAgICogLSBgYXdhaXQgY2gubG9jYXRvckZvck9wdGlvbmFsKCdkaXYnLCBEaXZIYXJuZXNzKSgpYCBnZXRzIGEgYFRlc3RFbGVtZW50YCBpbnN0YW5jZSBmb3IgYCNkMWBcbiAgICogLSBgYXdhaXQgY2gubG9jYXRvckZvck9wdGlvbmFsKCdzcGFuJykoKWAgZ2V0cyBgbnVsbGAuXG4gICAqL1xuICBwcm90ZWN0ZWQgbG9jYXRvckZvck9wdGlvbmFsPFQgZXh0ZW5kcyAoSGFybmVzc1F1ZXJ5PGFueT4gfCBzdHJpbmcpW10+KC4uLnF1ZXJpZXM6IFQpOlxuICAgICAgQXN5bmNGYWN0b3J5Rm48TG9jYXRvckZuUmVzdWx0PFQ+IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmxvY2F0b3JGYWN0b3J5LmxvY2F0b3JGb3JPcHRpb25hbCguLi5xdWVyaWVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGFzeW5jaHJvbm91cyBsb2NhdG9yIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZmluZCBgQ29tcG9uZW50SGFybmVzc2AgaW5zdGFuY2VzXG4gICAqIG9yIGVsZW1lbnRzIHVuZGVyIHRoZSBob3N0IGVsZW1lbnQgb2YgdGhpcyBgQ29tcG9uZW50SGFybmVzc2AuXG4gICAqIEBwYXJhbSBxdWVyaWVzIEEgbGlzdCBvZiBxdWVyaWVzIHNwZWNpZnlpbmcgd2hpY2ggaGFybmVzc2VzIGFuZCBlbGVtZW50cyB0byBzZWFyY2ggZm9yOlxuICAgKiAgIC0gQSBgc3RyaW5nYCBzZWFyY2hlcyBmb3IgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIENTUyBzZWxlY3RvciBzcGVjaWZpZWQgYnkgdGhlIHN0cmluZy5cbiAgICogICAtIEEgYENvbXBvbmVudEhhcm5lc3NgIGNvbnN0cnVjdG9yIHNlYXJjaGVzIGZvciBgQ29tcG9uZW50SGFybmVzc2AgaW5zdGFuY2VzIG1hdGNoaW5nIHRoZVxuICAgKiAgICAgZ2l2ZW4gY2xhc3MuXG4gICAqICAgLSBBIGBIYXJuZXNzUHJlZGljYXRlYCBzZWFyY2hlcyBmb3IgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlcyBtYXRjaGluZyB0aGUgZ2l2ZW5cbiAgICogICAgIHByZWRpY2F0ZS5cbiAgICogQHJldHVybiBBbiBhc3luY2hyb25vdXMgbG9jYXRvciBmdW5jdGlvbiB0aGF0IHNlYXJjaGVzIGZvciBhbmQgcmV0dXJucyBhIGBQcm9taXNlYCBmb3IgYWxsXG4gICAqICAgZWxlbWVudHMgYW5kIGhhcm5lc3NlcyBtYXRjaGluZyB0aGUgZ2l2ZW4gc2VhcmNoIGNyaXRlcmlhLiBNYXRjaGVzIGFyZSBvcmRlcmVkIGZpcnN0IGJ5XG4gICAqICAgb3JkZXIgaW4gdGhlIERPTSwgYW5kIHNlY29uZCBieSBvcmRlciBpbiB0aGUgcXVlcmllcyBsaXN0LiBJZiBhbiBlbGVtZW50IG1hdGNoZXMgbW9yZSB0aGFuXG4gICAqICAgb25lIGBDb21wb25lbnRIYXJuZXNzYCBjbGFzcywgdGhlIGxvY2F0b3IgZ2V0cyBhbiBpbnN0YW5jZSBvZiBlYWNoIGZvciB0aGUgc2FtZSBlbGVtZW50LiBJZlxuICAgKiAgIGFuIGVsZW1lbnQgbWF0Y2hlcyBtdWx0aXBsZSBgc3RyaW5nYCBzZWxlY3RvcnMsIG9ubHkgb25lIGBUZXN0RWxlbWVudGAgaW5zdGFuY2UgaXMgcmV0dXJuZWRcbiAgICogICBmb3IgdGhhdCBlbGVtZW50LiBUaGUgdHlwZSB0aGF0IHRoZSBgUHJvbWlzZWAgcmVzb2x2ZXMgdG8gaXMgYW4gYXJyYXkgd2hlcmUgZWFjaCBlbGVtZW50IGlzXG4gICAqICAgdGhlIHVuaW9uIG9mIGFsbCByZXN1bHQgdHlwZXMgZm9yIGVhY2ggcXVlcnkuXG4gICAqXG4gICAqIGUuZy4gR2l2ZW4gdGhlIGZvbGxvd2luZyBET006IGA8ZGl2IGlkPVwiZDFcIiAvPjxkaXYgaWQ9XCJkMlwiIC8+YCwgYW5kIGFzc3VtaW5nXG4gICAqIGBEaXZIYXJuZXNzLmhvc3RTZWxlY3RvciA9PT0gJ2RpdidgIGFuZCBgSWRJc0QxSGFybmVzcy5ob3N0U2VsZWN0b3IgPT09ICcjZDEnYDpcbiAgICogLSBgYXdhaXQgY2gubG9jYXRvckZvckFsbChEaXZIYXJuZXNzLCAnZGl2JykoKWAgZ2V0cyBgW1xuICAgKiAgICAgRGl2SGFybmVzcywgLy8gZm9yICNkMVxuICAgKiAgICAgVGVzdEVsZW1lbnQsIC8vIGZvciAjZDFcbiAgICogICAgIERpdkhhcm5lc3MsIC8vIGZvciAjZDJcbiAgICogICAgIFRlc3RFbGVtZW50IC8vIGZvciAjZDJcbiAgICogICBdYFxuICAgKiAtIGBhd2FpdCBjaC5sb2NhdG9yRm9yQWxsKCdkaXYnLCAnI2QxJykoKWAgZ2V0cyBgW1xuICAgKiAgICAgVGVzdEVsZW1lbnQsIC8vIGZvciAjZDFcbiAgICogICAgIFRlc3RFbGVtZW50IC8vIGZvciAjZDJcbiAgICogICBdYFxuICAgKiAtIGBhd2FpdCBjaC5sb2NhdG9yRm9yQWxsKERpdkhhcm5lc3MsIElkSXNEMUhhcm5lc3MpKClgIGdldHMgYFtcbiAgICogICAgIERpdkhhcm5lc3MsIC8vIGZvciAjZDFcbiAgICogICAgIElkSXNEMUhhcm5lc3MsIC8vIGZvciAjZDFcbiAgICogICAgIERpdkhhcm5lc3MgLy8gZm9yICNkMlxuICAgKiAgIF1gXG4gICAqIC0gYGF3YWl0IGNoLmxvY2F0b3JGb3JBbGwoJ3NwYW4nKSgpYCBnZXRzIGBbXWAuXG4gICAqL1xuICBwcm90ZWN0ZWQgbG9jYXRvckZvckFsbDxUIGV4dGVuZHMgKEhhcm5lc3NRdWVyeTxhbnk+IHwgc3RyaW5nKVtdPiguLi5xdWVyaWVzOiBUKTpcbiAgICAgIEFzeW5jRmFjdG9yeUZuPExvY2F0b3JGblJlc3VsdDxUPltdPiB7XG4gICAgcmV0dXJuIHRoaXMubG9jYXRvckZhY3RvcnkubG9jYXRvckZvckFsbCguLi5xdWVyaWVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGbHVzaGVzIGNoYW5nZSBkZXRlY3Rpb24gYW5kIGFzeW5jIHRhc2tzIGluIHRoZSBBbmd1bGFyIHpvbmUuXG4gICAqIEluIG1vc3QgY2FzZXMgaXQgc2hvdWxkIG5vdCBiZSBuZWNlc3NhcnkgdG8gY2FsbCB0aGlzIG1hbnVhbGx5LiBIb3dldmVyLCB0aGVyZSBtYXkgYmUgc29tZSBlZGdlXG4gICAqIGNhc2VzIHdoZXJlIGl0IGlzIG5lZWRlZCB0byBmdWxseSBmbHVzaCBhbmltYXRpb24gZXZlbnRzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFzeW5jIGZvcmNlU3RhYmlsaXplKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2F0b3JGYWN0b3J5LmZvcmNlU3RhYmlsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogV2FpdHMgZm9yIGFsbCBzY2hlZHVsZWQgb3IgcnVubmluZyBhc3luYyB0YXNrcyB0byBjb21wbGV0ZS4gVGhpcyBhbGxvd3MgaGFybmVzc1xuICAgKiBhdXRob3JzIHRvIHdhaXQgZm9yIGFzeW5jIHRhc2tzIG91dHNpZGUgb2YgdGhlIEFuZ3VsYXIgem9uZS5cbiAgICovXG4gIHByb3RlY3RlZCBhc3luYyB3YWl0Rm9yVGFza3NPdXRzaWRlQW5ndWxhcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdG9yRmFjdG9yeS53YWl0Rm9yVGFza3NPdXRzaWRlQW5ndWxhcigpO1xuICB9XG59XG5cbi8qKiBDb25zdHJ1Y3RvciBmb3IgYSBDb21wb25lbnRIYXJuZXNzIHN1YmNsYXNzLiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3I8VCBleHRlbmRzIENvbXBvbmVudEhhcm5lc3M+IHtcbiAgbmV3KGxvY2F0b3JGYWN0b3J5OiBMb2NhdG9yRmFjdG9yeSk6IFQ7XG5cbiAgLyoqXG4gICAqIGBDb21wb25lbnRIYXJuZXNzYCBzdWJjbGFzc2VzIG11c3Qgc3BlY2lmeSBhIHN0YXRpYyBgaG9zdFNlbGVjdG9yYCBwcm9wZXJ0eSB0aGF0IGlzIHVzZWQgdG9cbiAgICogZmluZCB0aGUgaG9zdCBlbGVtZW50IGZvciB0aGUgY29ycmVzcG9uZGluZyBjb21wb25lbnQuIFRoaXMgcHJvcGVydHkgc2hvdWxkIG1hdGNoIHRoZSBzZWxlY3RvclxuICAgKiBmb3IgdGhlIEFuZ3VsYXIgY29tcG9uZW50LlxuICAgKi9cbiAgaG9zdFNlbGVjdG9yOiBzdHJpbmc7XG59XG5cbi8qKiBBIHNldCBvZiBjcml0ZXJpYSB0aGF0IGNhbiBiZSB1c2VkIHRvIGZpbHRlciBhIGxpc3Qgb2YgYENvbXBvbmVudEhhcm5lc3NgIGluc3RhbmNlcy4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUhhcm5lc3NGaWx0ZXJzIHtcbiAgLyoqIE9ubHkgZmluZCBpbnN0YW5jZXMgd2hvc2UgaG9zdCBlbGVtZW50IG1hdGNoZXMgdGhlIGdpdmVuIHNlbGVjdG9yLiAqL1xuICBzZWxlY3Rvcj86IHN0cmluZztcbiAgLyoqIE9ubHkgZmluZCBpbnN0YW5jZXMgdGhhdCBhcmUgbmVzdGVkIHVuZGVyIGFuIGVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gc2VsZWN0b3IuICovXG4gIGFuY2VzdG9yPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgY2xhc3MgdXNlZCB0byBhc3NvY2lhdGUgYSBDb21wb25lbnRIYXJuZXNzIGNsYXNzIHdpdGggcHJlZGljYXRlcyBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0b1xuICogZmlsdGVyIGluc3RhbmNlcyBvZiB0aGUgY2xhc3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBIYXJuZXNzUHJlZGljYXRlPFQgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzPiB7XG4gIHByaXZhdGUgX3ByZWRpY2F0ZXM6IEFzeW5jUHJlZGljYXRlPFQ+W10gPSBbXTtcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb25zOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIF9hbmNlc3Rvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoYXJuZXNzVHlwZTogQ29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yPFQ+LCBvcHRpb25zOiBCYXNlSGFybmVzc0ZpbHRlcnMpIHtcbiAgICB0aGlzLl9hZGRCYXNlT3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNwZWNpZmllZCBudWxsYWJsZSBzdHJpbmcgdmFsdWUgbWF0Y2hlcyB0aGUgZ2l2ZW4gcGF0dGVybi5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSBudWxsYWJsZSBzdHJpbmcgdmFsdWUgdG8gY2hlY2ssIG9yIGEgUHJvbWlzZSByZXNvbHZpbmcgdG8gdGhlXG4gICAqICAgbnVsbGFibGUgc3RyaW5nIHZhbHVlLlxuICAgKiBAcGFyYW0gcGF0dGVybiBUaGUgcGF0dGVybiB0aGUgdmFsdWUgaXMgZXhwZWN0ZWQgdG8gbWF0Y2guIElmIGBwYXR0ZXJuYCBpcyBhIHN0cmluZyxcbiAgICogICBgdmFsdWVgIGlzIGV4cGVjdGVkIHRvIG1hdGNoIGV4YWN0bHkuIElmIGBwYXR0ZXJuYCBpcyBhIHJlZ2V4LCBhIHBhcnRpYWwgbWF0Y2ggaXNcbiAgICogICBhbGxvd2VkLiBJZiBgcGF0dGVybmAgaXMgYG51bGxgLCB0aGUgdmFsdWUgaXMgZXhwZWN0ZWQgdG8gYmUgYG51bGxgLlxuICAgKiBAcmV0dXJuIFdoZXRoZXIgdGhlIHZhbHVlIG1hdGNoZXMgdGhlIHBhdHRlcm4uXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgc3RyaW5nTWF0Y2hlcyh2YWx1ZTogc3RyaW5nIHwgbnVsbCB8IFByb21pc2U8c3RyaW5nIHwgbnVsbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IHN0cmluZyB8IFJlZ0V4cCB8IG51bGwpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB2YWx1ZSA9IGF3YWl0IHZhbHVlO1xuICAgIGlmIChwYXR0ZXJuID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnID8gdmFsdWUgPT09IHBhdHRlcm4gOiBwYXR0ZXJuLnRlc3QodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwcmVkaWNhdGUgZnVuY3Rpb24gdG8gYmUgcnVuIGFnYWluc3QgY2FuZGlkYXRlIGhhcm5lc3Nlcy5cbiAgICogQHBhcmFtIGRlc2NyaXB0aW9uIEEgZGVzY3JpcHRpb24gb2YgdGhpcyBwcmVkaWNhdGUgdGhhdCBtYXkgYmUgdXNlZCBpbiBlcnJvciBtZXNzYWdlcy5cbiAgICogQHBhcmFtIHByZWRpY2F0ZSBBbiBhc3luYyBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4gdGhpcyAoZm9yIG1ldGhvZCBjaGFpbmluZykuXG4gICAqL1xuICBhZGQoZGVzY3JpcHRpb246IHN0cmluZywgcHJlZGljYXRlOiBBc3luY1ByZWRpY2F0ZTxUPikge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9ucy5wdXNoKGRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLl9wcmVkaWNhdGVzLnB1c2gocHJlZGljYXRlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgZGVwZW5kcyBvbiBhbiBvcHRpb24gdmFsdWUgdG8gYmUgcnVuIGFnYWluc3QgY2FuZGlkYXRlXG4gICAqIGhhcm5lc3Nlcy4gSWYgdGhlIG9wdGlvbiB2YWx1ZSBpcyB1bmRlZmluZWQsIHRoZSBwcmVkaWNhdGUgd2lsbCBiZSBpZ25vcmVkLlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgb3B0aW9uIChtYXkgYmUgdXNlZCBpbiBlcnJvciBtZXNzYWdlcykuXG4gICAqIEBwYXJhbSBvcHRpb24gVGhlIG9wdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHByZWRpY2F0ZSBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIHRvIHJ1biBpZiB0aGUgb3B0aW9uIHZhbHVlIGlzIG5vdCB1bmRlZmluZWQuXG4gICAqIEByZXR1cm4gdGhpcyAoZm9yIG1ldGhvZCBjaGFpbmluZykuXG4gICAqL1xuICBhZGRPcHRpb248Tz4obmFtZTogc3RyaW5nLCBvcHRpb246IE8gfCB1bmRlZmluZWQsIHByZWRpY2F0ZTogQXN5bmNPcHRpb25QcmVkaWNhdGU8VCwgTz4pIHtcbiAgICBpZiAob3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYWRkKGAke25hbWV9ID0gJHtfdmFsdWVBc1N0cmluZyhvcHRpb24pfWAsIGl0ZW0gPT4gcHJlZGljYXRlKGl0ZW0sIG9wdGlvbikpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIGEgbGlzdCBvZiBoYXJuZXNzZXMgb24gdGhpcyBwcmVkaWNhdGUuXG4gICAqIEBwYXJhbSBoYXJuZXNzZXMgVGhlIGxpc3Qgb2YgaGFybmVzc2VzIHRvIGZpbHRlci5cbiAgICogQHJldHVybiBBIGxpc3Qgb2YgaGFybmVzc2VzIHRoYXQgc2F0aXNmeSB0aGlzIHByZWRpY2F0ZS5cbiAgICovXG4gIGFzeW5jIGZpbHRlcihoYXJuZXNzZXM6IFRbXSk6IFByb21pc2U8VFtdPiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKGhhcm5lc3Nlcy5tYXAoaCA9PiB0aGlzLmV2YWx1YXRlKGgpKSk7XG4gICAgcmV0dXJuIGhhcm5lc3Nlcy5maWx0ZXIoKF8sIGkpID0+IHJlc3VsdHNbaV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBoYXJuZXNzIHNhdGlzZmllcyB0aGlzIHByZWRpY2F0ZS5cbiAgICogQHBhcmFtIGhhcm5lc3MgVGhlIGhhcm5lc3MgdG8gY2hlY2tcbiAgICogQHJldHVybiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSBoYXJuZXNzIHNhdGlzZmllcyB0aGlzIHByZWRpY2F0ZSxcbiAgICogICBhbmQgcmVzb2x2ZXMgdG8gZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgYXN5bmMgZXZhbHVhdGUoaGFybmVzczogVCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLl9wcmVkaWNhdGVzLm1hcChwID0+IHAoaGFybmVzcykpKTtcbiAgICByZXR1cm4gcmVzdWx0cy5yZWR1Y2UoKGNvbWJpbmVkLCBjdXJyZW50KSA9PiBjb21iaW5lZCAmJiBjdXJyZW50LCB0cnVlKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGEgZGVzY3JpcHRpb24gb2YgdGhpcyBwcmVkaWNhdGUgZm9yIHVzZSBpbiBlcnJvciBtZXNzYWdlcy4gKi9cbiAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9ucy5qb2luKCcsICcpO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIHNlbGVjdG9yIHVzZWQgdG8gZmluZCBjYW5kaWRhdGUgZWxlbWVudHMuICovXG4gIGdldFNlbGVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmNlc3Rvci5zcGxpdCgnLCcpXG4gICAgICAgIC5tYXAocGFydCA9PiBgJHtwYXJ0LnRyaW0oKX0gJHt0aGlzLmhhcm5lc3NUeXBlLmhvc3RTZWxlY3Rvcn1gLnRyaW0oKSlcbiAgICAgICAgLmpvaW4oJywnKTtcbiAgfVxuXG4gIC8qKiBBZGRzIGJhc2Ugb3B0aW9ucyBjb21tb24gdG8gYWxsIGhhcm5lc3MgdHlwZXMuICovXG4gIHByaXZhdGUgX2FkZEJhc2VPcHRpb25zKG9wdGlvbnM6IEJhc2VIYXJuZXNzRmlsdGVycykge1xuICAgIHRoaXMuX2FuY2VzdG9yID0gb3B0aW9ucy5hbmNlc3RvciB8fCAnJztcbiAgICBpZiAodGhpcy5fYW5jZXN0b3IpIHtcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9ucy5wdXNoKGBoYXMgYW5jZXN0b3IgbWF0Y2hpbmcgc2VsZWN0b3IgXCIke3RoaXMuX2FuY2VzdG9yfVwiYCk7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvcjtcbiAgICBpZiAoc2VsZWN0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5hZGQoYGhvc3QgbWF0Y2hlcyBzZWxlY3RvciBcIiR7c2VsZWN0b3J9XCJgLCBhc3luYyBpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBpdGVtLmhvc3QoKSkubWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vKiogUmVwcmVzZW50IGEgdmFsdWUgYXMgYSBzdHJpbmcgZm9yIHRoZSBwdXJwb3NlIG9mIGxvZ2dpbmcuICovXG5mdW5jdGlvbiBfdmFsdWVBc1N0cmluZyh2YWx1ZTogdW5rbm93bikge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgfVxuICAvLyBgSlNPTi5zdHJpbmdpZnlgIGRvZXNuJ3QgaGFuZGxlIFJlZ0V4cCBwcm9wZXJseSwgc28gd2UgbmVlZCBhIGN1c3RvbSByZXBsYWNlci5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIChfLCB2KSA9PiB7XG4gICAgICBpZiAodiBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gYC8ke3YudG9TdHJpbmcoKX0vYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHYucmVwbGFjZSgnL1xcLy9nJywgJ1xcXFwvJykgOiB2O1xuICAgIH0pLnJlcGxhY2UoL1wiXFwvXFwvL2csICdcXFxcLycpLnJlcGxhY2UoL1xcL1xcL1wiL2csICdcXFxcLycpLnJlcGxhY2UoL1xcXFxcXC8vZywgJy8nKTtcbiAgfSBjYXRjaCB7XG4gICAgLy8gYEpTT04uc3RyaW5naWZ5YCB3aWxsIHRocm93IGlmIHRoZSBvYmplY3QgaXMgY3ljbGljYWwsXG4gICAgLy8gaW4gdGhpcyBjYXNlIHRoZSBiZXN0IHdlIGNhbiBkbyBpcyByZXBvcnQgdGhlIHZhbHVlIGFzIGB7Li4ufWAuXG4gICAgcmV0dXJuICd7Li4ufSc7XG4gIH1cbn1cbiJdfQ==