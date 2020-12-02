/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/view/element.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ViewEncapsulation } from '../metadata/view';
import { SecurityContext } from '../sanitization/security';
import { asElementData } from './types';
import { calcBindingFlags, checkAndUpdateBinding, dispatchEvent, elementEventFullName, getParentRenderElement, NOOP, resolveDefinition, resolveRendererType2, splitMatchedQueriesDsl, splitNamespace } from './util';
/**
 * @param {?} flags
 * @param {?} matchedQueriesDsl
 * @param {?} ngContentIndex
 * @param {?} childCount
 * @param {?=} handleEvent
 * @param {?=} templateFactory
 * @return {?}
 */
export function anchorDef(flags, matchedQueriesDsl, ngContentIndex, childCount, handleEvent, templateFactory) {
    flags |= 1 /* TypeElement */;
    const { matchedQueries, references, matchedQueryIds } = splitMatchedQueriesDsl(matchedQueriesDsl);
    /** @type {?} */
    const template = templateFactory ? resolveDefinition(templateFactory) : null;
    return {
        // will bet set by the view definition
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        // regular values
        flags,
        checkIndex: -1,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries,
        matchedQueryIds,
        references,
        ngContentIndex,
        childCount,
        bindings: [],
        bindingFlags: 0,
        outputs: [],
        element: {
            ns: null,
            name: null,
            attrs: null,
            template,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: handleEvent || NOOP
        },
        provider: null,
        text: null,
        query: null,
        ngContent: null
    };
}
/**
 * @param {?} checkIndex
 * @param {?} flags
 * @param {?} matchedQueriesDsl
 * @param {?} ngContentIndex
 * @param {?} childCount
 * @param {?} namespaceAndName
 * @param {?=} fixedAttrs
 * @param {?=} bindings
 * @param {?=} outputs
 * @param {?=} handleEvent
 * @param {?=} componentView
 * @param {?=} componentRendererType
 * @return {?}
 */
export function elementDef(checkIndex, flags, matchedQueriesDsl, ngContentIndex, childCount, namespaceAndName, fixedAttrs = [], bindings, outputs, handleEvent, componentView, componentRendererType) {
    if (!handleEvent) {
        handleEvent = NOOP;
    }
    const { matchedQueries, references, matchedQueryIds } = splitMatchedQueriesDsl(matchedQueriesDsl);
    /** @type {?} */
    let ns = (/** @type {?} */ (null));
    /** @type {?} */
    let name = (/** @type {?} */ (null));
    if (namespaceAndName) {
        [ns, name] = splitNamespace(namespaceAndName);
    }
    bindings = bindings || [];
    /** @type {?} */
    const bindingDefs = [];
    for (let i = 0; i < bindings.length; i++) {
        const [bindingFlags, namespaceAndName, suffixOrSecurityContext] = bindings[i];
        const [ns, name] = splitNamespace(namespaceAndName);
        /** @type {?} */
        let securityContext = (/** @type {?} */ (undefined));
        /** @type {?} */
        let suffix = (/** @type {?} */ (undefined));
        switch (bindingFlags & 15 /* Types */) {
            case 4 /* TypeElementStyle */:
                suffix = (/** @type {?} */ (suffixOrSecurityContext));
                break;
            case 1 /* TypeElementAttribute */:
            case 8 /* TypeProperty */:
                securityContext = (/** @type {?} */ (suffixOrSecurityContext));
                break;
        }
        bindingDefs[i] =
            { flags: bindingFlags, ns, name, nonMinifiedName: name, securityContext, suffix };
    }
    outputs = outputs || [];
    /** @type {?} */
    const outputDefs = [];
    for (let i = 0; i < outputs.length; i++) {
        const [target, eventName] = outputs[i];
        outputDefs[i] =
            { type: 0 /* ElementOutput */, target: (/** @type {?} */ (target)), eventName, propName: null };
    }
    fixedAttrs = fixedAttrs || [];
    /** @type {?} */
    const attrs = (/** @type {?} */ (fixedAttrs.map((/**
     * @param {?} __0
     * @return {?}
     */
    ([namespaceAndName, value]) => {
        const [ns, name] = splitNamespace(namespaceAndName);
        return [ns, name, value];
    }))));
    componentRendererType = resolveRendererType2(componentRendererType);
    if (componentView) {
        flags |= 33554432 /* ComponentView */;
    }
    flags |= 1 /* TypeElement */;
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
        matchedQueries,
        matchedQueryIds,
        references,
        ngContentIndex,
        childCount,
        bindings: bindingDefs,
        bindingFlags: calcBindingFlags(bindingDefs),
        outputs: outputDefs,
        element: {
            ns,
            name,
            attrs,
            template: null,
            // will bet set by the view definition
            componentProvider: null,
            componentView: componentView || null,
            componentRendererType: componentRendererType,
            publicProviders: null,
            allProviders: null,
            handleEvent: handleEvent || NOOP,
        },
        provider: null,
        text: null,
        query: null,
        ngContent: null
    };
}
/**
 * @param {?} view
 * @param {?} renderHost
 * @param {?} def
 * @return {?}
 */
export function createElement(view, renderHost, def) {
    /** @type {?} */
    const elDef = (/** @type {?} */ (def.element));
    /** @type {?} */
    const rootSelectorOrNode = view.root.selectorOrNode;
    /** @type {?} */
    const renderer = view.renderer;
    /** @type {?} */
    let el;
    if (view.parent || !rootSelectorOrNode) {
        if (elDef.name) {
            el = renderer.createElement(elDef.name, elDef.ns);
        }
        else {
            el = renderer.createComment('');
        }
        /** @type {?} */
        const parentEl = getParentRenderElement(view, renderHost, def);
        if (parentEl) {
            renderer.appendChild(parentEl, el);
        }
    }
    else {
        // when using native Shadow DOM, do not clear the root element contents to allow slot projection
        /** @type {?} */
        const preserveContent = (!!elDef.componentRendererType &&
            elDef.componentRendererType.encapsulation === ViewEncapsulation.ShadowDom);
        el = renderer.selectRootElement(rootSelectorOrNode, preserveContent);
    }
    if (elDef.attrs) {
        for (let i = 0; i < elDef.attrs.length; i++) {
            const [ns, name, value] = elDef.attrs[i];
            renderer.setAttribute(el, name, value, ns);
        }
    }
    return el;
}
/**
 * @param {?} view
 * @param {?} compView
 * @param {?} def
 * @param {?} el
 * @return {?}
 */
export function listenToElementOutputs(view, compView, def, el) {
    for (let i = 0; i < def.outputs.length; i++) {
        /** @type {?} */
        const output = def.outputs[i];
        /** @type {?} */
        const handleEventClosure = renderEventHandlerClosure(view, def.nodeIndex, elementEventFullName(output.target, output.eventName));
        /** @type {?} */
        let listenTarget = output.target;
        /** @type {?} */
        let listenerView = view;
        if (output.target === 'component') {
            listenTarget = null;
            listenerView = compView;
        }
        /** @type {?} */
        const disposable = (/** @type {?} */ (listenerView.renderer.listen(listenTarget || el, output.eventName, handleEventClosure)));
        (/** @type {?} */ (view.disposables))[def.outputIndex + i] = disposable;
    }
}
/**
 * @param {?} view
 * @param {?} index
 * @param {?} eventName
 * @return {?}
 */
function renderEventHandlerClosure(view, index, eventName) {
    return (/**
     * @param {?} event
     * @return {?}
     */
    (event) => dispatchEvent(view, index, eventName, event));
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
export function checkAndUpdateElementInline(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    /** @type {?} */
    const bindLen = def.bindings.length;
    /** @type {?} */
    let changed = false;
    if (bindLen > 0 && checkAndUpdateElementValue(view, def, 0, v0))
        changed = true;
    if (bindLen > 1 && checkAndUpdateElementValue(view, def, 1, v1))
        changed = true;
    if (bindLen > 2 && checkAndUpdateElementValue(view, def, 2, v2))
        changed = true;
    if (bindLen > 3 && checkAndUpdateElementValue(view, def, 3, v3))
        changed = true;
    if (bindLen > 4 && checkAndUpdateElementValue(view, def, 4, v4))
        changed = true;
    if (bindLen > 5 && checkAndUpdateElementValue(view, def, 5, v5))
        changed = true;
    if (bindLen > 6 && checkAndUpdateElementValue(view, def, 6, v6))
        changed = true;
    if (bindLen > 7 && checkAndUpdateElementValue(view, def, 7, v7))
        changed = true;
    if (bindLen > 8 && checkAndUpdateElementValue(view, def, 8, v8))
        changed = true;
    if (bindLen > 9 && checkAndUpdateElementValue(view, def, 9, v9))
        changed = true;
    return changed;
}
/**
 * @param {?} view
 * @param {?} def
 * @param {?} values
 * @return {?}
 */
export function checkAndUpdateElementDynamic(view, def, values) {
    /** @type {?} */
    let changed = false;
    for (let i = 0; i < values.length; i++) {
        if (checkAndUpdateElementValue(view, def, i, values[i]))
            changed = true;
    }
    return changed;
}
/**
 * @param {?} view
 * @param {?} def
 * @param {?} bindingIdx
 * @param {?} value
 * @return {?}
 */
function checkAndUpdateElementValue(view, def, bindingIdx, value) {
    if (!checkAndUpdateBinding(view, def, bindingIdx, value)) {
        return false;
    }
    /** @type {?} */
    const binding = def.bindings[bindingIdx];
    /** @type {?} */
    const elData = asElementData(view, def.nodeIndex);
    /** @type {?} */
    const renderNode = elData.renderElement;
    /** @type {?} */
    const name = (/** @type {?} */ (binding.name));
    switch (binding.flags & 15 /* Types */) {
        case 1 /* TypeElementAttribute */:
            setElementAttribute(view, binding, renderNode, binding.ns, name, value);
            break;
        case 2 /* TypeElementClass */:
            setElementClass(view, renderNode, name, value);
            break;
        case 4 /* TypeElementStyle */:
            setElementStyle(view, binding, renderNode, name, value);
            break;
        case 8 /* TypeProperty */:
            /** @type {?} */
            const bindView = (def.flags & 33554432 /* ComponentView */ &&
                binding.flags & 32 /* SyntheticHostProperty */) ?
                elData.componentView :
                view;
            setElementProperty(bindView, binding, renderNode, name, value);
            break;
    }
    return true;
}
/**
 * @param {?} view
 * @param {?} binding
 * @param {?} renderNode
 * @param {?} ns
 * @param {?} name
 * @param {?} value
 * @return {?}
 */
function setElementAttribute(view, binding, renderNode, ns, name, value) {
    /** @type {?} */
    const securityContext = binding.securityContext;
    /** @type {?} */
    let renderValue = securityContext ? view.root.sanitizer.sanitize(securityContext, value) : value;
    renderValue = renderValue != null ? renderValue.toString() : null;
    /** @type {?} */
    const renderer = view.renderer;
    if (value != null) {
        renderer.setAttribute(renderNode, name, renderValue, ns);
    }
    else {
        renderer.removeAttribute(renderNode, name, ns);
    }
}
/**
 * @param {?} view
 * @param {?} renderNode
 * @param {?} name
 * @param {?} value
 * @return {?}
 */
function setElementClass(view, renderNode, name, value) {
    /** @type {?} */
    const renderer = view.renderer;
    if (value) {
        renderer.addClass(renderNode, name);
    }
    else {
        renderer.removeClass(renderNode, name);
    }
}
/**
 * @param {?} view
 * @param {?} binding
 * @param {?} renderNode
 * @param {?} name
 * @param {?} value
 * @return {?}
 */
function setElementStyle(view, binding, renderNode, name, value) {
    /** @type {?} */
    let renderValue = view.root.sanitizer.sanitize(SecurityContext.STYLE, (/** @type {?} */ (value)));
    if (renderValue != null) {
        renderValue = renderValue.toString();
        /** @type {?} */
        const unit = binding.suffix;
        if (unit != null) {
            renderValue = renderValue + unit;
        }
    }
    else {
        renderValue = null;
    }
    /** @type {?} */
    const renderer = view.renderer;
    if (renderValue != null) {
        renderer.setStyle(renderNode, name, renderValue);
    }
    else {
        renderer.removeStyle(renderNode, name);
    }
}
/**
 * @param {?} view
 * @param {?} binding
 * @param {?} renderNode
 * @param {?} name
 * @param {?} value
 * @return {?}
 */
function setElementProperty(view, binding, renderNode, name, value) {
    /** @type {?} */
    const securityContext = binding.securityContext;
    /** @type {?} */
    let renderValue = securityContext ? view.root.sanitizer.sanitize(securityContext, value) : value;
    view.renderer.setProperty(renderNode, name, renderValue);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3ZpZXcvZWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFekQsT0FBTyxFQUFDLGFBQWEsRUFBMEosTUFBTSxTQUFTLENBQUM7QUFDL0wsT0FBTyxFQUFDLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCLEVBQUUsY0FBYyxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7O0FBRW5OLE1BQU0sVUFBVSxTQUFTLENBQ3JCLEtBQWdCLEVBQUUsaUJBQTJELEVBQzdFLGNBQTJCLEVBQUUsVUFBa0IsRUFBRSxXQUF1QyxFQUN4RixlQUF1QztJQUN6QyxLQUFLLHVCQUF5QixDQUFDO1VBQ3pCLEVBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUMsR0FBRyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQzs7VUFDekYsUUFBUSxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7SUFFNUUsT0FBTzs7UUFFTCxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxFQUFFLElBQUk7UUFDWixZQUFZLEVBQUUsSUFBSTtRQUNsQixZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDZixpQkFBaUI7UUFDakIsS0FBSztRQUNMLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDZCxVQUFVLEVBQUUsQ0FBQztRQUNi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QUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMzRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICcuLi9tZXRhZGF0YS92aWV3JztcbmltcG9ydCB7UmVuZGVyZXJUeXBlMn0gZnJvbSAnLi4vcmVuZGVyL2FwaSc7XG5pbXBvcnQge1NlY3VyaXR5Q29udGV4dH0gZnJvbSAnLi4vc2FuaXRpemF0aW9uL3NlY3VyaXR5JztcblxuaW1wb3J0IHthc0VsZW1lbnREYXRhLCBCaW5kaW5nRGVmLCBCaW5kaW5nRmxhZ3MsIEVsZW1lbnREYXRhLCBFbGVtZW50SGFuZGxlRXZlbnRGbiwgTm9kZURlZiwgTm9kZUZsYWdzLCBPdXRwdXREZWYsIE91dHB1dFR5cGUsIFF1ZXJ5VmFsdWVUeXBlLCBWaWV3RGF0YSwgVmlld0RlZmluaXRpb25GYWN0b3J5fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Y2FsY0JpbmRpbmdGbGFncywgY2hlY2tBbmRVcGRhdGVCaW5kaW5nLCBkaXNwYXRjaEV2ZW50LCBlbGVtZW50RXZlbnRGdWxsTmFtZSwgZ2V0UGFyZW50UmVuZGVyRWxlbWVudCwgTk9PUCwgcmVzb2x2ZURlZmluaXRpb24sIHJlc29sdmVSZW5kZXJlclR5cGUyLCBzcGxpdE1hdGNoZWRRdWVyaWVzRHNsLCBzcGxpdE5hbWVzcGFjZX0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFuY2hvckRlZihcbiAgICBmbGFnczogTm9kZUZsYWdzLCBtYXRjaGVkUXVlcmllc0RzbDogbnVsbHxbc3RyaW5nIHwgbnVtYmVyLCBRdWVyeVZhbHVlVHlwZV1bXSxcbiAgICBuZ0NvbnRlbnRJbmRleDogbnVsbHxudW1iZXIsIGNoaWxkQ291bnQ6IG51bWJlciwgaGFuZGxlRXZlbnQ/OiBudWxsfEVsZW1lbnRIYW5kbGVFdmVudEZuLFxuICAgIHRlbXBsYXRlRmFjdG9yeT86IFZpZXdEZWZpbml0aW9uRmFjdG9yeSk6IE5vZGVEZWYge1xuICBmbGFncyB8PSBOb2RlRmxhZ3MuVHlwZUVsZW1lbnQ7XG4gIGNvbnN0IHttYXRjaGVkUXVlcmllcywgcmVmZXJlbmNlcywgbWF0Y2hlZFF1ZXJ5SWRzfSA9IHNwbGl0TWF0Y2hlZFF1ZXJpZXNEc2wobWF0Y2hlZFF1ZXJpZXNEc2wpO1xuICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlRmFjdG9yeSA/IHJlc29sdmVEZWZpbml0aW9uKHRlbXBsYXRlRmFjdG9yeSkgOiBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgLy8gd2lsbCBiZXQgc2V0IGJ5IHRoZSB2aWV3IGRlZmluaXRpb25cbiAgICBub2RlSW5kZXg6IC0xLFxuICAgIHBhcmVudDogbnVsbCxcbiAgICByZW5kZXJQYXJlbnQ6IG51bGwsXG4gICAgYmluZGluZ0luZGV4OiAtMSxcbiAgICBvdXRwdXRJbmRleDogLTEsXG4gICAgLy8gcmVndWxhciB2YWx1ZXNcbiAgICBmbGFncyxcbiAgICBjaGVja0luZGV4OiAtMSxcbiAgICBjaGlsZEZsYWdzOiAwLFxuICAgIGRpcmVjdENoaWxkRmxhZ3M6IDAsXG4gICAgY2hpbGRNYXRjaGVkUXVlcmllczogMCxcbiAgICBtYXRjaGVkUXVlcmllcyxcbiAgICBtYXRjaGVkUXVlcnlJZHMsXG4gICAgcmVmZXJlbmNlcyxcbiAgICBuZ0NvbnRlbnRJbmRleCxcbiAgICBjaGlsZENvdW50LFxuICAgIGJpbmRpbmdzOiBbXSxcbiAgICBiaW5kaW5nRmxhZ3M6IDAsXG4gICAgb3V0cHV0czogW10sXG4gICAgZWxlbWVudDoge1xuICAgICAgbnM6IG51bGwsXG4gICAgICBuYW1lOiBudWxsLFxuICAgICAgYXR0cnM6IG51bGwsXG4gICAgICB0ZW1wbGF0ZSxcbiAgICAgIGNvbXBvbmVudFByb3ZpZGVyOiBudWxsLFxuICAgICAgY29tcG9uZW50VmlldzogbnVsbCxcbiAgICAgIGNvbXBvbmVudFJlbmRlcmVyVHlwZTogbnVsbCxcbiAgICAgIHB1YmxpY1Byb3ZpZGVyczogbnVsbCxcbiAgICAgIGFsbFByb3ZpZGVyczogbnVsbCxcbiAgICAgIGhhbmRsZUV2ZW50OiBoYW5kbGVFdmVudCB8fCBOT09QXG4gICAgfSxcbiAgICBwcm92aWRlcjogbnVsbCxcbiAgICB0ZXh0OiBudWxsLFxuICAgIHF1ZXJ5OiBudWxsLFxuICAgIG5nQ29udGVudDogbnVsbFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudERlZihcbiAgICBjaGVja0luZGV4OiBudW1iZXIsIGZsYWdzOiBOb2RlRmxhZ3MsXG4gICAgbWF0Y2hlZFF1ZXJpZXNEc2w6IG51bGx8W3N0cmluZyB8IG51bWJlciwgUXVlcnlWYWx1ZVR5cGVdW10sIG5nQ29udGVudEluZGV4OiBudWxsfG51bWJlcixcbiAgICBjaGlsZENvdW50OiBudW1iZXIsIG5hbWVzcGFjZUFuZE5hbWU6IHN0cmluZ3xudWxsLCBmaXhlZEF0dHJzOiBudWxsfFtzdHJpbmcsIHN0cmluZ11bXSA9IFtdLFxuICAgIGJpbmRpbmdzPzogbnVsbHxbQmluZGluZ0ZsYWdzLCBzdHJpbmcsIHN0cmluZyB8IFNlY3VyaXR5Q29udGV4dCB8IG51bGxdW10sXG4gICAgb3V0cHV0cz86IG51bGx8KFtzdHJpbmcsIHN0cmluZ10pW10sIGhhbmRsZUV2ZW50PzogbnVsbHxFbGVtZW50SGFuZGxlRXZlbnRGbixcbiAgICBjb21wb25lbnRWaWV3PzogbnVsbHxWaWV3RGVmaW5pdGlvbkZhY3RvcnksXG4gICAgY29tcG9uZW50UmVuZGVyZXJUeXBlPzogUmVuZGVyZXJUeXBlMnxudWxsKTogTm9kZURlZiB7XG4gIGlmICghaGFuZGxlRXZlbnQpIHtcbiAgICBoYW5kbGVFdmVudCA9IE5PT1A7XG4gIH1cbiAgY29uc3Qge21hdGNoZWRRdWVyaWVzLCByZWZlcmVuY2VzLCBtYXRjaGVkUXVlcnlJZHN9ID0gc3BsaXRNYXRjaGVkUXVlcmllc0RzbChtYXRjaGVkUXVlcmllc0RzbCk7XG4gIGxldCBuczogc3RyaW5nID0gbnVsbCE7XG4gIGxldCBuYW1lOiBzdHJpbmcgPSBudWxsITtcbiAgaWYgKG5hbWVzcGFjZUFuZE5hbWUpIHtcbiAgICBbbnMsIG5hbWVdID0gc3BsaXROYW1lc3BhY2UobmFtZXNwYWNlQW5kTmFtZSk7XG4gIH1cbiAgYmluZGluZ3MgPSBiaW5kaW5ncyB8fCBbXTtcbiAgY29uc3QgYmluZGluZ0RlZnM6IEJpbmRpbmdEZWZbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmRpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW2JpbmRpbmdGbGFncywgbmFtZXNwYWNlQW5kTmFtZSwgc3VmZml4T3JTZWN1cml0eUNvbnRleHRdID0gYmluZGluZ3NbaV07XG5cbiAgICBjb25zdCBbbnMsIG5hbWVdID0gc3BsaXROYW1lc3BhY2UobmFtZXNwYWNlQW5kTmFtZSk7XG4gICAgbGV0IHNlY3VyaXR5Q29udGV4dDogU2VjdXJpdHlDb250ZXh0ID0gdW5kZWZpbmVkITtcbiAgICBsZXQgc3VmZml4OiBzdHJpbmcgPSB1bmRlZmluZWQhO1xuICAgIHN3aXRjaCAoYmluZGluZ0ZsYWdzICYgQmluZGluZ0ZsYWdzLlR5cGVzKSB7XG4gICAgICBjYXNlIEJpbmRpbmdGbGFncy5UeXBlRWxlbWVudFN0eWxlOlxuICAgICAgICBzdWZmaXggPSA8c3RyaW5nPnN1ZmZpeE9yU2VjdXJpdHlDb250ZXh0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQmluZGluZ0ZsYWdzLlR5cGVFbGVtZW50QXR0cmlidXRlOlxuICAgICAgY2FzZSBCaW5kaW5nRmxhZ3MuVHlwZVByb3BlcnR5OlxuICAgICAgICBzZWN1cml0eUNvbnRleHQgPSA8U2VjdXJpdHlDb250ZXh0PnN1ZmZpeE9yU2VjdXJpdHlDb250ZXh0O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgYmluZGluZ0RlZnNbaV0gPVxuICAgICAgICB7ZmxhZ3M6IGJpbmRpbmdGbGFncywgbnMsIG5hbWUsIG5vbk1pbmlmaWVkTmFtZTogbmFtZSwgc2VjdXJpdHlDb250ZXh0LCBzdWZmaXh9O1xuICB9XG4gIG91dHB1dHMgPSBvdXRwdXRzIHx8IFtdO1xuICBjb25zdCBvdXRwdXREZWZzOiBPdXRwdXREZWZbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbdGFyZ2V0LCBldmVudE5hbWVdID0gb3V0cHV0c1tpXTtcbiAgICBvdXRwdXREZWZzW2ldID1cbiAgICAgICAge3R5cGU6IE91dHB1dFR5cGUuRWxlbWVudE91dHB1dCwgdGFyZ2V0OiA8YW55PnRhcmdldCwgZXZlbnROYW1lLCBwcm9wTmFtZTogbnVsbH07XG4gIH1cbiAgZml4ZWRBdHRycyA9IGZpeGVkQXR0cnMgfHwgW107XG4gIGNvbnN0IGF0dHJzID0gPFtzdHJpbmcsIHN0cmluZywgc3RyaW5nXVtdPmZpeGVkQXR0cnMubWFwKChbbmFtZXNwYWNlQW5kTmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgY29uc3QgW25zLCBuYW1lXSA9IHNwbGl0TmFtZXNwYWNlKG5hbWVzcGFjZUFuZE5hbWUpO1xuICAgIHJldHVybiBbbnMsIG5hbWUsIHZhbHVlXTtcbiAgfSk7XG4gIGNvbXBvbmVudFJlbmRlcmVyVHlwZSA9IHJlc29sdmVSZW5kZXJlclR5cGUyKGNvbXBvbmVudFJlbmRlcmVyVHlwZSk7XG4gIGlmIChjb21wb25lbnRWaWV3KSB7XG4gICAgZmxhZ3MgfD0gTm9kZUZsYWdzLkNvbXBvbmVudFZpZXc7XG4gIH1cbiAgZmxhZ3MgfD0gTm9kZUZsYWdzLlR5cGVFbGVtZW50O1xuICByZXR1cm4ge1xuICAgIC8vIHdpbGwgYmV0IHNldCBieSB0aGUgdmlldyBkZWZpbml0aW9uXG4gICAgbm9kZUluZGV4OiAtMSxcbiAgICBwYXJlbnQ6IG51bGwsXG4gICAgcmVuZGVyUGFyZW50OiBudWxsLFxuICAgIGJpbmRpbmdJbmRleDogLTEsXG4gICAgb3V0cHV0SW5kZXg6IC0xLFxuICAgIC8vIHJlZ3VsYXIgdmFsdWVzXG4gICAgY2hlY2tJbmRleCxcbiAgICBmbGFncyxcbiAgICBjaGlsZEZsYWdzOiAwLFxuICAgIGRpcmVjdENoaWxkRmxhZ3M6IDAsXG4gICAgY2hpbGRNYXRjaGVkUXVlcmllczogMCxcbiAgICBtYXRjaGVkUXVlcmllcyxcbiAgICBtYXRjaGVkUXVlcnlJZHMsXG4gICAgcmVmZXJlbmNlcyxcbiAgICBuZ0NvbnRlbnRJbmRleCxcbiAgICBjaGlsZENvdW50LFxuICAgIGJpbmRpbmdzOiBiaW5kaW5nRGVmcyxcbiAgICBiaW5kaW5nRmxhZ3M6IGNhbGNCaW5kaW5nRmxhZ3MoYmluZGluZ0RlZnMpLFxuICAgIG91dHB1dHM6IG91dHB1dERlZnMsXG4gICAgZWxlbWVudDoge1xuICAgICAgbnMsXG4gICAgICBuYW1lLFxuICAgICAgYXR0cnMsXG4gICAgICB0ZW1wbGF0ZTogbnVsbCxcbiAgICAgIC8vIHdpbGwgYmV0IHNldCBieSB0aGUgdmlldyBkZWZpbml0aW9uXG4gICAgICBjb21wb25lbnRQcm92aWRlcjogbnVsbCxcbiAgICAgIGNvbXBvbmVudFZpZXc6IGNvbXBvbmVudFZpZXcgfHwgbnVsbCxcbiAgICAgIGNvbXBvbmVudFJlbmRlcmVyVHlwZTogY29tcG9uZW50UmVuZGVyZXJUeXBlLFxuICAgICAgcHVibGljUHJvdmlkZXJzOiBudWxsLFxuICAgICAgYWxsUHJvdmlkZXJzOiBudWxsLFxuICAgICAgaGFuZGxlRXZlbnQ6IGhhbmRsZUV2ZW50IHx8IE5PT1AsXG4gICAgfSxcbiAgICBwcm92aWRlcjogbnVsbCxcbiAgICB0ZXh0OiBudWxsLFxuICAgIHF1ZXJ5OiBudWxsLFxuICAgIG5nQ29udGVudDogbnVsbFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh2aWV3OiBWaWV3RGF0YSwgcmVuZGVySG9zdDogYW55LCBkZWY6IE5vZGVEZWYpOiBFbGVtZW50RGF0YSB7XG4gIGNvbnN0IGVsRGVmID0gZGVmLmVsZW1lbnQhO1xuICBjb25zdCByb290U2VsZWN0b3JPck5vZGUgPSB2aWV3LnJvb3Quc2VsZWN0b3JPck5vZGU7XG4gIGNvbnN0IHJlbmRlcmVyID0gdmlldy5yZW5kZXJlcjtcbiAgbGV0IGVsOiBhbnk7XG4gIGlmICh2aWV3LnBhcmVudCB8fCAhcm9vdFNlbGVjdG9yT3JOb2RlKSB7XG4gICAgaWYgKGVsRGVmLm5hbWUpIHtcbiAgICAgIGVsID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudChlbERlZi5uYW1lLCBlbERlZi5ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsID0gcmVuZGVyZXIuY3JlYXRlQ29tbWVudCgnJyk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudEVsID0gZ2V0UGFyZW50UmVuZGVyRWxlbWVudCh2aWV3LCByZW5kZXJIb3N0LCBkZWYpO1xuICAgIGlmIChwYXJlbnRFbCkge1xuICAgICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50RWwsIGVsKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gd2hlbiB1c2luZyBuYXRpdmUgU2hhZG93IERPTSwgZG8gbm90IGNsZWFyIHRoZSByb290IGVsZW1lbnQgY29udGVudHMgdG8gYWxsb3cgc2xvdCBwcm9qZWN0aW9uXG4gICAgY29uc3QgcHJlc2VydmVDb250ZW50ID1cbiAgICAgICAgKCEhZWxEZWYuY29tcG9uZW50UmVuZGVyZXJUeXBlICYmXG4gICAgICAgICBlbERlZi5jb21wb25lbnRSZW5kZXJlclR5cGUuZW5jYXBzdWxhdGlvbiA9PT0gVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tKTtcbiAgICBlbCA9IHJlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KHJvb3RTZWxlY3Rvck9yTm9kZSwgcHJlc2VydmVDb250ZW50KTtcbiAgfVxuICBpZiAoZWxEZWYuYXR0cnMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsRGVmLmF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBbbnMsIG5hbWUsIHZhbHVlXSA9IGVsRGVmLmF0dHJzW2ldO1xuICAgICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCBuYW1lLCB2YWx1ZSwgbnMpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub0VsZW1lbnRPdXRwdXRzKHZpZXc6IFZpZXdEYXRhLCBjb21wVmlldzogVmlld0RhdGEsIGRlZjogTm9kZURlZiwgZWw6IGFueSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZi5vdXRwdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZGVmLm91dHB1dHNbaV07XG4gICAgY29uc3QgaGFuZGxlRXZlbnRDbG9zdXJlID0gcmVuZGVyRXZlbnRIYW5kbGVyQ2xvc3VyZShcbiAgICAgICAgdmlldywgZGVmLm5vZGVJbmRleCwgZWxlbWVudEV2ZW50RnVsbE5hbWUob3V0cHV0LnRhcmdldCwgb3V0cHV0LmV2ZW50TmFtZSkpO1xuICAgIGxldCBsaXN0ZW5UYXJnZXQ6ICd3aW5kb3cnfCdkb2N1bWVudCd8J2JvZHknfCdjb21wb25lbnQnfG51bGwgPSBvdXRwdXQudGFyZ2V0O1xuICAgIGxldCBsaXN0ZW5lclZpZXcgPSB2aWV3O1xuICAgIGlmIChvdXRwdXQudGFyZ2V0ID09PSAnY29tcG9uZW50Jykge1xuICAgICAgbGlzdGVuVGFyZ2V0ID0gbnVsbDtcbiAgICAgIGxpc3RlbmVyVmlldyA9IGNvbXBWaWV3O1xuICAgIH1cbiAgICBjb25zdCBkaXNwb3NhYmxlID1cbiAgICAgICAgPGFueT5saXN0ZW5lclZpZXcucmVuZGVyZXIubGlzdGVuKGxpc3RlblRhcmdldCB8fCBlbCwgb3V0cHV0LmV2ZW50TmFtZSwgaGFuZGxlRXZlbnRDbG9zdXJlKTtcbiAgICB2aWV3LmRpc3Bvc2FibGVzIVtkZWYub3V0cHV0SW5kZXggKyBpXSA9IGRpc3Bvc2FibGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyRXZlbnRIYW5kbGVyQ2xvc3VyZSh2aWV3OiBWaWV3RGF0YSwgaW5kZXg6IG51bWJlciwgZXZlbnROYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIChldmVudDogYW55KSA9PiBkaXNwYXRjaEV2ZW50KHZpZXcsIGluZGV4LCBldmVudE5hbWUsIGV2ZW50KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBbmRVcGRhdGVFbGVtZW50SW5saW5lKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBkZWY6IE5vZGVEZWYsIHYwOiBhbnksIHYxOiBhbnksIHYyOiBhbnksIHYzOiBhbnksIHY0OiBhbnksIHY1OiBhbnksIHY2OiBhbnksXG4gICAgdjc6IGFueSwgdjg6IGFueSwgdjk6IGFueSk6IGJvb2xlYW4ge1xuICBjb25zdCBiaW5kTGVuID0gZGVmLmJpbmRpbmdzLmxlbmd0aDtcbiAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgaWYgKGJpbmRMZW4gPiAwICYmIGNoZWNrQW5kVXBkYXRlRWxlbWVudFZhbHVlKHZpZXcsIGRlZiwgMCwgdjApKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiAxICYmIGNoZWNrQW5kVXBkYXRlRWxlbWVudFZhbHVlKHZpZXcsIGRlZiwgMSwgdjEpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiAyICYmIGNoZWNrQW5kVXBkYXRlRWxlbWVudFZhbHVlKHZpZXcsIGRlZiwgMiwgdjIpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiAzICYmIGNoZWNrQW5kVXBkYXRlRWxlbWVudFZhbHVlKHZpZXcsIGRlZiwgMywgdjMpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiA0ICYmIGNoZWNrQW5kVXBkYXRlRWxlbWVudFZhbHVlKHZpZXcsIGRlZiwgNCwgdjQpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiA1ICYmIGNoZWNrQW5kVXBkYXRlRWxlbWVudFZhbHVlKHZpZXcsIGRlZiwgNSwgdjUpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiA2ICYmIGNoZWNrQW5kVXBkYXRlRWxlbWVudFZhbHVlKHZpZXcsIGRlZiwgNiwgdjYpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiA3ICYmIGNoZWNrQW5kVXBkYXRlRWxlbWVudFZhbHVlKHZpZXcsIGRlZiwgNywgdjcpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiA4ICYmIGNoZWNrQW5kVXBkYXRlRWxlbWVudFZhbHVlKHZpZXcsIGRlZiwgOCwgdjgpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiA5ICYmIGNoZWNrQW5kVXBkYXRlRWxlbWVudFZhbHVlKHZpZXcsIGRlZiwgOSwgdjkpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgcmV0dXJuIGNoYW5nZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FuZFVwZGF0ZUVsZW1lbnREeW5hbWljKHZpZXc6IFZpZXdEYXRhLCBkZWY6IE5vZGVEZWYsIHZhbHVlczogYW55W10pOiBib29sZWFuIHtcbiAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2hlY2tBbmRVcGRhdGVFbGVtZW50VmFsdWUodmlldywgZGVmLCBpLCB2YWx1ZXNbaV0pKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gY2hhbmdlZDtcbn1cblxuZnVuY3Rpb24gY2hlY2tBbmRVcGRhdGVFbGVtZW50VmFsdWUodmlldzogVmlld0RhdGEsIGRlZjogTm9kZURlZiwgYmluZGluZ0lkeDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XG4gIGlmICghY2hlY2tBbmRVcGRhdGVCaW5kaW5nKHZpZXcsIGRlZiwgYmluZGluZ0lkeCwgdmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGJpbmRpbmcgPSBkZWYuYmluZGluZ3NbYmluZGluZ0lkeF07XG4gIGNvbnN0IGVsRGF0YSA9IGFzRWxlbWVudERhdGEodmlldywgZGVmLm5vZGVJbmRleCk7XG4gIGNvbnN0IHJlbmRlck5vZGUgPSBlbERhdGEucmVuZGVyRWxlbWVudDtcbiAgY29uc3QgbmFtZSA9IGJpbmRpbmcubmFtZSE7XG4gIHN3aXRjaCAoYmluZGluZy5mbGFncyAmIEJpbmRpbmdGbGFncy5UeXBlcykge1xuICAgIGNhc2UgQmluZGluZ0ZsYWdzLlR5cGVFbGVtZW50QXR0cmlidXRlOlxuICAgICAgc2V0RWxlbWVudEF0dHJpYnV0ZSh2aWV3LCBiaW5kaW5nLCByZW5kZXJOb2RlLCBiaW5kaW5nLm5zLCBuYW1lLCB2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJpbmRpbmdGbGFncy5UeXBlRWxlbWVudENsYXNzOlxuICAgICAgc2V0RWxlbWVudENsYXNzKHZpZXcsIHJlbmRlck5vZGUsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQmluZGluZ0ZsYWdzLlR5cGVFbGVtZW50U3R5bGU6XG4gICAgICBzZXRFbGVtZW50U3R5bGUodmlldywgYmluZGluZywgcmVuZGVyTm9kZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCaW5kaW5nRmxhZ3MuVHlwZVByb3BlcnR5OlxuICAgICAgY29uc3QgYmluZFZpZXcgPSAoZGVmLmZsYWdzICYgTm9kZUZsYWdzLkNvbXBvbmVudFZpZXcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmcuZmxhZ3MgJiBCaW5kaW5nRmxhZ3MuU3ludGhldGljSG9zdFByb3BlcnR5KSA/XG4gICAgICAgICAgZWxEYXRhLmNvbXBvbmVudFZpZXcgOlxuICAgICAgICAgIHZpZXc7XG4gICAgICBzZXRFbGVtZW50UHJvcGVydHkoYmluZFZpZXcsIGJpbmRpbmcsIHJlbmRlck5vZGUsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzZXRFbGVtZW50QXR0cmlidXRlKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBiaW5kaW5nOiBCaW5kaW5nRGVmLCByZW5kZXJOb2RlOiBhbnksIG5zOiBzdHJpbmd8bnVsbCwgbmFtZTogc3RyaW5nLFxuICAgIHZhbHVlOiBhbnkpIHtcbiAgY29uc3Qgc2VjdXJpdHlDb250ZXh0ID0gYmluZGluZy5zZWN1cml0eUNvbnRleHQ7XG4gIGxldCByZW5kZXJWYWx1ZSA9IHNlY3VyaXR5Q29udGV4dCA/IHZpZXcucm9vdC5zYW5pdGl6ZXIuc2FuaXRpemUoc2VjdXJpdHlDb250ZXh0LCB2YWx1ZSkgOiB2YWx1ZTtcbiAgcmVuZGVyVmFsdWUgPSByZW5kZXJWYWx1ZSAhPSBudWxsID8gcmVuZGVyVmFsdWUudG9TdHJpbmcoKSA6IG51bGw7XG4gIGNvbnN0IHJlbmRlcmVyID0gdmlldy5yZW5kZXJlcjtcbiAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUocmVuZGVyTm9kZSwgbmFtZSwgcmVuZGVyVmFsdWUsIG5zKTtcbiAgfSBlbHNlIHtcbiAgICByZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUocmVuZGVyTm9kZSwgbmFtZSwgbnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnRDbGFzcyh2aWV3OiBWaWV3RGF0YSwgcmVuZGVyTm9kZTogYW55LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKSB7XG4gIGNvbnN0IHJlbmRlcmVyID0gdmlldy5yZW5kZXJlcjtcbiAgaWYgKHZhbHVlKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MocmVuZGVyTm9kZSwgbmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MocmVuZGVyTm9kZSwgbmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RWxlbWVudFN0eWxlKFxuICAgIHZpZXc6IFZpZXdEYXRhLCBiaW5kaW5nOiBCaW5kaW5nRGVmLCByZW5kZXJOb2RlOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICBsZXQgcmVuZGVyVmFsdWU6IHN0cmluZ3xudWxsID1cbiAgICAgIHZpZXcucm9vdC5zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlNUWUxFLCB2YWx1ZSBhcyB7fSB8IHN0cmluZyk7XG4gIGlmIChyZW5kZXJWYWx1ZSAhPSBudWxsKSB7XG4gICAgcmVuZGVyVmFsdWUgPSByZW5kZXJWYWx1ZS50b1N0cmluZygpO1xuICAgIGNvbnN0IHVuaXQgPSBiaW5kaW5nLnN1ZmZpeDtcbiAgICBpZiAodW5pdCAhPSBudWxsKSB7XG4gICAgICByZW5kZXJWYWx1ZSA9IHJlbmRlclZhbHVlICsgdW5pdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyVmFsdWUgPSBudWxsO1xuICB9XG4gIGNvbnN0IHJlbmRlcmVyID0gdmlldy5yZW5kZXJlcjtcbiAgaWYgKHJlbmRlclZhbHVlICE9IG51bGwpIHtcbiAgICByZW5kZXJlci5zZXRTdHlsZShyZW5kZXJOb2RlLCBuYW1lLCByZW5kZXJWYWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyZXIucmVtb3ZlU3R5bGUocmVuZGVyTm9kZSwgbmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RWxlbWVudFByb3BlcnR5KFxuICAgIHZpZXc6IFZpZXdEYXRhLCBiaW5kaW5nOiBCaW5kaW5nRGVmLCByZW5kZXJOb2RlOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICBjb25zdCBzZWN1cml0eUNvbnRleHQgPSBiaW5kaW5nLnNlY3VyaXR5Q29udGV4dDtcbiAgbGV0IHJlbmRlclZhbHVlID0gc2VjdXJpdHlDb250ZXh0ID8gdmlldy5yb290LnNhbml0aXplci5zYW5pdGl6ZShzZWN1cml0eUNvbnRleHQsIHZhbHVlKSA6IHZhbHVlO1xuICB2aWV3LnJlbmRlcmVyLnNldFByb3BlcnR5KHJlbmRlck5vZGUsIG5hbWUsIHJlbmRlclZhbHVlKTtcbn1cbiJdfQ==