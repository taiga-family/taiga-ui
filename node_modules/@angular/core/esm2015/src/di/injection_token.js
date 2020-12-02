/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/di/injection_token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵɵdefineInjectable } from './interface/defs';
/**
 * Creates a token that can be used in a DI Provider.
 *
 * Use an `InjectionToken` whenever the type you are injecting is not reified (does not have a
 * runtime representation) such as when injecting an interface, callable type, array or
 * parameterized type.
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
 * When creating an `InjectionToken`, you can optionally specify a factory function which returns
 * (possibly by creating) a default value of the parameterized type `T`. This sets up the
 * `InjectionToken` using this factory as a provider as if it was defined explicitly in the
 * application's root injector. If the factory function, which takes zero arguments, needs to inject
 * dependencies, it can do so using the `inject` function. See below for an example.
 *
 * Additionally, if a `factory` is specified you can also specify the `providedIn` option, which
 * overrides the above behavior and marks the token as belonging to a particular `\@NgModule`. As
 * mentioned above, `'root'` is the default value for `providedIn`.
 *
 * \@usageNotes
 * ### Basic Example
 *
 * ### Plain InjectionToken
 *
 * {\@example core/di/ts/injector_spec.ts region='InjectionToken'}
 *
 * ### Tree-shakable InjectionToken
 *
 * {\@example core/di/ts/injector_spec.ts region='ShakableInjectionToken'}
 *
 *
 * \@publicApi
 * @template T
 */
export class InjectionToken {
    /**
     * @param {?} _desc
     * @param {?=} options
     */
    constructor(_desc, options) {
        this._desc = _desc;
        /**
         * \@internal
         */
        this.ngMetadataName = 'InjectionToken';
        this.ɵprov = undefined;
        if (typeof options == 'number') {
            // This is a special hack to assign __NG_ELEMENT_ID__ to this instance.
            // __NG_ELEMENT_ID__ is Used by Ivy to determine bloom filter id.
            // We are using it to assign `-1` which is used to identify `Injector`.
            ((/** @type {?} */ (this))).__NG_ELEMENT_ID__ = options;
        }
        else if (options !== undefined) {
            this.ɵprov = ɵɵdefineInjectable({
                token: this,
                providedIn: options.providedIn || 'root',
                factory: options.factory,
            });
        }
    }
    /**
     * @return {?}
     */
    toString() {
        return `InjectionToken ${this._desc}`;
    }
}
if (false) {
    /**
     * \@internal
     * @type {?}
     */
    InjectionToken.prototype.ngMetadataName;
    /** @type {?} */
    InjectionToken.prototype.ɵprov;
    /**
     * @type {?}
     * @protected
     */
    InjectionToken.prototype._desc;
}
/**
 * @record
 * @template T
 */
export function InjectableDefToken() { }
if (false) {
    /** @type {?} */
    InjectableDefToken.prototype.ɵprov;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0aW9uX3Rva2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvZGkvaW5qZWN0aW9uX3Rva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ3BELE1BQU0sT0FBTyxjQUFjOzs7OztJQU16QixZQUFzQixLQUFhLEVBQUUsT0FFcEM7UUFGcUIsVUFBSyxHQUFMLEtBQUssQ0FBUTs7OztRQUoxQixtQkFBYyxHQUFHLGdCQUFnQixDQUFDO1FBT3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLElBQUksT0FBTyxPQUFPLElBQUksUUFBUSxFQUFFO1lBQzlCLHVFQUF1RTtZQUN2RSxpRUFBaUU7WUFDakUsdUVBQXVFO1lBQ3ZFLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUM7U0FDM0M7YUFBTSxJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztnQkFDOUIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLElBQUksTUFBTTtnQkFDeEMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO2FBQ3pCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLGtCQUFrQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztDQUNGOzs7Ozs7SUF6QkMsd0NBQTJDOztJQUUzQywrQkFBZ0M7Ozs7O0lBRXBCLCtCQUF1Qjs7Ozs7O0FBdUJyQyx3Q0FFQzs7O0lBREMsbUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlL3R5cGUnO1xuXG5pbXBvcnQge8m1ybVkZWZpbmVJbmplY3RhYmxlfSBmcm9tICcuL2ludGVyZmFjZS9kZWZzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCBpbiBhIERJIFByb3ZpZGVyLlxuICpcbiAqIFVzZSBhbiBgSW5qZWN0aW9uVG9rZW5gIHdoZW5ldmVyIHRoZSB0eXBlIHlvdSBhcmUgaW5qZWN0aW5nIGlzIG5vdCByZWlmaWVkIChkb2VzIG5vdCBoYXZlIGFcbiAqIHJ1bnRpbWUgcmVwcmVzZW50YXRpb24pIHN1Y2ggYXMgd2hlbiBpbmplY3RpbmcgYW4gaW50ZXJmYWNlLCBjYWxsYWJsZSB0eXBlLCBhcnJheSBvclxuICogcGFyYW1ldGVyaXplZCB0eXBlLlxuICpcbiAqIGBJbmplY3Rpb25Ub2tlbmAgaXMgcGFyYW1ldGVyaXplZCBvbiBgVGAgd2hpY2ggaXMgdGhlIHR5cGUgb2Ygb2JqZWN0IHdoaWNoIHdpbGwgYmUgcmV0dXJuZWQgYnlcbiAqIHRoZSBgSW5qZWN0b3JgLiBUaGlzIHByb3ZpZGVzIGFkZGl0aW9uYWwgbGV2ZWwgb2YgdHlwZSBzYWZldHkuXG4gKlxuICogYGBgXG4gKiBpbnRlcmZhY2UgTXlJbnRlcmZhY2Ugey4uLn1cbiAqIHZhciBteUludGVyZmFjZSA9IGluamVjdG9yLmdldChuZXcgSW5qZWN0aW9uVG9rZW48TXlJbnRlcmZhY2U+KCdTb21lVG9rZW4nKSk7XG4gKiAvLyBteUludGVyZmFjZSBpcyBpbmZlcnJlZCB0byBiZSBNeUludGVyZmFjZS5cbiAqIGBgYFxuICpcbiAqIFdoZW4gY3JlYXRpbmcgYW4gYEluamVjdGlvblRva2VuYCwgeW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHJldHVybnNcbiAqIChwb3NzaWJseSBieSBjcmVhdGluZykgYSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXJpemVkIHR5cGUgYFRgLiBUaGlzIHNldHMgdXAgdGhlXG4gKiBgSW5qZWN0aW9uVG9rZW5gIHVzaW5nIHRoaXMgZmFjdG9yeSBhcyBhIHByb3ZpZGVyIGFzIGlmIGl0IHdhcyBkZWZpbmVkIGV4cGxpY2l0bHkgaW4gdGhlXG4gKiBhcHBsaWNhdGlvbidzIHJvb3QgaW5qZWN0b3IuIElmIHRoZSBmYWN0b3J5IGZ1bmN0aW9uLCB3aGljaCB0YWtlcyB6ZXJvIGFyZ3VtZW50cywgbmVlZHMgdG8gaW5qZWN0XG4gKiBkZXBlbmRlbmNpZXMsIGl0IGNhbiBkbyBzbyB1c2luZyB0aGUgYGluamVjdGAgZnVuY3Rpb24uIFNlZSBiZWxvdyBmb3IgYW4gZXhhbXBsZS5cbiAqXG4gKiBBZGRpdGlvbmFsbHksIGlmIGEgYGZhY3RvcnlgIGlzIHNwZWNpZmllZCB5b3UgY2FuIGFsc28gc3BlY2lmeSB0aGUgYHByb3ZpZGVkSW5gIG9wdGlvbiwgd2hpY2hcbiAqIG92ZXJyaWRlcyB0aGUgYWJvdmUgYmVoYXZpb3IgYW5kIG1hcmtzIHRoZSB0b2tlbiBhcyBiZWxvbmdpbmcgdG8gYSBwYXJ0aWN1bGFyIGBATmdNb2R1bGVgLiBBc1xuICogbWVudGlvbmVkIGFib3ZlLCBgJ3Jvb3QnYCBpcyB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgYHByb3ZpZGVkSW5gLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiAjIyMgQmFzaWMgRXhhbXBsZVxuICpcbiAqICMjIyBQbGFpbiBJbmplY3Rpb25Ub2tlblxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL2luamVjdG9yX3NwZWMudHMgcmVnaW9uPSdJbmplY3Rpb25Ub2tlbid9XG4gKlxuICogIyMjIFRyZWUtc2hha2FibGUgSW5qZWN0aW9uVG9rZW5cbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9kaS90cy9pbmplY3Rvcl9zcGVjLnRzIHJlZ2lvbj0nU2hha2FibGVJbmplY3Rpb25Ub2tlbid9XG4gKlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIEluamVjdGlvblRva2VuPFQ+IHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZWFkb25seSBuZ01ldGFkYXRhTmFtZSA9ICdJbmplY3Rpb25Ub2tlbic7XG5cbiAgcmVhZG9ubHkgybVwcm92OiBuZXZlcnx1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9kZXNjOiBzdHJpbmcsIG9wdGlvbnM/OiB7XG4gICAgcHJvdmlkZWRJbj86IFR5cGU8YW55Pnwncm9vdCd8J3BsYXRmb3JtJ3wnYW55J3xudWxsLCBmYWN0b3J5OiAoKSA9PiBUXG4gIH0pIHtcbiAgICB0aGlzLsm1cHJvdiA9IHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT0gJ251bWJlcicpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSBzcGVjaWFsIGhhY2sgdG8gYXNzaWduIF9fTkdfRUxFTUVOVF9JRF9fIHRvIHRoaXMgaW5zdGFuY2UuXG4gICAgICAvLyBfX05HX0VMRU1FTlRfSURfXyBpcyBVc2VkIGJ5IEl2eSB0byBkZXRlcm1pbmUgYmxvb20gZmlsdGVyIGlkLlxuICAgICAgLy8gV2UgYXJlIHVzaW5nIGl0IHRvIGFzc2lnbiBgLTFgIHdoaWNoIGlzIHVzZWQgdG8gaWRlbnRpZnkgYEluamVjdG9yYC5cbiAgICAgICh0aGlzIGFzIGFueSkuX19OR19FTEVNRU5UX0lEX18gPSBvcHRpb25zO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLsm1cHJvdiA9IMm1ybVkZWZpbmVJbmplY3RhYmxlKHtcbiAgICAgICAgdG9rZW46IHRoaXMsXG4gICAgICAgIHByb3ZpZGVkSW46IG9wdGlvbnMucHJvdmlkZWRJbiB8fCAncm9vdCcsXG4gICAgICAgIGZhY3Rvcnk6IG9wdGlvbnMuZmFjdG9yeSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBJbmplY3Rpb25Ub2tlbiAke3RoaXMuX2Rlc2N9YDtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdGFibGVEZWZUb2tlbjxUPiBleHRlbmRzIEluamVjdGlvblRva2VuPFQ+IHtcbiAgybVwcm92OiBuZXZlcjtcbn1cbiJdfQ==