/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/view/ng_content.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getParentRenderElement, visitProjectedRenderNodes } from './util';
/**
 * @param {?} ngContentIndex
 * @param {?} index
 * @return {?}
 */
export function ngContentDef(ngContentIndex, index) {
    return {
        // will bet set by the view definition
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        // regular values
        checkIndex: -1,
        flags: 8 /* TypeNgContent */,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex,
        childCount: 0,
        bindings: [],
        bindingFlags: 0,
        outputs: [],
        element: null,
        provider: null,
        text: null,
        query: null,
        ngContent: { index }
    };
}
/**
 * @param {?} view
 * @param {?} renderHost
 * @param {?} def
 * @return {?}
 */
export function appendNgContent(view, renderHost, def) {
    /** @type {?} */
    const parentEl = getParentRenderElement(view, renderHost, def);
    if (!parentEl) {
        // Nothing to do if there is no parent element.
        return;
    }
    /** @type {?} */
    const ngContentIndex = (/** @type {?} */ (def.ngContent)).index;
    visitProjectedRenderNodes(view, ngContentIndex, 1 /* AppendChild */, parentEl, null, undefined);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3ZpZXcvbmdfY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQUMsc0JBQXNCLEVBQW9CLHlCQUF5QixFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFFM0YsTUFBTSxVQUFVLFlBQVksQ0FBQyxjQUEyQixFQUFFLEtBQWE7SUFDckUsT0FBTzs7UUFFTCxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxFQUFFLElBQUk7UUFDWixZQUFZLEVBQUUsSUFBSTtRQUNsQixZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLFdBQVcsRUFBRSxDQUFDLENBQUM7O1FBRWYsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNkLEtBQUssdUJBQXlCO1FBQzlCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixtQkFBbUIsRUFBRSxDQUFDO1FBQ3RCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsY0FBYztRQUNkLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLEVBQUU7UUFDWixZQUFZLEVBQUUsQ0FBQztRQUNmLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLElBQUk7UUFDWCxTQUFTLEVBQUUsRUFBQyxLQUFLLEVBQUM7S0FDbkIsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQWMsRUFBRSxVQUFlLEVBQUUsR0FBWTs7VUFDckUsUUFBUSxHQUFHLHNCQUFzQixDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDO0lBQzlELElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDYiwrQ0FBK0M7UUFDL0MsT0FBTztLQUNSOztVQUNLLGNBQWMsR0FBRyxtQkFBQSxHQUFHLENBQUMsU0FBUyxFQUFDLENBQUMsS0FBSztJQUMzQyx5QkFBeUIsQ0FDckIsSUFBSSxFQUFFLGNBQWMsdUJBQWdDLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDckYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOb2RlRGVmLCBOb2RlRmxhZ3MsIFZpZXdEYXRhfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2V0UGFyZW50UmVuZGVyRWxlbWVudCwgUmVuZGVyTm9kZUFjdGlvbiwgdmlzaXRQcm9qZWN0ZWRSZW5kZXJOb2Rlc30gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5nQ29udGVudERlZihuZ0NvbnRlbnRJbmRleDogbnVsbHxudW1iZXIsIGluZGV4OiBudW1iZXIpOiBOb2RlRGVmIHtcbiAgcmV0dXJuIHtcbiAgICAvLyB3aWxsIGJldCBzZXQgYnkgdGhlIHZpZXcgZGVmaW5pdGlvblxuICAgIG5vZGVJbmRleDogLTEsXG4gICAgcGFyZW50OiBudWxsLFxuICAgIHJlbmRlclBhcmVudDogbnVsbCxcbiAgICBiaW5kaW5nSW5kZXg6IC0xLFxuICAgIG91dHB1dEluZGV4OiAtMSxcbiAgICAvLyByZWd1bGFyIHZhbHVlc1xuICAgIGNoZWNrSW5kZXg6IC0xLFxuICAgIGZsYWdzOiBOb2RlRmxhZ3MuVHlwZU5nQ29udGVudCxcbiAgICBjaGlsZEZsYWdzOiAwLFxuICAgIGRpcmVjdENoaWxkRmxhZ3M6IDAsXG4gICAgY2hpbGRNYXRjaGVkUXVlcmllczogMCxcbiAgICBtYXRjaGVkUXVlcmllczoge30sXG4gICAgbWF0Y2hlZFF1ZXJ5SWRzOiAwLFxuICAgIHJlZmVyZW5jZXM6IHt9LFxuICAgIG5nQ29udGVudEluZGV4LFxuICAgIGNoaWxkQ291bnQ6IDAsXG4gICAgYmluZGluZ3M6IFtdLFxuICAgIGJpbmRpbmdGbGFnczogMCxcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIHByb3ZpZGVyOiBudWxsLFxuICAgIHRleHQ6IG51bGwsXG4gICAgcXVlcnk6IG51bGwsXG4gICAgbmdDb250ZW50OiB7aW5kZXh9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROZ0NvbnRlbnQodmlldzogVmlld0RhdGEsIHJlbmRlckhvc3Q6IGFueSwgZGVmOiBOb2RlRGVmKSB7XG4gIGNvbnN0IHBhcmVudEVsID0gZ2V0UGFyZW50UmVuZGVyRWxlbWVudCh2aWV3LCByZW5kZXJIb3N0LCBkZWYpO1xuICBpZiAoIXBhcmVudEVsKSB7XG4gICAgLy8gTm90aGluZyB0byBkbyBpZiB0aGVyZSBpcyBubyBwYXJlbnQgZWxlbWVudC5cbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbmdDb250ZW50SW5kZXggPSBkZWYubmdDb250ZW50IS5pbmRleDtcbiAgdmlzaXRQcm9qZWN0ZWRSZW5kZXJOb2RlcyhcbiAgICAgIHZpZXcsIG5nQ29udGVudEluZGV4LCBSZW5kZXJOb2RlQWN0aW9uLkFwcGVuZENoaWxkLCBwYXJlbnRFbCwgbnVsbCwgdW5kZWZpbmVkKTtcbn1cbiJdfQ==