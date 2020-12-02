/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/styling/static_styling.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { concatStringsWithSpace } from '../../util/stringify';
import { assertFirstCreatePass } from '../assert';
import { getTView } from '../state';
/**
 * Compute the static styling (class/style) from `TAttributes`.
 *
 * This function should be called during `firstCreatePass` only.
 *
 * @param {?} tNode The `TNode` into which the styling information should be loaded.
 * @param {?} attrs `TAttributes` containing the styling information.
 * @param {?} writeToHost Where should the resulting static styles be written?
 *   - `false` Write to `TNode.stylesWithoutHost` / `TNode.classesWithoutHost`
 *   - `true` Write to `TNode.styles` / `TNode.classes`
 * @return {?}
 */
export function computeStaticStyling(tNode, attrs, writeToHost) {
    ngDevMode &&
        assertFirstCreatePass(getTView(), 'Expecting to be called in first template pass only');
    /** @type {?} */
    let styles = writeToHost ? tNode.styles : null;
    /** @type {?} */
    let classes = writeToHost ? tNode.classes : null;
    /** @type {?} */
    let mode = 0;
    if (attrs !== null) {
        for (let i = 0; i < attrs.length; i++) {
            /** @type {?} */
            const value = attrs[i];
            if (typeof value === 'number') {
                mode = value;
            }
            else if (mode == 1 /* Classes */) {
                classes = concatStringsWithSpace(classes, (/** @type {?} */ (value)));
            }
            else if (mode == 2 /* Styles */) {
                /** @type {?} */
                const style = (/** @type {?} */ (value));
                /** @type {?} */
                const styleValue = (/** @type {?} */ (attrs[++i]));
                styles = concatStringsWithSpace(styles, style + ': ' + styleValue + ';');
            }
        }
    }
    writeToHost ? tNode.styles = styles : tNode.stylesWithoutHost = styles;
    writeToHost ? tNode.classes = classes : tNode.classesWithoutHost = classes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljX3N0eWxpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL3N0eWxpbmcvc3RhdGljX3N0eWxpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBRWhELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhbEMsTUFBTSxVQUFVLG9CQUFvQixDQUNoQyxLQUFZLEVBQUUsS0FBdUIsRUFBRSxXQUFvQjtJQUM3RCxTQUFTO1FBQ0wscUJBQXFCLENBQUMsUUFBUSxFQUFFLEVBQUUsb0RBQW9ELENBQUMsQ0FBQzs7UUFDeEYsTUFBTSxHQUFnQixXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7O1FBQ3ZELE9BQU8sR0FBZ0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJOztRQUN6RCxJQUFJLEdBQXNCLENBQUM7SUFDL0IsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDL0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzdCLElBQUksR0FBRyxLQUFLLENBQUM7YUFDZDtpQkFBTSxJQUFJLElBQUksbUJBQTJCLEVBQUU7Z0JBQzFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsbUJBQUEsS0FBSyxFQUFVLENBQUMsQ0FBQzthQUM1RDtpQkFBTSxJQUFJLElBQUksa0JBQTBCLEVBQUU7O3NCQUNuQyxLQUFLLEdBQUcsbUJBQUEsS0FBSyxFQUFVOztzQkFDdkIsVUFBVSxHQUFHLG1CQUFBLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFVO2dCQUN2QyxNQUFNLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxFQUFFLEtBQUssR0FBRyxJQUFJLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQzFFO1NBQ0Y7S0FDRjtJQUNELFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7SUFDdkUsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztBQUM3RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2NvbmNhdFN0cmluZ3NXaXRoU3BhY2V9IGZyb20gJy4uLy4uL3V0aWwvc3RyaW5naWZ5JztcbmltcG9ydCB7YXNzZXJ0Rmlyc3RDcmVhdGVQYXNzfSBmcm9tICcuLi9hc3NlcnQnO1xuaW1wb3J0IHtBdHRyaWJ1dGVNYXJrZXIsIFRBdHRyaWJ1dGVzLCBUTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7Z2V0VFZpZXd9IGZyb20gJy4uL3N0YXRlJztcblxuLyoqXG4gKiBDb21wdXRlIHRoZSBzdGF0aWMgc3R5bGluZyAoY2xhc3Mvc3R5bGUpIGZyb20gYFRBdHRyaWJ1dGVzYC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgZHVyaW5nIGBmaXJzdENyZWF0ZVBhc3NgIG9ubHkuXG4gKlxuICogQHBhcmFtIHROb2RlIFRoZSBgVE5vZGVgIGludG8gd2hpY2ggdGhlIHN0eWxpbmcgaW5mb3JtYXRpb24gc2hvdWxkIGJlIGxvYWRlZC5cbiAqIEBwYXJhbSBhdHRycyBgVEF0dHJpYnV0ZXNgIGNvbnRhaW5pbmcgdGhlIHN0eWxpbmcgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0gd3JpdGVUb0hvc3QgV2hlcmUgc2hvdWxkIHRoZSByZXN1bHRpbmcgc3RhdGljIHN0eWxlcyBiZSB3cml0dGVuP1xuICogICAtIGBmYWxzZWAgV3JpdGUgdG8gYFROb2RlLnN0eWxlc1dpdGhvdXRIb3N0YCAvIGBUTm9kZS5jbGFzc2VzV2l0aG91dEhvc3RgXG4gKiAgIC0gYHRydWVgIFdyaXRlIHRvIGBUTm9kZS5zdHlsZXNgIC8gYFROb2RlLmNsYXNzZXNgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlU3RhdGljU3R5bGluZyhcbiAgICB0Tm9kZTogVE5vZGUsIGF0dHJzOiBUQXR0cmlidXRlc3xudWxsLCB3cml0ZVRvSG9zdDogYm9vbGVhbik6IHZvaWQge1xuICBuZ0Rldk1vZGUgJiZcbiAgICAgIGFzc2VydEZpcnN0Q3JlYXRlUGFzcyhnZXRUVmlldygpLCAnRXhwZWN0aW5nIHRvIGJlIGNhbGxlZCBpbiBmaXJzdCB0ZW1wbGF0ZSBwYXNzIG9ubHknKTtcbiAgbGV0IHN0eWxlczogc3RyaW5nfG51bGwgPSB3cml0ZVRvSG9zdCA/IHROb2RlLnN0eWxlcyA6IG51bGw7XG4gIGxldCBjbGFzc2VzOiBzdHJpbmd8bnVsbCA9IHdyaXRlVG9Ib3N0ID8gdE5vZGUuY2xhc3NlcyA6IG51bGw7XG4gIGxldCBtb2RlOiBBdHRyaWJ1dGVNYXJrZXJ8MCA9IDA7XG4gIGlmIChhdHRycyAhPT0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXR0cnNbaV07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBtb2RlID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT0gQXR0cmlidXRlTWFya2VyLkNsYXNzZXMpIHtcbiAgICAgICAgY2xhc3NlcyA9IGNvbmNhdFN0cmluZ3NXaXRoU3BhY2UoY2xhc3NlcywgdmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PSBBdHRyaWJ1dGVNYXJrZXIuU3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdmFsdWUgYXMgc3RyaW5nO1xuICAgICAgICBjb25zdCBzdHlsZVZhbHVlID0gYXR0cnNbKytpXSBhcyBzdHJpbmc7XG4gICAgICAgIHN0eWxlcyA9IGNvbmNhdFN0cmluZ3NXaXRoU3BhY2Uoc3R5bGVzLCBzdHlsZSArICc6ICcgKyBzdHlsZVZhbHVlICsgJzsnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgd3JpdGVUb0hvc3QgPyB0Tm9kZS5zdHlsZXMgPSBzdHlsZXMgOiB0Tm9kZS5zdHlsZXNXaXRob3V0SG9zdCA9IHN0eWxlcztcbiAgd3JpdGVUb0hvc3QgPyB0Tm9kZS5jbGFzc2VzID0gY2xhc3NlcyA6IHROb2RlLmNsYXNzZXNXaXRob3V0SG9zdCA9IGNsYXNzZXM7XG59Il19