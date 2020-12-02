/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/metadata.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { noSideEffects } from '../util/closure';
/**
 * @record
 */
function TypeWithMetadata() { }
if (false) {
    /** @type {?|undefined} */
    TypeWithMetadata.prototype.decorators;
    /** @type {?|undefined} */
    TypeWithMetadata.prototype.ctorParameters;
    /** @type {?|undefined} */
    TypeWithMetadata.prototype.propDecorators;
}
/**
 * Adds decorator, constructor, and property metadata to a given type via static metadata fields
 * on the type.
 *
 * These metadata fields can later be read with Angular's `ReflectionCapabilities` API.
 *
 * Calls to `setClassMetadata` can be marked as pure, resulting in the metadata assignments being
 * tree-shaken away during production builds.
 * @param {?} type
 * @param {?} decorators
 * @param {?} ctorParameters
 * @param {?} propDecorators
 * @return {?}
 */
export function setClassMetadata(type, decorators, ctorParameters, propDecorators) {
    return (/** @type {?} */ (noSideEffects((/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const clazz = (/** @type {?} */ (type));
        // We determine whether a class has its own metadata by taking the metadata from the
        // parent constructor and checking whether it's the same as the subclass metadata below.
        // We can't use `hasOwnProperty` here because it doesn't work correctly in IE10 for
        // static fields that are defined by TS. See
        // https://github.com/angular/angular/pull/28439#issuecomment-459349218.
        /** @type {?} */
        const parentPrototype = clazz.prototype ? Object.getPrototypeOf(clazz.prototype) : null;
        /** @type {?} */
        const parentConstructor = parentPrototype && parentPrototype.constructor;
        if (decorators !== null) {
            if (clazz.decorators !== undefined &&
                (!parentConstructor || parentConstructor.decorators !== clazz.decorators)) {
                clazz.decorators.push(...decorators);
            }
            else {
                clazz.decorators = decorators;
            }
        }
        if (ctorParameters !== null) {
            // Rather than merging, clobber the existing parameters. If other projects exist which
            // use tsickle-style annotations and reflect over them in the same way, this could
            // cause issues, but that is vanishingly unlikely.
            clazz.ctorParameters = ctorParameters;
        }
        if (propDecorators !== null) {
            // The property decorator objects are merged as it is possible different fields have
            // different decorator types. Decorators on individual fields are not merged, as it's
            // also incredibly unlikely that a field will be decorated both with an Angular
            // decorator and a non-Angular decorator that's also been downleveled.
            if (clazz.propDecorators !== undefined &&
                (!parentConstructor ||
                    parentConstructor.propDecorators !== clazz.propDecorators)) {
                clazz.propDecorators = Object.assign(Object.assign({}, clazz.propDecorators), propDecorators);
            }
            else {
                clazz.propDecorators = propDecorators;
            }
        }
    }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL21ldGFkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUU5QywrQkFJQzs7O0lBSEMsc0NBQW1COztJQUNuQiwwQ0FBNkI7O0lBQzdCLDBDQUF3Qzs7Ozs7Ozs7Ozs7Ozs7OztBQVkxQyxNQUFNLFVBQVUsZ0JBQWdCLENBQzVCLElBQWUsRUFBRSxVQUFzQixFQUFFLGNBQWtDLEVBQzNFLGNBQTJDO0lBQzdDLE9BQU8sbUJBQUEsYUFBYTs7O0lBQUMsR0FBRyxFQUFFOztjQUNYLEtBQUssR0FBRyxtQkFBQSxJQUFJLEVBQW9COzs7Ozs7O2NBT2hDLGVBQWUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTs7Y0FDakYsaUJBQWlCLEdBQ25CLGVBQWUsSUFBSSxlQUFlLENBQUMsV0FBVztRQUVsRCxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVM7Z0JBQzlCLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM3RSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBQy9CO1NBQ0Y7UUFDRCxJQUFJLGNBQWMsS0FBSyxJQUFJLEVBQUU7WUFDM0Isc0ZBQXNGO1lBQ3RGLGtGQUFrRjtZQUNsRixrREFBa0Q7WUFDbEQsS0FBSyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7U0FDdkM7UUFDRCxJQUFJLGNBQWMsS0FBSyxJQUFJLEVBQUU7WUFDM0Isb0ZBQW9GO1lBQ3BGLHFGQUFxRjtZQUNyRiwrRUFBK0U7WUFDL0Usc0VBQXNFO1lBQ3RFLElBQUksS0FBSyxDQUFDLGNBQWMsS0FBSyxTQUFTO2dCQUNsQyxDQUFDLENBQUMsaUJBQWlCO29CQUNsQixpQkFBaUIsQ0FBQyxjQUFjLEtBQUssS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUMvRCxLQUFLLENBQUMsY0FBYyxtQ0FBTyxLQUFLLENBQUMsY0FBYyxHQUFLLGNBQWMsQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDLEVBQUMsRUFBUyxDQUFDO0FBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlL3R5cGUnO1xuaW1wb3J0IHtub1NpZGVFZmZlY3RzfSBmcm9tICcuLi91dGlsL2Nsb3N1cmUnO1xuXG5pbnRlcmZhY2UgVHlwZVdpdGhNZXRhZGF0YSBleHRlbmRzIFR5cGU8YW55PiB7XG4gIGRlY29yYXRvcnM/OiBhbnlbXTtcbiAgY3RvclBhcmFtZXRlcnM/OiAoKSA9PiBhbnlbXTtcbiAgcHJvcERlY29yYXRvcnM/OiB7W2ZpZWxkOiBzdHJpbmddOiBhbnl9O1xufVxuXG4vKipcbiAqIEFkZHMgZGVjb3JhdG9yLCBjb25zdHJ1Y3RvciwgYW5kIHByb3BlcnR5IG1ldGFkYXRhIHRvIGEgZ2l2ZW4gdHlwZSB2aWEgc3RhdGljIG1ldGFkYXRhIGZpZWxkc1xuICogb24gdGhlIHR5cGUuXG4gKlxuICogVGhlc2UgbWV0YWRhdGEgZmllbGRzIGNhbiBsYXRlciBiZSByZWFkIHdpdGggQW5ndWxhcidzIGBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzYCBBUEkuXG4gKlxuICogQ2FsbHMgdG8gYHNldENsYXNzTWV0YWRhdGFgIGNhbiBiZSBtYXJrZWQgYXMgcHVyZSwgcmVzdWx0aW5nIGluIHRoZSBtZXRhZGF0YSBhc3NpZ25tZW50cyBiZWluZ1xuICogdHJlZS1zaGFrZW4gYXdheSBkdXJpbmcgcHJvZHVjdGlvbiBidWlsZHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDbGFzc01ldGFkYXRhKFxuICAgIHR5cGU6IFR5cGU8YW55PiwgZGVjb3JhdG9yczogYW55W118bnVsbCwgY3RvclBhcmFtZXRlcnM6ICgoKSA9PiBhbnlbXSl8bnVsbCxcbiAgICBwcm9wRGVjb3JhdG9yczoge1tmaWVsZDogc3RyaW5nXTogYW55fXxudWxsKTogdm9pZCB7XG4gIHJldHVybiBub1NpZGVFZmZlY3RzKCgpID0+IHtcbiAgICAgICAgICAgY29uc3QgY2xhenogPSB0eXBlIGFzIFR5cGVXaXRoTWV0YWRhdGE7XG5cbiAgICAgICAgICAgLy8gV2UgZGV0ZXJtaW5lIHdoZXRoZXIgYSBjbGFzcyBoYXMgaXRzIG93biBtZXRhZGF0YSBieSB0YWtpbmcgdGhlIG1ldGFkYXRhIGZyb20gdGhlXG4gICAgICAgICAgIC8vIHBhcmVudCBjb25zdHJ1Y3RvciBhbmQgY2hlY2tpbmcgd2hldGhlciBpdCdzIHRoZSBzYW1lIGFzIHRoZSBzdWJjbGFzcyBtZXRhZGF0YSBiZWxvdy5cbiAgICAgICAgICAgLy8gV2UgY2FuJ3QgdXNlIGBoYXNPd25Qcm9wZXJ0eWAgaGVyZSBiZWNhdXNlIGl0IGRvZXNuJ3Qgd29yayBjb3JyZWN0bHkgaW4gSUUxMCBmb3JcbiAgICAgICAgICAgLy8gc3RhdGljIGZpZWxkcyB0aGF0IGFyZSBkZWZpbmVkIGJ5IFRTLiBTZWVcbiAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzI4NDM5I2lzc3VlY29tbWVudC00NTkzNDkyMTguXG4gICAgICAgICAgIGNvbnN0IHBhcmVudFByb3RvdHlwZSA9IGNsYXp6LnByb3RvdHlwZSA/IE9iamVjdC5nZXRQcm90b3R5cGVPZihjbGF6ei5wcm90b3R5cGUpIDogbnVsbDtcbiAgICAgICAgICAgY29uc3QgcGFyZW50Q29uc3RydWN0b3I6IFR5cGVXaXRoTWV0YWRhdGF8bnVsbCA9XG4gICAgICAgICAgICAgICBwYXJlbnRQcm90b3R5cGUgJiYgcGFyZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgICAgIGlmIChkZWNvcmF0b3JzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgaWYgKGNsYXp6LmRlY29yYXRvcnMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAoIXBhcmVudENvbnN0cnVjdG9yIHx8IHBhcmVudENvbnN0cnVjdG9yLmRlY29yYXRvcnMgIT09IGNsYXp6LmRlY29yYXRvcnMpKSB7XG4gICAgICAgICAgICAgICBjbGF6ei5kZWNvcmF0b3JzLnB1c2goLi4uZGVjb3JhdG9ycyk7XG4gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIGNsYXp6LmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgICBpZiAoY3RvclBhcmFtZXRlcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAvLyBSYXRoZXIgdGhhbiBtZXJnaW5nLCBjbG9iYmVyIHRoZSBleGlzdGluZyBwYXJhbWV0ZXJzLiBJZiBvdGhlciBwcm9qZWN0cyBleGlzdCB3aGljaFxuICAgICAgICAgICAgIC8vIHVzZSB0c2lja2xlLXN0eWxlIGFubm90YXRpb25zIGFuZCByZWZsZWN0IG92ZXIgdGhlbSBpbiB0aGUgc2FtZSB3YXksIHRoaXMgY291bGRcbiAgICAgICAgICAgICAvLyBjYXVzZSBpc3N1ZXMsIGJ1dCB0aGF0IGlzIHZhbmlzaGluZ2x5IHVubGlrZWx5LlxuICAgICAgICAgICAgIGNsYXp6LmN0b3JQYXJhbWV0ZXJzID0gY3RvclBhcmFtZXRlcnM7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgaWYgKHByb3BEZWNvcmF0b3JzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgLy8gVGhlIHByb3BlcnR5IGRlY29yYXRvciBvYmplY3RzIGFyZSBtZXJnZWQgYXMgaXQgaXMgcG9zc2libGUgZGlmZmVyZW50IGZpZWxkcyBoYXZlXG4gICAgICAgICAgICAgLy8gZGlmZmVyZW50IGRlY29yYXRvciB0eXBlcy4gRGVjb3JhdG9ycyBvbiBpbmRpdmlkdWFsIGZpZWxkcyBhcmUgbm90IG1lcmdlZCwgYXMgaXQnc1xuICAgICAgICAgICAgIC8vIGFsc28gaW5jcmVkaWJseSB1bmxpa2VseSB0aGF0IGEgZmllbGQgd2lsbCBiZSBkZWNvcmF0ZWQgYm90aCB3aXRoIGFuIEFuZ3VsYXJcbiAgICAgICAgICAgICAvLyBkZWNvcmF0b3IgYW5kIGEgbm9uLUFuZ3VsYXIgZGVjb3JhdG9yIHRoYXQncyBhbHNvIGJlZW4gZG93bmxldmVsZWQuXG4gICAgICAgICAgICAgaWYgKGNsYXp6LnByb3BEZWNvcmF0b3JzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgKCFwYXJlbnRDb25zdHJ1Y3RvciB8fFxuICAgICAgICAgICAgICAgICAgcGFyZW50Q29uc3RydWN0b3IucHJvcERlY29yYXRvcnMgIT09IGNsYXp6LnByb3BEZWNvcmF0b3JzKSkge1xuICAgICAgICAgICAgICAgY2xhenoucHJvcERlY29yYXRvcnMgPSB7Li4uY2xhenoucHJvcERlY29yYXRvcnMsIC4uLnByb3BEZWNvcmF0b3JzfTtcbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgY2xhenoucHJvcERlY29yYXRvcnMgPSBwcm9wRGVjb3JhdG9ycztcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICAgIH0pIGFzIG5ldmVyO1xufVxuIl19