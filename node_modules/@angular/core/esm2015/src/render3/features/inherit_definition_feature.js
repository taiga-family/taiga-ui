/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/features/inherit_definition_feature.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { fillProperties } from '../../util/property';
import { EMPTY_ARRAY, EMPTY_OBJ } from '../empty';
import { isComponentDef } from '../interfaces/type_checks';
import { mergeHostAttrs } from '../util/attrs_utils';
/**
 * @param {?} type
 * @return {?}
 */
export function getSuperType(type) {
    return Object.getPrototypeOf(type.prototype).constructor;
}
/**
 * Merges the definition from a super class to a sub class.
 * \@codeGenApi
 * @param {?} definition The definition that is a SubClass of another directive of component
 *
 * @return {?}
 */
export function ɵɵInheritDefinitionFeature(definition) {
    /** @type {?} */
    let superType = getSuperType(definition.type);
    /** @type {?} */
    let shouldInheritFields = true;
    /** @type {?} */
    const inheritanceChain = [definition];
    while (superType) {
        /** @type {?} */
        let superDef = undefined;
        if (isComponentDef(definition)) {
            // Don't use getComponentDef/getDirectiveDef. This logic relies on inheritance.
            superDef = superType.ɵcmp || superType.ɵdir;
        }
        else {
            if (superType.ɵcmp) {
                throw new Error('Directives cannot inherit Components');
            }
            // Don't use getComponentDef/getDirectiveDef. This logic relies on inheritance.
            superDef = superType.ɵdir;
        }
        if (superDef) {
            if (shouldInheritFields) {
                inheritanceChain.push(superDef);
                // Some fields in the definition may be empty, if there were no values to put in them that
                // would've justified object creation. Unwrap them if necessary.
                /** @type {?} */
                const writeableDef = (/** @type {?} */ (definition));
                writeableDef.inputs = maybeUnwrapEmpty(definition.inputs);
                writeableDef.declaredInputs = maybeUnwrapEmpty(definition.declaredInputs);
                writeableDef.outputs = maybeUnwrapEmpty(definition.outputs);
                // Merge hostBindings
                /** @type {?} */
                const superHostBindings = superDef.hostBindings;
                superHostBindings && inheritHostBindings(definition, superHostBindings);
                // Merge queries
                /** @type {?} */
                const superViewQuery = superDef.viewQuery;
                /** @type {?} */
                const superContentQueries = superDef.contentQueries;
                superViewQuery && inheritViewQuery(definition, superViewQuery);
                superContentQueries && inheritContentQueries(definition, superContentQueries);
                // Merge inputs and outputs
                fillProperties(definition.inputs, superDef.inputs);
                fillProperties(definition.declaredInputs, superDef.declaredInputs);
                fillProperties(definition.outputs, superDef.outputs);
                // Merge animations metadata.
                // If `superDef` is a Component, the `data` field is present (defaults to an empty object).
                if (isComponentDef(superDef) && superDef.data.animation) {
                    // If super def is a Component, the `definition` is also a Component, since Directives can
                    // not inherit Components (we throw an error above and cannot reach this code).
                    /** @type {?} */
                    const defData = ((/** @type {?} */ (definition))).data;
                    defData.animation = (defData.animation || []).concat(superDef.data.animation);
                }
                // Inherit hooks
                // Assume super class inheritance feature has already run.
                writeableDef.afterContentChecked =
                    writeableDef.afterContentChecked || superDef.afterContentChecked;
                writeableDef.afterContentInit = definition.afterContentInit || superDef.afterContentInit;
                writeableDef.afterViewChecked = definition.afterViewChecked || superDef.afterViewChecked;
                writeableDef.afterViewInit = definition.afterViewInit || superDef.afterViewInit;
                writeableDef.doCheck = definition.doCheck || superDef.doCheck;
                writeableDef.onDestroy = definition.onDestroy || superDef.onDestroy;
                writeableDef.onInit = definition.onInit || superDef.onInit;
            }
            // Run parent features
            /** @type {?} */
            const features = superDef.features;
            if (features) {
                for (let i = 0; i < features.length; i++) {
                    /** @type {?} */
                    const feature = features[i];
                    if (feature && feature.ngInherit) {
                        ((/** @type {?} */ (feature)))(definition);
                    }
                    // If `InheritDefinitionFeature` is a part of the current `superDef`, it means that this
                    // def already has all the necessary information inherited from its super class(es), so we
                    // can stop merging fields from super classes. However we need to iterate through the
                    // prototype chain to look for classes that might contain other "features" (like
                    // NgOnChanges), which we should invoke for the original `definition`. We set the
                    // `shouldInheritFields` flag to indicate that, essentially skipping fields inheritance
                    // logic and only invoking functions from the "features" list.
                    if (feature === ɵɵInheritDefinitionFeature) {
                        shouldInheritFields = false;
                    }
                }
            }
        }
        superType = Object.getPrototypeOf(superType);
    }
    mergeHostAttrsAcrossInheritance(inheritanceChain);
}
/**
 * Merge the `hostAttrs` and `hostVars` from the inherited parent to the base class.
 *
 * @param {?} inheritanceChain A list of `WritableDefs` starting at the top most type and listing
 * sub-types in order. For each type take the `hostAttrs` and `hostVars` and merge it with the child
 * type.
 * @return {?}
 */
function mergeHostAttrsAcrossInheritance(inheritanceChain) {
    /** @type {?} */
    let hostVars = 0;
    /** @type {?} */
    let hostAttrs = null;
    // We process the inheritance order from the base to the leaves here.
    for (let i = inheritanceChain.length - 1; i >= 0; i--) {
        /** @type {?} */
        const def = inheritanceChain[i];
        // For each `hostVars`, we need to add the superclass amount.
        def.hostVars = (hostVars += def.hostVars);
        // for each `hostAttrs` we need to merge it with superclass.
        def.hostAttrs =
            mergeHostAttrs(def.hostAttrs, hostAttrs = mergeHostAttrs(hostAttrs, def.hostAttrs));
    }
}
/**
 * @param {?} value
 * @return {?}
 */
function maybeUnwrapEmpty(value) {
    if (value === EMPTY_OBJ) {
        return {};
    }
    else if (value === EMPTY_ARRAY) {
        return [];
    }
    else {
        return value;
    }
}
/**
 * @param {?} definition
 * @param {?} superViewQuery
 * @return {?}
 */
function inheritViewQuery(definition, superViewQuery) {
    /** @type {?} */
    const prevViewQuery = definition.viewQuery;
    if (prevViewQuery) {
        definition.viewQuery = (/**
         * @param {?} rf
         * @param {?} ctx
         * @return {?}
         */
        (rf, ctx) => {
            superViewQuery(rf, ctx);
            prevViewQuery(rf, ctx);
        });
    }
    else {
        definition.viewQuery = superViewQuery;
    }
}
/**
 * @param {?} definition
 * @param {?} superContentQueries
 * @return {?}
 */
function inheritContentQueries(definition, superContentQueries) {
    /** @type {?} */
    const prevContentQueries = definition.contentQueries;
    if (prevContentQueries) {
        definition.contentQueries = (/**
         * @param {?} rf
         * @param {?} ctx
         * @param {?} directiveIndex
         * @return {?}
         */
        (rf, ctx, directiveIndex) => {
            superContentQueries(rf, ctx, directiveIndex);
            prevContentQueries(rf, ctx, directiveIndex);
        });
    }
    else {
        definition.contentQueries = superContentQueries;
    }
}
/**
 * @param {?} definition
 * @param {?} superHostBindings
 * @return {?}
 */
function inheritHostBindings(definition, superHostBindings) {
    /** @type {?} */
    const prevHostBindings = definition.hostBindings;
    if (prevHostBindings) {
        definition.hostBindings = (/**
         * @param {?} rf
         * @param {?} ctx
         * @return {?}
         */
        (rf, ctx) => {
            superHostBindings(rf, ctx);
            prevHostBindings(rf, ctx);
        });
    }
    else {
        definition.hostBindings = superHostBindings;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5oZXJpdF9kZWZpbml0aW9uX2ZlYXR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2ZlYXR1cmVzL2luaGVyaXRfZGVmaW5pdGlvbl9mZWF0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUdoRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUVuRCxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQWU7SUFFMUMsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFDM0QsQ0FBQzs7Ozs7Ozs7QUFVRCxNQUFNLFVBQVUsMEJBQTBCLENBQUMsVUFBK0M7O1FBQ3BGLFNBQVMsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzs7UUFDekMsbUJBQW1CLEdBQUcsSUFBSTs7VUFDeEIsZ0JBQWdCLEdBQWtCLENBQUMsVUFBVSxDQUFDO0lBRXBELE9BQU8sU0FBUyxFQUFFOztZQUNaLFFBQVEsR0FBa0QsU0FBUztRQUN2RSxJQUFJLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM5QiwrRUFBK0U7WUFDL0UsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQztTQUM3QzthQUFNO1lBQ0wsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO2dCQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7YUFDekQ7WUFDRCwrRUFBK0U7WUFDL0Us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O1FBQ3BCLFVBQVUsQ0FBQyxZQUFZOzs7OztRQUFHLENBQUMsRUFBZSxFQUFFLEdBQVEsRUFBRSxFQUFFO1lBQ3RELGlCQUFpQixDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMzQixnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFBLENBQUM7S0FDSDtTQUFNO1FBQ0wsVUFBVSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztLQUM3QztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VHlwZSwgV3JpdGFibGV9IGZyb20gJy4uLy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7ZmlsbFByb3BlcnRpZXN9IGZyb20gJy4uLy4uL3V0aWwvcHJvcGVydHknO1xuaW1wb3J0IHtFTVBUWV9BUlJBWSwgRU1QVFlfT0JKfSBmcm9tICcuLi9lbXB0eSc7XG5pbXBvcnQge0NvbXBvbmVudERlZiwgQ29udGVudFF1ZXJpZXNGdW5jdGlvbiwgRGlyZWN0aXZlRGVmLCBEaXJlY3RpdmVEZWZGZWF0dXJlLCBIb3N0QmluZGluZ3NGdW5jdGlvbiwgUmVuZGVyRmxhZ3MsIFZpZXdRdWVyaWVzRnVuY3Rpb259IGZyb20gJy4uL2ludGVyZmFjZXMvZGVmaW5pdGlvbic7XG5pbXBvcnQge1RBdHRyaWJ1dGVzfSBmcm9tICcuLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtpc0NvbXBvbmVudERlZn0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBlX2NoZWNrcyc7XG5pbXBvcnQge21lcmdlSG9zdEF0dHJzfSBmcm9tICcuLi91dGlsL2F0dHJzX3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1cGVyVHlwZSh0eXBlOiBUeXBlPGFueT4pOiBUeXBlPGFueT4mXG4gICAge8m1Y21wPzogQ29tcG9uZW50RGVmPGFueT4sIMm1ZGlyPzogRGlyZWN0aXZlRGVmPGFueT59IHtcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih0eXBlLnByb3RvdHlwZSkuY29uc3RydWN0b3I7XG59XG5cbnR5cGUgV3JpdGFibGVEZWYgPSBXcml0YWJsZTxEaXJlY3RpdmVEZWY8YW55PnxDb21wb25lbnREZWY8YW55Pj47XG5cbi8qKlxuICogTWVyZ2VzIHRoZSBkZWZpbml0aW9uIGZyb20gYSBzdXBlciBjbGFzcyB0byBhIHN1YiBjbGFzcy5cbiAqIEBwYXJhbSBkZWZpbml0aW9uIFRoZSBkZWZpbml0aW9uIHRoYXQgaXMgYSBTdWJDbGFzcyBvZiBhbm90aGVyIGRpcmVjdGl2ZSBvZiBjb21wb25lbnRcbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtUluaGVyaXREZWZpbml0aW9uRmVhdHVyZShkZWZpbml0aW9uOiBEaXJlY3RpdmVEZWY8YW55PnxDb21wb25lbnREZWY8YW55Pik6IHZvaWQge1xuICBsZXQgc3VwZXJUeXBlID0gZ2V0U3VwZXJUeXBlKGRlZmluaXRpb24udHlwZSk7XG4gIGxldCBzaG91bGRJbmhlcml0RmllbGRzID0gdHJ1ZTtcbiAgY29uc3QgaW5oZXJpdGFuY2VDaGFpbjogV3JpdGFibGVEZWZbXSA9IFtkZWZpbml0aW9uXTtcblxuICB3aGlsZSAoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyRGVmOiBEaXJlY3RpdmVEZWY8YW55PnxDb21wb25lbnREZWY8YW55Pnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzQ29tcG9uZW50RGVmKGRlZmluaXRpb24pKSB7XG4gICAgICAvLyBEb24ndCB1c2UgZ2V0Q29tcG9uZW50RGVmL2dldERpcmVjdGl2ZURlZi4gVGhpcyBsb2dpYyByZWxpZXMgb24gaW5oZXJpdGFuY2UuXG4gICAgICBzdXBlckRlZiA9IHN1cGVyVHlwZS7JtWNtcCB8fCBzdXBlclR5cGUuybVkaXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdXBlclR5cGUuybVjbXApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaXJlY3RpdmVzIGNhbm5vdCBpbmhlcml0IENvbXBvbmVudHMnKTtcbiAgICAgIH1cbiAgICAgIC8vIERvbid0IHVzZSBnZXRDb21wb25lbnREZWYvZ2V0RGlyZWN0aXZlRGVmLiBUaGlzIGxvZ2ljIHJlbGllcyBvbiBpbmhlcml0YW5jZS5cbiAgICAgIHN1cGVyRGVmID0gc3VwZXJUeXBlLsm1ZGlyO1xuICAgIH1cblxuICAgIGlmIChzdXBlckRlZikge1xuICAgICAgaWYgKHNob3VsZEluaGVyaXRGaWVsZHMpIHtcbiAgICAgICAgaW5oZXJpdGFuY2VDaGFpbi5wdXNoKHN1cGVyRGVmKTtcbiAgICAgICAgLy8gU29tZSBmaWVsZHMgaW4gdGhlIGRlZmluaXRpb24gbWF5IGJlIGVtcHR5LCBpZiB0aGVyZSB3ZXJlIG5vIHZhbHVlcyB0byBwdXQgaW4gdGhlbSB0aGF0XG4gICAgICAgIC8vIHdvdWxkJ3ZlIGp1c3RpZmllZCBvYmplY3QgY3JlYXRpb24uIFVud3JhcCB0aGVtIGlmIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3Qgd3JpdGVhYmxlRGVmID0gZGVmaW5pdGlvbiBhcyBXcml0YWJsZURlZjtcbiAgICAgICAgd3JpdGVhYmxlRGVmLmlucHV0cyA9IG1heWJlVW53cmFwRW1wdHkoZGVmaW5pdGlvbi5pbnB1dHMpO1xuICAgICAgICB3cml0ZWFibGVEZWYuZGVjbGFyZWRJbnB1dHMgPSBtYXliZVVud3JhcEVtcHR5KGRlZmluaXRpb24uZGVjbGFyZWRJbnB1dHMpO1xuICAgICAgICB3cml0ZWFibGVEZWYub3V0cHV0cyA9IG1heWJlVW53cmFwRW1wdHkoZGVmaW5pdGlvbi5vdXRwdXRzKTtcblxuICAgICAgICAvLyBNZXJnZSBob3N0QmluZGluZ3NcbiAgICAgICAgY29uc3Qgc3VwZXJIb3N0QmluZGluZ3MgPSBzdXBlckRlZi5ob3N0QmluZGluZ3M7XG4gICAgICAgIHN1cGVySG9zdEJpbmRpbmdzICYmIGluaGVyaXRIb3N0QmluZGluZ3MoZGVmaW5pdGlvbiwgc3VwZXJIb3N0QmluZGluZ3MpO1xuXG4gICAgICAgIC8vIE1lcmdlIHF1ZXJpZXNcbiAgICAgICAgY29uc3Qgc3VwZXJWaWV3UXVlcnkgPSBzdXBlckRlZi52aWV3UXVlcnk7XG4gICAgICAgIGNvbnN0IHN1cGVyQ29udGVudFF1ZXJpZXMgPSBzdXBlckRlZi5jb250ZW50UXVlcmllcztcbiAgICAgICAgc3VwZXJWaWV3UXVlcnkgJiYgaW5oZXJpdFZpZXdRdWVyeShkZWZpbml0aW9uLCBzdXBlclZpZXdRdWVyeSk7XG4gICAgICAgIHN1cGVyQ29udGVudFF1ZXJpZXMgJiYgaW5oZXJpdENvbnRlbnRRdWVyaWVzKGRlZmluaXRpb24sIHN1cGVyQ29udGVudFF1ZXJpZXMpO1xuXG4gICAgICAgIC8vIE1lcmdlIGlucHV0cyBhbmQgb3V0cHV0c1xuICAgICAgICBmaWxsUHJvcGVydGllcyhkZWZpbml0aW9uLmlucHV0cywgc3VwZXJEZWYuaW5wdXRzKTtcbiAgICAgICAgZmlsbFByb3BlcnRpZXMoZGVmaW5pdGlvbi5kZWNsYXJlZElucHV0cywgc3VwZXJEZWYuZGVjbGFyZWRJbnB1dHMpO1xuICAgICAgICBmaWxsUHJvcGVydGllcyhkZWZpbml0aW9uLm91dHB1dHMsIHN1cGVyRGVmLm91dHB1dHMpO1xuXG4gICAgICAgIC8vIE1lcmdlIGFuaW1hdGlvbnMgbWV0YWRhdGEuXG4gICAgICAgIC8vIElmIGBzdXBlckRlZmAgaXMgYSBDb21wb25lbnQsIHRoZSBgZGF0YWAgZmllbGQgaXMgcHJlc2VudCAoZGVmYXVsdHMgdG8gYW4gZW1wdHkgb2JqZWN0KS5cbiAgICAgICAgaWYgKGlzQ29tcG9uZW50RGVmKHN1cGVyRGVmKSAmJiBzdXBlckRlZi5kYXRhLmFuaW1hdGlvbikge1xuICAgICAgICAgIC8vIElmIHN1cGVyIGRlZiBpcyBhIENvbXBvbmVudCwgdGhlIGBkZWZpbml0aW9uYCBpcyBhbHNvIGEgQ29tcG9uZW50LCBzaW5jZSBEaXJlY3RpdmVzIGNhblxuICAgICAgICAgIC8vIG5vdCBpbmhlcml0IENvbXBvbmVudHMgKHdlIHRocm93IGFuIGVycm9yIGFib3ZlIGFuZCBjYW5ub3QgcmVhY2ggdGhpcyBjb2RlKS5cbiAgICAgICAgICBjb25zdCBkZWZEYXRhID0gKGRlZmluaXRpb24gYXMgQ29tcG9uZW50RGVmPGFueT4pLmRhdGE7XG4gICAgICAgICAgZGVmRGF0YS5hbmltYXRpb24gPSAoZGVmRGF0YS5hbmltYXRpb24gfHwgW10pLmNvbmNhdChzdXBlckRlZi5kYXRhLmFuaW1hdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbmhlcml0IGhvb2tzXG4gICAgICAgIC8vIEFzc3VtZSBzdXBlciBjbGFzcyBpbmhlcml0YW5jZSBmZWF0dXJlIGhhcyBhbHJlYWR5IHJ1bi5cbiAgICAgICAgd3JpdGVhYmxlRGVmLmFmdGVyQ29udGVudENoZWNrZWQgPVxuICAgICAgICAgICAgd3JpdGVhYmxlRGVmLmFmdGVyQ29udGVudENoZWNrZWQgfHwgc3VwZXJEZWYuYWZ0ZXJDb250ZW50Q2hlY2tlZDtcbiAgICAgICAgd3JpdGVhYmxlRGVmLmFmdGVyQ29udGVudEluaXQgPSBkZWZpbml0aW9uLmFmdGVyQ29udGVudEluaXQgfHwgc3VwZXJEZWYuYWZ0ZXJDb250ZW50SW5pdDtcbiAgICAgICAgd3JpdGVhYmxlRGVmLmFmdGVyVmlld0NoZWNrZWQgPSBkZWZpbml0aW9uLmFmdGVyVmlld0NoZWNrZWQgfHwgc3VwZXJEZWYuYWZ0ZXJWaWV3Q2hlY2tlZDtcbiAgICAgICAgd3JpdGVhYmxlRGVmLmFmdGVyVmlld0luaXQgPSBkZWZpbml0aW9uLmFmdGVyVmlld0luaXQgfHwgc3VwZXJEZWYuYWZ0ZXJWaWV3SW5pdDtcbiAgICAgICAgd3JpdGVhYmxlRGVmLmRvQ2hlY2sgPSBkZWZpbml0aW9uLmRvQ2hlY2sgfHwgc3VwZXJEZWYuZG9DaGVjaztcbiAgICAgICAgd3JpdGVhYmxlRGVmLm9uRGVzdHJveSA9IGRlZmluaXRpb24ub25EZXN0cm95IHx8IHN1cGVyRGVmLm9uRGVzdHJveTtcbiAgICAgICAgd3JpdGVhYmxlRGVmLm9uSW5pdCA9IGRlZmluaXRpb24ub25Jbml0IHx8IHN1cGVyRGVmLm9uSW5pdDtcbiAgICAgIH1cblxuICAgICAgLy8gUnVuIHBhcmVudCBmZWF0dXJlc1xuICAgICAgY29uc3QgZmVhdHVyZXMgPSBzdXBlckRlZi5mZWF0dXJlcztcbiAgICAgIGlmIChmZWF0dXJlcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUubmdJbmhlcml0KSB7XG4gICAgICAgICAgICAoZmVhdHVyZSBhcyBEaXJlY3RpdmVEZWZGZWF0dXJlKShkZWZpbml0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgYEluaGVyaXREZWZpbml0aW9uRmVhdHVyZWAgaXMgYSBwYXJ0IG9mIHRoZSBjdXJyZW50IGBzdXBlckRlZmAsIGl0IG1lYW5zIHRoYXQgdGhpc1xuICAgICAgICAgIC8vIGRlZiBhbHJlYWR5IGhhcyBhbGwgdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBpbmhlcml0ZWQgZnJvbSBpdHMgc3VwZXIgY2xhc3MoZXMpLCBzbyB3ZVxuICAgICAgICAgIC8vIGNhbiBzdG9wIG1lcmdpbmcgZmllbGRzIGZyb20gc3VwZXIgY2xhc3Nlcy4gSG93ZXZlciB3ZSBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGVcbiAgICAgICAgICAvLyBwcm90b3R5cGUgY2hhaW4gdG8gbG9vayBmb3IgY2xhc3NlcyB0aGF0IG1pZ2h0IGNvbnRhaW4gb3RoZXIgXCJmZWF0dXJlc1wiIChsaWtlXG4gICAgICAgICAgLy8gTmdPbkNoYW5nZXMpLCB3aGljaCB3ZSBzaG91bGQgaW52b2tlIGZvciB0aGUgb3JpZ2luYWwgYGRlZmluaXRpb25gLiBXZSBzZXQgdGhlXG4gICAgICAgICAgLy8gYHNob3VsZEluaGVyaXRGaWVsZHNgIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCwgZXNzZW50aWFsbHkgc2tpcHBpbmcgZmllbGRzIGluaGVyaXRhbmNlXG4gICAgICAgICAgLy8gbG9naWMgYW5kIG9ubHkgaW52b2tpbmcgZnVuY3Rpb25zIGZyb20gdGhlIFwiZmVhdHVyZXNcIiBsaXN0LlxuICAgICAgICAgIGlmIChmZWF0dXJlID09PSDJtcm1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlKSB7XG4gICAgICAgICAgICBzaG91bGRJbmhlcml0RmllbGRzID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3VwZXJUeXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHN1cGVyVHlwZSk7XG4gIH1cbiAgbWVyZ2VIb3N0QXR0cnNBY3Jvc3NJbmhlcml0YW5jZShpbmhlcml0YW5jZUNoYWluKTtcbn1cblxuLyoqXG4gKiBNZXJnZSB0aGUgYGhvc3RBdHRyc2AgYW5kIGBob3N0VmFyc2AgZnJvbSB0aGUgaW5oZXJpdGVkIHBhcmVudCB0byB0aGUgYmFzZSBjbGFzcy5cbiAqXG4gKiBAcGFyYW0gaW5oZXJpdGFuY2VDaGFpbiBBIGxpc3Qgb2YgYFdyaXRhYmxlRGVmc2Agc3RhcnRpbmcgYXQgdGhlIHRvcCBtb3N0IHR5cGUgYW5kIGxpc3RpbmdcbiAqIHN1Yi10eXBlcyBpbiBvcmRlci4gRm9yIGVhY2ggdHlwZSB0YWtlIHRoZSBgaG9zdEF0dHJzYCBhbmQgYGhvc3RWYXJzYCBhbmQgbWVyZ2UgaXQgd2l0aCB0aGUgY2hpbGRcbiAqIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlSG9zdEF0dHJzQWNyb3NzSW5oZXJpdGFuY2UoaW5oZXJpdGFuY2VDaGFpbjogV3JpdGFibGVEZWZbXSkge1xuICBsZXQgaG9zdFZhcnM6IG51bWJlciA9IDA7XG4gIGxldCBob3N0QXR0cnM6IFRBdHRyaWJ1dGVzfG51bGwgPSBudWxsO1xuICAvLyBXZSBwcm9jZXNzIHRoZSBpbmhlcml0YW5jZSBvcmRlciBmcm9tIHRoZSBiYXNlIHRvIHRoZSBsZWF2ZXMgaGVyZS5cbiAgZm9yIChsZXQgaSA9IGluaGVyaXRhbmNlQ2hhaW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCBkZWYgPSBpbmhlcml0YW5jZUNoYWluW2ldO1xuICAgIC8vIEZvciBlYWNoIGBob3N0VmFyc2AsIHdlIG5lZWQgdG8gYWRkIHRoZSBzdXBlcmNsYXNzIGFtb3VudC5cbiAgICBkZWYuaG9zdFZhcnMgPSAoaG9zdFZhcnMgKz0gZGVmLmhvc3RWYXJzKTtcbiAgICAvLyBmb3IgZWFjaCBgaG9zdEF0dHJzYCB3ZSBuZWVkIHRvIG1lcmdlIGl0IHdpdGggc3VwZXJjbGFzcy5cbiAgICBkZWYuaG9zdEF0dHJzID1cbiAgICAgICAgbWVyZ2VIb3N0QXR0cnMoZGVmLmhvc3RBdHRycywgaG9zdEF0dHJzID0gbWVyZ2VIb3N0QXR0cnMoaG9zdEF0dHJzLCBkZWYuaG9zdEF0dHJzKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF5YmVVbndyYXBFbXB0eTxUPih2YWx1ZTogVFtdKTogVFtdO1xuZnVuY3Rpb24gbWF5YmVVbndyYXBFbXB0eTxUPih2YWx1ZTogVCk6IFQ7XG5mdW5jdGlvbiBtYXliZVVud3JhcEVtcHR5KHZhbHVlOiBhbnkpOiBhbnkge1xuICBpZiAodmFsdWUgPT09IEVNUFRZX09CSikge1xuICAgIHJldHVybiB7fTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gRU1QVFlfQVJSQVkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaGVyaXRWaWV3UXVlcnkoZGVmaW5pdGlvbjogV3JpdGFibGVEZWYsIHN1cGVyVmlld1F1ZXJ5OiBWaWV3UXVlcmllc0Z1bmN0aW9uPGFueT4pIHtcbiAgY29uc3QgcHJldlZpZXdRdWVyeSA9IGRlZmluaXRpb24udmlld1F1ZXJ5O1xuICBpZiAocHJldlZpZXdRdWVyeSkge1xuICAgIGRlZmluaXRpb24udmlld1F1ZXJ5ID0gKHJmLCBjdHgpID0+IHtcbiAgICAgIHN1cGVyVmlld1F1ZXJ5KHJmLCBjdHgpO1xuICAgICAgcHJldlZpZXdRdWVyeShyZiwgY3R4KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGRlZmluaXRpb24udmlld1F1ZXJ5ID0gc3VwZXJWaWV3UXVlcnk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5oZXJpdENvbnRlbnRRdWVyaWVzKFxuICAgIGRlZmluaXRpb246IFdyaXRhYmxlRGVmLCBzdXBlckNvbnRlbnRRdWVyaWVzOiBDb250ZW50UXVlcmllc0Z1bmN0aW9uPGFueT4pIHtcbiAgY29uc3QgcHJldkNvbnRlbnRRdWVyaWVzID0gZGVmaW5pdGlvbi5jb250ZW50UXVlcmllcztcbiAgaWYgKHByZXZDb250ZW50UXVlcmllcykge1xuICAgIGRlZmluaXRpb24uY29udGVudFF1ZXJpZXMgPSAocmYsIGN0eCwgZGlyZWN0aXZlSW5kZXgpID0+IHtcbiAgICAgIHN1cGVyQ29udGVudFF1ZXJpZXMocmYsIGN0eCwgZGlyZWN0aXZlSW5kZXgpO1xuICAgICAgcHJldkNvbnRlbnRRdWVyaWVzKHJmLCBjdHgsIGRpcmVjdGl2ZUluZGV4KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGRlZmluaXRpb24uY29udGVudFF1ZXJpZXMgPSBzdXBlckNvbnRlbnRRdWVyaWVzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaGVyaXRIb3N0QmluZGluZ3MoXG4gICAgZGVmaW5pdGlvbjogV3JpdGFibGVEZWYsIHN1cGVySG9zdEJpbmRpbmdzOiBIb3N0QmluZGluZ3NGdW5jdGlvbjxhbnk+KSB7XG4gIGNvbnN0IHByZXZIb3N0QmluZGluZ3MgPSBkZWZpbml0aW9uLmhvc3RCaW5kaW5ncztcbiAgaWYgKHByZXZIb3N0QmluZGluZ3MpIHtcbiAgICBkZWZpbml0aW9uLmhvc3RCaW5kaW5ncyA9IChyZjogUmVuZGVyRmxhZ3MsIGN0eDogYW55KSA9PiB7XG4gICAgICBzdXBlckhvc3RCaW5kaW5ncyhyZiwgY3R4KTtcbiAgICAgIHByZXZIb3N0QmluZGluZ3MocmYsIGN0eCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbml0aW9uLmhvc3RCaW5kaW5ncyA9IHN1cGVySG9zdEJpbmRpbmdzO1xuICB9XG59Il19