/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/linker/ng_module_factory_loader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModuleFactory as R3NgModuleFactory } from '../render3/ng_module_ref';
import { getRegisteredNgModuleType } from './ng_module_factory_registration';
/**
 * Used to load ng module factories.
 *
 * \@publicApi
 * @deprecated the `string` form of `loadChildren` is deprecated, and `NgModuleFactoryLoader` is
 * part of its implementation. See `LoadChildren` for more details.
 * @abstract
 */
export class NgModuleFactoryLoader {
}
if (false) {
    /**
     * @abstract
     * @param {?} path
     * @return {?}
     */
    NgModuleFactoryLoader.prototype.load = function (path) { };
}
/**
 * @param {?} id
 * @return {?}
 */
export function getModuleFactory__PRE_R3__(id) {
    /** @type {?} */
    const factory = (/** @type {?} */ (getRegisteredNgModuleType(id)));
    if (!factory)
        throw noModuleError(id);
    return factory;
}
/**
 * @param {?} id
 * @return {?}
 */
export function getModuleFactory__POST_R3__(id) {
    /** @type {?} */
    const type = (/** @type {?} */ (getRegisteredNgModuleType(id)));
    if (!type)
        throw noModuleError(id);
    return new R3NgModuleFactory(type);
}
/**
 * Returns the NgModuleFactory with the given id, if it exists and has been loaded.
 * Factories for modules that do not specify an `id` cannot be retrieved. Throws if the module
 * cannot be found.
 * \@publicApi
 * @type {?}
 */
export const getModuleFactory = getModuleFactory__PRE_R3__;
/**
 * @param {?} id
 * @return {?}
 */
function noModuleError(id) {
    return new Error(`No module with ID ${id} loaded`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX2ZhY3RvcnlfbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGlua2VyL25nX21vZHVsZV9mYWN0b3J5X2xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsZUFBZSxJQUFJLGlCQUFpQixFQUFlLE1BQU0sMEJBQTBCLENBQUM7QUFHNUYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7OztBQVUzRSxNQUFNLE9BQWdCLHFCQUFxQjtDQUUxQzs7Ozs7OztJQURDLDJEQUEyRDs7Ozs7O0FBRzdELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxFQUFVOztVQUM3QyxPQUFPLEdBQUcsbUJBQUEseUJBQXlCLENBQUMsRUFBRSxDQUFDLEVBQThCO0lBQzNFLElBQUksQ0FBQyxPQUFPO1FBQUUsTUFBTSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsRUFBVTs7VUFDOUMsSUFBSSxHQUFHLG1CQUFBLHlCQUF5QixDQUFDLEVBQUUsQ0FBQyxFQUF1QjtJQUNqRSxJQUFJLENBQUMsSUFBSTtRQUFFLE1BQU0sYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQyxDQUFDOzs7Ozs7OztBQVFELE1BQU0sT0FBTyxnQkFBZ0IsR0FBeUMsMEJBQTBCOzs7OztBQUVoRyxTQUFTLGFBQWEsQ0FDbEIsRUFBVTtJQUVaLE9BQU8sSUFBSSxLQUFLLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZUZhY3RvcnkgYXMgUjNOZ01vZHVsZUZhY3RvcnksIE5nTW9kdWxlVHlwZX0gZnJvbSAnLi4vcmVuZGVyMy9uZ19tb2R1bGVfcmVmJztcblxuaW1wb3J0IHtOZ01vZHVsZUZhY3Rvcnl9IGZyb20gJy4vbmdfbW9kdWxlX2ZhY3RvcnknO1xuaW1wb3J0IHtnZXRSZWdpc3RlcmVkTmdNb2R1bGVUeXBlfSBmcm9tICcuL25nX21vZHVsZV9mYWN0b3J5X3JlZ2lzdHJhdGlvbic7XG5cblxuLyoqXG4gKiBVc2VkIHRvIGxvYWQgbmcgbW9kdWxlIGZhY3Rvcmllcy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVwcmVjYXRlZCB0aGUgYHN0cmluZ2AgZm9ybSBvZiBgbG9hZENoaWxkcmVuYCBpcyBkZXByZWNhdGVkLCBhbmQgYE5nTW9kdWxlRmFjdG9yeUxvYWRlcmAgaXNcbiAqIHBhcnQgb2YgaXRzIGltcGxlbWVudGF0aW9uLiBTZWUgYExvYWRDaGlsZHJlbmAgZm9yIG1vcmUgZGV0YWlscy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB7XG4gIGFic3RyYWN0IGxvYWQocGF0aDogc3RyaW5nKTogUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8YW55Pj47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2R1bGVGYWN0b3J5X19QUkVfUjNfXyhpZDogc3RyaW5nKTogTmdNb2R1bGVGYWN0b3J5PGFueT4ge1xuICBjb25zdCBmYWN0b3J5ID0gZ2V0UmVnaXN0ZXJlZE5nTW9kdWxlVHlwZShpZCkgYXMgTmdNb2R1bGVGYWN0b3J5PGFueT58IG51bGw7XG4gIGlmICghZmFjdG9yeSkgdGhyb3cgbm9Nb2R1bGVFcnJvcihpZCk7XG4gIHJldHVybiBmYWN0b3J5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kdWxlRmFjdG9yeV9fUE9TVF9SM19fKGlkOiBzdHJpbmcpOiBOZ01vZHVsZUZhY3Rvcnk8YW55PiB7XG4gIGNvbnN0IHR5cGUgPSBnZXRSZWdpc3RlcmVkTmdNb2R1bGVUeXBlKGlkKSBhcyBOZ01vZHVsZVR5cGUgfCBudWxsO1xuICBpZiAoIXR5cGUpIHRocm93IG5vTW9kdWxlRXJyb3IoaWQpO1xuICByZXR1cm4gbmV3IFIzTmdNb2R1bGVGYWN0b3J5KHR5cGUpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIE5nTW9kdWxlRmFjdG9yeSB3aXRoIHRoZSBnaXZlbiBpZCwgaWYgaXQgZXhpc3RzIGFuZCBoYXMgYmVlbiBsb2FkZWQuXG4gKiBGYWN0b3JpZXMgZm9yIG1vZHVsZXMgdGhhdCBkbyBub3Qgc3BlY2lmeSBhbiBgaWRgIGNhbm5vdCBiZSByZXRyaWV2ZWQuIFRocm93cyBpZiB0aGUgbW9kdWxlXG4gKiBjYW5ub3QgYmUgZm91bmQuXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRNb2R1bGVGYWN0b3J5OiAoaWQ6IHN0cmluZykgPT4gTmdNb2R1bGVGYWN0b3J5PGFueT4gPSBnZXRNb2R1bGVGYWN0b3J5X19QUkVfUjNfXztcblxuZnVuY3Rpb24gbm9Nb2R1bGVFcnJvcihcbiAgICBpZDogc3RyaW5nLFxuICAgICk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihgTm8gbW9kdWxlIHdpdGggSUQgJHtpZH0gbG9hZGVkYCk7XG59XG4iXX0=