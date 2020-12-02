/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/bindings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { devModeEqual } from '../change_detection/change_detection_util';
import { assertDataInRange, assertLessThan, assertNotSame } from '../util/assert';
import { getExpressionChangedErrorDetails, throwErrorIfNoChangesMode } from './errors';
import { getCheckNoChangesMode } from './state';
import { NO_CHANGE } from './tokens';
// TODO(misko): consider inlining
/**
 * Updates binding and returns the value.
 * @param {?} lView
 * @param {?} bindingIndex
 * @param {?} value
 * @return {?}
 */
export function updateBinding(lView, bindingIndex, value) {
    return lView[bindingIndex] = value;
}
/**
 * Gets the current binding value.
 * @param {?} lView
 * @param {?} bindingIndex
 * @return {?}
 */
export function getBinding(lView, bindingIndex) {
    ngDevMode && assertDataInRange(lView, bindingIndex);
    ngDevMode &&
        assertNotSame(lView[bindingIndex], NO_CHANGE, 'Stored value should never be NO_CHANGE.');
    return lView[bindingIndex];
}
/**
 * Updates binding if changed, then returns whether it was updated.
 *
 * This function also checks the `CheckNoChangesMode` and throws if changes are made.
 * Some changes (Objects/iterables) during `CheckNoChangesMode` are exempt to comply with VE
 * behavior.
 *
 * @param {?} lView current `LView`
 * @param {?} bindingIndex The binding in the `LView` to check
 * @param {?} value New value to check against `lView[bindingIndex]`
 * @return {?} `true` if the bindings has changed. (Throws if binding has changed during
 *          `CheckNoChangesMode`)
 */
export function bindingUpdated(lView, bindingIndex, value) {
    ngDevMode && assertNotSame(value, NO_CHANGE, 'Incoming value should never be NO_CHANGE.');
    ngDevMode &&
        assertLessThan(bindingIndex, lView.length, `Slot should have been initialized to NO_CHANGE`);
    /** @type {?} */
    const oldValue = lView[bindingIndex];
    if (Object.is(oldValue, value)) {
        return false;
    }
    else {
        if (ngDevMode && getCheckNoChangesMode()) {
            // View engine didn't report undefined values as changed on the first checkNoChanges pass
            // (before the change detection was run).
            /** @type {?} */
            const oldValueToCompare = oldValue !== NO_CHANGE ? oldValue : undefined;
            if (!devModeEqual(oldValueToCompare, value)) {
                /** @type {?} */
                const details = getExpressionChangedErrorDetails(lView, bindingIndex, oldValueToCompare, value);
                throwErrorIfNoChangesMode(oldValue === NO_CHANGE, details.oldValue, details.newValue, details.propName);
            }
            // There was a change, but the `devModeEqual` decided that the change is exempt from an error.
            // For this reason we exit as if no change. The early exit is needed to prevent the changed
            // value to be written into `LView` (If we would write the new value that we would not see it
            // as change on next CD.)
            return false;
        }
        lView[bindingIndex] = value;
        return true;
    }
}
/**
 * Updates 2 bindings if changed, then returns whether either was updated.
 * @param {?} lView
 * @param {?} bindingIndex
 * @param {?} exp1
 * @param {?} exp2
 * @return {?}
 */
export function bindingUpdated2(lView, bindingIndex, exp1, exp2) {
    /** @type {?} */
    const different = bindingUpdated(lView, bindingIndex, exp1);
    return bindingUpdated(lView, bindingIndex + 1, exp2) || different;
}
/**
 * Updates 3 bindings if changed, then returns whether any was updated.
 * @param {?} lView
 * @param {?} bindingIndex
 * @param {?} exp1
 * @param {?} exp2
 * @param {?} exp3
 * @return {?}
 */
export function bindingUpdated3(lView, bindingIndex, exp1, exp2, exp3) {
    /** @type {?} */
    const different = bindingUpdated2(lView, bindingIndex, exp1, exp2);
    return bindingUpdated(lView, bindingIndex + 2, exp3) || different;
}
/**
 * Updates 4 bindings if changed, then returns whether any was updated.
 * @param {?} lView
 * @param {?} bindingIndex
 * @param {?} exp1
 * @param {?} exp2
 * @param {?} exp3
 * @param {?} exp4
 * @return {?}
 */
export function bindingUpdated4(lView, bindingIndex, exp1, exp2, exp3, exp4) {
    /** @type {?} */
    const different = bindingUpdated2(lView, bindingIndex, exp1, exp2);
    return bindingUpdated2(lView, bindingIndex + 2, exp3, exp4) || different;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2JpbmRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWhGLE9BQU8sRUFBQyxnQ0FBZ0MsRUFBRSx5QkFBeUIsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUVyRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDOUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7O0FBS25DLE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBWSxFQUFFLFlBQW9CLEVBQUUsS0FBVTtJQUMxRSxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDckMsQ0FBQzs7Ozs7OztBQUlELE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBWSxFQUFFLFlBQW9CO0lBQzNELFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDcEQsU0FBUztRQUNMLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsU0FBUyxFQUFFLHlDQUF5QyxDQUFDLENBQUM7SUFDN0YsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFlRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQVksRUFBRSxZQUFvQixFQUFFLEtBQVU7SUFDM0UsU0FBUyxJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLDJDQUEyQyxDQUFDLENBQUM7SUFDMUYsU0FBUztRQUNMLGNBQWMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxnREFBZ0QsQ0FBQyxDQUFDOztVQUMzRixRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUVwQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzlCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLElBQUksU0FBUyxJQUFJLHFCQUFxQixFQUFFLEVBQUU7Ozs7a0JBR2xDLGlCQUFpQixHQUFHLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUN2RSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxFQUFFOztzQkFDckMsT0FBTyxHQUNULGdDQUFnQyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDO2dCQUNuRix5QkFBeUIsQ0FDckIsUUFBUSxLQUFLLFNBQVMsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25GO1lBQ0QsOEZBQThGO1lBQzlGLDJGQUEyRjtZQUMzRiw2RkFBNkY7WUFDN0YseUJBQXlCO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDOzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsZUFBZSxDQUFDLEtBQVksRUFBRSxZQUFvQixFQUFFLElBQVMsRUFBRSxJQUFTOztVQUNoRixTQUFTLEdBQUcsY0FBYyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDO0lBQzNELE9BQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxZQUFZLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQztBQUNwRSxDQUFDOzs7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLGVBQWUsQ0FDM0IsS0FBWSxFQUFFLFlBQW9CLEVBQUUsSUFBUyxFQUFFLElBQVMsRUFBRSxJQUFTOztVQUMvRCxTQUFTLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNsRSxPQUFPLGNBQWMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUM7QUFDcEUsQ0FBQzs7Ozs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsZUFBZSxDQUMzQixLQUFZLEVBQUUsWUFBb0IsRUFBRSxJQUFTLEVBQUUsSUFBUyxFQUFFLElBQVMsRUFBRSxJQUFTOztVQUMxRSxTQUFTLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNsRSxPQUFPLGVBQWUsQ0FBQyxLQUFLLEVBQUUsWUFBWSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDO0FBQzNFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ZGV2TW9kZUVxdWFsfSBmcm9tICcuLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb25fdXRpbCc7XG5pbXBvcnQge2Fzc2VydERhdGFJblJhbmdlLCBhc3NlcnRMZXNzVGhhbiwgYXNzZXJ0Tm90U2FtZX0gZnJvbSAnLi4vdXRpbC9hc3NlcnQnO1xuXG5pbXBvcnQge2dldEV4cHJlc3Npb25DaGFuZ2VkRXJyb3JEZXRhaWxzLCB0aHJvd0Vycm9ySWZOb0NoYW5nZXNNb2RlfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQge0xWaWV3fSBmcm9tICcuL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge2dldENoZWNrTm9DaGFuZ2VzTW9kZX0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQge05PX0NIQU5HRX0gZnJvbSAnLi90b2tlbnMnO1xuXG5cbi8vIFRPRE8obWlza28pOiBjb25zaWRlciBpbmxpbmluZ1xuLyoqIFVwZGF0ZXMgYmluZGluZyBhbmQgcmV0dXJucyB0aGUgdmFsdWUuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQmluZGluZyhsVmlldzogTFZpZXcsIGJpbmRpbmdJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55KTogYW55IHtcbiAgcmV0dXJuIGxWaWV3W2JpbmRpbmdJbmRleF0gPSB2YWx1ZTtcbn1cblxuXG4vKiogR2V0cyB0aGUgY3VycmVudCBiaW5kaW5nIHZhbHVlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJpbmRpbmcobFZpZXc6IExWaWV3LCBiaW5kaW5nSW5kZXg6IG51bWJlcik6IGFueSB7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnREYXRhSW5SYW5nZShsVmlldywgYmluZGluZ0luZGV4KTtcbiAgbmdEZXZNb2RlICYmXG4gICAgICBhc3NlcnROb3RTYW1lKGxWaWV3W2JpbmRpbmdJbmRleF0sIE5PX0NIQU5HRSwgJ1N0b3JlZCB2YWx1ZSBzaG91bGQgbmV2ZXIgYmUgTk9fQ0hBTkdFLicpO1xuICByZXR1cm4gbFZpZXdbYmluZGluZ0luZGV4XTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGJpbmRpbmcgaWYgY2hhbmdlZCwgdGhlbiByZXR1cm5zIHdoZXRoZXIgaXQgd2FzIHVwZGF0ZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhbHNvIGNoZWNrcyB0aGUgYENoZWNrTm9DaGFuZ2VzTW9kZWAgYW5kIHRocm93cyBpZiBjaGFuZ2VzIGFyZSBtYWRlLlxuICogU29tZSBjaGFuZ2VzIChPYmplY3RzL2l0ZXJhYmxlcykgZHVyaW5nIGBDaGVja05vQ2hhbmdlc01vZGVgIGFyZSBleGVtcHQgdG8gY29tcGx5IHdpdGggVkVcbiAqIGJlaGF2aW9yLlxuICpcbiAqIEBwYXJhbSBsVmlldyBjdXJyZW50IGBMVmlld2BcbiAqIEBwYXJhbSBiaW5kaW5nSW5kZXggVGhlIGJpbmRpbmcgaW4gdGhlIGBMVmlld2AgdG8gY2hlY2tcbiAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgdG8gY2hlY2sgYWdhaW5zdCBgbFZpZXdbYmluZGluZ0luZGV4XWBcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgYmluZGluZ3MgaGFzIGNoYW5nZWQuIChUaHJvd3MgaWYgYmluZGluZyBoYXMgY2hhbmdlZCBkdXJpbmdcbiAqICAgICAgICAgIGBDaGVja05vQ2hhbmdlc01vZGVgKVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZGluZ1VwZGF0ZWQobFZpZXc6IExWaWV3LCBiaW5kaW5nSW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0Tm90U2FtZSh2YWx1ZSwgTk9fQ0hBTkdFLCAnSW5jb21pbmcgdmFsdWUgc2hvdWxkIG5ldmVyIGJlIE5PX0NIQU5HRS4nKTtcbiAgbmdEZXZNb2RlICYmXG4gICAgICBhc3NlcnRMZXNzVGhhbihiaW5kaW5nSW5kZXgsIGxWaWV3Lmxlbmd0aCwgYFNsb3Qgc2hvdWxkIGhhdmUgYmVlbiBpbml0aWFsaXplZCB0byBOT19DSEFOR0VgKTtcbiAgY29uc3Qgb2xkVmFsdWUgPSBsVmlld1tiaW5kaW5nSW5kZXhdO1xuXG4gIGlmIChPYmplY3QuaXMob2xkVmFsdWUsIHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAobmdEZXZNb2RlICYmIGdldENoZWNrTm9DaGFuZ2VzTW9kZSgpKSB7XG4gICAgICAvLyBWaWV3IGVuZ2luZSBkaWRuJ3QgcmVwb3J0IHVuZGVmaW5lZCB2YWx1ZXMgYXMgY2hhbmdlZCBvbiB0aGUgZmlyc3QgY2hlY2tOb0NoYW5nZXMgcGFzc1xuICAgICAgLy8gKGJlZm9yZSB0aGUgY2hhbmdlIGRldGVjdGlvbiB3YXMgcnVuKS5cbiAgICAgIGNvbnN0IG9sZFZhbHVlVG9Db21wYXJlID0gb2xkVmFsdWUgIT09IE5PX0NIQU5HRSA/IG9sZFZhbHVlIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKCFkZXZNb2RlRXF1YWwob2xkVmFsdWVUb0NvbXBhcmUsIHZhbHVlKSkge1xuICAgICAgICBjb25zdCBkZXRhaWxzID1cbiAgICAgICAgICAgIGdldEV4cHJlc3Npb25DaGFuZ2VkRXJyb3JEZXRhaWxzKGxWaWV3LCBiaW5kaW5nSW5kZXgsIG9sZFZhbHVlVG9Db21wYXJlLCB2YWx1ZSk7XG4gICAgICAgIHRocm93RXJyb3JJZk5vQ2hhbmdlc01vZGUoXG4gICAgICAgICAgICBvbGRWYWx1ZSA9PT0gTk9fQ0hBTkdFLCBkZXRhaWxzLm9sZFZhbHVlLCBkZXRhaWxzLm5ld1ZhbHVlLCBkZXRhaWxzLnByb3BOYW1lKTtcbiAgICAgIH1cbiAgICAgIC8vIFRoZXJlIHdhcyBhIGNoYW5nZSwgYnV0IHRoZSBgZGV2TW9kZUVxdWFsYCBkZWNpZGVkIHRoYXQgdGhlIGNoYW5nZSBpcyBleGVtcHQgZnJvbSBhbiBlcnJvci5cbiAgICAgIC8vIEZvciB0aGlzIHJlYXNvbiB3ZSBleGl0IGFzIGlmIG5vIGNoYW5nZS4gVGhlIGVhcmx5IGV4aXQgaXMgbmVlZGVkIHRvIHByZXZlbnQgdGhlIGNoYW5nZWRcbiAgICAgIC8vIHZhbHVlIHRvIGJlIHdyaXR0ZW4gaW50byBgTFZpZXdgIChJZiB3ZSB3b3VsZCB3cml0ZSB0aGUgbmV3IHZhbHVlIHRoYXQgd2Ugd291bGQgbm90IHNlZSBpdFxuICAgICAgLy8gYXMgY2hhbmdlIG9uIG5leHQgQ0QuKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsVmlld1tiaW5kaW5nSW5kZXhdID0gdmFsdWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqIFVwZGF0ZXMgMiBiaW5kaW5ncyBpZiBjaGFuZ2VkLCB0aGVuIHJldHVybnMgd2hldGhlciBlaXRoZXIgd2FzIHVwZGF0ZWQuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZGluZ1VwZGF0ZWQyKGxWaWV3OiBMVmlldywgYmluZGluZ0luZGV4OiBudW1iZXIsIGV4cDE6IGFueSwgZXhwMjogYW55KTogYm9vbGVhbiB7XG4gIGNvbnN0IGRpZmZlcmVudCA9IGJpbmRpbmdVcGRhdGVkKGxWaWV3LCBiaW5kaW5nSW5kZXgsIGV4cDEpO1xuICByZXR1cm4gYmluZGluZ1VwZGF0ZWQobFZpZXcsIGJpbmRpbmdJbmRleCArIDEsIGV4cDIpIHx8IGRpZmZlcmVudDtcbn1cblxuLyoqIFVwZGF0ZXMgMyBiaW5kaW5ncyBpZiBjaGFuZ2VkLCB0aGVuIHJldHVybnMgd2hldGhlciBhbnkgd2FzIHVwZGF0ZWQuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZGluZ1VwZGF0ZWQzKFxuICAgIGxWaWV3OiBMVmlldywgYmluZGluZ0luZGV4OiBudW1iZXIsIGV4cDE6IGFueSwgZXhwMjogYW55LCBleHAzOiBhbnkpOiBib29sZWFuIHtcbiAgY29uc3QgZGlmZmVyZW50ID0gYmluZGluZ1VwZGF0ZWQyKGxWaWV3LCBiaW5kaW5nSW5kZXgsIGV4cDEsIGV4cDIpO1xuICByZXR1cm4gYmluZGluZ1VwZGF0ZWQobFZpZXcsIGJpbmRpbmdJbmRleCArIDIsIGV4cDMpIHx8IGRpZmZlcmVudDtcbn1cblxuLyoqIFVwZGF0ZXMgNCBiaW5kaW5ncyBpZiBjaGFuZ2VkLCB0aGVuIHJldHVybnMgd2hldGhlciBhbnkgd2FzIHVwZGF0ZWQuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZGluZ1VwZGF0ZWQ0KFxuICAgIGxWaWV3OiBMVmlldywgYmluZGluZ0luZGV4OiBudW1iZXIsIGV4cDE6IGFueSwgZXhwMjogYW55LCBleHAzOiBhbnksIGV4cDQ6IGFueSk6IGJvb2xlYW4ge1xuICBjb25zdCBkaWZmZXJlbnQgPSBiaW5kaW5nVXBkYXRlZDIobFZpZXcsIGJpbmRpbmdJbmRleCwgZXhwMSwgZXhwMik7XG4gIHJldHVybiBiaW5kaW5nVXBkYXRlZDIobFZpZXcsIGJpbmRpbmdJbmRleCArIDIsIGV4cDMsIGV4cDQpIHx8IGRpZmZlcmVudDtcbn1cbiJdfQ==