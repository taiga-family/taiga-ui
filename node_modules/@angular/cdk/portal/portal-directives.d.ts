/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, EventEmitter, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BasePortalOutlet, ComponentPortal, Portal, TemplatePortal, DomPortal } from './portal';
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkPortal extends TemplatePortal {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkPortal, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkPortal, "[cdkPortal]", ["cdkPortal"], {}, {}, never>;
}
/**
 * @deprecated Use `CdkPortal` instead.
 * @breaking-change 9.0.0
 */
export declare class TemplatePortalDirective extends CdkPortal {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TemplatePortalDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TemplatePortalDirective, "[cdk-portal], [portal]", ["cdkPortal"], {}, {}, never>;
}
/**
 * Possible attached references to the CdkPortalOutlet.
 */
export declare type CdkPortalOutletAttachedRef = ComponentRef<any> | EmbeddedViewRef<any> | null;
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
export declare class CdkPortalOutlet extends BasePortalOutlet implements OnInit, OnDestroy {
    private _componentFactoryResolver;
    private _viewContainerRef;
    private _document;
    /** Whether the portal component is initialized. */
    private _isInitialized;
    /** Reference to the currently-attached component/view ref. */
    private _attachedRef;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _viewContainerRef: ViewContainerRef, 
    /**
     * @deprecated `_document` parameter to be made required.
     * @breaking-change 9.0.0
     */
    _document?: any);
    /** Portal associated with the Portal outlet. */
    get portal(): Portal<any> | null;
    set portal(portal: Portal<any> | null);
    /** Emits when a portal is attached to the outlet. */
    attached: EventEmitter<CdkPortalOutletAttachedRef>;
    /** Component or view reference that is attached to the portal. */
    get attachedRef(): CdkPortalOutletAttachedRef;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    /**
     * Attach the given TemplatePortal to this PortalHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    /**
     * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */
    attachDomPortal: (portal: DomPortal<HTMLElement>) => void;
    /** Gets the root node of the portal outlet. */
    private _getRootNode;
    static ngAcceptInputType_portal: Portal<any> | null | undefined | '';
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkPortalOutlet, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkPortalOutlet, "[cdkPortalOutlet]", ["cdkPortalOutlet"], { "portal": "cdkPortalOutlet"; }, { "attached": "attached"; }, never>;
}
/**
 * @deprecated Use `CdkPortalOutlet` instead.
 * @breaking-change 9.0.0
 */
export declare class PortalHostDirective extends CdkPortalOutlet {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PortalHostDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<PortalHostDirective, "[cdkPortalHost], [portalHost]", ["cdkPortalHost"], { "portal": "cdkPortalHost"; }, {}, never>;
}
export declare class PortalModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<PortalModule, [typeof CdkPortal, typeof CdkPortalOutlet, typeof TemplatePortalDirective, typeof PortalHostDirective], never, [typeof CdkPortal, typeof CdkPortalOutlet, typeof TemplatePortalDirective, typeof PortalHostDirective]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<PortalModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWRpcmVjdGl2ZXMuZC50cyIsInNvdXJjZXMiOlsicG9ydGFsLWRpcmVjdGl2ZXMuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVBvcnRhbE91dGxldCwgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWwsIFRlbXBsYXRlUG9ydGFsLCBEb21Qb3J0YWwgfSBmcm9tICcuL3BvcnRhbCc7XG4vKipcbiAqIERpcmVjdGl2ZSB2ZXJzaW9uIG9mIGEgYFRlbXBsYXRlUG9ydGFsYC4gQmVjYXVzZSB0aGUgZGlyZWN0aXZlICppcyogYSBUZW1wbGF0ZVBvcnRhbCxcbiAqIHRoZSBkaXJlY3RpdmUgaW5zdGFuY2UgaXRzZWxmIGNhbiBiZSBhdHRhY2hlZCB0byBhIGhvc3QsIGVuYWJsaW5nIGRlY2xhcmF0aXZlIHVzZSBvZiBwb3J0YWxzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtQb3J0YWwgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbCB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpO1xufVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYENka1BvcnRhbGAgaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgOS4wLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgZXh0ZW5kcyBDZGtQb3J0YWwge1xufVxuLyoqXG4gKiBQb3NzaWJsZSBhdHRhY2hlZCByZWZlcmVuY2VzIHRvIHRoZSBDZGtQb3J0YWxPdXRsZXQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIHR5cGUgQ2RrUG9ydGFsT3V0bGV0QXR0YWNoZWRSZWYgPSBDb21wb25lbnRSZWY8YW55PiB8IEVtYmVkZGVkVmlld1JlZjxhbnk+IHwgbnVsbDtcbi8qKlxuICogRGlyZWN0aXZlIHZlcnNpb24gb2YgYSBQb3J0YWxPdXRsZXQuIEJlY2F1c2UgdGhlIGRpcmVjdGl2ZSAqaXMqIGEgUG9ydGFsT3V0bGV0LCBwb3J0YWxzIGNhbiBiZVxuICogZGlyZWN0bHkgYXR0YWNoZWQgdG8gaXQsIGVuYWJsaW5nIGRlY2xhcmF0aXZlIHVzZS5cbiAqXG4gKiBVc2FnZTpcbiAqIGA8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJncmVldGluZ1wiPjwvbmctdGVtcGxhdGU+YFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtQb3J0YWxPdXRsZXQgZXh0ZW5kcyBCYXNlUG9ydGFsT3V0bGV0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmO1xuICAgIHByaXZhdGUgX2RvY3VtZW50O1xuICAgIC8qKiBXaGV0aGVyIHRoZSBwb3J0YWwgY29tcG9uZW50IGlzIGluaXRpYWxpemVkLiAqL1xuICAgIHByaXZhdGUgX2lzSW5pdGlhbGl6ZWQ7XG4gICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5LWF0dGFjaGVkIGNvbXBvbmVudC92aWV3IHJlZi4gKi9cbiAgICBwcml2YXRlIF9hdHRhY2hlZFJlZjtcbiAgICBjb25zdHJ1Y3RvcihfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBgX2RvY3VtZW50YCBwYXJhbWV0ZXIgdG8gYmUgbWFkZSByZXF1aXJlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDkuMC4wXG4gICAgICovXG4gICAgX2RvY3VtZW50PzogYW55KTtcbiAgICAvKiogUG9ydGFsIGFzc29jaWF0ZWQgd2l0aCB0aGUgUG9ydGFsIG91dGxldC4gKi9cbiAgICBnZXQgcG9ydGFsKCk6IFBvcnRhbDxhbnk+IHwgbnVsbDtcbiAgICBzZXQgcG9ydGFsKHBvcnRhbDogUG9ydGFsPGFueT4gfCBudWxsKTtcbiAgICAvKiogRW1pdHMgd2hlbiBhIHBvcnRhbCBpcyBhdHRhY2hlZCB0byB0aGUgb3V0bGV0LiAqL1xuICAgIGF0dGFjaGVkOiBFdmVudEVtaXR0ZXI8Q2RrUG9ydGFsT3V0bGV0QXR0YWNoZWRSZWY+O1xuICAgIC8qKiBDb21wb25lbnQgb3IgdmlldyByZWZlcmVuY2UgdGhhdCBpcyBhdHRhY2hlZCB0byB0aGUgcG9ydGFsLiAqL1xuICAgIGdldCBhdHRhY2hlZFJlZigpOiBDZGtQb3J0YWxPdXRsZXRBdHRhY2hlZFJlZjtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQXR0YWNoIHRoZSBnaXZlbiBDb21wb25lbnRQb3J0YWwgdG8gdGhpcyBQb3J0YWxPdXRsZXQgdXNpbmcgdGhlIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwb3J0YWwgUG9ydGFsIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBwb3J0YWwgb3V0bGV0LlxuICAgICAqIEByZXR1cm5zIFJlZmVyZW5jZSB0byB0aGUgY3JlYXRlZCBjb21wb25lbnQuXG4gICAgICovXG4gICAgYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+KTogQ29tcG9uZW50UmVmPFQ+O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCB0aGUgZ2l2ZW4gVGVtcGxhdGVQb3J0YWwgdG8gdGhpcyBQb3J0YWxIb3N0IGFzIGFuIGVtYmVkZGVkIFZpZXcuXG4gICAgICogQHBhcmFtIHBvcnRhbCBQb3J0YWwgdG8gYmUgYXR0YWNoZWQuXG4gICAgICogQHJldHVybnMgUmVmZXJlbmNlIHRvIHRoZSBjcmVhdGVkIGVtYmVkZGVkIHZpZXcuXG4gICAgICovXG4gICAgYXR0YWNoVGVtcGxhdGVQb3J0YWw8Qz4ocG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxDPik6IEVtYmVkZGVkVmlld1JlZjxDPjtcbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyB0aGUgZ2l2ZW4gRG9tUG9ydGFsIHRvIHRoaXMgUG9ydGFsSG9zdCBieSBtb3ZpbmcgYWxsIG9mIHRoZSBwb3J0YWwgY29udGVudCBpbnRvIGl0LlxuICAgICAqIEBwYXJhbSBwb3J0YWwgUG9ydGFsIHRvIGJlIGF0dGFjaGVkLlxuICAgICAqIEBkZXByZWNhdGVkIFRvIGJlIHR1cm5lZCBpbnRvIGEgbWV0aG9kLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAgICovXG4gICAgYXR0YWNoRG9tUG9ydGFsOiAocG9ydGFsOiBEb21Qb3J0YWw8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkO1xuICAgIC8qKiBHZXRzIHRoZSByb290IG5vZGUgb2YgdGhlIHBvcnRhbCBvdXRsZXQuICovXG4gICAgcHJpdmF0ZSBfZ2V0Um9vdE5vZGU7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BvcnRhbDogUG9ydGFsPGFueT4gfCBudWxsIHwgdW5kZWZpbmVkIHwgJyc7XG59XG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgQ2RrUG9ydGFsT3V0bGV0YCBpbnN0ZWFkLlxuICogQGJyZWFraW5nLWNoYW5nZSA5LjAuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQb3J0YWxIb3N0RGlyZWN0aXZlIGV4dGVuZHMgQ2RrUG9ydGFsT3V0bGV0IHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBvcnRhbE1vZHVsZSB7XG59XG4iXX0=