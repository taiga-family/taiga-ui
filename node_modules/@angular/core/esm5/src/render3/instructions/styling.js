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
 * @param sanitizerFn The sanitization function that will be used to
 *       process style prop/value entries.
 *
 * @codeGenApi
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
 * @param prop A valid CSS property.
 * @param value New value to write (`null` or an empty string to remove).
 * @param suffix Optional suffix. Used with scalar values to add unit such as `px`.
 *        Note that when a suffix is provided then the underlying sanitizer will
 *        be ignored.
 *
 * Note that this will apply the provided style value to the host element if this function is called
 * within a host binding function.
 *
 * @codeGenApi
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
 * @param prop A valid CSS class (only one).
 * @param value A true/false value which will turn the class on or off.
 *
 * Note that this will apply the provided class value to the host element if this function
 * is called within a host binding function.
 *
 * @codeGenApi
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
 * @param styles A key/value style map of the styles that will be applied to the given element.
 *        Any missing styles (that have already been applied to the element beforehand) will be
 *        removed (unset) from the element's styling.
 *
 * Note that this will apply the provided styleMap value to the host element if this function
 * is called within a host binding.
 *
 * @codeGenApi
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
 * @param keyValueArray KeyValueArray to add parsed values to.
 * @param text text to parse.
 */
export function styleStringParser(keyValueArray, text) {
    for (var i = parseStyle(text); i >= 0; i = parseStyleNext(text, i)) {
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
 * @param classes A key/value map or string of CSS classes that will be added to the
 *        given element. Any missing classes (that have already been applied to the element
 *        beforehand) will be removed (unset) from the element's list of CSS classes.
 *
 * @codeGenApi
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
 * @param keyValueArray KeyValueArray to add parsed values to.
 * @param text text to parse.
 */
export function classStringParser(keyValueArray, text) {
    for (var i = parseClassName(text); i >= 0; i = parseClassNameNext(text, i)) {
        keyValueArraySet(keyValueArray, getLastParsedKey(text), true);
    }
}
/**
 * Common code between `ɵɵclassProp` and `ɵɵstyleProp`.
 *
 * @param prop property name.
 * @param value binding value.
 * @param suffixOrSanitizer suffix or sanitization function
 * @param isClassBased `true` if `class` change (`false` if `style`)
 */
export function checkStylingProperty(prop, value, suffixOrSanitizer, isClassBased) {
    var lView = getLView();
    var tView = getTView();
    // Styling instructions use 2 slots per binding.
    // 1. one for the value / TStylingKey
    // 2. one for the intermittent-value / TStylingRange
    var bindingIndex = incrementBindingIndex(2);
    if (tView.firstUpdatePass) {
        stylingFirstUpdatePass(tView, prop, bindingIndex, isClassBased);
    }
    if (value !== NO_CHANGE && bindingUpdated(lView, bindingIndex, value)) {
        // This is a work around. Once PR#34480 lands the sanitizer is passed explicitly and this line
        // can be removed.
        var styleSanitizer = void 0;
        if (suffixOrSanitizer == null) {
            if (styleSanitizer = getCurrentStyleSanitizer()) {
                suffixOrSanitizer = styleSanitizer;
            }
        }
        var tNode = tView.data[getSelectedIndex() + HEADER_OFFSET];
        updateStyling(tView, tNode, lView, lView[RENDERER], prop, lView[bindingIndex + 1] = normalizeAndApplySuffixOrSanitizer(value, suffixOrSanitizer), isClassBased, bindingIndex);
    }
}
/**
 * Common code between `ɵɵclassMap` and `ɵɵstyleMap`.
 *
 * @param keyValueArraySet (See `keyValueArraySet` in "util/array_utils") Gets passed in as a
 * function so that
 *        `style` can pass in version which does sanitization. This is done for tree shaking
 *        purposes.
 * @param stringParser Parser used to parse `value` if `string`. (Passed in as `style` and `class`
 *        have different parsers.)
 * @param value bound value from application
 * @param isClassBased `true` if `class` change (`false` if `style`)
 */
export function checkStylingMap(keyValueArraySet, stringParser, value, isClassBased) {
    var tView = getTView();
    var bindingIndex = incrementBindingIndex(2);
    if (tView.firstUpdatePass) {
        stylingFirstUpdatePass(tView, null, bindingIndex, isClassBased);
    }
    var lView = getLView();
    if (value !== NO_CHANGE && bindingUpdated(lView, bindingIndex, value)) {
        // `getSelectedIndex()` should be here (rather than in instruction) so that it is guarded by the
        // if so as not to read unnecessarily.
        var tNode = tView.data[getSelectedIndex() + HEADER_OFFSET];
        if (hasStylingInputShadow(tNode, isClassBased) && !isInHostBindings(tView, bindingIndex)) {
            if (ngDevMode) {
                // verify that if we are shadowing then `TData` is appropriately marked so that we skip
                // processing this binding in styling resolution.
                var tStylingKey = tView.data[bindingIndex];
                assertEqual(Array.isArray(tStylingKey) ? tStylingKey[1] : tStylingKey, false, 'Styling linked list shadow input should be marked as \'false\'');
            }
            // VE does not concatenate the static portion like we are doing here.
            // Instead VE just ignores the static completely if dynamic binding is present.
            // Because of locality we have already set the static portion because we don't know if there
            // is a dynamic portion until later. If we would ignore the static portion it would look like
            // the binding has removed it. This would confuse `[ngStyle]`/`[ngClass]` to do the wrong
            // thing as it would think that the static portion was removed. For this reason we
            // concatenate it so that `[ngStyle]`/`[ngClass]`  can continue to work on changed.
            var staticPrefix = isClassBased ? tNode.classesWithoutHost : tNode.stylesWithoutHost;
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
 * @param tView Current `TView`
 * @param bindingIndex index of binding which we would like if it is in `hostBindings`
 */
function isInHostBindings(tView, bindingIndex) {
    // All host bindings are placed after the expando section.
    return bindingIndex >= tView.expandoStartIndex;
}
/**
 * Collects the necessary information to insert the binding into a linked list of style bindings
 * using `insertTStylingBinding`.
 *
 * @param tView `TView` where the binding linked list will be stored.
 * @param tStylingKey Property/key of the binding.
 * @param bindingIndex Index of binding associated with the `prop`
 * @param isClassBased `true` if `class` change (`false` if `style`)
 */
function stylingFirstUpdatePass(tView, tStylingKey, bindingIndex, isClassBased) {
    ngDevMode && assertFirstUpdatePass(tView);
    var tData = tView.data;
    if (tData[bindingIndex + 1] === null) {
        // The above check is necessary because we don't clear first update pass until first successful
        // (no exception) template execution. This prevents the styling instruction from double adding
        // itself to the list.
        // `getSelectedIndex()` should be here (rather than in instruction) so that it is guarded by the
        // if so as not to read unnecessarily.
        var tNode = tData[getSelectedIndex() + HEADER_OFFSET];
        var isHostBindings = isInHostBindings(tView, bindingIndex);
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
 * @param tData `TData` where the linked list is stored.
 * @param tNode `TNode` for which the styling is being computed.
 * @param stylingKey `TStylingKeyPrimitive` which may need to be wrapped into `TStylingKey`
 * @param isClassBased `true` if `class` (`false` if `style`)
 */
export function wrapInStaticStylingKey(tData, tNode, stylingKey, isClassBased) {
    var hostDirectiveDef = getCurrentDirectiveDef(tData);
    var residual = isClassBased ? tNode.residualClasses : tNode.residualStyles;
    if (hostDirectiveDef === null) {
        // We are in template node.
        // If template node already had styling instruction then it has already collected the static
        // styling and there is no need to collect them again. We know that we are the first styling
        // instruction because the `TNode.*Bindings` points to 0 (nothing has been inserted yet).
        var isFirstStylingInstructionInTemplate = (isClassBased ? tNode.classBindings : tNode.styleBindings) === 0;
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
        var directiveStylingLast = tNode.directiveStylingLast;
        var isFirstStylingInstructionInHostBinding = directiveStylingLast === -1 || tData[directiveStylingLast] !== hostDirectiveDef;
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
                var templateStylingKey = getTemplateHeadTStylingKey(tData, tNode, isClassBased);
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
 * @param tData `TData` where the linked list is stored.
 * @param tNode `TNode` for which the styling is being computed.
 * @param isClassBased `true` if `class` (`false` if `style`)
 * @return `TStylingKey` if found or `undefined` if not found.
 */
function getTemplateHeadTStylingKey(tData, tNode, isClassBased) {
    var bindings = isClassBased ? tNode.classBindings : tNode.styleBindings;
    if (getTStylingRangeNext(bindings) === 0) {
        // There does not seem to be a styling instruction in the `template`.
        return undefined;
    }
    return tData[getTStylingRangePrev(bindings)];
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
 * @Directive({
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
 * @param tData `TData` where the linked list is stored.
 * @param tNode `TNode` for which the styling is being computed.
 * @param isClassBased `true` if `class` (`false` if `style`)
 * @param tStylingKey New `TStylingKey` which is replacing the old one.
 */
function setTemplateHeadTStylingKey(tData, tNode, isClassBased, tStylingKey) {
    var bindings = isClassBased ? tNode.classBindings : tNode.styleBindings;
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
 * @param tData `TData` where the `DirectiveDefs` are stored.
 * @param tNode `TNode` which contains the directive range.
 * @param isClassBased `true` if `class` (`false` if `style`)
 */
function collectResidual(tData, tNode, isClassBased) {
    var residual = undefined;
    var directiveEnd = tNode.directiveEnd;
    ngDevMode &&
        assertNotEqual(tNode.directiveStylingLast, -1, 'By the time this function gets called at least one hostBindings-node styling instruction must have executed.');
    // We add `1 + tNode.directiveStart` because we need to skip the current directive (as we are
    // collecting things after the last `hostBindings` directive which had a styling instruction.)
    for (var i = 1 + tNode.directiveStylingLast; i < directiveEnd; i++) {
        var attrs = tData[i].hostAttrs;
        residual = collectStylingFromTAttrs(residual, attrs, isClassBased);
    }
    return collectStylingFromTAttrs(residual, tNode.attrs, isClassBased);
}
/**
 * Collect the static styling information with lower priority than `hostDirectiveDef`.
 *
 * (This is opposite of residual styling.)
 *
 * @param hostDirectiveDef `DirectiveDef` for which we want to collect lower priority static
 *        styling. (Or `null` if template styling)
 * @param tData `TData` where the linked list is stored.
 * @param tNode `TNode` for which the styling is being computed.
 * @param stylingKey Existing `TStylingKey` to update or wrap.
 * @param isClassBased `true` if `class` (`false` if `style`)
 */
function collectStylingFromDirectives(hostDirectiveDef, tData, tNode, stylingKey, isClassBased) {
    // We need to loop because there can be directives which have `hostAttrs` but don't have
    // `hostBindings` so this loop catches up to the current directive..
    var currentDirective = null;
    var directiveEnd = tNode.directiveEnd;
    var directiveStylingLast = tNode.directiveStylingLast;
    if (directiveStylingLast === -1) {
        directiveStylingLast = tNode.directiveStart;
    }
    else {
        directiveStylingLast++;
    }
    while (directiveStylingLast < directiveEnd) {
        currentDirective = tData[directiveStylingLast];
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
 * @param stylingKey existing `TStylingKey` to update or wrap.
 * @param attrs `TAttributes` to process.
 * @param isClassBased `true` if `class` (`false` if `style`)
 */
function collectStylingFromTAttrs(stylingKey, attrs, isClassBased) {
    var desiredMarker = isClassBased ? 1 /* Classes */ : 2 /* Styles */;
    var currentMarker = -1 /* ImplicitAttributes */;
    if (attrs !== null) {
        for (var i = 0; i < attrs.length; i++) {
            var item = attrs[i];
            if (typeof item === 'number') {
                currentMarker = item;
            }
            else {
                if (currentMarker === desiredMarker) {
                    if (!Array.isArray(stylingKey)) {
                        stylingKey = stylingKey === undefined ? [] : ['', stylingKey];
                    }
                    keyValueArraySet(stylingKey, item, isClassBased ? true : attrs[++i]);
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
 * @param keyValueArraySet (See `keyValueArraySet` in "util/array_utils") Gets passed in as a
 * function so that
 *        `style` can pass in version which does sanitization. This is done for tree shaking
 *        purposes.
 * @param stringParser The parser is passed in so that it will be tree shakable. See
 *        `styleStringParser` and `classStringParser`
 * @param value The value to parse/convert to `KeyValueArray`
 */
export function toStylingKeyValueArray(keyValueArraySet, stringParser, value) {
    if (value == null /*|| value === undefined */ || value === '')
        return EMPTY_ARRAY;
    var styleKeyValueArray = [];
    var unwrappedValue = unwrapSafeValue(value);
    if (Array.isArray(unwrappedValue)) {
        for (var i = 0; i < unwrappedValue.length; i++) {
            keyValueArraySet(styleKeyValueArray, unwrappedValue[i], true);
        }
    }
    else if (typeof unwrappedValue === 'object') {
        for (var key in unwrappedValue) {
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
 * @param keyValueArray KeyValueArray to add to.
 * @param key Style key to add. (This key will be checked if it needs sanitization)
 * @param value The value to set (If key needs sanitization it will be sanitized)
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
 * @param tView Associated `TView.data` contains the linked list of binding priorities.
 * @param tNode `TNode` where the binding is located.
 * @param lView `LView` contains the values associated with other styling binding at this `TNode`.
 * @param renderer Renderer to use if any updates.
 * @param oldKeyValueArray Previous value represented as `KeyValueArray`
 * @param newKeyValueArray Current value represented as `KeyValueArray`
 * @param isClassBased `true` if `class` (`false` if `style`)
 * @param bindingIndex Binding index of the binding.
 */
function updateStylingMap(tView, tNode, lView, renderer, oldKeyValueArray, newKeyValueArray, isClassBased, bindingIndex) {
    if (oldKeyValueArray === NO_CHANGE) {
        // On first execution the oldKeyValueArray is NO_CHANGE => treat it as empty KeyValueArray.
        oldKeyValueArray = EMPTY_ARRAY;
    }
    var oldIndex = 0;
    var newIndex = 0;
    var oldKey = 0 < oldKeyValueArray.length ? oldKeyValueArray[0] : null;
    var newKey = 0 < newKeyValueArray.length ? newKeyValueArray[0] : null;
    while (oldKey !== null || newKey !== null) {
        ngDevMode && assertLessThan(oldIndex, 999, 'Are we stuck in infinite loop?');
        ngDevMode && assertLessThan(newIndex, 999, 'Are we stuck in infinite loop?');
        var oldValue = oldIndex < oldKeyValueArray.length ? oldKeyValueArray[oldIndex + 1] : undefined;
        var newValue = newIndex < newKeyValueArray.length ? newKeyValueArray[newIndex + 1] : undefined;
        var setKey = null;
        var setValue = undefined;
        if (oldKey === newKey) {
            // UPDATE: Keys are equal => new value is overwriting old value.
            oldIndex += 2;
            newIndex += 2;
            if (oldValue !== newValue) {
                setKey = newKey;
                setValue = newValue;
            }
        }
        else if (newKey === null || oldKey !== null && oldKey < newKey) {
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
 * @param tView Associated `TView.data` contains the linked list of binding priorities.
 * @param tNode `TNode` where the binding is located.
 * @param lView `LView` contains the values associated with other styling binding at this `TNode`.
 * @param renderer Renderer to use if any updates.
 * @param prop Either style property name or a class name.
 * @param value Either style value for `prop` or `true`/`false` if `prop` is class.
 * @param isClassBased `true` if `class` (`false` if `style`)
 * @param bindingIndex Binding index of the binding.
 */
function updateStyling(tView, tNode, lView, renderer, prop, value, isClassBased, bindingIndex) {
    if (tNode.type !== 3 /* Element */) {
        // It is possible to have styling on non-elements (such as ng-container).
        // This is rare, but it does happen. In such a case, just ignore the binding.
        return;
    }
    var tData = tView.data;
    var tRange = tData[bindingIndex + 1];
    var higherPriorityValue = getTStylingRangeNextDuplicate(tRange) ?
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
        var rNode = getNativeByIndex(getSelectedIndex(), lView);
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
 * @param tData `TData` used for traversing the priority.
 * @param tNode `TNode` to use for resolving static styling. Also controls search direction.
 *   - `TNode` search next and quit as soon as `isStylingValuePresent(value)` is true.
 *      If no value found consult `tNode.residualStyle`/`tNode.residualClass` for default value.
 *   - `null` search prev and go all the way to end. Return last value where
 *     `isStylingValuePresent(value)` is true.
 * @param lView `LView` used for retrieving the actual values.
 * @param prop Property which we are interested in.
 * @param index Starting index in the linked list of styling bindings where the search should start.
 * @param isClassBased `true` if `class` (`false` if `style`)
 */
function findStylingValue(tData, tNode, lView, prop, index, isClassBased) {
    // `TNode` to use for resolving static styling. Also controls search direction.
    //   - `TNode` search next and quit as soon as `isStylingValuePresent(value)` is true.
    //      If no value found consult `tNode.residualStyle`/`tNode.residualClass` for default value.
    //   - `null` search prev and go all the way to end. Return last value where
    //     `isStylingValuePresent(value)` is true.
    var isPrevDirection = tNode === null;
    var value = undefined;
    while (index > 0) {
        var rawKey = tData[index];
        var containsStatics = Array.isArray(rawKey);
        // Unwrap the key if we contain static values.
        var key = containsStatics ? rawKey[1] : rawKey;
        var isStylingMap = key === null;
        var valueAtLViewIndex = lView[index + 1];
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
        var currentValue = isStylingMap ? keyValueArrayGet(valueAtLViewIndex, prop) :
            key === prop ? valueAtLViewIndex : undefined;
        if (containsStatics && !isStylingValuePresent(currentValue)) {
            currentValue = keyValueArrayGet(rawKey, prop);
        }
        if (isStylingValuePresent(currentValue)) {
            value = currentValue;
            if (isPrevDirection) {
                return value;
            }
        }
        var tRange = tData[index + 1];
        index = isPrevDirection ? getTStylingRangePrev(tRange) : getTStylingRangeNext(tRange);
    }
    if (tNode !== null) {
        // in case where we are going in next direction AND we did not find anything, we need to
        // consult residual styling
        var residual = isClassBased ? tNode.residualClasses : tNode.residualStyles;
        if (residual != null /** OR residual !=== undefined */) {
            value = keyValueArrayGet(residual, prop);
        }
    }
    return value;
}
/**
 * Determines if the binding value should be used (or if the value is 'undefined' and hence priority
 * resolution should be used.)
 *
 * @param value Binding style value.
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
 * @param value
 * @param suffixOrSanitizer
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
 * An input shadow is when a directive steals (shadows) the input by using `@Input('style')` or
 * `@Input('class')` as input.
 *
 * @param tNode `TNode` which we would like to see if it has shadow.
 * @param isClassBased `true` if `class` (`false` if `style`)
 */
export function hasStylingInputShadow(tNode, isClassBased) {
    return (tNode.flags & (isClassBased ? 16 /* hasClassInput */ : 32 /* hasStyleInput */)) !== 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW5zdHJ1Y3Rpb25zL3N0eWxpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFZLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBQywwQkFBMEIsRUFBRSxlQUFlLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RixPQUFPLEVBQWdCLGdCQUFnQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDekYsT0FBTyxFQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHNCQUFzQixFQUFFLFNBQVMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNoRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBSzNDLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSw2QkFBNkIsRUFBRSxvQkFBb0IsRUFBRSw2QkFBNkIsRUFBNkIsTUFBTSx1QkFBdUIsQ0FBQztBQUMzSyxPQUFPLEVBQUMsYUFBYSxFQUFTLFFBQVEsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNqSyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvSSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBQyxxQ0FBcUMsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUdqRTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsU0FBK0I7SUFDOUQsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQ3ZCLElBQVksRUFBRSxLQUE2QyxFQUMzRCxNQUFvQjtJQUN0QixvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQWlCLEVBQUUsS0FBNkI7SUFDMUUsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUFDLE1BQXdEO0lBQ2pGLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0UsQ0FBQztBQUdEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLGFBQWlDLEVBQUUsSUFBWTtJQUMvRSxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ2xFLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3hGO0FBQ0gsQ0FBQztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNILE1BQU0sVUFBVSxVQUFVLENBQUMsT0FDSTtJQUM3QixlQUFlLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxhQUFpQyxFQUFFLElBQVk7SUFDL0UsS0FBSyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQzFFLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMvRDtBQUNILENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUNoQyxJQUFZLEVBQUUsS0FBb0IsRUFBRSxpQkFBb0QsRUFDeEYsWUFBcUI7SUFDdkIsSUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDekIsSUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDekIsZ0RBQWdEO0lBQ2hELHFDQUFxQztJQUNyQyxvREFBb0Q7SUFDcEQsSUFBTSxZQUFZLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsSUFBSSxLQUFLLENBQUMsZUFBZSxFQUFFO1FBQ3pCLHNCQUFzQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQ2pFO0lBQ0QsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQ3JFLDhGQUE4RjtRQUM5RixrQkFBa0I7UUFDbEIsSUFBSSxjQUFjLFNBQXNCLENBQUM7UUFDekMsSUFBSSxpQkFBaUIsSUFBSSxJQUFJLEVBQUU7WUFDN0IsSUFBSSxjQUFjLEdBQUcsd0JBQXdCLEVBQUUsRUFBRTtnQkFDL0MsaUJBQWlCLEdBQUcsY0FBcUIsQ0FBQzthQUMzQztTQUNGO1FBQ0QsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLGFBQWEsQ0FBVSxDQUFDO1FBQ3RFLGFBQWEsQ0FDVCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUMxQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxFQUN0RixZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDakM7QUFDSCxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLFVBQVUsZUFBZSxDQUMzQixnQkFBc0YsRUFDdEYsWUFBNEUsRUFDNUUsS0FBb0IsRUFBRSxZQUFxQjtJQUM3QyxJQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztJQUN6QixJQUFNLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxJQUFJLEtBQUssQ0FBQyxlQUFlLEVBQUU7UUFDekIsc0JBQXNCLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDakU7SUFDRCxJQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztJQUN6QixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksY0FBYyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDckUsZ0dBQWdHO1FBQ2hHLHNDQUFzQztRQUN0QyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsYUFBYSxDQUFVLENBQUM7UUFDdEUsSUFBSSxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDeEYsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsdUZBQXVGO2dCQUN2RixpREFBaUQ7Z0JBQ2pELElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdDLFdBQVcsQ0FDUCxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQ2hFLGdFQUFnRSxDQUFDLENBQUM7YUFDdkU7WUFDRCxxRUFBcUU7WUFDckUsK0VBQStFO1lBQy9FLDRGQUE0RjtZQUM1Riw2RkFBNkY7WUFDN0YseUZBQXlGO1lBQ3pGLGtGQUFrRjtZQUNsRixtRkFBbUY7WUFDbkYsSUFBSSxZQUFZLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztZQUNyRixTQUFTLElBQUksWUFBWSxLQUFLLEtBQUssSUFBSSxZQUFZLEtBQUssSUFBSTtnQkFDeEQsV0FBVyxDQUNQLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLDRDQUE0QyxDQUFDLENBQUM7WUFDeEYsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUN6QiwwRUFBMEU7Z0JBQzFFLEtBQUssR0FBRyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFO1lBQ0QseUVBQXlFO1lBQ3pFLDhEQUE4RDtZQUM5RCxxQ0FBcUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakY7YUFBTTtZQUNMLGdCQUFnQixDQUNaLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUM3RCxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLHNCQUFzQixDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsRUFDdkYsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2pDO0tBQ0Y7QUFDSCxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLGdCQUFnQixDQUFDLEtBQVksRUFBRSxZQUFvQjtJQUMxRCwwREFBMEQ7SUFDMUQsT0FBTyxZQUFZLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDO0FBQ2pELENBQUM7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILFNBQVMsc0JBQXNCLENBQzNCLEtBQVksRUFBRSxXQUF3QixFQUFFLFlBQW9CLEVBQUUsWUFBcUI7SUFDckYsU0FBUyxJQUFJLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDekIsSUFBSSxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNwQywrRkFBK0Y7UUFDL0YsOEZBQThGO1FBQzlGLHNCQUFzQjtRQUN0QixnR0FBZ0c7UUFDaEcsc0NBQXNDO1FBQ3RDLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLGFBQWEsQ0FBVSxDQUFDO1FBQ2pFLElBQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM3RCxJQUFJLHFCQUFxQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsSUFBSSxXQUFXLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3pGLG9GQUFvRjtZQUNwRixpRkFBaUY7WUFDakYsMkVBQTJFO1lBQzNFLHlEQUF5RDtZQUN6RCxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsV0FBVyxHQUFHLHNCQUFzQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzlFLHFCQUFxQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDOUY7QUFDSCxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILE1BQU0sVUFBVSxzQkFBc0IsQ0FDbEMsS0FBWSxFQUFFLEtBQVksRUFBRSxVQUF1QixFQUFFLFlBQXFCO0lBQzVFLElBQU0sZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBQzNFLElBQUksZ0JBQWdCLEtBQUssSUFBSSxFQUFFO1FBQzdCLDJCQUEyQjtRQUMzQiw0RkFBNEY7UUFDNUYsNEZBQTRGO1FBQzVGLHlGQUF5RjtRQUN6RixJQUFNLG1DQUFtQyxHQUNyQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBa0IsS0FBSyxDQUFDLENBQUM7UUFDdEYsSUFBSSxtQ0FBbUMsRUFBRTtZQUN2QywyRkFBMkY7WUFDM0YsOEZBQThGO1lBQzlGLG1CQUFtQjtZQUNuQixVQUFVLEdBQUcsNEJBQTRCLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3hGLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUM3RSw4RUFBOEU7WUFDOUUsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNqQjtLQUNGO1NBQU07UUFDTCxxRkFBcUY7UUFDckYsbURBQW1EO1FBQ25ELElBQU0sb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1FBQ3hELElBQU0sc0NBQXNDLEdBQ3hDLG9CQUFvQixLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLGdCQUFnQixDQUFDO1FBQ3BGLElBQUksc0NBQXNDLEVBQUU7WUFDMUMsVUFBVTtnQkFDTiw0QkFBNEIsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUMzRixJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQ3JCLDJCQUEyQjtnQkFDM0IsK0VBQStFO2dCQUMvRSwwRkFBMEY7Z0JBQzFGLG1GQUFtRjtnQkFDbkYsdUJBQXVCO2dCQUN2QixxRkFBcUY7Z0JBQ3JGLElBQUksa0JBQWtCLEdBQUcsMEJBQTBCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDaEYsSUFBSSxrQkFBa0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO29CQUN6RSxzRkFBc0Y7b0JBQ3RGLDBGQUEwRjtvQkFDMUYsU0FBUztvQkFDVCxrQkFBa0IsR0FBRyw0QkFBNEIsQ0FDN0MsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLEVBQ3ZFLFlBQVksQ0FBQyxDQUFDO29CQUNsQixrQkFBa0I7d0JBQ2Qsd0JBQXdCLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDNUUsMEJBQTBCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztpQkFDNUU7YUFDRjtpQkFBTTtnQkFDTCwwREFBMEQ7Z0JBQzFELDBGQUEwRjtnQkFDMUYsdUZBQXVGO2dCQUN2RixlQUFlO2dCQUNmLDBEQUEwRDtnQkFDMUQsUUFBUSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ3hEO1NBQ0Y7S0FDRjtJQUNELElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtRQUMxQixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0tBQ3ZGO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILFNBQVMsMEJBQTBCLENBQUMsS0FBWSxFQUFFLEtBQVksRUFBRSxZQUFxQjtJQUVuRixJQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7SUFDMUUsSUFBSSxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEMscUVBQXFFO1FBQ3JFLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxLQUFLLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQWdCLENBQUM7QUFDOUQsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtREc7QUFDSCxTQUFTLDBCQUEwQixDQUMvQixLQUFZLEVBQUUsS0FBWSxFQUFFLFlBQXFCLEVBQUUsV0FBd0I7SUFDN0UsSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQzFFLFNBQVM7UUFDTCxjQUFjLENBQ1Ysb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUNqQywwREFBMEQsQ0FBQyxDQUFDO0lBQ3BFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztBQUN0RCxDQUFDO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsU0FBUyxlQUFlLENBQUMsS0FBWSxFQUFFLEtBQVksRUFBRSxZQUFxQjtJQUV4RSxJQUFJLFFBQVEsR0FBc0MsU0FBUyxDQUFDO0lBQzVELElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDeEMsU0FBUztRQUNMLGNBQWMsQ0FDVixLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLEVBQzlCLDhHQUE4RyxDQUFDLENBQUM7SUFDeEgsNkZBQTZGO0lBQzdGLDhGQUE4RjtJQUM5RixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsRSxJQUFNLEtBQUssR0FBSSxLQUFLLENBQUMsQ0FBQyxDQUF1QixDQUFDLFNBQVMsQ0FBQztRQUN4RCxRQUFRLEdBQUcsd0JBQXdCLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQTZCLENBQUM7S0FDaEc7SUFDRCxPQUFPLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBNkIsQ0FBQztBQUNuRyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxTQUFTLDRCQUE0QixDQUNqQyxnQkFBd0MsRUFBRSxLQUFZLEVBQUUsS0FBWSxFQUFFLFVBQXVCLEVBQzdGLFlBQXFCO0lBQ3ZCLHdGQUF3RjtJQUN4RixvRUFBb0U7SUFDcEUsSUFBSSxnQkFBZ0IsR0FBMkIsSUFBSSxDQUFDO0lBQ3BELElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDeEMsSUFBSSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7SUFDdEQsSUFBSSxvQkFBb0IsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUMvQixvQkFBb0IsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO0tBQzdDO1NBQU07UUFDTCxvQkFBb0IsRUFBRSxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxvQkFBb0IsR0FBRyxZQUFZLEVBQUU7UUFDMUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFzQixDQUFDO1FBQ3BFLFNBQVMsSUFBSSxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUN2RSxVQUFVLEdBQUcsd0JBQXdCLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM1RixJQUFJLGdCQUFnQixLQUFLLGdCQUFnQjtZQUFFLE1BQU07UUFDakQsb0JBQW9CLEVBQUUsQ0FBQztLQUN4QjtJQUNELElBQUksZ0JBQWdCLEtBQUssSUFBSSxFQUFFO1FBQzdCLG1GQUFtRjtRQUNuRiw4RUFBOEU7UUFDOUUsNkNBQTZDO1FBQzdDLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztLQUNuRDtJQUNELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLHdCQUF3QixDQUM3QixVQUFpQyxFQUFFLEtBQXVCLEVBQzFELFlBQXFCO0lBQ3ZCLElBQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxDQUFDLGlCQUF5QixDQUFDLGVBQXVCLENBQUM7SUFDdEYsSUFBSSxhQUFhLDhCQUFxQyxDQUFDO0lBQ3ZELElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFvQixDQUFDO1lBQ3pDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QixhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLElBQUksYUFBYSxLQUFLLGFBQWEsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQzlCLFVBQVUsR0FBRyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBUSxDQUFDO3FCQUN0RTtvQkFDRCxnQkFBZ0IsQ0FDWixVQUFnQyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0U7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ3RELENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQUNILE1BQU0sVUFBVSxzQkFBc0IsQ0FDbEMsZ0JBQXNGLEVBQ3RGLFlBQTRFLEVBQzVFLEtBQW9FO0lBQ3RFLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQywyQkFBMkIsSUFBSSxLQUFLLEtBQUssRUFBRTtRQUFFLE9BQU8sV0FBa0IsQ0FBQztJQUN6RixJQUFNLGtCQUFrQixHQUF1QixFQUFTLENBQUM7SUFDekQsSUFBTSxjQUFjLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBNkMsQ0FBQztJQUMxRixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQy9EO0tBQ0Y7U0FBTSxJQUFJLE9BQU8sY0FBYyxLQUFLLFFBQVEsRUFBRTtRQUM3QyxLQUFLLElBQU0sR0FBRyxJQUFJLGNBQWMsRUFBRTtZQUNoQyxJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNoRTtTQUNGO0tBQ0Y7U0FBTSxJQUFJLE9BQU8sY0FBYyxLQUFLLFFBQVEsRUFBRTtRQUM3QyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDLENBQUM7S0FDbEQ7U0FBTTtRQUNMLFNBQVM7WUFDTCxVQUFVLENBQUMsMkJBQTJCLEdBQUcsT0FBTyxjQUFjLEdBQUcsSUFBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDO0tBQzdGO0lBQ0QsT0FBTyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLFVBQVUscUJBQXFCLENBQUMsYUFBaUMsRUFBRSxHQUFXLEVBQUUsS0FBVTtJQUM5RixJQUFJLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ25DLEtBQUssR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7SUFDRCxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxTQUFTLGdCQUFnQixDQUNyQixLQUFZLEVBQUUsS0FBWSxFQUFFLEtBQVksRUFBRSxRQUFtQixFQUM3RCxnQkFBb0MsRUFBRSxnQkFBb0MsRUFDMUUsWUFBcUIsRUFBRSxZQUFvQjtJQUM3QyxJQUFJLGdCQUFpRCxLQUFLLFNBQVMsRUFBRTtRQUNuRSwyRkFBMkY7UUFDM0YsZ0JBQWdCLEdBQUcsV0FBa0IsQ0FBQztLQUN2QztJQUNELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsSUFBSSxNQUFNLEdBQWdCLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkYsSUFBSSxNQUFNLEdBQWdCLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkYsT0FBTyxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7UUFDekMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLGdDQUFnQyxDQUFDLENBQUM7UUFDN0UsU0FBUyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLGdDQUFnQyxDQUFDLENBQUM7UUFDN0UsSUFBTSxRQUFRLEdBQ1YsUUFBUSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEYsSUFBTSxRQUFRLEdBQ1YsUUFBUSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEYsSUFBSSxNQUFNLEdBQWdCLElBQUksQ0FBQztRQUMvQixJQUFJLFFBQVEsR0FBUSxTQUFTLENBQUM7UUFDOUIsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQ3JCLGdFQUFnRTtZQUNoRSxRQUFRLElBQUksQ0FBQyxDQUFDO1lBQ2QsUUFBUSxJQUFJLENBQUMsQ0FBQztZQUNkLElBQUksUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDekIsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDaEIsUUFBUSxHQUFHLFFBQVEsQ0FBQzthQUNyQjtTQUNGO2FBQU0sSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxHQUFHLE1BQU8sRUFBRTtZQUNqRSw4RUFBOEU7WUFDOUUsb0ZBQW9GO1lBQ3BGLDhGQUE4RjtZQUM5RixhQUFhO1lBQ2IsUUFBUSxJQUFJLENBQUMsQ0FBQztZQUNkLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDakI7YUFBTTtZQUNMLDhGQUE4RjtZQUM5RiwyRkFBMkY7WUFDM0YsYUFBYTtZQUNiLFNBQVMsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLCtCQUErQixDQUFDLENBQUM7WUFDcEUsUUFBUSxJQUFJLENBQUMsQ0FBQztZQUNkLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDaEIsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUNyQjtRQUNELElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNuQixhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzVGO1FBQ0QsTUFBTSxHQUFHLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDaEYsTUFBTSxHQUFHLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDakY7QUFDSCxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSCxTQUFTLGFBQWEsQ0FDbEIsS0FBWSxFQUFFLEtBQVksRUFBRSxLQUFZLEVBQUUsUUFBbUIsRUFBRSxJQUFZLEVBQzNFLEtBQW9DLEVBQUUsWUFBcUIsRUFBRSxZQUFvQjtJQUNuRixJQUFJLEtBQUssQ0FBQyxJQUFJLG9CQUFzQixFQUFFO1FBQ3BDLHlFQUF5RTtRQUN6RSw2RUFBNkU7UUFDN0UsT0FBTztLQUNSO0lBQ0QsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN6QixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBa0IsQ0FBQztJQUN4RCxJQUFNLG1CQUFtQixHQUFHLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0QsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDekYsU0FBUyxDQUFDO0lBQ2QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEVBQUU7UUFDL0Msd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxxRUFBcUU7WUFDckUsSUFBSSw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDekMsd0RBQXdEO2dCQUN4RCxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNoRjtTQUNGO1FBQ0QsSUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxLQUFLLENBQWEsQ0FBQztRQUN0RSxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzFEO0FBQ0gsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Qkc7QUFDSCxTQUFTLGdCQUFnQixDQUNyQixLQUFZLEVBQUUsS0FBaUIsRUFBRSxLQUFZLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFDMUUsWUFBcUI7SUFDdkIsK0VBQStFO0lBQy9FLHNGQUFzRjtJQUN0RixnR0FBZ0c7SUFDaEcsNEVBQTRFO0lBQzVFLDhDQUE4QztJQUM5QyxJQUFNLGVBQWUsR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDO0lBQ3ZDLElBQUksS0FBSyxHQUFRLFNBQVMsQ0FBQztJQUMzQixPQUFPLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDaEIsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBZ0IsQ0FBQztRQUMzQyxJQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLDhDQUE4QztRQUM5QyxJQUFNLEdBQUcsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFFLE1BQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMvRCxJQUFNLFlBQVksR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDO1FBQ2xDLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLGlCQUFpQixLQUFLLFNBQVMsRUFBRTtZQUNuQywrRUFBK0U7WUFDL0UseUZBQXlGO1lBQ3pGLFFBQVE7WUFDUix3RkFBd0Y7WUFDeEYsd0ZBQXdGO1lBQ3hGLG9GQUFvRjtZQUNwRiw4QkFBOEI7WUFDOUIsaUJBQWlCLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUM1RDtRQUNELElBQUksWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQy9FLElBQUksZUFBZSxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDM0QsWUFBWSxHQUFHLGdCQUFnQixDQUFDLE1BQTRCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3ZDLEtBQUssR0FBRyxZQUFZLENBQUM7WUFDckIsSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFrQixDQUFDO1FBQ2pELEtBQUssR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN2RjtJQUNELElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtRQUNsQix3RkFBd0Y7UUFDeEYsMkJBQTJCO1FBQzNCLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUMzRSxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsaUNBQWlDLEVBQUU7WUFDdEQsS0FBSyxHQUFHLGdCQUFnQixDQUFDLFFBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzQztLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLHFCQUFxQixDQUFDLEtBQVU7SUFDdkMsK0ZBQStGO0lBQy9GLDZGQUE2RjtJQUM3Rix5Q0FBeUM7SUFDekMsMkZBQTJGO0lBQzNGLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUM3QixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxrQ0FBa0MsQ0FDdkMsS0FBVSxFQUFFLGlCQUFvRDtJQUVsRSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsNkJBQTZCLEVBQUU7UUFDL0MsYUFBYTtLQUNkO1NBQU0sSUFBSSxPQUFPLGlCQUFpQixLQUFLLFVBQVUsRUFBRTtRQUNsRCxzQkFBc0I7UUFDdEIsS0FBSyxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xDO1NBQU0sSUFBSSxPQUFPLGlCQUFpQixLQUFLLFFBQVEsRUFBRTtRQUNoRCxLQUFLLEdBQUcsS0FBSyxHQUFHLGlCQUFpQixDQUFDO0tBQ25DO1NBQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDcEMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMzQztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUdEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEtBQVksRUFBRSxZQUFxQjtJQUN2RSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLHdCQUEwQixDQUFDLHVCQUF5QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTYWZlVmFsdWUsIHVud3JhcFNhZmVWYWx1ZX0gZnJvbSAnLi4vLi4vc2FuaXRpemF0aW9uL2J5cGFzcyc7XG5pbXBvcnQge3N0eWxlUHJvcE5lZWRzU2FuaXRpemF0aW9uLCDJtcm1c2FuaXRpemVTdHlsZX0gZnJvbSAnLi4vLi4vc2FuaXRpemF0aW9uL3Nhbml0aXphdGlvbic7XG5pbXBvcnQge1N0eWxlU2FuaXRpemVGbn0gZnJvbSAnLi4vLi4vc2FuaXRpemF0aW9uL3N0eWxlX3Nhbml0aXplcic7XG5pbXBvcnQge0tleVZhbHVlQXJyYXksIGtleVZhbHVlQXJyYXlHZXQsIGtleVZhbHVlQXJyYXlTZXR9IGZyb20gJy4uLy4uL3V0aWwvYXJyYXlfdXRpbHMnO1xuaW1wb3J0IHthc3NlcnREZWZpbmVkLCBhc3NlcnRFcXVhbCwgYXNzZXJ0TGVzc1RoYW4sIGFzc2VydE5vdEVxdWFsLCB0aHJvd0Vycm9yfSBmcm9tICcuLi8uLi91dGlsL2Fzc2VydCc7XG5pbXBvcnQge0VNUFRZX0FSUkFZfSBmcm9tICcuLi8uLi91dGlsL2VtcHR5JztcbmltcG9ydCB7Y29uY2F0U3RyaW5nc1dpdGhTcGFjZSwgc3RyaW5naWZ5fSBmcm9tICcuLi8uLi91dGlsL3N0cmluZ2lmeSc7XG5pbXBvcnQge2Fzc2VydEZpcnN0VXBkYXRlUGFzc30gZnJvbSAnLi4vYXNzZXJ0JztcbmltcG9ydCB7YmluZGluZ1VwZGF0ZWR9IGZyb20gJy4uL2JpbmRpbmdzJztcbmltcG9ydCB7RGlyZWN0aXZlRGVmfSBmcm9tICcuLi9pbnRlcmZhY2VzL2RlZmluaXRpb24nO1xuaW1wb3J0IHtBdHRyaWJ1dGVNYXJrZXIsIFRBdHRyaWJ1dGVzLCBUTm9kZSwgVE5vZGVGbGFncywgVE5vZGVUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtSRWxlbWVudCwgUmVuZGVyZXIzfSBmcm9tICcuLi9pbnRlcmZhY2VzL3JlbmRlcmVyJztcbmltcG9ydCB7U2FuaXRpemVyRm59IGZyb20gJy4uL2ludGVyZmFjZXMvc2FuaXRpemF0aW9uJztcbmltcG9ydCB7Z2V0VFN0eWxpbmdSYW5nZU5leHQsIGdldFRTdHlsaW5nUmFuZ2VOZXh0RHVwbGljYXRlLCBnZXRUU3R5bGluZ1JhbmdlUHJldiwgZ2V0VFN0eWxpbmdSYW5nZVByZXZEdXBsaWNhdGUsIFRTdHlsaW5nS2V5LCBUU3R5bGluZ1JhbmdlfSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0eWxpbmcnO1xuaW1wb3J0IHtIRUFERVJfT0ZGU0VULCBMVmlldywgUkVOREVSRVIsIFREYXRhLCBUVmlld30gZnJvbSAnLi4vaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7YXBwbHlTdHlsaW5nfSBmcm9tICcuLi9ub2RlX21hbmlwdWxhdGlvbic7XG5pbXBvcnQge2dldEN1cnJlbnREaXJlY3RpdmVEZWYsIGdldEN1cnJlbnRTdHlsZVNhbml0aXplciwgZ2V0TFZpZXcsIGdldFNlbGVjdGVkSW5kZXgsIGdldFRWaWV3LCBpbmNyZW1lbnRCaW5kaW5nSW5kZXgsIHNldEN1cnJlbnRTdHlsZVNhbml0aXplcn0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHtpbnNlcnRUU3R5bGluZ0JpbmRpbmd9IGZyb20gJy4uL3N0eWxpbmcvc3R5bGVfYmluZGluZ19saXN0JztcbmltcG9ydCB7Z2V0TGFzdFBhcnNlZEtleSwgZ2V0TGFzdFBhcnNlZFZhbHVlLCBwYXJzZUNsYXNzTmFtZSwgcGFyc2VDbGFzc05hbWVOZXh0LCBwYXJzZVN0eWxlLCBwYXJzZVN0eWxlTmV4dH0gZnJvbSAnLi4vc3R5bGluZy9zdHlsaW5nX3BhcnNlcic7XG5pbXBvcnQge05PX0NIQU5HRX0gZnJvbSAnLi4vdG9rZW5zJztcbmltcG9ydCB7Z2V0TmF0aXZlQnlJbmRleH0gZnJvbSAnLi4vdXRpbC92aWV3X3V0aWxzJztcblxuaW1wb3J0IHtzZXREaXJlY3RpdmVJbnB1dHNXaGljaFNoYWRvd3NTdHlsaW5nfSBmcm9tICcuL3Byb3BlcnR5JztcblxuXG4vKipcbiAqIFNldHMgdGhlIGN1cnJlbnQgc3R5bGUgc2FuaXRpemVyIGZ1bmN0aW9uIHdoaWNoIHdpbGwgdGhlbiBiZSB1c2VkXG4gKiB3aXRoaW4gYWxsIGZvbGxvdy11cCBwcm9wIGFuZCBtYXAtYmFzZWQgc3R5bGUgYmluZGluZyBpbnN0cnVjdGlvbnNcbiAqIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBOb3RlIHRoYXQgb25jZSBzdHlsaW5nIGhhcyBiZWVuIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgKGkuZS4gb25jZVxuICogYGFkdmFuY2UobilgIGlzIGV4ZWN1dGVkIG9yIHRoZSBob3N0QmluZGluZ3MvdGVtcGxhdGUgZnVuY3Rpb24gZXhpdHMpXG4gKiB0aGVuIHRoZSBhY3RpdmUgYHNhbml0aXplckZuYCB3aWxsIGJlIHNldCB0byBgbnVsbGAuIFRoaXMgbWVhbnMgdGhhdFxuICogb25jZSBzdHlsaW5nIGlzIGFwcGxpZWQgdG8gYW5vdGhlciBlbGVtZW50IHRoZW4gYSBhbm90aGVyIGNhbGwgdG9cbiAqIGBzdHlsZVNhbml0aXplcmAgd2lsbCBuZWVkIHRvIGJlIG1hZGUuXG4gKlxuICogQHBhcmFtIHNhbml0aXplckZuIFRoZSBzYW5pdGl6YXRpb24gZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG9cbiAqICAgICAgIHByb2Nlc3Mgc3R5bGUgcHJvcC92YWx1ZSBlbnRyaWVzLlxuICpcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1c3R5bGVTYW5pdGl6ZXIoc2FuaXRpemVyOiBTdHlsZVNhbml0aXplRm58bnVsbCk6IHZvaWQge1xuICBzZXRDdXJyZW50U3R5bGVTYW5pdGl6ZXIoc2FuaXRpemVyKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYSBzdHlsZSBiaW5kaW5nIG9uIGFuIGVsZW1lbnQgd2l0aCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogSWYgdGhlIHN0eWxlIHZhbHVlIGlzIGZhbHN5IHRoZW4gaXQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGVsZW1lbnRcbiAqIChvciBhc3NpZ25lZCBhIGRpZmZlcmVudCB2YWx1ZSBkZXBlbmRpbmcgaWYgdGhlcmUgYXJlIGFueSBzdHlsZXMgcGxhY2VkXG4gKiBvbiB0aGUgZWxlbWVudCB3aXRoIGBzdHlsZU1hcGAgb3IgYW55IHN0YXRpYyBzdHlsZXMgdGhhdCBhcmVcbiAqIHByZXNlbnQgZnJvbSB3aGVuIHRoZSBlbGVtZW50IHdhcyBjcmVhdGVkIHdpdGggYHN0eWxpbmdgKS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIHN0eWxpbmcgZWxlbWVudCBpcyB1cGRhdGVkIGFzIHBhcnQgb2YgYHN0eWxpbmdBcHBseWAuXG4gKlxuICogQHBhcmFtIHByb3AgQSB2YWxpZCBDU1MgcHJvcGVydHkuXG4gKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIHRvIHdyaXRlIChgbnVsbGAgb3IgYW4gZW1wdHkgc3RyaW5nIHRvIHJlbW92ZSkuXG4gKiBAcGFyYW0gc3VmZml4IE9wdGlvbmFsIHN1ZmZpeC4gVXNlZCB3aXRoIHNjYWxhciB2YWx1ZXMgdG8gYWRkIHVuaXQgc3VjaCBhcyBgcHhgLlxuICogICAgICAgIE5vdGUgdGhhdCB3aGVuIGEgc3VmZml4IGlzIHByb3ZpZGVkIHRoZW4gdGhlIHVuZGVybHlpbmcgc2FuaXRpemVyIHdpbGxcbiAqICAgICAgICBiZSBpZ25vcmVkLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIHdpbGwgYXBwbHkgdGhlIHByb3ZpZGVkIHN0eWxlIHZhbHVlIHRvIHRoZSBob3N0IGVsZW1lbnQgaWYgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWRcbiAqIHdpdGhpbiBhIGhvc3QgYmluZGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtXN0eWxlUHJvcChcbiAgICBwcm9wOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd8bnVtYmVyfFNhZmVWYWx1ZXx1bmRlZmluZWR8bnVsbCxcbiAgICBzdWZmaXg/OiBzdHJpbmd8bnVsbCk6IHR5cGVvZiDJtcm1c3R5bGVQcm9wIHtcbiAgY2hlY2tTdHlsaW5nUHJvcGVydHkocHJvcCwgdmFsdWUsIHN1ZmZpeCwgZmFsc2UpO1xuICByZXR1cm4gybXJtXN0eWxlUHJvcDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYSBjbGFzcyBiaW5kaW5nIG9uIGFuIGVsZW1lbnQgd2l0aCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogVGhpcyBpbnN0cnVjdGlvbiBpcyBtZWFudCB0byBoYW5kbGUgdGhlIGBbY2xhc3MuZm9vXT1cImV4cFwiYCBjYXNlIGFuZCxcbiAqIHRoZXJlZm9yZSwgdGhlIGNsYXNzIGJpbmRpbmcgaXRzZWxmIG11c3QgYWxyZWFkeSBiZSBhbGxvY2F0ZWQgdXNpbmdcbiAqIGBzdHlsaW5nYCB3aXRoaW4gdGhlIGNyZWF0aW9uIGJsb2NrLlxuICpcbiAqIEBwYXJhbSBwcm9wIEEgdmFsaWQgQ1NTIGNsYXNzIChvbmx5IG9uZSkuXG4gKiBAcGFyYW0gdmFsdWUgQSB0cnVlL2ZhbHNlIHZhbHVlIHdoaWNoIHdpbGwgdHVybiB0aGUgY2xhc3Mgb24gb3Igb2ZmLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIHdpbGwgYXBwbHkgdGhlIHByb3ZpZGVkIGNsYXNzIHZhbHVlIHRvIHRoZSBob3N0IGVsZW1lbnQgaWYgdGhpcyBmdW5jdGlvblxuICogaXMgY2FsbGVkIHdpdGhpbiBhIGhvc3QgYmluZGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtWNsYXNzUHJvcChjbGFzc05hbWU6IHN0cmluZywgdmFsdWU6IGJvb2xlYW58dW5kZWZpbmVkfG51bGwpOiB0eXBlb2YgybXJtWNsYXNzUHJvcCB7XG4gIGNoZWNrU3R5bGluZ1Byb3BlcnR5KGNsYXNzTmFtZSwgdmFsdWUsIG51bGwsIHRydWUpO1xuICByZXR1cm4gybXJtWNsYXNzUHJvcDtcbn1cblxuXG4vKipcbiAqIFVwZGF0ZSBzdHlsZSBiaW5kaW5ncyB1c2luZyBhbiBvYmplY3QgbGl0ZXJhbCBvbiBhbiBlbGVtZW50LlxuICpcbiAqIFRoaXMgaW5zdHJ1Y3Rpb24gaXMgbWVhbnQgdG8gYXBwbHkgc3R5bGluZyB2aWEgdGhlIGBbc3R5bGVdPVwiZXhwXCJgIHRlbXBsYXRlIGJpbmRpbmdzLlxuICogV2hlbiBzdHlsZXMgYXJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgdGhleSB3aWxsIHRoZW4gYmUgdXBkYXRlZCB3aXRoIHJlc3BlY3QgdG9cbiAqIGFueSBzdHlsZXMvY2xhc3NlcyBzZXQgdmlhIGBzdHlsZVByb3BgLiBJZiBhbnkgc3R5bGVzIGFyZSBzZXQgdG8gZmFsc3lcbiAqIHRoZW4gdGhleSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgZWxlbWVudC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIHN0eWxpbmcgaW5zdHJ1Y3Rpb24gd2lsbCBub3QgYmUgYXBwbGllZCB1bnRpbCBgc3R5bGluZ0FwcGx5YCBpcyBjYWxsZWQuXG4gKlxuICogQHBhcmFtIHN0eWxlcyBBIGtleS92YWx1ZSBzdHlsZSBtYXAgb2YgdGhlIHN0eWxlcyB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqICAgICAgICBBbnkgbWlzc2luZyBzdHlsZXMgKHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gYXBwbGllZCB0byB0aGUgZWxlbWVudCBiZWZvcmVoYW5kKSB3aWxsIGJlXG4gKiAgICAgICAgcmVtb3ZlZCAodW5zZXQpIGZyb20gdGhlIGVsZW1lbnQncyBzdHlsaW5nLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIHdpbGwgYXBwbHkgdGhlIHByb3ZpZGVkIHN0eWxlTWFwIHZhbHVlIHRvIHRoZSBob3N0IGVsZW1lbnQgaWYgdGhpcyBmdW5jdGlvblxuICogaXMgY2FsbGVkIHdpdGhpbiBhIGhvc3QgYmluZGluZy5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtXN0eWxlTWFwKHN0eWxlczoge1tzdHlsZU5hbWU6IHN0cmluZ106IGFueX18c3RyaW5nfHVuZGVmaW5lZHxudWxsKTogdm9pZCB7XG4gIGNoZWNrU3R5bGluZ01hcChzdHlsZUtleVZhbHVlQXJyYXlTZXQsIHN0eWxlU3RyaW5nUGFyc2VyLCBzdHlsZXMsIGZhbHNlKTtcbn1cblxuXG4vKipcbiAqIFBhcnNlIHRleHQgYXMgc3R5bGUgYW5kIGFkZCB2YWx1ZXMgdG8gS2V5VmFsdWVBcnJheS5cbiAqXG4gKiBUaGlzIGNvZGUgaXMgcHVsbGVkIG91dCB0byBhIHNlcGFyYXRlIGZ1bmN0aW9uIHNvIHRoYXQgaXQgY2FuIGJlIHRyZWUgc2hha2VuIGF3YXkgaWYgaXQgaXMgbm90XG4gKiBuZWVkZWQuIEl0IGlzIG9ubHkgcmVmZXJlbmNlZCBmcm9tIGDJtcm1c3R5bGVNYXBgLlxuICpcbiAqIEBwYXJhbSBrZXlWYWx1ZUFycmF5IEtleVZhbHVlQXJyYXkgdG8gYWRkIHBhcnNlZCB2YWx1ZXMgdG8uXG4gKiBAcGFyYW0gdGV4dCB0ZXh0IHRvIHBhcnNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVTdHJpbmdQYXJzZXIoa2V5VmFsdWVBcnJheTogS2V5VmFsdWVBcnJheTxhbnk+LCB0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgZm9yIChsZXQgaSA9IHBhcnNlU3R5bGUodGV4dCk7IGkgPj0gMDsgaSA9IHBhcnNlU3R5bGVOZXh0KHRleHQsIGkpKSB7XG4gICAgc3R5bGVLZXlWYWx1ZUFycmF5U2V0KGtleVZhbHVlQXJyYXksIGdldExhc3RQYXJzZWRLZXkodGV4dCksIGdldExhc3RQYXJzZWRWYWx1ZSh0ZXh0KSk7XG4gIH1cbn1cblxuXG4vKipcbiAqIFVwZGF0ZSBjbGFzcyBiaW5kaW5ncyB1c2luZyBhbiBvYmplY3QgbGl0ZXJhbCBvciBjbGFzcy1zdHJpbmcgb24gYW4gZWxlbWVudC5cbiAqXG4gKiBUaGlzIGluc3RydWN0aW9uIGlzIG1lYW50IHRvIGFwcGx5IHN0eWxpbmcgdmlhIHRoZSBgW2NsYXNzXT1cImV4cFwiYCB0ZW1wbGF0ZSBiaW5kaW5ncy5cbiAqIFdoZW4gY2xhc3NlcyBhcmUgYXBwbGllZCB0byB0aGUgZWxlbWVudCB0aGV5IHdpbGwgdGhlbiBiZSB1cGRhdGVkIHdpdGhcbiAqIHJlc3BlY3QgdG8gYW55IHN0eWxlcy9jbGFzc2VzIHNldCB2aWEgYGNsYXNzUHJvcGAuIElmIGFueVxuICogY2xhc3NlcyBhcmUgc2V0IHRvIGZhbHN5IHRoZW4gdGhleSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgZWxlbWVudC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIHN0eWxpbmcgaW5zdHJ1Y3Rpb24gd2lsbCBub3QgYmUgYXBwbGllZCB1bnRpbCBgc3R5bGluZ0FwcGx5YCBpcyBjYWxsZWQuXG4gKiBOb3RlIHRoYXQgdGhpcyB3aWxsIHRoZSBwcm92aWRlZCBjbGFzc01hcCB2YWx1ZSB0byB0aGUgaG9zdCBlbGVtZW50IGlmIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkXG4gKiB3aXRoaW4gYSBob3N0IGJpbmRpbmcuXG4gKlxuICogQHBhcmFtIGNsYXNzZXMgQSBrZXkvdmFsdWUgbWFwIG9yIHN0cmluZyBvZiBDU1MgY2xhc3NlcyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gKiAgICAgICAgZ2l2ZW4gZWxlbWVudC4gQW55IG1pc3NpbmcgY2xhc3NlcyAodGhhdCBoYXZlIGFscmVhZHkgYmVlbiBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gKiAgICAgICAgYmVmb3JlaGFuZCkgd2lsbCBiZSByZW1vdmVkICh1bnNldCkgZnJvbSB0aGUgZWxlbWVudCdzIGxpc3Qgb2YgQ1NTIGNsYXNzZXMuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVjbGFzc01hcChjbGFzc2VzOiB7W2NsYXNzTmFtZTogc3RyaW5nXTogYm9vbGVhbnx1bmRlZmluZWR8bnVsbH18c3RyaW5nfHVuZGVmaW5lZHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwpOiB2b2lkIHtcbiAgY2hlY2tTdHlsaW5nTWFwKGtleVZhbHVlQXJyYXlTZXQsIGNsYXNzU3RyaW5nUGFyc2VyLCBjbGFzc2VzLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBQYXJzZSB0ZXh0IGFzIGNsYXNzIGFuZCBhZGQgdmFsdWVzIHRvIEtleVZhbHVlQXJyYXkuXG4gKlxuICogVGhpcyBjb2RlIGlzIHB1bGxlZCBvdXQgdG8gYSBzZXBhcmF0ZSBmdW5jdGlvbiBzbyB0aGF0IGl0IGNhbiBiZSB0cmVlIHNoYWtlbiBhd2F5IGlmIGl0IGlzIG5vdFxuICogbmVlZGVkLiBJdCBpcyBvbmx5IHJlZmVyZW5jZWQgZnJvbSBgybXJtWNsYXNzTWFwYC5cbiAqXG4gKiBAcGFyYW0ga2V5VmFsdWVBcnJheSBLZXlWYWx1ZUFycmF5IHRvIGFkZCBwYXJzZWQgdmFsdWVzIHRvLlxuICogQHBhcmFtIHRleHQgdGV4dCB0byBwYXJzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzU3RyaW5nUGFyc2VyKGtleVZhbHVlQXJyYXk6IEtleVZhbHVlQXJyYXk8YW55PiwgdGV4dDogc3RyaW5nKTogdm9pZCB7XG4gIGZvciAobGV0IGkgPSBwYXJzZUNsYXNzTmFtZSh0ZXh0KTsgaSA+PSAwOyBpID0gcGFyc2VDbGFzc05hbWVOZXh0KHRleHQsIGkpKSB7XG4gICAga2V5VmFsdWVBcnJheVNldChrZXlWYWx1ZUFycmF5LCBnZXRMYXN0UGFyc2VkS2V5KHRleHQpLCB0cnVlKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbW1vbiBjb2RlIGJldHdlZW4gYMm1ybVjbGFzc1Byb3BgIGFuZCBgybXJtXN0eWxlUHJvcGAuXG4gKlxuICogQHBhcmFtIHByb3AgcHJvcGVydHkgbmFtZS5cbiAqIEBwYXJhbSB2YWx1ZSBiaW5kaW5nIHZhbHVlLlxuICogQHBhcmFtIHN1ZmZpeE9yU2FuaXRpemVyIHN1ZmZpeCBvciBzYW5pdGl6YXRpb24gZnVuY3Rpb25cbiAqIEBwYXJhbSBpc0NsYXNzQmFzZWQgYHRydWVgIGlmIGBjbGFzc2AgY2hhbmdlIChgZmFsc2VgIGlmIGBzdHlsZWApXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1N0eWxpbmdQcm9wZXJ0eShcbiAgICBwcm9wOiBzdHJpbmcsIHZhbHVlOiBhbnl8Tk9fQ0hBTkdFLCBzdWZmaXhPclNhbml0aXplcjogU2FuaXRpemVyRm58c3RyaW5nfHVuZGVmaW5lZHxudWxsLFxuICAgIGlzQ2xhc3NCYXNlZDogYm9vbGVhbik6IHZvaWQge1xuICBjb25zdCBsVmlldyA9IGdldExWaWV3KCk7XG4gIGNvbnN0IHRWaWV3ID0gZ2V0VFZpZXcoKTtcbiAgLy8gU3R5bGluZyBpbnN0cnVjdGlvbnMgdXNlIDIgc2xvdHMgcGVyIGJpbmRpbmcuXG4gIC8vIDEuIG9uZSBmb3IgdGhlIHZhbHVlIC8gVFN0eWxpbmdLZXlcbiAgLy8gMi4gb25lIGZvciB0aGUgaW50ZXJtaXR0ZW50LXZhbHVlIC8gVFN0eWxpbmdSYW5nZVxuICBjb25zdCBiaW5kaW5nSW5kZXggPSBpbmNyZW1lbnRCaW5kaW5nSW5kZXgoMik7XG4gIGlmICh0Vmlldy5maXJzdFVwZGF0ZVBhc3MpIHtcbiAgICBzdHlsaW5nRmlyc3RVcGRhdGVQYXNzKHRWaWV3LCBwcm9wLCBiaW5kaW5nSW5kZXgsIGlzQ2xhc3NCYXNlZCk7XG4gIH1cbiAgaWYgKHZhbHVlICE9PSBOT19DSEFOR0UgJiYgYmluZGluZ1VwZGF0ZWQobFZpZXcsIGJpbmRpbmdJbmRleCwgdmFsdWUpKSB7XG4gICAgLy8gVGhpcyBpcyBhIHdvcmsgYXJvdW5kLiBPbmNlIFBSIzM0NDgwIGxhbmRzIHRoZSBzYW5pdGl6ZXIgaXMgcGFzc2VkIGV4cGxpY2l0bHkgYW5kIHRoaXMgbGluZVxuICAgIC8vIGNhbiBiZSByZW1vdmVkLlxuICAgIGxldCBzdHlsZVNhbml0aXplcjogU3R5bGVTYW5pdGl6ZUZufG51bGw7XG4gICAgaWYgKHN1ZmZpeE9yU2FuaXRpemVyID09IG51bGwpIHtcbiAgICAgIGlmIChzdHlsZVNhbml0aXplciA9IGdldEN1cnJlbnRTdHlsZVNhbml0aXplcigpKSB7XG4gICAgICAgIHN1ZmZpeE9yU2FuaXRpemVyID0gc3R5bGVTYW5pdGl6ZXIgYXMgYW55O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0Tm9kZSA9IHRWaWV3LmRhdGFbZ2V0U2VsZWN0ZWRJbmRleCgpICsgSEVBREVSX09GRlNFVF0gYXMgVE5vZGU7XG4gICAgdXBkYXRlU3R5bGluZyhcbiAgICAgICAgdFZpZXcsIHROb2RlLCBsVmlldywgbFZpZXdbUkVOREVSRVJdLCBwcm9wLFxuICAgICAgICBsVmlld1tiaW5kaW5nSW5kZXggKyAxXSA9IG5vcm1hbGl6ZUFuZEFwcGx5U3VmZml4T3JTYW5pdGl6ZXIodmFsdWUsIHN1ZmZpeE9yU2FuaXRpemVyKSxcbiAgICAgICAgaXNDbGFzc0Jhc2VkLCBiaW5kaW5nSW5kZXgpO1xuICB9XG59XG5cbi8qKlxuICogQ29tbW9uIGNvZGUgYmV0d2VlbiBgybXJtWNsYXNzTWFwYCBhbmQgYMm1ybVzdHlsZU1hcGAuXG4gKlxuICogQHBhcmFtIGtleVZhbHVlQXJyYXlTZXQgKFNlZSBga2V5VmFsdWVBcnJheVNldGAgaW4gXCJ1dGlsL2FycmF5X3V0aWxzXCIpIEdldHMgcGFzc2VkIGluIGFzIGFcbiAqIGZ1bmN0aW9uIHNvIHRoYXRcbiAqICAgICAgICBgc3R5bGVgIGNhbiBwYXNzIGluIHZlcnNpb24gd2hpY2ggZG9lcyBzYW5pdGl6YXRpb24uIFRoaXMgaXMgZG9uZSBmb3IgdHJlZSBzaGFraW5nXG4gKiAgICAgICAgcHVycG9zZXMuXG4gKiBAcGFyYW0gc3RyaW5nUGFyc2VyIFBhcnNlciB1c2VkIHRvIHBhcnNlIGB2YWx1ZWAgaWYgYHN0cmluZ2AuIChQYXNzZWQgaW4gYXMgYHN0eWxlYCBhbmQgYGNsYXNzYFxuICogICAgICAgIGhhdmUgZGlmZmVyZW50IHBhcnNlcnMuKVxuICogQHBhcmFtIHZhbHVlIGJvdW5kIHZhbHVlIGZyb20gYXBwbGljYXRpb25cbiAqIEBwYXJhbSBpc0NsYXNzQmFzZWQgYHRydWVgIGlmIGBjbGFzc2AgY2hhbmdlIChgZmFsc2VgIGlmIGBzdHlsZWApXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1N0eWxpbmdNYXAoXG4gICAga2V5VmFsdWVBcnJheVNldDogKGtleVZhbHVlQXJyYXk6IEtleVZhbHVlQXJyYXk8YW55Piwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHZvaWQsXG4gICAgc3RyaW5nUGFyc2VyOiAoc3R5bGVLZXlWYWx1ZUFycmF5OiBLZXlWYWx1ZUFycmF5PGFueT4sIHRleHQ6IHN0cmluZykgPT4gdm9pZCxcbiAgICB2YWx1ZTogYW55fE5PX0NIQU5HRSwgaXNDbGFzc0Jhc2VkOiBib29sZWFuKTogdm9pZCB7XG4gIGNvbnN0IHRWaWV3ID0gZ2V0VFZpZXcoKTtcbiAgY29uc3QgYmluZGluZ0luZGV4ID0gaW5jcmVtZW50QmluZGluZ0luZGV4KDIpO1xuICBpZiAodFZpZXcuZmlyc3RVcGRhdGVQYXNzKSB7XG4gICAgc3R5bGluZ0ZpcnN0VXBkYXRlUGFzcyh0VmlldywgbnVsbCwgYmluZGluZ0luZGV4LCBpc0NsYXNzQmFzZWQpO1xuICB9XG4gIGNvbnN0IGxWaWV3ID0gZ2V0TFZpZXcoKTtcbiAgaWYgKHZhbHVlICE9PSBOT19DSEFOR0UgJiYgYmluZGluZ1VwZGF0ZWQobFZpZXcsIGJpbmRpbmdJbmRleCwgdmFsdWUpKSB7XG4gICAgLy8gYGdldFNlbGVjdGVkSW5kZXgoKWAgc2hvdWxkIGJlIGhlcmUgKHJhdGhlciB0aGFuIGluIGluc3RydWN0aW9uKSBzbyB0aGF0IGl0IGlzIGd1YXJkZWQgYnkgdGhlXG4gICAgLy8gaWYgc28gYXMgbm90IHRvIHJlYWQgdW5uZWNlc3NhcmlseS5cbiAgICBjb25zdCB0Tm9kZSA9IHRWaWV3LmRhdGFbZ2V0U2VsZWN0ZWRJbmRleCgpICsgSEVBREVSX09GRlNFVF0gYXMgVE5vZGU7XG4gICAgaWYgKGhhc1N0eWxpbmdJbnB1dFNoYWRvdyh0Tm9kZSwgaXNDbGFzc0Jhc2VkKSAmJiAhaXNJbkhvc3RCaW5kaW5ncyh0VmlldywgYmluZGluZ0luZGV4KSkge1xuICAgICAgaWYgKG5nRGV2TW9kZSkge1xuICAgICAgICAvLyB2ZXJpZnkgdGhhdCBpZiB3ZSBhcmUgc2hhZG93aW5nIHRoZW4gYFREYXRhYCBpcyBhcHByb3ByaWF0ZWx5IG1hcmtlZCBzbyB0aGF0IHdlIHNraXBcbiAgICAgICAgLy8gcHJvY2Vzc2luZyB0aGlzIGJpbmRpbmcgaW4gc3R5bGluZyByZXNvbHV0aW9uLlxuICAgICAgICBjb25zdCB0U3R5bGluZ0tleSA9IHRWaWV3LmRhdGFbYmluZGluZ0luZGV4XTtcbiAgICAgICAgYXNzZXJ0RXF1YWwoXG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KHRTdHlsaW5nS2V5KSA/IHRTdHlsaW5nS2V5WzFdIDogdFN0eWxpbmdLZXksIGZhbHNlLFxuICAgICAgICAgICAgJ1N0eWxpbmcgbGlua2VkIGxpc3Qgc2hhZG93IGlucHV0IHNob3VsZCBiZSBtYXJrZWQgYXMgXFwnZmFsc2VcXCcnKTtcbiAgICAgIH1cbiAgICAgIC8vIFZFIGRvZXMgbm90IGNvbmNhdGVuYXRlIHRoZSBzdGF0aWMgcG9ydGlvbiBsaWtlIHdlIGFyZSBkb2luZyBoZXJlLlxuICAgICAgLy8gSW5zdGVhZCBWRSBqdXN0IGlnbm9yZXMgdGhlIHN0YXRpYyBjb21wbGV0ZWx5IGlmIGR5bmFtaWMgYmluZGluZyBpcyBwcmVzZW50LlxuICAgICAgLy8gQmVjYXVzZSBvZiBsb2NhbGl0eSB3ZSBoYXZlIGFscmVhZHkgc2V0IHRoZSBzdGF0aWMgcG9ydGlvbiBiZWNhdXNlIHdlIGRvbid0IGtub3cgaWYgdGhlcmVcbiAgICAgIC8vIGlzIGEgZHluYW1pYyBwb3J0aW9uIHVudGlsIGxhdGVyLiBJZiB3ZSB3b3VsZCBpZ25vcmUgdGhlIHN0YXRpYyBwb3J0aW9uIGl0IHdvdWxkIGxvb2sgbGlrZVxuICAgICAgLy8gdGhlIGJpbmRpbmcgaGFzIHJlbW92ZWQgaXQuIFRoaXMgd291bGQgY29uZnVzZSBgW25nU3R5bGVdYC9gW25nQ2xhc3NdYCB0byBkbyB0aGUgd3JvbmdcbiAgICAgIC8vIHRoaW5nIGFzIGl0IHdvdWxkIHRoaW5rIHRoYXQgdGhlIHN0YXRpYyBwb3J0aW9uIHdhcyByZW1vdmVkLiBGb3IgdGhpcyByZWFzb24gd2VcbiAgICAgIC8vIGNvbmNhdGVuYXRlIGl0IHNvIHRoYXQgYFtuZ1N0eWxlXWAvYFtuZ0NsYXNzXWAgIGNhbiBjb250aW51ZSB0byB3b3JrIG9uIGNoYW5nZWQuXG4gICAgICBsZXQgc3RhdGljUHJlZml4ID0gaXNDbGFzc0Jhc2VkID8gdE5vZGUuY2xhc3Nlc1dpdGhvdXRIb3N0IDogdE5vZGUuc3R5bGVzV2l0aG91dEhvc3Q7XG4gICAgICBuZ0Rldk1vZGUgJiYgaXNDbGFzc0Jhc2VkID09PSBmYWxzZSAmJiBzdGF0aWNQcmVmaXggIT09IG51bGwgJiZcbiAgICAgICAgICBhc3NlcnRFcXVhbChcbiAgICAgICAgICAgICAgc3RhdGljUHJlZml4LmVuZHNXaXRoKCc7JyksIHRydWUsICdFeHBlY3Rpbmcgc3RhdGljIHBvcnRpb24gdG8gZW5kIHdpdGggXFwnO1xcJycpO1xuICAgICAgaWYgKHN0YXRpY1ByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgICAvLyBXZSB3YW50IHRvIG1ha2Ugc3VyZSB0aGF0IGZhbHN5IHZhbHVlcyBvZiBgdmFsdWVgIGJlY29tZSBlbXB0eSBzdHJpbmdzLlxuICAgICAgICB2YWx1ZSA9IGNvbmNhdFN0cmluZ3NXaXRoU3BhY2Uoc3RhdGljUHJlZml4LCB2YWx1ZSA/IHZhbHVlIDogJycpO1xuICAgICAgfVxuICAgICAgLy8gR2l2ZW4gYDxkaXYgW3N0eWxlXSBteS1kaXI+YCBzdWNoIHRoYXQgYG15LWRpcmAgaGFzIGBASW5wdXQoJ3N0eWxlJylgLlxuICAgICAgLy8gVGhpcyB0YWtlcyBvdmVyIHRoZSBgW3N0eWxlXWAgYmluZGluZy4gKFNhbWUgZm9yIGBbY2xhc3NdYClcbiAgICAgIHNldERpcmVjdGl2ZUlucHV0c1doaWNoU2hhZG93c1N0eWxpbmcodFZpZXcsIHROb2RlLCBsVmlldywgdmFsdWUsIGlzQ2xhc3NCYXNlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZVN0eWxpbmdNYXAoXG4gICAgICAgICAgdFZpZXcsIHROb2RlLCBsVmlldywgbFZpZXdbUkVOREVSRVJdLCBsVmlld1tiaW5kaW5nSW5kZXggKyAxXSxcbiAgICAgICAgICBsVmlld1tiaW5kaW5nSW5kZXggKyAxXSA9IHRvU3R5bGluZ0tleVZhbHVlQXJyYXkoa2V5VmFsdWVBcnJheVNldCwgc3RyaW5nUGFyc2VyLCB2YWx1ZSksXG4gICAgICAgICAgaXNDbGFzc0Jhc2VkLCBiaW5kaW5nSW5kZXgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hlbiB0aGUgYmluZGluZyBpcyBpbiBgaG9zdEJpbmRpbmdzYCBzZWN0aW9uXG4gKlxuICogQHBhcmFtIHRWaWV3IEN1cnJlbnQgYFRWaWV3YFxuICogQHBhcmFtIGJpbmRpbmdJbmRleCBpbmRleCBvZiBiaW5kaW5nIHdoaWNoIHdlIHdvdWxkIGxpa2UgaWYgaXQgaXMgaW4gYGhvc3RCaW5kaW5nc2BcbiAqL1xuZnVuY3Rpb24gaXNJbkhvc3RCaW5kaW5ncyh0VmlldzogVFZpZXcsIGJpbmRpbmdJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIC8vIEFsbCBob3N0IGJpbmRpbmdzIGFyZSBwbGFjZWQgYWZ0ZXIgdGhlIGV4cGFuZG8gc2VjdGlvbi5cbiAgcmV0dXJuIGJpbmRpbmdJbmRleCA+PSB0Vmlldy5leHBhbmRvU3RhcnRJbmRleDtcbn1cblxuLyoqXG4gKiBDb2xsZWN0cyB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIHRvIGluc2VydCB0aGUgYmluZGluZyBpbnRvIGEgbGlua2VkIGxpc3Qgb2Ygc3R5bGUgYmluZGluZ3NcbiAqIHVzaW5nIGBpbnNlcnRUU3R5bGluZ0JpbmRpbmdgLlxuICpcbiAqIEBwYXJhbSB0VmlldyBgVFZpZXdgIHdoZXJlIHRoZSBiaW5kaW5nIGxpbmtlZCBsaXN0IHdpbGwgYmUgc3RvcmVkLlxuICogQHBhcmFtIHRTdHlsaW5nS2V5IFByb3BlcnR5L2tleSBvZiB0aGUgYmluZGluZy5cbiAqIEBwYXJhbSBiaW5kaW5nSW5kZXggSW5kZXggb2YgYmluZGluZyBhc3NvY2lhdGVkIHdpdGggdGhlIGBwcm9wYFxuICogQHBhcmFtIGlzQ2xhc3NCYXNlZCBgdHJ1ZWAgaWYgYGNsYXNzYCBjaGFuZ2UgKGBmYWxzZWAgaWYgYHN0eWxlYClcbiAqL1xuZnVuY3Rpb24gc3R5bGluZ0ZpcnN0VXBkYXRlUGFzcyhcbiAgICB0VmlldzogVFZpZXcsIHRTdHlsaW5nS2V5OiBUU3R5bGluZ0tleSwgYmluZGluZ0luZGV4OiBudW1iZXIsIGlzQ2xhc3NCYXNlZDogYm9vbGVhbik6IHZvaWQge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0Rmlyc3RVcGRhdGVQYXNzKHRWaWV3KTtcbiAgY29uc3QgdERhdGEgPSB0Vmlldy5kYXRhO1xuICBpZiAodERhdGFbYmluZGluZ0luZGV4ICsgMV0gPT09IG51bGwpIHtcbiAgICAvLyBUaGUgYWJvdmUgY2hlY2sgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugd2UgZG9uJ3QgY2xlYXIgZmlyc3QgdXBkYXRlIHBhc3MgdW50aWwgZmlyc3Qgc3VjY2Vzc2Z1bFxuICAgIC8vIChubyBleGNlcHRpb24pIHRlbXBsYXRlIGV4ZWN1dGlvbi4gVGhpcyBwcmV2ZW50cyB0aGUgc3R5bGluZyBpbnN0cnVjdGlvbiBmcm9tIGRvdWJsZSBhZGRpbmdcbiAgICAvLyBpdHNlbGYgdG8gdGhlIGxpc3QuXG4gICAgLy8gYGdldFNlbGVjdGVkSW5kZXgoKWAgc2hvdWxkIGJlIGhlcmUgKHJhdGhlciB0aGFuIGluIGluc3RydWN0aW9uKSBzbyB0aGF0IGl0IGlzIGd1YXJkZWQgYnkgdGhlXG4gICAgLy8gaWYgc28gYXMgbm90IHRvIHJlYWQgdW5uZWNlc3NhcmlseS5cbiAgICBjb25zdCB0Tm9kZSA9IHREYXRhW2dldFNlbGVjdGVkSW5kZXgoKSArIEhFQURFUl9PRkZTRVRdIGFzIFROb2RlO1xuICAgIGNvbnN0IGlzSG9zdEJpbmRpbmdzID0gaXNJbkhvc3RCaW5kaW5ncyh0VmlldywgYmluZGluZ0luZGV4KTtcbiAgICBpZiAoaGFzU3R5bGluZ0lucHV0U2hhZG93KHROb2RlLCBpc0NsYXNzQmFzZWQpICYmIHRTdHlsaW5nS2V5ID09PSBudWxsICYmICFpc0hvc3RCaW5kaW5ncykge1xuICAgICAgLy8gYHRTdHlsaW5nS2V5ID09PSBudWxsYCBpbXBsaWVzIHRoYXQgd2UgYXJlIGVpdGhlciBgW3N0eWxlXWAgb3IgYFtjbGFzc11gIGJpbmRpbmcuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBhIGRpcmVjdGl2ZSB3aGljaCB1c2VzIGBASW5wdXQoJ3N0eWxlJylgIG9yIGBASW5wdXQoJ2NsYXNzJylgIHRoYW5cbiAgICAgIC8vIHdlIG5lZWQgdG8gbmV1dHJhbGl6ZSB0aGlzIGJpbmRpbmcgc2luY2UgdGhhdCBkaXJlY3RpdmUgaXMgc2hhZG93aW5nIGl0LlxuICAgICAgLy8gV2UgdHVybiB0aGlzIGludG8gYSBub29wIGJ5IHNldHRpbmcgdGhlIGtleSB0byBgZmFsc2VgXG4gICAgICB0U3R5bGluZ0tleSA9IGZhbHNlO1xuICAgIH1cbiAgICB0U3R5bGluZ0tleSA9IHdyYXBJblN0YXRpY1N0eWxpbmdLZXkodERhdGEsIHROb2RlLCB0U3R5bGluZ0tleSwgaXNDbGFzc0Jhc2VkKTtcbiAgICBpbnNlcnRUU3R5bGluZ0JpbmRpbmcodERhdGEsIHROb2RlLCB0U3R5bGluZ0tleSwgYmluZGluZ0luZGV4LCBpc0hvc3RCaW5kaW5ncywgaXNDbGFzc0Jhc2VkKTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZHMgc3RhdGljIHN0eWxpbmcgaW5mb3JtYXRpb24gdG8gdGhlIGJpbmRpbmcgaWYgYXBwbGljYWJsZS5cbiAqXG4gKiBUaGUgbGlua2VkIGxpc3Qgb2Ygc3R5bGVzIG5vdCBvbmx5IHN0b3JlcyB0aGUgbGlzdCBhbmQga2V5cywgYnV0IGFsc28gc3RvcmVzIHN0YXRpYyBzdHlsaW5nXG4gKiBpbmZvcm1hdGlvbiBvbiBzb21lIG9mIHRoZSBrZXlzLiBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgaWYgdGhlIGtleSBzaG91bGQgY29udGFpbiB0aGUgc3R5bGluZ1xuICogaW5mb3JtYXRpb24gYW5kIGNvbXB1dGVzIGl0LlxuICpcbiAqIFNlZSBgVFN0eWxpbmdTdGF0aWNgIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHBhcmFtIHREYXRhIGBURGF0YWAgd2hlcmUgdGhlIGxpbmtlZCBsaXN0IGlzIHN0b3JlZC5cbiAqIEBwYXJhbSB0Tm9kZSBgVE5vZGVgIGZvciB3aGljaCB0aGUgc3R5bGluZyBpcyBiZWluZyBjb21wdXRlZC5cbiAqIEBwYXJhbSBzdHlsaW5nS2V5IGBUU3R5bGluZ0tleVByaW1pdGl2ZWAgd2hpY2ggbWF5IG5lZWQgdG8gYmUgd3JhcHBlZCBpbnRvIGBUU3R5bGluZ0tleWBcbiAqIEBwYXJhbSBpc0NsYXNzQmFzZWQgYHRydWVgIGlmIGBjbGFzc2AgKGBmYWxzZWAgaWYgYHN0eWxlYClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBJblN0YXRpY1N0eWxpbmdLZXkoXG4gICAgdERhdGE6IFREYXRhLCB0Tm9kZTogVE5vZGUsIHN0eWxpbmdLZXk6IFRTdHlsaW5nS2V5LCBpc0NsYXNzQmFzZWQ6IGJvb2xlYW4pOiBUU3R5bGluZ0tleSB7XG4gIGNvbnN0IGhvc3REaXJlY3RpdmVEZWYgPSBnZXRDdXJyZW50RGlyZWN0aXZlRGVmKHREYXRhKTtcbiAgbGV0IHJlc2lkdWFsID0gaXNDbGFzc0Jhc2VkID8gdE5vZGUucmVzaWR1YWxDbGFzc2VzIDogdE5vZGUucmVzaWR1YWxTdHlsZXM7XG4gIGlmIChob3N0RGlyZWN0aXZlRGVmID09PSBudWxsKSB7XG4gICAgLy8gV2UgYXJlIGluIHRlbXBsYXRlIG5vZGUuXG4gICAgLy8gSWYgdGVtcGxhdGUgbm9kZSBhbHJlYWR5IGhhZCBzdHlsaW5nIGluc3RydWN0aW9uIHRoZW4gaXQgaGFzIGFscmVhZHkgY29sbGVjdGVkIHRoZSBzdGF0aWNcbiAgICAvLyBzdHlsaW5nIGFuZCB0aGVyZSBpcyBubyBuZWVkIHRvIGNvbGxlY3QgdGhlbSBhZ2Fpbi4gV2Uga25vdyB0aGF0IHdlIGFyZSB0aGUgZmlyc3Qgc3R5bGluZ1xuICAgIC8vIGluc3RydWN0aW9uIGJlY2F1c2UgdGhlIGBUTm9kZS4qQmluZGluZ3NgIHBvaW50cyB0byAwIChub3RoaW5nIGhhcyBiZWVuIGluc2VydGVkIHlldCkuXG4gICAgY29uc3QgaXNGaXJzdFN0eWxpbmdJbnN0cnVjdGlvbkluVGVtcGxhdGUgPVxuICAgICAgICAoaXNDbGFzc0Jhc2VkID8gdE5vZGUuY2xhc3NCaW5kaW5ncyA6IHROb2RlLnN0eWxlQmluZGluZ3MpIGFzIGFueSBhcyBudW1iZXIgPT09IDA7XG4gICAgaWYgKGlzRmlyc3RTdHlsaW5nSW5zdHJ1Y3Rpb25JblRlbXBsYXRlKSB7XG4gICAgICAvLyBJdCB3b3VsZCBiZSBuaWNlIHRvIGJlIGFibGUgdG8gZ2V0IHRoZSBzdGF0aWNzIGZyb20gYG1lcmdlQXR0cnNgLCBob3dldmVyLCBhdCB0aGlzIHBvaW50XG4gICAgICAvLyB0aGV5IGFyZSBhbHJlYWR5IG1lcmdlZCBhbmQgaXQgd291bGQgbm90IGJlIHBvc3NpYmxlIHRvIGZpZ3VyZSB3aGljaCBwcm9wZXJ0eSBiZWxvbmdzIHdoZXJlXG4gICAgICAvLyBpbiB0aGUgcHJpb3JpdHkuXG4gICAgICBzdHlsaW5nS2V5ID0gY29sbGVjdFN0eWxpbmdGcm9tRGlyZWN0aXZlcyhudWxsLCB0RGF0YSwgdE5vZGUsIHN0eWxpbmdLZXksIGlzQ2xhc3NCYXNlZCk7XG4gICAgICBzdHlsaW5nS2V5ID0gY29sbGVjdFN0eWxpbmdGcm9tVEF0dHJzKHN0eWxpbmdLZXksIHROb2RlLmF0dHJzLCBpc0NsYXNzQmFzZWQpO1xuICAgICAgLy8gV2Uga25vdyB0aGF0IGlmIHdlIGhhdmUgc3R5bGluZyBiaW5kaW5nIGluIHRlbXBsYXRlIHdlIGNhbid0IGhhdmUgcmVzaWR1YWwuXG4gICAgICByZXNpZHVhbCA9IG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdlIGFyZSBpbiBob3N0IGJpbmRpbmcgbm9kZSBhbmQgdGhlcmUgd2FzIG5vIGJpbmRpbmcgaW5zdHJ1Y3Rpb24gaW4gdGVtcGxhdGUgbm9kZS5cbiAgICAvLyBUaGlzIG1lYW5zIHRoYXQgd2UgbmVlZCB0byBjb21wdXRlIHRoZSByZXNpZHVhbC5cbiAgICBjb25zdCBkaXJlY3RpdmVTdHlsaW5nTGFzdCA9IHROb2RlLmRpcmVjdGl2ZVN0eWxpbmdMYXN0O1xuICAgIGNvbnN0IGlzRmlyc3RTdHlsaW5nSW5zdHJ1Y3Rpb25Jbkhvc3RCaW5kaW5nID1cbiAgICAgICAgZGlyZWN0aXZlU3R5bGluZ0xhc3QgPT09IC0xIHx8IHREYXRhW2RpcmVjdGl2ZVN0eWxpbmdMYXN0XSAhPT0gaG9zdERpcmVjdGl2ZURlZjtcbiAgICBpZiAoaXNGaXJzdFN0eWxpbmdJbnN0cnVjdGlvbkluSG9zdEJpbmRpbmcpIHtcbiAgICAgIHN0eWxpbmdLZXkgPVxuICAgICAgICAgIGNvbGxlY3RTdHlsaW5nRnJvbURpcmVjdGl2ZXMoaG9zdERpcmVjdGl2ZURlZiwgdERhdGEsIHROb2RlLCBzdHlsaW5nS2V5LCBpc0NsYXNzQmFzZWQpO1xuICAgICAgaWYgKHJlc2lkdWFsID09PSBudWxsKSB7XG4gICAgICAgIC8vIC0gSWYgYG51bGxgIHRoYW4gZWl0aGVyOlxuICAgICAgICAvLyAgICAtIFRlbXBsYXRlIHN0eWxpbmcgaW5zdHJ1Y3Rpb24gYWxyZWFkeSByYW4gYW5kIGl0IGhhcyBjb25zdW1lZCB0aGUgc3RhdGljXG4gICAgICAgIC8vICAgICAgc3R5bGluZyBpbnRvIGl0cyBgVFN0eWxpbmdLZXlgIGFuZCBzbyB0aGVyZSBpcyBubyBuZWVkIHRvIHVwZGF0ZSByZXNpZHVhbC4gSW5zdGVhZFxuICAgICAgICAvLyAgICAgIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBgVFN0eWxpbmdLZXlgIGFzc29jaWF0ZWQgd2l0aCB0aGUgZmlyc3QgdGVtcGxhdGUgbm9kZVxuICAgICAgICAvLyAgICAgIGluc3RydWN0aW9uLiBPUlxuICAgICAgICAvLyAgICAtIFNvbWUgb3RoZXIgc3R5bGluZyBpbnN0cnVjdGlvbiByYW4gYW5kIGRldGVybWluZWQgdGhhdCB0aGVyZSBhcmUgbm8gcmVzaWR1YWxzXG4gICAgICAgIGxldCB0ZW1wbGF0ZVN0eWxpbmdLZXkgPSBnZXRUZW1wbGF0ZUhlYWRUU3R5bGluZ0tleSh0RGF0YSwgdE5vZGUsIGlzQ2xhc3NCYXNlZCk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZVN0eWxpbmdLZXkgIT09IHVuZGVmaW5lZCAmJiBBcnJheS5pc0FycmF5KHRlbXBsYXRlU3R5bGluZ0tleSkpIHtcbiAgICAgICAgICAvLyBPbmx5IHJlY29tcHV0ZSBpZiBgdGVtcGxhdGVTdHlsaW5nS2V5YCBoYWQgc3RhdGljIHZhbHVlcy4gKElmIG5vIHN0YXRpYyB2YWx1ZSBmb3VuZFxuICAgICAgICAgIC8vIHRoZW4gdGhlcmUgaXMgbm90aGluZyB0byBkbyBzaW5jZSB0aGlzIG9wZXJhdGlvbiBjYW4gb25seSBwcm9kdWNlIGxlc3Mgc3RhdGljIGtleXMsIG5vdFxuICAgICAgICAgIC8vIG1vcmUuKVxuICAgICAgICAgIHRlbXBsYXRlU3R5bGluZ0tleSA9IGNvbGxlY3RTdHlsaW5nRnJvbURpcmVjdGl2ZXMoXG4gICAgICAgICAgICAgIG51bGwsIHREYXRhLCB0Tm9kZSwgdGVtcGxhdGVTdHlsaW5nS2V5WzFdIC8qIHVud3JhcCBwcmV2aW91cyBzdGF0aWNzICovLFxuICAgICAgICAgICAgICBpc0NsYXNzQmFzZWQpO1xuICAgICAgICAgIHRlbXBsYXRlU3R5bGluZ0tleSA9XG4gICAgICAgICAgICAgIGNvbGxlY3RTdHlsaW5nRnJvbVRBdHRycyh0ZW1wbGF0ZVN0eWxpbmdLZXksIHROb2RlLmF0dHJzLCBpc0NsYXNzQmFzZWQpO1xuICAgICAgICAgIHNldFRlbXBsYXRlSGVhZFRTdHlsaW5nS2V5KHREYXRhLCB0Tm9kZSwgaXNDbGFzc0Jhc2VkLCB0ZW1wbGF0ZVN0eWxpbmdLZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gcmVjb21wdXRlIHJlc2lkdWFsIGlmIGl0IGlzIG5vdCBgbnVsbGAuXG4gICAgICAgIC8vIC0gSWYgZXhpc3RpbmcgcmVzaWR1YWwgKGltcGxpZXMgdGhlcmUgd2FzIG5vIHRlbXBsYXRlIHN0eWxpbmcpLiBUaGlzIG1lYW5zIHRoYXQgc29tZSBvZlxuICAgICAgICAvLyAgIHRoZSBzdGF0aWNzIG1heSBoYXZlIG1vdmVkIGZyb20gdGhlIHJlc2lkdWFsIHRvIHRoZSBgc3R5bGluZ0tleWAgYW5kIHNvIHdlIGhhdmUgdG9cbiAgICAgICAgLy8gICByZWNvbXB1dGUuXG4gICAgICAgIC8vIC0gSWYgYHVuZGVmaW5lZGAgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSBhcmUgcnVubmluZy5cbiAgICAgICAgcmVzaWR1YWwgPSBjb2xsZWN0UmVzaWR1YWwodERhdGEsIHROb2RlLCBpc0NsYXNzQmFzZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocmVzaWR1YWwgIT09IHVuZGVmaW5lZCkge1xuICAgIGlzQ2xhc3NCYXNlZCA/ICh0Tm9kZS5yZXNpZHVhbENsYXNzZXMgPSByZXNpZHVhbCkgOiAodE5vZGUucmVzaWR1YWxTdHlsZXMgPSByZXNpZHVhbCk7XG4gIH1cbiAgcmV0dXJuIHN0eWxpbmdLZXk7XG59XG5cbi8qKlxuICogUmV0cmlldmUgdGhlIGBUU3R5bGluZ0tleWAgZm9yIHRoZSB0ZW1wbGF0ZSBzdHlsaW5nIGluc3RydWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgbmVlZGVkIHNpbmNlIGBob3N0QmluZGluZ2Agc3R5bGluZyBpbnN0cnVjdGlvbnMgYXJlIGluc2VydGVkIGFmdGVyIHRoZSB0ZW1wbGF0ZVxuICogaW5zdHJ1Y3Rpb24uIFdoaWxlIHRoZSB0ZW1wbGF0ZSBpbnN0cnVjdGlvbiBuZWVkcyB0byB1cGRhdGUgdGhlIHJlc2lkdWFsIGluIGBUTm9kZWAgdGhlXG4gKiBgaG9zdEJpbmRpbmdgIGluc3RydWN0aW9ucyBuZWVkIHRvIHVwZGF0ZSB0aGUgYFRTdHlsaW5nS2V5YCBvZiB0aGUgdGVtcGxhdGUgaW5zdHJ1Y3Rpb24gYmVjYXVzZVxuICogdGhlIHRlbXBsYXRlIGluc3RydWN0aW9uIGlzIGRvd25zdHJlYW0gZnJvbSB0aGUgYGhvc3RCaW5kaW5nc2AgaW5zdHJ1Y3Rpb25zLlxuICpcbiAqIEBwYXJhbSB0RGF0YSBgVERhdGFgIHdoZXJlIHRoZSBsaW5rZWQgbGlzdCBpcyBzdG9yZWQuXG4gKiBAcGFyYW0gdE5vZGUgYFROb2RlYCBmb3Igd2hpY2ggdGhlIHN0eWxpbmcgaXMgYmVpbmcgY29tcHV0ZWQuXG4gKiBAcGFyYW0gaXNDbGFzc0Jhc2VkIGB0cnVlYCBpZiBgY2xhc3NgIChgZmFsc2VgIGlmIGBzdHlsZWApXG4gKiBAcmV0dXJuIGBUU3R5bGluZ0tleWAgaWYgZm91bmQgb3IgYHVuZGVmaW5lZGAgaWYgbm90IGZvdW5kLlxuICovXG5mdW5jdGlvbiBnZXRUZW1wbGF0ZUhlYWRUU3R5bGluZ0tleSh0RGF0YTogVERhdGEsIHROb2RlOiBUTm9kZSwgaXNDbGFzc0Jhc2VkOiBib29sZWFuKTogVFN0eWxpbmdLZXl8XG4gICAgdW5kZWZpbmVkIHtcbiAgY29uc3QgYmluZGluZ3MgPSBpc0NsYXNzQmFzZWQgPyB0Tm9kZS5jbGFzc0JpbmRpbmdzIDogdE5vZGUuc3R5bGVCaW5kaW5ncztcbiAgaWYgKGdldFRTdHlsaW5nUmFuZ2VOZXh0KGJpbmRpbmdzKSA9PT0gMCkge1xuICAgIC8vIFRoZXJlIGRvZXMgbm90IHNlZW0gdG8gYmUgYSBzdHlsaW5nIGluc3RydWN0aW9uIGluIHRoZSBgdGVtcGxhdGVgLlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHREYXRhW2dldFRTdHlsaW5nUmFuZ2VQcmV2KGJpbmRpbmdzKV0gYXMgVFN0eWxpbmdLZXk7XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBgVFN0eWxpbmdLZXlgIG9mIHRoZSBmaXJzdCB0ZW1wbGF0ZSBpbnN0cnVjdGlvbiBpbiBgVE5vZGVgLlxuICpcbiAqIExvZ2ljYWxseSBgaG9zdEJpbmRpbmdzYCBzdHlsaW5nIGluc3RydWN0aW9ucyBhcmUgb2YgbG93ZXIgcHJpb3JpdHkgdGhhbiB0aGF0IG9mIHRoZSB0ZW1wbGF0ZS5cbiAqIEhvd2V2ZXIsIHRoZXkgZXhlY3V0ZSBhZnRlciB0aGUgdGVtcGxhdGUgc3R5bGluZyBpbnN0cnVjdGlvbnMuIFRoaXMgbWVhbnMgdGhhdCB0aGV5IGdldCBpbnNlcnRlZFxuICogaW4gZnJvbnQgb2YgdGhlIHRlbXBsYXRlIHN0eWxpbmcgaW5zdHJ1Y3Rpb25zLlxuICpcbiAqIElmIHdlIGhhdmUgYSB0ZW1wbGF0ZSBzdHlsaW5nIGluc3RydWN0aW9uIGFuZCBhIG5ldyBgaG9zdEJpbmRpbmdzYCBzdHlsaW5nIGluc3RydWN0aW9uIGlzXG4gKiBleGVjdXRlZCBpdCBtZWFucyB0aGF0IGl0IG1heSBuZWVkIHRvIHN0ZWFsIHN0YXRpYyBmaWVsZHMgZnJvbSB0aGUgdGVtcGxhdGUgaW5zdHJ1Y3Rpb24uIFRoaXNcbiAqIG1ldGhvZCBhbGxvd3MgdXMgdG8gdXBkYXRlIHRoZSBmaXJzdCB0ZW1wbGF0ZSBpbnN0cnVjdGlvbiBgVFN0eWxpbmdLZXlgIHdpdGggYSBuZXcgdmFsdWUuXG4gKlxuICogQXNzdW1lOlxuICogYGBgXG4gKiA8ZGl2IG15LWRpciBzdHlsZT1cImNvbG9yOiByZWRcIiBbc3R5bGUuY29sb3JdPVwidG1wbEV4cFwiPjwvZGl2PlxuICpcbiAqIEBEaXJlY3RpdmUoe1xuICogICBob3N0OiB7XG4gKiAgICAgJ3N0eWxlJzogJ3dpZHRoOiAxMDBweCcsXG4gKiAgICAgJ1tzdHlsZS5jb2xvcl0nOiAnZGlyRXhwJyxcbiAqICAgfVxuICogfSlcbiAqIGNsYXNzIE15RGlyIHt9XG4gKiBgYGBcbiAqXG4gKiB3aGVuIGBbc3R5bGUuY29sb3JdPVwidG1wbEV4cFwiYCBleGVjdXRlcyBpdCBjcmVhdGVzIHRoaXMgZGF0YSBzdHJ1Y3R1cmUuXG4gKiBgYGBcbiAqICBbJycsICdjb2xvcicsICdjb2xvcicsICdyZWQnLCAnd2lkdGgnLCAnMTAwcHgnXSxcbiAqIGBgYFxuICpcbiAqIFRoZSByZWFzb24gZm9yIHRoaXMgaXMgdGhhdCB0aGUgdGVtcGxhdGUgaW5zdHJ1Y3Rpb24gZG9lcyBub3Qga25vdyBpZiB0aGVyZSBhcmUgc3R5bGluZ1xuICogaW5zdHJ1Y3Rpb25zIGFuZCBtdXN0IGFzc3VtZSB0aGF0IHRoZXJlIGFyZSBub25lIGFuZCBtdXN0IGNvbGxlY3QgYWxsIG9mIHRoZSBzdGF0aWMgc3R5bGluZy5cbiAqIChib3RoXG4gKiBgY29sb3InIGFuZCAnd2lkdGhgKVxuICpcbiAqIFdoZW4gYCdbc3R5bGUuY29sb3JdJzogJ2RpckV4cCcsYCBleGVjdXRlcyB3ZSBuZWVkIHRvIGluc2VydCBhIG5ldyBkYXRhIGludG8gdGhlIGxpbmtlZCBsaXN0LlxuICogYGBgXG4gKiAgWycnLCAnY29sb3InLCAnd2lkdGgnLCAnMTAwcHgnXSwgIC8vIG5ld2x5IGluc2VydGVkXG4gKiAgWycnLCAnY29sb3InLCAnY29sb3InLCAncmVkJywgJ3dpZHRoJywgJzEwMHB4J10sIC8vIHRoaXMgaXMgd3JvbmdcbiAqIGBgYFxuICpcbiAqIE5vdGljZSB0aGF0IHRoZSB0ZW1wbGF0ZSBzdGF0aWNzIGlzIG5vdyB3cm9uZyBhcyBpdCBpbmNvcnJlY3RseSBjb250YWlucyBgd2lkdGhgIHNvIHdlIG5lZWQgdG9cbiAqIHVwZGF0ZSBpdCBsaWtlIHNvOlxuICogYGBgXG4gKiAgWycnLCAnY29sb3InLCAnd2lkdGgnLCAnMTAwcHgnXSxcbiAqICBbJycsICdjb2xvcicsICdjb2xvcicsICdyZWQnXSwgICAgLy8gVVBEQVRFXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdERhdGEgYFREYXRhYCB3aGVyZSB0aGUgbGlua2VkIGxpc3QgaXMgc3RvcmVkLlxuICogQHBhcmFtIHROb2RlIGBUTm9kZWAgZm9yIHdoaWNoIHRoZSBzdHlsaW5nIGlzIGJlaW5nIGNvbXB1dGVkLlxuICogQHBhcmFtIGlzQ2xhc3NCYXNlZCBgdHJ1ZWAgaWYgYGNsYXNzYCAoYGZhbHNlYCBpZiBgc3R5bGVgKVxuICogQHBhcmFtIHRTdHlsaW5nS2V5IE5ldyBgVFN0eWxpbmdLZXlgIHdoaWNoIGlzIHJlcGxhY2luZyB0aGUgb2xkIG9uZS5cbiAqL1xuZnVuY3Rpb24gc2V0VGVtcGxhdGVIZWFkVFN0eWxpbmdLZXkoXG4gICAgdERhdGE6IFREYXRhLCB0Tm9kZTogVE5vZGUsIGlzQ2xhc3NCYXNlZDogYm9vbGVhbiwgdFN0eWxpbmdLZXk6IFRTdHlsaW5nS2V5KTogdm9pZCB7XG4gIGNvbnN0IGJpbmRpbmdzID0gaXNDbGFzc0Jhc2VkID8gdE5vZGUuY2xhc3NCaW5kaW5ncyA6IHROb2RlLnN0eWxlQmluZGluZ3M7XG4gIG5nRGV2TW9kZSAmJlxuICAgICAgYXNzZXJ0Tm90RXF1YWwoXG4gICAgICAgICAgZ2V0VFN0eWxpbmdSYW5nZU5leHQoYmluZGluZ3MpLCAwLFxuICAgICAgICAgICdFeHBlY3RpbmcgdG8gaGF2ZSBhdCBsZWFzdCBvbmUgdGVtcGxhdGUgc3R5bGluZyBiaW5kaW5nLicpO1xuICB0RGF0YVtnZXRUU3R5bGluZ1JhbmdlUHJldihiaW5kaW5ncyldID0gdFN0eWxpbmdLZXk7XG59XG5cbi8qKlxuICogQ29sbGVjdCBhbGwgc3RhdGljIHZhbHVlcyBhZnRlciB0aGUgY3VycmVudCBgVE5vZGUuZGlyZWN0aXZlU3R5bGluZ0xhc3RgIGluZGV4LlxuICpcbiAqIENvbGxlY3QgdGhlIHJlbWFpbmluZyBzdHlsaW5nIGluZm9ybWF0aW9uIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gY29sbGVjdGVkIGJ5IGFuIGV4aXN0aW5nXG4gKiBzdHlsaW5nIGluc3RydWN0aW9uLlxuICpcbiAqIEBwYXJhbSB0RGF0YSBgVERhdGFgIHdoZXJlIHRoZSBgRGlyZWN0aXZlRGVmc2AgYXJlIHN0b3JlZC5cbiAqIEBwYXJhbSB0Tm9kZSBgVE5vZGVgIHdoaWNoIGNvbnRhaW5zIHRoZSBkaXJlY3RpdmUgcmFuZ2UuXG4gKiBAcGFyYW0gaXNDbGFzc0Jhc2VkIGB0cnVlYCBpZiBgY2xhc3NgIChgZmFsc2VgIGlmIGBzdHlsZWApXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RSZXNpZHVhbCh0RGF0YTogVERhdGEsIHROb2RlOiBUTm9kZSwgaXNDbGFzc0Jhc2VkOiBib29sZWFuKTogS2V5VmFsdWVBcnJheTxhbnk+fFxuICAgIG51bGwge1xuICBsZXQgcmVzaWR1YWw6IEtleVZhbHVlQXJyYXk8YW55PnxudWxsfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgY29uc3QgZGlyZWN0aXZlRW5kID0gdE5vZGUuZGlyZWN0aXZlRW5kO1xuICBuZ0Rldk1vZGUgJiZcbiAgICAgIGFzc2VydE5vdEVxdWFsKFxuICAgICAgICAgIHROb2RlLmRpcmVjdGl2ZVN0eWxpbmdMYXN0LCAtMSxcbiAgICAgICAgICAnQnkgdGhlIHRpbWUgdGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhdCBsZWFzdCBvbmUgaG9zdEJpbmRpbmdzLW5vZGUgc3R5bGluZyBpbnN0cnVjdGlvbiBtdXN0IGhhdmUgZXhlY3V0ZWQuJyk7XG4gIC8vIFdlIGFkZCBgMSArIHROb2RlLmRpcmVjdGl2ZVN0YXJ0YCBiZWNhdXNlIHdlIG5lZWQgdG8gc2tpcCB0aGUgY3VycmVudCBkaXJlY3RpdmUgKGFzIHdlIGFyZVxuICAvLyBjb2xsZWN0aW5nIHRoaW5ncyBhZnRlciB0aGUgbGFzdCBgaG9zdEJpbmRpbmdzYCBkaXJlY3RpdmUgd2hpY2ggaGFkIGEgc3R5bGluZyBpbnN0cnVjdGlvbi4pXG4gIGZvciAobGV0IGkgPSAxICsgdE5vZGUuZGlyZWN0aXZlU3R5bGluZ0xhc3Q7IGkgPCBkaXJlY3RpdmVFbmQ7IGkrKykge1xuICAgIGNvbnN0IGF0dHJzID0gKHREYXRhW2ldIGFzIERpcmVjdGl2ZURlZjxhbnk+KS5ob3N0QXR0cnM7XG4gICAgcmVzaWR1YWwgPSBjb2xsZWN0U3R5bGluZ0Zyb21UQXR0cnMocmVzaWR1YWwsIGF0dHJzLCBpc0NsYXNzQmFzZWQpIGFzIEtleVZhbHVlQXJyYXk8YW55PnwgbnVsbDtcbiAgfVxuICByZXR1cm4gY29sbGVjdFN0eWxpbmdGcm9tVEF0dHJzKHJlc2lkdWFsLCB0Tm9kZS5hdHRycywgaXNDbGFzc0Jhc2VkKSBhcyBLZXlWYWx1ZUFycmF5PGFueT58IG51bGw7XG59XG5cbi8qKlxuICogQ29sbGVjdCB0aGUgc3RhdGljIHN0eWxpbmcgaW5mb3JtYXRpb24gd2l0aCBsb3dlciBwcmlvcml0eSB0aGFuIGBob3N0RGlyZWN0aXZlRGVmYC5cbiAqXG4gKiAoVGhpcyBpcyBvcHBvc2l0ZSBvZiByZXNpZHVhbCBzdHlsaW5nLilcbiAqXG4gKiBAcGFyYW0gaG9zdERpcmVjdGl2ZURlZiBgRGlyZWN0aXZlRGVmYCBmb3Igd2hpY2ggd2Ugd2FudCB0byBjb2xsZWN0IGxvd2VyIHByaW9yaXR5IHN0YXRpY1xuICogICAgICAgIHN0eWxpbmcuIChPciBgbnVsbGAgaWYgdGVtcGxhdGUgc3R5bGluZylcbiAqIEBwYXJhbSB0RGF0YSBgVERhdGFgIHdoZXJlIHRoZSBsaW5rZWQgbGlzdCBpcyBzdG9yZWQuXG4gKiBAcGFyYW0gdE5vZGUgYFROb2RlYCBmb3Igd2hpY2ggdGhlIHN0eWxpbmcgaXMgYmVpbmcgY29tcHV0ZWQuXG4gKiBAcGFyYW0gc3R5bGluZ0tleSBFeGlzdGluZyBgVFN0eWxpbmdLZXlgIHRvIHVwZGF0ZSBvciB3cmFwLlxuICogQHBhcmFtIGlzQ2xhc3NCYXNlZCBgdHJ1ZWAgaWYgYGNsYXNzYCAoYGZhbHNlYCBpZiBgc3R5bGVgKVxuICovXG5mdW5jdGlvbiBjb2xsZWN0U3R5bGluZ0Zyb21EaXJlY3RpdmVzKFxuICAgIGhvc3REaXJlY3RpdmVEZWY6IERpcmVjdGl2ZURlZjxhbnk+fG51bGwsIHREYXRhOiBURGF0YSwgdE5vZGU6IFROb2RlLCBzdHlsaW5nS2V5OiBUU3R5bGluZ0tleSxcbiAgICBpc0NsYXNzQmFzZWQ6IGJvb2xlYW4pOiBUU3R5bGluZ0tleSB7XG4gIC8vIFdlIG5lZWQgdG8gbG9vcCBiZWNhdXNlIHRoZXJlIGNhbiBiZSBkaXJlY3RpdmVzIHdoaWNoIGhhdmUgYGhvc3RBdHRyc2AgYnV0IGRvbid0IGhhdmVcbiAgLy8gYGhvc3RCaW5kaW5nc2Agc28gdGhpcyBsb29wIGNhdGNoZXMgdXAgdG8gdGhlIGN1cnJlbnQgZGlyZWN0aXZlLi5cbiAgbGV0IGN1cnJlbnREaXJlY3RpdmU6IERpcmVjdGl2ZURlZjxhbnk+fG51bGwgPSBudWxsO1xuICBjb25zdCBkaXJlY3RpdmVFbmQgPSB0Tm9kZS5kaXJlY3RpdmVFbmQ7XG4gIGxldCBkaXJlY3RpdmVTdHlsaW5nTGFzdCA9IHROb2RlLmRpcmVjdGl2ZVN0eWxpbmdMYXN0O1xuICBpZiAoZGlyZWN0aXZlU3R5bGluZ0xhc3QgPT09IC0xKSB7XG4gICAgZGlyZWN0aXZlU3R5bGluZ0xhc3QgPSB0Tm9kZS5kaXJlY3RpdmVTdGFydDtcbiAgfSBlbHNlIHtcbiAgICBkaXJlY3RpdmVTdHlsaW5nTGFzdCsrO1xuICB9XG4gIHdoaWxlIChkaXJlY3RpdmVTdHlsaW5nTGFzdCA8IGRpcmVjdGl2ZUVuZCkge1xuICAgIGN1cnJlbnREaXJlY3RpdmUgPSB0RGF0YVtkaXJlY3RpdmVTdHlsaW5nTGFzdF0gYXMgRGlyZWN0aXZlRGVmPGFueT47XG4gICAgbmdEZXZNb2RlICYmIGFzc2VydERlZmluZWQoY3VycmVudERpcmVjdGl2ZSwgJ2V4cGVjdGVkIHRvIGJlIGRlZmluZWQnKTtcbiAgICBzdHlsaW5nS2V5ID0gY29sbGVjdFN0eWxpbmdGcm9tVEF0dHJzKHN0eWxpbmdLZXksIGN1cnJlbnREaXJlY3RpdmUuaG9zdEF0dHJzLCBpc0NsYXNzQmFzZWQpO1xuICAgIGlmIChjdXJyZW50RGlyZWN0aXZlID09PSBob3N0RGlyZWN0aXZlRGVmKSBicmVhaztcbiAgICBkaXJlY3RpdmVTdHlsaW5nTGFzdCsrO1xuICB9XG4gIGlmIChob3N0RGlyZWN0aXZlRGVmICE9PSBudWxsKSB7XG4gICAgLy8gd2Ugb25seSBhZHZhbmNlIHRoZSBzdHlsaW5nIGN1cnNvciBpZiB3ZSBhcmUgY29sbGVjdGluZyBkYXRhIGZyb20gaG9zdCBiaW5kaW5ncy5cbiAgICAvLyBUZW1wbGF0ZSBleGVjdXRlcyBiZWZvcmUgaG9zdCBiaW5kaW5ncyBhbmQgc28gaWYgd2Ugd291bGQgdXBkYXRlIHRoZSBpbmRleCxcbiAgICAvLyBob3N0IGJpbmRpbmdzIHdvdWxkIG5vdCBnZXQgdGhlaXIgc3RhdGljcy5cbiAgICB0Tm9kZS5kaXJlY3RpdmVTdHlsaW5nTGFzdCA9IGRpcmVjdGl2ZVN0eWxpbmdMYXN0O1xuICB9XG4gIHJldHVybiBzdHlsaW5nS2V5O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYFRBdHRyc2AgaW50byBgVFN0eWxpbmdTdGF0aWNgLlxuICpcbiAqIEBwYXJhbSBzdHlsaW5nS2V5IGV4aXN0aW5nIGBUU3R5bGluZ0tleWAgdG8gdXBkYXRlIG9yIHdyYXAuXG4gKiBAcGFyYW0gYXR0cnMgYFRBdHRyaWJ1dGVzYCB0byBwcm9jZXNzLlxuICogQHBhcmFtIGlzQ2xhc3NCYXNlZCBgdHJ1ZWAgaWYgYGNsYXNzYCAoYGZhbHNlYCBpZiBgc3R5bGVgKVxuICovXG5mdW5jdGlvbiBjb2xsZWN0U3R5bGluZ0Zyb21UQXR0cnMoXG4gICAgc3R5bGluZ0tleTogVFN0eWxpbmdLZXl8dW5kZWZpbmVkLCBhdHRyczogVEF0dHJpYnV0ZXN8bnVsbCxcbiAgICBpc0NsYXNzQmFzZWQ6IGJvb2xlYW4pOiBUU3R5bGluZ0tleSB7XG4gIGNvbnN0IGRlc2lyZWRNYXJrZXIgPSBpc0NsYXNzQmFzZWQgPyBBdHRyaWJ1dGVNYXJrZXIuQ2xhc3NlcyA6IEF0dHJpYnV0ZU1hcmtlci5TdHlsZXM7XG4gIGxldCBjdXJyZW50TWFya2VyID0gQXR0cmlidXRlTWFya2VyLkltcGxpY2l0QXR0cmlidXRlcztcbiAgaWYgKGF0dHJzICE9PSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IGF0dHJzW2ldIGFzIG51bWJlciB8IHN0cmluZztcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY3VycmVudE1hcmtlciA9IGl0ZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudE1hcmtlciA9PT0gZGVzaXJlZE1hcmtlcikge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzdHlsaW5nS2V5KSkge1xuICAgICAgICAgICAgc3R5bGluZ0tleSA9IHN0eWxpbmdLZXkgPT09IHVuZGVmaW5lZCA/IFtdIDogWycnLCBzdHlsaW5nS2V5XSBhcyBhbnk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGtleVZhbHVlQXJyYXlTZXQoXG4gICAgICAgICAgICAgIHN0eWxpbmdLZXkgYXMgS2V5VmFsdWVBcnJheTxhbnk+LCBpdGVtLCBpc0NsYXNzQmFzZWQgPyB0cnVlIDogYXR0cnNbKytpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxpbmdLZXkgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBzdHlsaW5nS2V5O1xufVxuXG4vKipcbiAqIENvbnZlcnQgdXNlciBpbnB1dCB0byBgS2V5VmFsdWVBcnJheWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyB1c2VyIGlucHV0IHdoaWNoIGNvdWxkIGJlIGBzdHJpbmdgLCBPYmplY3QgbGl0ZXJhbCwgb3IgaXRlcmFibGUgYW5kIGNvbnZlcnRzXG4gKiBpdCBpbnRvIGEgY29uc2lzdGVudCByZXByZXNlbnRhdGlvbi4gVGhlIG91dHB1dCBvZiB0aGlzIGlzIGBLZXlWYWx1ZUFycmF5YCAod2hpY2ggaXMgYW4gYXJyYXlcbiAqIHdoZXJlXG4gKiBldmVuIGluZGV4ZXMgY29udGFpbiBrZXlzIGFuZCBvZGQgaW5kZXhlcyBjb250YWluIHZhbHVlcyBmb3IgdGhvc2Uga2V5cykuXG4gKlxuICogVGhlIGFkdmFudGFnZSBvZiBjb252ZXJ0aW5nIHRvIGBLZXlWYWx1ZUFycmF5YCBpcyB0aGF0IHdlIGNhbiBwZXJmb3JtIGRpZmYgaW4gYW4gaW5wdXRcbiAqIGluZGVwZW5kZW50XG4gKiB3YXkuXG4gKiAoaWUgd2UgY2FuIGNvbXBhcmUgYGZvbyBiYXJgIHRvIGBbJ2JhcicsICdiYXonXSBhbmQgZGV0ZXJtaW5lIGEgc2V0IG9mIGNoYW5nZXMgd2hpY2ggbmVlZCB0byBiZVxuICogYXBwbGllZClcbiAqXG4gKiBUaGUgZmFjdCB0aGF0IGBLZXlWYWx1ZUFycmF5YCBpcyBzb3J0ZWQgaXMgdmVyeSBpbXBvcnRhbnQgYmVjYXVzZSBpdCBhbGxvd3MgdXMgdG8gY29tcHV0ZSB0aGVcbiAqIGRpZmZlcmVuY2UgaW4gbGluZWFyIGZhc2hpb24gd2l0aG91dCB0aGUgbmVlZCB0byBhbGxvY2F0ZSBhbnkgYWRkaXRpb25hbCBkYXRhLlxuICpcbiAqIEZvciBleGFtcGxlIGlmIHdlIGtlcHQgdGhpcyBhcyBhIGBNYXBgIHdlIHdvdWxkIGhhdmUgdG8gaXRlcmF0ZSBvdmVyIHByZXZpb3VzIGBNYXBgIHRvIGRldGVybWluZVxuICogd2hpY2ggdmFsdWVzIG5lZWQgdG8gYmUgZGVsZXRlZCwgb3ZlciB0aGUgbmV3IGBNYXBgIHRvIGRldGVybWluZSBhZGRpdGlvbnMsIGFuZCB3ZSB3b3VsZCBoYXZlIHRvXG4gKiBrZWVwIGFkZGl0aW9uYWwgYE1hcGAgdG8ga2VlcCB0cmFjayBvZiBkdXBsaWNhdGVzIG9yIGl0ZW1zIHdoaWNoIGhhdmUgbm90IHlldCBiZWVuIHZpc2l0ZWQuXG4gKlxuICogQHBhcmFtIGtleVZhbHVlQXJyYXlTZXQgKFNlZSBga2V5VmFsdWVBcnJheVNldGAgaW4gXCJ1dGlsL2FycmF5X3V0aWxzXCIpIEdldHMgcGFzc2VkIGluIGFzIGFcbiAqIGZ1bmN0aW9uIHNvIHRoYXRcbiAqICAgICAgICBgc3R5bGVgIGNhbiBwYXNzIGluIHZlcnNpb24gd2hpY2ggZG9lcyBzYW5pdGl6YXRpb24uIFRoaXMgaXMgZG9uZSBmb3IgdHJlZSBzaGFraW5nXG4gKiAgICAgICAgcHVycG9zZXMuXG4gKiBAcGFyYW0gc3RyaW5nUGFyc2VyIFRoZSBwYXJzZXIgaXMgcGFzc2VkIGluIHNvIHRoYXQgaXQgd2lsbCBiZSB0cmVlIHNoYWthYmxlLiBTZWVcbiAqICAgICAgICBgc3R5bGVTdHJpbmdQYXJzZXJgIGFuZCBgY2xhc3NTdHJpbmdQYXJzZXJgXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHBhcnNlL2NvbnZlcnQgdG8gYEtleVZhbHVlQXJyYXlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1N0eWxpbmdLZXlWYWx1ZUFycmF5KFxuICAgIGtleVZhbHVlQXJyYXlTZXQ6IChrZXlWYWx1ZUFycmF5OiBLZXlWYWx1ZUFycmF5PGFueT4sIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB2b2lkLFxuICAgIHN0cmluZ1BhcnNlcjogKHN0eWxlS2V5VmFsdWVBcnJheTogS2V5VmFsdWVBcnJheTxhbnk+LCB0ZXh0OiBzdHJpbmcpID0+IHZvaWQsXG4gICAgdmFsdWU6IHN0cmluZ3xzdHJpbmdbXXx7W2tleTogc3RyaW5nXTogYW55fXxTYWZlVmFsdWV8bnVsbHx1bmRlZmluZWQpOiBLZXlWYWx1ZUFycmF5PGFueT4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCAvKnx8IHZhbHVlID09PSB1bmRlZmluZWQgKi8gfHwgdmFsdWUgPT09ICcnKSByZXR1cm4gRU1QVFlfQVJSQVkgYXMgYW55O1xuICBjb25zdCBzdHlsZUtleVZhbHVlQXJyYXk6IEtleVZhbHVlQXJyYXk8YW55PiA9IFtdIGFzIGFueTtcbiAgY29uc3QgdW53cmFwcGVkVmFsdWUgPSB1bndyYXBTYWZlVmFsdWUodmFsdWUpIGFzIHN0cmluZyB8IHN0cmluZ1tdIHwge1trZXk6IHN0cmluZ106IGFueX07XG4gIGlmIChBcnJheS5pc0FycmF5KHVud3JhcHBlZFZhbHVlKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW53cmFwcGVkVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleVZhbHVlQXJyYXlTZXQoc3R5bGVLZXlWYWx1ZUFycmF5LCB1bndyYXBwZWRWYWx1ZVtpXSwgdHJ1ZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB1bndyYXBwZWRWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB1bndyYXBwZWRWYWx1ZSkge1xuICAgICAgaWYgKHVud3JhcHBlZFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAga2V5VmFsdWVBcnJheVNldChzdHlsZUtleVZhbHVlQXJyYXksIGtleSwgdW53cmFwcGVkVmFsdWVba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB1bndyYXBwZWRWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmdQYXJzZXIoc3R5bGVLZXlWYWx1ZUFycmF5LCB1bndyYXBwZWRWYWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgbmdEZXZNb2RlICYmXG4gICAgICAgIHRocm93RXJyb3IoJ1Vuc3VwcG9ydGVkIHN0eWxpbmcgdHlwZSAnICsgdHlwZW9mIHVud3JhcHBlZFZhbHVlICsgJzogJyArIHVud3JhcHBlZFZhbHVlKTtcbiAgfVxuICByZXR1cm4gc3R5bGVLZXlWYWx1ZUFycmF5O1xufVxuXG4vKipcbiAqIFNldCBhIGB2YWx1ZWAgZm9yIGEgYGtleWAgdGFraW5nIHN0eWxlIHNhbml0aXphdGlvbiBpbnRvIGFjY291bnQuXG4gKlxuICogU2VlOiBga2V5VmFsdWVBcnJheVNldGAgZm9yIGRldGFpbHNcbiAqXG4gKiBAcGFyYW0ga2V5VmFsdWVBcnJheSBLZXlWYWx1ZUFycmF5IHRvIGFkZCB0by5cbiAqIEBwYXJhbSBrZXkgU3R5bGUga2V5IHRvIGFkZC4gKFRoaXMga2V5IHdpbGwgYmUgY2hlY2tlZCBpZiBpdCBuZWVkcyBzYW5pdGl6YXRpb24pXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCAoSWYga2V5IG5lZWRzIHNhbml0aXphdGlvbiBpdCB3aWxsIGJlIHNhbml0aXplZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlS2V5VmFsdWVBcnJheVNldChrZXlWYWx1ZUFycmF5OiBLZXlWYWx1ZUFycmF5PGFueT4sIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gIGlmIChzdHlsZVByb3BOZWVkc1Nhbml0aXphdGlvbihrZXkpKSB7XG4gICAgdmFsdWUgPSDJtcm1c2FuaXRpemVTdHlsZSh2YWx1ZSk7XG4gIH1cbiAga2V5VmFsdWVBcnJheVNldChrZXlWYWx1ZUFycmF5LCBrZXksIHZhbHVlKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbWFwIGJhc2VkIHN0eWxpbmcuXG4gKlxuICogTWFwIGJhc2VkIHN0eWxpbmcgY291bGQgYmUgYW55dGhpbmcgd2hpY2ggY29udGFpbnMgbW9yZSB0aGFuIG9uZSBiaW5kaW5nLiBGb3IgZXhhbXBsZSBgc3RyaW5nYCxcbiAqIG9yIG9iamVjdCBsaXRlcmFsLiBEZWFsaW5nIHdpdGggYWxsIG9mIHRoZXNlIHR5cGVzIHdvdWxkIGNvbXBsaWNhdGUgdGhlIGxvZ2ljIHNvXG4gKiBpbnN0ZWFkIHRoaXMgZnVuY3Rpb24gZXhwZWN0cyB0aGF0IHRoZSBjb21wbGV4IGlucHV0IGlzIGZpcnN0IGNvbnZlcnRlZCBpbnRvIG5vcm1hbGl6ZWRcbiAqIGBLZXlWYWx1ZUFycmF5YC4gVGhlIGFkdmFudGFnZSBvZiBub3JtYWxpemF0aW9uIGlzIHRoYXQgd2UgZ2V0IHRoZSB2YWx1ZXMgc29ydGVkLCB3aGljaCBtYWtlcyBpdFxuICogdmVyeSBjaGVhcCB0byBjb21wdXRlIGRlbHRhcyBiZXR3ZWVuIHRoZSBwcmV2aW91cyBhbmQgY3VycmVudCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gdFZpZXcgQXNzb2NpYXRlZCBgVFZpZXcuZGF0YWAgY29udGFpbnMgdGhlIGxpbmtlZCBsaXN0IG9mIGJpbmRpbmcgcHJpb3JpdGllcy5cbiAqIEBwYXJhbSB0Tm9kZSBgVE5vZGVgIHdoZXJlIHRoZSBiaW5kaW5nIGlzIGxvY2F0ZWQuXG4gKiBAcGFyYW0gbFZpZXcgYExWaWV3YCBjb250YWlucyB0aGUgdmFsdWVzIGFzc29jaWF0ZWQgd2l0aCBvdGhlciBzdHlsaW5nIGJpbmRpbmcgYXQgdGhpcyBgVE5vZGVgLlxuICogQHBhcmFtIHJlbmRlcmVyIFJlbmRlcmVyIHRvIHVzZSBpZiBhbnkgdXBkYXRlcy5cbiAqIEBwYXJhbSBvbGRLZXlWYWx1ZUFycmF5IFByZXZpb3VzIHZhbHVlIHJlcHJlc2VudGVkIGFzIGBLZXlWYWx1ZUFycmF5YFxuICogQHBhcmFtIG5ld0tleVZhbHVlQXJyYXkgQ3VycmVudCB2YWx1ZSByZXByZXNlbnRlZCBhcyBgS2V5VmFsdWVBcnJheWBcbiAqIEBwYXJhbSBpc0NsYXNzQmFzZWQgYHRydWVgIGlmIGBjbGFzc2AgKGBmYWxzZWAgaWYgYHN0eWxlYClcbiAqIEBwYXJhbSBiaW5kaW5nSW5kZXggQmluZGluZyBpbmRleCBvZiB0aGUgYmluZGluZy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlU3R5bGluZ01hcChcbiAgICB0VmlldzogVFZpZXcsIHROb2RlOiBUTm9kZSwgbFZpZXc6IExWaWV3LCByZW5kZXJlcjogUmVuZGVyZXIzLFxuICAgIG9sZEtleVZhbHVlQXJyYXk6IEtleVZhbHVlQXJyYXk8YW55PiwgbmV3S2V5VmFsdWVBcnJheTogS2V5VmFsdWVBcnJheTxhbnk+LFxuICAgIGlzQ2xhc3NCYXNlZDogYm9vbGVhbiwgYmluZGluZ0luZGV4OiBudW1iZXIpIHtcbiAgaWYgKG9sZEtleVZhbHVlQXJyYXkgYXMgS2V5VmFsdWVBcnJheTxhbnk+fCBOT19DSEFOR0UgPT09IE5PX0NIQU5HRSkge1xuICAgIC8vIE9uIGZpcnN0IGV4ZWN1dGlvbiB0aGUgb2xkS2V5VmFsdWVBcnJheSBpcyBOT19DSEFOR0UgPT4gdHJlYXQgaXQgYXMgZW1wdHkgS2V5VmFsdWVBcnJheS5cbiAgICBvbGRLZXlWYWx1ZUFycmF5ID0gRU1QVFlfQVJSQVkgYXMgYW55O1xuICB9XG4gIGxldCBvbGRJbmRleCA9IDA7XG4gIGxldCBuZXdJbmRleCA9IDA7XG4gIGxldCBvbGRLZXk6IHN0cmluZ3xudWxsID0gMCA8IG9sZEtleVZhbHVlQXJyYXkubGVuZ3RoID8gb2xkS2V5VmFsdWVBcnJheVswXSA6IG51bGw7XG4gIGxldCBuZXdLZXk6IHN0cmluZ3xudWxsID0gMCA8IG5ld0tleVZhbHVlQXJyYXkubGVuZ3RoID8gbmV3S2V5VmFsdWVBcnJheVswXSA6IG51bGw7XG4gIHdoaWxlIChvbGRLZXkgIT09IG51bGwgfHwgbmV3S2V5ICE9PSBudWxsKSB7XG4gICAgbmdEZXZNb2RlICYmIGFzc2VydExlc3NUaGFuKG9sZEluZGV4LCA5OTksICdBcmUgd2Ugc3R1Y2sgaW4gaW5maW5pdGUgbG9vcD8nKTtcbiAgICBuZ0Rldk1vZGUgJiYgYXNzZXJ0TGVzc1RoYW4obmV3SW5kZXgsIDk5OSwgJ0FyZSB3ZSBzdHVjayBpbiBpbmZpbml0ZSBsb29wPycpO1xuICAgIGNvbnN0IG9sZFZhbHVlID1cbiAgICAgICAgb2xkSW5kZXggPCBvbGRLZXlWYWx1ZUFycmF5Lmxlbmd0aCA/IG9sZEtleVZhbHVlQXJyYXlbb2xkSW5kZXggKyAxXSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBuZXdWYWx1ZSA9XG4gICAgICAgIG5ld0luZGV4IDwgbmV3S2V5VmFsdWVBcnJheS5sZW5ndGggPyBuZXdLZXlWYWx1ZUFycmF5W25ld0luZGV4ICsgMV0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IHNldEtleTogc3RyaW5nfG51bGwgPSBudWxsO1xuICAgIGxldCBzZXRWYWx1ZTogYW55ID0gdW5kZWZpbmVkO1xuICAgIGlmIChvbGRLZXkgPT09IG5ld0tleSkge1xuICAgICAgLy8gVVBEQVRFOiBLZXlzIGFyZSBlcXVhbCA9PiBuZXcgdmFsdWUgaXMgb3ZlcndyaXRpbmcgb2xkIHZhbHVlLlxuICAgICAgb2xkSW5kZXggKz0gMjtcbiAgICAgIG5ld0luZGV4ICs9IDI7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHNldEtleSA9IG5ld0tleTtcbiAgICAgICAgc2V0VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld0tleSA9PT0gbnVsbCB8fCBvbGRLZXkgIT09IG51bGwgJiYgb2xkS2V5IDwgbmV3S2V5ISkge1xuICAgICAgLy8gREVMRVRFOiBvbGRLZXkga2V5IGlzIG1pc3Npbmcgb3Igd2UgZGlkIG5vdCBmaW5kIHRoZSBvbGRLZXkgaW4gdGhlIG5ld1ZhbHVlXG4gICAgICAvLyAoYmVjYXVzZSB0aGUga2V5VmFsdWVBcnJheSBpcyBzb3J0ZWQgYW5kIGBuZXdLZXlgIGlzIGZvdW5kIGxhdGVyIGFscGhhYmV0aWNhbGx5KS5cbiAgICAgIC8vIGBcImJhY2tncm91bmRcIiA8IFwiY29sb3JcImAgc28gd2UgbmVlZCB0byBkZWxldGUgYFwiYmFja2dyb3VuZFwiYCBiZWNhdXNlIGl0IGlzIG5vdCBmb3VuZCBpbiB0aGVcbiAgICAgIC8vIG5ldyBhcnJheS5cbiAgICAgIG9sZEluZGV4ICs9IDI7XG4gICAgICBzZXRLZXkgPSBvbGRLZXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENSRUFURTogbmV3S2V5J3MgaXMgZWFybGllciBhbHBoYWJldGljYWxseSB0aGFuIG9sZEtleSdzIChvciBubyBvbGRLZXkpID0+IHdlIGhhdmUgbmV3IGtleS5cbiAgICAgIC8vIGBcImNvbG9yXCIgPiBcImJhY2tncm91bmRcImAgc28gd2UgbmVlZCB0byBhZGQgYGNvbG9yYCBiZWNhdXNlIGl0IGlzIGluIG5ldyBhcnJheSBidXQgbm90IGluXG4gICAgICAvLyBvbGQgYXJyYXkuXG4gICAgICBuZ0Rldk1vZGUgJiYgYXNzZXJ0RGVmaW5lZChuZXdLZXksICdFeHBlY3RpbmcgdG8gaGF2ZSBhIHZhbGlkIGtleScpO1xuICAgICAgbmV3SW5kZXggKz0gMjtcbiAgICAgIHNldEtleSA9IG5ld0tleTtcbiAgICAgIHNldFZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxuICAgIGlmIChzZXRLZXkgIT09IG51bGwpIHtcbiAgICAgIHVwZGF0ZVN0eWxpbmcodFZpZXcsIHROb2RlLCBsVmlldywgcmVuZGVyZXIsIHNldEtleSwgc2V0VmFsdWUsIGlzQ2xhc3NCYXNlZCwgYmluZGluZ0luZGV4KTtcbiAgICB9XG4gICAgb2xkS2V5ID0gb2xkSW5kZXggPCBvbGRLZXlWYWx1ZUFycmF5Lmxlbmd0aCA/IG9sZEtleVZhbHVlQXJyYXlbb2xkSW5kZXhdIDogbnVsbDtcbiAgICBuZXdLZXkgPSBuZXdJbmRleCA8IG5ld0tleVZhbHVlQXJyYXkubGVuZ3RoID8gbmV3S2V5VmFsdWVBcnJheVtuZXdJbmRleF0gOiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogVXBkYXRlIGEgc2ltcGxlIChwcm9wZXJ0eSBuYW1lKSBzdHlsaW5nLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgYHByb3BgIGFuZCB1cGRhdGVzIHRoZSBET00gdG8gdGhhdCB2YWx1ZS4gVGhlIGZ1bmN0aW9uIHRha2VzIHRoZSBiaW5kaW5nXG4gKiB2YWx1ZSBhcyB3ZWxsIGFzIGJpbmRpbmcgcHJpb3JpdHkgaW50byBjb25zaWRlcmF0aW9uIHRvIGRldGVybWluZSB3aGljaCB2YWx1ZSBzaG91bGQgYmUgd3JpdHRlblxuICogdG8gRE9NLiAoRm9yIGV4YW1wbGUgaXQgbWF5IGJlIGRldGVybWluZWQgdGhhdCB0aGVyZSBpcyBhIGhpZ2hlciBwcmlvcml0eSBvdmVyd3JpdGUgd2hpY2ggYmxvY2tzXG4gKiB0aGUgRE9NIHdyaXRlLCBvciBpZiB0aGUgdmFsdWUgZ29lcyB0byBgdW5kZWZpbmVkYCBhIGxvd2VyIHByaW9yaXR5IG92ZXJ3cml0ZSBtYXkgYmUgY29uc3VsdGVkLilcbiAqXG4gKiBAcGFyYW0gdFZpZXcgQXNzb2NpYXRlZCBgVFZpZXcuZGF0YWAgY29udGFpbnMgdGhlIGxpbmtlZCBsaXN0IG9mIGJpbmRpbmcgcHJpb3JpdGllcy5cbiAqIEBwYXJhbSB0Tm9kZSBgVE5vZGVgIHdoZXJlIHRoZSBiaW5kaW5nIGlzIGxvY2F0ZWQuXG4gKiBAcGFyYW0gbFZpZXcgYExWaWV3YCBjb250YWlucyB0aGUgdmFsdWVzIGFzc29jaWF0ZWQgd2l0aCBvdGhlciBzdHlsaW5nIGJpbmRpbmcgYXQgdGhpcyBgVE5vZGVgLlxuICogQHBhcmFtIHJlbmRlcmVyIFJlbmRlcmVyIHRvIHVzZSBpZiBhbnkgdXBkYXRlcy5cbiAqIEBwYXJhbSBwcm9wIEVpdGhlciBzdHlsZSBwcm9wZXJ0eSBuYW1lIG9yIGEgY2xhc3MgbmFtZS5cbiAqIEBwYXJhbSB2YWx1ZSBFaXRoZXIgc3R5bGUgdmFsdWUgZm9yIGBwcm9wYCBvciBgdHJ1ZWAvYGZhbHNlYCBpZiBgcHJvcGAgaXMgY2xhc3MuXG4gKiBAcGFyYW0gaXNDbGFzc0Jhc2VkIGB0cnVlYCBpZiBgY2xhc3NgIChgZmFsc2VgIGlmIGBzdHlsZWApXG4gKiBAcGFyYW0gYmluZGluZ0luZGV4IEJpbmRpbmcgaW5kZXggb2YgdGhlIGJpbmRpbmcuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVN0eWxpbmcoXG4gICAgdFZpZXc6IFRWaWV3LCB0Tm9kZTogVE5vZGUsIGxWaWV3OiBMVmlldywgcmVuZGVyZXI6IFJlbmRlcmVyMywgcHJvcDogc3RyaW5nLFxuICAgIHZhbHVlOiBzdHJpbmd8dW5kZWZpbmVkfG51bGx8Ym9vbGVhbiwgaXNDbGFzc0Jhc2VkOiBib29sZWFuLCBiaW5kaW5nSW5kZXg6IG51bWJlcikge1xuICBpZiAodE5vZGUudHlwZSAhPT0gVE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICAvLyBJdCBpcyBwb3NzaWJsZSB0byBoYXZlIHN0eWxpbmcgb24gbm9uLWVsZW1lbnRzIChzdWNoIGFzIG5nLWNvbnRhaW5lcikuXG4gICAgLy8gVGhpcyBpcyByYXJlLCBidXQgaXQgZG9lcyBoYXBwZW4uIEluIHN1Y2ggYSBjYXNlLCBqdXN0IGlnbm9yZSB0aGUgYmluZGluZy5cbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdERhdGEgPSB0Vmlldy5kYXRhO1xuICBjb25zdCB0UmFuZ2UgPSB0RGF0YVtiaW5kaW5nSW5kZXggKyAxXSBhcyBUU3R5bGluZ1JhbmdlO1xuICBjb25zdCBoaWdoZXJQcmlvcml0eVZhbHVlID0gZ2V0VFN0eWxpbmdSYW5nZU5leHREdXBsaWNhdGUodFJhbmdlKSA/XG4gICAgICBmaW5kU3R5bGluZ1ZhbHVlKHREYXRhLCB0Tm9kZSwgbFZpZXcsIHByb3AsIGdldFRTdHlsaW5nUmFuZ2VOZXh0KHRSYW5nZSksIGlzQ2xhc3NCYXNlZCkgOlxuICAgICAgdW5kZWZpbmVkO1xuICBpZiAoIWlzU3R5bGluZ1ZhbHVlUHJlc2VudChoaWdoZXJQcmlvcml0eVZhbHVlKSkge1xuICAgIC8vIFdlIGRvbid0IGhhdmUgYSBuZXh0IGR1cGxpY2F0ZSwgb3Igd2UgZGlkIG5vdCBmaW5kIGEgZHVwbGljYXRlIHZhbHVlLlxuICAgIGlmICghaXNTdHlsaW5nVmFsdWVQcmVzZW50KHZhbHVlKSkge1xuICAgICAgLy8gV2Ugc2hvdWxkIGRlbGV0ZSBjdXJyZW50IHZhbHVlIG9yIHJlc3RvcmUgdG8gbG93ZXIgcHJpb3JpdHkgdmFsdWUuXG4gICAgICBpZiAoZ2V0VFN0eWxpbmdSYW5nZVByZXZEdXBsaWNhdGUodFJhbmdlKSkge1xuICAgICAgICAvLyBXZSBoYXZlIGEgcG9zc2libGUgcHJldiBkdXBsaWNhdGUsIGxldCdzIHJldHJpZXZlIGl0LlxuICAgICAgICB2YWx1ZSA9IGZpbmRTdHlsaW5nVmFsdWUodERhdGEsIG51bGwsIGxWaWV3LCBwcm9wLCBiaW5kaW5nSW5kZXgsIGlzQ2xhc3NCYXNlZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJOb2RlID0gZ2V0TmF0aXZlQnlJbmRleChnZXRTZWxlY3RlZEluZGV4KCksIGxWaWV3KSBhcyBSRWxlbWVudDtcbiAgICBhcHBseVN0eWxpbmcocmVuZGVyZXIsIGlzQ2xhc3NCYXNlZCwgck5vZGUsIHByb3AsIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFNlYXJjaCBmb3Igc3R5bGluZyB2YWx1ZSB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aGljaCBpcyBvdmVyd3JpdGluZyBjdXJyZW50IHZhbHVlLCBvciBhXG4gKiB2YWx1ZSBvZiBsb3dlciBwcmlvcml0eSB0byB3aGljaCB3ZSBzaG91bGQgZmFsbCBiYWNrIGlmIHRoZSB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBXaGVuIHZhbHVlIGlzIGJlaW5nIGFwcGxpZWQgYXQgYSBsb2NhdGlvbiwgcmVsYXRlZCB2YWx1ZXMgbmVlZCB0byBiZSBjb25zdWx0ZWQuXG4gKiAtIElmIHRoZXJlIGlzIGEgaGlnaGVyIHByaW9yaXR5IGJpbmRpbmcsIHdlIHNob3VsZCBiZSB1c2luZyB0aGF0IG9uZSBpbnN0ZWFkLlxuICogICBGb3IgZXhhbXBsZSBgPGRpdiAgW3N0eWxlXT1cIntjb2xvcjpleHAxfVwiIFtzdHlsZS5jb2xvcl09XCJleHAyXCI+YCBjaGFuZ2UgdG8gYGV4cDFgXG4gKiAgIHJlcXVpcmVzIHRoYXQgd2UgY2hlY2sgYGV4cDJgIHRvIHNlZSBpZiBpdCBpcyBzZXQgdG8gdmFsdWUgb3RoZXIgdGhhbiBgdW5kZWZpbmVkYC5cbiAqIC0gSWYgdGhlcmUgaXMgYSBsb3dlciBwcmlvcml0eSBiaW5kaW5nIGFuZCB3ZSBhcmUgY2hhbmdpbmcgdG8gYHVuZGVmaW5lZGBcbiAqICAgRm9yIGV4YW1wbGUgYDxkaXYgIFtzdHlsZV09XCJ7Y29sb3I6ZXhwMX1cIiBbc3R5bGUuY29sb3JdPVwiZXhwMlwiPmAgY2hhbmdlIHRvIGBleHAyYCB0b1xuICogICBgdW5kZWZpbmVkYCByZXF1aXJlcyB0aGF0IHdlIGNoZWNrIGBleHAxYCAoYW5kIHN0YXRpYyB2YWx1ZXMpIGFuZCB1c2UgdGhhdCBhcyBuZXcgdmFsdWUuXG4gKlxuICogTk9URTogVGhlIHN0eWxpbmcgc3RvcmVzIHR3byB2YWx1ZXMuXG4gKiAxLiBUaGUgcmF3IHZhbHVlIHdoaWNoIGNhbWUgZnJvbSB0aGUgYXBwbGljYXRpb24gaXMgc3RvcmVkIGF0IGBpbmRleCArIDBgIGxvY2F0aW9uLiAoVGhpcyB2YWx1ZVxuICogICAgaXMgdXNlZCBmb3IgZGlydHkgY2hlY2tpbmcpLlxuICogMi4gVGhlIG5vcm1hbGl6ZWQgdmFsdWUgKGNvbnZlcnRlZCB0byBgS2V5VmFsdWVBcnJheWAgaWYgbWFwIGFuZCBzYW5pdGl6ZWQpIGlzIHN0b3JlZCBhdCBgaW5kZXggK1xuICogMWAuXG4gKiAgICBUaGUgYWR2YW50YWdlIG9mIHN0b3JpbmcgdGhlIHNhbml0aXplZCB2YWx1ZSBpcyB0aGF0IG9uY2UgdGhlIHZhbHVlIGlzIHdyaXR0ZW4gd2UgZG9uJ3QgbmVlZFxuICogICAgdG8gd29ycnkgYWJvdXQgc2FuaXRpemluZyBpdCBsYXRlciBvciBrZWVwaW5nIHRyYWNrIG9mIHRoZSBzYW5pdGl6ZXIuXG4gKlxuICogQHBhcmFtIHREYXRhIGBURGF0YWAgdXNlZCBmb3IgdHJhdmVyc2luZyB0aGUgcHJpb3JpdHkuXG4gKiBAcGFyYW0gdE5vZGUgYFROb2RlYCB0byB1c2UgZm9yIHJlc29sdmluZyBzdGF0aWMgc3R5bGluZy4gQWxzbyBjb250cm9scyBzZWFyY2ggZGlyZWN0aW9uLlxuICogICAtIGBUTm9kZWAgc2VhcmNoIG5leHQgYW5kIHF1aXQgYXMgc29vbiBhcyBgaXNTdHlsaW5nVmFsdWVQcmVzZW50KHZhbHVlKWAgaXMgdHJ1ZS5cbiAqICAgICAgSWYgbm8gdmFsdWUgZm91bmQgY29uc3VsdCBgdE5vZGUucmVzaWR1YWxTdHlsZWAvYHROb2RlLnJlc2lkdWFsQ2xhc3NgIGZvciBkZWZhdWx0IHZhbHVlLlxuICogICAtIGBudWxsYCBzZWFyY2ggcHJldiBhbmQgZ28gYWxsIHRoZSB3YXkgdG8gZW5kLiBSZXR1cm4gbGFzdCB2YWx1ZSB3aGVyZVxuICogICAgIGBpc1N0eWxpbmdWYWx1ZVByZXNlbnQodmFsdWUpYCBpcyB0cnVlLlxuICogQHBhcmFtIGxWaWV3IGBMVmlld2AgdXNlZCBmb3IgcmV0cmlldmluZyB0aGUgYWN0dWFsIHZhbHVlcy5cbiAqIEBwYXJhbSBwcm9wIFByb3BlcnR5IHdoaWNoIHdlIGFyZSBpbnRlcmVzdGVkIGluLlxuICogQHBhcmFtIGluZGV4IFN0YXJ0aW5nIGluZGV4IGluIHRoZSBsaW5rZWQgbGlzdCBvZiBzdHlsaW5nIGJpbmRpbmdzIHdoZXJlIHRoZSBzZWFyY2ggc2hvdWxkIHN0YXJ0LlxuICogQHBhcmFtIGlzQ2xhc3NCYXNlZCBgdHJ1ZWAgaWYgYGNsYXNzYCAoYGZhbHNlYCBpZiBgc3R5bGVgKVxuICovXG5mdW5jdGlvbiBmaW5kU3R5bGluZ1ZhbHVlKFxuICAgIHREYXRhOiBURGF0YSwgdE5vZGU6IFROb2RlfG51bGwsIGxWaWV3OiBMVmlldywgcHJvcDogc3RyaW5nLCBpbmRleDogbnVtYmVyLFxuICAgIGlzQ2xhc3NCYXNlZDogYm9vbGVhbik6IGFueSB7XG4gIC8vIGBUTm9kZWAgdG8gdXNlIGZvciByZXNvbHZpbmcgc3RhdGljIHN0eWxpbmcuIEFsc28gY29udHJvbHMgc2VhcmNoIGRpcmVjdGlvbi5cbiAgLy8gICAtIGBUTm9kZWAgc2VhcmNoIG5leHQgYW5kIHF1aXQgYXMgc29vbiBhcyBgaXNTdHlsaW5nVmFsdWVQcmVzZW50KHZhbHVlKWAgaXMgdHJ1ZS5cbiAgLy8gICAgICBJZiBubyB2YWx1ZSBmb3VuZCBjb25zdWx0IGB0Tm9kZS5yZXNpZHVhbFN0eWxlYC9gdE5vZGUucmVzaWR1YWxDbGFzc2AgZm9yIGRlZmF1bHQgdmFsdWUuXG4gIC8vICAgLSBgbnVsbGAgc2VhcmNoIHByZXYgYW5kIGdvIGFsbCB0aGUgd2F5IHRvIGVuZC4gUmV0dXJuIGxhc3QgdmFsdWUgd2hlcmVcbiAgLy8gICAgIGBpc1N0eWxpbmdWYWx1ZVByZXNlbnQodmFsdWUpYCBpcyB0cnVlLlxuICBjb25zdCBpc1ByZXZEaXJlY3Rpb24gPSB0Tm9kZSA9PT0gbnVsbDtcbiAgbGV0IHZhbHVlOiBhbnkgPSB1bmRlZmluZWQ7XG4gIHdoaWxlIChpbmRleCA+IDApIHtcbiAgICBjb25zdCByYXdLZXkgPSB0RGF0YVtpbmRleF0gYXMgVFN0eWxpbmdLZXk7XG4gICAgY29uc3QgY29udGFpbnNTdGF0aWNzID0gQXJyYXkuaXNBcnJheShyYXdLZXkpO1xuICAgIC8vIFVud3JhcCB0aGUga2V5IGlmIHdlIGNvbnRhaW4gc3RhdGljIHZhbHVlcy5cbiAgICBjb25zdCBrZXkgPSBjb250YWluc1N0YXRpY3MgPyAocmF3S2V5IGFzIHN0cmluZ1tdKVsxXSA6IHJhd0tleTtcbiAgICBjb25zdCBpc1N0eWxpbmdNYXAgPSBrZXkgPT09IG51bGw7XG4gICAgbGV0IHZhbHVlQXRMVmlld0luZGV4ID0gbFZpZXdbaW5kZXggKyAxXTtcbiAgICBpZiAodmFsdWVBdExWaWV3SW5kZXggPT09IE5PX0NIQU5HRSkge1xuICAgICAgLy8gSW4gZmlyc3RVcGRhdGVQYXNzIHRoZSBzdHlsaW5nIGluc3RydWN0aW9ucyBjcmVhdGUgYSBsaW5rZWQgbGlzdCBvZiBzdHlsaW5nLlxuICAgICAgLy8gT24gc3Vic2VxdWVudCBwYXNzZXMgaXQgaXMgcG9zc2libGUgZm9yIGEgc3R5bGluZyBpbnN0cnVjdGlvbiB0byB0cnkgdG8gcmVhZCBhIGJpbmRpbmdcbiAgICAgIC8vIHdoaWNoXG4gICAgICAvLyBoYXMgbm90IHlldCBleGVjdXRlZC4gSW4gdGhhdCBjYXNlIHdlIHdpbGwgZmluZCBgTk9fQ0hBTkdFYCBhbmQgd2Ugc2hvdWxkIGFzc3VtZSB0aGF0XG4gICAgICAvLyB3ZSBoYXZlIGB1bmRlZmluZWRgIChvciBlbXB0eSBhcnJheSBpbiBjYXNlIG9mIHN0eWxpbmctbWFwIGluc3RydWN0aW9uKSBpbnN0ZWFkLiBUaGlzXG4gICAgICAvLyBhbGxvd3MgdGhlIHJlc29sdXRpb24gdG8gYXBwbHkgdGhlIHZhbHVlICh3aGljaCBtYXkgbGF0ZXIgYmUgb3ZlcndyaXR0ZW4gd2hlbiB0aGVcbiAgICAgIC8vIGJpbmRpbmcgYWN0dWFsbHkgZXhlY3V0ZXMuKVxuICAgICAgdmFsdWVBdExWaWV3SW5kZXggPSBpc1N0eWxpbmdNYXAgPyBFTVBUWV9BUlJBWSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRWYWx1ZSA9IGlzU3R5bGluZ01hcCA/IGtleVZhbHVlQXJyYXlHZXQodmFsdWVBdExWaWV3SW5kZXgsIHByb3ApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID09PSBwcm9wID8gdmFsdWVBdExWaWV3SW5kZXggOiB1bmRlZmluZWQ7XG4gICAgaWYgKGNvbnRhaW5zU3RhdGljcyAmJiAhaXNTdHlsaW5nVmFsdWVQcmVzZW50KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IGtleVZhbHVlQXJyYXlHZXQocmF3S2V5IGFzIEtleVZhbHVlQXJyYXk8YW55PiwgcHJvcCk7XG4gICAgfVxuICAgIGlmIChpc1N0eWxpbmdWYWx1ZVByZXNlbnQoY3VycmVudFZhbHVlKSkge1xuICAgICAgdmFsdWUgPSBjdXJyZW50VmFsdWU7XG4gICAgICBpZiAoaXNQcmV2RGlyZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdFJhbmdlID0gdERhdGFbaW5kZXggKyAxXSBhcyBUU3R5bGluZ1JhbmdlO1xuICAgIGluZGV4ID0gaXNQcmV2RGlyZWN0aW9uID8gZ2V0VFN0eWxpbmdSYW5nZVByZXYodFJhbmdlKSA6IGdldFRTdHlsaW5nUmFuZ2VOZXh0KHRSYW5nZSk7XG4gIH1cbiAgaWYgKHROb2RlICE9PSBudWxsKSB7XG4gICAgLy8gaW4gY2FzZSB3aGVyZSB3ZSBhcmUgZ29pbmcgaW4gbmV4dCBkaXJlY3Rpb24gQU5EIHdlIGRpZCBub3QgZmluZCBhbnl0aGluZywgd2UgbmVlZCB0b1xuICAgIC8vIGNvbnN1bHQgcmVzaWR1YWwgc3R5bGluZ1xuICAgIGxldCByZXNpZHVhbCA9IGlzQ2xhc3NCYXNlZCA/IHROb2RlLnJlc2lkdWFsQ2xhc3NlcyA6IHROb2RlLnJlc2lkdWFsU3R5bGVzO1xuICAgIGlmIChyZXNpZHVhbCAhPSBudWxsIC8qKiBPUiByZXNpZHVhbCAhPT09IHVuZGVmaW5lZCAqLykge1xuICAgICAgdmFsdWUgPSBrZXlWYWx1ZUFycmF5R2V0KHJlc2lkdWFsISwgcHJvcCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBiaW5kaW5nIHZhbHVlIHNob3VsZCBiZSB1c2VkIChvciBpZiB0aGUgdmFsdWUgaXMgJ3VuZGVmaW5lZCcgYW5kIGhlbmNlIHByaW9yaXR5XG4gKiByZXNvbHV0aW9uIHNob3VsZCBiZSB1c2VkLilcbiAqXG4gKiBAcGFyYW0gdmFsdWUgQmluZGluZyBzdHlsZSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaXNTdHlsaW5nVmFsdWVQcmVzZW50KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgLy8gQ3VycmVudGx5IG9ubHkgYHVuZGVmaW5lZGAgdmFsdWUgaXMgY29uc2lkZXJlZCBub24tYmluZGluZy4gVGhhdCBpcyBgdW5kZWZpbmVkYCBzYXlzIEkgZG9uJ3RcbiAgLy8gaGF2ZSBhbiBvcGluaW9uIGFzIHRvIHdoYXQgdGhpcyBiaW5kaW5nIHNob3VsZCBiZSBhbmQgeW91IHNob3VsZCBjb25zdWx0IG90aGVyIGJpbmRpbmdzIGJ5XG4gIC8vIHByaW9yaXR5IHRvIGRldGVybWluZSB0aGUgdmFsaWQgdmFsdWUuXG4gIC8vIFRoaXMgaXMgZXh0cmFjdGVkIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gc28gdGhhdCB3ZSBoYXZlIGEgc2luZ2xlIHBsYWNlIHRvIGNvbnRyb2wgdGhpcy5cbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogU2FuaXRpemVzIG9yIGFkZHMgc3VmZml4IHRvIHRoZSB2YWx1ZS5cbiAqXG4gKiBJZiB2YWx1ZSBpcyBgbnVsbGAvYHVuZGVmaW5lZGAgbm8gc3VmZml4IGlzIGFkZGVkXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBzdWZmaXhPclNhbml0aXplclxuICovXG5mdW5jdGlvbiBub3JtYWxpemVBbmRBcHBseVN1ZmZpeE9yU2FuaXRpemVyKFxuICAgIHZhbHVlOiBhbnksIHN1ZmZpeE9yU2FuaXRpemVyOiBTYW5pdGl6ZXJGbnxzdHJpbmd8dW5kZWZpbmVkfG51bGwpOiBzdHJpbmd8bnVsbHx1bmRlZmluZWR8XG4gICAgYm9vbGVhbiB7XG4gIGlmICh2YWx1ZSA9PSBudWxsIC8qKiB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkICovKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzdWZmaXhPclNhbml0aXplciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIHNhbml0aXplIHRoZSB2YWx1ZS5cbiAgICB2YWx1ZSA9IHN1ZmZpeE9yU2FuaXRpemVyKHZhbHVlKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3VmZml4T3JTYW5pdGl6ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSArIHN1ZmZpeE9yU2FuaXRpemVyO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YWx1ZSA9IHN0cmluZ2lmeSh1bndyYXBTYWZlVmFsdWUodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cblxuLyoqXG4gKiBUZXN0cyBpZiB0aGUgYFROb2RlYCBoYXMgaW5wdXQgc2hhZG93LlxuICpcbiAqIEFuIGlucHV0IHNoYWRvdyBpcyB3aGVuIGEgZGlyZWN0aXZlIHN0ZWFscyAoc2hhZG93cykgdGhlIGlucHV0IGJ5IHVzaW5nIGBASW5wdXQoJ3N0eWxlJylgIG9yXG4gKiBgQElucHV0KCdjbGFzcycpYCBhcyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gdE5vZGUgYFROb2RlYCB3aGljaCB3ZSB3b3VsZCBsaWtlIHRvIHNlZSBpZiBpdCBoYXMgc2hhZG93LlxuICogQHBhcmFtIGlzQ2xhc3NCYXNlZCBgdHJ1ZWAgaWYgYGNsYXNzYCAoYGZhbHNlYCBpZiBgc3R5bGVgKVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzU3R5bGluZ0lucHV0U2hhZG93KHROb2RlOiBUTm9kZSwgaXNDbGFzc0Jhc2VkOiBib29sZWFuKSB7XG4gIHJldHVybiAodE5vZGUuZmxhZ3MgJiAoaXNDbGFzc0Jhc2VkID8gVE5vZGVGbGFncy5oYXNDbGFzc0lucHV0IDogVE5vZGVGbGFncy5oYXNTdHlsZUlucHV0KSkgIT09IDA7XG59XG4iXX0=