/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/interfaces/node.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const TNodeType = {
    /**
     * The TNode contains information about an {@link LContainer} for embedded views.
     */
    Container: 0,
    /**
     * The TNode contains information about an `<ng-content>` projection
     */
    Projection: 1,
    /**
     * The TNode contains information about an {@link LView}
     */
    View: 2,
    /**
     * The TNode contains information about a DOM element aka {@link RNode}.
     */
    Element: 3,
    /**
     * The TNode contains information about an `<ng-container>` element {@link RNode}.
     */
    ElementContainer: 4,
    /**
     * The TNode contains information about an ICU comment used in `i18n`.
     */
    IcuContainer: 5,
};
export { TNodeType };
/** @enum {number} */
const TNodeFlags = {
    /** Bit #1 - This bit is set if the node is a host for any directive (including a component) */
    isDirectiveHost: 1,
    /**
     * Bit #2 - This bit is set if the node is a host for a component.
     *
     * Setting this bit implies that the `isDirectiveHost` bit is set as well.
     * */
    isComponentHost: 2,
    /** Bit #3 - This bit is set if the node has been projected */
    isProjected: 4,
    /** Bit #4 - This bit is set if any directive on this node has content queries */
    hasContentQuery: 8,
    /** Bit #5 - This bit is set if the node has any "class" inputs */
    hasClassInput: 16,
    /** Bit #6 - This bit is set if the node has any "style" inputs */
    hasStyleInput: 32,
    /** Bit #7 This bit is set if the node has been detached by i18n */
    isDetached: 64,
    /**
     * Bit #8 - This bit is set if the node has directives with host bindings.
     *
     * This flags allows us to guard host-binding logic and invoke it only on nodes
     * that actually have directives with host bindings.
     */
    hasHostBindings: 128,
};
export { TNodeFlags };
/** @enum {number} */
const TNodeProviderIndexes = {
    /** The index of the first provider on this node is encoded on the least significant bits */
    ProvidersStartIndexMask: 65535,
    /**
       The count of view providers from the component on this node is encoded on the 16 most
       significant bits
     */
    CptViewProvidersCountShift: 16,
    CptViewProvidersCountShifter: 65536,
};
export { TNodeProviderIndexes };
/** @enum {number} */
const AttributeMarker = {
    /**
     * An implicit marker which indicates that the value in the array are of `attributeKey`,
     * `attributeValue` format.
     *
     * NOTE: This is implicit as it is the type when no marker is present in array. We indicate that
     * it should not be present at runtime by the negative number.
     */
    ImplicitAttributes: -1,
    /**
     * Marker indicates that the following 3 values in the attributes array are:
     * namespaceUri, attributeName, attributeValue
     * in that order.
     */
    NamespaceURI: 0,
    /**
     * Signals class declaration.
     *
     * Each value following `Classes` designates a class name to include on the element.
     * ## Example:
     *
     * Given:
     * ```
     * <div class="foo bar baz">...<d/vi>
     * ```
     *
     * the generated code is:
     * ```
     * var _c1 = [AttributeMarker.Classes, 'foo', 'bar', 'baz'];
     * ```
     */
    Classes: 1,
    /**
     * Signals style declaration.
     *
     * Each pair of values following `Styles` designates a style name and value to include on the
     * element.
     * ## Example:
     *
     * Given:
     * ```
     * <div style="width:100px; height:200px; color:red">...</div>
     * ```
     *
     * the generated code is:
     * ```
     * var _c1 = [AttributeMarker.Styles, 'width', '100px', 'height'. '200px', 'color', 'red'];
     * ```
     */
    Styles: 2,
    /**
     * Signals that the following attribute names were extracted from input or output bindings.
     *
     * For example, given the following HTML:
     *
     * ```
     * <div moo="car" [foo]="exp" (bar)="doSth()">
     * ```
     *
     * the generated code is:
     *
     * ```
     * var _c1 = ['moo', 'car', AttributeMarker.Bindings, 'foo', 'bar'];
     * ```
     */
    Bindings: 3,
    /**
     * Signals that the following attribute names were hoisted from an inline-template declaration.
     *
     * For example, given the following HTML:
     *
     * ```
     * <div *ngFor="let value of values; trackBy:trackBy" dirA [dirB]="value">
     * ```
     *
     * the generated code for the `template()` instruction would include:
     *
     * ```
     * ['dirA', '', AttributeMarker.Bindings, 'dirB', AttributeMarker.Template, 'ngFor', 'ngForOf',
     * 'ngForTrackBy', 'let-value']
     * ```
     *
     * while the generated code for the `element()` instruction inside the template function would
     * include:
     *
     * ```
     * ['dirA', '', AttributeMarker.Bindings, 'dirB']
     * ```
     */
    Template: 4,
    /**
     * Signals that the following attribute is `ngProjectAs` and its value is a parsed `CssSelector`.
     *
     * For example, given the following HTML:
     *
     * ```
     * <h1 attr="value" ngProjectAs="[title]">
     * ```
     *
     * the generated code for the `element()` instruction would include:
     *
     * ```
     * ['attr', 'value', AttributeMarker.ProjectAs, ['', 'title', '']]
     * ```
     */
    ProjectAs: 5,
    /**
     * Signals that the following attribute will be translated by runtime i18n
     *
     * For example, given the following HTML:
     *
     * ```
     * <div moo="car" foo="value" i18n-foo [bar]="binding" i18n-bar>
     * ```
     *
     * the generated code is:
     *
     * ```
     * var _c1 = ['moo', 'car', AttributeMarker.I18n, 'foo', 'bar'];
     */
    I18n: 6,
};
export { AttributeMarker };
/**
 * Binding data (flyweight) for a particular node that is shared between all templates
 * of a specific type.
 *
 * If a property is:
 *    - PropertyAliases: that property's data was generated and this is it
 *    - Null: that property's data was already generated and nothing was found.
 *    - Undefined: that property's data has not yet been generated
 *
 * see: https://en.wikipedia.org/wiki/Flyweight_pattern for more on the Flyweight pattern
 * @record
 */
export function TNode() { }
if (false) {
    /**
     * The type of the TNode. See TNodeType.
     * @type {?}
     */
    TNode.prototype.type;
    /**
     * Index of the TNode in TView.data and corresponding native element in LView.
     *
     * This is necessary to get from any TNode to its corresponding native element when
     * traversing the node tree.
     *
     * If index is -1, this is a dynamically created container node or embedded view node.
     * @type {?}
     */
    TNode.prototype.index;
    /**
     * The index of the closest injector in this node's LView.
     *
     * If the index === -1, there is no injector on this node or any ancestor node in this view.
     *
     * If the index !== -1, it is the index of this node's injector OR the index of a parent injector
     * in the same view. We pass the parent injector index down the node tree of a view so it's
     * possible to find the parent injector without walking a potentially deep node tree. Injector
     * indices are not set across view boundaries because there could be multiple component hosts.
     *
     * If tNode.injectorIndex === tNode.parent.injectorIndex, then the index belongs to a parent
     * injector.
     * @type {?}
     */
    TNode.prototype.injectorIndex;
    /**
     * Stores starting index of the directives.
     * @type {?}
     */
    TNode.prototype.directiveStart;
    /**
     * Stores final exclusive index of the directives.
     * @type {?}
     */
    TNode.prototype.directiveEnd;
    /**
     * Stores the last directive which had a styling instruction.
     *
     * Initial value of this is `-1` which means that no `hostBindings` styling instruction has
     * executed. As `hostBindings` instructions execute they set the value to the index of the
     * `DirectiveDef` which contained the last `hostBindings` styling instruction.
     *
     * Valid values are:
     * - `-1` No `hostBindings` instruction has executed.
     * - `directiveStart <= directiveStylingLast < directiveEnd`: Points to the `DirectiveDef` of the
     *   last styling instruction which executed in the `hostBindings`.
     *
     * This data is needed so that styling instructions know which static styling data needs to be
     * collected from the `DirectiveDef.hostAttrs`. A styling instruction needs to collect all data
     * since last styling instruction.
     * @type {?}
     */
    TNode.prototype.directiveStylingLast;
    /**
     * Stores indexes of property bindings. This field is only set in the ngDevMode and holds indexes
     * of property bindings so TestBed can get bound property metadata for a given node.
     * @type {?}
     */
    TNode.prototype.propertyBindings;
    /**
     * Stores if Node isComponent, isProjected, hasContentQuery, hasClassInput and hasStyleInput etc.
     * @type {?}
     */
    TNode.prototype.flags;
    /**
     * This number stores two values using its bits:
     *
     * - the index of the first provider on that node (first 16 bits)
     * - the count of view providers from the component on this node (last 16 bits)
     * @type {?}
     */
    TNode.prototype.providerIndexes;
    /**
     * The tag name associated with this node.
     * @type {?}
     */
    TNode.prototype.tagName;
    /**
     * Attributes associated with an element. We need to store attributes to support various use-cases
     * (attribute injection, content projection with selectors, directives matching).
     * Attributes are stored statically because reading them from the DOM would be way too slow for
     * content projection and queries.
     *
     * Since attrs will always be calculated first, they will never need to be marked undefined by
     * other instructions.
     *
     * For regular attributes a name of an attribute and its value alternate in the array.
     * e.g. ['role', 'checkbox']
     * This array can contain flags that will indicate "special attributes" (attributes with
     * namespaces, attributes extracted from bindings and outputs).
     * @type {?}
     */
    TNode.prototype.attrs;
    /**
     * Same as `TNode.attrs` but contains merged data across all directive host bindings.
     *
     * We need to keep `attrs` as unmerged so that it can be used for attribute selectors.
     * We merge attrs here so that it can be used in a performant way for initial rendering.
     *
     * The `attrs` are merged in first pass in following order:
     * - Component's `hostAttrs`
     * - Directives' `hostAttrs`
     * - Template `TNode.attrs` associated with the current `TNode`.
     * @type {?}
     */
    TNode.prototype.mergedAttrs;
    /**
     * A set of local names under which a given element is exported in a template and
     * visible to queries. An entry in this array can be created for different reasons:
     * - an element itself is referenced, ex.: `<div #foo>`
     * - a component is referenced, ex.: `<my-cmpt #foo>`
     * - a directive is referenced, ex.: `<my-cmpt #foo="directiveExportAs">`.
     *
     * A given element might have different local names and those names can be associated
     * with a directive. We store local names at even indexes while odd indexes are reserved
     * for directive index in a view (or `-1` if there is no associated directive).
     *
     * Some examples:
     * - `<div #foo>` => `["foo", -1]`
     * - `<my-cmpt #foo>` => `["foo", myCmptIdx]`
     * - `<my-cmpt #foo #bar="directiveExportAs">` => `["foo", myCmptIdx, "bar", directiveIdx]`
     * - `<div #foo #bar="directiveExportAs">` => `["foo", -1, "bar", directiveIdx]`
     * @type {?}
     */
    TNode.prototype.localNames;
    /**
     * Information about input properties that need to be set once from attribute data.
     * @type {?}
     */
    TNode.prototype.initialInputs;
    /**
     * Input data for all directives on this node. `null` means that there are no directives with
     * inputs on this node.
     * @type {?}
     */
    TNode.prototype.inputs;
    /**
     * Output data for all directives on this node. `null` means that there are no directives with
     * outputs on this node.
     * @type {?}
     */
    TNode.prototype.outputs;
    /**
     * The TView or TViews attached to this node.
     *
     * If this TNode corresponds to an LContainer with inline views, the container will
     * need to store separate static data for each of its view blocks (TView[]). Otherwise,
     * nodes in inline views with the same index as nodes in their parent views will overwrite
     * each other, as they are in the same template.
     *
     * Each index in this array corresponds to the static data for a certain
     * view. So if you had V(0) and V(1) in a container, you might have:
     *
     * [
     *   [{tagName: 'div', attrs: ...}, null],     // V(0) TView
     *   [{tagName: 'button', attrs ...}, null]    // V(1) TView
     *
     * If this TNode corresponds to an LContainer with a template (e.g. structural
     * directive), the template's TView will be stored here.
     *
     * If this TNode corresponds to an element, tViews will be null .
     * @type {?}
     */
    TNode.prototype.tViews;
    /**
     * The next sibling node. Necessary so we can propagate through the root nodes of a view
     * to insert them or remove them from the DOM.
     * @type {?}
     */
    TNode.prototype.next;
    /**
     * The next projected sibling. Since in Angular content projection works on the node-by-node basis
     * the act of projecting nodes might change nodes relationship at the insertion point (target
     * view). At the same time we need to keep initial relationship between nodes as expressed in
     * content view.
     * @type {?}
     */
    TNode.prototype.projectionNext;
    /**
     * First child of the current node.
     *
     * For component nodes, the child will always be a ContentChild (in same view).
     * For embedded view nodes, the child will be in their child view.
     * @type {?}
     */
    TNode.prototype.child;
    /**
     * Parent node (in the same view only).
     *
     * We need a reference to a node's parent so we can append the node to its parent's native
     * element at the appropriate time.
     *
     * If the parent would be in a different view (e.g. component host), this property will be null.
     * It's important that we don't try to cross component boundaries when retrieving the parent
     * because the parent will change (e.g. index, attrs) depending on where the component was
     * used (and thus shouldn't be stored on TNode). In these cases, we retrieve the parent through
     * LView.node instead (which will be instance-specific).
     *
     * If this is an inline view node (V), the parent will be its container.
     * @type {?}
     */
    TNode.prototype.parent;
    /**
     * List of projected TNodes for a given component host element OR index into the said nodes.
     *
     * For easier discussion assume this example:
     * `<parent>`'s view definition:
     * ```
     * <child id="c1">content1</child>
     * <child id="c2"><span>content2</span></child>
     * ```
     * `<child>`'s view definition:
     * ```
     * <ng-content id="cont1"></ng-content>
     * ```
     *
     * If `Array.isArray(projection)` then `TNode` is a host element:
     * - `projection` stores the content nodes which are to be projected.
     *    - The nodes represent categories defined by the selector: For example:
     *      `<ng-content/><ng-content select="abc"/>` would represent the heads for `<ng-content/>`
     *      and `<ng-content select="abc"/>` respectively.
     *    - The nodes we store in `projection` are heads only, we used `.next` to get their
     *      siblings.
     *    - The nodes `.next` is sorted/rewritten as part of the projection setup.
     *    - `projection` size is equal to the number of projections `<ng-content>`. The size of
     *      `c1` will be `1` because `<child>` has only one `<ng-content>`.
     * - we store `projection` with the host (`c1`, `c2`) rather than the `<ng-content>` (`cont1`)
     *   because the same component (`<child>`) can be used in multiple locations (`c1`, `c2`) and as
     *   a result have different set of nodes to project.
     * - without `projection` it would be difficult to efficiently traverse nodes to be projected.
     *
     * If `typeof projection == 'number'` then `TNode` is a `<ng-content>` element:
     * - `projection` is an index of the host's `projection`Nodes.
     *   - This would return the first head node to project:
     *     `getHost(currentTNode).projection[currentTNode.projection]`.
     * - When projecting nodes the parent node retrieved may be a `<ng-content>` node, in which case
     *   the process is recursive in nature.
     *
     * If `projection` is of type `RNode[][]` than we have a collection of native nodes passed as
     * projectable nodes during dynamic component creation.
     * @type {?}
     */
    TNode.prototype.projection;
    /**
     * A collection of all `style` static values for an element (including from host).
     *
     * This field will be populated if and when:
     *
     * - There are one or more initial `style`s on an element (e.g. `<div style="width:200px;">`)
     * - There are one or more initial `style`s on a directive/component host
     *   (e.g. `\@Directive({host: {style: "width:200px;" } }`)
     * @type {?}
     */
    TNode.prototype.styles;
    /**
     * A collection of all `style` static values for an element excluding host sources.
     *
     * Populated when there are one or more initial `style`s on an element
     * (e.g. `<div style="width:200px;">`)
     * Must be stored separately from `tNode.styles` to facilitate setting directive
     * inputs that shadow the `style` property. If we used `tNode.styles` as is for shadowed inputs,
     * we would feed host styles back into directives as "inputs". If we used `tNode.attrs`, we would
     * have to concatenate the attributes on every template pass. Instead, we process once on first
     * create pass and store here.
     * @type {?}
     */
    TNode.prototype.stylesWithoutHost;
    /**
     * A `KeyValueArray` version of residual `styles`.
     *
     * When there are styling instructions than each instruction stores the static styling
     * which is of lower priority than itself. This means that there may be a higher priority styling
     * than the instruction.
     *
     * Imagine:
     * ```
     * <div style="color: highest;" my-dir>
     *
     * \@Directive({
     *   host: {
     *     style: 'color: lowest; ',
     *     '[styles.color]': 'exp' // ɵɵstyleProp('color', ctx.exp);
     *   }
     * })
     * ```
     *
     * In the above case:
     * - `color: lowest` is stored with `ɵɵstyleProp('color', ctx.exp);` instruction
     * -  `color: highest` is the residual and is stored here.
     *
     * - `undefined': not initialized.
     * - `null`: initialized but `styles` is `null`
     * - `KeyValueArray`: parsed version of `styles`.
     * @type {?}
     */
    TNode.prototype.residualStyles;
    /**
     * A collection of all class static values for an element (including from host).
     *
     * This field will be populated if and when:
     *
     * - There are one or more initial classes on an element (e.g. `<div class="one two three">`)
     * - There are one or more initial classes on an directive/component host
     *   (e.g. `\@Directive({host: {class: "SOME_CLASS" } }`)
     * @type {?}
     */
    TNode.prototype.classes;
    /**
     * A collection of all class static values for an element excluding host sources.
     *
     * Populated when there are one or more initial classes on an element
     * (e.g. `<div class="SOME_CLASS">`)
     * Must be stored separately from `tNode.classes` to facilitate setting directive
     * inputs that shadow the `class` property. If we used `tNode.classes` as is for shadowed inputs,
     * we would feed host classes back into directives as "inputs". If we used `tNode.attrs`, we would
     * have to concatenate the attributes on every template pass. Instead, we process once on first
     * create pass and store here.
     * @type {?}
     */
    TNode.prototype.classesWithoutHost;
    /**
     * A `KeyValueArray` version of residual `classes`.
     *
     * Same as `TNode.residualStyles` but for classes.
     *
     * - `undefined': not initialized.
     * - `null`: initialized but `classes` is `null`
     * - `KeyValueArray`: parsed version of `classes`.
     * @type {?}
     */
    TNode.prototype.residualClasses;
    /**
     * Stores the head/tail index of the class bindings.
     *
     * - If no bindings, the head and tail will both be 0.
     * - If there are template bindings, stores the head/tail of the class bindings in the template.
     * - If no template bindings but there are host bindings, the head value will point to the last
     *   host binding for "class" (not the head of the linked list), tail will be 0.
     *
     * See: `style_binding_list.ts` for details.
     *
     * This is used by `insertTStylingBinding` to know where the next styling binding should be
     * inserted so that they can be sorted in priority order.
     * @type {?}
     */
    TNode.prototype.classBindings;
    /**
     * Stores the head/tail index of the class bindings.
     *
     * - If no bindings, the head and tail will both be 0.
     * - If there are template bindings, stores the head/tail of the style bindings in the template.
     * - If no template bindings but there are host bindings, the head value will point to the last
     *   host binding for "style" (not the head of the linked list), tail will be 0.
     *
     * See: `style_binding_list.ts` for details.
     *
     * This is used by `insertTStylingBinding` to know where the next styling binding should be
     * inserted so that they can be sorted in priority order.
     * @type {?}
     */
    TNode.prototype.styleBindings;
}
/**
 * Static data for an element
 * @record
 */
export function TElementNode() { }
if (false) {
    /**
     * Index in the data[] array
     * @type {?}
     */
    TElementNode.prototype.index;
    /** @type {?} */
    TElementNode.prototype.child;
    /**
     * Element nodes will have parents unless they are the first node of a component or
     * embedded view (which means their parent is in a different view and must be
     * retrieved using viewData[HOST_NODE]).
     * @type {?}
     */
    TElementNode.prototype.parent;
    /** @type {?} */
    TElementNode.prototype.tViews;
    /**
     * If this is a component TNode with projection, this will be an array of projected
     * TNodes or native nodes (see TNode.projection for more info). If it's a regular element node or
     * a component without projection, it will be null.
     * @type {?}
     */
    TElementNode.prototype.projection;
}
/**
 * Static data for a text node
 * @record
 */
export function TTextNode() { }
if (false) {
    /**
     * Index in the data[] array
     * @type {?}
     */
    TTextNode.prototype.index;
    /** @type {?} */
    TTextNode.prototype.child;
    /**
     * Text nodes will have parents unless they are the first node of a component or
     * embedded view (which means their parent is in a different view and must be
     * retrieved using LView.node).
     * @type {?}
     */
    TTextNode.prototype.parent;
    /** @type {?} */
    TTextNode.prototype.tViews;
    /** @type {?} */
    TTextNode.prototype.projection;
}
/**
 * Static data for an LContainer
 * @record
 */
export function TContainerNode() { }
if (false) {
    /**
     * Index in the data[] array.
     *
     * If it's -1, this is a dynamically created container node that isn't stored in
     * data[] (e.g. when you inject ViewContainerRef) .
     * @type {?}
     */
    TContainerNode.prototype.index;
    /** @type {?} */
    TContainerNode.prototype.child;
    /**
     * Container nodes will have parents unless:
     *
     * - They are the first node of a component or embedded view
     * - They are dynamically created
     * @type {?}
     */
    TContainerNode.prototype.parent;
    /** @type {?} */
    TContainerNode.prototype.tViews;
    /** @type {?} */
    TContainerNode.prototype.projection;
}
/**
 * Static data for an <ng-container>
 * @record
 */
export function TElementContainerNode() { }
if (false) {
    /**
     * Index in the LView[] array.
     * @type {?}
     */
    TElementContainerNode.prototype.index;
    /** @type {?} */
    TElementContainerNode.prototype.child;
    /** @type {?} */
    TElementContainerNode.prototype.parent;
    /** @type {?} */
    TElementContainerNode.prototype.tViews;
    /** @type {?} */
    TElementContainerNode.prototype.projection;
}
/**
 * Static data for an ICU expression
 * @record
 */
export function TIcuContainerNode() { }
if (false) {
    /**
     * Index in the LView[] array.
     * @type {?}
     */
    TIcuContainerNode.prototype.index;
    /** @type {?} */
    TIcuContainerNode.prototype.child;
    /** @type {?} */
    TIcuContainerNode.prototype.parent;
    /** @type {?} */
    TIcuContainerNode.prototype.tViews;
    /** @type {?} */
    TIcuContainerNode.prototype.projection;
    /**
     * Indicates the current active case for an ICU expression.
     * It is null when there is no active case.
     * @type {?}
     */
    TIcuContainerNode.prototype.activeCaseIndex;
}
/**
 * Static data for a view
 * @record
 */
export function TViewNode() { }
if (false) {
    /**
     * If -1, it's a dynamically created view. Otherwise, it is the view block ID.
     * @type {?}
     */
    TViewNode.prototype.index;
    /** @type {?} */
    TViewNode.prototype.child;
    /** @type {?} */
    TViewNode.prototype.parent;
    /** @type {?} */
    TViewNode.prototype.tViews;
    /** @type {?} */
    TViewNode.prototype.projection;
}
/**
 * Static data for an LProjectionNode
 * @record
 */
export function TProjectionNode() { }
if (false) {
    /**
     * Index in the data[] array
     * @type {?}
     */
    TProjectionNode.prototype.child;
    /**
     * Projection nodes will have parents unless they are the first node of a component
     * or embedded view (which means their parent is in a different view and must be
     * retrieved using LView.node).
     * @type {?}
     */
    TProjectionNode.prototype.parent;
    /** @type {?} */
    TProjectionNode.prototype.tViews;
    /**
     * Index of the projection node. (See TNode.projection for more info.)
     * @type {?}
     */
    TProjectionNode.prototype.projection;
}
// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
/** @type {?} */
export const unusedValueExportToPlacateAjd = 1;
/**
 * Returns `true` if the `TNode` has a directive which has `\@Input()` for `class` binding.
 *
 * ```
 * <div my-dir [class]="exp"></div>
 * ```
 * and
 * ```
 * \@Directive({
 * })
 * class MyDirective {
 * \@Input()
 *   class: string;
 * }
 * ```
 *
 * In the above case it is necessary to write the reconciled styling information into the
 * directive's input.
 *
 * @param {?} tNode
 * @return {?}
 */
export function hasClassInput(tNode) {
    return (tNode.flags & 16 /* hasClassInput */) !== 0;
}
/**
 * Returns `true` if the `TNode` has a directive which has `\@Input()` for `style` binding.
 *
 * ```
 * <div my-dir [style]="exp"></div>
 * ```
 * and
 * ```
 * \@Directive({
 * })
 * class MyDirective {
 * \@Input()
 *   class: string;
 * }
 * ```
 *
 * In the above case it is necessary to write the reconciled styling information into the
 * directive's input.
 *
 * @param {?} tNode
 * @return {?}
 */
export function hasStyleInput(tNode) {
    return (tNode.flags & 32 /* hasStyleInput */) !== 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW50ZXJmYWNlcy9ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQW9CQSxNQUFrQixTQUFTO0lBQ3pCOztPQUVHO0lBQ0gsU0FBUyxHQUFJO0lBQ2I7O09BRUc7SUFDSCxVQUFVLEdBQUk7SUFDZDs7T0FFRztJQUNILElBQUksR0FBSTtJQUNSOztPQUVHO0lBQ0gsT0FBTyxHQUFJO0lBQ1g7O09BRUc7SUFDSCxnQkFBZ0IsR0FBSTtJQUNwQjs7T0FFRztJQUNILFlBQVksR0FBSTtFQUNqQjs7O0FBS0QsTUFBa0IsVUFBVTtJQUMxQiwrRkFBK0Y7SUFDL0YsZUFBZSxHQUFNO0lBRXJCOzs7O1NBSUs7SUFDTCxlQUFlLEdBQU07SUFFckIsOERBQThEO0lBQzlELFdBQVcsR0FBTTtJQUVqQixpRkFBaUY7SUFDakYsZUFBZSxHQUFNO0lBRXJCLGtFQUFrRTtJQUNsRSxhQUFhLElBQU87SUFFcEIsa0VBQWtFO0lBQ2xFLGFBQWEsSUFBTztJQUVwQixtRUFBbUU7SUFDbkUsVUFBVSxJQUFPO0lBRWpCOzs7OztPQUtHO0lBQ0gsZUFBZSxLQUFPO0VBQ3ZCOzs7QUFLRCxNQUFrQixvQkFBb0I7SUFDcEMsNEZBQTRGO0lBQzVGLHVCQUF1QixPQUFxQztJQUU1RDs7O09BR0c7SUFDSCwwQkFBMEIsSUFBSztJQUMvQiw0QkFBNEIsT0FBcUM7RUFDbEU7OztBQUtELE1BQWtCLGVBQWU7SUFDL0I7Ozs7OztPQU1HO0lBQ0gsa0JBQWtCLElBQUs7SUFFdkI7Ozs7T0FJRztJQUNILFlBQVksR0FBSTtJQUVoQjs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSCxPQUFPLEdBQUk7SUFFWDs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUNILE1BQU0sR0FBSTtJQUVWOzs7Ozs7Ozs7Ozs7OztPQWNHO0lBQ0gsUUFBUSxHQUFJO0lBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FzQkc7SUFDSCxRQUFRLEdBQUk7SUFFWjs7Ozs7Ozs7Ozs7Ozs7T0FjRztJQUNILFNBQVMsR0FBSTtJQUViOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSCxJQUFJLEdBQUk7RUFDVDs7Ozs7Ozs7Ozs7Ozs7QUE0QkQsMkJBMFdDOzs7Ozs7SUF4V0MscUJBQWdCOzs7Ozs7Ozs7O0lBVWhCLHNCQUFjOzs7Ozs7Ozs7Ozs7Ozs7SUFlZCw4QkFBc0I7Ozs7O0lBS3RCLCtCQUF1Qjs7Ozs7SUFLdkIsNkJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQnJCLHFDQUE2Qjs7Ozs7O0lBTTdCLGlDQUFnQzs7Ozs7SUFLaEMsc0JBQWtCOzs7Ozs7OztJQVNsQixnQ0FBc0M7Ozs7O0lBR3RDLHdCQUFxQjs7Ozs7Ozs7Ozs7Ozs7OztJQWdCckIsc0JBQXdCOzs7Ozs7Ozs7Ozs7O0lBYXhCLDRCQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1COUIsMkJBQW1DOzs7OztJQUduQyw4QkFBK0M7Ozs7OztJQU0vQyx1QkFBNkI7Ozs7OztJQU03Qix3QkFBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQjlCLHVCQUEyQjs7Ozs7O0lBTTNCLHFCQUFpQjs7Ozs7Ozs7SUFRakIsK0JBQTJCOzs7Ozs7OztJQVEzQixzQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQmxCLHVCQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5Q3pDLDJCQUEwQzs7Ozs7Ozs7Ozs7SUFXMUMsdUJBQW9COzs7Ozs7Ozs7Ozs7O0lBY3BCLGtDQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE2Qi9CLCtCQUFrRDs7Ozs7Ozs7Ozs7SUFXbEQsd0JBQXFCOzs7Ozs7Ozs7Ozs7O0lBYXJCLG1DQUFnQzs7Ozs7Ozs7Ozs7SUFXaEMsZ0NBQW1EOzs7Ozs7Ozs7Ozs7Ozs7SUFlbkQsOEJBQTZCOzs7Ozs7Ozs7Ozs7Ozs7SUFlN0IsOEJBQTZCOzs7Ozs7QUFJL0Isa0NBa0JDOzs7Ozs7SUFoQkMsNkJBQWM7O0lBQ2QsNkJBQXdGOzs7Ozs7O0lBTXhGLDhCQUFnRDs7SUFDaEQsOEJBQWE7Ozs7Ozs7SUFPYixrQ0FBbUM7Ozs7OztBQUlyQywrQkFZQzs7Ozs7O0lBVkMsMEJBQWM7O0lBQ2QsMEJBQVk7Ozs7Ozs7SUFNWiwyQkFBZ0Q7O0lBQ2hELDJCQUFhOztJQUNiLCtCQUFpQjs7Ozs7O0FBSW5CLG9DQW1CQzs7Ozs7Ozs7O0lBWkMsK0JBQWM7O0lBQ2QsK0JBQVk7Ozs7Ozs7O0lBUVosZ0NBQWdEOztJQUNoRCxnQ0FBMkI7O0lBQzNCLG9DQUFpQjs7Ozs7O0FBSW5CLDJDQU9DOzs7Ozs7SUFMQyxzQ0FBYzs7SUFDZCxzQ0FBd0Y7O0lBQ3hGLHVDQUFnRDs7SUFDaEQsdUNBQWE7O0lBQ2IsMkNBQWlCOzs7Ozs7QUFJbkIsdUNBWUM7Ozs7OztJQVZDLGtDQUFjOztJQUNkLGtDQUFtQzs7SUFDbkMsbUNBQWdEOztJQUNoRCxtQ0FBYTs7SUFDYix1Q0FBaUI7Ozs7OztJQUtqQiw0Q0FBNkI7Ozs7OztBQUkvQiwrQkFPQzs7Ozs7O0lBTEMsMEJBQWM7O0lBQ2QsMEJBQXdGOztJQUN4RiwyQkFBNEI7O0lBQzVCLDJCQUFhOztJQUNiLCtCQUFpQjs7Ozs7O0FBSW5CLHFDQWFDOzs7Ozs7SUFYQyxnQ0FBWTs7Ozs7OztJQU1aLGlDQUFnRDs7SUFDaEQsaUNBQWE7Ozs7O0lBR2IscUNBQW1COzs7OztBQW1FckIsTUFBTSxPQUFPLDZCQUE2QixHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0M5QyxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQVk7SUFDeEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLHlCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBWTtJQUN4QyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUsseUJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7S2V5VmFsdWVBcnJheX0gZnJvbSAnLi4vLi4vdXRpbC9hcnJheV91dGlscyc7XG5pbXBvcnQge1RTdHlsaW5nUmFuZ2V9IGZyb20gJy4uL2ludGVyZmFjZXMvc3R5bGluZyc7XG5cbmltcG9ydCB7RGlyZWN0aXZlRGVmfSBmcm9tICcuL2RlZmluaXRpb24nO1xuaW1wb3J0IHtDc3NTZWxlY3Rvcn0gZnJvbSAnLi9wcm9qZWN0aW9uJztcbmltcG9ydCB7Uk5vZGV9IGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHtMVmlldywgVFZpZXd9IGZyb20gJy4vdmlldyc7XG5cblxuXG4vKipcbiAqIFROb2RlVHlwZSBjb3JyZXNwb25kcyB0byB0aGUge0BsaW5rIFROb2RlfSBgdHlwZWAgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIFROb2RlVHlwZSB7XG4gIC8qKlxuICAgKiBUaGUgVE5vZGUgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgYW4ge0BsaW5rIExDb250YWluZXJ9IGZvciBlbWJlZGRlZCB2aWV3cy5cbiAgICovXG4gIENvbnRhaW5lciA9IDAsXG4gIC8qKlxuICAgKiBUaGUgVE5vZGUgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgYW4gYDxuZy1jb250ZW50PmAgcHJvamVjdGlvblxuICAgKi9cbiAgUHJvamVjdGlvbiA9IDEsXG4gIC8qKlxuICAgKiBUaGUgVE5vZGUgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgYW4ge0BsaW5rIExWaWV3fVxuICAgKi9cbiAgVmlldyA9IDIsXG4gIC8qKlxuICAgKiBUaGUgVE5vZGUgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgYSBET00gZWxlbWVudCBha2Ege0BsaW5rIFJOb2RlfS5cbiAgICovXG4gIEVsZW1lbnQgPSAzLFxuICAvKipcbiAgICogVGhlIFROb2RlIGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IGFuIGA8bmctY29udGFpbmVyPmAgZWxlbWVudCB7QGxpbmsgUk5vZGV9LlxuICAgKi9cbiAgRWxlbWVudENvbnRhaW5lciA9IDQsXG4gIC8qKlxuICAgKiBUaGUgVE5vZGUgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgYW4gSUNVIGNvbW1lbnQgdXNlZCBpbiBgaTE4bmAuXG4gICAqL1xuICBJY3VDb250YWluZXIgPSA1LFxufVxuXG4vKipcbiAqIENvcnJlc3BvbmRzIHRvIHRoZSBUTm9kZS5mbGFncyBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gVE5vZGVGbGFncyB7XG4gIC8qKiBCaXQgIzEgLSBUaGlzIGJpdCBpcyBzZXQgaWYgdGhlIG5vZGUgaXMgYSBob3N0IGZvciBhbnkgZGlyZWN0aXZlIChpbmNsdWRpbmcgYSBjb21wb25lbnQpICovXG4gIGlzRGlyZWN0aXZlSG9zdCA9IDB4MSxcblxuICAvKipcbiAgICogQml0ICMyIC0gVGhpcyBiaXQgaXMgc2V0IGlmIHRoZSBub2RlIGlzIGEgaG9zdCBmb3IgYSBjb21wb25lbnQuXG4gICAqXG4gICAqIFNldHRpbmcgdGhpcyBiaXQgaW1wbGllcyB0aGF0IHRoZSBgaXNEaXJlY3RpdmVIb3N0YCBiaXQgaXMgc2V0IGFzIHdlbGwuXG4gICAqICovXG4gIGlzQ29tcG9uZW50SG9zdCA9IDB4MixcblxuICAvKiogQml0ICMzIC0gVGhpcyBiaXQgaXMgc2V0IGlmIHRoZSBub2RlIGhhcyBiZWVuIHByb2plY3RlZCAqL1xuICBpc1Byb2plY3RlZCA9IDB4NCxcblxuICAvKiogQml0ICM0IC0gVGhpcyBiaXQgaXMgc2V0IGlmIGFueSBkaXJlY3RpdmUgb24gdGhpcyBub2RlIGhhcyBjb250ZW50IHF1ZXJpZXMgKi9cbiAgaGFzQ29udGVudFF1ZXJ5ID0gMHg4LFxuXG4gIC8qKiBCaXQgIzUgLSBUaGlzIGJpdCBpcyBzZXQgaWYgdGhlIG5vZGUgaGFzIGFueSBcImNsYXNzXCIgaW5wdXRzICovXG4gIGhhc0NsYXNzSW5wdXQgPSAweDEwLFxuXG4gIC8qKiBCaXQgIzYgLSBUaGlzIGJpdCBpcyBzZXQgaWYgdGhlIG5vZGUgaGFzIGFueSBcInN0eWxlXCIgaW5wdXRzICovXG4gIGhhc1N0eWxlSW5wdXQgPSAweDIwLFxuXG4gIC8qKiBCaXQgIzcgVGhpcyBiaXQgaXMgc2V0IGlmIHRoZSBub2RlIGhhcyBiZWVuIGRldGFjaGVkIGJ5IGkxOG4gKi9cbiAgaXNEZXRhY2hlZCA9IDB4NDAsXG5cbiAgLyoqXG4gICAqIEJpdCAjOCAtIFRoaXMgYml0IGlzIHNldCBpZiB0aGUgbm9kZSBoYXMgZGlyZWN0aXZlcyB3aXRoIGhvc3QgYmluZGluZ3MuXG4gICAqXG4gICAqIFRoaXMgZmxhZ3MgYWxsb3dzIHVzIHRvIGd1YXJkIGhvc3QtYmluZGluZyBsb2dpYyBhbmQgaW52b2tlIGl0IG9ubHkgb24gbm9kZXNcbiAgICogdGhhdCBhY3R1YWxseSBoYXZlIGRpcmVjdGl2ZXMgd2l0aCBob3N0IGJpbmRpbmdzLlxuICAgKi9cbiAgaGFzSG9zdEJpbmRpbmdzID0gMHg4MCxcbn1cblxuLyoqXG4gKiBDb3JyZXNwb25kcyB0byB0aGUgVE5vZGUucHJvdmlkZXJJbmRleGVzIHByb3BlcnR5LlxuICovXG5leHBvcnQgY29uc3QgZW51bSBUTm9kZVByb3ZpZGVySW5kZXhlcyB7XG4gIC8qKiBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IHByb3ZpZGVyIG9uIHRoaXMgbm9kZSBpcyBlbmNvZGVkIG9uIHRoZSBsZWFzdCBzaWduaWZpY2FudCBiaXRzICovXG4gIFByb3ZpZGVyc1N0YXJ0SW5kZXhNYXNrID0gMGIwMDAwMDAwMDAwMDAwMDAwMTExMTExMTExMTExMTExMSxcblxuICAvKipcbiAgICAgVGhlIGNvdW50IG9mIHZpZXcgcHJvdmlkZXJzIGZyb20gdGhlIGNvbXBvbmVudCBvbiB0aGlzIG5vZGUgaXMgZW5jb2RlZCBvbiB0aGUgMTYgbW9zdFxuICAgICBzaWduaWZpY2FudCBiaXRzXG4gICAqL1xuICBDcHRWaWV3UHJvdmlkZXJzQ291bnRTaGlmdCA9IDE2LFxuICBDcHRWaWV3UHJvdmlkZXJzQ291bnRTaGlmdGVyID0gMGIwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMCxcbn1cbi8qKlxuICogQSBzZXQgb2YgbWFya2VyIHZhbHVlcyB0byBiZSB1c2VkIGluIHRoZSBhdHRyaWJ1dGVzIGFycmF5cy4gVGhlc2UgbWFya2VycyBpbmRpY2F0ZSB0aGF0IHNvbWVcbiAqIGl0ZW1zIGFyZSBub3QgcmVndWxhciBhdHRyaWJ1dGVzIGFuZCB0aGUgcHJvY2Vzc2luZyBzaG91bGQgYmUgYWRhcHRlZCBhY2NvcmRpbmdseS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gQXR0cmlidXRlTWFya2VyIHtcbiAgLyoqXG4gICAqIEFuIGltcGxpY2l0IG1hcmtlciB3aGljaCBpbmRpY2F0ZXMgdGhhdCB0aGUgdmFsdWUgaW4gdGhlIGFycmF5IGFyZSBvZiBgYXR0cmlidXRlS2V5YCxcbiAgICogYGF0dHJpYnV0ZVZhbHVlYCBmb3JtYXQuXG4gICAqXG4gICAqIE5PVEU6IFRoaXMgaXMgaW1wbGljaXQgYXMgaXQgaXMgdGhlIHR5cGUgd2hlbiBubyBtYXJrZXIgaXMgcHJlc2VudCBpbiBhcnJheS4gV2UgaW5kaWNhdGUgdGhhdFxuICAgKiBpdCBzaG91bGQgbm90IGJlIHByZXNlbnQgYXQgcnVudGltZSBieSB0aGUgbmVnYXRpdmUgbnVtYmVyLlxuICAgKi9cbiAgSW1wbGljaXRBdHRyaWJ1dGVzID0gLTEsXG5cbiAgLyoqXG4gICAqIE1hcmtlciBpbmRpY2F0ZXMgdGhhdCB0aGUgZm9sbG93aW5nIDMgdmFsdWVzIGluIHRoZSBhdHRyaWJ1dGVzIGFycmF5IGFyZTpcbiAgICogbmFtZXNwYWNlVXJpLCBhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZVxuICAgKiBpbiB0aGF0IG9yZGVyLlxuICAgKi9cbiAgTmFtZXNwYWNlVVJJID0gMCxcblxuICAvKipcbiAgICogU2lnbmFscyBjbGFzcyBkZWNsYXJhdGlvbi5cbiAgICpcbiAgICogRWFjaCB2YWx1ZSBmb2xsb3dpbmcgYENsYXNzZXNgIGRlc2lnbmF0ZXMgYSBjbGFzcyBuYW1lIHRvIGluY2x1ZGUgb24gdGhlIGVsZW1lbnQuXG4gICAqICMjIEV4YW1wbGU6XG4gICAqXG4gICAqIEdpdmVuOlxuICAgKiBgYGBcbiAgICogPGRpdiBjbGFzcz1cImZvbyBiYXIgYmF6XCI+Li4uPGQvdmk+XG4gICAqIGBgYFxuICAgKlxuICAgKiB0aGUgZ2VuZXJhdGVkIGNvZGUgaXM6XG4gICAqIGBgYFxuICAgKiB2YXIgX2MxID0gW0F0dHJpYnV0ZU1hcmtlci5DbGFzc2VzLCAnZm9vJywgJ2JhcicsICdiYXonXTtcbiAgICogYGBgXG4gICAqL1xuICBDbGFzc2VzID0gMSxcblxuICAvKipcbiAgICogU2lnbmFscyBzdHlsZSBkZWNsYXJhdGlvbi5cbiAgICpcbiAgICogRWFjaCBwYWlyIG9mIHZhbHVlcyBmb2xsb3dpbmcgYFN0eWxlc2AgZGVzaWduYXRlcyBhIHN0eWxlIG5hbWUgYW5kIHZhbHVlIHRvIGluY2x1ZGUgb24gdGhlXG4gICAqIGVsZW1lbnQuXG4gICAqICMjIEV4YW1wbGU6XG4gICAqXG4gICAqIEdpdmVuOlxuICAgKiBgYGBcbiAgICogPGRpdiBzdHlsZT1cIndpZHRoOjEwMHB4OyBoZWlnaHQ6MjAwcHg7IGNvbG9yOnJlZFwiPi4uLjwvZGl2PlxuICAgKiBgYGBcbiAgICpcbiAgICogdGhlIGdlbmVyYXRlZCBjb2RlIGlzOlxuICAgKiBgYGBcbiAgICogdmFyIF9jMSA9IFtBdHRyaWJ1dGVNYXJrZXIuU3R5bGVzLCAnd2lkdGgnLCAnMTAwcHgnLCAnaGVpZ2h0Jy4gJzIwMHB4JywgJ2NvbG9yJywgJ3JlZCddO1xuICAgKiBgYGBcbiAgICovXG4gIFN0eWxlcyA9IDIsXG5cbiAgLyoqXG4gICAqIFNpZ25hbHMgdGhhdCB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZSBuYW1lcyB3ZXJlIGV4dHJhY3RlZCBmcm9tIGlucHV0IG9yIG91dHB1dCBiaW5kaW5ncy5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGdpdmVuIHRoZSBmb2xsb3dpbmcgSFRNTDpcbiAgICpcbiAgICogYGBgXG4gICAqIDxkaXYgbW9vPVwiY2FyXCIgW2Zvb109XCJleHBcIiAoYmFyKT1cImRvU3RoKClcIj5cbiAgICogYGBgXG4gICAqXG4gICAqIHRoZSBnZW5lcmF0ZWQgY29kZSBpczpcbiAgICpcbiAgICogYGBgXG4gICAqIHZhciBfYzEgPSBbJ21vbycsICdjYXInLCBBdHRyaWJ1dGVNYXJrZXIuQmluZGluZ3MsICdmb28nLCAnYmFyJ107XG4gICAqIGBgYFxuICAgKi9cbiAgQmluZGluZ3MgPSAzLFxuXG4gIC8qKlxuICAgKiBTaWduYWxzIHRoYXQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgbmFtZXMgd2VyZSBob2lzdGVkIGZyb20gYW4gaW5saW5lLXRlbXBsYXRlIGRlY2xhcmF0aW9uLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgZ2l2ZW4gdGhlIGZvbGxvd2luZyBIVE1MOlxuICAgKlxuICAgKiBgYGBcbiAgICogPGRpdiAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgdmFsdWVzOyB0cmFja0J5OnRyYWNrQnlcIiBkaXJBIFtkaXJCXT1cInZhbHVlXCI+XG4gICAqIGBgYFxuICAgKlxuICAgKiB0aGUgZ2VuZXJhdGVkIGNvZGUgZm9yIHRoZSBgdGVtcGxhdGUoKWAgaW5zdHJ1Y3Rpb24gd291bGQgaW5jbHVkZTpcbiAgICpcbiAgICogYGBgXG4gICAqIFsnZGlyQScsICcnLCBBdHRyaWJ1dGVNYXJrZXIuQmluZGluZ3MsICdkaXJCJywgQXR0cmlidXRlTWFya2VyLlRlbXBsYXRlLCAnbmdGb3InLCAnbmdGb3JPZicsXG4gICAqICduZ0ZvclRyYWNrQnknLCAnbGV0LXZhbHVlJ11cbiAgICogYGBgXG4gICAqXG4gICAqIHdoaWxlIHRoZSBnZW5lcmF0ZWQgY29kZSBmb3IgdGhlIGBlbGVtZW50KClgIGluc3RydWN0aW9uIGluc2lkZSB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gd291bGRcbiAgICogaW5jbHVkZTpcbiAgICpcbiAgICogYGBgXG4gICAqIFsnZGlyQScsICcnLCBBdHRyaWJ1dGVNYXJrZXIuQmluZGluZ3MsICdkaXJCJ11cbiAgICogYGBgXG4gICAqL1xuICBUZW1wbGF0ZSA9IDQsXG5cbiAgLyoqXG4gICAqIFNpZ25hbHMgdGhhdCB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZSBpcyBgbmdQcm9qZWN0QXNgIGFuZCBpdHMgdmFsdWUgaXMgYSBwYXJzZWQgYENzc1NlbGVjdG9yYC5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGdpdmVuIHRoZSBmb2xsb3dpbmcgSFRNTDpcbiAgICpcbiAgICogYGBgXG4gICAqIDxoMSBhdHRyPVwidmFsdWVcIiBuZ1Byb2plY3RBcz1cIlt0aXRsZV1cIj5cbiAgICogYGBgXG4gICAqXG4gICAqIHRoZSBnZW5lcmF0ZWQgY29kZSBmb3IgdGhlIGBlbGVtZW50KClgIGluc3RydWN0aW9uIHdvdWxkIGluY2x1ZGU6XG4gICAqXG4gICAqIGBgYFxuICAgKiBbJ2F0dHInLCAndmFsdWUnLCBBdHRyaWJ1dGVNYXJrZXIuUHJvamVjdEFzLCBbJycsICd0aXRsZScsICcnXV1cbiAgICogYGBgXG4gICAqL1xuICBQcm9qZWN0QXMgPSA1LFxuXG4gIC8qKlxuICAgKiBTaWduYWxzIHRoYXQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgd2lsbCBiZSB0cmFuc2xhdGVkIGJ5IHJ1bnRpbWUgaTE4blxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgZ2l2ZW4gdGhlIGZvbGxvd2luZyBIVE1MOlxuICAgKlxuICAgKiBgYGBcbiAgICogPGRpdiBtb289XCJjYXJcIiBmb289XCJ2YWx1ZVwiIGkxOG4tZm9vIFtiYXJdPVwiYmluZGluZ1wiIGkxOG4tYmFyPlxuICAgKiBgYGBcbiAgICpcbiAgICogdGhlIGdlbmVyYXRlZCBjb2RlIGlzOlxuICAgKlxuICAgKiBgYGBcbiAgICogdmFyIF9jMSA9IFsnbW9vJywgJ2NhcicsIEF0dHJpYnV0ZU1hcmtlci5JMThuLCAnZm9vJywgJ2JhciddO1xuICAgKi9cbiAgSTE4biA9IDYsXG59XG5cbi8qKlxuICogQSBjb21iaW5hdGlvbiBvZjpcbiAqIC0gQXR0cmlidXRlIG5hbWVzIGFuZCB2YWx1ZXMuXG4gKiAtIFNwZWNpYWwgbWFya2VycyBhY3RpbmcgYXMgZmxhZ3MgdG8gYWx0ZXIgYXR0cmlidXRlcyBwcm9jZXNzaW5nLlxuICogLSBQYXJzZWQgbmdQcm9qZWN0QXMgc2VsZWN0b3JzLlxuICovXG5leHBvcnQgdHlwZSBUQXR0cmlidXRlcyA9IChzdHJpbmd8QXR0cmlidXRlTWFya2VyfENzc1NlbGVjdG9yKVtdO1xuXG4vKipcbiAqIENvbnN0YW50cyB0aGF0IGFyZSBhc3NvY2lhdGVkIHdpdGggYSB2aWV3LiBJbmNsdWRlczpcbiAqIC0gQXR0cmlidXRlIGFycmF5cy5cbiAqIC0gTG9jYWwgZGVmaW5pdGlvbiBhcnJheXMuXG4gKi9cbmV4cG9ydCB0eXBlIFRDb25zdGFudHMgPSAoVEF0dHJpYnV0ZXN8c3RyaW5nKVtdO1xuXG4vKipcbiAqIEJpbmRpbmcgZGF0YSAoZmx5d2VpZ2h0KSBmb3IgYSBwYXJ0aWN1bGFyIG5vZGUgdGhhdCBpcyBzaGFyZWQgYmV0d2VlbiBhbGwgdGVtcGxhdGVzXG4gKiBvZiBhIHNwZWNpZmljIHR5cGUuXG4gKlxuICogSWYgYSBwcm9wZXJ0eSBpczpcbiAqICAgIC0gUHJvcGVydHlBbGlhc2VzOiB0aGF0IHByb3BlcnR5J3MgZGF0YSB3YXMgZ2VuZXJhdGVkIGFuZCB0aGlzIGlzIGl0XG4gKiAgICAtIE51bGw6IHRoYXQgcHJvcGVydHkncyBkYXRhIHdhcyBhbHJlYWR5IGdlbmVyYXRlZCBhbmQgbm90aGluZyB3YXMgZm91bmQuXG4gKiAgICAtIFVuZGVmaW5lZDogdGhhdCBwcm9wZXJ0eSdzIGRhdGEgaGFzIG5vdCB5ZXQgYmVlbiBnZW5lcmF0ZWRcbiAqXG4gKiBzZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ZseXdlaWdodF9wYXR0ZXJuIGZvciBtb3JlIG9uIHRoZSBGbHl3ZWlnaHQgcGF0dGVyblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFROb2RlIHtcbiAgLyoqIFRoZSB0eXBlIG9mIHRoZSBUTm9kZS4gU2VlIFROb2RlVHlwZS4gKi9cbiAgdHlwZTogVE5vZGVUeXBlO1xuXG4gIC8qKlxuICAgKiBJbmRleCBvZiB0aGUgVE5vZGUgaW4gVFZpZXcuZGF0YSBhbmQgY29ycmVzcG9uZGluZyBuYXRpdmUgZWxlbWVudCBpbiBMVmlldy5cbiAgICpcbiAgICogVGhpcyBpcyBuZWNlc3NhcnkgdG8gZ2V0IGZyb20gYW55IFROb2RlIHRvIGl0cyBjb3JyZXNwb25kaW5nIG5hdGl2ZSBlbGVtZW50IHdoZW5cbiAgICogdHJhdmVyc2luZyB0aGUgbm9kZSB0cmVlLlxuICAgKlxuICAgKiBJZiBpbmRleCBpcyAtMSwgdGhpcyBpcyBhIGR5bmFtaWNhbGx5IGNyZWF0ZWQgY29udGFpbmVyIG5vZGUgb3IgZW1iZWRkZWQgdmlldyBub2RlLlxuICAgKi9cbiAgaW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGluZGV4IG9mIHRoZSBjbG9zZXN0IGluamVjdG9yIGluIHRoaXMgbm9kZSdzIExWaWV3LlxuICAgKlxuICAgKiBJZiB0aGUgaW5kZXggPT09IC0xLCB0aGVyZSBpcyBubyBpbmplY3RvciBvbiB0aGlzIG5vZGUgb3IgYW55IGFuY2VzdG9yIG5vZGUgaW4gdGhpcyB2aWV3LlxuICAgKlxuICAgKiBJZiB0aGUgaW5kZXggIT09IC0xLCBpdCBpcyB0aGUgaW5kZXggb2YgdGhpcyBub2RlJ3MgaW5qZWN0b3IgT1IgdGhlIGluZGV4IG9mIGEgcGFyZW50IGluamVjdG9yXG4gICAqIGluIHRoZSBzYW1lIHZpZXcuIFdlIHBhc3MgdGhlIHBhcmVudCBpbmplY3RvciBpbmRleCBkb3duIHRoZSBub2RlIHRyZWUgb2YgYSB2aWV3IHNvIGl0J3NcbiAgICogcG9zc2libGUgdG8gZmluZCB0aGUgcGFyZW50IGluamVjdG9yIHdpdGhvdXQgd2Fsa2luZyBhIHBvdGVudGlhbGx5IGRlZXAgbm9kZSB0cmVlLiBJbmplY3RvclxuICAgKiBpbmRpY2VzIGFyZSBub3Qgc2V0IGFjcm9zcyB2aWV3IGJvdW5kYXJpZXMgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBjb21wb25lbnQgaG9zdHMuXG4gICAqXG4gICAqIElmIHROb2RlLmluamVjdG9ySW5kZXggPT09IHROb2RlLnBhcmVudC5pbmplY3RvckluZGV4LCB0aGVuIHRoZSBpbmRleCBiZWxvbmdzIHRvIGEgcGFyZW50XG4gICAqIGluamVjdG9yLlxuICAgKi9cbiAgaW5qZWN0b3JJbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTdG9yZXMgc3RhcnRpbmcgaW5kZXggb2YgdGhlIGRpcmVjdGl2ZXMuXG4gICAqL1xuICBkaXJlY3RpdmVTdGFydDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTdG9yZXMgZmluYWwgZXhjbHVzaXZlIGluZGV4IG9mIHRoZSBkaXJlY3RpdmVzLlxuICAgKi9cbiAgZGlyZWN0aXZlRW5kOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgbGFzdCBkaXJlY3RpdmUgd2hpY2ggaGFkIGEgc3R5bGluZyBpbnN0cnVjdGlvbi5cbiAgICpcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiB0aGlzIGlzIGAtMWAgd2hpY2ggbWVhbnMgdGhhdCBubyBgaG9zdEJpbmRpbmdzYCBzdHlsaW5nIGluc3RydWN0aW9uIGhhc1xuICAgKiBleGVjdXRlZC4gQXMgYGhvc3RCaW5kaW5nc2AgaW5zdHJ1Y3Rpb25zIGV4ZWN1dGUgdGhleSBzZXQgdGhlIHZhbHVlIHRvIHRoZSBpbmRleCBvZiB0aGVcbiAgICogYERpcmVjdGl2ZURlZmAgd2hpY2ggY29udGFpbmVkIHRoZSBsYXN0IGBob3N0QmluZGluZ3NgIHN0eWxpbmcgaW5zdHJ1Y3Rpb24uXG4gICAqXG4gICAqIFZhbGlkIHZhbHVlcyBhcmU6XG4gICAqIC0gYC0xYCBObyBgaG9zdEJpbmRpbmdzYCBpbnN0cnVjdGlvbiBoYXMgZXhlY3V0ZWQuXG4gICAqIC0gYGRpcmVjdGl2ZVN0YXJ0IDw9IGRpcmVjdGl2ZVN0eWxpbmdMYXN0IDwgZGlyZWN0aXZlRW5kYDogUG9pbnRzIHRvIHRoZSBgRGlyZWN0aXZlRGVmYCBvZiB0aGVcbiAgICogICBsYXN0IHN0eWxpbmcgaW5zdHJ1Y3Rpb24gd2hpY2ggZXhlY3V0ZWQgaW4gdGhlIGBob3N0QmluZGluZ3NgLlxuICAgKlxuICAgKiBUaGlzIGRhdGEgaXMgbmVlZGVkIHNvIHRoYXQgc3R5bGluZyBpbnN0cnVjdGlvbnMga25vdyB3aGljaCBzdGF0aWMgc3R5bGluZyBkYXRhIG5lZWRzIHRvIGJlXG4gICAqIGNvbGxlY3RlZCBmcm9tIHRoZSBgRGlyZWN0aXZlRGVmLmhvc3RBdHRyc2AuIEEgc3R5bGluZyBpbnN0cnVjdGlvbiBuZWVkcyB0byBjb2xsZWN0IGFsbCBkYXRhXG4gICAqIHNpbmNlIGxhc3Qgc3R5bGluZyBpbnN0cnVjdGlvbi5cbiAgICovXG4gIGRpcmVjdGl2ZVN0eWxpbmdMYXN0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFN0b3JlcyBpbmRleGVzIG9mIHByb3BlcnR5IGJpbmRpbmdzLiBUaGlzIGZpZWxkIGlzIG9ubHkgc2V0IGluIHRoZSBuZ0Rldk1vZGUgYW5kIGhvbGRzIGluZGV4ZXNcbiAgICogb2YgcHJvcGVydHkgYmluZGluZ3Mgc28gVGVzdEJlZCBjYW4gZ2V0IGJvdW5kIHByb3BlcnR5IG1ldGFkYXRhIGZvciBhIGdpdmVuIG5vZGUuXG4gICAqL1xuICBwcm9wZXJ0eUJpbmRpbmdzOiBudW1iZXJbXXxudWxsO1xuXG4gIC8qKlxuICAgKiBTdG9yZXMgaWYgTm9kZSBpc0NvbXBvbmVudCwgaXNQcm9qZWN0ZWQsIGhhc0NvbnRlbnRRdWVyeSwgaGFzQ2xhc3NJbnB1dCBhbmQgaGFzU3R5bGVJbnB1dCBldGMuXG4gICAqL1xuICBmbGFnczogVE5vZGVGbGFncztcblxuICAvKipcbiAgICogVGhpcyBudW1iZXIgc3RvcmVzIHR3byB2YWx1ZXMgdXNpbmcgaXRzIGJpdHM6XG4gICAqXG4gICAqIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBwcm92aWRlciBvbiB0aGF0IG5vZGUgKGZpcnN0IDE2IGJpdHMpXG4gICAqIC0gdGhlIGNvdW50IG9mIHZpZXcgcHJvdmlkZXJzIGZyb20gdGhlIGNvbXBvbmVudCBvbiB0aGlzIG5vZGUgKGxhc3QgMTYgYml0cylcbiAgICovXG4gIC8vIFRPRE8obWlza28pOiBicmVhayB0aGlzIGludG8gYWN0dWFsIHZhcnMuXG4gIHByb3ZpZGVySW5kZXhlczogVE5vZGVQcm92aWRlckluZGV4ZXM7XG5cbiAgLyoqIFRoZSB0YWcgbmFtZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLiAqL1xuICB0YWdOYW1lOiBzdHJpbmd8bnVsbDtcblxuICAvKipcbiAgICogQXR0cmlidXRlcyBhc3NvY2lhdGVkIHdpdGggYW4gZWxlbWVudC4gV2UgbmVlZCB0byBzdG9yZSBhdHRyaWJ1dGVzIHRvIHN1cHBvcnQgdmFyaW91cyB1c2UtY2FzZXNcbiAgICogKGF0dHJpYnV0ZSBpbmplY3Rpb24sIGNvbnRlbnQgcHJvamVjdGlvbiB3aXRoIHNlbGVjdG9ycywgZGlyZWN0aXZlcyBtYXRjaGluZykuXG4gICAqIEF0dHJpYnV0ZXMgYXJlIHN0b3JlZCBzdGF0aWNhbGx5IGJlY2F1c2UgcmVhZGluZyB0aGVtIGZyb20gdGhlIERPTSB3b3VsZCBiZSB3YXkgdG9vIHNsb3cgZm9yXG4gICAqIGNvbnRlbnQgcHJvamVjdGlvbiBhbmQgcXVlcmllcy5cbiAgICpcbiAgICogU2luY2UgYXR0cnMgd2lsbCBhbHdheXMgYmUgY2FsY3VsYXRlZCBmaXJzdCwgdGhleSB3aWxsIG5ldmVyIG5lZWQgdG8gYmUgbWFya2VkIHVuZGVmaW5lZCBieVxuICAgKiBvdGhlciBpbnN0cnVjdGlvbnMuXG4gICAqXG4gICAqIEZvciByZWd1bGFyIGF0dHJpYnV0ZXMgYSBuYW1lIG9mIGFuIGF0dHJpYnV0ZSBhbmQgaXRzIHZhbHVlIGFsdGVybmF0ZSBpbiB0aGUgYXJyYXkuXG4gICAqIGUuZy4gWydyb2xlJywgJ2NoZWNrYm94J11cbiAgICogVGhpcyBhcnJheSBjYW4gY29udGFpbiBmbGFncyB0aGF0IHdpbGwgaW5kaWNhdGUgXCJzcGVjaWFsIGF0dHJpYnV0ZXNcIiAoYXR0cmlidXRlcyB3aXRoXG4gICAqIG5hbWVzcGFjZXMsIGF0dHJpYnV0ZXMgZXh0cmFjdGVkIGZyb20gYmluZGluZ3MgYW5kIG91dHB1dHMpLlxuICAgKi9cbiAgYXR0cnM6IFRBdHRyaWJ1dGVzfG51bGw7XG5cbiAgLyoqXG4gICAqIFNhbWUgYXMgYFROb2RlLmF0dHJzYCBidXQgY29udGFpbnMgbWVyZ2VkIGRhdGEgYWNyb3NzIGFsbCBkaXJlY3RpdmUgaG9zdCBiaW5kaW5ncy5cbiAgICpcbiAgICogV2UgbmVlZCB0byBrZWVwIGBhdHRyc2AgYXMgdW5tZXJnZWQgc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBmb3IgYXR0cmlidXRlIHNlbGVjdG9ycy5cbiAgICogV2UgbWVyZ2UgYXR0cnMgaGVyZSBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGluIGEgcGVyZm9ybWFudCB3YXkgZm9yIGluaXRpYWwgcmVuZGVyaW5nLlxuICAgKlxuICAgKiBUaGUgYGF0dHJzYCBhcmUgbWVyZ2VkIGluIGZpcnN0IHBhc3MgaW4gZm9sbG93aW5nIG9yZGVyOlxuICAgKiAtIENvbXBvbmVudCdzIGBob3N0QXR0cnNgXG4gICAqIC0gRGlyZWN0aXZlcycgYGhvc3RBdHRyc2BcbiAgICogLSBUZW1wbGF0ZSBgVE5vZGUuYXR0cnNgIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudCBgVE5vZGVgLlxuICAgKi9cbiAgbWVyZ2VkQXR0cnM6IFRBdHRyaWJ1dGVzfG51bGw7XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIGxvY2FsIG5hbWVzIHVuZGVyIHdoaWNoIGEgZ2l2ZW4gZWxlbWVudCBpcyBleHBvcnRlZCBpbiBhIHRlbXBsYXRlIGFuZFxuICAgKiB2aXNpYmxlIHRvIHF1ZXJpZXMuIEFuIGVudHJ5IGluIHRoaXMgYXJyYXkgY2FuIGJlIGNyZWF0ZWQgZm9yIGRpZmZlcmVudCByZWFzb25zOlxuICAgKiAtIGFuIGVsZW1lbnQgaXRzZWxmIGlzIHJlZmVyZW5jZWQsIGV4LjogYDxkaXYgI2Zvbz5gXG4gICAqIC0gYSBjb21wb25lbnQgaXMgcmVmZXJlbmNlZCwgZXguOiBgPG15LWNtcHQgI2Zvbz5gXG4gICAqIC0gYSBkaXJlY3RpdmUgaXMgcmVmZXJlbmNlZCwgZXguOiBgPG15LWNtcHQgI2Zvbz1cImRpcmVjdGl2ZUV4cG9ydEFzXCI+YC5cbiAgICpcbiAgICogQSBnaXZlbiBlbGVtZW50IG1pZ2h0IGhhdmUgZGlmZmVyZW50IGxvY2FsIG5hbWVzIGFuZCB0aG9zZSBuYW1lcyBjYW4gYmUgYXNzb2NpYXRlZFxuICAgKiB3aXRoIGEgZGlyZWN0aXZlLiBXZSBzdG9yZSBsb2NhbCBuYW1lcyBhdCBldmVuIGluZGV4ZXMgd2hpbGUgb2RkIGluZGV4ZXMgYXJlIHJlc2VydmVkXG4gICAqIGZvciBkaXJlY3RpdmUgaW5kZXggaW4gYSB2aWV3IChvciBgLTFgIGlmIHRoZXJlIGlzIG5vIGFzc29jaWF0ZWQgZGlyZWN0aXZlKS5cbiAgICpcbiAgICogU29tZSBleGFtcGxlczpcbiAgICogLSBgPGRpdiAjZm9vPmAgPT4gYFtcImZvb1wiLCAtMV1gXG4gICAqIC0gYDxteS1jbXB0ICNmb28+YCA9PiBgW1wiZm9vXCIsIG15Q21wdElkeF1gXG4gICAqIC0gYDxteS1jbXB0ICNmb28gI2Jhcj1cImRpcmVjdGl2ZUV4cG9ydEFzXCI+YCA9PiBgW1wiZm9vXCIsIG15Q21wdElkeCwgXCJiYXJcIiwgZGlyZWN0aXZlSWR4XWBcbiAgICogLSBgPGRpdiAjZm9vICNiYXI9XCJkaXJlY3RpdmVFeHBvcnRBc1wiPmAgPT4gYFtcImZvb1wiLCAtMSwgXCJiYXJcIiwgZGlyZWN0aXZlSWR4XWBcbiAgICovXG4gIGxvY2FsTmFtZXM6IChzdHJpbmd8bnVtYmVyKVtdfG51bGw7XG5cbiAgLyoqIEluZm9ybWF0aW9uIGFib3V0IGlucHV0IHByb3BlcnRpZXMgdGhhdCBuZWVkIHRvIGJlIHNldCBvbmNlIGZyb20gYXR0cmlidXRlIGRhdGEuICovXG4gIGluaXRpYWxJbnB1dHM6IEluaXRpYWxJbnB1dERhdGF8bnVsbHx1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIElucHV0IGRhdGEgZm9yIGFsbCBkaXJlY3RpdmVzIG9uIHRoaXMgbm9kZS4gYG51bGxgIG1lYW5zIHRoYXQgdGhlcmUgYXJlIG5vIGRpcmVjdGl2ZXMgd2l0aFxuICAgKiBpbnB1dHMgb24gdGhpcyBub2RlLlxuICAgKi9cbiAgaW5wdXRzOiBQcm9wZXJ0eUFsaWFzZXN8bnVsbDtcblxuICAvKipcbiAgICogT3V0cHV0IGRhdGEgZm9yIGFsbCBkaXJlY3RpdmVzIG9uIHRoaXMgbm9kZS4gYG51bGxgIG1lYW5zIHRoYXQgdGhlcmUgYXJlIG5vIGRpcmVjdGl2ZXMgd2l0aFxuICAgKiBvdXRwdXRzIG9uIHRoaXMgbm9kZS5cbiAgICovXG4gIG91dHB1dHM6IFByb3BlcnR5QWxpYXNlc3xudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgVFZpZXcgb3IgVFZpZXdzIGF0dGFjaGVkIHRvIHRoaXMgbm9kZS5cbiAgICpcbiAgICogSWYgdGhpcyBUTm9kZSBjb3JyZXNwb25kcyB0byBhbiBMQ29udGFpbmVyIHdpdGggaW5saW5lIHZpZXdzLCB0aGUgY29udGFpbmVyIHdpbGxcbiAgICogbmVlZCB0byBzdG9yZSBzZXBhcmF0ZSBzdGF0aWMgZGF0YSBmb3IgZWFjaCBvZiBpdHMgdmlldyBibG9ja3MgKFRWaWV3W10pLiBPdGhlcndpc2UsXG4gICAqIG5vZGVzIGluIGlubGluZSB2aWV3cyB3aXRoIHRoZSBzYW1lIGluZGV4IGFzIG5vZGVzIGluIHRoZWlyIHBhcmVudCB2aWV3cyB3aWxsIG92ZXJ3cml0ZVxuICAgKiBlYWNoIG90aGVyLCBhcyB0aGV5IGFyZSBpbiB0aGUgc2FtZSB0ZW1wbGF0ZS5cbiAgICpcbiAgICogRWFjaCBpbmRleCBpbiB0aGlzIGFycmF5IGNvcnJlc3BvbmRzIHRvIHRoZSBzdGF0aWMgZGF0YSBmb3IgYSBjZXJ0YWluXG4gICAqIHZpZXcuIFNvIGlmIHlvdSBoYWQgVigwKSBhbmQgVigxKSBpbiBhIGNvbnRhaW5lciwgeW91IG1pZ2h0IGhhdmU6XG4gICAqXG4gICAqIFtcbiAgICogICBbe3RhZ05hbWU6ICdkaXYnLCBhdHRyczogLi4ufSwgbnVsbF0sICAgICAvLyBWKDApIFRWaWV3XG4gICAqICAgW3t0YWdOYW1lOiAnYnV0dG9uJywgYXR0cnMgLi4ufSwgbnVsbF0gICAgLy8gVigxKSBUVmlld1xuICAgKlxuICAgKiBJZiB0aGlzIFROb2RlIGNvcnJlc3BvbmRzIHRvIGFuIExDb250YWluZXIgd2l0aCBhIHRlbXBsYXRlIChlLmcuIHN0cnVjdHVyYWxcbiAgICogZGlyZWN0aXZlKSwgdGhlIHRlbXBsYXRlJ3MgVFZpZXcgd2lsbCBiZSBzdG9yZWQgaGVyZS5cbiAgICpcbiAgICogSWYgdGhpcyBUTm9kZSBjb3JyZXNwb25kcyB0byBhbiBlbGVtZW50LCB0Vmlld3Mgd2lsbCBiZSBudWxsIC5cbiAgICovXG4gIHRWaWV3czogVFZpZXd8VFZpZXdbXXxudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgbmV4dCBzaWJsaW5nIG5vZGUuIE5lY2Vzc2FyeSBzbyB3ZSBjYW4gcHJvcGFnYXRlIHRocm91Z2ggdGhlIHJvb3Qgbm9kZXMgb2YgYSB2aWV3XG4gICAqIHRvIGluc2VydCB0aGVtIG9yIHJlbW92ZSB0aGVtIGZyb20gdGhlIERPTS5cbiAgICovXG4gIG5leHQ6IFROb2RlfG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBuZXh0IHByb2plY3RlZCBzaWJsaW5nLiBTaW5jZSBpbiBBbmd1bGFyIGNvbnRlbnQgcHJvamVjdGlvbiB3b3JrcyBvbiB0aGUgbm9kZS1ieS1ub2RlIGJhc2lzXG4gICAqIHRoZSBhY3Qgb2YgcHJvamVjdGluZyBub2RlcyBtaWdodCBjaGFuZ2Ugbm9kZXMgcmVsYXRpb25zaGlwIGF0IHRoZSBpbnNlcnRpb24gcG9pbnQgKHRhcmdldFxuICAgKiB2aWV3KS4gQXQgdGhlIHNhbWUgdGltZSB3ZSBuZWVkIHRvIGtlZXAgaW5pdGlhbCByZWxhdGlvbnNoaXAgYmV0d2VlbiBub2RlcyBhcyBleHByZXNzZWQgaW5cbiAgICogY29udGVudCB2aWV3LlxuICAgKi9cbiAgcHJvamVjdGlvbk5leHQ6IFROb2RlfG51bGw7XG5cbiAgLyoqXG4gICAqIEZpcnN0IGNoaWxkIG9mIHRoZSBjdXJyZW50IG5vZGUuXG4gICAqXG4gICAqIEZvciBjb21wb25lbnQgbm9kZXMsIHRoZSBjaGlsZCB3aWxsIGFsd2F5cyBiZSBhIENvbnRlbnRDaGlsZCAoaW4gc2FtZSB2aWV3KS5cbiAgICogRm9yIGVtYmVkZGVkIHZpZXcgbm9kZXMsIHRoZSBjaGlsZCB3aWxsIGJlIGluIHRoZWlyIGNoaWxkIHZpZXcuXG4gICAqL1xuICBjaGlsZDogVE5vZGV8bnVsbDtcblxuICAvKipcbiAgICogUGFyZW50IG5vZGUgKGluIHRoZSBzYW1lIHZpZXcgb25seSkuXG4gICAqXG4gICAqIFdlIG5lZWQgYSByZWZlcmVuY2UgdG8gYSBub2RlJ3MgcGFyZW50IHNvIHdlIGNhbiBhcHBlbmQgdGhlIG5vZGUgdG8gaXRzIHBhcmVudCdzIG5hdGl2ZVxuICAgKiBlbGVtZW50IGF0IHRoZSBhcHByb3ByaWF0ZSB0aW1lLlxuICAgKlxuICAgKiBJZiB0aGUgcGFyZW50IHdvdWxkIGJlIGluIGEgZGlmZmVyZW50IHZpZXcgKGUuZy4gY29tcG9uZW50IGhvc3QpLCB0aGlzIHByb3BlcnR5IHdpbGwgYmUgbnVsbC5cbiAgICogSXQncyBpbXBvcnRhbnQgdGhhdCB3ZSBkb24ndCB0cnkgdG8gY3Jvc3MgY29tcG9uZW50IGJvdW5kYXJpZXMgd2hlbiByZXRyaWV2aW5nIHRoZSBwYXJlbnRcbiAgICogYmVjYXVzZSB0aGUgcGFyZW50IHdpbGwgY2hhbmdlIChlLmcuIGluZGV4LCBhdHRycykgZGVwZW5kaW5nIG9uIHdoZXJlIHRoZSBjb21wb25lbnQgd2FzXG4gICAqIHVzZWQgKGFuZCB0aHVzIHNob3VsZG4ndCBiZSBzdG9yZWQgb24gVE5vZGUpLiBJbiB0aGVzZSBjYXNlcywgd2UgcmV0cmlldmUgdGhlIHBhcmVudCB0aHJvdWdoXG4gICAqIExWaWV3Lm5vZGUgaW5zdGVhZCAod2hpY2ggd2lsbCBiZSBpbnN0YW5jZS1zcGVjaWZpYykuXG4gICAqXG4gICAqIElmIHRoaXMgaXMgYW4gaW5saW5lIHZpZXcgbm9kZSAoViksIHRoZSBwYXJlbnQgd2lsbCBiZSBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgcGFyZW50OiBURWxlbWVudE5vZGV8VENvbnRhaW5lck5vZGV8bnVsbDtcblxuICAvKipcbiAgICogTGlzdCBvZiBwcm9qZWN0ZWQgVE5vZGVzIGZvciBhIGdpdmVuIGNvbXBvbmVudCBob3N0IGVsZW1lbnQgT1IgaW5kZXggaW50byB0aGUgc2FpZCBub2Rlcy5cbiAgICpcbiAgICogRm9yIGVhc2llciBkaXNjdXNzaW9uIGFzc3VtZSB0aGlzIGV4YW1wbGU6XG4gICAqIGA8cGFyZW50PmAncyB2aWV3IGRlZmluaXRpb246XG4gICAqIGBgYFxuICAgKiA8Y2hpbGQgaWQ9XCJjMVwiPmNvbnRlbnQxPC9jaGlsZD5cbiAgICogPGNoaWxkIGlkPVwiYzJcIj48c3Bhbj5jb250ZW50Mjwvc3Bhbj48L2NoaWxkPlxuICAgKiBgYGBcbiAgICogYDxjaGlsZD5gJ3MgdmlldyBkZWZpbml0aW9uOlxuICAgKiBgYGBcbiAgICogPG5nLWNvbnRlbnQgaWQ9XCJjb250MVwiPjwvbmctY29udGVudD5cbiAgICogYGBgXG4gICAqXG4gICAqIElmIGBBcnJheS5pc0FycmF5KHByb2plY3Rpb24pYCB0aGVuIGBUTm9kZWAgaXMgYSBob3N0IGVsZW1lbnQ6XG4gICAqIC0gYHByb2plY3Rpb25gIHN0b3JlcyB0aGUgY29udGVudCBub2RlcyB3aGljaCBhcmUgdG8gYmUgcHJvamVjdGVkLlxuICAgKiAgICAtIFRoZSBub2RlcyByZXByZXNlbnQgY2F0ZWdvcmllcyBkZWZpbmVkIGJ5IHRoZSBzZWxlY3RvcjogRm9yIGV4YW1wbGU6XG4gICAqICAgICAgYDxuZy1jb250ZW50Lz48bmctY29udGVudCBzZWxlY3Q9XCJhYmNcIi8+YCB3b3VsZCByZXByZXNlbnQgdGhlIGhlYWRzIGZvciBgPG5nLWNvbnRlbnQvPmBcbiAgICogICAgICBhbmQgYDxuZy1jb250ZW50IHNlbGVjdD1cImFiY1wiLz5gIHJlc3BlY3RpdmVseS5cbiAgICogICAgLSBUaGUgbm9kZXMgd2Ugc3RvcmUgaW4gYHByb2plY3Rpb25gIGFyZSBoZWFkcyBvbmx5LCB3ZSB1c2VkIGAubmV4dGAgdG8gZ2V0IHRoZWlyXG4gICAqICAgICAgc2libGluZ3MuXG4gICAqICAgIC0gVGhlIG5vZGVzIGAubmV4dGAgaXMgc29ydGVkL3Jld3JpdHRlbiBhcyBwYXJ0IG9mIHRoZSBwcm9qZWN0aW9uIHNldHVwLlxuICAgKiAgICAtIGBwcm9qZWN0aW9uYCBzaXplIGlzIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgcHJvamVjdGlvbnMgYDxuZy1jb250ZW50PmAuIFRoZSBzaXplIG9mXG4gICAqICAgICAgYGMxYCB3aWxsIGJlIGAxYCBiZWNhdXNlIGA8Y2hpbGQ+YCBoYXMgb25seSBvbmUgYDxuZy1jb250ZW50PmAuXG4gICAqIC0gd2Ugc3RvcmUgYHByb2plY3Rpb25gIHdpdGggdGhlIGhvc3QgKGBjMWAsIGBjMmApIHJhdGhlciB0aGFuIHRoZSBgPG5nLWNvbnRlbnQ+YCAoYGNvbnQxYClcbiAgICogICBiZWNhdXNlIHRoZSBzYW1lIGNvbXBvbmVudCAoYDxjaGlsZD5gKSBjYW4gYmUgdXNlZCBpbiBtdWx0aXBsZSBsb2NhdGlvbnMgKGBjMWAsIGBjMmApIGFuZCBhc1xuICAgKiAgIGEgcmVzdWx0IGhhdmUgZGlmZmVyZW50IHNldCBvZiBub2RlcyB0byBwcm9qZWN0LlxuICAgKiAtIHdpdGhvdXQgYHByb2plY3Rpb25gIGl0IHdvdWxkIGJlIGRpZmZpY3VsdCB0byBlZmZpY2llbnRseSB0cmF2ZXJzZSBub2RlcyB0byBiZSBwcm9qZWN0ZWQuXG4gICAqXG4gICAqIElmIGB0eXBlb2YgcHJvamVjdGlvbiA9PSAnbnVtYmVyJ2AgdGhlbiBgVE5vZGVgIGlzIGEgYDxuZy1jb250ZW50PmAgZWxlbWVudDpcbiAgICogLSBgcHJvamVjdGlvbmAgaXMgYW4gaW5kZXggb2YgdGhlIGhvc3QncyBgcHJvamVjdGlvbmBOb2Rlcy5cbiAgICogICAtIFRoaXMgd291bGQgcmV0dXJuIHRoZSBmaXJzdCBoZWFkIG5vZGUgdG8gcHJvamVjdDpcbiAgICogICAgIGBnZXRIb3N0KGN1cnJlbnRUTm9kZSkucHJvamVjdGlvbltjdXJyZW50VE5vZGUucHJvamVjdGlvbl1gLlxuICAgKiAtIFdoZW4gcHJvamVjdGluZyBub2RlcyB0aGUgcGFyZW50IG5vZGUgcmV0cmlldmVkIG1heSBiZSBhIGA8bmctY29udGVudD5gIG5vZGUsIGluIHdoaWNoIGNhc2VcbiAgICogICB0aGUgcHJvY2VzcyBpcyByZWN1cnNpdmUgaW4gbmF0dXJlLlxuICAgKlxuICAgKiBJZiBgcHJvamVjdGlvbmAgaXMgb2YgdHlwZSBgUk5vZGVbXVtdYCB0aGFuIHdlIGhhdmUgYSBjb2xsZWN0aW9uIG9mIG5hdGl2ZSBub2RlcyBwYXNzZWQgYXNcbiAgICogcHJvamVjdGFibGUgbm9kZXMgZHVyaW5nIGR5bmFtaWMgY29tcG9uZW50IGNyZWF0aW9uLlxuICAgKi9cbiAgcHJvamVjdGlvbjogKFROb2RlfFJOb2RlW10pW118bnVtYmVyfG51bGw7XG5cbiAgLyoqXG4gICAqIEEgY29sbGVjdGlvbiBvZiBhbGwgYHN0eWxlYCBzdGF0aWMgdmFsdWVzIGZvciBhbiBlbGVtZW50IChpbmNsdWRpbmcgZnJvbSBob3N0KS5cbiAgICpcbiAgICogVGhpcyBmaWVsZCB3aWxsIGJlIHBvcHVsYXRlZCBpZiBhbmQgd2hlbjpcbiAgICpcbiAgICogLSBUaGVyZSBhcmUgb25lIG9yIG1vcmUgaW5pdGlhbCBgc3R5bGVgcyBvbiBhbiBlbGVtZW50IChlLmcuIGA8ZGl2IHN0eWxlPVwid2lkdGg6MjAwcHg7XCI+YClcbiAgICogLSBUaGVyZSBhcmUgb25lIG9yIG1vcmUgaW5pdGlhbCBgc3R5bGVgcyBvbiBhIGRpcmVjdGl2ZS9jb21wb25lbnQgaG9zdFxuICAgKiAgIChlLmcuIGBARGlyZWN0aXZlKHtob3N0OiB7c3R5bGU6IFwid2lkdGg6MjAwcHg7XCIgfSB9YClcbiAgICovXG4gIHN0eWxlczogc3RyaW5nfG51bGw7XG5cblxuICAvKipcbiAgICogQSBjb2xsZWN0aW9uIG9mIGFsbCBgc3R5bGVgIHN0YXRpYyB2YWx1ZXMgZm9yIGFuIGVsZW1lbnQgZXhjbHVkaW5nIGhvc3Qgc291cmNlcy5cbiAgICpcbiAgICogUG9wdWxhdGVkIHdoZW4gdGhlcmUgYXJlIG9uZSBvciBtb3JlIGluaXRpYWwgYHN0eWxlYHMgb24gYW4gZWxlbWVudFxuICAgKiAoZS5nLiBgPGRpdiBzdHlsZT1cIndpZHRoOjIwMHB4O1wiPmApXG4gICAqIE11c3QgYmUgc3RvcmVkIHNlcGFyYXRlbHkgZnJvbSBgdE5vZGUuc3R5bGVzYCB0byBmYWNpbGl0YXRlIHNldHRpbmcgZGlyZWN0aXZlXG4gICAqIGlucHV0cyB0aGF0IHNoYWRvdyB0aGUgYHN0eWxlYCBwcm9wZXJ0eS4gSWYgd2UgdXNlZCBgdE5vZGUuc3R5bGVzYCBhcyBpcyBmb3Igc2hhZG93ZWQgaW5wdXRzLFxuICAgKiB3ZSB3b3VsZCBmZWVkIGhvc3Qgc3R5bGVzIGJhY2sgaW50byBkaXJlY3RpdmVzIGFzIFwiaW5wdXRzXCIuIElmIHdlIHVzZWQgYHROb2RlLmF0dHJzYCwgd2Ugd291bGRcbiAgICogaGF2ZSB0byBjb25jYXRlbmF0ZSB0aGUgYXR0cmlidXRlcyBvbiBldmVyeSB0ZW1wbGF0ZSBwYXNzLiBJbnN0ZWFkLCB3ZSBwcm9jZXNzIG9uY2Ugb24gZmlyc3RcbiAgICogY3JlYXRlIHBhc3MgYW5kIHN0b3JlIGhlcmUuXG4gICAqL1xuICBzdHlsZXNXaXRob3V0SG9zdDogc3RyaW5nfG51bGw7XG5cbiAgLyoqXG4gICAqIEEgYEtleVZhbHVlQXJyYXlgIHZlcnNpb24gb2YgcmVzaWR1YWwgYHN0eWxlc2AuXG4gICAqXG4gICAqIFdoZW4gdGhlcmUgYXJlIHN0eWxpbmcgaW5zdHJ1Y3Rpb25zIHRoYW4gZWFjaCBpbnN0cnVjdGlvbiBzdG9yZXMgdGhlIHN0YXRpYyBzdHlsaW5nXG4gICAqIHdoaWNoIGlzIG9mIGxvd2VyIHByaW9yaXR5IHRoYW4gaXRzZWxmLiBUaGlzIG1lYW5zIHRoYXQgdGhlcmUgbWF5IGJlIGEgaGlnaGVyIHByaW9yaXR5IHN0eWxpbmdcbiAgICogdGhhbiB0aGUgaW5zdHJ1Y3Rpb24uXG4gICAqXG4gICAqIEltYWdpbmU6XG4gICAqIGBgYFxuICAgKiA8ZGl2IHN0eWxlPVwiY29sb3I6IGhpZ2hlc3Q7XCIgbXktZGlyPlxuICAgKlxuICAgKiBARGlyZWN0aXZlKHtcbiAgICogICBob3N0OiB7XG4gICAqICAgICBzdHlsZTogJ2NvbG9yOiBsb3dlc3Q7ICcsXG4gICAqICAgICAnW3N0eWxlcy5jb2xvcl0nOiAnZXhwJyAvLyDJtcm1c3R5bGVQcm9wKCdjb2xvcicsIGN0eC5leHApO1xuICAgKiAgIH1cbiAgICogfSlcbiAgICogYGBgXG4gICAqXG4gICAqIEluIHRoZSBhYm92ZSBjYXNlOlxuICAgKiAtIGBjb2xvcjogbG93ZXN0YCBpcyBzdG9yZWQgd2l0aCBgybXJtXN0eWxlUHJvcCgnY29sb3InLCBjdHguZXhwKTtgIGluc3RydWN0aW9uXG4gICAqIC0gIGBjb2xvcjogaGlnaGVzdGAgaXMgdGhlIHJlc2lkdWFsIGFuZCBpcyBzdG9yZWQgaGVyZS5cbiAgICpcbiAgICogLSBgdW5kZWZpbmVkJzogbm90IGluaXRpYWxpemVkLlxuICAgKiAtIGBudWxsYDogaW5pdGlhbGl6ZWQgYnV0IGBzdHlsZXNgIGlzIGBudWxsYFxuICAgKiAtIGBLZXlWYWx1ZUFycmF5YDogcGFyc2VkIHZlcnNpb24gb2YgYHN0eWxlc2AuXG4gICAqL1xuICByZXNpZHVhbFN0eWxlczogS2V5VmFsdWVBcnJheTxhbnk+fHVuZGVmaW5lZHxudWxsO1xuXG4gIC8qKlxuICAgKiBBIGNvbGxlY3Rpb24gb2YgYWxsIGNsYXNzIHN0YXRpYyB2YWx1ZXMgZm9yIGFuIGVsZW1lbnQgKGluY2x1ZGluZyBmcm9tIGhvc3QpLlxuICAgKlxuICAgKiBUaGlzIGZpZWxkIHdpbGwgYmUgcG9wdWxhdGVkIGlmIGFuZCB3aGVuOlxuICAgKlxuICAgKiAtIFRoZXJlIGFyZSBvbmUgb3IgbW9yZSBpbml0aWFsIGNsYXNzZXMgb24gYW4gZWxlbWVudCAoZS5nLiBgPGRpdiBjbGFzcz1cIm9uZSB0d28gdGhyZWVcIj5gKVxuICAgKiAtIFRoZXJlIGFyZSBvbmUgb3IgbW9yZSBpbml0aWFsIGNsYXNzZXMgb24gYW4gZGlyZWN0aXZlL2NvbXBvbmVudCBob3N0XG4gICAqICAgKGUuZy4gYEBEaXJlY3RpdmUoe2hvc3Q6IHtjbGFzczogXCJTT01FX0NMQVNTXCIgfSB9YClcbiAgICovXG4gIGNsYXNzZXM6IHN0cmluZ3xudWxsO1xuXG4gIC8qKlxuICAgKiBBIGNvbGxlY3Rpb24gb2YgYWxsIGNsYXNzIHN0YXRpYyB2YWx1ZXMgZm9yIGFuIGVsZW1lbnQgZXhjbHVkaW5nIGhvc3Qgc291cmNlcy5cbiAgICpcbiAgICogUG9wdWxhdGVkIHdoZW4gdGhlcmUgYXJlIG9uZSBvciBtb3JlIGluaXRpYWwgY2xhc3NlcyBvbiBhbiBlbGVtZW50XG4gICAqIChlLmcuIGA8ZGl2IGNsYXNzPVwiU09NRV9DTEFTU1wiPmApXG4gICAqIE11c3QgYmUgc3RvcmVkIHNlcGFyYXRlbHkgZnJvbSBgdE5vZGUuY2xhc3Nlc2AgdG8gZmFjaWxpdGF0ZSBzZXR0aW5nIGRpcmVjdGl2ZVxuICAgKiBpbnB1dHMgdGhhdCBzaGFkb3cgdGhlIGBjbGFzc2AgcHJvcGVydHkuIElmIHdlIHVzZWQgYHROb2RlLmNsYXNzZXNgIGFzIGlzIGZvciBzaGFkb3dlZCBpbnB1dHMsXG4gICAqIHdlIHdvdWxkIGZlZWQgaG9zdCBjbGFzc2VzIGJhY2sgaW50byBkaXJlY3RpdmVzIGFzIFwiaW5wdXRzXCIuIElmIHdlIHVzZWQgYHROb2RlLmF0dHJzYCwgd2Ugd291bGRcbiAgICogaGF2ZSB0byBjb25jYXRlbmF0ZSB0aGUgYXR0cmlidXRlcyBvbiBldmVyeSB0ZW1wbGF0ZSBwYXNzLiBJbnN0ZWFkLCB3ZSBwcm9jZXNzIG9uY2Ugb24gZmlyc3RcbiAgICogY3JlYXRlIHBhc3MgYW5kIHN0b3JlIGhlcmUuXG4gICAqL1xuICBjbGFzc2VzV2l0aG91dEhvc3Q6IHN0cmluZ3xudWxsO1xuXG4gIC8qKlxuICAgKiBBIGBLZXlWYWx1ZUFycmF5YCB2ZXJzaW9uIG9mIHJlc2lkdWFsIGBjbGFzc2VzYC5cbiAgICpcbiAgICogU2FtZSBhcyBgVE5vZGUucmVzaWR1YWxTdHlsZXNgIGJ1dCBmb3IgY2xhc3Nlcy5cbiAgICpcbiAgICogLSBgdW5kZWZpbmVkJzogbm90IGluaXRpYWxpemVkLlxuICAgKiAtIGBudWxsYDogaW5pdGlhbGl6ZWQgYnV0IGBjbGFzc2VzYCBpcyBgbnVsbGBcbiAgICogLSBgS2V5VmFsdWVBcnJheWA6IHBhcnNlZCB2ZXJzaW9uIG9mIGBjbGFzc2VzYC5cbiAgICovXG4gIHJlc2lkdWFsQ2xhc3NlczogS2V5VmFsdWVBcnJheTxhbnk+fHVuZGVmaW5lZHxudWxsO1xuXG4gIC8qKlxuICAgKiBTdG9yZXMgdGhlIGhlYWQvdGFpbCBpbmRleCBvZiB0aGUgY2xhc3MgYmluZGluZ3MuXG4gICAqXG4gICAqIC0gSWYgbm8gYmluZGluZ3MsIHRoZSBoZWFkIGFuZCB0YWlsIHdpbGwgYm90aCBiZSAwLlxuICAgKiAtIElmIHRoZXJlIGFyZSB0ZW1wbGF0ZSBiaW5kaW5ncywgc3RvcmVzIHRoZSBoZWFkL3RhaWwgb2YgdGhlIGNsYXNzIGJpbmRpbmdzIGluIHRoZSB0ZW1wbGF0ZS5cbiAgICogLSBJZiBubyB0ZW1wbGF0ZSBiaW5kaW5ncyBidXQgdGhlcmUgYXJlIGhvc3QgYmluZGluZ3MsIHRoZSBoZWFkIHZhbHVlIHdpbGwgcG9pbnQgdG8gdGhlIGxhc3RcbiAgICogICBob3N0IGJpbmRpbmcgZm9yIFwiY2xhc3NcIiAobm90IHRoZSBoZWFkIG9mIHRoZSBsaW5rZWQgbGlzdCksIHRhaWwgd2lsbCBiZSAwLlxuICAgKlxuICAgKiBTZWU6IGBzdHlsZV9iaW5kaW5nX2xpc3QudHNgIGZvciBkZXRhaWxzLlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWQgYnkgYGluc2VydFRTdHlsaW5nQmluZGluZ2AgdG8ga25vdyB3aGVyZSB0aGUgbmV4dCBzdHlsaW5nIGJpbmRpbmcgc2hvdWxkIGJlXG4gICAqIGluc2VydGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgc29ydGVkIGluIHByaW9yaXR5IG9yZGVyLlxuICAgKi9cbiAgY2xhc3NCaW5kaW5nczogVFN0eWxpbmdSYW5nZTtcblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBoZWFkL3RhaWwgaW5kZXggb2YgdGhlIGNsYXNzIGJpbmRpbmdzLlxuICAgKlxuICAgKiAtIElmIG5vIGJpbmRpbmdzLCB0aGUgaGVhZCBhbmQgdGFpbCB3aWxsIGJvdGggYmUgMC5cbiAgICogLSBJZiB0aGVyZSBhcmUgdGVtcGxhdGUgYmluZGluZ3MsIHN0b3JlcyB0aGUgaGVhZC90YWlsIG9mIHRoZSBzdHlsZSBiaW5kaW5ncyBpbiB0aGUgdGVtcGxhdGUuXG4gICAqIC0gSWYgbm8gdGVtcGxhdGUgYmluZGluZ3MgYnV0IHRoZXJlIGFyZSBob3N0IGJpbmRpbmdzLCB0aGUgaGVhZCB2YWx1ZSB3aWxsIHBvaW50IHRvIHRoZSBsYXN0XG4gICAqICAgaG9zdCBiaW5kaW5nIGZvciBcInN0eWxlXCIgKG5vdCB0aGUgaGVhZCBvZiB0aGUgbGlua2VkIGxpc3QpLCB0YWlsIHdpbGwgYmUgMC5cbiAgICpcbiAgICogU2VlOiBgc3R5bGVfYmluZGluZ19saXN0LnRzYCBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VkIGJ5IGBpbnNlcnRUU3R5bGluZ0JpbmRpbmdgIHRvIGtub3cgd2hlcmUgdGhlIG5leHQgc3R5bGluZyBiaW5kaW5nIHNob3VsZCBiZVxuICAgKiBpbnNlcnRlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHNvcnRlZCBpbiBwcmlvcml0eSBvcmRlci5cbiAgICovXG4gIHN0eWxlQmluZGluZ3M6IFRTdHlsaW5nUmFuZ2U7XG59XG5cbi8qKiBTdGF0aWMgZGF0YSBmb3IgYW4gZWxlbWVudCAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgVEVsZW1lbnROb2RlIGV4dGVuZHMgVE5vZGUge1xuICAvKiogSW5kZXggaW4gdGhlIGRhdGFbXSBhcnJheSAqL1xuICBpbmRleDogbnVtYmVyO1xuICBjaGlsZDogVEVsZW1lbnROb2RlfFRUZXh0Tm9kZXxURWxlbWVudENvbnRhaW5lck5vZGV8VENvbnRhaW5lck5vZGV8VFByb2plY3Rpb25Ob2RlfG51bGw7XG4gIC8qKlxuICAgKiBFbGVtZW50IG5vZGVzIHdpbGwgaGF2ZSBwYXJlbnRzIHVubGVzcyB0aGV5IGFyZSB0aGUgZmlyc3Qgbm9kZSBvZiBhIGNvbXBvbmVudCBvclxuICAgKiBlbWJlZGRlZCB2aWV3ICh3aGljaCBtZWFucyB0aGVpciBwYXJlbnQgaXMgaW4gYSBkaWZmZXJlbnQgdmlldyBhbmQgbXVzdCBiZVxuICAgKiByZXRyaWV2ZWQgdXNpbmcgdmlld0RhdGFbSE9TVF9OT0RFXSkuXG4gICAqL1xuICBwYXJlbnQ6IFRFbGVtZW50Tm9kZXxURWxlbWVudENvbnRhaW5lck5vZGV8bnVsbDtcbiAgdFZpZXdzOiBudWxsO1xuXG4gIC8qKlxuICAgKiBJZiB0aGlzIGlzIGEgY29tcG9uZW50IFROb2RlIHdpdGggcHJvamVjdGlvbiwgdGhpcyB3aWxsIGJlIGFuIGFycmF5IG9mIHByb2plY3RlZFxuICAgKiBUTm9kZXMgb3IgbmF0aXZlIG5vZGVzIChzZWUgVE5vZGUucHJvamVjdGlvbiBmb3IgbW9yZSBpbmZvKS4gSWYgaXQncyBhIHJlZ3VsYXIgZWxlbWVudCBub2RlIG9yXG4gICAqIGEgY29tcG9uZW50IHdpdGhvdXQgcHJvamVjdGlvbiwgaXQgd2lsbCBiZSBudWxsLlxuICAgKi9cbiAgcHJvamVjdGlvbjogKFROb2RlfFJOb2RlW10pW118bnVsbDtcbn1cblxuLyoqIFN0YXRpYyBkYXRhIGZvciBhIHRleHQgbm9kZSAqL1xuZXhwb3J0IGludGVyZmFjZSBUVGV4dE5vZGUgZXh0ZW5kcyBUTm9kZSB7XG4gIC8qKiBJbmRleCBpbiB0aGUgZGF0YVtdIGFycmF5ICovXG4gIGluZGV4OiBudW1iZXI7XG4gIGNoaWxkOiBudWxsO1xuICAvKipcbiAgICogVGV4dCBub2RlcyB3aWxsIGhhdmUgcGFyZW50cyB1bmxlc3MgdGhleSBhcmUgdGhlIGZpcnN0IG5vZGUgb2YgYSBjb21wb25lbnQgb3JcbiAgICogZW1iZWRkZWQgdmlldyAod2hpY2ggbWVhbnMgdGhlaXIgcGFyZW50IGlzIGluIGEgZGlmZmVyZW50IHZpZXcgYW5kIG11c3QgYmVcbiAgICogcmV0cmlldmVkIHVzaW5nIExWaWV3Lm5vZGUpLlxuICAgKi9cbiAgcGFyZW50OiBURWxlbWVudE5vZGV8VEVsZW1lbnRDb250YWluZXJOb2RlfG51bGw7XG4gIHRWaWV3czogbnVsbDtcbiAgcHJvamVjdGlvbjogbnVsbDtcbn1cblxuLyoqIFN0YXRpYyBkYXRhIGZvciBhbiBMQ29udGFpbmVyICovXG5leHBvcnQgaW50ZXJmYWNlIFRDb250YWluZXJOb2RlIGV4dGVuZHMgVE5vZGUge1xuICAvKipcbiAgICogSW5kZXggaW4gdGhlIGRhdGFbXSBhcnJheS5cbiAgICpcbiAgICogSWYgaXQncyAtMSwgdGhpcyBpcyBhIGR5bmFtaWNhbGx5IGNyZWF0ZWQgY29udGFpbmVyIG5vZGUgdGhhdCBpc24ndCBzdG9yZWQgaW5cbiAgICogZGF0YVtdIChlLmcuIHdoZW4geW91IGluamVjdCBWaWV3Q29udGFpbmVyUmVmKSAuXG4gICAqL1xuICBpbmRleDogbnVtYmVyO1xuICBjaGlsZDogbnVsbDtcblxuICAvKipcbiAgICogQ29udGFpbmVyIG5vZGVzIHdpbGwgaGF2ZSBwYXJlbnRzIHVubGVzczpcbiAgICpcbiAgICogLSBUaGV5IGFyZSB0aGUgZmlyc3Qgbm9kZSBvZiBhIGNvbXBvbmVudCBvciBlbWJlZGRlZCB2aWV3XG4gICAqIC0gVGhleSBhcmUgZHluYW1pY2FsbHkgY3JlYXRlZFxuICAgKi9cbiAgcGFyZW50OiBURWxlbWVudE5vZGV8VEVsZW1lbnRDb250YWluZXJOb2RlfG51bGw7XG4gIHRWaWV3czogVFZpZXd8VFZpZXdbXXxudWxsO1xuICBwcm9qZWN0aW9uOiBudWxsO1xufVxuXG4vKiogU3RhdGljIGRhdGEgZm9yIGFuIDxuZy1jb250YWluZXI+ICovXG5leHBvcnQgaW50ZXJmYWNlIFRFbGVtZW50Q29udGFpbmVyTm9kZSBleHRlbmRzIFROb2RlIHtcbiAgLyoqIEluZGV4IGluIHRoZSBMVmlld1tdIGFycmF5LiAqL1xuICBpbmRleDogbnVtYmVyO1xuICBjaGlsZDogVEVsZW1lbnROb2RlfFRUZXh0Tm9kZXxUQ29udGFpbmVyTm9kZXxURWxlbWVudENvbnRhaW5lck5vZGV8VFByb2plY3Rpb25Ob2RlfG51bGw7XG4gIHBhcmVudDogVEVsZW1lbnROb2RlfFRFbGVtZW50Q29udGFpbmVyTm9kZXxudWxsO1xuICB0Vmlld3M6IG51bGw7XG4gIHByb2plY3Rpb246IG51bGw7XG59XG5cbi8qKiBTdGF0aWMgZGF0YSBmb3IgYW4gSUNVIGV4cHJlc3Npb24gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVEljdUNvbnRhaW5lck5vZGUgZXh0ZW5kcyBUTm9kZSB7XG4gIC8qKiBJbmRleCBpbiB0aGUgTFZpZXdbXSBhcnJheS4gKi9cbiAgaW5kZXg6IG51bWJlcjtcbiAgY2hpbGQ6IFRFbGVtZW50Tm9kZXxUVGV4dE5vZGV8bnVsbDtcbiAgcGFyZW50OiBURWxlbWVudE5vZGV8VEVsZW1lbnRDb250YWluZXJOb2RlfG51bGw7XG4gIHRWaWV3czogbnVsbDtcbiAgcHJvamVjdGlvbjogbnVsbDtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgY3VycmVudCBhY3RpdmUgY2FzZSBmb3IgYW4gSUNVIGV4cHJlc3Npb24uXG4gICAqIEl0IGlzIG51bGwgd2hlbiB0aGVyZSBpcyBubyBhY3RpdmUgY2FzZS5cbiAgICovXG4gIGFjdGl2ZUNhc2VJbmRleDogbnVtYmVyfG51bGw7XG59XG5cbi8qKiBTdGF0aWMgZGF0YSBmb3IgYSB2aWV3ICAqL1xuZXhwb3J0IGludGVyZmFjZSBUVmlld05vZGUgZXh0ZW5kcyBUTm9kZSB7XG4gIC8qKiBJZiAtMSwgaXQncyBhIGR5bmFtaWNhbGx5IGNyZWF0ZWQgdmlldy4gT3RoZXJ3aXNlLCBpdCBpcyB0aGUgdmlldyBibG9jayBJRC4gKi9cbiAgaW5kZXg6IG51bWJlcjtcbiAgY2hpbGQ6IFRFbGVtZW50Tm9kZXxUVGV4dE5vZGV8VEVsZW1lbnRDb250YWluZXJOb2RlfFRDb250YWluZXJOb2RlfFRQcm9qZWN0aW9uTm9kZXxudWxsO1xuICBwYXJlbnQ6IFRDb250YWluZXJOb2RlfG51bGw7XG4gIHRWaWV3czogbnVsbDtcbiAgcHJvamVjdGlvbjogbnVsbDtcbn1cblxuLyoqIFN0YXRpYyBkYXRhIGZvciBhbiBMUHJvamVjdGlvbk5vZGUgICovXG5leHBvcnQgaW50ZXJmYWNlIFRQcm9qZWN0aW9uTm9kZSBleHRlbmRzIFROb2RlIHtcbiAgLyoqIEluZGV4IGluIHRoZSBkYXRhW10gYXJyYXkgKi9cbiAgY2hpbGQ6IG51bGw7XG4gIC8qKlxuICAgKiBQcm9qZWN0aW9uIG5vZGVzIHdpbGwgaGF2ZSBwYXJlbnRzIHVubGVzcyB0aGV5IGFyZSB0aGUgZmlyc3Qgbm9kZSBvZiBhIGNvbXBvbmVudFxuICAgKiBvciBlbWJlZGRlZCB2aWV3ICh3aGljaCBtZWFucyB0aGVpciBwYXJlbnQgaXMgaW4gYSBkaWZmZXJlbnQgdmlldyBhbmQgbXVzdCBiZVxuICAgKiByZXRyaWV2ZWQgdXNpbmcgTFZpZXcubm9kZSkuXG4gICAqL1xuICBwYXJlbnQ6IFRFbGVtZW50Tm9kZXxURWxlbWVudENvbnRhaW5lck5vZGV8bnVsbDtcbiAgdFZpZXdzOiBudWxsO1xuXG4gIC8qKiBJbmRleCBvZiB0aGUgcHJvamVjdGlvbiBub2RlLiAoU2VlIFROb2RlLnByb2plY3Rpb24gZm9yIG1vcmUgaW5mby4pICovXG4gIHByb2plY3Rpb246IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBIHVuaW9uIHR5cGUgcmVwcmVzZW50aW5nIGFsbCBUTm9kZSB0eXBlcyB0aGF0IGNhbiBob3N0IGEgZGlyZWN0aXZlLlxuICovXG5leHBvcnQgdHlwZSBURGlyZWN0aXZlSG9zdE5vZGUgPSBURWxlbWVudE5vZGV8VENvbnRhaW5lck5vZGV8VEVsZW1lbnRDb250YWluZXJOb2RlO1xuXG4vKipcbiAqIFRoaXMgbWFwcGluZyBpcyBuZWNlc3Nhcnkgc28gd2UgY2FuIHNldCBpbnB1dCBwcm9wZXJ0aWVzIGFuZCBvdXRwdXQgbGlzdGVuZXJzXG4gKiBwcm9wZXJseSBhdCBydW50aW1lIHdoZW4gcHJvcGVydHkgbmFtZXMgYXJlIG1pbmlmaWVkIG9yIGFsaWFzZWQuXG4gKlxuICogS2V5OiB1bm1pbmlmaWVkIC8gcHVibGljIGlucHV0IG9yIG91dHB1dCBuYW1lXG4gKiBWYWx1ZTogYXJyYXkgY29udGFpbmluZyBtaW5pZmllZCAvIGludGVybmFsIG5hbWUgYW5kIHJlbGF0ZWQgZGlyZWN0aXZlIGluZGV4XG4gKlxuICogVGhlIHZhbHVlIG11c3QgYmUgYW4gYXJyYXkgdG8gc3VwcG9ydCBpbnB1dHMgYW5kIG91dHB1dHMgd2l0aCB0aGUgc2FtZSBuYW1lXG4gKiBvbiB0aGUgc2FtZSBub2RlLlxuICovXG5leHBvcnQgdHlwZSBQcm9wZXJ0eUFsaWFzZXMgPSB7XG4gIC8vIFRoaXMgdXNlcyBhbiBvYmplY3QgbWFwIGJlY2F1c2UgdXNpbmcgdGhlIE1hcCB0eXBlIHdvdWxkIGJlIHRvbyBzbG93XG4gIFtrZXk6IHN0cmluZ106IFByb3BlcnR5QWxpYXNWYWx1ZVxufTtcblxuLyoqXG4gKiBTdG9yZSB0aGUgcnVudGltZSBpbnB1dCBvciBvdXRwdXQgbmFtZXMgZm9yIGFsbCB0aGUgZGlyZWN0aXZlcy5cbiAqXG4gKiBpKzA6IGRpcmVjdGl2ZSBpbnN0YW5jZSBpbmRleFxuICogaSsxOiBwcml2YXRlTmFtZVxuICpcbiAqIGUuZy4gWzAsICdjaGFuZ2UtbWluaWZpZWQnXVxuICovXG5leHBvcnQgdHlwZSBQcm9wZXJ0eUFsaWFzVmFsdWUgPSAobnVtYmVyfHN0cmluZylbXTtcblxuLyoqXG4gKiBUaGlzIGFycmF5IGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IGlucHV0IHByb3BlcnRpZXMgdGhhdFxuICogbmVlZCB0byBiZSBzZXQgb25jZSBmcm9tIGF0dHJpYnV0ZSBkYXRhLiBJdCdzIG9yZGVyZWQgYnlcbiAqIGRpcmVjdGl2ZSBpbmRleCAocmVsYXRpdmUgdG8gZWxlbWVudCkgc28gaXQncyBzaW1wbGUgdG9cbiAqIGxvb2sgdXAgYSBzcGVjaWZpYyBkaXJlY3RpdmUncyBpbml0aWFsIGlucHV0IGRhdGEuXG4gKlxuICogV2l0aGluIGVhY2ggc3ViLWFycmF5OlxuICpcbiAqIGkrMDogYXR0cmlidXRlIG5hbWVcbiAqIGkrMTogbWluaWZpZWQvaW50ZXJuYWwgaW5wdXQgbmFtZVxuICogaSsyOiBpbml0aWFsIHZhbHVlXG4gKlxuICogSWYgYSBkaXJlY3RpdmUgb24gYSBub2RlIGRvZXMgbm90IGhhdmUgYW55IGlucHV0IHByb3BlcnRpZXNcbiAqIHRoYXQgc2hvdWxkIGJlIHNldCBmcm9tIGF0dHJpYnV0ZXMsIGl0cyBpbmRleCBpcyBzZXQgdG8gbnVsbFxuICogdG8gYXZvaWQgYSBzcGFyc2UgYXJyYXkuXG4gKlxuICogZS5nLiBbbnVsbCwgWydyb2xlLW1pbicsICdtaW5pZmllZC1pbnB1dCcsICdidXR0b24nXV1cbiAqL1xuZXhwb3J0IHR5cGUgSW5pdGlhbElucHV0RGF0YSA9IChJbml0aWFsSW5wdXRzfG51bGwpW107XG5cbi8qKlxuICogVXNlZCBieSBJbml0aWFsSW5wdXREYXRhIHRvIHN0b3JlIGlucHV0IHByb3BlcnRpZXNcbiAqIHRoYXQgc2hvdWxkIGJlIHNldCBvbmNlIGZyb20gYXR0cmlidXRlcy5cbiAqXG4gKiBpKzA6IGF0dHJpYnV0ZSBuYW1lXG4gKiBpKzE6IG1pbmlmaWVkL2ludGVybmFsIGlucHV0IG5hbWVcbiAqIGkrMjogaW5pdGlhbCB2YWx1ZVxuICpcbiAqIGUuZy4gWydyb2xlLW1pbicsICdtaW5pZmllZC1pbnB1dCcsICdidXR0b24nXVxuICovXG5leHBvcnQgdHlwZSBJbml0aWFsSW5wdXRzID0gc3RyaW5nW107XG5cbi8vIE5vdGU6IFRoaXMgaGFjayBpcyBuZWNlc3Nhcnkgc28gd2UgZG9uJ3QgZXJyb25lb3VzbHkgZ2V0IGEgY2lyY3VsYXIgZGVwZW5kZW5jeVxuLy8gZmFpbHVyZSBiYXNlZCBvbiB0eXBlcy5cbmV4cG9ydCBjb25zdCB1bnVzZWRWYWx1ZUV4cG9ydFRvUGxhY2F0ZUFqZCA9IDE7XG5cbi8qKlxuICogVHlwZSByZXByZXNlbnRpbmcgYSBzZXQgb2YgVE5vZGVzIHRoYXQgY2FuIGhhdmUgbG9jYWwgcmVmcyAoYCNmb29gKSBwbGFjZWQgb24gdGhlbS5cbiAqL1xuZXhwb3J0IHR5cGUgVE5vZGVXaXRoTG9jYWxSZWZzID0gVENvbnRhaW5lck5vZGV8VEVsZW1lbnROb2RlfFRFbGVtZW50Q29udGFpbmVyTm9kZTtcblxuLyoqXG4gKiBUeXBlIGZvciBhIGZ1bmN0aW9uIHRoYXQgZXh0cmFjdHMgYSB2YWx1ZSBmb3IgYSBsb2NhbCByZWZzLlxuICogRXhhbXBsZTpcbiAqIC0gYDxkaXYgI25hdGl2ZURpdkVsPmAgLSBgbmF0aXZlRGl2RWxgIHNob3VsZCBwb2ludCB0byB0aGUgbmF0aXZlIGA8ZGl2PmAgZWxlbWVudDtcbiAqIC0gYDxuZy10ZW1wbGF0ZSAjdHBsUmVmPmAgLSBgdHBsUmVmYCBzaG91bGQgcG9pbnQgdG8gdGhlIGBUZW1wbGF0ZVJlZmAgaW5zdGFuY2U7XG4gKi9cbmV4cG9ydCB0eXBlIExvY2FsUmVmRXh0cmFjdG9yID0gKHROb2RlOiBUTm9kZVdpdGhMb2NhbFJlZnMsIGN1cnJlbnRWaWV3OiBMVmlldykgPT4gYW55O1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBgVE5vZGVgIGhhcyBhIGRpcmVjdGl2ZSB3aGljaCBoYXMgYEBJbnB1dCgpYCBmb3IgYGNsYXNzYCBiaW5kaW5nLlxuICpcbiAqIGBgYFxuICogPGRpdiBteS1kaXIgW2NsYXNzXT1cImV4cFwiPjwvZGl2PlxuICogYGBgXG4gKiBhbmRcbiAqIGBgYFxuICogQERpcmVjdGl2ZSh7XG4gKiB9KVxuICogY2xhc3MgTXlEaXJlY3RpdmUge1xuICogICBASW5wdXQoKVxuICogICBjbGFzczogc3RyaW5nO1xuICogfVxuICogYGBgXG4gKlxuICogSW4gdGhlIGFib3ZlIGNhc2UgaXQgaXMgbmVjZXNzYXJ5IHRvIHdyaXRlIHRoZSByZWNvbmNpbGVkIHN0eWxpbmcgaW5mb3JtYXRpb24gaW50byB0aGVcbiAqIGRpcmVjdGl2ZSdzIGlucHV0LlxuICpcbiAqIEBwYXJhbSB0Tm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3NJbnB1dCh0Tm9kZTogVE5vZGUpIHtcbiAgcmV0dXJuICh0Tm9kZS5mbGFncyAmIFROb2RlRmxhZ3MuaGFzQ2xhc3NJbnB1dCkgIT09IDA7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBUTm9kZWAgaGFzIGEgZGlyZWN0aXZlIHdoaWNoIGhhcyBgQElucHV0KClgIGZvciBgc3R5bGVgIGJpbmRpbmcuXG4gKlxuICogYGBgXG4gKiA8ZGl2IG15LWRpciBbc3R5bGVdPVwiZXhwXCI+PC9kaXY+XG4gKiBgYGBcbiAqIGFuZFxuICogYGBgXG4gKiBARGlyZWN0aXZlKHtcbiAqIH0pXG4gKiBjbGFzcyBNeURpcmVjdGl2ZSB7XG4gKiAgIEBJbnB1dCgpXG4gKiAgIGNsYXNzOiBzdHJpbmc7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBJbiB0aGUgYWJvdmUgY2FzZSBpdCBpcyBuZWNlc3NhcnkgdG8gd3JpdGUgdGhlIHJlY29uY2lsZWQgc3R5bGluZyBpbmZvcm1hdGlvbiBpbnRvIHRoZVxuICogZGlyZWN0aXZlJ3MgaW5wdXQuXG4gKlxuICogQHBhcmFtIHROb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNTdHlsZUlucHV0KHROb2RlOiBUTm9kZSkge1xuICByZXR1cm4gKHROb2RlLmZsYWdzICYgVE5vZGVGbGFncy5oYXNTdHlsZUlucHV0KSAhPT0gMDtcbn1cbiJdfQ==