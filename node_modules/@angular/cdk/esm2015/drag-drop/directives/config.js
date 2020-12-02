/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 * @type {?}
 */
export const CDK_DRAG_CONFIG = new InjectionToken('CDK_DRAG_CONFIG');
/**
 * Object that can be used to configure the drag
 * items and drop lists within a module or a component.
 * @record
 */
export function DragDropConfig() { }
if (false) {
    /** @type {?|undefined} */
    DragDropConfig.prototype.lockAxis;
    /** @type {?|undefined} */
    DragDropConfig.prototype.dragStartDelay;
    /** @type {?|undefined} */
    DragDropConfig.prototype.constrainPosition;
    /** @type {?|undefined} */
    DragDropConfig.prototype.previewClass;
    /** @type {?|undefined} */
    DragDropConfig.prototype.boundaryElement;
    /** @type {?|undefined} */
    DragDropConfig.prototype.rootElementSelector;
    /** @type {?|undefined} */
    DragDropConfig.prototype.draggingDisabled;
    /** @type {?|undefined} */
    DragDropConfig.prototype.sortingDisabled;
    /** @type {?|undefined} */
    DragDropConfig.prototype.listAutoScrollDisabled;
    /** @type {?|undefined} */
    DragDropConfig.prototype.listOrientation;
    /** @type {?|undefined} */
    DragDropConfig.prototype.zIndex;
}
/**
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * \@docs-private
 * @return {?}
 */
export function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9kcmFnLWRyb3AvZGlyZWN0aXZlcy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBbUI3QyxNQUFNLE9BQU8sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFpQixpQkFBaUIsQ0FBQzs7Ozs7O0FBTXBGLG9DQVlDOzs7SUFYQyxrQ0FBb0I7O0lBQ3BCLHdDQUFnQzs7SUFDaEMsMkNBQTBDOztJQUMxQyxzQ0FBaUM7O0lBQ2pDLHlDQUF5Qjs7SUFDekIsNkNBQTZCOztJQUM3QiwwQ0FBMkI7O0lBQzNCLHlDQUEwQjs7SUFDMUIsZ0RBQWlDOztJQUNqQyx5Q0FBc0M7O0lBQ3RDLGdDQUFnQjs7Ozs7Ozs7QUFRbEIsTUFBTSxVQUFVLHVCQUF1QjtJQUNyQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLCtCQUErQixFQUFFLENBQUMsRUFBQyxDQUFDO0FBQ3JFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RyYWdSZWZDb25maWcsIFBvaW50LCBEcmFnUmVmfSBmcm9tICcuLi9kcmFnLXJlZic7XG5cbi8qKiBQb3NzaWJsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgdGhlIGRyYWcgc3RhcnQgZGVsYXkuICovXG5leHBvcnQgdHlwZSBEcmFnU3RhcnREZWxheSA9IG51bWJlciB8IHt0b3VjaDogbnVtYmVyLCBtb3VzZTogbnVtYmVyfTtcblxuLyoqIFBvc3NpYmxlIGF4aXMgYWxvbmcgd2hpY2ggZHJhZ2dpbmcgY2FuIGJlIGxvY2tlZC4gKi9cbmV4cG9ydCB0eXBlIERyYWdBeGlzID0gJ3gnIHwgJ3knO1xuXG4vKiogRnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBjb25zdHJhaW4gdGhlIHBvc2l0aW9uIG9mIGEgZHJhZ2dlZCBlbGVtZW50LiAqL1xuZXhwb3J0IHR5cGUgRHJhZ0NvbnN0cmFpblBvc2l0aW9uID0gKHBvaW50OiBQb2ludCwgZHJhZ1JlZjogRHJhZ1JlZikgPT4gUG9pbnQ7XG5cbi8qKiBQb3NzaWJsZSBvcmllbnRhdGlvbnMgZm9yIGEgZHJvcCBsaXN0LiAqL1xuZXhwb3J0IHR5cGUgRHJvcExpc3RPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHRoZVxuICogYmVoYXZpb3Igb2YgdGhlIGRyYWcmZHJvcC1yZWxhdGVkIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCBDREtfRFJBR19DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48RHJhZ0Ryb3BDb25maWc+KCdDREtfRFJBR19DT05GSUcnKTtcblxuLyoqXG4gKiBPYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgdGhlIGRyYWdcbiAqIGl0ZW1zIGFuZCBkcm9wIGxpc3RzIHdpdGhpbiBhIG1vZHVsZSBvciBhIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEcmFnRHJvcENvbmZpZyBleHRlbmRzIFBhcnRpYWw8RHJhZ1JlZkNvbmZpZz4ge1xuICBsb2NrQXhpcz86IERyYWdBeGlzO1xuICBkcmFnU3RhcnREZWxheT86IERyYWdTdGFydERlbGF5O1xuICBjb25zdHJhaW5Qb3NpdGlvbj86IERyYWdDb25zdHJhaW5Qb3NpdGlvbjtcbiAgcHJldmlld0NsYXNzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIGJvdW5kYXJ5RWxlbWVudD86IHN0cmluZztcbiAgcm9vdEVsZW1lbnRTZWxlY3Rvcj86IHN0cmluZztcbiAgZHJhZ2dpbmdEaXNhYmxlZD86IGJvb2xlYW47XG4gIHNvcnRpbmdEaXNhYmxlZD86IGJvb2xlYW47XG4gIGxpc3RBdXRvU2Nyb2xsRGlzYWJsZWQ/OiBib29sZWFuO1xuICBsaXN0T3JpZW50YXRpb24/OiBEcm9wTGlzdE9yaWVudGF0aW9uO1xuICB6SW5kZXg/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIHVzZWQuIFRvIGJlIHJlbW92ZWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQ0RLX0RSQUdfQ09ORklHX0ZBQ1RPUlkoKTogRHJhZ0Ryb3BDb25maWcge1xuICByZXR1cm4ge2RyYWdTdGFydFRocmVzaG9sZDogNSwgcG9pbnRlckRpcmVjdGlvbkNoYW5nZVRocmVzaG9sZDogNX07XG59XG4iXX0=