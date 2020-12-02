/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/instructions/styling.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { unwrapSafeValue } from '../../sanitization/bypass';
import { stylePropNeedsSanitization, ɵɵsanitizeStyle } from '../../sanitization/sanitization';
import { keyValueArrayGet, keyValueArraySet } from '../../util/array_utils';
import { assertDefined, assertEqual, assertLessThan, assertNotEqual, throwError } from '../../util/assert';
import { EMPTY_ARRAY } from '../../util/empty';
import { concatStringsWithSpace, stringify } from '../../util/stringify';
import { assertFirstUpdatePass } from '../assert';
import { bindingUpdated } from '../bindings';
import { getTStylingRangeNext, getTStylingRangeNextDuplicate, getTStylingRangePrev, getTStylingRangePrevDuplicate } from '../interfaces/styling';
import { HEADER_OFFSET, RENDERER } from '../interfaces/view';
import { applyStyling } from '../node_manipulation';
import { getCurrentDirectiveDef, getCurrentStyleSanitizer, getLView, getSelectedIndex, getTView, incrementBindingIndex, setCurrentStyleSanitizer } from '../state';
import { insertTStylingBinding } from '../styling/style_binding_list';
import { getLastParsedKey, getLastParsedValue, parseClassName, parseClassNameNext, parseStyle, parseStyleNext } from '../styling/styling_parser';
import { NO_CHANGE } from '../tokens';
import { getNativeByIndex } from '../util/view_utils';
import { setDirectiveInputsWhichShadowsStyling } from './property';
/**
 * Sets the current style sanitizer function which will then be used
 * within all follow-up prop and map-based style binding instructions
 * for the given element.
 *
 * Note that once styling has been applied to the element (i.e. once
 * `advance(n)` is executed or the hostBindings/template function exits)
 * then the active `sanitizerFn` will be set to `null`. This means that
 * once styling is applied to another element then a another call to
 * `styleSanitizer` will need to be made.
 *
 * \@codeGenApi
 * @param {?} sanitizer
 * @return {?}
 */
export function ɵɵstyleSanitizer(sanitizer) {
    setCurrentStyleSanitizer(sanitizer);
}
/**
 * Update a style binding on an element with the provided value.
 *
 * If the style value is falsy then it will be removed from the element
 * (or assigned a different value depending if there are any styles placed
 * on the element with `styleMap` or any static styles that are
 * present from when the element was created with `styling`).
 *
 * Note that the styling element is updated as part of `stylingApply`.
 *
 * \@codeGenApi
 * @param {?} prop A valid CSS property.
 * @param {?} value New value to write (`null` or an empty string to remove).
 * @param {?=} suffix Optional suffix. Used with scalar values to add unit such as `px`.
 *        Note that when a suffix is provided then the underlying sanitizer will
 *        be ignored.
 *
 * Note that this will apply the provided style value to the host element if this function is called
 * within a host binding function.
 *
 * @return {?}
 */
export function ɵɵstyleProp(prop, value, suffix) {
    checkStylingProperty(prop, value, suffix, false);
    return ɵɵstyleProp;
}
/**
 * Update a class binding on an element with the provided value.
 *
 * This instruction is meant to handle the `[class.foo]="exp"` case and,
 * therefore, the class binding itself must already be allocated using
 * `styling` within the creation block.
 *
 * \@codeGenApi
 * @param {?} className
 * @param {?} value A true/false value which will turn the class on or off.
 *
 * Note that this will apply the provided class value to the host element if this function
 * is called within a host binding function.
 *
 * @return {?}
 */
export function ɵɵclassProp(className, value) {
    checkStylingProperty(className, value, null, true);
    return ɵɵclassProp;
}
/**
 * Update style bindings using an object literal on an element.
 *
 * This instruction is meant to apply styling via the `[style]="exp"` template bindings.
 * When styles are applied to the element they will then be updated with respect to
 * any styles/classes set via `styleProp`. If any styles are set to falsy
 * then they will be removed from the element.
 *
 * Note that the styling instruction will not be applied until `stylingApply` is called.
 *
 * \@codeGenApi
 * @param {?} styles A key/value style map of the styles that will be applied to the given element.
 *        Any missing styles (that have already been applied to the element beforehand) will be
 *        removed (unset) from the element's styling.
 *
 * Note that this will apply the provided styleMap value to the host element if this function
 * is called within a host binding.
 *
 * @return {?}
 */
export function ɵɵstyleMap(styles) {
    checkStylingMap(styleKeyValueArraySet, styleStringParser, styles, false);
}
/**
 * Parse text as style and add values to KeyValueArray.
 *
 * This code is pulled out to a separate function so that it can be tree shaken away if it is not
 * needed. It is only referenced from `ɵɵstyleMap`.
 *
 * @param {?} keyValueArray KeyValueArray to add parsed values to.
 * @param {?} text text to parse.
 * @return {?}
 */
export function styleStringParser(keyValueArray, text) {
    for (let i = parseStyle(text); i >= 0; i = parseStyleNext(text, i)) {
        styleKeyValueArraySet(keyValueArray, getLastParsedKey(text), getLastParsedValue(text));
    }
}
/**
 * Update class bindings using an object literal or class-string on an element.
 *
 * This instruction is meant to apply styling via the `[class]="exp"` template bindings.
 * When classes are applied to the element they will then be updated with
 * respect to any styles/classes set via `classProp`. If any
 * classes are set to falsy then they will be removed from the element.
 *
 * Note that the styling instruction will not be applied until `stylingApply` is called.
 * Note that this will the provided classMap value to the host element if this function is called
 * within a host binding.
 *
 * \@codeGenApi
 * @param {?} classes A key/value map or string of CSS classes that will be added to the
 *        given element. Any missing classes (that have already been applied to the element
 *        beforehand) will be removed (unset) from the element's list of CSS classes.
 *
 * @return {?}
 */
export function ɵɵclassMap(classes) {
    checkStylingMap(keyValueArraySet, classStringParser, classes, true);
}
/**
 * Parse text as class and add values to KeyValueArray.
 *
 * This code is pulled out to a separate function so that it can be tree shaken away if it is not
 * needed. It is only referenced from `ɵɵclassMap`.
 *
 * @param {?} keyValueArray KeyValueArray to add parsed values to.
 * @param {?} text text to parse.
 * @return {?}
 */
export function classStringParser(keyValueArray, text) {
    for (let i = parseClassName(text); i >= 0; i = parseClassNameNext(text, i)) {
        keyValueArraySet(keyValueArray, getLastParsedKey(text), true);
    }
}
/**
 * Common code between `ɵɵclassProp` and `ɵɵstyleProp`.
 *
 * @param {?} prop property name.
 * @param {?} value binding value.
 * @param {?} suffixOrSanitizer suffix or sanitization function
 * @param {?} isClassBased `true` if `class` change (`false` if `style`)
 * @return {?}
 */
export function checkStylingProperty(prop, value, suffixOrSanitizer, isClassBased) {
    /** @type {?} */
    const lView = getLView();
    /** @type {?} */
    const tView = getTView();
    // Styling instructions use 2 slots per binding.
    // 1. one for the value / TStylingKey
    // 2. one for the intermittent-value / TStylingRange
    /** @type {?} */
    const bindingIndex = incrementBindingIndex(2);
    if (tView.firstUpdatePass) {
        stylingFirstUpdatePass(tView, prop, bindingIndex, isClassBased);
    }
    if (value !== NO_CHANGE && bindingUpdated(lView, bindingIndex, value)) {
        // This is a work around. Once PR#34480 lands the sanitizer is passed explicitly and this line
        // can be removed.
        /** @type {?} */
        let styleSanitizer;
        if (suffixOrSanitizer == null) {
            if (styleSanitizer = getCurrentStyleSanitizer()) {
                suffixOrSanitizer = (/** @type {?} */ (styleSanitizer));
            }
        }
        /** @type {?} */
        const tNode = (/** @type {?} */ (tView.data[getSelectedIndex() + HEADER_OFFSET]));
        updateStyling(tView, tNode, lView, lView[RENDERER], prop, lView[bindingIndex + 1] = normalizeAndApplySuffixOrSanitizer(value, suffixOrSanitizer), isClassBased, bindingIndex);
    }
}
/**
 * Common code between `ɵɵclassMap` and `ɵɵstyleMap`.
 *
 * @param {?} keyValueArraySet (See `keyValueArraySet` in "util/array_utils") Gets passed in as a
 * function so that
 *        `style` can pass in version which does sanitization. This is done for tree shaking
 *        purposes.
 * @param {?} stringParser Parser used to parse `value` if `string`. (Passed in as `style` and `class`
 *        have different parsers.)
 * @param {?} value bound value from application
 * @param {?} isClassBased `true` if `class` change (`false` if `style`)
 * @return {?}
 */
export function checkStylingMap(keyValueArraySet, stringParser, value, isClassBased) {
    /** @type {?} */
    const tView = getTView();
    /** @type {?} */
    const bindingIndex = incrementBindingIndex(2);
    if (tView.firstUpdatePass) {
        stylingFirstUpdatePass(tView, null, bindingIndex, isClassBased);
    }
    /** @type {?} */
    const lView = getLView();
    if (value !== NO_CHANGE && bindingUpdated(lView, bindingIndex, value)) {
        // `getSelectedIndex()` should be here (rather than in instruction) so that it is guarded by the
        // if so as not to read unnecessarily.
        /** @type {?} */
        const tNode = (/** @type {?} */ (tView.data[getSelectedIndex() + HEADER_OFFSET]));
        if (hasStylingInputShadow(tNode, isClassBased) && !isInHostBindings(tView, bindingIndex)) {
            if (ngDevMode) {
                // verify that if we are shadowing then `TData` is appropriately marked so that we skip
                // processing this binding in styling resolution.
                /** @type {?} */
                const tStylingKey = tView.data[bindingIndex];
                assertEqual(Array.isArray(tStylingKey) ? tStylingKey[1] : tStylingKey, false, 'Styling linked list shadow input should be marked as \'false\'');
            }
            // VE does not concatenate the static portion like we are doing here.
            // Instead VE just ignores the static completely if dynamic binding is present.
            // Because of locality we have already set the static portion because we don't know if there
            // is a dynamic portion until later. If we would ignore the static portion it would look like
            // the binding has removed it. This would confuse `[ngStyle]`/`[ngClass]` to do the wrong
            // thing as it would think that the static portion was removed. For this reason we
            // concatenate it so that `[ngStyle]`/`[ngClass]`  can continue to work on changed.
            /** @type {?} */
            let staticPrefix = isClassBased ? tNode.classesWithoutHost : tNode.stylesWithoutHost;
            ngDevMode && isClassBased === false && staticPrefix !== null &&
                assertEqual(staticPrefix.endsWith(';'), true, 'Expecting static portion to end with \';\'');
            if (staticPrefix !== null) {
                // We want to make sure that falsy values of `value` become empty strings.
                value = concatStringsWithSpace(staticPrefix, value ? value : '');
            }
            // Given `<div [style] my-dir>` such that `my-dir` has `@Input('style')`.
            // This takes over the `[style]` binding. (Same for `[class]`)
            setDirectiveInputsWhichShadowsStyling(tView, tNode, lView, value, isClassBased);
        }
        else {
            updateStylingMap(tView, tNode, lView, lView[RENDERER], lView[bindingIndex + 1], lView[bindingIndex + 1] = toStylingKeyValueArray(keyValueArraySet, stringParser, value), isClassBased, bindingIndex);
        }
    }
}
/**
 * Determines when the binding is in `hostBindings` section
 *
 * @param {?} tView Current `TView`
 * @param {?} bindingIndex index of binding which we would like if it is in `hostBindings`
 * @return {?}
 */
function isInHostBindings(tView, bindingIndex) {
    // All host bindings are placed after the expando section.
    return bindingIndex >= tView.expandoStartIndex;
}
/**
 * Collects the necessary information to insert the binding into a linked list of style bindings
 * using `insertTStylingBinding`.
 *
 * @param {?} tView `TView` where the binding linked list will be stored.
 * @param {?} tStylingKey Property/key of the binding.
 * @param {?} bindingIndex Index of binding associated with the `prop`
 * @param {?} isClassBased `true` if `class` change (`false` if `style`)
 * @return {?}
 */
function stylingFirstUpdatePass(tView, tStylingKey, bindingIndex, isClassBased) {
    ngDevMode && assertFirstUpdatePass(tView);
    /** @type {?} */
    const tData = tView.data;
    if (tData[bindingIndex + 1] === null) {
        // The above check is necessary because we don't clear first update pass until first successful
        // (no exception) template execution. This prevents the styling instruction from double adding
        // itself to the list.
        // `getSelectedIndex()` should be here (rather than in instruction) so that it is guarded by the
        // if so as not to read unnecessarily.
        /** @type {?} */
        const tNode = (/** @type {?} */ (tData[getSelectedIndex() + HEADER_OFFSET]));
        /** @type {?} */
        const isHostBindings = isInHostBindings(tView, bindingIndex);
        if (hasStylingInputShadow(tNode, isClassBased) && tStylingKey === null && !isHostBindings) {
            // `tStylingKey === null` implies that we are either `[style]` or `[class]` binding.
            // If there is a directive which uses `@Input('style')` or `@Input('class')` than
            // we need to neutralize this binding since that directive is shadowing it.
            // We turn this into a noop by setting the key to `false`
            tStylingKey = false;
        }
        tStylingKey = wrapInStaticStylingKey(tData, tNode, tStylingKey, isClassBased);
        insertTStylingBinding(tData, tNode, tStylingKey, bindingIndex, isHostBindings, isClassBased);
    }
}
/**
 * Adds static styling information to the binding if applicable.
 *
 * The linked list of styles not only stores the list and keys, but also stores static styling
 * information on some of the keys. This function determines if the key should contain the styling
 * information and computes it.
 *
 * See `TStylingStatic` for more details.
 *
 * @param {?} tData `TData` where the linked list is stored.
 * @param {?} tNode `TNode` for which the styling is being computed.
 * @param {?} stylingKey `TStylingKeyPrimitive` which may need to be wrapped into `TStylingKey`
 * @param {?} isClassBased `true` if `class` (`false` if `style`)
 * @return {?}
 */
export function wrapInStaticStylingKey(tData, tNode, stylingKey, isClassBased) {
    /** @type {?} */
    const hostDirectiveDef = getCurrentDirectiveDef(tData);
    /** @type {?} */
    let residual = isClassBased ? tNode.residualClasses : tNode.residualStyles;
    if (hostDirectiveDef === null) {
        // We are in template node.
        // If template node already had styling instruction then it has already collected the static
        // styling and there is no need to collect them again. We know that we are the first styling
        // instruction because the `TNode.*Bindings` points to 0 (nothing has been inserted yet).
        /** @type {?} */
        const isFirstStylingInstructionInTemplate = (/** @type {?} */ ((/** @type {?} */ ((isClassBased ? tNode.classBindings : tNode.styleBindings))))) === 0;
        if (isFirstStylingInstructionInTemplate) {
            // It would be nice to be able to get the statics from `mergeAttrs`, however, at this point
            // they are already merged and it would not be possible to figure which property belongs where
            // in the priority.
            stylingKey = collectStylingFromDirectives(null, tData, tNode, stylingKey, isClassBased);
            stylingKey = collectStylingFromTAttrs(stylingKey, tNode.attrs, isClassBased);
            // We know that if we have styling binding in template we can't have residual.
            residual = null;
        }
    }
    else {
        // We are in host binding node and there was no binding instruction in template node.
        // This means that we need to compute the residual.
        /** @type {?} */
        const directiveStylingLast = tNode.directiveStylingLast;
        /** @type {?} */
        const isFirstStylingInstructionInHostBinding = directiveStylingLast === -1 || tData[directiveStylingLast] !== hostDirectiveDef;
        if (isFirstStylingInstructionInHostBinding) {
            stylingKey =
                collectStylingFromDirectives(hostDirectiveDef, tData, tNode, stylingKey, isClassBased);
            if (residual === null) {
                // - If `null` than either:
                //    - Template styling instruction already ran and it has consumed the static
                //      styling into its `TStylingKey` and so there is no need to update residual. Instead
                //      we need to update the `TStylingKey` associated with the first template node
                //      instruction. OR
                //    - Some other styling instruction ran and determined that there are no residuals
                /** @type {?} */
                let templateStylingKey = getTemplateHeadTStylingKey(tData, tNode, isClassBased);
                if (templateStylingKey !== undefined && Array.isArray(templateStylingKey)) {
                    // Only recompute if `templateStylingKey` had static values. (If no static value found
                    // then there is nothing to do since this operation can only produce less static keys, not
                    // more.)
                    templateStylingKey = collectStylingFromDirectives(null, tData, tNode, templateStylingKey[1] /* unwrap previous statics */, isClassBased);
                    templateStylingKey =
                        collectStylingFromTAttrs(templateStylingKey, tNode.attrs, isClassBased);
                    setTemplateHeadTStylingKey(tData, tNode, isClassBased, templateStylingKey);
                }
            }
            else {
                // We only need to recompute residual if it is not `null`.
                // - If existing residual (implies there was no template styling). This means that some of
                //   the statics may have moved from the residual to the `stylingKey` and so we have to
                //   recompute.
                // - If `undefined` this is the first time we are running.
                residual = collectResidual(tData, tNode, isClassBased);
            }
        }
    }
    if (residual !== undefined) {
        isClassBased ? (tNode.residualClasses = residual) : (tNode.residualStyles = residual);
    }
    return stylingKey;
}
/**
 * Retrieve the `TStylingKey` for the template styling instruction.
 *
 * This is needed since `hostBinding` styling instructions are inserted after the template
 * instruction. While the template instruction needs to update the residual in `TNode` the
 * `hostBinding` instructions need to update the `TStylingKey` of the template instruction because
 * the template instruction is downstream from the `hostBindings` instructions.
 *
 * @param {?} tData `TData` where the linked list is stored.
 * @param {?} tNode `TNode` for which the styling is being computed.
 * @param {?} isClassBased `true` if `class` (`false` if `style`)
 * @return {?} `TStylingKey` if found or `undefined` if not found.
 */
function getTemplateHeadTStylingKey(tData, tNode, isClassBased) {
    /** @type {?} */
    const bindings = isClassBased ? tNode.classBindings : tNode.styleBindings;
    if (getTStylingRangeNext(bindings) === 0) {
        // There does not seem to be a styling instruction in the `template`.
        return undefined;
    }
    return (/** @type {?} */ (tData[getTStylingRangePrev(bindings)]));
}
/**
 * Update the `TStylingKey` of the first template instruction in `TNode`.
 *
 * Logically `hostBindings` styling instructions are of lower priority than that of the template.
 * However, they execute after the template styling instructions. This means that they get inserted
 * in front of the template styling instructions.
 *
 * If we have a template styling instruction and a new `hostBindings` styling instruction is
 * executed it means that it may need to steal static fields from the template instruction. This
 * method allows us to update the first template instruction `TStylingKey` with a new value.
 *
 * Assume:
 * ```
 * <div my-dir style="color: red" [style.color]="tmplExp"></div>
 *
 * \@Directive({
 *   host: {
 *     'style': 'width: 100px',
 *     '[style.color]': 'dirExp',
 *   }
 * })
 * class MyDir {}
 * ```
 *
 * when `[style.color]="tmplExp"` executes it creates this data structure.
 * ```
 *  ['', 'color', 'color', 'red', 'width', '100px'],
 * ```
 *
 * The reason for this is that the template instruction does not know if there are styling
 * instructions and must assume that there are none and must collect all of the static styling.
 * (both
 * `color' and 'width`)
 *
 * When `'[style.color]': 'dirExp',` executes we need to insert a new data into the linked list.
 * ```
 *  ['', 'color', 'width', '100px'],  // newly inserted
 *  ['', 'color', 'color', 'red', 'width', '100px'], // this is wrong
 * ```
 *
 * Notice that the template statics is now wrong as it incorrectly contains `width` so we need to
 * update it like so:
 * ```
 *  ['', 'color', 'width', '100px'],
 *  ['', 'color', 'color', 'red'],    // UPDATE
 * ```
 *
 * @param {?} tData `TData` where the linked list is stored.
 * @param {?} tNode `TNode` for which the styling is being computed.
 * @param {?} isClassBased `true` if `class` (`false` if `style`)
 * @param {?} tStylingKey New `TStylingKey` which is replacing the old one.
 * @return {?}
 */
function setTemplateHeadTStylingKey(tData, tNode, isClassBased, tStylingKey) {
    /** @type {?} */
    const bindings = isClassBased ? tNode.classBindings : tNode.styleBindings;
    ngDevMode &&
        assertNotEqual(getTStylingRangeNext(bindings), 0, 'Expecting to have at least one template styling binding.');
    tData[getTStylingRangePrev(bindings)] = tStylingKey;
}
/**
 * Collect all static values after the current `TNode.directiveStylingLast` index.
 *
 * Collect the remaining styling information which has not yet been collected by an existing
 * styling instruction.
 *
 * @param {?} tData `TData` where the `DirectiveDefs` are stored.
 * @param {?} tNode `TNode` which contains the directive range.
 * @param {?} isClassBased `true` if `class` (`false` if `style`)
 * @return {?}
 */
function collectResidual(tData, tNode, isClassBased) {
    /** @type {?} */
    let residual = undefined;
    /** @type {?} */
    const directiveEnd = tNode.directiveEnd;
    ngDevMode &&
        assertNotEqual(tNode.directiveStylingLast, -1, 'By the time this function gets called at least one hostBindings-node styling instruction must have executed.');
    // We add `1 + tNode.directiveStart` because we need to skip the current directive (as we are
    // collecting things after the last `hostBindings` directive which had a styling instruction.)
    for (let i = 1 + tNode.directiveStylingLast; i < directiveEnd; i++) {
        /** @type {?} */
        const attrs = ((/** @type {?} */ (tData[i]))).hostAttrs;
        residual = (/** @type {?} */ (collectStylingFromTAttrs(residual, attrs, isClassBased)));
    }
    return (/** @type {?} */ (collectStylingFromTAttrs(residual, tNode.attrs, isClassBased)));
}
/**
 * Collect the static styling information with lower priority than `hostDirectiveDef`.
 *
 * (This is opposite of residual styling.)
 *
 * @param {?} hostDirectiveDef `DirectiveDef` for which we want to collect lower priority static
 *        styling. (Or `null` if template styling)
 * @param {?} tData `TData` where the linked list is stored.
 * @param {?} tNode `TNode` for which the styling is being computed.
 * @param {?} stylingKey Existing `TStylingKey` to update or wrap.
 * @param {?} isClassBased `true` if `class` (`false` if `style`)
 * @return {?}
 */
function collectStylingFromDirectives(hostDirectiveDef, tData, tNode, stylingKey, isClassBased) {
    // We need to loop because there can be directives which have `hostAttrs` but don't have
    // `hostBindings` so this loop catches up to the current directive..
    /** @type {?} */
    let currentDirective = null;
    /** @type {?} */
    const directiveEnd = tNode.directiveEnd;
    /** @type {?} */
    let directiveStylingLast = tNode.directiveStylingLast;
    if (directiveStylingLast === -1) {
        directiveStylingLast = tNode.directiveStart;
    }
    else {
        directiveStylingLast++;
    }
    while (directiveStylingLast < directiveEnd) {
        currentDirective = (/** @type {?} */ (tData[directiveStylingLast]));
        ngDevMode && assertDefined(currentDirective, 'expected to be defined');
        stylingKey = collectStylingFromTAttrs(stylingKey, currentDirective.hostAttrs, isClassBased);
        if (currentDirective === hostDirectiveDef)
            break;
        directiveStylingLast++;
    }
    if (hostDirectiveDef !== null) {
        // we only advance the styling cursor if we are collecting data from host bindings.
        // Template executes before host bindings and so if we would update the index,
        // host bindings would not get their statics.
        tNode.directiveStylingLast = directiveStylingLast;
    }
    return stylingKey;
}
/**
 * Convert `TAttrs` into `TStylingStatic`.
 *
 * @param {?} stylingKey existing `TStylingKey` to update or wrap.
 * @param {?} attrs `TAttributes` to process.
 * @param {?} isClassBased `true` if `class` (`false` if `style`)
 * @return {?}
 */
function collectStylingFromTAttrs(stylingKey, attrs, isClassBased) {
    /** @type {?} */
    const desiredMarker = isClassBased ? 1 /* Classes */ : 2 /* Styles */;
    /** @type {?} */
    let currentMarker = -1 /* ImplicitAttributes */;
    if (attrs !== null) {
        for (let i = 0; i < attrs.length; i++) {
            /** @type {?} */
            const item = (/** @type {?} */ (attrs[i]));
            if (typeof item === 'number') {
                currentMarker = item;
            }
            else {
                if (currentMarker === desiredMarker) {
                    if (!Array.isArray(stylingKey)) {
                        stylingKey = stylingKey === undefined ? [] : (/** @type {?} */ (['', stylingKey]));
                    }
                    keyValueArraySet((/** @type {?} */ (stylingKey)), item, isClassBased ? true : attrs[++i]);
                }
            }
        }
    }
    return stylingKey === undefined ? null : stylingKey;
}
/**
 * Convert user input to `KeyValueArray`.
 *
 * This function takes user input which could be `string`, Object literal, or iterable and converts
 * it into a consistent representation. The output of this is `KeyValueArray` (which is an array
 * where
 * even indexes contain keys and odd indexes contain values for those keys).
 *
 * The advantage of converting to `KeyValueArray` is that we can perform diff in an input
 * independent
 * way.
 * (ie we can compare `foo bar` to `['bar', 'baz'] and determine a set of changes which need to be
 * applied)
 *
 * The fact that `KeyValueArray` is sorted is very important because it allows us to compute the
 * difference in linear fashion without the need to allocate any additional data.
 *
 * For example if we kept this as a `Map` we would have to iterate over previous `Map` to determine
 * which values need to be deleted, over the new `Map` to determine additions, and we would have to
 * keep additional `Map` to keep track of duplicates or items which have not yet been visited.
 *
 * @param {?} keyValueArraySet (See `keyValueArraySet` in "util/array_utils") Gets passed in as a
 * function so that
 *        `style` can pass in version which does sanitization. This is done for tree shaking
 *        purposes.
 * @param {?} stringParser The parser is passed in so that it will be tree shakable. See
 *        `styleStringParser` and `classStringParser`
 * @param {?} value The value to parse/convert to `KeyValueArray`
 * @return {?}
 */
export function toStylingKeyValueArray(keyValueArraySet, stringParser, value) {
    if (value == null /*|| value === undefined */ || value === '')
        return (/** @type {?} */ (EMPTY_ARRAY));
    /** @type {?} */
    const styleKeyValueArray = (/** @type {?} */ ([]));
    /** @type {?} */
    const unwrappedValue = (/** @type {?} */ (unwrapSafeValue(value)));
    if (Array.isArray(unwrappedValue)) {
        for (let i = 0; i < unwrappedValue.length; i++) {
            keyValueArraySet(styleKeyValueArray, unwrappedValue[i], true);
        }
    }
    else if (typeof unwrappedValue === 'object') {
        for (const key in unwrappedValue) {
            if (unwrappedValue.hasOwnProperty(key)) {
                keyValueArraySet(styleKeyValueArray, key, unwrappedValue[key]);
            }
        }
    }
    else if (typeof unwrappedValue === 'string') {
        stringParser(styleKeyValueArray, unwrappedValue);
    }
    else {
        ngDevMode &&
            throwError('Unsupported styling type ' + typeof unwrappedValue + ': ' + unwrappedValue);
    }
    return styleKeyValueArray;
}
/**
 * Set a `value` for a `key` taking style sanitization into account.
 *
 * See: `keyValueArraySet` for details
 *
 * @param {?} keyValueArray KeyValueArray to add to.
 * @param {?} key Style key to add. (This key will be checked if it needs sanitization)
 * @param {?} value The value to set (If key needs sanitization it will be sanitized)
 * @return {?}
 */
export function styleKeyValueArraySet(keyValueArray, key, value) {
    if (stylePropNeedsSanitization(key)) {
        value = ɵɵsanitizeStyle(value);
    }
    keyValueArraySet(keyValueArray, key, value);
}
/**
 * Update map based styling.
 *
 * Map based styling could be anything which contains more than one binding. For example `string`,
 * or object literal. Dealing with all of these types would complicate the logic so
 * instead this function expects that the complex input is first converted into normalized
 * `KeyValueArray`. The advantage of normalization is that we get the values sorted, which makes it
 * very cheap to compute deltas between the previous and current value.
 *
 * @param {?} tView Associated `TView.data` contains the linked list of binding priorities.
 * @param {?} tNode `TNode` where the binding is located.
 * @param {?} lView `LView` contains the values associated with other styling binding at this `TNode`.
 * @param {?} renderer Renderer to use if any updates.
 * @param {?} oldKeyValueArray Previous value represented as `KeyValueArray`
 * @param {?} newKeyValueArray Current value represented as `KeyValueArray`
 * @param {?} isClassBased `true` if `class` (`false` if `style`)
 * @param {?} bindingIndex Binding index of the binding.
 * @return {?}
 */
function updateStylingMap(tView, tNode, lView, renderer, oldKeyValueArray, newKeyValueArray, isClassBased, bindingIndex) {
    if ((/** @type {?} */ (oldKeyValueArray)) === NO_CHANGE) {
        // On first execution the oldKeyValueArray is NO_CHANGE => treat it as empty KeyValueArray.
        oldKeyValueArray = (/** @type {?} */ (EMPTY_ARRAY));
    }
    /** @type {?} */
    let oldIndex = 0;
    /** @type {?} */
    let newIndex = 0;
    /** @type {?} */
    let oldKey = 0 < oldKeyValueArray.length ? oldKeyValueArray[0] : null;
    /** @type {?} */
    let newKey = 0 < newKeyValueArray.length ? newKeyValueArray[0] : null;
    while (oldKey !== null || newKey !== null) {
        ngDevMode && assertLessThan(oldIndex, 999, 'Are we stuck in infinite loop?');
        ngDevMode && assertLessThan(newIndex, 999, 'Are we stuck in infinite loop?');
        /** @type {?} */
        const oldValue = oldIndex < oldKeyValueArray.length ? oldKeyValueArray[oldIndex + 1] : undefined;
        /** @type {?} */
        const newValue = newIndex < newKeyValueArray.length ? newKeyValueArray[newIndex + 1] : undefined;
        /** @type {?} */
        let setKey = null;
        /** @type {?} */
        let setValue = undefined;
        if (oldKey === newKey) {
            // UPDATE: Keys are equal => new value is overwriting old value.
            oldIndex += 2;
            newIndex += 2;
            if (oldValue !== newValue) {
                setKey = newKey;
                setValue = newValue;
            }
        }
        else if (newKey === null || oldKey !== null && oldKey < (/** @type {?} */ (newKey))) {
            // DELETE: oldKey key is missing or we did not find the oldKey in the newValue
            // (because the keyValueArray is sorted and `newKey` is found later alphabetically).
            // `"background" < "color"` so we need to delete `"background"` because it is not found in the
            // new array.
            oldIndex += 2;
            setKey = oldKey;
        }
        else {
            // CREATE: newKey's is earlier alphabetically than oldKey's (or no oldKey) => we have new key.
            // `"color" > "background"` so we need to add `color` because it is in new array but not in
            // old array.
            ngDevMode && assertDefined(newKey, 'Expecting to have a valid key');
            newIndex += 2;
            setKey = newKey;
            setValue = newValue;
        }
        if (setKey !== null) {
            updateStyling(tView, tNode, lView, renderer, setKey, setValue, isClassBased, bindingIndex);
        }
        oldKey = oldIndex < oldKeyValueArray.length ? oldKeyValueArray[oldIndex] : null;
        newKey = newIndex < newKeyValueArray.length ? newKeyValueArray[newIndex] : null;
    }
}
/**
 * Update a simple (property name) styling.
 *
 * This function takes `prop` and updates the DOM to that value. The function takes the binding
 * value as well as binding priority into consideration to determine which value should be written
 * to DOM. (For example it may be determined that there is a higher priority overwrite which blocks
 * the DOM write, or if the value goes to `undefined` a lower priority overwrite may be consulted.)
 *
 * @param {?} tView Associated `TView.data` contains the linked list of binding priorities.
 * @param {?} tNode `TNode` where the binding is located.
 * @param {?} lView `LView` contains the values associated with other styling binding at this `TNode`.
 * @param {?} renderer Renderer to use if any updates.
 * @param {?} prop Either style property name or a class name.
 * @param {?} value Either style value for `prop` or `true`/`false` if `prop` is class.
 * @param {?} isClassBased `true` if `class` (`false` if `style`)
 * @param {?} bindingIndex Binding index of the binding.
 * @return {?}
 */
function updateStyling(tView, tNode, lView, renderer, prop, value, isClassBased, bindingIndex) {
    if (tNode.type !== 3 /* Element */) {
        // It is possible to have styling on non-elements (such as ng-container).
        // This is rare, but it does happen. In such a case, just ignore the binding.
        return;
    }
    /** @type {?} */
    const tData = tView.data;
    /** @type {?} */
    const tRange = (/** @type {?} */ (tData[bindingIndex + 1]));
    /** @type {?} */
    const higherPriorityValue = getTStylingRangeNextDuplicate(tRange) ?
        findStylingValue(tData, tNode, lView, prop, getTStylingRangeNext(tRange), isClassBased) :
        undefined;
    if (!isStylingValuePresent(higherPriorityValue)) {
        // We don't have a next duplicate, or we did not find a duplicate value.
        if (!isStylingValuePresent(value)) {
            // We should delete current value or restore to lower priority value.
            if (getTStylingRangePrevDuplicate(tRange)) {
                // We have a possible prev duplicate, let's retrieve it.
                value = findStylingValue(tData, null, lView, prop, bindingIndex, isClassBased);
            }
        }
        /** @type {?} */
        const rNode = (/** @type {?} */ (getNativeByIndex(getSelectedIndex(), lView)));
        applyStyling(renderer, isClassBased, rNode, prop, value);
    }
}
/**
 * Search for styling value with higher priority which is overwriting current value, or a
 * value of lower priority to which we should fall back if the value is `undefined`.
 *
 * When value is being applied at a location, related values need to be consulted.
 * - If there is a higher priority binding, we should be using that one instead.
 *   For example `<div  [style]="{color:exp1}" [style.color]="exp2">` change to `exp1`
 *   requires that we check `exp2` to see if it is set to value other than `undefined`.
 * - If there is a lower priority binding and we are changing to `undefined`
 *   For example `<div  [style]="{color:exp1}" [style.color]="exp2">` change to `exp2` to
 *   `undefined` requires that we check `exp1` (and static values) and use that as new value.
 *
 * NOTE: The styling stores two values.
 * 1. The raw value which came from the application is stored at `index + 0` location. (This value
 *    is used for dirty checking).
 * 2. The normalized value (converted to `KeyValueArray` if map and sanitized) is stored at `index +
 * 1`.
 *    The advantage of storing the sanitized value is that once the value is written we don't need
 *    to worry about sanitizing it later or keeping track of the sanitizer.
 *
 * @param {?} tData `TData` used for traversing the priority.
 * @param {?} tNode `TNode` to use for resolving static styling. Also controls search direction.
 *   - `TNode` search next and quit as soon as `isStylingValuePresent(value)` is true.
 *      If no value found consult `tNode.residualStyle`/`tNode.residualClass` for default value.
 *   - `null` search prev and go all the way to end. Return last value where
 *     `isStylingValuePresent(value)` is true.
 * @param {?} lView `LView` used for retrieving the actual values.
 * @param {?} prop Property which we are interested in.
 * @param {?} index Starting index in the linked list of styling bindings where the search should start.
 * @param {?} isClassBased `true` if `class` (`false` if `style`)
 * @return {?}
 */
function findStylingValue(tData, tNode, lView, prop, index, isClassBased) {
    // `TNode` to use for resolving static styling. Also controls search direction.
    //   - `TNode` search next and quit as soon as `isStylingValuePresent(value)` is true.
    //      If no value found consult `tNode.residualStyle`/`tNode.residualClass` for default value.
    //   - `null` search prev and go all the way to end. Return last value where
    //     `isStylingValuePresent(value)` is true.
    /** @type {?} */
    const isPrevDirection = tNode === null;
    /** @type {?} */
    let value = undefined;
    while (index > 0) {
        /** @type {?} */
        const rawKey = (/** @type {?} */ (tData[index]));
        /** @type {?} */
        const containsStatics = Array.isArray(rawKey);
        // Unwrap the key if we contain static values.
        /** @type {?} */
        const key = containsStatics ? ((/** @type {?} */ (rawKey)))[1] : rawKey;
        /** @type {?} */
        const isStylingMap = key === null;
        /** @type {?} */
        let valueAtLViewIndex = lView[index + 1];
        if (valueAtLViewIndex === NO_CHANGE) {
            // In firstUpdatePass the styling instructions create a linked list of styling.
            // On subsequent passes it is possible for a styling instruction to try to read a binding
            // which
            // has not yet executed. In that case we will find `NO_CHANGE` and we should assume that
            // we have `undefined` (or empty array in case of styling-map instruction) instead. This
            // allows the resolution to apply the value (which may later be overwritten when the
            // binding actually executes.)
            valueAtLViewIndex = isStylingMap ? EMPTY_ARRAY : undefined;
        }
        /** @type {?} */
        let currentValue = isStylingMap ? keyValueArrayGet(valueAtLViewIndex, prop) :
            key === prop ? valueAtLViewIndex : undefined;
        if (containsStatics && !isStylingValuePresent(currentValue)) {
            currentValue = keyValueArrayGet((/** @type {?} */ (rawKey)), prop);
        }
        if (isStylingValuePresent(currentValue)) {
            value = currentValue;
            if (isPrevDirection) {
                return value;
            }
        }
        /** @type {?} */
        const tRange = (/** @type {?} */ (tData[index + 1]));
        index = isPrevDirection ? getTStylingRangePrev(tRange) : getTStylingRangeNext(tRange);
    }
    if (tNode !== null) {
        // in case where we are going in next direction AND we did not find anything, we need to
        // consult residual styling
        /** @type {?} */
        let residual = isClassBased ? tNode.residualClasses : tNode.residualStyles;
        if (residual != null /** OR residual !=== undefined */) {
            value = keyValueArrayGet((/** @type {?} */ (residual)), prop);
        }
    }
    return value;
}
/**
 * Determines if the binding value should be used (or if the value is 'undefined' and hence priority
 * resolution should be used.)
 *
 * @param {?} value Binding style value.
 * @return {?}
 */
function isStylingValuePresent(value) {
    // Currently only `undefined` value is considered non-binding. That is `undefined` says I don't
    // have an opinion as to what this binding should be and you should consult other bindings by
    // priority to determine the valid value.
    // This is extracted into a single function so that we have a single place to control this.
    return value !== undefined;
}
/**
 * Sanitizes or adds suffix to the value.
 *
 * If value is `null`/`undefined` no suffix is added
 * @param {?} value
 * @param {?} suffixOrSanitizer
 * @return {?}
 */
function normalizeAndApplySuffixOrSanitizer(value, suffixOrSanitizer) {
    if (value == null /** || value === undefined */) {
        // do nothing
    }
    else if (typeof suffixOrSanitizer === 'function') {
        // sanitize the value.
        value = suffixOrSanitizer(value);
    }
    else if (typeof suffixOrSanitizer === 'string') {
        value = value + suffixOrSanitizer;
    }
    else if (typeof value === 'object') {
        value = stringify(unwrapSafeValue(value));
    }
    return value;
}
/**
 * Tests if the `TNode` has input shadow.
 *
 * An input shadow is when a directive steals (shadows) the input by using `\@Input('style')` or
 * `\@Input('class')` as input.
 *
 * @param {?} tNode `TNode` which we would like to see if it has shadow.
 * @param {?} isClassBased `true` if `class` (`false` if `style`)
 * @return {?}
 */
export function hasStylingInputShadow(tNode, isClassBased) {
    return (tNode.flags & (isClassBased ? 16 /* hasClassInput */ : 32 /* hasStyleInput */)) !== 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW5zdHJ1Y3Rpb25zL3N0eWxpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFZLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBQywwQkFBMEIsRUFBRSxlQUFlLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RixPQUFPLEVBQWdCLGdCQUFnQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDekYsT0FBTyxFQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHNCQUFzQixFQUFFLFNBQVMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNoRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBSzNDLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSw2QkFBNkIsRUFBRSxvQkFBb0IsRUFBRSw2QkFBNkIsRUFBNkIsTUFBTSx1QkFBdUIsQ0FBQztBQUMzSyxPQUFPLEVBQUMsYUFBYSxFQUFTLFFBQVEsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNqSyxPQUFPLEVBQUMscUJB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Q2xELHNCQUFzQjtRQUN0QixLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7U0FBTSxJQUFJLE9BQU8saUJBQWlCLEtBQUssUUFBUSxFQUFFO1FBQ2hELEtBQUssR0FBRyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7S0FDbkM7U0FBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUNwQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzNDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7Ozs7OztBQVlELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxLQUFZLEVBQUUsWUFBcUI7SUFDdkUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyx3QkFBMEIsQ0FBQyx1QkFBeUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7U2FmZVZhbHVlLCB1bndyYXBTYWZlVmFsdWV9IGZyb20gJy4uLy4uL3Nhbml0aXphdGlvbi9ieXBhc3MnO1xuaW1wb3J0IHtzdHlsZVByb3BOZWVkc1Nhbml0aXphdGlvbiwgybXJtXNhbml0aXplU3R5bGV9IGZyb20gJy4uLy4uL3Nhbml0aXphdGlvbi9zYW5pdGl6YXRpb24nO1xuaW1wb3J0IHtTdHlsZVNhbml0aXplRm59IGZyb20gJy4uLy4uL3Nhbml0aXphdGlvbi9zdHlsZV9zYW5pdGl6ZXInO1xuaW1wb3J0IHtLZXlWYWx1ZUFycmF5LCBrZXlWYWx1ZUFycmF5R2V0LCBrZXlWYWx1ZUFycmF5U2V0fSBmcm9tICcuLi8uLi91dGlsL2FycmF5X3V0aWxzJztcbmltcG9ydCB7YXNzZXJ0RGVmaW5lZCwgYXNzZXJ0RXF1YWwsIGFzc2VydExlc3NUaGFuLCBhc3NlcnROb3RFcXVhbCwgdGhyb3dFcnJvcn0gZnJvbSAnLi4vLi4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtFTVBUWV9BUlJBWX0gZnJvbSAnLi4vLi4vdXRpbC9lbXB0eSc7XG5pbXBvcnQge2NvbmNhdFN0cmluZ3NXaXRoU3BhY2UsIHN0cmluZ2lmeX0gZnJvbSAnLi4vLi4vdXRpbC9zdHJpbmdpZnknO1xuaW1wb3J0IHthc3NlcnRGaXJzdFVwZGF0ZVBhc3N9IGZyb20gJy4uL2Fzc2VydCc7XG5pbXBvcnQge2JpbmRpbmdVcGRhdGVkfSBmcm9tICcuLi9iaW5kaW5ncyc7XG5pbXBvcnQge0RpcmVjdGl2ZURlZn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kZWZpbml0aW9uJztcbmltcG9ydCB7QXR0cmlidXRlTWFya2VyLCBUQXR0cmlidXRlcywgVE5vZGUsIFROb2RlRmxhZ3MsIFROb2RlVHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7UkVsZW1lbnQsIFJlbmRlcmVyM30gZnJvbSAnLi4vaW50ZXJmYWNlcy9yZW5kZXJlcic7XG5pbXBvcnQge1Nhbml0aXplckZufSBmcm9tICcuLi9pbnRlcmZhY2VzL3Nhbml0aXphdGlvbic7XG5pbXBvcnQge2dldFRTdHlsaW5nUmFuZ2VOZXh0LCBnZXRUU3R5bGluZ1JhbmdlTmV4dER1cGxpY2F0ZSwgZ2V0VFN0eWxpbmdSYW5nZVByZXYsIGdldFRTdHlsaW5nUmFuZ2VQcmV2RHVwbGljYXRlLCBUU3R5bGluZ0tleSwgVFN0eWxpbmdSYW5nZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdHlsaW5nJztcbmltcG9ydCB7SEVBREVSX09GRlNFVCwgTFZpZXcsIFJFTkRFUkVSLCBURGF0YSwgVFZpZXd9IGZyb20gJy4uL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge2FwcGx5U3R5bGluZ30gZnJvbSAnLi4vbm9kZV9tYW5pcHVsYXRpb24nO1xuaW1wb3J0IHtnZXRDdXJyZW50RGlyZWN0aXZlRGVmLCBnZXRDdXJyZW50U3R5bGVTYW5pdGl6ZXIsIGdldExWaWV3LCBnZXRTZWxlY3RlZEluZGV4LCBnZXRUVmlldywgaW5jcmVtZW50QmluZGluZ0luZGV4LCBzZXRDdXJyZW50U3R5bGVTYW5pdGl6ZXJ9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7aW5zZXJ0VFN0eWxpbmdCaW5kaW5nfSBmcm9tICcuLi9zdHlsaW5nL3N0eWxlX2JpbmRpbmdfbGlzdCc7XG5pbXBvcnQge2dldExhc3RQYXJzZWRLZXksIGdldExhc3RQYXJzZWRWYWx1ZSwgcGFyc2VDbGFzc05hbWUsIHBhcnNlQ2xhc3NOYW1lTmV4dCwgcGFyc2VTdHlsZSwgcGFyc2VTdHlsZU5leHR9IGZyb20gJy4uL3N0eWxpbmcvc3R5bGluZ19wYXJzZXInO1xuaW1wb3J0IHtOT19DSEFOR0V9IGZyb20gJy4uL3Rva2Vucyc7XG5pbXBvcnQge2dldE5hdGl2ZUJ5SW5kZXh9IGZyb20gJy4uL3V0aWwvdmlld191dGlscyc7XG5cbmltcG9ydCB7c2V0RGlyZWN0aXZlSW5wdXRzV2hpY2hTaGFkb3dzU3R5bGluZ30gZnJvbSAnLi9wcm9wZXJ0eSc7XG5cblxuLyoqXG4gKiBTZXRzIHRoZSBjdXJyZW50IHN0eWxlIHNhbml0aXplciBmdW5jdGlvbiB3aGljaCB3aWxsIHRoZW4gYmUgdXNlZFxuICogd2l0aGluIGFsbCBmb2xsb3ctdXAgcHJvcCBhbmQgbWFwLWJhc2VkIHN0eWxlIGJpbmRpbmcgaW5zdHJ1Y3Rpb25zXG4gKiBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogTm90ZSB0aGF0IG9uY2Ugc3R5bGluZyBoYXMgYmVlbiBhcHBsaWVkIHRvIHRoZSBlbGVtZW50IChpLmUuIG9uY2VcbiAqIGBhZHZhbmNlKG4pYCBpcyBleGVjdXRlZCBvciB0aGUgaG9zdEJpbmRpbmdzL3RlbXBsYXRlIGZ1bmN0aW9uIGV4aXRzKVxuICogdGhlbiB0aGUgYWN0aXZlIGBzYW5pdGl6ZXJGbmAgd2lsbCBiZSBzZXQgdG8gYG51bGxgLiBUaGlzIG1lYW5zIHRoYXRcbiAqIG9uY2Ugc3R5bGluZyBpcyBhcHBsaWVkIHRvIGFub3RoZXIgZWxlbWVudCB0aGVuIGEgYW5vdGhlciBjYWxsIHRvXG4gKiBgc3R5bGVTYW5pdGl6ZXJgIHdpbGwgbmVlZCB0byBiZSBtYWRlLlxuICpcbiAqIEBwYXJhbSBzYW5pdGl6ZXJGbiBUaGUgc2FuaXRpemF0aW9uIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvXG4gKiAgICAgICBwcm9jZXNzIHN0eWxlIHByb3AvdmFsdWUgZW50cmllcy5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtXN0eWxlU2FuaXRpemVyKHNhbml0aXplcjogU3R5bGVTYW5pdGl6ZUZufG51bGwpOiB2b2lkIHtcbiAgc2V0Q3VycmVudFN0eWxlU2FuaXRpemVyKHNhbml0aXplcik7XG59XG5cbi8qKlxuICogVXBkYXRlIGEgc3R5bGUgYmluZGluZyBvbiBhbiBlbGVtZW50IHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxuICpcbiAqIElmIHRoZSBzdHlsZSB2YWx1ZSBpcyBmYWxzeSB0aGVuIGl0IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBlbGVtZW50XG4gKiAob3IgYXNzaWduZWQgYSBkaWZmZXJlbnQgdmFsdWUgZGVwZW5kaW5nIGlmIHRoZXJlIGFyZSBhbnkgc3R5bGVzIHBsYWNlZFxuICogb24gdGhlIGVsZW1lbnQgd2l0aCBgc3R5bGVNYXBgIG9yIGFueSBzdGF0aWMgc3R5bGVzIHRoYXQgYXJlXG4gKiBwcmVzZW50IGZyb20gd2hlbiB0aGUgZWxlbWVudCB3YXMgY3JlYXRlZCB3aXRoIGBzdHlsaW5nYCkuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBzdHlsaW5nIGVsZW1lbnQgaXMgdXBkYXRlZCBhcyBwYXJ0IG9mIGBzdHlsaW5nQXBwbHlgLlxuICpcbiAqIEBwYXJhbSBwcm9wIEEgdmFsaWQgQ1NTIHByb3BlcnR5LlxuICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSB0byB3cml0ZSAoYG51bGxgIG9yIGFuIGVtcHR5IHN0cmluZyB0byByZW1vdmUpLlxuICogQHBhcmFtIHN1ZmZpeCBPcHRpb25hbCBzdWZmaXguIFVzZWQgd2l0aCBzY2FsYXIgdmFsdWVzIHRvIGFkZCB1bml0IHN1Y2ggYXMgYHB4YC5cbiAqICAgICAgICBOb3RlIHRoYXQgd2hlbiBhIHN1ZmZpeCBpcyBwcm92aWRlZCB0aGVuIHRoZSB1bmRlcmx5aW5nIHNhbml0aXplciB3aWxsXG4gKiAgICAgICAgYmUgaWdub3JlZC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyB3aWxsIGFwcGx5IHRoZSBwcm92aWRlZCBzdHlsZSB2YWx1ZSB0byB0aGUgaG9zdCBlbGVtZW50IGlmIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkXG4gKiB3aXRoaW4gYSBob3N0IGJpbmRpbmcgZnVuY3Rpb24uXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVzdHlsZVByb3AoXG4gICAgcHJvcDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfG51bWJlcnxTYWZlVmFsdWV8dW5kZWZpbmVkfG51bGwsXG4gICAgc3VmZml4Pzogc3RyaW5nfG51bGwpOiB0eXBlb2YgybXJtXN0eWxlUHJvcCB7XG4gIGNoZWNrU3R5bGluZ1Byb3BlcnR5KHByb3AsIHZhbHVlLCBzdWZmaXgsIGZhbHNlKTtcbiAgcmV0dXJuIMm1ybVzdHlsZVByb3A7XG59XG5cbi8qKlxuICogVXBkYXRlIGEgY2xhc3MgYmluZGluZyBvbiBhbiBlbGVtZW50IHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxuICpcbiAqIFRoaXMgaW5zdHJ1Y3Rpb24gaXMgbWVhbnQgdG8gaGFuZGxlIHRoZSBgW2NsYXNzLmZvb109XCJleHBcImAgY2FzZSBhbmQsXG4gKiB0aGVyZWZvcmUsIHRoZSBjbGFzcyBiaW5kaW5nIGl0c2VsZiBtdXN0IGFscmVhZHkgYmUgYWxsb2NhdGVkIHVzaW5nXG4gKiBgc3R5bGluZ2Agd2l0aGluIHRoZSBjcmVhdGlvbiBibG9jay5cbiAqXG4gKiBAcGFyYW0gcHJvcCBBIHZhbGlkIENTUyBjbGFzcyAob25seSBvbmUpLlxuICogQHBhcmFtIHZhbHVlIEEgdHJ1ZS9mYWxzZSB2YWx1ZSB3aGljaCB3aWxsIHR1cm4gdGhlIGNsYXNzIG9uIG9yIG9mZi5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyB3aWxsIGFwcGx5IHRoZSBwcm92aWRlZCBjbGFzcyB2YWx1ZSB0byB0aGUgaG9zdCBlbGVtZW50IGlmIHRoaXMgZnVuY3Rpb25cbiAqIGlzIGNhbGxlZCB3aXRoaW4gYSBob3N0IGJpbmRpbmcgZnVuY3Rpb24uXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVjbGFzc1Byb3AoY2xhc3NOYW1lOiBzdHJpbmcsIHZhbHVlOiBib29sZWFufHVuZGVmaW5lZHxudWxsKTogdHlwZW9mIMm1ybVjbGFzc1Byb3Age1xuICBjaGVja1N0eWxpbmdQcm9wZXJ0eShjbGFzc05hbWUsIHZhbHVlLCBudWxsLCB0cnVlKTtcbiAgcmV0dXJuIMm1ybVjbGFzc1Byb3A7XG59XG5cblxuLyoqXG4gKiBVcGRhdGUgc3R5bGUgYmluZGluZ3MgdXNpbmcgYW4gb2JqZWN0IGxpdGVyYWwgb24gYW4gZWxlbWVudC5cbiAqXG4gKiBUaGlzIGluc3RydWN0aW9uIGlzIG1lYW50IHRvIGFwcGx5IHN0eWxpbmcgdmlhIHRoZSBgW3N0eWxlXT1cImV4cFwiYCB0ZW1wbGF0ZSBiaW5kaW5ncy5cbiAqIFdoZW4gc3R5bGVzIGFyZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50IHRoZXkgd2lsbCB0aGVuIGJlIHVwZGF0ZWQgd2l0aCByZXNwZWN0IHRvXG4gKiBhbnkgc3R5bGVzL2NsYXNzZXMgc2V0IHZpYSBgc3R5bGVQcm9wYC4gSWYgYW55IHN0eWxlcyBhcmUgc2V0IHRvIGZhbHN5XG4gKiB0aGVuIHRoZXkgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGVsZW1lbnQuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBzdHlsaW5nIGluc3RydWN0aW9uIHdpbGwgbm90IGJlIGFwcGxpZWQgdW50aWwgYHN0eWxpbmdBcHBseWAgaXMgY2FsbGVkLlxuICpcbiAqIEBwYXJhbSBzdHlsZXMgQSBrZXkvdmFsdWUgc3R5bGUgbWFwIG9mIHRoZSBzdHlsZXMgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4gKiAgICAgICAgQW55IG1pc3Npbmcgc3R5bGVzICh0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgYmVmb3JlaGFuZCkgd2lsbCBiZVxuICogICAgICAgIHJlbW92ZWQgKHVuc2V0KSBmcm9tIHRoZSBlbGVtZW50J3Mgc3R5bGluZy5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyB3aWxsIGFwcGx5IHRoZSBwcm92aWRlZCBzdHlsZU1hcCB2YWx1ZSB0byB0aGUgaG9zdCBlbGVtZW50IGlmIHRoaXMgZnVuY3Rpb25cbiAqIGlzIGNhbGxlZCB3aXRoaW4gYSBob3N0IGJpbmRpbmcuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVzdHlsZU1hcChzdHlsZXM6IHtbc3R5bGVOYW1lOiBzdHJpbmddOiBhbnl9fHN0cmluZ3x1bmRlZmluZWR8bnVsbCk6IHZvaWQge1xuICBjaGVja1N0eWxpbmdNYXAoc3R5bGVLZXlWYWx1ZUFycmF5U2V0LCBzdHlsZVN0cmluZ1BhcnNlciwgc3R5bGVzLCBmYWxzZSk7XG59XG5cblxuLyoqXG4gKiBQYXJzZSB0ZXh0IGFzIHN0eWxlIGFuZCBhZGQgdmFsdWVzIHRvIEtleVZhbHVlQXJyYXkuXG4gKlxuICogVGhpcyBjb2RlIGlzIHB1bGxlZCBvdXQgdG8gYSBzZXBhcmF0ZSBmdW5jdGlvbiBzbyB0aGF0IGl0IGNhbiBiZSB0cmVlIHNoYWtlbiBhd2F5IGlmIGl0IGlzIG5vdFxuICogbmVlZGVkLiBJdCBpcyBvbmx5IHJlZmVyZW5jZWQgZnJvbSBgybXJtXN0eWxlTWFwYC5cbiAqXG4gKiBAcGFyYW0ga2V5VmFsdWVBcnJheSBLZXlWYWx1ZUFycmF5IHRvIGFkZCBwYXJzZWQgdmFsdWVzIHRvLlxuICogQHBhcmFtIHRleHQgdGV4dCB0byBwYXJzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlU3RyaW5nUGFyc2VyKGtleVZhbHVlQXJyYXk6IEtleVZhbHVlQXJyYXk8YW55PiwgdGV4dDogc3RyaW5nKTogdm9pZCB7XG4gIGZvciAobGV0IGkgPSBwYXJzZVN0eWxlKHRleHQpOyBpID49IDA7IGkgPSBwYXJzZVN0eWxlTmV4dCh0ZXh0LCBpKSkge1xuICAgIHN0eWxlS2V5VmFsdWVBcnJheVNldChrZXlWYWx1ZUFycmF5LCBnZXRMYXN0UGFyc2VkS2V5KHRleHQpLCBnZXRMYXN0UGFyc2VkVmFsdWUodGV4dCkpO1xuICB9XG59XG5cblxuLyoqXG4gKiBVcGRhdGUgY2xhc3MgYmluZGluZ3MgdXNpbmcgYW4gb2JqZWN0IGxpdGVyYWwgb3IgY2xhc3Mtc3RyaW5nIG9uIGFuIGVsZW1lbnQuXG4gKlxuICogVGhpcyBpbnN0cnVjdGlvbiBpcyBtZWFudCB0byBhcHBseSBzdHlsaW5nIHZpYSB0aGUgYFtjbGFzc109XCJleHBcImAgdGVtcGxhdGUgYmluZGluZ3MuXG4gKiBXaGVuIGNsYXNzZXMgYXJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgdGhleSB3aWxsIHRoZW4gYmUgdXBkYXRlZCB3aXRoXG4gKiByZXNwZWN0IHRvIGFueSBzdHlsZXMvY2xhc3NlcyBzZXQgdmlhIGBjbGFzc1Byb3BgLiBJZiBhbnlcbiAqIGNsYXNzZXMgYXJlIHNldCB0byBmYWxzeSB0aGVuIHRoZXkgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGVsZW1lbnQuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBzdHlsaW5nIGluc3RydWN0aW9uIHdpbGwgbm90IGJlIGFwcGxpZWQgdW50aWwgYHN0eWxpbmdBcHBseWAgaXMgY2FsbGVkLlxuICogTm90ZSB0aGF0IHRoaXMgd2lsbCB0aGUgcHJvdmlkZWQgY2xhc3NNYXAgdmFsdWUgdG8gdGhlIGhvc3QgZWxlbWVudCBpZiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZFxuICogd2l0aGluIGEgaG9zdCBiaW5kaW5nLlxuICpcbiAqIEBwYXJhbSBjbGFzc2VzIEEga2V5L3ZhbHVlIG1hcCBvciBzdHJpbmcgb2YgQ1NTIGNsYXNzZXMgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuICogICAgICAgIGdpdmVuIGVsZW1lbnQuIEFueSBtaXNzaW5nIGNsYXNzZXMgKHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICogICAgICAgIGJlZm9yZWhhbmQpIHdpbGwgYmUgcmVtb3ZlZCAodW5zZXQpIGZyb20gdGhlIGVsZW1lbnQncyBsaXN0IG9mIENTUyBjbGFzc2VzLlxuICpcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1Y2xhc3NNYXAoY2xhc3Nlczoge1tjbGFzc05hbWU6IHN0cmluZ106IGJvb2xlYW58dW5kZWZpbmVkfG51bGx9fHN0cmluZ3x1bmRlZmluZWR8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsKTogdm9pZCB7XG4gIGNoZWNrU3R5bGluZ01hcChrZXlWYWx1ZUFycmF5U2V0LCBjbGFzc1N0cmluZ1BhcnNlciwgY2xhc3NlcywgdHJ1ZSk7XG59XG5cbi8qKlxuICogUGFyc2UgdGV4dCBhcyBjbGFzcyBhbmQgYWRkIHZhbHVlcyB0byBLZXlWYWx1ZUFycmF5LlxuICpcbiAqIFRoaXMgY29kZSBpcyBwdWxsZWQgb3V0IHRvIGEgc2VwYXJhdGUgZnVuY3Rpb24gc28gdGhhdCBpdCBjYW4gYmUgdHJlZSBzaGFrZW4gYXdheSBpZiBpdCBpcyBub3RcbiAqIG5lZWRlZC4gSXQgaXMgb25seSByZWZlcmVuY2VkIGZyb20gYMm1ybVjbGFzc01hcGAuXG4gKlxuICogQHBhcmFtIGtleVZhbHVlQXJyYXkgS2V5VmFsdWVBcnJheSB0byBhZGQgcGFyc2VkIHZhbHVlcyB0by5cbiAqIEBwYXJhbSB0ZXh0IHRleHQgdG8gcGFyc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc1N0cmluZ1BhcnNlcihrZXlWYWx1ZUFycmF5OiBLZXlWYWx1ZUFycmF5PGFueT4sIHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICBmb3IgKGxldCBpID0gcGFyc2VDbGFzc05hbWUodGV4dCk7IGkgPj0gMDsgaSA9IHBhcnNlQ2xhc3NOYW1lTmV4dCh0ZXh0LCBpKSkge1xuICAgIGtleVZhbHVlQXJyYXlTZXQoa2V5VmFsdWVBcnJheSwgZ2V0TGFzdFBhcnNlZEtleSh0ZXh0KSwgdHJ1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21tb24gY29kZSBiZXR3ZWVuIGDJtcm1Y2xhc3NQcm9wYCBhbmQgYMm1ybVzdHlsZVByb3BgLlxuICpcbiAqIEBwYXJhbSBwcm9wIHByb3BlcnR5IG5hbWUuXG4gKiBAcGFyYW0gdmFsdWUgYmluZGluZyB2YWx1ZS5cbiAqIEBwYXJhbSBzdWZmaXhPclNhbml0aXplciBzdWZmaXggb3Igc2FuaXRpemF0aW9uIGZ1bmN0aW9uXG4gKiBAcGFyYW0gaXNDbGFzc0Jhc2VkIGB0cnVlYCBpZiBgY2xhc3NgIGNoYW5nZSAoYGZhbHNlYCBpZiBgc3R5bGVgKVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdHlsaW5nUHJvcGVydHkoXG4gICAgcHJvcDogc3RyaW5nLCB2YWx1ZTogYW55fE5PX0NIQU5HRSwgc3VmZml4T3JTYW5pdGl6ZXI6IFNhbml0aXplckZufHN0cmluZ3x1bmRlZmluZWR8bnVsbCxcbiAgICBpc0NsYXNzQmFzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgY29uc3QgbFZpZXcgPSBnZXRMVmlldygpO1xuICBjb25zdCB0VmlldyA9IGdldFRWaWV3KCk7XG4gIC8vIFN0eWxpbmcgaW5zdHJ1Y3Rpb25zIHVzZSAyIHNsb3RzIHBlciBiaW5kaW5nLlxuICAvLyAxLiBvbmUgZm9yIHRoZSB2YWx1ZSAvIFRTdHlsaW5nS2V5XG4gIC8vIDIuIG9uZSBmb3IgdGhlIGludGVybWl0dGVudC12YWx1ZSAvIFRTdHlsaW5nUmFuZ2VcbiAgY29uc3QgYmluZGluZ0luZGV4ID0gaW5jcmVtZW50QmluZGluZ0luZGV4KDIpO1xuICBpZiAodFZpZXcuZmlyc3RVcGRhdGVQYXNzKSB7XG4gICAgc3R5bGluZ0ZpcnN0VXBkYXRlUGFzcyh0VmlldywgcHJvcCwgYmluZGluZ0luZGV4LCBpc0NsYXNzQmFzZWQpO1xuICB9XG4gIGlmICh2YWx1ZSAhPT0gTk9fQ0hBTkdFICYmIGJpbmRpbmdVcGRhdGVkKGxWaWV3LCBiaW5kaW5nSW5kZXgsIHZhbHVlKSkge1xuICAgIC8vIFRoaXMgaXMgYSB3b3JrIGFyb3VuZC4gT25jZSBQUiMzNDQ4MCBsYW5kcyB0aGUgc2FuaXRpemVyIGlzIHBhc3NlZCBleHBsaWNpdGx5IGFuZCB0aGlzIGxpbmVcbiAgICAvLyBjYW4gYmUgcmVtb3ZlZC5cbiAgICBsZXQgc3R5bGVTYW5pdGl6ZXI6IFN0eWxlU2FuaXRpemVGbnxudWxsO1xuICAgIGlmIChzdWZmaXhPclNhbml0aXplciA9PSBudWxsKSB7XG4gICAgICBpZiAoc3R5bGVTYW5pdGl6ZXIgPSBnZXRDdXJyZW50U3R5bGVTYW5pdGl6ZXIoKSkge1xuICAgICAgICBzdWZmaXhPclNhbml0aXplciA9IHN0eWxlU2FuaXRpemVyIGFzIGFueTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdE5vZGUgPSB0Vmlldy5kYXRhW2dldFNlbGVjdGVkSW5kZXgoKSArIEhFQURFUl9PRkZTRVRdIGFzIFROb2RlO1xuICAgIHVwZGF0ZVN0eWxpbmcoXG4gICAgICAgIHRWaWV3LCB0Tm9kZSwgbFZpZXcsIGxWaWV3W1JFTkRFUkVSXSwgcHJvcCxcbiAgICAgICAgbFZpZXdbYmluZGluZ0luZGV4ICsgMV0gPSBub3JtYWxpemVBbmRBcHBseVN1ZmZpeE9yU2FuaXRpemVyKHZhbHVlLCBzdWZmaXhPclNhbml0aXplciksXG4gICAgICAgIGlzQ2xhc3NCYXNlZCwgYmluZGluZ0luZGV4KTtcbiAgfVxufVxuXG4vKipcbiAqIENvbW1vbiBjb2RlIGJldHdlZW4gYMm1ybVjbGFzc01hcGAgYW5kIGDJtcm1c3R5bGVNYXBgLlxuICpcbiAqIEBwYXJhbSBrZXlWYWx1ZUFycmF5U2V0IChTZWUgYGtleVZhbHVlQXJyYXlTZXRgIGluIFwidXRpbC9hcnJheV91dGlsc1wiKSBHZXRzIHBhc3NlZCBpbiBhcyBhXG4gKiBmdW5jdGlvbiBzbyB0aGF0XG4gKiAgICAgICAgYHN0eWxlYCBjYW4gcGFzcyBpbiB2ZXJzaW9uIHdoaWNoIGRvZXMgc2FuaXRpemF0aW9uLiBUaGlzIGlzIGRvbmUgZm9yIHRyZWUgc2hha2luZ1xuICogICAgICAgIHB1cnBvc2VzLlxuICogQHBhcmFtIHN0cmluZ1BhcnNlciBQYXJzZXIgdXNlZCB0byBwYXJzZSBgdmFsdWVgIGlmIGBzdHJpbmdgLiAoUGFzc2VkIGluIGFzIGBzdHlsZWAgYW5kIGBjbGFzc2BcbiAqICAgICAgICBoYXZlIGRpZmZlcmVudCBwYXJzZXJzLilcbiAqIEBwYXJhbSB2YWx1ZSBib3VuZCB2YWx1ZSBmcm9tIGFwcGxpY2F0aW9uXG4gKiBAcGFyYW0gaXNDbGFzc0Jhc2VkIGB0cnVlYCBpZiBgY2xhc3NgIGNoYW5nZSAoYGZhbHNlYCBpZiBgc3R5bGVgKVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdHlsaW5nTWFwKFxuICAgIGtleVZhbHVlQXJyYXlTZXQ6IChrZXlWYWx1ZUFycmF5OiBLZXlWYWx1ZUFycmF5PGFueT4sIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB2b2lkLFxuICAgIHN0cmluZ1BhcnNlcjogKHN0eWxlS2V5VmFsdWVBcnJheTogS2V5VmFsdWVBcnJheTxhbnk+LCB0ZXh0OiBzdHJpbmcpID0+IHZvaWQsXG4gICAgdmFsdWU6IGFueXxOT19DSEFOR0UsIGlzQ2xhc3NCYXNlZDogYm9vbGVhbik6IHZvaWQge1xuICBjb25zdCB0VmlldyA9IGdldFRWaWV3KCk7XG4gIGNvbnN0IGJpbmRpbmdJbmRleCA9IGluY3JlbWVudEJpbmRpbmdJbmRleCgyKTtcbiAgaWYgKHRWaWV3LmZpcnN0VXBkYXRlUGFzcykge1xuICAgIHN0eWxpbmdGaXJzdFVwZGF0ZVBhc3ModFZpZXcsIG51bGwsIGJpbmRpbmdJbmRleCwgaXNDbGFzc0Jhc2VkKTtcbiAgfVxuICBjb25zdCBsVmlldyA9IGdldExWaWV3KCk7XG4gIGlmICh2YWx1ZSAhPT0gTk9fQ0hBTkdFICYmIGJpbmRpbmdVcGRhdGVkKGxWaWV3LCBiaW5kaW5nSW5kZXgsIHZhbHVlKSkge1xuICAgIC8vIGBnZXRTZWxlY3RlZEluZGV4KClgIHNob3VsZCBiZSBoZXJlIChyYXRoZXIgdGhhbiBpbiBpbnN0cnVjdGlvbikgc28gdGhhdCBpdCBpcyBndWFyZGVkIGJ5IHRoZVxuICAgIC8vIGlmIHNvIGFzIG5vdCB0byByZWFkIHVubmVjZXNzYXJpbHkuXG4gICAgY29uc3QgdE5vZGUgPSB0Vmlldy5kYXRhW2dldFNlbGVjdGVkSW5kZXgoKSArIEhFQURFUl9PRkZTRVRdIGFzIFROb2RlO1xuICAgIGlmIChoYXNTdHlsaW5nSW5wdXRTaGFkb3codE5vZGUsIGlzQ2xhc3NCYXNlZCkgJiYgIWlzSW5Ib3N0QmluZGluZ3ModFZpZXcsIGJpbmRpbmdJbmRleCkpIHtcbiAgICAgIGlmIChuZ0Rldk1vZGUpIHtcbiAgICAgICAgLy8gdmVyaWZ5IHRoYXQgaWYgd2UgYXJlIHNoYWRvd2luZyB0aGVuIGBURGF0YWAgaXMgYXBwcm9wcmlhdGVseSBtYXJrZWQgc28gdGhhdCB3ZSBza2lwXG4gICAgICAgIC8vIHByb2Nlc3NpbmcgdGhpcyBiaW5kaW5nIGluIHN0eWxpbmcgcmVzb2x1dGlvbi5cbiAgICAgICAgY29uc3QgdFN0eWxpbmdLZXkgPSB0Vmlldy5kYXRhW2JpbmRpbmdJbmRleF07XG4gICAgICAgIGFzc2VydEVxdWFsKFxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh0U3R5bGluZ0tleSkgPyB0U3R5bGluZ0tleVsxXSA6IHRTdHlsaW5nS2V5LCBmYWxzZSxcbiAgICAgICAgICAgICdTdHlsaW5nIGxpbmtlZCBsaXN0IHNoYWRvdyBpbnB1dCBzaG91bGQgYmUgbWFya2VkIGFzIFxcJ2ZhbHNlXFwnJyk7XG4gICAgICB9XG4gICAgICAvLyBWRSBkb2VzIG5vdCBjb25jYXRlbmF0ZSB0aGUgc3RhdGljIHBvcnRpb24gbGlrZSB3ZSBhcmUgZG9pbmcgaGVyZS5cbiAgICAgIC8vIEluc3RlYWQgVkUganVzdCBpZ25vcmVzIHRoZSBzdGF0aWMgY29tcGxldGVseSBpZiBkeW5hbWljIGJpbmRpbmcgaXMgcHJlc2VudC5cbiAgICAgIC8vIEJlY2F1c2Ugb2YgbG9jYWxpdHkgd2UgaGF2ZSBhbHJlYWR5IHNldCB0aGUgc3RhdGljIHBvcnRpb24gYmVjYXVzZSB3ZSBkb24ndCBrbm93IGlmIHRoZXJlXG4gICAgICAvLyBpcyBhIGR5bmFtaWMgcG9ydGlvbiB1bnRpbCBsYXRlci4gSWYgd2Ugd291bGQgaWdub3JlIHRoZSBzdGF0aWMgcG9ydGlvbiBpdCB3b3VsZCBsb29rIGxpa2VcbiAgICAgIC8vIHRoZSBiaW5kaW5nIGhhcyByZW1vdmVkIGl0LiBUaGlzIHdvdWxkIGNvbmZ1c2UgYFtuZ1N0eWxlXWAvYFtuZ0NsYXNzXWAgdG8gZG8gdGhlIHdyb25nXG4gICAgICAvLyB0aGluZyBhcyBpdCB3b3VsZCB0aGluayB0aGF0IHRoZSBzdGF0aWMgcG9ydGlvbiB3YXMgcmVtb3ZlZC4gRm9yIHRoaXMgcmVhc29uIHdlXG4gICAgICAvLyBjb25jYXRlbmF0ZSBpdCBzbyB0aGF0IGBbbmdTdHlsZV1gL2BbbmdDbGFzc11gICBjYW4gY29udGludWUgdG8gd29yayBvbiBjaGFuZ2VkLlxuICAgICAgbGV0IHN0YXRpY1ByZWZpeCA9IGlzQ2xhc3NCYXNlZCA/IHROb2RlLmNsYXNzZXNXaXRob3V0SG9zdCA6IHROb2RlLnN0eWxlc1dpdGhvdXRIb3N0O1xuICAgICAgbmdEZXZNb2RlICYmIGlzQ2xhc3NCYXNlZCA9PT0gZmFsc2UgJiYgc3RhdGljUHJlZml4ICE9PSBudWxsICYmXG4gICAgICAgICAgYXNzZXJ0RXF1YWwoXG4gICAgICAgICAgICAgIHN0YXRpY1ByZWZpeC5lbmRzV2l0aCgnOycpLCB0cnVlLCAnRXhwZWN0aW5nIHN0YXRpYyBwb3J0aW9uIHRvIGVuZCB3aXRoIFxcJztcXCcnKTtcbiAgICAgIGlmIChzdGF0aWNQcmVmaXggIT09IG51bGwpIHtcbiAgICAgICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgdGhhdCBmYWxzeSB2YWx1ZXMgb2YgYHZhbHVlYCBiZWNvbWUgZW1wdHkgc3RyaW5ncy5cbiAgICAgICAgdmFsdWUgPSBjb25jYXRTdHJpbmdzV2l0aFNwYWNlKHN0YXRpY1ByZWZpeCwgdmFsdWUgPyB2YWx1ZSA6ICcnKTtcbiAgICAgIH1cbiAgICAgIC8vIEdpdmVuIGA8ZGl2IFtzdHlsZV0gbXktZGlyPmAgc3VjaCB0aGF0IGBteS1kaXJgIGhhcyBgQElucHV0KCdzdHlsZScpYC5cbiAgICAgIC8vIFRoaXMgdGFrZXMgb3ZlciB0aGUgYFtzdHlsZV1gIGJpbmRpbmcuIChTYW1lIGZvciBgW2NsYXNzXWApXG4gICAgICBzZXREaXJlY3RpdmVJbnB1dHNXaGljaFNoYWRvd3NTdHlsaW5nKHRWaWV3LCB0Tm9kZSwgbFZpZXcsIHZhbHVlLCBpc0NsYXNzQmFzZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVTdHlsaW5nTWFwKFxuICAgICAgICAgIHRWaWV3LCB0Tm9kZSwgbFZpZXcsIGxWaWV3W1JFTkRFUkVSXSwgbFZpZXdbYmluZGluZ0luZGV4ICsgMV0sXG4gICAgICAgICAgbFZpZXdbYmluZGluZ0luZGV4ICsgMV0gPSB0b1N0eWxpbmdLZXlWYWx1ZUFycmF5KGtleVZhbHVlQXJyYXlTZXQsIHN0cmluZ1BhcnNlciwgdmFsdWUpLFxuICAgICAgICAgIGlzQ2xhc3NCYXNlZCwgYmluZGluZ0luZGV4KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZW4gdGhlIGJpbmRpbmcgaXMgaW4gYGhvc3RCaW5kaW5nc2Agc2VjdGlvblxuICpcbiAqIEBwYXJhbSB0VmlldyBDdXJyZW50IGBUVmlld2BcbiAqIEBwYXJhbSBiaW5kaW5nSW5kZXggaW5kZXggb2YgYmluZGluZyB3aGljaCB3ZSB3b3VsZCBsaWtlIGlmIGl0IGlzIGluIGBob3N0QmluZGluZ3NgXG4gKi9cbmZ1bmN0aW9uIGlzSW5Ib3N0QmluZGluZ3ModFZpZXc6IFRWaWV3LCBiaW5kaW5nSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAvLyBBbGwgaG9zdCBiaW5kaW5ncyBhcmUgcGxhY2VkIGFmdGVyIHRoZSBleHBhbmRvIHNlY3Rpb24uXG4gIHJldHVybiBiaW5kaW5nSW5kZXggPj0gdFZpZXcuZXhwYW5kb1N0YXJ0SW5kZXg7XG59XG5cbi8qKlxuICogQ29sbGVjdHMgdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiB0byBpbnNlcnQgdGhlIGJpbmRpbmcgaW50byBhIGxpbmtlZCBsaXN0IG9mIHN0eWxlIGJpbmRpbmdzXG4gKiB1c2luZyBgaW5zZXJ0VFN0eWxpbmdCaW5kaW5nYC5cbiAqXG4gKiBAcGFyYW0gdFZpZXcgYFRWaWV3YCB3aGVyZSB0aGUgYmluZGluZyBsaW5rZWQgbGlzdCB3aWxsIGJlIHN0b3JlZC5cbiAqIEBwYXJhbSB0U3R5bGluZ0tleSBQcm9wZXJ0eS9rZXkgb2YgdGhlIGJpbmRpbmcuXG4gKiBAcGFyYW0gYmluZGluZ0luZGV4IEluZGV4IG9mIGJpbmRpbmcgYXNzb2NpYXRlZCB3aXRoIHRoZSBgcHJvcGBcbiAqIEBwYXJhbSBpc0NsYXNzQmFzZWQgYHRydWVgIGlmIGBjbGFzc2AgY2hhbmdlIChgZmFsc2VgIGlmIGBzdHlsZWApXG4gKi9cbmZ1bmN0aW9uIHN0eWxpbmdGaXJzdFVwZGF0ZVBhc3MoXG4gICAgdFZpZXc6IFRWaWV3LCB0U3R5bGluZ0tleTogVFN0eWxpbmdLZXksIGJpbmRpbmdJbmRleDogbnVtYmVyLCBpc0NsYXNzQmFzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydEZpcnN0VXBkYXRlUGFzcyh0Vmlldyk7XG4gIGNvbnN0IHREYXRhID0gdFZpZXcuZGF0YTtcbiAgaWYgKHREYXRhW2JpbmRpbmdJbmRleCArIDFdID09PSBudWxsKSB7XG4gICAgLy8gVGhlIGFib3ZlIGNoZWNrIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHdlIGRvbid0IGNsZWFyIGZpcnN0IHVwZGF0ZSBwYXNzIHVudGlsIGZpcnN0IHN1Y2Nlc3NmdWxcbiAgICAvLyAobm8gZXhjZXB0aW9uKSB0ZW1wbGF0ZSBleGVjdXRpb24uIFRoaXMgcHJldmVudHMgdGhlIHN0eWxpbmcgaW5zdHJ1Y3Rpb24gZnJvbSBkb3VibGUgYWRkaW5nXG4gICAgLy8gaXRzZWxmIHRvIHRoZSBsaXN0LlxuICAgIC8vIGBnZXRTZWxlY3RlZEluZGV4KClgIHNob3VsZCBiZSBoZXJlIChyYXRoZXIgdGhhbiBpbiBpbnN0cnVjdGlvbikgc28gdGhhdCBpdCBpcyBndWFyZGVkIGJ5IHRoZVxuICAgIC8vIGlmIHNvIGFzIG5vdCB0byByZWFkIHVubmVjZXNzYXJpbHkuXG4gICAgY29uc3QgdE5vZGUgPSB0RGF0YVtnZXRTZWxlY3RlZEluZGV4KCkgKyBIRUFERVJfT0ZGU0VUXSBhcyBUTm9kZTtcbiAgICBjb25zdCBpc0hvc3RCaW5kaW5ncyA9IGlzSW5Ib3N0QmluZGluZ3ModFZpZXcsIGJpbmRpbmdJbmRleCk7XG4gICAgaWYgKGhhc1N0eWxpbmdJbnB1dFNoYWRvdyh0Tm9kZSwgaXNDbGFzc0Jhc2VkKSAmJiB0U3R5bGluZ0tleSA9PT0gbnVsbCAmJiAhaXNIb3N0QmluZGluZ3MpIHtcbiAgICAgIC8vIGB0U3R5bGluZ0tleSA9PT0gbnVsbGAgaW1wbGllcyB0aGF0IHdlIGFyZSBlaXRoZXIgYFtzdHlsZV1gIG9yIGBbY2xhc3NdYCBiaW5kaW5nLlxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBkaXJlY3RpdmUgd2hpY2ggdXNlcyBgQElucHV0KCdzdHlsZScpYCBvciBgQElucHV0KCdjbGFzcycpYCB0aGFuXG4gICAgICAvLyB3ZSBuZWVkIHRvIG5ldXRyYWxpemUgdGhpcyBiaW5kaW5nIHNpbmNlIHRoYXQgZGlyZWN0aXZlIGlzIHNoYWRvd2luZyBpdC5cbiAgICAgIC8vIFdlIHR1cm4gdGhpcyBpbnRvIGEgbm9vcCBieSBzZXR0aW5nIHRoZSBrZXkgdG8gYGZhbHNlYFxuICAgICAgdFN0eWxpbmdLZXkgPSBmYWxzZTtcbiAgICB9XG4gICAgdFN0eWxpbmdLZXkgPSB3cmFwSW5TdGF0aWNTdHlsaW5nS2V5KHREYXRhLCB0Tm9kZSwgdFN0eWxpbmdLZXksIGlzQ2xhc3NCYXNlZCk7XG4gICAgaW5zZXJ0VFN0eWxpbmdCaW5kaW5nKHREYXRhLCB0Tm9kZSwgdFN0eWxpbmdLZXksIGJpbmRpbmdJbmRleCwgaXNIb3N0QmluZGluZ3MsIGlzQ2xhc3NCYXNlZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGRzIHN0YXRpYyBzdHlsaW5nIGluZm9ybWF0aW9uIHRvIHRoZSBiaW5kaW5nIGlmIGFwcGxpY2FibGUuXG4gKlxuICogVGhlIGxpbmtlZCBsaXN0IG9mIHN0eWxlcyBub3Qgb25seSBzdG9yZXMgdGhlIGxpc3QgYW5kIGtleXMsIGJ1dCBhbHNvIHN0b3JlcyBzdGF0aWMgc3R5bGluZ1xuICogaW5mb3JtYXRpb24gb24gc29tZSBvZiB0aGUga2V5cy4gVGhpcyBmdW5jdGlvbiBkZXRlcm1pbmVzIGlmIHRoZSBrZXkgc2hvdWxkIGNvbnRhaW4gdGhlIHN0eWxpbmdcbiAqIGluZm9ybWF0aW9uIGFuZCBjb21wdXRlcyBpdC5cbiAqXG4gKiBTZWUgYFRTdHlsaW5nU3RhdGljYCBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBwYXJhbSB0RGF0YSBgVERhdGFgIHdoZXJlIHRoZSBsaW5rZWQgbGlzdCBpcyBzdG9yZWQuXG4gKiBAcGFyYW0gdE5vZGUgYFROb2RlYCBmb3Igd2hpY2ggdGhlIHN0eWxpbmcgaXMgYmVpbmcgY29tcHV0ZWQuXG4gKiBAcGFyYW0gc3R5bGluZ0tleSBgVFN0eWxpbmdLZXlQcmltaXRpdmVgIHdoaWNoIG1heSBuZWVkIHRvIGJlIHdyYXBwZWQgaW50byBgVFN0eWxpbmdLZXlgXG4gKiBAcGFyYW0gaXNDbGFzc0Jhc2VkIGB0cnVlYCBpZiBgY2xhc3NgIChgZmFsc2VgIGlmIGBzdHlsZWApXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwSW5TdGF0aWNTdHlsaW5nS2V5KFxuICAgIHREYXRhOiBURGF0YSwgdE5vZGU6IFROb2RlLCBzdHlsaW5nS2V5OiBUU3R5bGluZ0tleSwgaXNDbGFzc0Jhc2VkOiBib29sZWFuKTogVFN0eWxpbmdLZXkge1xuICBjb25zdCBob3N0RGlyZWN0aXZlRGVmID0gZ2V0Q3VycmVudERpcmVjdGl2ZURlZih0RGF0YSk7XG4gIGxldCByZXNpZHVhbCA9IGlzQ2xhc3NCYXNlZCA/IHROb2RlLnJlc2lkdWFsQ2xhc3NlcyA6IHROb2RlLnJlc2lkdWFsU3R5bGVzO1xuICBpZiAoaG9zdERpcmVjdGl2ZURlZiA9PT0gbnVsbCkge1xuICAgIC8vIFdlIGFyZSBpbiB0ZW1wbGF0ZSBub2RlLlxuICAgIC8vIElmIHRlbXBsYXRlIG5vZGUgYWxyZWFkeSBoYWQgc3R5bGluZyBpbnN0cnVjdGlvbiB0aGVuIGl0IGhhcyBhbHJlYWR5IGNvbGxlY3RlZCB0aGUgc3RhdGljXG4gICAgLy8gc3R5bGluZyBhbmQgdGhlcmUgaXMgbm8gbmVlZCB0byBjb2xsZWN0IHRoZW0gYWdhaW4uIFdlIGtub3cgdGhhdCB3ZSBhcmUgdGhlIGZpcnN0IHN0eWxpbmdcbiAgICAvLyBpbnN0cnVjdGlvbiBiZWNhdXNlIHRoZSBgVE5vZGUuKkJpbmRpbmdzYCBwb2ludHMgdG8gMCAobm90aGluZyBoYXMgYmVlbiBpbnNlcnRlZCB5ZXQpLlxuICAgIGNvbnN0IGlzRmlyc3RTdHlsaW5nSW5zdHJ1Y3Rpb25JblRlbXBsYXRlID1cbiAgICAgICAgKGlzQ2xhc3NCYXNlZCA/IHROb2RlLmNsYXNzQmluZGluZ3MgOiB0Tm9kZS5zdHlsZUJpbmRpbmdzKSBhcyBhbnkgYXMgbnVtYmVyID09PSAwO1xuICAgIGlmIChpc0ZpcnN0U3R5bGluZ0luc3RydWN0aW9uSW5UZW1wbGF0ZSkge1xuICAgICAgLy8gSXQgd291bGQgYmUgbmljZSB0byBiZSBhYmxlIHRvIGdldCB0aGUgc3RhdGljcyBmcm9tIGBtZXJnZUF0dHJzYCwgaG93ZXZlciwgYXQgdGhpcyBwb2ludFxuICAgICAgLy8gdGhleSBhcmUgYWxyZWFkeSBtZXJnZWQgYW5kIGl0IHdvdWxkIG5vdCBiZSBwb3NzaWJsZSB0byBmaWd1cmUgd2hpY2ggcHJvcGVydHkgYmVsb25ncyB3aGVyZVxuICAgICAgLy8gaW4gdGhlIHByaW9yaXR5LlxuICAgICAgc3R5bGluZ0tleSA9IGNvbGxlY3RTdHlsaW5nRnJvbURpcmVjdGl2ZXMobnVsbCwgdERhdGEsIHROb2RlLCBzdHlsaW5nS2V5LCBpc0NsYXNzQmFzZWQpO1xuICAgICAgc3R5bGluZ0tleSA9IGNvbGxlY3RTdHlsaW5nRnJvbVRBdHRycyhzdHlsaW5nS2V5LCB0Tm9kZS5hdHRycywgaXNDbGFzc0Jhc2VkKTtcbiAgICAgIC8vIFdlIGtub3cgdGhhdCBpZiB3ZSBoYXZlIHN0eWxpbmcgYmluZGluZyBpbiB0ZW1wbGF0ZSB3ZSBjYW4ndCBoYXZlIHJlc2lkdWFsLlxuICAgICAgcmVzaWR1YWwgPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBXZSBhcmUgaW4gaG9zdCBiaW5kaW5nIG5vZGUgYW5kIHRoZXJlIHdhcyBubyBiaW5kaW5nIGluc3RydWN0aW9uIGluIHRlbXBsYXRlIG5vZGUuXG4gICAgLy8gVGhpcyBtZWFucyB0aGF0IHdlIG5lZWQgdG8gY29tcHV0ZSB0aGUgcmVzaWR1YWwuXG4gICAgY29uc3QgZGlyZWN0aXZlU3R5bGluZ0xhc3QgPSB0Tm9kZS5kaXJlY3RpdmVTdHlsaW5nTGFzdDtcbiAgICBjb25zdCBpc0ZpcnN0U3R5bGluZ0luc3RydWN0aW9uSW5Ib3N0QmluZGluZyA9XG4gICAgICAgIGRpcmVjdGl2ZVN0eWxpbmdMYXN0ID09PSAtMSB8fCB0RGF0YVtkaXJlY3RpdmVTdHlsaW5nTGFzdF0gIT09IGhvc3REaXJlY3RpdmVEZWY7XG4gICAgaWYgKGlzRmlyc3RTdHlsaW5nSW5zdHJ1Y3Rpb25Jbkhvc3RCaW5kaW5nKSB7XG4gICAgICBzdHlsaW5nS2V5ID1cbiAgICAgICAgICBjb2xsZWN0U3R5bGluZ0Zyb21EaXJlY3RpdmVzKGhvc3REaXJlY3RpdmVEZWYsIHREYXRhLCB0Tm9kZSwgc3R5bGluZ0tleSwgaXNDbGFzc0Jhc2VkKTtcbiAgICAgIGlmIChyZXNpZHVhbCA9PT0gbnVsbCkge1xuICAgICAgICAvLyAtIElmIGBudWxsYCB0aGFuIGVpdGhlcjpcbiAgICAgICAgLy8gICAgLSBUZW1wbGF0ZSBzdHlsaW5nIGluc3RydWN0aW9uIGFscmVhZHkgcmFuIGFuZCBpdCBoYXMgY29uc3VtZWQgdGhlIHN0YXRpY1xuICAgICAgICAvLyAgICAgIHN0eWxpbmcgaW50byBpdHMgYFRTdHlsaW5nS2V5YCBhbmQgc28gdGhlcmUgaXMgbm8gbmVlZCB0byB1cGRhdGUgcmVzaWR1YWwuIEluc3RlYWRcbiAgICAgICAgLy8gICAgICB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgYFRTdHlsaW5nS2V5YCBhc3NvY2lhdGVkIHdpdGggdGhlIGZpcnN0IHRlbXBsYXRlIG5vZGVcbiAgICAgICAgLy8gICAgICBpbnN0cnVjdGlvbi4gT1JcbiAgICAgICAgLy8gICAgLSBTb21lIG90aGVyIHN0eWxpbmcgaW5zdHJ1Y3Rpb24gcmFuIGFuZCBkZXRlcm1pbmVkIHRoYXQgdGhlcmUgYXJlIG5vIHJlc2lkdWFsc1xuICAgICAgICBsZXQgdGVtcGxhdGVTdHlsaW5nS2V5ID0gZ2V0VGVtcGxhdGVIZWFkVFN0eWxpbmdLZXkodERhdGEsIHROb2RlLCBpc0NsYXNzQmFzZWQpO1xuICAgICAgICBpZiAodGVtcGxhdGVTdHlsaW5nS2V5ICE9PSB1bmRlZmluZWQgJiYgQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZVN0eWxpbmdLZXkpKSB7XG4gICAgICAgICAgLy8gT25seSByZWNvbXB1dGUgaWYgYHRlbXBsYXRlU3R5bGluZ0tleWAgaGFkIHN0YXRpYyB2YWx1ZXMuIChJZiBubyBzdGF0aWMgdmFsdWUgZm91bmRcbiAgICAgICAgICAvLyB0aGVuIHRoZXJlIGlzIG5vdGhpbmcgdG8gZG8gc2luY2UgdGhpcyBvcGVyYXRpb24gY2FuIG9ubHkgcHJvZHVjZSBsZXNzIHN0YXRpYyBrZXlzLCBub3RcbiAgICAgICAgICAvLyBtb3JlLilcbiAgICAgICAgICB0ZW1wbGF0ZVN0eWxpbmdLZXkgPSBjb2xsZWN0U3R5bGluZ0Zyb21EaXJlY3RpdmVzKFxuICAgICAgICAgICAgICBudWxsLCB0RGF0YSwgdE5vZGUsIHRlbXBsYXRlU3R5bGluZ0tleVsxXSAvKiB1bndyYXAgcHJldmlvdXMgc3RhdGljcyAqLyxcbiAgICAgICAgICAgICAgaXNDbGFzc0Jhc2VkKTtcbiAgICAgICAgICB0ZW1wbGF0ZVN0eWxpbmdLZXkgPVxuICAgICAgICAgICAgICBjb2xsZWN0U3R5bGluZ0Zyb21UQXR0cnModGVtcGxhdGVTdHlsaW5nS2V5LCB0Tm9kZS5hdHRycywgaXNDbGFzc0Jhc2VkKTtcbiAgICAgICAgICBzZXRUZW1wbGF0ZUhlYWRUU3R5bGluZ0tleSh0RGF0YSwgdE5vZGUsIGlzQ2xhc3NCYXNlZCwgdGVtcGxhdGVTdHlsaW5nS2V5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIHJlY29tcHV0ZSByZXNpZHVhbCBpZiBpdCBpcyBub3QgYG51bGxgLlxuICAgICAgICAvLyAtIElmIGV4aXN0aW5nIHJlc2lkdWFsIChpbXBsaWVzIHRoZXJlIHdhcyBubyB0ZW1wbGF0ZSBzdHlsaW5nKS4gVGhpcyBtZWFucyB0aGF0IHNvbWUgb2ZcbiAgICAgICAgLy8gICB0aGUgc3RhdGljcyBtYXkgaGF2ZSBtb3ZlZCBmcm9tIHRoZSByZXNpZHVhbCB0byB0aGUgYHN0eWxpbmdLZXlgIGFuZCBzbyB3ZSBoYXZlIHRvXG4gICAgICAgIC8vICAgcmVjb21wdXRlLlxuICAgICAgICAvLyAtIElmIGB1bmRlZmluZWRgIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2UgYXJlIHJ1bm5pbmcuXG4gICAgICAgIHJlc2lkdWFsID0gY29sbGVjdFJlc2lkdWFsKHREYXRhLCB0Tm9kZSwgaXNDbGFzc0Jhc2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHJlc2lkdWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICBpc0NsYXNzQmFzZWQgPyAodE5vZGUucmVzaWR1YWxDbGFzc2VzID0gcmVzaWR1YWwpIDogKHROb2RlLnJlc2lkdWFsU3R5bGVzID0gcmVzaWR1YWwpO1xuICB9XG4gIHJldHVybiBzdHlsaW5nS2V5O1xufVxuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBgVFN0eWxpbmdLZXlgIGZvciB0aGUgdGVtcGxhdGUgc3R5bGluZyBpbnN0cnVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIG5lZWRlZCBzaW5jZSBgaG9zdEJpbmRpbmdgIHN0eWxpbmcgaW5zdHJ1Y3Rpb25zIGFyZSBpbnNlcnRlZCBhZnRlciB0aGUgdGVtcGxhdGVcbiAqIGluc3RydWN0aW9uLiBXaGlsZSB0aGUgdGVtcGxhdGUgaW5zdHJ1Y3Rpb24gbmVlZHMgdG8gdXBkYXRlIHRoZSByZXNpZHVhbCBpbiBgVE5vZGVgIHRoZVxuICogYGhvc3RCaW5kaW5nYCBpbnN0cnVjdGlvbnMgbmVlZCB0byB1cGRhdGUgdGhlIGBUU3R5bGluZ0tleWAgb2YgdGhlIHRlbXBsYXRlIGluc3RydWN0aW9uIGJlY2F1c2VcbiAqIHRoZSB0ZW1wbGF0ZSBpbnN0cnVjdGlvbiBpcyBkb3duc3RyZWFtIGZyb20gdGhlIGBob3N0QmluZGluZ3NgIGluc3RydWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0gdERhdGEgYFREYXRhYCB3aGVyZSB0aGUgbGlua2VkIGxpc3QgaXMgc3RvcmVkLlxuICogQHBhcmFtIHROb2RlIGBUTm9kZWAgZm9yIHdoaWNoIHRoZSBzdHlsaW5nIGlzIGJlaW5nIGNvbXB1dGVkLlxuICogQHBhcmFtIGlzQ2xhc3NCYXNlZCBgdHJ1ZWAgaWYgYGNsYXNzYCAoYGZhbHNlYCBpZiBgc3R5bGVgKVxuICogQHJldHVybiBgVFN0eWxpbmdLZXlgIGlmIGZvdW5kIG9yIGB1bmRlZmluZWRgIGlmIG5vdCBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gZ2V0VGVtcGxhdGVIZWFkVFN0eWxpbmdLZXkodERhdGE6IFREYXRhLCB0Tm9kZTogVE5vZGUsIGlzQ2xhc3NCYXNlZDogYm9vbGVhbik6IFRTdHlsaW5nS2V5fFxuICAgIHVuZGVmaW5lZCB7XG4gIGNvbnN0IGJpbmRpbmdzID0gaXNDbGFzc0Jhc2VkID8gdE5vZGUuY2xhc3NCaW5kaW5ncyA6IHROb2RlLnN0eWxlQmluZGluZ3M7XG4gIGlmIChnZXRUU3R5bGluZ1JhbmdlTmV4dChiaW5kaW5ncykgPT09IDApIHtcbiAgICAvLyBUaGVyZSBkb2VzIG5vdCBzZWVtIHRvIGJlIGEgc3R5bGluZyBpbnN0cnVjdGlvbiBpbiB0aGUgYHRlbXBsYXRlYC5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiB0RGF0YVtnZXRUU3R5bGluZ1JhbmdlUHJldihiaW5kaW5ncyldIGFzIFRTdHlsaW5nS2V5O1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgYFRTdHlsaW5nS2V5YCBvZiB0aGUgZmlyc3QgdGVtcGxhdGUgaW5zdHJ1Y3Rpb24gaW4gYFROb2RlYC5cbiAqXG4gKiBMb2dpY2FsbHkgYGhvc3RCaW5kaW5nc2Agc3R5bGluZyBpbnN0cnVjdGlvbnMgYXJlIG9mIGxvd2VyIHByaW9yaXR5IHRoYW4gdGhhdCBvZiB0aGUgdGVtcGxhdGUuXG4gKiBIb3dldmVyLCB0aGV5IGV4ZWN1dGUgYWZ0ZXIgdGhlIHRlbXBsYXRlIHN0eWxpbmcgaW5zdHJ1Y3Rpb25zLiBUaGlzIG1lYW5zIHRoYXQgdGhleSBnZXQgaW5zZXJ0ZWRcbiAqIGluIGZyb250IG9mIHRoZSB0ZW1wbGF0ZSBzdHlsaW5nIGluc3RydWN0aW9ucy5cbiAqXG4gKiBJZiB3ZSBoYXZlIGEgdGVtcGxhdGUgc3R5bGluZyBpbnN0cnVjdGlvbiBhbmQgYSBuZXcgYGhvc3RCaW5kaW5nc2Agc3R5bGluZyBpbnN0cnVjdGlvbiBpc1xuICogZXhlY3V0ZWQgaXQgbWVhbnMgdGhhdCBpdCBtYXkgbmVlZCB0byBzdGVhbCBzdGF0aWMgZmllbGRzIGZyb20gdGhlIHRlbXBsYXRlIGluc3RydWN0aW9uLiBUaGlzXG4gKiBtZXRob2QgYWxsb3dzIHVzIHRvIHVwZGF0ZSB0aGUgZmlyc3QgdGVtcGxhdGUgaW5zdHJ1Y3Rpb24gYFRTdHlsaW5nS2V5YCB3aXRoIGEgbmV3IHZhbHVlLlxuICpcbiAqIEFzc3VtZTpcbiAqIGBgYFxuICogPGRpdiBteS1kaXIgc3R5bGU9XCJjb2xvcjogcmVkXCIgW3N0eWxlLmNvbG9yXT1cInRtcGxFeHBcIj48L2Rpdj5cbiAqXG4gKiBARGlyZWN0aXZlKHtcbiAqICAgaG9zdDoge1xuICogICAgICdzdHlsZSc6ICd3aWR0aDogMTAwcHgnLFxuICogICAgICdbc3R5bGUuY29sb3JdJzogJ2RpckV4cCcsXG4gKiAgIH1cbiAqIH0pXG4gKiBjbGFzcyBNeURpciB7fVxuICogYGBgXG4gKlxuICogd2hlbiBgW3N0eWxlLmNvbG9yXT1cInRtcGxFeHBcImAgZXhlY3V0ZXMgaXQgY3JlYXRlcyB0aGlzIGRhdGEgc3RydWN0dXJlLlxuICogYGBgXG4gKiAgWycnLCAnY29sb3InLCAnY29sb3InLCAncmVkJywgJ3dpZHRoJywgJzEwMHB4J10sXG4gKiBgYGBcbiAqXG4gKiBUaGUgcmVhc29uIGZvciB0aGlzIGlzIHRoYXQgdGhlIHRlbXBsYXRlIGluc3RydWN0aW9uIGRvZXMgbm90IGtub3cgaWYgdGhlcmUgYXJlIHN0eWxpbmdcbiAqIGluc3RydWN0aW9ucyBhbmQgbXVzdCBhc3N1bWUgdGhhdCB0aGVyZSBhcmUgbm9uZSBhbmQgbXVzdCBjb2xsZWN0IGFsbCBvZiB0aGUgc3RhdGljIHN0eWxpbmcuXG4gKiAoYm90aFxuICogYGNvbG9yJyBhbmQgJ3dpZHRoYClcbiAqXG4gKiBXaGVuIGAnW3N0eWxlLmNvbG9yXSc6ICdkaXJFeHAnLGAgZXhlY3V0ZXMgd2UgbmVlZCB0byBpbnNlcnQgYSBuZXcgZGF0YSBpbnRvIHRoZSBsaW5rZWQgbGlzdC5cbiAqIGBgYFxuICogIFsnJywgJ2NvbG9yJywgJ3dpZHRoJywgJzEwMHB4J10sICAvLyBuZXdseSBpbnNlcnRlZFxuICogIFsnJywgJ2NvbG9yJywgJ2NvbG9yJywgJ3JlZCcsICd3aWR0aCcsICcxMDBweCddLCAvLyB0aGlzIGlzIHdyb25nXG4gKiBgYGBcbiAqXG4gKiBOb3RpY2UgdGhhdCB0aGUgdGVtcGxhdGUgc3RhdGljcyBpcyBub3cgd3JvbmcgYXMgaXQgaW5jb3JyZWN0bHkgY29udGFpbnMgYHdpZHRoYCBzbyB3ZSBuZWVkIHRvXG4gKiB1cGRhdGUgaXQgbGlrZSBzbzpcbiAqIGBgYFxuICogIFsnJywgJ2NvbG9yJywgJ3dpZHRoJywgJzEwMHB4J10sXG4gKiAgWycnLCAnY29sb3InLCAnY29sb3InLCAncmVkJ10sICAgIC8vIFVQREFURVxuICogYGBgXG4gKlxuICogQHBhcmFtIHREYXRhIGBURGF0YWAgd2hlcmUgdGhlIGxpbmtlZCBsaXN0IGlzIHN0b3JlZC5cbiAqIEBwYXJhbSB0Tm9kZSBgVE5vZGVgIGZvciB3aGljaCB0aGUgc3R5bGluZyBpcyBiZWluZyBjb21wdXRlZC5cbiAqIEBwYXJhbSBpc0NsYXNzQmFzZWQgYHRydWVgIGlmIGBjbGFzc2AgKGBmYWxzZWAgaWYgYHN0eWxlYClcbiAqIEBwYXJhbSB0U3R5bGluZ0tleSBOZXcgYFRTdHlsaW5nS2V5YCB3aGljaCBpcyByZXBsYWNpbmcgdGhlIG9sZCBvbmUuXG4gKi9cbmZ1bmN0aW9uIHNldFRlbXBsYXRlSGVhZFRTdHlsaW5nS2V5KFxuICAgIHREYXRhOiBURGF0YSwgdE5vZGU6IFROb2RlLCBpc0NsYXNzQmFzZWQ6IGJvb2xlYW4sIHRTdHlsaW5nS2V5OiBUU3R5bGluZ0tleSk6IHZvaWQge1xuICBjb25zdCBiaW5kaW5ncyA9IGlzQ2xhc3NCYXNlZCA/IHROb2RlLmNsYXNzQmluZGluZ3MgOiB0Tm9kZS5zdHlsZUJpbmRpbmdzO1xuICBuZ0Rldk1vZGUgJiZcbiAgICAgIGFzc2VydE5vdEVxdWFsKFxuICAgICAgICAgIGdldFRTdHlsaW5nUmFuZ2VOZXh0KGJpbmRpbmdzKSwgMCxcbiAgICAgICAgICAnRXhwZWN0aW5nIHRvIGhhdmUgYXQgbGVhc3Qgb25lIHRlbXBsYXRlIHN0eWxpbmcgYmluZGluZy4nKTtcbiAgdERhdGFbZ2V0VFN0eWxpbmdSYW5nZVByZXYoYmluZGluZ3MpXSA9IHRTdHlsaW5nS2V5O1xufVxuXG4vKipcbiAqIENvbGxlY3QgYWxsIHN0YXRpYyB2YWx1ZXMgYWZ0ZXIgdGhlIGN1cnJlbnQgYFROb2RlLmRpcmVjdGl2ZVN0eWxpbmdMYXN0YCBpbmRleC5cbiAqXG4gKiBDb2xsZWN0IHRoZSByZW1haW5pbmcgc3R5bGluZyBpbmZvcm1hdGlvbiB3aGljaCBoYXMgbm90IHlldCBiZWVuIGNvbGxlY3RlZCBieSBhbiBleGlzdGluZ1xuICogc3R5bGluZyBpbnN0cnVjdGlvbi5cbiAqXG4gKiBAcGFyYW0gdERhdGEgYFREYXRhYCB3aGVyZSB0aGUgYERpcmVjdGl2ZURlZnNgIGFyZSBzdG9yZWQuXG4gKiBAcGFyYW0gdE5vZGUgYFROb2RlYCB3aGljaCBjb250YWlucyB0aGUgZGlyZWN0aXZlIHJhbmdlLlxuICogQHBhcmFtIGlzQ2xhc3NCYXNlZCBgdHJ1ZWAgaWYgYGNsYXNzYCAoYGZhbHNlYCBpZiBgc3R5bGVgKVxuICovXG5mdW5jdGlvbiBjb2xsZWN0UmVzaWR1YWwodERhdGE6IFREYXRhLCB0Tm9kZTogVE5vZGUsIGlzQ2xhc3NCYXNlZDogYm9vbGVhbik6IEtleVZhbHVlQXJyYXk8YW55PnxcbiAgICBudWxsIHtcbiAgbGV0IHJlc2lkdWFsOiBLZXlWYWx1ZUFycmF5PGFueT58bnVsbHx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGNvbnN0IGRpcmVjdGl2ZUVuZCA9IHROb2RlLmRpcmVjdGl2ZUVuZDtcbiAgbmdEZXZNb2RlICYmXG4gICAgICBhc3NlcnROb3RFcXVhbChcbiAgICAgICAgICB0Tm9kZS5kaXJlY3RpdmVTdHlsaW5nTGFzdCwgLTEsXG4gICAgICAgICAgJ0J5IHRoZSB0aW1lIHRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgbGVhc3Qgb25lIGhvc3RCaW5kaW5ncy1ub2RlIHN0eWxpbmcgaW5zdHJ1Y3Rpb24gbXVzdCBoYXZlIGV4ZWN1dGVkLicpO1xuICAvLyBXZSBhZGQgYDEgKyB0Tm9kZS5kaXJlY3RpdmVTdGFydGAgYmVjYXVzZSB3ZSBuZWVkIHRvIHNraXAgdGhlIGN1cnJlbnQgZGlyZWN0aXZlIChhcyB3ZSBhcmVcbiAgLy8gY29sbGVjdGluZyB0aGluZ3MgYWZ0ZXIgdGhlIGxhc3QgYGhvc3RCaW5kaW5nc2AgZGlyZWN0aXZlIHdoaWNoIGhhZCBhIHN0eWxpbmcgaW5zdHJ1Y3Rpb24uKVxuICBmb3IgKGxldCBpID0gMSArIHROb2RlLmRpcmVjdGl2ZVN0eWxpbmdMYXN0OyBpIDwgZGlyZWN0aXZlRW5kOyBpKyspIHtcbiAgICBjb25zdCBhdHRycyA9ICh0RGF0YVtpXSBhcyBEaXJlY3RpdmVEZWY8YW55PikuaG9zdEF0dHJzO1xuICAgIHJlc2lkdWFsID0gY29sbGVjdFN0eWxpbmdGcm9tVEF0dHJzKHJlc2lkdWFsLCBhdHRycywgaXNDbGFzc0Jhc2VkKSBhcyBLZXlWYWx1ZUFycmF5PGFueT58IG51bGw7XG4gIH1cbiAgcmV0dXJuIGNvbGxlY3RTdHlsaW5nRnJvbVRBdHRycyhyZXNpZHVhbCwgdE5vZGUuYXR0cnMsIGlzQ2xhc3NCYXNlZCkgYXMgS2V5VmFsdWVBcnJheTxhbnk+fCBudWxsO1xufVxuXG4vKipcbiAqIENvbGxlY3QgdGhlIHN0YXRpYyBzdHlsaW5nIGluZm9ybWF0aW9uIHdpdGggbG93ZXIgcHJpb3JpdHkgdGhhbiBgaG9zdERpcmVjdGl2ZURlZmAuXG4gKlxuICogKFRoaXMgaXMgb3Bwb3NpdGUgb2YgcmVzaWR1YWwgc3R5bGluZy4pXG4gKlxuICogQHBhcmFtIGhvc3REaXJlY3RpdmVEZWYgYERpcmVjdGl2ZURlZmAgZm9yIHdoaWNoIHdlIHdhbnQgdG8gY29sbGVjdCBsb3dlciBwcmlvcml0eSBzdGF0aWNcbiAqICAgICAgICBzdHlsaW5nLiAoT3IgYG51bGxgIGlmIHRlbXBsYXRlIHN0eWxpbmcpXG4gKiBAcGFyYW0gdERhdGEgYFREYXRhYCB3aGVyZSB0aGUgbGlua2VkIGxpc3QgaXMgc3RvcmVkLlxuICogQHBhcmFtIHROb2RlIGBUTm9kZWAgZm9yIHdoaWNoIHRoZSBzdHlsaW5nIGlzIGJlaW5nIGNvbXB1dGVkLlxuICogQHBhcmFtIHN0eWxpbmdLZXkgRXhpc3RpbmcgYFRTdHlsaW5nS2V5YCB0byB1cGRhdGUgb3Igd3JhcC5cbiAqIEBwYXJhbSBpc0NsYXNzQmFzZWQgYHRydWVgIGlmIGBjbGFzc2AgKGBmYWxzZWAgaWYgYHN0eWxlYClcbiAqL1xuZnVuY3Rpb24gY29sbGVjdFN0eWxpbmdGcm9tRGlyZWN0aXZlcyhcbiAgICBob3N0RGlyZWN0aXZlRGVmOiBEaXJlY3RpdmVEZWY8YW55PnxudWxsLCB0RGF0YTogVERhdGEsIHROb2RlOiBUTm9kZSwgc3R5bGluZ0tleTogVFN0eWxpbmdLZXksXG4gICAgaXNDbGFzc0Jhc2VkOiBib29sZWFuKTogVFN0eWxpbmdLZXkge1xuICAvLyBXZSBuZWVkIHRvIGxvb3AgYmVjYXVzZSB0aGVyZSBjYW4gYmUgZGlyZWN0aXZlcyB3aGljaCBoYXZlIGBob3N0QXR0cnNgIGJ1dCBkb24ndCBoYXZlXG4gIC8vIGBob3N0QmluZGluZ3NgIHNvIHRoaXMgbG9vcCBjYXRjaGVzIHVwIHRvIHRoZSBjdXJyZW50IGRpcmVjdGl2ZS4uXG4gIGxldCBjdXJyZW50RGlyZWN0aXZlOiBEaXJlY3RpdmVEZWY8YW55PnxudWxsID0gbnVsbDtcbiAgY29uc3QgZGlyZWN0aXZlRW5kID0gdE5vZGUuZGlyZWN0aXZlRW5kO1xuICBsZXQgZGlyZWN0aXZlU3R5bGluZ0xhc3QgPSB0Tm9kZS5kaXJlY3RpdmVTdHlsaW5nTGFzdDtcbiAgaWYgKGRpcmVjdGl2ZVN0eWxpbmdMYXN0ID09PSAtMSkge1xuICAgIGRpcmVjdGl2ZVN0eWxpbmdMYXN0ID0gdE5vZGUuZGlyZWN0aXZlU3RhcnQ7XG4gIH0gZWxzZSB7XG4gICAgZGlyZWN0aXZlU3R5bGluZ0xhc3QrKztcbiAgfVxuICB3aGlsZSAoZGlyZWN0aXZlU3R5bGluZ0xhc3QgPCBkaXJlY3RpdmVFbmQpIHtcbiAgICBjdXJyZW50RGlyZWN0aXZlID0gdERhdGFbZGlyZWN0aXZlU3R5bGluZ0xhc3RdIGFzIERpcmVjdGl2ZURlZjxhbnk+O1xuICAgIG5nRGV2TW9kZSAmJiBhc3NlcnREZWZpbmVkKGN1cnJlbnREaXJlY3RpdmUsICdleHBlY3RlZCB0byBiZSBkZWZpbmVkJyk7XG4gICAgc3R5bGluZ0tleSA9IGNvbGxlY3RTdHlsaW5nRnJvbVRBdHRycyhzdHlsaW5nS2V5LCBjdXJyZW50RGlyZWN0aXZlLmhvc3RBdHRycywgaXNDbGFzc0Jhc2VkKTtcbiAgICBpZiAoY3VycmVudERpcmVjdGl2ZSA9PT0gaG9zdERpcmVjdGl2ZURlZikgYnJlYWs7XG4gICAgZGlyZWN0aXZlU3R5bGluZ0xhc3QrKztcbiAgfVxuICBpZiAoaG9zdERpcmVjdGl2ZURlZiAhPT0gbnVsbCkge1xuICAgIC8vIHdlIG9ubHkgYWR2YW5jZSB0aGUgc3R5bGluZyBjdXJzb3IgaWYgd2UgYXJlIGNvbGxlY3RpbmcgZGF0YSBmcm9tIGhvc3QgYmluZGluZ3MuXG4gICAgLy8gVGVtcGxhdGUgZXhlY3V0ZXMgYmVmb3JlIGhvc3QgYmluZGluZ3MgYW5kIHNvIGlmIHdlIHdvdWxkIHVwZGF0ZSB0aGUgaW5kZXgsXG4gICAgLy8gaG9zdCBiaW5kaW5ncyB3b3VsZCBub3QgZ2V0IHRoZWlyIHN0YXRpY3MuXG4gICAgdE5vZGUuZGlyZWN0aXZlU3R5bGluZ0xhc3QgPSBkaXJlY3RpdmVTdHlsaW5nTGFzdDtcbiAgfVxuICByZXR1cm4gc3R5bGluZ0tleTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGBUQXR0cnNgIGludG8gYFRTdHlsaW5nU3RhdGljYC5cbiAqXG4gKiBAcGFyYW0gc3R5bGluZ0tleSBleGlzdGluZyBgVFN0eWxpbmdLZXlgIHRvIHVwZGF0ZSBvciB3cmFwLlxuICogQHBhcmFtIGF0dHJzIGBUQXR0cmlidXRlc2AgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSBpc0NsYXNzQmFzZWQgYHRydWVgIGlmIGBjbGFzc2AgKGBmYWxzZWAgaWYgYHN0eWxlYClcbiAqL1xuZnVuY3Rpb24gY29sbGVjdFN0eWxpbmdGcm9tVEF0dHJzKFxuICAgIHN0eWxpbmdLZXk6IFRTdHlsaW5nS2V5fHVuZGVmaW5lZCwgYXR0cnM6IFRBdHRyaWJ1dGVzfG51bGwsXG4gICAgaXNDbGFzc0Jhc2VkOiBib29sZWFuKTogVFN0eWxpbmdLZXkge1xuICBjb25zdCBkZXNpcmVkTWFya2VyID0gaXNDbGFzc0Jhc2VkID8gQXR0cmlidXRlTWFya2VyLkNsYXNzZXMgOiBBdHRyaWJ1dGVNYXJrZXIuU3R5bGVzO1xuICBsZXQgY3VycmVudE1hcmtlciA9IEF0dHJpYnV0ZU1hcmtlci5JbXBsaWNpdEF0dHJpYnV0ZXM7XG4gIGlmIChhdHRycyAhPT0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBhdHRyc1tpXSBhcyBudW1iZXIgfCBzdHJpbmc7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIGN1cnJlbnRNYXJrZXIgPSBpdGVtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRNYXJrZXIgPT09IGRlc2lyZWRNYXJrZXIpIHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3R5bGluZ0tleSkpIHtcbiAgICAgICAgICAgIHN0eWxpbmdLZXkgPSBzdHlsaW5nS2V5ID09PSB1bmRlZmluZWQgPyBbXSA6IFsnJywgc3R5bGluZ0tleV0gYXMgYW55O1xuICAgICAgICAgIH1cbiAgICAgICAgICBrZXlWYWx1ZUFycmF5U2V0KFxuICAgICAgICAgICAgICBzdHlsaW5nS2V5IGFzIEtleVZhbHVlQXJyYXk8YW55PiwgaXRlbSwgaXNDbGFzc0Jhc2VkID8gdHJ1ZSA6IGF0dHJzWysraV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsaW5nS2V5ID09PSB1bmRlZmluZWQgPyBudWxsIDogc3R5bGluZ0tleTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHVzZXIgaW5wdXQgdG8gYEtleVZhbHVlQXJyYXlgLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgdXNlciBpbnB1dCB3aGljaCBjb3VsZCBiZSBgc3RyaW5nYCwgT2JqZWN0IGxpdGVyYWwsIG9yIGl0ZXJhYmxlIGFuZCBjb252ZXJ0c1xuICogaXQgaW50byBhIGNvbnNpc3RlbnQgcmVwcmVzZW50YXRpb24uIFRoZSBvdXRwdXQgb2YgdGhpcyBpcyBgS2V5VmFsdWVBcnJheWAgKHdoaWNoIGlzIGFuIGFycmF5XG4gKiB3aGVyZVxuICogZXZlbiBpbmRleGVzIGNvbnRhaW4ga2V5cyBhbmQgb2RkIGluZGV4ZXMgY29udGFpbiB2YWx1ZXMgZm9yIHRob3NlIGtleXMpLlxuICpcbiAqIFRoZSBhZHZhbnRhZ2Ugb2YgY29udmVydGluZyB0byBgS2V5VmFsdWVBcnJheWAgaXMgdGhhdCB3ZSBjYW4gcGVyZm9ybSBkaWZmIGluIGFuIGlucHV0XG4gKiBpbmRlcGVuZGVudFxuICogd2F5LlxuICogKGllIHdlIGNhbiBjb21wYXJlIGBmb28gYmFyYCB0byBgWydiYXInLCAnYmF6J10gYW5kIGRldGVybWluZSBhIHNldCBvZiBjaGFuZ2VzIHdoaWNoIG5lZWQgdG8gYmVcbiAqIGFwcGxpZWQpXG4gKlxuICogVGhlIGZhY3QgdGhhdCBgS2V5VmFsdWVBcnJheWAgaXMgc29ydGVkIGlzIHZlcnkgaW1wb3J0YW50IGJlY2F1c2UgaXQgYWxsb3dzIHVzIHRvIGNvbXB1dGUgdGhlXG4gKiBkaWZmZXJlbmNlIGluIGxpbmVhciBmYXNoaW9uIHdpdGhvdXQgdGhlIG5lZWQgdG8gYWxsb2NhdGUgYW55IGFkZGl0aW9uYWwgZGF0YS5cbiAqXG4gKiBGb3IgZXhhbXBsZSBpZiB3ZSBrZXB0IHRoaXMgYXMgYSBgTWFwYCB3ZSB3b3VsZCBoYXZlIHRvIGl0ZXJhdGUgb3ZlciBwcmV2aW91cyBgTWFwYCB0byBkZXRlcm1pbmVcbiAqIHdoaWNoIHZhbHVlcyBuZWVkIHRvIGJlIGRlbGV0ZWQsIG92ZXIgdGhlIG5ldyBgTWFwYCB0byBkZXRlcm1pbmUgYWRkaXRpb25zLCBhbmQgd2Ugd291bGQgaGF2ZSB0b1xuICoga2VlcCBhZGRpdGlvbmFsIGBNYXBgIHRvIGtlZXAgdHJhY2sgb2YgZHVwbGljYXRlcyBvciBpdGVtcyB3aGljaCBoYXZlIG5vdCB5ZXQgYmVlbiB2aXNpdGVkLlxuICpcbiAqIEBwYXJhbSBrZXlWYWx1ZUFycmF5U2V0IChTZWUgYGtleVZhbHVlQXJyYXlTZXRgIGluIFwidXRpbC9hcnJheV91dGlsc1wiKSBHZXRzIHBhc3NlZCBpbiBhcyBhXG4gKiBmdW5jdGlvbiBzbyB0aGF0XG4gKiAgICAgICAgYHN0eWxlYCBjYW4gcGFzcyBpbiB2ZXJzaW9uIHdoaWNoIGRvZXMgc2FuaXRpemF0aW9uLiBUaGlzIGlzIGRvbmUgZm9yIHRyZWUgc2hha2luZ1xuICogICAgICAgIHB1cnBvc2VzLlxuICogQHBhcmFtIHN0cmluZ1BhcnNlciBUaGUgcGFyc2VyIGlzIHBhc3NlZCBpbiBzbyB0aGF0IGl0IHdpbGwgYmUgdHJlZSBzaGFrYWJsZS4gU2VlXG4gKiAgICAgICAgYHN0eWxlU3RyaW5nUGFyc2VyYCBhbmQgYGNsYXNzU3RyaW5nUGFyc2VyYFxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBwYXJzZS9jb252ZXJ0IHRvIGBLZXlWYWx1ZUFycmF5YFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9TdHlsaW5nS2V5VmFsdWVBcnJheShcbiAgICBrZXlWYWx1ZUFycmF5U2V0OiAoa2V5VmFsdWVBcnJheTogS2V5VmFsdWVBcnJheTxhbnk+LCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZCxcbiAgICBzdHJpbmdQYXJzZXI6IChzdHlsZUtleVZhbHVlQXJyYXk6IEtleVZhbHVlQXJyYXk8YW55PiwgdGV4dDogc3RyaW5nKSA9PiB2b2lkLFxuICAgIHZhbHVlOiBzdHJpbmd8c3RyaW5nW118e1trZXk6IHN0cmluZ106IGFueX18U2FmZVZhbHVlfG51bGx8dW5kZWZpbmVkKTogS2V5VmFsdWVBcnJheTxhbnk+IHtcbiAgaWYgKHZhbHVlID09IG51bGwgLyp8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkICovIHx8IHZhbHVlID09PSAnJykgcmV0dXJuIEVNUFRZX0FSUkFZIGFzIGFueTtcbiAgY29uc3Qgc3R5bGVLZXlWYWx1ZUFycmF5OiBLZXlWYWx1ZUFycmF5PGFueT4gPSBbXSBhcyBhbnk7XG4gIGNvbnN0IHVud3JhcHBlZFZhbHVlID0gdW53cmFwU2FmZVZhbHVlKHZhbHVlKSBhcyBzdHJpbmcgfCBzdHJpbmdbXSB8IHtba2V5OiBzdHJpbmddOiBhbnl9O1xuICBpZiAoQXJyYXkuaXNBcnJheSh1bndyYXBwZWRWYWx1ZSkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVud3JhcHBlZFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlWYWx1ZUFycmF5U2V0KHN0eWxlS2V5VmFsdWVBcnJheSwgdW53cmFwcGVkVmFsdWVbaV0sIHRydWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdW53cmFwcGVkVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdW53cmFwcGVkVmFsdWUpIHtcbiAgICAgIGlmICh1bndyYXBwZWRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGtleVZhbHVlQXJyYXlTZXQoc3R5bGVLZXlWYWx1ZUFycmF5LCBrZXksIHVud3JhcHBlZFZhbHVlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdW53cmFwcGVkVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nUGFyc2VyKHN0eWxlS2V5VmFsdWVBcnJheSwgdW53cmFwcGVkVmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIG5nRGV2TW9kZSAmJlxuICAgICAgICB0aHJvd0Vycm9yKCdVbnN1cHBvcnRlZCBzdHlsaW5nIHR5cGUgJyArIHR5cGVvZiB1bndyYXBwZWRWYWx1ZSArICc6ICcgKyB1bndyYXBwZWRWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHN0eWxlS2V5VmFsdWVBcnJheTtcbn1cblxuLyoqXG4gKiBTZXQgYSBgdmFsdWVgIGZvciBhIGBrZXlgIHRha2luZyBzdHlsZSBzYW5pdGl6YXRpb24gaW50byBhY2NvdW50LlxuICpcbiAqIFNlZTogYGtleVZhbHVlQXJyYXlTZXRgIGZvciBkZXRhaWxzXG4gKlxuICogQHBhcmFtIGtleVZhbHVlQXJyYXkgS2V5VmFsdWVBcnJheSB0byBhZGQgdG8uXG4gKiBAcGFyYW0ga2V5IFN0eWxlIGtleSB0byBhZGQuIChUaGlzIGtleSB3aWxsIGJlIGNoZWNrZWQgaWYgaXQgbmVlZHMgc2FuaXRpemF0aW9uKVxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgKElmIGtleSBuZWVkcyBzYW5pdGl6YXRpb24gaXQgd2lsbCBiZSBzYW5pdGl6ZWQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZUtleVZhbHVlQXJyYXlTZXQoa2V5VmFsdWVBcnJheTogS2V5VmFsdWVBcnJheTxhbnk+LCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICBpZiAoc3R5bGVQcm9wTmVlZHNTYW5pdGl6YXRpb24oa2V5KSkge1xuICAgIHZhbHVlID0gybXJtXNhbml0aXplU3R5bGUodmFsdWUpO1xuICB9XG4gIGtleVZhbHVlQXJyYXlTZXQoa2V5VmFsdWVBcnJheSwga2V5LCB2YWx1ZSk7XG59XG5cbi8qKlxuICogVXBkYXRlIG1hcCBiYXNlZCBzdHlsaW5nLlxuICpcbiAqIE1hcCBiYXNlZCBzdHlsaW5nIGNvdWxkIGJlIGFueXRoaW5nIHdoaWNoIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgYmluZGluZy4gRm9yIGV4YW1wbGUgYHN0cmluZ2AsXG4gKiBvciBvYmplY3QgbGl0ZXJhbC4gRGVhbGluZyB3aXRoIGFsbCBvZiB0aGVzZSB0eXBlcyB3b3VsZCBjb21wbGljYXRlIHRoZSBsb2dpYyBzb1xuICogaW5zdGVhZCB0aGlzIGZ1bmN0aW9uIGV4cGVjdHMgdGhhdCB0aGUgY29tcGxleCBpbnB1dCBpcyBmaXJzdCBjb252ZXJ0ZWQgaW50byBub3JtYWxpemVkXG4gKiBgS2V5VmFsdWVBcnJheWAuIFRoZSBhZHZhbnRhZ2Ugb2Ygbm9ybWFsaXphdGlvbiBpcyB0aGF0IHdlIGdldCB0aGUgdmFsdWVzIHNvcnRlZCwgd2hpY2ggbWFrZXMgaXRcbiAqIHZlcnkgY2hlYXAgdG8gY29tcHV0ZSBkZWx0YXMgYmV0d2VlbiB0aGUgcHJldmlvdXMgYW5kIGN1cnJlbnQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHRWaWV3IEFzc29jaWF0ZWQgYFRWaWV3LmRhdGFgIGNvbnRhaW5zIHRoZSBsaW5rZWQgbGlzdCBvZiBiaW5kaW5nIHByaW9yaXRpZXMuXG4gKiBAcGFyYW0gdE5vZGUgYFROb2RlYCB3aGVyZSB0aGUgYmluZGluZyBpcyBsb2NhdGVkLlxuICogQHBhcmFtIGxWaWV3IGBMVmlld2AgY29udGFpbnMgdGhlIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggb3RoZXIgc3R5bGluZyBiaW5kaW5nIGF0IHRoaXMgYFROb2RlYC5cbiAqIEBwYXJhbSByZW5kZXJlciBSZW5kZXJlciB0byB1c2UgaWYgYW55IHVwZGF0ZXMuXG4gKiBAcGFyYW0gb2xkS2V5VmFsdWVBcnJheSBQcmV2aW91cyB2YWx1ZSByZXByZXNlbnRlZCBhcyBgS2V5VmFsdWVBcnJheWBcbiAqIEBwYXJhbSBuZXdLZXlWYWx1ZUFycmF5IEN1cnJlbnQgdmFsdWUgcmVwcmVzZW50ZWQgYXMgYEtleVZhbHVlQXJyYXlgXG4gKiBAcGFyYW0gaXNDbGFzc0Jhc2VkIGB0cnVlYCBpZiBgY2xhc3NgIChgZmFsc2VgIGlmIGBzdHlsZWApXG4gKiBAcGFyYW0gYmluZGluZ0luZGV4IEJpbmRpbmcgaW5kZXggb2YgdGhlIGJpbmRpbmcuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVN0eWxpbmdNYXAoXG4gICAgdFZpZXc6IFRWaWV3LCB0Tm9kZTogVE5vZGUsIGxWaWV3OiBMVmlldywgcmVuZGVyZXI6IFJlbmRlcmVyMyxcbiAgICBvbGRLZXlWYWx1ZUFycmF5OiBLZXlWYWx1ZUFycmF5PGFueT4sIG5ld0tleVZhbHVlQXJyYXk6IEtleVZhbHVlQXJyYXk8YW55PixcbiAgICBpc0NsYXNzQmFzZWQ6IGJvb2xlYW4sIGJpbmRpbmdJbmRleDogbnVtYmVyKSB7XG4gIGlmIChvbGRLZXlWYWx1ZUFycmF5IGFzIEtleVZhbHVlQXJyYXk8YW55PnwgTk9fQ0hBTkdFID09PSBOT19DSEFOR0UpIHtcbiAgICAvLyBPbiBmaXJzdCBleGVjdXRpb24gdGhlIG9sZEtleVZhbHVlQXJyYXkgaXMgTk9fQ0hBTkdFID0+IHRyZWF0IGl0IGFzIGVtcHR5IEtleVZhbHVlQXJyYXkuXG4gICAgb2xkS2V5VmFsdWVBcnJheSA9IEVNUFRZX0FSUkFZIGFzIGFueTtcbiAgfVxuICBsZXQgb2xkSW5kZXggPSAwO1xuICBsZXQgbmV3SW5kZXggPSAwO1xuICBsZXQgb2xkS2V5OiBzdHJpbmd8bnVsbCA9IDAgPCBvbGRLZXlWYWx1ZUFycmF5Lmxlbmd0aCA/IG9sZEtleVZhbHVlQXJyYXlbMF0gOiBudWxsO1xuICBsZXQgbmV3S2V5OiBzdHJpbmd8bnVsbCA9IDAgPCBuZXdLZXlWYWx1ZUFycmF5Lmxlbmd0aCA/IG5ld0tleVZhbHVlQXJyYXlbMF0gOiBudWxsO1xuICB3aGlsZSAob2xkS2V5ICE9PSBudWxsIHx8IG5ld0tleSAhPT0gbnVsbCkge1xuICAgIG5nRGV2TW9kZSAmJiBhc3NlcnRMZXNzVGhhbihvbGRJbmRleCwgOTk5LCAnQXJlIHdlIHN0dWNrIGluIGluZmluaXRlIGxvb3A/Jyk7XG4gICAgbmdEZXZNb2RlICYmIGFzc2VydExlc3NUaGFuKG5ld0luZGV4LCA5OTksICdBcmUgd2Ugc3R1Y2sgaW4gaW5maW5pdGUgbG9vcD8nKTtcbiAgICBjb25zdCBvbGRWYWx1ZSA9XG4gICAgICAgIG9sZEluZGV4IDwgb2xkS2V5VmFsdWVBcnJheS5sZW5ndGggPyBvbGRLZXlWYWx1ZUFycmF5W29sZEluZGV4ICsgMV0gOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgbmV3VmFsdWUgPVxuICAgICAgICBuZXdJbmRleCA8IG5ld0tleVZhbHVlQXJyYXkubGVuZ3RoID8gbmV3S2V5VmFsdWVBcnJheVtuZXdJbmRleCArIDFdIDogdW5kZWZpbmVkO1xuICAgIGxldCBzZXRLZXk6IHN0cmluZ3xudWxsID0gbnVsbDtcbiAgICBsZXQgc2V0VmFsdWU6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBpZiAob2xkS2V5ID09PSBuZXdLZXkpIHtcbiAgICAgIC8vIFVQREFURTogS2V5cyBhcmUgZXF1YWwgPT4gbmV3IHZhbHVlIGlzIG92ZXJ3cml0aW5nIG9sZCB2YWx1ZS5cbiAgICAgIG9sZEluZGV4ICs9IDI7XG4gICAgICBuZXdJbmRleCArPSAyO1xuICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICBzZXRLZXkgPSBuZXdLZXk7XG4gICAgICAgIHNldFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuZXdLZXkgPT09IG51bGwgfHwgb2xkS2V5ICE9PSBudWxsICYmIG9sZEtleSA8IG5ld0tleSEpIHtcbiAgICAgIC8vIERFTEVURTogb2xkS2V5IGtleSBpcyBtaXNzaW5nIG9yIHdlIGRpZCBub3QgZmluZCB0aGUgb2xkS2V5IGluIHRoZSBuZXdWYWx1ZVxuICAgICAgLy8gKGJlY2F1c2UgdGhlIGtleVZhbHVlQXJyYXkgaXMgc29ydGVkIGFuZCBgbmV3S2V5YCBpcyBmb3VuZCBsYXRlciBhbHBoYWJldGljYWxseSkuXG4gICAgICAvLyBgXCJiYWNrZ3JvdW5kXCIgPCBcImNvbG9yXCJgIHNvIHdlIG5lZWQgdG8gZGVsZXRlIGBcImJhY2tncm91bmRcImAgYmVjYXVzZSBpdCBpcyBub3QgZm91bmQgaW4gdGhlXG4gICAgICAvLyBuZXcgYXJyYXkuXG4gICAgICBvbGRJbmRleCArPSAyO1xuICAgICAgc2V0S2V5ID0gb2xkS2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDUkVBVEU6IG5ld0tleSdzIGlzIGVhcmxpZXIgYWxwaGFiZXRpY2FsbHkgdGhhbiBvbGRLZXkncyAob3Igbm8gb2xkS2V5KSA9PiB3ZSBoYXZlIG5ldyBrZXkuXG4gICAgICAvLyBgXCJjb2xvclwiID4gXCJiYWNrZ3JvdW5kXCJgIHNvIHdlIG5lZWQgdG8gYWRkIGBjb2xvcmAgYmVjYXVzZSBpdCBpcyBpbiBuZXcgYXJyYXkgYnV0IG5vdCBpblxuICAgICAgLy8gb2xkIGFycmF5LlxuICAgICAgbmdEZXZNb2RlICYmIGFzc2VydERlZmluZWQobmV3S2V5LCAnRXhwZWN0aW5nIHRvIGhhdmUgYSB2YWxpZCBrZXknKTtcbiAgICAgIG5ld0luZGV4ICs9IDI7XG4gICAgICBzZXRLZXkgPSBuZXdLZXk7XG4gICAgICBzZXRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgICBpZiAoc2V0S2V5ICE9PSBudWxsKSB7XG4gICAgICB1cGRhdGVTdHlsaW5nKHRWaWV3LCB0Tm9kZSwgbFZpZXcsIHJlbmRlcmVyLCBzZXRLZXksIHNldFZhbHVlLCBpc0NsYXNzQmFzZWQsIGJpbmRpbmdJbmRleCk7XG4gICAgfVxuICAgIG9sZEtleSA9IG9sZEluZGV4IDwgb2xkS2V5VmFsdWVBcnJheS5sZW5ndGggPyBvbGRLZXlWYWx1ZUFycmF5W29sZEluZGV4XSA6IG51bGw7XG4gICAgbmV3S2V5ID0gbmV3SW5kZXggPCBuZXdLZXlWYWx1ZUFycmF5Lmxlbmd0aCA/IG5ld0tleVZhbHVlQXJyYXlbbmV3SW5kZXhdIDogbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFVwZGF0ZSBhIHNpbXBsZSAocHJvcGVydHkgbmFtZSkgc3R5bGluZy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGBwcm9wYCBhbmQgdXBkYXRlcyB0aGUgRE9NIHRvIHRoYXQgdmFsdWUuIFRoZSBmdW5jdGlvbiB0YWtlcyB0aGUgYmluZGluZ1xuICogdmFsdWUgYXMgd2VsbCBhcyBiaW5kaW5nIHByaW9yaXR5IGludG8gY29uc2lkZXJhdGlvbiB0byBkZXRlcm1pbmUgd2hpY2ggdmFsdWUgc2hvdWxkIGJlIHdyaXR0ZW5cbiAqIHRvIERPTS4gKEZvciBleGFtcGxlIGl0IG1heSBiZSBkZXRlcm1pbmVkIHRoYXQgdGhlcmUgaXMgYSBoaWdoZXIgcHJpb3JpdHkgb3ZlcndyaXRlIHdoaWNoIGJsb2Nrc1xuICogdGhlIERPTSB3cml0ZSwgb3IgaWYgdGhlIHZhbHVlIGdvZXMgdG8gYHVuZGVmaW5lZGAgYSBsb3dlciBwcmlvcml0eSBvdmVyd3JpdGUgbWF5IGJlIGNvbnN1bHRlZC4pXG4gKlxuICogQHBhcmFtIHRWaWV3IEFzc29jaWF0ZWQgYFRWaWV3LmRhdGFgIGNvbnRhaW5zIHRoZSBsaW5rZWQgbGlzdCBvZiBiaW5kaW5nIHByaW9yaXRpZXMuXG4gKiBAcGFyYW0gdE5vZGUgYFROb2RlYCB3aGVyZSB0aGUgYmluZGluZyBpcyBsb2NhdGVkLlxuICogQHBhcmFtIGxWaWV3IGBMVmlld2AgY29udGFpbnMgdGhlIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggb3RoZXIgc3R5bGluZyBiaW5kaW5nIGF0IHRoaXMgYFROb2RlYC5cbiAqIEBwYXJhbSByZW5kZXJlciBSZW5kZXJlciB0byB1c2UgaWYgYW55IHVwZGF0ZXMuXG4gKiBAcGFyYW0gcHJvcCBFaXRoZXIgc3R5bGUgcHJvcGVydHkgbmFtZSBvciBhIGNsYXNzIG5hbWUuXG4gKiBAcGFyYW0gdmFsdWUgRWl0aGVyIHN0eWxlIHZhbHVlIGZvciBgcHJvcGAgb3IgYHRydWVgL2BmYWxzZWAgaWYgYHByb3BgIGlzIGNsYXNzLlxuICogQHBhcmFtIGlzQ2xhc3NCYXNlZCBgdHJ1ZWAgaWYgYGNsYXNzYCAoYGZhbHNlYCBpZiBgc3R5bGVgKVxuICogQHBhcmFtIGJpbmRpbmdJbmRleCBCaW5kaW5nIGluZGV4IG9mIHRoZSBiaW5kaW5nLlxuICovXG5mdW5jdGlvbiB1cGRhdGVTdHlsaW5nKFxuICAgIHRWaWV3OiBUVmlldywgdE5vZGU6IFROb2RlLCBsVmlldzogTFZpZXcsIHJlbmRlcmVyOiBSZW5kZXJlcjMsIHByb3A6IHN0cmluZyxcbiAgICB2YWx1ZTogc3RyaW5nfHVuZGVmaW5lZHxudWxsfGJvb2xlYW4sIGlzQ2xhc3NCYXNlZDogYm9vbGVhbiwgYmluZGluZ0luZGV4OiBudW1iZXIpIHtcbiAgaWYgKHROb2RlLnR5cGUgIT09IFROb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgLy8gSXQgaXMgcG9zc2libGUgdG8gaGF2ZSBzdHlsaW5nIG9uIG5vbi1lbGVtZW50cyAoc3VjaCBhcyBuZy1jb250YWluZXIpLlxuICAgIC8vIFRoaXMgaXMgcmFyZSwgYnV0IGl0IGRvZXMgaGFwcGVuLiBJbiBzdWNoIGEgY2FzZSwganVzdCBpZ25vcmUgdGhlIGJpbmRpbmcuXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHREYXRhID0gdFZpZXcuZGF0YTtcbiAgY29uc3QgdFJhbmdlID0gdERhdGFbYmluZGluZ0luZGV4ICsgMV0gYXMgVFN0eWxpbmdSYW5nZTtcbiAgY29uc3QgaGlnaGVyUHJpb3JpdHlWYWx1ZSA9IGdldFRTdHlsaW5nUmFuZ2VOZXh0RHVwbGljYXRlKHRSYW5nZSkgP1xuICAgICAgZmluZFN0eWxpbmdWYWx1ZSh0RGF0YSwgdE5vZGUsIGxWaWV3LCBwcm9wLCBnZXRUU3R5bGluZ1JhbmdlTmV4dCh0UmFuZ2UpLCBpc0NsYXNzQmFzZWQpIDpcbiAgICAgIHVuZGVmaW5lZDtcbiAgaWYgKCFpc1N0eWxpbmdWYWx1ZVByZXNlbnQoaGlnaGVyUHJpb3JpdHlWYWx1ZSkpIHtcbiAgICAvLyBXZSBkb24ndCBoYXZlIGEgbmV4dCBkdXBsaWNhdGUsIG9yIHdlIGRpZCBub3QgZmluZCBhIGR1cGxpY2F0ZSB2YWx1ZS5cbiAgICBpZiAoIWlzU3R5bGluZ1ZhbHVlUHJlc2VudCh2YWx1ZSkpIHtcbiAgICAgIC8vIFdlIHNob3VsZCBkZWxldGUgY3VycmVudCB2YWx1ZSBvciByZXN0b3JlIHRvIGxvd2VyIHByaW9yaXR5IHZhbHVlLlxuICAgICAgaWYgKGdldFRTdHlsaW5nUmFuZ2VQcmV2RHVwbGljYXRlKHRSYW5nZSkpIHtcbiAgICAgICAgLy8gV2UgaGF2ZSBhIHBvc3NpYmxlIHByZXYgZHVwbGljYXRlLCBsZXQncyByZXRyaWV2ZSBpdC5cbiAgICAgICAgdmFsdWUgPSBmaW5kU3R5bGluZ1ZhbHVlKHREYXRhLCBudWxsLCBsVmlldywgcHJvcCwgYmluZGluZ0luZGV4LCBpc0NsYXNzQmFzZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByTm9kZSA9IGdldE5hdGl2ZUJ5SW5kZXgoZ2V0U2VsZWN0ZWRJbmRleCgpLCBsVmlldykgYXMgUkVsZW1lbnQ7XG4gICAgYXBwbHlTdHlsaW5nKHJlbmRlcmVyLCBpc0NsYXNzQmFzZWQsIHJOb2RlLCBwcm9wLCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWFyY2ggZm9yIHN0eWxpbmcgdmFsdWUgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2hpY2ggaXMgb3ZlcndyaXRpbmcgY3VycmVudCB2YWx1ZSwgb3IgYVxuICogdmFsdWUgb2YgbG93ZXIgcHJpb3JpdHkgdG8gd2hpY2ggd2Ugc2hvdWxkIGZhbGwgYmFjayBpZiB0aGUgdmFsdWUgaXMgYHVuZGVmaW5lZGAuXG4gKlxuICogV2hlbiB2YWx1ZSBpcyBiZWluZyBhcHBsaWVkIGF0IGEgbG9jYXRpb24sIHJlbGF0ZWQgdmFsdWVzIG5lZWQgdG8gYmUgY29uc3VsdGVkLlxuICogLSBJZiB0aGVyZSBpcyBhIGhpZ2hlciBwcmlvcml0eSBiaW5kaW5nLCB3ZSBzaG91bGQgYmUgdXNpbmcgdGhhdCBvbmUgaW5zdGVhZC5cbiAqICAgRm9yIGV4YW1wbGUgYDxkaXYgIFtzdHlsZV09XCJ7Y29sb3I6ZXhwMX1cIiBbc3R5bGUuY29sb3JdPVwiZXhwMlwiPmAgY2hhbmdlIHRvIGBleHAxYFxuICogICByZXF1aXJlcyB0aGF0IHdlIGNoZWNrIGBleHAyYCB0byBzZWUgaWYgaXQgaXMgc2V0IHRvIHZhbHVlIG90aGVyIHRoYW4gYHVuZGVmaW5lZGAuXG4gKiAtIElmIHRoZXJlIGlzIGEgbG93ZXIgcHJpb3JpdHkgYmluZGluZyBhbmQgd2UgYXJlIGNoYW5naW5nIHRvIGB1bmRlZmluZWRgXG4gKiAgIEZvciBleGFtcGxlIGA8ZGl2ICBbc3R5bGVdPVwie2NvbG9yOmV4cDF9XCIgW3N0eWxlLmNvbG9yXT1cImV4cDJcIj5gIGNoYW5nZSB0byBgZXhwMmAgdG9cbiAqICAgYHVuZGVmaW5lZGAgcmVxdWlyZXMgdGhhdCB3ZSBjaGVjayBgZXhwMWAgKGFuZCBzdGF0aWMgdmFsdWVzKSBhbmQgdXNlIHRoYXQgYXMgbmV3IHZhbHVlLlxuICpcbiAqIE5PVEU6IFRoZSBzdHlsaW5nIHN0b3JlcyB0d28gdmFsdWVzLlxuICogMS4gVGhlIHJhdyB2YWx1ZSB3aGljaCBjYW1lIGZyb20gdGhlIGFwcGxpY2F0aW9uIGlzIHN0b3JlZCBhdCBgaW5kZXggKyAwYCBsb2NhdGlvbi4gKFRoaXMgdmFsdWVcbiAqICAgIGlzIHVzZWQgZm9yIGRpcnR5IGNoZWNraW5nKS5cbiAqIDIuIFRoZSBub3JtYWxpemVkIHZhbHVlIChjb252ZXJ0ZWQgdG8gYEtleVZhbHVlQXJyYXlgIGlmIG1hcCBhbmQgc2FuaXRpemVkKSBpcyBzdG9yZWQgYXQgYGluZGV4ICtcbiAqIDFgLlxuICogICAgVGhlIGFkdmFudGFnZSBvZiBzdG9yaW5nIHRoZSBzYW5pdGl6ZWQgdmFsdWUgaXMgdGhhdCBvbmNlIHRoZSB2YWx1ZSBpcyB3cml0dGVuIHdlIGRvbid0IG5lZWRcbiAqICAgIHRvIHdvcnJ5IGFib3V0IHNhbml0aXppbmcgaXQgbGF0ZXIgb3Iga2VlcGluZyB0cmFjayBvZiB0aGUgc2FuaXRpemVyLlxuICpcbiAqIEBwYXJhbSB0RGF0YSBgVERhdGFgIHVzZWQgZm9yIHRyYXZlcnNpbmcgdGhlIHByaW9yaXR5LlxuICogQHBhcmFtIHROb2RlIGBUTm9kZWAgdG8gdXNlIGZvciByZXNvbHZpbmcgc3RhdGljIHN0eWxpbmcuIEFsc28gY29udHJvbHMgc2VhcmNoIGRpcmVjdGlvbi5cbiAqICAgLSBgVE5vZGVgIHNlYXJjaCBuZXh0IGFuZCBxdWl0IGFzIHNvb24gYXMgYGlzU3R5bGluZ1ZhbHVlUHJlc2VudCh2YWx1ZSlgIGlzIHRydWUuXG4gKiAgICAgIElmIG5vIHZhbHVlIGZvdW5kIGNvbnN1bHQgYHROb2RlLnJlc2lkdWFsU3R5bGVgL2B0Tm9kZS5yZXNpZHVhbENsYXNzYCBmb3IgZGVmYXVsdCB2YWx1ZS5cbiAqICAgLSBgbnVsbGAgc2VhcmNoIHByZXYgYW5kIGdvIGFsbCB0aGUgd2F5IHRvIGVuZC4gUmV0dXJuIGxhc3QgdmFsdWUgd2hlcmVcbiAqICAgICBgaXNTdHlsaW5nVmFsdWVQcmVzZW50KHZhbHVlKWAgaXMgdHJ1ZS5cbiAqIEBwYXJhbSBsVmlldyBgTFZpZXdgIHVzZWQgZm9yIHJldHJpZXZpbmcgdGhlIGFjdHVhbCB2YWx1ZXMuXG4gKiBAcGFyYW0gcHJvcCBQcm9wZXJ0eSB3aGljaCB3ZSBhcmUgaW50ZXJlc3RlZCBpbi5cbiAqIEBwYXJhbSBpbmRleCBTdGFydGluZyBpbmRleCBpbiB0aGUgbGlua2VkIGxpc3Qgb2Ygc3R5bGluZyBiaW5kaW5ncyB3aGVyZSB0aGUgc2VhcmNoIHNob3VsZCBzdGFydC5cbiAqIEBwYXJhbSBpc0NsYXNzQmFzZWQgYHRydWVgIGlmIGBjbGFzc2AgKGBmYWxzZWAgaWYgYHN0eWxlYClcbiAqL1xuZnVuY3Rpb24gZmluZFN0eWxpbmdWYWx1ZShcbiAgICB0RGF0YTogVERhdGEsIHROb2RlOiBUTm9kZXxudWxsLCBsVmlldzogTFZpZXcsIHByb3A6IHN0cmluZywgaW5kZXg6IG51bWJlcixcbiAgICBpc0NsYXNzQmFzZWQ6IGJvb2xlYW4pOiBhbnkge1xuICAvLyBgVE5vZGVgIHRvIHVzZSBmb3IgcmVzb2x2aW5nIHN0YXRpYyBzdHlsaW5nLiBBbHNvIGNvbnRyb2xzIHNlYXJjaCBkaXJlY3Rpb24uXG4gIC8vICAgLSBgVE5vZGVgIHNlYXJjaCBuZXh0IGFuZCBxdWl0IGFzIHNvb24gYXMgYGlzU3R5bGluZ1ZhbHVlUHJlc2VudCh2YWx1ZSlgIGlzIHRydWUuXG4gIC8vICAgICAgSWYgbm8gdmFsdWUgZm91bmQgY29uc3VsdCBgdE5vZGUucmVzaWR1YWxTdHlsZWAvYHROb2RlLnJlc2lkdWFsQ2xhc3NgIGZvciBkZWZhdWx0IHZhbHVlLlxuICAvLyAgIC0gYG51bGxgIHNlYXJjaCBwcmV2IGFuZCBnbyBhbGwgdGhlIHdheSB0byBlbmQuIFJldHVybiBsYXN0IHZhbHVlIHdoZXJlXG4gIC8vICAgICBgaXNTdHlsaW5nVmFsdWVQcmVzZW50KHZhbHVlKWAgaXMgdHJ1ZS5cbiAgY29uc3QgaXNQcmV2RGlyZWN0aW9uID0gdE5vZGUgPT09IG51bGw7XG4gIGxldCB2YWx1ZTogYW55ID0gdW5kZWZpbmVkO1xuICB3aGlsZSAoaW5kZXggPiAwKSB7XG4gICAgY29uc3QgcmF3S2V5ID0gdERhdGFbaW5kZXhdIGFzIFRTdHlsaW5nS2V5O1xuICAgIGNvbnN0IGNvbnRhaW5zU3RhdGljcyA9IEFycmF5LmlzQXJyYXkocmF3S2V5KTtcbiAgICAvLyBVbndyYXAgdGhlIGtleSBpZiB3ZSBjb250YWluIHN0YXRpYyB2YWx1ZXMuXG4gICAgY29uc3Qga2V5ID0gY29udGFpbnNTdGF0aWNzID8gKHJhd0tleSBhcyBzdHJpbmdbXSlbMV0gOiByYXdLZXk7XG4gICAgY29uc3QgaXNTdHlsaW5nTWFwID0ga2V5ID09PSBudWxsO1xuICAgIGxldCB2YWx1ZUF0TFZpZXdJbmRleCA9IGxWaWV3W2luZGV4ICsgMV07XG4gICAgaWYgKHZhbHVlQXRMVmlld0luZGV4ID09PSBOT19DSEFOR0UpIHtcbiAgICAgIC8vIEluIGZpcnN0VXBkYXRlUGFzcyB0aGUgc3R5bGluZyBpbnN0cnVjdGlvbnMgY3JlYXRlIGEgbGlua2VkIGxpc3Qgb2Ygc3R5bGluZy5cbiAgICAgIC8vIE9uIHN1YnNlcXVlbnQgcGFzc2VzIGl0IGlzIHBvc3NpYmxlIGZvciBhIHN0eWxpbmcgaW5zdHJ1Y3Rpb24gdG8gdHJ5IHRvIHJlYWQgYSBiaW5kaW5nXG4gICAgICAvLyB3aGljaFxuICAgICAgLy8gaGFzIG5vdCB5ZXQgZXhlY3V0ZWQuIEluIHRoYXQgY2FzZSB3ZSB3aWxsIGZpbmQgYE5PX0NIQU5HRWAgYW5kIHdlIHNob3VsZCBhc3N1bWUgdGhhdFxuICAgICAgLy8gd2UgaGF2ZSBgdW5kZWZpbmVkYCAob3IgZW1wdHkgYXJyYXkgaW4gY2FzZSBvZiBzdHlsaW5nLW1hcCBpbnN0cnVjdGlvbikgaW5zdGVhZC4gVGhpc1xuICAgICAgLy8gYWxsb3dzIHRoZSByZXNvbHV0aW9uIHRvIGFwcGx5IHRoZSB2YWx1ZSAod2hpY2ggbWF5IGxhdGVyIGJlIG92ZXJ3cml0dGVuIHdoZW4gdGhlXG4gICAgICAvLyBiaW5kaW5nIGFjdHVhbGx5IGV4ZWN1dGVzLilcbiAgICAgIHZhbHVlQXRMVmlld0luZGV4ID0gaXNTdHlsaW5nTWFwID8gRU1QVFlfQVJSQVkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBjdXJyZW50VmFsdWUgPSBpc1N0eWxpbmdNYXAgPyBrZXlWYWx1ZUFycmF5R2V0KHZhbHVlQXRMVmlld0luZGV4LCBwcm9wKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PT0gcHJvcCA/IHZhbHVlQXRMVmlld0luZGV4IDogdW5kZWZpbmVkO1xuICAgIGlmIChjb250YWluc1N0YXRpY3MgJiYgIWlzU3R5bGluZ1ZhbHVlUHJlc2VudChjdXJyZW50VmFsdWUpKSB7XG4gICAgICBjdXJyZW50VmFsdWUgPSBrZXlWYWx1ZUFycmF5R2V0KHJhd0tleSBhcyBLZXlWYWx1ZUFycmF5PGFueT4sIHByb3ApO1xuICAgIH1cbiAgICBpZiAoaXNTdHlsaW5nVmFsdWVQcmVzZW50KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgICAgaWYgKGlzUHJldkRpcmVjdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRSYW5nZSA9IHREYXRhW2luZGV4ICsgMV0gYXMgVFN0eWxpbmdSYW5nZTtcbiAgICBpbmRleCA9IGlzUHJldkRpcmVjdGlvbiA/IGdldFRTdHlsaW5nUmFuZ2VQcmV2KHRSYW5nZSkgOiBnZXRUU3R5bGluZ1JhbmdlTmV4dCh0UmFuZ2UpO1xuICB9XG4gIGlmICh0Tm9kZSAhPT0gbnVsbCkge1xuICAgIC8vIGluIGNhc2Ugd2hlcmUgd2UgYXJlIGdvaW5nIGluIG5leHQgZGlyZWN0aW9uIEFORCB3ZSBkaWQgbm90IGZpbmQgYW55dGhpbmcsIHdlIG5lZWQgdG9cbiAgICAvLyBjb25zdWx0IHJlc2lkdWFsIHN0eWxpbmdcbiAgICBsZXQgcmVzaWR1YWwgPSBpc0NsYXNzQmFzZWQgPyB0Tm9kZS5yZXNpZHVhbENsYXNzZXMgOiB0Tm9kZS5yZXNpZHVhbFN0eWxlcztcbiAgICBpZiAocmVzaWR1YWwgIT0gbnVsbCAvKiogT1IgcmVzaWR1YWwgIT09PSB1bmRlZmluZWQgKi8pIHtcbiAgICAgIHZhbHVlID0ga2V5VmFsdWVBcnJheUdldChyZXNpZHVhbCEsIHByb3ApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgYmluZGluZyB2YWx1ZSBzaG91bGQgYmUgdXNlZCAob3IgaWYgdGhlIHZhbHVlIGlzICd1bmRlZmluZWQnIGFuZCBoZW5jZSBwcmlvcml0eVxuICogcmVzb2x1dGlvbiBzaG91bGQgYmUgdXNlZC4pXG4gKlxuICogQHBhcmFtIHZhbHVlIEJpbmRpbmcgc3R5bGUgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGlzU3R5bGluZ1ZhbHVlUHJlc2VudCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIC8vIEN1cnJlbnRseSBvbmx5IGB1bmRlZmluZWRgIHZhbHVlIGlzIGNvbnNpZGVyZWQgbm9uLWJpbmRpbmcuIFRoYXQgaXMgYHVuZGVmaW5lZGAgc2F5cyBJIGRvbid0XG4gIC8vIGhhdmUgYW4gb3BpbmlvbiBhcyB0byB3aGF0IHRoaXMgYmluZGluZyBzaG91bGQgYmUgYW5kIHlvdSBzaG91bGQgY29uc3VsdCBvdGhlciBiaW5kaW5ncyBieVxuICAvLyBwcmlvcml0eSB0byBkZXRlcm1pbmUgdGhlIHZhbGlkIHZhbHVlLlxuICAvLyBUaGlzIGlzIGV4dHJhY3RlZCBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uIHNvIHRoYXQgd2UgaGF2ZSBhIHNpbmdsZSBwbGFjZSB0byBjb250cm9sIHRoaXMuXG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFNhbml0aXplcyBvciBhZGRzIHN1ZmZpeCB0byB0aGUgdmFsdWUuXG4gKlxuICogSWYgdmFsdWUgaXMgYG51bGxgL2B1bmRlZmluZWRgIG5vIHN1ZmZpeCBpcyBhZGRlZFxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gc3VmZml4T3JTYW5pdGl6ZXJcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplQW5kQXBwbHlTdWZmaXhPclNhbml0aXplcihcbiAgICB2YWx1ZTogYW55LCBzdWZmaXhPclNhbml0aXplcjogU2FuaXRpemVyRm58c3RyaW5nfHVuZGVmaW5lZHxudWxsKTogc3RyaW5nfG51bGx8dW5kZWZpbmVkfFxuICAgIGJvb2xlYW4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCAvKiogfHwgdmFsdWUgPT09IHVuZGVmaW5lZCAqLykge1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3VmZml4T3JTYW5pdGl6ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBzYW5pdGl6ZSB0aGUgdmFsdWUuXG4gICAgdmFsdWUgPSBzdWZmaXhPclNhbml0aXplcih2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHN1ZmZpeE9yU2FuaXRpemVyID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUgKyBzdWZmaXhPclNhbml0aXplcjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgdmFsdWUgPSBzdHJpbmdpZnkodW53cmFwU2FmZVZhbHVlKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5cbi8qKlxuICogVGVzdHMgaWYgdGhlIGBUTm9kZWAgaGFzIGlucHV0IHNoYWRvdy5cbiAqXG4gKiBBbiBpbnB1dCBzaGFkb3cgaXMgd2hlbiBhIGRpcmVjdGl2ZSBzdGVhbHMgKHNoYWRvd3MpIHRoZSBpbnB1dCBieSB1c2luZyBgQElucHV0KCdzdHlsZScpYCBvclxuICogYEBJbnB1dCgnY2xhc3MnKWAgYXMgaW5wdXQuXG4gKlxuICogQHBhcmFtIHROb2RlIGBUTm9kZWAgd2hpY2ggd2Ugd291bGQgbGlrZSB0byBzZWUgaWYgaXQgaGFzIHNoYWRvdy5cbiAqIEBwYXJhbSBpc0NsYXNzQmFzZWQgYHRydWVgIGlmIGBjbGFzc2AgKGBmYWxzZWAgaWYgYHN0eWxlYClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1N0eWxpbmdJbnB1dFNoYWRvdyh0Tm9kZTogVE5vZGUsIGlzQ2xhc3NCYXNlZDogYm9vbGVhbikge1xuICByZXR1cm4gKHROb2RlLmZsYWdzICYgKGlzQ2xhc3NCYXNlZCA/IFROb2RlRmxhZ3MuaGFzQ2xhc3NJbnB1dCA6IFROb2RlRmxhZ3MuaGFzU3R5bGVJbnB1dCkpICE9PSAwO1xufVxuIl19