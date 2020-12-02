import { __extends } from 'tslib';
import { ElementRef, Directive, TemplateRef, ViewContainerRef, EventEmitter, ComponentFactoryResolver, Inject, Output, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Throws an exception when attempting to attach a null portal to a host.
 * @docs-private
 */
function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * @docs-private
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * @docs-private
 */
function throwPortalOutletAlreadyDisposedError() {
    throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * @docs-private
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * @docs-private
 */
function throwNullPortalOutletError() {
    throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * @docs-private
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 */
var Portal = /** @class */ (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    Portal.prototype.attach = function (host) {
        if (host == null) {
            throwNullPortalOutletError();
        }
        if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return host.attach(this);
    };
    /** Detach this portal from its host */
    Portal.prototype.detach = function () {
        var host = this._attachedHost;
        if (host == null) {
            throwNoPortalAttachedError();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    Portal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = /** @class */ (function (_super) {
    __extends(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    return ComponentPortal;
}(Portal));
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
var TemplatePortal = /** @class */ (function (_super) {
    __extends(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef, context) {
        var _this = _super.call(this) || this;
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        _this.context = context;
        return _this;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    TemplatePortal.prototype.attach = function (host, context) {
        if (context === void 0) { context = this.context; }
        this.context = context;
        return _super.prototype.attach.call(this, host);
    };
    TemplatePortal.prototype.detach = function () {
        this.context = undefined;
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));
/**
 * A `DomPortal` is a portal whose DOM element will be taken from its current position
 * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
 * will be restored to its original position.
 */
var DomPortal = /** @class */ (function (_super) {
    __extends(DomPortal, _super);
    function DomPortal(element) {
        var _this = _super.call(this) || this;
        _this.element = element instanceof ElementRef ? element.nativeElement : element;
        return _this;
    }
    return DomPortal;
}(Portal));
/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 */
var BasePortalOutlet = /** @class */ (function () {
    function BasePortalOutlet() {
        /** Whether this host has already been permanently disposed. */
        this._isDisposed = false;
        // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.
        this.attachDomPortal = null;
    }
    /** Whether this host has an attached portal. */
    BasePortalOutlet.prototype.hasAttached = function () {
        return !!this._attachedPortal;
    };
    /** Attaches a portal. */
    BasePortalOutlet.prototype.attach = function (portal) {
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
    };
    /** Detaches a previously attached portal. */
    BasePortalOutlet.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    };
    /** Permanently dispose of this portal host. */
    BasePortalOutlet.prototype.dispose = function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    };
    /** @docs-private */
    BasePortalOutlet.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    BasePortalOutlet.prototype._invokeDisposeFn = function () {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    return BasePortalOutlet;
}());
/**
 * @deprecated Use `BasePortalOutlet` instead.
 * @breaking-change 9.0.0
 */
var BasePortalHost = /** @class */ (function (_super) {
    __extends(BasePortalHost, _super);
    function BasePortalHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BasePortalHost;
}(BasePortalOutlet));

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
var DomPortalOutlet = /** @class */ (function (_super) {
    __extends(DomPortalOutlet, _super);
    function DomPortalOutlet(
    /** Element into which the content is projected. */
    outletElement, _componentFactoryResolver, _appRef, _defaultInjector, 
    /**
     * @deprecated `_document` Parameter to be made required.
     * @breaking-change 10.0.0
     */
    _document) {
        var _this = _super.call(this) || this;
        _this.outletElement = outletElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        _this._defaultInjector = _defaultInjector;
        /**
         * Attaches a DOM portal by transferring its content into the outlet.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        _this.attachDomPortal = function (portal) {
            // @breaking-change 10.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this._document) {
                throw Error('Cannot attach DOM portal without _document constructor parameter');
            }
            var element = portal.element;
            if (!element.parentNode) {
                throw Error('DOM portal content must be attached to a parent node.');
            }
            // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.
            var anchorNode = _this._document.createComment('dom-portal');
            element.parentNode.insertBefore(anchorNode, element);
            _this.outletElement.appendChild(element);
            _super.prototype.setDisposeFn.call(_this, function () {
                // We can't use `replaceWith` here because IE doesn't support it.
                if (anchorNode.parentNode) {
                    anchorNode.parentNode.replaceChild(element, anchorNode);
                }
            });
        };
        _this._document = _document;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    DomPortalOutlet.prototype.attachComponentPortal = function (portal) {
        var _this = this;
        var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        var componentFactory = resolver.resolveComponentFactory(portal.component);
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    DomPortalOutlet.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        var viewContainer = portal.viewContainerRef;
        var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
        viewRef.detectChanges();
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalOutlet the view can be added everywhere in the DOM
        // (e.g Overlay Container) To move the view to the specified host element. We just
        // re-append the existing root nodes.
        viewRef.rootNodes.forEach(function (rootNode) { return _this.outletElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            var index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return viewRef;
    };
    /**
     * Clears out a portal from the DOM.
     */
    DomPortalOutlet.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
        }
    };
    /** Gets the root HTMLElement for an instantiated component. */
    DomPortalOutlet.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalOutlet;
}(BasePortalOutlet));
/**
 * @deprecated Use `DomPortalOutlet` instead.
 * @breaking-change 9.0.0
 */
var DomPortalHost = /** @class */ (function (_super) {
    __extends(DomPortalHost, _super);
    function DomPortalHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DomPortalHost;
}(DomPortalOutlet));

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
var CdkPortal = /** @class */ (function (_super) {
    __extends(CdkPortal, _super);
    function CdkPortal(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    CdkPortal.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkPortal]',
                    exportAs: 'cdkPortal',
                },] }
    ];
    /** @nocollapse */
    CdkPortal.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return CdkPortal;
}(TemplatePortal));
/**
 * @deprecated Use `CdkPortal` instead.
 * @breaking-change 9.0.0
 */
var TemplatePortalDirective = /** @class */ (function (_super) {
    __extends(TemplatePortalDirective, _super);
    function TemplatePortalDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplatePortalDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cdk-portal], [portal]',
                    exportAs: 'cdkPortal',
                    providers: [{
                            provide: CdkPortal,
                            useExisting: TemplatePortalDirective
                        }]
                },] }
    ];
    return TemplatePortalDirective;
}(CdkPortal));
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
var CdkPortalOutlet = /** @class */ (function (_super) {
    __extends(CdkPortalOutlet, _super);
    function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef, 
    /**
     * @deprecated `_document` parameter to be made required.
     * @breaking-change 9.0.0
     */
    _document) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        /** Whether the portal component is initialized. */
        _this._isInitialized = false;
        /** Emits when a portal is attached to the outlet. */
        _this.attached = new EventEmitter();
        /**
         * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        _this.attachDomPortal = function (portal) {
            // @breaking-change 9.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this._document) {
                throw Error('Cannot attach DOM portal without _document constructor parameter');
            }
            var element = portal.element;
            if (!element.parentNode) {
                throw Error('DOM portal content must be attached to a parent node.');
            }
            // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.
            var anchorNode = _this._document.createComment('dom-portal');
            portal.setAttachedHost(_this);
            element.parentNode.insertBefore(anchorNode, element);
            _this._getRootNode().appendChild(element);
            _super.prototype.setDisposeFn.call(_this, function () {
                if (anchorNode.parentNode) {
                    anchorNode.parentNode.replaceChild(element, anchorNode);
                }
            });
        };
        _this._document = _document;
        return _this;
    }
    Object.defineProperty(CdkPortalOutlet.prototype, "portal", {
        /** Portal associated with the Portal outlet. */
        get: function () {
            return this._attachedPortal;
        },
        set: function (portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._attachedPortal = portal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "attachedRef", {
        /** Component or view reference that is attached to the portal. */
        get: function () {
            return this._attachedRef;
        },
        enumerable: true,
        configurable: true
    });
    CdkPortalOutlet.prototype.ngOnInit = function () {
        this._isInitialized = true;
    };
    CdkPortalOutlet.prototype.ngOnDestroy = function () {
        _super.prototype.dispose.call(this);
        this._attachedPortal = null;
        this._attachedRef = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    CdkPortalOutlet.prototype.attachComponentPortal = function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.
        var viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        var componentFactory = resolver.resolveComponentFactory(portal.component);
        var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);
        // If we're using a view container that's different from the injected one (e.g. when the portal
        // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
        // inside of the alternate view container.
        if (viewContainerRef !== this._viewContainerRef) {
            this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
        }
        _super.prototype.setDisposeFn.call(this, function () { return ref.destroy(); });
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortalHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    CdkPortalOutlet.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
        _super.prototype.setDisposeFn.call(this, function () { return _this._viewContainerRef.clear(); });
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    };
    /** Gets the root node of the portal outlet. */
    CdkPortalOutlet.prototype._getRootNode = function () {
        var nativeElement = this._viewContainerRef.element.nativeElement;
        // The directive could be set on a template which will result in a comment
        // node being the root. Use the comment's parent node if that is the case.
        return (nativeElement.nodeType === nativeElement.ELEMENT_NODE ?
            nativeElement : nativeElement.parentNode);
    };
    CdkPortalOutlet.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkPortalOutlet]',
                    exportAs: 'cdkPortalOutlet',
                    inputs: ['portal: cdkPortalOutlet']
                },] }
    ];
    /** @nocollapse */
    CdkPortalOutlet.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    CdkPortalOutlet.propDecorators = {
        attached: [{ type: Output }]
    };
    return CdkPortalOutlet;
}(BasePortalOutlet));
/**
 * @deprecated Use `CdkPortalOutlet` instead.
 * @breaking-change 9.0.0
 */
var PortalHostDirective = /** @class */ (function (_super) {
    __extends(PortalHostDirective, _super);
    function PortalHostDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortalHostDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkPortalHost], [portalHost]',
                    exportAs: 'cdkPortalHost',
                    inputs: ['portal: cdkPortalHost'],
                    providers: [{
                            provide: CdkPortalOutlet,
                            useExisting: PortalHostDirective
                        }]
                },] }
    ];
    return PortalHostDirective;
}(CdkPortalOutlet));
var PortalModule = /** @class */ (function () {
    function PortalModule() {
    }
    PortalModule.decorators = [
        { type: NgModule, args: [{
                    exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
                    declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
                },] }
    ];
    return PortalModule;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * @docs-private
 */
var PortalInjector = /** @class */ (function () {
    function PortalInjector(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    PortalInjector.prototype.get = function (token, notFoundValue) {
        var value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return PortalInjector;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BasePortalHost, BasePortalOutlet, CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortal, DomPortalHost, DomPortalOutlet, Portal, PortalHostDirective, PortalInjector, PortalModule, TemplatePortal, TemplatePortalDirective };
//# sourceMappingURL=portal.js.map
