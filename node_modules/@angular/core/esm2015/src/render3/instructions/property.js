/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/instructions/property.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { bindingUpdated } from '../bindings';
import { RENDERER } from '../interfaces/view';
import { getLView, getSelectedTNode, getTView, nextBindingIndex } from '../state';
import { elementPropertyInternal, setInputsForProperty, storePropertyBindingMetadata } from './shared';
/**
 * Update a property on a selected element.
 *
 * Operates on the element selected by index via the {\@link select} instruction.
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new `\@Inputs` don't have to be re-compiled
 *
 * \@codeGenApi
 * @template T
 * @param {?} propName Name of property. Because it is going to DOM, this is not subject to
 *        renaming as part of minification.
 * @param {?} value New value to write.
 * @param {?=} sanitizer An optional function used to sanitize the value.
 * @return {?} This function returns itself so that it may be chained
 * (e.g. `property('name', ctx.name)('title', ctx.title)`)
 *
 */
export function ɵɵproperty(propName, value, sanitizer) {
    /** @type {?} */
    const lView = getLView();
    /** @type {?} */
    const bindingIndex = nextBindingIndex();
    if (bindingUpdated(lView, bindingIndex, value)) {
        /** @type {?} */
        const tView = getTView();
        /** @type {?} */
        const tNode = getSelectedTNode();
        elementPropertyInternal(tView, tNode, lView, propName, value, lView[RENDERER], sanitizer, false);
        ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, bindingIndex);
    }
    return ɵɵproperty;
}
/**
 * Given `<div style="..." my-dir>` and `MyDir` with `\@Input('style')` we need to write to
 * directive input.
 * @param {?} tView
 * @param {?} tNode
 * @param {?} lView
 * @param {?} value
 * @param {?} isClassBased
 * @return {?}
 */
export function setDirectiveInputsWhichShadowsStyling(tView, tNode, lView, value, isClassBased) {
    /** @type {?} */
    const inputs = (/** @type {?} */ (tNode.inputs));
    /** @type {?} */
    const property = isClassBased ? 'class' : 'style';
    // We support both 'class' and `className` hence the fallback.
    setInputsForProperty(tView, lView, inputs[property], property, value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2luc3RydWN0aW9ucy9wcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRzNDLE9BQU8sRUFBUSxRQUFRLEVBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUVoRixPQUFPLEVBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsNEJBQTRCLEVBQUMsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJyRyxNQUFNLFVBQVUsVUFBVSxDQUN0QixRQUFnQixFQUFFLEtBQVEsRUFBRSxTQUE0Qjs7VUFDcEQsS0FBSyxHQUFHLFFBQVEsRUFBRTs7VUFDbEIsWUFBWSxHQUFHLGdCQUFnQixFQUFFO0lBQ3ZDLElBQUksY0FBYyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUU7O2NBQ3hDLEtBQUssR0FBRyxRQUFRLEVBQUU7O2NBQ2xCLEtBQUssR0FBRyxnQkFBZ0IsRUFBRTtRQUNoQyx1QkFBdUIsQ0FDbkIsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdFLFNBQVMsSUFBSSw0QkFBNEIsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDdEY7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDOzs7Ozs7Ozs7OztBQU1ELE1BQU0sVUFBVSxxQ0FBcUMsQ0FDakQsS0FBWSxFQUFFLEtBQVksRUFBRSxLQUFZLEVBQUUsS0FBVSxFQUFFLFlBQXFCOztVQUN2RSxNQUFNLEdBQUcsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBQzs7VUFDdEIsUUFBUSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPO0lBQ2pELDhEQUE4RDtJQUM5RCxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7YmluZGluZ1VwZGF0ZWR9IGZyb20gJy4uL2JpbmRpbmdzJztcbmltcG9ydCB7VE5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvbm9kZSc7XG5pbXBvcnQge1Nhbml0aXplckZufSBmcm9tICcuLi9pbnRlcmZhY2VzL3Nhbml0aXphdGlvbic7XG5pbXBvcnQge0xWaWV3LCBSRU5ERVJFUiwgVFZpZXd9IGZyb20gJy4uL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge2dldExWaWV3LCBnZXRTZWxlY3RlZFROb2RlLCBnZXRUVmlldywgbmV4dEJpbmRpbmdJbmRleH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5pbXBvcnQge2VsZW1lbnRQcm9wZXJ0eUludGVybmFsLCBzZXRJbnB1dHNGb3JQcm9wZXJ0eSwgc3RvcmVQcm9wZXJ0eUJpbmRpbmdNZXRhZGF0YX0gZnJvbSAnLi9zaGFyZWQnO1xuXG5cbi8qKlxuICogVXBkYXRlIGEgcHJvcGVydHkgb24gYSBzZWxlY3RlZCBlbGVtZW50LlxuICpcbiAqIE9wZXJhdGVzIG9uIHRoZSBlbGVtZW50IHNlbGVjdGVkIGJ5IGluZGV4IHZpYSB0aGUge0BsaW5rIHNlbGVjdH0gaW5zdHJ1Y3Rpb24uXG4gKlxuICogSWYgdGhlIHByb3BlcnR5IG5hbWUgYWxzbyBleGlzdHMgYXMgYW4gaW5wdXQgcHJvcGVydHkgb24gb25lIG9mIHRoZSBlbGVtZW50J3MgZGlyZWN0aXZlcyxcbiAqIHRoZSBjb21wb25lbnQgcHJvcGVydHkgd2lsbCBiZSBzZXQgaW5zdGVhZCBvZiB0aGUgZWxlbWVudCBwcm9wZXJ0eS4gVGhpcyBjaGVjayBtdXN0XG4gKiBiZSBjb25kdWN0ZWQgYXQgcnVudGltZSBzbyBjaGlsZCBjb21wb25lbnRzIHRoYXQgYWRkIG5ldyBgQElucHV0c2AgZG9uJ3QgaGF2ZSB0byBiZSByZS1jb21waWxlZFxuICpcbiAqIEBwYXJhbSBwcm9wTmFtZSBOYW1lIG9mIHByb3BlcnR5LiBCZWNhdXNlIGl0IGlzIGdvaW5nIHRvIERPTSwgdGhpcyBpcyBub3Qgc3ViamVjdCB0b1xuICogICAgICAgIHJlbmFtaW5nIGFzIHBhcnQgb2YgbWluaWZpY2F0aW9uLlxuICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSB0byB3cml0ZS5cbiAqIEBwYXJhbSBzYW5pdGl6ZXIgQW4gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCB0byBzYW5pdGl6ZSB0aGUgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgaXRzZWxmIHNvIHRoYXQgaXQgbWF5IGJlIGNoYWluZWRcbiAqIChlLmcuIGBwcm9wZXJ0eSgnbmFtZScsIGN0eC5uYW1lKSgndGl0bGUnLCBjdHgudGl0bGUpYClcbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtXByb3BlcnR5PFQ+KFxuICAgIHByb3BOYW1lOiBzdHJpbmcsIHZhbHVlOiBULCBzYW5pdGl6ZXI/OiBTYW5pdGl6ZXJGbnxudWxsKTogdHlwZW9mIMm1ybVwcm9wZXJ0eSB7XG4gIGNvbnN0IGxWaWV3ID0gZ2V0TFZpZXcoKTtcbiAgY29uc3QgYmluZGluZ0luZGV4ID0gbmV4dEJpbmRpbmdJbmRleCgpO1xuICBpZiAoYmluZGluZ1VwZGF0ZWQobFZpZXcsIGJpbmRpbmdJbmRleCwgdmFsdWUpKSB7XG4gICAgY29uc3QgdFZpZXcgPSBnZXRUVmlldygpO1xuICAgIGNvbnN0IHROb2RlID0gZ2V0U2VsZWN0ZWRUTm9kZSgpO1xuICAgIGVsZW1lbnRQcm9wZXJ0eUludGVybmFsKFxuICAgICAgICB0VmlldywgdE5vZGUsIGxWaWV3LCBwcm9wTmFtZSwgdmFsdWUsIGxWaWV3W1JFTkRFUkVSXSwgc2FuaXRpemVyLCBmYWxzZSk7XG4gICAgbmdEZXZNb2RlICYmIHN0b3JlUHJvcGVydHlCaW5kaW5nTWV0YWRhdGEodFZpZXcuZGF0YSwgdE5vZGUsIHByb3BOYW1lLCBiaW5kaW5nSW5kZXgpO1xuICB9XG4gIHJldHVybiDJtcm1cHJvcGVydHk7XG59XG5cbi8qKlxuICogR2l2ZW4gYDxkaXYgc3R5bGU9XCIuLi5cIiBteS1kaXI+YCBhbmQgYE15RGlyYCB3aXRoIGBASW5wdXQoJ3N0eWxlJylgIHdlIG5lZWQgdG8gd3JpdGUgdG9cbiAqIGRpcmVjdGl2ZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldERpcmVjdGl2ZUlucHV0c1doaWNoU2hhZG93c1N0eWxpbmcoXG4gICAgdFZpZXc6IFRWaWV3LCB0Tm9kZTogVE5vZGUsIGxWaWV3OiBMVmlldywgdmFsdWU6IGFueSwgaXNDbGFzc0Jhc2VkOiBib29sZWFuKSB7XG4gIGNvbnN0IGlucHV0cyA9IHROb2RlLmlucHV0cyE7XG4gIGNvbnN0IHByb3BlcnR5ID0gaXNDbGFzc0Jhc2VkID8gJ2NsYXNzJyA6ICdzdHlsZSc7XG4gIC8vIFdlIHN1cHBvcnQgYm90aCAnY2xhc3MnIGFuZCBgY2xhc3NOYW1lYCBoZW5jZSB0aGUgZmFsbGJhY2suXG4gIHNldElucHV0c0ZvclByb3BlcnR5KHRWaWV3LCBsVmlldywgaW5wdXRzW3Byb3BlcnR5XSwgcHJvcGVydHksIHZhbHVlKTtcbn1cbiJdfQ==