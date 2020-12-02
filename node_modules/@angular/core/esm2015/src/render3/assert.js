/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/assert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertDefined, assertEqual, throwError } from '../util/assert';
import { getComponentDef, getNgModuleDef } from './definition';
import { isLContainer, isLView } from './interfaces/type_checks';
import { TVIEW } from './interfaces/view';
// [Assert functions do not constraint type when they are guarded by a truthy
// expression.](https://github.com/microsoft/TypeScript/issues/37295)
/**
 * @param {?} tNode
 * @param {?} lView
 * @return {?}
 */
export function assertTNodeForLView(tNode, lView) {
    tNode.hasOwnProperty('tView_') &&
        assertEqual(((/** @type {?} */ ((/** @type {?} */ (tNode))))).tView_, lView[TVIEW], 'This TNode does not belong to this LView.');
}
/**
 * @param {?} actual
 * @param {?=} msg
 * @return {?}
 */
export function assertComponentType(actual, msg = 'Type passed in is not ComponentType, it does not have \'ɵcmp\' property.') {
    if (!getComponentDef(actual)) {
        throwError(msg);
    }
}
/**
 * @param {?} actual
 * @param {?=} msg
 * @return {?}
 */
export function assertNgModuleType(actual, msg = 'Type passed in is not NgModuleType, it does not have \'ɵmod\' property.') {
    if (!getNgModuleDef(actual)) {
        throwError(msg);
    }
}
/**
 * @param {?} isParent
 * @return {?}
 */
export function assertPreviousIsParent(isParent) {
    assertEqual(isParent, true, 'previousOrParentTNode should be a parent');
}
/**
 * @param {?} tNode
 * @return {?}
 */
export function assertHasParent(tNode) {
    assertDefined(tNode, 'previousOrParentTNode should exist!');
    assertDefined((/** @type {?} */ (tNode)).parent, 'previousOrParentTNode should have a parent');
}
/**
 * @param {?} lView
 * @param {?} index
 * @param {?=} arr
 * @return {?}
 */
export function assertDataNext(lView, index, arr) {
    if (arr == null)
        arr = lView;
    assertEqual(arr.length, index, `index ${index} expected to be at the end of arr (length ${arr.length})`);
}
/**
 * @param {?} value
 * @return {?}
 */
export function assertLContainer(value) {
    assertDefined(value, 'LContainer must be defined');
    assertEqual(isLContainer(value), true, 'Expecting LContainer');
}
/**
 * @param {?} value
 * @return {?}
 */
export function assertLViewOrUndefined(value) {
    value && assertEqual(isLView(value), true, 'Expecting LView or undefined or null');
}
/**
 * @param {?} value
 * @return {?}
 */
export function assertLView(value) {
    assertDefined(value, 'LView must be defined');
    assertEqual(isLView(value), true, 'Expecting LView');
}
/**
 * @param {?} tView
 * @param {?=} errMessage
 * @return {?}
 */
export function assertFirstCreatePass(tView, errMessage) {
    assertEqual(tView.firstCreatePass, true, errMessage || 'Should only be called in first create pass.');
}
/**
 * @param {?} tView
 * @param {?=} errMessage
 * @return {?}
 */
export function assertFirstUpdatePass(tView, errMessage) {
    assertEqual(tView.firstUpdatePass, true, errMessage || 'Should only be called in first update pass.');
}
/**
 * This is a basic sanity check that an object is probably a directive def. DirectiveDef is
 * an interface, so we can't do a direct instanceof check.
 * @template T
 * @param {?} obj
 * @return {?}
 */
export function assertDirectiveDef(obj) {
    if (obj.type === undefined || obj.selectors == undefined || obj.inputs === undefined) {
        throwError(`Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape.`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEUsT0FBTyxFQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFJN0QsT0FBTyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQVEsS0FBSyxFQUFRLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7O0FBTXRELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFZLEVBQUUsS0FBWTtJQUM1RCxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUMxQixXQUFXLENBQ1AsQ0FBQyxtQkFBQSxtQkFBQSxLQUFLLEVBQU8sRUFBbUIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ3RELDJDQUEyQyxDQUFDLENBQUM7QUFDdkQsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUMvQixNQUFXLEVBQ1gsTUFBYywwRUFBMEU7SUFDMUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUM1QixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7QUFDSCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQzlCLE1BQVcsRUFDWCxNQUFjLHlFQUF5RTtJQUN6RixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzNCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFFBQWlCO0lBQ3RELFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7QUFDMUUsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLEtBQWlCO0lBQy9DLGFBQWEsQ0FBQyxLQUFLLEVBQUUscUNBQXFDLENBQUMsQ0FBQztJQUM1RCxhQUFhLENBQUMsbUJBQUEsS0FBSyxFQUFDLENBQUMsTUFBTSxFQUFFLDRDQUE0QyxDQUFDLENBQUM7QUFDN0UsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBWSxFQUFFLEtBQWEsRUFBRSxHQUFXO0lBQ3JFLElBQUksR0FBRyxJQUFJLElBQUk7UUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQzdCLFdBQVcsQ0FDUCxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEtBQUssNkNBQTZDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ25HLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEtBQVU7SUFDekMsYUFBYSxDQUFDLEtBQUssRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0lBQ25ELFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFDakUsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsS0FBVTtJQUMvQyxLQUFLLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsc0NBQXNDLENBQUMsQ0FBQztBQUNyRixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBVTtJQUNwQyxhQUFhLENBQUMsS0FBSyxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDOUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUN2RCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsS0FBWSxFQUFFLFVBQW1CO0lBQ3JFLFdBQVcsQ0FDUCxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLElBQUksNkNBQTZDLENBQUMsQ0FBQztBQUNoRyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsS0FBWSxFQUFFLFVBQW1CO0lBQ3JFLFdBQVcsQ0FDUCxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLElBQUksNkNBQTZDLENBQUMsQ0FBQztBQUNoRyxDQUFDOzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxrQkFBa0IsQ0FBSSxHQUFRO0lBQzVDLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksR0FBRyxDQUFDLFNBQVMsSUFBSSxTQUFTLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDcEYsVUFBVSxDQUNOLGdHQUFnRyxDQUFDLENBQUM7S0FDdkc7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2Fzc2VydERlZmluZWQsIGFzc2VydEVxdWFsLCB0aHJvd0Vycm9yfSBmcm9tICcuLi91dGlsL2Fzc2VydCc7XG5cbmltcG9ydCB7Z2V0Q29tcG9uZW50RGVmLCBnZXROZ01vZHVsZURlZn0gZnJvbSAnLi9kZWZpbml0aW9uJztcbmltcG9ydCB7TENvbnRhaW5lcn0gZnJvbSAnLi9pbnRlcmZhY2VzL2NvbnRhaW5lcic7XG5pbXBvcnQge0RpcmVjdGl2ZURlZn0gZnJvbSAnLi9pbnRlcmZhY2VzL2RlZmluaXRpb24nO1xuaW1wb3J0IHtUTm9kZX0gZnJvbSAnLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtpc0xDb250YWluZXIsIGlzTFZpZXd9IGZyb20gJy4vaW50ZXJmYWNlcy90eXBlX2NoZWNrcyc7XG5pbXBvcnQge0xWaWV3LCBUVklFVywgVFZpZXd9IGZyb20gJy4vaW50ZXJmYWNlcy92aWV3JztcblxuLy8gW0Fzc2VydCBmdW5jdGlvbnMgZG8gbm90IGNvbnN0cmFpbnQgdHlwZSB3aGVuIHRoZXkgYXJlIGd1YXJkZWQgYnkgYSB0cnV0aHlcbi8vIGV4cHJlc3Npb24uXShodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzM3Mjk1KVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRUTm9kZUZvckxWaWV3KHROb2RlOiBUTm9kZSwgbFZpZXc6IExWaWV3KSB7XG4gIHROb2RlLmhhc093blByb3BlcnR5KCd0Vmlld18nKSAmJlxuICAgICAgYXNzZXJ0RXF1YWwoXG4gICAgICAgICAgKHROb2RlIGFzIGFueSBhcyB7dFZpZXdfOiBUVmlld30pLnRWaWV3XywgbFZpZXdbVFZJRVddLFxuICAgICAgICAgICdUaGlzIFROb2RlIGRvZXMgbm90IGJlbG9uZyB0byB0aGlzIExWaWV3LicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Q29tcG9uZW50VHlwZShcbiAgICBhY3R1YWw6IGFueSxcbiAgICBtc2c6IHN0cmluZyA9ICdUeXBlIHBhc3NlZCBpbiBpcyBub3QgQ29tcG9uZW50VHlwZSwgaXQgZG9lcyBub3QgaGF2ZSBcXCfJtWNtcFxcJyBwcm9wZXJ0eS4nKSB7XG4gIGlmICghZ2V0Q29tcG9uZW50RGVmKGFjdHVhbCkpIHtcbiAgICB0aHJvd0Vycm9yKG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE5nTW9kdWxlVHlwZShcbiAgICBhY3R1YWw6IGFueSxcbiAgICBtc2c6IHN0cmluZyA9ICdUeXBlIHBhc3NlZCBpbiBpcyBub3QgTmdNb2R1bGVUeXBlLCBpdCBkb2VzIG5vdCBoYXZlIFxcJ8m1bW9kXFwnIHByb3BlcnR5LicpIHtcbiAgaWYgKCFnZXROZ01vZHVsZURlZihhY3R1YWwpKSB7XG4gICAgdGhyb3dFcnJvcihtc2cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRQcmV2aW91c0lzUGFyZW50KGlzUGFyZW50OiBib29sZWFuKSB7XG4gIGFzc2VydEVxdWFsKGlzUGFyZW50LCB0cnVlLCAncHJldmlvdXNPclBhcmVudFROb2RlIHNob3VsZCBiZSBhIHBhcmVudCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0SGFzUGFyZW50KHROb2RlOiBUTm9kZXxudWxsKSB7XG4gIGFzc2VydERlZmluZWQodE5vZGUsICdwcmV2aW91c09yUGFyZW50VE5vZGUgc2hvdWxkIGV4aXN0IScpO1xuICBhc3NlcnREZWZpbmVkKHROb2RlIS5wYXJlbnQsICdwcmV2aW91c09yUGFyZW50VE5vZGUgc2hvdWxkIGhhdmUgYSBwYXJlbnQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydERhdGFOZXh0KGxWaWV3OiBMVmlldywgaW5kZXg6IG51bWJlciwgYXJyPzogYW55W10pIHtcbiAgaWYgKGFyciA9PSBudWxsKSBhcnIgPSBsVmlldztcbiAgYXNzZXJ0RXF1YWwoXG4gICAgICBhcnIubGVuZ3RoLCBpbmRleCwgYGluZGV4ICR7aW5kZXh9IGV4cGVjdGVkIHRvIGJlIGF0IHRoZSBlbmQgb2YgYXJyIChsZW5ndGggJHthcnIubGVuZ3RofSlgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydExDb250YWluZXIodmFsdWU6IGFueSk6IGFzc2VydHMgdmFsdWUgaXMgTENvbnRhaW5lciB7XG4gIGFzc2VydERlZmluZWQodmFsdWUsICdMQ29udGFpbmVyIG11c3QgYmUgZGVmaW5lZCcpO1xuICBhc3NlcnRFcXVhbChpc0xDb250YWluZXIodmFsdWUpLCB0cnVlLCAnRXhwZWN0aW5nIExDb250YWluZXInKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydExWaWV3T3JVbmRlZmluZWQodmFsdWU6IGFueSk6IGFzc2VydHMgdmFsdWUgaXMgTFZpZXd8bnVsbHx1bmRlZmluZWQge1xuICB2YWx1ZSAmJiBhc3NlcnRFcXVhbChpc0xWaWV3KHZhbHVlKSwgdHJ1ZSwgJ0V4cGVjdGluZyBMVmlldyBvciB1bmRlZmluZWQgb3IgbnVsbCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TFZpZXcodmFsdWU6IGFueSk6IGFzc2VydHMgdmFsdWUgaXMgTFZpZXcge1xuICBhc3NlcnREZWZpbmVkKHZhbHVlLCAnTFZpZXcgbXVzdCBiZSBkZWZpbmVkJyk7XG4gIGFzc2VydEVxdWFsKGlzTFZpZXcodmFsdWUpLCB0cnVlLCAnRXhwZWN0aW5nIExWaWV3Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRGaXJzdENyZWF0ZVBhc3ModFZpZXc6IFRWaWV3LCBlcnJNZXNzYWdlPzogc3RyaW5nKSB7XG4gIGFzc2VydEVxdWFsKFxuICAgICAgdFZpZXcuZmlyc3RDcmVhdGVQYXNzLCB0cnVlLCBlcnJNZXNzYWdlIHx8ICdTaG91bGQgb25seSBiZSBjYWxsZWQgaW4gZmlyc3QgY3JlYXRlIHBhc3MuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRGaXJzdFVwZGF0ZVBhc3ModFZpZXc6IFRWaWV3LCBlcnJNZXNzYWdlPzogc3RyaW5nKSB7XG4gIGFzc2VydEVxdWFsKFxuICAgICAgdFZpZXcuZmlyc3RVcGRhdGVQYXNzLCB0cnVlLCBlcnJNZXNzYWdlIHx8ICdTaG91bGQgb25seSBiZSBjYWxsZWQgaW4gZmlyc3QgdXBkYXRlIHBhc3MuJyk7XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIGJhc2ljIHNhbml0eSBjaGVjayB0aGF0IGFuIG9iamVjdCBpcyBwcm9iYWJseSBhIGRpcmVjdGl2ZSBkZWYuIERpcmVjdGl2ZURlZiBpc1xuICogYW4gaW50ZXJmYWNlLCBzbyB3ZSBjYW4ndCBkbyBhIGRpcmVjdCBpbnN0YW5jZW9mIGNoZWNrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RGlyZWN0aXZlRGVmPFQ+KG9iajogYW55KTogYXNzZXJ0cyBvYmogaXMgRGlyZWN0aXZlRGVmPFQ+IHtcbiAgaWYgKG9iai50eXBlID09PSB1bmRlZmluZWQgfHwgb2JqLnNlbGVjdG9ycyA9PSB1bmRlZmluZWQgfHwgb2JqLmlucHV0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3dFcnJvcihcbiAgICAgICAgYEV4cGVjdGVkIGEgRGlyZWN0aXZlRGVmL0NvbXBvbmVudERlZiBhbmQgdGhpcyBvYmplY3QgZG9lcyBub3Qgc2VlbSB0byBoYXZlIHRoZSBleHBlY3RlZCBzaGFwZS5gKTtcbiAgfVxufVxuIl19