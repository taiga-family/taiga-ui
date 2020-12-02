/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/testing/src/matchers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵgetDOM as getDOM } from '@angular/common';
import { ɵglobal as global } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { childNodesAsList, hasClass, hasStyle, isCommentNode } from './browser_util';
/**
 * Jasmine matchers that check Angular specific conditions.
 *
 * Note: These matchers will only work in a browser environment.
 * @record
 * @template T
 */
export function NgMatchers() { }
if (false) {
    /**
     * Invert the matchers.
     * @type {?}
     */
    NgMatchers.prototype.not;
    /**
     * Expect the value to be a `Promise`.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example testing/ts/matchers.ts region='toBePromise'}
     * @return {?}
     */
    NgMatchers.prototype.toBePromise = function () { };
    /**
     * Expect the value to be an instance of a class.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example testing/ts/matchers.ts region='toBeAnInstanceOf'}
     * @param {?} expected
     * @return {?}
     */
    NgMatchers.prototype.toBeAnInstanceOf = function (expected) { };
    /**
     * Expect the element to have exactly the given text.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example testing/ts/matchers.ts region='toHaveText'}
     * @param {?} expected
     * @return {?}
     */
    NgMatchers.prototype.toHaveText = function (expected) { };
    /**
     * Expect the element to have the given CSS class.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example testing/ts/matchers.ts region='toHaveCssClass'}
     * @param {?} expected
     * @return {?}
     */
    NgMatchers.prototype.toHaveCssClass = function (expected) { };
    /**
     * Expect the element to have the given CSS styles.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example testing/ts/matchers.ts region='toHaveCssStyle'}
     * @param {?} expected
     * @return {?}
     */
    NgMatchers.prototype.toHaveCssStyle = function (expected) { };
    /**
     * Expect a class to implement the interface of the given class.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example testing/ts/matchers.ts region='toImplement'}
     * @param {?} expected
     * @return {?}
     */
    NgMatchers.prototype.toImplement = function (expected) { };
    /**
     * Expect an exception to contain the given error text.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example testing/ts/matchers.ts region='toContainError'}
     * @param {?} expected
     * @return {?}
     */
    NgMatchers.prototype.toContainError = function (expected) { };
    /**
     * Expect a component of the given type to show.
     * @param {?} expectedComponentType
     * @param {?=} expectationFailOutput
     * @return {?}
     */
    NgMatchers.prototype.toContainComponent = function (expectedComponentType, expectationFailOutput) { };
}
/** @type {?} */
const _global = (/** @type {?} */ ((typeof window === 'undefined' ? global : window)));
/**
 * Jasmine matching function with Angular matchers mixed in.
 *
 * ## Example
 *
 * {\@example testing/ts/matchers.ts region='toHaveText'}
 * @type {?}
 */
export const expect = _global.expect;
// Some Map polyfills don't polyfill Map.toString correctly, which
// gives us bad error messages in tests.
// The only way to do this in Jasmine is to monkey patch a method
// to the object :-(
((/** @type {?} */ (Map))).prototype['jasmineToString'] = (/**
 * @return {?}
 */
function () {
    /** @type {?} */
    const m = this;
    if (!m) {
        return '' + m;
    }
    /** @type {?} */
    const res = [];
    m.forEach((/**
     * @param {?} v
     * @param {?} k
     * @return {?}
     */
    (v, k) => {
        res.push(`${String(k)}:${String(v)}`);
    }));
    return `{ ${res.join(',')} }`;
});
_global.beforeEach((/**
 * @return {?}
 */
function () {
    // Custom handler for Map as we use Jasmine 2.4, and support for maps is not
    // added until Jasmine 2.6.
    jasmine.addCustomEqualityTester((/**
     * @param {?} actual
     * @param {?} expected
     * @return {?}
     */
    function compareMap(actual, expected) {
        if (actual instanceof Map) {
            /** @type {?} */
            let pass = actual.size === expected.size;
            if (pass) {
                actual.forEach((/**
                 * @param {?} v
                 * @param {?} k
                 * @return {?}
                 */
                (v, k) => {
                    pass = pass && jasmine.matchersUtil.equals(v, expected.get(k));
                }));
            }
            return pass;
        }
        else {
            // TODO(misko): we should change the return, but jasmine.d.ts is not null safe
            return (/** @type {?} */ (undefined));
        }
    }));
    jasmine.addMatchers({
        toBePromise: (/**
         * @return {?}
         */
        function () {
            return {
                compare: (/**
                 * @param {?} actual
                 * @return {?}
                 */
                function (actual) {
                    /** @type {?} */
                    const pass = typeof actual === 'object' && typeof actual.then === 'function';
                    return {
                        pass: pass,
                        /**
                         * @return {?}
                         */
                        get message() {
                            return 'Expected ' + actual + ' to be a promise';
                        }
                    };
                })
            };
        }),
        toBeAnInstanceOf: (/**
         * @return {?}
         */
        function () {
            return {
                compare: (/**
                 * @param {?} actual
                 * @param {?} expectedClass
                 * @return {?}
                 */
                function (actual, expectedClass) {
                    /** @type {?} */
                    const pass = typeof actual === 'object' && actual instanceof expectedClass;
                    return {
                        pass: pass,
                        /**
                         * @return {?}
                         */
                        get message() {
                            return 'Expected ' + actual + ' to be an instance of ' + expectedClass;
                        }
                    };
                })
            };
        }),
        toHaveText: (/**
         * @return {?}
         */
        function () {
            return {
                compare: (/**
                 * @param {?} actual
                 * @param {?} expectedText
                 * @return {?}
                 */
                function (actual, expectedText) {
                    /** @type {?} */
                    const actualText = elementText(actual);
                    return {
                        pass: actualText == expectedText,
                        /**
                         * @return {?}
                         */
                        get message() {
                            return 'Expected ' + actualText + ' to be equal to ' + expectedText;
                        }
                    };
                })
            };
        }),
        toHaveCssClass: (/**
         * @return {?}
         */
        function () {
            return { compare: buildError(false), negativeCompare: buildError(true) };
            /**
             * @param {?} isNot
             * @return {?}
             */
            function buildError(isNot) {
                return (/**
                 * @param {?} actual
                 * @param {?} className
                 * @return {?}
                 */
                function (actual, className) {
                    return {
                        pass: hasClass(actual, className) == !isNot,
                        /**
                         * @return {?}
                         */
                        get message() {
                            return `Expected ${actual.outerHTML} ${isNot ? 'not ' : ''}to contain the CSS class "${className}"`;
                        }
                    };
                });
            }
        }),
        toHaveCssStyle: (/**
         * @return {?}
         */
        function () {
            return {
                compare: (/**
                 * @param {?} actual
                 * @param {?} styles
                 * @return {?}
                 */
                function (actual, styles) {
                    /** @type {?} */
                    let allPassed;
                    if (typeof styles === 'string') {
                        allPassed = hasStyle(actual, styles);
                    }
                    else {
                        allPassed = Object.keys(styles).length !== 0;
                        Object.keys(styles).forEach((/**
                         * @param {?} prop
                         * @return {?}
                         */
                        prop => {
                            allPassed = allPassed && hasStyle(actual, prop, styles[prop]);
                        }));
                    }
                    return {
                        pass: allPassed,
                        /**
                         * @return {?}
                         */
                        get message() {
                            /** @type {?} */
                            const expectedValueStr = typeof styles === 'string' ? styles : JSON.stringify(styles);
                            return `Expected ${actual.outerHTML} ${!allPassed ? ' ' : 'not '}to contain the
                      CSS ${typeof styles === 'string' ? 'property' : 'styles'} "${expectedValueStr}"`;
                        }
                    };
                })
            };
        }),
        toContainError: (/**
         * @return {?}
         */
        function () {
            return {
                compare: (/**
                 * @param {?} actual
                 * @param {?} expectedText
                 * @return {?}
                 */
                function (actual, expectedText) {
                    /** @type {?} */
                    const errorMessage = actual.toString();
                    return {
                        pass: errorMessage.indexOf(expectedText) > -1,
                        /**
                         * @return {?}
                         */
                        get message() {
                            return 'Expected ' + errorMessage + ' to contain ' + expectedText;
                        }
                    };
                })
            };
        }),
        toImplement: (/**
         * @return {?}
         */
        function () {
            return {
                compare: (/**
                 * @param {?} actualObject
                 * @param {?} expectedInterface
                 * @return {?}
                 */
                function (actualObject, expectedInterface) {
                    /** @type {?} */
                    const intProps = Object.keys(expectedInterface.prototype);
                    /** @type {?} */
                    const missedMethods = [];
                    intProps.forEach((/**
                     * @param {?} k
                     * @return {?}
                     */
                    (k) => {
                        if (!actualObject.constructor.prototype[k])
                            missedMethods.push(k);
                    }));
                    return {
                        pass: missedMethods.length == 0,
                        /**
                         * @return {?}
                         */
                        get message() {
                            return 'Expected ' + actualObject +
                                ' to have the following methods: ' + missedMethods.join(', ');
                        }
                    };
                })
            };
        }),
        toContainComponent: (/**
         * @return {?}
         */
        function () {
            return {
                compare: (/**
                 * @param {?} actualFixture
                 * @param {?} expectedComponentType
                 * @return {?}
                 */
                function (actualFixture, expectedComponentType) {
                    /** @type {?} */
                    const failOutput = arguments[2];
                    /** @type {?} */
                    const msgFn = (/**
                     * @param {?} msg
                     * @return {?}
                     */
                    (msg) => [msg, failOutput].filter(Boolean).join(', '));
                    // verify correct actual type
                    if (!(actualFixture instanceof ComponentFixture)) {
                        return {
                            pass: false,
                            message: msgFn(`Expected actual to be of type \'ComponentFixture\' [actual=${actualFixture.constructor.name}]`)
                        };
                    }
                    /** @type {?} */
                    const found = !!actualFixture.debugElement.query(By.directive(expectedComponentType));
                    return found ?
                        { pass: true } :
                        { pass: false, message: msgFn(`Expected ${expectedComponentType.name} to show`) };
                })
            };
        })
    });
}));
/**
 * @param {?} n
 * @return {?}
 */
function elementText(n) {
    /** @type {?} */
    const hasNodes = (/**
     * @param {?} n
     * @return {?}
     */
    (n) => {
        /** @type {?} */
        const children = n.childNodes;
        return children && children.length > 0;
    });
    if (n instanceof Array) {
        return n.map(elementText).join('');
    }
    if (isCommentNode(n)) {
        return '';
    }
    if (getDOM().isElementNode(n) && ((/** @type {?} */ (n))).tagName == 'CONTENT') {
        return elementText(Array.prototype.slice.apply(((/** @type {?} */ (n))).getDistributedNodes()));
    }
    if (hasShadowRoot(n)) {
        return elementText(childNodesAsList(((/** @type {?} */ (n))).shadowRoot));
    }
    if (hasNodes(n)) {
        return elementText(childNodesAsList(n));
    }
    return ((/** @type {?} */ (n))).textContent;
}
/**
 * @param {?} node
 * @return {?}
 */
function hasShadowRoot(node) {
    return node.shadowRoot != null && node instanceof HTMLElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3Rlc3Rpbmcvc3JjL21hdGNoZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFPLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQVFuRixnQ0FnRkM7Ozs7OztJQURDLHlCQUFtQjs7Ozs7Ozs7OztJQXRFbkIsbURBQXVCOzs7Ozs7Ozs7OztJQVV2QixnRUFBeUM7Ozs7Ozs7Ozs7O0lBVXpDLDBEQUFzQzs7Ozs7Ozs7Ozs7SUFVdEMsOERBQTBDOzs7Ozs7Ozs7OztJQVUxQyw4REFBZ0U7Ozs7Ozs7Ozs7O0lBVWhFLDJEQUFvQzs7Ozs7Ozs7Ozs7SUFVcEMsOERBQXVDOzs7Ozs7O0lBS3ZDLHNHQUEyRjs7O01BUXZGLE9BQU8sR0FBRyxtQkFBSyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQTs7Ozs7Ozs7O0FBU3RFLE1BQU0sT0FBTyxNQUFNLEdBQTBDLE9BQU8sQ0FBQyxNQUFNOzs7OztBQU8zRSxDQUFDLG1CQUFBLEdBQUcsRUFBTyxDQUFDLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDOzs7QUFBRzs7VUFDcEMsQ0FBQyxHQUFHLElBQUk7SUFDZCxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ04sT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7O1VBQ0ssR0FBRyxHQUFVLEVBQUU7SUFDckIsQ0FBQyxDQUFDLE9BQU87Ozs7O0lBQUMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLEVBQUU7UUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0gsT0FBTyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNoQyxDQUFDLENBQUEsQ0FBQztBQUVGLE9BQU8sQ0FBQyxVQUFVOzs7QUFBQztJQUNqQiw0RUFBNEU7SUFDNUUsMkJBQTJCO0lBQzNCLE9BQU8sQ0FBQyx1QkFBdUI7Ozs7O0lBQUMsU0FBUyxVQUFVLENBQUMsTUFBVyxFQUFFLFFBQWE7UUFDNUUsSUFBSSxNQUFNLFlBQVksR0FBRyxFQUFFOztnQkFDckIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLElBQUk7WUFDeEMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLE9BQU87Ozs7O2dCQUFDLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBRSxFQUFFO29CQUNoQyxJQUFJLEdBQUcsSUFBSSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCw4RUFBOEU7WUFDOUUsT0FBTyxtQkFBQSxTQUFTLEVBQUMsQ0FBQztTQUNuQjtJQUNILENBQUMsRUFBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUNsQixXQUFXOzs7UUFBRTtZQUNYLE9BQU87Z0JBQ0wsT0FBTzs7OztnQkFBRSxVQUFTLE1BQVc7OzBCQUNyQixJQUFJLEdBQUcsT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxVQUFVO29CQUM1RSxPQUFPO3dCQUNMLElBQUksRUFBRSxJQUFJOzs7O3dCQUNWLElBQUksT0FBTzs0QkFDVCxPQUFPLFdBQVcsR0FBRyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7d0JBQ25ELENBQUM7cUJBQ0YsQ0FBQztnQkFDSixDQUFDLENBQUE7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFBO1FBRUQsZ0JBQWdCOzs7UUFBRTtZQUNoQixPQUFPO2dCQUNMLE9BQU87Ozs7O2dCQUFFLFVBQVMsTUFBVyxFQUFFLGFBQWtCOzswQkFDekMsSUFBSSxHQUFHLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLFlBQVksYUFBYTtvQkFDMUUsT0FBTzt3QkFDTCxJQUFJLEVBQUUsSUFBSTs7Ozt3QkFDVixJQUFJLE9BQU87NEJBQ1QsT0FBTyxXQUFXLEdBQUcsTUFBTSxHQUFHLHdCQUF3QixHQUFHLGFBQWEsQ0FBQzt3QkFDekUsQ0FBQztxQkFDRixDQUFDO2dCQUNKLENBQUMsQ0FBQTthQUNGLENBQUM7UUFDSixDQUFDLENBQUE7UUFFRCxVQUFVOzs7UUFBRTtZQUNWLE9BQU87Z0JBQ0wsT0FBTzs7Ozs7Z0JBQUUsVUFBUyxNQUFXLEVBQUUsWUFBb0I7OzBCQUMzQyxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsT0FBTzt3QkFDTCxJQUFJLEVBQUUsVUFBVSxJQUFJLFlBQVk7Ozs7d0JBQ2hDLElBQUksT0FBTzs0QkFDVCxPQUFPLFdBQVcsR0FBRyxVQUFVLEdBQUcsa0JBQWtCLEdBQUcsWUFBWSxDQUFDO3dCQUN0RSxDQUFDO3FCQUNGLENBQUM7Z0JBQ0osQ0FBQyxDQUFBO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQTtRQUVELGNBQWM7OztRQUFFO1lBQ2QsT0FBTyxFQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsZUFBZSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDOzs7OztZQUV2RSxTQUFTLFVBQVUsQ0FBQyxLQUFjO2dCQUNoQzs7Ozs7Z0JBQU8sVUFBUyxNQUFXLEVBQUUsU0FBaUI7b0JBQzVDLE9BQU87d0JBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLOzs7O3dCQUMzQyxJQUFJLE9BQU87NEJBQ1QsT0FBTyxZQUFZLE1BQU0sQ0FBQyxTQUFTLElBQy9CLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLDZCQUE2QixTQUFTLEdBQUcsQ0FBQzt3QkFDbkUsQ0FBQztxQkFDRixDQUFDO2dCQUNKLENBQUMsRUFBQztZQUNKLENBQUM7UUFDSCxDQUFDLENBQUE7UUFFRCxjQUFjOzs7UUFBRTtZQUNkLE9BQU87Z0JBQ0wsT0FBTzs7Ozs7Z0JBQUUsVUFBUyxNQUFXLEVBQUUsTUFBb0M7O3dCQUM3RCxTQUFrQjtvQkFDdEIsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7d0JBQzlCLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUN0Qzt5QkFBTTt3QkFDTCxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO3dCQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7d0JBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ2pDLFNBQVMsR0FBRyxTQUFTLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2hFLENBQUMsRUFBQyxDQUFDO3FCQUNKO29CQUVELE9BQU87d0JBQ0wsSUFBSSxFQUFFLFNBQVM7Ozs7d0JBQ2YsSUFBSSxPQUFPOztrQ0FDSCxnQkFBZ0IsR0FBRyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7NEJBQ3JGLE9BQU8sWUFBWSxNQUFNLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07NEJBQ2xELE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQzVELGdCQUFnQixHQUFHLENBQUM7d0JBQzFCLENBQUM7cUJBQ0YsQ0FBQztnQkFDSixDQUFDLENBQUE7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFBO1FBRUQsY0FBYzs7O1FBQUU7WUFDZCxPQUFPO2dCQUNMLE9BQU87Ozs7O2dCQUFFLFVBQVMsTUFBVyxFQUFFLFlBQWlCOzswQkFDeEMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQ3RDLE9BQU87d0JBQ0wsSUFBSSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7O3dCQUM3QyxJQUFJLE9BQU87NEJBQ1QsT0FBTyxXQUFXLEdBQUcsWUFBWSxHQUFHLGNBQWMsR0FBRyxZQUFZLENBQUM7d0JBQ3BFLENBQUM7cUJBQ0YsQ0FBQztnQkFDSixDQUFDLENBQUE7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFBO1FBRUQsV0FBVzs7O1FBQUU7WUFDWCxPQUFPO2dCQUNMLE9BQU87Ozs7O2dCQUFFLFVBQVMsWUFBaUIsRUFBRSxpQkFBc0I7OzBCQUNuRCxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7OzBCQUVuRCxhQUFhLEdBQVUsRUFBRTtvQkFDL0IsUUFBUSxDQUFDLE9BQU87Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTt3QkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxDQUFDLEVBQUMsQ0FBQztvQkFFSCxPQUFPO3dCQUNMLElBQUksRUFBRSxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUM7Ozs7d0JBQy9CLElBQUksT0FBTzs0QkFDVCxPQUFPLFdBQVcsR0FBRyxZQUFZO2dDQUM3QixrQ0FBa0MsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwRSxDQUFDO3FCQUNGLENBQUM7Z0JBQ0osQ0FBQyxDQUFBO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQTtRQUVELGtCQUFrQjs7O1FBQUU7WUFDbEIsT0FBTztnQkFDTCxPQUFPOzs7OztnQkFBRSxVQUFTLGFBQWtCLEVBQUUscUJBQWdDOzswQkFDOUQsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7OzBCQUN6QixLQUFLOzs7O29CQUFHLENBQUMsR0FBVyxFQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUVuRiw2QkFBNkI7b0JBQzdCLElBQUksQ0FBQyxDQUFDLGFBQWEsWUFBWSxnQkFBZ0IsQ0FBQyxFQUFFO3dCQUNoRCxPQUFPOzRCQUNMLElBQUksRUFBRSxLQUFLOzRCQUNYLE9BQU8sRUFBRSxLQUFLLENBQUMsOERBQ1gsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQzt5QkFDdkMsQ0FBQztxQkFDSDs7MEJBRUssS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ3JGLE9BQU8sS0FBSyxDQUFDLENBQUM7d0JBQ1YsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzt3QkFDZCxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxZQUFZLHFCQUFxQixDQUFDLElBQUksVUFBVSxDQUFDLEVBQUMsQ0FBQztnQkFDdEYsQ0FBQyxDQUFBO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQTtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsRUFBQyxDQUFDOzs7OztBQUVILFNBQVMsV0FBVyxDQUFDLENBQU07O1VBQ25CLFFBQVE7Ozs7SUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFOztjQUNwQixRQUFRLEdBQUcsQ0FBQyxDQUFDLFVBQVU7UUFDN0IsT0FBTyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFBO0lBRUQsSUFBSSxDQUFDLFlBQVksS0FBSyxFQUFFO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNwQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsSUFBSSxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBQSxDQUFDLEVBQVcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxTQUFTLEVBQUU7UUFDcEUsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsbUJBQUssQ0FBQyxFQUFBLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNqRjtJQUVELElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsbUJBQUssQ0FBQyxFQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0tBQzNEO0lBRUQsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDZixPQUFPLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pDO0lBRUQsT0FBTyxDQUFDLG1CQUFBLENBQUMsRUFBTyxDQUFDLENBQUMsV0FBVyxDQUFDO0FBQ2hDLENBQUM7Ozs7O0FBRUQsU0FBUyxhQUFhLENBQUMsSUFBUztJQUM5QixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLElBQUksWUFBWSxXQUFXLENBQUM7QUFDaEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge8m1Z2V0RE9NIGFzIGdldERPTX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7VHlwZSwgybVnbG9iYWwgYXMgZ2xvYmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tcG9uZW50Rml4dHVyZX0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7Qnl9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtjaGlsZE5vZGVzQXNMaXN0LCBoYXNDbGFzcywgaGFzU3R5bGUsIGlzQ29tbWVudE5vZGV9IGZyb20gJy4vYnJvd3Nlcl91dGlsJztcblxuXG4vKipcbiAqIEphc21pbmUgbWF0Y2hlcnMgdGhhdCBjaGVjayBBbmd1bGFyIHNwZWNpZmljIGNvbmRpdGlvbnMuXG4gKlxuICogTm90ZTogVGhlc2UgbWF0Y2hlcnMgd2lsbCBvbmx5IHdvcmsgaW4gYSBicm93c2VyIGVudmlyb25tZW50LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nTWF0Y2hlcnM8VCA9IGFueT4gZXh0ZW5kcyBqYXNtaW5lLk1hdGNoZXJzPFQ+IHtcbiAgLyoqXG4gICAqIEV4cGVjdCB0aGUgdmFsdWUgdG8gYmUgYSBgUHJvbWlzZWAuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIHtAZXhhbXBsZSB0ZXN0aW5nL3RzL21hdGNoZXJzLnRzIHJlZ2lvbj0ndG9CZVByb21pc2UnfVxuICAgKi9cbiAgdG9CZVByb21pc2UoKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogRXhwZWN0IHRoZSB2YWx1ZSB0byBiZSBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiB7QGV4YW1wbGUgdGVzdGluZy90cy9tYXRjaGVycy50cyByZWdpb249J3RvQmVBbkluc3RhbmNlT2YnfVxuICAgKi9cbiAgdG9CZUFuSW5zdGFuY2VPZihleHBlY3RlZDogYW55KTogYm9vbGVhbjtcblxuICAvKipcbiAgICogRXhwZWN0IHRoZSBlbGVtZW50IHRvIGhhdmUgZXhhY3RseSB0aGUgZ2l2ZW4gdGV4dC5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICoge0BleGFtcGxlIHRlc3RpbmcvdHMvbWF0Y2hlcnMudHMgcmVnaW9uPSd0b0hhdmVUZXh0J31cbiAgICovXG4gIHRvSGF2ZVRleHQoZXhwZWN0ZWQ6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEV4cGVjdCB0aGUgZWxlbWVudCB0byBoYXZlIHRoZSBnaXZlbiBDU1MgY2xhc3MuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIHtAZXhhbXBsZSB0ZXN0aW5nL3RzL21hdGNoZXJzLnRzIHJlZ2lvbj0ndG9IYXZlQ3NzQ2xhc3MnfVxuICAgKi9cbiAgdG9IYXZlQ3NzQ2xhc3MoZXhwZWN0ZWQ6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEV4cGVjdCB0aGUgZWxlbWVudCB0byBoYXZlIHRoZSBnaXZlbiBDU1Mgc3R5bGVzLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiB7QGV4YW1wbGUgdGVzdGluZy90cy9tYXRjaGVycy50cyByZWdpb249J3RvSGF2ZUNzc1N0eWxlJ31cbiAgICovXG4gIHRvSGF2ZUNzc1N0eWxlKGV4cGVjdGVkOiB7W2s6IHN0cmluZ106IHN0cmluZ318c3RyaW5nKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogRXhwZWN0IGEgY2xhc3MgdG8gaW1wbGVtZW50IHRoZSBpbnRlcmZhY2Ugb2YgdGhlIGdpdmVuIGNsYXNzLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiB7QGV4YW1wbGUgdGVzdGluZy90cy9tYXRjaGVycy50cyByZWdpb249J3RvSW1wbGVtZW50J31cbiAgICovXG4gIHRvSW1wbGVtZW50KGV4cGVjdGVkOiBhbnkpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFeHBlY3QgYW4gZXhjZXB0aW9uIHRvIGNvbnRhaW4gdGhlIGdpdmVuIGVycm9yIHRleHQuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIHtAZXhhbXBsZSB0ZXN0aW5nL3RzL21hdGNoZXJzLnRzIHJlZ2lvbj0ndG9Db250YWluRXJyb3InfVxuICAgKi9cbiAgdG9Db250YWluRXJyb3IoZXhwZWN0ZWQ6IGFueSk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEV4cGVjdCBhIGNvbXBvbmVudCBvZiB0aGUgZ2l2ZW4gdHlwZSB0byBzaG93LlxuICAgKi9cbiAgdG9Db250YWluQ29tcG9uZW50KGV4cGVjdGVkQ29tcG9uZW50VHlwZTogVHlwZTxhbnk+LCBleHBlY3RhdGlvbkZhaWxPdXRwdXQ/OiBhbnkpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbnZlcnQgdGhlIG1hdGNoZXJzLlxuICAgKi9cbiAgbm90OiBOZ01hdGNoZXJzPFQ+O1xufVxuXG5jb25zdCBfZ2xvYmFsID0gPGFueT4odHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3cpO1xuXG4vKipcbiAqIEphc21pbmUgbWF0Y2hpbmcgZnVuY3Rpb24gd2l0aCBBbmd1bGFyIG1hdGNoZXJzIG1peGVkIGluLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiB7QGV4YW1wbGUgdGVzdGluZy90cy9tYXRjaGVycy50cyByZWdpb249J3RvSGF2ZVRleHQnfVxuICovXG5leHBvcnQgY29uc3QgZXhwZWN0OiA8VCA9IGFueT4oYWN0dWFsOiBUKSA9PiBOZ01hdGNoZXJzPFQ+ID0gX2dsb2JhbC5leHBlY3Q7XG5cblxuLy8gU29tZSBNYXAgcG9seWZpbGxzIGRvbid0IHBvbHlmaWxsIE1hcC50b1N0cmluZyBjb3JyZWN0bHksIHdoaWNoXG4vLyBnaXZlcyB1cyBiYWQgZXJyb3IgbWVzc2FnZXMgaW4gdGVzdHMuXG4vLyBUaGUgb25seSB3YXkgdG8gZG8gdGhpcyBpbiBKYXNtaW5lIGlzIHRvIG1vbmtleSBwYXRjaCBhIG1ldGhvZFxuLy8gdG8gdGhlIG9iamVjdCA6LShcbihNYXAgYXMgYW55KS5wcm90b3R5cGVbJ2phc21pbmVUb1N0cmluZyddID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG0gPSB0aGlzO1xuICBpZiAoIW0pIHtcbiAgICByZXR1cm4gJycgKyBtO1xuICB9XG4gIGNvbnN0IHJlczogYW55W10gPSBbXTtcbiAgbS5mb3JFYWNoKCh2OiBhbnksIGs6IGFueSkgPT4ge1xuICAgIHJlcy5wdXNoKGAke1N0cmluZyhrKX06JHtTdHJpbmcodil9YCk7XG4gIH0pO1xuICByZXR1cm4gYHsgJHtyZXMuam9pbignLCcpfSB9YDtcbn07XG5cbl9nbG9iYWwuYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgLy8gQ3VzdG9tIGhhbmRsZXIgZm9yIE1hcCBhcyB3ZSB1c2UgSmFzbWluZSAyLjQsIGFuZCBzdXBwb3J0IGZvciBtYXBzIGlzIG5vdFxuICAvLyBhZGRlZCB1bnRpbCBKYXNtaW5lIDIuNi5cbiAgamFzbWluZS5hZGRDdXN0b21FcXVhbGl0eVRlc3RlcihmdW5jdGlvbiBjb21wYXJlTWFwKGFjdHVhbDogYW55LCBleHBlY3RlZDogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKGFjdHVhbCBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgbGV0IHBhc3MgPSBhY3R1YWwuc2l6ZSA9PT0gZXhwZWN0ZWQuc2l6ZTtcbiAgICAgIGlmIChwYXNzKSB7XG4gICAgICAgIGFjdHVhbC5mb3JFYWNoKCh2OiBhbnksIGs6IGFueSkgPT4ge1xuICAgICAgICAgIHBhc3MgPSBwYXNzICYmIGphc21pbmUubWF0Y2hlcnNVdGlsLmVxdWFscyh2LCBleHBlY3RlZC5nZXQoaykpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPKG1pc2tvKTogd2Ugc2hvdWxkIGNoYW5nZSB0aGUgcmV0dXJuLCBidXQgamFzbWluZS5kLnRzIGlzIG5vdCBudWxsIHNhZmVcbiAgICAgIHJldHVybiB1bmRlZmluZWQhO1xuICAgIH1cbiAgfSk7XG4gIGphc21pbmUuYWRkTWF0Y2hlcnMoe1xuICAgIHRvQmVQcm9taXNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBhcmU6IGZ1bmN0aW9uKGFjdHVhbDogYW55KSB7XG4gICAgICAgICAgY29uc3QgcGFzcyA9IHR5cGVvZiBhY3R1YWwgPT09ICdvYmplY3QnICYmIHR5cGVvZiBhY3R1YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFzczogcGFzcyxcbiAgICAgICAgICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICAgICAgICByZXR1cm4gJ0V4cGVjdGVkICcgKyBhY3R1YWwgKyAnIHRvIGJlIGEgcHJvbWlzZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgdG9CZUFuSW5zdGFuY2VPZjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb21wYXJlOiBmdW5jdGlvbihhY3R1YWw6IGFueSwgZXhwZWN0ZWRDbGFzczogYW55KSB7XG4gICAgICAgICAgY29uc3QgcGFzcyA9IHR5cGVvZiBhY3R1YWwgPT09ICdvYmplY3QnICYmIGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3M7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhc3M6IHBhc3MsXG4gICAgICAgICAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICdFeHBlY3RlZCAnICsgYWN0dWFsICsgJyB0byBiZSBhbiBpbnN0YW5jZSBvZiAnICsgZXhwZWN0ZWRDbGFzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB0b0hhdmVUZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBhcmU6IGZ1bmN0aW9uKGFjdHVhbDogYW55LCBleHBlY3RlZFRleHQ6IHN0cmluZykge1xuICAgICAgICAgIGNvbnN0IGFjdHVhbFRleHQgPSBlbGVtZW50VGV4dChhY3R1YWwpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXNzOiBhY3R1YWxUZXh0ID09IGV4cGVjdGVkVGV4dCxcbiAgICAgICAgICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICAgICAgICByZXR1cm4gJ0V4cGVjdGVkICcgKyBhY3R1YWxUZXh0ICsgJyB0byBiZSBlcXVhbCB0byAnICsgZXhwZWN0ZWRUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIHRvSGF2ZUNzc0NsYXNzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7Y29tcGFyZTogYnVpbGRFcnJvcihmYWxzZSksIG5lZ2F0aXZlQ29tcGFyZTogYnVpbGRFcnJvcih0cnVlKX07XG5cbiAgICAgIGZ1bmN0aW9uIGJ1aWxkRXJyb3IoaXNOb3Q6IGJvb2xlYW4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFjdHVhbDogYW55LCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXNzOiBoYXNDbGFzcyhhY3R1YWwsIGNsYXNzTmFtZSkgPT0gIWlzTm90LFxuICAgICAgICAgICAgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBgRXhwZWN0ZWQgJHthY3R1YWwub3V0ZXJIVE1MfSAke1xuICAgICAgICAgICAgICAgICAgaXNOb3QgPyAnbm90ICcgOiAnJ310byBjb250YWluIHRoZSBDU1MgY2xhc3MgXCIke2NsYXNzTmFtZX1cImA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdG9IYXZlQ3NzU3R5bGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oYWN0dWFsOiBhbnksIHN0eWxlczoge1trOiBzdHJpbmddOiBzdHJpbmd9fHN0cmluZykge1xuICAgICAgICAgIGxldCBhbGxQYXNzZWQ6IGJvb2xlYW47XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBhbGxQYXNzZWQgPSBoYXNTdHlsZShhY3R1YWwsIHN0eWxlcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbFBhc3NlZCA9IE9iamVjdC5rZXlzKHN0eWxlcykubGVuZ3RoICE9PSAwO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgICBhbGxQYXNzZWQgPSBhbGxQYXNzZWQgJiYgaGFzU3R5bGUoYWN0dWFsLCBwcm9wLCBzdHlsZXNbcHJvcF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhc3M6IGFsbFBhc3NlZCxcbiAgICAgICAgICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlU3RyID0gdHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycgPyBzdHlsZXMgOiBKU09OLnN0cmluZ2lmeShzdHlsZXMpO1xuICAgICAgICAgICAgICByZXR1cm4gYEV4cGVjdGVkICR7YWN0dWFsLm91dGVySFRNTH0gJHshYWxsUGFzc2VkID8gJyAnIDogJ25vdCAnfXRvIGNvbnRhaW4gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgQ1NTICR7dHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycgPyAncHJvcGVydHknIDogJ3N0eWxlcyd9IFwiJHtcbiAgICAgICAgICAgICAgICAgIGV4cGVjdGVkVmFsdWVTdHJ9XCJgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIHRvQ29udGFpbkVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBhcmU6IGZ1bmN0aW9uKGFjdHVhbDogYW55LCBleHBlY3RlZFRleHQ6IGFueSkge1xuICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGFjdHVhbC50b1N0cmluZygpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXNzOiBlcnJvck1lc3NhZ2UuaW5kZXhPZihleHBlY3RlZFRleHQpID4gLTEsXG4gICAgICAgICAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICdFeHBlY3RlZCAnICsgZXJyb3JNZXNzYWdlICsgJyB0byBjb250YWluICcgKyBleHBlY3RlZFRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgdG9JbXBsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oYWN0dWFsT2JqZWN0OiBhbnksIGV4cGVjdGVkSW50ZXJmYWNlOiBhbnkpIHtcbiAgICAgICAgICBjb25zdCBpbnRQcm9wcyA9IE9iamVjdC5rZXlzKGV4cGVjdGVkSW50ZXJmYWNlLnByb3RvdHlwZSk7XG5cbiAgICAgICAgICBjb25zdCBtaXNzZWRNZXRob2RzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgIGludFByb3BzLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICAgIGlmICghYWN0dWFsT2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZVtrXSkgbWlzc2VkTWV0aG9kcy5wdXNoKGspO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhc3M6IG1pc3NlZE1ldGhvZHMubGVuZ3RoID09IDAsXG4gICAgICAgICAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICdFeHBlY3RlZCAnICsgYWN0dWFsT2JqZWN0ICtcbiAgICAgICAgICAgICAgICAgICcgdG8gaGF2ZSB0aGUgZm9sbG93aW5nIG1ldGhvZHM6ICcgKyBtaXNzZWRNZXRob2RzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgdG9Db250YWluQ29tcG9uZW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBhcmU6IGZ1bmN0aW9uKGFjdHVhbEZpeHR1cmU6IGFueSwgZXhwZWN0ZWRDb21wb25lbnRUeXBlOiBUeXBlPGFueT4pIHtcbiAgICAgICAgICBjb25zdCBmYWlsT3V0cHV0ID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgIGNvbnN0IG1zZ0ZuID0gKG1zZzogc3RyaW5nKTogc3RyaW5nID0+IFttc2csIGZhaWxPdXRwdXRdLmZpbHRlcihCb29sZWFuKS5qb2luKCcsICcpO1xuXG4gICAgICAgICAgLy8gdmVyaWZ5IGNvcnJlY3QgYWN0dWFsIHR5cGVcbiAgICAgICAgICBpZiAoIShhY3R1YWxGaXh0dXJlIGluc3RhbmNlb2YgQ29tcG9uZW50Rml4dHVyZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHBhc3M6IGZhbHNlLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBtc2dGbihgRXhwZWN0ZWQgYWN0dWFsIHRvIGJlIG9mIHR5cGUgXFwnQ29tcG9uZW50Rml4dHVyZVxcJyBbYWN0dWFsPSR7XG4gICAgICAgICAgICAgICAgICBhY3R1YWxGaXh0dXJlLmNvbnN0cnVjdG9yLm5hbWV9XWApXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZvdW5kID0gISFhY3R1YWxGaXh0dXJlLmRlYnVnRWxlbWVudC5xdWVyeShCeS5kaXJlY3RpdmUoZXhwZWN0ZWRDb21wb25lbnRUeXBlKSk7XG4gICAgICAgICAgcmV0dXJuIGZvdW5kID9cbiAgICAgICAgICAgICAge3Bhc3M6IHRydWV9IDpcbiAgICAgICAgICAgICAge3Bhc3M6IGZhbHNlLCBtZXNzYWdlOiBtc2dGbihgRXhwZWN0ZWQgJHtleHBlY3RlZENvbXBvbmVudFR5cGUubmFtZX0gdG8gc2hvd2ApfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGVsZW1lbnRUZXh0KG46IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IGhhc05vZGVzID0gKG46IGFueSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gbi5jaGlsZE5vZGVzO1xuICAgIHJldHVybiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGggPiAwO1xuICB9O1xuXG4gIGlmIChuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gbi5tYXAoZWxlbWVudFRleHQpLmpvaW4oJycpO1xuICB9XG5cbiAgaWYgKGlzQ29tbWVudE5vZGUobikpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoZ2V0RE9NKCkuaXNFbGVtZW50Tm9kZShuKSAmJiAobiBhcyBFbGVtZW50KS50YWdOYW1lID09ICdDT05URU5UJykge1xuICAgIHJldHVybiBlbGVtZW50VGV4dChBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoKDxhbnk+bikuZ2V0RGlzdHJpYnV0ZWROb2RlcygpKSk7XG4gIH1cblxuICBpZiAoaGFzU2hhZG93Um9vdChuKSkge1xuICAgIHJldHVybiBlbGVtZW50VGV4dChjaGlsZE5vZGVzQXNMaXN0KCg8YW55Pm4pLnNoYWRvd1Jvb3QpKTtcbiAgfVxuXG4gIGlmIChoYXNOb2RlcyhuKSkge1xuICAgIHJldHVybiBlbGVtZW50VGV4dChjaGlsZE5vZGVzQXNMaXN0KG4pKTtcbiAgfVxuXG4gIHJldHVybiAobiBhcyBhbnkpLnRleHRDb250ZW50O1xufVxuXG5mdW5jdGlvbiBoYXNTaGFkb3dSb290KG5vZGU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gbm9kZS5zaGFkb3dSb290ICE9IG51bGwgJiYgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuIl19