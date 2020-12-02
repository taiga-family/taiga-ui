/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/component_ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '../di/injection_token';
import { ComponentFactory as viewEngine_ComponentFactory, ComponentRef as viewEngine_ComponentRef } from '../linker/component_factory';
import { ComponentFactoryResolver as viewEngine_ComponentFactoryResolver } from '../linker/component_factory_resolver';
import { ElementRef as viewEngine_ElementRef } from '../linker/element_ref';
import { RendererFactory2 } from '../render/api';
import { Sanitizer } from '../sanitization/sanitizer';
import { VERSION } from '../version';
import { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '../view/provider';
import { assertComponentType } from './assert';
import { createRootComponent, createRootComponentView, createRootContext, LifecycleHooksFeature } from './component';
import { getComponentDef } from './definition';
import { NodeInjector } from './di';
import { assignTViewNodeToLView, createLView, createTView, elementCreate, locateHostElement, renderView } from './instructions/shared';
import { domRendererFactory3 } from './interfaces/renderer';
import { TVIEW } from './interfaces/view';
import { MATH_ML_NAMESPACE, SVG_NAMESPACE } from './namespaces';
import { assertNodeOfPossibleTypes } from './node_assert';
import { writeDirectClass } from './node_manipulation';
import { extractAttrsAndClassesFromSelector, stringifyCSSSelectorList } from './node_selector_matcher';
import { enterView, leaveView } from './state';
import { setUpAttributes } from './util/attrs_utils';
import { defaultScheduler } from './util/misc_utils';
import { getTNode } from './util/view_utils';
import { createElementRef } from './view_engine_compatibility';
import { RootViewRef } from './view_ref';
export class ComponentFactoryResolver extends viewEngine_ComponentFactoryResolver {
    /**
     * @param {?=} ngModule The NgModuleRef to which all resolved factories are bound.
     */
    constructor(ngModule) {
        super();
        this.ngModule = ngModule;
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    resolveComponentFactory(component) {
        ngDevMode && assertComponentType(component);
        /** @type {?} */
        const componentDef = (/** @type {?} */ (getComponentDef(component)));
        return new ComponentFactory(componentDef, this.ngModule);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentFactoryResolver.prototype.ngModule;
}
/**
 * @param {?} map
 * @return {?}
 */
function toRefArray(map) {
    /** @type {?} */
    const array = [];
    for (let nonMinified in map) {
        if (map.hasOwnProperty(nonMinified)) {
            /** @type {?} */
            const minified = map[nonMinified];
            array.push({ propName: minified, templateName: nonMinified });
        }
    }
    return array;
}
/**
 * @param {?} elementName
 * @return {?}
 */
function getNamespace(elementName) {
    /** @type {?} */
    const name = elementName.toLowerCase();
    return name === 'svg' ? SVG_NAMESPACE : (name === 'math' ? MATH_ML_NAMESPACE : null);
}
/**
 * A change detection scheduler token for {\@link RootContext}. This token is the default value used
 * for the default `RootContext` found in the {\@link ROOT_CONTEXT} token.
 * @type {?}
 */
export const SCHEDULER = new InjectionToken('SCHEDULER_TOKEN', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => defaultScheduler),
});
/**
 * @param {?} rootViewInjector
 * @param {?} moduleInjector
 * @return {?}
 */
function createChainedInjector(rootViewInjector, moduleInjector) {
    return {
        get: (/**
         * @template T
         * @param {?} token
         * @param {?=} notFoundValue
         * @param {?=} flags
         * @return {?}
         */
        (token, notFoundValue, flags) => {
            /** @type {?} */
            const value = rootViewInjector.get(token, (/** @type {?} */ (NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR)), flags);
            if (value !== NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR ||
                notFoundValue === NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR) {
                // Return the value from the root element injector when
                // - it provides it
                //   (value !== NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR)
                // - the module injector should not be checked
                //   (notFoundValue === NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR)
                return value;
            }
            return moduleInjector.get(token, notFoundValue, flags);
        })
    };
}
/**
 * Render3 implementation of {\@link viewEngine_ComponentFactory}.
 * @template T
 */
export class ComponentFactory extends viewEngine_ComponentFactory {
    /**
     * @param {?} componentDef The component definition.
     * @param {?=} ngModule The NgModuleRef to which the factory is bound.
     */
    constructor(componentDef, ngModule) {
        super();
        this.componentDef = componentDef;
        this.ngModule = ngModule;
        this.componentType = componentDef.type;
        this.selector = stringifyCSSSelectorList(componentDef.selectors);
        this.ngContentSelectors =
            componentDef.ngContentSelectors ? componentDef.ngContentSelectors : [];
        this.isBoundToModule = !!ngModule;
    }
    /**
     * @return {?}
     */
    get inputs() {
        return toRefArray(this.componentDef.inputs);
    }
    /**
     * @return {?}
     */
    get outputs() {
        return toRefArray(this.componentDef.outputs);
    }
    /**
     * @param {?} injector
     * @param {?=} projectableNodes
     * @param {?=} rootSelectorOrNode
     * @param {?=} ngModule
     * @return {?}
     */
    create(injector, projectableNodes, rootSelectorOrNode, ngModule) {
        ngModule = ngModule || this.ngModule;
        /** @type {?} */
        const rootViewInjector = ngModule ? createChainedInjector(injector, ngModule.injector) : injector;
        /** @type {?} */
        const rendererFactory = (/** @type {?} */ (rootViewInjector.get(RendererFactory2, domRendererFactory3)));
        /** @type {?} */
        const sanitizer = rootViewInjector.get(Sanitizer, null);
        /** @type {?} */
        const hostRenderer = rendererFactory.createRenderer(null, this.componentDef);
        // Determine a tag name used for creating host elements when this component is created
        // dynamically. Default to 'div' if this component did not specify any tag name in its selector.
        /** @type {?} */
        const elementName = (/** @type {?} */ (this.componentDef.selectors[0][0])) || 'div';
        /** @type {?} */
        const hostRNode = rootSelectorOrNode ?
            locateHostElement(hostRenderer, rootSelectorOrNode, this.componentDef.encapsulation) :
            elementCreate(elementName, rendererFactory.createRenderer(null, this.componentDef), getNamespace(elementName));
        /** @type {?} */
        const rootFlags = this.componentDef.onPush ? 64 /* Dirty */ | 512 /* IsRoot */ :
            16 /* CheckAlways */ | 512 /* IsRoot */;
        // Check whether this Component needs to be isolated from other components, i.e. whether it
        // should be placed into its own (empty) root context or existing root context should be used.
        // Note: this is internal-only convention and might change in the future, so it should not be
        // relied upon externally.
        /** @type {?} */
        const isIsolated = typeof rootSelectorOrNode === 'string' &&
            /^#root-ng-internal-isolated-\d+/.test(rootSelectorOrNode);
        /** @type {?} */
        const rootContext = createRootContext();
        // Create the root view. Uses empty TView and ContentTemplate.
        /** @type {?} */
        const rootTView = createTView(0 /* Root */, -1, null, 1, 0, null, null, null, null, null);
        /** @type {?} */
        const rootLView = createLView(null, rootTView, rootContext, rootFlags, null, null, rendererFactory, hostRenderer, sanitizer, rootViewInjector);
        // rootView is the parent when bootstrapping
        // TODO(misko): it looks like we are entering view here but we don't really need to as
        // `renderView` does that. However as the code is written it is needed because
        // `createRootComponentView` and `createRootComponent` both read global state. Fixing those
        // issues would allow us to drop this.
        enterView(rootLView, null);
        /** @type {?} */
        let component;
        /** @type {?} */
        let tElementNode;
        try {
            /** @type {?} */
            const componentView = createRootComponentView(hostRNode, this.componentDef, rootLView, rendererFactory, hostRenderer);
            if (hostRNode) {
                if (rootSelectorOrNode) {
                    setUpAttributes(hostRenderer, hostRNode, ['ng-version', VERSION.full]);
                }
                else {
                    // If host element is created as a part of this function call (i.e. `rootSelectorOrNode`
                    // is not defined), also apply attributes and classes extracted from component selector.
                    // Extract attributes and classes from the first selector only to match VE behavior.
                    const { attrs, classes } = extractAttrsAndClassesFromSelector(this.componentDef.selectors[0]);
                    if (attrs) {
                        setUpAttributes(hostRenderer, hostRNode, attrs);
                    }
                    if (classes && classes.length > 0) {
                        writeDirectClass(hostRenderer, hostRNode, classes.join(' '));
                    }
                }
            }
            tElementNode = (/** @type {?} */ (getTNode(rootTView, 0)));
            if (projectableNodes !== undefined) {
                /** @type {?} */
                const projection = tElementNode.projection = [];
                for (let i = 0; i < this.ngContentSelectors.length; i++) {
                    /** @type {?} */
                    const nodesforSlot = projectableNodes[i];
                    // Projectable nodes can be passed as array of arrays or an array of iterables (ngUpgrade
                    // case). Here we do normalize passed data structure to be an array of arrays to avoid
                    // complex checks down the line.
                    // We also normalize the length of the passed in projectable nodes (to match the number of
                    // <ng-container> slots defined by a component).
                    projection.push(nodesforSlot != null ? Array.from(nodesforSlot) : null);
                }
            }
            // TODO: should LifecycleHooksFeature and other host features be generated by the compiler and
            // executed here?
            // Angular 5 reference: https://stackblitz.com/edit/lifecycle-hooks-vcref
            component = createRootComponent(componentView, this.componentDef, rootLView, rootContext, [LifecycleHooksFeature]);
            renderView(rootTView, rootLView, null);
        }
        finally {
            leaveView();
        }
        /** @type {?} */
        const componentRef = new ComponentRef(this.componentType, component, createElementRef(viewEngine_ElementRef, tElementNode, rootLView), rootLView, tElementNode);
        if (!rootSelectorOrNode || isIsolated) {
            // The host element of the internal or isolated root view is attached to the component's host
            // view node.
            ngDevMode && assertNodeOfPossibleTypes(rootTView.node, 2 /* View */);
            (/** @type {?} */ (rootTView.node)).child = tElementNode;
        }
        return componentRef;
    }
}
if (false) {
    /** @type {?} */
    ComponentFactory.prototype.selector;
    /** @type {?} */
    ComponentFactory.prototype.componentType;
    /** @type {?} */
    ComponentFactory.prototype.ngContentSelectors;
    /** @type {?} */
    ComponentFactory.prototype.isBoundToModule;
    /**
     * @type {?}
     * @private
     */
    ComponentFactory.prototype.componentDef;
    /**
     * @type {?}
     * @private
     */
    ComponentFactory.prototype.ngModule;
}
/** @type {?} */
const componentFactoryResolver = new ComponentFactoryResolver();
/**
 * Creates a ComponentFactoryResolver and stores it on the injector. Or, if the
 * ComponentFactoryResolver
 * already exists, retrieves the existing ComponentFactoryResolver.
 *
 * @return {?} The ComponentFactoryResolver instance to use
 */
export function injectComponentFactoryResolver() {
    return componentFactoryResolver;
}
/**
 * Represents an instance of a Component created via a {\@link ComponentFactory}.
 *
 * `ComponentRef` provides access to the Component Instance as well other objects related to this
 * Component Instance and allows you to destroy the Component Instance via the {\@link #destroy}
 * method.
 *
 * @template T
 */
export class ComponentRef extends viewEngine_ComponentRef {
    /**
     * @param {?} componentType
     * @param {?} instance
     * @param {?} location
     * @param {?} _rootLView
     * @param {?} _tNode
     */
    constructor(componentType, instance, location, _rootLView, _tNode) {
        super();
        this.location = location;
        this._rootLView = _rootLView;
        this._tNode = _tNode;
        this.destroyCbs = [];
        this.instance = instance;
        this.hostView = this.changeDetectorRef = new RootViewRef(_rootLView);
        assignTViewNodeToLView(_rootLView[TVIEW], null, -1, _rootLView);
        this.componentType = componentType;
    }
    /**
     * @return {?}
     */
    get injector() {
        return new NodeInjector(this._tNode, this._rootLView);
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.destroyCbs) {
            this.destroyCbs.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this.destroyCbs = null;
            !this.hostView.destroyed && this.hostView.destroy();
        }
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onDestroy(callback) {
        if (this.destroyCbs) {
            this.destroyCbs.push(callback);
        }
    }
}
if (false) {
    /** @type {?} */
    ComponentRef.prototype.destroyCbs;
    /** @type {?} */
    ComponentRef.prototype.instance;
    /** @type {?} */
    ComponentRef.prototype.hostView;
    /** @type {?} */
    ComponentRef.prototype.changeDetectorRef;
    /** @type {?} */
    ComponentRef.prototype.componentType;
    /** @type {?} */
    ComponentRef.prototype.location;
    /**
     * @type {?}
     * @private
     */
    ComponentRef.prototype._rootLView;
    /**
     * @type {?}
     * @private
     */
    ComponentRef.prototype._tNode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50X3JlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvY29tcG9uZW50X3JlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFJckQsT0FBTyxFQUFDLGdCQUFnQixJQUFJLDJCQUEyQixFQUFFLFlBQVksSUFBSSx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3JJLE9BQU8sRUFBQyx3QkFBd0IsSUFBSSxtQ0FBbUMsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JILE9BQU8sRUFBQyxVQUFVLElBQUkscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFDLHFDQUFxQyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFdkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzdDLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNuSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFDLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBR3JJLE9BQU8sRUFBQyxtQkFBbUIsRUFB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SSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7O1lBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFFBQW9CO1FBQzVCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Q0FDRjs7O0lBbENDLGtDQUFxQzs7SUFDckMsZ0NBQVk7O0lBQ1osZ0NBQXFCOztJQUNyQix5Q0FBZ0Q7O0lBQ2hELHFDQUF1Qjs7SUFHa0IsZ0NBQXNDOzs7OztJQUMzRSxrQ0FBeUI7Ozs7O0lBQ3pCLDhCQUFpRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiBhcyBWaWV3RW5naW5lX0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICcuLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rvcl9yZWYnO1xuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnLi4vZGkvaW5qZWN0aW9uX3Rva2VuJztcbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJy4uL2RpL2luamVjdG9yJztcbmltcG9ydCB7SW5qZWN0RmxhZ3N9IGZyb20gJy4uL2RpL2ludGVyZmFjZS9pbmplY3Rvcic7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7Q29tcG9uZW50RmFjdG9yeSBhcyB2aWV3RW5naW5lX0NvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudFJlZiBhcyB2aWV3RW5naW5lX0NvbXBvbmVudFJlZn0gZnJvbSAnLi4vbGlua2VyL2NvbXBvbmVudF9mYWN0b3J5JztcbmltcG9ydCB7Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyIGFzIHZpZXdFbmdpbmVfQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyfSBmcm9tICcuLi9saW5rZXIvY29tcG9uZW50X2ZhY3RvcnlfcmVzb2x2ZXInO1xuaW1wb3J0IHtFbGVtZW50UmVmIGFzIHZpZXdFbmdpbmVfRWxlbWVudFJlZn0gZnJvbSAnLi4vbGlua2VyL2VsZW1lbnRfcmVmJztcbmltcG9ydCB7TmdNb2R1bGVSZWYgYXMgdmlld0VuZ2luZV9OZ01vZHVsZVJlZn0gZnJvbSAnLi4vbGlua2VyL25nX21vZHVsZV9mYWN0b3J5JztcbmltcG9ydCB7UmVuZGVyZXJGYWN0b3J5Mn0gZnJvbSAnLi4vcmVuZGVyL2FwaSc7XG5pbXBvcnQge1Nhbml0aXplcn0gZnJvbSAnLi4vc2FuaXRpemF0aW9uL3Nhbml0aXplcic7XG5pbXBvcnQge1ZFUlNJT059IGZyb20gJy4uL3ZlcnNpb24nO1xuaW1wb3J0IHtOT1RfRk9VTkRfQ0hFQ0tfT05MWV9FTEVNRU5UX0lOSkVDVE9SfSBmcm9tICcuLi92aWV3L3Byb3ZpZGVyJztcblxuaW1wb3J0IHthc3NlcnRDb21wb25lbnRUeXBlfSBmcm9tICcuL2Fzc2VydCc7XG5pbXBvcnQge2NyZWF0ZVJvb3RDb21wb25lbnQsIGNyZWF0ZVJvb3RDb21wb25lbnRWaWV3LCBjcmVhdGVSb290Q29udGV4dCwgTGlmZWN5Y2xlSG9va3NGZWF0dXJlfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQge2dldENvbXBvbmVudERlZn0gZnJvbSAnLi9kZWZpbml0aW9uJztcbmltcG9ydCB7Tm9kZUluamVjdG9yfSBmcm9tICcuL2RpJztcbmltcG9ydCB7YXNzaWduVFZpZXdOb2RlVG9MVmlldywgY3JlYXRlTFZpZXcsIGNyZWF0ZVRWaWV3LCBlbGVtZW50Q3JlYXRlLCBsb2NhdGVIb3N0RWxlbWVudCwgcmVuZGVyVmlld30gZnJvbSAnLi9pbnN0cnVjdGlvbnMvc2hhcmVkJztcbmltcG9ydCB7Q29tcG9uZW50RGVmfSBmcm9tICcuL2ludGVyZmFjZXMvZGVmaW5pdGlvbic7XG5pbXBvcnQge1RDb250YWluZXJOb2RlLCBURWxlbWVudENvbnRhaW5lck5vZGUsIFRFbGVtZW50Tm9kZSwgVE5vZGUsIFROb2RlVHlwZX0gZnJvbSAnLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtkb21SZW5kZXJlckZhY3RvcnkzLCBSZW5kZXJlckZhY3RvcnkzLCBSTm9kZX0gZnJvbSAnLi9pbnRlcmZhY2VzL3JlbmRlcmVyJztcbmltcG9ydCB7TFZpZXcsIExWaWV3RmxhZ3MsIFRWSUVXLCBUVmlld1R5cGV9IGZyb20gJy4vaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7TUFUSF9NTF9OQU1FU1BBQ0UsIFNWR19OQU1FU1BBQ0V9IGZyb20gJy4vbmFtZXNwYWNlcyc7XG5pbXBvcnQge2Fzc2VydE5vZGVPZlBvc3NpYmxlVHlwZXN9IGZyb20gJy4vbm9kZV9hc3NlcnQnO1xuaW1wb3J0IHt3cml0ZURpcmVjdENsYXNzfSBmcm9tICcuL25vZGVfbWFuaXB1bGF0aW9uJztcbmltcG9ydCB7ZXh0cmFjdEF0dHJzQW5kQ2xhc3Nlc0Zyb21TZWxlY3Rvciwgc3RyaW5naWZ5Q1NTU2VsZWN0b3JMaXN0fSBmcm9tICcuL25vZGVfc2VsZWN0b3JfbWF0Y2hlcic7XG5pbXBvcnQge2VudGVyVmlldywgbGVhdmVWaWV3fSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7c2V0VXBBdHRyaWJ1dGVzfSBmcm9tICcuL3V0aWwvYXR0cnNfdXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0U2NoZWR1bGVyfSBmcm9tICcuL3V0aWwvbWlzY191dGlscyc7XG5pbXBvcnQge2dldFROb2RlfSBmcm9tICcuL3V0aWwvdmlld191dGlscyc7XG5pbXBvcnQge2NyZWF0ZUVsZW1lbnRSZWZ9IGZyb20gJy4vdmlld19lbmdpbmVfY29tcGF0aWJpbGl0eSc7XG5pbXBvcnQge1Jvb3RWaWV3UmVmLCBWaWV3UmVmfSBmcm9tICcuL3ZpZXdfcmVmJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciBleHRlbmRzIHZpZXdFbmdpbmVfQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBuZ01vZHVsZSBUaGUgTmdNb2R1bGVSZWYgdG8gd2hpY2ggYWxsIHJlc29sdmVkIGZhY3RvcmllcyBhcmUgYm91bmQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nTW9kdWxlPzogdmlld0VuZ2luZV9OZ01vZHVsZVJlZjxhbnk+KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlc29sdmVDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IHZpZXdFbmdpbmVfQ29tcG9uZW50RmFjdG9yeTxUPiB7XG4gICAgbmdEZXZNb2RlICYmIGFzc2VydENvbXBvbmVudFR5cGUoY29tcG9uZW50KTtcbiAgICBjb25zdCBjb21wb25lbnREZWYgPSBnZXRDb21wb25lbnREZWYoY29tcG9uZW50KSE7XG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudERlZiwgdGhpcy5uZ01vZHVsZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9SZWZBcnJheShtYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KToge3Byb3BOYW1lOiBzdHJpbmc7IHRlbXBsYXRlTmFtZTogc3RyaW5nO31bXSB7XG4gIGNvbnN0IGFycmF5OiB7cHJvcE5hbWU6IHN0cmluZzsgdGVtcGxhdGVOYW1lOiBzdHJpbmc7fVtdID0gW107XG4gIGZvciAobGV0IG5vbk1pbmlmaWVkIGluIG1hcCkge1xuICAgIGlmIChtYXAuaGFzT3duUHJvcGVydHkobm9uTWluaWZpZWQpKSB7XG4gICAgICBjb25zdCBtaW5pZmllZCA9IG1hcFtub25NaW5pZmllZF07XG4gICAgICBhcnJheS5wdXNoKHtwcm9wTmFtZTogbWluaWZpZWQsIHRlbXBsYXRlTmFtZTogbm9uTWluaWZpZWR9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBnZXROYW1lc3BhY2UoZWxlbWVudE5hbWU6IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgY29uc3QgbmFtZSA9IGVsZW1lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBuYW1lID09PSAnc3ZnJyA/IFNWR19OQU1FU1BBQ0UgOiAobmFtZSA9PT0gJ21hdGgnID8gTUFUSF9NTF9OQU1FU1BBQ0UgOiBudWxsKTtcbn1cblxuLyoqXG4gKiBBIGNoYW5nZSBkZXRlY3Rpb24gc2NoZWR1bGVyIHRva2VuIGZvciB7QGxpbmsgUm9vdENvbnRleHR9LiBUaGlzIHRva2VuIGlzIHRoZSBkZWZhdWx0IHZhbHVlIHVzZWRcbiAqIGZvciB0aGUgZGVmYXVsdCBgUm9vdENvbnRleHRgIGZvdW5kIGluIHRoZSB7QGxpbmsgUk9PVF9DT05URVhUfSB0b2tlbi5cbiAqL1xuZXhwb3J0IGNvbnN0IFNDSEVEVUxFUiA9IG5ldyBJbmplY3Rpb25Ub2tlbjwoKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkKT4oJ1NDSEVEVUxFUl9UT0tFTicsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiAoKSA9PiBkZWZhdWx0U2NoZWR1bGVyLFxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRJbmplY3Rvcihyb290Vmlld0luamVjdG9yOiBJbmplY3RvciwgbW9kdWxlSW5qZWN0b3I6IEluamVjdG9yKTogSW5qZWN0b3Ige1xuICByZXR1cm4ge1xuICAgIGdldDogPFQ+KHRva2VuOiBUeXBlPFQ+fEluamVjdGlvblRva2VuPFQ+LCBub3RGb3VuZFZhbHVlPzogVCwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IFQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSByb290Vmlld0luamVjdG9yLmdldCh0b2tlbiwgTk9UX0ZPVU5EX0NIRUNLX09OTFlfRUxFTUVOVF9JTkpFQ1RPUiBhcyBULCBmbGFncyk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gTk9UX0ZPVU5EX0NIRUNLX09OTFlfRUxFTUVOVF9JTkpFQ1RPUiB8fFxuICAgICAgICAgIG5vdEZvdW5kVmFsdWUgPT09IE5PVF9GT1VORF9DSEVDS19PTkxZX0VMRU1FTlRfSU5KRUNUT1IpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSB2YWx1ZSBmcm9tIHRoZSByb290IGVsZW1lbnQgaW5qZWN0b3Igd2hlblxuICAgICAgICAvLyAtIGl0IHByb3ZpZGVzIGl0XG4gICAgICAgIC8vICAgKHZhbHVlICE9PSBOT1RfRk9VTkRfQ0hFQ0tfT05MWV9FTEVNRU5UX0lOSkVDVE9SKVxuICAgICAgICAvLyAtIHRoZSBtb2R1bGUgaW5qZWN0b3Igc2hvdWxkIG5vdCBiZSBjaGVja2VkXG4gICAgICAgIC8vICAgKG5vdEZvdW5kVmFsdWUgPT09IE5PVF9GT1VORF9DSEVDS19PTkxZX0VMRU1FTlRfSU5KRUNUT1IpXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1vZHVsZUluamVjdG9yLmdldCh0b2tlbiwgbm90Rm91bmRWYWx1ZSwgZmxhZ3MpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBSZW5kZXIzIGltcGxlbWVudGF0aW9uIG9mIHtAbGluayB2aWV3RW5naW5lX0NvbXBvbmVudEZhY3Rvcnl9LlxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RmFjdG9yeTxUPiBleHRlbmRzIHZpZXdFbmdpbmVfQ29tcG9uZW50RmFjdG9yeTxUPiB7XG4gIHNlbGVjdG9yOiBzdHJpbmc7XG4gIGNvbXBvbmVudFR5cGU6IFR5cGU8YW55PjtcbiAgbmdDb250ZW50U2VsZWN0b3JzOiBzdHJpbmdbXTtcbiAgaXNCb3VuZFRvTW9kdWxlOiBib29sZWFuO1xuXG4gIGdldCBpbnB1dHMoKToge3Byb3BOYW1lOiBzdHJpbmc7IHRlbXBsYXRlTmFtZTogc3RyaW5nO31bXSB7XG4gICAgcmV0dXJuIHRvUmVmQXJyYXkodGhpcy5jb21wb25lbnREZWYuaW5wdXRzKTtcbiAgfVxuXG4gIGdldCBvdXRwdXRzKCk6IHtwcm9wTmFtZTogc3RyaW5nOyB0ZW1wbGF0ZU5hbWU6IHN0cmluZzt9W10ge1xuICAgIHJldHVybiB0b1JlZkFycmF5KHRoaXMuY29tcG9uZW50RGVmLm91dHB1dHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjb21wb25lbnREZWYgVGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLlxuICAgKiBAcGFyYW0gbmdNb2R1bGUgVGhlIE5nTW9kdWxlUmVmIHRvIHdoaWNoIHRoZSBmYWN0b3J5IGlzIGJvdW5kLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGNvbXBvbmVudERlZjogQ29tcG9uZW50RGVmPGFueT4sIHByaXZhdGUgbmdNb2R1bGU/OiB2aWV3RW5naW5lX05nTW9kdWxlUmVmPGFueT4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IGNvbXBvbmVudERlZi50eXBlO1xuICAgIHRoaXMuc2VsZWN0b3IgPSBzdHJpbmdpZnlDU1NTZWxlY3Rvckxpc3QoY29tcG9uZW50RGVmLnNlbGVjdG9ycyk7XG4gICAgdGhpcy5uZ0NvbnRlbnRTZWxlY3RvcnMgPVxuICAgICAgICBjb21wb25lbnREZWYubmdDb250ZW50U2VsZWN0b3JzID8gY29tcG9uZW50RGVmLm5nQ29udGVudFNlbGVjdG9ycyA6IFtdO1xuICAgIHRoaXMuaXNCb3VuZFRvTW9kdWxlID0gISFuZ01vZHVsZTtcbiAgfVxuXG4gIGNyZWF0ZShcbiAgICAgIGluamVjdG9yOiBJbmplY3RvciwgcHJvamVjdGFibGVOb2Rlcz86IGFueVtdW118dW5kZWZpbmVkLCByb290U2VsZWN0b3JPck5vZGU/OiBhbnksXG4gICAgICBuZ01vZHVsZT86IHZpZXdFbmdpbmVfTmdNb2R1bGVSZWY8YW55Pnx1bmRlZmluZWQpOiB2aWV3RW5naW5lX0NvbXBvbmVudFJlZjxUPiB7XG4gICAgbmdNb2R1bGUgPSBuZ01vZHVsZSB8fCB0aGlzLm5nTW9kdWxlO1xuXG4gICAgY29uc3Qgcm9vdFZpZXdJbmplY3RvciA9XG4gICAgICAgIG5nTW9kdWxlID8gY3JlYXRlQ2hhaW5lZEluamVjdG9yKGluamVjdG9yLCBuZ01vZHVsZS5pbmplY3RvcikgOiBpbmplY3RvcjtcblxuICAgIGNvbnN0IHJlbmRlcmVyRmFjdG9yeSA9XG4gICAgICAgIHJvb3RWaWV3SW5qZWN0b3IuZ2V0KFJlbmRlcmVyRmFjdG9yeTIsIGRvbVJlbmRlcmVyRmFjdG9yeTMpIGFzIFJlbmRlcmVyRmFjdG9yeTM7XG4gICAgY29uc3Qgc2FuaXRpemVyID0gcm9vdFZpZXdJbmplY3Rvci5nZXQoU2FuaXRpemVyLCBudWxsKTtcblxuICAgIGNvbnN0IGhvc3RSZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCB0aGlzLmNvbXBvbmVudERlZik7XG4gICAgLy8gRGV0ZXJtaW5lIGEgdGFnIG5hbWUgdXNlZCBmb3IgY3JlYXRpbmcgaG9zdCBlbGVtZW50cyB3aGVuIHRoaXMgY29tcG9uZW50IGlzIGNyZWF0ZWRcbiAgICAvLyBkeW5hbWljYWxseS4gRGVmYXVsdCB0byAnZGl2JyBpZiB0aGlzIGNvbXBvbmVudCBkaWQgbm90IHNwZWNpZnkgYW55IHRhZyBuYW1lIGluIGl0cyBzZWxlY3Rvci5cbiAgICBjb25zdCBlbGVtZW50TmFtZSA9IHRoaXMuY29tcG9uZW50RGVmLnNlbGVjdG9yc1swXVswXSBhcyBzdHJpbmcgfHwgJ2Rpdic7XG4gICAgY29uc3QgaG9zdFJOb2RlID0gcm9vdFNlbGVjdG9yT3JOb2RlID9cbiAgICAgICAgbG9jYXRlSG9zdEVsZW1lbnQoaG9zdFJlbmRlcmVyLCByb290U2VsZWN0b3JPck5vZGUsIHRoaXMuY29tcG9uZW50RGVmLmVuY2Fwc3VsYXRpb24pIDpcbiAgICAgICAgZWxlbWVudENyZWF0ZShcbiAgICAgICAgICAgIGVsZW1lbnROYW1lLCByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgdGhpcy5jb21wb25lbnREZWYpLFxuICAgICAgICAgICAgZ2V0TmFtZXNwYWNlKGVsZW1lbnROYW1lKSk7XG5cbiAgICBjb25zdCByb290RmxhZ3MgPSB0aGlzLmNvbXBvbmVudERlZi5vblB1c2ggPyBMVmlld0ZsYWdzLkRpcnR5IHwgTFZpZXdGbGFncy5Jc1Jvb3QgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExWaWV3RmxhZ3MuQ2hlY2tBbHdheXMgfCBMVmlld0ZsYWdzLklzUm9vdDtcblxuICAgIC8vIENoZWNrIHdoZXRoZXIgdGhpcyBDb21wb25lbnQgbmVlZHMgdG8gYmUgaXNvbGF0ZWQgZnJvbSBvdGhlciBjb21wb25lbnRzLCBpLmUuIHdoZXRoZXIgaXRcbiAgICAvLyBzaG91bGQgYmUgcGxhY2VkIGludG8gaXRzIG93biAoZW1wdHkpIHJvb3QgY29udGV4dCBvciBleGlzdGluZyByb290IGNvbnRleHQgc2hvdWxkIGJlIHVzZWQuXG4gICAgLy8gTm90ZTogdGhpcyBpcyBpbnRlcm5hbC1vbmx5IGNvbnZlbnRpb24gYW5kIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlLCBzbyBpdCBzaG91bGQgbm90IGJlXG4gICAgLy8gcmVsaWVkIHVwb24gZXh0ZXJuYWxseS5cbiAgICBjb25zdCBpc0lzb2xhdGVkID0gdHlwZW9mIHJvb3RTZWxlY3Rvck9yTm9kZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgL14jcm9vdC1uZy1pbnRlcm5hbC1pc29sYXRlZC1cXGQrLy50ZXN0KHJvb3RTZWxlY3Rvck9yTm9kZSk7XG5cbiAgICBjb25zdCByb290Q29udGV4dCA9IGNyZWF0ZVJvb3RDb250ZXh0KCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHJvb3Qgdmlldy4gVXNlcyBlbXB0eSBUVmlldyBhbmQgQ29udGVudFRlbXBsYXRlLlxuICAgIGNvbnN0IHJvb3RUVmlldyA9IGNyZWF0ZVRWaWV3KFRWaWV3VHlwZS5Sb290LCAtMSwgbnVsbCwgMSwgMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgY29uc3Qgcm9vdExWaWV3ID0gY3JlYXRlTFZpZXcoXG4gICAgICAgIG51bGwsIHJvb3RUVmlldywgcm9vdENvbnRleHQsIHJvb3RGbGFncywgbnVsbCwgbnVsbCwgcmVuZGVyZXJGYWN0b3J5LCBob3N0UmVuZGVyZXIsXG4gICAgICAgIHNhbml0aXplciwgcm9vdFZpZXdJbmplY3Rvcik7XG5cbiAgICAvLyByb290VmlldyBpcyB0aGUgcGFyZW50IHdoZW4gYm9vdHN0cmFwcGluZ1xuICAgIC8vIFRPRE8obWlza28pOiBpdCBsb29rcyBsaWtlIHdlIGFyZSBlbnRlcmluZyB2aWV3IGhlcmUgYnV0IHdlIGRvbid0IHJlYWxseSBuZWVkIHRvIGFzXG4gICAgLy8gYHJlbmRlclZpZXdgIGRvZXMgdGhhdC4gSG93ZXZlciBhcyB0aGUgY29kZSBpcyB3cml0dGVuIGl0IGlzIG5lZWRlZCBiZWNhdXNlXG4gICAgLy8gYGNyZWF0ZVJvb3RDb21wb25lbnRWaWV3YCBhbmQgYGNyZWF0ZVJvb3RDb21wb25lbnRgIGJvdGggcmVhZCBnbG9iYWwgc3RhdGUuIEZpeGluZyB0aG9zZVxuICAgIC8vIGlzc3VlcyB3b3VsZCBhbGxvdyB1cyB0byBkcm9wIHRoaXMuXG4gICAgZW50ZXJWaWV3KHJvb3RMVmlldywgbnVsbCk7XG5cbiAgICBsZXQgY29tcG9uZW50OiBUO1xuICAgIGxldCB0RWxlbWVudE5vZGU6IFRFbGVtZW50Tm9kZTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb21wb25lbnRWaWV3ID0gY3JlYXRlUm9vdENvbXBvbmVudFZpZXcoXG4gICAgICAgICAgaG9zdFJOb2RlLCB0aGlzLmNvbXBvbmVudERlZiwgcm9vdExWaWV3LCByZW5kZXJlckZhY3RvcnksIGhvc3RSZW5kZXJlcik7XG4gICAgICBpZiAoaG9zdFJOb2RlKSB7XG4gICAgICAgIGlmIChyb290U2VsZWN0b3JPck5vZGUpIHtcbiAgICAgICAgICBzZXRVcEF0dHJpYnV0ZXMoaG9zdFJlbmRlcmVyLCBob3N0Uk5vZGUsIFsnbmctdmVyc2lvbicsIFZFUlNJT04uZnVsbF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIGhvc3QgZWxlbWVudCBpcyBjcmVhdGVkIGFzIGEgcGFydCBvZiB0aGlzIGZ1bmN0aW9uIGNhbGwgKGkuZS4gYHJvb3RTZWxlY3Rvck9yTm9kZWBcbiAgICAgICAgICAvLyBpcyBub3QgZGVmaW5lZCksIGFsc28gYXBwbHkgYXR0cmlidXRlcyBhbmQgY2xhc3NlcyBleHRyYWN0ZWQgZnJvbSBjb21wb25lbnQgc2VsZWN0b3IuXG4gICAgICAgICAgLy8gRXh0cmFjdCBhdHRyaWJ1dGVzIGFuZCBjbGFzc2VzIGZyb20gdGhlIGZpcnN0IHNlbGVjdG9yIG9ubHkgdG8gbWF0Y2ggVkUgYmVoYXZpb3IuXG4gICAgICAgICAgY29uc3Qge2F0dHJzLCBjbGFzc2VzfSA9XG4gICAgICAgICAgICAgIGV4dHJhY3RBdHRyc0FuZENsYXNzZXNGcm9tU2VsZWN0b3IodGhpcy5jb21wb25lbnREZWYuc2VsZWN0b3JzWzBdKTtcbiAgICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICAgIHNldFVwQXR0cmlidXRlcyhob3N0UmVuZGVyZXIsIGhvc3RSTm9kZSwgYXR0cnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2xhc3NlcyAmJiBjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHdyaXRlRGlyZWN0Q2xhc3MoaG9zdFJlbmRlcmVyLCBob3N0Uk5vZGUsIGNsYXNzZXMuam9pbignICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdEVsZW1lbnROb2RlID0gZ2V0VE5vZGUocm9vdFRWaWV3LCAwKSBhcyBURWxlbWVudE5vZGU7XG5cbiAgICAgIGlmIChwcm9qZWN0YWJsZU5vZGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbjogKFROb2RlfFJOb2RlW118bnVsbClbXSA9IHRFbGVtZW50Tm9kZS5wcm9qZWN0aW9uID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uZ0NvbnRlbnRTZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBub2Rlc2ZvclNsb3QgPSBwcm9qZWN0YWJsZU5vZGVzW2ldO1xuICAgICAgICAgIC8vIFByb2plY3RhYmxlIG5vZGVzIGNhbiBiZSBwYXNzZWQgYXMgYXJyYXkgb2YgYXJyYXlzIG9yIGFuIGFycmF5IG9mIGl0ZXJhYmxlcyAobmdVcGdyYWRlXG4gICAgICAgICAgLy8gY2FzZSkuIEhlcmUgd2UgZG8gbm9ybWFsaXplIHBhc3NlZCBkYXRhIHN0cnVjdHVyZSB0byBiZSBhbiBhcnJheSBvZiBhcnJheXMgdG8gYXZvaWRcbiAgICAgICAgICAvLyBjb21wbGV4IGNoZWNrcyBkb3duIHRoZSBsaW5lLlxuICAgICAgICAgIC8vIFdlIGFsc28gbm9ybWFsaXplIHRoZSBsZW5ndGggb2YgdGhlIHBhc3NlZCBpbiBwcm9qZWN0YWJsZSBub2RlcyAodG8gbWF0Y2ggdGhlIG51bWJlciBvZlxuICAgICAgICAgIC8vIDxuZy1jb250YWluZXI+IHNsb3RzIGRlZmluZWQgYnkgYSBjb21wb25lbnQpLlxuICAgICAgICAgIHByb2plY3Rpb24ucHVzaChub2Rlc2ZvclNsb3QgIT0gbnVsbCA/IEFycmF5LmZyb20obm9kZXNmb3JTbG90KSA6IG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IHNob3VsZCBMaWZlY3ljbGVIb29rc0ZlYXR1cmUgYW5kIG90aGVyIGhvc3QgZmVhdHVyZXMgYmUgZ2VuZXJhdGVkIGJ5IHRoZSBjb21waWxlciBhbmRcbiAgICAgIC8vIGV4ZWN1dGVkIGhlcmU/XG4gICAgICAvLyBBbmd1bGFyIDUgcmVmZXJlbmNlOiBodHRwczovL3N0YWNrYmxpdHouY29tL2VkaXQvbGlmZWN5Y2xlLWhvb2tzLXZjcmVmXG4gICAgICBjb21wb25lbnQgPSBjcmVhdGVSb290Q29tcG9uZW50KFxuICAgICAgICAgIGNvbXBvbmVudFZpZXcsIHRoaXMuY29tcG9uZW50RGVmLCByb290TFZpZXcsIHJvb3RDb250ZXh0LCBbTGlmZWN5Y2xlSG9va3NGZWF0dXJlXSk7XG5cbiAgICAgIHJlbmRlclZpZXcocm9vdFRWaWV3LCByb290TFZpZXcsIG51bGwpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBsZWF2ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBuZXcgQ29tcG9uZW50UmVmKFxuICAgICAgICB0aGlzLmNvbXBvbmVudFR5cGUsIGNvbXBvbmVudCxcbiAgICAgICAgY3JlYXRlRWxlbWVudFJlZih2aWV3RW5naW5lX0VsZW1lbnRSZWYsIHRFbGVtZW50Tm9kZSwgcm9vdExWaWV3KSwgcm9vdExWaWV3LCB0RWxlbWVudE5vZGUpO1xuXG4gICAgaWYgKCFyb290U2VsZWN0b3JPck5vZGUgfHwgaXNJc29sYXRlZCkge1xuICAgICAgLy8gVGhlIGhvc3QgZWxlbWVudCBvZiB0aGUgaW50ZXJuYWwgb3IgaXNvbGF0ZWQgcm9vdCB2aWV3IGlzIGF0dGFjaGVkIHRvIHRoZSBjb21wb25lbnQncyBob3N0XG4gICAgICAvLyB2aWV3IG5vZGUuXG4gICAgICBuZ0Rldk1vZGUgJiYgYXNzZXJ0Tm9kZU9mUG9zc2libGVUeXBlcyhyb290VFZpZXcubm9kZSwgVE5vZGVUeXBlLlZpZXcpO1xuICAgICAgcm9vdFRWaWV3Lm5vZGUhLmNoaWxkID0gdEVsZW1lbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50UmVmO1xuICB9XG59XG5cbmNvbnN0IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyID0gbmV3IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcigpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgYW5kIHN0b3JlcyBpdCBvbiB0aGUgaW5qZWN0b3IuIE9yLCBpZiB0aGVcbiAqIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICogYWxyZWFkeSBleGlzdHMsIHJldHJpZXZlcyB0aGUgZXhpc3RpbmcgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLlxuICpcbiAqIEByZXR1cm5zIFRoZSBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgaW5zdGFuY2UgdG8gdXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIoKTogdmlld0VuZ2luZV9Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIge1xuICByZXR1cm4gY29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gaW5zdGFuY2Ugb2YgYSBDb21wb25lbnQgY3JlYXRlZCB2aWEgYSB7QGxpbmsgQ29tcG9uZW50RmFjdG9yeX0uXG4gKlxuICogYENvbXBvbmVudFJlZmAgcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBDb21wb25lbnQgSW5zdGFuY2UgYXMgd2VsbCBvdGhlciBvYmplY3RzIHJlbGF0ZWQgdG8gdGhpc1xuICogQ29tcG9uZW50IEluc3RhbmNlIGFuZCBhbGxvd3MgeW91IHRvIGRlc3Ryb3kgdGhlIENvbXBvbmVudCBJbnN0YW5jZSB2aWEgdGhlIHtAbGluayAjZGVzdHJveX1cbiAqIG1ldGhvZC5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRSZWY8VD4gZXh0ZW5kcyB2aWV3RW5naW5lX0NvbXBvbmVudFJlZjxUPiB7XG4gIGRlc3Ryb3lDYnM6ICgoKSA9PiB2b2lkKVtdfG51bGwgPSBbXTtcbiAgaW5zdGFuY2U6IFQ7XG4gIGhvc3RWaWV3OiBWaWV3UmVmPFQ+O1xuICBjaGFuZ2VEZXRlY3RvclJlZjogVmlld0VuZ2luZV9DaGFuZ2VEZXRlY3RvclJlZjtcbiAgY29tcG9uZW50VHlwZTogVHlwZTxUPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGNvbXBvbmVudFR5cGU6IFR5cGU8VD4sIGluc3RhbmNlOiBULCBwdWJsaWMgbG9jYXRpb246IHZpZXdFbmdpbmVfRWxlbWVudFJlZixcbiAgICAgIHByaXZhdGUgX3Jvb3RMVmlldzogTFZpZXcsXG4gICAgICBwcml2YXRlIF90Tm9kZTogVEVsZW1lbnROb2RlfFRDb250YWluZXJOb2RlfFRFbGVtZW50Q29udGFpbmVyTm9kZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIHRoaXMuaG9zdFZpZXcgPSB0aGlzLmNoYW5nZURldGVjdG9yUmVmID0gbmV3IFJvb3RWaWV3UmVmPFQ+KF9yb290TFZpZXcpO1xuICAgIGFzc2lnblRWaWV3Tm9kZVRvTFZpZXcoX3Jvb3RMVmlld1tUVklFV10sIG51bGwsIC0xLCBfcm9vdExWaWV3KTtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSBjb21wb25lbnRUeXBlO1xuICB9XG5cbiAgZ2V0IGluamVjdG9yKCk6IEluamVjdG9yIHtcbiAgICByZXR1cm4gbmV3IE5vZGVJbmplY3Rvcih0aGlzLl90Tm9kZSwgdGhpcy5fcm9vdExWaWV3KTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVzdHJveUNicykge1xuICAgICAgdGhpcy5kZXN0cm95Q2JzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgICB0aGlzLmRlc3Ryb3lDYnMgPSBudWxsO1xuICAgICAgIXRoaXMuaG9zdFZpZXcuZGVzdHJveWVkICYmIHRoaXMuaG9zdFZpZXcuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGVzdHJveShjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlc3Ryb3lDYnMpIHtcbiAgICAgIHRoaXMuZGVzdHJveUNicy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==