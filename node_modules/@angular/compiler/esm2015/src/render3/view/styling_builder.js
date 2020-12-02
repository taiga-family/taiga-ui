import { ASTWithSource, BindingPipe, Interpolation } from '../../expression_parser/ast';
import * as o from '../../output/output_ast';
import { isEmptyExpression } from '../../template_parser/template_parser';
import { Identifiers as R3 } from '../r3_identifiers';
import { hyphenate, parse as parseStyle } from './style_parser';
import { getInterpolationArgsLength } from './util';
const IMPORTANT_FLAG = '!important';
/**
 * Minimum amount of binding slots required in the runtime for style/class bindings.
 *
 * Styling in Angular uses up two slots in the runtime LView/TData data structures to
 * record binding data, property information and metadata.
 *
 * When a binding is registered it will place the following information in the `LView`:
 *
 * slot 1) binding value
 * slot 2) cached value (all other values collected before it in string form)
 *
 * When a binding is registered it will place the following information in the `TData`:
 *
 * slot 1) prop name
 * slot 2) binding index that points to the previous style/class binding (and some extra config
 * values)
 *
 * Let's imagine we have a binding that looks like so:
 *
 * ```
 * <div [style.width]="x" [style.height]="y">
 * ```
 *
 * Our `LView` and `TData` data-structures look like so:
 *
 * ```typescript
 * LView = [
 *   // ...
 *   x, // value of x
 *   "width: x",
 *
 *   y, // value of y
 *   "width: x; height: y",
 *   // ...
 * ];
 *
 * TData = [
 *   // ...
 *   "width", // binding slot 20
 *   0,
 *
 *   "height",
 *   20,
 *   // ...
 * ];
 * ```
 *
 * */
export const MIN_STYLING_BINDING_SLOTS_REQUIRED = 2;
/**
 * Produces creation/update instructions for all styling bindings (class and style)
 *
 * It also produces the creation instruction to register all initial styling values
 * (which are all the static class="..." and style="..." attribute values that exist
 * on an element within a template).
 *
 * The builder class below handles producing instructions for the following cases:
 *
 * - Static style/class attributes (style="..." and class="...")
 * - Dynamic style/class map bindings ([style]="map" and [class]="map|string")
 * - Dynamic style/class property bindings ([style.prop]="exp" and [class.name]="exp")
 *
 * Due to the complex relationship of all of these cases, the instructions generated
 * for these attributes/properties/bindings must be done so in the correct order. The
 * order which these must be generated is as follows:
 *
 * if (createMode) {
 *   styling(...)
 * }
 * if (updateMode) {
 *   styleMap(...)
 *   classMap(...)
 *   styleProp(...)
 *   classProp(...)
 * }
 *
 * The creation/update methods within the builder class produce these instructions.
 */
export class StylingBuilder {
    constructor(_directiveExpr) {
        this._directiveExpr = _directiveExpr;
        /** Whether or not there are any static styling values present */
        this._hasInitialValues = false;
        /**
         *  Whether or not there are any styling bindings present
         *  (i.e. `[style]`, `[class]`, `[style.prop]` or `[class.name]`)
         */
        this.hasBindings = false;
        this.hasBindingsWithPipes = false;
        /** the input for [class] (if it exists) */
        this._classMapInput = null;
        /** the input for [style] (if it exists) */
        this._styleMapInput = null;
        /** an array of each [style.prop] input */
        this._singleStyleInputs = null;
        /** an array of each [class.name] input */
        this._singleClassInputs = null;
        this._lastStylingInput = null;
        this._firstStylingInput = null;
        // maps are used instead of hash maps because a Map will
        // retain the ordering of the keys
        /**
         * Represents the location of each style binding in the template
         * (e.g. `<div [style.width]="w" [style.height]="h">` implies
         * that `width=0` and `height=1`)
         */
        this._stylesIndex = new Map();
        /**
         * Represents the location of each class binding in the template
         * (e.g. `<div [class.big]="b" [class.hidden]="h">` implies
         * that `big=0` and `hidden=1`)
         */
        this._classesIndex = new Map();
        this._initialStyleValues = [];
        this._initialClassValues = [];
    }
    /**
     * Registers a given input to the styling builder to be later used when producing AOT code.
     *
     * The code below will only accept the input if it is somehow tied to styling (whether it be
     * style/class bindings or static style/class attributes).
     */
    registerBoundInput(input) {
        // [attr.style] or [attr.class] are skipped in the code below,
        // they should not be treated as styling-based bindings since
        // they are intended to be written directly to the attr and
        // will therefore skip all style/class resolution that is present
        // with style="", [style]="" and [style.prop]="", class="",
        // [class.prop]="". [class]="" assignments
        let binding = null;
        let name = input.name;
        switch (input.type) {
            case 0 /* Property */:
                binding = this.registerInputBasedOnName(name, input.value, input.sourceSpan);
                break;
            case 3 /* Style */:
                binding = this.registerStyleInput(name, false, input.value, input.sourceSpan, input.unit);
                break;
            case 2 /* Class */:
                binding = this.registerClassInput(name, false, input.value, input.sourceSpan);
                break;
        }
        return binding ? true : false;
    }
    registerInputBasedOnName(name, expression, sourceSpan) {
        let binding = null;
        const prefix = name.substring(0, 6);
        const isStyle = name === 'style' || prefix === 'style.' || prefix === 'style!';
        const isClass = !isStyle && (name === 'class' || prefix === 'class.' || prefix === 'class!');
        if (isStyle || isClass) {
            const isMapBased = name.charAt(5) !== '.'; // style.prop or class.prop makes this a no
            const property = name.substr(isMapBased ? 5 : 6); // the dot explains why there's a +1
            if (isStyle) {
                binding = this.registerStyleInput(property, isMapBased, expression, sourceSpan);
            }
            else {
                binding = this.registerClassInput(property, isMapBased, expression, sourceSpan);
            }
        }
        return binding;
    }
    registerStyleInput(name, isMapBased, value, sourceSpan, unit) {
        if (isEmptyExpression(value)) {
            return null;
        }
        name = normalizePropName(name);
        const { property, hasOverrideFlag, unit: bindingUnit } = parseProperty(name);
        const entry = {
            name: property,
            sanitize: property ? isStyleSanitizable(property) : true,
            unit: unit || bindingUnit,
            value,
            sourceSpan,
            hasOverrideFlag
        };
        if (isMapBased) {
            this._styleMapInput = entry;
        }
        else {
            (this._singleStyleInputs = this._singleStyleInputs || []).push(entry);
            registerIntoMap(this._stylesIndex, property);
        }
        this._lastStylingInput = entry;
        this._firstStylingInput = this._firstStylingInput || entry;
        this._checkForPipes(value);
        this.hasBindings = true;
        return entry;
    }
    registerClassInput(name, isMapBased, value, sourceSpan) {
        if (isEmptyExpression(value)) {
            return null;
        }
        const { property, hasOverrideFlag } = parseProperty(name);
        const entry = { name: property, value, sourceSpan, sanitize: false, hasOverrideFlag, unit: null };
        if (isMapBased) {
            if (this._classMapInput) {
                throw new Error('[class] and [className] bindings cannot be used on the same element simultaneously');
            }
            this._classMapInput = entry;
        }
        else {
            (this._singleClassInputs = this._singleClassInputs || []).push(entry);
            registerIntoMap(this._classesIndex, property);
        }
        this._lastStylingInput = entry;
        this._firstStylingInput = this._firstStylingInput || entry;
        this._checkForPipes(value);
        this.hasBindings = true;
        return entry;
    }
    _checkForPipes(value) {
        if ((value instanceof ASTWithSource) && (value.ast instanceof BindingPipe)) {
            this.hasBindingsWithPipes = true;
        }
    }
    /**
     * Registers the element's static style string value to the builder.
     *
     * @param value the style string (e.g. `width:100px; height:200px;`)
     */
    registerStyleAttr(value) {
        this._initialStyleValues = parseStyle(value);
        this._hasInitialValues = true;
    }
    /**
     * Registers the element's static class string value to the builder.
     *
     * @param value the className string (e.g. `disabled gold zoom`)
     */
    registerClassAttr(value) {
        this._initialClassValues = value.trim().split(/\s+/g);
        this._hasInitialValues = true;
    }
    /**
     * Appends all styling-related expressions to the provided attrs array.
     *
     * @param attrs an existing array where each of the styling expressions
     * will be inserted into.
     */
    populateInitialStylingAttrs(attrs) {
        // [CLASS_MARKER, 'foo', 'bar', 'baz' ...]
        if (this._initialClassValues.length) {
            attrs.push(o.literal(1 /* Classes */));
            for (let i = 0; i < this._initialClassValues.length; i++) {
                attrs.push(o.literal(this._initialClassValues[i]));
            }
        }
        // [STYLE_MARKER, 'width', '200px', 'height', '100px', ...]
        if (this._initialStyleValues.length) {
            attrs.push(o.literal(2 /* Styles */));
            for (let i = 0; i < this._initialStyleValues.length; i += 2) {
                attrs.push(o.literal(this._initialStyleValues[i]), o.literal(this._initialStyleValues[i + 1]));
            }
        }
    }
    /**
     * Builds an instruction with all the expressions and parameters for `elementHostAttrs`.
     *
     * The instruction generation code below is used for producing the AOT statement code which is
     * responsible for registering initial styles (within a directive hostBindings' creation block),
     * as well as any of the provided attribute values, to the directive host element.
     */
    assignHostAttrs(attrs, definitionMap) {
        if (this._directiveExpr && (attrs.length || this._hasInitialValues)) {
            this.populateInitialStylingAttrs(attrs);
            definitionMap.set('hostAttrs', o.literalArr(attrs));
        }
    }
    /**
     * Builds an instruction with all the expressions and parameters for `classMap`.
     *
     * The instruction data will contain all expressions for `classMap` to function
     * which includes the `[class]` expression params.
     */
    buildClassMapInstruction(valueConverter) {
        if (this._classMapInput) {
            return this._buildMapBasedInstruction(valueConverter, true, this._classMapInput);
        }
        return null;
    }
    /**
     * Builds an instruction with all the expressions and parameters for `styleMap`.
     *
     * The instruction data will contain all expressions for `styleMap` to function
     * which includes the `[style]` expression params.
     */
    buildStyleMapInstruction(valueConverter) {
        if (this._styleMapInput) {
            return this._buildMapBasedInstruction(valueConverter, false, this._styleMapInput);
        }
        return null;
    }
    _buildMapBasedInstruction(valueConverter, isClassBased, stylingInput) {
        // each styling binding value is stored in the LView
        // map-based bindings allocate two slots: one for the
        // previous binding value and another for the previous
        // className or style attribute value.
        let totalBindingSlotsRequired = MIN_STYLING_BINDING_SLOTS_REQUIRED;
        // these values must be outside of the update block so that they can
        // be evaluated (the AST visit call) during creation time so that any
        // pipes can be picked up in time before the template is built
        const mapValue = stylingInput.value.visit(valueConverter);
        let reference;
        if (mapValue instanceof Interpolation) {
            totalBindingSlotsRequired += mapValue.expressions.length;
            reference = isClassBased ? getClassMapInterpolationExpression(mapValue) :
                getStyleMapInterpolationExpression(mapValue);
        }
        else {
            reference = isClassBased ? R3.classMap : R3.styleMap;
        }
        return {
            reference,
            calls: [{
                    supportsInterpolation: true,
                    sourceSpan: stylingInput.sourceSpan,
                    allocateBindingSlots: totalBindingSlotsRequired,
                    params: (convertFn) => {
                        const convertResult = convertFn(mapValue);
                        const params = Array.isArray(convertResult) ? convertResult : [convertResult];
                        return params;
                    }
                }]
        };
    }
    _buildSingleInputs(reference, inputs, valueConverter, getInterpolationExpressionFn, isClassBased) {
        const instructions = [];
        inputs.forEach(input => {
            const previousInstruction = instructions[instructions.length - 1];
            const value = input.value.visit(valueConverter);
            let referenceForCall = reference;
            // each styling binding value is stored in the LView
            // but there are two values stored for each binding:
            //   1) the value itself
            //   2) an intermediate value (concatenation of style up to this point).
            //      We need to store the intermediate value so that we don't allocate
            //      the strings on each CD.
            let totalBindingSlotsRequired = MIN_STYLING_BINDING_SLOTS_REQUIRED;
            if (value instanceof Interpolation) {
                totalBindingSlotsRequired += value.expressions.length;
                if (getInterpolationExpressionFn) {
                    referenceForCall = getInterpolationExpressionFn(value);
                }
            }
            const call = {
                sourceSpan: input.sourceSpan,
                allocateBindingSlots: totalBindingSlotsRequired,
                supportsInterpolation: !!getInterpolationExpressionFn,
                params: (convertFn) => {
                    // params => stylingProp(propName, value, suffix|sanitizer)
                    const params = [];
                    params.push(o.literal(input.name));
                    const convertResult = convertFn(value);
                    if (Array.isArray(convertResult)) {
                        params.push(...convertResult);
                    }
                    else {
                        params.push(convertResult);
                    }
                    // [style.prop] bindings may use suffix values (e.g. px, em, etc...) and they
                    // can also use a sanitizer. Sanitization occurs for url-based entries. Having
                    // the suffix value and a sanitizer together into the instruction doesn't make
                    // any sense (url-based entries cannot be sanitized).
                    if (!isClassBased) {
                        if (input.unit) {
                            params.push(o.literal(input.unit));
                        }
                        else if (input.sanitize) {
                            params.push(o.importExpr(R3.defaultStyleSanitizer));
                        }
                    }
                    return params;
                }
            };
            // If we ended up generating a call to the same instruction as the previous styling property
            // we can chain the calls together safely to save some bytes, otherwise we have to generate
            // a separate instruction call. This is primarily a concern with interpolation instructions
            // where we may start off with one `reference`, but end up using another based on the
            // number of interpolations.
            if (previousInstruction && previousInstruction.reference === referenceForCall) {
                previousInstruction.calls.push(call);
            }
            else {
                instructions.push({ reference: referenceForCall, calls: [call] });
            }
        });
        return instructions;
    }
    _buildClassInputs(valueConverter) {
        if (this._singleClassInputs) {
            return this._buildSingleInputs(R3.classProp, this._singleClassInputs, valueConverter, null, true);
        }
        return [];
    }
    _buildStyleInputs(valueConverter) {
        if (this._singleStyleInputs) {
            return this._buildSingleInputs(R3.styleProp, this._singleStyleInputs, valueConverter, getStylePropInterpolationExpression, false);
        }
        return [];
    }
    /**
     * Constructs all instructions which contain the expressions that will be placed
     * into the update block of a template function or a directive hostBindings function.
     */
    buildUpdateLevelInstructions(valueConverter) {
        const instructions = [];
        if (this.hasBindings) {
            const styleMapInstruction = this.buildStyleMapInstruction(valueConverter);
            if (styleMapInstruction) {
                instructions.push(styleMapInstruction);
            }
            const classMapInstruction = this.buildClassMapInstruction(valueConverter);
            if (classMapInstruction) {
                instructions.push(classMapInstruction);
            }
            instructions.push(...this._buildStyleInputs(valueConverter));
            instructions.push(...this._buildClassInputs(valueConverter));
        }
        return instructions;
    }
}
function registerIntoMap(map, key) {
    if (!map.has(key)) {
        map.set(key, map.size);
    }
}
function isStyleSanitizable(prop) {
    // Note that browsers support both the dash case and
    // camel case property names when setting through JS.
    return prop === 'background-image' || prop === 'backgroundImage' || prop === 'background' ||
        prop === 'border-image' || prop === 'borderImage' || prop === 'border-image-source' ||
        prop === 'borderImageSource' || prop === 'filter' || prop === 'list-style' ||
        prop === 'listStyle' || prop === 'list-style-image' || prop === 'listStyleImage' ||
        prop === 'clip-path' || prop === 'clipPath';
}
/**
 * Simple helper function to either provide the constant literal that will house the value
 * here or a null value if the provided values are empty.
 */
function getConstantLiteralFromArray(constantPool, values) {
    return values.length ? constantPool.getConstLiteral(o.literalArr(values), true) : o.NULL_EXPR;
}
export function parseProperty(name) {
    let hasOverrideFlag = false;
    const overrideIndex = name.indexOf(IMPORTANT_FLAG);
    if (overrideIndex !== -1) {
        name = overrideIndex > 0 ? name.substring(0, overrideIndex) : '';
        hasOverrideFlag = true;
    }
    let unit = '';
    let property = name;
    const unitIndex = name.lastIndexOf('.');
    if (unitIndex > 0) {
        unit = name.substr(unitIndex + 1);
        property = name.substring(0, unitIndex);
    }
    return { property, unit, hasOverrideFlag };
}
/**
 * Gets the instruction to generate for an interpolated class map.
 * @param interpolation An Interpolation AST
 */
function getClassMapInterpolationExpression(interpolation) {
    switch (getInterpolationArgsLength(interpolation)) {
        case 1:
            return R3.classMap;
        case 3:
            return R3.classMapInterpolate1;
        case 5:
            return R3.classMapInterpolate2;
        case 7:
            return R3.classMapInterpolate3;
        case 9:
            return R3.classMapInterpolate4;
        case 11:
            return R3.classMapInterpolate5;
        case 13:
            return R3.classMapInterpolate6;
        case 15:
            return R3.classMapInterpolate7;
        case 17:
            return R3.classMapInterpolate8;
        default:
            return R3.classMapInterpolateV;
    }
}
/**
 * Gets the instruction to generate for an interpolated style map.
 * @param interpolation An Interpolation AST
 */
function getStyleMapInterpolationExpression(interpolation) {
    switch (getInterpolationArgsLength(interpolation)) {
        case 1:
            return R3.styleMap;
        case 3:
            return R3.styleMapInterpolate1;
        case 5:
            return R3.styleMapInterpolate2;
        case 7:
            return R3.styleMapInterpolate3;
        case 9:
            return R3.styleMapInterpolate4;
        case 11:
            return R3.styleMapInterpolate5;
        case 13:
            return R3.styleMapInterpolate6;
        case 15:
            return R3.styleMapInterpolate7;
        case 17:
            return R3.styleMapInterpolate8;
        default:
            return R3.styleMapInterpolateV;
    }
}
/**
 * Gets the instruction to generate for an interpolated style prop.
 * @param interpolation An Interpolation AST
 */
function getStylePropInterpolationExpression(interpolation) {
    switch (getInterpolationArgsLength(interpolation)) {
        case 1:
            return R3.styleProp;
        case 3:
            return R3.stylePropInterpolate1;
        case 5:
            return R3.stylePropInterpolate2;
        case 7:
            return R3.stylePropInterpolate3;
        case 9:
            return R3.stylePropInterpolate4;
        case 11:
            return R3.stylePropInterpolate5;
        case 13:
            return R3.stylePropInterpolate6;
        case 15:
            return R3.stylePropInterpolate7;
        case 17:
            return R3.stylePropInterpolate8;
        default:
            return R3.stylePropInterpolateV;
    }
}
function normalizePropName(prop) {
    return hyphenate(prop);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGluZ19idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3JlbmRlcjMvdmlldy9zdHlsaW5nX2J1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0EsT0FBTyxFQUFNLGFBQWEsRUFBRSxXQUFXLEVBQWUsYUFBYSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDeEcsT0FBTyxLQUFLLENBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RSxPQUFPLEVBQUMsV0FBVyxJQUFJLEVBQUUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxJQUFJLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBZ0IsMEJBQTBCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFakUsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDO0FBRXBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStDSztBQUNMLE1BQU0sQ0FBQyxNQUFNLGtDQUFrQyxHQUFHLENBQUMsQ0FBQztBQThCcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Qkc7QUFDSCxNQUFNLE9BQU8sY0FBYztJQXdDekIsWUFBb0IsY0FBaUM7UUFBakMsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBdkNyRCxpRUFBaUU7UUFDekQsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDOzs7V0FHRztRQUNJLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUVwQywyQ0FBMkM7UUFDbkMsbUJBQWMsR0FBMkIsSUFBSSxDQUFDO1FBQ3RELDJDQUEyQztRQUNuQyxtQkFBYyxHQUEyQixJQUFJLENBQUM7UUFDdEQsMENBQTBDO1FBQ2xDLHVCQUFrQixHQUE2QixJQUFJLENBQUM7UUFDNUQsMENBQTBDO1FBQ2xDLHVCQUFrQixHQUE2QixJQUFJLENBQUM7UUFDcEQsc0JBQWlCLEdBQTJCLElBQUksQ0FBQztRQUNqRCx1QkFBa0IsR0FBMkIsSUFBSSxDQUFDO1FBRTFELHdEQUF3RDtRQUN4RCxrQ0FBa0M7UUFFbEM7Ozs7V0FJRztRQUNLLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFFakQ7Ozs7V0FJRztRQUNLLGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDMUMsd0JBQW1CLEdBQWEsRUFBRSxDQUFDO1FBQ25DLHdCQUFtQixHQUFhLEVBQUUsQ0FBQztJQUVhLENBQUM7SUFFekQ7Ozs7O09BS0c7SUFDSCxrQkFBa0IsQ0FBQyxLQUF1QjtRQUN4Qyw4REFBOEQ7UUFDOUQsNkRBQTZEO1FBQzdELDJEQUEyRDtRQUMzRCxpRUFBaUU7UUFDakUsMkRBQTJEO1FBQzNELDBDQUEwQztRQUMxQyxJQUFJLE9BQU8sR0FBMkIsSUFBSSxDQUFDO1FBQzNDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdEIsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2xCO2dCQUNFLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM3RSxNQUFNO1lBQ1I7Z0JBQ0UsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFGLE1BQU07WUFDUjtnQkFDRSxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzlFLE1BQU07U0FDVDtRQUNELE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsd0JBQXdCLENBQUMsSUFBWSxFQUFFLFVBQWUsRUFBRSxVQUEyQjtRQUNqRixJQUFJLE9BQU8sR0FBMkIsSUFBSSxDQUFDO1FBQzNDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEtBQUssUUFBUSxDQUFDO1FBQy9FLE1BQU0sT0FBTyxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQztRQUM3RixJQUFJLE9BQU8sSUFBSSxPQUFPLEVBQUU7WUFDdEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBUywyQ0FBMkM7WUFDOUYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxvQ0FBb0M7WUFDdkYsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNqRjtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ2pGO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsa0JBQWtCLENBQ2QsSUFBWSxFQUFFLFVBQW1CLEVBQUUsS0FBVSxFQUFFLFVBQTJCLEVBQzFFLElBQWtCO1FBQ3BCLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixNQUFNLEVBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNFLE1BQU0sS0FBSyxHQUFzQjtZQUMvQixJQUFJLEVBQUUsUUFBUTtZQUNkLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3hELElBQUksRUFBRSxJQUFJLElBQUksV0FBVztZQUN6QixLQUFLO1lBQ0wsVUFBVTtZQUNWLGVBQWU7U0FDaEIsQ0FBQztRQUNGLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7U0FDN0I7YUFBTTtZQUNMLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEUsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLElBQUksS0FBSyxDQUFDO1FBQzNELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBWSxFQUFFLFVBQW1CLEVBQUUsS0FBVSxFQUFFLFVBQTJCO1FBRTNGLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE1BQU0sRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFDLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELE1BQU0sS0FBSyxHQUNQLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUN0RixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdkIsTUFBTSxJQUFJLEtBQUssQ0FDWCxvRkFBb0YsQ0FBQyxDQUFDO2FBQzNGO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7U0FDN0I7YUFBTTtZQUNMLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEUsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLElBQUksS0FBSyxDQUFDO1FBQzNELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sY0FBYyxDQUFDLEtBQVU7UUFDL0IsSUFBSSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLFlBQVksV0FBVyxDQUFDLEVBQUU7WUFDMUUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaUJBQWlCLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpQkFBaUIsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMkJBQTJCLENBQUMsS0FBcUI7UUFDL0MsMENBQTBDO1FBQzFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRTtZQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLGlCQUF5QixDQUFDLENBQUM7WUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0Y7UUFFRCwyREFBMkQ7UUFDM0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFO1lBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sZ0JBQXdCLENBQUMsQ0FBQztZQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMzRCxLQUFLLENBQUMsSUFBSSxDQUNOLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6RjtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGVBQWUsQ0FBQyxLQUFxQixFQUFFLGFBQTRCO1FBQ2pFLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHdCQUF3QixDQUFDLGNBQThCO1FBQ3JELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNsRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsd0JBQXdCLENBQUMsY0FBOEI7UUFDckQsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ25GO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8seUJBQXlCLENBQzdCLGNBQThCLEVBQUUsWUFBcUIsRUFDckQsWUFBK0I7UUFDakMsb0RBQW9EO1FBQ3BELHFEQUFxRDtRQUNyRCxzREFBc0Q7UUFDdEQsc0NBQXNDO1FBQ3RDLElBQUkseUJBQXlCLEdBQUcsa0NBQWtDLENBQUM7UUFFbkUsb0VBQW9FO1FBQ3BFLHFFQUFxRTtRQUNyRSw4REFBOEQ7UUFDOUQsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUQsSUFBSSxTQUE4QixDQUFDO1FBQ25DLElBQUksUUFBUSxZQUFZLGFBQWEsRUFBRTtZQUNyQyx5QkFBeUIsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUN6RCxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxrQ0FBa0MsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ0wsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUN0RDtRQUVELE9BQU87WUFDTCxTQUFTO1lBQ1QsS0FBSyxFQUFFLENBQUM7b0JBQ04scUJBQXFCLEVBQUUsSUFBSTtvQkFDM0IsVUFBVSxFQUFFLFlBQVksQ0FBQyxVQUFVO29CQUNuQyxvQkFBb0IsRUFBRSx5QkFBeUI7b0JBQy9DLE1BQU0sRUFBRSxDQUFDLFNBQXNELEVBQUUsRUFBRTt3QkFDakUsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMxQyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQzlFLE9BQU8sTUFBTSxDQUFDO29CQUNoQixDQUFDO2lCQUNGLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLGtCQUFrQixDQUN0QixTQUE4QixFQUFFLE1BQTJCLEVBQUUsY0FBOEIsRUFDM0YsNEJBQWtGLEVBQ2xGLFlBQXFCO1FBQ3ZCLE1BQU0sWUFBWSxHQUF5QixFQUFFLENBQUM7UUFFOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixNQUFNLG1CQUFtQixHQUNyQixZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNoRCxJQUFJLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUVqQyxvREFBb0Q7WUFDcEQsb0RBQW9EO1lBQ3BELHdCQUF3QjtZQUN4Qix3RUFBd0U7WUFDeEUseUVBQXlFO1lBQ3pFLCtCQUErQjtZQUMvQixJQUFJLHlCQUF5QixHQUFHLGtDQUFrQyxDQUFDO1lBRW5FLElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTtnQkFDbEMseUJBQXlCLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBRXRELElBQUksNEJBQTRCLEVBQUU7b0JBQ2hDLGdCQUFnQixHQUFHLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4RDthQUNGO1lBRUQsTUFBTSxJQUFJLEdBQUc7Z0JBQ1gsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO2dCQUM1QixvQkFBb0IsRUFBRSx5QkFBeUI7Z0JBQy9DLHFCQUFxQixFQUFFLENBQUMsQ0FBQyw0QkFBNEI7Z0JBQ3JELE1BQU0sRUFBRSxDQUFDLFNBQXdELEVBQUUsRUFBRTtvQkFDbkUsMkRBQTJEO29CQUMzRCxNQUFNLE1BQU0sR0FBbUIsRUFBRSxDQUFDO29CQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBRW5DLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO3dCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7cUJBQy9CO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQzVCO29CQUVELDZFQUE2RTtvQkFDN0UsOEVBQThFO29CQUM5RSw4RUFBOEU7b0JBQzlFLHFEQUFxRDtvQkFDckQsSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDakIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFOzRCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDcEM7NkJBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFOzRCQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQzt5QkFDckQ7cUJBQ0Y7b0JBRUQsT0FBTyxNQUFNLENBQUM7Z0JBQ2hCLENBQUM7YUFDRixDQUFDO1lBRUYsNEZBQTRGO1lBQzVGLDJGQUEyRjtZQUMzRiwyRkFBMkY7WUFDM0YscUZBQXFGO1lBQ3JGLDRCQUE0QjtZQUM1QixJQUFJLG1CQUFtQixJQUFJLG1CQUFtQixDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsRUFBRTtnQkFDN0UsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUNqRTtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVPLGlCQUFpQixDQUFDLGNBQThCO1FBQ3RELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUMxQixFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU8saUJBQWlCLENBQUMsY0FBOEI7UUFDdEQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQzFCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFDckQsbUNBQW1DLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7O09BR0c7SUFDSCw0QkFBNEIsQ0FBQyxjQUE4QjtRQUN6RCxNQUFNLFlBQVksR0FBeUIsRUFBRSxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMxRSxJQUFJLG1CQUFtQixFQUFFO2dCQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDeEM7WUFDRCxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMxRSxJQUFJLG1CQUFtQixFQUFFO2dCQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDeEM7WUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBRUQsU0FBUyxlQUFlLENBQUMsR0FBd0IsRUFBRSxHQUFXO0lBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4QjtBQUNILENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFDLElBQVk7SUFDdEMsb0RBQW9EO0lBQ3BELHFEQUFxRDtJQUNyRCxPQUFPLElBQUksS0FBSyxrQkFBa0IsSUFBSSxJQUFJLEtBQUssaUJBQWlCLElBQUksSUFBSSxLQUFLLFlBQVk7UUFDckYsSUFBSSxLQUFLLGNBQWMsSUFBSSxJQUFJLEtBQUssYUFBYSxJQUFJLElBQUksS0FBSyxxQkFBcUI7UUFDbkYsSUFBSSxLQUFLLG1CQUFtQixJQUFJLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLFlBQVk7UUFDMUUsSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLEtBQUssa0JBQWtCLElBQUksSUFBSSxLQUFLLGdCQUFnQjtRQUNoRixJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksS0FBSyxVQUFVLENBQUM7QUFDbEQsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsMkJBQTJCLENBQ2hDLFlBQTBCLEVBQUUsTUFBc0I7SUFDcEQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDaEcsQ0FBQztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsSUFBWTtJQUV4QyxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDNUIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuRCxJQUFJLGFBQWEsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUN4QixJQUFJLEdBQUcsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqRSxlQUFlLEdBQUcsSUFBSSxDQUFDO0tBQ3hCO0lBRUQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1FBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDekM7SUFFRCxPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxrQ0FBa0MsQ0FBQyxhQUE0QjtJQUN0RSxRQUFRLDBCQUEwQixDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ2pELEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNyQixLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqQyxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqQyxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqQyxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqQyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqQyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqQyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqQyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqQztZQUNFLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ2xDO0FBQ0gsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsa0NBQWtDLENBQUMsYUFBNEI7SUFDdEUsUUFBUSwwQkFBMEIsQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNqRCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDckIsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakMsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakMsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakMsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakMsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakM7WUFDRSxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNsQztBQUNILENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLG1DQUFtQyxDQUFDLGFBQTRCO0lBQ3ZFLFFBQVEsMEJBQTBCLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDakQsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ3RCLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDO1lBQ0UsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDbkM7QUFDSCxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxJQUFZO0lBQ3JDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0NvbnN0YW50UG9vbH0gZnJvbSAnLi4vLi4vY29uc3RhbnRfcG9vbCc7XG5pbXBvcnQge0F0dHJpYnV0ZU1hcmtlcn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQge0FTVCwgQVNUV2l0aFNvdXJjZSwgQmluZGluZ1BpcGUsIEJpbmRpbmdUeXBlLCBJbnRlcnBvbGF0aW9ufSBmcm9tICcuLi8uLi9leHByZXNzaW9uX3BhcnNlci9hc3QnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi8uLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vLi4vcGFyc2VfdXRpbCc7XG5pbXBvcnQge2lzRW1wdHlFeHByZXNzaW9ufSBmcm9tICcuLi8uLi90ZW1wbGF0ZV9wYXJzZXIvdGVtcGxhdGVfcGFyc2VyJztcbmltcG9ydCAqIGFzIHQgZnJvbSAnLi4vcjNfYXN0JztcbmltcG9ydCB7SWRlbnRpZmllcnMgYXMgUjN9IGZyb20gJy4uL3IzX2lkZW50aWZpZXJzJztcblxuaW1wb3J0IHtoeXBoZW5hdGUsIHBhcnNlIGFzIHBhcnNlU3R5bGV9IGZyb20gJy4vc3R5bGVfcGFyc2VyJztcbmltcG9ydCB7VmFsdWVDb252ZXJ0ZXJ9IGZyb20gJy4vdGVtcGxhdGUnO1xuaW1wb3J0IHtEZWZpbml0aW9uTWFwLCBnZXRJbnRlcnBvbGF0aW9uQXJnc0xlbmd0aH0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgSU1QT1JUQU5UX0ZMQUcgPSAnIWltcG9ydGFudCc7XG5cbi8qKlxuICogTWluaW11bSBhbW91bnQgb2YgYmluZGluZyBzbG90cyByZXF1aXJlZCBpbiB0aGUgcnVudGltZSBmb3Igc3R5bGUvY2xhc3MgYmluZGluZ3MuXG4gKlxuICogU3R5bGluZyBpbiBBbmd1bGFyIHVzZXMgdXAgdHdvIHNsb3RzIGluIHRoZSBydW50aW1lIExWaWV3L1REYXRhIGRhdGEgc3RydWN0dXJlcyB0b1xuICogcmVjb3JkIGJpbmRpbmcgZGF0YSwgcHJvcGVydHkgaW5mb3JtYXRpb24gYW5kIG1ldGFkYXRhLlxuICpcbiAqIFdoZW4gYSBiaW5kaW5nIGlzIHJlZ2lzdGVyZWQgaXQgd2lsbCBwbGFjZSB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uIGluIHRoZSBgTFZpZXdgOlxuICpcbiAqIHNsb3QgMSkgYmluZGluZyB2YWx1ZVxuICogc2xvdCAyKSBjYWNoZWQgdmFsdWUgKGFsbCBvdGhlciB2YWx1ZXMgY29sbGVjdGVkIGJlZm9yZSBpdCBpbiBzdHJpbmcgZm9ybSlcbiAqXG4gKiBXaGVuIGEgYmluZGluZyBpcyByZWdpc3RlcmVkIGl0IHdpbGwgcGxhY2UgdGhlIGZvbGxvd2luZyBpbmZvcm1hdGlvbiBpbiB0aGUgYFREYXRhYDpcbiAqXG4gKiBzbG90IDEpIHByb3AgbmFtZVxuICogc2xvdCAyKSBiaW5kaW5nIGluZGV4IHRoYXQgcG9pbnRzIHRvIHRoZSBwcmV2aW91cyBzdHlsZS9jbGFzcyBiaW5kaW5nIChhbmQgc29tZSBleHRyYSBjb25maWdcbiAqIHZhbHVlcylcbiAqXG4gKiBMZXQncyBpbWFnaW5lIHdlIGhhdmUgYSBiaW5kaW5nIHRoYXQgbG9va3MgbGlrZSBzbzpcbiAqXG4gKiBgYGBcbiAqIDxkaXYgW3N0eWxlLndpZHRoXT1cInhcIiBbc3R5bGUuaGVpZ2h0XT1cInlcIj5cbiAqIGBgYFxuICpcbiAqIE91ciBgTFZpZXdgIGFuZCBgVERhdGFgIGRhdGEtc3RydWN0dXJlcyBsb29rIGxpa2Ugc286XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogTFZpZXcgPSBbXG4gKiAgIC8vIC4uLlxuICogICB4LCAvLyB2YWx1ZSBvZiB4XG4gKiAgIFwid2lkdGg6IHhcIixcbiAqXG4gKiAgIHksIC8vIHZhbHVlIG9mIHlcbiAqICAgXCJ3aWR0aDogeDsgaGVpZ2h0OiB5XCIsXG4gKiAgIC8vIC4uLlxuICogXTtcbiAqXG4gKiBURGF0YSA9IFtcbiAqICAgLy8gLi4uXG4gKiAgIFwid2lkdGhcIiwgLy8gYmluZGluZyBzbG90IDIwXG4gKiAgIDAsXG4gKlxuICogICBcImhlaWdodFwiLFxuICogICAyMCxcbiAqICAgLy8gLi4uXG4gKiBdO1xuICogYGBgXG4gKlxuICogKi9cbmV4cG9ydCBjb25zdCBNSU5fU1RZTElOR19CSU5ESU5HX1NMT1RTX1JFUVVJUkVEID0gMjtcblxuLyoqXG4gKiBBIHN0eWxpbmcgZXhwcmVzc2lvbiBzdW1tYXJ5IHRoYXQgaXMgdG8gYmUgcHJvY2Vzc2VkIGJ5IHRoZSBjb21waWxlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxpbmdJbnN0cnVjdGlvbiB7XG4gIHJlZmVyZW5jZTogby5FeHRlcm5hbFJlZmVyZW5jZTtcbiAgLyoqIENhbGxzIHRvIGluZGl2aWR1YWwgc3R5bGluZyBpbnN0cnVjdGlvbnMuIFVzZWQgd2hlbiBjaGFpbmluZyBjYWxscyB0byB0aGUgc2FtZSBpbnN0cnVjdGlvbi4gKi9cbiAgY2FsbHM6IFN0eWxpbmdJbnN0cnVjdGlvbkNhbGxbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsaW5nSW5zdHJ1Y3Rpb25DYWxsIHtcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFufG51bGw7XG4gIHN1cHBvcnRzSW50ZXJwb2xhdGlvbjogYm9vbGVhbjtcbiAgYWxsb2NhdGVCaW5kaW5nU2xvdHM6IG51bWJlcjtcbiAgcGFyYW1zOiAoKGNvbnZlcnRGbjogKHZhbHVlOiBhbnkpID0+IG8uRXhwcmVzc2lvbiB8IG8uRXhwcmVzc2lvbltdKSA9PiBvLkV4cHJlc3Npb25bXSk7XG59XG5cbi8qKlxuICogQW4gaW50ZXJuYWwgcmVjb3JkIG9mIHRoZSBpbnB1dCBkYXRhIGZvciBhIHN0eWxpbmcgYmluZGluZ1xuICovXG5pbnRlcmZhY2UgQm91bmRTdHlsaW5nRW50cnkge1xuICBoYXNPdmVycmlkZUZsYWc6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZ3xudWxsO1xuICB1bml0OiBzdHJpbmd8bnVsbDtcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICBzYW5pdGl6ZTogYm9vbGVhbjtcbiAgdmFsdWU6IEFTVDtcbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBjcmVhdGlvbi91cGRhdGUgaW5zdHJ1Y3Rpb25zIGZvciBhbGwgc3R5bGluZyBiaW5kaW5ncyAoY2xhc3MgYW5kIHN0eWxlKVxuICpcbiAqIEl0IGFsc28gcHJvZHVjZXMgdGhlIGNyZWF0aW9uIGluc3RydWN0aW9uIHRvIHJlZ2lzdGVyIGFsbCBpbml0aWFsIHN0eWxpbmcgdmFsdWVzXG4gKiAod2hpY2ggYXJlIGFsbCB0aGUgc3RhdGljIGNsYXNzPVwiLi4uXCIgYW5kIHN0eWxlPVwiLi4uXCIgYXR0cmlidXRlIHZhbHVlcyB0aGF0IGV4aXN0XG4gKiBvbiBhbiBlbGVtZW50IHdpdGhpbiBhIHRlbXBsYXRlKS5cbiAqXG4gKiBUaGUgYnVpbGRlciBjbGFzcyBiZWxvdyBoYW5kbGVzIHByb2R1Y2luZyBpbnN0cnVjdGlvbnMgZm9yIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gKlxuICogLSBTdGF0aWMgc3R5bGUvY2xhc3MgYXR0cmlidXRlcyAoc3R5bGU9XCIuLi5cIiBhbmQgY2xhc3M9XCIuLi5cIilcbiAqIC0gRHluYW1pYyBzdHlsZS9jbGFzcyBtYXAgYmluZGluZ3MgKFtzdHlsZV09XCJtYXBcIiBhbmQgW2NsYXNzXT1cIm1hcHxzdHJpbmdcIilcbiAqIC0gRHluYW1pYyBzdHlsZS9jbGFzcyBwcm9wZXJ0eSBiaW5kaW5ncyAoW3N0eWxlLnByb3BdPVwiZXhwXCIgYW5kIFtjbGFzcy5uYW1lXT1cImV4cFwiKVxuICpcbiAqIER1ZSB0byB0aGUgY29tcGxleCByZWxhdGlvbnNoaXAgb2YgYWxsIG9mIHRoZXNlIGNhc2VzLCB0aGUgaW5zdHJ1Y3Rpb25zIGdlbmVyYXRlZFxuICogZm9yIHRoZXNlIGF0dHJpYnV0ZXMvcHJvcGVydGllcy9iaW5kaW5ncyBtdXN0IGJlIGRvbmUgc28gaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIFRoZVxuICogb3JkZXIgd2hpY2ggdGhlc2UgbXVzdCBiZSBnZW5lcmF0ZWQgaXMgYXMgZm9sbG93czpcbiAqXG4gKiBpZiAoY3JlYXRlTW9kZSkge1xuICogICBzdHlsaW5nKC4uLilcbiAqIH1cbiAqIGlmICh1cGRhdGVNb2RlKSB7XG4gKiAgIHN0eWxlTWFwKC4uLilcbiAqICAgY2xhc3NNYXAoLi4uKVxuICogICBzdHlsZVByb3AoLi4uKVxuICogICBjbGFzc1Byb3AoLi4uKVxuICogfVxuICpcbiAqIFRoZSBjcmVhdGlvbi91cGRhdGUgbWV0aG9kcyB3aXRoaW4gdGhlIGJ1aWxkZXIgY2xhc3MgcHJvZHVjZSB0aGVzZSBpbnN0cnVjdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHlsaW5nQnVpbGRlciB7XG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGVyZSBhcmUgYW55IHN0YXRpYyBzdHlsaW5nIHZhbHVlcyBwcmVzZW50ICovXG4gIHByaXZhdGUgX2hhc0luaXRpYWxWYWx1ZXMgPSBmYWxzZTtcbiAgLyoqXG4gICAqICBXaGV0aGVyIG9yIG5vdCB0aGVyZSBhcmUgYW55IHN0eWxpbmcgYmluZGluZ3MgcHJlc2VudFxuICAgKiAgKGkuZS4gYFtzdHlsZV1gLCBgW2NsYXNzXWAsIGBbc3R5bGUucHJvcF1gIG9yIGBbY2xhc3MubmFtZV1gKVxuICAgKi9cbiAgcHVibGljIGhhc0JpbmRpbmdzID0gZmFsc2U7XG4gIHB1YmxpYyBoYXNCaW5kaW5nc1dpdGhQaXBlcyA9IGZhbHNlO1xuXG4gIC8qKiB0aGUgaW5wdXQgZm9yIFtjbGFzc10gKGlmIGl0IGV4aXN0cykgKi9cbiAgcHJpdmF0ZSBfY2xhc3NNYXBJbnB1dDogQm91bmRTdHlsaW5nRW50cnl8bnVsbCA9IG51bGw7XG4gIC8qKiB0aGUgaW5wdXQgZm9yIFtzdHlsZV0gKGlmIGl0IGV4aXN0cykgKi9cbiAgcHJpdmF0ZSBfc3R5bGVNYXBJbnB1dDogQm91bmRTdHlsaW5nRW50cnl8bnVsbCA9IG51bGw7XG4gIC8qKiBhbiBhcnJheSBvZiBlYWNoIFtzdHlsZS5wcm9wXSBpbnB1dCAqL1xuICBwcml2YXRlIF9zaW5nbGVTdHlsZUlucHV0czogQm91bmRTdHlsaW5nRW50cnlbXXxudWxsID0gbnVsbDtcbiAgLyoqIGFuIGFycmF5IG9mIGVhY2ggW2NsYXNzLm5hbWVdIGlucHV0ICovXG4gIHByaXZhdGUgX3NpbmdsZUNsYXNzSW5wdXRzOiBCb3VuZFN0eWxpbmdFbnRyeVtdfG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9sYXN0U3R5bGluZ0lucHV0OiBCb3VuZFN0eWxpbmdFbnRyeXxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZmlyc3RTdHlsaW5nSW5wdXQ6IEJvdW5kU3R5bGluZ0VudHJ5fG51bGwgPSBudWxsO1xuXG4gIC8vIG1hcHMgYXJlIHVzZWQgaW5zdGVhZCBvZiBoYXNoIG1hcHMgYmVjYXVzZSBhIE1hcCB3aWxsXG4gIC8vIHJldGFpbiB0aGUgb3JkZXJpbmcgb2YgdGhlIGtleXNcblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgbG9jYXRpb24gb2YgZWFjaCBzdHlsZSBiaW5kaW5nIGluIHRoZSB0ZW1wbGF0ZVxuICAgKiAoZS5nLiBgPGRpdiBbc3R5bGUud2lkdGhdPVwid1wiIFtzdHlsZS5oZWlnaHRdPVwiaFwiPmAgaW1wbGllc1xuICAgKiB0aGF0IGB3aWR0aD0wYCBhbmQgYGhlaWdodD0xYClcbiAgICovXG4gIHByaXZhdGUgX3N0eWxlc0luZGV4ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgbG9jYXRpb24gb2YgZWFjaCBjbGFzcyBiaW5kaW5nIGluIHRoZSB0ZW1wbGF0ZVxuICAgKiAoZS5nLiBgPGRpdiBbY2xhc3MuYmlnXT1cImJcIiBbY2xhc3MuaGlkZGVuXT1cImhcIj5gIGltcGxpZXNcbiAgICogdGhhdCBgYmlnPTBgIGFuZCBgaGlkZGVuPTFgKVxuICAgKi9cbiAgcHJpdmF0ZSBfY2xhc3Nlc0luZGV4ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfaW5pdGlhbFN0eWxlVmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIF9pbml0aWFsQ2xhc3NWYWx1ZXM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlyZWN0aXZlRXhwcjogby5FeHByZXNzaW9ufG51bGwpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGdpdmVuIGlucHV0IHRvIHRoZSBzdHlsaW5nIGJ1aWxkZXIgdG8gYmUgbGF0ZXIgdXNlZCB3aGVuIHByb2R1Y2luZyBBT1QgY29kZS5cbiAgICpcbiAgICogVGhlIGNvZGUgYmVsb3cgd2lsbCBvbmx5IGFjY2VwdCB0aGUgaW5wdXQgaWYgaXQgaXMgc29tZWhvdyB0aWVkIHRvIHN0eWxpbmcgKHdoZXRoZXIgaXQgYmVcbiAgICogc3R5bGUvY2xhc3MgYmluZGluZ3Mgb3Igc3RhdGljIHN0eWxlL2NsYXNzIGF0dHJpYnV0ZXMpLlxuICAgKi9cbiAgcmVnaXN0ZXJCb3VuZElucHV0KGlucHV0OiB0LkJvdW5kQXR0cmlidXRlKTogYm9vbGVhbiB7XG4gICAgLy8gW2F0dHIuc3R5bGVdIG9yIFthdHRyLmNsYXNzXSBhcmUgc2tpcHBlZCBpbiB0aGUgY29kZSBiZWxvdyxcbiAgICAvLyB0aGV5IHNob3VsZCBub3QgYmUgdHJlYXRlZCBhcyBzdHlsaW5nLWJhc2VkIGJpbmRpbmdzIHNpbmNlXG4gICAgLy8gdGhleSBhcmUgaW50ZW5kZWQgdG8gYmUgd3JpdHRlbiBkaXJlY3RseSB0byB0aGUgYXR0ciBhbmRcbiAgICAvLyB3aWxsIHRoZXJlZm9yZSBza2lwIGFsbCBzdHlsZS9jbGFzcyByZXNvbHV0aW9uIHRoYXQgaXMgcHJlc2VudFxuICAgIC8vIHdpdGggc3R5bGU9XCJcIiwgW3N0eWxlXT1cIlwiIGFuZCBbc3R5bGUucHJvcF09XCJcIiwgY2xhc3M9XCJcIixcbiAgICAvLyBbY2xhc3MucHJvcF09XCJcIi4gW2NsYXNzXT1cIlwiIGFzc2lnbm1lbnRzXG4gICAgbGV0IGJpbmRpbmc6IEJvdW5kU3R5bGluZ0VudHJ5fG51bGwgPSBudWxsO1xuICAgIGxldCBuYW1lID0gaW5wdXQubmFtZTtcbiAgICBzd2l0Y2ggKGlucHV0LnR5cGUpIHtcbiAgICAgIGNhc2UgQmluZGluZ1R5cGUuUHJvcGVydHk6XG4gICAgICAgIGJpbmRpbmcgPSB0aGlzLnJlZ2lzdGVySW5wdXRCYXNlZE9uTmFtZShuYW1lLCBpbnB1dC52YWx1ZSwgaW5wdXQuc291cmNlU3Bhbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCaW5kaW5nVHlwZS5TdHlsZTpcbiAgICAgICAgYmluZGluZyA9IHRoaXMucmVnaXN0ZXJTdHlsZUlucHV0KG5hbWUsIGZhbHNlLCBpbnB1dC52YWx1ZSwgaW5wdXQuc291cmNlU3BhbiwgaW5wdXQudW5pdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCaW5kaW5nVHlwZS5DbGFzczpcbiAgICAgICAgYmluZGluZyA9IHRoaXMucmVnaXN0ZXJDbGFzc0lucHV0KG5hbWUsIGZhbHNlLCBpbnB1dC52YWx1ZSwgaW5wdXQuc291cmNlU3Bhbik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gYmluZGluZyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHJlZ2lzdGVySW5wdXRCYXNlZE9uTmFtZShuYW1lOiBzdHJpbmcsIGV4cHJlc3Npb246IEFTVCwgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7XG4gICAgbGV0IGJpbmRpbmc6IEJvdW5kU3R5bGluZ0VudHJ5fG51bGwgPSBudWxsO1xuICAgIGNvbnN0IHByZWZpeCA9IG5hbWUuc3Vic3RyaW5nKDAsIDYpO1xuICAgIGNvbnN0IGlzU3R5bGUgPSBuYW1lID09PSAnc3R5bGUnIHx8IHByZWZpeCA9PT0gJ3N0eWxlLicgfHwgcHJlZml4ID09PSAnc3R5bGUhJztcbiAgICBjb25zdCBpc0NsYXNzID0gIWlzU3R5bGUgJiYgKG5hbWUgPT09ICdjbGFzcycgfHwgcHJlZml4ID09PSAnY2xhc3MuJyB8fCBwcmVmaXggPT09ICdjbGFzcyEnKTtcbiAgICBpZiAoaXNTdHlsZSB8fCBpc0NsYXNzKSB7XG4gICAgICBjb25zdCBpc01hcEJhc2VkID0gbmFtZS5jaGFyQXQoNSkgIT09ICcuJzsgICAgICAgICAvLyBzdHlsZS5wcm9wIG9yIGNsYXNzLnByb3AgbWFrZXMgdGhpcyBhIG5vXG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IG5hbWUuc3Vic3RyKGlzTWFwQmFzZWQgPyA1IDogNik7ICAvLyB0aGUgZG90IGV4cGxhaW5zIHdoeSB0aGVyZSdzIGEgKzFcbiAgICAgIGlmIChpc1N0eWxlKSB7XG4gICAgICAgIGJpbmRpbmcgPSB0aGlzLnJlZ2lzdGVyU3R5bGVJbnB1dChwcm9wZXJ0eSwgaXNNYXBCYXNlZCwgZXhwcmVzc2lvbiwgc291cmNlU3Bhbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaW5kaW5nID0gdGhpcy5yZWdpc3RlckNsYXNzSW5wdXQocHJvcGVydHksIGlzTWFwQmFzZWQsIGV4cHJlc3Npb24sIHNvdXJjZVNwYW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmluZGluZztcbiAgfVxuXG4gIHJlZ2lzdGVyU3R5bGVJbnB1dChcbiAgICAgIG5hbWU6IHN0cmluZywgaXNNYXBCYXNlZDogYm9vbGVhbiwgdmFsdWU6IEFTVCwgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgICAgdW5pdD86IHN0cmluZ3xudWxsKTogQm91bmRTdHlsaW5nRW50cnl8bnVsbCB7XG4gICAgaWYgKGlzRW1wdHlFeHByZXNzaW9uKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIG5hbWUgPSBub3JtYWxpemVQcm9wTmFtZShuYW1lKTtcbiAgICBjb25zdCB7cHJvcGVydHksIGhhc092ZXJyaWRlRmxhZywgdW5pdDogYmluZGluZ1VuaXR9ID0gcGFyc2VQcm9wZXJ0eShuYW1lKTtcbiAgICBjb25zdCBlbnRyeTogQm91bmRTdHlsaW5nRW50cnkgPSB7XG4gICAgICBuYW1lOiBwcm9wZXJ0eSxcbiAgICAgIHNhbml0aXplOiBwcm9wZXJ0eSA/IGlzU3R5bGVTYW5pdGl6YWJsZShwcm9wZXJ0eSkgOiB0cnVlLFxuICAgICAgdW5pdDogdW5pdCB8fCBiaW5kaW5nVW5pdCxcbiAgICAgIHZhbHVlLFxuICAgICAgc291cmNlU3BhbixcbiAgICAgIGhhc092ZXJyaWRlRmxhZ1xuICAgIH07XG4gICAgaWYgKGlzTWFwQmFzZWQpIHtcbiAgICAgIHRoaXMuX3N0eWxlTWFwSW5wdXQgPSBlbnRyeTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHRoaXMuX3NpbmdsZVN0eWxlSW5wdXRzID0gdGhpcy5fc2luZ2xlU3R5bGVJbnB1dHMgfHwgW10pLnB1c2goZW50cnkpO1xuICAgICAgcmVnaXN0ZXJJbnRvTWFwKHRoaXMuX3N0eWxlc0luZGV4LCBwcm9wZXJ0eSk7XG4gICAgfVxuICAgIHRoaXMuX2xhc3RTdHlsaW5nSW5wdXQgPSBlbnRyeTtcbiAgICB0aGlzLl9maXJzdFN0eWxpbmdJbnB1dCA9IHRoaXMuX2ZpcnN0U3R5bGluZ0lucHV0IHx8IGVudHJ5O1xuICAgIHRoaXMuX2NoZWNrRm9yUGlwZXModmFsdWUpO1xuICAgIHRoaXMuaGFzQmluZGluZ3MgPSB0cnVlO1xuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuXG4gIHJlZ2lzdGVyQ2xhc3NJbnB1dChuYW1lOiBzdHJpbmcsIGlzTWFwQmFzZWQ6IGJvb2xlYW4sIHZhbHVlOiBBU1QsIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbik6XG4gICAgICBCb3VuZFN0eWxpbmdFbnRyeXxudWxsIHtcbiAgICBpZiAoaXNFbXB0eUV4cHJlc3Npb24odmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qge3Byb3BlcnR5LCBoYXNPdmVycmlkZUZsYWd9ID0gcGFyc2VQcm9wZXJ0eShuYW1lKTtcbiAgICBjb25zdCBlbnRyeTogQm91bmRTdHlsaW5nRW50cnkgPVxuICAgICAgICB7bmFtZTogcHJvcGVydHksIHZhbHVlLCBzb3VyY2VTcGFuLCBzYW5pdGl6ZTogZmFsc2UsIGhhc092ZXJyaWRlRmxhZywgdW5pdDogbnVsbH07XG4gICAgaWYgKGlzTWFwQmFzZWQpIHtcbiAgICAgIGlmICh0aGlzLl9jbGFzc01hcElucHV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdbY2xhc3NdIGFuZCBbY2xhc3NOYW1lXSBiaW5kaW5ncyBjYW5ub3QgYmUgdXNlZCBvbiB0aGUgc2FtZSBlbGVtZW50IHNpbXVsdGFuZW91c2x5Jyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jbGFzc01hcElucHV0ID0gZW50cnk7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLl9zaW5nbGVDbGFzc0lucHV0cyA9IHRoaXMuX3NpbmdsZUNsYXNzSW5wdXRzIHx8IFtdKS5wdXNoKGVudHJ5KTtcbiAgICAgIHJlZ2lzdGVySW50b01hcCh0aGlzLl9jbGFzc2VzSW5kZXgsIHByb3BlcnR5KTtcbiAgICB9XG4gICAgdGhpcy5fbGFzdFN0eWxpbmdJbnB1dCA9IGVudHJ5O1xuICAgIHRoaXMuX2ZpcnN0U3R5bGluZ0lucHV0ID0gdGhpcy5fZmlyc3RTdHlsaW5nSW5wdXQgfHwgZW50cnk7XG4gICAgdGhpcy5fY2hlY2tGb3JQaXBlcyh2YWx1ZSk7XG4gICAgdGhpcy5oYXNCaW5kaW5ncyA9IHRydWU7XG4gICAgcmV0dXJuIGVudHJ5O1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hlY2tGb3JQaXBlcyh2YWx1ZTogQVNUKSB7XG4gICAgaWYgKCh2YWx1ZSBpbnN0YW5jZW9mIEFTVFdpdGhTb3VyY2UpICYmICh2YWx1ZS5hc3QgaW5zdGFuY2VvZiBCaW5kaW5nUGlwZSkpIHtcbiAgICAgIHRoaXMuaGFzQmluZGluZ3NXaXRoUGlwZXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdGhlIGVsZW1lbnQncyBzdGF0aWMgc3R5bGUgc3RyaW5nIHZhbHVlIHRvIHRoZSBidWlsZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIHN0eWxlIHN0cmluZyAoZS5nLiBgd2lkdGg6MTAwcHg7IGhlaWdodDoyMDBweDtgKVxuICAgKi9cbiAgcmVnaXN0ZXJTdHlsZUF0dHIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luaXRpYWxTdHlsZVZhbHVlcyA9IHBhcnNlU3R5bGUodmFsdWUpO1xuICAgIHRoaXMuX2hhc0luaXRpYWxWYWx1ZXMgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0aGUgZWxlbWVudCdzIHN0YXRpYyBjbGFzcyBzdHJpbmcgdmFsdWUgdG8gdGhlIGJ1aWxkZXIuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgY2xhc3NOYW1lIHN0cmluZyAoZS5nLiBgZGlzYWJsZWQgZ29sZCB6b29tYClcbiAgICovXG4gIHJlZ2lzdGVyQ2xhc3NBdHRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbml0aWFsQ2xhc3NWYWx1ZXMgPSB2YWx1ZS50cmltKCkuc3BsaXQoL1xccysvZyk7XG4gICAgdGhpcy5faGFzSW5pdGlhbFZhbHVlcyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhbGwgc3R5bGluZy1yZWxhdGVkIGV4cHJlc3Npb25zIHRvIHRoZSBwcm92aWRlZCBhdHRycyBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIGF0dHJzIGFuIGV4aXN0aW5nIGFycmF5IHdoZXJlIGVhY2ggb2YgdGhlIHN0eWxpbmcgZXhwcmVzc2lvbnNcbiAgICogd2lsbCBiZSBpbnNlcnRlZCBpbnRvLlxuICAgKi9cbiAgcG9wdWxhdGVJbml0aWFsU3R5bGluZ0F0dHJzKGF0dHJzOiBvLkV4cHJlc3Npb25bXSk6IHZvaWQge1xuICAgIC8vIFtDTEFTU19NQVJLRVIsICdmb28nLCAnYmFyJywgJ2JheicgLi4uXVxuICAgIGlmICh0aGlzLl9pbml0aWFsQ2xhc3NWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICBhdHRycy5wdXNoKG8ubGl0ZXJhbChBdHRyaWJ1dGVNYXJrZXIuQ2xhc3NlcykpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9pbml0aWFsQ2xhc3NWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXR0cnMucHVzaChvLmxpdGVyYWwodGhpcy5faW5pdGlhbENsYXNzVmFsdWVzW2ldKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gW1NUWUxFX01BUktFUiwgJ3dpZHRoJywgJzIwMHB4JywgJ2hlaWdodCcsICcxMDBweCcsIC4uLl1cbiAgICBpZiAodGhpcy5faW5pdGlhbFN0eWxlVmFsdWVzLmxlbmd0aCkge1xuICAgICAgYXR0cnMucHVzaChvLmxpdGVyYWwoQXR0cmlidXRlTWFya2VyLlN0eWxlcykpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9pbml0aWFsU3R5bGVWYWx1ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgYXR0cnMucHVzaChcbiAgICAgICAgICAgIG8ubGl0ZXJhbCh0aGlzLl9pbml0aWFsU3R5bGVWYWx1ZXNbaV0pLCBvLmxpdGVyYWwodGhpcy5faW5pdGlhbFN0eWxlVmFsdWVzW2kgKyAxXSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgYW4gaW5zdHJ1Y3Rpb24gd2l0aCBhbGwgdGhlIGV4cHJlc3Npb25zIGFuZCBwYXJhbWV0ZXJzIGZvciBgZWxlbWVudEhvc3RBdHRyc2AuXG4gICAqXG4gICAqIFRoZSBpbnN0cnVjdGlvbiBnZW5lcmF0aW9uIGNvZGUgYmVsb3cgaXMgdXNlZCBmb3IgcHJvZHVjaW5nIHRoZSBBT1Qgc3RhdGVtZW50IGNvZGUgd2hpY2ggaXNcbiAgICogcmVzcG9uc2libGUgZm9yIHJlZ2lzdGVyaW5nIGluaXRpYWwgc3R5bGVzICh3aXRoaW4gYSBkaXJlY3RpdmUgaG9zdEJpbmRpbmdzJyBjcmVhdGlvbiBibG9jayksXG4gICAqIGFzIHdlbGwgYXMgYW55IG9mIHRoZSBwcm92aWRlZCBhdHRyaWJ1dGUgdmFsdWVzLCB0byB0aGUgZGlyZWN0aXZlIGhvc3QgZWxlbWVudC5cbiAgICovXG4gIGFzc2lnbkhvc3RBdHRycyhhdHRyczogby5FeHByZXNzaW9uW10sIGRlZmluaXRpb25NYXA6IERlZmluaXRpb25NYXApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGlyZWN0aXZlRXhwciAmJiAoYXR0cnMubGVuZ3RoIHx8IHRoaXMuX2hhc0luaXRpYWxWYWx1ZXMpKSB7XG4gICAgICB0aGlzLnBvcHVsYXRlSW5pdGlhbFN0eWxpbmdBdHRycyhhdHRycyk7XG4gICAgICBkZWZpbml0aW9uTWFwLnNldCgnaG9zdEF0dHJzJywgby5saXRlcmFsQXJyKGF0dHJzKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhbiBpbnN0cnVjdGlvbiB3aXRoIGFsbCB0aGUgZXhwcmVzc2lvbnMgYW5kIHBhcmFtZXRlcnMgZm9yIGBjbGFzc01hcGAuXG4gICAqXG4gICAqIFRoZSBpbnN0cnVjdGlvbiBkYXRhIHdpbGwgY29udGFpbiBhbGwgZXhwcmVzc2lvbnMgZm9yIGBjbGFzc01hcGAgdG8gZnVuY3Rpb25cbiAgICogd2hpY2ggaW5jbHVkZXMgdGhlIGBbY2xhc3NdYCBleHByZXNzaW9uIHBhcmFtcy5cbiAgICovXG4gIGJ1aWxkQ2xhc3NNYXBJbnN0cnVjdGlvbih2YWx1ZUNvbnZlcnRlcjogVmFsdWVDb252ZXJ0ZXIpOiBTdHlsaW5nSW5zdHJ1Y3Rpb258bnVsbCB7XG4gICAgaWYgKHRoaXMuX2NsYXNzTWFwSW5wdXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9idWlsZE1hcEJhc2VkSW5zdHJ1Y3Rpb24odmFsdWVDb252ZXJ0ZXIsIHRydWUsIHRoaXMuX2NsYXNzTWFwSW5wdXQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgYW4gaW5zdHJ1Y3Rpb24gd2l0aCBhbGwgdGhlIGV4cHJlc3Npb25zIGFuZCBwYXJhbWV0ZXJzIGZvciBgc3R5bGVNYXBgLlxuICAgKlxuICAgKiBUaGUgaW5zdHJ1Y3Rpb24gZGF0YSB3aWxsIGNvbnRhaW4gYWxsIGV4cHJlc3Npb25zIGZvciBgc3R5bGVNYXBgIHRvIGZ1bmN0aW9uXG4gICAqIHdoaWNoIGluY2x1ZGVzIHRoZSBgW3N0eWxlXWAgZXhwcmVzc2lvbiBwYXJhbXMuXG4gICAqL1xuICBidWlsZFN0eWxlTWFwSW5zdHJ1Y3Rpb24odmFsdWVDb252ZXJ0ZXI6IFZhbHVlQ29udmVydGVyKTogU3R5bGluZ0luc3RydWN0aW9ufG51bGwge1xuICAgIGlmICh0aGlzLl9zdHlsZU1hcElucHV0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fYnVpbGRNYXBCYXNlZEluc3RydWN0aW9uKHZhbHVlQ29udmVydGVyLCBmYWxzZSwgdGhpcy5fc3R5bGVNYXBJbnB1dCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRNYXBCYXNlZEluc3RydWN0aW9uKFxuICAgICAgdmFsdWVDb252ZXJ0ZXI6IFZhbHVlQ29udmVydGVyLCBpc0NsYXNzQmFzZWQ6IGJvb2xlYW4sXG4gICAgICBzdHlsaW5nSW5wdXQ6IEJvdW5kU3R5bGluZ0VudHJ5KTogU3R5bGluZ0luc3RydWN0aW9uIHtcbiAgICAvLyBlYWNoIHN0eWxpbmcgYmluZGluZyB2YWx1ZSBpcyBzdG9yZWQgaW4gdGhlIExWaWV3XG4gICAgLy8gbWFwLWJhc2VkIGJpbmRpbmdzIGFsbG9jYXRlIHR3byBzbG90czogb25lIGZvciB0aGVcbiAgICAvLyBwcmV2aW91cyBiaW5kaW5nIHZhbHVlIGFuZCBhbm90aGVyIGZvciB0aGUgcHJldmlvdXNcbiAgICAvLyBjbGFzc05hbWUgb3Igc3R5bGUgYXR0cmlidXRlIHZhbHVlLlxuICAgIGxldCB0b3RhbEJpbmRpbmdTbG90c1JlcXVpcmVkID0gTUlOX1NUWUxJTkdfQklORElOR19TTE9UU19SRVFVSVJFRDtcblxuICAgIC8vIHRoZXNlIHZhbHVlcyBtdXN0IGJlIG91dHNpZGUgb2YgdGhlIHVwZGF0ZSBibG9jayBzbyB0aGF0IHRoZXkgY2FuXG4gICAgLy8gYmUgZXZhbHVhdGVkICh0aGUgQVNUIHZpc2l0IGNhbGwpIGR1cmluZyBjcmVhdGlvbiB0aW1lIHNvIHRoYXQgYW55XG4gICAgLy8gcGlwZXMgY2FuIGJlIHBpY2tlZCB1cCBpbiB0aW1lIGJlZm9yZSB0aGUgdGVtcGxhdGUgaXMgYnVpbHRcbiAgICBjb25zdCBtYXBWYWx1ZSA9IHN0eWxpbmdJbnB1dC52YWx1ZS52aXNpdCh2YWx1ZUNvbnZlcnRlcik7XG4gICAgbGV0IHJlZmVyZW5jZTogby5FeHRlcm5hbFJlZmVyZW5jZTtcbiAgICBpZiAobWFwVmFsdWUgaW5zdGFuY2VvZiBJbnRlcnBvbGF0aW9uKSB7XG4gICAgICB0b3RhbEJpbmRpbmdTbG90c1JlcXVpcmVkICs9IG1hcFZhbHVlLmV4cHJlc3Npb25zLmxlbmd0aDtcbiAgICAgIHJlZmVyZW5jZSA9IGlzQ2xhc3NCYXNlZCA/IGdldENsYXNzTWFwSW50ZXJwb2xhdGlvbkV4cHJlc3Npb24obWFwVmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFN0eWxlTWFwSW50ZXJwb2xhdGlvbkV4cHJlc3Npb24obWFwVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWZlcmVuY2UgPSBpc0NsYXNzQmFzZWQgPyBSMy5jbGFzc01hcCA6IFIzLnN0eWxlTWFwO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWZlcmVuY2UsXG4gICAgICBjYWxsczogW3tcbiAgICAgICAgc3VwcG9ydHNJbnRlcnBvbGF0aW9uOiB0cnVlLFxuICAgICAgICBzb3VyY2VTcGFuOiBzdHlsaW5nSW5wdXQuc291cmNlU3BhbixcbiAgICAgICAgYWxsb2NhdGVCaW5kaW5nU2xvdHM6IHRvdGFsQmluZGluZ1Nsb3RzUmVxdWlyZWQsXG4gICAgICAgIHBhcmFtczogKGNvbnZlcnRGbjogKHZhbHVlOiBhbnkpID0+IG8uRXhwcmVzc2lvbnxvLkV4cHJlc3Npb25bXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnZlcnRSZXN1bHQgPSBjb252ZXJ0Rm4obWFwVmFsdWUpO1xuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IEFycmF5LmlzQXJyYXkoY29udmVydFJlc3VsdCkgPyBjb252ZXJ0UmVzdWx0IDogW2NvbnZlcnRSZXN1bHRdO1xuICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkU2luZ2xlSW5wdXRzKFxuICAgICAgcmVmZXJlbmNlOiBvLkV4dGVybmFsUmVmZXJlbmNlLCBpbnB1dHM6IEJvdW5kU3R5bGluZ0VudHJ5W10sIHZhbHVlQ29udmVydGVyOiBWYWx1ZUNvbnZlcnRlcixcbiAgICAgIGdldEludGVycG9sYXRpb25FeHByZXNzaW9uRm46ICgodmFsdWU6IEludGVycG9sYXRpb24pID0+IG8uRXh0ZXJuYWxSZWZlcmVuY2UpfG51bGwsXG4gICAgICBpc0NsYXNzQmFzZWQ6IGJvb2xlYW4pOiBTdHlsaW5nSW5zdHJ1Y3Rpb25bXSB7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zOiBTdHlsaW5nSW5zdHJ1Y3Rpb25bXSA9IFtdO1xuXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgY29uc3QgcHJldmlvdXNJbnN0cnVjdGlvbjogU3R5bGluZ0luc3RydWN0aW9ufHVuZGVmaW5lZCA9XG4gICAgICAgICAgaW5zdHJ1Y3Rpb25zW2luc3RydWN0aW9ucy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWUudmlzaXQodmFsdWVDb252ZXJ0ZXIpO1xuICAgICAgbGV0IHJlZmVyZW5jZUZvckNhbGwgPSByZWZlcmVuY2U7XG5cbiAgICAgIC8vIGVhY2ggc3R5bGluZyBiaW5kaW5nIHZhbHVlIGlzIHN0b3JlZCBpbiB0aGUgTFZpZXdcbiAgICAgIC8vIGJ1dCB0aGVyZSBhcmUgdHdvIHZhbHVlcyBzdG9yZWQgZm9yIGVhY2ggYmluZGluZzpcbiAgICAgIC8vICAgMSkgdGhlIHZhbHVlIGl0c2VsZlxuICAgICAgLy8gICAyKSBhbiBpbnRlcm1lZGlhdGUgdmFsdWUgKGNvbmNhdGVuYXRpb24gb2Ygc3R5bGUgdXAgdG8gdGhpcyBwb2ludCkuXG4gICAgICAvLyAgICAgIFdlIG5lZWQgdG8gc3RvcmUgdGhlIGludGVybWVkaWF0ZSB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0IGFsbG9jYXRlXG4gICAgICAvLyAgICAgIHRoZSBzdHJpbmdzIG9uIGVhY2ggQ0QuXG4gICAgICBsZXQgdG90YWxCaW5kaW5nU2xvdHNSZXF1aXJlZCA9IE1JTl9TVFlMSU5HX0JJTkRJTkdfU0xPVFNfUkVRVUlSRUQ7XG5cbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEludGVycG9sYXRpb24pIHtcbiAgICAgICAgdG90YWxCaW5kaW5nU2xvdHNSZXF1aXJlZCArPSB2YWx1ZS5leHByZXNzaW9ucy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGdldEludGVycG9sYXRpb25FeHByZXNzaW9uRm4pIHtcbiAgICAgICAgICByZWZlcmVuY2VGb3JDYWxsID0gZ2V0SW50ZXJwb2xhdGlvbkV4cHJlc3Npb25Gbih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FsbCA9IHtcbiAgICAgICAgc291cmNlU3BhbjogaW5wdXQuc291cmNlU3BhbixcbiAgICAgICAgYWxsb2NhdGVCaW5kaW5nU2xvdHM6IHRvdGFsQmluZGluZ1Nsb3RzUmVxdWlyZWQsXG4gICAgICAgIHN1cHBvcnRzSW50ZXJwb2xhdGlvbjogISFnZXRJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbkZuLFxuICAgICAgICBwYXJhbXM6IChjb252ZXJ0Rm46ICh2YWx1ZTogYW55KSA9PiBvLkV4cHJlc3Npb24gfCBvLkV4cHJlc3Npb25bXSkgPT4ge1xuICAgICAgICAgIC8vIHBhcmFtcyA9PiBzdHlsaW5nUHJvcChwcm9wTmFtZSwgdmFsdWUsIHN1ZmZpeHxzYW5pdGl6ZXIpXG4gICAgICAgICAgY29uc3QgcGFyYW1zOiBvLkV4cHJlc3Npb25bXSA9IFtdO1xuICAgICAgICAgIHBhcmFtcy5wdXNoKG8ubGl0ZXJhbChpbnB1dC5uYW1lKSk7XG5cbiAgICAgICAgICBjb25zdCBjb252ZXJ0UmVzdWx0ID0gY29udmVydEZuKHZhbHVlKTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb252ZXJ0UmVzdWx0KSkge1xuICAgICAgICAgICAgcGFyYW1zLnB1c2goLi4uY29udmVydFJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKGNvbnZlcnRSZXN1bHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFtzdHlsZS5wcm9wXSBiaW5kaW5ncyBtYXkgdXNlIHN1ZmZpeCB2YWx1ZXMgKGUuZy4gcHgsIGVtLCBldGMuLi4pIGFuZCB0aGV5XG4gICAgICAgICAgLy8gY2FuIGFsc28gdXNlIGEgc2FuaXRpemVyLiBTYW5pdGl6YXRpb24gb2NjdXJzIGZvciB1cmwtYmFzZWQgZW50cmllcy4gSGF2aW5nXG4gICAgICAgICAgLy8gdGhlIHN1ZmZpeCB2YWx1ZSBhbmQgYSBzYW5pdGl6ZXIgdG9nZXRoZXIgaW50byB0aGUgaW5zdHJ1Y3Rpb24gZG9lc24ndCBtYWtlXG4gICAgICAgICAgLy8gYW55IHNlbnNlICh1cmwtYmFzZWQgZW50cmllcyBjYW5ub3QgYmUgc2FuaXRpemVkKS5cbiAgICAgICAgICBpZiAoIWlzQ2xhc3NCYXNlZCkge1xuICAgICAgICAgICAgaWYgKGlucHV0LnVuaXQpIHtcbiAgICAgICAgICAgICAgcGFyYW1zLnB1c2goby5saXRlcmFsKGlucHV0LnVuaXQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQuc2FuaXRpemUpIHtcbiAgICAgICAgICAgICAgcGFyYW1zLnB1c2goby5pbXBvcnRFeHByKFIzLmRlZmF1bHRTdHlsZVNhbml0aXplcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIElmIHdlIGVuZGVkIHVwIGdlbmVyYXRpbmcgYSBjYWxsIHRvIHRoZSBzYW1lIGluc3RydWN0aW9uIGFzIHRoZSBwcmV2aW91cyBzdHlsaW5nIHByb3BlcnR5XG4gICAgICAvLyB3ZSBjYW4gY2hhaW4gdGhlIGNhbGxzIHRvZ2V0aGVyIHNhZmVseSB0byBzYXZlIHNvbWUgYnl0ZXMsIG90aGVyd2lzZSB3ZSBoYXZlIHRvIGdlbmVyYXRlXG4gICAgICAvLyBhIHNlcGFyYXRlIGluc3RydWN0aW9uIGNhbGwuIFRoaXMgaXMgcHJpbWFyaWx5IGEgY29uY2VybiB3aXRoIGludGVycG9sYXRpb24gaW5zdHJ1Y3Rpb25zXG4gICAgICAvLyB3aGVyZSB3ZSBtYXkgc3RhcnQgb2ZmIHdpdGggb25lIGByZWZlcmVuY2VgLCBidXQgZW5kIHVwIHVzaW5nIGFub3RoZXIgYmFzZWQgb24gdGhlXG4gICAgICAvLyBudW1iZXIgb2YgaW50ZXJwb2xhdGlvbnMuXG4gICAgICBpZiAocHJldmlvdXNJbnN0cnVjdGlvbiAmJiBwcmV2aW91c0luc3RydWN0aW9uLnJlZmVyZW5jZSA9PT0gcmVmZXJlbmNlRm9yQ2FsbCkge1xuICAgICAgICBwcmV2aW91c0luc3RydWN0aW9uLmNhbGxzLnB1c2goY2FsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0cnVjdGlvbnMucHVzaCh7cmVmZXJlbmNlOiByZWZlcmVuY2VGb3JDYWxsLCBjYWxsczogW2NhbGxdfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5zdHJ1Y3Rpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRDbGFzc0lucHV0cyh2YWx1ZUNvbnZlcnRlcjogVmFsdWVDb252ZXJ0ZXIpOiBTdHlsaW5nSW5zdHJ1Y3Rpb25bXSB7XG4gICAgaWYgKHRoaXMuX3NpbmdsZUNsYXNzSW5wdXRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYnVpbGRTaW5nbGVJbnB1dHMoXG4gICAgICAgICAgUjMuY2xhc3NQcm9wLCB0aGlzLl9zaW5nbGVDbGFzc0lucHV0cywgdmFsdWVDb252ZXJ0ZXIsIG51bGwsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcml2YXRlIF9idWlsZFN0eWxlSW5wdXRzKHZhbHVlQ29udmVydGVyOiBWYWx1ZUNvbnZlcnRlcik6IFN0eWxpbmdJbnN0cnVjdGlvbltdIHtcbiAgICBpZiAodGhpcy5fc2luZ2xlU3R5bGVJbnB1dHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9idWlsZFNpbmdsZUlucHV0cyhcbiAgICAgICAgICBSMy5zdHlsZVByb3AsIHRoaXMuX3NpbmdsZVN0eWxlSW5wdXRzLCB2YWx1ZUNvbnZlcnRlcixcbiAgICAgICAgICBnZXRTdHlsZVByb3BJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbiwgZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0cyBhbGwgaW5zdHJ1Y3Rpb25zIHdoaWNoIGNvbnRhaW4gdGhlIGV4cHJlc3Npb25zIHRoYXQgd2lsbCBiZSBwbGFjZWRcbiAgICogaW50byB0aGUgdXBkYXRlIGJsb2NrIG9mIGEgdGVtcGxhdGUgZnVuY3Rpb24gb3IgYSBkaXJlY3RpdmUgaG9zdEJpbmRpbmdzIGZ1bmN0aW9uLlxuICAgKi9cbiAgYnVpbGRVcGRhdGVMZXZlbEluc3RydWN0aW9ucyh2YWx1ZUNvbnZlcnRlcjogVmFsdWVDb252ZXJ0ZXIpIHtcbiAgICBjb25zdCBpbnN0cnVjdGlvbnM6IFN0eWxpbmdJbnN0cnVjdGlvbltdID0gW107XG4gICAgaWYgKHRoaXMuaGFzQmluZGluZ3MpIHtcbiAgICAgIGNvbnN0IHN0eWxlTWFwSW5zdHJ1Y3Rpb24gPSB0aGlzLmJ1aWxkU3R5bGVNYXBJbnN0cnVjdGlvbih2YWx1ZUNvbnZlcnRlcik7XG4gICAgICBpZiAoc3R5bGVNYXBJbnN0cnVjdGlvbikge1xuICAgICAgICBpbnN0cnVjdGlvbnMucHVzaChzdHlsZU1hcEluc3RydWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNsYXNzTWFwSW5zdHJ1Y3Rpb24gPSB0aGlzLmJ1aWxkQ2xhc3NNYXBJbnN0cnVjdGlvbih2YWx1ZUNvbnZlcnRlcik7XG4gICAgICBpZiAoY2xhc3NNYXBJbnN0cnVjdGlvbikge1xuICAgICAgICBpbnN0cnVjdGlvbnMucHVzaChjbGFzc01hcEluc3RydWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGluc3RydWN0aW9ucy5wdXNoKC4uLnRoaXMuX2J1aWxkU3R5bGVJbnB1dHModmFsdWVDb252ZXJ0ZXIpKTtcbiAgICAgIGluc3RydWN0aW9ucy5wdXNoKC4uLnRoaXMuX2J1aWxkQ2xhc3NJbnB1dHModmFsdWVDb252ZXJ0ZXIpKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RydWN0aW9ucztcbiAgfVxufVxuXG5mdW5jdGlvbiByZWdpc3RlckludG9NYXAobWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+LCBrZXk6IHN0cmluZykge1xuICBpZiAoIW1hcC5oYXMoa2V5KSkge1xuICAgIG1hcC5zZXQoa2V5LCBtYXAuc2l6ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdHlsZVNhbml0aXphYmxlKHByb3A6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBOb3RlIHRoYXQgYnJvd3NlcnMgc3VwcG9ydCBib3RoIHRoZSBkYXNoIGNhc2UgYW5kXG4gIC8vIGNhbWVsIGNhc2UgcHJvcGVydHkgbmFtZXMgd2hlbiBzZXR0aW5nIHRocm91Z2ggSlMuXG4gIHJldHVybiBwcm9wID09PSAnYmFja2dyb3VuZC1pbWFnZScgfHwgcHJvcCA9PT0gJ2JhY2tncm91bmRJbWFnZScgfHwgcHJvcCA9PT0gJ2JhY2tncm91bmQnIHx8XG4gICAgICBwcm9wID09PSAnYm9yZGVyLWltYWdlJyB8fCBwcm9wID09PSAnYm9yZGVySW1hZ2UnIHx8IHByb3AgPT09ICdib3JkZXItaW1hZ2Utc291cmNlJyB8fFxuICAgICAgcHJvcCA9PT0gJ2JvcmRlckltYWdlU291cmNlJyB8fCBwcm9wID09PSAnZmlsdGVyJyB8fCBwcm9wID09PSAnbGlzdC1zdHlsZScgfHxcbiAgICAgIHByb3AgPT09ICdsaXN0U3R5bGUnIHx8IHByb3AgPT09ICdsaXN0LXN0eWxlLWltYWdlJyB8fCBwcm9wID09PSAnbGlzdFN0eWxlSW1hZ2UnIHx8XG4gICAgICBwcm9wID09PSAnY2xpcC1wYXRoJyB8fCBwcm9wID09PSAnY2xpcFBhdGgnO1xufVxuXG4vKipcbiAqIFNpbXBsZSBoZWxwZXIgZnVuY3Rpb24gdG8gZWl0aGVyIHByb3ZpZGUgdGhlIGNvbnN0YW50IGxpdGVyYWwgdGhhdCB3aWxsIGhvdXNlIHRoZSB2YWx1ZVxuICogaGVyZSBvciBhIG51bGwgdmFsdWUgaWYgdGhlIHByb3ZpZGVkIHZhbHVlcyBhcmUgZW1wdHkuXG4gKi9cbmZ1bmN0aW9uIGdldENvbnN0YW50TGl0ZXJhbEZyb21BcnJheShcbiAgICBjb25zdGFudFBvb2w6IENvbnN0YW50UG9vbCwgdmFsdWVzOiBvLkV4cHJlc3Npb25bXSk6IG8uRXhwcmVzc2lvbiB7XG4gIHJldHVybiB2YWx1ZXMubGVuZ3RoID8gY29uc3RhbnRQb29sLmdldENvbnN0TGl0ZXJhbChvLmxpdGVyYWxBcnIodmFsdWVzKSwgdHJ1ZSkgOiBvLk5VTExfRVhQUjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJvcGVydHkobmFtZTogc3RyaW5nKTpcbiAgICB7cHJvcGVydHk6IHN0cmluZywgdW5pdDogc3RyaW5nLCBoYXNPdmVycmlkZUZsYWc6IGJvb2xlYW59IHtcbiAgbGV0IGhhc092ZXJyaWRlRmxhZyA9IGZhbHNlO1xuICBjb25zdCBvdmVycmlkZUluZGV4ID0gbmFtZS5pbmRleE9mKElNUE9SVEFOVF9GTEFHKTtcbiAgaWYgKG92ZXJyaWRlSW5kZXggIT09IC0xKSB7XG4gICAgbmFtZSA9IG92ZXJyaWRlSW5kZXggPiAwID8gbmFtZS5zdWJzdHJpbmcoMCwgb3ZlcnJpZGVJbmRleCkgOiAnJztcbiAgICBoYXNPdmVycmlkZUZsYWcgPSB0cnVlO1xuICB9XG5cbiAgbGV0IHVuaXQgPSAnJztcbiAgbGV0IHByb3BlcnR5ID0gbmFtZTtcbiAgY29uc3QgdW5pdEluZGV4ID0gbmFtZS5sYXN0SW5kZXhPZignLicpO1xuICBpZiAodW5pdEluZGV4ID4gMCkge1xuICAgIHVuaXQgPSBuYW1lLnN1YnN0cih1bml0SW5kZXggKyAxKTtcbiAgICBwcm9wZXJ0eSA9IG5hbWUuc3Vic3RyaW5nKDAsIHVuaXRJbmRleCk7XG4gIH1cblxuICByZXR1cm4ge3Byb3BlcnR5LCB1bml0LCBoYXNPdmVycmlkZUZsYWd9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGluc3RydWN0aW9uIHRvIGdlbmVyYXRlIGZvciBhbiBpbnRlcnBvbGF0ZWQgY2xhc3MgbWFwLlxuICogQHBhcmFtIGludGVycG9sYXRpb24gQW4gSW50ZXJwb2xhdGlvbiBBU1RcbiAqL1xuZnVuY3Rpb24gZ2V0Q2xhc3NNYXBJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbihpbnRlcnBvbGF0aW9uOiBJbnRlcnBvbGF0aW9uKTogby5FeHRlcm5hbFJlZmVyZW5jZSB7XG4gIHN3aXRjaCAoZ2V0SW50ZXJwb2xhdGlvbkFyZ3NMZW5ndGgoaW50ZXJwb2xhdGlvbikpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gUjMuY2xhc3NNYXA7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFIzLmNsYXNzTWFwSW50ZXJwb2xhdGUxO1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBSMy5jbGFzc01hcEludGVycG9sYXRlMjtcbiAgICBjYXNlIDc6XG4gICAgICByZXR1cm4gUjMuY2xhc3NNYXBJbnRlcnBvbGF0ZTM7XG4gICAgY2FzZSA5OlxuICAgICAgcmV0dXJuIFIzLmNsYXNzTWFwSW50ZXJwb2xhdGU0O1xuICAgIGNhc2UgMTE6XG4gICAgICByZXR1cm4gUjMuY2xhc3NNYXBJbnRlcnBvbGF0ZTU7XG4gICAgY2FzZSAxMzpcbiAgICAgIHJldHVybiBSMy5jbGFzc01hcEludGVycG9sYXRlNjtcbiAgICBjYXNlIDE1OlxuICAgICAgcmV0dXJuIFIzLmNsYXNzTWFwSW50ZXJwb2xhdGU3O1xuICAgIGNhc2UgMTc6XG4gICAgICByZXR1cm4gUjMuY2xhc3NNYXBJbnRlcnBvbGF0ZTg7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBSMy5jbGFzc01hcEludGVycG9sYXRlVjtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluc3RydWN0aW9uIHRvIGdlbmVyYXRlIGZvciBhbiBpbnRlcnBvbGF0ZWQgc3R5bGUgbWFwLlxuICogQHBhcmFtIGludGVycG9sYXRpb24gQW4gSW50ZXJwb2xhdGlvbiBBU1RcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGVNYXBJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbihpbnRlcnBvbGF0aW9uOiBJbnRlcnBvbGF0aW9uKTogby5FeHRlcm5hbFJlZmVyZW5jZSB7XG4gIHN3aXRjaCAoZ2V0SW50ZXJwb2xhdGlvbkFyZ3NMZW5ndGgoaW50ZXJwb2xhdGlvbikpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gUjMuc3R5bGVNYXA7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFIzLnN0eWxlTWFwSW50ZXJwb2xhdGUxO1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBSMy5zdHlsZU1hcEludGVycG9sYXRlMjtcbiAgICBjYXNlIDc6XG4gICAgICByZXR1cm4gUjMuc3R5bGVNYXBJbnRlcnBvbGF0ZTM7XG4gICAgY2FzZSA5OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlTWFwSW50ZXJwb2xhdGU0O1xuICAgIGNhc2UgMTE6XG4gICAgICByZXR1cm4gUjMuc3R5bGVNYXBJbnRlcnBvbGF0ZTU7XG4gICAgY2FzZSAxMzpcbiAgICAgIHJldHVybiBSMy5zdHlsZU1hcEludGVycG9sYXRlNjtcbiAgICBjYXNlIDE1OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlTWFwSW50ZXJwb2xhdGU3O1xuICAgIGNhc2UgMTc6XG4gICAgICByZXR1cm4gUjMuc3R5bGVNYXBJbnRlcnBvbGF0ZTg7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBSMy5zdHlsZU1hcEludGVycG9sYXRlVjtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluc3RydWN0aW9uIHRvIGdlbmVyYXRlIGZvciBhbiBpbnRlcnBvbGF0ZWQgc3R5bGUgcHJvcC5cbiAqIEBwYXJhbSBpbnRlcnBvbGF0aW9uIEFuIEludGVycG9sYXRpb24gQVNUXG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcEludGVycG9sYXRpb25FeHByZXNzaW9uKGludGVycG9sYXRpb246IEludGVycG9sYXRpb24pIHtcbiAgc3dpdGNoIChnZXRJbnRlcnBvbGF0aW9uQXJnc0xlbmd0aChpbnRlcnBvbGF0aW9uKSkge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBSMy5zdHlsZVByb3A7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFIzLnN0eWxlUHJvcEludGVycG9sYXRlMTtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gUjMuc3R5bGVQcm9wSW50ZXJwb2xhdGUyO1xuICAgIGNhc2UgNzpcbiAgICAgIHJldHVybiBSMy5zdHlsZVByb3BJbnRlcnBvbGF0ZTM7XG4gICAgY2FzZSA5OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlUHJvcEludGVycG9sYXRlNDtcbiAgICBjYXNlIDExOlxuICAgICAgcmV0dXJuIFIzLnN0eWxlUHJvcEludGVycG9sYXRlNTtcbiAgICBjYXNlIDEzOlxuICAgICAgcmV0dXJuIFIzLnN0eWxlUHJvcEludGVycG9sYXRlNjtcbiAgICBjYXNlIDE1OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlUHJvcEludGVycG9sYXRlNztcbiAgICBjYXNlIDE3OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlUHJvcEludGVycG9sYXRlODtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlUHJvcEludGVycG9sYXRlVjtcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wTmFtZShwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaHlwaGVuYXRlKHByb3ApO1xufVxuIl19