/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata, __param } from "tslib";
import { Attribute, ChangeDetectorRef, ComponentFactoryResolver, Directive, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { ChildrenOutletContexts } from '../router_outlet_context';
import { ActivatedRoute } from '../router_state';
import { PRIMARY_OUTLET } from '../shared';
/**
 * @description
 *
 * Acts as a placeholder that Angular dynamically fills based on the current router state.
 *
 * Each outlet can have a unique name, determined by the optional `name` attribute.
 * The name cannot be set or changed dynamically. If not set, default value is "primary".
 *
 * ```
 * <router-outlet></router-outlet>
 * <router-outlet name='left'></router-outlet>
 * <router-outlet name='right'></router-outlet>
 * ```
 *
 * A router outlet emits an activate event when a new component is instantiated,
 * and a deactivate event when a component is destroyed.
 *
 * ```
 * <router-outlet
 *   (activate)='onActivate($event)'
 *   (deactivate)='onDeactivate($event)'></router-outlet>
 * ```
 * @ngModule RouterModule
 *
 * @publicApi
 */
var RouterOutlet = /** @class */ (function () {
    function RouterOutlet(parentContexts, location, resolver, name, changeDetector) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.activated = null;
        this._activatedRoute = null;
        this.activateEvents = new EventEmitter();
        this.deactivateEvents = new EventEmitter();
        this.name = name || PRIMARY_OUTLET;
        parentContexts.onChildOutletCreated(this.name, this);
    }
    RouterOutlet.prototype.ngOnDestroy = function () {
        this.parentContexts.onChildOutletDestroyed(this.name);
    };
    RouterOutlet.prototype.ngOnInit = function () {
        if (!this.activated) {
            // If the outlet was not instantiated at the time the route got activated we need to populate
            // the outlet when it is initialized (ie inside a NgIf)
            var context = this.parentContexts.getContext(this.name);
            if (context && context.route) {
                if (context.attachRef) {
                    // `attachRef` is populated when there is an existing component to mount
                    this.attach(context.attachRef, context.route);
                }
                else {
                    // otherwise the component defined in the configuration is created
                    this.activateWith(context.route, context.resolver || null);
                }
            }
        }
    };
    Object.defineProperty(RouterOutlet.prototype, "isActivated", {
        get: function () {
            return !!this.activated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "component", {
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return this.activated.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "activatedRoute", {
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return this._activatedRoute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "activatedRouteData", {
        get: function () {
            if (this._activatedRoute) {
                return this._activatedRoute.snapshot.data;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    RouterOutlet.prototype.detach = function () {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        this.location.detach();
        var cmp = this.activated;
        this.activated = null;
        this._activatedRoute = null;
        return cmp;
    };
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    RouterOutlet.prototype.attach = function (ref, activatedRoute) {
        this.activated = ref;
        this._activatedRoute = activatedRoute;
        this.location.insert(ref.hostView);
    };
    RouterOutlet.prototype.deactivate = function () {
        if (this.activated) {
            var c = this.component;
            this.activated.destroy();
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    };
    RouterOutlet.prototype.activateWith = function (activatedRoute, resolver) {
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this._activatedRoute = activatedRoute;
        var snapshot = activatedRoute._futureSnapshot;
        var component = snapshot.routeConfig.component;
        resolver = resolver || this.resolver;
        var factory = resolver.resolveComponentFactory(component);
        var childContexts = this.parentContexts.getOrCreateContext(this.name).children;
        var injector = new OutletInjector(activatedRoute, childContexts, this.location.injector);
        this.activated = this.location.createComponent(factory, this.location.length, injector);
        // Calling `markForCheck` to make sure we will run the change detection when the
        // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
        this.changeDetector.markForCheck();
        this.activateEvents.emit(this.activated.instance);
    };
    __decorate([
        Output('activate'),
        __metadata("design:type", Object)
    ], RouterOutlet.prototype, "activateEvents", void 0);
    __decorate([
        Output('deactivate'),
        __metadata("design:type", Object)
    ], RouterOutlet.prototype, "deactivateEvents", void 0);
    RouterOutlet = __decorate([
        Directive({ selector: 'router-outlet', exportAs: 'outlet' }),
        __param(3, Attribute('name')),
        __metadata("design:paramtypes", [ChildrenOutletContexts, ViewContainerRef,
            ComponentFactoryResolver, String, ChangeDetectorRef])
    ], RouterOutlet);
    return RouterOutlet;
}());
export { RouterOutlet };
var OutletInjector = /** @class */ (function () {
    function OutletInjector(route, childContexts, parent) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
    }
    OutletInjector.prototype.get = function (token, notFoundValue) {
        if (token === ActivatedRoute) {
            return this.route;
        }
        if (token === ChildrenOutletContexts) {
            return this.childContexts;
        }
        return this.parent.get(token, notFoundValue);
    };
    return OutletInjector;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3JvdXRlci9zcmMvZGlyZWN0aXZlcy9yb3V0ZXJfb3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUErQixNQUFNLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHbkwsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFFSDtJQVFFLHNCQUNZLGNBQXNDLEVBQVUsUUFBMEIsRUFDMUUsUUFBa0MsRUFBcUIsSUFBWSxFQUNuRSxjQUFpQztRQUZqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUMxRSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFWckMsY0FBUyxHQUEyQixJQUFJLENBQUM7UUFDekMsb0JBQWUsR0FBd0IsSUFBSSxDQUFDO1FBR2hDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBTS9ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLGNBQWMsQ0FBQztRQUNuQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsa0NBQVcsR0FB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QVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO1FBV1IsV0FBQSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7eUNBRHRDLHNCQUFzQixFQUFvQixnQkFBZ0I7WUFDaEUsd0JBQXdCLFVBQ2xCLGlCQUFpQjtPQVhsQyxZQUFZLENBMEd4QjtJQUFELG1CQUFDO0NBQUEsQUExR0QsSUEwR0M7U0ExR1ksWUFBWTtBQTRHekI7SUFDRSx3QkFDWSxLQUFxQixFQUFVLGFBQXFDLEVBQ3BFLE1BQWdCO1FBRGhCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXdCO1FBQ3BFLFdBQU0sR0FBTixNQUFNLENBQVU7SUFBRyxDQUFDO0lBRWhDLDRCQUFHLEdBQUgsVUFBSSxLQUFVLEVBQUUsYUFBbUI7UUFDakMsSUFBSSxLQUFLLEtBQUssY0FBYyxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjtRQUVELElBQUksS0FBSyxLQUFLLHNCQUFzQixFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QXR0cmlidXRlLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7RGF0YX0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7Q2hpbGRyZW5PdXRsZXRDb250ZXh0c30gZnJvbSAnLi4vcm91dGVyX291dGxldF9jb250ZXh0JztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gJy4uL3JvdXRlcl9zdGF0ZSc7XG5pbXBvcnQge1BSSU1BUllfT1VUTEVUfSBmcm9tICcuLi9zaGFyZWQnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIEFjdHMgYXMgYSBwbGFjZWhvbGRlciB0aGF0IEFuZ3VsYXIgZHluYW1pY2FsbHkgZmlsbHMgYmFzZWQgb24gdGhlIGN1cnJlbnQgcm91dGVyIHN0YXRlLlxuICpcbiAqIEVhY2ggb3V0bGV0IGNhbiBoYXZlIGEgdW5pcXVlIG5hbWUsIGRldGVybWluZWQgYnkgdGhlIG9wdGlvbmFsIGBuYW1lYCBhdHRyaWJ1dGUuXG4gKiBUaGUgbmFtZSBjYW5ub3QgYmUgc2V0IG9yIGNoYW5nZWQgZHluYW1pY2FsbHkuIElmIG5vdCBzZXQsIGRlZmF1bHQgdmFsdWUgaXMgXCJwcmltYXJ5XCIuXG4gKlxuICogYGBgXG4gKiA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gKiA8cm91dGVyLW91dGxldCBuYW1lPSdsZWZ0Jz48L3JvdXRlci1vdXRsZXQ+XG4gKiA8cm91dGVyLW91dGxldCBuYW1lPSdyaWdodCc+PC9yb3V0ZXItb3V0bGV0PlxuICogYGBgXG4gKlxuICogQSByb3V0ZXIgb3V0bGV0IGVtaXRzIGFuIGFjdGl2YXRlIGV2ZW50IHdoZW4gYSBuZXcgY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCxcbiAqIGFuZCBhIGRlYWN0aXZhdGUgZXZlbnQgd2hlbiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gKlxuICogYGBgXG4gKiA8cm91dGVyLW91dGxldFxuICogICAoYWN0aXZhdGUpPSdvbkFjdGl2YXRlKCRldmVudCknXG4gKiAgIChkZWFjdGl2YXRlKT0nb25EZWFjdGl2YXRlKCRldmVudCknPjwvcm91dGVyLW91dGxldD5cbiAqIGBgYFxuICogQG5nTW9kdWxlIFJvdXRlck1vZHVsZVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdyb3V0ZXItb3V0bGV0JywgZXhwb3J0QXM6ICdvdXRsZXQnfSlcbmV4cG9ydCBjbGFzcyBSb3V0ZXJPdXRsZXQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHByaXZhdGUgYWN0aXZhdGVkOiBDb21wb25lbnRSZWY8YW55PnxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlfG51bGwgPSBudWxsO1xuICBwcml2YXRlIG5hbWU6IHN0cmluZztcblxuICBAT3V0cHV0KCdhY3RpdmF0ZScpIGFjdGl2YXRlRXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2RlYWN0aXZhdGUnKSBkZWFjdGl2YXRlRXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHBhcmVudENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLCBwcml2YXRlIGxvY2F0aW9uOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBAQXR0cmlidXRlKCduYW1lJykgbmFtZTogc3RyaW5nLFxuICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lIHx8IFBSSU1BUllfT1VUTEVUO1xuICAgIHBhcmVudENvbnRleHRzLm9uQ2hpbGRPdXRsZXRDcmVhdGVkKHRoaXMubmFtZSwgdGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmVudENvbnRleHRzLm9uQ2hpbGRPdXRsZXREZXN0cm95ZWQodGhpcy5uYW1lKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hY3RpdmF0ZWQpIHtcbiAgICAgIC8vIElmIHRoZSBvdXRsZXQgd2FzIG5vdCBpbnN0YW50aWF0ZWQgYXQgdGhlIHRpbWUgdGhlIHJvdXRlIGdvdCBhY3RpdmF0ZWQgd2UgbmVlZCB0byBwb3B1bGF0ZVxuICAgICAgLy8gdGhlIG91dGxldCB3aGVuIGl0IGlzIGluaXRpYWxpemVkIChpZSBpbnNpZGUgYSBOZ0lmKVxuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMucGFyZW50Q29udGV4dHMuZ2V0Q29udGV4dCh0aGlzLm5hbWUpO1xuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5yb3V0ZSkge1xuICAgICAgICBpZiAoY29udGV4dC5hdHRhY2hSZWYpIHtcbiAgICAgICAgICAvLyBgYXR0YWNoUmVmYCBpcyBwb3B1bGF0ZWQgd2hlbiB0aGVyZSBpcyBhbiBleGlzdGluZyBjb21wb25lbnQgdG8gbW91bnRcbiAgICAgICAgICB0aGlzLmF0dGFjaChjb250ZXh0LmF0dGFjaFJlZiwgY29udGV4dC5yb3V0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZSBjb21wb25lbnQgZGVmaW5lZCBpbiB0aGUgY29uZmlndXJhdGlvbiBpcyBjcmVhdGVkXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZVdpdGgoY29udGV4dC5yb3V0ZSwgY29udGV4dC5yZXNvbHZlciB8fCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBpc0FjdGl2YXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmFjdGl2YXRlZDtcbiAgfVxuXG4gIGdldCBjb21wb25lbnQoKTogT2JqZWN0IHtcbiAgICBpZiAoIXRoaXMuYWN0aXZhdGVkKSB0aHJvdyBuZXcgRXJyb3IoJ091dGxldCBpcyBub3QgYWN0aXZhdGVkJyk7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZhdGVkLmluc3RhbmNlO1xuICB9XG5cbiAgZ2V0IGFjdGl2YXRlZFJvdXRlKCk6IEFjdGl2YXRlZFJvdXRlIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZhdGVkKSB0aHJvdyBuZXcgRXJyb3IoJ091dGxldCBpcyBub3QgYWN0aXZhdGVkJyk7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlZFJvdXRlIGFzIEFjdGl2YXRlZFJvdXRlO1xuICB9XG5cbiAgZ2V0IGFjdGl2YXRlZFJvdXRlRGF0YSgpOiBEYXRhIHtcbiAgICBpZiAodGhpcy5fYWN0aXZhdGVkUm91dGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5kYXRhO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGBSb3V0ZVJldXNlU3RyYXRlZ3lgIGluc3RydWN0cyB0byBkZXRhY2ggdGhlIHN1YnRyZWVcbiAgICovXG4gIGRldGFjaCgpOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgaWYgKCF0aGlzLmFjdGl2YXRlZCkgdGhyb3cgbmV3IEVycm9yKCdPdXRsZXQgaXMgbm90IGFjdGl2YXRlZCcpO1xuICAgIHRoaXMubG9jYXRpb24uZGV0YWNoKCk7XG4gICAgY29uc3QgY21wID0gdGhpcy5hY3RpdmF0ZWQ7XG4gICAgdGhpcy5hY3RpdmF0ZWQgPSBudWxsO1xuICAgIHRoaXMuX2FjdGl2YXRlZFJvdXRlID0gbnVsbDtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBgUm91dGVSZXVzZVN0cmF0ZWd5YCBpbnN0cnVjdHMgdG8gcmUtYXR0YWNoIGEgcHJldmlvdXNseSBkZXRhY2hlZCBzdWJ0cmVlXG4gICAqL1xuICBhdHRhY2gocmVmOiBDb21wb25lbnRSZWY8YW55PiwgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgdGhpcy5hY3RpdmF0ZWQgPSByZWY7XG4gICAgdGhpcy5fYWN0aXZhdGVkUm91dGUgPSBhY3RpdmF0ZWRSb3V0ZTtcbiAgICB0aGlzLmxvY2F0aW9uLmluc2VydChyZWYuaG9zdFZpZXcpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmF0ZWQpIHtcbiAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbXBvbmVudDtcbiAgICAgIHRoaXMuYWN0aXZhdGVkLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2YXRlZFJvdXRlID0gbnVsbDtcbiAgICAgIHRoaXMuZGVhY3RpdmF0ZUV2ZW50cy5lbWl0KGMpO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2YXRlV2l0aChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ8bnVsbCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZhdGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhY3RpdmF0ZSBhbiBhbHJlYWR5IGFjdGl2YXRlZCBvdXRsZXQnKTtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZhdGVkUm91dGUgPSBhY3RpdmF0ZWRSb3V0ZTtcbiAgICBjb25zdCBzbmFwc2hvdCA9IGFjdGl2YXRlZFJvdXRlLl9mdXR1cmVTbmFwc2hvdDtcbiAgICBjb25zdCBjb21wb25lbnQgPSA8YW55PnNuYXBzaG90LnJvdXRlQ29uZmlnIS5jb21wb25lbnQ7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlciB8fCB0aGlzLnJlc29sdmVyO1xuICAgIGNvbnN0IGZhY3RvcnkgPSByZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dHMgPSB0aGlzLnBhcmVudENvbnRleHRzLmdldE9yQ3JlYXRlQ29udGV4dCh0aGlzLm5hbWUpLmNoaWxkcmVuO1xuICAgIGNvbnN0IGluamVjdG9yID0gbmV3IE91dGxldEluamVjdG9yKGFjdGl2YXRlZFJvdXRlLCBjaGlsZENvbnRleHRzLCB0aGlzLmxvY2F0aW9uLmluamVjdG9yKTtcbiAgICB0aGlzLmFjdGl2YXRlZCA9IHRoaXMubG9jYXRpb24uY3JlYXRlQ29tcG9uZW50KGZhY3RvcnksIHRoaXMubG9jYXRpb24ubGVuZ3RoLCBpbmplY3Rvcik7XG4gICAgLy8gQ2FsbGluZyBgbWFya0ZvckNoZWNrYCB0byBtYWtlIHN1cmUgd2Ugd2lsbCBydW4gdGhlIGNoYW5nZSBkZXRlY3Rpb24gd2hlbiB0aGVcbiAgICAvLyBgUm91dGVyT3V0bGV0YCBpcyBpbnNpZGUgYSBgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoYCBjb21wb25lbnQuXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmFjdGl2YXRlRXZlbnRzLmVtaXQodGhpcy5hY3RpdmF0ZWQuaW5zdGFuY2UpO1xuICB9XG59XG5cbmNsYXNzIE91dGxldEluamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGNoaWxkQ29udGV4dHM6IENoaWxkcmVuT3V0bGV0Q29udGV4dHMsXG4gICAgICBwcml2YXRlIHBhcmVudDogSW5qZWN0b3IpIHt9XG5cbiAgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU/OiBhbnkpOiBhbnkge1xuICAgIGlmICh0b2tlbiA9PT0gQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlO1xuICAgIH1cblxuICAgIGlmICh0b2tlbiA9PT0gQ2hpbGRyZW5PdXRsZXRDb250ZXh0cykge1xuICAgICAgcmV0dXJuIHRoaXMuY2hpbGRDb250ZXh0cztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KHRva2VuLCBub3RGb3VuZFZhbHVlKTtcbiAgfVxufVxuIl19