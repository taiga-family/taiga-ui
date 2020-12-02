/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/router_outlet_context.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Store contextual information about a `RouterOutlet`
 *
 * \@publicApi
 */
export class OutletContext {
    constructor() {
        this.outlet = null;
        this.route = null;
        this.resolver = null;
        this.children = new ChildrenOutletContexts();
        this.attachRef = null;
    }
}
if (false) {
    /** @type {?} */
    OutletContext.prototype.outlet;
    /** @type {?} */
    OutletContext.prototype.route;
    /** @type {?} */
    OutletContext.prototype.resolver;
    /** @type {?} */
    OutletContext.prototype.children;
    /** @type {?} */
    OutletContext.prototype.attachRef;
}
/**
 * Store contextual information about the children (= nested) `RouterOutlet`
 *
 * \@publicApi
 */
export class ChildrenOutletContexts {
    constructor() {
        // contexts for child outlets, by name.
        this.contexts = new Map();
    }
    /**
     * Called when a `RouterOutlet` directive is instantiated
     * @param {?} childName
     * @param {?} outlet
     * @return {?}
     */
    onChildOutletCreated(childName, outlet) {
        /** @type {?} */
        const context = this.getOrCreateContext(childName);
        context.outlet = outlet;
        this.contexts.set(childName, context);
    }
    /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     * @param {?} childName
     * @return {?}
     */
    onChildOutletDestroyed(childName) {
        /** @type {?} */
        const context = this.getContext(childName);
        if (context) {
            context.outlet = null;
        }
    }
    /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     * @return {?}
     */
    onOutletDeactivated() {
        /** @type {?} */
        const contexts = this.contexts;
        this.contexts = new Map();
        return contexts;
    }
    /**
     * @param {?} contexts
     * @return {?}
     */
    onOutletReAttached(contexts) {
        this.contexts = contexts;
    }
    /**
     * @param {?} childName
     * @return {?}
     */
    getOrCreateContext(childName) {
        /** @type {?} */
        let context = this.getContext(childName);
        if (!context) {
            context = new OutletContext();
            this.contexts.set(childName, context);
        }
        return context;
    }
    /**
     * @param {?} childName
     * @return {?}
     */
    getContext(childName) {
        return this.contexts.get(childName) || null;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChildrenOutletContexts.prototype.contexts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX291dGxldF9jb250ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9yb3V0ZXJfb3V0bGV0X2NvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsTUFBTSxPQUFPLGFBQWE7SUFBMUI7UUFDRSxXQUFNLEdBQXNCLElBQUksQ0FBQztRQUNqQyxVQUFLLEdBQXdCLElBQUksQ0FBQztRQUNsQyxhQUFRLEdBQWtDLElBQUksQ0FBQztRQUMvQyxhQUFRLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1FBQ3hDLGNBQVMsR0FBMkIsSUFBSSxDQUFDO0lBQzNDLENBQUM7Q0FBQTs7O0lBTEMsK0JBQWlDOztJQUNqQyw4QkFBa0M7O0lBQ2xDLGlDQUErQzs7SUFDL0MsaUNBQXdDOztJQUN4QyxrQ0FBeUM7Ozs7Ozs7QUFRM0MsTUFBTSxPQUFPLHNCQUFzQjtJQUFuQzs7UUFFVSxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7SUFpRHRELENBQUM7Ozs7Ozs7SUE5Q0Msb0JBQW9CLENBQUMsU0FBaUIsRUFBRSxNQUFvQjs7Y0FDcEQsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7UUFDbEQsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7O0lBT0Qsc0JBQXNCLENBQUMsU0FBaUI7O2NBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUMxQyxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7O0lBTUQsbUJBQW1COztjQUNYLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUIsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxRQUFvQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLFNBQWlCOztZQUM5QixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFFeEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN2QztRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLFNBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzlDLENBQUM7Q0FDRjs7Ozs7O0lBakRDLDBDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Um91dGVyT3V0bGV0fSBmcm9tICcuL2RpcmVjdGl2ZXMvcm91dGVyX291dGxldCc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tICcuL3JvdXRlcl9zdGF0ZSc7XG5cblxuLyoqXG4gKiBTdG9yZSBjb250ZXh0dWFsIGluZm9ybWF0aW9uIGFib3V0IGEgYFJvdXRlck91dGxldGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBPdXRsZXRDb250ZXh0IHtcbiAgb3V0bGV0OiBSb3V0ZXJPdXRsZXR8bnVsbCA9IG51bGw7XG4gIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZXxudWxsID0gbnVsbDtcbiAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcnxudWxsID0gbnVsbDtcbiAgY2hpbGRyZW4gPSBuZXcgQ2hpbGRyZW5PdXRsZXRDb250ZXh0cygpO1xuICBhdHRhY2hSZWY6IENvbXBvbmVudFJlZjxhbnk+fG51bGwgPSBudWxsO1xufVxuXG4vKipcbiAqIFN0b3JlIGNvbnRleHR1YWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNoaWxkcmVuICg9IG5lc3RlZCkgYFJvdXRlck91dGxldGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGlsZHJlbk91dGxldENvbnRleHRzIHtcbiAgLy8gY29udGV4dHMgZm9yIGNoaWxkIG91dGxldHMsIGJ5IG5hbWUuXG4gIHByaXZhdGUgY29udGV4dHMgPSBuZXcgTWFwPHN0cmluZywgT3V0bGV0Q29udGV4dD4oKTtcblxuICAvKiogQ2FsbGVkIHdoZW4gYSBgUm91dGVyT3V0bGV0YCBkaXJlY3RpdmUgaXMgaW5zdGFudGlhdGVkICovXG4gIG9uQ2hpbGRPdXRsZXRDcmVhdGVkKGNoaWxkTmFtZTogc3RyaW5nLCBvdXRsZXQ6IFJvdXRlck91dGxldCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldE9yQ3JlYXRlQ29udGV4dChjaGlsZE5hbWUpO1xuICAgIGNvbnRleHQub3V0bGV0ID0gb3V0bGV0O1xuICAgIHRoaXMuY29udGV4dHMuc2V0KGNoaWxkTmFtZSwgY29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBgUm91dGVyT3V0bGV0YCBkaXJlY3RpdmUgaXMgZGVzdHJveWVkLlxuICAgKiBXZSBuZWVkIHRvIGtlZXAgdGhlIGNvbnRleHQgYXMgdGhlIG91dGxldCBjb3VsZCBiZSBkZXN0cm95ZWQgaW5zaWRlIGEgTmdJZiBhbmQgbWlnaHQgYmVcbiAgICogcmUtY3JlYXRlZCBsYXRlci5cbiAgICovXG4gIG9uQ2hpbGRPdXRsZXREZXN0cm95ZWQoY2hpbGROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNoaWxkTmFtZSk7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQub3V0bGV0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcgcm91dGUgaXMgZGVhY3RpdmF0ZWQgZHVyaW5nIG5hdmlnYXRpb24uXG4gICAqIEJlY2F1c2UgdGhlIGNvbXBvbmVudCBnZXQgZGVzdHJveWVkLCBhbGwgY2hpbGRyZW4gb3V0bGV0IGFyZSBkZXN0cm95ZWQuXG4gICAqL1xuICBvbk91dGxldERlYWN0aXZhdGVkKCk6IE1hcDxzdHJpbmcsIE91dGxldENvbnRleHQ+IHtcbiAgICBjb25zdCBjb250ZXh0cyA9IHRoaXMuY29udGV4dHM7XG4gICAgdGhpcy5jb250ZXh0cyA9IG5ldyBNYXAoKTtcbiAgICByZXR1cm4gY29udGV4dHM7XG4gIH1cblxuICBvbk91dGxldFJlQXR0YWNoZWQoY29udGV4dHM6IE1hcDxzdHJpbmcsIE91dGxldENvbnRleHQ+KSB7XG4gICAgdGhpcy5jb250ZXh0cyA9IGNvbnRleHRzO1xuICB9XG5cbiAgZ2V0T3JDcmVhdGVDb250ZXh0KGNoaWxkTmFtZTogc3RyaW5nKTogT3V0bGV0Q29udGV4dCB7XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoY2hpbGROYW1lKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyBPdXRsZXRDb250ZXh0KCk7XG4gICAgICB0aGlzLmNvbnRleHRzLnNldChjaGlsZE5hbWUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dChjaGlsZE5hbWU6IHN0cmluZyk6IE91dGxldENvbnRleHR8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dHMuZ2V0KGNoaWxkTmFtZSkgfHwgbnVsbDtcbiAgfVxufVxuIl19