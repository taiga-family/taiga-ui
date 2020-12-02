/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/view/pure_expression.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { newArray } from '../util/array_utils';
import { asPureExpressionData } from './types';
import { calcBindingFlags, checkAndUpdateBinding } from './util';
/**
 * @param {?} checkIndex
 * @param {?} argCount
 * @return {?}
 */
export function purePipeDef(checkIndex, argCount) {
    // argCount + 1 to include the pipe as first arg
    return _pureExpressionDef(128 /* TypePurePipe */, checkIndex, newArray(argCount + 1));
}
/**
 * @param {?} checkIndex
 * @param {?} argCount
 * @return {?}
 */
export function pureArrayDef(checkIndex, argCount) {
    return _pureExpressionDef(32 /* TypePureArray */, checkIndex, newArray(argCount));
}
/**
 * @param {?} checkIndex
 * @param {?} propToIndex
 * @return {?}
 */
export function pureObjectDef(checkIndex, propToIndex) {
    /** @type {?} */
    const keys = Object.keys(propToIndex);
    /** @type {?} */
    const nbKeys = keys.length;
    /** @type {?} */
    const propertyNames = [];
    for (let i = 0; i < nbKeys; i++) {
        /** @type {?} */
        const key = keys[i];
        /** @type {?} */
        const index = propToIndex[key];
        propertyNames.push(key);
    }
    return _pureExpressionDef(64 /* TypePureObject */, checkIndex, propertyNames);
}
/**
 * @param {?} flags
 * @param {?} checkIndex
 * @param {?} propertyNames
 * @return {?}
 */
function _pureExpressionDef(flags, checkIndex, propertyNames) {
    /** @type {?} */
    const bindings = [];
    for (let i = 0; i < propertyNames.length; i++) {
        /** @type {?} */
        const prop = propertyNames[i];
        bindings.push({
            flags: 8 /* TypeProperty */,
            name: prop,
            ns: null,
            nonMinifiedName: prop,
            securityContext: null,
            suffix: null
        });
    }
    return {
        // will bet set by the view definition
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        // regular values
        checkIndex,
        flags,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex: -1,
        childCount: 0,
        bindings,
        bindingFlags: calcBindingFlags(bindings),
        outputs: [],
        element: null,
        provider: null,
        text: null,
        query: null,
        ngContent: null
    };
}
/**
 * @param {?} view
 * @param {?} def
 * @return {?}
 */
export function createPureExpression(view, def) {
    return { value: undefined };
}
/**
 * @param {?} view
 * @param {?} def
 * @param {?} v0
 * @param {?} v1
 * @param {?} v2
 * @param {?} v3
 * @param {?} v4
 * @param {?} v5
 * @param {?} v6
 * @param {?} v7
 * @param {?} v8
 * @param {?} v9
 * @return {?}
 */
export function checkAndUpdatePureExpressionInline(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    /** @type {?} */
    const bindings = def.bindings;
    /** @type {?} */
    let changed = false;
    /** @type {?} */
    const bindLen = bindings.length;
    if (bindLen > 0 && checkAndUpdateBinding(view, def, 0, v0))
        changed = true;
    if (bindLen > 1 && checkAndUpdateBinding(view, def, 1, v1))
        changed = true;
    if (bindLen > 2 && checkAndUpdateBinding(view, def, 2, v2))
        changed = true;
    if (bindLen > 3 && checkAndUpdateBinding(view, def, 3, v3))
        changed = true;
    if (bindLen > 4 && checkAndUpdateBinding(view, def, 4, v4))
        changed = true;
    if (bindLen > 5 && checkAndUpdateBinding(view, def, 5, v5))
        changed = true;
    if (bindLen > 6 && checkAndUpdateBinding(view, def, 6, v6))
        changed = true;
    if (bindLen > 7 && checkAndUpdateBinding(view, def, 7, v7))
        changed = true;
    if (bindLen > 8 && checkAndUpdateBinding(view, def, 8, v8))
        changed = true;
    if (bindLen > 9 && checkAndUpdateBinding(view, def, 9, v9))
        changed = true;
    if (changed) {
        /** @type {?} */
        const data = asPureExpressionData(view, def.nodeIndex);
        /** @type {?} */
        let value;
        switch (def.flags & 201347067 /* Types */) {
            case 32 /* TypePureArray */:
                value = [];
                if (bindLen > 0)
                    value.push(v0);
                if (bindLen > 1)
                    value.push(v1);
                if (bindLen > 2)
                    value.push(v2);
                if (bindLen > 3)
                    value.push(v3);
                if (bindLen > 4)
                    value.push(v4);
                if (bindLen > 5)
                    value.push(v5);
                if (bindLen > 6)
                    value.push(v6);
                if (bindLen > 7)
                    value.push(v7);
                if (bindLen > 8)
                    value.push(v8);
                if (bindLen > 9)
                    value.push(v9);
                break;
            case 64 /* TypePureObject */:
                value = {};
                if (bindLen > 0)
                    value[(/** @type {?} */ (bindings[0].name))] = v0;
                if (bindLen > 1)
                    value[(/** @type {?} */ (bindings[1].name))] = v1;
                if (bindLen > 2)
                    value[(/** @type {?} */ (bindings[2].name))] = v2;
                if (bindLen > 3)
                    value[(/** @type {?} */ (bindings[3].name))] = v3;
                if (bindLen > 4)
                    value[(/** @type {?} */ (bindings[4].name))] = v4;
                if (bindLen > 5)
                    value[(/** @type {?} */ (bindings[5].name))] = v5;
                if (bindLen > 6)
                    value[(/** @type {?} */ (bindings[6].name))] = v6;
                if (bindLen > 7)
                    value[(/** @type {?} */ (bindings[7].name))] = v7;
                if (bindLen > 8)
                    value[(/** @type {?} */ (bindings[8].name))] = v8;
                if (bindLen > 9)
                    value[(/** @type {?} */ (bindings[9].name))] = v9;
                break;
            case 128 /* TypePurePipe */:
                /** @type {?} */
                const pipe = v0;
                switch (bindLen) {
                    case 1:
                        value = pipe.transform(v0);
                        break;
                    case 2:
                        value = pipe.transform(v1);
                        break;
                    case 3:
                        value = pipe.transform(v1, v2);
                        break;
                    case 4:
                        value = pipe.transform(v1, v2, v3);
                        break;
                    case 5:
                        value = pipe.transform(v1, v2, v3, v4);
                        break;
                    case 6:
                        value = pipe.transform(v1, v2, v3, v4, v5);
                        break;
                    case 7:
                        value = pipe.transform(v1, v2, v3, v4, v5, v6);
                        break;
                    case 8:
                        value = pipe.transform(v1, v2, v3, v4, v5, v6, v7);
                        break;
                    case 9:
                        value = pipe.transform(v1, v2, v3, v4, v5, v6, v7, v8);
                        break;
                    case 10:
                        value = pipe.transform(v1, v2, v3, v4, v5, v6, v7, v8, v9);
                        break;
                }
                break;
        }
        data.value = value;
    }
    return changed;
}
/**
 * @param {?} view
 * @param {?} def
 * @param {?} values
 * @return {?}
 */
export function checkAndUpdatePureExpressionDynamic(view, def, values) {
    /** @type {?} */
    const bindings = def.bindings;
    /** @type {?} */
    let changed = false;
    for (let i = 0; i < values.length; i++) {
        // Note: We need to loop over all values, so that
        // the old values are updates as well!
        if (checkAndUpdateBinding(view, def, i, values[i])) {
            changed = true;
        }
    }
    if (changed) {
        /** @type {?} */
        const data = asPureExpressionData(view, def.nodeIndex);
        /** @type {?} */
        let value;
        switch (def.flags & 201347067 /* Types */) {
            case 32 /* TypePureArray */:
                value = values;
                break;
            case 64 /* TypePureObject */:
                value = {};
                for (let i = 0; i < values.length; i++) {
                    value[(/** @type {?} */ (bindings[i].name))] = values[i];
                }
                break;
            case 128 /* TypePurePipe */:
                /** @type {?} */
                const pipe = values[0];
                /** @type {?} */
                const params = values.slice(1);
                value = ((/** @type {?} */ (pipe.transform)))(...params);
                break;
        }
        data.value = value;
    }
    return changed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZV9leHByZXNzaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvdmlldy9wdXJlX2V4cHJlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxvQkFBb0IsRUFBNkUsTUFBTSxTQUFTLENBQUM7QUFDekgsT0FBTyxFQUFDLGdCQUFnQixFQUFFLHFCQUFxQixFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFFL0QsTUFBTSxVQUFVLFdBQVcsQ0FBQyxVQUFrQixFQUFFLFFBQWdCO0lBQzlELGdEQUFnRDtJQUNoRCxPQUFPLGtCQUFrQix5QkFBeUIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLFVBQWtCLEVBQUUsUUFBZ0I7SUFDL0QsT0FBTyxrQkFBa0IseUJBQTBCLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNyRixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLFVBQWtCLEVBQUUsV0FBa0M7O1VBQzVFLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7VUFDL0IsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNOztVQUNwQixhQUFhLEdBQUcsRUFBRTtJQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUN6QixHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Y0FDYixLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUM5QixhQUFhLENBQUMsSUFBSSxDQUFDLEdB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QyxFQUFFLENBQUMsQ0FBQzt3QkFDM0IsTUFBTTtvQkFDUixLQUFLLENBQUM7d0JBQ0osS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUMvQixNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUNuQyxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDdkMsTUFBTTtvQkFDUixLQUFLLENBQUM7d0JBQ0osS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUMzQyxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUMvQyxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDbkQsTUFBTTtvQkFDUixLQUFLLENBQUM7d0JBQ0osS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN2RCxNQUFNO29CQUNSLEtBQUssRUFBRTt3QkFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUMzRCxNQUFNO2lCQUNUO2dCQUNELE1BQU07U0FDVDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxtQ0FBbUMsQ0FDL0MsSUFBYyxFQUFFLEdBQVksRUFBRSxNQUFhOztVQUN2QyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVE7O1FBQ3pCLE9BQU8sR0FBRyxLQUFLO0lBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLGlEQUFpRDtRQUNqRCxzQ0FBc0M7UUFDdEMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO0tBQ0Y7SUFDRCxJQUFJLE9BQU8sRUFBRTs7Y0FDTCxJQUFJLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUM7O1lBQ2xELEtBQVU7UUFDZCxRQUFRLEdBQUcsQ0FBQyxLQUFLLHdCQUFrQixFQUFFO1lBQ25DO2dCQUNFLEtBQUssR0FBRyxNQUFNLENBQUM7Z0JBQ2YsTUFBTTtZQUNSO2dCQUNFLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RDLEtBQUssQ0FBQyxtQkFBQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3RDO2dCQUNELE1BQU07WUFDUjs7c0JBQ1EsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7O3NCQUNoQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLEtBQUssR0FBRyxDQUFDLG1CQUFLLElBQUksQ0FBQyxTQUFTLEVBQUEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ3pDLE1BQU07U0FDVDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtuZXdBcnJheX0gZnJvbSAnLi4vdXRpbC9hcnJheV91dGlscyc7XG5cbmltcG9ydCB7YXNQdXJlRXhwcmVzc2lvbkRhdGEsIEJpbmRpbmdEZWYsIEJpbmRpbmdGbGFncywgTm9kZURlZiwgTm9kZUZsYWdzLCBQdXJlRXhwcmVzc2lvbkRhdGEsIFZpZXdEYXRhfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Y2FsY0JpbmRpbmdGbGFncywgY2hlY2tBbmRVcGRhdGVCaW5kaW5nfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHVyZVBpcGVEZWYoY2hlY2tJbmRleDogbnVtYmVyLCBhcmdDb3VudDogbnVtYmVyKTogTm9kZURlZiB7XG4gIC8vIGFyZ0NvdW50ICsgMSB0byBpbmNsdWRlIHRoZSBwaXBlIGFzIGZpcnN0IGFyZ1xuICByZXR1cm4gX3B1cmVFeHByZXNzaW9uRGVmKE5vZGVGbGFncy5UeXBlUHVyZVBpcGUsIGNoZWNrSW5kZXgsIG5ld0FycmF5KGFyZ0NvdW50ICsgMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVyZUFycmF5RGVmKGNoZWNrSW5kZXg6IG51bWJlciwgYXJnQ291bnQ6IG51bWJlcik6IE5vZGVEZWYge1xuICByZXR1cm4gX3B1cmVFeHByZXNzaW9uRGVmKE5vZGVGbGFncy5UeXBlUHVyZUFycmF5LCBjaGVja0luZGV4LCBuZXdBcnJheShhcmdDb3VudCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVyZU9iamVjdERlZihjaGVja0luZGV4OiBudW1iZXIsIHByb3BUb0luZGV4OiB7W3A6IHN0cmluZ106IG51bWJlcn0pOiBOb2RlRGVmIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BUb0luZGV4KTtcbiAgY29uc3QgbmJLZXlzID0ga2V5cy5sZW5ndGg7XG4gIGNvbnN0IHByb3BlcnR5TmFtZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYktleXM7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgY29uc3QgaW5kZXggPSBwcm9wVG9JbmRleFtrZXldO1xuICAgIHByb3BlcnR5TmFtZXMucHVzaChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIF9wdXJlRXhwcmVzc2lvbkRlZihOb2RlRmxhZ3MuVHlwZVB1cmVPYmplY3QsIGNoZWNrSW5kZXgsIHByb3BlcnR5TmFtZXMpO1xufVxuXG5mdW5jdGlvbiBfcHVyZUV4cHJlc3Npb25EZWYoXG4gICAgZmxhZ3M6IE5vZGVGbGFncywgY2hlY2tJbmRleDogbnVtYmVyLCBwcm9wZXJ0eU5hbWVzOiBzdHJpbmdbXSk6IE5vZGVEZWYge1xuICBjb25zdCBiaW5kaW5nczogQmluZGluZ0RlZltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb3AgPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgIGJpbmRpbmdzLnB1c2goe1xuICAgICAgZmxhZ3M6IEJpbmRpbmdGbGFncy5UeXBlUHJvcGVydHksXG4gICAgICBuYW1lOiBwcm9wLFxuICAgICAgbnM6IG51bGwsXG4gICAgICBub25NaW5pZmllZE5hbWU6IHByb3AsXG4gICAgICBzZWN1cml0eUNvbnRleHQ6IG51bGwsXG4gICAgICBzdWZmaXg6IG51bGxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIC8vIHdpbGwgYmV0IHNldCBieSB0aGUgdmlldyBkZWZpbml0aW9uXG4gICAgbm9kZUluZGV4OiAtMSxcbiAgICBwYXJlbnQ6IG51bGwsXG4gICAgcmVuZGVyUGFyZW50OiBudWxsLFxuICAgIGJpbmRpbmdJbmRleDogLTEsXG4gICAgb3V0cHV0SW5kZXg6IC0xLFxuICAgIC8vIHJlZ3VsYXIgdmFsdWVzXG4gICAgY2hlY2tJbmRleCxcbiAgICBmbGFncyxcbiAgICBjaGlsZEZsYWdzOiAwLFxuICAgIGRpcmVjdENoaWxkRmxhZ3M6IDAsXG4gICAgY2hpbGRNYXRjaGVkUXVlcmllczogMCxcbiAgICBtYXRjaGVkUXVlcmllczoge30sXG4gICAgbWF0Y2hlZFF1ZXJ5SWRzOiAwLFxuICAgIHJlZmVyZW5jZXM6IHt9LFxuICAgIG5nQ29udGVudEluZGV4OiAtMSxcbiAgICBjaGlsZENvdW50OiAwLFxuICAgIGJpbmRpbmdzLFxuICAgIGJpbmRpbmdGbGFnczogY2FsY0JpbmRpbmdGbGFncyhiaW5kaW5ncyksXG4gICAgb3V0cHV0czogW10sXG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBwcm92aWRlcjogbnVsbCxcbiAgICB0ZXh0OiBudWxsLFxuICAgIHF1ZXJ5OiBudWxsLFxuICAgIG5nQ29udGVudDogbnVsbFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHVyZUV4cHJlc3Npb24odmlldzogVmlld0RhdGEsIGRlZjogTm9kZURlZik6IFB1cmVFeHByZXNzaW9uRGF0YSB7XG4gIHJldHVybiB7dmFsdWU6IHVuZGVmaW5lZH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FuZFVwZGF0ZVB1cmVFeHByZXNzaW9uSW5saW5lKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBkZWY6IE5vZGVEZWYsIHYwOiBhbnksIHYxOiBhbnksIHYyOiBhbnksIHYzOiBhbnksIHY0OiBhbnksIHY1OiBhbnksIHY2OiBhbnksXG4gICAgdjc6IGFueSwgdjg6IGFueSwgdjk6IGFueSk6IGJvb2xlYW4ge1xuICBjb25zdCBiaW5kaW5ncyA9IGRlZi5iaW5kaW5ncztcbiAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgY29uc3QgYmluZExlbiA9IGJpbmRpbmdzLmxlbmd0aDtcbiAgaWYgKGJpbmRMZW4gPiAwICYmIGNoZWNrQW5kVXBkYXRlQmluZGluZyh2aWV3LCBkZWYsIDAsIHYwKSkgY2hhbmdlZCA9IHRydWU7XG4gIGlmIChiaW5kTGVuID4gMSAmJiBjaGVja0FuZFVwZGF0ZUJpbmRpbmcodmlldywgZGVmLCAxLCB2MSkpIGNoYW5nZWQgPSB0cnVlO1xuICBpZiAoYmluZExlbiA+IDIgJiYgY2hlY2tBbmRVcGRhdGVCaW5kaW5nKHZpZXcsIGRlZiwgMiwgdjIpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiAzICYmIGNoZWNrQW5kVXBkYXRlQmluZGluZyh2aWV3LCBkZWYsIDMsIHYzKSkgY2hhbmdlZCA9IHRydWU7XG4gIGlmIChiaW5kTGVuID4gNCAmJiBjaGVja0FuZFVwZGF0ZUJpbmRpbmcodmlldywgZGVmLCA0LCB2NCkpIGNoYW5nZWQgPSB0cnVlO1xuICBpZiAoYmluZExlbiA+IDUgJiYgY2hlY2tBbmRVcGRhdGVCaW5kaW5nKHZpZXcsIGRlZiwgNSwgdjUpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiA2ICYmIGNoZWNrQW5kVXBkYXRlQmluZGluZyh2aWV3LCBkZWYsIDYsIHY2KSkgY2hhbmdlZCA9IHRydWU7XG4gIGlmIChiaW5kTGVuID4gNyAmJiBjaGVja0FuZFVwZGF0ZUJpbmRpbmcodmlldywgZGVmLCA3LCB2NykpIGNoYW5nZWQgPSB0cnVlO1xuICBpZiAoYmluZExlbiA+IDggJiYgY2hlY2tBbmRVcGRhdGVCaW5kaW5nKHZpZXcsIGRlZiwgOCwgdjgpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiA5ICYmIGNoZWNrQW5kVXBkYXRlQmluZGluZyh2aWV3LCBkZWYsIDksIHY5KSkgY2hhbmdlZCA9IHRydWU7XG5cbiAgaWYgKGNoYW5nZWQpIHtcbiAgICBjb25zdCBkYXRhID0gYXNQdXJlRXhwcmVzc2lvbkRhdGEodmlldywgZGVmLm5vZGVJbmRleCk7XG4gICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgc3dpdGNoIChkZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZXMpIHtcbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQdXJlQXJyYXk6XG4gICAgICAgIHZhbHVlID0gW107XG4gICAgICAgIGlmIChiaW5kTGVuID4gMCkgdmFsdWUucHVzaCh2MCk7XG4gICAgICAgIGlmIChiaW5kTGVuID4gMSkgdmFsdWUucHVzaCh2MSk7XG4gICAgICAgIGlmIChiaW5kTGVuID4gMikgdmFsdWUucHVzaCh2Mik7XG4gICAgICAgIGlmIChiaW5kTGVuID4gMykgdmFsdWUucHVzaCh2Myk7XG4gICAgICAgIGlmIChiaW5kTGVuID4gNCkgdmFsdWUucHVzaCh2NCk7XG4gICAgICAgIGlmIChiaW5kTGVuID4gNSkgdmFsdWUucHVzaCh2NSk7XG4gICAgICAgIGlmIChiaW5kTGVuID4gNikgdmFsdWUucHVzaCh2Nik7XG4gICAgICAgIGlmIChiaW5kTGVuID4gNykgdmFsdWUucHVzaCh2Nyk7XG4gICAgICAgIGlmIChiaW5kTGVuID4gOCkgdmFsdWUucHVzaCh2OCk7XG4gICAgICAgIGlmIChiaW5kTGVuID4gOSkgdmFsdWUucHVzaCh2OSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVB1cmVPYmplY3Q6XG4gICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIGlmIChiaW5kTGVuID4gMCkgdmFsdWVbYmluZGluZ3NbMF0ubmFtZSFdID0gdjA7XG4gICAgICAgIGlmIChiaW5kTGVuID4gMSkgdmFsdWVbYmluZGluZ3NbMV0ubmFtZSFdID0gdjE7XG4gICAgICAgIGlmIChiaW5kTGVuID4gMikgdmFsdWVbYmluZGluZ3NbMl0ubmFtZSFdID0gdjI7XG4gICAgICAgIGlmIChiaW5kTGVuID4gMykgdmFsdWVbYmluZGluZ3NbM10ubmFtZSFdID0gdjM7XG4gICAgICAgIGlmIChiaW5kTGVuID4gNCkgdmFsdWVbYmluZGluZ3NbNF0ubmFtZSFdID0gdjQ7XG4gICAgICAgIGlmIChiaW5kTGVuID4gNSkgdmFsdWVbYmluZGluZ3NbNV0ubmFtZSFdID0gdjU7XG4gICAgICAgIGlmIChiaW5kTGVuID4gNikgdmFsdWVbYmluZGluZ3NbNl0ubmFtZSFdID0gdjY7XG4gICAgICAgIGlmIChiaW5kTGVuID4gNykgdmFsdWVbYmluZGluZ3NbN10ubmFtZSFdID0gdjc7XG4gICAgICAgIGlmIChiaW5kTGVuID4gOCkgdmFsdWVbYmluZGluZ3NbOF0ubmFtZSFdID0gdjg7XG4gICAgICAgIGlmIChiaW5kTGVuID4gOSkgdmFsdWVbYmluZGluZ3NbOV0ubmFtZSFdID0gdjk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVB1cmVQaXBlOlxuICAgICAgICBjb25zdCBwaXBlID0gdjA7XG4gICAgICAgIHN3aXRjaCAoYmluZExlbikge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHZhbHVlID0gcGlwZS50cmFuc2Zvcm0odjApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdmFsdWUgPSBwaXBlLnRyYW5zZm9ybSh2MSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICB2YWx1ZSA9IHBpcGUudHJhbnNmb3JtKHYxLCB2Mik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB2YWx1ZSA9IHBpcGUudHJhbnNmb3JtKHYxLCB2MiwgdjMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgdmFsdWUgPSBwaXBlLnRyYW5zZm9ybSh2MSwgdjIsIHYzLCB2NCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICB2YWx1ZSA9IHBpcGUudHJhbnNmb3JtKHYxLCB2MiwgdjMsIHY0LCB2NSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICB2YWx1ZSA9IHBpcGUudHJhbnNmb3JtKHYxLCB2MiwgdjMsIHY0LCB2NSwgdjYpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgdmFsdWUgPSBwaXBlLnRyYW5zZm9ybSh2MSwgdjIsIHYzLCB2NCwgdjUsIHY2LCB2Nyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICB2YWx1ZSA9IHBpcGUudHJhbnNmb3JtKHYxLCB2MiwgdjMsIHY0LCB2NSwgdjYsIHY3LCB2OCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgdmFsdWUgPSBwaXBlLnRyYW5zZm9ybSh2MSwgdjIsIHYzLCB2NCwgdjUsIHY2LCB2NywgdjgsIHY5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkYXRhLnZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGNoYW5nZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FuZFVwZGF0ZVB1cmVFeHByZXNzaW9uRHluYW1pYyhcbiAgICB2aWV3OiBWaWV3RGF0YSwgZGVmOiBOb2RlRGVmLCB2YWx1ZXM6IGFueVtdKTogYm9vbGVhbiB7XG4gIGNvbnN0IGJpbmRpbmdzID0gZGVmLmJpbmRpbmdzO1xuICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vdGU6IFdlIG5lZWQgdG8gbG9vcCBvdmVyIGFsbCB2YWx1ZXMsIHNvIHRoYXRcbiAgICAvLyB0aGUgb2xkIHZhbHVlcyBhcmUgdXBkYXRlcyBhcyB3ZWxsIVxuICAgIGlmIChjaGVja0FuZFVwZGF0ZUJpbmRpbmcodmlldywgZGVmLCBpLCB2YWx1ZXNbaV0pKSB7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKGNoYW5nZWQpIHtcbiAgICBjb25zdCBkYXRhID0gYXNQdXJlRXhwcmVzc2lvbkRhdGEodmlldywgZGVmLm5vZGVJbmRleCk7XG4gICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgc3dpdGNoIChkZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZXMpIHtcbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQdXJlQXJyYXk6XG4gICAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQdXJlT2JqZWN0OlxuICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhbHVlW2JpbmRpbmdzW2ldLm5hbWUhXSA9IHZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVQdXJlUGlwZTpcbiAgICAgICAgY29uc3QgcGlwZSA9IHZhbHVlc1swXTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdmFsdWVzLnNsaWNlKDEpO1xuICAgICAgICB2YWx1ZSA9ICg8YW55PnBpcGUudHJhbnNmb3JtKSguLi5wYXJhbXMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZGF0YS52YWx1ZSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBjaGFuZ2VkO1xufVxuIl19