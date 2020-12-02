/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/testing/src/resolvers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component, Directive, NgModule, Pipe, ɵReflectionCapabilities as ReflectionCapabilities } from '@angular/core';
import { MetadataOverrider } from './metadata_overrider';
/** @type {?} */
const reflection = new ReflectionCapabilities();
/**
 * Base interface to resolve `\@Component`, `\@Directive`, `\@Pipe` and `\@NgModule`.
 * @record
 * @template T
 */
export function Resolver() { }
if (false) {
    /**
     * @param {?} type
     * @param {?} override
     * @return {?}
     */
    Resolver.prototype.addOverride = function (type, override) { };
    /**
     * @param {?} overrides
     * @return {?}
     */
    Resolver.prototype.setOverrides = function (overrides) { };
    /**
     * @param {?} type
     * @return {?}
     */
    Resolver.prototype.resolve = function (type) { };
}
/**
 * Allows to override ivy metadata for tests (via the `TestBed`).
 * @abstract
 * @template T
 */
class OverrideResolver {
    constructor() {
        this.overrides = new Map();
        this.resolved = new Map();
    }
    /**
     * @param {?} type
     * @param {?} override
     * @return {?}
     */
    addOverride(type, override) {
        /** @type {?} */
        const overrides = this.overrides.get(type) || [];
        overrides.push(override);
        this.overrides.set(type, overrides);
        this.resolved.delete(type);
    }
    /**
     * @param {?} overrides
     * @return {?}
     */
    setOverrides(overrides) {
        this.overrides.clear();
        overrides.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ([type, override]) => {
            this.addOverride(type, override);
        }));
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getAnnotation(type) {
        /** @type {?} */
        const annotations = reflection.annotations(type);
        // Try to find the nearest known Type annotation and make sure that this annotation is an
        // instance of the type we are looking for, so we can use it for resolution. Note: there might
        // be multiple known annotations found due to the fact that Components can extend Directives (so
        // both Directive and Component annotations would be present), so we always check if the known
        // annotation has the right type.
        for (let i = annotations.length - 1; i >= 0; i--) {
            /** @type {?} */
            const annotation = annotations[i];
            /** @type {?} */
            const isKnownType = annotation instanceof Directive || annotation instanceof Component ||
                annotation instanceof Pipe || annotation instanceof NgModule;
            if (isKnownType) {
                return annotation instanceof this.type ? annotation : null;
            }
        }
        return null;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    resolve(type) {
        /** @type {?} */
        let resolved = this.resolved.get(type) || null;
        if (!resolved) {
            resolved = this.getAnnotation(type);
            if (resolved) {
                /** @type {?} */
                const overrides = this.overrides.get(type);
                if (overrides) {
                    /** @type {?} */
                    const overrider = new MetadataOverrider();
                    overrides.forEach((/**
                     * @param {?} override
                     * @return {?}
                     */
                    override => {
                        resolved = overrider.overrideMetadata(this.type, (/** @type {?} */ (resolved)), override);
                    }));
                }
            }
            this.resolved.set(type, resolved);
        }
        return resolved;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    OverrideResolver.prototype.overrides;
    /**
     * @type {?}
     * @private
     */
    OverrideResolver.prototype.resolved;
    /**
     * @abstract
     * @return {?}
     */
    OverrideResolver.prototype.type = function () { };
}
export class DirectiveResolver extends OverrideResolver {
    /**
     * @return {?}
     */
    get type() {
        return Directive;
    }
}
export class ComponentResolver extends OverrideResolver {
    /**
     * @return {?}
     */
    get type() {
        return Component;
    }
}
export class PipeResolver extends OverrideResolver {
    /**
     * @return {?}
     */
    get type() {
        return Pipe;
    }
}
export class NgModuleResolver extends OverrideResolver {
    /**
     * @return {?}
     */
    get type() {
        return NgModule;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS90ZXN0aW5nL3NyYy9yZXNvbHZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBUSx1QkFBdUIsSUFBSSxzQkFBc0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUc1SCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7TUFFakQsVUFBVSxHQUFHLElBQUksc0JBQXNCLEVBQUU7Ozs7OztBQUsvQyw4QkFJQzs7Ozs7OztJQUhDLCtEQUFrRTs7Ozs7SUFDbEUsMkRBQXVFOzs7OztJQUN2RSxpREFBaUM7Ozs7Ozs7QUFNbkMsTUFBZSxnQkFBZ0I7SUFBL0I7UUFDVSxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQW9DLENBQUM7UUFDeEQsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFxQixDQUFDO0lBdURsRCxDQUFDOzs7Ozs7SUFuREMsV0FBVyxDQUFDLElBQWUsRUFBRSxRQUE2Qjs7Y0FDbEQsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDaEQsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsU0FBa0Q7UUFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixTQUFTLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQWU7O2NBQ3JCLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNoRCx5RkFBeUY7UUFDekYsOEZBQThGO1FBQzlGLGdHQUFnRztRQUNoRyw4RkFBOEY7UUFDOUYsaUNBQWlDO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQzFDLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDOztrQkFDM0IsV0FBVyxHQUFHLFVBQVUsWUFBWSxTQUFTLElBQUksVUFBVSxZQUFZLFNBQVM7Z0JBQ2xGLFVBQVUsWUFBWSxJQUFJLElBQUksVUFBVSxZQUFZLFFBQVE7WUFDaEUsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsT0FBTyxVQUFVLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDNUQ7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBZTs7WUFDakIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUk7UUFFOUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksUUFBUSxFQUFFOztzQkFDTixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxJQUFJLFNBQVMsRUFBRTs7MEJBQ1AsU0FBUyxHQUFHLElBQUksaUJBQWlCLEVBQUU7b0JBQ3pDLFNBQVMsQ0FBQyxPQUFPOzs7O29CQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUMzQixRQUFRLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQUEsUUFBUSxFQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ3hFLENBQUMsRUFBQyxDQUFDO2lCQUNKO2FBQ0Y7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkM7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7Ozs7OztJQXhEQyxxQ0FBZ0U7Ozs7O0lBQ2hFLG9DQUFnRDs7Ozs7SUFFaEQsa0RBQXlCOztBQXdEM0IsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUEyQjs7OztJQUNoRSxJQUFJLElBQUk7UUFDTixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZ0JBQTJCOzs7O0lBQ2hFLElBQUksSUFBSTtRQUNOLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxZQUFhLFNBQVEsZ0JBQXNCOzs7O0lBQ3RELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUEwQjs7OztJQUM5RCxJQUFJLElBQUk7UUFDTixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBEaXJlY3RpdmUsIE5nTW9kdWxlLCBQaXBlLCBUeXBlLCDJtVJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgYXMgUmVmbGVjdGlvbkNhcGFiaWxpdGllc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TWV0YWRhdGFPdmVycmlkZX0gZnJvbSAnLi9tZXRhZGF0YV9vdmVycmlkZSc7XG5pbXBvcnQge01ldGFkYXRhT3ZlcnJpZGVyfSBmcm9tICcuL21ldGFkYXRhX292ZXJyaWRlcic7XG5cbmNvbnN0IHJlZmxlY3Rpb24gPSBuZXcgUmVmbGVjdGlvbkNhcGFiaWxpdGllcygpO1xuXG4vKipcbiAqIEJhc2UgaW50ZXJmYWNlIHRvIHJlc29sdmUgYEBDb21wb25lbnRgLCBgQERpcmVjdGl2ZWAsIGBAUGlwZWAgYW5kIGBATmdNb2R1bGVgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc29sdmVyPFQ+IHtcbiAgYWRkT3ZlcnJpZGUodHlwZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxUPik6IHZvaWQ7XG4gIHNldE92ZXJyaWRlcyhvdmVycmlkZXM6IEFycmF5PFtUeXBlPGFueT4sIE1ldGFkYXRhT3ZlcnJpZGU8VD5dPik6IHZvaWQ7XG4gIHJlc29sdmUodHlwZTogVHlwZTxhbnk+KTogVHxudWxsO1xufVxuXG4vKipcbiAqIEFsbG93cyB0byBvdmVycmlkZSBpdnkgbWV0YWRhdGEgZm9yIHRlc3RzICh2aWEgdGhlIGBUZXN0QmVkYCkuXG4gKi9cbmFic3RyYWN0IGNsYXNzIE92ZXJyaWRlUmVzb2x2ZXI8VD4gaW1wbGVtZW50cyBSZXNvbHZlcjxUPiB7XG4gIHByaXZhdGUgb3ZlcnJpZGVzID0gbmV3IE1hcDxUeXBlPGFueT4sIE1ldGFkYXRhT3ZlcnJpZGU8VD5bXT4oKTtcbiAgcHJpdmF0ZSByZXNvbHZlZCA9IG5ldyBNYXA8VHlwZTxhbnk+LCBUfG51bGw+KCk7XG5cbiAgYWJzdHJhY3QgZ2V0IHR5cGUoKTogYW55O1xuXG4gIGFkZE92ZXJyaWRlKHR5cGU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8VD4pIHtcbiAgICBjb25zdCBvdmVycmlkZXMgPSB0aGlzLm92ZXJyaWRlcy5nZXQodHlwZSkgfHwgW107XG4gICAgb3ZlcnJpZGVzLnB1c2gob3ZlcnJpZGUpO1xuICAgIHRoaXMub3ZlcnJpZGVzLnNldCh0eXBlLCBvdmVycmlkZXMpO1xuICAgIHRoaXMucmVzb2x2ZWQuZGVsZXRlKHR5cGUpO1xuICB9XG5cbiAgc2V0T3ZlcnJpZGVzKG92ZXJyaWRlczogQXJyYXk8W1R5cGU8YW55PiwgTWV0YWRhdGFPdmVycmlkZTxUPl0+KSB7XG4gICAgdGhpcy5vdmVycmlkZXMuY2xlYXIoKTtcbiAgICBvdmVycmlkZXMuZm9yRWFjaCgoW3R5cGUsIG92ZXJyaWRlXSkgPT4ge1xuICAgICAgdGhpcy5hZGRPdmVycmlkZSh0eXBlLCBvdmVycmlkZSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbm5vdGF0aW9uKHR5cGU6IFR5cGU8YW55Pik6IFR8bnVsbCB7XG4gICAgY29uc3QgYW5ub3RhdGlvbnMgPSByZWZsZWN0aW9uLmFubm90YXRpb25zKHR5cGUpO1xuICAgIC8vIFRyeSB0byBmaW5kIHRoZSBuZWFyZXN0IGtub3duIFR5cGUgYW5ub3RhdGlvbiBhbmQgbWFrZSBzdXJlIHRoYXQgdGhpcyBhbm5vdGF0aW9uIGlzIGFuXG4gICAgLy8gaW5zdGFuY2Ugb2YgdGhlIHR5cGUgd2UgYXJlIGxvb2tpbmcgZm9yLCBzbyB3ZSBjYW4gdXNlIGl0IGZvciByZXNvbHV0aW9uLiBOb3RlOiB0aGVyZSBtaWdodFxuICAgIC8vIGJlIG11bHRpcGxlIGtub3duIGFubm90YXRpb25zIGZvdW5kIGR1ZSB0byB0aGUgZmFjdCB0aGF0IENvbXBvbmVudHMgY2FuIGV4dGVuZCBEaXJlY3RpdmVzIChzb1xuICAgIC8vIGJvdGggRGlyZWN0aXZlIGFuZCBDb21wb25lbnQgYW5ub3RhdGlvbnMgd291bGQgYmUgcHJlc2VudCksIHNvIHdlIGFsd2F5cyBjaGVjayBpZiB0aGUga25vd25cbiAgICAvLyBhbm5vdGF0aW9uIGhhcyB0aGUgcmlnaHQgdHlwZS5cbiAgICBmb3IgKGxldCBpID0gYW5ub3RhdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGFubm90YXRpb24gPSBhbm5vdGF0aW9uc1tpXTtcbiAgICAgIGNvbnN0IGlzS25vd25UeXBlID0gYW5ub3RhdGlvbiBpbnN0YW5jZW9mIERpcmVjdGl2ZSB8fCBhbm5vdGF0aW9uIGluc3RhbmNlb2YgQ29tcG9uZW50IHx8XG4gICAgICAgICAgYW5ub3RhdGlvbiBpbnN0YW5jZW9mIFBpcGUgfHwgYW5ub3RhdGlvbiBpbnN0YW5jZW9mIE5nTW9kdWxlO1xuICAgICAgaWYgKGlzS25vd25UeXBlKSB7XG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9uIGluc3RhbmNlb2YgdGhpcy50eXBlID8gYW5ub3RhdGlvbiA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVzb2x2ZSh0eXBlOiBUeXBlPGFueT4pOiBUfG51bGwge1xuICAgIGxldCByZXNvbHZlZCA9IHRoaXMucmVzb2x2ZWQuZ2V0KHR5cGUpIHx8IG51bGw7XG5cbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICByZXNvbHZlZCA9IHRoaXMuZ2V0QW5ub3RhdGlvbih0eXBlKTtcbiAgICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICBjb25zdCBvdmVycmlkZXMgPSB0aGlzLm92ZXJyaWRlcy5nZXQodHlwZSk7XG4gICAgICAgIGlmIChvdmVycmlkZXMpIHtcbiAgICAgICAgICBjb25zdCBvdmVycmlkZXIgPSBuZXcgTWV0YWRhdGFPdmVycmlkZXIoKTtcbiAgICAgICAgICBvdmVycmlkZXMuZm9yRWFjaChvdmVycmlkZSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IG92ZXJyaWRlci5vdmVycmlkZU1ldGFkYXRhKHRoaXMudHlwZSwgcmVzb2x2ZWQhLCBvdmVycmlkZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucmVzb2x2ZWQuc2V0KHR5cGUsIHJlc29sdmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlUmVzb2x2ZXIgZXh0ZW5kcyBPdmVycmlkZVJlc29sdmVyPERpcmVjdGl2ZT4ge1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gRGlyZWN0aXZlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRSZXNvbHZlciBleHRlbmRzIE92ZXJyaWRlUmVzb2x2ZXI8Q29tcG9uZW50PiB7XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBpcGVSZXNvbHZlciBleHRlbmRzIE92ZXJyaWRlUmVzb2x2ZXI8UGlwZT4ge1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gUGlwZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmdNb2R1bGVSZXNvbHZlciBleHRlbmRzIE92ZXJyaWRlUmVzb2x2ZXI8TmdNb2R1bGU+IHtcbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIE5nTW9kdWxlO1xuICB9XG59XG4iXX0=