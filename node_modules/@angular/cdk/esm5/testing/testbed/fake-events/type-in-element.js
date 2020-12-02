/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __values } from "tslib";
import { dispatchFakeEvent, dispatchKeyboardEvent } from './dispatch-events';
import { triggerFocus } from './element-focus';
/**
 * Checks whether the given Element is a text input element.
 * @docs-private
 */
export function isTextInput(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' || nodeName === 'textarea';
}
export function typeInElement(element) {
    var e_1, _a;
    var modifiersAndKeys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        modifiersAndKeys[_i - 1] = arguments[_i];
    }
    var first = modifiersAndKeys[0];
    var modifiers;
    var rest;
    if (typeof first !== 'string' && first.keyCode === undefined && first.key === undefined) {
        modifiers = first;
        rest = modifiersAndKeys.slice(1);
    }
    else {
        modifiers = {};
        rest = modifiersAndKeys;
    }
    var keys = rest
        .map(function (k) { return typeof k === 'string' ?
        k.split('').map(function (c) { return ({ keyCode: c.toUpperCase().charCodeAt(0), key: c }); }) : [k]; })
        .reduce(function (arr, k) { return arr.concat(k); }, []);
    triggerFocus(element);
    try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            dispatchKeyboardEvent(element, 'keydown', key.keyCode, key.key, element, modifiers);
            dispatchKeyboardEvent(element, 'keypress', key.keyCode, key.key, element, modifiers);
            if (isTextInput(element) && key.key && key.key.length === 1) {
                element.value += key.key;
                dispatchFakeEvent(element, 'input');
            }
            dispatchKeyboardEvent(element, 'keyup', key.keyCode, key.key, element, modifiers);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/**
 * Clears the text in an input or textarea element.
 * @docs-private
 */
export function clearElement(element) {
    triggerFocus(element);
    element.value = '';
    dispatchFakeEvent(element, 'input');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1pbi1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90ZXN0aW5nL3Rlc3RiZWQvZmFrZS1ldmVudHMvdHlwZS1pbi1lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFHSCxPQUFPLEVBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0M7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxPQUFnQjtJQUMxQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hELE9BQU8sUUFBUSxLQUFLLE9BQU8sSUFBSSxRQUFRLEtBQUssVUFBVSxDQUFFO0FBQzFELENBQUM7QUF1QkQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxPQUFvQjs7SUFBRSwwQkFBd0I7U0FBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1FBQXhCLHlDQUF3Qjs7SUFDMUUsSUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSSxTQUF1QixDQUFDO0lBQzVCLElBQUksSUFBbUQsQ0FBQztJQUN4RCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUN2RixTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEM7U0FBTTtRQUNMLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLEdBQUcsZ0JBQWdCLENBQUM7S0FDekI7SUFDRCxJQUFNLElBQUksR0FBdUMsSUFBSTtTQUNoRCxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUR4RSxDQUN3RSxDQUFDO1NBQ2xGLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDLElBQUssT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUzQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7O1FBQ3RCLEtBQWtCLElBQUEsU0FBQSxTQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtZQUFuQixJQUFNLEdBQUcsaUJBQUE7WUFDWixxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDcEYscUJBQXFCLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3JGLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMzRCxPQUFPLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3pCLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNyQztZQUNELHFCQUFxQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNuRjs7Ozs7Ozs7O0FBQ0gsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsT0FBK0M7SUFDMUUsWUFBWSxDQUFDLE9BQXNCLENBQUMsQ0FBQztJQUNyQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNuQixpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge01vZGlmaWVyS2V5c30gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuaW1wb3J0IHtkaXNwYXRjaEZha2VFdmVudCwgZGlzcGF0Y2hLZXlib2FyZEV2ZW50fSBmcm9tICcuL2Rpc3BhdGNoLWV2ZW50cyc7XG5pbXBvcnQge3RyaWdnZXJGb2N1c30gZnJvbSAnLi9lbGVtZW50LWZvY3VzJztcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gRWxlbWVudCBpcyBhIHRleHQgaW5wdXQgZWxlbWVudC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGV4dElucHV0KGVsZW1lbnQ6IEVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHtcbiAgY29uc3Qgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBub2RlTmFtZSA9PT0gJ2lucHV0JyB8fCBub2RlTmFtZSA9PT0gJ3RleHRhcmVhJyA7XG59XG5cbi8qKlxuICogRm9jdXNlcyBhbiBpbnB1dCwgc2V0cyBpdHMgdmFsdWUgYW5kIGRpc3BhdGNoZXNcbiAqIHRoZSBgaW5wdXRgIGV2ZW50LCBzaW11bGF0aW5nIHRoZSB1c2VyIHR5cGluZy5cbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgb250byB3aGljaCB0byBzZXQgdGhlIHZhbHVlLlxuICogQHBhcmFtIGtleXMgVGhlIGtleXMgdG8gc2VuZCB0byB0aGUgZWxlbWVudC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR5cGVJbkVsZW1lbnQoXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsIC4uLmtleXM6IChzdHJpbmcgfCB7a2V5Q29kZT86IG51bWJlciwga2V5Pzogc3RyaW5nfSlbXSk6IHZvaWQ7XG5cbi8qKlxuICogRm9jdXNlcyBhbiBpbnB1dCwgc2V0cyBpdHMgdmFsdWUgYW5kIGRpc3BhdGNoZXNcbiAqIHRoZSBgaW5wdXRgIGV2ZW50LCBzaW11bGF0aW5nIHRoZSB1c2VyIHR5cGluZy5cbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgb250byB3aGljaCB0byBzZXQgdGhlIHZhbHVlLlxuICogQHBhcmFtIG1vZGlmaWVycyBNb2RpZmllciBrZXlzIHRoYXQgYXJlIGhlbGQgd2hpbGUgdHlwaW5nLlxuICogQHBhcmFtIGtleXMgVGhlIGtleXMgdG8gc2VuZCB0byB0aGUgZWxlbWVudC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR5cGVJbkVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIG1vZGlmaWVyczogTW9kaWZpZXJLZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ua2V5czogKHN0cmluZyB8IHtrZXlDb2RlPzogbnVtYmVyLCBrZXk/OiBzdHJpbmd9KVtdKTogdm9pZDtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVJbkVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIC4uLm1vZGlmaWVyc0FuZEtleXM6IGFueSkge1xuICBjb25zdCBmaXJzdCA9IG1vZGlmaWVyc0FuZEtleXNbMF07XG4gIGxldCBtb2RpZmllcnM6IE1vZGlmaWVyS2V5cztcbiAgbGV0IHJlc3Q6IChzdHJpbmcgfCB7a2V5Q29kZT86IG51bWJlciwga2V5Pzogc3RyaW5nfSlbXTtcbiAgaWYgKHR5cGVvZiBmaXJzdCAhPT0gJ3N0cmluZycgJiYgZmlyc3Qua2V5Q29kZSA9PT0gdW5kZWZpbmVkICYmIGZpcnN0LmtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbW9kaWZpZXJzID0gZmlyc3Q7XG4gICAgcmVzdCA9IG1vZGlmaWVyc0FuZEtleXMuc2xpY2UoMSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kaWZpZXJzID0ge307XG4gICAgcmVzdCA9IG1vZGlmaWVyc0FuZEtleXM7XG4gIH1cbiAgY29uc3Qga2V5czoge2tleUNvZGU/OiBudW1iZXIsIGtleT86IHN0cmluZ31bXSA9IHJlc3RcbiAgICAgIC5tYXAoayA9PiB0eXBlb2YgayA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgIGsuc3BsaXQoJycpLm1hcChjID0+ICh7a2V5Q29kZTogYy50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCksIGtleTogY30pKSA6IFtrXSlcbiAgICAgIC5yZWR1Y2UoKGFyciwgaykgPT4gYXJyLmNvbmNhdChrKSwgW10pO1xuXG4gIHRyaWdnZXJGb2N1cyhlbGVtZW50KTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGRpc3BhdGNoS2V5Ym9hcmRFdmVudChlbGVtZW50LCAna2V5ZG93bicsIGtleS5rZXlDb2RlLCBrZXkua2V5LCBlbGVtZW50LCBtb2RpZmllcnMpO1xuICAgIGRpc3BhdGNoS2V5Ym9hcmRFdmVudChlbGVtZW50LCAna2V5cHJlc3MnLCBrZXkua2V5Q29kZSwga2V5LmtleSwgZWxlbWVudCwgbW9kaWZpZXJzKTtcbiAgICBpZiAoaXNUZXh0SW5wdXQoZWxlbWVudCkgJiYga2V5LmtleSAmJiBrZXkua2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgZWxlbWVudC52YWx1ZSArPSBrZXkua2V5O1xuICAgICAgZGlzcGF0Y2hGYWtlRXZlbnQoZWxlbWVudCwgJ2lucHV0Jyk7XG4gICAgfVxuICAgIGRpc3BhdGNoS2V5Ym9hcmRFdmVudChlbGVtZW50LCAna2V5dXAnLCBrZXkua2V5Q29kZSwga2V5LmtleSwgZWxlbWVudCwgbW9kaWZpZXJzKTtcbiAgfVxufVxuXG4vKipcbiAqIENsZWFycyB0aGUgdGV4dCBpbiBhbiBpbnB1dCBvciB0ZXh0YXJlYSBlbGVtZW50LlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gIHRyaWdnZXJGb2N1cyhlbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcbiAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICBkaXNwYXRjaEZha2VFdmVudChlbGVtZW50LCAnaW5wdXQnKTtcbn1cbiJdfQ==