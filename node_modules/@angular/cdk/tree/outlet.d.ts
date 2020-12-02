/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, ViewContainerRef } from '@angular/core';
/**
 * Injection token used to provide a `CdkTreeNode` to its outlet.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
export declare const CDK_TREE_NODE_OUTLET_NODE: InjectionToken<{}>;
/**
 * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
export declare class CdkTreeNodeOutlet {
    viewContainer: ViewContainerRef;
    _node?: any;
    constructor(viewContainer: ViewContainerRef, _node?: any);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTreeNodeOutlet, [null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTreeNodeOutlet, "[cdkTreeNodeOutlet]", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmQudHMiLCJzb3VyY2VzIjpbIm91dGxldC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIEluamVjdGlvbiB0b2tlbiB1c2VkIHRvIHByb3ZpZGUgYSBgQ2RrVHJlZU5vZGVgIHRvIGl0cyBvdXRsZXQuXG4gKiBVc2VkIHByaW1hcmlseSB0byBhdm9pZCBjaXJjdWxhciBpbXBvcnRzLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBDREtfVFJFRV9OT0RFX09VVExFVF9OT0RFOiBJbmplY3Rpb25Ub2tlbjx7fT47XG4vKipcbiAqIE91dGxldCBmb3IgbmVzdGVkIENka05vZGUuIFB1dCBgW2Nka1RyZWVOb2RlT3V0bGV0XWAgb24gYSB0YWcgdG8gcGxhY2UgY2hpbGRyZW4gZGF0YU5vZGVzXG4gKiBpbnNpZGUgdGhlIG91dGxldC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrVHJlZU5vZGVPdXRsZXQge1xuICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gICAgX25vZGU/OiBhbnk7XG4gICAgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgX25vZGU/OiBhbnkpO1xufVxuIl19