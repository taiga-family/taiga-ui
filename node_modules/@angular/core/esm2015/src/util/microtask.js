/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const promise = (() => Promise.resolve(0))();
export function scheduleMicroTask(fn) {
    if (typeof Zone === 'undefined') {
        // use promise to schedule microTask instead of use Zone
        promise.then(() => {
            fn && fn.apply(null, null);
        });
    }
    else {
        Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm90YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvdXRpbC9taWNyb3Rhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsTUFBTSxPQUFPLEdBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFJM0QsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEVBQVk7SUFDNUMsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQUU7UUFDL0Isd0RBQXdEO1FBQ3hELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2hCLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztLQUNKO1NBQU07UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3pEO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuY29uc3QgcHJvbWlzZTogUHJvbWlzZTxhbnk+ID0gKCgpID0+IFByb21pc2UucmVzb2x2ZSgwKSkoKTtcblxuZGVjbGFyZSBjb25zdCBab25lOiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZU1pY3JvVGFzayhmbjogRnVuY3Rpb24pIHtcbiAgaWYgKHR5cGVvZiBab25lID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIHVzZSBwcm9taXNlIHRvIHNjaGVkdWxlIG1pY3JvVGFzayBpbnN0ZWFkIG9mIHVzZSBab25lXG4gICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGZuICYmIGZuLmFwcGx5KG51bGwsIG51bGwpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIFpvbmUuY3VycmVudC5zY2hlZHVsZU1pY3JvVGFzaygnc2NoZWR1bGVNaWNyb3Rhc2snLCBmbik7XG4gIH1cbn1cbiJdfQ==