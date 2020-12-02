/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/linker/ng_module_factory_registration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { autoRegisterModuleById } from '../render3/definition';
import { stringify } from '../util/stringify';
/**
 * Map of module-id to the corresponding NgModule.
 * - In pre Ivy we track NgModuleFactory,
 * - In post Ivy we track the NgModuleType
 * @type {?}
 */
const modules = new Map();
/**
 * Registers a loaded module. Should only be called from generated NgModuleFactory code.
 * \@publicApi
 * @param {?} id
 * @param {?} factory
 * @return {?}
 */
export function registerModuleFactory(id, factory) {
    /** @type {?} */
    const existing = (/** @type {?} */ (modules.get(id)));
    assertSameOrNotExisting(id, existing && existing.moduleType, factory.moduleType);
    modules.set(id, factory);
}
/**
 * @param {?} id
 * @param {?} type
 * @param {?} incoming
 * @return {?}
 */
function assertSameOrNotExisting(id, type, incoming) {
    if (type && type !== incoming) {
        throw new Error(`Duplicate module registered for ${id} - ${stringify(type)} vs ${stringify(type.name)}`);
    }
}
/**
 * @param {?} ngModuleType
 * @return {?}
 */
export function registerNgModuleType(ngModuleType) {
    if (ngModuleType.ɵmod.id !== null) {
        /** @type {?} */
        const id = ngModuleType.ɵmod.id;
        /** @type {?} */
        const existing = (/** @type {?} */ (modules.get(id)));
        assertSameOrNotExisting(id, existing, ngModuleType);
        modules.set(id, ngModuleType);
    }
    /** @type {?} */
    let imports = ngModuleType.ɵmod.imports;
    if (imports instanceof Function) {
        imports = imports();
    }
    if (imports) {
        imports.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => registerNgModuleType((/** @type {?} */ (i)))));
    }
}
/**
 * @return {?}
 */
export function clearModulesForTest() {
    modules.clear();
}
/**
 * @param {?} id
 * @return {?}
 */
export function getRegisteredNgModuleType(id) {
    return modules.get(id) || autoRegisterModuleById[id];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX2ZhY3RvcnlfcmVnaXN0cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGlua2VyL25nX21vZHVsZV9mYWN0b3J5X3JlZ2lzdHJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUU3RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7TUFVdEMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUE2Qzs7Ozs7Ozs7QUFNcEUsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEVBQVUsRUFBRSxPQUE2Qjs7VUFDdkUsUUFBUSxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQXdCO0lBQ3hELHVCQUF1QixDQUFDLEVBQUUsRUFBRSxRQUFRLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0IsQ0FBQzs7Ozs7OztBQUVELFNBQVMsdUJBQXVCLENBQUMsRUFBVSxFQUFFLElBQW9CLEVBQUUsUUFBbUI7SUFDcEYsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM3QixNQUFNLElBQUksS0FBSyxDQUNYLG1DQUFtQyxFQUFFLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzlGO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsWUFBMEI7SUFDN0QsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7O2NBQzNCLEVBQUUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7O2NBQ3pCLFFBQVEsR0FBRyxtQkFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUF1QjtRQUN2RCx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQy9COztRQUVHLE9BQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU87SUFDdkMsSUFBSSxPQUFPLFlBQVksUUFBUSxFQUFFO1FBQy9CLE9BQU8sR0FBRyxPQUFPLEVBQUUsQ0FBQztLQUNyQjtJQUNELElBQUksT0FBTyxFQUFFO1FBQ1gsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLG1CQUFBLENBQUMsRUFBZ0IsQ0FBQyxFQUFDLENBQUM7S0FDL0Q7QUFDSCxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQjtJQUNqQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbEIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUseUJBQXlCLENBQUMsRUFBVTtJQUNsRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7YXV0b1JlZ2lzdGVyTW9kdWxlQnlJZH0gZnJvbSAnLi4vcmVuZGVyMy9kZWZpbml0aW9uJztcbmltcG9ydCB7TmdNb2R1bGVUeXBlfSBmcm9tICcuLi9yZW5kZXIzL25nX21vZHVsZV9yZWYnO1xuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4uL3V0aWwvc3RyaW5naWZ5JztcblxuaW1wb3J0IHtOZ01vZHVsZUZhY3Rvcnl9IGZyb20gJy4vbmdfbW9kdWxlX2ZhY3RvcnknO1xuXG5cbi8qKlxuICogTWFwIG9mIG1vZHVsZS1pZCB0byB0aGUgY29ycmVzcG9uZGluZyBOZ01vZHVsZS5cbiAqIC0gSW4gcHJlIEl2eSB3ZSB0cmFjayBOZ01vZHVsZUZhY3RvcnksXG4gKiAtIEluIHBvc3QgSXZ5IHdlIHRyYWNrIHRoZSBOZ01vZHVsZVR5cGVcbiAqL1xuY29uc3QgbW9kdWxlcyA9IG5ldyBNYXA8c3RyaW5nLCBOZ01vZHVsZUZhY3Rvcnk8YW55PnxOZ01vZHVsZVR5cGU+KCk7XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgbG9hZGVkIG1vZHVsZS4gU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGZyb20gZ2VuZXJhdGVkIE5nTW9kdWxlRmFjdG9yeSBjb2RlLlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGVGYWN0b3J5KGlkOiBzdHJpbmcsIGZhY3Rvcnk6IE5nTW9kdWxlRmFjdG9yeTxhbnk+KSB7XG4gIGNvbnN0IGV4aXN0aW5nID0gbW9kdWxlcy5nZXQoaWQpIGFzIE5nTW9kdWxlRmFjdG9yeTxhbnk+O1xuICBhc3NlcnRTYW1lT3JOb3RFeGlzdGluZyhpZCwgZXhpc3RpbmcgJiYgZXhpc3RpbmcubW9kdWxlVHlwZSwgZmFjdG9yeS5tb2R1bGVUeXBlKTtcbiAgbW9kdWxlcy5zZXQoaWQsIGZhY3RvcnkpO1xufVxuXG5mdW5jdGlvbiBhc3NlcnRTYW1lT3JOb3RFeGlzdGluZyhpZDogc3RyaW5nLCB0eXBlOiBUeXBlPGFueT58bnVsbCwgaW5jb21pbmc6IFR5cGU8YW55Pik6IHZvaWQge1xuICBpZiAodHlwZSAmJiB0eXBlICE9PSBpbmNvbWluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYER1cGxpY2F0ZSBtb2R1bGUgcmVnaXN0ZXJlZCBmb3IgJHtpZH0gLSAke3N0cmluZ2lmeSh0eXBlKX0gdnMgJHtzdHJpbmdpZnkodHlwZS5uYW1lKX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOZ01vZHVsZVR5cGUobmdNb2R1bGVUeXBlOiBOZ01vZHVsZVR5cGUpIHtcbiAgaWYgKG5nTW9kdWxlVHlwZS7JtW1vZC5pZCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGlkID0gbmdNb2R1bGVUeXBlLsm1bW9kLmlkO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gbW9kdWxlcy5nZXQoaWQpIGFzIE5nTW9kdWxlVHlwZSB8IG51bGw7XG4gICAgYXNzZXJ0U2FtZU9yTm90RXhpc3RpbmcoaWQsIGV4aXN0aW5nLCBuZ01vZHVsZVR5cGUpO1xuICAgIG1vZHVsZXMuc2V0KGlkLCBuZ01vZHVsZVR5cGUpO1xuICB9XG5cbiAgbGV0IGltcG9ydHMgPSBuZ01vZHVsZVR5cGUuybVtb2QuaW1wb3J0cztcbiAgaWYgKGltcG9ydHMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGltcG9ydHMgPSBpbXBvcnRzKCk7XG4gIH1cbiAgaWYgKGltcG9ydHMpIHtcbiAgICBpbXBvcnRzLmZvckVhY2goaSA9PiByZWdpc3Rlck5nTW9kdWxlVHlwZShpIGFzIE5nTW9kdWxlVHlwZSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vZHVsZXNGb3JUZXN0KCk6IHZvaWQge1xuICBtb2R1bGVzLmNsZWFyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWdpc3RlcmVkTmdNb2R1bGVUeXBlKGlkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG1vZHVsZXMuZ2V0KGlkKSB8fCBhdXRvUmVnaXN0ZXJNb2R1bGVCeUlkW2lkXTtcbn1cbiJdfQ==