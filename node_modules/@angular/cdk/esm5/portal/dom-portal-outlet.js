/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { BasePortalOutlet } from './portal';
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
export { DomPortalOutlet };
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
export { DomPortalHost };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLXBvcnRhbC1vdXRsZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3BvcnRhbC9kb20tcG9ydGFsLW91dGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBU0gsT0FBTyxFQUFDLGdCQUFnQixFQUE2QyxNQUFNLFVBQVUsQ0FBQztBQUd0Rjs7O0dBR0c7QUFDSDtJQUFxQyxtQ0FBZ0I7SUFHbkQ7SUFDSSxtREFBbUQ7SUFDNUMsYUFBc0IsRUFDckIseUJBQW1ELEVBQ25ELE9BQXVCLEVBQ3ZCLGdCQUEwQjtJQUVsQzs7O09BR0c7SUFDSCxTQUFlO1FBWG5CLFlBWUUsaUJBQU8sU0FFUjtRQVpVLG1CQUFhLEdBQWIsYUFBYSxDQUFTO1FBQ3JCLCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsYUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFVO1FBMEV0Qzs7Ozs7V0FLRztRQUNILHFCQUFlLEdBQUcsVUFBQyxNQUFpQjtZQUNsQywwREFBMEQ7WUFDMUQsaURBQWlEO1lBQ2pELElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixNQUFNLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO2FBQ2pGO1lBRUQsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDdkIsTUFBTSxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQzthQUN0RTtZQUVELHlEQUF5RDtZQUN6RCxzREFBc0Q7WUFDdEQsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFOUQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxD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QUNILENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSiwyQ0FBMkM7UUFDM0MsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQW1DRDs7T0FFRztJQUNILGlDQUFPLEdBQVA7UUFDRSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQztJQUVELCtEQUErRDtJQUN2RCwrQ0FBcUIsR0FBN0IsVUFBOEIsWUFBK0I7UUFDM0QsT0FBUSxZQUFZLENBQUMsUUFBaUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFnQixDQUFDO0lBQ3JGLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFqSUQsQ0FBcUMsZ0JBQWdCLEdBaUlwRDs7QUFFRDs7O0dBR0c7QUFDSDtJQUFtQyxpQ0FBZTtJQUFsRDs7SUFBb0QsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUFyRCxDQUFtQyxlQUFlLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQXBwbGljYXRpb25SZWYsXG4gIEluamVjdG9yLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZVBvcnRhbE91dGxldCwgQ29tcG9uZW50UG9ydGFsLCBUZW1wbGF0ZVBvcnRhbCwgRG9tUG9ydGFsfSBmcm9tICcuL3BvcnRhbCc7XG5cblxuLyoqXG4gKiBBIFBvcnRhbE91dGxldCBmb3IgYXR0YWNoaW5nIHBvcnRhbHMgdG8gYW4gYXJiaXRyYXJ5IERPTSBlbGVtZW50IG91dHNpZGUgb2YgdGhlIEFuZ3VsYXJcbiAqIGFwcGxpY2F0aW9uIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEb21Qb3J0YWxPdXRsZXQgZXh0ZW5kcyBCYXNlUG9ydGFsT3V0bGV0IHtcbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEVsZW1lbnQgaW50byB3aGljaCB0aGUgY29udGVudCBpcyBwcm9qZWN0ZWQuICovXG4gICAgICBwdWJsaWMgb3V0bGV0RWxlbWVudDogRWxlbWVudCxcbiAgICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICAgIHByaXZhdGUgX2RlZmF1bHRJbmplY3RvcjogSW5qZWN0b3IsXG5cbiAgICAgIC8qKlxuICAgICAgICogQGRlcHJlY2F0ZWQgYF9kb2N1bWVudGAgUGFyYW1ldGVyIHRvIGJlIG1hZGUgcmVxdWlyZWQuXG4gICAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAgICovXG4gICAgICBfZG9jdW1lbnQ/OiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2RvY3VtZW50ID0gX2RvY3VtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaCB0aGUgZ2l2ZW4gQ29tcG9uZW50UG9ydGFsIHRvIERPTSBlbGVtZW50IHVzaW5nIHRoZSBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIuXG4gICAqIEBwYXJhbSBwb3J0YWwgUG9ydGFsIHRvIGJlIGF0dGFjaGVkXG4gICAqIEByZXR1cm5zIFJlZmVyZW5jZSB0byB0aGUgY3JlYXRlZCBjb21wb25lbnQuXG4gICAqL1xuICBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4pOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIGNvbnN0IHJlc29sdmVyID0gcG9ydGFsLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB8fCB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHBvcnRhbC5jb21wb25lbnQpO1xuICAgIGxldCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjtcblxuICAgIC8vIElmIHRoZSBwb3J0YWwgc3BlY2lmaWVzIGEgVmlld0NvbnRhaW5lclJlZiwgd2Ugd2lsbCB1c2UgdGhhdCBhcyB0aGUgYXR0YWNobWVudCBwb2ludFxuICAgIC8vIGZvciB0aGUgY29tcG9uZW50IChpbiB0ZXJtcyBvZiBBbmd1bGFyJ3MgY29tcG9uZW50IHRyZWUsIG5vdCByZW5kZXJpbmcpLlxuICAgIC8vIFdoZW4gdGhlIFZpZXdDb250YWluZXJSZWYgaXMgbWlzc2luZywgd2UgdXNlIHRoZSBmYWN0b3J5IHRvIGNyZWF0ZSB0aGUgY29tcG9uZW50IGRpcmVjdGx5XG4gICAgLy8gYW5kIHRoZW4gbWFudWFsbHkgYXR0YWNoIHRoZSB2aWV3IHRvIHRoZSBhcHBsaWNhdGlvbi5cbiAgICBpZiAocG9ydGFsLnZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgIGNvbXBvbmVudFJlZiA9IHBvcnRhbC52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgICBjb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgIHBvcnRhbC52aWV3Q29udGFpbmVyUmVmLmxlbmd0aCxcbiAgICAgICAgICBwb3J0YWwuaW5qZWN0b3IgfHwgcG9ydGFsLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IpO1xuXG4gICAgICB0aGlzLnNldERpc3Bvc2VGbigoKSA9PiBjb21wb25lbnRSZWYuZGVzdHJveSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50UmVmID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUocG9ydGFsLmluamVjdG9yIHx8IHRoaXMuX2RlZmF1bHRJbmplY3Rvcik7XG4gICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5zZXREaXNwb3NlRm4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEF0IHRoaXMgcG9pbnQgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBpbnN0YW50aWF0ZWQsIHNvIHdlIG1vdmUgaXQgdG8gdGhlIGxvY2F0aW9uIGluIHRoZSBET01cbiAgICAvLyB3aGVyZSB3ZSB3YW50IGl0IHRvIGJlIHJlbmRlcmVkLlxuICAgIHRoaXMub3V0bGV0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9nZXRDb21wb25lbnRSb290Tm9kZShjb21wb25lbnRSZWYpKTtcblxuICAgIHJldHVybiBjb21wb25lbnRSZWY7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgYSB0ZW1wbGF0ZSBwb3J0YWwgdG8gdGhlIERPTSBhcyBhbiBlbWJlZGRlZCB2aWV3LlxuICAgKiBAcGFyYW0gcG9ydGFsIFBvcnRhbCB0byBiZSBhdHRhY2hlZC5cbiAgICogQHJldHVybnMgUmVmZXJlbmNlIHRvIHRoZSBjcmVhdGVkIGVtYmVkZGVkIHZpZXcuXG4gICAqL1xuICBhdHRhY2hUZW1wbGF0ZVBvcnRhbDxDPihwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPEM+KTogRW1iZWRkZWRWaWV3UmVmPEM+IHtcbiAgICBsZXQgdmlld0NvbnRhaW5lciA9IHBvcnRhbC52aWV3Q29udGFpbmVyUmVmO1xuICAgIGxldCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcocG9ydGFsLnRlbXBsYXRlUmVmLCBwb3J0YWwuY29udGV4dCk7XG4gICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAvLyBUaGUgbWV0aG9kIGBjcmVhdGVFbWJlZGRlZFZpZXdgIHdpbGwgYWRkIHRoZSB2aWV3IGFzIGEgY2hpbGQgb2YgdGhlIHZpZXdDb250YWluZXIuXG4gICAgLy8gQnV0IGZvciB0aGUgRG9tUG9ydGFsT3V0bGV0IHRoZSB2aWV3IGNhbiBiZSBhZGRlZCBldmVyeXdoZXJlIGluIHRoZSBET01cbiAgICAvLyAoZS5nIE92ZXJsYXkgQ29udGFpbmVyKSBUbyBtb3ZlIHRoZSB2aWV3IHRvIHRoZSBzcGVjaWZpZWQgaG9zdCBlbGVtZW50LiBXZSBqdXN0XG4gICAgLy8gcmUtYXBwZW5kIHRoZSBleGlzdGluZyByb290IG5vZGVzLlxuICAgIHZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2gocm9vdE5vZGUgPT4gdGhpcy5vdXRsZXRFbGVtZW50LmFwcGVuZENoaWxkKHJvb3ROb2RlKSk7XG5cbiAgICB0aGlzLnNldERpc3Bvc2VGbigoKCkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gdmlld0NvbnRhaW5lci5pbmRleE9mKHZpZXdSZWYpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB2aWV3Q29udGFpbmVyLnJlbW92ZShpbmRleCk7XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgLy8gVE9ETyhqZWxib3Vybik6IFJldHVybiBsb2NhbHMgZnJvbSB2aWV3LlxuICAgIHJldHVybiB2aWV3UmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIGEgRE9NIHBvcnRhbCBieSB0cmFuc2ZlcnJpbmcgaXRzIGNvbnRlbnQgaW50byB0aGUgb3V0bGV0LlxuICAgKiBAcGFyYW0gcG9ydGFsIFBvcnRhbCB0byBiZSBhdHRhY2hlZC5cbiAgICogQGRlcHJlY2F0ZWQgVG8gYmUgdHVybmVkIGludG8gYSBtZXRob2QuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAqL1xuICBhdHRhY2hEb21Qb3J0YWwgPSAocG9ydGFsOiBEb21Qb3J0YWwpID0+IHtcbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMCBSZW1vdmUgY2hlY2sgYW5kIGVycm9yIG9uY2UgdGhlXG4gICAgLy8gYF9kb2N1bWVudGAgY29uc3RydWN0b3IgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgIGlmICghdGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRocm93IEVycm9yKCdDYW5ub3QgYXR0YWNoIERPTSBwb3J0YWwgd2l0aG91dCBfZG9jdW1lbnQgY29uc3RydWN0b3IgcGFyYW1ldGVyJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHBvcnRhbC5lbGVtZW50O1xuICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICB0aHJvdyBFcnJvcignRE9NIHBvcnRhbCBjb250ZW50IG11c3QgYmUgYXR0YWNoZWQgdG8gYSBwYXJlbnQgbm9kZS4nKTtcbiAgICB9XG5cbiAgICAvLyBBbmNob3IgdXNlZCB0byBzYXZlIHRoZSBlbGVtZW50J3MgcHJldmlvdXMgcG9zaXRpb24gc29cbiAgICAvLyB0aGF0IHdlIGNhbiByZXN0b3JlIGl0IHdoZW4gdGhlIHBvcnRhbCBpcyBkZXRhY2hlZC5cbiAgICBjb25zdCBhbmNob3JOb2RlID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZG9tLXBvcnRhbCcpO1xuXG4gICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhbmNob3JOb2RlLCBlbGVtZW50KTtcbiAgICB0aGlzLm91dGxldEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICBzdXBlci5zZXREaXNwb3NlRm4oKCkgPT4ge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIGByZXBsYWNlV2l0aGAgaGVyZSBiZWNhdXNlIElFIGRvZXNuJ3Qgc3VwcG9ydCBpdC5cbiAgICAgIGlmIChhbmNob3JOb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgYW5jaG9yTm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbGVtZW50LCBhbmNob3JOb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgb3V0IGEgcG9ydGFsIGZyb20gdGhlIERPTS5cbiAgICovXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIGlmICh0aGlzLm91dGxldEVsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLm91dGxldEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm91dGxldEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSByb290IEhUTUxFbGVtZW50IGZvciBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50LiAqL1xuICBwcml2YXRlIF9nZXRDb21wb25lbnRSb290Tm9kZShjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYERvbVBvcnRhbE91dGxldGAgaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgOS4wLjBcbiAqL1xuZXhwb3J0IGNsYXNzIERvbVBvcnRhbEhvc3QgZXh0ZW5kcyBEb21Qb3J0YWxPdXRsZXQge31cbiJdfQ==