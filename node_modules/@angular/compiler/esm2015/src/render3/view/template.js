/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { flatten, sanitizeIdentifier } from '../../compile_metadata';
import { BindingForm, BuiltinFunctionCall, convertActionBinding, convertPropertyBinding, convertUpdateArguments } from '../../compiler_util/expression_converter';
import * as core from '../../core';
import { AstMemoryEfficientTransformer, FunctionCall, ImplicitReceiver, Interpolation, LiteralArray, LiteralPrimitive, PropertyRead } from '../../expression_parser/ast';
import { Lexer } from '../../expression_parser/lexer';
import { IvyParser } from '../../expression_parser/parser';
import * as html from '../../ml_parser/ast';
import { HtmlParser } from '../../ml_parser/html_parser';
import { WhitespaceVisitor } from '../../ml_parser/html_whitespaces';
import { DEFAULT_INTERPOLATION_CONFIG } from '../../ml_parser/interpolation_config';
import { isNgContainer as checkIsNgContainer, splitNsName } from '../../ml_parser/tags';
import { mapLiteral } from '../../output/map_util';
import * as o from '../../output/output_ast';
import { DomElementSchemaRegistry } from '../../schema/dom_element_schema_registry';
import { CssSelector } from '../../selector';
import { BindingParser } from '../../template_parser/binding_parser';
import { error, partitionArray } from '../../util';
import * as t from '../r3_ast';
import { Identifiers as R3 } from '../r3_identifiers';
import { htmlAstToRender3Ast } from '../r3_template_transform';
import { prepareSyntheticListenerFunctionName, prepareSyntheticListenerName, prepareSyntheticPropertyName } from '../util';
import { I18nContext } from './i18n/context';
import { createGoogleGetMsgStatements } from './i18n/get_msg_utils';
import { createLocalizeStatements } from './i18n/localize_utils';
import { I18nMetaVisitor } from './i18n/meta';
import { assembleBoundTextPlaceholders, assembleI18nBoundString, declareI18nVariable, getTranslationConstPrefix, hasI18nMeta, I18N_ICU_MAPPING_PREFIX, i18nFormatPlaceholderNames, icuFromI18nMessage, isI18nRootNode, isSingleI18nIcu, placeholdersToParams, TRANSLATION_PREFIX, wrapI18nPlaceholder } from './i18n/util';
import { StylingBuilder } from './styling_builder';
import { asLiteral, chainedInstruction, CONTEXT_NAME, getAttrsForDirectiveMatching, getInterpolationArgsLength, IMPLICIT_REFERENCE, invalid, NON_BINDABLE_ATTR, REFERENCE_PREFIX, RENDER_FLAGS, trimTrailingNulls, unsupported } from './util';
// Selector attribute name of `<ng-content>`
const NG_CONTENT_SELECT_ATTR = 'select';
// Attribute name of `ngProjectAs`.
const NG_PROJECT_AS_ATTR_NAME = 'ngProjectAs';
// List of supported global targets for event listeners
const GLOBAL_TARGET_RESOLVERS = new Map([['window', R3.resolveWindow], ['document', R3.resolveDocument], ['body', R3.resolveBody]]);
const LEADING_TRIVIA_CHARS = [' ', '\n', '\r', '\t'];
//  if (rf & flags) { .. }
export function renderFlagCheckIfStmt(flags, statements) {
    return o.ifStmt(o.variable(RENDER_FLAGS).bitwiseAnd(o.literal(flags), null, false), statements);
}
export function prepareEventListenerParameters(eventAst, handlerName = null, scope = null) {
    const { type, name, target, phase, handler } = eventAst;
    if (target && !GLOBAL_TARGET_RESOLVERS.has(target)) {
        throw new Error(`Unexpected global target '${target}' defined for '${name}' event.
        Supported list of global targets: ${Array.from(GLOBAL_TARGET_RESOLVERS.keys())}.`);
    }
    const eventArgumentName = '$event';
    const implicitReceiverAccesses = new Set();
    const implicitReceiverExpr = (scope === null || scope.bindingLevel === 0) ?
        o.variable(CONTEXT_NAME) :
        scope.getOrCreateSharedContextVar(0);
    const bindingExpr = convertActionBinding(scope, implicitReceiverExpr, handler, 'b', () => error('Unexpected interpolation'), eventAst.handlerSpan, implicitReceiverAccesses);
    const statements = [];
    if (scope) {
        statements.push(...scope.restoreViewStatement());
        statements.push(...scope.variableDeclarations());
    }
    statements.push(...bindingExpr.render3Stmts);
    const eventName = type === 1 /* Animation */ ? prepareSyntheticListenerName(name, phase) : name;
    const fnName = handlerName && sanitizeIdentifier(handlerName);
    const fnArgs = [];
    if (implicitReceiverAccesses.has(eventArgumentName)) {
        fnArgs.push(new o.FnParam(eventArgumentName, o.DYNAMIC_TYPE));
    }
    const handlerFn = o.fn(fnArgs, statements, o.INFERRED_TYPE, null, fnName);
    const params = [o.literal(eventName), handlerFn];
    if (target) {
        params.push(o.literal(false), // `useCapture` flag, defaults to `false`
        o.importExpr(GLOBAL_TARGET_RESOLVERS.get(target)));
    }
    return params;
}
export class TemplateDefinitionBuilder {
    constructor(constantPool, parentBindingScope, level = 0, contextName, i18nContext, templateIndex, templateName, directiveMatcher, directives, pipeTypeByName, pipes, _namespace, relativeContextFilePath, i18nUseExternalIds, _constants = []) {
        this.constantPool = constantPool;
        this.level = level;
        this.contextName = contextName;
        this.i18nContext = i18nContext;
        this.templateIndex = templateIndex;
        this.templateName = templateName;
        this.directiveMatcher = directiveMatcher;
        this.directives = directives;
        this.pipeTypeByName = pipeTypeByName;
        this.pipes = pipes;
        this._namespace = _namespace;
        this.i18nUseExternalIds = i18nUseExternalIds;
        this._constants = _constants;
        this._dataIndex = 0;
        this._bindingContext = 0;
        this._prefixCode = [];
        /**
         * List of callbacks to generate creation mode instructions. We store them here as we process
         * the template so bindings in listeners are resolved only once all nodes have been visited.
         * This ensures all local refs and context variables are available for matching.
         */
        this._creationCodeFns = [];
        /**
         * List of callbacks to generate update mode instructions. We store them here as we process
         * the template so bindings are resolved only once all nodes have been visited. This ensures
         * all local refs and context variables are available for matching.
         */
        this._updateCodeFns = [];
        /** Index of the currently-selected node. */
        this._currentIndex = 0;
        /** Temporary variable declarations generated from visiting pipes, literals, etc. */
        this._tempVariables = [];
        /**
         * List of callbacks to build nested templates. Nested templates must not be visited until
         * after the parent template has finished visiting all of its nodes. This ensures that all
         * local ref bindings in nested templates are able to find local ref values if the refs
         * are defined after the template declaration.
         */
        this._nestedTemplateFns = [];
        this._unsupported = unsupported;
        // i18n context local to this template
        this.i18n = null;
        // Number of slots to reserve for pureFunctions
        this._pureFunctionSlots = 0;
        // Number of binding slots
        this._bindingSlots = 0;
        // Projection slots found in the template. Projection slots can distribute projected
        // nodes based on a selector, or can just use the wildcard selector to match
        // all nodes which aren't matching any selector.
        this._ngContentReservedSlots = [];
        // Number of non-default selectors found in all parent templates of this template. We need to
        // track it to properly adjust projection slot index in the `projection` instruction.
        this._ngContentSelectorsOffset = 0;
        // Expression that should be used as implicit receiver when converting template
        // expressions to output AST.
        this._implicitReceiverExpr = null;
        // These should be handled in the template or element directly.
        this.visitReference = invalid;
        this.visitVariable = invalid;
        this.visitTextAttribute = invalid;
        this.visitBoundAttribute = invalid;
        this.visitBoundEvent = invalid;
        this._bindingScope = parentBindingScope.nestedScope(level);
        // Turn the relative context file path into an identifier by replacing non-alphanumeric
        // characters with underscores.
        this.fileBasedI18nSuffix = relativeContextFilePath.replace(/[^A-Za-z0-9]/g, '_') + '_';
        this._valueConverter = new ValueConverter(constantPool, () => this.allocateDataSlot(), (numSlots) => this.allocatePureFunctionSlots(numSlots), (name, localName, slot, value) => {
            const pipeType = pipeTypeByName.get(name);
            if (pipeType) {
                this.pipes.add(pipeType);
            }
            this._bindingScope.set(this.level, localName, value);
            this.creationInstruction(null, R3.pipe, [o.literal(slot), o.literal(name)]);
        });
    }
    buildTemplateFunction(nodes, variables, ngContentSelectorsOffset = 0, i18n) {
        this._ngContentSelectorsOffset = ngContentSelectorsOffset;
        if (this._namespace !== R3.namespaceHTML) {
            this.creationInstruction(null, this._namespace);
        }
        // Create variable bindings
        variables.forEach(v => this.registerContextVariables(v));
        // Initiate i18n context in case:
        // - this template has parent i18n context
        // - or the template has i18n meta associated with it,
        //   but it's not initiated by the Element (e.g. <ng-template i18n>)
        const initI18nContext = this.i18nContext ||
            (isI18nRootNode(i18n) && !isSingleI18nIcu(i18n) &&
                !(isSingleElementTemplate(nodes) && nodes[0].i18n === i18n));
        const selfClosingI18nInstruction = hasTextChildrenOnly(nodes);
        if (initI18nContext) {
            this.i18nStart(null, i18n, selfClosingI18nInstruction);
        }
        // This is the initial pass through the nodes of this template. In this pass, we
        // queue all creation mode and update mode instructions for generation in the second
        // pass. It's necessary to separate the passes to ensure local refs are defined before
        // resolving bindings. We also count bindings in this pass as we walk bound expressions.
        t.visitAll(this, nodes);
        // Add total binding count to pure function count so pure function instructions are
        // generated with the correct slot offset when update instructions are processed.
        this._pureFunctionSlots += this._bindingSlots;
        // Pipes are walked in the first pass (to enqueue `pipe()` creation instructions and
        // `pipeBind` update instructions), so we have to update the slot offsets manually
        // to account for bindings.
        this._valueConverter.updatePipeSlotOffsets(this._bindingSlots);
        // Nested templates must be processed before creation instructions so template()
        // instructions can be generated with the correct internal const count.
        this._nestedTemplateFns.forEach(buildTemplateFn => buildTemplateFn());
        // Output the `projectionDef` instruction when some `<ng-content>` tags are present.
        // The `projectionDef` instruction is only emitted for the component template and
        // is skipped for nested templates (<ng-template> tags).
        if (this.level === 0 && this._ngContentReservedSlots.length) {
            const parameters = [];
            // By default the `projectionDef` instructions creates one slot for the wildcard
            // selector if no parameters are passed. Therefore we only want to allocate a new
            // array for the projection slots if the default projection slot is not sufficient.
            if (this._ngContentReservedSlots.length > 1 || this._ngContentReservedSlots[0] !== '*') {
                const r3ReservedSlots = this._ngContentReservedSlots.map(s => s !== '*' ? core.parseSelectorToR3Selector(s) : s);
                parameters.push(this.constantPool.getConstLiteral(asLiteral(r3ReservedSlots), true));
            }
            // Since we accumulate ngContent selectors while processing template elements,
            // we *prepend* `projectionDef` to creation instructions block, to put it before
            // any `projection` instructions
            this.creationInstruction(null, R3.projectionDef, parameters, /* prepend */ true);
        }
        if (initI18nContext) {
            this.i18nEnd(null, selfClosingI18nInstruction);
        }
        // Generate all the creation mode instructions (e.g. resolve bindings in listeners)
        const creationStatements = this._creationCodeFns.map((fn) => fn());
        // Generate all the update mode instructions (e.g. resolve property or text bindings)
        const updateStatements = this._updateCodeFns.map((fn) => fn());
        //  Variable declaration must occur after binding resolution so we can generate context
        //  instructions that build on each other.
        // e.g. const b = nextContext().$implicit(); const b = nextContext();
        const creationVariables = this._bindingScope.viewSnapshotStatements();
        const updateVariables = this._bindingScope.variableDeclarations().concat(this._tempVariables);
        const creationBlock = creationStatements.length > 0 ?
            [renderFlagCheckIfStmt(1 /* Create */, creationVariables.concat(creationStatements))] :
            [];
        const updateBlock = updateStatements.length > 0 ?
            [renderFlagCheckIfStmt(2 /* Update */, updateVariables.concat(updateStatements))] :
            [];
        return o.fn(
        // i.e. (rf: RenderFlags, ctx: any)
        [new o.FnParam(RENDER_FLAGS, o.NUMBER_TYPE), new o.FnParam(CONTEXT_NAME, null)], [
            // Temporary variable declarations for query refresh (i.e. let _t: any;)
            ...this._prefixCode,
            // Creating mode (i.e. if (rf & RenderFlags.Create) { ... })
            ...creationBlock,
            // Binding and refresh mode (i.e. if (rf & RenderFlags.Update) {...})
            ...updateBlock,
        ], o.INFERRED_TYPE, null, this.templateName);
    }
    // LocalResolver
    getLocal(name) {
        return this._bindingScope.get(name);
    }
    // LocalResolver
    notifyImplicitReceiverUse() {
        this._bindingScope.notifyImplicitReceiverUse();
    }
    i18nTranslate(message, params = {}, ref, transformFn) {
        const _ref = ref || o.variable(this.constantPool.uniqueName(TRANSLATION_PREFIX));
        // Closure Compiler requires const names to start with `MSG_` but disallows any other const to
        // start with `MSG_`. We define a variable starting with `MSG_` just for the `goog.getMsg` call
        const closureVar = this.i18nGenerateClosureVar(message.id);
        const statements = getTranslationDeclStmts(message, _ref, closureVar, params, transformFn);
        this.constantPool.statements.push(...statements);
        return _ref;
    }
    registerContextVariables(variable) {
        const scopedName = this._bindingScope.freshReferenceName();
        const retrievalLevel = this.level;
        const lhs = o.variable(variable.name + scopedName);
        this._bindingScope.set(retrievalLevel, variable.name, lhs, 1 /* CONTEXT */, (scope, relativeLevel) => {
            let rhs;
            if (scope.bindingLevel === retrievalLevel) {
                // e.g. ctx
                rhs = o.variable(CONTEXT_NAME);
            }
            else {
                const sharedCtxVar = scope.getSharedContextName(retrievalLevel);
                // e.g. ctx_r0   OR  x(2);
                rhs = sharedCtxVar ? sharedCtxVar : generateNextContextExpr(relativeLevel);
            }
            // e.g. const $item$ = x(2).$implicit;
            return [lhs.set(rhs.prop(variable.value || IMPLICIT_REFERENCE)).toConstDecl()];
        });
    }
    i18nAppendBindings(expressions) {
        if (expressions.length > 0) {
            expressions.forEach(expression => this.i18n.appendBinding(expression));
        }
    }
    i18nBindProps(props) {
        const bound = {};
        Object.keys(props).forEach(key => {
            const prop = props[key];
            if (prop instanceof t.Text) {
                bound[key] = o.literal(prop.value);
            }
            else {
                const value = prop.value.visit(this._valueConverter);
                this.allocateBindingSlots(value);
                if (value instanceof Interpolation) {
                    const { strings, expressions } = value;
                    const { id, bindings } = this.i18n;
                    const label = assembleI18nBoundString(strings, bindings.size, id);
                    this.i18nAppendBindings(expressions);
                    bound[key] = o.literal(label);
                }
            }
        });
        return bound;
    }
    i18nGenerateClosureVar(messageId) {
        let name;
        const suffix = this.fileBasedI18nSuffix.toUpperCase();
        if (this.i18nUseExternalIds) {
            const prefix = getTranslationConstPrefix(`EXTERNAL_`);
            const uniqueSuffix = this.constantPool.uniqueName(suffix);
            name = `${prefix}${sanitizeIdentifier(messageId)}$$${uniqueSuffix}`;
        }
        else {
            const prefix = getTranslationConstPrefix(suffix);
            name = this.constantPool.uniqueName(prefix);
        }
        return o.variable(name);
    }
    i18nUpdateRef(context) {
        const { icus, meta, isRoot, isResolved, isEmitted } = context;
        if (isRoot && isResolved && !isEmitted && !isSingleI18nIcu(meta)) {
            context.isEmitted = true;
            const placeholders = context.getSerializedPlaceholders();
            let icuMapping = {};
            let params = placeholders.size ? placeholdersToParams(placeholders) : {};
            if (icus.size) {
                icus.forEach((refs, key) => {
                    if (refs.length === 1) {
                        // if we have one ICU defined for a given
                        // placeholder - just output its reference
                        params[key] = refs[0];
                    }
                    else {
                        // ... otherwise we need to activate post-processing
                        // to replace ICU placeholders with proper values
                        const placeholder = wrapI18nPlaceholder(`${I18N_ICU_MAPPING_PREFIX}${key}`);
                        params[key] = o.literal(placeholder);
                        icuMapping[key] = o.literalArr(refs);
                    }
                });
            }
            // translation requires post processing in 2 cases:
            // - if we have placeholders with multiple values (ex. `START_DIV`: [�#1�, �#2�, ...])
            // - if we have multiple ICUs that refer to the same placeholder name
            const needsPostprocessing = Array.from(placeholders.values()).some((value) => value.length > 1) ||
                Object.keys(icuMapping).length;
            let transformFn;
            if (needsPostprocessing) {
                transformFn = (raw) => {
                    const args = [raw];
                    if (Object.keys(icuMapping).length) {
                        args.push(mapLiteral(icuMapping, true));
                    }
                    return instruction(null, R3.i18nPostprocess, args);
                };
            }
            this.i18nTranslate(meta, params, context.ref, transformFn);
        }
    }
    i18nStart(span = null, meta, selfClosing) {
        const index = this.allocateDataSlot();
        if (this.i18nContext) {
            this.i18n = this.i18nContext.forkChildContext(index, this.templateIndex, meta);
        }
        else {
            const ref = o.variable(this.constantPool.uniqueName(TRANSLATION_PREFIX));
            this.i18n = new I18nContext(index, ref, 0, this.templateIndex, meta);
        }
        // generate i18nStart instruction
        const { id, ref } = this.i18n;
        const params = [o.literal(index), ref];
        if (id > 0) {
            // do not push 3rd argument (sub-block id)
            // into i18nStart call for top level i18n context
            params.push(o.literal(id));
        }
        this.creationInstruction(span, selfClosing ? R3.i18n : R3.i18nStart, params);
    }
    i18nEnd(span = null, selfClosing) {
        if (!this.i18n) {
            throw new Error('i18nEnd is executed with no i18n context present');
        }
        if (this.i18nContext) {
            this.i18nContext.reconcileChildContext(this.i18n);
            this.i18nUpdateRef(this.i18nContext);
        }
        else {
            this.i18nUpdateRef(this.i18n);
        }
        // setup accumulated bindings
        const { index, bindings } = this.i18n;
        if (bindings.size) {
            const chainBindings = [];
            bindings.forEach(binding => {
                chainBindings.push({ sourceSpan: span, value: () => this.convertPropertyBinding(binding) });
            });
            // for i18n block, advance to the most recent element index (by taking the current number of
            // elements and subtracting one) before invoking `i18nExp` instructions, to make sure the
            // necessary lifecycle hooks of components/directives are properly flushed.
            this.updateInstructionChainWithAdvance(this.getConstCount() - 1, R3.i18nExp, chainBindings);
            this.updateInstruction(span, R3.i18nApply, [o.literal(index)]);
        }
        if (!selfClosing) {
            this.creationInstruction(span, R3.i18nEnd);
        }
        this.i18n = null; // reset local i18n context
    }
    i18nAttributesInstruction(nodeIndex, attrs, sourceSpan) {
        let hasBindings = false;
        const i18nAttrArgs = [];
        const bindings = [];
        attrs.forEach(attr => {
            const message = attr.i18n;
            if (attr instanceof t.TextAttribute) {
                i18nAttrArgs.push(o.literal(attr.name), this.i18nTranslate(message));
            }
            else {
                const converted = attr.value.visit(this._valueConverter);
                this.allocateBindingSlots(converted);
                if (converted instanceof Interpolation) {
                    const placeholders = assembleBoundTextPlaceholders(message);
                    const params = placeholdersToParams(placeholders);
                    i18nAttrArgs.push(o.literal(attr.name), this.i18nTranslate(message, params));
                    converted.expressions.forEach(expression => {
                        hasBindings = true;
                        bindings.push({
                            sourceSpan,
                            value: () => this.convertPropertyBinding(expression),
                        });
                    });
                }
            }
        });
        if (bindings.length > 0) {
            this.updateInstructionChainWithAdvance(nodeIndex, R3.i18nExp, bindings);
        }
        if (i18nAttrArgs.length > 0) {
            const index = o.literal(this.allocateDataSlot());
            const args = this.constantPool.getConstLiteral(o.literalArr(i18nAttrArgs), true);
            this.creationInstruction(sourceSpan, R3.i18nAttributes, [index, args]);
            if (hasBindings) {
                this.updateInstruction(sourceSpan, R3.i18nApply, [index]);
            }
        }
    }
    getNamespaceInstruction(namespaceKey) {
        switch (namespaceKey) {
            case 'math':
                return R3.namespaceMathML;
            case 'svg':
                return R3.namespaceSVG;
            default:
                return R3.namespaceHTML;
        }
    }
    addNamespaceInstruction(nsInstruction, element) {
        this._namespace = nsInstruction;
        this.creationInstruction(element.sourceSpan, nsInstruction);
    }
    /**
     * Adds an update instruction for an interpolated property or attribute, such as
     * `prop="{{value}}"` or `attr.title="{{value}}"`
     */
    interpolatedUpdateInstruction(instruction, elementIndex, attrName, input, value, params) {
        this.updateInstructionWithAdvance(elementIndex, input.sourceSpan, instruction, () => [o.literal(attrName), ...this.getUpdateInstructionArguments(value), ...params]);
    }
    visitContent(ngContent) {
        const slot = this.allocateDataSlot();
        const projectionSlotIdx = this._ngContentSelectorsOffset + this._ngContentReservedSlots.length;
        const parameters = [o.literal(slot)];
        this._ngContentReservedSlots.push(ngContent.selector);
        const nonContentSelectAttributes = ngContent.attributes.filter(attr => attr.name.toLowerCase() !== NG_CONTENT_SELECT_ATTR);
        const attributes = this.getAttributeExpressions(nonContentSelectAttributes, [], []);
        if (attributes.length > 0) {
            parameters.push(o.literal(projectionSlotIdx), o.literalArr(attributes));
        }
        else if (projectionSlotIdx !== 0) {
            parameters.push(o.literal(projectionSlotIdx));
        }
        this.creationInstruction(ngContent.sourceSpan, R3.projection, parameters);
        if (this.i18n) {
            this.i18n.appendProjection(ngContent.i18n, slot);
        }
    }
    visitElement(element) {
        const elementIndex = this.allocateDataSlot();
        const stylingBuilder = new StylingBuilder(null);
        let isNonBindableMode = false;
        const isI18nRootElement = isI18nRootNode(element.i18n) && !isSingleI18nIcu(element.i18n);
        const i18nAttrs = [];
        const outputAttrs = [];
        const [namespaceKey, elementName] = splitNsName(element.name);
        const isNgContainer = checkIsNgContainer(element.name);
        // Handle styling, i18n, ngNonBindable attributes
        for (const attr of element.attributes) {
            const { name, value } = attr;
            if (name === NON_BINDABLE_ATTR) {
                isNonBindableMode = true;
            }
            else if (name === 'style') {
                stylingBuilder.registerStyleAttr(value);
            }
            else if (name === 'class') {
                stylingBuilder.registerClassAttr(value);
            }
            else {
                (attr.i18n ? i18nAttrs : outputAttrs).push(attr);
            }
        }
        // Match directives on non i18n attributes
        this.matchDirectives(element.name, element);
        // Regular element or ng-container creation mode
        const parameters = [o.literal(elementIndex)];
        if (!isNgContainer) {
            parameters.push(o.literal(elementName));
        }
        // Add the attributes
        const allOtherInputs = [];
        element.inputs.forEach((input) => {
            const stylingInputWasSet = stylingBuilder.registerBoundInput(input);
            if (!stylingInputWasSet) {
                if (input.type === 0 /* Property */ && input.i18n) {
                    i18nAttrs.push(input);
                }
                else {
                    allOtherInputs.push(input);
                }
            }
        });
        // add attributes for directive and projection matching purposes
        const attributes = this.getAttributeExpressions(outputAttrs, allOtherInputs, element.outputs, stylingBuilder, [], i18nAttrs);
        parameters.push(this.addAttrsToConsts(attributes));
        // local refs (ex.: <div #foo #bar="baz">)
        const refs = this.prepareRefsArray(element.references);
        parameters.push(this.addToConsts(refs));
        const wasInNamespace = this._namespace;
        const currentNamespace = this.getNamespaceInstruction(namespaceKey);
        // If the namespace is changing now, include an instruction to change it
        // during element creation.
        if (currentNamespace !== wasInNamespace) {
            this.addNamespaceInstruction(currentNamespace, element);
        }
        if (this.i18n) {
            this.i18n.appendElement(element.i18n, elementIndex);
        }
        // Note that we do not append text node instructions and ICUs inside i18n section,
        // so we exclude them while calculating whether current element has children
        const hasChildren = (!isI18nRootElement && this.i18n) ? !hasTextChildrenOnly(element.children) :
            element.children.length > 0;
        const createSelfClosingInstruction = !stylingBuilder.hasBindingsWithPipes &&
            element.outputs.length === 0 && i18nAttrs.length === 0 && !hasChildren;
        const createSelfClosingI18nInstruction = !createSelfClosingInstruction && hasTextChildrenOnly(element.children);
        if (createSelfClosingInstruction) {
            this.creationInstruction(element.sourceSpan, isNgContainer ? R3.elementContainer : R3.element, trimTrailingNulls(parameters));
        }
        else {
            this.creationInstruction(element.sourceSpan, isNgContainer ? R3.elementContainerStart : R3.elementStart, trimTrailingNulls(parameters));
            if (isNonBindableMode) {
                this.creationInstruction(element.sourceSpan, R3.disableBindings);
            }
            if (i18nAttrs.length > 0) {
                this.i18nAttributesInstruction(elementIndex, i18nAttrs, element.sourceSpan);
            }
            // Generate Listeners (outputs)
            if (element.outputs.length > 0) {
                const listeners = element.outputs.map((outputAst) => ({
                    sourceSpan: outputAst.sourceSpan,
                    params: this.prepareListenerParameter(element.name, outputAst, elementIndex)
                }));
                this.creationInstructionChain(R3.listener, listeners);
            }
            // Note: it's important to keep i18n/i18nStart instructions after i18nAttributes and
            // listeners, to make sure i18nAttributes instruction targets current element at runtime.
            if (isI18nRootElement) {
                this.i18nStart(element.sourceSpan, element.i18n, createSelfClosingI18nInstruction);
            }
        }
        // the code here will collect all update-level styling instructions and add them to the
        // update block of the template function AOT code. Instructions like `styleProp`,
        // `styleMap`, `classMap`, `classProp`
        // are all generated and assigned in the code below.
        const stylingInstructions = stylingBuilder.buildUpdateLevelInstructions(this._valueConverter);
        const limit = stylingInstructions.length - 1;
        for (let i = 0; i <= limit; i++) {
            const instruction = stylingInstructions[i];
            this._bindingSlots += this.processStylingUpdateInstruction(elementIndex, instruction);
        }
        // the reason why `undefined` is used is because the renderer understands this as a
        // special value to symbolize that there is no RHS to this binding
        // TODO (matsko): revisit this once FW-959 is approached
        const emptyValueBindInstruction = o.literal(undefined);
        const propertyBindings = [];
        const attributeBindings = [];
        // Generate element input bindings
        allOtherInputs.forEach((input) => {
            const inputType = input.type;
            if (inputType === 4 /* Animation */) {
                const value = input.value.visit(this._valueConverter);
                // animation bindings can be presented in the following formats:
                // 1. [@binding]="fooExp"
                // 2. [@binding]="{value:fooExp, params:{...}}"
                // 3. [@binding]
                // 4. @binding
                // All formats will be valid for when a synthetic binding is created.
                // The reasoning for this is because the renderer should get each
                // synthetic binding value in the order of the array that they are
                // defined in...
                const hasValue = value instanceof LiteralPrimitive ? !!value.value : true;
                this.allocateBindingSlots(value);
                propertyBindings.push({
                    name: prepareSyntheticPropertyName(input.name),
                    sourceSpan: input.sourceSpan,
                    value: () => hasValue ? this.convertPropertyBinding(value) : emptyValueBindInstruction
                });
            }
            else {
                // we must skip attributes with associated i18n context, since these attributes are handled
                // separately and corresponding `i18nExp` and `i18nApply` instructions will be generated
                if (input.i18n)
                    return;
                const value = input.value.visit(this._valueConverter);
                if (value !== undefined) {
                    const params = [];
                    const [attrNamespace, attrName] = splitNsName(input.name);
                    const isAttributeBinding = inputType === 1 /* Attribute */;
                    const sanitizationRef = resolveSanitizationFn(input.securityContext, isAttributeBinding);
                    if (sanitizationRef)
                        params.push(sanitizationRef);
                    if (attrNamespace) {
                        const namespaceLiteral = o.literal(attrNamespace);
                        if (sanitizationRef) {
                            params.push(namespaceLiteral);
                        }
                        else {
                            // If there wasn't a sanitization ref, we need to add
                            // an extra param so that we can pass in the namespace.
                            params.push(o.literal(null), namespaceLiteral);
                        }
                    }
                    this.allocateBindingSlots(value);
                    if (inputType === 0 /* Property */) {
                        if (value instanceof Interpolation) {
                            // prop="{{value}}" and friends
                            this.interpolatedUpdateInstruction(getPropertyInterpolationExpression(value), elementIndex, attrName, input, value, params);
                        }
                        else {
                            // [prop]="value"
                            // Collect all the properties so that we can chain into a single function at the end.
                            propertyBindings.push({
                                name: attrName,
                                sourceSpan: input.sourceSpan,
                                value: () => this.convertPropertyBinding(value),
                                params
                            });
                        }
                    }
                    else if (inputType === 1 /* Attribute */) {
                        if (value instanceof Interpolation && getInterpolationArgsLength(value) > 1) {
                            // attr.name="text{{value}}" and friends
                            this.interpolatedUpdateInstruction(getAttributeInterpolationExpression(value), elementIndex, attrName, input, value, params);
                        }
                        else {
                            const boundValue = value instanceof Interpolation ? value.expressions[0] : value;
                            // [attr.name]="value" or attr.name="{{value}}"
                            // Collect the attribute bindings so that they can be chained at the end.
                            attributeBindings.push({
                                name: attrName,
                                sourceSpan: input.sourceSpan,
                                value: () => this.convertPropertyBinding(boundValue),
                                params
                            });
                        }
                    }
                    else {
                        // class prop
                        this.updateInstructionWithAdvance(elementIndex, input.sourceSpan, R3.classProp, () => {
                            return [
                                o.literal(elementIndex), o.literal(attrName), this.convertPropertyBinding(value),
                                ...params
                            ];
                        });
                    }
                }
            }
        });
        if (propertyBindings.length > 0) {
            this.updateInstructionChainWithAdvance(elementIndex, R3.property, propertyBindings);
        }
        if (attributeBindings.length > 0) {
            this.updateInstructionChainWithAdvance(elementIndex, R3.attribute, attributeBindings);
        }
        // Traverse element child nodes
        t.visitAll(this, element.children);
        if (!isI18nRootElement && this.i18n) {
            this.i18n.appendElement(element.i18n, elementIndex, true);
        }
        if (!createSelfClosingInstruction) {
            // Finish element construction mode.
            const span = element.endSourceSpan || element.sourceSpan;
            if (isI18nRootElement) {
                this.i18nEnd(span, createSelfClosingI18nInstruction);
            }
            if (isNonBindableMode) {
                this.creationInstruction(span, R3.enableBindings);
            }
            this.creationInstruction(span, isNgContainer ? R3.elementContainerEnd : R3.elementEnd);
        }
    }
    visitTemplate(template) {
        const NG_TEMPLATE_TAG_NAME = 'ng-template';
        const templateIndex = this.allocateDataSlot();
        if (this.i18n) {
            this.i18n.appendTemplate(template.i18n, templateIndex);
        }
        const tagName = sanitizeIdentifier(template.tagName || '');
        const contextName = `${this.contextName}${tagName ? '_' + tagName : ''}_${templateIndex}`;
        const templateName = `${contextName}_Template`;
        const parameters = [
            o.literal(templateIndex),
            o.variable(templateName),
            // We don't care about the tag's namespace here, because we infer
            // it based on the parent nodes inside the template instruction.
            o.literal(template.tagName ? splitNsName(template.tagName)[1] : template.tagName),
        ];
        // find directives matching on a given <ng-template> node
        this.matchDirectives(NG_TEMPLATE_TAG_NAME, template);
        // prepare attributes parameter (including attributes used for directive matching)
        const [i18nStaticAttrs, staticAttrs] = partitionArray(template.attributes, hasI18nMeta);
        const attrsExprs = this.getAttributeExpressions(staticAttrs, template.inputs, template.outputs, undefined /* styles */, template.templateAttrs, i18nStaticAttrs);
        parameters.push(this.addAttrsToConsts(attrsExprs));
        // local refs (ex.: <ng-template #foo>)
        if (template.references && template.references.length) {
            const refs = this.prepareRefsArray(template.references);
            parameters.push(this.addToConsts(refs));
            parameters.push(o.importExpr(R3.templateRefExtractor));
        }
        // Create the template function
        const templateVisitor = new TemplateDefinitionBuilder(this.constantPool, this._bindingScope, this.level + 1, contextName, this.i18n, templateIndex, templateName, this.directiveMatcher, this.directives, this.pipeTypeByName, this.pipes, this._namespace, this.fileBasedI18nSuffix, this.i18nUseExternalIds, this._constants);
        // Nested templates must not be visited until after their parent templates have completed
        // processing, so they are queued here until after the initial pass. Otherwise, we wouldn't
        // be able to support bindings in nested templates to local refs that occur after the
        // template definition. e.g. <div *ngIf="showing">{{ foo }}</div>  <div #foo></div>
        this._nestedTemplateFns.push(() => {
            const templateFunctionExpr = templateVisitor.buildTemplateFunction(template.children, template.variables, this._ngContentReservedSlots.length + this._ngContentSelectorsOffset, template.i18n);
            this.constantPool.statements.push(templateFunctionExpr.toDeclStmt(templateName, null));
            if (templateVisitor._ngContentReservedSlots.length) {
                this._ngContentReservedSlots.push(...templateVisitor._ngContentReservedSlots);
            }
        });
        // e.g. template(1, MyComp_Template_1)
        this.creationInstruction(template.sourceSpan, R3.templateCreate, () => {
            parameters.splice(2, 0, o.literal(templateVisitor.getConstCount()), o.literal(templateVisitor.getVarCount()));
            return trimTrailingNulls(parameters);
        });
        // handle property bindings e.g. ɵɵproperty('ngForOf', ctx.items), et al;
        this.templatePropertyBindings(templateIndex, template.templateAttrs);
        // Only add normal input/output binding instructions on explicit <ng-template> elements.
        if (template.tagName === NG_TEMPLATE_TAG_NAME) {
            const [i18nInputs, inputs] = partitionArray(template.inputs, hasI18nMeta);
            const i18nAttrs = [...i18nStaticAttrs, ...i18nInputs];
            // Add i18n attributes that may act as inputs to directives. If such attributes are present,
            // generate `i18nAttributes` instruction. Note: we generate it only for explicit <ng-template>
            // elements, in case of inline templates, corresponding instructions will be generated in the
            // nested template function.
            if (i18nAttrs.length > 0) {
                this.i18nAttributesInstruction(templateIndex, i18nAttrs, template.sourceSpan);
            }
            // Add the input bindings
            if (inputs.length > 0) {
                this.templatePropertyBindings(templateIndex, inputs);
            }
            // Generate listeners for directive output
            if (template.outputs.length > 0) {
                const listeners = template.outputs.map((outputAst) => ({
                    sourceSpan: outputAst.sourceSpan,
                    params: this.prepareListenerParameter('ng_template', outputAst, templateIndex)
                }));
                this.creationInstructionChain(R3.listener, listeners);
            }
        }
    }
    visitBoundText(text) {
        if (this.i18n) {
            const value = text.value.visit(this._valueConverter);
            this.allocateBindingSlots(value);
            if (value instanceof Interpolation) {
                this.i18n.appendBoundText(text.i18n);
                this.i18nAppendBindings(value.expressions);
            }
            return;
        }
        const nodeIndex = this.allocateDataSlot();
        this.creationInstruction(text.sourceSpan, R3.text, [o.literal(nodeIndex)]);
        const value = text.value.visit(this._valueConverter);
        this.allocateBindingSlots(value);
        if (value instanceof Interpolation) {
            this.updateInstructionWithAdvance(nodeIndex, text.sourceSpan, getTextInterpolationExpression(value), () => this.getUpdateInstructionArguments(value));
        }
        else {
            error('Text nodes should be interpolated and never bound directly.');
        }
    }
    visitText(text) {
        // when a text element is located within a translatable
        // block, we exclude this text element from instructions set,
        // since it will be captured in i18n content and processed at runtime
        if (!this.i18n) {
            this.creationInstruction(text.sourceSpan, R3.text, [o.literal(this.allocateDataSlot()), o.literal(text.value)]);
        }
    }
    visitIcu(icu) {
        let initWasInvoked = false;
        // if an ICU was created outside of i18n block, we still treat
        // it as a translatable entity and invoke i18nStart and i18nEnd
        // to generate i18n context and the necessary instructions
        if (!this.i18n) {
            initWasInvoked = true;
            this.i18nStart(null, icu.i18n, true);
        }
        const i18n = this.i18n;
        const vars = this.i18nBindProps(icu.vars);
        const placeholders = this.i18nBindProps(icu.placeholders);
        // output ICU directly and keep ICU reference in context
        const message = icu.i18n;
        // we always need post-processing function for ICUs, to make sure that:
        // - all placeholders in a form of {PLACEHOLDER} are replaced with actual values (note:
        // `goog.getMsg` does not process ICUs and uses the `{PLACEHOLDER}` format for placeholders
        // inside ICUs)
        // - all ICU vars (such as `VAR_SELECT` or `VAR_PLURAL`) are replaced with correct values
        const transformFn = (raw) => {
            const params = Object.assign(Object.assign({}, vars), placeholders);
            const formatted = i18nFormatPlaceholderNames(params, /* useCamelCase */ false);
            return instruction(null, R3.i18nPostprocess, [raw, mapLiteral(formatted, true)]);
        };
        // in case the whole i18n message is a single ICU - we do not need to
        // create a separate top-level translation, we can use the root ref instead
        // and make this ICU a top-level translation
        // note: ICU placeholders are replaced with actual values in `i18nPostprocess` function
        // separately, so we do not pass placeholders into `i18nTranslate` function.
        if (isSingleI18nIcu(i18n.meta)) {
            this.i18nTranslate(message, /* placeholders */ {}, i18n.ref, transformFn);
        }
        else {
            // output ICU directly and keep ICU reference in context
            const ref = this.i18nTranslate(message, /* placeholders */ {}, /* ref */ undefined, transformFn);
            i18n.appendIcu(icuFromI18nMessage(message).name, ref);
        }
        if (initWasInvoked) {
            this.i18nEnd(null, true);
        }
        return null;
    }
    allocateDataSlot() {
        return this._dataIndex++;
    }
    getConstCount() {
        return this._dataIndex;
    }
    getVarCount() {
        return this._pureFunctionSlots;
    }
    getConsts() {
        return this._constants;
    }
    getNgContentSelectors() {
        return this._ngContentReservedSlots.length ?
            this.constantPool.getConstLiteral(asLiteral(this._ngContentReservedSlots), true) :
            null;
    }
    bindingContext() {
        return `${this._bindingContext++}`;
    }
    templatePropertyBindings(templateIndex, attrs) {
        const propertyBindings = [];
        attrs.forEach(input => {
            if (input instanceof t.BoundAttribute) {
                const value = input.value.visit(this._valueConverter);
                if (value !== undefined) {
                    this.allocateBindingSlots(value);
                    if (value instanceof Interpolation) {
                        // Params typically contain attribute namespace and value sanitizer, which is applicable
                        // for regular HTML elements, but not applicable for <ng-template> (since props act as
                        // inputs to directives), so keep params array empty.
                        const params = [];
                        // prop="{{value}}" case
                        this.interpolatedUpdateInstruction(getPropertyInterpolationExpression(value), templateIndex, input.name, input, value, params);
                    }
                    else {
                        // [prop]="value" case
                        propertyBindings.push({
                            name: input.name,
                            sourceSpan: input.sourceSpan,
                            value: () => this.convertPropertyBinding(value)
                        });
                    }
                }
            }
        });
        if (propertyBindings.length > 0) {
            this.updateInstructionChainWithAdvance(templateIndex, R3.property, propertyBindings);
        }
    }
    // Bindings must only be resolved after all local refs have been visited, so all
    // instructions are queued in callbacks that execute once the initial pass has completed.
    // Otherwise, we wouldn't be able to support local refs that are defined after their
    // bindings. e.g. {{ foo }} <div #foo></div>
    instructionFn(fns, span, reference, paramsOrFn, prepend = false) {
        fns[prepend ? 'unshift' : 'push'](() => {
            const params = Array.isArray(paramsOrFn) ? paramsOrFn : paramsOrFn();
            return instruction(span, reference, params).toStmt();
        });
    }
    processStylingUpdateInstruction(elementIndex, instruction) {
        let allocateBindingSlots = 0;
        if (instruction) {
            const calls = [];
            instruction.calls.forEach(call => {
                allocateBindingSlots += call.allocateBindingSlots;
                calls.push({
                    sourceSpan: call.sourceSpan,
                    value: () => {
                        return call.params(value => (call.supportsInterpolation && value instanceof Interpolation) ?
                            this.getUpdateInstructionArguments(value) :
                            this.convertPropertyBinding(value));
                    }
                });
            });
            this.updateInstructionChainWithAdvance(elementIndex, instruction.reference, calls);
        }
        return allocateBindingSlots;
    }
    creationInstruction(span, reference, paramsOrFn, prepend) {
        this.instructionFn(this._creationCodeFns, span, reference, paramsOrFn || [], prepend);
    }
    creationInstructionChain(reference, calls) {
        const span = calls.length ? calls[0].sourceSpan : null;
        this._creationCodeFns.push(() => {
            return chainedInstruction(reference, calls.map(call => call.params()), span).toStmt();
        });
    }
    updateInstructionWithAdvance(nodeIndex, span, reference, paramsOrFn) {
        this.addAdvanceInstructionIfNecessary(nodeIndex, span);
        this.updateInstruction(span, reference, paramsOrFn);
    }
    updateInstruction(span, reference, paramsOrFn) {
        this.instructionFn(this._updateCodeFns, span, reference, paramsOrFn || []);
    }
    updateInstructionChain(reference, bindings) {
        const span = bindings.length ? bindings[0].sourceSpan : null;
        this._updateCodeFns.push(() => {
            const calls = bindings.map(property => {
                const value = property.value();
                const fnParams = Array.isArray(value) ? value : [value];
                if (property.params) {
                    fnParams.push(...property.params);
                }
                if (property.name) {
                    // We want the property name to always be the first function parameter.
                    fnParams.unshift(o.literal(property.name));
                }
                return fnParams;
            });
            return chainedInstruction(reference, calls, span).toStmt();
        });
    }
    updateInstructionChainWithAdvance(nodeIndex, reference, bindings) {
        this.addAdvanceInstructionIfNecessary(nodeIndex, bindings.length ? bindings[0].sourceSpan : null);
        this.updateInstructionChain(reference, bindings);
    }
    addAdvanceInstructionIfNecessary(nodeIndex, span) {
        if (nodeIndex !== this._currentIndex) {
            const delta = nodeIndex - this._currentIndex;
            if (delta < 1) {
                throw new Error('advance instruction can only go forwards');
            }
            this.instructionFn(this._updateCodeFns, span, R3.advance, [o.literal(delta)]);
            this._currentIndex = nodeIndex;
        }
    }
    allocatePureFunctionSlots(numSlots) {
        const originalSlots = this._pureFunctionSlots;
        this._pureFunctionSlots += numSlots;
        return originalSlots;
    }
    allocateBindingSlots(value) {
        this._bindingSlots += value instanceof Interpolation ? value.expressions.length : 1;
    }
    /**
     * Gets an expression that refers to the implicit receiver. The implicit
     * receiver is always the root level context.
     */
    getImplicitReceiverExpr() {
        if (this._implicitReceiverExpr) {
            return this._implicitReceiverExpr;
        }
        return this._implicitReceiverExpr = this.level === 0 ?
            o.variable(CONTEXT_NAME) :
            this._bindingScope.getOrCreateSharedContextVar(0);
    }
    convertPropertyBinding(value) {
        const convertedPropertyBinding = convertPropertyBinding(this, this.getImplicitReceiverExpr(), value, this.bindingContext(), BindingForm.TrySimple, () => error('Unexpected interpolation'));
        const valExpr = convertedPropertyBinding.currValExpr;
        this._tempVariables.push(...convertedPropertyBinding.stmts);
        return valExpr;
    }
    /**
     * Gets a list of argument expressions to pass to an update instruction expression. Also updates
     * the temp variables state with temp variables that were identified as needing to be created
     * while visiting the arguments.
     * @param value The original expression we will be resolving an arguments list from.
     */
    getUpdateInstructionArguments(value) {
        const { args, stmts } = convertUpdateArguments(this, this.getImplicitReceiverExpr(), value, this.bindingContext());
        this._tempVariables.push(...stmts);
        return args;
    }
    matchDirectives(elementName, elOrTpl) {
        if (this.directiveMatcher) {
            const selector = createCssSelector(elementName, getAttrsForDirectiveMatching(elOrTpl));
            this.directiveMatcher.match(selector, (cssSelector, staticType) => {
                this.directives.add(staticType);
            });
        }
    }
    /**
     * Prepares all attribute expression values for the `TAttributes` array.
     *
     * The purpose of this function is to properly construct an attributes array that
     * is passed into the `elementStart` (or just `element`) functions. Because there
     * are many different types of attributes, the array needs to be constructed in a
     * special way so that `elementStart` can properly evaluate them.
     *
     * The format looks like this:
     *
     * ```
     * attrs = [prop, value, prop2, value2,
     *   PROJECT_AS, selector,
     *   CLASSES, class1, class2,
     *   STYLES, style1, value1, style2, value2,
     *   BINDINGS, name1, name2, name3,
     *   TEMPLATE, name4, name5, name6,
     *   I18N, name7, name8, ...]
     * ```
     *
     * Note that this function will fully ignore all synthetic (@foo) attribute values
     * because those values are intended to always be generated as property instructions.
     */
    getAttributeExpressions(renderAttributes, inputs, outputs, styles, templateAttrs = [], i18nAttrs = []) {
        const alreadySeen = new Set();
        const attrExprs = [];
        let ngProjectAsAttr;
        renderAttributes.forEach((attr) => {
            if (attr.name === NG_PROJECT_AS_ATTR_NAME) {
                ngProjectAsAttr = attr;
            }
            attrExprs.push(...getAttributeNameLiterals(attr.name), asLiteral(attr.value));
        });
        // Keep ngProjectAs next to the other name, value pairs so we can verify that we match
        // ngProjectAs marker in the attribute name slot.
        if (ngProjectAsAttr) {
            attrExprs.push(...getNgProjectAsLiteral(ngProjectAsAttr));
        }
        function addAttrExpr(key, value) {
            if (typeof key === 'string') {
                if (!alreadySeen.has(key)) {
                    attrExprs.push(...getAttributeNameLiterals(key));
                    value !== undefined && attrExprs.push(value);
                    alreadySeen.add(key);
                }
            }
            else {
                attrExprs.push(o.literal(key));
            }
        }
        // it's important that this occurs before BINDINGS and TEMPLATE because once `elementStart`
        // comes across the BINDINGS or TEMPLATE markers then it will continue reading each value as
        // as single property value cell by cell.
        if (styles) {
            styles.populateInitialStylingAttrs(attrExprs);
        }
        if (inputs.length || outputs.length) {
            const attrsLengthBeforeInputs = attrExprs.length;
            for (let i = 0; i < inputs.length; i++) {
                const input = inputs[i];
                // We don't want the animation and attribute bindings in the
                // attributes array since they aren't used for directive matching.
                if (input.type !== 4 /* Animation */ && input.type !== 1 /* Attribute */) {
                    addAttrExpr(input.name);
                }
            }
            for (let i = 0; i < outputs.length; i++) {
                const output = outputs[i];
                if (output.type !== 1 /* Animation */) {
                    addAttrExpr(output.name);
                }
            }
            // this is a cheap way of adding the marker only after all the input/output
            // values have been filtered (by not including the animation ones) and added
            // to the expressions. The marker is important because it tells the runtime
            // code that this is where attributes without values start...
            if (attrExprs.length !== attrsLengthBeforeInputs) {
                attrExprs.splice(attrsLengthBeforeInputs, 0, o.literal(3 /* Bindings */));
            }
        }
        if (templateAttrs.length) {
            attrExprs.push(o.literal(4 /* Template */));
            templateAttrs.forEach(attr => addAttrExpr(attr.name));
        }
        if (i18nAttrs.length) {
            attrExprs.push(o.literal(6 /* I18n */));
            i18nAttrs.forEach(attr => addAttrExpr(attr.name));
        }
        return attrExprs;
    }
    addToConsts(expression) {
        if (o.isNull(expression)) {
            return o.TYPED_NULL_EXPR;
        }
        // Try to reuse a literal that's already in the array, if possible.
        for (let i = 0; i < this._constants.length; i++) {
            if (this._constants[i].isEquivalent(expression)) {
                return o.literal(i);
            }
        }
        return o.literal(this._constants.push(expression) - 1);
    }
    addAttrsToConsts(attrs) {
        return attrs.length > 0 ? this.addToConsts(o.literalArr(attrs)) : o.TYPED_NULL_EXPR;
    }
    prepareRefsArray(references) {
        if (!references || references.length === 0) {
            return o.TYPED_NULL_EXPR;
        }
        const refsParam = flatten(references.map(reference => {
            const slot = this.allocateDataSlot();
            // Generate the update temporary.
            const variableName = this._bindingScope.freshReferenceName();
            const retrievalLevel = this.level;
            const lhs = o.variable(variableName);
            this._bindingScope.set(retrievalLevel, reference.name, lhs, 0 /* DEFAULT */, (scope, relativeLevel) => {
                // e.g. nextContext(2);
                const nextContextStmt = relativeLevel > 0 ? [generateNextContextExpr(relativeLevel).toStmt()] : [];
                // e.g. const $foo$ = reference(1);
                const refExpr = lhs.set(o.importExpr(R3.reference).callFn([o.literal(slot)]));
                return nextContextStmt.concat(refExpr.toConstDecl());
            }, true);
            return [reference.name, reference.value];
        }));
        return asLiteral(refsParam);
    }
    prepareListenerParameter(tagName, outputAst, index) {
        return () => {
            const eventName = outputAst.name;
            const bindingFnName = outputAst.type === 1 /* Animation */ ?
                // synthetic @listener.foo values are treated the exact same as are standard listeners
                prepareSyntheticListenerFunctionName(eventName, outputAst.phase) :
                sanitizeIdentifier(eventName);
            const handlerName = `${this.templateName}_${tagName}_${bindingFnName}_${index}_listener`;
            const scope = this._bindingScope.nestedScope(this._bindingScope.bindingLevel);
            return prepareEventListenerParameters(outputAst, handlerName, scope);
        };
    }
}
export class ValueConverter extends AstMemoryEfficientTransformer {
    constructor(constantPool, allocateSlot, allocatePureFunctionSlots, definePipe) {
        super();
        this.constantPool = constantPool;
        this.allocateSlot = allocateSlot;
        this.allocatePureFunctionSlots = allocatePureFunctionSlots;
        this.definePipe = definePipe;
        this._pipeBindExprs = [];
    }
    // AstMemoryEfficientTransformer
    visitPipe(pipe, context) {
        // Allocate a slot to create the pipe
        const slot = this.allocateSlot();
        const slotPseudoLocal = `PIPE:${slot}`;
        // Allocate one slot for the result plus one slot per pipe argument
        const pureFunctionSlot = this.allocatePureFunctionSlots(2 + pipe.args.length);
        const target = new PropertyRead(pipe.span, pipe.sourceSpan, pipe.nameSpan, new ImplicitReceiver(pipe.span, pipe.sourceSpan), slotPseudoLocal);
        const { identifier, isVarLength } = pipeBindingCallInfo(pipe.args);
        this.definePipe(pipe.name, slotPseudoLocal, slot, o.importExpr(identifier));
        const args = [pipe.exp, ...pipe.args];
        const convertedArgs = isVarLength ?
            this.visitAll([new LiteralArray(pipe.span, pipe.sourceSpan, args)]) :
            this.visitAll(args);
        const pipeBindExpr = new FunctionCall(pipe.span, pipe.sourceSpan, target, [
            new LiteralPrimitive(pipe.span, pipe.sourceSpan, slot),
            new LiteralPrimitive(pipe.span, pipe.sourceSpan, pureFunctionSlot),
            ...convertedArgs,
        ]);
        this._pipeBindExprs.push(pipeBindExpr);
        return pipeBindExpr;
    }
    updatePipeSlotOffsets(bindingSlots) {
        this._pipeBindExprs.forEach((pipe) => {
            // update the slot offset arg (index 1) to account for binding slots
            const slotOffset = pipe.args[1];
            slotOffset.value += bindingSlots;
        });
    }
    visitLiteralArray(array, context) {
        return new BuiltinFunctionCall(array.span, array.sourceSpan, this.visitAll(array.expressions), values => {
            // If the literal has calculated (non-literal) elements transform it into
            // calls to literal factories that compose the literal and will cache intermediate
            // values.
            const literal = o.literalArr(values);
            return getLiteralFactory(this.constantPool, literal, this.allocatePureFunctionSlots);
        });
    }
    visitLiteralMap(map, context) {
        return new BuiltinFunctionCall(map.span, map.sourceSpan, this.visitAll(map.values), values => {
            // If the literal has calculated (non-literal) elements  transform it into
            // calls to literal factories that compose the literal and will cache intermediate
            // values.
            const literal = o.literalMap(values.map((value, index) => ({ key: map.keys[index].key, value, quoted: map.keys[index].quoted })));
            return getLiteralFactory(this.constantPool, literal, this.allocatePureFunctionSlots);
        });
    }
}
// Pipes always have at least one parameter, the value they operate on
const pipeBindingIdentifiers = [R3.pipeBind1, R3.pipeBind2, R3.pipeBind3, R3.pipeBind4];
function pipeBindingCallInfo(args) {
    const identifier = pipeBindingIdentifiers[args.length];
    return {
        identifier: identifier || R3.pipeBindV,
        isVarLength: !identifier,
    };
}
const pureFunctionIdentifiers = [
    R3.pureFunction0, R3.pureFunction1, R3.pureFunction2, R3.pureFunction3, R3.pureFunction4,
    R3.pureFunction5, R3.pureFunction6, R3.pureFunction7, R3.pureFunction8
];
function pureFunctionCallInfo(args) {
    const identifier = pureFunctionIdentifiers[args.length];
    return {
        identifier: identifier || R3.pureFunctionV,
        isVarLength: !identifier,
    };
}
function instruction(span, reference, params) {
    return o.importExpr(reference, null, span).callFn(params, span);
}
// e.g. x(2);
function generateNextContextExpr(relativeLevelDiff) {
    return o.importExpr(R3.nextContext)
        .callFn(relativeLevelDiff > 1 ? [o.literal(relativeLevelDiff)] : []);
}
function getLiteralFactory(constantPool, literal, allocateSlots) {
    const { literalFactory, literalFactoryArguments } = constantPool.getLiteralFactory(literal);
    // Allocate 1 slot for the result plus 1 per argument
    const startSlot = allocateSlots(1 + literalFactoryArguments.length);
    const { identifier, isVarLength } = pureFunctionCallInfo(literalFactoryArguments);
    // Literal factories are pure functions that only need to be re-invoked when the parameters
    // change.
    const args = [o.literal(startSlot), literalFactory];
    if (isVarLength) {
        args.push(o.literalArr(literalFactoryArguments));
    }
    else {
        args.push(...literalFactoryArguments);
    }
    return o.importExpr(identifier).callFn(args);
}
/**
 * Gets an array of literals that can be added to an expression
 * to represent the name and namespace of an attribute. E.g.
 * `:xlink:href` turns into `[AttributeMarker.NamespaceURI, 'xlink', 'href']`.
 *
 * @param name Name of the attribute, including the namespace.
 */
function getAttributeNameLiterals(name) {
    const [attributeNamespace, attributeName] = splitNsName(name);
    const nameLiteral = o.literal(attributeName);
    if (attributeNamespace) {
        return [
            o.literal(0 /* NamespaceURI */), o.literal(attributeNamespace), nameLiteral
        ];
    }
    return [nameLiteral];
}
/** The prefix used to get a shared context in BindingScope's map. */
const SHARED_CONTEXT_KEY = '$$shared_ctx$$';
export class BindingScope {
    constructor(bindingLevel = 0, parent = null) {
        this.bindingLevel = bindingLevel;
        this.parent = parent;
        /** Keeps a map from local variables to their BindingData. */
        this.map = new Map();
        this.referenceNameIndex = 0;
        this.restoreViewVariable = null;
    }
    static createRootScope() {
        return new BindingScope().set(0, '$event', o.variable('$event'));
    }
    get(name) {
        let current = this;
        while (current) {
            let value = current.map.get(name);
            if (value != null) {
                if (current !== this) {
                    // make a local copy and reset the `declare` state
                    value = {
                        retrievalLevel: value.retrievalLevel,
                        lhs: value.lhs,
                        declareLocalCallback: value.declareLocalCallback,
                        declare: false,
                        priority: value.priority,
                        localRef: value.localRef
                    };
                    // Cache the value locally.
                    this.map.set(name, value);
                    // Possibly generate a shared context var
                    this.maybeGenerateSharedContextVar(value);
                    this.maybeRestoreView(value.retrievalLevel, value.localRef);
                }
                if (value.declareLocalCallback && !value.declare) {
                    value.declare = true;
                }
                return value.lhs;
            }
            current = current.parent;
        }
        // If we get to this point, we are looking for a property on the top level component
        // - If level === 0, we are on the top and don't need to re-declare `ctx`.
        // - If level > 0, we are in an embedded view. We need to retrieve the name of the
        // local var we used to store the component context, e.g. const $comp$ = x();
        return this.bindingLevel === 0 ? null : this.getComponentProperty(name);
    }
    /**
     * Create a local variable for later reference.
     *
     * @param retrievalLevel The level from which this value can be retrieved
     * @param name Name of the variable.
     * @param lhs AST representing the left hand side of the `let lhs = rhs;`.
     * @param priority The sorting priority of this var
     * @param declareLocalCallback The callback to invoke when declaring this local var
     * @param localRef Whether or not this is a local ref
     */
    set(retrievalLevel, name, lhs, priority = 0 /* DEFAULT */, declareLocalCallback, localRef) {
        if (this.map.has(name)) {
            if (localRef) {
                // Do not throw an error if it's a local ref and do not update existing value,
                // so the first defined ref is always returned.
                return this;
            }
            error(`The name ${name} is already defined in scope to be ${this.map.get(name)}`);
        }
        this.map.set(name, {
            retrievalLevel: retrievalLevel,
            lhs: lhs,
            declare: false,
            declareLocalCallback: declareLocalCallback,
            priority: priority,
            localRef: localRef || false
        });
        return this;
    }
    // Implemented as part of LocalResolver.
    getLocal(name) {
        return this.get(name);
    }
    // Implemented as part of LocalResolver.
    notifyImplicitReceiverUse() {
        if (this.bindingLevel !== 0) {
            // Since the implicit receiver is accessed in an embedded view, we need to
            // ensure that we declare a shared context variable for the current template
            // in the update variables.
            this.map.get(SHARED_CONTEXT_KEY + 0).declare = true;
        }
    }
    nestedScope(level) {
        const newScope = new BindingScope(level, this);
        if (level > 0)
            newScope.generateSharedContextVar(0);
        return newScope;
    }
    /**
     * Gets or creates a shared context variable and returns its expression. Note that
     * this does not mean that the shared variable will be declared. Variables in the
     * binding scope will be only declared if they are used.
     */
    getOrCreateSharedContextVar(retrievalLevel) {
        const bindingKey = SHARED_CONTEXT_KEY + retrievalLevel;
        if (!this.map.has(bindingKey)) {
            this.generateSharedContextVar(retrievalLevel);
        }
        // Shared context variables are always generated as "ReadVarExpr".
        return this.map.get(bindingKey).lhs;
    }
    getSharedContextName(retrievalLevel) {
        const sharedCtxObj = this.map.get(SHARED_CONTEXT_KEY + retrievalLevel);
        // Shared context variables are always generated as "ReadVarExpr".
        return sharedCtxObj && sharedCtxObj.declare ? sharedCtxObj.lhs : null;
    }
    maybeGenerateSharedContextVar(value) {
        if (value.priority === 1 /* CONTEXT */ &&
            value.retrievalLevel < this.bindingLevel) {
            const sharedCtxObj = this.map.get(SHARED_CONTEXT_KEY + value.retrievalLevel);
            if (sharedCtxObj) {
                sharedCtxObj.declare = true;
            }
            else {
                this.generateSharedContextVar(value.retrievalLevel);
            }
        }
    }
    generateSharedContextVar(retrievalLevel) {
        const lhs = o.variable(CONTEXT_NAME + this.freshReferenceName());
        this.map.set(SHARED_CONTEXT_KEY + retrievalLevel, {
            retrievalLevel: retrievalLevel,
            lhs: lhs,
            declareLocalCallback: (scope, relativeLevel) => {
                // const ctx_r0 = nextContext(2);
                return [lhs.set(generateNextContextExpr(relativeLevel)).toConstDecl()];
            },
            declare: false,
            priority: 2 /* SHARED_CONTEXT */,
            localRef: false
        });
    }
    getComponentProperty(name) {
        const componentValue = this.map.get(SHARED_CONTEXT_KEY + 0);
        componentValue.declare = true;
        this.maybeRestoreView(0, false);
        return componentValue.lhs.prop(name);
    }
    maybeRestoreView(retrievalLevel, localRefLookup) {
        // We want to restore the current view in listener fns if:
        // 1 - we are accessing a value in a parent view, which requires walking the view tree rather
        // than using the ctx arg. In this case, the retrieval and binding level will be different.
        // 2 - we are looking up a local ref, which requires restoring the view where the local
        // ref is stored
        if (this.isListenerScope() && (retrievalLevel < this.bindingLevel || localRefLookup)) {
            if (!this.parent.restoreViewVariable) {
                // parent saves variable to generate a shared `const $s$ = getCurrentView();` instruction
                this.parent.restoreViewVariable = o.variable(this.parent.freshReferenceName());
            }
            this.restoreViewVariable = this.parent.restoreViewVariable;
        }
    }
    restoreViewStatement() {
        // restoreView($state$);
        return this.restoreViewVariable ?
            [instruction(null, R3.restoreView, [this.restoreViewVariable]).toStmt()] :
            [];
    }
    viewSnapshotStatements() {
        // const $state$ = getCurrentView();
        const getCurrentViewInstruction = instruction(null, R3.getCurrentView, []);
        return this.restoreViewVariable ?
            [this.restoreViewVariable.set(getCurrentViewInstruction).toConstDecl()] :
            [];
    }
    isListenerScope() {
        return this.parent && this.parent.bindingLevel === this.bindingLevel;
    }
    variableDeclarations() {
        let currentContextLevel = 0;
        return Array.from(this.map.values())
            .filter(value => value.declare)
            .sort((a, b) => b.retrievalLevel - a.retrievalLevel || b.priority - a.priority)
            .reduce((stmts, value) => {
            const levelDiff = this.bindingLevel - value.retrievalLevel;
            const currStmts = value.declareLocalCallback(this, levelDiff - currentContextLevel);
            currentContextLevel = levelDiff;
            return stmts.concat(currStmts);
        }, []);
    }
    freshReferenceName() {
        let current = this;
        // Find the top scope as it maintains the global reference count
        while (current.parent)
            current = current.parent;
        const ref = `${REFERENCE_PREFIX}${current.referenceNameIndex++}`;
        return ref;
    }
}
/**
 * Creates a `CssSelector` given a tag name and a map of attributes
 */
export function createCssSelector(elementName, attributes) {
    const cssSelector = new CssSelector();
    const elementNameNoNs = splitNsName(elementName)[1];
    cssSelector.setElement(elementNameNoNs);
    Object.getOwnPropertyNames(attributes).forEach((name) => {
        const nameNoNs = splitNsName(name)[1];
        const value = attributes[name];
        cssSelector.addAttribute(nameNoNs, value);
        if (name.toLowerCase() === 'class') {
            const classes = value.trim().split(/\s+/);
            classes.forEach(className => cssSelector.addClassName(className));
        }
    });
    return cssSelector;
}
/**
 * Creates an array of expressions out of an `ngProjectAs` attributes
 * which can be added to the instruction parameters.
 */
function getNgProjectAsLiteral(attribute) {
    // Parse the attribute value into a CssSelectorList. Note that we only take the
    // first selector, because we don't support multiple selectors in ngProjectAs.
    const parsedR3Selector = core.parseSelectorToR3Selector(attribute.value)[0];
    return [o.literal(5 /* ProjectAs */), asLiteral(parsedR3Selector)];
}
/**
 * Gets the instruction to generate for an interpolated property
 * @param interpolation An Interpolation AST
 */
function getPropertyInterpolationExpression(interpolation) {
    switch (getInterpolationArgsLength(interpolation)) {
        case 1:
            return R3.propertyInterpolate;
        case 3:
            return R3.propertyInterpolate1;
        case 5:
            return R3.propertyInterpolate2;
        case 7:
            return R3.propertyInterpolate3;
        case 9:
            return R3.propertyInterpolate4;
        case 11:
            return R3.propertyInterpolate5;
        case 13:
            return R3.propertyInterpolate6;
        case 15:
            return R3.propertyInterpolate7;
        case 17:
            return R3.propertyInterpolate8;
        default:
            return R3.propertyInterpolateV;
    }
}
/**
 * Gets the instruction to generate for an interpolated attribute
 * @param interpolation An Interpolation AST
 */
function getAttributeInterpolationExpression(interpolation) {
    switch (getInterpolationArgsLength(interpolation)) {
        case 3:
            return R3.attributeInterpolate1;
        case 5:
            return R3.attributeInterpolate2;
        case 7:
            return R3.attributeInterpolate3;
        case 9:
            return R3.attributeInterpolate4;
        case 11:
            return R3.attributeInterpolate5;
        case 13:
            return R3.attributeInterpolate6;
        case 15:
            return R3.attributeInterpolate7;
        case 17:
            return R3.attributeInterpolate8;
        default:
            return R3.attributeInterpolateV;
    }
}
/**
 * Gets the instruction to generate for interpolated text.
 * @param interpolation An Interpolation AST
 */
function getTextInterpolationExpression(interpolation) {
    switch (getInterpolationArgsLength(interpolation)) {
        case 1:
            return R3.textInterpolate;
        case 3:
            return R3.textInterpolate1;
        case 5:
            return R3.textInterpolate2;
        case 7:
            return R3.textInterpolate3;
        case 9:
            return R3.textInterpolate4;
        case 11:
            return R3.textInterpolate5;
        case 13:
            return R3.textInterpolate6;
        case 15:
            return R3.textInterpolate7;
        case 17:
            return R3.textInterpolate8;
        default:
            return R3.textInterpolateV;
    }
}
/**
 * Parse a template into render3 `Node`s and additional metadata, with no other dependencies.
 *
 * @param template text of the template to parse
 * @param templateUrl URL to use for source mapping of the parsed template
 * @param options options to modify how the template is parsed
 */
export function parseTemplate(template, templateUrl, options = {}) {
    const { interpolationConfig, preserveWhitespaces, enableI18nLegacyMessageIdFormat } = options;
    const bindingParser = makeBindingParser(interpolationConfig);
    const htmlParser = new HtmlParser();
    const parseResult = htmlParser.parse(template, templateUrl, Object.assign(Object.assign({ leadingTriviaChars: LEADING_TRIVIA_CHARS }, options), { tokenizeExpansionForms: true }));
    if (parseResult.errors && parseResult.errors.length > 0) {
        return {
            errors: parseResult.errors,
            nodes: [],
            styleUrls: [],
            styles: [],
            ngContentSelectors: []
        };
    }
    let rootNodes = parseResult.rootNodes;
    // process i18n meta information (scan attributes, generate ids)
    // before we run whitespace removal process, because existing i18n
    // extraction process (ng xi18n) relies on a raw content to generate
    // message ids
    const i18nMetaVisitor = new I18nMetaVisitor(interpolationConfig, /* keepI18nAttrs */ !preserveWhitespaces, enableI18nLegacyMessageIdFormat);
    rootNodes = html.visitAll(i18nMetaVisitor, rootNodes);
    if (!preserveWhitespaces) {
        rootNodes = html.visitAll(new WhitespaceVisitor(), rootNodes);
        // run i18n meta visitor again in case whitespaces are removed (because that might affect
        // generated i18n message content) and first pass indicated that i18n content is present in a
        // template. During this pass i18n IDs generated at the first pass will be preserved, so we can
        // mimic existing extraction process (ng xi18n)
        if (i18nMetaVisitor.hasI18nMeta) {
            rootNodes = html.visitAll(new I18nMetaVisitor(interpolationConfig, /* keepI18nAttrs */ false), rootNodes);
        }
    }
    const { nodes, errors, styleUrls, styles, ngContentSelectors } = htmlAstToRender3Ast(rootNodes, bindingParser);
    if (errors && errors.length > 0) {
        return { errors, nodes: [], styleUrls: [], styles: [], ngContentSelectors: [] };
    }
    return { nodes, styleUrls, styles, ngContentSelectors };
}
const elementRegistry = new DomElementSchemaRegistry();
/**
 * Construct a `BindingParser` with a default configuration.
 */
export function makeBindingParser(interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
    return new BindingParser(new IvyParser(new Lexer()), interpolationConfig, elementRegistry, null, []);
}
export function resolveSanitizationFn(context, isAttribute) {
    switch (context) {
        case core.SecurityContext.HTML:
            return o.importExpr(R3.sanitizeHtml);
        case core.SecurityContext.SCRIPT:
            return o.importExpr(R3.sanitizeScript);
        case core.SecurityContext.STYLE:
            // the compiler does not fill in an instruction for [style.prop?] binding
            // values because the style algorithm knows internally what props are subject
            // to sanitization (only [attr.style] values are explicitly sanitized)
            return isAttribute ? o.importExpr(R3.sanitizeStyle) : null;
        case core.SecurityContext.URL:
            return o.importExpr(R3.sanitizeUrl);
        case core.SecurityContext.RESOURCE_URL:
            return o.importExpr(R3.sanitizeResourceUrl);
        default:
            return null;
    }
}
function isSingleElementTemplate(children) {
    return children.length === 1 && children[0] instanceof t.Element;
}
function isTextNode(node) {
    return node instanceof t.Text || node instanceof t.BoundText || node instanceof t.Icu;
}
function hasTextChildrenOnly(children) {
    return children.every(isTextNode);
}
/** Name of the global variable that is used to determine if we use Closure translations or not */
const NG_I18N_CLOSURE_MODE = 'ngI18nClosureMode';
/**
 * Generate statements that define a given translation message.
 *
 * ```
 * var I18N_1;
 * if (typeof ngI18nClosureMode !== undefined && ngI18nClosureMode) {
 *     var MSG_EXTERNAL_XXX = goog.getMsg(
 *          "Some message with {$interpolation}!",
 *          { "interpolation": "\uFFFD0\uFFFD" }
 *     );
 *     I18N_1 = MSG_EXTERNAL_XXX;
 * }
 * else {
 *     I18N_1 = $localize`Some message with ${'\uFFFD0\uFFFD'}!`;
 * }
 * ```
 *
 * @param message The original i18n AST message node
 * @param variable The variable that will be assigned the translation, e.g. `I18N_1`.
 * @param closureVar The variable for Closure `goog.getMsg` calls, e.g. `MSG_EXTERNAL_XXX`.
 * @param params Object mapping placeholder names to their values (e.g.
 * `{ "interpolation": "\uFFFD0\uFFFD" }`).
 * @param transformFn Optional transformation function that will be applied to the translation (e.g.
 * post-processing).
 * @returns An array of statements that defined a given translation.
 */
export function getTranslationDeclStmts(message, variable, closureVar, params = {}, transformFn) {
    const statements = [
        declareI18nVariable(variable),
        o.ifStmt(createClosureModeGuard(), createGoogleGetMsgStatements(variable, message, closureVar, i18nFormatPlaceholderNames(params, /* useCamelCase */ true)), createLocalizeStatements(variable, message, i18nFormatPlaceholderNames(params, /* useCamelCase */ false))),
    ];
    if (transformFn) {
        statements.push(new o.ExpressionStatement(variable.set(transformFn(variable))));
    }
    return statements;
}
/**
 * Create the expression that will be used to guard the closure mode block
 * It is equivalent to:
 *
 * ```
 * typeof ngI18nClosureMode !== undefined && ngI18nClosureMode
 * ```
 */
function createClosureModeGuard() {
    return o.typeofExpr(o.variable(NG_I18N_CLOSURE_MODE))
        .notIdentical(o.literal('undefined', o.STRING_TYPE))
        .and(o.variable(NG_I18N_CLOSURE_MODE));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvcmVuZGVyMy92aWV3L3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRSxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFnQixNQUFNLDBDQUEwQyxDQUFDO0FBRS9LLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sRUFBTSw2QkFBNkIsRUFBNEIsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQWMsZ0JBQWdCLEVBQW1CLFlBQVksRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ25PLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFekQsT0FBTyxLQUFLLElBQUksTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLDRCQUE0QixFQUFzQixNQUFNLHNDQUFzQyxDQUFDO0FBRXZHLE9BQU8sRUFBQyxhQUFhLElBQUksa0JBQWtCLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sS0FBSyxDQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1B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QUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25ELEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2ZsYXR0ZW4sIHNhbml0aXplSWRlbnRpZmllcn0gZnJvbSAnLi4vLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0JpbmRpbmdGb3JtLCBCdWlsdGluRnVuY3Rpb25DYWxsLCBjb252ZXJ0QWN0aW9uQmluZGluZywgY29udmVydFByb3BlcnR5QmluZGluZywgY29udmVydFVwZGF0ZUFyZ3VtZW50cywgTG9jYWxSZXNvbHZlcn0gZnJvbSAnLi4vLi4vY29tcGlsZXJfdXRpbC9leHByZXNzaW9uX2NvbnZlcnRlcic7XG5pbXBvcnQge0NvbnN0YW50UG9vbH0gZnJvbSAnLi4vLi4vY29uc3RhbnRfcG9vbCc7XG5pbXBvcnQgKiBhcyBjb3JlIGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHtBU1QsIEFzdE1lbW9yeUVmZmljaWVudFRyYW5zZm9ybWVyLCBCaW5kaW5nUGlwZSwgQmluZGluZ1R5cGUsIEZ1bmN0aW9uQ2FsbCwgSW1wbGljaXRSZWNlaXZlciwgSW50ZXJwb2xhdGlvbiwgTGl0ZXJhbEFycmF5LCBMaXRlcmFsTWFwLCBMaXRlcmFsUHJpbWl0aXZlLCBQYXJzZWRFdmVudFR5cGUsIFByb3BlcnR5UmVhZH0gZnJvbSAnLi4vLi4vZXhwcmVzc2lvbl9wYXJzZXIvYXN0JztcbmltcG9ydCB7TGV4ZXJ9IGZyb20gJy4uLy4uL2V4cHJlc3Npb25fcGFyc2VyL2xleGVyJztcbmltcG9ydCB7SXZ5UGFyc2VyfSBmcm9tICcuLi8uLi9leHByZXNzaW9uX3BhcnNlci9wYXJzZXInO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tICcuLi8uLi9pMThuL2kxOG5fYXN0JztcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSAnLi4vLi4vbWxfcGFyc2VyL2FzdCc7XG5pbXBvcnQge0h0bWxQYXJzZXJ9IGZyb20gJy4uLy4uL21sX3BhcnNlci9odG1sX3BhcnNlcic7XG5pbXBvcnQge1doaXRlc3BhY2VWaXNpdG9yfSBmcm9tICcuLi8uLi9tbF9wYXJzZXIvaHRtbF93aGl0ZXNwYWNlcyc7XG5pbXBvcnQge0RFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcsIEludGVycG9sYXRpb25Db25maWd9IGZyb20gJy4uLy4uL21sX3BhcnNlci9pbnRlcnBvbGF0aW9uX2NvbmZpZyc7XG5pbXBvcnQge0xleGVyUmFuZ2V9IGZyb20gJy4uLy4uL21sX3BhcnNlci9sZXhlcic7XG5pbXBvcnQge2lzTmdDb250YWluZXIgYXMgY2hlY2tJc05nQ29udGFpbmVyLCBzcGxpdE5zTmFtZX0gZnJvbSAnLi4vLi4vbWxfcGFyc2VyL3RhZ3MnO1xuaW1wb3J0IHttYXBMaXRlcmFsfSBmcm9tICcuLi8uLi9vdXRwdXQvbWFwX3V0aWwnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi8uLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge1BhcnNlRXJyb3IsIFBhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vLi4vcGFyc2VfdXRpbCc7XG5pbXBvcnQge0RvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnLi4vLi4vc2NoZW1hL2RvbV9lbGVtZW50X3NjaGVtYV9yZWdpc3RyeSc7XG5pbXBvcnQge0Nzc1NlbGVjdG9yLCBTZWxlY3Rvck1hdGNoZXJ9IGZyb20gJy4uLy4uL3NlbGVjdG9yJztcbmltcG9ydCB7QmluZGluZ1BhcnNlcn0gZnJvbSAnLi4vLi4vdGVtcGxhdGVfcGFyc2VyL2JpbmRpbmdfcGFyc2VyJztcbmltcG9ydCB7ZXJyb3IsIHBhcnRpdGlvbkFycmF5fSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCAqIGFzIHQgZnJvbSAnLi4vcjNfYXN0JztcbmltcG9ydCB7SWRlbnRpZmllcnMgYXMgUjN9IGZyb20gJy4uL3IzX2lkZW50aWZpZXJzJztcbmltcG9ydCB7aHRtbEFzdFRvUmVuZGVyM0FzdH0gZnJvbSAnLi4vcjNfdGVtcGxhdGVfdHJhbnNmb3JtJztcbmltcG9ydCB7cHJlcGFyZVN5bnRoZXRpY0xpc3RlbmVyRnVuY3Rpb25OYW1lLCBwcmVwYXJlU3ludGhldGljTGlzdGVuZXJOYW1lLCBwcmVwYXJlU3ludGhldGljUHJvcGVydHlOYW1lfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IHtJMThuQ29udGV4dH0gZnJvbSAnLi9pMThuL2NvbnRleHQnO1xuaW1wb3J0IHtjcmVhdGVHb29nbGVHZXRNc2dTdGF0ZW1lbnRzfSBmcm9tICcuL2kxOG4vZ2V0X21zZ191dGlscyc7XG5pbXBvcnQge2NyZWF0ZUxvY2FsaXplU3RhdGVtZW50c30gZnJvbSAnLi9pMThuL2xvY2FsaXplX3V0aWxzJztcbmltcG9ydCB7STE4bk1ldGFWaXNpdG9yfSBmcm9tICcuL2kxOG4vbWV0YSc7XG5pbXBvcnQge2Fzc2VtYmxlQm91bmRUZXh0UGxhY2Vob2xkZXJzLCBhc3NlbWJsZUkxOG5Cb3VuZFN0cmluZywgZGVjbGFyZUkxOG5WYXJpYWJsZSwgZ2V0VHJhbnNsYXRpb25Db25zdFByZWZpeCwgaGFzSTE4bk1ldGEsIEkxOE5fSUNVX01BUFBJTkdfUFJFRklYLCBpMThuRm9ybWF0UGxhY2Vob2xkZXJOYW1lcywgaWN1RnJvbUkxOG5NZXNzYWdlLCBpc0kxOG5Sb290Tm9kZSwgaXNTaW5nbGVJMThuSWN1LCBwbGFjZWhvbGRlcnNUb1BhcmFtcywgVFJBTlNMQVRJT05fUFJFRklYLCB3cmFwSTE4blBsYWNlaG9sZGVyfSBmcm9tICcuL2kxOG4vdXRpbCc7XG5pbXBvcnQge1N0eWxpbmdCdWlsZGVyLCBTdHlsaW5nSW5zdHJ1Y3Rpb259IGZyb20gJy4vc3R5bGluZ19idWlsZGVyJztcbmltcG9ydCB7YXNMaXRlcmFsLCBjaGFpbmVkSW5zdHJ1Y3Rpb24sIENPTlRFWFRfTkFNRSwgZ2V0QXR0cnNGb3JEaXJlY3RpdmVNYXRjaGluZywgZ2V0SW50ZXJwb2xhdGlvbkFyZ3NMZW5ndGgsIElNUExJQ0lUX1JFRkVSRU5DRSwgaW52YWxpZCwgTk9OX0JJTkRBQkxFX0FUVFIsIFJFRkVSRU5DRV9QUkVGSVgsIFJFTkRFUl9GTEFHUywgdHJpbVRyYWlsaW5nTnVsbHMsIHVuc3VwcG9ydGVkfSBmcm9tICcuL3V0aWwnO1xuXG5cblxuLy8gU2VsZWN0b3IgYXR0cmlidXRlIG5hbWUgb2YgYDxuZy1jb250ZW50PmBcbmNvbnN0IE5HX0NPTlRFTlRfU0VMRUNUX0FUVFIgPSAnc2VsZWN0JztcblxuLy8gQXR0cmlidXRlIG5hbWUgb2YgYG5nUHJvamVjdEFzYC5cbmNvbnN0IE5HX1BST0pFQ1RfQVNfQVRUUl9OQU1FID0gJ25nUHJvamVjdEFzJztcblxuLy8gTGlzdCBvZiBzdXBwb3J0ZWQgZ2xvYmFsIHRhcmdldHMgZm9yIGV2ZW50IGxpc3RlbmVyc1xuY29uc3QgR0xPQkFMX1RBUkdFVF9SRVNPTFZFUlMgPSBuZXcgTWFwPHN0cmluZywgby5FeHRlcm5hbFJlZmVyZW5jZT4oXG4gICAgW1snd2luZG93JywgUjMucmVzb2x2ZVdpbmRvd10sIFsnZG9jdW1lbnQnLCBSMy5yZXNvbHZlRG9jdW1lbnRdLCBbJ2JvZHknLCBSMy5yZXNvbHZlQm9keV1dKTtcblxuY29uc3QgTEVBRElOR19UUklWSUFfQ0hBUlMgPSBbJyAnLCAnXFxuJywgJ1xccicsICdcXHQnXTtcblxuLy8gIGlmIChyZiAmIGZsYWdzKSB7IC4uIH1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGbGFnQ2hlY2tJZlN0bXQoXG4gICAgZmxhZ3M6IGNvcmUuUmVuZGVyRmxhZ3MsIHN0YXRlbWVudHM6IG8uU3RhdGVtZW50W10pOiBvLklmU3RtdCB7XG4gIHJldHVybiBvLmlmU3RtdChvLnZhcmlhYmxlKFJFTkRFUl9GTEFHUykuYml0d2lzZUFuZChvLmxpdGVyYWwoZmxhZ3MpLCBudWxsLCBmYWxzZSksIHN0YXRlbWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUV2ZW50TGlzdGVuZXJQYXJhbWV0ZXJzKFxuICAgIGV2ZW50QXN0OiB0LkJvdW5kRXZlbnQsIGhhbmRsZXJOYW1lOiBzdHJpbmd8bnVsbCA9IG51bGwsXG4gICAgc2NvcGU6IEJpbmRpbmdTY29wZXxudWxsID0gbnVsbCk6IG8uRXhwcmVzc2lvbltdIHtcbiAgY29uc3Qge3R5cGUsIG5hbWUsIHRhcmdldCwgcGhhc2UsIGhhbmRsZXJ9ID0gZXZlbnRBc3Q7XG4gIGlmICh0YXJnZXQgJiYgIUdMT0JBTF9UQVJHRVRfUkVTT0xWRVJTLmhhcyh0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGdsb2JhbCB0YXJnZXQgJyR7dGFyZ2V0fScgZGVmaW5lZCBmb3IgJyR7bmFtZX0nIGV2ZW50LlxuICAgICAgICBTdXBwb3J0ZWQgbGlzdCBvZiBnbG9iYWwgdGFyZ2V0czogJHtBcnJheS5mcm9tKEdMT0JBTF9UQVJHRVRfUkVTT0xWRVJTLmtleXMoKSl9LmApO1xuICB9XG5cbiAgY29uc3QgZXZlbnRBcmd1bWVudE5hbWUgPSAnJGV2ZW50JztcbiAgY29uc3QgaW1wbGljaXRSZWNlaXZlckFjY2Vzc2VzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbnN0IGltcGxpY2l0UmVjZWl2ZXJFeHByID0gKHNjb3BlID09PSBudWxsIHx8IHNjb3BlLmJpbmRpbmdMZXZlbCA9PT0gMCkgP1xuICAgICAgby52YXJpYWJsZShDT05URVhUX05BTUUpIDpcbiAgICAgIHNjb3BlLmdldE9yQ3JlYXRlU2hhcmVkQ29udGV4dFZhcigwKTtcbiAgY29uc3QgYmluZGluZ0V4cHIgPSBjb252ZXJ0QWN0aW9uQmluZGluZyhcbiAgICAgIHNjb3BlLCBpbXBsaWNpdFJlY2VpdmVyRXhwciwgaGFuZGxlciwgJ2InLCAoKSA9PiBlcnJvcignVW5leHBlY3RlZCBpbnRlcnBvbGF0aW9uJyksXG4gICAgICBldmVudEFzdC5oYW5kbGVyU3BhbiwgaW1wbGljaXRSZWNlaXZlckFjY2Vzc2VzKTtcbiAgY29uc3Qgc3RhdGVtZW50cyA9IFtdO1xuICBpZiAoc2NvcGUpIHtcbiAgICBzdGF0ZW1lbnRzLnB1c2goLi4uc2NvcGUucmVzdG9yZVZpZXdTdGF0ZW1lbnQoKSk7XG4gICAgc3RhdGVtZW50cy5wdXNoKC4uLnNjb3BlLnZhcmlhYmxlRGVjbGFyYXRpb25zKCkpO1xuICB9XG4gIHN0YXRlbWVudHMucHVzaCguLi5iaW5kaW5nRXhwci5yZW5kZXIzU3RtdHMpO1xuXG4gIGNvbnN0IGV2ZW50TmFtZTogc3RyaW5nID1cbiAgICAgIHR5cGUgPT09IFBhcnNlZEV2ZW50VHlwZS5BbmltYXRpb24gPyBwcmVwYXJlU3ludGhldGljTGlzdGVuZXJOYW1lKG5hbWUsIHBoYXNlISkgOiBuYW1lO1xuICBjb25zdCBmbk5hbWUgPSBoYW5kbGVyTmFtZSAmJiBzYW5pdGl6ZUlkZW50aWZpZXIoaGFuZGxlck5hbWUpO1xuICBjb25zdCBmbkFyZ3M6IG8uRm5QYXJhbVtdID0gW107XG5cbiAgaWYgKGltcGxpY2l0UmVjZWl2ZXJBY2Nlc3Nlcy5oYXMoZXZlbnRBcmd1bWVudE5hbWUpKSB7XG4gICAgZm5BcmdzLnB1c2gobmV3IG8uRm5QYXJhbShldmVudEFyZ3VtZW50TmFtZSwgby5EWU5BTUlDX1RZUEUpKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZXJGbiA9IG8uZm4oZm5BcmdzLCBzdGF0ZW1lbnRzLCBvLklORkVSUkVEX1RZUEUsIG51bGwsIGZuTmFtZSk7XG4gIGNvbnN0IHBhcmFtczogby5FeHByZXNzaW9uW10gPSBbby5saXRlcmFsKGV2ZW50TmFtZSksIGhhbmRsZXJGbl07XG4gIGlmICh0YXJnZXQpIHtcbiAgICBwYXJhbXMucHVzaChcbiAgICAgICAgby5saXRlcmFsKGZhbHNlKSwgIC8vIGB1c2VDYXB0dXJlYCBmbGFnLCBkZWZhdWx0cyB0byBgZmFsc2VgXG4gICAgICAgIG8uaW1wb3J0RXhwcihHTE9CQUxfVEFSR0VUX1JFU09MVkVSUy5nZXQodGFyZ2V0KSEpKTtcbiAgfVxuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVEZWZpbml0aW9uQnVpbGRlciBpbXBsZW1lbnRzIHQuVmlzaXRvcjx2b2lkPiwgTG9jYWxSZXNvbHZlciB7XG4gIHByaXZhdGUgX2RhdGFJbmRleCA9IDA7XG4gIHByaXZhdGUgX2JpbmRpbmdDb250ZXh0ID0gMDtcbiAgcHJpdmF0ZSBfcHJlZml4Q29kZTogby5TdGF0ZW1lbnRbXSA9IFtdO1xuICAvKipcbiAgICogTGlzdCBvZiBjYWxsYmFja3MgdG8gZ2VuZXJhdGUgY3JlYXRpb24gbW9kZSBpbnN0cnVjdGlvbnMuIFdlIHN0b3JlIHRoZW0gaGVyZSBhcyB3ZSBwcm9jZXNzXG4gICAqIHRoZSB0ZW1wbGF0ZSBzbyBiaW5kaW5ncyBpbiBsaXN0ZW5lcnMgYXJlIHJlc29sdmVkIG9ubHkgb25jZSBhbGwgbm9kZXMgaGF2ZSBiZWVuIHZpc2l0ZWQuXG4gICAqIFRoaXMgZW5zdXJlcyBhbGwgbG9jYWwgcmVmcyBhbmQgY29udGV4dCB2YXJpYWJsZXMgYXJlIGF2YWlsYWJsZSBmb3IgbWF0Y2hpbmcuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGlvbkNvZGVGbnM6ICgoKSA9PiBvLlN0YXRlbWVudClbXSA9IFtdO1xuICAvKipcbiAgICogTGlzdCBvZiBjYWxsYmFja3MgdG8gZ2VuZXJhdGUgdXBkYXRlIG1vZGUgaW5zdHJ1Y3Rpb25zLiBXZSBzdG9yZSB0aGVtIGhlcmUgYXMgd2UgcHJvY2Vzc1xuICAgKiB0aGUgdGVtcGxhdGUgc28gYmluZGluZ3MgYXJlIHJlc29sdmVkIG9ubHkgb25jZSBhbGwgbm9kZXMgaGF2ZSBiZWVuIHZpc2l0ZWQuIFRoaXMgZW5zdXJlc1xuICAgKiBhbGwgbG9jYWwgcmVmcyBhbmQgY29udGV4dCB2YXJpYWJsZXMgYXJlIGF2YWlsYWJsZSBmb3IgbWF0Y2hpbmcuXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGVDb2RlRm5zOiAoKCkgPT4gby5TdGF0ZW1lbnQpW10gPSBbXTtcblxuICAvKiogSW5kZXggb2YgdGhlIGN1cnJlbnRseS1zZWxlY3RlZCBub2RlLiAqL1xuICBwcml2YXRlIF9jdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XG5cbiAgLyoqIFRlbXBvcmFyeSB2YXJpYWJsZSBkZWNsYXJhdGlvbnMgZ2VuZXJhdGVkIGZyb20gdmlzaXRpbmcgcGlwZXMsIGxpdGVyYWxzLCBldGMuICovXG4gIHByaXZhdGUgX3RlbXBWYXJpYWJsZXM6IG8uU3RhdGVtZW50W10gPSBbXTtcbiAgLyoqXG4gICAqIExpc3Qgb2YgY2FsbGJhY2tzIHRvIGJ1aWxkIG5lc3RlZCB0ZW1wbGF0ZXMuIE5lc3RlZCB0ZW1wbGF0ZXMgbXVzdCBub3QgYmUgdmlzaXRlZCB1bnRpbFxuICAgKiBhZnRlciB0aGUgcGFyZW50IHRlbXBsYXRlIGhhcyBmaW5pc2hlZCB2aXNpdGluZyBhbGwgb2YgaXRzIG5vZGVzLiBUaGlzIGVuc3VyZXMgdGhhdCBhbGxcbiAgICogbG9jYWwgcmVmIGJpbmRpbmdzIGluIG5lc3RlZCB0ZW1wbGF0ZXMgYXJlIGFibGUgdG8gZmluZCBsb2NhbCByZWYgdmFsdWVzIGlmIHRoZSByZWZzXG4gICAqIGFyZSBkZWZpbmVkIGFmdGVyIHRoZSB0ZW1wbGF0ZSBkZWNsYXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX25lc3RlZFRlbXBsYXRlRm5zOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuICAvKipcbiAgICogVGhpcyBzY29wZSBjb250YWlucyBsb2NhbCB2YXJpYWJsZXMgZGVjbGFyZWQgaW4gdGhlIHVwZGF0ZSBtb2RlIGJsb2NrIG9mIHRoZSB0ZW1wbGF0ZS5cbiAgICogKGUuZy4gcmVmcyBhbmQgY29udGV4dCB2YXJzIGluIGJpbmRpbmdzKVxuICAgKi9cbiAgcHJpdmF0ZSBfYmluZGluZ1Njb3BlOiBCaW5kaW5nU2NvcGU7XG4gIHByaXZhdGUgX3ZhbHVlQ29udmVydGVyOiBWYWx1ZUNvbnZlcnRlcjtcbiAgcHJpdmF0ZSBfdW5zdXBwb3J0ZWQgPSB1bnN1cHBvcnRlZDtcblxuICAvLyBpMThuIGNvbnRleHQgbG9jYWwgdG8gdGhpcyB0ZW1wbGF0ZVxuICBwcml2YXRlIGkxOG46IEkxOG5Db250ZXh0fG51bGwgPSBudWxsO1xuXG4gIC8vIE51bWJlciBvZiBzbG90cyB0byByZXNlcnZlIGZvciBwdXJlRnVuY3Rpb25zXG4gIHByaXZhdGUgX3B1cmVGdW5jdGlvblNsb3RzID0gMDtcblxuICAvLyBOdW1iZXIgb2YgYmluZGluZyBzbG90c1xuICBwcml2YXRlIF9iaW5kaW5nU2xvdHMgPSAwO1xuXG4gIHByaXZhdGUgZmlsZUJhc2VkSTE4blN1ZmZpeDogc3RyaW5nO1xuXG4gIC8vIFByb2plY3Rpb24gc2xvdHMgZm91bmQgaW4gdGhlIHRlbXBsYXRlLiBQcm9qZWN0aW9uIHNsb3RzIGNhbiBkaXN0cmlidXRlIHByb2plY3RlZFxuICAvLyBub2RlcyBiYXNlZCBvbiBhIHNlbGVjdG9yLCBvciBjYW4ganVzdCB1c2UgdGhlIHdpbGRjYXJkIHNlbGVjdG9yIHRvIG1hdGNoXG4gIC8vIGFsbCBub2RlcyB3aGljaCBhcmVuJ3QgbWF0Y2hpbmcgYW55IHNlbGVjdG9yLlxuICBwcml2YXRlIF9uZ0NvbnRlbnRSZXNlcnZlZFNsb3RzOiAoc3RyaW5nfCcqJylbXSA9IFtdO1xuXG4gIC8vIE51bWJlciBvZiBub24tZGVmYXVsdCBzZWxlY3RvcnMgZm91bmQgaW4gYWxsIHBhcmVudCB0ZW1wbGF0ZXMgb2YgdGhpcyB0ZW1wbGF0ZS4gV2UgbmVlZCB0b1xuICAvLyB0cmFjayBpdCB0byBwcm9wZXJseSBhZGp1c3QgcHJvamVjdGlvbiBzbG90IGluZGV4IGluIHRoZSBgcHJvamVjdGlvbmAgaW5zdHJ1Y3Rpb24uXG4gIHByaXZhdGUgX25nQ29udGVudFNlbGVjdG9yc09mZnNldCA9IDA7XG5cbiAgLy8gRXhwcmVzc2lvbiB0aGF0IHNob3VsZCBiZSB1c2VkIGFzIGltcGxpY2l0IHJlY2VpdmVyIHdoZW4gY29udmVydGluZyB0ZW1wbGF0ZVxuICAvLyBleHByZXNzaW9ucyB0byBvdXRwdXQgQVNULlxuICBwcml2YXRlIF9pbXBsaWNpdFJlY2VpdmVyRXhwcjogby5SZWFkVmFyRXhwcnxudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY29uc3RhbnRQb29sOiBDb25zdGFudFBvb2wsIHBhcmVudEJpbmRpbmdTY29wZTogQmluZGluZ1Njb3BlLCBwcml2YXRlIGxldmVsID0gMCxcbiAgICAgIHByaXZhdGUgY29udGV4dE5hbWU6IHN0cmluZ3xudWxsLCBwcml2YXRlIGkxOG5Db250ZXh0OiBJMThuQ29udGV4dHxudWxsLFxuICAgICAgcHJpdmF0ZSB0ZW1wbGF0ZUluZGV4OiBudW1iZXJ8bnVsbCwgcHJpdmF0ZSB0ZW1wbGF0ZU5hbWU6IHN0cmluZ3xudWxsLFxuICAgICAgcHJpdmF0ZSBkaXJlY3RpdmVNYXRjaGVyOiBTZWxlY3Rvck1hdGNoZXJ8bnVsbCwgcHJpdmF0ZSBkaXJlY3RpdmVzOiBTZXQ8by5FeHByZXNzaW9uPixcbiAgICAgIHByaXZhdGUgcGlwZVR5cGVCeU5hbWU6IE1hcDxzdHJpbmcsIG8uRXhwcmVzc2lvbj4sIHByaXZhdGUgcGlwZXM6IFNldDxvLkV4cHJlc3Npb24+LFxuICAgICAgcHJpdmF0ZSBfbmFtZXNwYWNlOiBvLkV4dGVybmFsUmVmZXJlbmNlLCByZWxhdGl2ZUNvbnRleHRGaWxlUGF0aDogc3RyaW5nLFxuICAgICAgcHJpdmF0ZSBpMThuVXNlRXh0ZXJuYWxJZHM6IGJvb2xlYW4sIHByaXZhdGUgX2NvbnN0YW50czogby5FeHByZXNzaW9uW10gPSBbXSkge1xuICAgIHRoaXMuX2JpbmRpbmdTY29wZSA9IHBhcmVudEJpbmRpbmdTY29wZS5uZXN0ZWRTY29wZShsZXZlbCk7XG5cbiAgICAvLyBUdXJuIHRoZSByZWxhdGl2ZSBjb250ZXh0IGZpbGUgcGF0aCBpbnRvIGFuIGlkZW50aWZpZXIgYnkgcmVwbGFjaW5nIG5vbi1hbHBoYW51bWVyaWNcbiAgICAvLyBjaGFyYWN0ZXJzIHdpdGggdW5kZXJzY29yZXMuXG4gICAgdGhpcy5maWxlQmFzZWRJMThuU3VmZml4ID0gcmVsYXRpdmVDb250ZXh0RmlsZVBhdGgucmVwbGFjZSgvW15BLVphLXowLTldL2csICdfJykgKyAnXyc7XG5cbiAgICB0aGlzLl92YWx1ZUNvbnZlcnRlciA9IG5ldyBWYWx1ZUNvbnZlcnRlcihcbiAgICAgICAgY29uc3RhbnRQb29sLCAoKSA9PiB0aGlzLmFsbG9jYXRlRGF0YVNsb3QoKSxcbiAgICAgICAgKG51bVNsb3RzOiBudW1iZXIpID0+IHRoaXMuYWxsb2NhdGVQdXJlRnVuY3Rpb25TbG90cyhudW1TbG90cyksXG4gICAgICAgIChuYW1lLCBsb2NhbE5hbWUsIHNsb3QsIHZhbHVlOiBvLkV4cHJlc3Npb24pID0+IHtcbiAgICAgICAgICBjb25zdCBwaXBlVHlwZSA9IHBpcGVUeXBlQnlOYW1lLmdldChuYW1lKTtcbiAgICAgICAgICBpZiAocGlwZVR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucGlwZXMuYWRkKHBpcGVUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fYmluZGluZ1Njb3BlLnNldCh0aGlzLmxldmVsLCBsb2NhbE5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB0aGlzLmNyZWF0aW9uSW5zdHJ1Y3Rpb24obnVsbCwgUjMucGlwZSwgW28ubGl0ZXJhbChzbG90KSwgby5saXRlcmFsKG5hbWUpXSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgYnVpbGRUZW1wbGF0ZUZ1bmN0aW9uKFxuICAgICAgbm9kZXM6IHQuTm9kZVtdLCB2YXJpYWJsZXM6IHQuVmFyaWFibGVbXSwgbmdDb250ZW50U2VsZWN0b3JzT2Zmc2V0OiBudW1iZXIgPSAwLFxuICAgICAgaTE4bj86IGkxOG4uSTE4bk1ldGEpOiBvLkZ1bmN0aW9uRXhwciB7XG4gICAgdGhpcy5fbmdDb250ZW50U2VsZWN0b3JzT2Zmc2V0ID0gbmdDb250ZW50U2VsZWN0b3JzT2Zmc2V0O1xuXG4gICAgaWYgKHRoaXMuX25hbWVzcGFjZSAhPT0gUjMubmFtZXNwYWNlSFRNTCkge1xuICAgICAgdGhpcy5jcmVhdGlvbkluc3RydWN0aW9uKG51bGwsIHRoaXMuX25hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHZhcmlhYmxlIGJpbmRpbmdzXG4gICAgdmFyaWFibGVzLmZvckVhY2godiA9PiB0aGlzLnJlZ2lzdGVyQ29udGV4dFZhcmlhYmxlcyh2KSk7XG5cbiAgICAvLyBJbml0aWF0ZSBpMThuIGNvbnRleHQgaW4gY2FzZTpcbiAgICAvLyAtIHRoaXMgdGVtcGxhdGUgaGFzIHBhcmVudCBpMThuIGNvbnRleHRcbiAgICAvLyAtIG9yIHRoZSB0ZW1wbGF0ZSBoYXMgaTE4biBtZXRhIGFzc29jaWF0ZWQgd2l0aCBpdCxcbiAgICAvLyAgIGJ1dCBpdCdzIG5vdCBpbml0aWF0ZWQgYnkgdGhlIEVsZW1lbnQgKGUuZy4gPG5nLXRlbXBsYXRlIGkxOG4+KVxuICAgIGNvbnN0IGluaXRJMThuQ29udGV4dCA9IHRoaXMuaTE4bkNvbnRleHQgfHxcbiAgICAgICAgKGlzSTE4blJvb3ROb2RlKGkxOG4pICYmICFpc1NpbmdsZUkxOG5JY3UoaTE4bikgJiZcbiAgICAgICAgICEoaXNTaW5nbGVFbGVtZW50VGVtcGxhdGUobm9kZXMpICYmIG5vZGVzWzBdLmkxOG4gPT09IGkxOG4pKTtcbiAgICBjb25zdCBzZWxmQ2xvc2luZ0kxOG5JbnN0cnVjdGlvbiA9IGhhc1RleHRDaGlsZHJlbk9ubHkobm9kZXMpO1xuICAgIGlmIChpbml0STE4bkNvbnRleHQpIHtcbiAgICAgIHRoaXMuaTE4blN0YXJ0KG51bGwsIGkxOG4hLCBzZWxmQ2xvc2luZ0kxOG5JbnN0cnVjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyB0aGUgaW5pdGlhbCBwYXNzIHRocm91Z2ggdGhlIG5vZGVzIG9mIHRoaXMgdGVtcGxhdGUuIEluIHRoaXMgcGFzcywgd2VcbiAgICAvLyBxdWV1ZSBhbGwgY3JlYXRpb24gbW9kZSBhbmQgdXBkYXRlIG1vZGUgaW5zdHJ1Y3Rpb25zIGZvciBnZW5lcmF0aW9uIGluIHRoZSBzZWNvbmRcbiAgICAvLyBwYXNzLiBJdCdzIG5lY2Vzc2FyeSB0byBzZXBhcmF0ZSB0aGUgcGFzc2VzIHRvIGVuc3VyZSBsb2NhbCByZWZzIGFyZSBkZWZpbmVkIGJlZm9yZVxuICAgIC8vIHJlc29sdmluZyBiaW5kaW5ncy4gV2UgYWxzbyBjb3VudCBiaW5kaW5ncyBpbiB0aGlzIHBhc3MgYXMgd2Ugd2FsayBib3VuZCBleHByZXNzaW9ucy5cbiAgICB0LnZpc2l0QWxsKHRoaXMsIG5vZGVzKTtcblxuICAgIC8vIEFkZCB0b3RhbCBiaW5kaW5nIGNvdW50IHRvIHB1cmUgZnVuY3Rpb24gY291bnQgc28gcHVyZSBmdW5jdGlvbiBpbnN0cnVjdGlvbnMgYXJlXG4gICAgLy8gZ2VuZXJhdGVkIHdpdGggdGhlIGNvcnJlY3Qgc2xvdCBvZmZzZXQgd2hlbiB1cGRhdGUgaW5zdHJ1Y3Rpb25zIGFyZSBwcm9jZXNzZWQuXG4gICAgdGhpcy5fcHVyZUZ1bmN0aW9uU2xvdHMgKz0gdGhpcy5fYmluZGluZ1Nsb3RzO1xuXG4gICAgLy8gUGlwZXMgYXJlIHdhbGtlZCBpbiB0aGUgZmlyc3QgcGFzcyAodG8gZW5xdWV1ZSBgcGlwZSgpYCBjcmVhdGlvbiBpbnN0cnVjdGlvbnMgYW5kXG4gICAgLy8gYHBpcGVCaW5kYCB1cGRhdGUgaW5zdHJ1Y3Rpb25zKSwgc28gd2UgaGF2ZSB0byB1cGRhdGUgdGhlIHNsb3Qgb2Zmc2V0cyBtYW51YWxseVxuICAgIC8vIHRvIGFjY291bnQgZm9yIGJpbmRpbmdzLlxuICAgIHRoaXMuX3ZhbHVlQ29udmVydGVyLnVwZGF0ZVBpcGVTbG90T2Zmc2V0cyh0aGlzLl9iaW5kaW5nU2xvdHMpO1xuXG4gICAgLy8gTmVzdGVkIHRlbXBsYXRlcyBtdXN0IGJlIHByb2Nlc3NlZCBiZWZvcmUgY3JlYXRpb24gaW5zdHJ1Y3Rpb25zIHNvIHRlbXBsYXRlKClcbiAgICAvLyBpbnN0cnVjdGlvbnMgY2FuIGJlIGdlbmVyYXRlZCB3aXRoIHRoZSBjb3JyZWN0IGludGVybmFsIGNvbnN0IGNvdW50LlxuICAgIHRoaXMuX25lc3RlZFRlbXBsYXRlRm5zLmZvckVhY2goYnVpbGRUZW1wbGF0ZUZuID0+IGJ1aWxkVGVtcGxhdGVGbigpKTtcblxuICAgIC8vIE91dHB1dCB0aGUgYHByb2plY3Rpb25EZWZgIGluc3RydWN0aW9uIHdoZW4gc29tZSBgPG5nLWNvbnRlbnQ+YCB0YWdzIGFyZSBwcmVzZW50LlxuICAgIC8vIFRoZSBgcHJvamVjdGlvbkRlZmAgaW5zdHJ1Y3Rpb24gaXMgb25seSBlbWl0dGVkIGZvciB0aGUgY29tcG9uZW50IHRlbXBsYXRlIGFuZFxuICAgIC8vIGlzIHNraXBwZWQgZm9yIG5lc3RlZCB0ZW1wbGF0ZXMgKDxuZy10ZW1wbGF0ZT4gdGFncykuXG4gICAgaWYgKHRoaXMubGV2ZWwgPT09IDAgJiYgdGhpcy5fbmdDb250ZW50UmVzZXJ2ZWRTbG90cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcnM6IG8uRXhwcmVzc2lvbltdID0gW107XG5cbiAgICAgIC8vIEJ5IGRlZmF1bHQgdGhlIGBwcm9qZWN0aW9uRGVmYCBpbnN0cnVjdGlvbnMgY3JlYXRlcyBvbmUgc2xvdCBmb3IgdGhlIHdpbGRjYXJkXG4gICAgICAvLyBzZWxlY3RvciBpZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQuIFRoZXJlZm9yZSB3ZSBvbmx5IHdhbnQgdG8gYWxsb2NhdGUgYSBuZXdcbiAgICAgIC8vIGFycmF5IGZvciB0aGUgcHJvamVjdGlvbiBzbG90cyBpZiB0aGUgZGVmYXVsdCBwcm9qZWN0aW9uIHNsb3QgaXMgbm90IHN1ZmZpY2llbnQuXG4gICAgICBpZiAodGhpcy5fbmdDb250ZW50UmVzZXJ2ZWRTbG90cy5sZW5ndGggPiAxIHx8IHRoaXMuX25nQ29udGVudFJlc2VydmVkU2xvdHNbMF0gIT09ICcqJykge1xuICAgICAgICBjb25zdCByM1Jlc2VydmVkU2xvdHMgPSB0aGlzLl9uZ0NvbnRlbnRSZXNlcnZlZFNsb3RzLm1hcChcbiAgICAgICAgICAgIHMgPT4gcyAhPT0gJyonID8gY29yZS5wYXJzZVNlbGVjdG9yVG9SM1NlbGVjdG9yKHMpIDogcyk7XG4gICAgICAgIHBhcmFtZXRlcnMucHVzaCh0aGlzLmNvbnN0YW50UG9vbC5nZXRDb25zdExpdGVyYWwoYXNMaXRlcmFsKHIzUmVzZXJ2ZWRTbG90cyksIHRydWUpKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2luY2Ugd2UgYWNjdW11bGF0ZSBuZ0NvbnRlbnQgc2VsZWN0b3JzIHdoaWxlIHByb2Nlc3NpbmcgdGVtcGxhdGUgZWxlbWVudHMsXG4gICAgICAvLyB3ZSAqcHJlcGVuZCogYHByb2plY3Rpb25EZWZgIHRvIGNyZWF0aW9uIGluc3RydWN0aW9ucyBibG9jaywgdG8gcHV0IGl0IGJlZm9yZVxuICAgICAgLy8gYW55IGBwcm9qZWN0aW9uYCBpbnN0cnVjdGlvbnNcbiAgICAgIHRoaXMuY3JlYXRpb25JbnN0cnVjdGlvbihudWxsLCBSMy5wcm9qZWN0aW9uRGVmLCBwYXJhbWV0ZXJzLCAvKiBwcmVwZW5kICovIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChpbml0STE4bkNvbnRleHQpIHtcbiAgICAgIHRoaXMuaTE4bkVuZChudWxsLCBzZWxmQ2xvc2luZ0kxOG5JbnN0cnVjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGUgYWxsIHRoZSBjcmVhdGlvbiBtb2RlIGluc3RydWN0aW9ucyAoZS5nLiByZXNvbHZlIGJpbmRpbmdzIGluIGxpc3RlbmVycylcbiAgICBjb25zdCBjcmVhdGlvblN0YXRlbWVudHMgPSB0aGlzLl9jcmVhdGlvbkNvZGVGbnMubWFwKChmbjogKCkgPT4gby5TdGF0ZW1lbnQpID0+IGZuKCkpO1xuXG4gICAgLy8gR2VuZXJhdGUgYWxsIHRoZSB1cGRhdGUgbW9kZSBpbnN0cnVjdGlvbnMgKGUuZy4gcmVzb2x2ZSBwcm9wZXJ0eSBvciB0ZXh0IGJpbmRpbmdzKVxuICAgIGNvbnN0IHVwZGF0ZVN0YXRlbWVudHMgPSB0aGlzLl91cGRhdGVDb2RlRm5zLm1hcCgoZm46ICgpID0+IG8uU3RhdGVtZW50KSA9PiBmbigpKTtcblxuICAgIC8vICBWYXJpYWJsZSBkZWNsYXJhdGlvbiBtdXN0IG9jY3VyIGFmdGVyIGJpbmRpbmcgcmVzb2x1dGlvbiBzbyB3ZSBjYW4gZ2VuZXJhdGUgY29udGV4dFxuICAgIC8vICBpbnN0cnVjdGlvbnMgdGhhdCBidWlsZCBvbiBlYWNoIG90aGVyLlxuICAgIC8vIGUuZy4gY29uc3QgYiA9IG5leHRDb250ZXh0KCkuJGltcGxpY2l0KCk7IGNvbnN0IGIgPSBuZXh0Q29udGV4dCgpO1xuICAgIGNvbnN0IGNyZWF0aW9uVmFyaWFibGVzID0gdGhpcy5fYmluZGluZ1Njb3BlLnZpZXdTbmFwc2hvdFN0YXRlbWVudHMoKTtcbiAgICBjb25zdCB1cGRhdGVWYXJpYWJsZXMgPSB0aGlzLl9iaW5kaW5nU2NvcGUudmFyaWFibGVEZWNsYXJhdGlvbnMoKS5jb25jYXQodGhpcy5fdGVtcFZhcmlhYmxlcyk7XG5cbiAgICBjb25zdCBjcmVhdGlvbkJsb2NrID0gY3JlYXRpb25TdGF0ZW1lbnRzLmxlbmd0aCA+IDAgP1xuICAgICAgICBbcmVuZGVyRmxhZ0NoZWNrSWZTdG10KFxuICAgICAgICAgICAgY29yZS5SZW5kZXJGbGFncy5DcmVhdGUsIGNyZWF0aW9uVmFyaWFibGVzLmNvbmNhdChjcmVhdGlvblN0YXRlbWVudHMpKV0gOlxuICAgICAgICBbXTtcblxuICAgIGNvbnN0IHVwZGF0ZUJsb2NrID0gdXBkYXRlU3RhdGVtZW50cy5sZW5ndGggPiAwID9cbiAgICAgICAgW3JlbmRlckZsYWdDaGVja0lmU3RtdChjb3JlLlJlbmRlckZsYWdzLlVwZGF0ZSwgdXBkYXRlVmFyaWFibGVzLmNvbmNhdCh1cGRhdGVTdGF0ZW1lbnRzKSldIDpcbiAgICAgICAgW107XG5cbiAgICByZXR1cm4gby5mbihcbiAgICAgICAgLy8gaS5lLiAocmY6IFJlbmRlckZsYWdzLCBjdHg6IGFueSlcbiAgICAgICAgW25ldyBvLkZuUGFyYW0oUkVOREVSX0ZMQUdTLCBvLk5VTUJFUl9UWVBFKSwgbmV3IG8uRm5QYXJhbShDT05URVhUX05BTUUsIG51bGwpXSxcbiAgICAgICAgW1xuICAgICAgICAgIC8vIFRlbXBvcmFyeSB2YXJpYWJsZSBkZWNsYXJhdGlvbnMgZm9yIHF1ZXJ5IHJlZnJlc2ggKGkuZS4gbGV0IF90OiBhbnk7KVxuICAgICAgICAgIC4uLnRoaXMuX3ByZWZpeENvZGUsXG4gICAgICAgICAgLy8gQ3JlYXRpbmcgbW9kZSAoaS5lLiBpZiAocmYgJiBSZW5kZXJGbGFncy5DcmVhdGUpIHsgLi4uIH0pXG4gICAgICAgICAgLi4uY3JlYXRpb25CbG9jayxcbiAgICAgICAgICAvLyBCaW5kaW5nIGFuZCByZWZyZXNoIG1vZGUgKGkuZS4gaWYgKHJmICYgUmVuZGVyRmxhZ3MuVXBkYXRlKSB7Li4ufSlcbiAgICAgICAgICAuLi51cGRhdGVCbG9jayxcbiAgICAgICAgXSxcbiAgICAgICAgby5JTkZFUlJFRF9UWVBFLCBudWxsLCB0aGlzLnRlbXBsYXRlTmFtZSk7XG4gIH1cblxuICAvLyBMb2NhbFJlc29sdmVyXG4gIGdldExvY2FsKG5hbWU6IHN0cmluZyk6IG8uRXhwcmVzc2lvbnxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fYmluZGluZ1Njb3BlLmdldChuYW1lKTtcbiAgfVxuXG4gIC8vIExvY2FsUmVzb2x2ZXJcbiAgbm90aWZ5SW1wbGljaXRSZWNlaXZlclVzZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9iaW5kaW5nU2NvcGUubm90aWZ5SW1wbGljaXRSZWNlaXZlclVzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpMThuVHJhbnNsYXRlKFxuICAgICAgbWVzc2FnZTogaTE4bi5NZXNzYWdlLCBwYXJhbXM6IHtbbmFtZTogc3RyaW5nXTogby5FeHByZXNzaW9ufSA9IHt9LCByZWY/OiBvLlJlYWRWYXJFeHByLFxuICAgICAgdHJhbnNmb3JtRm4/OiAocmF3OiBvLlJlYWRWYXJFeHByKSA9PiBvLkV4cHJlc3Npb24pOiBvLlJlYWRWYXJFeHByIHtcbiAgICBjb25zdCBfcmVmID0gcmVmIHx8IG8udmFyaWFibGUodGhpcy5jb25zdGFudFBvb2wudW5pcXVlTmFtZShUUkFOU0xBVElPTl9QUkVGSVgpKTtcbiAgICAvLyBDbG9zdXJlIENvbXBpbGVyIHJlcXVpcmVzIGNvbnN0IG5hbWVzIHRvIHN0YXJ0IHdpdGggYE1TR19gIGJ1dCBkaXNhbGxvd3MgYW55IG90aGVyIGNvbnN0IHRvXG4gICAgLy8gc3RhcnQgd2l0aCBgTVNHX2AuIFdlIGRlZmluZSBhIHZhcmlhYmxlIHN0YXJ0aW5nIHdpdGggYE1TR19gIGp1c3QgZm9yIHRoZSBgZ29vZy5nZXRNc2dgIGNhbGxcbiAgICBjb25zdCBjbG9zdXJlVmFyID0gdGhpcy5pMThuR2VuZXJhdGVDbG9zdXJlVmFyKG1lc3NhZ2UuaWQpO1xuICAgIGNvbnN0IHN0YXRlbWVudHMgPSBnZXRUcmFuc2xhdGlvbkRlY2xTdG10cyhtZXNzYWdlLCBfcmVmLCBjbG9zdXJlVmFyLCBwYXJhbXMsIHRyYW5zZm9ybUZuKTtcbiAgICB0aGlzLmNvbnN0YW50UG9vbC5zdGF0ZW1lbnRzLnB1c2goLi4uc3RhdGVtZW50cyk7XG4gICAgcmV0dXJuIF9yZWY7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyQ29udGV4dFZhcmlhYmxlcyh2YXJpYWJsZTogdC5WYXJpYWJsZSkge1xuICAgIGNvbnN0IHNjb3BlZE5hbWUgPSB0aGlzLl9iaW5kaW5nU2NvcGUuZnJlc2hSZWZlcmVuY2VOYW1lKCk7XG4gICAgY29uc3QgcmV0cmlldmFsTGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgIGNvbnN0IGxocyA9IG8udmFyaWFibGUodmFyaWFibGUubmFtZSArIHNjb3BlZE5hbWUpO1xuICAgIHRoaXMuX2JpbmRpbmdTY29wZS5zZXQoXG4gICAgICAgIHJldHJpZXZhbExldmVsLCB2YXJpYWJsZS5uYW1lLCBsaHMsIERlY2xhcmF0aW9uUHJpb3JpdHkuQ09OVEVYVCxcbiAgICAgICAgKHNjb3BlOiBCaW5kaW5nU2NvcGUsIHJlbGF0aXZlTGV2ZWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGxldCByaHM6IG8uRXhwcmVzc2lvbjtcbiAgICAgICAgICBpZiAoc2NvcGUuYmluZGluZ0xldmVsID09PSByZXRyaWV2YWxMZXZlbCkge1xuICAgICAgICAgICAgLy8gZS5nLiBjdHhcbiAgICAgICAgICAgIHJocyA9IG8udmFyaWFibGUoQ09OVEVYVF9OQU1FKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVkQ3R4VmFyID0gc2NvcGUuZ2V0U2hhcmVkQ29udGV4dE5hbWUocmV0cmlldmFsTGV2ZWwpO1xuICAgICAgICAgICAgLy8gZS5nLiBjdHhfcjAgICBPUiAgeCgyKTtcbiAgICAgICAgICAgIHJocyA9IHNoYXJlZEN0eFZhciA/IHNoYXJlZEN0eFZhciA6IGdlbmVyYXRlTmV4dENvbnRleHRFeHByKHJlbGF0aXZlTGV2ZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlLmcuIGNvbnN0ICRpdGVtJCA9IHgoMikuJGltcGxpY2l0O1xuICAgICAgICAgIHJldHVybiBbbGhzLnNldChyaHMucHJvcCh2YXJpYWJsZS52YWx1ZSB8fCBJTVBMSUNJVF9SRUZFUkVOQ0UpKS50b0NvbnN0RGVjbCgpXTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGkxOG5BcHBlbmRCaW5kaW5ncyhleHByZXNzaW9uczogQVNUW10pIHtcbiAgICBpZiAoZXhwcmVzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgZXhwcmVzc2lvbnMuZm9yRWFjaChleHByZXNzaW9uID0+IHRoaXMuaTE4biEuYXBwZW5kQmluZGluZyhleHByZXNzaW9uKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpMThuQmluZFByb3BzKHByb3BzOiB7W2tleTogc3RyaW5nXTogdC5UZXh0fHQuQm91bmRUZXh0fSk6IHtba2V5OiBzdHJpbmddOiBvLkV4cHJlc3Npb259IHtcbiAgICBjb25zdCBib3VuZDoge1trZXk6IHN0cmluZ106IG8uRXhwcmVzc2lvbn0gPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgcHJvcCA9IHByb3BzW2tleV07XG4gICAgICBpZiAocHJvcCBpbnN0YW5jZW9mIHQuVGV4dCkge1xuICAgICAgICBib3VuZFtrZXldID0gby5saXRlcmFsKHByb3AudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wLnZhbHVlLnZpc2l0KHRoaXMuX3ZhbHVlQ29udmVydGVyKTtcbiAgICAgICAgdGhpcy5hbGxvY2F0ZUJpbmRpbmdTbG90cyh2YWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEludGVycG9sYXRpb24pIHtcbiAgICAgICAgICBjb25zdCB7c3RyaW5ncywgZXhwcmVzc2lvbnN9ID0gdmFsdWU7XG4gICAgICAgICAgY29uc3Qge2lkLCBiaW5kaW5nc30gPSB0aGlzLmkxOG4hO1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gYXNzZW1ibGVJMThuQm91bmRTdHJpbmcoc3RyaW5ncywgYmluZGluZ3Muc2l6ZSwgaWQpO1xuICAgICAgICAgIHRoaXMuaTE4bkFwcGVuZEJpbmRpbmdzKGV4cHJlc3Npb25zKTtcbiAgICAgICAgICBib3VuZFtrZXldID0gby5saXRlcmFsKGxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBib3VuZDtcbiAgfVxuXG4gIHByaXZhdGUgaTE4bkdlbmVyYXRlQ2xvc3VyZVZhcihtZXNzYWdlSWQ6IHN0cmluZyk6IG8uUmVhZFZhckV4cHIge1xuICAgIGxldCBuYW1lOiBzdHJpbmc7XG4gICAgY29uc3Qgc3VmZml4ID0gdGhpcy5maWxlQmFzZWRJMThuU3VmZml4LnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKHRoaXMuaTE4blVzZUV4dGVybmFsSWRzKSB7XG4gICAgICBjb25zdCBwcmVmaXggPSBnZXRUcmFuc2xhdGlvbkNvbnN0UHJlZml4KGBFWFRFUk5BTF9gKTtcbiAgICAgIGNvbnN0IHVuaXF1ZVN1ZmZpeCA9IHRoaXMuY29uc3RhbnRQb29sLnVuaXF1ZU5hbWUoc3VmZml4KTtcbiAgICAgIG5hbWUgPSBgJHtwcmVmaXh9JHtzYW5pdGl6ZUlkZW50aWZpZXIobWVzc2FnZUlkKX0kJCR7dW5pcXVlU3VmZml4fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZWZpeCA9IGdldFRyYW5zbGF0aW9uQ29uc3RQcmVmaXgoc3VmZml4KTtcbiAgICAgIG5hbWUgPSB0aGlzLmNvbnN0YW50UG9vbC51bmlxdWVOYW1lKHByZWZpeCk7XG4gICAgfVxuICAgIHJldHVybiBvLnZhcmlhYmxlKG5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpMThuVXBkYXRlUmVmKGNvbnRleHQ6IEkxOG5Db250ZXh0KTogdm9pZCB7XG4gICAgY29uc3Qge2ljdXMsIG1ldGEsIGlzUm9vdCwgaXNSZXNvbHZlZCwgaXNFbWl0dGVkfSA9IGNvbnRleHQ7XG4gICAgaWYgKGlzUm9vdCAmJiBpc1Jlc29sdmVkICYmICFpc0VtaXR0ZWQgJiYgIWlzU2luZ2xlSTE4bkljdShtZXRhKSkge1xuICAgICAgY29udGV4dC5pc0VtaXR0ZWQgPSB0cnVlO1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXJzID0gY29udGV4dC5nZXRTZXJpYWxpemVkUGxhY2Vob2xkZXJzKCk7XG4gICAgICBsZXQgaWN1TWFwcGluZzoge1tuYW1lOiBzdHJpbmddOiBvLkV4cHJlc3Npb259ID0ge307XG4gICAgICBsZXQgcGFyYW1zOiB7W25hbWU6IHN0cmluZ106IG8uRXhwcmVzc2lvbn0gPVxuICAgICAgICAgIHBsYWNlaG9sZGVycy5zaXplID8gcGxhY2Vob2xkZXJzVG9QYXJhbXMocGxhY2Vob2xkZXJzKSA6IHt9O1xuICAgICAgaWYgKGljdXMuc2l6ZSkge1xuICAgICAgICBpY3VzLmZvckVhY2goKHJlZnM6IG8uRXhwcmVzc2lvbltdLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmIChyZWZzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBvbmUgSUNVIGRlZmluZWQgZm9yIGEgZ2l2ZW5cbiAgICAgICAgICAgIC8vIHBsYWNlaG9sZGVyIC0ganVzdCBvdXRwdXQgaXRzIHJlZmVyZW5jZVxuICAgICAgICAgICAgcGFyYW1zW2tleV0gPSByZWZzWzBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAuLi4gb3RoZXJ3aXNlIHdlIG5lZWQgdG8gYWN0aXZhdGUgcG9zdC1wcm9jZXNzaW5nXG4gICAgICAgICAgICAvLyB0byByZXBsYWNlIElDVSBwbGFjZWhvbGRlcnMgd2l0aCBwcm9wZXIgdmFsdWVzXG4gICAgICAgICAgICBjb25zdCBwbGFjZWhvbGRlcjogc3RyaW5nID0gd3JhcEkxOG5QbGFjZWhvbGRlcihgJHtJMThOX0lDVV9NQVBQSU5HX1BSRUZJWH0ke2tleX1gKTtcbiAgICAgICAgICAgIHBhcmFtc1trZXldID0gby5saXRlcmFsKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgIGljdU1hcHBpbmdba2V5XSA9IG8ubGl0ZXJhbEFycihyZWZzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyB0cmFuc2xhdGlvbiByZXF1aXJlcyBwb3N0IHByb2Nlc3NpbmcgaW4gMiBjYXNlczpcbiAgICAgIC8vIC0gaWYgd2UgaGF2ZSBwbGFjZWhvbGRlcnMgd2l0aCBtdWx0aXBsZSB2YWx1ZXMgKGV4LiBgU1RBUlRfRElWYDogW++/vSMx77+9LCDvv70jMu+/vSwgLi4uXSlcbiAgICAgIC8vIC0gaWYgd2UgaGF2ZSBtdWx0aXBsZSBJQ1VzIHRoYXQgcmVmZXIgdG8gdGhlIHNhbWUgcGxhY2Vob2xkZXIgbmFtZVxuICAgICAgY29uc3QgbmVlZHNQb3N0cHJvY2Vzc2luZyA9XG4gICAgICAgICAgQXJyYXkuZnJvbShwbGFjZWhvbGRlcnMudmFsdWVzKCkpLnNvbWUoKHZhbHVlOiBzdHJpbmdbXSkgPT4gdmFsdWUubGVuZ3RoID4gMSkgfHxcbiAgICAgICAgICBPYmplY3Qua2V5cyhpY3VNYXBwaW5nKS5sZW5ndGg7XG5cbiAgICAgIGxldCB0cmFuc2Zvcm1GbjtcbiAgICAgIGlmIChuZWVkc1Bvc3Rwcm9jZXNzaW5nKSB7XG4gICAgICAgIHRyYW5zZm9ybUZuID0gKHJhdzogby5SZWFkVmFyRXhwcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGFyZ3M6IG8uRXhwcmVzc2lvbltdID0gW3Jhd107XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGljdU1hcHBpbmcpLmxlbmd0aCkge1xuICAgICAgICAgICAgYXJncy5wdXNoKG1hcExpdGVyYWwoaWN1TWFwcGluZywgdHJ1ZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaW5zdHJ1Y3Rpb24obnVsbCwgUjMuaTE4blBvc3Rwcm9jZXNzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaTE4blRyYW5zbGF0ZShtZXRhIGFzIGkxOG4uTWVzc2FnZSwgcGFyYW1zLCBjb250ZXh0LnJlZiwgdHJhbnNmb3JtRm4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaTE4blN0YXJ0KHNwYW46IFBhcnNlU291cmNlU3BhbnxudWxsID0gbnVsbCwgbWV0YTogaTE4bi5JMThuTWV0YSwgc2VsZkNsb3Npbmc/OiBib29sZWFuKTpcbiAgICAgIHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGxvY2F0ZURhdGFTbG90KCk7XG4gICAgaWYgKHRoaXMuaTE4bkNvbnRleHQpIHtcbiAgICAgIHRoaXMuaTE4biA9IHRoaXMuaTE4bkNvbnRleHQuZm9ya0NoaWxkQ29udGV4dChpbmRleCwgdGhpcy50ZW1wbGF0ZUluZGV4ISwgbWV0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlZiA9IG8udmFyaWFibGUodGhpcy5jb25zdGFudFBvb2wudW5pcXVlTmFtZShUUkFOU0xBVElPTl9QUkVGSVgpKTtcbiAgICAgIHRoaXMuaTE4biA9IG5ldyBJMThuQ29udGV4dChpbmRleCwgcmVmLCAwLCB0aGlzLnRlbXBsYXRlSW5kZXgsIG1ldGEpO1xuICAgIH1cblxuICAgIC8vIGdlbmVyYXRlIGkxOG5TdGFydCBpbnN0cnVjdGlvblxuICAgIGNvbnN0IHtpZCwgcmVmfSA9IHRoaXMuaTE4bjtcbiAgICBjb25zdCBwYXJhbXM6IG8uRXhwcmVzc2lvbltdID0gW28ubGl0ZXJhbChpbmRleCksIHJlZl07XG4gICAgaWYgKGlkID4gMCkge1xuICAgICAgLy8gZG8gbm90IHB1c2ggM3JkIGFyZ3VtZW50IChzdWItYmxvY2sgaWQpXG4gICAgICAvLyBpbnRvIGkxOG5TdGFydCBjYWxsIGZvciB0b3AgbGV2ZWwgaTE4biBjb250ZXh0XG4gICAgICBwYXJhbXMucHVzaChvLmxpdGVyYWwoaWQpKTtcbiAgICB9XG4gICAgdGhpcy5jcmVhdGlvbkluc3RydWN0aW9uKHNwYW4sIHNlbGZDbG9zaW5nID8gUjMuaTE4biA6IFIzLmkxOG5TdGFydCwgcGFyYW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgaTE4bkVuZChzcGFuOiBQYXJzZVNvdXJjZVNwYW58bnVsbCA9IG51bGwsIHNlbGZDbG9zaW5nPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5pMThuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2kxOG5FbmQgaXMgZXhlY3V0ZWQgd2l0aCBubyBpMThuIGNvbnRleHQgcHJlc2VudCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmkxOG5Db250ZXh0KSB7XG4gICAgICB0aGlzLmkxOG5Db250ZXh0LnJlY29uY2lsZUNoaWxkQ29udGV4dCh0aGlzLmkxOG4pO1xuICAgICAgdGhpcy5pMThuVXBkYXRlUmVmKHRoaXMuaTE4bkNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmkxOG5VcGRhdGVSZWYodGhpcy5pMThuKTtcbiAgICB9XG5cbiAgICAvLyBzZXR1cCBhY2N1bXVsYXRlZCBiaW5kaW5nc1xuICAgIGNvbnN0IHtpbmRleCwgYmluZGluZ3N9ID0gdGhpcy5pMThuO1xuICAgIGlmIChiaW5kaW5ncy5zaXplKSB7XG4gICAgICBjb25zdCBjaGFpbkJpbmRpbmdzOiBDaGFpbmFibGVCaW5kaW5nSW5zdHJ1Y3Rpb25bXSA9IFtdO1xuICAgICAgYmluZGluZ3MuZm9yRWFjaChiaW5kaW5nID0+IHtcbiAgICAgICAgY2hhaW5CaW5kaW5ncy5wdXNoKHtzb3VyY2VTcGFuOiBzcGFuLCB2YWx1ZTogKCkgPT4gdGhpcy5jb252ZXJ0UHJvcGVydHlCaW5kaW5nKGJpbmRpbmcpfSk7XG4gICAgICB9KTtcbiAgICAgIC8vIGZvciBpMThuIGJsb2NrLCBhZHZhbmNlIHRvIHRoZSBtb3N0IHJlY2VudCBlbGVtZW50IGluZGV4IChieSB0YWtpbmcgdGhlIGN1cnJlbnQgbnVtYmVyIG9mXG4gICAgICAvLyBlbGVtZW50cyBhbmQgc3VidHJhY3Rpbmcgb25lKSBiZWZvcmUgaW52b2tpbmcgYGkxOG5FeHBgIGluc3RydWN0aW9ucywgdG8gbWFrZSBzdXJlIHRoZVxuICAgICAgLy8gbmVjZXNzYXJ5IGxpZmVjeWNsZSBob29rcyBvZiBjb21wb25lbnRzL2RpcmVjdGl2ZXMgYXJlIHByb3Blcmx5IGZsdXNoZWQuXG4gICAgICB0aGlzLnVwZGF0ZUluc3RydWN0aW9uQ2hhaW5XaXRoQWR2YW5jZSh0aGlzLmdldENvbnN0Q291bnQoKSAtIDEsIFIzLmkxOG5FeHAsIGNoYWluQmluZGluZ3MpO1xuICAgICAgdGhpcy51cGRhdGVJbnN0cnVjdGlvbihzcGFuLCBSMy5pMThuQXBwbHksIFtvLmxpdGVyYWwoaW5kZXgpXSk7XG4gICAgfVxuICAgIGlmICghc2VsZkNsb3NpbmcpIHtcbiAgICAgIHRoaXMuY3JlYXRpb25JbnN0cnVjdGlvbihzcGFuLCBSMy5pMThuRW5kKTtcbiAgICB9XG4gICAgdGhpcy5pMThuID0gbnVsbDsgIC8vIHJlc2V0IGxvY2FsIGkxOG4gY29udGV4dFxuICB9XG5cbiAgcHJpdmF0ZSBpMThuQXR0cmlidXRlc0luc3RydWN0aW9uKFxuICAgICAgbm9kZUluZGV4OiBudW1iZXIsIGF0dHJzOiAodC5UZXh0QXR0cmlidXRlfHQuQm91bmRBdHRyaWJ1dGUpW10sXG4gICAgICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pOiB2b2lkIHtcbiAgICBsZXQgaGFzQmluZGluZ3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdCBpMThuQXR0ckFyZ3M6IG8uRXhwcmVzc2lvbltdID0gW107XG4gICAgY29uc3QgYmluZGluZ3M6IENoYWluYWJsZUJpbmRpbmdJbnN0cnVjdGlvbltdID0gW107XG4gICAgYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhdHRyLmkxOG4hIGFzIGkxOG4uTWVzc2FnZTtcbiAgICAgIGlmIChhdHRyIGluc3RhbmNlb2YgdC5UZXh0QXR0cmlidXRlKSB7XG4gICAgICAgIGkxOG5BdHRyQXJncy5wdXNoKG8ubGl0ZXJhbChhdHRyLm5hbWUpLCB0aGlzLmkxOG5UcmFuc2xhdGUobWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udmVydGVkID0gYXR0ci52YWx1ZS52aXNpdCh0aGlzLl92YWx1ZUNvbnZlcnRlcik7XG4gICAgICAgIHRoaXMuYWxsb2NhdGVCaW5kaW5nU2xvdHMoY29udmVydGVkKTtcbiAgICAgICAgaWYgKGNvbnZlcnRlZCBpbnN0YW5jZW9mIEludGVycG9sYXRpb24pIHtcbiAgICAgICAgICBjb25zdCBwbGFjZWhvbGRlcnMgPSBhc3NlbWJsZUJvdW5kVGV4dFBsYWNlaG9sZGVycyhtZXNzYWdlKTtcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSBwbGFjZWhvbGRlcnNUb1BhcmFtcyhwbGFjZWhvbGRlcnMpO1xuICAgICAgICAgIGkxOG5BdHRyQXJncy5wdXNoKG8ubGl0ZXJhbChhdHRyLm5hbWUpLCB0aGlzLmkxOG5UcmFuc2xhdGUobWVzc2FnZSwgcGFyYW1zKSk7XG4gICAgICAgICAgY29udmVydGVkLmV4cHJlc3Npb25zLmZvckVhY2goZXhwcmVzc2lvbiA9PiB7XG4gICAgICAgICAgICBoYXNCaW5kaW5ncyA9IHRydWU7XG4gICAgICAgICAgICBiaW5kaW5ncy5wdXNoKHtcbiAgICAgICAgICAgICAgc291cmNlU3BhbixcbiAgICAgICAgICAgICAgdmFsdWU6ICgpID0+IHRoaXMuY29udmVydFByb3BlcnR5QmluZGluZyhleHByZXNzaW9uKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGJpbmRpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudXBkYXRlSW5zdHJ1Y3Rpb25DaGFpbldpdGhBZHZhbmNlKG5vZGVJbmRleCwgUjMuaTE4bkV4cCwgYmluZGluZ3MpO1xuICAgIH1cbiAgICBpZiAoaTE4bkF0dHJBcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGluZGV4OiBvLkV4cHJlc3Npb24gPSBvLmxpdGVyYWwodGhpcy5hbGxvY2F0ZURhdGFTbG90KCkpO1xuICAgICAgY29uc3QgYXJncyA9IHRoaXMuY29uc3RhbnRQb29sLmdldENvbnN0TGl0ZXJhbChvLmxpdGVyYWxBcnIoaTE4bkF0dHJBcmdzKSwgdHJ1ZSk7XG4gICAgICB0aGlzLmNyZWF0aW9uSW5zdHJ1Y3Rpb24oc291cmNlU3BhbiwgUjMuaTE4bkF0dHJpYnV0ZXMsIFtpbmRleCwgYXJnc10pO1xuICAgICAgaWYgKGhhc0JpbmRpbmdzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5zdHJ1Y3Rpb24oc291cmNlU3BhbiwgUjMuaTE4bkFwcGx5LCBbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5hbWVzcGFjZUluc3RydWN0aW9uKG5hbWVzcGFjZUtleTogc3RyaW5nfG51bGwpIHtcbiAgICBzd2l0Y2ggKG5hbWVzcGFjZUtleSkge1xuICAgICAgY2FzZSAnbWF0aCc6XG4gICAgICAgIHJldHVybiBSMy5uYW1lc3BhY2VNYXRoTUw7XG4gICAgICBjYXNlICdzdmcnOlxuICAgICAgICByZXR1cm4gUjMubmFtZXNwYWNlU1ZHO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFIzLm5hbWVzcGFjZUhUTUw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGROYW1lc3BhY2VJbnN0cnVjdGlvbihuc0luc3RydWN0aW9uOiBvLkV4dGVybmFsUmVmZXJlbmNlLCBlbGVtZW50OiB0LkVsZW1lbnQpIHtcbiAgICB0aGlzLl9uYW1lc3BhY2UgPSBuc0luc3RydWN0aW9uO1xuICAgIHRoaXMuY3JlYXRpb25JbnN0cnVjdGlvbihlbGVtZW50LnNvdXJjZVNwYW4sIG5zSW5zdHJ1Y3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gdXBkYXRlIGluc3RydWN0aW9uIGZvciBhbiBpbnRlcnBvbGF0ZWQgcHJvcGVydHkgb3IgYXR0cmlidXRlLCBzdWNoIGFzXG4gICAqIGBwcm9wPVwie3t2YWx1ZX19XCJgIG9yIGBhdHRyLnRpdGxlPVwie3t2YWx1ZX19XCJgXG4gICAqL1xuICBwcml2YXRlIGludGVycG9sYXRlZFVwZGF0ZUluc3RydWN0aW9uKFxuICAgICAgaW5zdHJ1Y3Rpb246IG8uRXh0ZXJuYWxSZWZlcmVuY2UsIGVsZW1lbnRJbmRleDogbnVtYmVyLCBhdHRyTmFtZTogc3RyaW5nLFxuICAgICAgaW5wdXQ6IHQuQm91bmRBdHRyaWJ1dGUsIHZhbHVlOiBhbnksIHBhcmFtczogYW55W10pIHtcbiAgICB0aGlzLnVwZGF0ZUluc3RydWN0aW9uV2l0aEFkdmFuY2UoXG4gICAgICAgIGVsZW1lbnRJbmRleCwgaW5wdXQuc291cmNlU3BhbiwgaW5zdHJ1Y3Rpb24sXG4gICAgICAgICgpID0+IFtvLmxpdGVyYWwoYXR0ck5hbWUpLCAuLi50aGlzLmdldFVwZGF0ZUluc3RydWN0aW9uQXJndW1lbnRzKHZhbHVlKSwgLi4ucGFyYW1zXSk7XG4gIH1cblxuICB2aXNpdENvbnRlbnQobmdDb250ZW50OiB0LkNvbnRlbnQpIHtcbiAgICBjb25zdCBzbG90ID0gdGhpcy5hbGxvY2F0ZURhdGFTbG90KCk7XG4gICAgY29uc3QgcHJvamVjdGlvblNsb3RJZHggPSB0aGlzLl9uZ0NvbnRlbnRTZWxlY3RvcnNPZmZzZXQgKyB0aGlzLl9uZ0NvbnRlbnRSZXNlcnZlZFNsb3RzLmxlbmd0aDtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBvLkV4cHJlc3Npb25bXSA9IFtvLmxpdGVyYWwoc2xvdCldO1xuXG4gICAgdGhpcy5fbmdDb250ZW50UmVzZXJ2ZWRTbG90cy5wdXNoKG5nQ29udGVudC5zZWxlY3Rvcik7XG5cbiAgICBjb25zdCBub25Db250ZW50U2VsZWN0QXR0cmlidXRlcyA9XG4gICAgICAgIG5nQ29udGVudC5hdHRyaWJ1dGVzLmZpbHRlcihhdHRyID0+IGF0dHIubmFtZS50b0xvd2VyQ2FzZSgpICE9PSBOR19DT05URU5UX1NFTEVDVF9BVFRSKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gdGhpcy5nZXRBdHRyaWJ1dGVFeHByZXNzaW9ucyhub25Db250ZW50U2VsZWN0QXR0cmlidXRlcywgW10sIFtdKTtcblxuICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHBhcmFtZXRlcnMucHVzaChvLmxpdGVyYWwocHJvamVjdGlvblNsb3RJZHgpLCBvLmxpdGVyYWxBcnIoYXR0cmlidXRlcykpO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdGlvblNsb3RJZHggIT09IDApIHtcbiAgICAgIHBhcmFtZXRlcnMucHVzaChvLmxpdGVyYWwocHJvamVjdGlvblNsb3RJZHgpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0aW9uSW5zdHJ1Y3Rpb24obmdDb250ZW50LnNvdXJjZVNwYW4sIFIzLnByb2plY3Rpb24sIHBhcmFtZXRlcnMpO1xuICAgIGlmICh0aGlzLmkxOG4pIHtcbiAgICAgIHRoaXMuaTE4bi5hcHBlbmRQcm9qZWN0aW9uKG5nQ29udGVudC5pMThuISwgc2xvdCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IHQuRWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRJbmRleCA9IHRoaXMuYWxsb2NhdGVEYXRhU2xvdCgpO1xuICAgIGNvbnN0IHN0eWxpbmdCdWlsZGVyID0gbmV3IFN0eWxpbmdCdWlsZGVyKG51bGwpO1xuXG4gICAgbGV0IGlzTm9uQmluZGFibGVNb2RlOiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3QgaXNJMThuUm9vdEVsZW1lbnQ6IGJvb2xlYW4gPVxuICAgICAgICBpc0kxOG5Sb290Tm9kZShlbGVtZW50LmkxOG4pICYmICFpc1NpbmdsZUkxOG5JY3UoZWxlbWVudC5pMThuKTtcblxuICAgIGNvbnN0IGkxOG5BdHRyczogKHQuVGV4dEF0dHJpYnV0ZXx0LkJvdW5kQXR0cmlidXRlKVtdID0gW107XG4gICAgY29uc3Qgb3V0cHV0QXR0cnM6IHQuVGV4dEF0dHJpYnV0ZVtdID0gW107XG5cbiAgICBjb25zdCBbbmFtZXNwYWNlS2V5LCBlbGVtZW50TmFtZV0gPSBzcGxpdE5zTmFtZShlbGVtZW50Lm5hbWUpO1xuICAgIGNvbnN0IGlzTmdDb250YWluZXIgPSBjaGVja0lzTmdDb250YWluZXIoZWxlbWVudC5uYW1lKTtcblxuICAgIC8vIEhhbmRsZSBzdHlsaW5nLCBpMThuLCBuZ05vbkJpbmRhYmxlIGF0dHJpYnV0ZXNcbiAgICBmb3IgKGNvbnN0IGF0dHIgb2YgZWxlbWVudC5hdHRyaWJ1dGVzKSB7XG4gICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gYXR0cjtcbiAgICAgIGlmIChuYW1lID09PSBOT05fQklOREFCTEVfQVRUUikge1xuICAgICAgICBpc05vbkJpbmRhYmxlTW9kZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdzdHlsZScpIHtcbiAgICAgICAgc3R5bGluZ0J1aWxkZXIucmVnaXN0ZXJTdHlsZUF0dHIodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgIHN0eWxpbmdCdWlsZGVyLnJlZ2lzdGVyQ2xhc3NBdHRyKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChhdHRyLmkxOG4gPyBpMThuQXR0cnMgOiBvdXRwdXRBdHRycykucHVzaChhdHRyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYXRjaCBkaXJlY3RpdmVzIG9uIG5vbiBpMThuIGF0dHJpYnV0ZXNcbiAgICB0aGlzLm1hdGNoRGlyZWN0aXZlcyhlbGVtZW50Lm5hbWUsIGVsZW1lbnQpO1xuXG4gICAgLy8gUmVndWxhciBlbGVtZW50IG9yIG5nLWNvbnRhaW5lciBjcmVhdGlvbiBtb2RlXG4gICAgY29uc3QgcGFyYW1ldGVyczogby5FeHByZXNzaW9uW10gPSBbby5saXRlcmFsKGVsZW1lbnRJbmRleCldO1xuICAgIGlmICghaXNOZ0NvbnRhaW5lcikge1xuICAgICAgcGFyYW1ldGVycy5wdXNoKG8ubGl0ZXJhbChlbGVtZW50TmFtZSkpO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgYXR0cmlidXRlc1xuICAgIGNvbnN0IGFsbE90aGVySW5wdXRzOiB0LkJvdW5kQXR0cmlidXRlW10gPSBbXTtcblxuICAgIGVsZW1lbnQuaW5wdXRzLmZvckVhY2goKGlucHV0OiB0LkJvdW5kQXR0cmlidXRlKSA9PiB7XG4gICAgICBjb25zdCBzdHlsaW5nSW5wdXRXYXNTZXQgPSBzdHlsaW5nQnVpbGRlci5yZWdpc3RlckJvdW5kSW5wdXQoaW5wdXQpO1xuICAgICAgaWYgKCFzdHlsaW5nSW5wdXRXYXNTZXQpIHtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09IEJpbmRpbmdUeXBlLlByb3BlcnR5ICYmIGlucHV0LmkxOG4pIHtcbiAgICAgICAgICBpMThuQXR0cnMucHVzaChpbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsT3RoZXJJbnB1dHMucHVzaChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGFkZCBhdHRyaWJ1dGVzIGZvciBkaXJlY3RpdmUgYW5kIHByb2plY3Rpb24gbWF0Y2hpbmcgcHVycG9zZXNcbiAgICBjb25zdCBhdHRyaWJ1dGVzOiBvLkV4cHJlc3Npb25bXSA9IHRoaXMuZ2V0QXR0cmlidXRlRXhwcmVzc2lvbnMoXG4gICAgICAgIG91dHB1dEF0dHJzLCBhbGxPdGhlcklucHV0cywgZWxlbWVudC5vdXRwdXRzLCBzdHlsaW5nQnVpbGRlciwgW10sIGkxOG5BdHRycyk7XG4gICAgcGFyYW1ldGVycy5wdXNoKHRoaXMuYWRkQXR0cnNUb0NvbnN0cyhhdHRyaWJ1dGVzKSk7XG5cbiAgICAvLyBsb2NhbCByZWZzIChleC46IDxkaXYgI2ZvbyAjYmFyPVwiYmF6XCI+KVxuICAgIGNvbnN0IHJlZnMgPSB0aGlzLnByZXBhcmVSZWZzQXJyYXkoZWxlbWVudC5yZWZlcmVuY2VzKTtcbiAgICBwYXJhbWV0ZXJzLnB1c2godGhpcy5hZGRUb0NvbnN0cyhyZWZzKSk7XG5cbiAgICBjb25zdCB3YXNJbk5hbWVzcGFjZSA9IHRoaXMuX25hbWVzcGFjZTtcbiAgICBjb25zdCBjdXJyZW50TmFtZXNwYWNlID0gdGhpcy5nZXROYW1lc3BhY2VJbnN0cnVjdGlvbihuYW1lc3BhY2VLZXkpO1xuXG4gICAgLy8gSWYgdGhlIG5hbWVzcGFjZSBpcyBjaGFuZ2luZyBub3csIGluY2x1ZGUgYW4gaW5zdHJ1Y3Rpb24gdG8gY2hhbmdlIGl0XG4gICAgLy8gZHVyaW5nIGVsZW1lbnQgY3JlYXRpb24uXG4gICAgaWYgKGN1cnJlbnROYW1lc3BhY2UgIT09IHdhc0luTmFtZXNwYWNlKSB7XG4gICAgICB0aGlzLmFkZE5hbWVzcGFjZUluc3RydWN0aW9uKGN1cnJlbnROYW1lc3BhY2UsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmkxOG4pIHtcbiAgICAgIHRoaXMuaTE4bi5hcHBlbmRFbGVtZW50KGVsZW1lbnQuaTE4biEsIGVsZW1lbnRJbmRleCk7XG4gICAgfVxuXG4gICAgLy8gTm90ZSB0aGF0IHdlIGRvIG5vdCBhcHBlbmQgdGV4dCBub2RlIGluc3RydWN0aW9ucyBhbmQgSUNVcyBpbnNpZGUgaTE4biBzZWN0aW9uLFxuICAgIC8vIHNvIHdlIGV4Y2x1ZGUgdGhlbSB3aGlsZSBjYWxjdWxhdGluZyB3aGV0aGVyIGN1cnJlbnQgZWxlbWVudCBoYXMgY2hpbGRyZW5cbiAgICBjb25zdCBoYXNDaGlsZHJlbiA9ICghaXNJMThuUm9vdEVsZW1lbnQgJiYgdGhpcy5pMThuKSA/ICFoYXNUZXh0Q2hpbGRyZW5Pbmx5KGVsZW1lbnQuY2hpbGRyZW4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMDtcblxuICAgIGNvbnN0IGNyZWF0ZVNlbGZDbG9zaW5nSW5zdHJ1Y3Rpb24gPSAhc3R5bGluZ0J1aWxkZXIuaGFzQmluZGluZ3NXaXRoUGlwZXMgJiZcbiAgICAgICAgZWxlbWVudC5vdXRwdXRzLmxlbmd0aCA9PT0gMCAmJiBpMThuQXR0cnMubGVuZ3RoID09PSAwICYmICFoYXNDaGlsZHJlbjtcbiAgICBjb25zdCBjcmVhdGVTZWxmQ2xvc2luZ0kxOG5JbnN0cnVjdGlvbiA9XG4gICAgICAgICFjcmVhdGVTZWxmQ2xvc2luZ0luc3RydWN0aW9uICYmIGhhc1RleHRDaGlsZHJlbk9ubHkoZWxlbWVudC5jaGlsZHJlbik7XG5cbiAgICBpZiAoY3JlYXRlU2VsZkNsb3NpbmdJbnN0cnVjdGlvbikge1xuICAgICAgdGhpcy5jcmVhdGlvbkluc3RydWN0aW9uKFxuICAgICAgICAgIGVsZW1lbnQuc291cmNlU3BhbiwgaXNOZ0NvbnRhaW5lciA/IFIzLmVsZW1lbnRDb250YWluZXIgOiBSMy5lbGVtZW50LFxuICAgICAgICAgIHRyaW1UcmFpbGluZ051bGxzKHBhcmFtZXRlcnMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jcmVhdGlvbkluc3RydWN0aW9uKFxuICAgICAgICAgIGVsZW1lbnQuc291cmNlU3BhbiwgaXNOZ0NvbnRhaW5lciA/IFIzLmVsZW1lbnRDb250YWluZXJTdGFydCA6IFIzLmVsZW1lbnRTdGFydCxcbiAgICAgICAgICB0cmltVHJhaWxpbmdOdWxscyhwYXJhbWV0ZXJzKSk7XG5cbiAgICAgIGlmIChpc05vbkJpbmRhYmxlTW9kZSkge1xuICAgICAgICB0aGlzLmNyZWF0aW9uSW5zdHJ1Y3Rpb24oZWxlbWVudC5zb3VyY2VTcGFuLCBSMy5kaXNhYmxlQmluZGluZ3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaTE4bkF0dHJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5pMThuQXR0cmlidXRlc0luc3RydWN0aW9uKGVsZW1lbnRJbmRleCwgaTE4bkF0dHJzLCBlbGVtZW50LnNvdXJjZVNwYW4pO1xuICAgICAgfVxuXG4gICAgICAvLyBHZW5lcmF0ZSBMaXN0ZW5lcnMgKG91dHB1dHMpXG4gICAgICBpZiAoZWxlbWVudC5vdXRwdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gZWxlbWVudC5vdXRwdXRzLm1hcChcbiAgICAgICAgICAgIChvdXRwdXRBc3Q6IHQuQm91bmRFdmVudCkgPT4gKHtcbiAgICAgICAgICAgICAgc291cmNlU3Bhbjogb3V0cHV0QXN0LnNvdXJjZVNwYW4sXG4gICAgICAgICAgICAgIHBhcmFtczogdGhpcy5wcmVwYXJlTGlzdGVuZXJQYXJhbWV0ZXIoZWxlbWVudC5uYW1lLCBvdXRwdXRBc3QsIGVsZW1lbnRJbmRleClcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5jcmVhdGlvbkluc3RydWN0aW9uQ2hhaW4oUjMubGlzdGVuZXIsIGxpc3RlbmVycyk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGtlZXAgaTE4bi9pMThuU3RhcnQgaW5zdHJ1Y3Rpb25zIGFmdGVyIGkxOG5BdHRyaWJ1dGVzIGFuZFxuICAgICAgLy8gbGlzdGVuZXJzLCB0byBtYWtlIHN1cmUgaTE4bkF0dHJpYnV0ZXMgaW5zdHJ1Y3Rpb24gdGFyZ2V0cyBjdXJyZW50IGVsZW1lbnQgYXQgcnVudGltZS5cbiAgICAgIGlmIChpc0kxOG5Sb290RWxlbWVudCkge1xuICAgICAgICB0aGlzLmkxOG5TdGFydChlbGVtZW50LnNvdXJjZVNwYW4sIGVsZW1lbnQuaTE4biEsIGNyZWF0ZVNlbGZDbG9zaW5nSTE4bkluc3RydWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgY29kZSBoZXJlIHdpbGwgY29sbGVjdCBhbGwgdXBkYXRlLWxldmVsIHN0eWxpbmcgaW5zdHJ1Y3Rpb25zIGFuZCBhZGQgdGhlbSB0byB0aGVcbiAgICAvLyB1cGRhdGUgYmxvY2sgb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIEFPVCBjb2RlLiBJbnN0cnVjdGlvbnMgbGlrZSBgc3R5bGVQcm9wYCxcbiAgICAvLyBgc3R5bGVNYXBgLCBgY2xhc3NNYXBgLCBgY2xhc3NQcm9wYFxuICAgIC8vIGFyZSBhbGwgZ2VuZXJhdGVkIGFuZCBhc3NpZ25lZCBpbiB0aGUgY29kZSBiZWxvdy5cbiAgICBjb25zdCBzdHlsaW5nSW5zdHJ1Y3Rpb25zID0gc3R5bGluZ0J1aWxkZXIuYnVpbGRVcGRhdGVMZXZlbEluc3RydWN0aW9ucyh0aGlzLl92YWx1ZUNvbnZlcnRlcik7XG4gICAgY29uc3QgbGltaXQgPSBzdHlsaW5nSW5zdHJ1Y3Rpb25zLmxlbmd0aCAtIDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGltaXQ7IGkrKykge1xuICAgICAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBzdHlsaW5nSW5zdHJ1Y3Rpb25zW2ldO1xuICAgICAgdGhpcy5fYmluZGluZ1Nsb3RzICs9IHRoaXMucHJvY2Vzc1N0eWxpbmdVcGRhdGVJbnN0cnVjdGlvbihlbGVtZW50SW5kZXgsIGluc3RydWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgcmVhc29uIHdoeSBgdW5kZWZpbmVkYCBpcyB1c2VkIGlzIGJlY2F1c2UgdGhlIHJlbmRlcmVyIHVuZGVyc3RhbmRzIHRoaXMgYXMgYVxuICAgIC8vIHNwZWNpYWwgdmFsdWUgdG8gc3ltYm9saXplIHRoYXQgdGhlcmUgaXMgbm8gUkhTIHRvIHRoaXMgYmluZGluZ1xuICAgIC8vIFRPRE8gKG1hdHNrbyk6IHJldmlzaXQgdGhpcyBvbmNlIEZXLTk1OSBpcyBhcHByb2FjaGVkXG4gICAgY29uc3QgZW1wdHlWYWx1ZUJpbmRJbnN0cnVjdGlvbiA9IG8ubGl0ZXJhbCh1bmRlZmluZWQpO1xuICAgIGNvbnN0IHByb3BlcnR5QmluZGluZ3M6IENoYWluYWJsZUJpbmRpbmdJbnN0cnVjdGlvbltdID0gW107XG4gICAgY29uc3QgYXR0cmlidXRlQmluZGluZ3M6IENoYWluYWJsZUJpbmRpbmdJbnN0cnVjdGlvbltdID0gW107XG5cbiAgICAvLyBHZW5lcmF0ZSBlbGVtZW50IGlucHV0IGJpbmRpbmdzXG4gICAgYWxsT3RoZXJJbnB1dHMuZm9yRWFjaCgoaW5wdXQ6IHQuQm91bmRBdHRyaWJ1dGUpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0VHlwZSA9IGlucHV0LnR5cGU7XG4gICAgICBpZiAoaW5wdXRUeXBlID09PSBCaW5kaW5nVHlwZS5BbmltYXRpb24pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZS52aXNpdCh0aGlzLl92YWx1ZUNvbnZlcnRlcik7XG4gICAgICAgIC8vIGFuaW1hdGlvbiBiaW5kaW5ncyBjYW4gYmUgcHJlc2VudGVkIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0czpcbiAgICAgICAgLy8gMS4gW0BiaW5kaW5nXT1cImZvb0V4cFwiXG4gICAgICAgIC8vIDIuIFtAYmluZGluZ109XCJ7dmFsdWU6Zm9vRXhwLCBwYXJhbXM6ey4uLn19XCJcbiAgICAgICAgLy8gMy4gW0BiaW5kaW5nXVxuICAgICAgICAvLyA0LiBAYmluZGluZ1xuICAgICAgICAvLyBBbGwgZm9ybWF0cyB3aWxsIGJlIHZhbGlkIGZvciB3aGVuIGEgc3ludGhldGljIGJpbmRpbmcgaXMgY3JlYXRlZC5cbiAgICAgICAgLy8gVGhlIHJlYXNvbmluZyBmb3IgdGhpcyBpcyBiZWNhdXNlIHRoZSByZW5kZXJlciBzaG91bGQgZ2V0IGVhY2hcbiAgICAgICAgLy8gc3ludGhldGljIGJpbmRpbmcgdmFsdWUgaW4gdGhlIG9yZGVyIG9mIHRoZSBhcnJheSB0aGF0IHRoZXkgYXJlXG4gICAgICAgIC8vIGRlZmluZWQgaW4uLi5cbiAgICAgICAgY29uc3QgaGFzVmFsdWUgPSB2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxQcmltaXRpdmUgPyAhIXZhbHVlLnZhbHVlIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGxvY2F0ZUJpbmRpbmdTbG90cyh2YWx1ZSk7XG5cbiAgICAgICAgcHJvcGVydHlCaW5kaW5ncy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBwcmVwYXJlU3ludGhldGljUHJvcGVydHlOYW1lKGlucHV0Lm5hbWUpLFxuICAgICAgICAgIHNvdXJjZVNwYW46IGlucHV0LnNvdXJjZVNwYW4sXG4gICAgICAgICAgdmFsdWU6ICgpID0+IGhhc1ZhbHVlID8gdGhpcy5jb252ZXJ0UHJvcGVydHlCaW5kaW5nKHZhbHVlKSA6IGVtcHR5VmFsdWVCaW5kSW5zdHJ1Y3Rpb25cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3ZSBtdXN0IHNraXAgYXR0cmlidXRlcyB3aXRoIGFzc29jaWF0ZWQgaTE4biBjb250ZXh0LCBzaW5jZSB0aGVzZSBhdHRyaWJ1dGVzIGFyZSBoYW5kbGVkXG4gICAgICAgIC8vIHNlcGFyYXRlbHkgYW5kIGNvcnJlc3BvbmRpbmcgYGkxOG5FeHBgIGFuZCBgaTE4bkFwcGx5YCBpbnN0cnVjdGlvbnMgd2lsbCBiZSBnZW5lcmF0ZWRcbiAgICAgICAgaWYgKGlucHV0LmkxOG4pIHJldHVybjtcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnZpc2l0KHRoaXMuX3ZhbHVlQ29udmVydGVyKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBwYXJhbXM6IGFueVtdID0gW107XG4gICAgICAgICAgY29uc3QgW2F0dHJOYW1lc3BhY2UsIGF0dHJOYW1lXSA9IHNwbGl0TnNOYW1lKGlucHV0Lm5hbWUpO1xuICAgICAgICAgIGNvbnN0IGlzQXR0cmlidXRlQmluZGluZyA9IGlucHV0VHlwZSA9PT0gQmluZGluZ1R5cGUuQXR0cmlidXRlO1xuICAgICAgICAgIGNvbnN0IHNhbml0aXphdGlvblJlZiA9IHJlc29sdmVTYW5pdGl6YXRpb25GbihpbnB1dC5zZWN1cml0eUNvbnRleHQsIGlzQXR0cmlidXRlQmluZGluZyk7XG4gICAgICAgICAgaWYgKHNhbml0aXphdGlvblJlZikgcGFyYW1zLnB1c2goc2FuaXRpemF0aW9uUmVmKTtcbiAgICAgICAgICBpZiAoYXR0ck5hbWVzcGFjZSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZXNwYWNlTGl0ZXJhbCA9IG8ubGl0ZXJhbChhdHRyTmFtZXNwYWNlKTtcblxuICAgICAgICAgICAgaWYgKHNhbml0aXphdGlvblJlZikge1xuICAgICAgICAgICAgICBwYXJhbXMucHVzaChuYW1lc3BhY2VMaXRlcmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIElmIHRoZXJlIHdhc24ndCBhIHNhbml0aXphdGlvbiByZWYsIHdlIG5lZWQgdG8gYWRkXG4gICAgICAgICAgICAgIC8vIGFuIGV4dHJhIHBhcmFtIHNvIHRoYXQgd2UgY2FuIHBhc3MgaW4gdGhlIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgcGFyYW1zLnB1c2goby5saXRlcmFsKG51bGwpLCBuYW1lc3BhY2VMaXRlcmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hbGxvY2F0ZUJpbmRpbmdTbG90cyh2YWx1ZSk7XG5cbiAgICAgICAgICBpZiAoaW5wdXRUeXBlID09PSBCaW5kaW5nVHlwZS5Qcm9wZXJ0eSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSW50ZXJwb2xhdGlvbikge1xuICAgICAgICAgICAgICAvLyBwcm9wPVwie3t2YWx1ZX19XCIgYW5kIGZyaWVuZHNcbiAgICAgICAgICAgICAgdGhpcy5pbnRlcnBvbGF0ZWRVcGRhdGVJbnN0cnVjdGlvbihcbiAgICAgICAgICAgICAgICAgIGdldFByb3BlcnR5SW50ZXJwb2xhdGlvbkV4cHJlc3Npb24odmFsdWUpLCBlbGVtZW50SW5kZXgsIGF0dHJOYW1lLCBpbnB1dCwgdmFsdWUsXG4gICAgICAgICAgICAgICAgICBwYXJhbXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gW3Byb3BdPVwidmFsdWVcIlxuICAgICAgICAgICAgICAvLyBDb2xsZWN0IGFsbCB0aGUgcHJvcGVydGllcyBzbyB0aGF0IHdlIGNhbiBjaGFpbiBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uIGF0IHRoZSBlbmQuXG4gICAgICAgICAgICAgIHByb3BlcnR5QmluZGluZ3MucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogYXR0ck5hbWUsXG4gICAgICAgICAgICAgICAgc291cmNlU3BhbjogaW5wdXQuc291cmNlU3BhbixcbiAgICAgICAgICAgICAgICB2YWx1ZTogKCkgPT4gdGhpcy5jb252ZXJ0UHJvcGVydHlCaW5kaW5nKHZhbHVlKSxcbiAgICAgICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09IEJpbmRpbmdUeXBlLkF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSW50ZXJwb2xhdGlvbiAmJiBnZXRJbnRlcnBvbGF0aW9uQXJnc0xlbmd0aCh2YWx1ZSkgPiAxKSB7XG4gICAgICAgICAgICAgIC8vIGF0dHIubmFtZT1cInRleHR7e3ZhbHVlfX1cIiBhbmQgZnJpZW5kc1xuICAgICAgICAgICAgICB0aGlzLmludGVycG9sYXRlZFVwZGF0ZUluc3RydWN0aW9uKFxuICAgICAgICAgICAgICAgICAgZ2V0QXR0cmlidXRlSW50ZXJwb2xhdGlvbkV4cHJlc3Npb24odmFsdWUpLCBlbGVtZW50SW5kZXgsIGF0dHJOYW1lLCBpbnB1dCwgdmFsdWUsXG4gICAgICAgICAgICAgICAgICBwYXJhbXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgYm91bmRWYWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgSW50ZXJwb2xhdGlvbiA/IHZhbHVlLmV4cHJlc3Npb25zWzBdIDogdmFsdWU7XG4gICAgICAgICAgICAgIC8vIFthdHRyLm5hbWVdPVwidmFsdWVcIiBvciBhdHRyLm5hbWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICAgICAgICAvLyBDb2xsZWN0IHRoZSBhdHRyaWJ1dGUgYmluZGluZ3Mgc28gdGhhdCB0aGV5IGNhbiBiZSBjaGFpbmVkIGF0IHRoZSBlbmQuXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZUJpbmRpbmdzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGF0dHJOYW1lLFxuICAgICAgICAgICAgICAgIHNvdXJjZVNwYW46IGlucHV0LnNvdXJjZVNwYW4sXG4gICAgICAgICAgICAgICAgdmFsdWU6ICgpID0+IHRoaXMuY29udmVydFByb3BlcnR5QmluZGluZyhib3VuZFZhbHVlKSxcbiAgICAgICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNsYXNzIHByb3BcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdHJ1Y3Rpb25XaXRoQWR2YW5jZShlbGVtZW50SW5kZXgsIGlucHV0LnNvdXJjZVNwYW4sIFIzLmNsYXNzUHJvcCwgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG8ubGl0ZXJhbChlbGVtZW50SW5kZXgpLCBvLmxpdGVyYWwoYXR0ck5hbWUpLCB0aGlzLmNvbnZlcnRQcm9wZXJ0eUJpbmRpbmcodmFsdWUpLFxuICAgICAgICAgICAgICAgIC4uLnBhcmFtc1xuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocHJvcGVydHlCaW5kaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnVwZGF0ZUluc3RydWN0aW9uQ2hhaW5XaXRoQWR2YW5jZShlbGVtZW50SW5kZXgsIFIzLnByb3BlcnR5LCBwcm9wZXJ0eUJpbmRpbmdzKTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlQmluZGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy51cGRhdGVJbnN0cnVjdGlvbkNoYWluV2l0aEFkdmFuY2UoZWxlbWVudEluZGV4LCBSMy5hdHRyaWJ1dGUsIGF0dHJpYnV0ZUJpbmRpbmdzKTtcbiAgICB9XG5cbiAgICAvLyBUcmF2ZXJzZSBlbGVtZW50IGNoaWxkIG5vZGVzXG4gICAgdC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuKTtcblxuICAgIGlmICghaXNJMThuUm9vdEVsZW1lbnQgJiYgdGhpcy5pMThuKSB7XG4gICAgICB0aGlzLmkxOG4uYXBwZW5kRWxlbWVudChlbGVtZW50LmkxOG4hLCBlbGVtZW50SW5kZXgsIHRydWUpO1xuICAgIH1cblxuICAgIGlmICghY3JlYXRlU2VsZkNsb3NpbmdJbnN0cnVjdGlvbikge1xuICAgICAgLy8gRmluaXNoIGVsZW1lbnQgY29uc3RydWN0aW9uIG1vZGUuXG4gICAgICBjb25zdCBzcGFuID0gZWxlbWVudC5lbmRTb3VyY2VTcGFuIHx8IGVsZW1lbnQuc291cmNlU3BhbjtcbiAgICAgIGlmIChpc0kxOG5Sb290RWxlbWVudCkge1xuICAgICAgICB0aGlzLmkxOG5FbmQoc3BhbiwgY3JlYXRlU2VsZkNsb3NpbmdJMThuSW5zdHJ1Y3Rpb24pO1xuICAgICAgfVxuICAgICAgaWYgKGlzTm9uQmluZGFibGVNb2RlKSB7XG4gICAgICAgIHRoaXMuY3JlYXRpb25JbnN0cnVjdGlvbihzcGFuLCBSMy5lbmFibGVCaW5kaW5ncyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNyZWF0aW9uSW5zdHJ1Y3Rpb24oc3BhbiwgaXNOZ0NvbnRhaW5lciA/IFIzLmVsZW1lbnRDb250YWluZXJFbmQgOiBSMy5lbGVtZW50RW5kKTtcbiAgICB9XG4gIH1cblxuXG4gIHZpc2l0VGVtcGxhdGUodGVtcGxhdGU6IHQuVGVtcGxhdGUpIHtcbiAgICBjb25zdCBOR19URU1QTEFURV9UQUdfTkFNRSA9ICduZy10ZW1wbGF0ZSc7XG4gICAgY29uc3QgdGVtcGxhdGVJbmRleCA9IHRoaXMuYWxsb2NhdGVEYXRhU2xvdCgpO1xuXG4gICAgaWYgKHRoaXMuaTE4bikge1xuICAgICAgdGhpcy5pMThuLmFwcGVuZFRlbXBsYXRlKHRlbXBsYXRlLmkxOG4hLCB0ZW1wbGF0ZUluZGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCB0YWdOYW1lID0gc2FuaXRpemVJZGVudGlmaWVyKHRlbXBsYXRlLnRhZ05hbWUgfHwgJycpO1xuICAgIGNvbnN0IGNvbnRleHROYW1lID0gYCR7dGhpcy5jb250ZXh0TmFtZX0ke3RhZ05hbWUgPyAnXycgKyB0YWdOYW1lIDogJyd9XyR7dGVtcGxhdGVJbmRleH1gO1xuICAgIGNvbnN0IHRlbXBsYXRlTmFtZSA9IGAke2NvbnRleHROYW1lfV9UZW1wbGF0ZWA7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBvLkV4cHJlc3Npb25bXSA9IFtcbiAgICAgIG8ubGl0ZXJhbCh0ZW1wbGF0ZUluZGV4KSxcbiAgICAgIG8udmFyaWFibGUodGVtcGxhdGVOYW1lKSxcblxuICAgICAgLy8gV2UgZG9uJ3QgY2FyZSBhYm91dCB0aGUgdGFnJ3MgbmFtZXNwYWNlIGhlcmUsIGJlY2F1c2Ugd2UgaW5mZXJcbiAgICAgIC8vIGl0IGJhc2VkIG9uIHRoZSBwYXJlbnQgbm9kZXMgaW5zaWRlIHRoZSB0ZW1wbGF0ZSBpbnN0cnVjdGlvbi5cbiAgICAgIG8ubGl0ZXJhbCh0ZW1wbGF0ZS50YWdOYW1lID8gc3BsaXROc05hbWUodGVtcGxhdGUudGFnTmFtZSlbMV0gOiB0ZW1wbGF0ZS50YWdOYW1lKSxcbiAgICBdO1xuXG4gICAgLy8gZmluZCBkaXJlY3RpdmVzIG1hdGNoaW5nIG9uIGEgZ2l2ZW4gPG5nLXRlbXBsYXRlPiBub2RlXG4gICAgdGhpcy5tYXRjaERpcmVjdGl2ZXMoTkdfVEVNUExBVEVfVEFHX05BTUUsIHRlbXBsYXRlKTtcblxuICAgIC8vIHByZXBhcmUgYXR0cmlidXRlcyBwYXJhbWV0ZXIgKGluY2x1ZGluZyBhdHRyaWJ1dGVzIHVzZWQgZm9yIGRpcmVjdGl2ZSBtYXRjaGluZylcbiAgICBjb25zdCBbaTE4blN0YXRpY0F0dHJzLCBzdGF0aWNBdHRyc10gPSBwYXJ0aXRpb25BcnJheSh0ZW1wbGF0ZS5hdHRyaWJ1dGVzLCBoYXNJMThuTWV0YSk7XG4gICAgY29uc3QgYXR0cnNFeHByczogby5FeHByZXNzaW9uW10gPSB0aGlzLmdldEF0dHJpYnV0ZUV4cHJlc3Npb25zKFxuICAgICAgICBzdGF0aWNBdHRycywgdGVtcGxhdGUuaW5wdXRzLCB0ZW1wbGF0ZS5vdXRwdXRzLCB1bmRlZmluZWQgLyogc3R5bGVzICovLFxuICAgICAgICB0ZW1wbGF0ZS50ZW1wbGF0ZUF0dHJzLCBpMThuU3RhdGljQXR0cnMpO1xuICAgIHBhcmFtZXRlcnMucHVzaCh0aGlzLmFkZEF0dHJzVG9Db25zdHMoYXR0cnNFeHBycykpO1xuXG4gICAgLy8gbG9jYWwgcmVmcyAoZXguOiA8bmctdGVtcGxhdGUgI2Zvbz4pXG4gICAgaWYgKHRlbXBsYXRlLnJlZmVyZW5jZXMgJiYgdGVtcGxhdGUucmVmZXJlbmNlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHJlZnMgPSB0aGlzLnByZXBhcmVSZWZzQXJyYXkodGVtcGxhdGUucmVmZXJlbmNlcyk7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2godGhpcy5hZGRUb0NvbnN0cyhyZWZzKSk7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2goby5pbXBvcnRFeHByKFIzLnRlbXBsYXRlUmVmRXh0cmFjdG9yKSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvblxuICAgIGNvbnN0IHRlbXBsYXRlVmlzaXRvciA9IG5ldyBUZW1wbGF0ZURlZmluaXRpb25CdWlsZGVyKFxuICAgICAgICB0aGlzLmNvbnN0YW50UG9vbCwgdGhpcy5fYmluZGluZ1Njb3BlLCB0aGlzLmxldmVsICsgMSwgY29udGV4dE5hbWUsIHRoaXMuaTE4bixcbiAgICAgICAgdGVtcGxhdGVJbmRleCwgdGVtcGxhdGVOYW1lLCB0aGlzLmRpcmVjdGl2ZU1hdGNoZXIsIHRoaXMuZGlyZWN0aXZlcywgdGhpcy5waXBlVHlwZUJ5TmFtZSxcbiAgICAgICAgdGhpcy5waXBlcywgdGhpcy5fbmFtZXNwYWNlLCB0aGlzLmZpbGVCYXNlZEkxOG5TdWZmaXgsIHRoaXMuaTE4blVzZUV4dGVybmFsSWRzLFxuICAgICAgICB0aGlzLl9jb25zdGFudHMpO1xuXG4gICAgLy8gTmVzdGVkIHRlbXBsYXRlcyBtdXN0IG5vdCBiZSB2aXNpdGVkIHVudGlsIGFmdGVyIHRoZWlyIHBhcmVudCB0ZW1wbGF0ZXMgaGF2ZSBjb21wbGV0ZWRcbiAgICAvLyBwcm9jZXNzaW5nLCBzbyB0aGV5IGFyZSBxdWV1ZWQgaGVyZSB1bnRpbCBhZnRlciB0aGUgaW5pdGlhbCBwYXNzLiBPdGhlcndpc2UsIHdlIHdvdWxkbid0XG4gICAgLy8gYmUgYWJsZSB0byBzdXBwb3J0IGJpbmRpbmdzIGluIG5lc3RlZCB0ZW1wbGF0ZXMgdG8gbG9jYWwgcmVmcyB0aGF0IG9jY3VyIGFmdGVyIHRoZVxuICAgIC8vIHRlbXBsYXRlIGRlZmluaXRpb24uIGUuZy4gPGRpdiAqbmdJZj1cInNob3dpbmdcIj57eyBmb28gfX08L2Rpdj4gIDxkaXYgI2Zvbz48L2Rpdj5cbiAgICB0aGlzLl9uZXN0ZWRUZW1wbGF0ZUZucy5wdXNoKCgpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlRnVuY3Rpb25FeHByID0gdGVtcGxhdGVWaXNpdG9yLmJ1aWxkVGVtcGxhdGVGdW5jdGlvbihcbiAgICAgICAgICB0ZW1wbGF0ZS5jaGlsZHJlbiwgdGVtcGxhdGUudmFyaWFibGVzLFxuICAgICAgICAgIHRoaXMuX25nQ29udGVudFJlc2VydmVkU2xvdHMubGVuZ3RoICsgdGhpcy5fbmdDb250ZW50U2VsZWN0b3JzT2Zmc2V0LCB0ZW1wbGF0ZS5pMThuKTtcbiAgICAgIHRoaXMuY29uc3RhbnRQb29sLnN0YXRlbWVudHMucHVzaCh0ZW1wbGF0ZUZ1bmN0aW9uRXhwci50b0RlY2xTdG10KHRlbXBsYXRlTmFtZSwgbnVsbCkpO1xuICAgICAgaWYgKHRlbXBsYXRlVmlzaXRvci5fbmdDb250ZW50UmVzZXJ2ZWRTbG90cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbmdDb250ZW50UmVzZXJ2ZWRTbG90cy5wdXNoKC4uLnRlbXBsYXRlVmlzaXRvci5fbmdDb250ZW50UmVzZXJ2ZWRTbG90cyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBlLmcuIHRlbXBsYXRlKDEsIE15Q29tcF9UZW1wbGF0ZV8xKVxuICAgIHRoaXMuY3JlYXRpb25JbnN0cnVjdGlvbih0ZW1wbGF0ZS5zb3VyY2VTcGFuLCBSMy50ZW1wbGF0ZUNyZWF0ZSwgKCkgPT4ge1xuICAgICAgcGFyYW1ldGVycy5zcGxpY2UoXG4gICAgICAgICAgMiwgMCwgby5saXRlcmFsKHRlbXBsYXRlVmlzaXRvci5nZXRDb25zdENvdW50KCkpLFxuICAgICAgICAgIG8ubGl0ZXJhbCh0ZW1wbGF0ZVZpc2l0b3IuZ2V0VmFyQ291bnQoKSkpO1xuICAgICAgcmV0dXJuIHRyaW1UcmFpbGluZ051bGxzKHBhcmFtZXRlcnMpO1xuICAgIH0pO1xuXG4gICAgLy8gaGFuZGxlIHByb3BlcnR5IGJpbmRpbmdzIGUuZy4gybXJtXByb3BlcnR5KCduZ0Zvck9mJywgY3R4Lml0ZW1zKSwgZXQgYWw7XG4gICAgdGhpcy50ZW1wbGF0ZVByb3BlcnR5QmluZGluZ3ModGVtcGxhdGVJbmRleCwgdGVtcGxhdGUudGVtcGxhdGVBdHRycyk7XG5cbiAgICAvLyBPbmx5IGFkZCBub3JtYWwgaW5wdXQvb3V0cHV0IGJpbmRpbmcgaW5zdHJ1Y3Rpb25zIG9uIGV4cGxpY2l0IDxuZy10ZW1wbGF0ZT4gZWxlbWVudHMuXG4gICAgaWYgKHRlbXBsYXRlLnRhZ05hbWUgPT09IE5HX1RFTVBMQVRFX1RBR19OQU1FKSB7XG4gICAgICBjb25zdCBbaTE4bklucHV0cywgaW5wdXRzXSA9IHBhcnRpdGlvbkFycmF5KHRlbXBsYXRlLmlucHV0cywgaGFzSTE4bk1ldGEpO1xuICAgICAgY29uc3QgaTE4bkF0dHJzID0gWy4uLmkxOG5TdGF0aWNBdHRycywgLi4uaTE4bklucHV0c107XG5cbiAgICAgIC8vIEFkZCBpMThuIGF0dHJpYnV0ZXMgdGhhdCBtYXkgYWN0IGFzIGlucHV0cyB0byBkaXJlY3RpdmVzLiBJZiBzdWNoIGF0dHJpYnV0ZXMgYXJlIHByZXNlbnQsXG4gICAgICAvLyBnZW5lcmF0ZSBgaTE4bkF0dHJpYnV0ZXNgIGluc3RydWN0aW9uLiBOb3RlOiB3ZSBnZW5lcmF0ZSBpdCBvbmx5IGZvciBleHBsaWNpdCA8bmctdGVtcGxhdGU+XG4gICAgICAvLyBlbGVtZW50cywgaW4gY2FzZSBvZiBpbmxpbmUgdGVtcGxhdGVzLCBjb3JyZXNwb25kaW5nIGluc3RydWN0aW9ucyB3aWxsIGJlIGdlbmVyYXRlZCBpbiB0aGVcbiAgICAgIC8vIG5lc3RlZCB0ZW1wbGF0ZSBmdW5jdGlvbi5cbiAgICAgIGlmIChpMThuQXR0cnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmkxOG5BdHRyaWJ1dGVzSW5zdHJ1Y3Rpb24odGVtcGxhdGVJbmRleCwgaTE4bkF0dHJzLCB0ZW1wbGF0ZS5zb3VyY2VTcGFuKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBpbnB1dCBiaW5kaW5nc1xuICAgICAgaWYgKGlucHV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVQcm9wZXJ0eUJpbmRpbmdzKHRlbXBsYXRlSW5kZXgsIGlucHV0cyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEdlbmVyYXRlIGxpc3RlbmVycyBmb3IgZGlyZWN0aXZlIG91dHB1dFxuICAgICAgaWYgKHRlbXBsYXRlLm91dHB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0ZW1wbGF0ZS5vdXRwdXRzLm1hcChcbiAgICAgICAgICAgIChvdXRwdXRBc3Q6IHQuQm91bmRFdmVudCkgPT4gKHtcbiAgICAgICAgICAgICAgc291cmNlU3Bhbjogb3V0cHV0QXN0LnNvdXJjZVNwYW4sXG4gICAgICAgICAgICAgIHBhcmFtczogdGhpcy5wcmVwYXJlTGlzdGVuZXJQYXJhbWV0ZXIoJ25nX3RlbXBsYXRlJywgb3V0cHV0QXN0LCB0ZW1wbGF0ZUluZGV4KVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmNyZWF0aW9uSW5zdHJ1Y3Rpb25DaGFpbihSMy5saXN0ZW5lciwgbGlzdGVuZXJzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGVzZSBzaG91bGQgYmUgaGFuZGxlZCBpbiB0aGUgdGVtcGxhdGUgb3IgZWxlbWVudCBkaXJlY3RseS5cbiAgcmVhZG9ubHkgdmlzaXRSZWZlcmVuY2UgPSBpbnZhbGlkO1xuICByZWFkb25seSB2aXNpdFZhcmlhYmxlID0gaW52YWxpZDtcbiAgcmVhZG9ubHkgdmlzaXRUZXh0QXR0cmlidXRlID0gaW52YWxpZDtcbiAgcmVhZG9ubHkgdmlzaXRCb3VuZEF0dHJpYnV0ZSA9IGludmFsaWQ7XG4gIHJlYWRvbmx5IHZpc2l0Qm91bmRFdmVudCA9IGludmFsaWQ7XG5cbiAgdmlzaXRCb3VuZFRleHQodGV4dDogdC5Cb3VuZFRleHQpIHtcbiAgICBpZiAodGhpcy5pMThuKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRleHQudmFsdWUudmlzaXQodGhpcy5fdmFsdWVDb252ZXJ0ZXIpO1xuICAgICAgdGhpcy5hbGxvY2F0ZUJpbmRpbmdTbG90cyh2YWx1ZSk7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgIHRoaXMuaTE4bi5hcHBlbmRCb3VuZFRleHQodGV4dC5pMThuISk7XG4gICAgICAgIHRoaXMuaTE4bkFwcGVuZEJpbmRpbmdzKHZhbHVlLmV4cHJlc3Npb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlSW5kZXggPSB0aGlzLmFsbG9jYXRlRGF0YVNsb3QoKTtcblxuICAgIHRoaXMuY3JlYXRpb25JbnN0cnVjdGlvbih0ZXh0LnNvdXJjZVNwYW4sIFIzLnRleHQsIFtvLmxpdGVyYWwobm9kZUluZGV4KV0pO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0ZXh0LnZhbHVlLnZpc2l0KHRoaXMuX3ZhbHVlQ29udmVydGVyKTtcbiAgICB0aGlzLmFsbG9jYXRlQmluZGluZ1Nsb3RzKHZhbHVlKTtcblxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEludGVycG9sYXRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlSW5zdHJ1Y3Rpb25XaXRoQWR2YW5jZShcbiAgICAgICAgICBub2RlSW5kZXgsIHRleHQuc291cmNlU3BhbiwgZ2V0VGV4dEludGVycG9sYXRpb25FeHByZXNzaW9uKHZhbHVlKSxcbiAgICAgICAgICAoKSA9PiB0aGlzLmdldFVwZGF0ZUluc3RydWN0aW9uQXJndW1lbnRzKHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yKCdUZXh0IG5vZGVzIHNob3VsZCBiZSBpbnRlcnBvbGF0ZWQgYW5kIG5ldmVyIGJvdW5kIGRpcmVjdGx5LicpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiB0LlRleHQpIHtcbiAgICAvLyB3aGVuIGEgdGV4dCBlbGVtZW50IGlzIGxvY2F0ZWQgd2l0aGluIGEgdHJhbnNsYXRhYmxlXG4gICAgLy8gYmxvY2ssIHdlIGV4Y2x1ZGUgdGhpcyB0ZXh0IGVsZW1lbnQgZnJvbSBpbnN0cnVjdGlvbnMgc2V0LFxuICAgIC8vIHNpbmNlIGl0IHdpbGwgYmUgY2FwdHVyZWQgaW4gaTE4biBjb250ZW50IGFuZCBwcm9jZXNzZWQgYXQgcnVudGltZVxuICAgIGlmICghdGhpcy5pMThuKSB7XG4gICAgICB0aGlzLmNyZWF0aW9uSW5zdHJ1Y3Rpb24oXG4gICAgICAgICAgdGV4dC5zb3VyY2VTcGFuLCBSMy50ZXh0LCBbby5saXRlcmFsKHRoaXMuYWxsb2NhdGVEYXRhU2xvdCgpKSwgby5saXRlcmFsKHRleHQudmFsdWUpXSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiB0LkljdSkge1xuICAgIGxldCBpbml0V2FzSW52b2tlZCA9IGZhbHNlO1xuXG4gICAgLy8gaWYgYW4gSUNVIHdhcyBjcmVhdGVkIG91dHNpZGUgb2YgaTE4biBibG9jaywgd2Ugc3RpbGwgdHJlYXRcbiAgICAvLyBpdCBhcyBhIHRyYW5zbGF0YWJsZSBlbnRpdHkgYW5kIGludm9rZSBpMThuU3RhcnQgYW5kIGkxOG5FbmRcbiAgICAvLyB0byBnZW5lcmF0ZSBpMThuIGNvbnRleHQgYW5kIHRoZSBuZWNlc3NhcnkgaW5zdHJ1Y3Rpb25zXG4gICAgaWYgKCF0aGlzLmkxOG4pIHtcbiAgICAgIGluaXRXYXNJbnZva2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaTE4blN0YXJ0KG51bGwsIGljdS5pMThuISwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaTE4biA9IHRoaXMuaTE4biE7XG4gICAgY29uc3QgdmFycyA9IHRoaXMuaTE4bkJpbmRQcm9wcyhpY3UudmFycyk7XG4gICAgY29uc3QgcGxhY2Vob2xkZXJzID0gdGhpcy5pMThuQmluZFByb3BzKGljdS5wbGFjZWhvbGRlcnMpO1xuXG4gICAgLy8gb3V0cHV0IElDVSBkaXJlY3RseSBhbmQga2VlcCBJQ1UgcmVmZXJlbmNlIGluIGNvbnRleHRcbiAgICBjb25zdCBtZXNzYWdlID0gaWN1LmkxOG4hIGFzIGkxOG4uTWVzc2FnZTtcblxuICAgIC8vIHdlIGFsd2F5cyBuZWVkIHBvc3QtcHJvY2Vzc2luZyBmdW5jdGlvbiBmb3IgSUNVcywgdG8gbWFrZSBzdXJlIHRoYXQ6XG4gICAgLy8gLSBhbGwgcGxhY2Vob2xkZXJzIGluIGEgZm9ybSBvZiB7UExBQ0VIT0xERVJ9IGFyZSByZXBsYWNlZCB3aXRoIGFjdHVhbCB2YWx1ZXMgKG5vdGU6XG4gICAgLy8gYGdvb2cuZ2V0TXNnYCBkb2VzIG5vdCBwcm9jZXNzIElDVXMgYW5kIHVzZXMgdGhlIGB7UExBQ0VIT0xERVJ9YCBmb3JtYXQgZm9yIHBsYWNlaG9sZGVyc1xuICAgIC8vIGluc2lkZSBJQ1VzKVxuICAgIC8vIC0gYWxsIElDVSB2YXJzIChzdWNoIGFzIGBWQVJfU0VMRUNUYCBvciBgVkFSX1BMVVJBTGApIGFyZSByZXBsYWNlZCB3aXRoIGNvcnJlY3QgdmFsdWVzXG4gICAgY29uc3QgdHJhbnNmb3JtRm4gPSAocmF3OiBvLlJlYWRWYXJFeHByKSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7Li4udmFycywgLi4ucGxhY2Vob2xkZXJzfTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGkxOG5Gb3JtYXRQbGFjZWhvbGRlck5hbWVzKHBhcmFtcywgLyogdXNlQ2FtZWxDYXNlICovIGZhbHNlKTtcbiAgICAgIHJldHVybiBpbnN0cnVjdGlvbihudWxsLCBSMy5pMThuUG9zdHByb2Nlc3MsIFtyYXcsIG1hcExpdGVyYWwoZm9ybWF0dGVkLCB0cnVlKV0pO1xuICAgIH07XG5cbiAgICAvLyBpbiBjYXNlIHRoZSB3aG9sZSBpMThuIG1lc3NhZ2UgaXMgYSBzaW5nbGUgSUNVIC0gd2UgZG8gbm90IG5lZWQgdG9cbiAgICAvLyBjcmVhdGUgYSBzZXBhcmF0ZSB0b3AtbGV2ZWwgdHJhbnNsYXRpb24sIHdlIGNhbiB1c2UgdGhlIHJvb3QgcmVmIGluc3RlYWRcbiAgICAvLyBhbmQgbWFrZSB0aGlzIElDVSBhIHRvcC1sZXZlbCB0cmFuc2xhdGlvblxuICAgIC8vIG5vdGU6IElDVSBwbGFjZWhvbGRlcnMgYXJlIHJlcGxhY2VkIHdpdGggYWN0dWFsIHZhbHVlcyBpbiBgaTE4blBvc3Rwcm9jZXNzYCBmdW5jdGlvblxuICAgIC8vIHNlcGFyYXRlbHksIHNvIHdlIGRvIG5vdCBwYXNzIHBsYWNlaG9sZGVycyBpbnRvIGBpMThuVHJhbnNsYXRlYCBmdW5jdGlvbi5cbiAgICBpZiAoaXNTaW5nbGVJMThuSWN1KGkxOG4ubWV0YSkpIHtcbiAgICAgIHRoaXMuaTE4blRyYW5zbGF0ZShtZXNzYWdlLCAvKiBwbGFjZWhvbGRlcnMgKi8ge30sIGkxOG4ucmVmLCB0cmFuc2Zvcm1Gbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG91dHB1dCBJQ1UgZGlyZWN0bHkgYW5kIGtlZXAgSUNVIHJlZmVyZW5jZSBpbiBjb250ZXh0XG4gICAgICBjb25zdCByZWYgPVxuICAgICAgICAgIHRoaXMuaTE4blRyYW5zbGF0ZShtZXNzYWdlLCAvKiBwbGFjZWhvbGRlcnMgKi8ge30sIC8qIHJlZiAqLyB1bmRlZmluZWQsIHRyYW5zZm9ybUZuKTtcbiAgICAgIGkxOG4uYXBwZW5kSWN1KGljdUZyb21JMThuTWVzc2FnZShtZXNzYWdlKS5uYW1lLCByZWYpO1xuICAgIH1cblxuICAgIGlmIChpbml0V2FzSW52b2tlZCkge1xuICAgICAgdGhpcy5pMThuRW5kKG51bGwsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYWxsb2NhdGVEYXRhU2xvdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YUluZGV4Kys7XG4gIH1cblxuICBnZXRDb25zdENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhSW5kZXg7XG4gIH1cblxuICBnZXRWYXJDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVyZUZ1bmN0aW9uU2xvdHM7XG4gIH1cblxuICBnZXRDb25zdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnN0YW50cztcbiAgfVxuXG4gIGdldE5nQ29udGVudFNlbGVjdG9ycygpOiBvLkV4cHJlc3Npb258bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX25nQ29udGVudFJlc2VydmVkU2xvdHMubGVuZ3RoID9cbiAgICAgICAgdGhpcy5jb25zdGFudFBvb2wuZ2V0Q29uc3RMaXRlcmFsKGFzTGl0ZXJhbCh0aGlzLl9uZ0NvbnRlbnRSZXNlcnZlZFNsb3RzKSwgdHJ1ZSkgOlxuICAgICAgICBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kaW5nQ29udGV4dCgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fYmluZGluZ0NvbnRleHQrK31gO1xuICB9XG5cbiAgcHJpdmF0ZSB0ZW1wbGF0ZVByb3BlcnR5QmluZGluZ3MoXG4gICAgICB0ZW1wbGF0ZUluZGV4OiBudW1iZXIsIGF0dHJzOiAodC5Cb3VuZEF0dHJpYnV0ZXx0LlRleHRBdHRyaWJ1dGUpW10pIHtcbiAgICBjb25zdCBwcm9wZXJ0eUJpbmRpbmdzOiBDaGFpbmFibGVCaW5kaW5nSW5zdHJ1Y3Rpb25bXSA9IFtdO1xuICAgIGF0dHJzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgdC5Cb3VuZEF0dHJpYnV0ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnZpc2l0KHRoaXMuX3ZhbHVlQ29udmVydGVyKTtcblxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuYWxsb2NhdGVCaW5kaW5nU2xvdHModmFsdWUpO1xuICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEludGVycG9sYXRpb24pIHtcbiAgICAgICAgICAgIC8vIFBhcmFtcyB0eXBpY2FsbHkgY29udGFpbiBhdHRyaWJ1dGUgbmFtZXNwYWNlIGFuZCB2YWx1ZSBzYW5pdGl6ZXIsIHdoaWNoIGlzIGFwcGxpY2FibGVcbiAgICAgICAgICAgIC8vIGZvciByZWd1bGFyIEhUTUwgZWxlbWVudHMsIGJ1dCBub3QgYXBwbGljYWJsZSBmb3IgPG5nLXRlbXBsYXRlPiAoc2luY2UgcHJvcHMgYWN0IGFzXG4gICAgICAgICAgICAvLyBpbnB1dHMgdG8gZGlyZWN0aXZlcyksIHNvIGtlZXAgcGFyYW1zIGFycmF5IGVtcHR5LlxuICAgICAgICAgICAgY29uc3QgcGFyYW1zOiBhbnlbXSA9IFtdO1xuXG4gICAgICAgICAgICAvLyBwcm9wPVwie3t2YWx1ZX19XCIgY2FzZVxuICAgICAgICAgICAgdGhpcy5pbnRlcnBvbGF0ZWRVcGRhdGVJbnN0cnVjdGlvbihcbiAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eUludGVycG9sYXRpb25FeHByZXNzaW9uKHZhbHVlKSwgdGVtcGxhdGVJbmRleCwgaW5wdXQubmFtZSwgaW5wdXQsIHZhbHVlLFxuICAgICAgICAgICAgICAgIHBhcmFtcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFtwcm9wXT1cInZhbHVlXCIgY2FzZVxuICAgICAgICAgICAgcHJvcGVydHlCaW5kaW5ncy5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZTogaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgc291cmNlU3BhbjogaW5wdXQuc291cmNlU3BhbixcbiAgICAgICAgICAgICAgdmFsdWU6ICgpID0+IHRoaXMuY29udmVydFByb3BlcnR5QmluZGluZyh2YWx1ZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHByb3BlcnR5QmluZGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy51cGRhdGVJbnN0cnVjdGlvbkNoYWluV2l0aEFkdmFuY2UodGVtcGxhdGVJbmRleCwgUjMucHJvcGVydHksIHByb3BlcnR5QmluZGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEJpbmRpbmdzIG11c3Qgb25seSBiZSByZXNvbHZlZCBhZnRlciBhbGwgbG9jYWwgcmVmcyBoYXZlIGJlZW4gdmlzaXRlZCwgc28gYWxsXG4gIC8vIGluc3RydWN0aW9ucyBhcmUgcXVldWVkIGluIGNhbGxiYWNrcyB0aGF0IGV4ZWN1dGUgb25jZSB0aGUgaW5pdGlhbCBwYXNzIGhhcyBjb21wbGV0ZWQuXG4gIC8vIE90aGVyd2lzZSwgd2Ugd291bGRuJ3QgYmUgYWJsZSB0byBzdXBwb3J0IGxvY2FsIHJlZnMgdGhhdCBhcmUgZGVmaW5lZCBhZnRlciB0aGVpclxuICAvLyBiaW5kaW5ncy4gZS5nLiB7eyBmb28gfX0gPGRpdiAjZm9vPjwvZGl2PlxuICBwcml2YXRlIGluc3RydWN0aW9uRm4oXG4gICAgICBmbnM6ICgoKSA9PiBvLlN0YXRlbWVudClbXSwgc3BhbjogUGFyc2VTb3VyY2VTcGFufG51bGwsIHJlZmVyZW5jZTogby5FeHRlcm5hbFJlZmVyZW5jZSxcbiAgICAgIHBhcmFtc09yRm46IG8uRXhwcmVzc2lvbltdfCgoKSA9PiBvLkV4cHJlc3Npb25bXSksIHByZXBlbmQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGZuc1twcmVwZW5kID8gJ3Vuc2hpZnQnIDogJ3B1c2gnXSgoKSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBBcnJheS5pc0FycmF5KHBhcmFtc09yRm4pID8gcGFyYW1zT3JGbiA6IHBhcmFtc09yRm4oKTtcbiAgICAgIHJldHVybiBpbnN0cnVjdGlvbihzcGFuLCByZWZlcmVuY2UsIHBhcmFtcykudG9TdG10KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NTdHlsaW5nVXBkYXRlSW5zdHJ1Y3Rpb24oXG4gICAgICBlbGVtZW50SW5kZXg6IG51bWJlciwgaW5zdHJ1Y3Rpb246IFN0eWxpbmdJbnN0cnVjdGlvbnxudWxsKSB7XG4gICAgbGV0IGFsbG9jYXRlQmluZGluZ1Nsb3RzID0gMDtcbiAgICBpZiAoaW5zdHJ1Y3Rpb24pIHtcbiAgICAgIGNvbnN0IGNhbGxzOiBDaGFpbmFibGVCaW5kaW5nSW5zdHJ1Y3Rpb25bXSA9IFtdO1xuXG4gICAgICBpbnN0cnVjdGlvbi5jYWxscy5mb3JFYWNoKGNhbGwgPT4ge1xuICAgICAgICBhbGxvY2F0ZUJpbmRpbmdTbG90cyArPSBjYWxsLmFsbG9jYXRlQmluZGluZ1Nsb3RzO1xuICAgICAgICBjYWxscy5wdXNoKHtcbiAgICAgICAgICBzb3VyY2VTcGFuOiBjYWxsLnNvdXJjZVNwYW4sXG4gICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsLnBhcmFtcyhcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPT4gKGNhbGwuc3VwcG9ydHNJbnRlcnBvbGF0aW9uICYmIHZhbHVlIGluc3RhbmNlb2YgSW50ZXJwb2xhdGlvbikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRVcGRhdGVJbnN0cnVjdGlvbkFyZ3VtZW50cyh2YWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0UHJvcGVydHlCaW5kaW5nKHZhbHVlKSkgYXMgby5FeHByZXNzaW9uW107XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnVwZGF0ZUluc3RydWN0aW9uQ2hhaW5XaXRoQWR2YW5jZShlbGVtZW50SW5kZXgsIGluc3RydWN0aW9uLnJlZmVyZW5jZSwgY2FsbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbGxvY2F0ZUJpbmRpbmdTbG90cztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRpb25JbnN0cnVjdGlvbihcbiAgICAgIHNwYW46IFBhcnNlU291cmNlU3BhbnxudWxsLCByZWZlcmVuY2U6IG8uRXh0ZXJuYWxSZWZlcmVuY2UsXG4gICAgICBwYXJhbXNPckZuPzogby5FeHByZXNzaW9uW118KCgpID0+IG8uRXhwcmVzc2lvbltdKSwgcHJlcGVuZD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmluc3RydWN0aW9uRm4odGhpcy5fY3JlYXRpb25Db2RlRm5zLCBzcGFuLCByZWZlcmVuY2UsIHBhcmFtc09yRm4gfHwgW10sIHByZXBlbmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGlvbkluc3RydWN0aW9uQ2hhaW4ocmVmZXJlbmNlOiBvLkV4dGVybmFsUmVmZXJlbmNlLCBjYWxsczoge1xuICAgIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbnxudWxsLFxuICAgIHBhcmFtczogKCkgPT4gby5FeHByZXNzaW9uW11cbiAgfVtdKSB7XG4gICAgY29uc3Qgc3BhbiA9IGNhbGxzLmxlbmd0aCA/IGNhbGxzWzBdLnNvdXJjZVNwYW4gOiBudWxsO1xuICAgIHRoaXMuX2NyZWF0aW9uQ29kZUZucy5wdXNoKCgpID0+IHtcbiAgICAgIHJldHVybiBjaGFpbmVkSW5zdHJ1Y3Rpb24ocmVmZXJlbmNlLCBjYWxscy5tYXAoY2FsbCA9PiBjYWxsLnBhcmFtcygpKSwgc3BhbikudG9TdG10KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUluc3RydWN0aW9uV2l0aEFkdmFuY2UoXG4gICAgICBub2RlSW5kZXg6IG51bWJlciwgc3BhbjogUGFyc2VTb3VyY2VTcGFufG51bGwsIHJlZmVyZW5jZTogby5FeHRlcm5hbFJlZmVyZW5jZSxcbiAgICAgIHBhcmFtc09yRm4/OiBvLkV4cHJlc3Npb25bXXwoKCkgPT4gby5FeHByZXNzaW9uW10pKSB7XG4gICAgdGhpcy5hZGRBZHZhbmNlSW5zdHJ1Y3Rpb25JZk5lY2Vzc2FyeShub2RlSW5kZXgsIHNwYW4pO1xuICAgIHRoaXMudXBkYXRlSW5zdHJ1Y3Rpb24oc3BhbiwgcmVmZXJlbmNlLCBwYXJhbXNPckZuKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSW5zdHJ1Y3Rpb24oXG4gICAgICBzcGFuOiBQYXJzZVNvdXJjZVNwYW58bnVsbCwgcmVmZXJlbmNlOiBvLkV4dGVybmFsUmVmZXJlbmNlLFxuICAgICAgcGFyYW1zT3JGbj86IG8uRXhwcmVzc2lvbltdfCgoKSA9PiBvLkV4cHJlc3Npb25bXSkpIHtcbiAgICB0aGlzLmluc3RydWN0aW9uRm4odGhpcy5fdXBkYXRlQ29kZUZucywgc3BhbiwgcmVmZXJlbmNlLCBwYXJhbXNPckZuIHx8IFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSW5zdHJ1Y3Rpb25DaGFpbihcbiAgICAgIHJlZmVyZW5jZTogby5FeHRlcm5hbFJlZmVyZW5jZSwgYmluZGluZ3M6IENoYWluYWJsZUJpbmRpbmdJbnN0cnVjdGlvbltdKSB7XG4gICAgY29uc3Qgc3BhbiA9IGJpbmRpbmdzLmxlbmd0aCA/IGJpbmRpbmdzWzBdLnNvdXJjZVNwYW4gOiBudWxsO1xuXG4gICAgdGhpcy5fdXBkYXRlQ29kZUZucy5wdXNoKCgpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxzID0gYmluZGluZ3MubWFwKHByb3BlcnR5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0eS52YWx1ZSgpO1xuICAgICAgICBjb25zdCBmblBhcmFtcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgICAgICBpZiAocHJvcGVydHkucGFyYW1zKSB7XG4gICAgICAgICAgZm5QYXJhbXMucHVzaCguLi5wcm9wZXJ0eS5wYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eS5uYW1lKSB7XG4gICAgICAgICAgLy8gV2Ugd2FudCB0aGUgcHJvcGVydHkgbmFtZSB0byBhbHdheXMgYmUgdGhlIGZpcnN0IGZ1bmN0aW9uIHBhcmFtZXRlci5cbiAgICAgICAgICBmblBhcmFtcy51bnNoaWZ0KG8ubGl0ZXJhbChwcm9wZXJ0eS5uYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuUGFyYW1zO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjaGFpbmVkSW5zdHJ1Y3Rpb24ocmVmZXJlbmNlLCBjYWxscywgc3BhbikudG9TdG10KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUluc3RydWN0aW9uQ2hhaW5XaXRoQWR2YW5jZShcbiAgICAgIG5vZGVJbmRleDogbnVtYmVyLCByZWZlcmVuY2U6IG8uRXh0ZXJuYWxSZWZlcmVuY2UsIGJpbmRpbmdzOiBDaGFpbmFibGVCaW5kaW5nSW5zdHJ1Y3Rpb25bXSkge1xuICAgIHRoaXMuYWRkQWR2YW5jZUluc3RydWN0aW9uSWZOZWNlc3NhcnkoXG4gICAgICAgIG5vZGVJbmRleCwgYmluZGluZ3MubGVuZ3RoID8gYmluZGluZ3NbMF0uc291cmNlU3BhbiA6IG51bGwpO1xuICAgIHRoaXMudXBkYXRlSW5zdHJ1Y3Rpb25DaGFpbihyZWZlcmVuY2UsIGJpbmRpbmdzKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkQWR2YW5jZUluc3RydWN0aW9uSWZOZWNlc3Nhcnkobm9kZUluZGV4OiBudW1iZXIsIHNwYW46IFBhcnNlU291cmNlU3BhbnxudWxsKSB7XG4gICAgaWYgKG5vZGVJbmRleCAhPT0gdGhpcy5fY3VycmVudEluZGV4KSB7XG4gICAgICBjb25zdCBkZWx0YSA9IG5vZGVJbmRleCAtIHRoaXMuX2N1cnJlbnRJbmRleDtcblxuICAgICAgaWYgKGRlbHRhIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FkdmFuY2UgaW5zdHJ1Y3Rpb24gY2FuIG9ubHkgZ28gZm9yd2FyZHMnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0cnVjdGlvbkZuKHRoaXMuX3VwZGF0ZUNvZGVGbnMsIHNwYW4sIFIzLmFkdmFuY2UsIFtvLmxpdGVyYWwoZGVsdGEpXSk7XG4gICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBub2RlSW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhbGxvY2F0ZVB1cmVGdW5jdGlvblNsb3RzKG51bVNsb3RzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IG9yaWdpbmFsU2xvdHMgPSB0aGlzLl9wdXJlRnVuY3Rpb25TbG90cztcbiAgICB0aGlzLl9wdXJlRnVuY3Rpb25TbG90cyArPSBudW1TbG90cztcbiAgICByZXR1cm4gb3JpZ2luYWxTbG90cztcbiAgfVxuXG4gIHByaXZhdGUgYWxsb2NhdGVCaW5kaW5nU2xvdHModmFsdWU6IEFTVHxudWxsKSB7XG4gICAgdGhpcy5fYmluZGluZ1Nsb3RzICs9IHZhbHVlIGluc3RhbmNlb2YgSW50ZXJwb2xhdGlvbiA/IHZhbHVlLmV4cHJlc3Npb25zLmxlbmd0aCA6IDE7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBleHByZXNzaW9uIHRoYXQgcmVmZXJzIHRvIHRoZSBpbXBsaWNpdCByZWNlaXZlci4gVGhlIGltcGxpY2l0XG4gICAqIHJlY2VpdmVyIGlzIGFsd2F5cyB0aGUgcm9vdCBsZXZlbCBjb250ZXh0LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRJbXBsaWNpdFJlY2VpdmVyRXhwcigpOiBvLlJlYWRWYXJFeHByIHtcbiAgICBpZiAodGhpcy5faW1wbGljaXRSZWNlaXZlckV4cHIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbXBsaWNpdFJlY2VpdmVyRXhwcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faW1wbGljaXRSZWNlaXZlckV4cHIgPSB0aGlzLmxldmVsID09PSAwID9cbiAgICAgICAgby52YXJpYWJsZShDT05URVhUX05BTUUpIDpcbiAgICAgICAgdGhpcy5fYmluZGluZ1Njb3BlLmdldE9yQ3JlYXRlU2hhcmVkQ29udGV4dFZhcigwKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFByb3BlcnR5QmluZGluZyh2YWx1ZTogQVNUKTogby5FeHByZXNzaW9uIHtcbiAgICBjb25zdCBjb252ZXJ0ZWRQcm9wZXJ0eUJpbmRpbmcgPSBjb252ZXJ0UHJvcGVydHlCaW5kaW5nKFxuICAgICAgICB0aGlzLCB0aGlzLmdldEltcGxpY2l0UmVjZWl2ZXJFeHByKCksIHZhbHVlLCB0aGlzLmJpbmRpbmdDb250ZXh0KCksIEJpbmRpbmdGb3JtLlRyeVNpbXBsZSxcbiAgICAgICAgKCkgPT4gZXJyb3IoJ1VuZXhwZWN0ZWQgaW50ZXJwb2xhdGlvbicpKTtcbiAgICBjb25zdCB2YWxFeHByID0gY29udmVydGVkUHJvcGVydHlCaW5kaW5nLmN1cnJWYWxFeHByO1xuICAgIHRoaXMuX3RlbXBWYXJpYWJsZXMucHVzaCguLi5jb252ZXJ0ZWRQcm9wZXJ0eUJpbmRpbmcuc3RtdHMpO1xuICAgIHJldHVybiB2YWxFeHByO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBsaXN0IG9mIGFyZ3VtZW50IGV4cHJlc3Npb25zIHRvIHBhc3MgdG8gYW4gdXBkYXRlIGluc3RydWN0aW9uIGV4cHJlc3Npb24uIEFsc28gdXBkYXRlc1xuICAgKiB0aGUgdGVtcCB2YXJpYWJsZXMgc3RhdGUgd2l0aCB0ZW1wIHZhcmlhYmxlcyB0aGF0IHdlcmUgaWRlbnRpZmllZCBhcyBuZWVkaW5nIHRvIGJlIGNyZWF0ZWRcbiAgICogd2hpbGUgdmlzaXRpbmcgdGhlIGFyZ3VtZW50cy5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSBvcmlnaW5hbCBleHByZXNzaW9uIHdlIHdpbGwgYmUgcmVzb2x2aW5nIGFuIGFyZ3VtZW50cyBsaXN0IGZyb20uXG4gICAqL1xuICBwcml2YXRlIGdldFVwZGF0ZUluc3RydWN0aW9uQXJndW1lbnRzKHZhbHVlOiBBU1QpOiBvLkV4cHJlc3Npb25bXSB7XG4gICAgY29uc3Qge2FyZ3MsIHN0bXRzfSA9XG4gICAgICAgIGNvbnZlcnRVcGRhdGVBcmd1bWVudHModGhpcywgdGhpcy5nZXRJbXBsaWNpdFJlY2VpdmVyRXhwcigpLCB2YWx1ZSwgdGhpcy5iaW5kaW5nQ29udGV4dCgpKTtcblxuICAgIHRoaXMuX3RlbXBWYXJpYWJsZXMucHVzaCguLi5zdG10cyk7XG4gICAgcmV0dXJuIGFyZ3M7XG4gIH1cblxuICBwcml2YXRlIG1hdGNoRGlyZWN0aXZlcyhlbGVtZW50TmFtZTogc3RyaW5nLCBlbE9yVHBsOiB0LkVsZW1lbnR8dC5UZW1wbGF0ZSkge1xuICAgIGlmICh0aGlzLmRpcmVjdGl2ZU1hdGNoZXIpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlQ3NzU2VsZWN0b3IoZWxlbWVudE5hbWUsIGdldEF0dHJzRm9yRGlyZWN0aXZlTWF0Y2hpbmcoZWxPclRwbCkpO1xuICAgICAgdGhpcy5kaXJlY3RpdmVNYXRjaGVyLm1hdGNoKHNlbGVjdG9yLCAoY3NzU2VsZWN0b3IsIHN0YXRpY1R5cGUpID0+IHtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzLmFkZChzdGF0aWNUeXBlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlcyBhbGwgYXR0cmlidXRlIGV4cHJlc3Npb24gdmFsdWVzIGZvciB0aGUgYFRBdHRyaWJ1dGVzYCBhcnJheS5cbiAgICpcbiAgICogVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byBwcm9wZXJseSBjb25zdHJ1Y3QgYW4gYXR0cmlidXRlcyBhcnJheSB0aGF0XG4gICAqIGlzIHBhc3NlZCBpbnRvIHRoZSBgZWxlbWVudFN0YXJ0YCAob3IganVzdCBgZWxlbWVudGApIGZ1bmN0aW9ucy4gQmVjYXVzZSB0aGVyZVxuICAgKiBhcmUgbWFueSBkaWZmZXJlbnQgdHlwZXMgb2YgYXR0cmlidXRlcywgdGhlIGFycmF5IG5lZWRzIHRvIGJlIGNvbnN0cnVjdGVkIGluIGFcbiAgICogc3BlY2lhbCB3YXkgc28gdGhhdCBgZWxlbWVudFN0YXJ0YCBjYW4gcHJvcGVybHkgZXZhbHVhdGUgdGhlbS5cbiAgICpcbiAgICogVGhlIGZvcm1hdCBsb29rcyBsaWtlIHRoaXM6XG4gICAqXG4gICAqIGBgYFxuICAgKiBhdHRycyA9IFtwcm9wLCB2YWx1ZSwgcHJvcDIsIHZhbHVlMixcbiAgICogICBQUk9KRUNUX0FTLCBzZWxlY3RvcixcbiAgICogICBDTEFTU0VTLCBjbGFzczEsIGNsYXNzMixcbiAgICogICBTVFlMRVMsIHN0eWxlMSwgdmFsdWUxLCBzdHlsZTIsIHZhbHVlMixcbiAgICogICBCSU5ESU5HUywgbmFtZTEsIG5hbWUyLCBuYW1lMyxcbiAgICogICBURU1QTEFURSwgbmFtZTQsIG5hbWU1LCBuYW1lNixcbiAgICogICBJMThOLCBuYW1lNywgbmFtZTgsIC4uLl1cbiAgICogYGBgXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIHdpbGwgZnVsbHkgaWdub3JlIGFsbCBzeW50aGV0aWMgKEBmb28pIGF0dHJpYnV0ZSB2YWx1ZXNcbiAgICogYmVjYXVzZSB0aG9zZSB2YWx1ZXMgYXJlIGludGVuZGVkIHRvIGFsd2F5cyBiZSBnZW5lcmF0ZWQgYXMgcHJvcGVydHkgaW5zdHJ1Y3Rpb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRBdHRyaWJ1dGVFeHByZXNzaW9ucyhcbiAgICAgIHJlbmRlckF0dHJpYnV0ZXM6IHQuVGV4dEF0dHJpYnV0ZVtdLCBpbnB1dHM6IHQuQm91bmRBdHRyaWJ1dGVbXSwgb3V0cHV0czogdC5Cb3VuZEV2ZW50W10sXG4gICAgICBzdHlsZXM/OiBTdHlsaW5nQnVpbGRlciwgdGVtcGxhdGVBdHRyczogKHQuQm91bmRBdHRyaWJ1dGV8dC5UZXh0QXR0cmlidXRlKVtdID0gW10sXG4gICAgICBpMThuQXR0cnM6ICh0LkJvdW5kQXR0cmlidXRlfHQuVGV4dEF0dHJpYnV0ZSlbXSA9IFtdKTogby5FeHByZXNzaW9uW10ge1xuICAgIGNvbnN0IGFscmVhZHlTZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3QgYXR0ckV4cHJzOiBvLkV4cHJlc3Npb25bXSA9IFtdO1xuICAgIGxldCBuZ1Byb2plY3RBc0F0dHI6IHQuVGV4dEF0dHJpYnV0ZXx1bmRlZmluZWQ7XG5cbiAgICByZW5kZXJBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHI6IHQuVGV4dEF0dHJpYnV0ZSkgPT4ge1xuICAgICAgaWYgKGF0dHIubmFtZSA9PT0gTkdfUFJPSkVDVF9BU19BVFRSX05BTUUpIHtcbiAgICAgICAgbmdQcm9qZWN0QXNBdHRyID0gYXR0cjtcbiAgICAgIH1cbiAgICAgIGF0dHJFeHBycy5wdXNoKC4uLmdldEF0dHJpYnV0ZU5hbWVMaXRlcmFscyhhdHRyLm5hbWUpLCBhc0xpdGVyYWwoYXR0ci52YWx1ZSkpO1xuICAgIH0pO1xuXG4gICAgLy8gS2VlcCBuZ1Byb2plY3RBcyBuZXh0IHRvIHRoZSBvdGhlciBuYW1lLCB2YWx1ZSBwYWlycyBzbyB3ZSBjYW4gdmVyaWZ5IHRoYXQgd2UgbWF0Y2hcbiAgICAvLyBuZ1Byb2plY3RBcyBtYXJrZXIgaW4gdGhlIGF0dHJpYnV0ZSBuYW1lIHNsb3QuXG4gICAgaWYgKG5nUHJvamVjdEFzQXR0cikge1xuICAgICAgYXR0ckV4cHJzLnB1c2goLi4uZ2V0TmdQcm9qZWN0QXNMaXRlcmFsKG5nUHJvamVjdEFzQXR0cikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEF0dHJFeHByKGtleTogc3RyaW5nfG51bWJlciwgdmFsdWU/OiBvLkV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoIWFscmVhZHlTZWVuLmhhcyhrZXkpKSB7XG4gICAgICAgICAgYXR0ckV4cHJzLnB1c2goLi4uZ2V0QXR0cmlidXRlTmFtZUxpdGVyYWxzKGtleSkpO1xuICAgICAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgYXR0ckV4cHJzLnB1c2godmFsdWUpO1xuICAgICAgICAgIGFscmVhZHlTZWVuLmFkZChrZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyRXhwcnMucHVzaChvLmxpdGVyYWwoa2V5KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaXQncyBpbXBvcnRhbnQgdGhhdCB0aGlzIG9jY3VycyBiZWZvcmUgQklORElOR1MgYW5kIFRFTVBMQVRFIGJlY2F1c2Ugb25jZSBgZWxlbWVudFN0YXJ0YFxuICAgIC8vIGNvbWVzIGFjcm9zcyB0aGUgQklORElOR1Mgb3IgVEVNUExBVEUgbWFya2VycyB0aGVuIGl0IHdpbGwgY29udGludWUgcmVhZGluZyBlYWNoIHZhbHVlIGFzXG4gICAgLy8gYXMgc2luZ2xlIHByb3BlcnR5IHZhbHVlIGNlbGwgYnkgY2VsbC5cbiAgICBpZiAoc3R5bGVzKSB7XG4gICAgICBzdHlsZXMucG9wdWxhdGVJbml0aWFsU3R5bGluZ0F0dHJzKGF0dHJFeHBycyk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0cy5sZW5ndGggfHwgb3V0cHV0cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGF0dHJzTGVuZ3RoQmVmb3JlSW5wdXRzID0gYXR0ckV4cHJzLmxlbmd0aDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dHNbaV07XG4gICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdGhlIGFuaW1hdGlvbiBhbmQgYXR0cmlidXRlIGJpbmRpbmdzIGluIHRoZVxuICAgICAgICAvLyBhdHRyaWJ1dGVzIGFycmF5IHNpbmNlIHRoZXkgYXJlbid0IHVzZWQgZm9yIGRpcmVjdGl2ZSBtYXRjaGluZy5cbiAgICAgICAgaWYgKGlucHV0LnR5cGUgIT09IEJpbmRpbmdUeXBlLkFuaW1hdGlvbiAmJiBpbnB1dC50eXBlICE9PSBCaW5kaW5nVHlwZS5BdHRyaWJ1dGUpIHtcbiAgICAgICAgICBhZGRBdHRyRXhwcihpbnB1dC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gb3V0cHV0c1tpXTtcbiAgICAgICAgaWYgKG91dHB1dC50eXBlICE9PSBQYXJzZWRFdmVudFR5cGUuQW5pbWF0aW9uKSB7XG4gICAgICAgICAgYWRkQXR0ckV4cHIob3V0cHV0Lm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMgaXMgYSBjaGVhcCB3YXkgb2YgYWRkaW5nIHRoZSBtYXJrZXIgb25seSBhZnRlciBhbGwgdGhlIGlucHV0L291dHB1dFxuICAgICAgLy8gdmFsdWVzIGhhdmUgYmVlbiBmaWx0ZXJlZCAoYnkgbm90IGluY2x1ZGluZyB0aGUgYW5pbWF0aW9uIG9uZXMpIGFuZCBhZGRlZFxuICAgICAgLy8gdG8gdGhlIGV4cHJlc3Npb25zLiBUaGUgbWFya2VyIGlzIGltcG9ydGFudCBiZWNhdXNlIGl0IHRlbGxzIHRoZSBydW50aW1lXG4gICAgICAvLyBjb2RlIHRoYXQgdGhpcyBpcyB3aGVyZSBhdHRyaWJ1dGVzIHdpdGhvdXQgdmFsdWVzIHN0YXJ0Li4uXG4gICAgICBpZiAoYXR0ckV4cHJzLmxlbmd0aCAhPT0gYXR0cnNMZW5ndGhCZWZvcmVJbnB1dHMpIHtcbiAgICAgICAgYXR0ckV4cHJzLnNwbGljZShhdHRyc0xlbmd0aEJlZm9yZUlucHV0cywgMCwgby5saXRlcmFsKGNvcmUuQXR0cmlidXRlTWFya2VyLkJpbmRpbmdzKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlbXBsYXRlQXR0cnMubGVuZ3RoKSB7XG4gICAgICBhdHRyRXhwcnMucHVzaChvLmxpdGVyYWwoY29yZS5BdHRyaWJ1dGVNYXJrZXIuVGVtcGxhdGUpKTtcbiAgICAgIHRlbXBsYXRlQXR0cnMuZm9yRWFjaChhdHRyID0+IGFkZEF0dHJFeHByKGF0dHIubmFtZSkpO1xuICAgIH1cblxuICAgIGlmIChpMThuQXR0cnMubGVuZ3RoKSB7XG4gICAgICBhdHRyRXhwcnMucHVzaChvLmxpdGVyYWwoY29yZS5BdHRyaWJ1dGVNYXJrZXIuSTE4bikpO1xuICAgICAgaTE4bkF0dHJzLmZvckVhY2goYXR0ciA9PiBhZGRBdHRyRXhwcihhdHRyLm5hbWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0ckV4cHJzO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRUb0NvbnN0cyhleHByZXNzaW9uOiBvLkV4cHJlc3Npb24pOiBvLkxpdGVyYWxFeHByIHtcbiAgICBpZiAoby5pc051bGwoZXhwcmVzc2lvbikpIHtcbiAgICAgIHJldHVybiBvLlRZUEVEX05VTExfRVhQUjtcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gcmV1c2UgYSBsaXRlcmFsIHRoYXQncyBhbHJlYWR5IGluIHRoZSBhcnJheSwgaWYgcG9zc2libGUuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb25zdGFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9jb25zdGFudHNbaV0uaXNFcXVpdmFsZW50KGV4cHJlc3Npb24pKSB7XG4gICAgICAgIHJldHVybiBvLmxpdGVyYWwoaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG8ubGl0ZXJhbCh0aGlzLl9jb25zdGFudHMucHVzaChleHByZXNzaW9uKSAtIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRBdHRyc1RvQ29uc3RzKGF0dHJzOiBvLkV4cHJlc3Npb25bXSk6IG8uTGl0ZXJhbEV4cHIge1xuICAgIHJldHVybiBhdHRycy5sZW5ndGggPiAwID8gdGhpcy5hZGRUb0NvbnN0cyhvLmxpdGVyYWxBcnIoYXR0cnMpKSA6IG8uVFlQRURfTlVMTF9FWFBSO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlUmVmc0FycmF5KHJlZmVyZW5jZXM6IHQuUmVmZXJlbmNlW10pOiBvLkV4cHJlc3Npb24ge1xuICAgIGlmICghcmVmZXJlbmNlcyB8fCByZWZlcmVuY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG8uVFlQRURfTlVMTF9FWFBSO1xuICAgIH1cblxuICAgIGNvbnN0IHJlZnNQYXJhbSA9IGZsYXR0ZW4ocmVmZXJlbmNlcy5tYXAocmVmZXJlbmNlID0+IHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmFsbG9jYXRlRGF0YVNsb3QoKTtcbiAgICAgIC8vIEdlbmVyYXRlIHRoZSB1cGRhdGUgdGVtcG9yYXJ5LlxuICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy5fYmluZGluZ1Njb3BlLmZyZXNoUmVmZXJlbmNlTmFtZSgpO1xuICAgICAgY29uc3QgcmV0cmlldmFsTGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgICAgY29uc3QgbGhzID0gby52YXJpYWJsZSh2YXJpYWJsZU5hbWUpO1xuICAgICAgdGhpcy5fYmluZGluZ1Njb3BlLnNldChcbiAgICAgICAgICByZXRyaWV2YWxMZXZlbCwgcmVmZXJlbmNlLm5hbWUsIGxocyxcbiAgICAgICAgICBEZWNsYXJhdGlvblByaW9yaXR5LkRFRkFVTFQsIChzY29wZTogQmluZGluZ1Njb3BlLCByZWxhdGl2ZUxldmVsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIC8vIGUuZy4gbmV4dENvbnRleHQoMik7XG4gICAgICAgICAgICBjb25zdCBuZXh0Q29udGV4dFN0bXQgPVxuICAgICAgICAgICAgICAgIHJlbGF0aXZlTGV2ZWwgPiAwID8gW2dlbmVyYXRlTmV4dENvbnRleHRFeHByKHJlbGF0aXZlTGV2ZWwpLnRvU3RtdCgpXSA6IFtdO1xuXG4gICAgICAgICAgICAvLyBlLmcuIGNvbnN0ICRmb28kID0gcmVmZXJlbmNlKDEpO1xuICAgICAgICAgICAgY29uc3QgcmVmRXhwciA9IGxocy5zZXQoby5pbXBvcnRFeHByKFIzLnJlZmVyZW5jZSkuY2FsbEZuKFtvLmxpdGVyYWwoc2xvdCldKSk7XG4gICAgICAgICAgICByZXR1cm4gbmV4dENvbnRleHRTdG10LmNvbmNhdChyZWZFeHByLnRvQ29uc3REZWNsKCkpO1xuICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgcmV0dXJuIFtyZWZlcmVuY2UubmFtZSwgcmVmZXJlbmNlLnZhbHVlXTtcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gYXNMaXRlcmFsKHJlZnNQYXJhbSk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVMaXN0ZW5lclBhcmFtZXRlcih0YWdOYW1lOiBzdHJpbmcsIG91dHB1dEFzdDogdC5Cb3VuZEV2ZW50LCBpbmRleDogbnVtYmVyKTpcbiAgICAgICgpID0+IG8uRXhwcmVzc2lvbltdIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnROYW1lOiBzdHJpbmcgPSBvdXRwdXRBc3QubmFtZTtcbiAgICAgIGNvbnN0IGJpbmRpbmdGbk5hbWUgPSBvdXRwdXRBc3QudHlwZSA9PT0gUGFyc2VkRXZlbnRUeXBlLkFuaW1hdGlvbiA/XG4gICAgICAgICAgLy8gc3ludGhldGljIEBsaXN0ZW5lci5mb28gdmFsdWVzIGFyZSB0cmVhdGVkIHRoZSBleGFjdCBzYW1lIGFzIGFyZSBzdGFuZGFyZCBsaXN0ZW5lcnNcbiAgICAgICAgICBwcmVwYXJlU3ludGhldGljTGlzdGVuZXJGdW5jdGlvbk5hbWUoZXZlbnROYW1lLCBvdXRwdXRBc3QucGhhc2UhKSA6XG4gICAgICAgICAgc2FuaXRpemVJZGVudGlmaWVyKGV2ZW50TmFtZSk7XG4gICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGAke3RoaXMudGVtcGxhdGVOYW1lfV8ke3RhZ05hbWV9XyR7YmluZGluZ0ZuTmFtZX1fJHtpbmRleH1fbGlzdGVuZXJgO1xuICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzLl9iaW5kaW5nU2NvcGUubmVzdGVkU2NvcGUodGhpcy5fYmluZGluZ1Njb3BlLmJpbmRpbmdMZXZlbCk7XG4gICAgICByZXR1cm4gcHJlcGFyZUV2ZW50TGlzdGVuZXJQYXJhbWV0ZXJzKG91dHB1dEFzdCwgaGFuZGxlck5hbWUsIHNjb3BlKTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWx1ZUNvbnZlcnRlciBleHRlbmRzIEFzdE1lbW9yeUVmZmljaWVudFRyYW5zZm9ybWVyIHtcbiAgcHJpdmF0ZSBfcGlwZUJpbmRFeHByczogRnVuY3Rpb25DYWxsW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY29uc3RhbnRQb29sOiBDb25zdGFudFBvb2wsIHByaXZhdGUgYWxsb2NhdGVTbG90OiAoKSA9PiBudW1iZXIsXG4gICAgICBwcml2YXRlIGFsbG9jYXRlUHVyZUZ1bmN0aW9uU2xvdHM6IChudW1TbG90czogbnVtYmVyKSA9PiBudW1iZXIsXG4gICAgICBwcml2YXRlIGRlZmluZVBpcGU6XG4gICAgICAgICAgKG5hbWU6IHN0cmluZywgbG9jYWxOYW1lOiBzdHJpbmcsIHNsb3Q6IG51bWJlciwgdmFsdWU6IG8uRXhwcmVzc2lvbikgPT4gdm9pZCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvLyBBc3RNZW1vcnlFZmZpY2llbnRUcmFuc2Zvcm1lclxuICB2aXNpdFBpcGUocGlwZTogQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgLy8gQWxsb2NhdGUgYSBzbG90IHRvIGNyZWF0ZSB0aGUgcGlwZVxuICAgIGNvbnN0IHNsb3QgPSB0aGlzLmFsbG9jYXRlU2xvdCgpO1xuICAgIGNvbnN0IHNsb3RQc2V1ZG9Mb2NhbCA9IGBQSVBFOiR7c2xvdH1gO1xuICAgIC8vIEFsbG9jYXRlIG9uZSBzbG90IGZvciB0aGUgcmVzdWx0IHBsdXMgb25lIHNsb3QgcGVyIHBpcGUgYXJndW1lbnRcbiAgICBjb25zdCBwdXJlRnVuY3Rpb25TbG90ID0gdGhpcy5hbGxvY2F0ZVB1cmVGdW5jdGlvblNsb3RzKDIgKyBwaXBlLmFyZ3MubGVuZ3RoKTtcbiAgICBjb25zdCB0YXJnZXQgPSBuZXcgUHJvcGVydHlSZWFkKFxuICAgICAgICBwaXBlLnNwYW4sIHBpcGUuc291cmNlU3BhbiwgcGlwZS5uYW1lU3BhbiwgbmV3IEltcGxpY2l0UmVjZWl2ZXIocGlwZS5zcGFuLCBwaXBlLnNvdXJjZVNwYW4pLFxuICAgICAgICBzbG90UHNldWRvTG9jYWwpO1xuICAgIGNvbnN0IHtpZGVudGlmaWVyLCBpc1Zhckxlbmd0aH0gPSBwaXBlQmluZGluZ0NhbGxJbmZvKHBpcGUuYXJncyk7XG4gICAgdGhpcy5kZWZpbmVQaXBlKHBpcGUubmFtZSwgc2xvdFBzZXVkb0xvY2FsLCBzbG90LCBvLmltcG9ydEV4cHIoaWRlbnRpZmllcikpO1xuICAgIGNvbnN0IGFyZ3M6IEFTVFtdID0gW3BpcGUuZXhwLCAuLi5waXBlLmFyZ3NdO1xuICAgIGNvbnN0IGNvbnZlcnRlZEFyZ3M6IEFTVFtdID0gaXNWYXJMZW5ndGggP1xuICAgICAgICB0aGlzLnZpc2l0QWxsKFtuZXcgTGl0ZXJhbEFycmF5KHBpcGUuc3BhbiwgcGlwZS5zb3VyY2VTcGFuLCBhcmdzKV0pIDpcbiAgICAgICAgdGhpcy52aXNpdEFsbChhcmdzKTtcblxuICAgIGNvbnN0IHBpcGVCaW5kRXhwciA9IG5ldyBGdW5jdGlvbkNhbGwocGlwZS5zcGFuLCBwaXBlLnNvdXJjZVNwYW4sIHRhcmdldCwgW1xuICAgICAgbmV3IExpdGVyYWxQcmltaXRpdmUocGlwZS5zcGFuLCBwaXBlLnNvdXJjZVNwYW4sIHNsb3QpLFxuICAgICAgbmV3IExpdGVyYWxQcmltaXRpdmUocGlwZS5zcGFuLCBwaXBlLnNvdXJjZVNwYW4sIHB1cmVGdW5jdGlvblNsb3QpLFxuICAgICAgLi4uY29udmVydGVkQXJncyxcbiAgICBdKTtcbiAgICB0aGlzLl9waXBlQmluZEV4cHJzLnB1c2gocGlwZUJpbmRFeHByKTtcbiAgICByZXR1cm4gcGlwZUJpbmRFeHByO1xuICB9XG5cbiAgdXBkYXRlUGlwZVNsb3RPZmZzZXRzKGJpbmRpbmdTbG90czogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGlwZUJpbmRFeHBycy5mb3JFYWNoKChwaXBlOiBGdW5jdGlvbkNhbGwpID0+IHtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc2xvdCBvZmZzZXQgYXJnIChpbmRleCAxKSB0byBhY2NvdW50IGZvciBiaW5kaW5nIHNsb3RzXG4gICAgICBjb25zdCBzbG90T2Zmc2V0ID0gcGlwZS5hcmdzWzFdIGFzIExpdGVyYWxQcmltaXRpdmU7XG4gICAgICAoc2xvdE9mZnNldC52YWx1ZSBhcyBudW1iZXIpICs9IGJpbmRpbmdTbG90cztcbiAgICB9KTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFycmF5OiBMaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBCdWlsdGluRnVuY3Rpb25DYWxsKFxuICAgICAgICBhcnJheS5zcGFuLCBhcnJheS5zb3VyY2VTcGFuLCB0aGlzLnZpc2l0QWxsKGFycmF5LmV4cHJlc3Npb25zKSwgdmFsdWVzID0+IHtcbiAgICAgICAgICAvLyBJZiB0aGUgbGl0ZXJhbCBoYXMgY2FsY3VsYXRlZCAobm9uLWxpdGVyYWwpIGVsZW1lbnRzIHRyYW5zZm9ybSBpdCBpbnRvXG4gICAgICAgICAgLy8gY2FsbHMgdG8gbGl0ZXJhbCBmYWN0b3JpZXMgdGhhdCBjb21wb3NlIHRoZSBsaXRlcmFsIGFuZCB3aWxsIGNhY2hlIGludGVybWVkaWF0ZVxuICAgICAgICAgIC8vIHZhbHVlcy5cbiAgICAgICAgICBjb25zdCBsaXRlcmFsID0gby5saXRlcmFsQXJyKHZhbHVlcyk7XG4gICAgICAgICAgcmV0dXJuIGdldExpdGVyYWxGYWN0b3J5KHRoaXMuY29uc3RhbnRQb29sLCBsaXRlcmFsLCB0aGlzLmFsbG9jYXRlUHVyZUZ1bmN0aW9uU2xvdHMpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbE1hcChtYXA6IExpdGVyYWxNYXAsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBCdWlsdGluRnVuY3Rpb25DYWxsKG1hcC5zcGFuLCBtYXAuc291cmNlU3BhbiwgdGhpcy52aXNpdEFsbChtYXAudmFsdWVzKSwgdmFsdWVzID0+IHtcbiAgICAgIC8vIElmIHRoZSBsaXRlcmFsIGhhcyBjYWxjdWxhdGVkIChub24tbGl0ZXJhbCkgZWxlbWVudHMgIHRyYW5zZm9ybSBpdCBpbnRvXG4gICAgICAvLyBjYWxscyB0byBsaXRlcmFsIGZhY3RvcmllcyB0aGF0IGNvbXBvc2UgdGhlIGxpdGVyYWwgYW5kIHdpbGwgY2FjaGUgaW50ZXJtZWRpYXRlXG4gICAgICAvLyB2YWx1ZXMuXG4gICAgICBjb25zdCBsaXRlcmFsID0gby5saXRlcmFsTWFwKHZhbHVlcy5tYXAoXG4gICAgICAgICAgKHZhbHVlLCBpbmRleCkgPT4gKHtrZXk6IG1hcC5rZXlzW2luZGV4XS5rZXksIHZhbHVlLCBxdW90ZWQ6IG1hcC5rZXlzW2luZGV4XS5xdW90ZWR9KSkpO1xuICAgICAgcmV0dXJuIGdldExpdGVyYWxGYWN0b3J5KHRoaXMuY29uc3RhbnRQb29sLCBsaXRlcmFsLCB0aGlzLmFsbG9jYXRlUHVyZUZ1bmN0aW9uU2xvdHMpO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIFBpcGVzIGFsd2F5cyBoYXZlIGF0IGxlYXN0IG9uZSBwYXJhbWV0ZXIsIHRoZSB2YWx1ZSB0aGV5IG9wZXJhdGUgb25cbmNvbnN0IHBpcGVCaW5kaW5nSWRlbnRpZmllcnMgPSBbUjMucGlwZUJpbmQxLCBSMy5waXBlQmluZDIsIFIzLnBpcGVCaW5kMywgUjMucGlwZUJpbmQ0XTtcblxuZnVuY3Rpb24gcGlwZUJpbmRpbmdDYWxsSW5mbyhhcmdzOiBvLkV4cHJlc3Npb25bXSkge1xuICBjb25zdCBpZGVudGlmaWVyID0gcGlwZUJpbmRpbmdJZGVudGlmaWVyc1thcmdzLmxlbmd0aF07XG4gIHJldHVybiB7XG4gICAgaWRlbnRpZmllcjogaWRlbnRpZmllciB8fCBSMy5waXBlQmluZFYsXG4gICAgaXNWYXJMZW5ndGg6ICFpZGVudGlmaWVyLFxuICB9O1xufVxuXG5jb25zdCBwdXJlRnVuY3Rpb25JZGVudGlmaWVycyA9IFtcbiAgUjMucHVyZUZ1bmN0aW9uMCwgUjMucHVyZUZ1bmN0aW9uMSwgUjMucHVyZUZ1bmN0aW9uMiwgUjMucHVyZUZ1bmN0aW9uMywgUjMucHVyZUZ1bmN0aW9uNCxcbiAgUjMucHVyZUZ1bmN0aW9uNSwgUjMucHVyZUZ1bmN0aW9uNiwgUjMucHVyZUZ1bmN0aW9uNywgUjMucHVyZUZ1bmN0aW9uOFxuXTtcblxuZnVuY3Rpb24gcHVyZUZ1bmN0aW9uQ2FsbEluZm8oYXJnczogby5FeHByZXNzaW9uW10pIHtcbiAgY29uc3QgaWRlbnRpZmllciA9IHB1cmVGdW5jdGlvbklkZW50aWZpZXJzW2FyZ3MubGVuZ3RoXTtcbiAgcmV0dXJuIHtcbiAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyIHx8IFIzLnB1cmVGdW5jdGlvblYsXG4gICAgaXNWYXJMZW5ndGg6ICFpZGVudGlmaWVyLFxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnN0cnVjdGlvbihcbiAgICBzcGFuOiBQYXJzZVNvdXJjZVNwYW58bnVsbCwgcmVmZXJlbmNlOiBvLkV4dGVybmFsUmVmZXJlbmNlLFxuICAgIHBhcmFtczogby5FeHByZXNzaW9uW10pOiBvLkV4cHJlc3Npb24ge1xuICByZXR1cm4gby5pbXBvcnRFeHByKHJlZmVyZW5jZSwgbnVsbCwgc3BhbikuY2FsbEZuKHBhcmFtcywgc3Bhbik7XG59XG5cbi8vIGUuZy4geCgyKTtcbmZ1bmN0aW9uIGdlbmVyYXRlTmV4dENvbnRleHRFeHByKHJlbGF0aXZlTGV2ZWxEaWZmOiBudW1iZXIpOiBvLkV4cHJlc3Npb24ge1xuICByZXR1cm4gby5pbXBvcnRFeHByKFIzLm5leHRDb250ZXh0KVxuICAgICAgLmNhbGxGbihyZWxhdGl2ZUxldmVsRGlmZiA+IDEgPyBbby5saXRlcmFsKHJlbGF0aXZlTGV2ZWxEaWZmKV0gOiBbXSk7XG59XG5cbmZ1bmN0aW9uIGdldExpdGVyYWxGYWN0b3J5KFxuICAgIGNvbnN0YW50UG9vbDogQ29uc3RhbnRQb29sLCBsaXRlcmFsOiBvLkxpdGVyYWxBcnJheUV4cHJ8by5MaXRlcmFsTWFwRXhwcixcbiAgICBhbGxvY2F0ZVNsb3RzOiAobnVtU2xvdHM6IG51bWJlcikgPT4gbnVtYmVyKTogby5FeHByZXNzaW9uIHtcbiAgY29uc3Qge2xpdGVyYWxGYWN0b3J5LCBsaXRlcmFsRmFjdG9yeUFyZ3VtZW50c30gPSBjb25zdGFudFBvb2wuZ2V0TGl0ZXJhbEZhY3RvcnkobGl0ZXJhbCk7XG4gIC8vIEFsbG9jYXRlIDEgc2xvdCBmb3IgdGhlIHJlc3VsdCBwbHVzIDEgcGVyIGFyZ3VtZW50XG4gIGNvbnN0IHN0YXJ0U2xvdCA9IGFsbG9jYXRlU2xvdHMoMSArIGxpdGVyYWxGYWN0b3J5QXJndW1lbnRzLmxlbmd0aCk7XG4gIGNvbnN0IHtpZGVudGlmaWVyLCBpc1Zhckxlbmd0aH0gPSBwdXJlRnVuY3Rpb25DYWxsSW5mbyhsaXRlcmFsRmFjdG9yeUFyZ3VtZW50cyk7XG5cbiAgLy8gTGl0ZXJhbCBmYWN0b3JpZXMgYXJlIHB1cmUgZnVuY3Rpb25zIHRoYXQgb25seSBuZWVkIHRvIGJlIHJlLWludm9rZWQgd2hlbiB0aGUgcGFyYW1ldGVyc1xuICAvLyBjaGFuZ2UuXG4gIGNvbnN0IGFyZ3MgPSBbby5saXRlcmFsKHN0YXJ0U2xvdCksIGxpdGVyYWxGYWN0b3J5XTtcblxuICBpZiAoaXNWYXJMZW5ndGgpIHtcbiAgICBhcmdzLnB1c2goby5saXRlcmFsQXJyKGxpdGVyYWxGYWN0b3J5QXJndW1lbnRzKSk7XG4gIH0gZWxzZSB7XG4gICAgYXJncy5wdXNoKC4uLmxpdGVyYWxGYWN0b3J5QXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBvLmltcG9ydEV4cHIoaWRlbnRpZmllcikuY2FsbEZuKGFyZ3MpO1xufVxuXG4vKipcbiAqIEdldHMgYW4gYXJyYXkgb2YgbGl0ZXJhbHMgdGhhdCBjYW4gYmUgYWRkZWQgdG8gYW4gZXhwcmVzc2lvblxuICogdG8gcmVwcmVzZW50IHRoZSBuYW1lIGFuZCBuYW1lc3BhY2Ugb2YgYW4gYXR0cmlidXRlLiBFLmcuXG4gKiBgOnhsaW5rOmhyZWZgIHR1cm5zIGludG8gYFtBdHRyaWJ1dGVNYXJrZXIuTmFtZXNwYWNlVVJJLCAneGxpbmsnLCAnaHJlZiddYC5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUsIGluY2x1ZGluZyB0aGUgbmFtZXNwYWNlLlxuICovXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVOYW1lTGl0ZXJhbHMobmFtZTogc3RyaW5nKTogby5MaXRlcmFsRXhwcltdIHtcbiAgY29uc3QgW2F0dHJpYnV0ZU5hbWVzcGFjZSwgYXR0cmlidXRlTmFtZV0gPSBzcGxpdE5zTmFtZShuYW1lKTtcbiAgY29uc3QgbmFtZUxpdGVyYWwgPSBvLmxpdGVyYWwoYXR0cmlidXRlTmFtZSk7XG5cbiAgaWYgKGF0dHJpYnV0ZU5hbWVzcGFjZSkge1xuICAgIHJldHVybiBbXG4gICAgICBvLmxpdGVyYWwoY29yZS5BdHRyaWJ1dGVNYXJrZXIuTmFtZXNwYWNlVVJJKSwgby5saXRlcmFsKGF0dHJpYnV0ZU5hbWVzcGFjZSksIG5hbWVMaXRlcmFsXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiBbbmFtZUxpdGVyYWxdO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHdoaWNoIGlzIGV4ZWN1dGVkIHdoZW5ldmVyIGEgdmFyaWFibGUgaXMgcmVmZXJlbmNlZCBmb3IgdGhlIGZpcnN0IHRpbWUgaW4gYSBnaXZlblxuICogc2NvcGUuXG4gKlxuICogSXQgaXMgZXhwZWN0ZWQgdGhhdCB0aGUgZnVuY3Rpb24gY3JlYXRlcyB0aGUgYGNvbnN0IGxvY2FsTmFtZSA9IGV4cHJlc3Npb25gOyBzdGF0ZW1lbnQuXG4gKi9cbmV4cG9ydCB0eXBlIERlY2xhcmVMb2NhbFZhckNhbGxiYWNrID0gKHNjb3BlOiBCaW5kaW5nU2NvcGUsIHJlbGF0aXZlTGV2ZWw6IG51bWJlcikgPT4gby5TdGF0ZW1lbnRbXTtcblxuLyoqIFRoZSBwcmVmaXggdXNlZCB0byBnZXQgYSBzaGFyZWQgY29udGV4dCBpbiBCaW5kaW5nU2NvcGUncyBtYXAuICovXG5jb25zdCBTSEFSRURfQ09OVEVYVF9LRVkgPSAnJCRzaGFyZWRfY3R4JCQnO1xuXG4vKipcbiAqIFRoaXMgaXMgdXNlZCB3aGVuIG9uZSByZWZlcnMgdG8gdmFyaWFibGUgc3VjaCBhczogJ2xldCBhYmMgPSBuZXh0Q29udGV4dCgyKS4kaW1wbGljaXRgLlxuICogLSBrZXkgdG8gdGhlIG1hcCBpcyB0aGUgc3RyaW5nIGxpdGVyYWwgYFwiYWJjXCJgLlxuICogLSB2YWx1ZSBgcmV0cmlldmFsTGV2ZWxgIGlzIHRoZSBsZXZlbCBmcm9tIHdoaWNoIHRoaXMgdmFsdWUgY2FuIGJlIHJldHJpZXZlZCwgd2hpY2ggaXMgMiBsZXZlbHNcbiAqIHVwIGluIGV4YW1wbGUuXG4gKiAtIHZhbHVlIGBsaHNgIGlzIHRoZSBsZWZ0IGhhbmQgc2lkZSB3aGljaCBpcyBhbiBBU1QgcmVwcmVzZW50aW5nIGBhYmNgLlxuICogLSB2YWx1ZSBgZGVjbGFyZUxvY2FsQ2FsbGJhY2tgIGlzIGEgY2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZGVjbGFyaW5nIHRoZSBsb2NhbC5cbiAqIC0gdmFsdWUgYGRlY2xhcmVgIGlzIHRydWUgaWYgdGhpcyB2YWx1ZSBuZWVkcyB0byBiZSBkZWNsYXJlZC5cbiAqIC0gdmFsdWUgYGxvY2FsUmVmYCBpcyB0cnVlIGlmIHdlIGFyZSBzdG9yaW5nIGEgbG9jYWwgcmVmZXJlbmNlXG4gKiAtIHZhbHVlIGBwcmlvcml0eWAgZGljdGF0ZXMgdGhlIHNvcnRpbmcgcHJpb3JpdHkgb2YgdGhpcyB2YXIgZGVjbGFyYXRpb24gY29tcGFyZWRcbiAqIHRvIG90aGVyIHZhciBkZWNsYXJhdGlvbnMgb24gdGhlIHNhbWUgcmV0cmlldmFsIGxldmVsLiBGb3IgZXhhbXBsZSwgaWYgdGhlcmUgaXMgYVxuICogY29udGV4dCB2YXJpYWJsZSBhbmQgYSBsb2NhbCByZWYgYWNjZXNzaW5nIHRoZSBzYW1lIHBhcmVudCB2aWV3LCB0aGUgY29udGV4dCB2YXJcbiAqIGRlY2xhcmF0aW9uIHNob3VsZCBhbHdheXMgY29tZSBiZWZvcmUgdGhlIGxvY2FsIHJlZiBkZWNsYXJhdGlvbi5cbiAqL1xudHlwZSBCaW5kaW5nRGF0YSA9IHtcbiAgcmV0cmlldmFsTGV2ZWw6IG51bWJlcjsgbGhzOiBvLkV4cHJlc3Npb247XG4gIGRlY2xhcmVMb2NhbENhbGxiYWNrPzogRGVjbGFyZUxvY2FsVmFyQ2FsbGJhY2s7IGRlY2xhcmU6IGJvb2xlYW47IHByaW9yaXR5OiBudW1iZXI7XG4gIGxvY2FsUmVmOiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBUaGUgc29ydGluZyBwcmlvcml0eSBvZiBhIGxvY2FsIHZhcmlhYmxlIGRlY2xhcmF0aW9uLiBIaWdoZXIgbnVtYmVyc1xuICogbWVhbiB0aGUgZGVjbGFyYXRpb24gd2lsbCBhcHBlYXIgZmlyc3QgaW4gdGhlIGdlbmVyYXRlZCBjb2RlLlxuICovXG5jb25zdCBlbnVtIERlY2xhcmF0aW9uUHJpb3JpdHkge1xuICBERUZBVUxUID0gMCxcbiAgQ09OVEVYVCA9IDEsXG4gIFNIQVJFRF9DT05URVhUID0gMlxufVxuXG5leHBvcnQgY2xhc3MgQmluZGluZ1Njb3BlIGltcGxlbWVudHMgTG9jYWxSZXNvbHZlciB7XG4gIC8qKiBLZWVwcyBhIG1hcCBmcm9tIGxvY2FsIHZhcmlhYmxlcyB0byB0aGVpciBCaW5kaW5nRGF0YS4gKi9cbiAgcHJpdmF0ZSBtYXAgPSBuZXcgTWFwPHN0cmluZywgQmluZGluZ0RhdGE+KCk7XG4gIHByaXZhdGUgcmVmZXJlbmNlTmFtZUluZGV4ID0gMDtcbiAgcHJpdmF0ZSByZXN0b3JlVmlld1ZhcmlhYmxlOiBvLlJlYWRWYXJFeHByfG51bGwgPSBudWxsO1xuICBzdGF0aWMgY3JlYXRlUm9vdFNjb3BlKCk6IEJpbmRpbmdTY29wZSB7XG4gICAgcmV0dXJuIG5ldyBCaW5kaW5nU2NvcGUoKS5zZXQoMCwgJyRldmVudCcsIG8udmFyaWFibGUoJyRldmVudCcpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IocHVibGljIGJpbmRpbmdMZXZlbDogbnVtYmVyID0gMCwgcHJpdmF0ZSBwYXJlbnQ6IEJpbmRpbmdTY29wZXxudWxsID0gbnVsbCkge31cblxuICBnZXQobmFtZTogc3RyaW5nKTogby5FeHByZXNzaW9ufG51bGwge1xuICAgIGxldCBjdXJyZW50OiBCaW5kaW5nU2NvcGV8bnVsbCA9IHRoaXM7XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIGxldCB2YWx1ZSA9IGN1cnJlbnQubWFwLmdldChuYW1lKTtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChjdXJyZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgLy8gbWFrZSBhIGxvY2FsIGNvcHkgYW5kIHJlc2V0IHRoZSBgZGVjbGFyZWAgc3RhdGVcbiAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgIHJldHJpZXZhbExldmVsOiB2YWx1ZS5yZXRyaWV2YWxMZXZlbCxcbiAgICAgICAgICAgIGxoczogdmFsdWUubGhzLFxuICAgICAgICAgICAgZGVjbGFyZUxvY2FsQ2FsbGJhY2s6IHZhbHVlLmRlY2xhcmVMb2NhbENhbGxiYWNrLFxuICAgICAgICAgICAgZGVjbGFyZTogZmFsc2UsXG4gICAgICAgICAgICBwcmlvcml0eTogdmFsdWUucHJpb3JpdHksXG4gICAgICAgICAgICBsb2NhbFJlZjogdmFsdWUubG9jYWxSZWZcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gQ2FjaGUgdGhlIHZhbHVlIGxvY2FsbHkuXG4gICAgICAgICAgdGhpcy5tYXAuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAvLyBQb3NzaWJseSBnZW5lcmF0ZSBhIHNoYXJlZCBjb250ZXh0IHZhclxuICAgICAgICAgIHRoaXMubWF5YmVHZW5lcmF0ZVNoYXJlZENvbnRleHRWYXIodmFsdWUpO1xuICAgICAgICAgIHRoaXMubWF5YmVSZXN0b3JlVmlldyh2YWx1ZS5yZXRyaWV2YWxMZXZlbCwgdmFsdWUubG9jYWxSZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmRlY2xhcmVMb2NhbENhbGxiYWNrICYmICF2YWx1ZS5kZWNsYXJlKSB7XG4gICAgICAgICAgdmFsdWUuZGVjbGFyZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlLmxocztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBnZXQgdG8gdGhpcyBwb2ludCwgd2UgYXJlIGxvb2tpbmcgZm9yIGEgcHJvcGVydHkgb24gdGhlIHRvcCBsZXZlbCBjb21wb25lbnRcbiAgICAvLyAtIElmIGxldmVsID09PSAwLCB3ZSBhcmUgb24gdGhlIHRvcCBhbmQgZG9uJ3QgbmVlZCB0byByZS1kZWNsYXJlIGBjdHhgLlxuICAgIC8vIC0gSWYgbGV2ZWwgPiAwLCB3ZSBhcmUgaW4gYW4gZW1iZWRkZWQgdmlldy4gV2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgbmFtZSBvZiB0aGVcbiAgICAvLyBsb2NhbCB2YXIgd2UgdXNlZCB0byBzdG9yZSB0aGUgY29tcG9uZW50IGNvbnRleHQsIGUuZy4gY29uc3QgJGNvbXAkID0geCgpO1xuICAgIHJldHVybiB0aGlzLmJpbmRpbmdMZXZlbCA9PT0gMCA/IG51bGwgOiB0aGlzLmdldENvbXBvbmVudFByb3BlcnR5KG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxvY2FsIHZhcmlhYmxlIGZvciBsYXRlciByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBwYXJhbSByZXRyaWV2YWxMZXZlbCBUaGUgbGV2ZWwgZnJvbSB3aGljaCB0aGlzIHZhbHVlIGNhbiBiZSByZXRyaWV2ZWRcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgdmFyaWFibGUuXG4gICAqIEBwYXJhbSBsaHMgQVNUIHJlcHJlc2VudGluZyB0aGUgbGVmdCBoYW5kIHNpZGUgb2YgdGhlIGBsZXQgbGhzID0gcmhzO2AuXG4gICAqIEBwYXJhbSBwcmlvcml0eSBUaGUgc29ydGluZyBwcmlvcml0eSBvZiB0aGlzIHZhclxuICAgKiBAcGFyYW0gZGVjbGFyZUxvY2FsQ2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIGRlY2xhcmluZyB0aGlzIGxvY2FsIHZhclxuICAgKiBAcGFyYW0gbG9jYWxSZWYgV2hldGhlciBvciBub3QgdGhpcyBpcyBhIGxvY2FsIHJlZlxuICAgKi9cbiAgc2V0KHJldHJpZXZhbExldmVsOiBudW1iZXIsIG5hbWU6IHN0cmluZywgbGhzOiBvLkV4cHJlc3Npb24sXG4gICAgICBwcmlvcml0eTogbnVtYmVyID0gRGVjbGFyYXRpb25Qcmlvcml0eS5ERUZBVUxULFxuICAgICAgZGVjbGFyZUxvY2FsQ2FsbGJhY2s/OiBEZWNsYXJlTG9jYWxWYXJDYWxsYmFjaywgbG9jYWxSZWY/OiB0cnVlKTogQmluZGluZ1Njb3BlIHtcbiAgICBpZiAodGhpcy5tYXAuaGFzKG5hbWUpKSB7XG4gICAgICBpZiAobG9jYWxSZWYpIHtcbiAgICAgICAgLy8gRG8gbm90IHRocm93IGFuIGVycm9yIGlmIGl0J3MgYSBsb2NhbCByZWYgYW5kIGRvIG5vdCB1cGRhdGUgZXhpc3RpbmcgdmFsdWUsXG4gICAgICAgIC8vIHNvIHRoZSBmaXJzdCBkZWZpbmVkIHJlZiBpcyBhbHdheXMgcmV0dXJuZWQuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgZXJyb3IoYFRoZSBuYW1lICR7bmFtZX0gaXMgYWxyZWFkeSBkZWZpbmVkIGluIHNjb3BlIHRvIGJlICR7dGhpcy5tYXAuZ2V0KG5hbWUpfWApO1xuICAgIH1cbiAgICB0aGlzLm1hcC5zZXQobmFtZSwge1xuICAgICAgcmV0cmlldmFsTGV2ZWw6IHJldHJpZXZhbExldmVsLFxuICAgICAgbGhzOiBsaHMsXG4gICAgICBkZWNsYXJlOiBmYWxzZSxcbiAgICAgIGRlY2xhcmVMb2NhbENhbGxiYWNrOiBkZWNsYXJlTG9jYWxDYWxsYmFjayxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgIGxvY2FsUmVmOiBsb2NhbFJlZiB8fCBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBMb2NhbFJlc29sdmVyLlxuICBnZXRMb2NhbChuYW1lOiBzdHJpbmcpOiAoby5FeHByZXNzaW9ufG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQobmFtZSk7XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIExvY2FsUmVzb2x2ZXIuXG4gIG5vdGlmeUltcGxpY2l0UmVjZWl2ZXJVc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYmluZGluZ0xldmVsICE9PSAwKSB7XG4gICAgICAvLyBTaW5jZSB0aGUgaW1wbGljaXQgcmVjZWl2ZXIgaXMgYWNjZXNzZWQgaW4gYW4gZW1iZWRkZWQgdmlldywgd2UgbmVlZCB0b1xuICAgICAgLy8gZW5zdXJlIHRoYXQgd2UgZGVjbGFyZSBhIHNoYXJlZCBjb250ZXh0IHZhcmlhYmxlIGZvciB0aGUgY3VycmVudCB0ZW1wbGF0ZVxuICAgICAgLy8gaW4gdGhlIHVwZGF0ZSB2YXJpYWJsZXMuXG4gICAgICB0aGlzLm1hcC5nZXQoU0hBUkVEX0NPTlRFWFRfS0VZICsgMCkhLmRlY2xhcmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5lc3RlZFNjb3BlKGxldmVsOiBudW1iZXIpOiBCaW5kaW5nU2NvcGUge1xuICAgIGNvbnN0IG5ld1Njb3BlID0gbmV3IEJpbmRpbmdTY29wZShsZXZlbCwgdGhpcyk7XG4gICAgaWYgKGxldmVsID4gMCkgbmV3U2NvcGUuZ2VuZXJhdGVTaGFyZWRDb250ZXh0VmFyKDApO1xuICAgIHJldHVybiBuZXdTY29wZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIG9yIGNyZWF0ZXMgYSBzaGFyZWQgY29udGV4dCB2YXJpYWJsZSBhbmQgcmV0dXJucyBpdHMgZXhwcmVzc2lvbi4gTm90ZSB0aGF0XG4gICAqIHRoaXMgZG9lcyBub3QgbWVhbiB0aGF0IHRoZSBzaGFyZWQgdmFyaWFibGUgd2lsbCBiZSBkZWNsYXJlZC4gVmFyaWFibGVzIGluIHRoZVxuICAgKiBiaW5kaW5nIHNjb3BlIHdpbGwgYmUgb25seSBkZWNsYXJlZCBpZiB0aGV5IGFyZSB1c2VkLlxuICAgKi9cbiAgZ2V0T3JDcmVhdGVTaGFyZWRDb250ZXh0VmFyKHJldHJpZXZhbExldmVsOiBudW1iZXIpOiBvLlJlYWRWYXJFeHByIHtcbiAgICBjb25zdCBiaW5kaW5nS2V5ID0gU0hBUkVEX0NPTlRFWFRfS0VZICsgcmV0cmlldmFsTGV2ZWw7XG4gICAgaWYgKCF0aGlzLm1hcC5oYXMoYmluZGluZ0tleSkpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVTaGFyZWRDb250ZXh0VmFyKHJldHJpZXZhbExldmVsKTtcbiAgICB9XG4gICAgLy8gU2hhcmVkIGNvbnRleHQgdmFyaWFibGVzIGFyZSBhbHdheXMgZ2VuZXJhdGVkIGFzIFwiUmVhZFZhckV4cHJcIi5cbiAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGJpbmRpbmdLZXkpIS5saHMgYXMgby5SZWFkVmFyRXhwcjtcbiAgfVxuXG4gIGdldFNoYXJlZENvbnRleHROYW1lKHJldHJpZXZhbExldmVsOiBudW1iZXIpOiBvLlJlYWRWYXJFeHByfG51bGwge1xuICAgIGNvbnN0IHNoYXJlZEN0eE9iaiA9IHRoaXMubWFwLmdldChTSEFSRURfQ09OVEVYVF9LRVkgKyByZXRyaWV2YWxMZXZlbCk7XG4gICAgLy8gU2hhcmVkIGNvbnRleHQgdmFyaWFibGVzIGFyZSBhbHdheXMgZ2VuZXJhdGVkIGFzIFwiUmVhZFZhckV4cHJcIi5cbiAgICByZXR1cm4gc2hhcmVkQ3R4T2JqICYmIHNoYXJlZEN0eE9iai5kZWNsYXJlID8gc2hhcmVkQ3R4T2JqLmxocyBhcyBvLlJlYWRWYXJFeHByIDogbnVsbDtcbiAgfVxuXG4gIG1heWJlR2VuZXJhdGVTaGFyZWRDb250ZXh0VmFyKHZhbHVlOiBCaW5kaW5nRGF0YSkge1xuICAgIGlmICh2YWx1ZS5wcmlvcml0eSA9PT0gRGVjbGFyYXRpb25Qcmlvcml0eS5DT05URVhUICYmXG4gICAgICAgIHZhbHVlLnJldHJpZXZhbExldmVsIDwgdGhpcy5iaW5kaW5nTGV2ZWwpIHtcbiAgICAgIGNvbnN0IHNoYXJlZEN0eE9iaiA9IHRoaXMubWFwLmdldChTSEFSRURfQ09OVEVYVF9LRVkgKyB2YWx1ZS5yZXRyaWV2YWxMZXZlbCk7XG4gICAgICBpZiAoc2hhcmVkQ3R4T2JqKSB7XG4gICAgICAgIHNoYXJlZEN0eE9iai5kZWNsYXJlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVTaGFyZWRDb250ZXh0VmFyKHZhbHVlLnJldHJpZXZhbExldmVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVNoYXJlZENvbnRleHRWYXIocmV0cmlldmFsTGV2ZWw6IG51bWJlcikge1xuICAgIGNvbnN0IGxocyA9IG8udmFyaWFibGUoQ09OVEVYVF9OQU1FICsgdGhpcy5mcmVzaFJlZmVyZW5jZU5hbWUoKSk7XG4gICAgdGhpcy5tYXAuc2V0KFNIQVJFRF9DT05URVhUX0tFWSArIHJldHJpZXZhbExldmVsLCB7XG4gICAgICByZXRyaWV2YWxMZXZlbDogcmV0cmlldmFsTGV2ZWwsXG4gICAgICBsaHM6IGxocyxcbiAgICAgIGRlY2xhcmVMb2NhbENhbGxiYWNrOiAoc2NvcGU6IEJpbmRpbmdTY29wZSwgcmVsYXRpdmVMZXZlbDogbnVtYmVyKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IGN0eF9yMCA9IG5leHRDb250ZXh0KDIpO1xuICAgICAgICByZXR1cm4gW2xocy5zZXQoZ2VuZXJhdGVOZXh0Q29udGV4dEV4cHIocmVsYXRpdmVMZXZlbCkpLnRvQ29uc3REZWNsKCldO1xuICAgICAgfSxcbiAgICAgIGRlY2xhcmU6IGZhbHNlLFxuICAgICAgcHJpb3JpdHk6IERlY2xhcmF0aW9uUHJpb3JpdHkuU0hBUkVEX0NPTlRFWFQsXG4gICAgICBsb2NhbFJlZjogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbXBvbmVudFByb3BlcnR5KG5hbWU6IHN0cmluZyk6IG8uRXhwcmVzc2lvbiB7XG4gICAgY29uc3QgY29tcG9uZW50VmFsdWUgPSB0aGlzLm1hcC5nZXQoU0hBUkVEX0NPTlRFWFRfS0VZICsgMCkhO1xuICAgIGNvbXBvbmVudFZhbHVlLmRlY2xhcmUgPSB0cnVlO1xuICAgIHRoaXMubWF5YmVSZXN0b3JlVmlldygwLCBmYWxzZSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudFZhbHVlLmxocy5wcm9wKG5hbWUpO1xuICB9XG5cbiAgbWF5YmVSZXN0b3JlVmlldyhyZXRyaWV2YWxMZXZlbDogbnVtYmVyLCBsb2NhbFJlZkxvb2t1cDogYm9vbGVhbikge1xuICAgIC8vIFdlIHdhbnQgdG8gcmVzdG9yZSB0aGUgY3VycmVudCB2aWV3IGluIGxpc3RlbmVyIGZucyBpZjpcbiAgICAvLyAxIC0gd2UgYXJlIGFjY2Vzc2luZyBhIHZhbHVlIGluIGEgcGFyZW50IHZpZXcsIHdoaWNoIHJlcXVpcmVzIHdhbGtpbmcgdGhlIHZpZXcgdHJlZSByYXRoZXJcbiAgICAvLyB0aGFuIHVzaW5nIHRoZSBjdHggYXJnLiBJbiB0aGlzIGNhc2UsIHRoZSByZXRyaWV2YWwgYW5kIGJpbmRpbmcgbGV2ZWwgd2lsbCBiZSBkaWZmZXJlbnQuXG4gICAgLy8gMiAtIHdlIGFyZSBsb29raW5nIHVwIGEgbG9jYWwgcmVmLCB3aGljaCByZXF1aXJlcyByZXN0b3JpbmcgdGhlIHZpZXcgd2hlcmUgdGhlIGxvY2FsXG4gICAgLy8gcmVmIGlzIHN0b3JlZFxuICAgIGlmICh0aGlzLmlzTGlzdGVuZXJTY29wZSgpICYmIChyZXRyaWV2YWxMZXZlbCA8IHRoaXMuYmluZGluZ0xldmVsIHx8IGxvY2FsUmVmTG9va3VwKSkge1xuICAgICAgaWYgKCF0aGlzLnBhcmVudCEucmVzdG9yZVZpZXdWYXJpYWJsZSkge1xuICAgICAgICAvLyBwYXJlbnQgc2F2ZXMgdmFyaWFibGUgdG8gZ2VuZXJhdGUgYSBzaGFyZWQgYGNvbnN0ICRzJCA9IGdldEN1cnJlbnRWaWV3KCk7YCBpbnN0cnVjdGlvblxuICAgICAgICB0aGlzLnBhcmVudCEucmVzdG9yZVZpZXdWYXJpYWJsZSA9IG8udmFyaWFibGUodGhpcy5wYXJlbnQhLmZyZXNoUmVmZXJlbmNlTmFtZSgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzdG9yZVZpZXdWYXJpYWJsZSA9IHRoaXMucGFyZW50IS5yZXN0b3JlVmlld1ZhcmlhYmxlO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RvcmVWaWV3U3RhdGVtZW50KCk6IG8uU3RhdGVtZW50W10ge1xuICAgIC8vIHJlc3RvcmVWaWV3KCRzdGF0ZSQpO1xuICAgIHJldHVybiB0aGlzLnJlc3RvcmVWaWV3VmFyaWFibGUgP1xuICAgICAgICBbaW5zdHJ1Y3Rpb24obnVsbCwgUjMucmVzdG9yZVZpZXcsIFt0aGlzLnJlc3RvcmVWaWV3VmFyaWFibGVdKS50b1N0bXQoKV0gOlxuICAgICAgICBbXTtcbiAgfVxuXG4gIHZpZXdTbmFwc2hvdFN0YXRlbWVudHMoKTogby5TdGF0ZW1lbnRbXSB7XG4gICAgLy8gY29uc3QgJHN0YXRlJCA9IGdldEN1cnJlbnRWaWV3KCk7XG4gICAgY29uc3QgZ2V0Q3VycmVudFZpZXdJbnN0cnVjdGlvbiA9IGluc3RydWN0aW9uKG51bGwsIFIzLmdldEN1cnJlbnRWaWV3LCBbXSk7XG4gICAgcmV0dXJuIHRoaXMucmVzdG9yZVZpZXdWYXJpYWJsZSA/XG4gICAgICAgIFt0aGlzLnJlc3RvcmVWaWV3VmFyaWFibGUuc2V0KGdldEN1cnJlbnRWaWV3SW5zdHJ1Y3Rpb24pLnRvQ29uc3REZWNsKCldIDpcbiAgICAgICAgW107XG4gIH1cblxuICBpc0xpc3RlbmVyU2NvcGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmJpbmRpbmdMZXZlbCA9PT0gdGhpcy5iaW5kaW5nTGV2ZWw7XG4gIH1cblxuICB2YXJpYWJsZURlY2xhcmF0aW9ucygpOiBvLlN0YXRlbWVudFtdIHtcbiAgICBsZXQgY3VycmVudENvbnRleHRMZXZlbCA9IDA7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5tYXAudmFsdWVzKCkpXG4gICAgICAgICAgICAgICAuZmlsdGVyKHZhbHVlID0+IHZhbHVlLmRlY2xhcmUpXG4gICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5yZXRyaWV2YWxMZXZlbCAtIGEucmV0cmlldmFsTGV2ZWwgfHwgYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpXG4gICAgICAgICAgICAgICAucmVkdWNlKChzdG10czogby5TdGF0ZW1lbnRbXSwgdmFsdWU6IEJpbmRpbmdEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsRGlmZiA9IHRoaXMuYmluZGluZ0xldmVsIC0gdmFsdWUucmV0cmlldmFsTGV2ZWw7XG4gICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJTdG10cyA9XG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kZWNsYXJlTG9jYWxDYWxsYmFjayEodGhpcywgbGV2ZWxEaWZmIC0gY3VycmVudENvbnRleHRMZXZlbCk7XG4gICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZXh0TGV2ZWwgPSBsZXZlbERpZmY7XG4gICAgICAgICAgICAgICAgIHJldHVybiBzdG10cy5jb25jYXQoY3VyclN0bXRzKTtcbiAgICAgICAgICAgICAgIH0sIFtdKSBhcyBvLlN0YXRlbWVudFtdO1xuICB9XG5cblxuICBmcmVzaFJlZmVyZW5jZU5hbWUoKTogc3RyaW5nIHtcbiAgICBsZXQgY3VycmVudDogQmluZGluZ1Njb3BlID0gdGhpcztcbiAgICAvLyBGaW5kIHRoZSB0b3Agc2NvcGUgYXMgaXQgbWFpbnRhaW5zIHRoZSBnbG9iYWwgcmVmZXJlbmNlIGNvdW50XG4gICAgd2hpbGUgKGN1cnJlbnQucGFyZW50KSBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgY29uc3QgcmVmID0gYCR7UkVGRVJFTkNFX1BSRUZJWH0ke2N1cnJlbnQucmVmZXJlbmNlTmFtZUluZGV4Kyt9YDtcbiAgICByZXR1cm4gcmVmO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBDc3NTZWxlY3RvcmAgZ2l2ZW4gYSB0YWcgbmFtZSBhbmQgYSBtYXAgb2YgYXR0cmlidXRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3NzU2VsZWN0b3IoXG4gICAgZWxlbWVudE5hbWU6IHN0cmluZywgYXR0cmlidXRlczoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd9KTogQ3NzU2VsZWN0b3Ige1xuICBjb25zdCBjc3NTZWxlY3RvciA9IG5ldyBDc3NTZWxlY3RvcigpO1xuICBjb25zdCBlbGVtZW50TmFtZU5vTnMgPSBzcGxpdE5zTmFtZShlbGVtZW50TmFtZSlbMV07XG5cbiAgY3NzU2VsZWN0b3Iuc2V0RWxlbWVudChlbGVtZW50TmFtZU5vTnMpO1xuXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCBuYW1lTm9OcyA9IHNwbGl0TnNOYW1lKG5hbWUpWzFdO1xuICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblxuICAgIGNzc1NlbGVjdG9yLmFkZEF0dHJpYnV0ZShuYW1lTm9OcywgdmFsdWUpO1xuICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjbGFzcycpIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB2YWx1ZS50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgICAgIGNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4gY3NzU2VsZWN0b3IuYWRkQ2xhc3NOYW1lKGNsYXNzTmFtZSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNzc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgZXhwcmVzc2lvbnMgb3V0IG9mIGFuIGBuZ1Byb2plY3RBc2AgYXR0cmlidXRlc1xuICogd2hpY2ggY2FuIGJlIGFkZGVkIHRvIHRoZSBpbnN0cnVjdGlvbiBwYXJhbWV0ZXJzLlxuICovXG5mdW5jdGlvbiBnZXROZ1Byb2plY3RBc0xpdGVyYWwoYXR0cmlidXRlOiB0LlRleHRBdHRyaWJ1dGUpOiBvLkV4cHJlc3Npb25bXSB7XG4gIC8vIFBhcnNlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgaW50byBhIENzc1NlbGVjdG9yTGlzdC4gTm90ZSB0aGF0IHdlIG9ubHkgdGFrZSB0aGVcbiAgLy8gZmlyc3Qgc2VsZWN0b3IsIGJlY2F1c2Ugd2UgZG9uJ3Qgc3VwcG9ydCBtdWx0aXBsZSBzZWxlY3RvcnMgaW4gbmdQcm9qZWN0QXMuXG4gIGNvbnN0IHBhcnNlZFIzU2VsZWN0b3IgPSBjb3JlLnBhcnNlU2VsZWN0b3JUb1IzU2VsZWN0b3IoYXR0cmlidXRlLnZhbHVlKVswXTtcbiAgcmV0dXJuIFtvLmxpdGVyYWwoY29yZS5BdHRyaWJ1dGVNYXJrZXIuUHJvamVjdEFzKSwgYXNMaXRlcmFsKHBhcnNlZFIzU2VsZWN0b3IpXTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbnN0cnVjdGlvbiB0byBnZW5lcmF0ZSBmb3IgYW4gaW50ZXJwb2xhdGVkIHByb3BlcnR5XG4gKiBAcGFyYW0gaW50ZXJwb2xhdGlvbiBBbiBJbnRlcnBvbGF0aW9uIEFTVFxuICovXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eUludGVycG9sYXRpb25FeHByZXNzaW9uKGludGVycG9sYXRpb246IEludGVycG9sYXRpb24pIHtcbiAgc3dpdGNoIChnZXRJbnRlcnBvbGF0aW9uQXJnc0xlbmd0aChpbnRlcnBvbGF0aW9uKSkge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBSMy5wcm9wZXJ0eUludGVycG9sYXRlO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBSMy5wcm9wZXJ0eUludGVycG9sYXRlMTtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gUjMucHJvcGVydHlJbnRlcnBvbGF0ZTI7XG4gICAgY2FzZSA3OlxuICAgICAgcmV0dXJuIFIzLnByb3BlcnR5SW50ZXJwb2xhdGUzO1xuICAgIGNhc2UgOTpcbiAgICAgIHJldHVybiBSMy5wcm9wZXJ0eUludGVycG9sYXRlNDtcbiAgICBjYXNlIDExOlxuICAgICAgcmV0dXJuIFIzLnByb3BlcnR5SW50ZXJwb2xhdGU1O1xuICAgIGNhc2UgMTM6XG4gICAgICByZXR1cm4gUjMucHJvcGVydHlJbnRlcnBvbGF0ZTY7XG4gICAgY2FzZSAxNTpcbiAgICAgIHJldHVybiBSMy5wcm9wZXJ0eUludGVycG9sYXRlNztcbiAgICBjYXNlIDE3OlxuICAgICAgcmV0dXJuIFIzLnByb3BlcnR5SW50ZXJwb2xhdGU4O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gUjMucHJvcGVydHlJbnRlcnBvbGF0ZVY7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbnN0cnVjdGlvbiB0byBnZW5lcmF0ZSBmb3IgYW4gaW50ZXJwb2xhdGVkIGF0dHJpYnV0ZVxuICogQHBhcmFtIGludGVycG9sYXRpb24gQW4gSW50ZXJwb2xhdGlvbiBBU1RcbiAqL1xuZnVuY3Rpb24gZ2V0QXR0cmlidXRlSW50ZXJwb2xhdGlvbkV4cHJlc3Npb24oaW50ZXJwb2xhdGlvbjogSW50ZXJwb2xhdGlvbikge1xuICBzd2l0Y2ggKGdldEludGVycG9sYXRpb25BcmdzTGVuZ3RoKGludGVycG9sYXRpb24pKSB7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFIzLmF0dHJpYnV0ZUludGVycG9sYXRlMTtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gUjMuYXR0cmlidXRlSW50ZXJwb2xhdGUyO1xuICAgIGNhc2UgNzpcbiAgICAgIHJldHVybiBSMy5hdHRyaWJ1dGVJbnRlcnBvbGF0ZTM7XG4gICAgY2FzZSA5OlxuICAgICAgcmV0dXJuIFIzLmF0dHJpYnV0ZUludGVycG9sYXRlNDtcbiAgICBjYXNlIDExOlxuICAgICAgcmV0dXJuIFIzLmF0dHJpYnV0ZUludGVycG9sYXRlNTtcbiAgICBjYXNlIDEzOlxuICAgICAgcmV0dXJuIFIzLmF0dHJpYnV0ZUludGVycG9sYXRlNjtcbiAgICBjYXNlIDE1OlxuICAgICAgcmV0dXJuIFIzLmF0dHJpYnV0ZUludGVycG9sYXRlNztcbiAgICBjYXNlIDE3OlxuICAgICAgcmV0dXJuIFIzLmF0dHJpYnV0ZUludGVycG9sYXRlODtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFIzLmF0dHJpYnV0ZUludGVycG9sYXRlVjtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluc3RydWN0aW9uIHRvIGdlbmVyYXRlIGZvciBpbnRlcnBvbGF0ZWQgdGV4dC5cbiAqIEBwYXJhbSBpbnRlcnBvbGF0aW9uIEFuIEludGVycG9sYXRpb24gQVNUXG4gKi9cbmZ1bmN0aW9uIGdldFRleHRJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbihpbnRlcnBvbGF0aW9uOiBJbnRlcnBvbGF0aW9uKTogby5FeHRlcm5hbFJlZmVyZW5jZSB7XG4gIHN3aXRjaCAoZ2V0SW50ZXJwb2xhdGlvbkFyZ3NMZW5ndGgoaW50ZXJwb2xhdGlvbikpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gUjMudGV4dEludGVycG9sYXRlO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBSMy50ZXh0SW50ZXJwb2xhdGUxO1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBSMy50ZXh0SW50ZXJwb2xhdGUyO1xuICAgIGNhc2UgNzpcbiAgICAgIHJldHVybiBSMy50ZXh0SW50ZXJwb2xhdGUzO1xuICAgIGNhc2UgOTpcbiAgICAgIHJldHVybiBSMy50ZXh0SW50ZXJwb2xhdGU0O1xuICAgIGNhc2UgMTE6XG4gICAgICByZXR1cm4gUjMudGV4dEludGVycG9sYXRlNTtcbiAgICBjYXNlIDEzOlxuICAgICAgcmV0dXJuIFIzLnRleHRJbnRlcnBvbGF0ZTY7XG4gICAgY2FzZSAxNTpcbiAgICAgIHJldHVybiBSMy50ZXh0SW50ZXJwb2xhdGU3O1xuICAgIGNhc2UgMTc6XG4gICAgICByZXR1cm4gUjMudGV4dEludGVycG9sYXRlODtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFIzLnRleHRJbnRlcnBvbGF0ZVY7XG4gIH1cbn1cblxuLyoqXG4gKiBPcHRpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gbW9kaWZ5IGhvdyBhIHRlbXBsYXRlIGlzIHBhcnNlZCBieSBgcGFyc2VUZW1wbGF0ZSgpYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZVRlbXBsYXRlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJbmNsdWRlIHdoaXRlc3BhY2Ugbm9kZXMgaW4gdGhlIHBhcnNlZCBvdXRwdXQuXG4gICAqL1xuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEhvdyB0byBwYXJzZSBpbnRlcnBvbGF0aW9uIG1hcmtlcnMuXG4gICAqL1xuICBpbnRlcnBvbGF0aW9uQ29uZmlnPzogSW50ZXJwb2xhdGlvbkNvbmZpZztcbiAgLyoqXG4gICAqIFRoZSBzdGFydCBhbmQgZW5kIHBvaW50IG9mIHRoZSB0ZXh0IHRvIHBhcnNlIHdpdGhpbiB0aGUgYHNvdXJjZWAgc3RyaW5nLlxuICAgKiBUaGUgZW50aXJlIGBzb3VyY2VgIHN0cmluZyBpcyBwYXJzZWQgaWYgdGhpcyBpcyBub3QgcHJvdmlkZWQuXG4gICAqICovXG4gIHJhbmdlPzogTGV4ZXJSYW5nZTtcbiAgLyoqXG4gICAqIElmIHRoaXMgdGV4dCBpcyBzdG9yZWQgaW4gYSBKYXZhU2NyaXB0IHN0cmluZywgdGhlbiB3ZSBoYXZlIHRvIGRlYWwgd2l0aCBlc2NhcGUgc2VxdWVuY2VzLlxuICAgKlxuICAgKiAqKkV4YW1wbGUgMToqKlxuICAgKlxuICAgKiBgYGBcbiAgICogXCJhYmNcXFwiZGVmXFxuZ2hpXCJcbiAgICogYGBgXG4gICAqXG4gICAqIC0gVGhlIGBcXFwiYCBtdXN0IGJlIGNvbnZlcnRlZCB0byBgXCJgLlxuICAgKiAtIFRoZSBgXFxuYCBtdXN0IGJlIGNvbnZlcnRlZCB0byBhIG5ldyBsaW5lIGNoYXJhY3RlciBpbiBhIHRva2VuLFxuICAgKiAgIGJ1dCBpdCBzaG91bGQgbm90IGluY3JlbWVudCB0aGUgY3VycmVudCBsaW5lIGZvciBzb3VyY2UgbWFwcGluZy5cbiAgICpcbiAgICogKipFeGFtcGxlIDI6KipcbiAgICpcbiAgICogYGBgXG4gICAqIFwiYWJjXFxcbiAgICogIGRlZlwiXG4gICAqIGBgYFxuICAgKlxuICAgKiBUaGUgbGluZSBjb250aW51YXRpb24gKGBcXGAgZm9sbG93ZWQgYnkgYSBuZXdsaW5lKSBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tIGEgdG9rZW5cbiAgICogYnV0IHRoZSBuZXcgbGluZSBzaG91bGQgaW5jcmVtZW50IHRoZSBjdXJyZW50IGxpbmUgZm9yIHNvdXJjZSBtYXBwaW5nLlxuICAgKi9cbiAgZXNjYXBlZFN0cmluZz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBjaGFyYWN0ZXJzIHRoYXQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgbGVhZGluZyB0cml2aWEuXG4gICAqIExlYWRpbmcgdHJpdmlhIGFyZSBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBpbXBvcnRhbnQgdG8gdGhlIGRldmVsb3BlciwgYW5kIHNvIHNob3VsZCBub3QgYmVcbiAgICogaW5jbHVkZWQgaW4gc291cmNlLW1hcCBzZWdtZW50cy4gIEEgY29tbW9uIGV4YW1wbGUgaXMgd2hpdGVzcGFjZS5cbiAgICovXG4gIGxlYWRpbmdUcml2aWFDaGFycz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgYCRsb2NhbGl6ZWAgbWVzc2FnZSBpZHMgd2l0aCBhZGRpdGlvbmFsIGxlZ2FjeSBtZXNzYWdlIGlkcy5cbiAgICpcbiAgICogVGhpcyBvcHRpb24gZGVmYXVsdHMgdG8gYHRydWVgIGJ1dCBpbiB0aGUgZnV0dXJlIHRoZSBkZWZhdWwgd2lsbCBiZSBmbGlwcGVkLlxuICAgKlxuICAgKiBGb3Igbm93IHNldCB0aGlzIG9wdGlvbiB0byBmYWxzZSBpZiB5b3UgaGF2ZSBtaWdyYXRlZCB0aGUgdHJhbnNsYXRpb24gZmlsZXMgdG8gdXNlIHRoZSBuZXdcbiAgICogYCRsb2NhbGl6ZWAgbWVzc2FnZSBpZCBmb3JtYXQgYW5kIHlvdSBhcmUgbm90IHVzaW5nIGNvbXBpbGUgdGltZSB0cmFuc2xhdGlvbiBtZXJnaW5nLlxuICAgKi9cbiAgZW5hYmxlSTE4bkxlZ2FjeU1lc3NhZ2VJZEZvcm1hdD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogUGFyc2UgYSB0ZW1wbGF0ZSBpbnRvIHJlbmRlcjMgYE5vZGVgcyBhbmQgYWRkaXRpb25hbCBtZXRhZGF0YSwgd2l0aCBubyBvdGhlciBkZXBlbmRlbmNpZXMuXG4gKlxuICogQHBhcmFtIHRlbXBsYXRlIHRleHQgb2YgdGhlIHRlbXBsYXRlIHRvIHBhcnNlXG4gKiBAcGFyYW0gdGVtcGxhdGVVcmwgVVJMIHRvIHVzZSBmb3Igc291cmNlIG1hcHBpbmcgb2YgdGhlIHBhcnNlZCB0ZW1wbGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyB0byBtb2RpZnkgaG93IHRoZSB0ZW1wbGF0ZSBpcyBwYXJzZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGVtcGxhdGUoXG4gICAgdGVtcGxhdGU6IHN0cmluZywgdGVtcGxhdGVVcmw6IHN0cmluZywgb3B0aW9uczogUGFyc2VUZW1wbGF0ZU9wdGlvbnMgPSB7fSk6IHtcbiAgZXJyb3JzPzogUGFyc2VFcnJvcltdLFxuICAgICAgICBub2RlczogdC5Ob2RlW10sXG4gICAgICAgIHN0eWxlVXJsczogc3RyaW5nW10sXG4gICAgICAgIHN0eWxlczogc3RyaW5nW10sXG4gICAgICAgIG5nQ29udGVudFNlbGVjdG9yczogc3RyaW5nW11cbn0ge1xuICBjb25zdCB7aW50ZXJwb2xhdGlvbkNvbmZpZywgcHJlc2VydmVXaGl0ZXNwYWNlcywgZW5hYmxlSTE4bkxlZ2FjeU1lc3NhZ2VJZEZvcm1hdH0gPSBvcHRpb25zO1xuICBjb25zdCBiaW5kaW5nUGFyc2VyID0gbWFrZUJpbmRpbmdQYXJzZXIoaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gIGNvbnN0IGh0bWxQYXJzZXIgPSBuZXcgSHRtbFBhcnNlcigpO1xuICBjb25zdCBwYXJzZVJlc3VsdCA9IGh0bWxQYXJzZXIucGFyc2UoXG4gICAgICB0ZW1wbGF0ZSwgdGVtcGxhdGVVcmwsXG4gICAgICB7bGVhZGluZ1RyaXZpYUNoYXJzOiBMRUFESU5HX1RSSVZJQV9DSEFSUywgLi4ub3B0aW9ucywgdG9rZW5pemVFeHBhbnNpb25Gb3JtczogdHJ1ZX0pO1xuXG4gIGlmIChwYXJzZVJlc3VsdC5lcnJvcnMgJiYgcGFyc2VSZXN1bHQuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JzOiBwYXJzZVJlc3VsdC5lcnJvcnMsXG4gICAgICBub2RlczogW10sXG4gICAgICBzdHlsZVVybHM6IFtdLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIG5nQ29udGVudFNlbGVjdG9yczogW11cbiAgICB9O1xuICB9XG5cbiAgbGV0IHJvb3ROb2RlczogaHRtbC5Ob2RlW10gPSBwYXJzZVJlc3VsdC5yb290Tm9kZXM7XG5cbiAgLy8gcHJvY2VzcyBpMThuIG1ldGEgaW5mb3JtYXRpb24gKHNjYW4gYXR0cmlidXRlcywgZ2VuZXJhdGUgaWRzKVxuICAvLyBiZWZvcmUgd2UgcnVuIHdoaXRlc3BhY2UgcmVtb3ZhbCBwcm9jZXNzLCBiZWNhdXNlIGV4aXN0aW5nIGkxOG5cbiAgLy8gZXh0cmFjdGlvbiBwcm9jZXNzIChuZyB4aTE4bikgcmVsaWVzIG9uIGEgcmF3IGNvbnRlbnQgdG8gZ2VuZXJhdGVcbiAgLy8gbWVzc2FnZSBpZHNcbiAgY29uc3QgaTE4bk1ldGFWaXNpdG9yID0gbmV3IEkxOG5NZXRhVmlzaXRvcihcbiAgICAgIGludGVycG9sYXRpb25Db25maWcsIC8qIGtlZXBJMThuQXR0cnMgKi8gIXByZXNlcnZlV2hpdGVzcGFjZXMsXG4gICAgICBlbmFibGVJMThuTGVnYWN5TWVzc2FnZUlkRm9ybWF0KTtcbiAgcm9vdE5vZGVzID0gaHRtbC52aXNpdEFsbChpMThuTWV0YVZpc2l0b3IsIHJvb3ROb2Rlcyk7XG5cbiAgaWYgKCFwcmVzZXJ2ZVdoaXRlc3BhY2VzKSB7XG4gICAgcm9vdE5vZGVzID0gaHRtbC52aXNpdEFsbChuZXcgV2hpdGVzcGFjZVZpc2l0b3IoKSwgcm9vdE5vZGVzKTtcblxuICAgIC8vIHJ1biBpMThuIG1ldGEgdmlzaXRvciBhZ2FpbiBpbiBjYXNlIHdoaXRlc3BhY2VzIGFyZSByZW1vdmVkIChiZWNhdXNlIHRoYXQgbWlnaHQgYWZmZWN0XG4gICAgLy8gZ2VuZXJhdGVkIGkxOG4gbWVzc2FnZSBjb250ZW50KSBhbmQgZmlyc3QgcGFzcyBpbmRpY2F0ZWQgdGhhdCBpMThuIGNvbnRlbnQgaXMgcHJlc2VudCBpbiBhXG4gICAgLy8gdGVtcGxhdGUuIER1cmluZyB0aGlzIHBhc3MgaTE4biBJRHMgZ2VuZXJhdGVkIGF0IHRoZSBmaXJzdCBwYXNzIHdpbGwgYmUgcHJlc2VydmVkLCBzbyB3ZSBjYW5cbiAgICAvLyBtaW1pYyBleGlzdGluZyBleHRyYWN0aW9uIHByb2Nlc3MgKG5nIHhpMThuKVxuICAgIGlmIChpMThuTWV0YVZpc2l0b3IuaGFzSTE4bk1ldGEpIHtcbiAgICAgIHJvb3ROb2RlcyA9IGh0bWwudmlzaXRBbGwoXG4gICAgICAgICAgbmV3IEkxOG5NZXRhVmlzaXRvcihpbnRlcnBvbGF0aW9uQ29uZmlnLCAvKiBrZWVwSTE4bkF0dHJzICovIGZhbHNlKSwgcm9vdE5vZGVzKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB7bm9kZXMsIGVycm9ycywgc3R5bGVVcmxzLCBzdHlsZXMsIG5nQ29udGVudFNlbGVjdG9yc30gPVxuICAgICAgaHRtbEFzdFRvUmVuZGVyM0FzdChyb290Tm9kZXMsIGJpbmRpbmdQYXJzZXIpO1xuICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHtlcnJvcnMsIG5vZGVzOiBbXSwgc3R5bGVVcmxzOiBbXSwgc3R5bGVzOiBbXSwgbmdDb250ZW50U2VsZWN0b3JzOiBbXX07XG4gIH1cblxuICByZXR1cm4ge25vZGVzLCBzdHlsZVVybHMsIHN0eWxlcywgbmdDb250ZW50U2VsZWN0b3JzfTtcbn1cblxuY29uc3QgZWxlbWVudFJlZ2lzdHJ5ID0gbmV3IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSgpO1xuXG4vKipcbiAqIENvbnN0cnVjdCBhIGBCaW5kaW5nUGFyc2VyYCB3aXRoIGEgZGVmYXVsdCBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUJpbmRpbmdQYXJzZXIoXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcpOiBCaW5kaW5nUGFyc2VyIHtcbiAgcmV0dXJuIG5ldyBCaW5kaW5nUGFyc2VyKFxuICAgICAgbmV3IEl2eVBhcnNlcihuZXcgTGV4ZXIoKSksIGludGVycG9sYXRpb25Db25maWcsIGVsZW1lbnRSZWdpc3RyeSwgbnVsbCwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVNhbml0aXphdGlvbkZuKGNvbnRleHQ6IGNvcmUuU2VjdXJpdHlDb250ZXh0LCBpc0F0dHJpYnV0ZT86IGJvb2xlYW4pIHtcbiAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgY2FzZSBjb3JlLlNlY3VyaXR5Q29udGV4dC5IVE1MOlxuICAgICAgcmV0dXJuIG8uaW1wb3J0RXhwcihSMy5zYW5pdGl6ZUh0bWwpO1xuICAgIGNhc2UgY29yZS5TZWN1cml0eUNvbnRleHQuU0NSSVBUOlxuICAgICAgcmV0dXJuIG8uaW1wb3J0RXhwcihSMy5zYW5pdGl6ZVNjcmlwdCk7XG4gICAgY2FzZSBjb3JlLlNlY3VyaXR5Q29udGV4dC5TVFlMRTpcbiAgICAgIC8vIHRoZSBjb21waWxlciBkb2VzIG5vdCBmaWxsIGluIGFuIGluc3RydWN0aW9uIGZvciBbc3R5bGUucHJvcD9dIGJpbmRpbmdcbiAgICAgIC8vIHZhbHVlcyBiZWNhdXNlIHRoZSBzdHlsZSBhbGdvcml0aG0ga25vd3MgaW50ZXJuYWxseSB3aGF0IHByb3BzIGFyZSBzdWJqZWN0XG4gICAgICAvLyB0byBzYW5pdGl6YXRpb24gKG9ubHkgW2F0dHIuc3R5bGVdIHZhbHVlcyBhcmUgZXhwbGljaXRseSBzYW5pdGl6ZWQpXG4gICAgICByZXR1cm4gaXNBdHRyaWJ1dGUgPyBvLmltcG9ydEV4cHIoUjMuc2FuaXRpemVTdHlsZSkgOiBudWxsO1xuICAgIGNhc2UgY29yZS5TZWN1cml0eUNvbnRleHQuVVJMOlxuICAgICAgcmV0dXJuIG8uaW1wb3J0RXhwcihSMy5zYW5pdGl6ZVVybCk7XG4gICAgY2FzZSBjb3JlLlNlY3VyaXR5Q29udGV4dC5SRVNPVVJDRV9VUkw6XG4gICAgICByZXR1cm4gby5pbXBvcnRFeHByKFIzLnNhbml0aXplUmVzb3VyY2VVcmwpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NpbmdsZUVsZW1lbnRUZW1wbGF0ZShjaGlsZHJlbjogdC5Ob2RlW10pOiBjaGlsZHJlbiBpc1t0LkVsZW1lbnRdIHtcbiAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBjaGlsZHJlblswXSBpbnN0YW5jZW9mIHQuRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNUZXh0Tm9kZShub2RlOiB0Lk5vZGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiB0LlRleHQgfHwgbm9kZSBpbnN0YW5jZW9mIHQuQm91bmRUZXh0IHx8IG5vZGUgaW5zdGFuY2VvZiB0LkljdTtcbn1cblxuZnVuY3Rpb24gaGFzVGV4dENoaWxkcmVuT25seShjaGlsZHJlbjogdC5Ob2RlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIGNoaWxkcmVuLmV2ZXJ5KGlzVGV4dE5vZGUpO1xufVxuXG5pbnRlcmZhY2UgQ2hhaW5hYmxlQmluZGluZ0luc3RydWN0aW9uIHtcbiAgbmFtZT86IHN0cmluZztcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFufG51bGw7XG4gIHZhbHVlOiAoKSA9PiBvLkV4cHJlc3Npb24gfCBvLkV4cHJlc3Npb25bXTtcbiAgcGFyYW1zPzogYW55W107XG59XG5cbi8qKiBOYW1lIG9mIHRoZSBnbG9iYWwgdmFyaWFibGUgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSBpZiB3ZSB1c2UgQ2xvc3VyZSB0cmFuc2xhdGlvbnMgb3Igbm90ICovXG5jb25zdCBOR19JMThOX0NMT1NVUkVfTU9ERSA9ICduZ0kxOG5DbG9zdXJlTW9kZSc7XG5cbi8qKlxuICogR2VuZXJhdGUgc3RhdGVtZW50cyB0aGF0IGRlZmluZSBhIGdpdmVuIHRyYW5zbGF0aW9uIG1lc3NhZ2UuXG4gKlxuICogYGBgXG4gKiB2YXIgSTE4Tl8xO1xuICogaWYgKHR5cGVvZiBuZ0kxOG5DbG9zdXJlTW9kZSAhPT0gdW5kZWZpbmVkICYmIG5nSTE4bkNsb3N1cmVNb2RlKSB7XG4gKiAgICAgdmFyIE1TR19FWFRFUk5BTF9YWFggPSBnb29nLmdldE1zZyhcbiAqICAgICAgICAgIFwiU29tZSBtZXNzYWdlIHdpdGggeyRpbnRlcnBvbGF0aW9ufSFcIixcbiAqICAgICAgICAgIHsgXCJpbnRlcnBvbGF0aW9uXCI6IFwiXFx1RkZGRDBcXHVGRkZEXCIgfVxuICogICAgICk7XG4gKiAgICAgSTE4Tl8xID0gTVNHX0VYVEVSTkFMX1hYWDtcbiAqIH1cbiAqIGVsc2Uge1xuICogICAgIEkxOE5fMSA9ICRsb2NhbGl6ZWBTb21lIG1lc3NhZ2Ugd2l0aCAkeydcXHVGRkZEMFxcdUZGRkQnfSFgO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIG1lc3NhZ2UgVGhlIG9yaWdpbmFsIGkxOG4gQVNUIG1lc3NhZ2Ugbm9kZVxuICogQHBhcmFtIHZhcmlhYmxlIFRoZSB2YXJpYWJsZSB0aGF0IHdpbGwgYmUgYXNzaWduZWQgdGhlIHRyYW5zbGF0aW9uLCBlLmcuIGBJMThOXzFgLlxuICogQHBhcmFtIGNsb3N1cmVWYXIgVGhlIHZhcmlhYmxlIGZvciBDbG9zdXJlIGBnb29nLmdldE1zZ2AgY2FsbHMsIGUuZy4gYE1TR19FWFRFUk5BTF9YWFhgLlxuICogQHBhcmFtIHBhcmFtcyBPYmplY3QgbWFwcGluZyBwbGFjZWhvbGRlciBuYW1lcyB0byB0aGVpciB2YWx1ZXMgKGUuZy5cbiAqIGB7IFwiaW50ZXJwb2xhdGlvblwiOiBcIlxcdUZGRkQwXFx1RkZGRFwiIH1gKS5cbiAqIEBwYXJhbSB0cmFuc2Zvcm1GbiBPcHRpb25hbCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgdHJhbnNsYXRpb24gKGUuZy5cbiAqIHBvc3QtcHJvY2Vzc2luZykuXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBzdGF0ZW1lbnRzIHRoYXQgZGVmaW5lZCBhIGdpdmVuIHRyYW5zbGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb25EZWNsU3RtdHMoXG4gICAgbWVzc2FnZTogaTE4bi5NZXNzYWdlLCB2YXJpYWJsZTogby5SZWFkVmFyRXhwciwgY2xvc3VyZVZhcjogby5SZWFkVmFyRXhwcixcbiAgICBwYXJhbXM6IHtbbmFtZTogc3RyaW5nXTogby5FeHByZXNzaW9ufSA9IHt9LFxuICAgIHRyYW5zZm9ybUZuPzogKHJhdzogby5SZWFkVmFyRXhwcikgPT4gby5FeHByZXNzaW9uKTogby5TdGF0ZW1lbnRbXSB7XG4gIGNvbnN0IHN0YXRlbWVudHM6IG8uU3RhdGVtZW50W10gPSBbXG4gICAgZGVjbGFyZUkxOG5WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgby5pZlN0bXQoXG4gICAgICAgIGNyZWF0ZUNsb3N1cmVNb2RlR3VhcmQoKSxcbiAgICAgICAgY3JlYXRlR29vZ2xlR2V0TXNnU3RhdGVtZW50cyhcbiAgICAgICAgICAgIHZhcmlhYmxlLCBtZXNzYWdlLCBjbG9zdXJlVmFyLFxuICAgICAgICAgICAgaTE4bkZvcm1hdFBsYWNlaG9sZGVyTmFtZXMocGFyYW1zLCAvKiB1c2VDYW1lbENhc2UgKi8gdHJ1ZSkpLFxuICAgICAgICBjcmVhdGVMb2NhbGl6ZVN0YXRlbWVudHMoXG4gICAgICAgICAgICB2YXJpYWJsZSwgbWVzc2FnZSwgaTE4bkZvcm1hdFBsYWNlaG9sZGVyTmFtZXMocGFyYW1zLCAvKiB1c2VDYW1lbENhc2UgKi8gZmFsc2UpKSksXG4gIF07XG5cbiAgaWYgKHRyYW5zZm9ybUZuKSB7XG4gICAgc3RhdGVtZW50cy5wdXNoKG5ldyBvLkV4cHJlc3Npb25TdGF0ZW1lbnQodmFyaWFibGUuc2V0KHRyYW5zZm9ybUZuKHZhcmlhYmxlKSkpKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgZXhwcmVzc2lvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBndWFyZCB0aGUgY2xvc3VyZSBtb2RlIGJsb2NrXG4gKiBJdCBpcyBlcXVpdmFsZW50IHRvOlxuICpcbiAqIGBgYFxuICogdHlwZW9mIG5nSTE4bkNsb3N1cmVNb2RlICE9PSB1bmRlZmluZWQgJiYgbmdJMThuQ2xvc3VyZU1vZGVcbiAqIGBgYFxuICovXG5mdW5jdGlvbiBjcmVhdGVDbG9zdXJlTW9kZUd1YXJkKCk6IG8uQmluYXJ5T3BlcmF0b3JFeHByIHtcbiAgcmV0dXJuIG8udHlwZW9mRXhwcihvLnZhcmlhYmxlKE5HX0kxOE5fQ0xPU1VSRV9NT0RFKSlcbiAgICAgIC5ub3RJZGVudGljYWwoby5saXRlcmFsKCd1bmRlZmluZWQnLCBvLlNUUklOR19UWVBFKSlcbiAgICAgIC5hbmQoby52YXJpYWJsZShOR19JMThOX0NMT1NVUkVfTU9ERSkpO1xufVxuIl19