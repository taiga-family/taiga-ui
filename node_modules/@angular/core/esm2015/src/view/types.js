/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/view/types.ts
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
 * Factory for ViewDefinitions/NgModuleDefinitions.
 * We use a function so we can reexeute it in case an error happens and use the given logger
 * function to log the error from the definition of the node, which is shown in all browser
 * logs.
 * @record
 * @template D
 */
export function DefinitionFactory() { }
/**
 * Function to call console.error at the right source location. This is an indirection
 * via another function as browser will log the location that actually called
 * `console.error`.
 * @record
 */
export function NodeLogger() { }
/**
 * @record
 * @template DF
 */
export function Definition() { }
if (false) {
    /** @type {?} */
    Definition.prototype.factory;
}
/**
 * @record
 */
export function NgModuleDefinition() { }
if (false) {
    /** @type {?} */
    NgModuleDefinition.prototype.providers;
    /** @type {?} */
    NgModuleDefinition.prototype.providersByKey;
    /** @type {?} */
    NgModuleDefinition.prototype.modules;
    /** @type {?} */
    NgModuleDefinition.prototype.scope;
}
/**
 * @record
 */
export function NgModuleDefinitionFactory() { }
/**
 * @record
 */
export function ViewDefinition() { }
if (false) {
    /** @type {?} */
    ViewDefinition.prototype.flags;
    /** @type {?} */
    ViewDefinition.prototype.updateDirectives;
    /** @type {?} */
    ViewDefinition.prototype.updateRenderer;
    /** @type {?} */
    ViewDefinition.prototype.handleEvent;
    /**
     * Order: Depth first.
     * Especially providers are before elements / anchors.
     * @type {?}
     */
    ViewDefinition.prototype.nodes;
    /**
     * aggregated NodeFlags for all nodes *
     * @type {?}
     */
    ViewDefinition.prototype.nodeFlags;
    /** @type {?} */
    ViewDefinition.prototype.rootNodeFlags;
    /** @type {?} */
    ViewDefinition.prototype.lastRenderRootNode;
    /** @type {?} */
    ViewDefinition.prototype.bindingCount;
    /** @type {?} */
    ViewDefinition.prototype.outputCount;
    /**
     * Binary or of all query ids that are matched by one of the nodes.
     * This includes query ids from templates as well.
     * Used as a bloom filter.
     * @type {?}
     */
    ViewDefinition.prototype.nodeMatchedQueries;
}
/**
 * @record
 */
export function ViewDefinitionFactory() { }
/**
 * @record
 */
export function ViewUpdateFn() { }
/**
 * @record
 */
export function NodeCheckFn() { }
/** @enum {number} */
const ArgumentType = {
    Inline: 0,
    Dynamic: 1,
};
export { ArgumentType };
/**
 * @record
 */
export function ViewHandleEventFn() { }
/** @enum {number} */
const ViewFlags = {
    None: 0,
    OnPush: 2,
};
export { ViewFlags };
/**
 * A node definition in the view.
 *
 * Note: We use one type for all nodes so that loops that loop over all nodes
 * of a ViewDefinition stay monomorphic!
 * @record
 */
export function NodeDef() { }
if (false) {
    /** @type {?} */
    NodeDef.prototype.flags;
    /** @type {?} */
    NodeDef.prototype.nodeIndex;
    /** @type {?} */
    NodeDef.prototype.checkIndex;
    /** @type {?} */
    NodeDef.prototype.parent;
    /** @type {?} */
    NodeDef.prototype.renderParent;
    /**
     * this is checked against NgContentDef.index to find matched nodes
     * @type {?}
     */
    NodeDef.prototype.ngContentIndex;
    /**
     * number of transitive children
     * @type {?}
     */
    NodeDef.prototype.childCount;
    /**
     * aggregated NodeFlags for all transitive children (does not include self) *
     * @type {?}
     */
    NodeDef.prototype.childFlags;
    /**
     * aggregated NodeFlags for all direct children (does not include self) *
     * @type {?}
     */
    NodeDef.prototype.directChildFlags;
    /** @type {?} */
    NodeDef.prototype.bindingIndex;
    /** @type {?} */
    NodeDef.prototype.bindings;
    /** @type {?} */
    NodeDef.prototype.bindingFlags;
    /** @type {?} */
    NodeDef.prototype.outputIndex;
    /** @type {?} */
    NodeDef.prototype.outputs;
    /**
     * references that the user placed on the element
     * @type {?}
     */
    NodeDef.prototype.references;
    /**
     * ids and value types of all queries that are matched by this node.
     * @type {?}
     */
    NodeDef.prototype.matchedQueries;
    /**
     * Binary or of all matched query ids of this node.
     * @type {?}
     */
    NodeDef.prototype.matchedQueryIds;
    /**
     * Binary or of all query ids that are matched by one of the children.
     * This includes query ids from templates as well.
     * Used as a bloom filter.
     * @type {?}
     */
    NodeDef.prototype.childMatchedQueries;
    /** @type {?} */
    NodeDef.prototype.element;
    /** @type {?} */
    NodeDef.prototype.provider;
    /** @type {?} */
    NodeDef.prototype.text;
    /** @type {?} */
    NodeDef.prototype.query;
    /** @type {?} */
    NodeDef.prototype.ngContent;
}
/** @enum {number} */
const NodeFlags = {
    None: 0,
    TypeElement: 1,
    TypeText: 2,
    ProjectedTemplate: 4,
    CatRenderNode: 3,
    TypeNgContent: 8,
    TypePipe: 16,
    TypePureArray: 32,
    TypePureObject: 64,
    TypePurePipe: 128,
    CatPureExpression: 224,
    TypeValueProvider: 256,
    TypeClassProvider: 512,
    TypeFactoryProvider: 1024,
    TypeUseExistingProvider: 2048,
    LazyProvider: 4096,
    PrivateProvider: 8192,
    TypeDirective: 16384,
    Component: 32768,
    CatProviderNoDirective: 3840,
    CatProvider: 20224,
    OnInit: 65536,
    OnDestroy: 131072,
    DoCheck: 262144,
    OnChanges: 524288,
    AfterContentInit: 1048576,
    AfterContentChecked: 2097152,
    AfterViewInit: 4194304,
    AfterViewChecked: 8388608,
    EmbeddedViews: 16777216,
    ComponentView: 33554432,
    TypeContentQuery: 67108864,
    TypeViewQuery: 134217728,
    StaticQuery: 268435456,
    DynamicQuery: 536870912,
    TypeNgModule: 1073741824,
    CatQuery: 201326592,
    // mutually exclusive values...
    Types: 201347067,
};
export { NodeFlags };
/**
 * @record
 */
export function BindingDef() { }
if (false) {
    /** @type {?} */
    BindingDef.prototype.flags;
    /** @type {?} */
    BindingDef.prototype.ns;
    /** @type {?} */
    BindingDef.prototype.name;
    /** @type {?} */
    BindingDef.prototype.nonMinifiedName;
    /** @type {?} */
    BindingDef.prototype.securityContext;
    /** @type {?} */
    BindingDef.prototype.suffix;
}
/** @enum {number} */
const BindingFlags = {
    TypeElementAttribute: 1,
    TypeElementClass: 2,
    TypeElementStyle: 4,
    TypeProperty: 8,
    SyntheticProperty: 16,
    SyntheticHostProperty: 32,
    CatSyntheticProperty: 48,
    // mutually exclusive values...
    Types: 15,
};
export { BindingFlags };
/**
 * @record
 */
export function OutputDef() { }
if (false) {
    /** @type {?} */
    OutputDef.prototype.type;
    /** @type {?} */
    OutputDef.prototype.target;
    /** @type {?} */
    OutputDef.prototype.eventName;
    /** @type {?} */
    OutputDef.prototype.propName;
}
/** @enum {number} */
const OutputType = {
    ElementOutput: 0,
    DirectiveOutput: 1,
};
export { OutputType };
/** @enum {number} */
const QueryValueType = {
    ElementRef: 0,
    RenderElement: 1,
    TemplateRef: 2,
    ViewContainerRef: 3,
    Provider: 4,
};
export { QueryValueType };
/**
 * @record
 */
export function ElementDef() { }
if (false) {
    /** @type {?} */
    ElementDef.prototype.name;
    /** @type {?} */
    ElementDef.prototype.ns;
    /**
     * ns, name, value
     * @type {?}
     */
    ElementDef.prototype.attrs;
    /** @type {?} */
    ElementDef.prototype.template;
    /** @type {?} */
    ElementDef.prototype.componentProvider;
    /** @type {?} */
    ElementDef.prototype.componentRendererType;
    /** @type {?} */
    ElementDef.prototype.componentView;
    /**
     * visible public providers for DI in the view,
     * as see from this element. This does not include private providers.
     * @type {?}
     */
    ElementDef.prototype.publicProviders;
    /**
     * same as visiblePublicProviders, but also includes private providers
     * that are located on this element.
     * @type {?}
     */
    ElementDef.prototype.allProviders;
    /** @type {?} */
    ElementDef.prototype.handleEvent;
}
/**
 * @record
 */
export function ElementHandleEventFn() { }
/**
 * @record
 */
export function ProviderDef() { }
if (false) {
    /** @type {?} */
    ProviderDef.prototype.token;
    /** @type {?} */
    ProviderDef.prototype.value;
    /** @type {?} */
    ProviderDef.prototype.deps;
}
/**
 * @record
 */
export function NgModuleProviderDef() { }
if (false) {
    /** @type {?} */
    NgModuleProviderDef.prototype.flags;
    /** @type {?} */
    NgModuleProviderDef.prototype.index;
    /** @type {?} */
    NgModuleProviderDef.prototype.token;
    /** @type {?} */
    NgModuleProviderDef.prototype.value;
    /** @type {?} */
    NgModuleProviderDef.prototype.deps;
}
/**
 * @record
 */
export function DepDef() { }
if (false) {
    /** @type {?} */
    DepDef.prototype.flags;
    /** @type {?} */
    DepDef.prototype.token;
    /** @type {?} */
    DepDef.prototype.tokenKey;
}
/** @enum {number} */
const DepFlags = {
    None: 0,
    SkipSelf: 1,
    Optional: 2,
    Self: 4,
    Value: 8,
};
export { DepFlags };
/**
 * @record
 */
export function TextDef() { }
if (false) {
    /** @type {?} */
    TextDef.prototype.prefix;
}
/**
 * @record
 */
export function QueryDef() { }
if (false) {
    /** @type {?} */
    QueryDef.prototype.id;
    /** @type {?} */
    QueryDef.prototype.filterId;
    /** @type {?} */
    QueryDef.prototype.bindings;
}
/**
 * @record
 */
export function QueryBindingDef() { }
if (false) {
    /** @type {?} */
    QueryBindingDef.prototype.propName;
    /** @type {?} */
    QueryBindingDef.prototype.bindingType;
}
/** @enum {number} */
const QueryBindingType = {
    First: 0,
    All: 1,
};
export { QueryBindingType };
/**
 * @record
 */
export function NgContentDef() { }
if (false) {
    /**
     * this index is checked against NodeDef.ngContentIndex to find the nodes
     * that are matched by this ng-content.
     * Note that a NodeDef with an ng-content can be reprojected, i.e.
     * have a ngContentIndex on its own.
     * @type {?}
     */
    NgContentDef.prototype.index;
}
/**
 * @record
 */
export function NgModuleData() { }
if (false) {
    /** @type {?} */
    NgModuleData.prototype._def;
    /** @type {?} */
    NgModuleData.prototype._parent;
    /** @type {?} */
    NgModuleData.prototype._providers;
}
/**
 * View instance data.
 * Attention: Adding fields to this is performance sensitive!
 * @record
 */
export function ViewData() { }
if (false) {
    /** @type {?} */
    ViewData.prototype.def;
    /** @type {?} */
    ViewData.prototype.root;
    /** @type {?} */
    ViewData.prototype.renderer;
    /** @type {?} */
    ViewData.prototype.parentNodeDef;
    /** @type {?} */
    ViewData.prototype.parent;
    /** @type {?} */
    ViewData.prototype.viewContainerParent;
    /** @type {?} */
    ViewData.prototype.component;
    /** @type {?} */
    ViewData.prototype.context;
    /** @type {?} */
    ViewData.prototype.nodes;
    /** @type {?} */
    ViewData.prototype.state;
    /** @type {?} */
    ViewData.prototype.oldValues;
    /** @type {?} */
    ViewData.prototype.disposables;
    /** @type {?} */
    ViewData.prototype.initIndex;
}
/** @enum {number} */
const ViewState = {
    BeforeFirstCheck: 1,
    FirstCheck: 2,
    Attached: 4,
    ChecksEnabled: 8,
    IsProjectedView: 16,
    CheckProjectedView: 32,
    CheckProjectedViews: 64,
    Destroyed: 128,
    // InitState Uses 3 bits
    InitState_Mask: 1792,
    InitState_BeforeInit: 0,
    InitState_CallingOnInit: 256,
    InitState_CallingAfterContentInit: 512,
    InitState_CallingAfterViewInit: 768,
    InitState_AfterInit: 1024,
    CatDetectChanges: 12,
    CatInit: 13,
};
export { ViewState };
// Called before each cycle of a view's check to detect whether this is in the
// initState for which we need to call ngOnInit, ngAfterContentInit or ngAfterViewInit
// lifecycle methods. Returns true if this check cycle should call lifecycle
// methods.
/**
 * @param {?} view
 * @param {?} priorInitState
 * @param {?} newInitState
 * @return {?}
 */
export function shiftInitState(view, priorInitState, newInitState) {
    // Only update the InitState if we are currently in the prior state.
    // For example, only move into CallingInit if we are in BeforeInit. Only
    // move into CallingContentInit if we are in CallingInit. Normally this will
    // always be true because of how checkCycle is called in checkAndUpdateView.
    // However, if checkAndUpdateView is called recursively or if an exception is
    // thrown while checkAndUpdateView is running, checkAndUpdateView starts over
    // from the beginning. This ensures the state is monotonically increasing,
    // terminating in the AfterInit state, which ensures the Init methods are called
    // at least once and only once.
    /** @type {?} */
    const state = view.state;
    /** @type {?} */
    const initState = state & 1792 /* InitState_Mask */;
    if (initState === priorInitState) {
        view.state = (state & ~1792 /* InitState_Mask */) | newInitState;
        view.initIndex = -1;
        return true;
    }
    return initState === newInitState;
}
// Returns true if the lifecycle init method should be called for the node with
// the given init index.
/**
 * @param {?} view
 * @param {?} initState
 * @param {?} index
 * @return {?}
 */
export function shouldCallLifecycleInitHook(view, initState, index) {
    if ((view.state & 1792 /* InitState_Mask */) === initState && view.initIndex <= index) {
        view.initIndex = index + 1;
        return true;
    }
    return false;
}
/**
 * @record
 */
export function DisposableFn() { }
/**
 * Node instance data.
 *
 * We have a separate type per NodeType to save memory
 * (TextData | ElementData | ProviderData | PureExpressionData | QueryList<any>)
 *
 * To keep our code monomorphic,
 * we prohibit using `NodeData` directly but enforce the use of accessors (`asElementData`, ...).
 * This way, no usage site can get a `NodeData` from view.nodes and then use it for different
 * purposes.
 */
export class NodeData {
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    NodeData.prototype.__brand;
}
/**
 * Data for an instantiated NodeType.Text.
 *
 * Attention: Adding fields to this is performance sensitive!
 * @record
 */
export function TextData() { }
if (false) {
    /** @type {?} */
    TextData.prototype.renderText;
}
/**
 * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
 * @param {?} view
 * @param {?} index
 * @return {?}
 */
export function asTextData(view, index) {
    return (/** @type {?} */ (view.nodes[index]));
}
/**
 * Data for an instantiated NodeType.Element.
 *
 * Attention: Adding fields to this is performance sensitive!
 * @record
 */
export function ElementData() { }
if (false) {
    /** @type {?} */
    ElementData.prototype.renderElement;
    /** @type {?} */
    ElementData.prototype.componentView;
    /** @type {?} */
    ElementData.prototype.viewContainer;
    /** @type {?} */
    ElementData.prototype.template;
}
/**
 * @record
 */
export function ViewContainerData() { }
if (false) {
    /** @type {?} */
    ViewContainerData.prototype._embeddedViews;
}
/**
 * @record
 */
export function TemplateData() { }
if (false) {
    /** @type {?} */
    TemplateData.prototype._projectedViews;
}
/**
 * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
 * @param {?} view
 * @param {?} index
 * @return {?}
 */
export function asElementData(view, index) {
    return (/** @type {?} */ (view.nodes[index]));
}
/**
 * Data for an instantiated NodeType.Provider.
 *
 * Attention: Adding fields to this is performance sensitive!
 * @record
 */
export function ProviderData() { }
if (false) {
    /** @type {?} */
    ProviderData.prototype.instance;
}
/**
 * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
 * @param {?} view
 * @param {?} index
 * @return {?}
 */
export function asProviderData(view, index) {
    return (/** @type {?} */ (view.nodes[index]));
}
/**
 * Data for an instantiated NodeType.PureExpression.
 *
 * Attention: Adding fields to this is performance sensitive!
 * @record
 */
export function PureExpressionData() { }
if (false) {
    /** @type {?} */
    PureExpressionData.prototype.value;
}
/**
 * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
 * @param {?} view
 * @param {?} index
 * @return {?}
 */
export function asPureExpressionData(view, index) {
    return (/** @type {?} */ (view.nodes[index]));
}
/**
 * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
 * @param {?} view
 * @param {?} index
 * @return {?}
 */
export function asQueryList(view, index) {
    return (/** @type {?} */ (view.nodes[index]));
}
/**
 * @record
 */
export function RootData() { }
if (false) {
    /** @type {?} */
    RootData.prototype.injector;
    /** @type {?} */
    RootData.prototype.ngModule;
    /** @type {?} */
    RootData.prototype.projectableNodes;
    /** @type {?} */
    RootData.prototype.selectorOrNode;
    /** @type {?} */
    RootData.prototype.renderer;
    /** @type {?} */
    RootData.prototype.rendererFactory;
    /** @type {?} */
    RootData.prototype.errorHandler;
    /** @type {?} */
    RootData.prototype.sanitizer;
}
/**
 * @abstract
 */
export class DebugContext {
}
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    DebugContext.prototype.view = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DebugContext.prototype.nodeIndex = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DebugContext.prototype.injector = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DebugContext.prototype.component = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DebugContext.prototype.providerTokens = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DebugContext.prototype.references = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DebugContext.prototype.context = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DebugContext.prototype.componentRenderElement = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DebugContext.prototype.renderNode = function () { };
    /**
     * @abstract
     * @param {?} console
     * @param {...?} values
     * @return {?}
     */
    DebugContext.prototype.logError = function (console, values) { };
}
/** @enum {number} */
const CheckType = {
    CheckAndUpdate: 0,
    CheckNoChanges: 1,
};
export { CheckType };
/**
 * @record
 */
export function ProviderOverride() { }
if (false) {
    /** @type {?} */
    ProviderOverride.prototype.token;
    /** @type {?} */
    ProviderOverride.prototype.flags;
    /** @type {?} */
    ProviderOverride.prototype.value;
    /** @type {?} */
    ProviderOverride.prototype.deps;
    /** @type {?} */
    ProviderOverride.prototype.deprecatedBehavior;
}
// WARNING: interface has both a type and a value, skipping emit
/**
 * This object is used to prevent cycles in the source files and to have a place where
 * debug mode can hook it. It is lazily filled when `isDevMode` is known.
 * @type {?}
 */
export const Services = {
    setCurrentNode: (/** @type {?} */ (undefined)),
    createRootView: (/** @type {?} */ (undefined)),
    createEmbeddedView: (/** @type {?} */ (undefined)),
    createComponentView: (/** @type {?} */ (undefined)),
    createNgModuleRef: (/** @type {?} */ (undefined)),
    overrideProvider: (/** @type {?} */ (undefined)),
    overrideComponentView: (/** @type {?} */ (undefined)),
    clearOverrides: (/** @type {?} */ (undefined)),
    checkAndUpdateView: (/** @type {?} */ (undefined)),
    checkNoChangesView: (/** @type {?} */ (undefined)),
    destroyView: (/** @type {?} */ (undefined)),
    resolveDep: (/** @type {?} */ (undefined)),
    createDebugContext: (/** @type {?} */ (undefined)),
    handleEvent: (/** @type {?} */ (undefined)),
    updateDirectives: (/** @type {?} */ (undefined)),
    updateRenderer: (/** @type {?} */ (undefined)),
    dirtyParentQueries: (/** @type {?} */ (undefined)),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy92aWV3L3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBLHVDQUVDOzs7Ozs7O0FBT0QsZ0NBRUM7Ozs7O0FBRUQsZ0NBRUM7OztJQURDLDZCQUFpQjs7Ozs7QUFHbkIsd0NBS0M7OztJQUpDLHVDQUFpQzs7SUFDakMsNENBQTBEOztJQUMxRCxxQ0FBZTs7SUFDZixtQ0FBOEI7Ozs7O0FBR2hDLCtDQUEyRjs7OztBQUUzRixvQ0FzQkM7OztJQXJCQywrQkFBaUI7O0lBQ2pCLDBDQUErQjs7SUFDL0Isd0NBQTZCOztJQUM3QixxQ0FBK0I7Ozs7OztJQUsvQiwrQkFBaUI7Ozs7O0lBRWpCLG1DQUFxQjs7SUFDckIsdUNBQXlCOztJQUN6Qiw0Q0FBaUM7O0lBQ2pDLHNDQUFxQjs7SUFDckIscUNBQW9COzs7Ozs7O0lBTXBCLDRDQUEyQjs7Ozs7QUFHN0IsMkNBQW1GOzs7O0FBR25GLGtDQUVDOzs7O0FBR0QsaUNBS0M7O0FBRUQsTUFBa0IsWUFBWTtJQUM1QixNQUFNLEdBQUk7SUFDVixPQUFPLEdBQUk7RUFDWjs7Ozs7QUFFRCx1Q0FFQzs7QUFLRCxNQUFrQixTQUFTO0lBQ3pCLElBQUksR0FBSTtJQUNSLE1BQU0sR0FBUztFQUNoQjs7Ozs7Ozs7O0FBUUQsNkJBNENDOzs7SUEzQ0Msd0JBQWlCOztJQUVqQiw0QkFBa0I7O0lBR2xCLDZCQUFtQjs7SUFDbkIseUJBQXFCOztJQUNyQiwrQkFBMkI7Ozs7O0lBRTNCLGlDQUE0Qjs7Ozs7SUFFNUIsNkJBQW1COzs7OztJQUVuQiw2QkFBc0I7Ozs7O0lBRXRCLG1DQUE0Qjs7SUFFNUIsK0JBQXFCOztJQUNyQiwyQkFBdUI7O0lBQ3ZCLCtCQUEyQjs7SUFDM0IsOEJBQW9COztJQUNwQiwwQkFBcUI7Ozs7O0lBSXJCLDZCQUE4Qzs7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OztBQW1DOUIsTUFBTSxPQUFPLFFBQVEsR0FBYTtJQUNoQyxjQUFjLEVBQUUsbUJBQUEsU0FBUyxFQUFDO0lBQzFCLGNBQWMsRUFBRSxtQkFBQSxTQUFTLEVBQUM7SUFDMUIsa0JBQWtCLEVBQUUsbUJBQUEsU0FBUyxFQUFDO0lBQzlCLG1CQUFtQixFQUFFLG1CQUFBLFNBQVMsRUFBQztJQUMvQixpQkFBaUIsRUFBRSxtQkFBQSxTQUFTLEVBQUM7SUFDN0IsZ0JBQWdCLEVBQUUsbUJBQUEsU0FBUyxFQUFDO0lBQzVCLHFCQUFxQixFQUFFLG1CQUFBLFNBQVMsRUFBQztJQUNqQyxjQUFjLEVBQUUsbUJBQUEsU0FBUyxFQUFDO0lBQzFCLGtCQUFrQixFQUFFLG1CQUFBLFNBQVMsRUFBQztJQUM5QixrQkFBa0IsRUFBRSxtQkFBQSxTQUFTLEVBQUM7SUFDOUIsV0FBVyxFQUFFLG1CQUFBLFNBQVMsRUFBQztJQUN2QixVQUFVLEVBQUUsbUJBQUEsU0FBUyxFQUFDO0lBQ3RCLGtCQUFrQixFQUFFLG1CQUFBLFNBQVMsRUFBQztJQUM5QixXQUFXLEVBQUUsbUJBQUEsU0FBUyxFQUFDO0lBQ3ZCLGdCQUFnQixFQUFFLG1CQUFBLFNBQVMsRUFBQztJQUM1QixjQUFjLEVBQUUsbUJBQUEsU0FBUyxFQUFDO0lBQzFCLGtCQUFrQixFQUFFLG1CQUFBLFNBQVMsRUFBQztDQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnLi4vZGknO1xuaW1wb3J0IHtFcnJvckhhbmRsZXJ9IGZyb20gJy4uL2Vycm9yX2hhbmRsZXInO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge0NvbXBvbmVudEZhY3Rvcnl9IGZyb20gJy4uL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeSc7XG5pbXBvcnQge05nTW9kdWxlUmVmfSBmcm9tICcuLi9saW5rZXIvbmdfbW9kdWxlX2ZhY3RvcnknO1xuaW1wb3J0IHtRdWVyeUxpc3R9IGZyb20gJy4uL2xpbmtlci9xdWVyeV9saXN0JztcbmltcG9ydCB7VGVtcGxhdGVSZWZ9IGZyb20gJy4uL2xpbmtlci90ZW1wbGF0ZV9yZWYnO1xuaW1wb3J0IHtWaWV3Q29udGFpbmVyUmVmfSBmcm9tICcuLi9saW5rZXIvdmlld19jb250YWluZXJfcmVmJztcbmltcG9ydCB7UmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBSZW5kZXJlclR5cGUyfSBmcm9tICcuLi9yZW5kZXIvYXBpJztcbmltcG9ydCB7U2FuaXRpemVyfSBmcm9tICcuLi9zYW5pdGl6YXRpb24vc2FuaXRpemVyJztcbmltcG9ydCB7U2VjdXJpdHlDb250ZXh0fSBmcm9tICcuLi9zYW5pdGl6YXRpb24vc2VjdXJpdHknO1xuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEZhY3RvcnkgZm9yIFZpZXdEZWZpbml0aW9ucy9OZ01vZHVsZURlZmluaXRpb25zLlxuICogV2UgdXNlIGEgZnVuY3Rpb24gc28gd2UgY2FuIHJlZXhldXRlIGl0IGluIGNhc2UgYW4gZXJyb3IgaGFwcGVucyBhbmQgdXNlIHRoZSBnaXZlbiBsb2dnZXJcbiAqIGZ1bmN0aW9uIHRvIGxvZyB0aGUgZXJyb3IgZnJvbSB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgbm9kZSwgd2hpY2ggaXMgc2hvd24gaW4gYWxsIGJyb3dzZXJcbiAqIGxvZ3MuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVmaW5pdGlvbkZhY3Rvcnk8RCBleHRlbmRzIERlZmluaXRpb248YW55Pj4ge1xuICAobG9nZ2VyOiBOb2RlTG9nZ2VyKTogRDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBjYWxsIGNvbnNvbGUuZXJyb3IgYXQgdGhlIHJpZ2h0IHNvdXJjZSBsb2NhdGlvbi4gVGhpcyBpcyBhbiBpbmRpcmVjdGlvblxuICogdmlhIGFub3RoZXIgZnVuY3Rpb24gYXMgYnJvd3NlciB3aWxsIGxvZyB0aGUgbG9jYXRpb24gdGhhdCBhY3R1YWxseSBjYWxsZWRcbiAqIGBjb25zb2xlLmVycm9yYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOb2RlTG9nZ2VyIHtcbiAgKCk6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmaW5pdGlvbjxERiBleHRlbmRzIERlZmluaXRpb25GYWN0b3J5PGFueT4+IHtcbiAgZmFjdG9yeTogREZ8bnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uPE5nTW9kdWxlRGVmaW5pdGlvbkZhY3Rvcnk+IHtcbiAgcHJvdmlkZXJzOiBOZ01vZHVsZVByb3ZpZGVyRGVmW107XG4gIHByb3ZpZGVyc0J5S2V5OiB7W3Rva2VuS2V5OiBzdHJpbmddOiBOZ01vZHVsZVByb3ZpZGVyRGVmfTtcbiAgbW9kdWxlczogYW55W107XG4gIHNjb3BlOiAncm9vdCd8J3BsYXRmb3JtJ3xudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5nTW9kdWxlRGVmaW5pdGlvbkZhY3RvcnkgZXh0ZW5kcyBEZWZpbml0aW9uRmFjdG9yeTxOZ01vZHVsZURlZmluaXRpb24+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uPFZpZXdEZWZpbml0aW9uRmFjdG9yeT4ge1xuICBmbGFnczogVmlld0ZsYWdzO1xuICB1cGRhdGVEaXJlY3RpdmVzOiBWaWV3VXBkYXRlRm47XG4gIHVwZGF0ZVJlbmRlcmVyOiBWaWV3VXBkYXRlRm47XG4gIGhhbmRsZUV2ZW50OiBWaWV3SGFuZGxlRXZlbnRGbjtcbiAgLyoqXG4gICAqIE9yZGVyOiBEZXB0aCBmaXJzdC5cbiAgICogRXNwZWNpYWxseSBwcm92aWRlcnMgYXJlIGJlZm9yZSBlbGVtZW50cyAvIGFuY2hvcnMuXG4gICAqL1xuICBub2RlczogTm9kZURlZltdO1xuICAvKiogYWdncmVnYXRlZCBOb2RlRmxhZ3MgZm9yIGFsbCBub2RlcyAqKi9cbiAgbm9kZUZsYWdzOiBOb2RlRmxhZ3M7XG4gIHJvb3ROb2RlRmxhZ3M6IE5vZGVGbGFncztcbiAgbGFzdFJlbmRlclJvb3ROb2RlOiBOb2RlRGVmfG51bGw7XG4gIGJpbmRpbmdDb3VudDogbnVtYmVyO1xuICBvdXRwdXRDb3VudDogbnVtYmVyO1xuICAvKipcbiAgICogQmluYXJ5IG9yIG9mIGFsbCBxdWVyeSBpZHMgdGhhdCBhcmUgbWF0Y2hlZCBieSBvbmUgb2YgdGhlIG5vZGVzLlxuICAgKiBUaGlzIGluY2x1ZGVzIHF1ZXJ5IGlkcyBmcm9tIHRlbXBsYXRlcyBhcyB3ZWxsLlxuICAgKiBVc2VkIGFzIGEgYmxvb20gZmlsdGVyLlxuICAgKi9cbiAgbm9kZU1hdGNoZWRRdWVyaWVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld0RlZmluaXRpb25GYWN0b3J5IGV4dGVuZHMgRGVmaW5pdGlvbkZhY3Rvcnk8Vmlld0RlZmluaXRpb24+IHt9XG5cblxuZXhwb3J0IGludGVyZmFjZSBWaWV3VXBkYXRlRm4ge1xuICAoY2hlY2s6IE5vZGVDaGVja0ZuLCB2aWV3OiBWaWV3RGF0YSk6IHZvaWQ7XG59XG5cbi8vIGhlbHBlciBmdW5jdGlvbnMgdG8gY3JlYXRlIGFuIG92ZXJsb2FkZWQgZnVuY3Rpb24gdHlwZS5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZUNoZWNrRm4ge1xuICAodmlldzogVmlld0RhdGEsIG5vZGVJbmRleDogbnVtYmVyLCBhcmdTdHlsZTogQXJndW1lbnRUeXBlLkR5bmFtaWMsIHZhbHVlczogYW55W10pOiBhbnk7XG5cbiAgKHZpZXc6IFZpZXdEYXRhLCBub2RlSW5kZXg6IG51bWJlciwgYXJnU3R5bGU6IEFyZ3VtZW50VHlwZS5JbmxpbmUsIHYwPzogYW55LCB2MT86IGFueSwgdjI/OiBhbnksXG4gICB2Mz86IGFueSwgdjQ/OiBhbnksIHY1PzogYW55LCB2Nj86IGFueSwgdjc/OiBhbnksIHY4PzogYW55LCB2OT86IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gQXJndW1lbnRUeXBlIHtcbiAgSW5saW5lID0gMCxcbiAgRHluYW1pYyA9IDFcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaWV3SGFuZGxlRXZlbnRGbiB7XG4gICh2aWV3OiBWaWV3RGF0YSwgbm9kZUluZGV4OiBudW1iZXIsIGV2ZW50TmFtZTogc3RyaW5nLCBldmVudDogYW55KTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBCaXRtYXNrIGZvciBWaWV3RGVmaW5pdGlvbi5mbGFncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gVmlld0ZsYWdzIHtcbiAgTm9uZSA9IDAsXG4gIE9uUHVzaCA9IDEgPDwgMSxcbn1cblxuLyoqXG4gKiBBIG5vZGUgZGVmaW5pdGlvbiBpbiB0aGUgdmlldy5cbiAqXG4gKiBOb3RlOiBXZSB1c2Ugb25lIHR5cGUgZm9yIGFsbCBub2RlcyBzbyB0aGF0IGxvb3BzIHRoYXQgbG9vcCBvdmVyIGFsbCBub2Rlc1xuICogb2YgYSBWaWV3RGVmaW5pdGlvbiBzdGF5IG1vbm9tb3JwaGljIVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVEZWYge1xuICBmbGFnczogTm9kZUZsYWdzO1xuICAvLyBJbmRleCBvZiB0aGUgbm9kZSBpbiB2aWV3IGRhdGEgYW5kIHZpZXcgZGVmaW5pdGlvbiAodGhvc2UgYXJlIHRoZSBzYW1lKVxuICBub2RlSW5kZXg6IG51bWJlcjtcbiAgLy8gSW5kZXggb2YgdGhlIG5vZGUgaW4gdGhlIGNoZWNrIGZ1bmN0aW9uc1xuICAvLyBEaWZmZXIgZnJvbSBub2RlSW5kZXggd2hlbiBub2RlcyBhcmUgYWRkZWQgb3IgcmVtb3ZlZCBhdCBydW50aW1lIChpZSBhZnRlciBjb21waWxhdGlvbilcbiAgY2hlY2tJbmRleDogbnVtYmVyO1xuICBwYXJlbnQ6IE5vZGVEZWZ8bnVsbDtcbiAgcmVuZGVyUGFyZW50OiBOb2RlRGVmfG51bGw7XG4gIC8qKiB0aGlzIGlzIGNoZWNrZWQgYWdhaW5zdCBOZ0NvbnRlbnREZWYuaW5kZXggdG8gZmluZCBtYXRjaGVkIG5vZGVzICovXG4gIG5nQ29udGVudEluZGV4OiBudW1iZXJ8bnVsbDtcbiAgLyoqIG51bWJlciBvZiB0cmFuc2l0aXZlIGNoaWxkcmVuICovXG4gIGNoaWxkQ291bnQ6IG51bWJlcjtcbiAgLyoqIGFnZ3JlZ2F0ZWQgTm9kZUZsYWdzIGZvciBhbGwgdHJhbnNpdGl2ZSBjaGlsZHJlbiAoZG9lcyBub3QgaW5jbHVkZSBzZWxmKSAqKi9cbiAgY2hpbGRGbGFnczogTm9kZUZsYWdzO1xuICAvKiogYWdncmVnYXRlZCBOb2RlRmxhZ3MgZm9yIGFsbCBkaXJlY3QgY2hpbGRyZW4gKGRvZXMgbm90IGluY2x1ZGUgc2VsZikgKiovXG4gIGRpcmVjdENoaWxkRmxhZ3M6IE5vZGVGbGFncztcblxuICBiaW5kaW5nSW5kZXg6IG51bWJlcjtcbiAgYmluZGluZ3M6IEJpbmRpbmdEZWZbXTtcbiAgYmluZGluZ0ZsYWdzOiBCaW5kaW5nRmxhZ3M7XG4gIG91dHB1dEluZGV4OiBudW1iZXI7XG4gIG91dHB1dHM6IE91dHB1dERlZltdO1xuICAvKipcbiAgICogcmVmZXJlbmNlcyB0aGF0IHRoZSB1c2VyIHBsYWNlZCBvbiB0aGUgZWxlbWVudFxuICAgKi9cbiAgcmVmZXJlbmNlczoge1tyZWZJZDogc3RyaW5nXTogUXVlcnlWYWx1ZVR5cGV9O1xuICAvKipcbiAgICogaWRzIGFuZCB2YWx1ZSB0eXBlcyBvZiBhbGwgcXVlcmllcyB0aGF0IGFyZSBtYXRjaGVkIGJ5IHRoaXMgbm9kZS5cbiAgICovXG4gIG1hdGNoZWRRdWVyaWVzOiB7W3F1ZXJ5SWQ6IG51bWJlcl06IFF1ZXJ5VmFsdWVUeXBlfTtcbiAgLyoqIEJpbmFyeSBvciBvZiBhbGwgbWF0Y2hlZCBxdWVyeSBpZHMgb2YgdGhpcyBub2RlLiAqL1xuICBtYXRjaGVkUXVlcnlJZHM6IG51bWJlcjtcbiAgLyoqXG4gICAqIEJpbmFyeSBvciBvZiBhbGwgcXVlcnkgaWRzIHRoYXQgYXJlIG1hdGNoZWQgYnkgb25lIG9mIHRoZSBjaGlsZHJlbi5cbiAgICogVGhpcyBpbmNsdWRlcyBxdWVyeSBpZHMgZnJvbSB0ZW1wbGF0ZXMgYXMgd2VsbC5cbiAgICogVXNlZCBhcyBhIGJsb29tIGZpbHRlci5cbiAgICovXG4gIGNoaWxkTWF0Y2hlZFF1ZXJpZXM6IG51bWJlcjtcbiAgZWxlbWVudDogRWxlbWVudERlZnxudWxsO1xuICBwcm92aWRlcjogUHJvdmlkZXJEZWZ8bnVsbDtcbiAgdGV4dDogVGV4dERlZnxudWxsO1xuICBxdWVyeTogUXVlcnlEZWZ8bnVsbDtcbiAgbmdDb250ZW50OiBOZ0NvbnRlbnREZWZ8bnVsbDtcbn1cblxuLyoqXG4gKiBCaXRtYXNrIGZvciBOb2RlRGVmLmZsYWdzLlxuICogTmFtaW5nIGNvbnZlbnRpb246XG4gKiAtIGBUeXBlLi4uYDogZmxhZ3MgdGhhdCBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlXG4gKiAtIGBDYXQuLi5gOiB1bmlvbiBvZiBtdWx0aXBsZSBgVHlwZS4uLmAgKHNob3J0IGZvciBjYXRlZ29yeSkuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIE5vZGVGbGFncyB7XG4gIE5vbmUgPSAwLFxuICBUeXBlRWxlbWVudCA9IDEgPDwgMCxcbiAgVHlwZVRleHQgPSAxIDw8IDEsXG4gIFByb2plY3RlZFRlbXBsYXRlID0gMSA8PCAyLFxuICBDYXRSZW5kZXJOb2RlID0gVHlwZUVsZW1lbnQgfCBUeXBlVGV4dCxcbiAgVHlwZU5nQ29udGVudCA9IDEgPDwgMyxcbiAgVHlwZVBpcGUgPSAxIDw8IDQsXG4gIFR5cGVQdXJlQXJyYXkgPSAxIDw8IDUsXG4gIFR5cGVQdXJlT2JqZWN0ID0gMSA8PCA2LFxuICBUeXBlUHVyZVBpcGUgPSAxIDw8IDcsXG4gIENhdFB1cmVFeHByZXNzaW9uID0gVHlwZVB1cmVBcnJheSB8IFR5cGVQdXJlT2JqZWN0IHwgVHlwZVB1cmVQaXBlLFxuICBUeXBlVmFsdWVQcm92aWRlciA9IDEgPDwgOCxcbiAgVHlwZUNsYXNzUHJvdmlkZXIgPSAxIDw8IDksXG4gIFR5cGVGYWN0b3J5UHJvdmlkZXIgPSAxIDw8IDEwLFxuICBUeXBlVXNlRXhpc3RpbmdQcm92aWRlciA9IDEgPDwgMTEsXG4gIExhenlQcm92aWRlciA9IDEgPDwgMTIsXG4gIFByaXZhdGVQcm92aWRlciA9IDEgPDwgMTMsXG4gIFR5cGVEaXJlY3RpdmUgPSAxIDw8IDE0LFxuICBDb21wb25lbnQgPSAxIDw8IDE1LFxuICBDYXRQcm92aWRlck5vRGlyZWN0aXZlID1cbiAgICAgIFR5cGVWYWx1ZVByb3ZpZGVyIHwgVHlwZUNsYXNzUHJvdmlkZXIgfCBUeXBlRmFjdG9yeVByb3ZpZGVyIHwgVHlwZVVzZUV4aXN0aW5nUHJvdmlkZXIsXG4gIENhdFByb3ZpZGVyID0gQ2F0UHJvdmlkZXJOb0RpcmVjdGl2ZSB8IFR5cGVEaXJlY3RpdmUsXG4gIE9uSW5pdCA9IDEgPDwgMTYsXG4gIE9uRGVzdHJveSA9IDEgPDwgMTcsXG4gIERvQ2hlY2sgPSAxIDw8IDE4LFxuICBPbkNoYW5nZXMgPSAxIDw8IDE5LFxuICBBZnRlckNvbnRlbnRJbml0ID0gMSA8PCAyMCxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCA9IDEgPDwgMjEsXG4gIEFmdGVyVmlld0luaXQgPSAxIDw8IDIyLFxuICBBZnRlclZpZXdDaGVja2VkID0gMSA8PCAyMyxcbiAgRW1iZWRkZWRWaWV3cyA9IDEgPDwgMjQsXG4gIENvbXBvbmVudFZpZXcgPSAxIDw8IDI1LFxuICBUeXBlQ29udGVudFF1ZXJ5ID0gMSA8PCAyNixcbiAgVHlwZVZpZXdRdWVyeSA9IDEgPDwgMjcsXG4gIFN0YXRpY1F1ZXJ5ID0gMSA8PCAyOCxcbiAgRHluYW1pY1F1ZXJ5ID0gMSA8PCAyOSxcbiAgVHlwZU5nTW9kdWxlID0gMSA8PCAzMCxcbiAgQ2F0UXVlcnkgPSBUeXBlQ29udGVudFF1ZXJ5IHwgVHlwZVZpZXdRdWVyeSxcblxuICAvLyBtdXR1YWxseSBleGNsdXNpdmUgdmFsdWVzLi4uXG4gIFR5cGVzID0gQ2F0UmVuZGVyTm9kZSB8IFR5cGVOZ0NvbnRlbnQgfCBUeXBlUGlwZSB8IENhdFB1cmVFeHByZXNzaW9uIHwgQ2F0UHJvdmlkZXIgfCBDYXRRdWVyeVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpbmRpbmdEZWYge1xuICBmbGFnczogQmluZGluZ0ZsYWdzO1xuICBuczogc3RyaW5nfG51bGw7XG4gIG5hbWU6IHN0cmluZ3xudWxsO1xuICBub25NaW5pZmllZE5hbWU6IHN0cmluZ3xudWxsO1xuICBzZWN1cml0eUNvbnRleHQ6IFNlY3VyaXR5Q29udGV4dHxudWxsO1xuICBzdWZmaXg6IHN0cmluZ3xudWxsO1xufVxuXG5leHBvcnQgY29uc3QgZW51bSBCaW5kaW5nRmxhZ3Mge1xuICBUeXBlRWxlbWVudEF0dHJpYnV0ZSA9IDEgPDwgMCxcbiAgVHlwZUVsZW1lbnRDbGFzcyA9IDEgPDwgMSxcbiAgVHlwZUVsZW1lbnRTdHlsZSA9IDEgPDwgMixcbiAgVHlwZVByb3BlcnR5ID0gMSA8PCAzLFxuICBTeW50aGV0aWNQcm9wZXJ0eSA9IDEgPDwgNCxcbiAgU3ludGhldGljSG9zdFByb3BlcnR5ID0gMSA8PCA1LFxuICBDYXRTeW50aGV0aWNQcm9wZXJ0eSA9IFN5bnRoZXRpY1Byb3BlcnR5IHwgU3ludGhldGljSG9zdFByb3BlcnR5LFxuXG4gIC8vIG11dHVhbGx5IGV4Y2x1c2l2ZSB2YWx1ZXMuLi5cbiAgVHlwZXMgPSBUeXBlRWxlbWVudEF0dHJpYnV0ZSB8IFR5cGVFbGVtZW50Q2xhc3MgfCBUeXBlRWxlbWVudFN0eWxlIHwgVHlwZVByb3BlcnR5XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3V0cHV0RGVmIHtcbiAgdHlwZTogT3V0cHV0VHlwZTtcbiAgdGFyZ2V0OiAnd2luZG93J3wnZG9jdW1lbnQnfCdib2R5J3wnY29tcG9uZW50J3xudWxsO1xuICBldmVudE5hbWU6IHN0cmluZztcbiAgcHJvcE5hbWU6IHN0cmluZ3xudWxsO1xufVxuXG5leHBvcnQgY29uc3QgZW51bSBPdXRwdXRUeXBlIHtcbiAgRWxlbWVudE91dHB1dCxcbiAgRGlyZWN0aXZlT3V0cHV0XG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIFF1ZXJ5VmFsdWVUeXBlIHtcbiAgRWxlbWVudFJlZiA9IDAsXG4gIFJlbmRlckVsZW1lbnQgPSAxLFxuICBUZW1wbGF0ZVJlZiA9IDIsXG4gIFZpZXdDb250YWluZXJSZWYgPSAzLFxuICBQcm92aWRlciA9IDRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50RGVmIHtcbiAgLy8gc2V0IHRvIG51bGwgZm9yIGA8bmctY29udGFpbmVyPmBcbiAgbmFtZTogc3RyaW5nfG51bGw7XG4gIG5zOiBzdHJpbmd8bnVsbDtcbiAgLyoqIG5zLCBuYW1lLCB2YWx1ZSAqL1xuICBhdHRyczogW3N0cmluZywgc3RyaW5nLCBzdHJpbmddW118bnVsbDtcbiAgdGVtcGxhdGU6IFZpZXdEZWZpbml0aW9ufG51bGw7XG4gIGNvbXBvbmVudFByb3ZpZGVyOiBOb2RlRGVmfG51bGw7XG4gIGNvbXBvbmVudFJlbmRlcmVyVHlwZTogUmVuZGVyZXJUeXBlMnxudWxsO1xuICAvLyBjbG9zdXJlIHRvIGFsbG93IHJlY3Vyc2l2ZSBjb21wb25lbnRzXG4gIGNvbXBvbmVudFZpZXc6IFZpZXdEZWZpbml0aW9uRmFjdG9yeXxudWxsO1xuICAvKipcbiAgICogdmlzaWJsZSBwdWJsaWMgcHJvdmlkZXJzIGZvciBESSBpbiB0aGUgdmlldyxcbiAgICogYXMgc2VlIGZyb20gdGhpcyBlbGVtZW50LiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgcHJpdmF0ZSBwcm92aWRlcnMuXG4gICAqL1xuICBwdWJsaWNQcm92aWRlcnM6IHtbdG9rZW5LZXk6IHN0cmluZ106IE5vZGVEZWZ9fG51bGw7XG4gIC8qKlxuICAgKiBzYW1lIGFzIHZpc2libGVQdWJsaWNQcm92aWRlcnMsIGJ1dCBhbHNvIGluY2x1ZGVzIHByaXZhdGUgcHJvdmlkZXJzXG4gICAqIHRoYXQgYXJlIGxvY2F0ZWQgb24gdGhpcyBlbGVtZW50LlxuICAgKi9cbiAgYWxsUHJvdmlkZXJzOiB7W3Rva2VuS2V5OiBzdHJpbmddOiBOb2RlRGVmfXxudWxsO1xuICBoYW5kbGVFdmVudDogRWxlbWVudEhhbmRsZUV2ZW50Rm58bnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50SGFuZGxlRXZlbnRGbiB7XG4gICh2aWV3OiBWaWV3RGF0YSwgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50OiBhbnkpOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3ZpZGVyRGVmIHtcbiAgdG9rZW46IGFueTtcbiAgdmFsdWU6IGFueTtcbiAgZGVwczogRGVwRGVmW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdNb2R1bGVQcm92aWRlckRlZiB7XG4gIGZsYWdzOiBOb2RlRmxhZ3M7XG4gIGluZGV4OiBudW1iZXI7XG4gIHRva2VuOiBhbnk7XG4gIHZhbHVlOiBhbnk7XG4gIGRlcHM6IERlcERlZltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlcERlZiB7XG4gIGZsYWdzOiBEZXBGbGFncztcbiAgdG9rZW46IGFueTtcbiAgdG9rZW5LZXk6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCaXRtYXNrIGZvciBESSBmbGFnc1xuICovXG5leHBvcnQgY29uc3QgZW51bSBEZXBGbGFncyB7XG4gIE5vbmUgPSAwLFxuICBTa2lwU2VsZiA9IDEgPDwgMCxcbiAgT3B0aW9uYWwgPSAxIDw8IDEsXG4gIFNlbGYgPSAxIDw8IDIsXG4gIFZhbHVlID0gMSA8PCAzLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRleHREZWYge1xuICBwcmVmaXg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlZiB7XG4gIGlkOiBudW1iZXI7XG4gIC8vIHZhcmlhbnQgb2YgdGhlIGlkIHRoYXQgY2FuIGJlIHVzZWQgdG8gY2hlY2sgYWdhaW5zdCBOb2RlRGVmLm1hdGNoZWRRdWVyeUlkcywgLi4uXG4gIGZpbHRlcklkOiBudW1iZXI7XG4gIGJpbmRpbmdzOiBRdWVyeUJpbmRpbmdEZWZbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUJpbmRpbmdEZWYge1xuICBwcm9wTmFtZTogc3RyaW5nO1xuICBiaW5kaW5nVHlwZTogUXVlcnlCaW5kaW5nVHlwZTtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gUXVlcnlCaW5kaW5nVHlwZSB7XG4gIEZpcnN0ID0gMCxcbiAgQWxsID0gMVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5nQ29udGVudERlZiB7XG4gIC8qKlxuICAgKiB0aGlzIGluZGV4IGlzIGNoZWNrZWQgYWdhaW5zdCBOb2RlRGVmLm5nQ29udGVudEluZGV4IHRvIGZpbmQgdGhlIG5vZGVzXG4gICAqIHRoYXQgYXJlIG1hdGNoZWQgYnkgdGhpcyBuZy1jb250ZW50LlxuICAgKiBOb3RlIHRoYXQgYSBOb2RlRGVmIHdpdGggYW4gbmctY29udGVudCBjYW4gYmUgcmVwcm9qZWN0ZWQsIGkuZS5cbiAgICogaGF2ZSBhIG5nQ29udGVudEluZGV4IG9uIGl0cyBvd24uXG4gICAqL1xuICBpbmRleDogbnVtYmVyO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEYXRhXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdNb2R1bGVEYXRhIGV4dGVuZHMgSW5qZWN0b3IsIE5nTW9kdWxlUmVmPGFueT4ge1xuICAvLyBOb3RlOiB3ZSBhcmUgdXNpbmcgdGhlIHByZWZpeCBfIGFzIE5nTW9kdWxlRGF0YSBpcyBhbiBOZ01vZHVsZVJlZiBhbmQgdGhlcmVmb3JlIGRpcmVjdGx5XG4gIC8vIGV4cG9zZWQgdG8gdGhlIHVzZXIuXG4gIF9kZWY6IE5nTW9kdWxlRGVmaW5pdGlvbjtcbiAgX3BhcmVudDogSW5qZWN0b3I7XG4gIF9wcm92aWRlcnM6IGFueVtdO1xufVxuXG4vKipcbiAqIFZpZXcgaW5zdGFuY2UgZGF0YS5cbiAqIEF0dGVudGlvbjogQWRkaW5nIGZpZWxkcyB0byB0aGlzIGlzIHBlcmZvcm1hbmNlIHNlbnNpdGl2ZSFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWV3RGF0YSB7XG4gIGRlZjogVmlld0RlZmluaXRpb247XG4gIHJvb3Q6IFJvb3REYXRhO1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICAvLyBpbmRleCBvZiBjb21wb25lbnQgcHJvdmlkZXIgLyBhbmNob3IuXG4gIHBhcmVudE5vZGVEZWY6IE5vZGVEZWZ8bnVsbDtcbiAgcGFyZW50OiBWaWV3RGF0YXxudWxsO1xuICB2aWV3Q29udGFpbmVyUGFyZW50OiBWaWV3RGF0YXxudWxsO1xuICBjb21wb25lbnQ6IGFueTtcbiAgY29udGV4dDogYW55O1xuICAvLyBBdHRlbnRpb246IE5ldmVyIGxvb3Agb3ZlciB0aGlzLCBhcyB0aGlzIHdpbGxcbiAgLy8gY3JlYXRlIGEgcG9seW1vcnBoaWMgdXNhZ2Ugc2l0ZS5cbiAgLy8gSW5zdGVhZDogQWx3YXlzIGxvb3Agb3ZlciBWaWV3RGVmaW5pdGlvbi5ub2RlcyxcbiAgLy8gYW5kIGNhbGwgdGhlIHJpZ2h0IGFjY2Vzc29yIChlLmcuIGBlbGVtZW50RGF0YWApIGJhc2VkIG9uXG4gIC8vIHRoZSBOb2RlVHlwZS5cbiAgbm9kZXM6IHtba2V5OiBudW1iZXJdOiBOb2RlRGF0YX07XG4gIHN0YXRlOiBWaWV3U3RhdGU7XG4gIG9sZFZhbHVlczogYW55W107XG4gIGRpc3Bvc2FibGVzOiBEaXNwb3NhYmxlRm5bXXxudWxsO1xuICBpbml0SW5kZXg6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCaXRtYXNrIG9mIHN0YXRlc1xuICovXG5leHBvcnQgY29uc3QgZW51bSBWaWV3U3RhdGUge1xuICBCZWZvcmVGaXJzdENoZWNrID0gMSA8PCAwLFxuICBGaXJzdENoZWNrID0gMSA8PCAxLFxuICBBdHRhY2hlZCA9IDEgPDwgMixcbiAgQ2hlY2tzRW5hYmxlZCA9IDEgPDwgMyxcbiAgSXNQcm9qZWN0ZWRWaWV3ID0gMSA8PCA0LFxuICBDaGVja1Byb2plY3RlZFZpZXcgPSAxIDw8IDUsXG4gIENoZWNrUHJvamVjdGVkVmlld3MgPSAxIDw8IDYsXG4gIERlc3Ryb3llZCA9IDEgPDwgNyxcblxuICAvLyBJbml0U3RhdGUgVXNlcyAzIGJpdHNcbiAgSW5pdFN0YXRlX01hc2sgPSA3IDw8IDgsXG4gIEluaXRTdGF0ZV9CZWZvcmVJbml0ID0gMCA8PCA4LFxuICBJbml0U3RhdGVfQ2FsbGluZ09uSW5pdCA9IDEgPDwgOCxcbiAgSW5pdFN0YXRlX0NhbGxpbmdBZnRlckNvbnRlbnRJbml0ID0gMiA8PCA4LFxuICBJbml0U3RhdGVfQ2FsbGluZ0FmdGVyVmlld0luaXQgPSAzIDw8IDgsXG4gIEluaXRTdGF0ZV9BZnRlckluaXQgPSA0IDw8IDgsXG5cbiAgQ2F0RGV0ZWN0Q2hhbmdlcyA9IEF0dGFjaGVkIHwgQ2hlY2tzRW5hYmxlZCxcbiAgQ2F0SW5pdCA9IEJlZm9yZUZpcnN0Q2hlY2sgfCBDYXREZXRlY3RDaGFuZ2VzIHwgSW5pdFN0YXRlX0JlZm9yZUluaXRcbn1cblxuLy8gQ2FsbGVkIGJlZm9yZSBlYWNoIGN5Y2xlIG9mIGEgdmlldydzIGNoZWNrIHRvIGRldGVjdCB3aGV0aGVyIHRoaXMgaXMgaW4gdGhlXG4vLyBpbml0U3RhdGUgZm9yIHdoaWNoIHdlIG5lZWQgdG8gY2FsbCBuZ09uSW5pdCwgbmdBZnRlckNvbnRlbnRJbml0IG9yIG5nQWZ0ZXJWaWV3SW5pdFxuLy8gbGlmZWN5Y2xlIG1ldGhvZHMuIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGNoZWNrIGN5Y2xlIHNob3VsZCBjYWxsIGxpZmVjeWNsZVxuLy8gbWV0aG9kcy5cbmV4cG9ydCBmdW5jdGlvbiBzaGlmdEluaXRTdGF0ZShcbiAgICB2aWV3OiBWaWV3RGF0YSwgcHJpb3JJbml0U3RhdGU6IFZpZXdTdGF0ZSwgbmV3SW5pdFN0YXRlOiBWaWV3U3RhdGUpOiBib29sZWFuIHtcbiAgLy8gT25seSB1cGRhdGUgdGhlIEluaXRTdGF0ZSBpZiB3ZSBhcmUgY3VycmVudGx5IGluIHRoZSBwcmlvciBzdGF0ZS5cbiAgLy8gRm9yIGV4YW1wbGUsIG9ubHkgbW92ZSBpbnRvIENhbGxpbmdJbml0IGlmIHdlIGFyZSBpbiBCZWZvcmVJbml0LiBPbmx5XG4gIC8vIG1vdmUgaW50byBDYWxsaW5nQ29udGVudEluaXQgaWYgd2UgYXJlIGluIENhbGxpbmdJbml0LiBOb3JtYWxseSB0aGlzIHdpbGxcbiAgLy8gYWx3YXlzIGJlIHRydWUgYmVjYXVzZSBvZiBob3cgY2hlY2tDeWNsZSBpcyBjYWxsZWQgaW4gY2hlY2tBbmRVcGRhdGVWaWV3LlxuICAvLyBIb3dldmVyLCBpZiBjaGVja0FuZFVwZGF0ZVZpZXcgaXMgY2FsbGVkIHJlY3Vyc2l2ZWx5IG9yIGlmIGFuIGV4Y2VwdGlvbiBpc1xuICAvLyB0aHJvd24gd2hpbGUgY2hlY2tBbmRVcGRhdGVWaWV3IGlzIHJ1bm5pbmcsIGNoZWNrQW5kVXBkYXRlVmlldyBzdGFydHMgb3ZlclxuICAvLyBmcm9tIHRoZSBiZWdpbm5pbmcuIFRoaXMgZW5zdXJlcyB0aGUgc3RhdGUgaXMgbW9ub3RvbmljYWxseSBpbmNyZWFzaW5nLFxuICAvLyB0ZXJtaW5hdGluZyBpbiB0aGUgQWZ0ZXJJbml0IHN0YXRlLCB3aGljaCBlbnN1cmVzIHRoZSBJbml0IG1ldGhvZHMgYXJlIGNhbGxlZFxuICAvLyBhdCBsZWFzdCBvbmNlIGFuZCBvbmx5IG9uY2UuXG4gIGNvbnN0IHN0YXRlID0gdmlldy5zdGF0ZTtcbiAgY29uc3QgaW5pdFN0YXRlID0gc3RhdGUgJiBWaWV3U3RhdGUuSW5pdFN0YXRlX01hc2s7XG4gIGlmIChpbml0U3RhdGUgPT09IHByaW9ySW5pdFN0YXRlKSB7XG4gICAgdmlldy5zdGF0ZSA9IChzdGF0ZSAmIH5WaWV3U3RhdGUuSW5pdFN0YXRlX01hc2spIHwgbmV3SW5pdFN0YXRlO1xuICAgIHZpZXcuaW5pdEluZGV4ID0gLTE7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGluaXRTdGF0ZSA9PT0gbmV3SW5pdFN0YXRlO1xufVxuXG4vLyBSZXR1cm5zIHRydWUgaWYgdGhlIGxpZmVjeWNsZSBpbml0IG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGZvciB0aGUgbm9kZSB3aXRoXG4vLyB0aGUgZ2l2ZW4gaW5pdCBpbmRleC5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRDYWxsTGlmZWN5Y2xlSW5pdEhvb2soXG4gICAgdmlldzogVmlld0RhdGEsIGluaXRTdGF0ZTogVmlld1N0YXRlLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIGlmICgodmlldy5zdGF0ZSAmIFZpZXdTdGF0ZS5Jbml0U3RhdGVfTWFzaykgPT09IGluaXRTdGF0ZSAmJiB2aWV3LmluaXRJbmRleCA8PSBpbmRleCkge1xuICAgIHZpZXcuaW5pdEluZGV4ID0gaW5kZXggKyAxO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXNwb3NhYmxlRm4ge1xuICAoKTogdm9pZDtcbn1cblxuLyoqXG4gKiBOb2RlIGluc3RhbmNlIGRhdGEuXG4gKlxuICogV2UgaGF2ZSBhIHNlcGFyYXRlIHR5cGUgcGVyIE5vZGVUeXBlIHRvIHNhdmUgbWVtb3J5XG4gKiAoVGV4dERhdGEgfCBFbGVtZW50RGF0YSB8IFByb3ZpZGVyRGF0YSB8IFB1cmVFeHByZXNzaW9uRGF0YSB8IFF1ZXJ5TGlzdDxhbnk+KVxuICpcbiAqIFRvIGtlZXAgb3VyIGNvZGUgbW9ub21vcnBoaWMsXG4gKiB3ZSBwcm9oaWJpdCB1c2luZyBgTm9kZURhdGFgIGRpcmVjdGx5IGJ1dCBlbmZvcmNlIHRoZSB1c2Ugb2YgYWNjZXNzb3JzIChgYXNFbGVtZW50RGF0YWAsIC4uLikuXG4gKiBUaGlzIHdheSwgbm8gdXNhZ2Ugc2l0ZSBjYW4gZ2V0IGEgYE5vZGVEYXRhYCBmcm9tIHZpZXcubm9kZXMgYW5kIHRoZW4gdXNlIGl0IGZvciBkaWZmZXJlbnRcbiAqIHB1cnBvc2VzLlxuICovXG5leHBvcnQgY2xhc3MgTm9kZURhdGEge1xuICBwcml2YXRlIF9fYnJhbmQ6IGFueTtcbn1cblxuLyoqXG4gKiBEYXRhIGZvciBhbiBpbnN0YW50aWF0ZWQgTm9kZVR5cGUuVGV4dC5cbiAqXG4gKiBBdHRlbnRpb246IEFkZGluZyBmaWVsZHMgdG8gdGhpcyBpcyBwZXJmb3JtYW5jZSBzZW5zaXRpdmUhXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dERhdGEge1xuICByZW5kZXJUZXh0OiBhbnk7XG59XG5cbi8qKlxuICogQWNjZXNzb3IgZm9yIHZpZXcubm9kZXMsIGVuZm9yY2luZyB0aGF0IGV2ZXJ5IHVzYWdlIHNpdGUgc3RheXMgbW9ub21vcnBoaWMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc1RleHREYXRhKHZpZXc6IFZpZXdEYXRhLCBpbmRleDogbnVtYmVyKTogVGV4dERhdGEge1xuICByZXR1cm4gPGFueT52aWV3Lm5vZGVzW2luZGV4XTtcbn1cblxuLyoqXG4gKiBEYXRhIGZvciBhbiBpbnN0YW50aWF0ZWQgTm9kZVR5cGUuRWxlbWVudC5cbiAqXG4gKiBBdHRlbnRpb246IEFkZGluZyBmaWVsZHMgdG8gdGhpcyBpcyBwZXJmb3JtYW5jZSBzZW5zaXRpdmUhXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudERhdGEge1xuICByZW5kZXJFbGVtZW50OiBhbnk7XG4gIGNvbXBvbmVudFZpZXc6IFZpZXdEYXRhO1xuICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyRGF0YXxudWxsO1xuICB0ZW1wbGF0ZTogVGVtcGxhdGVEYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdDb250YWluZXJEYXRhIGV4dGVuZHMgVmlld0NvbnRhaW5lclJlZiB7XG4gIC8vIE5vdGU6IHdlIGFyZSB1c2luZyB0aGUgcHJlZml4IF8gYXMgVmlld0NvbnRhaW5lckRhdGEgaXMgYSBWaWV3Q29udGFpbmVyUmVmIGFuZCB0aGVyZWZvcmVcbiAgLy8gZGlyZWN0bHlcbiAgLy8gZXhwb3NlZCB0byB0aGUgdXNlci5cbiAgX2VtYmVkZGVkVmlld3M6IFZpZXdEYXRhW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVEYXRhIGV4dGVuZHMgVGVtcGxhdGVSZWY8YW55PiB7XG4gIC8vIHZpZXdzIHRoYXQgaGF2ZSBiZWVuIGNyZWF0ZWQgZnJvbSB0aGUgdGVtcGxhdGVcbiAgLy8gb2YgdGhpcyBlbGVtZW50LFxuICAvLyBidXQgaW5zZXJ0ZWQgaW50byB0aGUgZW1iZWRkZWRWaWV3cyBvZiBhbm90aGVyIGVsZW1lbnQuXG4gIC8vIEJ5IGRlZmF1bHQsIHRoaXMgaXMgdW5kZWZpbmVkLlxuICAvLyBOb3RlOiB3ZSBhcmUgdXNpbmcgdGhlIHByZWZpeCBfIGFzIFRlbXBsYXRlRGF0YSBpcyBhIFRlbXBsYXRlUmVmIGFuZCB0aGVyZWZvcmUgZGlyZWN0bHlcbiAgLy8gZXhwb3NlZCB0byB0aGUgdXNlci5cbiAgX3Byb2plY3RlZFZpZXdzOiBWaWV3RGF0YVtdO1xufVxuXG4vKipcbiAqIEFjY2Vzc29yIGZvciB2aWV3Lm5vZGVzLCBlbmZvcmNpbmcgdGhhdCBldmVyeSB1c2FnZSBzaXRlIHN0YXlzIG1vbm9tb3JwaGljLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNFbGVtZW50RGF0YSh2aWV3OiBWaWV3RGF0YSwgaW5kZXg6IG51bWJlcik6IEVsZW1lbnREYXRhIHtcbiAgcmV0dXJuIDxhbnk+dmlldy5ub2Rlc1tpbmRleF07XG59XG5cbi8qKlxuICogRGF0YSBmb3IgYW4gaW5zdGFudGlhdGVkIE5vZGVUeXBlLlByb3ZpZGVyLlxuICpcbiAqIEF0dGVudGlvbjogQWRkaW5nIGZpZWxkcyB0byB0aGlzIGlzIHBlcmZvcm1hbmNlIHNlbnNpdGl2ZSFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcm92aWRlckRhdGEge1xuICBpbnN0YW5jZTogYW55O1xufVxuXG4vKipcbiAqIEFjY2Vzc29yIGZvciB2aWV3Lm5vZGVzLCBlbmZvcmNpbmcgdGhhdCBldmVyeSB1c2FnZSBzaXRlIHN0YXlzIG1vbm9tb3JwaGljLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNQcm92aWRlckRhdGEodmlldzogVmlld0RhdGEsIGluZGV4OiBudW1iZXIpOiBQcm92aWRlckRhdGEge1xuICByZXR1cm4gPGFueT52aWV3Lm5vZGVzW2luZGV4XTtcbn1cblxuLyoqXG4gKiBEYXRhIGZvciBhbiBpbnN0YW50aWF0ZWQgTm9kZVR5cGUuUHVyZUV4cHJlc3Npb24uXG4gKlxuICogQXR0ZW50aW9uOiBBZGRpbmcgZmllbGRzIHRvIHRoaXMgaXMgcGVyZm9ybWFuY2Ugc2Vuc2l0aXZlIVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFB1cmVFeHByZXNzaW9uRGF0YSB7XG4gIHZhbHVlOiBhbnk7XG59XG5cbi8qKlxuICogQWNjZXNzb3IgZm9yIHZpZXcubm9kZXMsIGVuZm9yY2luZyB0aGF0IGV2ZXJ5IHVzYWdlIHNpdGUgc3RheXMgbW9ub21vcnBoaWMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc1B1cmVFeHByZXNzaW9uRGF0YSh2aWV3OiBWaWV3RGF0YSwgaW5kZXg6IG51bWJlcik6IFB1cmVFeHByZXNzaW9uRGF0YSB7XG4gIHJldHVybiA8YW55PnZpZXcubm9kZXNbaW5kZXhdO1xufVxuXG4vKipcbiAqIEFjY2Vzc29yIGZvciB2aWV3Lm5vZGVzLCBlbmZvcmNpbmcgdGhhdCBldmVyeSB1c2FnZSBzaXRlIHN0YXlzIG1vbm9tb3JwaGljLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNRdWVyeUxpc3QodmlldzogVmlld0RhdGEsIGluZGV4OiBudW1iZXIpOiBRdWVyeUxpc3Q8YW55PiB7XG4gIHJldHVybiA8YW55PnZpZXcubm9kZXNbaW5kZXhdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvb3REYXRhIHtcbiAgaW5qZWN0b3I6IEluamVjdG9yO1xuICBuZ01vZHVsZTogTmdNb2R1bGVSZWY8YW55PjtcbiAgcHJvamVjdGFibGVOb2RlczogYW55W11bXTtcbiAgc2VsZWN0b3JPck5vZGU6IGFueTtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyO1xuICBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcjtcbiAgc2FuaXRpemVyOiBTYW5pdGl6ZXI7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEZWJ1Z0NvbnRleHQge1xuICBhYnN0cmFjdCBnZXQgdmlldygpOiBWaWV3RGF0YTtcbiAgYWJzdHJhY3QgZ2V0IG5vZGVJbmRleCgpOiBudW1iZXJ8bnVsbDtcbiAgYWJzdHJhY3QgZ2V0IGluamVjdG9yKCk6IEluamVjdG9yO1xuICBhYnN0cmFjdCBnZXQgY29tcG9uZW50KCk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0IHByb3ZpZGVyVG9rZW5zKCk6IGFueVtdO1xuICBhYnN0cmFjdCBnZXQgcmVmZXJlbmNlcygpOiB7W2tleTogc3RyaW5nXTogYW55fTtcbiAgYWJzdHJhY3QgZ2V0IGNvbnRleHQoKTogYW55O1xuICBhYnN0cmFjdCBnZXQgY29tcG9uZW50UmVuZGVyRWxlbWVudCgpOiBhbnk7XG4gIGFic3RyYWN0IGdldCByZW5kZXJOb2RlKCk6IGFueTtcbiAgYWJzdHJhY3QgbG9nRXJyb3IoY29uc29sZTogQ29uc29sZSwgLi4udmFsdWVzOiBhbnlbXSk6IHZvaWQ7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE90aGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBlbnVtIENoZWNrVHlwZSB7XG4gIENoZWNrQW5kVXBkYXRlLFxuICBDaGVja05vQ2hhbmdlc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3ZpZGVyT3ZlcnJpZGUge1xuICB0b2tlbjogYW55O1xuICBmbGFnczogTm9kZUZsYWdzO1xuICB2YWx1ZTogYW55O1xuICBkZXBzOiAoW0RlcEZsYWdzLCBhbnldfGFueSlbXTtcbiAgZGVwcmVjYXRlZEJlaGF2aW9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VzIHtcbiAgc2V0Q3VycmVudE5vZGUodmlldzogVmlld0RhdGEsIG5vZGVJbmRleDogbnVtYmVyKTogdm9pZDtcbiAgY3JlYXRlUm9vdFZpZXcoXG4gICAgICBpbmplY3RvcjogSW5qZWN0b3IsIHByb2plY3RhYmxlTm9kZXM6IGFueVtdW10sIHJvb3RTZWxlY3Rvck9yTm9kZTogc3RyaW5nfGFueSxcbiAgICAgIGRlZjogVmlld0RlZmluaXRpb24sIG5nTW9kdWxlOiBOZ01vZHVsZVJlZjxhbnk+LCBjb250ZXh0PzogYW55KTogVmlld0RhdGE7XG4gIGNyZWF0ZUVtYmVkZGVkVmlldyhwYXJlbnQ6IFZpZXdEYXRhLCBhbmNob3JEZWY6IE5vZGVEZWYsIHZpZXdEZWY6IFZpZXdEZWZpbml0aW9uLCBjb250ZXh0PzogYW55KTpcbiAgICAgIFZpZXdEYXRhO1xuICBjcmVhdGVDb21wb25lbnRWaWV3KFxuICAgICAgcGFyZW50VmlldzogVmlld0RhdGEsIG5vZGVEZWY6IE5vZGVEZWYsIHZpZXdEZWY6IFZpZXdEZWZpbml0aW9uLCBob3N0RWxlbWVudDogYW55KTogVmlld0RhdGE7XG4gIGNyZWF0ZU5nTW9kdWxlUmVmKFxuICAgICAgbW9kdWxlVHlwZTogVHlwZTxhbnk+LCBwYXJlbnQ6IEluamVjdG9yLCBib290c3RyYXBDb21wb25lbnRzOiBUeXBlPGFueT5bXSxcbiAgICAgIGRlZjogTmdNb2R1bGVEZWZpbml0aW9uKTogTmdNb2R1bGVSZWY8YW55PjtcbiAgb3ZlcnJpZGVQcm92aWRlcihvdmVycmlkZTogUHJvdmlkZXJPdmVycmlkZSk6IHZvaWQ7XG4gIG92ZXJyaWRlQ29tcG9uZW50Vmlldyhjb21wVHlwZTogVHlwZTxhbnk+LCBjb21wRmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxhbnk+KTogdm9pZDtcbiAgY2xlYXJPdmVycmlkZXMoKTogdm9pZDtcbiAgY2hlY2tBbmRVcGRhdGVWaWV3KHZpZXc6IFZpZXdEYXRhKTogdm9pZDtcbiAgY2hlY2tOb0NoYW5nZXNWaWV3KHZpZXc6IFZpZXdEYXRhKTogdm9pZDtcbiAgZGVzdHJveVZpZXcodmlldzogVmlld0RhdGEpOiB2b2lkO1xuICByZXNvbHZlRGVwKFxuICAgICAgdmlldzogVmlld0RhdGEsIGVsRGVmOiBOb2RlRGVmfG51bGwsIGFsbG93UHJpdmF0ZVNlcnZpY2VzOiBib29sZWFuLCBkZXBEZWY6IERlcERlZixcbiAgICAgIG5vdEZvdW5kVmFsdWU/OiBhbnkpOiBhbnk7XG4gIGNyZWF0ZURlYnVnQ29udGV4dCh2aWV3OiBWaWV3RGF0YSwgbm9kZUluZGV4OiBudW1iZXIpOiBEZWJ1Z0NvbnRleHQ7XG4gIGhhbmRsZUV2ZW50OiBWaWV3SGFuZGxlRXZlbnRGbjtcbiAgdXBkYXRlRGlyZWN0aXZlczogKHZpZXc6IFZpZXdEYXRhLCBjaGVja1R5cGU6IENoZWNrVHlwZSkgPT4gdm9pZDtcbiAgdXBkYXRlUmVuZGVyZXI6ICh2aWV3OiBWaWV3RGF0YSwgY2hlY2tUeXBlOiBDaGVja1R5cGUpID0+IHZvaWQ7XG4gIGRpcnR5UGFyZW50UXVlcmllczogKHZpZXc6IFZpZXdEYXRhKSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgb2JqZWN0IGlzIHVzZWQgdG8gcHJldmVudCBjeWNsZXMgaW4gdGhlIHNvdXJjZSBmaWxlcyBhbmQgdG8gaGF2ZSBhIHBsYWNlIHdoZXJlXG4gKiBkZWJ1ZyBtb2RlIGNhbiBob29rIGl0LiBJdCBpcyBsYXppbHkgZmlsbGVkIHdoZW4gYGlzRGV2TW9kZWAgaXMga25vd24uXG4gKi9cbmV4cG9ydCBjb25zdCBTZXJ2aWNlczogU2VydmljZXMgPSB7XG4gIHNldEN1cnJlbnROb2RlOiB1bmRlZmluZWQhLFxuICBjcmVhdGVSb290VmlldzogdW5kZWZpbmVkISxcbiAgY3JlYXRlRW1iZWRkZWRWaWV3OiB1bmRlZmluZWQhLFxuICBjcmVhdGVDb21wb25lbnRWaWV3OiB1bmRlZmluZWQhLFxuICBjcmVhdGVOZ01vZHVsZVJlZjogdW5kZWZpbmVkISxcbiAgb3ZlcnJpZGVQcm92aWRlcjogdW5kZWZpbmVkISxcbiAgb3ZlcnJpZGVDb21wb25lbnRWaWV3OiB1bmRlZmluZWQhLFxuICBjbGVhck92ZXJyaWRlczogdW5kZWZpbmVkISxcbiAgY2hlY2tBbmRVcGRhdGVWaWV3OiB1bmRlZmluZWQhLFxuICBjaGVja05vQ2hhbmdlc1ZpZXc6IHVuZGVmaW5lZCEsXG4gIGRlc3Ryb3lWaWV3OiB1bmRlZmluZWQhLFxuICByZXNvbHZlRGVwOiB1bmRlZmluZWQhLFxuICBjcmVhdGVEZWJ1Z0NvbnRleHQ6IHVuZGVmaW5lZCEsXG4gIGhhbmRsZUV2ZW50OiB1bmRlZmluZWQhLFxuICB1cGRhdGVEaXJlY3RpdmVzOiB1bmRlZmluZWQhLFxuICB1cGRhdGVSZW5kZXJlcjogdW5kZWZpbmVkISxcbiAgZGlydHlQYXJlbnRRdWVyaWVzOiB1bmRlZmluZWQhLFxufTtcbiJdfQ==