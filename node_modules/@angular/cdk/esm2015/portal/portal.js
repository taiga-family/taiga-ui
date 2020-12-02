/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/portal/portal.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, } from '@angular/core';
import { throwNullPortalOutletError, throwPortalAlreadyAttachedError, throwNoPortalAttachedError, throwNullPortalError, throwPortalOutletAlreadyDisposedError, throwUnknownPortalTypeError } from './portal-errors';
/**
 * Interface that can be used to generically type a class.
 * @record
 * @template T
 */
export function ComponentType() { }
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 * @template T
 */
export class Portal {
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    attach(host) {
        if (host == null) {
            throwNullPortalOutletError();
        }
        if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return (/** @type {?} */ (host.attach(this)));
    }
    /**
     * Detach this portal from its host
     * @return {?}
     */
    detach() {
        /** @type {?} */
        let host = this._attachedHost;
        if (host == null) {
            throwNoPortalAttachedError();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    }
    /**
     * Whether this portal is attached to a host.
     * @return {?}
     */
    get isAttached() {
        return this._attachedHost != null;
    }
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    setAttachedHost(host) {
        this._attachedHost = host;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Portal.prototype._attachedHost;
}
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
export class ComponentPortal extends Portal {
    /**
     * @param {?} component
     * @param {?=} viewContainerRef
     * @param {?=} injector
     * @param {?=} componentFactoryResolver
     */
    constructor(component, viewContainerRef, injector, componentFactoryResolver) {
        super();
        this.component = component;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
    }
}
if (false) {
    /**
     * The type of the component that will be instantiated for attachment.
     * @type {?}
     */
    ComponentPortal.prototype.component;
    /**
     * [Optional] Where the attached component should live in Angular's *logical* component tree.
     * This is different from where the component *renders*, which is determined by the PortalOutlet.
     * The origin is necessary when the host is outside of the Angular application context.
     * @type {?}
     */
    ComponentPortal.prototype.viewContainerRef;
    /**
     * [Optional] Injector used for the instantiation of the component.
     * @type {?}
     */
    ComponentPortal.prototype.injector;
    /**
     * Alternate `ComponentFactoryResolver` to use when resolving the associated component.
     * Defaults to using the resolver from the outlet that the portal is attached to.
     * @type {?}
     */
    ComponentPortal.prototype.componentFactoryResolver;
}
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 * @template C
 */
export class TemplatePortal extends Portal {
    /**
     * @param {?} template
     * @param {?} viewContainerRef
     * @param {?=} context
     */
    constructor(template, viewContainerRef, context) {
        super();
        this.templateRef = template;
        this.viewContainerRef = viewContainerRef;
        this.context = context;
    }
    /**
     * @return {?}
     */
    get origin() {
        return this.templateRef.elementRef;
    }
    /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    attach(host, context = this.context) {
        this.context = context;
        return super.attach(host);
    }
    /**
     * @return {?}
     */
    detach() {
        this.context = undefined;
        return super.detach();
    }
}
if (false) {
    /**
     * The embedded template that will be used to instantiate an embedded View in the host.
     * @type {?}
     */
    TemplatePortal.prototype.templateRef;
    /**
     * Reference to the ViewContainer into which the template will be stamped out.
     * @type {?}
     */
    TemplatePortal.prototype.viewContainerRef;
    /**
     * Contextual data to be passed in to the embedded view.
     * @type {?}
     */
    TemplatePortal.prototype.context;
}
/**
 * A `DomPortal` is a portal whose DOM element will be taken from its current position
 * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
 * will be restored to its original position.
 * @template T
 */
export class DomPortal extends Portal {
    /**
     * @param {?} element
     */
    constructor(element) {
        super();
        this.element = element instanceof ElementRef ? element.nativeElement : element;
    }
}
if (false) {
    /**
     * DOM node hosting the portal's content.
     * @type {?}
     */
    DomPortal.prototype.element;
}
/**
 * A `PortalOutlet` is an space that can contain a single `Portal`.
 * @record
 */
export function PortalOutlet() { }
if (false) {
    /**
     * Attaches a portal to this outlet.
     * @param {?} portal
     * @return {?}
     */
    PortalOutlet.prototype.attach = function (portal) { };
    /**
     * Detaches the currently attached portal from this outlet.
     * @return {?}
     */
    PortalOutlet.prototype.detach = function () { };
    /**
     * Performs cleanup before the outlet is destroyed.
     * @return {?}
     */
    PortalOutlet.prototype.dispose = function () { };
    /**
     * Whether there is currently a portal attached to this outlet.
     * @return {?}
     */
    PortalOutlet.prototype.hasAttached = function () { };
}
/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
export class BasePortalOutlet {
    constructor() {
        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false;
        // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.
        this.attachDomPortal = null;
    }
    /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    hasAttached() {
        return !!this._attachedPortal;
    }
    /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    attach(portal) {
        if (!portal) {
            throwNullPortalError();
        }
        if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
            // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
        }
        else if (this.attachDomPortal && portal instanceof DomPortal) {
            this._attachedPortal = portal;
            return this.attachDomPortal(portal);
        }
        throwUnknownPortalTypeError();
    }
    /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    detach() {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    }
    /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    dispose() {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    }
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    setDisposeFn(fn) {
        this._disposeFn = fn;
    }
    /**
     * @private
     * @return {?}
     */
    _invokeDisposeFn() {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    }
}
if (false) {
    /**
     * The portal currently attached to the host.
     * @type {?}
     * @protected
     */
    BasePortalOutlet.prototype._attachedPortal;
    /**
     * A function that will permanently dispose this host.
     * @type {?}
     * @private
     */
    BasePortalOutlet.prototype._disposeFn;
    /**
     * Whether this host has already been permanently disposed.
     * @type {?}
     * @private
     */
    BasePortalOutlet.prototype._isDisposed;
    /** @type {?} */
    BasePortalOutlet.prototype.attachDomPortal;
    /**
     * @abstract
     * @template T
     * @param {?} portal
     * @return {?}
     */
    BasePortalOutlet.prototype.attachComponentPortal = function (portal) { };
    /**
     * @abstract
     * @template C
     * @param {?} portal
     * @return {?}
     */
    BasePortalOutlet.prototype.attachTemplatePortal = function (portal) { };
}
/**
 * @deprecated Use `BasePortalOutlet` instead.
 * \@breaking-change 9.0.0
 * @abstract
 */
export class BasePortalHost extends BasePortalOutlet {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9wb3J0YWwvcG9ydGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFHSCxVQUFVLEdBS2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILDBCQUEwQixFQUMxQiwrQkFBK0IsRUFDL0IsMEJBQTBCLEVBQzFCLG9CQUFvQixFQUNwQixxQ0FBcUMsRUFDckMsMkJBQTJCLEVBQzlCLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQUd6QixtQ0FFQzs7Ozs7OztBQU1ELE1BQU0sT0FBZ0IsTUFBTTs7Ozs7O0lBSTFCLE1BQU0sQ0FBQyxJQUFrQjtRQUN2QixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsMEJBQTBCLEVBQUUsQ0FBQztTQUM5QjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RCLCtCQUErQixFQUFFLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixPQUFPLG1CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUEsQ0FBQztJQUMvQixDQUFDOzs7OztJQUdELE1BQU07O1lBQ0EsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhO1FBRTdCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQiwwQkFBMEIsRUFBRSxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7O0lBR0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQztJQUNwQyxDQUFDOzs7Ozs7O0lBTUQsZUFBZSxDQUFDLElBQXlCO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdB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Qzs7SUE2Q3JDLDJDQUFxRTs7Ozs7OztJQUxyRSx5RUFBK0U7Ozs7Ozs7SUFFL0Usd0VBQWdGOzs7Ozs7O0FBMENsRixNQUFNLE9BQWdCLGNBQWUsU0FBUSxnQkFBZ0I7Q0FBRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWYsXG4gICAgRWxlbWVudFJlZixcbiAgICBDb21wb25lbnRSZWYsXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxuICAgIEluamVjdG9yLFxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIHRocm93TnVsbFBvcnRhbE91dGxldEVycm9yLFxuICAgIHRocm93UG9ydGFsQWxyZWFkeUF0dGFjaGVkRXJyb3IsXG4gICAgdGhyb3dOb1BvcnRhbEF0dGFjaGVkRXJyb3IsXG4gICAgdGhyb3dOdWxsUG9ydGFsRXJyb3IsXG4gICAgdGhyb3dQb3J0YWxPdXRsZXRBbHJlYWR5RGlzcG9zZWRFcnJvcixcbiAgICB0aHJvd1Vua25vd25Qb3J0YWxUeXBlRXJyb3Jcbn0gZnJvbSAnLi9wb3J0YWwtZXJyb3JzJztcblxuLyoqIEludGVyZmFjZSB0aGF0IGNhbiBiZSB1c2VkIHRvIGdlbmVyaWNhbGx5IHR5cGUgYSBjbGFzcy4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50VHlwZTxUPiB7XG4gIG5ldyAoLi4uYXJnczogYW55W10pOiBUO1xufVxuXG4vKipcbiAqIEEgYFBvcnRhbGAgaXMgc29tZXRoaW5nIHRoYXQgeW91IHdhbnQgdG8gcmVuZGVyIHNvbWV3aGVyZSBlbHNlLlxuICogSXQgY2FuIGJlIGF0dGFjaCB0byAvIGRldGFjaGVkIGZyb20gYSBgUG9ydGFsT3V0bGV0YC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvcnRhbDxUPiB7XG4gIHByaXZhdGUgX2F0dGFjaGVkSG9zdDogUG9ydGFsT3V0bGV0IHwgbnVsbDtcblxuICAvKiogQXR0YWNoIHRoaXMgcG9ydGFsIHRvIGEgaG9zdC4gKi9cbiAgYXR0YWNoKGhvc3Q6IFBvcnRhbE91dGxldCk6IFQge1xuICAgIGlmIChob3N0ID09IG51bGwpIHtcbiAgICAgIHRocm93TnVsbFBvcnRhbE91dGxldEVycm9yKCk7XG4gICAgfVxuXG4gICAgaWYgKGhvc3QuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhyb3dQb3J0YWxBbHJlYWR5QXR0YWNoZWRFcnJvcigpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IGhvc3Q7XG4gICAgcmV0dXJuIDxUPiBob3N0LmF0dGFjaCh0aGlzKTtcbiAgfVxuXG4gIC8qKiBEZXRhY2ggdGhpcyBwb3J0YWwgZnJvbSBpdHMgaG9zdCAqL1xuICBkZXRhY2goKTogdm9pZCB7XG4gICAgbGV0IGhvc3QgPSB0aGlzLl9hdHRhY2hlZEhvc3Q7XG5cbiAgICBpZiAoaG9zdCA9PSBudWxsKSB7XG4gICAgICB0aHJvd05vUG9ydGFsQXR0YWNoZWRFcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBudWxsO1xuICAgICAgaG9zdC5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIHBvcnRhbCBpcyBhdHRhY2hlZCB0byBhIGhvc3QuICovXG4gIGdldCBpc0F0dGFjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdHRhY2hlZEhvc3QgIT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBQb3J0YWxPdXRsZXQgcmVmZXJlbmNlIHdpdGhvdXQgcGVyZm9ybWluZyBgYXR0YWNoKClgLiBUaGlzIGlzIHVzZWQgZGlyZWN0bHkgYnlcbiAgICogdGhlIFBvcnRhbE91dGxldCB3aGVuIGl0IGlzIHBlcmZvcm1pbmcgYW4gYGF0dGFjaCgpYCBvciBgZGV0YWNoKClgLlxuICAgKi9cbiAgc2V0QXR0YWNoZWRIb3N0KGhvc3Q6IFBvcnRhbE91dGxldCB8IG51bGwpIHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICB9XG59XG5cblxuLyoqXG4gKiBBIGBDb21wb25lbnRQb3J0YWxgIGlzIGEgcG9ydGFsIHRoYXQgaW5zdGFudGlhdGVzIHNvbWUgQ29tcG9uZW50IHVwb24gYXR0YWNobWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvcnRhbDxUPiBleHRlbmRzIFBvcnRhbDxDb21wb25lbnRSZWY8VD4+IHtcbiAgLyoqIFRoZSB0eXBlIG9mIHRoZSBjb21wb25lbnQgdGhhdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBmb3IgYXR0YWNobWVudC4gKi9cbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+O1xuXG4gIC8qKlxuICAgKiBbT3B0aW9uYWxdIFdoZXJlIHRoZSBhdHRhY2hlZCBjb21wb25lbnQgc2hvdWxkIGxpdmUgaW4gQW5ndWxhcidzICpsb2dpY2FsKiBjb21wb25lbnQgdHJlZS5cbiAgICogVGhpcyBpcyBkaWZmZXJlbnQgZnJvbSB3aGVyZSB0aGUgY29tcG9uZW50ICpyZW5kZXJzKiwgd2hpY2ggaXMgZGV0ZXJtaW5lZCBieSB0aGUgUG9ydGFsT3V0bGV0LlxuICAgKiBUaGUgb3JpZ2luIGlzIG5lY2Vzc2FyeSB3aGVuIHRoZSBob3N0IGlzIG91dHNpZGUgb2YgdGhlIEFuZ3VsYXIgYXBwbGljYXRpb24gY29udGV4dC5cbiAgICovXG4gIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmIHwgbnVsbDtcblxuICAvKiogW09wdGlvbmFsXSBJbmplY3RvciB1c2VkIGZvciB0aGUgaW5zdGFudGlhdGlvbiBvZiB0aGUgY29tcG9uZW50LiAqL1xuICBpbmplY3Rvcj86IEluamVjdG9yIHwgbnVsbDtcblxuICAvKipcbiAgICogQWx0ZXJuYXRlIGBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJgIHRvIHVzZSB3aGVuIHJlc29sdmluZyB0aGUgYXNzb2NpYXRlZCBjb21wb25lbnQuXG4gICAqIERlZmF1bHRzIHRvIHVzaW5nIHRoZSByZXNvbHZlciBmcm9tIHRoZSBvdXRsZXQgdGhhdCB0aGUgcG9ydGFsIGlzIGF0dGFjaGVkIHRvLlxuICAgKi9cbiAgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyPzogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPixcbiAgICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmIHwgbnVsbCxcbiAgICAgIGluamVjdG9yPzogSW5qZWN0b3IgfCBudWxsLFxuICAgICAgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyPzogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIHwgbnVsbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmlld0NvbnRhaW5lclJlZjtcbiAgICB0aGlzLmluamVjdG9yID0gaW5qZWN0b3I7XG4gICAgdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgPSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGBUZW1wbGF0ZVBvcnRhbGAgaXMgYSBwb3J0YWwgdGhhdCByZXByZXNlbnRzIHNvbWUgZW1iZWRkZWQgdGVtcGxhdGUgKFRlbXBsYXRlUmVmKS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUG9ydGFsPEMgPSBhbnk+IGV4dGVuZHMgUG9ydGFsPEVtYmVkZGVkVmlld1JlZjxDPj4ge1xuICAvKiogVGhlIGVtYmVkZGVkIHRlbXBsYXRlIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGluc3RhbnRpYXRlIGFuIGVtYmVkZGVkIFZpZXcgaW4gdGhlIGhvc3QuICovXG4gIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxDPjtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBWaWV3Q29udGFpbmVyIGludG8gd2hpY2ggdGhlIHRlbXBsYXRlIHdpbGwgYmUgc3RhbXBlZCBvdXQuICovXG4gIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgLyoqIENvbnRleHR1YWwgZGF0YSB0byBiZSBwYXNzZWQgaW4gdG8gdGhlIGVtYmVkZGVkIHZpZXcuICovXG4gIGNvbnRleHQ6IEMgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IodGVtcGxhdGU6IFRlbXBsYXRlUmVmPEM+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBjb250ZXh0PzogQykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50ZW1wbGF0ZVJlZiA9IHRlbXBsYXRlO1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZiA9IHZpZXdDb250YWluZXJSZWY7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgfVxuXG4gIGdldCBvcmlnaW4oKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVSZWYuZWxlbWVudFJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggdGhlIHBvcnRhbCB0byB0aGUgcHJvdmlkZWQgYFBvcnRhbE91dGxldGAuXG4gICAqIFdoZW4gYSBjb250ZXh0IGlzIHByb3ZpZGVkIGl0IHdpbGwgb3ZlcnJpZGUgdGhlIGBjb250ZXh0YCBwcm9wZXJ0eSBvZiB0aGUgYFRlbXBsYXRlUG9ydGFsYFxuICAgKiBpbnN0YW5jZS5cbiAgICovXG4gIGF0dGFjaChob3N0OiBQb3J0YWxPdXRsZXQsIGNvbnRleHQ6IEMgfCB1bmRlZmluZWQgPSB0aGlzLmNvbnRleHQpOiBFbWJlZGRlZFZpZXdSZWY8Qz4ge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjaChob3N0KTtcbiAgfVxuXG4gIGRldGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN1cGVyLmRldGFjaCgpO1xuICB9XG59XG5cbi8qKlxuICogQSBgRG9tUG9ydGFsYCBpcyBhIHBvcnRhbCB3aG9zZSBET00gZWxlbWVudCB3aWxsIGJlIHRha2VuIGZyb20gaXRzIGN1cnJlbnQgcG9zaXRpb25cbiAqIGluIHRoZSBET00gYW5kIG1vdmVkIGludG8gYSBwb3J0YWwgb3V0bGV0LCB3aGVuIGl0IGlzIGF0dGFjaGVkLiBPbiBkZXRhY2gsIHRoZSBjb250ZW50XG4gKiB3aWxsIGJlIHJlc3RvcmVkIHRvIGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIERvbVBvcnRhbDxUID0gSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUG9ydGFsPFQ+IHtcbiAgLyoqIERPTSBub2RlIGhvc3RpbmcgdGhlIHBvcnRhbCdzIGNvbnRlbnQuICovXG4gIHJlYWRvbmx5IGVsZW1lbnQ6IFQ7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogVCB8IEVsZW1lbnRSZWY8VD4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudC5uYXRpdmVFbGVtZW50IDogZWxlbWVudDtcbiAgfVxufVxuXG5cbi8qKiBBIGBQb3J0YWxPdXRsZXRgIGlzIGFuIHNwYWNlIHRoYXQgY2FuIGNvbnRhaW4gYSBzaW5nbGUgYFBvcnRhbGAuICovXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbE91dGxldCB7XG4gIC8qKiBBdHRhY2hlcyBhIHBvcnRhbCB0byB0aGlzIG91dGxldC4gKi9cbiAgYXR0YWNoKHBvcnRhbDogUG9ydGFsPGFueT4pOiBhbnk7XG5cbiAgLyoqIERldGFjaGVzIHRoZSBjdXJyZW50bHkgYXR0YWNoZWQgcG9ydGFsIGZyb20gdGhpcyBvdXRsZXQuICovXG4gIGRldGFjaCgpOiBhbnk7XG5cbiAgLyoqIFBlcmZvcm1zIGNsZWFudXAgYmVmb3JlIHRoZSBvdXRsZXQgaXMgZGVzdHJveWVkLiAqL1xuICBkaXNwb3NlKCk6IHZvaWQ7XG5cbiAgLyoqIFdoZXRoZXIgdGhlcmUgaXMgY3VycmVudGx5IGEgcG9ydGFsIGF0dGFjaGVkIHRvIHRoaXMgb3V0bGV0LiAqL1xuICBoYXNBdHRhY2hlZCgpOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgUG9ydGFsT3V0bGV0YCBpbnN0ZWFkLlxuICogQGJyZWFraW5nLWNoYW5nZSA5LjAuMFxuICovXG5leHBvcnQgdHlwZSBQb3J0YWxIb3N0ID0gUG9ydGFsT3V0bGV0O1xuXG4vKipcbiAqIFBhcnRpYWwgaW1wbGVtZW50YXRpb24gb2YgUG9ydGFsT3V0bGV0IHRoYXQgaGFuZGxlcyBhdHRhY2hpbmdcbiAqIENvbXBvbmVudFBvcnRhbCBhbmQgVGVtcGxhdGVQb3J0YWwuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUG9ydGFsT3V0bGV0IGltcGxlbWVudHMgUG9ydGFsT3V0bGV0IHtcbiAgLyoqIFRoZSBwb3J0YWwgY3VycmVudGx5IGF0dGFjaGVkIHRvIHRoZSBob3N0LiAqL1xuICBwcm90ZWN0ZWQgX2F0dGFjaGVkUG9ydGFsOiBQb3J0YWw8YW55PiB8IG51bGw7XG5cbiAgLyoqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIHBlcm1hbmVudGx5IGRpc3Bvc2UgdGhpcyBob3N0LiAqL1xuICBwcml2YXRlIF9kaXNwb3NlRm46ICgoKSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyBob3N0IGhhcyBhbHJlYWR5IGJlZW4gcGVybWFuZW50bHkgZGlzcG9zZWQuICovXG4gIHByaXZhdGUgX2lzRGlzcG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGlzIGhvc3QgaGFzIGFuIGF0dGFjaGVkIHBvcnRhbC4gKi9cbiAgaGFzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fYXR0YWNoZWRQb3J0YWw7XG4gIH1cblxuICBhdHRhY2g8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4pOiBDb21wb25lbnRSZWY8VD47XG4gIGF0dGFjaDxUPihwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPFQ+KTogRW1iZWRkZWRWaWV3UmVmPFQ+O1xuICBhdHRhY2gocG9ydGFsOiBhbnkpOiBhbnk7XG5cbiAgLyoqIEF0dGFjaGVzIGEgcG9ydGFsLiAqL1xuICBhdHRhY2gocG9ydGFsOiBQb3J0YWw8YW55Pik6IGFueSB7XG4gICAgaWYgKCFwb3J0YWwpIHtcbiAgICAgIHRocm93TnVsbFBvcnRhbEVycm9yKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhyb3dQb3J0YWxBbHJlYWR5QXR0YWNoZWRFcnJvcigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aHJvd1BvcnRhbE91dGxldEFscmVhZHlEaXNwb3NlZEVycm9yKCk7XG4gICAgfVxuXG4gICAgaWYgKHBvcnRhbCBpbnN0YW5jZW9mIENvbXBvbmVudFBvcnRhbCkge1xuICAgICAgdGhpcy5fYXR0YWNoZWRQb3J0YWwgPSBwb3J0YWw7XG4gICAgICByZXR1cm4gdGhpcy5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcbiAgICB9IGVsc2UgaWYgKHBvcnRhbCBpbnN0YW5jZW9mIFRlbXBsYXRlUG9ydGFsKSB7XG4gICAgICB0aGlzLl9hdHRhY2hlZFBvcnRhbCA9IHBvcnRhbDtcbiAgICAgIHJldHVybiB0aGlzLmF0dGFjaFRlbXBsYXRlUG9ydGFsKHBvcnRhbCk7XG4gICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMCByZW1vdmUgbnVsbCBjaGVjayBmb3IgYHRoaXMuYXR0YWNoRG9tUG9ydGFsYC5cbiAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNoRG9tUG9ydGFsICYmIHBvcnRhbCBpbnN0YW5jZW9mIERvbVBvcnRhbCkge1xuICAgICAgdGhpcy5fYXR0YWNoZWRQb3J0YWwgPSBwb3J0YWw7XG4gICAgICByZXR1cm4gdGhpcy5hdHRhY2hEb21Qb3J0YWwocG9ydGFsKTtcbiAgICB9XG5cbiAgICB0aHJvd1Vua25vd25Qb3J0YWxUeXBlRXJyb3IoKTtcbiAgfVxuXG4gIGFic3RyYWN0IGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPik6IENvbXBvbmVudFJlZjxUPjtcblxuICBhYnN0cmFjdCBhdHRhY2hUZW1wbGF0ZVBvcnRhbDxDPihwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPEM+KTogRW1iZWRkZWRWaWV3UmVmPEM+O1xuXG4gIC8vIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wIGBhdHRhY2hEb21Qb3J0YWxgIHRvIGJlY29tZSBhIHJlcXVpcmVkIGFic3RyYWN0IG1ldGhvZC5cbiAgcmVhZG9ubHkgYXR0YWNoRG9tUG9ydGFsOiBudWxsIHwgKChwb3J0YWw6IERvbVBvcnRhbCkgPT4gYW55KSA9IG51bGw7XG5cbiAgLyoqIERldGFjaGVzIGEgcHJldmlvdXNseSBhdHRhY2hlZCBwb3J0YWwuICovXG4gIGRldGFjaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXR0YWNoZWRQb3J0YWwpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsLnNldEF0dGFjaGVkSG9zdChudWxsKTtcbiAgICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9pbnZva2VEaXNwb3NlRm4oKTtcbiAgfVxuXG4gIC8qKiBQZXJtYW5lbnRseSBkaXNwb3NlIG9mIHRoaXMgcG9ydGFsIGhvc3QuICovXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbnZva2VEaXNwb3NlRm4oKTtcbiAgICB0aGlzLl9pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHNldERpc3Bvc2VGbihmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2Rpc3Bvc2VGbiA9IGZuO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW52b2tlRGlzcG9zZUZuKCkge1xuICAgIGlmICh0aGlzLl9kaXNwb3NlRm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VGbigpO1xuICAgICAgdGhpcy5fZGlzcG9zZUZuID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYEJhc2VQb3J0YWxPdXRsZXRgIGluc3RlYWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDkuMC4wXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUG9ydGFsSG9zdCBleHRlbmRzIEJhc2VQb3J0YWxPdXRsZXQge31cbiJdfQ==