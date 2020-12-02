/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TemplateRef, ViewContainerRef, ElementRef, ComponentRef, EmbeddedViewRef, Injector, ComponentFactoryResolver } from '@angular/core';
/** Interface that can be used to generically type a class. */
export interface ComponentType<T> {
    new (...args: any[]): T;
}
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 */
export declare abstract class Portal<T> {
    private _attachedHost;
    /** Attach this portal to a host. */
    attach(host: PortalOutlet): T;
    /** Detach this portal from its host */
    detach(): void;
    /** Whether this portal is attached to a host. */
    get isAttached(): boolean;
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    setAttachedHost(host: PortalOutlet | null): void;
}
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
export declare class ComponentPortal<T> extends Portal<ComponentRef<T>> {
    /** The type of the component that will be instantiated for attachment. */
    component: ComponentType<T>;
    /**
     * [Optional] Where the attached component should live in Angular's *logical* component tree.
     * This is different from where the component *renders*, which is determined by the PortalOutlet.
     * The origin is necessary when the host is outside of the Angular application context.
     */
    viewContainerRef?: ViewContainerRef | null;
    /** [Optional] Injector used for the instantiation of the component. */
    injector?: Injector | null;
    /**
     * Alternate `ComponentFactoryResolver` to use when resolving the associated component.
     * Defaults to using the resolver from the outlet that the portal is attached to.
     */
    componentFactoryResolver?: ComponentFactoryResolver | null;
    constructor(component: ComponentType<T>, viewContainerRef?: ViewContainerRef | null, injector?: Injector | null, componentFactoryResolver?: ComponentFactoryResolver | null);
}
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
export declare class TemplatePortal<C = any> extends Portal<EmbeddedViewRef<C>> {
    /** The embedded template that will be used to instantiate an embedded View in the host. */
    templateRef: TemplateRef<C>;
    /** Reference to the ViewContainer into which the template will be stamped out. */
    viewContainerRef: ViewContainerRef;
    /** Contextual data to be passed in to the embedded view. */
    context: C | undefined;
    constructor(template: TemplateRef<C>, viewContainerRef: ViewContainerRef, context?: C);
    get origin(): ElementRef;
    /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    attach(host: PortalOutlet, context?: C | undefined): EmbeddedViewRef<C>;
    detach(): void;
}
/**
 * A `DomPortal` is a portal whose DOM element will be taken from its current position
 * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
 * will be restored to its original position.
 */
export declare class DomPortal<T = HTMLElement> extends Portal<T> {
    /** DOM node hosting the portal's content. */
    readonly element: T;
    constructor(element: T | ElementRef<T>);
}
/** A `PortalOutlet` is an space that can contain a single `Portal`. */
export interface PortalOutlet {
    /** Attaches a portal to this outlet. */
    attach(portal: Portal<any>): any;
    /** Detaches the currently attached portal from this outlet. */
    detach(): any;
    /** Performs cleanup before the outlet is destroyed. */
    dispose(): void;
    /** Whether there is currently a portal attached to this outlet. */
    hasAttached(): boolean;
}
/**
 * @deprecated Use `PortalOutlet` instead.
 * @breaking-change 9.0.0
 */
export declare type PortalHost = PortalOutlet;
/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 */
export declare abstract class BasePortalOutlet implements PortalOutlet {
    /** The portal currently attached to the host. */
    protected _attachedPortal: Portal<any> | null;
    /** A function that will permanently dispose this host. */
    private _disposeFn;
    /** Whether this host has already been permanently disposed. */
    private _isDisposed;
    /** Whether this host has an attached portal. */
    hasAttached(): boolean;
    attach<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attach<T>(portal: TemplatePortal<T>): EmbeddedViewRef<T>;
    attach(portal: any): any;
    abstract attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    abstract attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    readonly attachDomPortal: null | ((portal: DomPortal) => any);
    /** Detaches a previously attached portal. */
    detach(): void;
    /** Permanently dispose of this portal host. */
    dispose(): void;
    /** @docs-private */
    setDisposeFn(fn: () => void): void;
    private _invokeDisposeFn;
}
/**
 * @deprecated Use `BasePortalOutlet` instead.
 * @breaking-change 9.0.0
 */
export declare abstract class BasePortalHost extends BasePortalOutlet {
}
