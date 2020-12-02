/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/errors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { stringify } from '../util/stringify';
import { TVIEW } from './interfaces/view';
import { INTERPOLATION_DELIMITER } from './util/misc_utils';
/**
 * Called when directives inject each other (creating a circular dependency)
 * @param {?} token
 * @return {?}
 */
export function throwCyclicDependencyError(token) {
    throw new Error(`Cannot instantiate cyclic dependency! ${token}`);
}
/**
 * Called when there are multiple component selectors that match a given node
 * @param {?} tNode
 * @return {?}
 */
export function throwMultipleComponentError(tNode) {
    throw new Error(`Multiple components match node with tagname ${tNode.tagName}`);
}
/**
 * @return {?}
 */
export function throwMixedMultiProviderError() {
    throw new Error(`Cannot mix multi providers and regular providers`);
}
/**
 * @param {?=} ngModuleType
 * @param {?=} providers
 * @param {?=} provider
 * @return {?}
 */
export function throwInvalidProviderError(ngModuleType, providers, provider) {
    /** @type {?} */
    let ngModuleDetail = '';
    if (ngModuleType && providers) {
        /** @type {?} */
        const providerDetail = providers.map((/**
         * @param {?} v
         * @return {?}
         */
        v => v == provider ? '?' + provider + '?' : '...'));
        ngModuleDetail =
            ` - only instances of Provider and Type are allowed, got: [${providerDetail.join(', ')}]`;
    }
    throw new Error(`Invalid provider for the NgModule '${stringify(ngModuleType)}'` + ngModuleDetail);
}
/**
 * Throws an ExpressionChangedAfterChecked error if checkNoChanges mode is on.
 * @param {?} creationMode
 * @param {?} oldValue
 * @param {?} currValue
 * @param {?=} propName
 * @return {?}
 */
export function throwErrorIfNoChangesMode(creationMode, oldValue, currValue, propName) {
    /** @type {?} */
    const field = propName ? ` for '${propName}'` : '';
    /** @type {?} */
    let msg = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value${field}: '${oldValue}'. Current value: '${currValue}'.`;
    if (creationMode) {
        msg +=
            ` It seems like the view has been created after its parent and its children have been dirty checked.` +
                ` Has it been created in a change detection hook?`;
    }
    // TODO: include debug context, see `viewDebugError` function in
    // `packages/core/src/view/errors.ts` for reference.
    throw new Error(msg);
}
/**
 * @param {?} lView
 * @param {?} rootIndex
 * @param {?} expressionIndex
 * @param {?} meta
 * @param {?} changedValue
 * @return {?}
 */
function constructDetailsForInterpolation(lView, rootIndex, expressionIndex, meta, changedValue) {
    const [propName, prefix, ...chunks] = meta.split(INTERPOLATION_DELIMITER);
    /** @type {?} */
    let oldValue = prefix;
    /** @type {?} */
    let newValue = prefix;
    for (let i = 0; i < chunks.length; i++) {
        /** @type {?} */
        const slotIdx = rootIndex + i;
        oldValue += `${lView[slotIdx]}${chunks[i]}`;
        newValue += `${slotIdx === expressionIndex ? changedValue : lView[slotIdx]}${chunks[i]}`;
    }
    return { propName, oldValue, newValue };
}
/**
 * Constructs an object that contains details for the ExpressionChangedAfterItHasBeenCheckedError:
 * - property name (for property bindings or interpolations)
 * - old and new values, enriched using information from metadata
 *
 * More information on the metadata storage format can be found in `storePropertyBindingMetadata`
 * function description.
 * @param {?} lView
 * @param {?} bindingIndex
 * @param {?} oldValue
 * @param {?} newValue
 * @return {?}
 */
export function getExpressionChangedErrorDetails(lView, bindingIndex, oldValue, newValue) {
    /** @type {?} */
    const tData = lView[TVIEW].data;
    /** @type {?} */
    const metadata = tData[bindingIndex];
    if (typeof metadata === 'string') {
        // metadata for property interpolation
        if (metadata.indexOf(INTERPOLATION_DELIMITER) > -1) {
            return constructDetailsForInterpolation(lView, bindingIndex, bindingIndex, metadata, newValue);
        }
        // metadata for property binding
        return { propName: metadata, oldValue, newValue };
    }
    // metadata is not available for this expression, check if this expression is a part of the
    // property interpolation by going from the current binding index left and look for a string that
    // contains INTERPOLATION_DELIMITER, the layout in tView.data for this case will look like this:
    // [..., 'id�Prefix � and � suffix', null, null, null, ...]
    if (metadata === null) {
        /** @type {?} */
        let idx = bindingIndex - 1;
        while (typeof tData[idx] !== 'string' && tData[idx + 1] === null) {
            idx--;
        }
        /** @type {?} */
        const meta = tData[idx];
        if (typeof meta === 'string') {
            /** @type {?} */
            const matches = meta.match(new RegExp(INTERPOLATION_DELIMITER, 'g'));
            // first interpolation delimiter separates property name from interpolation parts (in case of
            // property interpolations), so we subtract one from total number of found delimiters
            if (matches && (matches.length - 1) > bindingIndex - idx) {
                return constructDetailsForInterpolation(lView, idx, bindingIndex, meta, newValue);
            }
        }
    }
    return { propName: undefined, oldValue, newValue };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFHNUMsT0FBTyxFQUFRLEtBQUssRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUFLMUQsTUFBTSxVQUFVLDBCQUEwQixDQUFDLEtBQVU7SUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNwRSxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsS0FBWTtJQUN0RCxNQUFNLElBQUksS0FBSyxDQUFDLCtDQUErQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNsRixDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLDRCQUE0QjtJQUMxQyxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7QUFDdEUsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSx5QkFBeUIsQ0FDckMsWUFBZ0MsRUFBRSxTQUFpQixFQUFFLFFBQWM7O1FBQ2pFLGNBQWMsR0FBRyxFQUFFO0lBQ3ZCLElBQUksWUFBWSxJQUFJLFNBQVMsRUFBRTs7Y0FDdkIsY0FBYyxHQUFHLFNBQVMsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDO1FBQ3ZGLGNBQWM7WUFDViw2REFBNkQsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0tBQy9GO0lBRUQsTUFB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LE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNwRSw2RkFBNkY7WUFDN0YscUZBQXFGO1lBQ3JGLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxZQUFZLEdBQUcsR0FBRyxFQUFFO2dCQUN4RCxPQUFPLGdDQUFnQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNuRjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUM7QUFDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtJbmplY3RvclR5cGV9IGZyb20gJy4uL2RpL2ludGVyZmFjZS9kZWZzJztcbmltcG9ydCB7c3RyaW5naWZ5fSBmcm9tICcuLi91dGlsL3N0cmluZ2lmeSc7XG5cbmltcG9ydCB7VE5vZGV9IGZyb20gJy4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7TFZpZXcsIFRWSUVXfSBmcm9tICcuL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge0lOVEVSUE9MQVRJT05fREVMSU1JVEVSfSBmcm9tICcuL3V0aWwvbWlzY191dGlscyc7XG5cblxuXG4vKiogQ2FsbGVkIHdoZW4gZGlyZWN0aXZlcyBpbmplY3QgZWFjaCBvdGhlciAoY3JlYXRpbmcgYSBjaXJjdWxhciBkZXBlbmRlbmN5KSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm93Q3ljbGljRGVwZW5kZW5jeUVycm9yKHRva2VuOiBhbnkpOiBuZXZlciB7XG4gIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGluc3RhbnRpYXRlIGN5Y2xpYyBkZXBlbmRlbmN5ISAke3Rva2VufWApO1xufVxuXG4vKiogQ2FsbGVkIHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCBtYXRjaCBhIGdpdmVuIG5vZGUgKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd011bHRpcGxlQ29tcG9uZW50RXJyb3IodE5vZGU6IFROb2RlKTogbmV2ZXIge1xuICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNvbXBvbmVudHMgbWF0Y2ggbm9kZSB3aXRoIHRhZ25hbWUgJHt0Tm9kZS50YWdOYW1lfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dNaXhlZE11bHRpUHJvdmlkZXJFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgbWl4IG11bHRpIHByb3ZpZGVycyBhbmQgcmVndWxhciBwcm92aWRlcnNgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93SW52YWxpZFByb3ZpZGVyRXJyb3IoXG4gICAgbmdNb2R1bGVUeXBlPzogSW5qZWN0b3JUeXBlPGFueT4sIHByb3ZpZGVycz86IGFueVtdLCBwcm92aWRlcj86IGFueSkge1xuICBsZXQgbmdNb2R1bGVEZXRhaWwgPSAnJztcbiAgaWYgKG5nTW9kdWxlVHlwZSAmJiBwcm92aWRlcnMpIHtcbiAgICBjb25zdCBwcm92aWRlckRldGFpbCA9IHByb3ZpZGVycy5tYXAodiA9PiB2ID09IHByb3ZpZGVyID8gJz8nICsgcHJvdmlkZXIgKyAnPycgOiAnLi4uJyk7XG4gICAgbmdNb2R1bGVEZXRhaWwgPVxuICAgICAgICBgIC0gb25seSBpbnN0YW5jZXMgb2YgUHJvdmlkZXIgYW5kIFR5cGUgYXJlIGFsbG93ZWQsIGdvdDogWyR7cHJvdmlkZXJEZXRhaWwuam9pbignLCAnKX1dYDtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIHByb3ZpZGVyIGZvciB0aGUgTmdNb2R1bGUgJyR7c3RyaW5naWZ5KG5nTW9kdWxlVHlwZSl9J2AgKyBuZ01vZHVsZURldGFpbCk7XG59XG5cbi8qKiBUaHJvd3MgYW4gRXhwcmVzc2lvbkNoYW5nZWRBZnRlckNoZWNrZWQgZXJyb3IgaWYgY2hlY2tOb0NoYW5nZXMgbW9kZSBpcyBvbi4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0Vycm9ySWZOb0NoYW5nZXNNb2RlKFxuICAgIGNyZWF0aW9uTW9kZTogYm9vbGVhbiwgb2xkVmFsdWU6IGFueSwgY3VyclZhbHVlOiBhbnksIHByb3BOYW1lPzogc3RyaW5nKTogbmV2ZXJ8dm9pZCB7XG4gIGNvbnN0IGZpZWxkID0gcHJvcE5hbWUgPyBgIGZvciAnJHtwcm9wTmFtZX0nYCA6ICcnO1xuICBsZXQgbXNnID1cbiAgICAgIGBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yOiBFeHByZXNzaW9uIGhhcyBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBjaGVja2VkLiBQcmV2aW91cyB2YWx1ZSR7XG4gICAgICAgICAgZmllbGR9OiAnJHtvbGRWYWx1ZX0nLiBDdXJyZW50IHZhbHVlOiAnJHtjdXJyVmFsdWV9Jy5gO1xuICBpZiAoY3JlYXRpb25Nb2RlKSB7XG4gICAgbXNnICs9XG4gICAgICAgIGAgSXQgc2VlbXMgbGlrZSB0aGUgdmlldyBoYXMgYmVlbiBjcmVhdGVkIGFmdGVyIGl0cyBwYXJlbnQgYW5kIGl0cyBjaGlsZHJlbiBoYXZlIGJlZW4gZGlydHkgY2hlY2tlZC5gICtcbiAgICAgICAgYCBIYXMgaXQgYmVlbiBjcmVhdGVkIGluIGEgY2hhbmdlIGRldGVjdGlvbiBob29rP2A7XG4gIH1cbiAgLy8gVE9ETzogaW5jbHVkZSBkZWJ1ZyBjb250ZXh0LCBzZWUgYHZpZXdEZWJ1Z0Vycm9yYCBmdW5jdGlvbiBpblxuICAvLyBgcGFja2FnZXMvY29yZS9zcmMvdmlldy9lcnJvcnMudHNgIGZvciByZWZlcmVuY2UuXG4gIHRocm93IG5ldyBFcnJvcihtc2cpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3REZXRhaWxzRm9ySW50ZXJwb2xhdGlvbihcbiAgICBsVmlldzogTFZpZXcsIHJvb3RJbmRleDogbnVtYmVyLCBleHByZXNzaW9uSW5kZXg6IG51bWJlciwgbWV0YTogc3RyaW5nLCBjaGFuZ2VkVmFsdWU6IGFueSkge1xuICBjb25zdCBbcHJvcE5hbWUsIHByZWZpeCwgLi4uY2h1bmtzXSA9IG1ldGEuc3BsaXQoSU5URVJQT0xBVElPTl9ERUxJTUlURVIpO1xuICBsZXQgb2xkVmFsdWUgPSBwcmVmaXgsIG5ld1ZhbHVlID0gcHJlZml4O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNodW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNsb3RJZHggPSByb290SW5kZXggKyBpO1xuICAgIG9sZFZhbHVlICs9IGAke2xWaWV3W3Nsb3RJZHhdfSR7Y2h1bmtzW2ldfWA7XG4gICAgbmV3VmFsdWUgKz0gYCR7c2xvdElkeCA9PT0gZXhwcmVzc2lvbkluZGV4ID8gY2hhbmdlZFZhbHVlIDogbFZpZXdbc2xvdElkeF19JHtjaHVua3NbaV19YDtcbiAgfVxuICByZXR1cm4ge3Byb3BOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWV9O1xufVxuXG4vKipcbiAqIENvbnN0cnVjdHMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgZGV0YWlscyBmb3IgdGhlIEV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXJyb3I6XG4gKiAtIHByb3BlcnR5IG5hbWUgKGZvciBwcm9wZXJ0eSBiaW5kaW5ncyBvciBpbnRlcnBvbGF0aW9ucylcbiAqIC0gb2xkIGFuZCBuZXcgdmFsdWVzLCBlbnJpY2hlZCB1c2luZyBpbmZvcm1hdGlvbiBmcm9tIG1ldGFkYXRhXG4gKlxuICogTW9yZSBpbmZvcm1hdGlvbiBvbiB0aGUgbWV0YWRhdGEgc3RvcmFnZSBmb3JtYXQgY2FuIGJlIGZvdW5kIGluIGBzdG9yZVByb3BlcnR5QmluZGluZ01ldGFkYXRhYFxuICogZnVuY3Rpb24gZGVzY3JpcHRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHByZXNzaW9uQ2hhbmdlZEVycm9yRGV0YWlscyhcbiAgICBsVmlldzogTFZpZXcsIGJpbmRpbmdJbmRleDogbnVtYmVyLCBvbGRWYWx1ZTogYW55LFxuICAgIG5ld1ZhbHVlOiBhbnkpOiB7cHJvcE5hbWU/OiBzdHJpbmcsIG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnl9IHtcbiAgY29uc3QgdERhdGEgPSBsVmlld1tUVklFV10uZGF0YTtcbiAgY29uc3QgbWV0YWRhdGEgPSB0RGF0YVtiaW5kaW5nSW5kZXhdO1xuXG4gIGlmICh0eXBlb2YgbWV0YWRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gbWV0YWRhdGEgZm9yIHByb3BlcnR5IGludGVycG9sYXRpb25cbiAgICBpZiAobWV0YWRhdGEuaW5kZXhPZihJTlRFUlBPTEFUSU9OX0RFTElNSVRFUikgPiAtMSkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdERldGFpbHNGb3JJbnRlcnBvbGF0aW9uKFxuICAgICAgICAgIGxWaWV3LCBiaW5kaW5nSW5kZXgsIGJpbmRpbmdJbmRleCwgbWV0YWRhdGEsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgLy8gbWV0YWRhdGEgZm9yIHByb3BlcnR5IGJpbmRpbmdcbiAgICByZXR1cm4ge3Byb3BOYW1lOiBtZXRhZGF0YSwgb2xkVmFsdWUsIG5ld1ZhbHVlfTtcbiAgfVxuXG4gIC8vIG1ldGFkYXRhIGlzIG5vdCBhdmFpbGFibGUgZm9yIHRoaXMgZXhwcmVzc2lvbiwgY2hlY2sgaWYgdGhpcyBleHByZXNzaW9uIGlzIGEgcGFydCBvZiB0aGVcbiAgLy8gcHJvcGVydHkgaW50ZXJwb2xhdGlvbiBieSBnb2luZyBmcm9tIHRoZSBjdXJyZW50IGJpbmRpbmcgaW5kZXggbGVmdCBhbmQgbG9vayBmb3IgYSBzdHJpbmcgdGhhdFxuICAvLyBjb250YWlucyBJTlRFUlBPTEFUSU9OX0RFTElNSVRFUiwgdGhlIGxheW91dCBpbiB0Vmlldy5kYXRhIGZvciB0aGlzIGNhc2Ugd2lsbCBsb29rIGxpa2UgdGhpczpcbiAgLy8gWy4uLiwgJ2lk77+9UHJlZml4IO+/vSBhbmQg77+9IHN1ZmZpeCcsIG51bGwsIG51bGwsIG51bGwsIC4uLl1cbiAgaWYgKG1ldGFkYXRhID09PSBudWxsKSB7XG4gICAgbGV0IGlkeCA9IGJpbmRpbmdJbmRleCAtIDE7XG4gICAgd2hpbGUgKHR5cGVvZiB0RGF0YVtpZHhdICE9PSAnc3RyaW5nJyAmJiB0RGF0YVtpZHggKyAxXSA9PT0gbnVsbCkge1xuICAgICAgaWR4LS07XG4gICAgfVxuICAgIGNvbnN0IG1ldGEgPSB0RGF0YVtpZHhdO1xuICAgIGlmICh0eXBlb2YgbWV0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhLm1hdGNoKG5ldyBSZWdFeHAoSU5URVJQT0xBVElPTl9ERUxJTUlURVIsICdnJykpO1xuICAgICAgLy8gZmlyc3QgaW50ZXJwb2xhdGlvbiBkZWxpbWl0ZXIgc2VwYXJhdGVzIHByb3BlcnR5IG5hbWUgZnJvbSBpbnRlcnBvbGF0aW9uIHBhcnRzIChpbiBjYXNlIG9mXG4gICAgICAvLyBwcm9wZXJ0eSBpbnRlcnBvbGF0aW9ucyksIHNvIHdlIHN1YnRyYWN0IG9uZSBmcm9tIHRvdGFsIG51bWJlciBvZiBmb3VuZCBkZWxpbWl0ZXJzXG4gICAgICBpZiAobWF0Y2hlcyAmJiAobWF0Y2hlcy5sZW5ndGggLSAxKSA+IGJpbmRpbmdJbmRleCAtIGlkeCkge1xuICAgICAgICByZXR1cm4gY29uc3RydWN0RGV0YWlsc0ZvckludGVycG9sYXRpb24obFZpZXcsIGlkeCwgYmluZGluZ0luZGV4LCBtZXRhLCBuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB7cHJvcE5hbWU6IHVuZGVmaW5lZCwgb2xkVmFsdWUsIG5ld1ZhbHVlfTtcbn0iXX0=