/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/view/query.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef } from '../linker/element_ref';
import { QueryList } from '../linker/query_list';
import { asElementData, asProviderData, asQueryList } from './types';
import { declaredViewContainer, filterQueryId, isEmbeddedView } from './util';
/**
 * @param {?} flags
 * @param {?} id
 * @param {?} bindings
 * @return {?}
 */
export function queryDef(flags, id, bindings) {
    /** @type {?} */
    let bindingDefs = [];
    for (let propName in bindings) {
        /** @type {?} */
        const bindingType = bindings[propName];
        bindingDefs.push({ propName, bindingType });
    }
    return {
        // will bet set by the view definition
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        // regular values
        // TODO(vicb): check
        checkIndex: -1,
        flags,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        ngContentIndex: -1,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        childCount: 0,
        bindings: [],
        bindingFlags: 0,
        outputs: [],
        element: null,
        provider: null,
        text: null,
        query: { id, filterId: filterQueryId(id), bindings: bindingDefs },
        ngContent: null
    };
}
/**
 * @return {?}
 */
export function createQuery() {
    return new QueryList();
}
/**
 * @param {?} view
 * @return {?}
 */
export function dirtyParentQueries(view) {
    /** @type {?} */
    const queryIds = view.def.nodeMatchedQueries;
    while (view.parent && isEmbeddedView(view)) {
        /** @type {?} */
        let tplDef = (/** @type {?} */ (view.parentNodeDef));
        view = view.parent;
        // content queries
        /** @type {?} */
        const end = tplDef.nodeIndex + tplDef.childCount;
        for (let i = 0; i <= end; i++) {
            /** @type {?} */
            const nodeDef = view.def.nodes[i];
            if ((nodeDef.flags & 67108864 /* TypeContentQuery */) &&
                (nodeDef.flags & 536870912 /* DynamicQuery */) &&
                ((/** @type {?} */ (nodeDef.query)).filterId & queryIds) === (/** @type {?} */ (nodeDef.query)).filterId) {
                asQueryList(view, i).setDirty();
            }
            if ((nodeDef.flags & 1 /* TypeElement */ && i + nodeDef.childCount < tplDef.nodeIndex) ||
                !(nodeDef.childFlags & 67108864 /* TypeContentQuery */) ||
                !(nodeDef.childFlags & 536870912 /* DynamicQuery */)) {
                // skip elements that don't contain the template element or no query.
                i += nodeDef.childCount;
            }
        }
    }
    // view queries
    if (view.def.nodeFlags & 134217728 /* TypeViewQuery */) {
        for (let i = 0; i < view.def.nodes.length; i++) {
            /** @type {?} */
            const nodeDef = view.def.nodes[i];
            if ((nodeDef.flags & 134217728 /* TypeViewQuery */) && (nodeDef.flags & 536870912 /* DynamicQuery */)) {
                asQueryList(view, i).setDirty();
            }
            // only visit the root nodes
            i += nodeDef.childCount;
        }
    }
}
/**
 * @param {?} view
 * @param {?} nodeDef
 * @return {?}
 */
export function checkAndUpdateQuery(view, nodeDef) {
    /** @type {?} */
    const queryList = asQueryList(view, nodeDef.nodeIndex);
    if (!queryList.dirty) {
        return;
    }
    /** @type {?} */
    let directiveInstance;
    /** @type {?} */
    let newValues = (/** @type {?} */ (undefined));
    if (nodeDef.flags & 67108864 /* TypeContentQuery */) {
        /** @type {?} */
        const elementDef = (/** @type {?} */ ((/** @type {?} */ (nodeDef.parent)).parent));
        newValues = calcQueryValues(view, elementDef.nodeIndex, elementDef.nodeIndex + elementDef.childCount, (/** @type {?} */ (nodeDef.query)), []);
        directiveInstance = asProviderData(view, (/** @type {?} */ (nodeDef.parent)).nodeIndex).instance;
    }
    else if (nodeDef.flags & 134217728 /* TypeViewQuery */) {
        newValues = calcQueryValues(view, 0, view.def.nodes.length - 1, (/** @type {?} */ (nodeDef.query)), []);
        directiveInstance = view.component;
    }
    queryList.reset(newValues);
    /** @type {?} */
    const bindings = (/** @type {?} */ (nodeDef.query)).bindings;
    /** @type {?} */
    let notify = false;
    for (let i = 0; i < bindings.length; i++) {
        /** @type {?} */
        const binding = bindings[i];
        /** @type {?} */
        let boundValue;
        switch (binding.bindingType) {
            case 0 /* First */:
                boundValue = queryList.first;
                break;
            case 1 /* All */:
                boundValue = queryList;
                notify = true;
                break;
        }
        directiveInstance[binding.propName] = boundValue;
    }
    if (notify) {
        queryList.notifyOnChanges();
    }
}
/**
 * @param {?} view
 * @param {?} startIndex
 * @param {?} endIndex
 * @param {?} queryDef
 * @param {?} values
 * @return {?}
 */
function calcQueryValues(view, startIndex, endIndex, queryDef, values) {
    for (let i = startIndex; i <= endIndex; i++) {
        /** @type {?} */
        const nodeDef = view.def.nodes[i];
        /** @type {?} */
        const valueType = nodeDef.matchedQueries[queryDef.id];
        if (valueType != null) {
            values.push(getQueryValue(view, nodeDef, valueType));
        }
        if (nodeDef.flags & 1 /* TypeElement */ && (/** @type {?} */ (nodeDef.element)).template &&
            ((/** @type {?} */ ((/** @type {?} */ (nodeDef.element)).template)).nodeMatchedQueries & queryDef.filterId) ===
                queryDef.filterId) {
            /** @type {?} */
            const elementData = asElementData(view, i);
            // check embedded views that were attached at the place of their template,
            // but process child nodes first if some match the query (see issue #16568)
            if ((nodeDef.childMatchedQueries & queryDef.filterId) === queryDef.filterId) {
                calcQueryValues(view, i + 1, i + nodeDef.childCount, queryDef, values);
                i += nodeDef.childCount;
            }
            if (nodeDef.flags & 16777216 /* EmbeddedViews */) {
                /** @type {?} */
                const embeddedViews = (/** @type {?} */ (elementData.viewContainer))._embeddedViews;
                for (let k = 0; k < embeddedViews.length; k++) {
                    /** @type {?} */
                    const embeddedView = embeddedViews[k];
                    /** @type {?} */
                    const dvc = declaredViewContainer(embeddedView);
                    if (dvc && dvc === elementData) {
                        calcQueryValues(embeddedView, 0, embeddedView.def.nodes.length - 1, queryDef, values);
                    }
                }
            }
            /** @type {?} */
            const projectedViews = elementData.template._projectedViews;
            if (projectedViews) {
                for (let k = 0; k < projectedViews.length; k++) {
                    /** @type {?} */
                    const projectedView = projectedViews[k];
                    calcQueryValues(projectedView, 0, projectedView.def.nodes.length - 1, queryDef, values);
                }
            }
        }
        if ((nodeDef.childMatchedQueries & queryDef.filterId) !== queryDef.filterId) {
            // if no child matches the query, skip the children.
            i += nodeDef.childCount;
        }
    }
    return values;
}
/**
 * @param {?} view
 * @param {?} nodeDef
 * @param {?} queryValueType
 * @return {?}
 */
export function getQueryValue(view, nodeDef, queryValueType) {
    if (queryValueType != null) {
        // a match
        switch (queryValueType) {
            case 1 /* RenderElement */:
                return asElementData(view, nodeDef.nodeIndex).renderElement;
            case 0 /* ElementRef */:
                return new ElementRef(asElementData(view, nodeDef.nodeIndex).renderElement);
            case 2 /* TemplateRef */:
                return asElementData(view, nodeDef.nodeIndex).template;
            case 3 /* ViewContainerRef */:
                return asElementData(view, nodeDef.nodeIndex).viewContainer;
            case 4 /* Provider */:
                return asProviderData(view, nodeDef.nodeIndex).instance;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy92aWV3L3F1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFL0MsT0FBTyxFQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUE0RixNQUFNLFNBQVMsQ0FBQztBQUM5SixPQUFPLEVBQUMscUJBQXFCLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7OztBQUU1RSxNQUFNLFVBQVUsUUFBUSxDQUNwQixLQUFnQixFQUFFLEVBQVUsRUFBRSxRQUFnRDs7UUFDNUUsV0FBVyxHQUFzQixFQUFFO0lBQ3ZDLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUSxFQUFFOztjQUN2QixXQUFXLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7S0FDM0M7SUFFRCxPQUFPOztRQUVMLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDYixNQUFNLEVBQUUsSUFBSTtRQUNaLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDaEIsV0FBVyxFQUFFLENBQUMsQ0FBQzs7O1FBR2YsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNkLEtBQUs7UUFDTCxVQUFVLEVBQUUsQ0FBQztRQUNiLGdCQUFnQixFQUFFLENBQUM7UUFDbkIsbUJBQW1CLEVBQUUsQ0FBQztRQUN0QixjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFVBQVUsRUFBRSxFQUFF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QyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ3pGO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDM0Usb0RBQW9EO1lBQ3BELENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3pCO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FDekIsSUFBYyxFQUFFLE9BQWdCLEVBQUUsY0FBOEI7SUFDbEUsSUFBSSxjQUFjLElBQUksSUFBSSxFQUFFO1FBQzFCLFVBQVU7UUFDVixRQUFRLGNBQWMsRUFBRTtZQUN0QjtnQkFDRSxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUM5RDtnQkFDRSxPQUFPLElBQUksVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzlFO2dCQUNFLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3pEO2dCQUNFLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzlEO2dCQUNFLE9BQU8sY0FBYyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQzNEO0tBQ0Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gJy4uL2xpbmtlci9lbGVtZW50X3JlZic7XG5pbXBvcnQge1F1ZXJ5TGlzdH0gZnJvbSAnLi4vbGlua2VyL3F1ZXJ5X2xpc3QnO1xuXG5pbXBvcnQge2FzRWxlbWVudERhdGEsIGFzUHJvdmlkZXJEYXRhLCBhc1F1ZXJ5TGlzdCwgTm9kZURlZiwgTm9kZUZsYWdzLCBRdWVyeUJpbmRpbmdEZWYsIFF1ZXJ5QmluZGluZ1R5cGUsIFF1ZXJ5RGVmLCBRdWVyeVZhbHVlVHlwZSwgVmlld0RhdGF9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtkZWNsYXJlZFZpZXdDb250YWluZXIsIGZpbHRlclF1ZXJ5SWQsIGlzRW1iZWRkZWRWaWV3fSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlEZWYoXG4gICAgZmxhZ3M6IE5vZGVGbGFncywgaWQ6IG51bWJlciwgYmluZGluZ3M6IHtbcHJvcE5hbWU6IHN0cmluZ106IFF1ZXJ5QmluZGluZ1R5cGV9KTogTm9kZURlZiB7XG4gIGxldCBiaW5kaW5nRGVmczogUXVlcnlCaW5kaW5nRGVmW10gPSBbXTtcbiAgZm9yIChsZXQgcHJvcE5hbWUgaW4gYmluZGluZ3MpIHtcbiAgICBjb25zdCBiaW5kaW5nVHlwZSA9IGJpbmRpbmdzW3Byb3BOYW1lXTtcbiAgICBiaW5kaW5nRGVmcy5wdXNoKHtwcm9wTmFtZSwgYmluZGluZ1R5cGV9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gd2lsbCBiZXQgc2V0IGJ5IHRoZSB2aWV3IGRlZmluaXRpb25cbiAgICBub2RlSW5kZXg6IC0xLFxuICAgIHBhcmVudDogbnVsbCxcbiAgICByZW5kZXJQYXJlbnQ6IG51bGwsXG4gICAgYmluZGluZ0luZGV4OiAtMSxcbiAgICBvdXRwdXRJbmRleDogLTEsXG4gICAgLy8gcmVndWxhciB2YWx1ZXNcbiAgICAvLyBUT0RPKHZpY2IpOiBjaGVja1xuICAgIGNoZWNrSW5kZXg6IC0xLFxuICAgIGZsYWdzLFxuICAgIGNoaWxkRmxhZ3M6IDAsXG4gICAgZGlyZWN0Q2hpbGRGbGFnczogMCxcbiAgICBjaGlsZE1hdGNoZWRRdWVyaWVzOiAwLFxuICAgIG5nQ29udGVudEluZGV4OiAtMSxcbiAgICBtYXRjaGVkUXVlcmllczoge30sXG4gICAgbWF0Y2hlZFF1ZXJ5SWRzOiAwLFxuICAgIHJlZmVyZW5jZXM6IHt9LFxuICAgIGNoaWxkQ291bnQ6IDAsXG4gICAgYmluZGluZ3M6IFtdLFxuICAgIGJpbmRpbmdGbGFnczogMCxcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIHByb3ZpZGVyOiBudWxsLFxuICAgIHRleHQ6IG51bGwsXG4gICAgcXVlcnk6IHtpZCwgZmlsdGVySWQ6IGZpbHRlclF1ZXJ5SWQoaWQpLCBiaW5kaW5nczogYmluZGluZ0RlZnN9LFxuICAgIG5nQ29udGVudDogbnVsbFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUXVlcnkoKTogUXVlcnlMaXN0PGFueT4ge1xuICByZXR1cm4gbmV3IFF1ZXJ5TGlzdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlydHlQYXJlbnRRdWVyaWVzKHZpZXc6IFZpZXdEYXRhKSB7XG4gIGNvbnN0IHF1ZXJ5SWRzID0gdmlldy5kZWYubm9kZU1hdGNoZWRRdWVyaWVzO1xuICB3aGlsZSAodmlldy5wYXJlbnQgJiYgaXNFbWJlZGRlZFZpZXcodmlldykpIHtcbiAgICBsZXQgdHBsRGVmID0gdmlldy5wYXJlbnROb2RlRGVmITtcbiAgICB2aWV3ID0gdmlldy5wYXJlbnQ7XG4gICAgLy8gY29udGVudCBxdWVyaWVzXG4gICAgY29uc3QgZW5kID0gdHBsRGVmLm5vZGVJbmRleCArIHRwbERlZi5jaGlsZENvdW50O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlRGVmID0gdmlldy5kZWYubm9kZXNbaV07XG4gICAgICBpZiAoKG5vZGVEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZUNvbnRlbnRRdWVyeSkgJiZcbiAgICAgICAgICAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5EeW5hbWljUXVlcnkpICYmXG4gICAgICAgICAgKG5vZGVEZWYucXVlcnkhLmZpbHRlcklkICYgcXVlcnlJZHMpID09PSBub2RlRGVmLnF1ZXJ5IS5maWx0ZXJJZCkge1xuICAgICAgICBhc1F1ZXJ5TGlzdCh2aWV3LCBpKS5zZXREaXJ0eSgpO1xuICAgICAgfVxuICAgICAgaWYgKChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVFbGVtZW50ICYmIGkgKyBub2RlRGVmLmNoaWxkQ291bnQgPCB0cGxEZWYubm9kZUluZGV4KSB8fFxuICAgICAgICAgICEobm9kZURlZi5jaGlsZEZsYWdzICYgTm9kZUZsYWdzLlR5cGVDb250ZW50UXVlcnkpIHx8XG4gICAgICAgICAgIShub2RlRGVmLmNoaWxkRmxhZ3MgJiBOb2RlRmxhZ3MuRHluYW1pY1F1ZXJ5KSkge1xuICAgICAgICAvLyBza2lwIGVsZW1lbnRzIHRoYXQgZG9uJ3QgY29udGFpbiB0aGUgdGVtcGxhdGUgZWxlbWVudCBvciBubyBxdWVyeS5cbiAgICAgICAgaSArPSBub2RlRGVmLmNoaWxkQ291bnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gdmlldyBxdWVyaWVzXG4gIGlmICh2aWV3LmRlZi5ub2RlRmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZVZpZXdRdWVyeSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmlldy5kZWYubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGVEZWYgPSB2aWV3LmRlZi5ub2Rlc1tpXTtcbiAgICAgIGlmICgobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5UeXBlVmlld1F1ZXJ5KSAmJiAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5EeW5hbWljUXVlcnkpKSB7XG4gICAgICAgIGFzUXVlcnlMaXN0KHZpZXcsIGkpLnNldERpcnR5KCk7XG4gICAgICB9XG4gICAgICAvLyBvbmx5IHZpc2l0IHRoZSByb290IG5vZGVzXG4gICAgICBpICs9IG5vZGVEZWYuY2hpbGRDb3VudDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQW5kVXBkYXRlUXVlcnkodmlldzogVmlld0RhdGEsIG5vZGVEZWY6IE5vZGVEZWYpIHtcbiAgY29uc3QgcXVlcnlMaXN0ID0gYXNRdWVyeUxpc3Qodmlldywgbm9kZURlZi5ub2RlSW5kZXgpO1xuICBpZiAoIXF1ZXJ5TGlzdC5kaXJ0eSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZGlyZWN0aXZlSW5zdGFuY2U6IGFueTtcbiAgbGV0IG5ld1ZhbHVlczogYW55W10gPSB1bmRlZmluZWQhO1xuICBpZiAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5UeXBlQ29udGVudFF1ZXJ5KSB7XG4gICAgY29uc3QgZWxlbWVudERlZiA9IG5vZGVEZWYucGFyZW50IS5wYXJlbnQhO1xuICAgIG5ld1ZhbHVlcyA9IGNhbGNRdWVyeVZhbHVlcyhcbiAgICAgICAgdmlldywgZWxlbWVudERlZi5ub2RlSW5kZXgsIGVsZW1lbnREZWYubm9kZUluZGV4ICsgZWxlbWVudERlZi5jaGlsZENvdW50LCBub2RlRGVmLnF1ZXJ5ISxcbiAgICAgICAgW10pO1xuICAgIGRpcmVjdGl2ZUluc3RhbmNlID0gYXNQcm92aWRlckRhdGEodmlldywgbm9kZURlZi5wYXJlbnQhLm5vZGVJbmRleCkuaW5zdGFuY2U7XG4gIH0gZWxzZSBpZiAobm9kZURlZi5mbGFncyAmIE5vZGVGbGFncy5UeXBlVmlld1F1ZXJ5KSB7XG4gICAgbmV3VmFsdWVzID0gY2FsY1F1ZXJ5VmFsdWVzKHZpZXcsIDAsIHZpZXcuZGVmLm5vZGVzLmxlbmd0aCAtIDEsIG5vZGVEZWYucXVlcnkhLCBbXSk7XG4gICAgZGlyZWN0aXZlSW5zdGFuY2UgPSB2aWV3LmNvbXBvbmVudDtcbiAgfVxuICBxdWVyeUxpc3QucmVzZXQobmV3VmFsdWVzKTtcbiAgY29uc3QgYmluZGluZ3MgPSBub2RlRGVmLnF1ZXJ5IS5iaW5kaW5ncztcbiAgbGV0IG5vdGlmeSA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmRpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYmluZGluZyA9IGJpbmRpbmdzW2ldO1xuICAgIGxldCBib3VuZFZhbHVlOiBhbnk7XG4gICAgc3dpdGNoIChiaW5kaW5nLmJpbmRpbmdUeXBlKSB7XG4gICAgICBjYXNlIFF1ZXJ5QmluZGluZ1R5cGUuRmlyc3Q6XG4gICAgICAgIGJvdW5kVmFsdWUgPSBxdWVyeUxpc3QuZmlyc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBRdWVyeUJpbmRpbmdUeXBlLkFsbDpcbiAgICAgICAgYm91bmRWYWx1ZSA9IHF1ZXJ5TGlzdDtcbiAgICAgICAgbm90aWZ5ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRpcmVjdGl2ZUluc3RhbmNlW2JpbmRpbmcucHJvcE5hbWVdID0gYm91bmRWYWx1ZTtcbiAgfVxuICBpZiAobm90aWZ5KSB7XG4gICAgcXVlcnlMaXN0Lm5vdGlmeU9uQ2hhbmdlcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGNRdWVyeVZhbHVlcyhcbiAgICB2aWV3OiBWaWV3RGF0YSwgc3RhcnRJbmRleDogbnVtYmVyLCBlbmRJbmRleDogbnVtYmVyLCBxdWVyeURlZjogUXVlcnlEZWYsXG4gICAgdmFsdWVzOiBhbnlbXSk6IGFueVtdIHtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7IGkrKykge1xuICAgIGNvbnN0IG5vZGVEZWYgPSB2aWV3LmRlZi5ub2Rlc1tpXTtcbiAgICBjb25zdCB2YWx1ZVR5cGUgPSBub2RlRGVmLm1hdGNoZWRRdWVyaWVzW3F1ZXJ5RGVmLmlkXTtcbiAgICBpZiAodmFsdWVUeXBlICE9IG51bGwpIHtcbiAgICAgIHZhbHVlcy5wdXNoKGdldFF1ZXJ5VmFsdWUodmlldywgbm9kZURlZiwgdmFsdWVUeXBlKSk7XG4gICAgfVxuICAgIGlmIChub2RlRGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVFbGVtZW50ICYmIG5vZGVEZWYuZWxlbWVudCEudGVtcGxhdGUgJiZcbiAgICAgICAgKG5vZGVEZWYuZWxlbWVudCEudGVtcGxhdGUgIS5ub2RlTWF0Y2hlZFF1ZXJpZXMgJiBxdWVyeURlZi5maWx0ZXJJZCkgPT09XG4gICAgICAgICAgICBxdWVyeURlZi5maWx0ZXJJZCkge1xuICAgICAgY29uc3QgZWxlbWVudERhdGEgPSBhc0VsZW1lbnREYXRhKHZpZXcsIGkpO1xuICAgICAgLy8gY2hlY2sgZW1iZWRkZWQgdmlld3MgdGhhdCB3ZXJlIGF0dGFjaGVkIGF0IHRoZSBwbGFjZSBvZiB0aGVpciB0ZW1wbGF0ZSxcbiAgICAgIC8vIGJ1dCBwcm9jZXNzIGNoaWxkIG5vZGVzIGZpcnN0IGlmIHNvbWUgbWF0Y2ggdGhlIHF1ZXJ5IChzZWUgaXNzdWUgIzE2NTY4KVxuICAgICAgaWYgKChub2RlRGVmLmNoaWxkTWF0Y2hlZFF1ZXJpZXMgJiBxdWVyeURlZi5maWx0ZXJJZCkgPT09IHF1ZXJ5RGVmLmZpbHRlcklkKSB7XG4gICAgICAgIGNhbGNRdWVyeVZhbHVlcyh2aWV3LCBpICsgMSwgaSArIG5vZGVEZWYuY2hpbGRDb3VudCwgcXVlcnlEZWYsIHZhbHVlcyk7XG4gICAgICAgIGkgKz0gbm9kZURlZi5jaGlsZENvdW50O1xuICAgICAgfVxuICAgICAgaWYgKG5vZGVEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuRW1iZWRkZWRWaWV3cykge1xuICAgICAgICBjb25zdCBlbWJlZGRlZFZpZXdzID0gZWxlbWVudERhdGEudmlld0NvbnRhaW5lciEuX2VtYmVkZGVkVmlld3M7XG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZW1iZWRkZWRWaWV3cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGNvbnN0IGVtYmVkZGVkVmlldyA9IGVtYmVkZGVkVmlld3Nba107XG4gICAgICAgICAgY29uc3QgZHZjID0gZGVjbGFyZWRWaWV3Q29udGFpbmVyKGVtYmVkZGVkVmlldyk7XG4gICAgICAgICAgaWYgKGR2YyAmJiBkdmMgPT09IGVsZW1lbnREYXRhKSB7XG4gICAgICAgICAgICBjYWxjUXVlcnlWYWx1ZXMoZW1iZWRkZWRWaWV3LCAwLCBlbWJlZGRlZFZpZXcuZGVmLm5vZGVzLmxlbmd0aCAtIDEsIHF1ZXJ5RGVmLCB2YWx1ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgcHJvamVjdGVkVmlld3MgPSBlbGVtZW50RGF0YS50ZW1wbGF0ZS5fcHJvamVjdGVkVmlld3M7XG4gICAgICBpZiAocHJvamVjdGVkVmlld3MpIHtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwcm9qZWN0ZWRWaWV3cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGNvbnN0IHByb2plY3RlZFZpZXcgPSBwcm9qZWN0ZWRWaWV3c1trXTtcbiAgICAgICAgICBjYWxjUXVlcnlWYWx1ZXMocHJvamVjdGVkVmlldywgMCwgcHJvamVjdGVkVmlldy5kZWYubm9kZXMubGVuZ3RoIC0gMSwgcXVlcnlEZWYsIHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKChub2RlRGVmLmNoaWxkTWF0Y2hlZFF1ZXJpZXMgJiBxdWVyeURlZi5maWx0ZXJJZCkgIT09IHF1ZXJ5RGVmLmZpbHRlcklkKSB7XG4gICAgICAvLyBpZiBubyBjaGlsZCBtYXRjaGVzIHRoZSBxdWVyeSwgc2tpcCB0aGUgY2hpbGRyZW4uXG4gICAgICBpICs9IG5vZGVEZWYuY2hpbGRDb3VudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXJ5VmFsdWUoXG4gICAgdmlldzogVmlld0RhdGEsIG5vZGVEZWY6IE5vZGVEZWYsIHF1ZXJ5VmFsdWVUeXBlOiBRdWVyeVZhbHVlVHlwZSk6IGFueSB7XG4gIGlmIChxdWVyeVZhbHVlVHlwZSAhPSBudWxsKSB7XG4gICAgLy8gYSBtYXRjaFxuICAgIHN3aXRjaCAocXVlcnlWYWx1ZVR5cGUpIHtcbiAgICAgIGNhc2UgUXVlcnlWYWx1ZVR5cGUuUmVuZGVyRWxlbWVudDpcbiAgICAgICAgcmV0dXJuIGFzRWxlbWVudERhdGEodmlldywgbm9kZURlZi5ub2RlSW5kZXgpLnJlbmRlckVsZW1lbnQ7XG4gICAgICBjYXNlIFF1ZXJ5VmFsdWVUeXBlLkVsZW1lbnRSZWY6XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudFJlZihhc0VsZW1lbnREYXRhKHZpZXcsIG5vZGVEZWYubm9kZUluZGV4KS5yZW5kZXJFbGVtZW50KTtcbiAgICAgIGNhc2UgUXVlcnlWYWx1ZVR5cGUuVGVtcGxhdGVSZWY6XG4gICAgICAgIHJldHVybiBhc0VsZW1lbnREYXRhKHZpZXcsIG5vZGVEZWYubm9kZUluZGV4KS50ZW1wbGF0ZTtcbiAgICAgIGNhc2UgUXVlcnlWYWx1ZVR5cGUuVmlld0NvbnRhaW5lclJlZjpcbiAgICAgICAgcmV0dXJuIGFzRWxlbWVudERhdGEodmlldywgbm9kZURlZi5ub2RlSW5kZXgpLnZpZXdDb250YWluZXI7XG4gICAgICBjYXNlIFF1ZXJ5VmFsdWVUeXBlLlByb3ZpZGVyOlxuICAgICAgICByZXR1cm4gYXNQcm92aWRlckRhdGEodmlldywgbm9kZURlZi5ub2RlSW5kZXgpLmluc3RhbmNlO1xuICAgIH1cbiAgfVxufVxuIl19