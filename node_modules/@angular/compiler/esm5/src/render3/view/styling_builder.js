import { __read, __spread } from "tslib";
import { ASTWithSource, BindingPipe, Interpolation } from '../../expression_parser/ast';
import * as o from '../../output/output_ast';
import { isEmptyExpression } from '../../template_parser/template_parser';
import { Identifiers as R3 } from '../r3_identifiers';
import { hyphenate, parse as parseStyle } from './style_parser';
import { getInterpolationArgsLength } from './util';
var IMPORTANT_FLAG = '!important';
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
export var MIN_STYLING_BINDING_SLOTS_REQUIRED = 2;
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
var StylingBuilder = /** @class */ (function () {
    function StylingBuilder(_directiveExpr) {
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
    StylingBuilder.prototype.registerBoundInput = function (input) {
        // [attr.style] or [attr.class] are skipped in the code below,
        // they should not be treated as styling-based bindings since
        // they are intended to be written directly to the attr and
        // will therefore skip all style/class resolution that is present
        // with style="", [style]="" and [style.prop]="", class="",
        // [class.prop]="". [class]="" assignments
        var binding = null;
        var name = input.name;
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
    };
    StylingBuilder.prototype.registerInputBasedOnName = function (name, expression, sourceSpan) {
        var binding = null;
        var prefix = name.substring(0, 6);
        var isStyle = name === 'style' || prefix === 'style.' || prefix === 'style!';
        var isClass = !isStyle && (name === 'class' || prefix === 'class.' || prefix === 'class!');
        if (isStyle || isClass) {
            var isMapBased = name.charAt(5) !== '.'; // style.prop or class.prop makes this a no
            var property = name.substr(isMapBased ? 5 : 6); // the dot explains why there's a +1
            if (isStyle) {
                binding = this.registerStyleInput(property, isMapBased, expression, sourceSpan);
            }
            else {
                binding = this.registerClassInput(property, isMapBased, expression, sourceSpan);
            }
        }
        return binding;
    };
    StylingBuilder.prototype.registerStyleInput = function (name, isMapBased, value, sourceSpan, unit) {
        if (isEmptyExpression(value)) {
            return null;
        }
        name = normalizePropName(name);
        var _a = parseProperty(name), property = _a.property, hasOverrideFlag = _a.hasOverrideFlag, bindingUnit = _a.unit;
        var entry = {
            name: property,
            sanitize: property ? isStyleSanitizable(property) : true,
            unit: unit || bindingUnit,
            value: value,
            sourceSpan: sourceSpan,
            hasOverrideFlag: hasOverrideFlag
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
    };
    StylingBuilder.prototype.registerClassInput = function (name, isMapBased, value, sourceSpan) {
        if (isEmptyExpression(value)) {
            return null;
        }
        var _a = parseProperty(name), property = _a.property, hasOverrideFlag = _a.hasOverrideFlag;
        var entry = { name: property, value: value, sourceSpan: sourceSpan, sanitize: false, hasOverrideFlag: hasOverrideFlag, unit: null };
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
    };
    StylingBuilder.prototype._checkForPipes = function (value) {
        if ((value instanceof ASTWithSource) && (value.ast instanceof BindingPipe)) {
            this.hasBindingsWithPipes = true;
        }
    };
    /**
     * Registers the element's static style string value to the builder.
     *
     * @param value the style string (e.g. `width:100px; height:200px;`)
     */
    StylingBuilder.prototype.registerStyleAttr = function (value) {
        this._initialStyleValues = parseStyle(value);
        this._hasInitialValues = true;
    };
    /**
     * Registers the element's static class string value to the builder.
     *
     * @param value the className string (e.g. `disabled gold zoom`)
     */
    StylingBuilder.prototype.registerClassAttr = function (value) {
        this._initialClassValues = value.trim().split(/\s+/g);
        this._hasInitialValues = true;
    };
    /**
     * Appends all styling-related expressions to the provided attrs array.
     *
     * @param attrs an existing array where each of the styling expressions
     * will be inserted into.
     */
    StylingBuilder.prototype.populateInitialStylingAttrs = function (attrs) {
        // [CLASS_MARKER, 'foo', 'bar', 'baz' ...]
        if (this._initialClassValues.length) {
            attrs.push(o.literal(1 /* Classes */));
            for (var i = 0; i < this._initialClassValues.length; i++) {
                attrs.push(o.literal(this._initialClassValues[i]));
            }
        }
        // [STYLE_MARKER, 'width', '200px', 'height', '100px', ...]
        if (this._initialStyleValues.length) {
            attrs.push(o.literal(2 /* Styles */));
            for (var i = 0; i < this._initialStyleValues.length; i += 2) {
                attrs.push(o.literal(this._initialStyleValues[i]), o.literal(this._initialStyleValues[i + 1]));
            }
        }
    };
    /**
     * Builds an instruction with all the expressions and parameters for `elementHostAttrs`.
     *
     * The instruction generation code below is used for producing the AOT statement code which is
     * responsible for registering initial styles (within a directive hostBindings' creation block),
     * as well as any of the provided attribute values, to the directive host element.
     */
    StylingBuilder.prototype.assignHostAttrs = function (attrs, definitionMap) {
        if (this._directiveExpr && (attrs.length || this._hasInitialValues)) {
            this.populateInitialStylingAttrs(attrs);
            definitionMap.set('hostAttrs', o.literalArr(attrs));
        }
    };
    /**
     * Builds an instruction with all the expressions and parameters for `classMap`.
     *
     * The instruction data will contain all expressions for `classMap` to function
     * which includes the `[class]` expression params.
     */
    StylingBuilder.prototype.buildClassMapInstruction = function (valueConverter) {
        if (this._classMapInput) {
            return this._buildMapBasedInstruction(valueConverter, true, this._classMapInput);
        }
        return null;
    };
    /**
     * Builds an instruction with all the expressions and parameters for `styleMap`.
     *
     * The instruction data will contain all expressions for `styleMap` to function
     * which includes the `[style]` expression params.
     */
    StylingBuilder.prototype.buildStyleMapInstruction = function (valueConverter) {
        if (this._styleMapInput) {
            return this._buildMapBasedInstruction(valueConverter, false, this._styleMapInput);
        }
        return null;
    };
    StylingBuilder.prototype._buildMapBasedInstruction = function (valueConverter, isClassBased, stylingInput) {
        // each styling binding value is stored in the LView
        // map-based bindings allocate two slots: one for the
        // previous binding value and another for the previous
        // className or style attribute value.
        var totalBindingSlotsRequired = MIN_STYLING_BINDING_SLOTS_REQUIRED;
        // these values must be outside of the update block so that they can
        // be evaluated (the AST visit call) during creation time so that any
        // pipes can be picked up in time before the template is built
        var mapValue = stylingInput.value.visit(valueConverter);
        var reference;
        if (mapValue instanceof Interpolation) {
            totalBindingSlotsRequired += mapValue.expressions.length;
            reference = isClassBased ? getClassMapInterpolationExpression(mapValue) :
                getStyleMapInterpolationExpression(mapValue);
        }
        else {
            reference = isClassBased ? R3.classMap : R3.styleMap;
        }
        return {
            reference: reference,
            calls: [{
                    supportsInterpolation: true,
                    sourceSpan: stylingInput.sourceSpan,
                    allocateBindingSlots: totalBindingSlotsRequired,
                    params: function (convertFn) {
                        var convertResult = convertFn(mapValue);
                        var params = Array.isArray(convertResult) ? convertResult : [convertResult];
                        return params;
                    }
                }]
        };
    };
    StylingBuilder.prototype._buildSingleInputs = function (reference, inputs, valueConverter, getInterpolationExpressionFn, isClassBased) {
        var instructions = [];
        inputs.forEach(function (input) {
            var previousInstruction = instructions[instructions.length - 1];
            var value = input.value.visit(valueConverter);
            var referenceForCall = reference;
            // each styling binding value is stored in the LView
            // but there are two values stored for each binding:
            //   1) the value itself
            //   2) an intermediate value (concatenation of style up to this point).
            //      We need to store the intermediate value so that we don't allocate
            //      the strings on each CD.
            var totalBindingSlotsRequired = MIN_STYLING_BINDING_SLOTS_REQUIRED;
            if (value instanceof Interpolation) {
                totalBindingSlotsRequired += value.expressions.length;
                if (getInterpolationExpressionFn) {
                    referenceForCall = getInterpolationExpressionFn(value);
                }
            }
            var call = {
                sourceSpan: input.sourceSpan,
                allocateBindingSlots: totalBindingSlotsRequired,
                supportsInterpolation: !!getInterpolationExpressionFn,
                params: function (convertFn) {
                    // params => stylingProp(propName, value, suffix|sanitizer)
                    var params = [];
                    params.push(o.literal(input.name));
                    var convertResult = convertFn(value);
                    if (Array.isArray(convertResult)) {
                        params.push.apply(params, __spread(convertResult));
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
    };
    StylingBuilder.prototype._buildClassInputs = function (valueConverter) {
        if (this._singleClassInputs) {
            return this._buildSingleInputs(R3.classProp, this._singleClassInputs, valueConverter, null, true);
        }
        return [];
    };
    StylingBuilder.prototype._buildStyleInputs = function (valueConverter) {
        if (this._singleStyleInputs) {
            return this._buildSingleInputs(R3.styleProp, this._singleStyleInputs, valueConverter, getStylePropInterpolationExpression, false);
        }
        return [];
    };
    /**
     * Constructs all instructions which contain the expressions that will be placed
     * into the update block of a template function or a directive hostBindings function.
     */
    StylingBuilder.prototype.buildUpdateLevelInstructions = function (valueConverter) {
        var instructions = [];
        if (this.hasBindings) {
            var styleMapInstruction = this.buildStyleMapInstruction(valueConverter);
            if (styleMapInstruction) {
                instructions.push(styleMapInstruction);
            }
            var classMapInstruction = this.buildClassMapInstruction(valueConverter);
            if (classMapInstruction) {
                instructions.push(classMapInstruction);
            }
            instructions.push.apply(instructions, __spread(this._buildStyleInputs(valueConverter)));
            instructions.push.apply(instructions, __spread(this._buildClassInputs(valueConverter)));
        }
        return instructions;
    };
    return StylingBuilder;
}());
export { StylingBuilder };
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
    var hasOverrideFlag = false;
    var overrideIndex = name.indexOf(IMPORTANT_FLAG);
    if (overrideIndex !== -1) {
        name = overrideIndex > 0 ? name.substring(0, overrideIndex) : '';
        hasOverrideFlag = true;
    }
    var unit = '';
    var property = name;
    var unitIndex = name.lastIndexOf('.');
    if (unitIndex > 0) {
        unit = name.substr(unitIndex + 1);
        property = name.substring(0, unitIndex);
    }
    return { property: property, unit: unit, hasOverrideFlag: hasOverrideFlag };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGluZ19idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3JlbmRlcjMvdmlldy9zdHlsaW5nX2J1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVNBLE9BQU8sRUFBTSxhQUFhLEVBQUUsV0FBVyxFQUFlLGFBQWEsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3hHLE9BQU8sS0FBSyxDQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFFeEUsT0FBTyxFQUFDLFdBQVcsSUFBSSxFQUFFLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssSUFBSSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RCxPQUFPLEVBQWdCLDBCQUEwQixFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRWpFLElBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQztBQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErQ0s7QUFDTCxNQUFNLENBQUMsSUFBTSxrQ0FBa0MsR0FBRyxDQUFDLENBQUM7QUE4QnBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHO0FBQ0g7SUF3Q0Usd0JBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQXZDckQsaUVBQWlFO1FBQ3pELHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUNsQzs7O1dBR0c7UUFDSSxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFFcEMsMkNBQTJDO1FBQ25DLG1CQUFjLEdBQTJCLElBQUksQ0FBQztRQUN0RCwyQ0FBMkM7UUFDbkMsbUJBQWMsR0FBMkIsSUFBSSxDQUFD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WUFDSixPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQztZQUNFLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ25DO0FBQ0gsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsSUFBWTtJQUNyQyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtDb25zdGFudFBvb2x9IGZyb20gJy4uLy4uL2NvbnN0YW50X3Bvb2wnO1xuaW1wb3J0IHtBdHRyaWJ1dGVNYXJrZXJ9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHtBU1QsIEFTVFdpdGhTb3VyY2UsIEJpbmRpbmdQaXBlLCBCaW5kaW5nVHlwZSwgSW50ZXJwb2xhdGlvbn0gZnJvbSAnLi4vLi4vZXhwcmVzc2lvbl9wYXJzZXIvYXN0JztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0IHtQYXJzZVNvdXJjZVNwYW59IGZyb20gJy4uLy4uL3BhcnNlX3V0aWwnO1xuaW1wb3J0IHtpc0VtcHR5RXhwcmVzc2lvbn0gZnJvbSAnLi4vLi4vdGVtcGxhdGVfcGFyc2VyL3RlbXBsYXRlX3BhcnNlcic7XG5pbXBvcnQgKiBhcyB0IGZyb20gJy4uL3IzX2FzdCc7XG5pbXBvcnQge0lkZW50aWZpZXJzIGFzIFIzfSBmcm9tICcuLi9yM19pZGVudGlmaWVycyc7XG5cbmltcG9ydCB7aHlwaGVuYXRlLCBwYXJzZSBhcyBwYXJzZVN0eWxlfSBmcm9tICcuL3N0eWxlX3BhcnNlcic7XG5pbXBvcnQge1ZhbHVlQ29udmVydGVyfSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCB7RGVmaW5pdGlvbk1hcCwgZ2V0SW50ZXJwb2xhdGlvbkFyZ3NMZW5ndGh9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IElNUE9SVEFOVF9GTEFHID0gJyFpbXBvcnRhbnQnO1xuXG4vKipcbiAqIE1pbmltdW0gYW1vdW50IG9mIGJpbmRpbmcgc2xvdHMgcmVxdWlyZWQgaW4gdGhlIHJ1bnRpbWUgZm9yIHN0eWxlL2NsYXNzIGJpbmRpbmdzLlxuICpcbiAqIFN0eWxpbmcgaW4gQW5ndWxhciB1c2VzIHVwIHR3byBzbG90cyBpbiB0aGUgcnVudGltZSBMVmlldy9URGF0YSBkYXRhIHN0cnVjdHVyZXMgdG9cbiAqIHJlY29yZCBiaW5kaW5nIGRhdGEsIHByb3BlcnR5IGluZm9ybWF0aW9uIGFuZCBtZXRhZGF0YS5cbiAqXG4gKiBXaGVuIGEgYmluZGluZyBpcyByZWdpc3RlcmVkIGl0IHdpbGwgcGxhY2UgdGhlIGZvbGxvd2luZyBpbmZvcm1hdGlvbiBpbiB0aGUgYExWaWV3YDpcbiAqXG4gKiBzbG90IDEpIGJpbmRpbmcgdmFsdWVcbiAqIHNsb3QgMikgY2FjaGVkIHZhbHVlIChhbGwgb3RoZXIgdmFsdWVzIGNvbGxlY3RlZCBiZWZvcmUgaXQgaW4gc3RyaW5nIGZvcm0pXG4gKlxuICogV2hlbiBhIGJpbmRpbmcgaXMgcmVnaXN0ZXJlZCBpdCB3aWxsIHBsYWNlIHRoZSBmb2xsb3dpbmcgaW5mb3JtYXRpb24gaW4gdGhlIGBURGF0YWA6XG4gKlxuICogc2xvdCAxKSBwcm9wIG5hbWVcbiAqIHNsb3QgMikgYmluZGluZyBpbmRleCB0aGF0IHBvaW50cyB0byB0aGUgcHJldmlvdXMgc3R5bGUvY2xhc3MgYmluZGluZyAoYW5kIHNvbWUgZXh0cmEgY29uZmlnXG4gKiB2YWx1ZXMpXG4gKlxuICogTGV0J3MgaW1hZ2luZSB3ZSBoYXZlIGEgYmluZGluZyB0aGF0IGxvb2tzIGxpa2Ugc286XG4gKlxuICogYGBgXG4gKiA8ZGl2IFtzdHlsZS53aWR0aF09XCJ4XCIgW3N0eWxlLmhlaWdodF09XCJ5XCI+XG4gKiBgYGBcbiAqXG4gKiBPdXIgYExWaWV3YCBhbmQgYFREYXRhYCBkYXRhLXN0cnVjdHVyZXMgbG9vayBsaWtlIHNvOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIExWaWV3ID0gW1xuICogICAvLyAuLi5cbiAqICAgeCwgLy8gdmFsdWUgb2YgeFxuICogICBcIndpZHRoOiB4XCIsXG4gKlxuICogICB5LCAvLyB2YWx1ZSBvZiB5XG4gKiAgIFwid2lkdGg6IHg7IGhlaWdodDogeVwiLFxuICogICAvLyAuLi5cbiAqIF07XG4gKlxuICogVERhdGEgPSBbXG4gKiAgIC8vIC4uLlxuICogICBcIndpZHRoXCIsIC8vIGJpbmRpbmcgc2xvdCAyMFxuICogICAwLFxuICpcbiAqICAgXCJoZWlnaHRcIixcbiAqICAgMjAsXG4gKiAgIC8vIC4uLlxuICogXTtcbiAqIGBgYFxuICpcbiAqICovXG5leHBvcnQgY29uc3QgTUlOX1NUWUxJTkdfQklORElOR19TTE9UU19SRVFVSVJFRCA9IDI7XG5cbi8qKlxuICogQSBzdHlsaW5nIGV4cHJlc3Npb24gc3VtbWFyeSB0aGF0IGlzIHRvIGJlIHByb2Nlc3NlZCBieSB0aGUgY29tcGlsZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHlsaW5nSW5zdHJ1Y3Rpb24ge1xuICByZWZlcmVuY2U6IG8uRXh0ZXJuYWxSZWZlcmVuY2U7XG4gIC8qKiBDYWxscyB0byBpbmRpdmlkdWFsIHN0eWxpbmcgaW5zdHJ1Y3Rpb25zLiBVc2VkIHdoZW4gY2hhaW5pbmcgY2FsbHMgdG8gdGhlIHNhbWUgaW5zdHJ1Y3Rpb24uICovXG4gIGNhbGxzOiBTdHlsaW5nSW5zdHJ1Y3Rpb25DYWxsW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGluZ0luc3RydWN0aW9uQ2FsbCB7XG4gIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbnxudWxsO1xuICBzdXBwb3J0c0ludGVycG9sYXRpb246IGJvb2xlYW47XG4gIGFsbG9jYXRlQmluZGluZ1Nsb3RzOiBudW1iZXI7XG4gIHBhcmFtczogKChjb252ZXJ0Rm46ICh2YWx1ZTogYW55KSA9PiBvLkV4cHJlc3Npb24gfCBvLkV4cHJlc3Npb25bXSkgPT4gby5FeHByZXNzaW9uW10pO1xufVxuXG4vKipcbiAqIEFuIGludGVybmFsIHJlY29yZCBvZiB0aGUgaW5wdXQgZGF0YSBmb3IgYSBzdHlsaW5nIGJpbmRpbmdcbiAqL1xuaW50ZXJmYWNlIEJvdW5kU3R5bGluZ0VudHJ5IHtcbiAgaGFzT3ZlcnJpZGVGbGFnOiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmd8bnVsbDtcbiAgdW5pdDogc3RyaW5nfG51bGw7XG4gIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbjtcbiAgc2FuaXRpemU6IGJvb2xlYW47XG4gIHZhbHVlOiBBU1Q7XG59XG5cbi8qKlxuICogUHJvZHVjZXMgY3JlYXRpb24vdXBkYXRlIGluc3RydWN0aW9ucyBmb3IgYWxsIHN0eWxpbmcgYmluZGluZ3MgKGNsYXNzIGFuZCBzdHlsZSlcbiAqXG4gKiBJdCBhbHNvIHByb2R1Y2VzIHRoZSBjcmVhdGlvbiBpbnN0cnVjdGlvbiB0byByZWdpc3RlciBhbGwgaW5pdGlhbCBzdHlsaW5nIHZhbHVlc1xuICogKHdoaWNoIGFyZSBhbGwgdGhlIHN0YXRpYyBjbGFzcz1cIi4uLlwiIGFuZCBzdHlsZT1cIi4uLlwiIGF0dHJpYnV0ZSB2YWx1ZXMgdGhhdCBleGlzdFxuICogb24gYW4gZWxlbWVudCB3aXRoaW4gYSB0ZW1wbGF0ZSkuXG4gKlxuICogVGhlIGJ1aWxkZXIgY2xhc3MgYmVsb3cgaGFuZGxlcyBwcm9kdWNpbmcgaW5zdHJ1Y3Rpb25zIGZvciB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICpcbiAqIC0gU3RhdGljIHN0eWxlL2NsYXNzIGF0dHJpYnV0ZXMgKHN0eWxlPVwiLi4uXCIgYW5kIGNsYXNzPVwiLi4uXCIpXG4gKiAtIER5bmFtaWMgc3R5bGUvY2xhc3MgbWFwIGJpbmRpbmdzIChbc3R5bGVdPVwibWFwXCIgYW5kIFtjbGFzc109XCJtYXB8c3RyaW5nXCIpXG4gKiAtIER5bmFtaWMgc3R5bGUvY2xhc3MgcHJvcGVydHkgYmluZGluZ3MgKFtzdHlsZS5wcm9wXT1cImV4cFwiIGFuZCBbY2xhc3MubmFtZV09XCJleHBcIilcbiAqXG4gKiBEdWUgdG8gdGhlIGNvbXBsZXggcmVsYXRpb25zaGlwIG9mIGFsbCBvZiB0aGVzZSBjYXNlcywgdGhlIGluc3RydWN0aW9ucyBnZW5lcmF0ZWRcbiAqIGZvciB0aGVzZSBhdHRyaWJ1dGVzL3Byb3BlcnRpZXMvYmluZGluZ3MgbXVzdCBiZSBkb25lIHNvIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBUaGVcbiAqIG9yZGVyIHdoaWNoIHRoZXNlIG11c3QgYmUgZ2VuZXJhdGVkIGlzIGFzIGZvbGxvd3M6XG4gKlxuICogaWYgKGNyZWF0ZU1vZGUpIHtcbiAqICAgc3R5bGluZyguLi4pXG4gKiB9XG4gKiBpZiAodXBkYXRlTW9kZSkge1xuICogICBzdHlsZU1hcCguLi4pXG4gKiAgIGNsYXNzTWFwKC4uLilcbiAqICAgc3R5bGVQcm9wKC4uLilcbiAqICAgY2xhc3NQcm9wKC4uLilcbiAqIH1cbiAqXG4gKiBUaGUgY3JlYXRpb24vdXBkYXRlIG1ldGhvZHMgd2l0aGluIHRoZSBidWlsZGVyIGNsYXNzIHByb2R1Y2UgdGhlc2UgaW5zdHJ1Y3Rpb25zLlxuICovXG5leHBvcnQgY2xhc3MgU3R5bGluZ0J1aWxkZXIge1xuICAvKiogV2hldGhlciBvciBub3QgdGhlcmUgYXJlIGFueSBzdGF0aWMgc3R5bGluZyB2YWx1ZXMgcHJlc2VudCAqL1xuICBwcml2YXRlIF9oYXNJbml0aWFsVmFsdWVzID0gZmFsc2U7XG4gIC8qKlxuICAgKiAgV2hldGhlciBvciBub3QgdGhlcmUgYXJlIGFueSBzdHlsaW5nIGJpbmRpbmdzIHByZXNlbnRcbiAgICogIChpLmUuIGBbc3R5bGVdYCwgYFtjbGFzc11gLCBgW3N0eWxlLnByb3BdYCBvciBgW2NsYXNzLm5hbWVdYClcbiAgICovXG4gIHB1YmxpYyBoYXNCaW5kaW5ncyA9IGZhbHNlO1xuICBwdWJsaWMgaGFzQmluZGluZ3NXaXRoUGlwZXMgPSBmYWxzZTtcblxuICAvKiogdGhlIGlucHV0IGZvciBbY2xhc3NdIChpZiBpdCBleGlzdHMpICovXG4gIHByaXZhdGUgX2NsYXNzTWFwSW5wdXQ6IEJvdW5kU3R5bGluZ0VudHJ5fG51bGwgPSBudWxsO1xuICAvKiogdGhlIGlucHV0IGZvciBbc3R5bGVdIChpZiBpdCBleGlzdHMpICovXG4gIHByaXZhdGUgX3N0eWxlTWFwSW5wdXQ6IEJvdW5kU3R5bGluZ0VudHJ5fG51bGwgPSBudWxsO1xuICAvKiogYW4gYXJyYXkgb2YgZWFjaCBbc3R5bGUucHJvcF0gaW5wdXQgKi9cbiAgcHJpdmF0ZSBfc2luZ2xlU3R5bGVJbnB1dHM6IEJvdW5kU3R5bGluZ0VudHJ5W118bnVsbCA9IG51bGw7XG4gIC8qKiBhbiBhcnJheSBvZiBlYWNoIFtjbGFzcy5uYW1lXSBpbnB1dCAqL1xuICBwcml2YXRlIF9zaW5nbGVDbGFzc0lucHV0czogQm91bmRTdHlsaW5nRW50cnlbXXxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGFzdFN0eWxpbmdJbnB1dDogQm91bmRTdHlsaW5nRW50cnl8bnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2ZpcnN0U3R5bGluZ0lucHV0OiBCb3VuZFN0eWxpbmdFbnRyeXxudWxsID0gbnVsbDtcblxuICAvLyBtYXBzIGFyZSB1c2VkIGluc3RlYWQgb2YgaGFzaCBtYXBzIGJlY2F1c2UgYSBNYXAgd2lsbFxuICAvLyByZXRhaW4gdGhlIG9yZGVyaW5nIG9mIHRoZSBrZXlzXG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIGxvY2F0aW9uIG9mIGVhY2ggc3R5bGUgYmluZGluZyBpbiB0aGUgdGVtcGxhdGVcbiAgICogKGUuZy4gYDxkaXYgW3N0eWxlLndpZHRoXT1cIndcIiBbc3R5bGUuaGVpZ2h0XT1cImhcIj5gIGltcGxpZXNcbiAgICogdGhhdCBgd2lkdGg9MGAgYW5kIGBoZWlnaHQ9MWApXG4gICAqL1xuICBwcml2YXRlIF9zdHlsZXNJbmRleCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIGxvY2F0aW9uIG9mIGVhY2ggY2xhc3MgYmluZGluZyBpbiB0aGUgdGVtcGxhdGVcbiAgICogKGUuZy4gYDxkaXYgW2NsYXNzLmJpZ109XCJiXCIgW2NsYXNzLmhpZGRlbl09XCJoXCI+YCBpbXBsaWVzXG4gICAqIHRoYXQgYGJpZz0wYCBhbmQgYGhpZGRlbj0xYClcbiAgICovXG4gIHByaXZhdGUgX2NsYXNzZXNJbmRleCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gIHByaXZhdGUgX2luaXRpYWxTdHlsZVZhbHVlczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBfaW5pdGlhbENsYXNzVmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpcmVjdGl2ZUV4cHI6IG8uRXhwcmVzc2lvbnxudWxsKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBnaXZlbiBpbnB1dCB0byB0aGUgc3R5bGluZyBidWlsZGVyIHRvIGJlIGxhdGVyIHVzZWQgd2hlbiBwcm9kdWNpbmcgQU9UIGNvZGUuXG4gICAqXG4gICAqIFRoZSBjb2RlIGJlbG93IHdpbGwgb25seSBhY2NlcHQgdGhlIGlucHV0IGlmIGl0IGlzIHNvbWVob3cgdGllZCB0byBzdHlsaW5nICh3aGV0aGVyIGl0IGJlXG4gICAqIHN0eWxlL2NsYXNzIGJpbmRpbmdzIG9yIHN0YXRpYyBzdHlsZS9jbGFzcyBhdHRyaWJ1dGVzKS5cbiAgICovXG4gIHJlZ2lzdGVyQm91bmRJbnB1dChpbnB1dDogdC5Cb3VuZEF0dHJpYnV0ZSk6IGJvb2xlYW4ge1xuICAgIC8vIFthdHRyLnN0eWxlXSBvciBbYXR0ci5jbGFzc10gYXJlIHNraXBwZWQgaW4gdGhlIGNvZGUgYmVsb3csXG4gICAgLy8gdGhleSBzaG91bGQgbm90IGJlIHRyZWF0ZWQgYXMgc3R5bGluZy1iYXNlZCBiaW5kaW5ncyBzaW5jZVxuICAgIC8vIHRoZXkgYXJlIGludGVuZGVkIHRvIGJlIHdyaXR0ZW4gZGlyZWN0bHkgdG8gdGhlIGF0dHIgYW5kXG4gICAgLy8gd2lsbCB0aGVyZWZvcmUgc2tpcCBhbGwgc3R5bGUvY2xhc3MgcmVzb2x1dGlvbiB0aGF0IGlzIHByZXNlbnRcbiAgICAvLyB3aXRoIHN0eWxlPVwiXCIsIFtzdHlsZV09XCJcIiBhbmQgW3N0eWxlLnByb3BdPVwiXCIsIGNsYXNzPVwiXCIsXG4gICAgLy8gW2NsYXNzLnByb3BdPVwiXCIuIFtjbGFzc109XCJcIiBhc3NpZ25tZW50c1xuICAgIGxldCBiaW5kaW5nOiBCb3VuZFN0eWxpbmdFbnRyeXxudWxsID0gbnVsbDtcbiAgICBsZXQgbmFtZSA9IGlucHV0Lm5hbWU7XG4gICAgc3dpdGNoIChpbnB1dC50eXBlKSB7XG4gICAgICBjYXNlIEJpbmRpbmdUeXBlLlByb3BlcnR5OlxuICAgICAgICBiaW5kaW5nID0gdGhpcy5yZWdpc3RlcklucHV0QmFzZWRPbk5hbWUobmFtZSwgaW5wdXQudmFsdWUsIGlucHV0LnNvdXJjZVNwYW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQmluZGluZ1R5cGUuU3R5bGU6XG4gICAgICAgIGJpbmRpbmcgPSB0aGlzLnJlZ2lzdGVyU3R5bGVJbnB1dChuYW1lLCBmYWxzZSwgaW5wdXQudmFsdWUsIGlucHV0LnNvdXJjZVNwYW4sIGlucHV0LnVuaXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQmluZGluZ1R5cGUuQ2xhc3M6XG4gICAgICAgIGJpbmRpbmcgPSB0aGlzLnJlZ2lzdGVyQ2xhc3NJbnB1dChuYW1lLCBmYWxzZSwgaW5wdXQudmFsdWUsIGlucHV0LnNvdXJjZVNwYW4pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGJpbmRpbmcgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICByZWdpc3RlcklucHV0QmFzZWRPbk5hbWUobmFtZTogc3RyaW5nLCBleHByZXNzaW9uOiBBU1QsIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge1xuICAgIGxldCBiaW5kaW5nOiBCb3VuZFN0eWxpbmdFbnRyeXxudWxsID0gbnVsbDtcbiAgICBjb25zdCBwcmVmaXggPSBuYW1lLnN1YnN0cmluZygwLCA2KTtcbiAgICBjb25zdCBpc1N0eWxlID0gbmFtZSA9PT0gJ3N0eWxlJyB8fCBwcmVmaXggPT09ICdzdHlsZS4nIHx8IHByZWZpeCA9PT0gJ3N0eWxlISc7XG4gICAgY29uc3QgaXNDbGFzcyA9ICFpc1N0eWxlICYmIChuYW1lID09PSAnY2xhc3MnIHx8IHByZWZpeCA9PT0gJ2NsYXNzLicgfHwgcHJlZml4ID09PSAnY2xhc3MhJyk7XG4gICAgaWYgKGlzU3R5bGUgfHwgaXNDbGFzcykge1xuICAgICAgY29uc3QgaXNNYXBCYXNlZCA9IG5hbWUuY2hhckF0KDUpICE9PSAnLic7ICAgICAgICAgLy8gc3R5bGUucHJvcCBvciBjbGFzcy5wcm9wIG1ha2VzIHRoaXMgYSBub1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBuYW1lLnN1YnN0cihpc01hcEJhc2VkID8gNSA6IDYpOyAgLy8gdGhlIGRvdCBleHBsYWlucyB3aHkgdGhlcmUncyBhICsxXG4gICAgICBpZiAoaXNTdHlsZSkge1xuICAgICAgICBiaW5kaW5nID0gdGhpcy5yZWdpc3RlclN0eWxlSW5wdXQocHJvcGVydHksIGlzTWFwQmFzZWQsIGV4cHJlc3Npb24sIHNvdXJjZVNwYW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmluZGluZyA9IHRoaXMucmVnaXN0ZXJDbGFzc0lucHV0KHByb3BlcnR5LCBpc01hcEJhc2VkLCBleHByZXNzaW9uLCBzb3VyY2VTcGFuKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJpbmRpbmc7XG4gIH1cblxuICByZWdpc3RlclN0eWxlSW5wdXQoXG4gICAgICBuYW1lOiBzdHJpbmcsIGlzTWFwQmFzZWQ6IGJvb2xlYW4sIHZhbHVlOiBBU1QsIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICAgIHVuaXQ/OiBzdHJpbmd8bnVsbCk6IEJvdW5kU3R5bGluZ0VudHJ5fG51bGwge1xuICAgIGlmIChpc0VtcHR5RXhwcmVzc2lvbih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBuYW1lID0gbm9ybWFsaXplUHJvcE5hbWUobmFtZSk7XG4gICAgY29uc3Qge3Byb3BlcnR5LCBoYXNPdmVycmlkZUZsYWcsIHVuaXQ6IGJpbmRpbmdVbml0fSA9IHBhcnNlUHJvcGVydHkobmFtZSk7XG4gICAgY29uc3QgZW50cnk6IEJvdW5kU3R5bGluZ0VudHJ5ID0ge1xuICAgICAgbmFtZTogcHJvcGVydHksXG4gICAgICBzYW5pdGl6ZTogcHJvcGVydHkgPyBpc1N0eWxlU2FuaXRpemFibGUocHJvcGVydHkpIDogdHJ1ZSxcbiAgICAgIHVuaXQ6IHVuaXQgfHwgYmluZGluZ1VuaXQsXG4gICAgICB2YWx1ZSxcbiAgICAgIHNvdXJjZVNwYW4sXG4gICAgICBoYXNPdmVycmlkZUZsYWdcbiAgICB9O1xuICAgIGlmIChpc01hcEJhc2VkKSB7XG4gICAgICB0aGlzLl9zdHlsZU1hcElucHV0ID0gZW50cnk7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLl9zaW5nbGVTdHlsZUlucHV0cyA9IHRoaXMuX3NpbmdsZVN0eWxlSW5wdXRzIHx8IFtdKS5wdXNoKGVudHJ5KTtcbiAgICAgIHJlZ2lzdGVySW50b01hcCh0aGlzLl9zdHlsZXNJbmRleCwgcHJvcGVydHkpO1xuICAgIH1cbiAgICB0aGlzLl9sYXN0U3R5bGluZ0lucHV0ID0gZW50cnk7XG4gICAgdGhpcy5fZmlyc3RTdHlsaW5nSW5wdXQgPSB0aGlzLl9maXJzdFN0eWxpbmdJbnB1dCB8fCBlbnRyeTtcbiAgICB0aGlzLl9jaGVja0ZvclBpcGVzKHZhbHVlKTtcbiAgICB0aGlzLmhhc0JpbmRpbmdzID0gdHJ1ZTtcbiAgICByZXR1cm4gZW50cnk7XG4gIH1cblxuICByZWdpc3RlckNsYXNzSW5wdXQobmFtZTogc3RyaW5nLCBpc01hcEJhc2VkOiBib29sZWFuLCB2YWx1ZTogQVNULCBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pOlxuICAgICAgQm91bmRTdHlsaW5nRW50cnl8bnVsbCB7XG4gICAgaWYgKGlzRW1wdHlFeHByZXNzaW9uKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHtwcm9wZXJ0eSwgaGFzT3ZlcnJpZGVGbGFnfSA9IHBhcnNlUHJvcGVydHkobmFtZSk7XG4gICAgY29uc3QgZW50cnk6IEJvdW5kU3R5bGluZ0VudHJ5ID1cbiAgICAgICAge25hbWU6IHByb3BlcnR5LCB2YWx1ZSwgc291cmNlU3Bhbiwgc2FuaXRpemU6IGZhbHNlLCBoYXNPdmVycmlkZUZsYWcsIHVuaXQ6IG51bGx9O1xuICAgIGlmIChpc01hcEJhc2VkKSB7XG4gICAgICBpZiAodGhpcy5fY2xhc3NNYXBJbnB1dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnW2NsYXNzXSBhbmQgW2NsYXNzTmFtZV0gYmluZGluZ3MgY2Fubm90IGJlIHVzZWQgb24gdGhlIHNhbWUgZWxlbWVudCBzaW11bHRhbmVvdXNseScpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xhc3NNYXBJbnB1dCA9IGVudHJ5O1xuICAgIH0gZWxzZSB7XG4gICAgICAodGhpcy5fc2luZ2xlQ2xhc3NJbnB1dHMgPSB0aGlzLl9zaW5nbGVDbGFzc0lucHV0cyB8fCBbXSkucHVzaChlbnRyeSk7XG4gICAgICByZWdpc3RlckludG9NYXAodGhpcy5fY2xhc3Nlc0luZGV4LCBwcm9wZXJ0eSk7XG4gICAgfVxuICAgIHRoaXMuX2xhc3RTdHlsaW5nSW5wdXQgPSBlbnRyeTtcbiAgICB0aGlzLl9maXJzdFN0eWxpbmdJbnB1dCA9IHRoaXMuX2ZpcnN0U3R5bGluZ0lucHV0IHx8IGVudHJ5O1xuICAgIHRoaXMuX2NoZWNrRm9yUGlwZXModmFsdWUpO1xuICAgIHRoaXMuaGFzQmluZGluZ3MgPSB0cnVlO1xuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrRm9yUGlwZXModmFsdWU6IEFTVCkge1xuICAgIGlmICgodmFsdWUgaW5zdGFuY2VvZiBBU1RXaXRoU291cmNlKSAmJiAodmFsdWUuYXN0IGluc3RhbmNlb2YgQmluZGluZ1BpcGUpKSB7XG4gICAgICB0aGlzLmhhc0JpbmRpbmdzV2l0aFBpcGVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHRoZSBlbGVtZW50J3Mgc3RhdGljIHN0eWxlIHN0cmluZyB2YWx1ZSB0byB0aGUgYnVpbGRlci5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIHRoZSBzdHlsZSBzdHJpbmcgKGUuZy4gYHdpZHRoOjEwMHB4OyBoZWlnaHQ6MjAwcHg7YClcbiAgICovXG4gIHJlZ2lzdGVyU3R5bGVBdHRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbml0aWFsU3R5bGVWYWx1ZXMgPSBwYXJzZVN0eWxlKHZhbHVlKTtcbiAgICB0aGlzLl9oYXNJbml0aWFsVmFsdWVzID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdGhlIGVsZW1lbnQncyBzdGF0aWMgY2xhc3Mgc3RyaW5nIHZhbHVlIHRvIHRoZSBidWlsZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIGNsYXNzTmFtZSBzdHJpbmcgKGUuZy4gYGRpc2FibGVkIGdvbGQgem9vbWApXG4gICAqL1xuICByZWdpc3RlckNsYXNzQXR0cih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5pdGlhbENsYXNzVmFsdWVzID0gdmFsdWUudHJpbSgpLnNwbGl0KC9cXHMrL2cpO1xuICAgIHRoaXMuX2hhc0luaXRpYWxWYWx1ZXMgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYWxsIHN0eWxpbmctcmVsYXRlZCBleHByZXNzaW9ucyB0byB0aGUgcHJvdmlkZWQgYXR0cnMgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSBhdHRycyBhbiBleGlzdGluZyBhcnJheSB3aGVyZSBlYWNoIG9mIHRoZSBzdHlsaW5nIGV4cHJlc3Npb25zXG4gICAqIHdpbGwgYmUgaW5zZXJ0ZWQgaW50by5cbiAgICovXG4gIHBvcHVsYXRlSW5pdGlhbFN0eWxpbmdBdHRycyhhdHRyczogby5FeHByZXNzaW9uW10pOiB2b2lkIHtcbiAgICAvLyBbQ0xBU1NfTUFSS0VSLCAnZm9vJywgJ2JhcicsICdiYXonIC4uLl1cbiAgICBpZiAodGhpcy5faW5pdGlhbENsYXNzVmFsdWVzLmxlbmd0aCkge1xuICAgICAgYXR0cnMucHVzaChvLmxpdGVyYWwoQXR0cmlidXRlTWFya2VyLkNsYXNzZXMpKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5faW5pdGlhbENsYXNzVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGF0dHJzLnB1c2goby5saXRlcmFsKHRoaXMuX2luaXRpYWxDbGFzc1ZhbHVlc1tpXSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFtTVFlMRV9NQVJLRVIsICd3aWR0aCcsICcyMDBweCcsICdoZWlnaHQnLCAnMTAwcHgnLCAuLi5dXG4gICAgaWYgKHRoaXMuX2luaXRpYWxTdHlsZVZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGF0dHJzLnB1c2goby5saXRlcmFsKEF0dHJpYnV0ZU1hcmtlci5TdHlsZXMpKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5faW5pdGlhbFN0eWxlVmFsdWVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIGF0dHJzLnB1c2goXG4gICAgICAgICAgICBvLmxpdGVyYWwodGhpcy5faW5pdGlhbFN0eWxlVmFsdWVzW2ldKSwgby5saXRlcmFsKHRoaXMuX2luaXRpYWxTdHlsZVZhbHVlc1tpICsgMV0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGFuIGluc3RydWN0aW9uIHdpdGggYWxsIHRoZSBleHByZXNzaW9ucyBhbmQgcGFyYW1ldGVycyBmb3IgYGVsZW1lbnRIb3N0QXR0cnNgLlxuICAgKlxuICAgKiBUaGUgaW5zdHJ1Y3Rpb24gZ2VuZXJhdGlvbiBjb2RlIGJlbG93IGlzIHVzZWQgZm9yIHByb2R1Y2luZyB0aGUgQU9UIHN0YXRlbWVudCBjb2RlIHdoaWNoIGlzXG4gICAqIHJlc3BvbnNpYmxlIGZvciByZWdpc3RlcmluZyBpbml0aWFsIHN0eWxlcyAod2l0aGluIGEgZGlyZWN0aXZlIGhvc3RCaW5kaW5ncycgY3JlYXRpb24gYmxvY2spLFxuICAgKiBhcyB3ZWxsIGFzIGFueSBvZiB0aGUgcHJvdmlkZWQgYXR0cmlidXRlIHZhbHVlcywgdG8gdGhlIGRpcmVjdGl2ZSBob3N0IGVsZW1lbnQuXG4gICAqL1xuICBhc3NpZ25Ib3N0QXR0cnMoYXR0cnM6IG8uRXhwcmVzc2lvbltdLCBkZWZpbml0aW9uTWFwOiBEZWZpbml0aW9uTWFwKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RpcmVjdGl2ZUV4cHIgJiYgKGF0dHJzLmxlbmd0aCB8fCB0aGlzLl9oYXNJbml0aWFsVmFsdWVzKSkge1xuICAgICAgdGhpcy5wb3B1bGF0ZUluaXRpYWxTdHlsaW5nQXR0cnMoYXR0cnMpO1xuICAgICAgZGVmaW5pdGlvbk1hcC5zZXQoJ2hvc3RBdHRycycsIG8ubGl0ZXJhbEFycihhdHRycykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgYW4gaW5zdHJ1Y3Rpb24gd2l0aCBhbGwgdGhlIGV4cHJlc3Npb25zIGFuZCBwYXJhbWV0ZXJzIGZvciBgY2xhc3NNYXBgLlxuICAgKlxuICAgKiBUaGUgaW5zdHJ1Y3Rpb24gZGF0YSB3aWxsIGNvbnRhaW4gYWxsIGV4cHJlc3Npb25zIGZvciBgY2xhc3NNYXBgIHRvIGZ1bmN0aW9uXG4gICAqIHdoaWNoIGluY2x1ZGVzIHRoZSBgW2NsYXNzXWAgZXhwcmVzc2lvbiBwYXJhbXMuXG4gICAqL1xuICBidWlsZENsYXNzTWFwSW5zdHJ1Y3Rpb24odmFsdWVDb252ZXJ0ZXI6IFZhbHVlQ29udmVydGVyKTogU3R5bGluZ0luc3RydWN0aW9ufG51bGwge1xuICAgIGlmICh0aGlzLl9jbGFzc01hcElucHV0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fYnVpbGRNYXBCYXNlZEluc3RydWN0aW9uKHZhbHVlQ29udmVydGVyLCB0cnVlLCB0aGlzLl9jbGFzc01hcElucHV0KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGFuIGluc3RydWN0aW9uIHdpdGggYWxsIHRoZSBleHByZXNzaW9ucyBhbmQgcGFyYW1ldGVycyBmb3IgYHN0eWxlTWFwYC5cbiAgICpcbiAgICogVGhlIGluc3RydWN0aW9uIGRhdGEgd2lsbCBjb250YWluIGFsbCBleHByZXNzaW9ucyBmb3IgYHN0eWxlTWFwYCB0byBmdW5jdGlvblxuICAgKiB3aGljaCBpbmNsdWRlcyB0aGUgYFtzdHlsZV1gIGV4cHJlc3Npb24gcGFyYW1zLlxuICAgKi9cbiAgYnVpbGRTdHlsZU1hcEluc3RydWN0aW9uKHZhbHVlQ29udmVydGVyOiBWYWx1ZUNvbnZlcnRlcik6IFN0eWxpbmdJbnN0cnVjdGlvbnxudWxsIHtcbiAgICBpZiAodGhpcy5fc3R5bGVNYXBJbnB1dCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2J1aWxkTWFwQmFzZWRJbnN0cnVjdGlvbih2YWx1ZUNvbnZlcnRlciwgZmFsc2UsIHRoaXMuX3N0eWxlTWFwSW5wdXQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkTWFwQmFzZWRJbnN0cnVjdGlvbihcbiAgICAgIHZhbHVlQ29udmVydGVyOiBWYWx1ZUNvbnZlcnRlciwgaXNDbGFzc0Jhc2VkOiBib29sZWFuLFxuICAgICAgc3R5bGluZ0lucHV0OiBCb3VuZFN0eWxpbmdFbnRyeSk6IFN0eWxpbmdJbnN0cnVjdGlvbiB7XG4gICAgLy8gZWFjaCBzdHlsaW5nIGJpbmRpbmcgdmFsdWUgaXMgc3RvcmVkIGluIHRoZSBMVmlld1xuICAgIC8vIG1hcC1iYXNlZCBiaW5kaW5ncyBhbGxvY2F0ZSB0d28gc2xvdHM6IG9uZSBmb3IgdGhlXG4gICAgLy8gcHJldmlvdXMgYmluZGluZyB2YWx1ZSBhbmQgYW5vdGhlciBmb3IgdGhlIHByZXZpb3VzXG4gICAgLy8gY2xhc3NOYW1lIG9yIHN0eWxlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICBsZXQgdG90YWxCaW5kaW5nU2xvdHNSZXF1aXJlZCA9IE1JTl9TVFlMSU5HX0JJTkRJTkdfU0xPVFNfUkVRVUlSRUQ7XG5cbiAgICAvLyB0aGVzZSB2YWx1ZXMgbXVzdCBiZSBvdXRzaWRlIG9mIHRoZSB1cGRhdGUgYmxvY2sgc28gdGhhdCB0aGV5IGNhblxuICAgIC8vIGJlIGV2YWx1YXRlZCAodGhlIEFTVCB2aXNpdCBjYWxsKSBkdXJpbmcgY3JlYXRpb24gdGltZSBzbyB0aGF0IGFueVxuICAgIC8vIHBpcGVzIGNhbiBiZSBwaWNrZWQgdXAgaW4gdGltZSBiZWZvcmUgdGhlIHRlbXBsYXRlIGlzIGJ1aWx0XG4gICAgY29uc3QgbWFwVmFsdWUgPSBzdHlsaW5nSW5wdXQudmFsdWUudmlzaXQodmFsdWVDb252ZXJ0ZXIpO1xuICAgIGxldCByZWZlcmVuY2U6IG8uRXh0ZXJuYWxSZWZlcmVuY2U7XG4gICAgaWYgKG1hcFZhbHVlIGluc3RhbmNlb2YgSW50ZXJwb2xhdGlvbikge1xuICAgICAgdG90YWxCaW5kaW5nU2xvdHNSZXF1aXJlZCArPSBtYXBWYWx1ZS5leHByZXNzaW9ucy5sZW5ndGg7XG4gICAgICByZWZlcmVuY2UgPSBpc0NsYXNzQmFzZWQgPyBnZXRDbGFzc01hcEludGVycG9sYXRpb25FeHByZXNzaW9uKG1hcFZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTdHlsZU1hcEludGVycG9sYXRpb25FeHByZXNzaW9uKG1hcFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVmZXJlbmNlID0gaXNDbGFzc0Jhc2VkID8gUjMuY2xhc3NNYXAgOiBSMy5zdHlsZU1hcDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVmZXJlbmNlLFxuICAgICAgY2FsbHM6IFt7XG4gICAgICAgIHN1cHBvcnRzSW50ZXJwb2xhdGlvbjogdHJ1ZSxcbiAgICAgICAgc291cmNlU3Bhbjogc3R5bGluZ0lucHV0LnNvdXJjZVNwYW4sXG4gICAgICAgIGFsbG9jYXRlQmluZGluZ1Nsb3RzOiB0b3RhbEJpbmRpbmdTbG90c1JlcXVpcmVkLFxuICAgICAgICBwYXJhbXM6IChjb252ZXJ0Rm46ICh2YWx1ZTogYW55KSA9PiBvLkV4cHJlc3Npb258by5FeHByZXNzaW9uW10pID0+IHtcbiAgICAgICAgICBjb25zdCBjb252ZXJ0UmVzdWx0ID0gY29udmVydEZuKG1hcFZhbHVlKTtcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSBBcnJheS5pc0FycmF5KGNvbnZlcnRSZXN1bHQpID8gY29udmVydFJlc3VsdCA6IFtjb252ZXJ0UmVzdWx0XTtcbiAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgICB9XVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9idWlsZFNpbmdsZUlucHV0cyhcbiAgICAgIHJlZmVyZW5jZTogby5FeHRlcm5hbFJlZmVyZW5jZSwgaW5wdXRzOiBCb3VuZFN0eWxpbmdFbnRyeVtdLCB2YWx1ZUNvbnZlcnRlcjogVmFsdWVDb252ZXJ0ZXIsXG4gICAgICBnZXRJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbkZuOiAoKHZhbHVlOiBJbnRlcnBvbGF0aW9uKSA9PiBvLkV4dGVybmFsUmVmZXJlbmNlKXxudWxsLFxuICAgICAgaXNDbGFzc0Jhc2VkOiBib29sZWFuKTogU3R5bGluZ0luc3RydWN0aW9uW10ge1xuICAgIGNvbnN0IGluc3RydWN0aW9uczogU3R5bGluZ0luc3RydWN0aW9uW10gPSBbXTtcblxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIGNvbnN0IHByZXZpb3VzSW5zdHJ1Y3Rpb246IFN0eWxpbmdJbnN0cnVjdGlvbnx1bmRlZmluZWQgPVxuICAgICAgICAgIGluc3RydWN0aW9uc1tpbnN0cnVjdGlvbnMubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnZpc2l0KHZhbHVlQ29udmVydGVyKTtcbiAgICAgIGxldCByZWZlcmVuY2VGb3JDYWxsID0gcmVmZXJlbmNlO1xuXG4gICAgICAvLyBlYWNoIHN0eWxpbmcgYmluZGluZyB2YWx1ZSBpcyBzdG9yZWQgaW4gdGhlIExWaWV3XG4gICAgICAvLyBidXQgdGhlcmUgYXJlIHR3byB2YWx1ZXMgc3RvcmVkIGZvciBlYWNoIGJpbmRpbmc6XG4gICAgICAvLyAgIDEpIHRoZSB2YWx1ZSBpdHNlbGZcbiAgICAgIC8vICAgMikgYW4gaW50ZXJtZWRpYXRlIHZhbHVlIChjb25jYXRlbmF0aW9uIG9mIHN0eWxlIHVwIHRvIHRoaXMgcG9pbnQpLlxuICAgICAgLy8gICAgICBXZSBuZWVkIHRvIHN0b3JlIHRoZSBpbnRlcm1lZGlhdGUgdmFsdWUgc28gdGhhdCB3ZSBkb24ndCBhbGxvY2F0ZVxuICAgICAgLy8gICAgICB0aGUgc3RyaW5ncyBvbiBlYWNoIENELlxuICAgICAgbGV0IHRvdGFsQmluZGluZ1Nsb3RzUmVxdWlyZWQgPSBNSU5fU1RZTElOR19CSU5ESU5HX1NMT1RTX1JFUVVJUkVEO1xuXG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgIHRvdGFsQmluZGluZ1Nsb3RzUmVxdWlyZWQgKz0gdmFsdWUuZXhwcmVzc2lvbnMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChnZXRJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbkZuKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRm9yQ2FsbCA9IGdldEludGVycG9sYXRpb25FeHByZXNzaW9uRm4odmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbGwgPSB7XG4gICAgICAgIHNvdXJjZVNwYW46IGlucHV0LnNvdXJjZVNwYW4sXG4gICAgICAgIGFsbG9jYXRlQmluZGluZ1Nsb3RzOiB0b3RhbEJpbmRpbmdTbG90c1JlcXVpcmVkLFxuICAgICAgICBzdXBwb3J0c0ludGVycG9sYXRpb246ICEhZ2V0SW50ZXJwb2xhdGlvbkV4cHJlc3Npb25GbixcbiAgICAgICAgcGFyYW1zOiAoY29udmVydEZuOiAodmFsdWU6IGFueSkgPT4gby5FeHByZXNzaW9uIHwgby5FeHByZXNzaW9uW10pID0+IHtcbiAgICAgICAgICAvLyBwYXJhbXMgPT4gc3R5bGluZ1Byb3AocHJvcE5hbWUsIHZhbHVlLCBzdWZmaXh8c2FuaXRpemVyKVxuICAgICAgICAgIGNvbnN0IHBhcmFtczogby5FeHByZXNzaW9uW10gPSBbXTtcbiAgICAgICAgICBwYXJhbXMucHVzaChvLmxpdGVyYWwoaW5wdXQubmFtZSkpO1xuXG4gICAgICAgICAgY29uc3QgY29udmVydFJlc3VsdCA9IGNvbnZlcnRGbih2YWx1ZSk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29udmVydFJlc3VsdCkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKC4uLmNvbnZlcnRSZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbXMucHVzaChjb252ZXJ0UmVzdWx0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBbc3R5bGUucHJvcF0gYmluZGluZ3MgbWF5IHVzZSBzdWZmaXggdmFsdWVzIChlLmcuIHB4LCBlbSwgZXRjLi4uKSBhbmQgdGhleVxuICAgICAgICAgIC8vIGNhbiBhbHNvIHVzZSBhIHNhbml0aXplci4gU2FuaXRpemF0aW9uIG9jY3VycyBmb3IgdXJsLWJhc2VkIGVudHJpZXMuIEhhdmluZ1xuICAgICAgICAgIC8vIHRoZSBzdWZmaXggdmFsdWUgYW5kIGEgc2FuaXRpemVyIHRvZ2V0aGVyIGludG8gdGhlIGluc3RydWN0aW9uIGRvZXNuJ3QgbWFrZVxuICAgICAgICAgIC8vIGFueSBzZW5zZSAodXJsLWJhc2VkIGVudHJpZXMgY2Fubm90IGJlIHNhbml0aXplZCkuXG4gICAgICAgICAgaWYgKCFpc0NsYXNzQmFzZWQpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC51bml0KSB7XG4gICAgICAgICAgICAgIHBhcmFtcy5wdXNoKG8ubGl0ZXJhbChpbnB1dC51bml0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnNhbml0aXplKSB7XG4gICAgICAgICAgICAgIHBhcmFtcy5wdXNoKG8uaW1wb3J0RXhwcihSMy5kZWZhdWx0U3R5bGVTYW5pdGl6ZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBJZiB3ZSBlbmRlZCB1cCBnZW5lcmF0aW5nIGEgY2FsbCB0byB0aGUgc2FtZSBpbnN0cnVjdGlvbiBhcyB0aGUgcHJldmlvdXMgc3R5bGluZyBwcm9wZXJ0eVxuICAgICAgLy8gd2UgY2FuIGNoYWluIHRoZSBjYWxscyB0b2dldGhlciBzYWZlbHkgdG8gc2F2ZSBzb21lIGJ5dGVzLCBvdGhlcndpc2Ugd2UgaGF2ZSB0byBnZW5lcmF0ZVxuICAgICAgLy8gYSBzZXBhcmF0ZSBpbnN0cnVjdGlvbiBjYWxsLiBUaGlzIGlzIHByaW1hcmlseSBhIGNvbmNlcm4gd2l0aCBpbnRlcnBvbGF0aW9uIGluc3RydWN0aW9uc1xuICAgICAgLy8gd2hlcmUgd2UgbWF5IHN0YXJ0IG9mZiB3aXRoIG9uZSBgcmVmZXJlbmNlYCwgYnV0IGVuZCB1cCB1c2luZyBhbm90aGVyIGJhc2VkIG9uIHRoZVxuICAgICAgLy8gbnVtYmVyIG9mIGludGVycG9sYXRpb25zLlxuICAgICAgaWYgKHByZXZpb3VzSW5zdHJ1Y3Rpb24gJiYgcHJldmlvdXNJbnN0cnVjdGlvbi5yZWZlcmVuY2UgPT09IHJlZmVyZW5jZUZvckNhbGwpIHtcbiAgICAgICAgcHJldmlvdXNJbnN0cnVjdGlvbi5jYWxscy5wdXNoKGNhbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdHJ1Y3Rpb25zLnB1c2goe3JlZmVyZW5jZTogcmVmZXJlbmNlRm9yQ2FsbCwgY2FsbHM6IFtjYWxsXX0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluc3RydWN0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkQ2xhc3NJbnB1dHModmFsdWVDb252ZXJ0ZXI6IFZhbHVlQ29udmVydGVyKTogU3R5bGluZ0luc3RydWN0aW9uW10ge1xuICAgIGlmICh0aGlzLl9zaW5nbGVDbGFzc0lucHV0cykge1xuICAgICAgcmV0dXJuIHRoaXMuX2J1aWxkU2luZ2xlSW5wdXRzKFxuICAgICAgICAgIFIzLmNsYXNzUHJvcCwgdGhpcy5fc2luZ2xlQ2xhc3NJbnB1dHMsIHZhbHVlQ29udmVydGVyLCBudWxsLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRTdHlsZUlucHV0cyh2YWx1ZUNvbnZlcnRlcjogVmFsdWVDb252ZXJ0ZXIpOiBTdHlsaW5nSW5zdHJ1Y3Rpb25bXSB7XG4gICAgaWYgKHRoaXMuX3NpbmdsZVN0eWxlSW5wdXRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYnVpbGRTaW5nbGVJbnB1dHMoXG4gICAgICAgICAgUjMuc3R5bGVQcm9wLCB0aGlzLl9zaW5nbGVTdHlsZUlucHV0cywgdmFsdWVDb252ZXJ0ZXIsXG4gICAgICAgICAgZ2V0U3R5bGVQcm9wSW50ZXJwb2xhdGlvbkV4cHJlc3Npb24sIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYWxsIGluc3RydWN0aW9ucyB3aGljaCBjb250YWluIHRoZSBleHByZXNzaW9ucyB0aGF0IHdpbGwgYmUgcGxhY2VkXG4gICAqIGludG8gdGhlIHVwZGF0ZSBibG9jayBvZiBhIHRlbXBsYXRlIGZ1bmN0aW9uIG9yIGEgZGlyZWN0aXZlIGhvc3RCaW5kaW5ncyBmdW5jdGlvbi5cbiAgICovXG4gIGJ1aWxkVXBkYXRlTGV2ZWxJbnN0cnVjdGlvbnModmFsdWVDb252ZXJ0ZXI6IFZhbHVlQ29udmVydGVyKSB7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zOiBTdHlsaW5nSW5zdHJ1Y3Rpb25bXSA9IFtdO1xuICAgIGlmICh0aGlzLmhhc0JpbmRpbmdzKSB7XG4gICAgICBjb25zdCBzdHlsZU1hcEluc3RydWN0aW9uID0gdGhpcy5idWlsZFN0eWxlTWFwSW5zdHJ1Y3Rpb24odmFsdWVDb252ZXJ0ZXIpO1xuICAgICAgaWYgKHN0eWxlTWFwSW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgaW5zdHJ1Y3Rpb25zLnB1c2goc3R5bGVNYXBJbnN0cnVjdGlvbik7XG4gICAgICB9XG4gICAgICBjb25zdCBjbGFzc01hcEluc3RydWN0aW9uID0gdGhpcy5idWlsZENsYXNzTWFwSW5zdHJ1Y3Rpb24odmFsdWVDb252ZXJ0ZXIpO1xuICAgICAgaWYgKGNsYXNzTWFwSW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgaW5zdHJ1Y3Rpb25zLnB1c2goY2xhc3NNYXBJbnN0cnVjdGlvbik7XG4gICAgICB9XG4gICAgICBpbnN0cnVjdGlvbnMucHVzaCguLi50aGlzLl9idWlsZFN0eWxlSW5wdXRzKHZhbHVlQ29udmVydGVyKSk7XG4gICAgICBpbnN0cnVjdGlvbnMucHVzaCguLi50aGlzLl9idWlsZENsYXNzSW5wdXRzKHZhbHVlQ29udmVydGVyKSk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0cnVjdGlvbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJJbnRvTWFwKG1hcDogTWFwPHN0cmluZywgbnVtYmVyPiwga2V5OiBzdHJpbmcpIHtcbiAgaWYgKCFtYXAuaGFzKGtleSkpIHtcbiAgICBtYXAuc2V0KGtleSwgbWFwLnNpemUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU3R5bGVTYW5pdGl6YWJsZShwcm9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gTm90ZSB0aGF0IGJyb3dzZXJzIHN1cHBvcnQgYm90aCB0aGUgZGFzaCBjYXNlIGFuZFxuICAvLyBjYW1lbCBjYXNlIHByb3BlcnR5IG5hbWVzIHdoZW4gc2V0dGluZyB0aHJvdWdoIEpTLlxuICByZXR1cm4gcHJvcCA9PT0gJ2JhY2tncm91bmQtaW1hZ2UnIHx8IHByb3AgPT09ICdiYWNrZ3JvdW5kSW1hZ2UnIHx8IHByb3AgPT09ICdiYWNrZ3JvdW5kJyB8fFxuICAgICAgcHJvcCA9PT0gJ2JvcmRlci1pbWFnZScgfHwgcHJvcCA9PT0gJ2JvcmRlckltYWdlJyB8fCBwcm9wID09PSAnYm9yZGVyLWltYWdlLXNvdXJjZScgfHxcbiAgICAgIHByb3AgPT09ICdib3JkZXJJbWFnZVNvdXJjZScgfHwgcHJvcCA9PT0gJ2ZpbHRlcicgfHwgcHJvcCA9PT0gJ2xpc3Qtc3R5bGUnIHx8XG4gICAgICBwcm9wID09PSAnbGlzdFN0eWxlJyB8fCBwcm9wID09PSAnbGlzdC1zdHlsZS1pbWFnZScgfHwgcHJvcCA9PT0gJ2xpc3RTdHlsZUltYWdlJyB8fFxuICAgICAgcHJvcCA9PT0gJ2NsaXAtcGF0aCcgfHwgcHJvcCA9PT0gJ2NsaXBQYXRoJztcbn1cblxuLyoqXG4gKiBTaW1wbGUgaGVscGVyIGZ1bmN0aW9uIHRvIGVpdGhlciBwcm92aWRlIHRoZSBjb25zdGFudCBsaXRlcmFsIHRoYXQgd2lsbCBob3VzZSB0aGUgdmFsdWVcbiAqIGhlcmUgb3IgYSBudWxsIHZhbHVlIGlmIHRoZSBwcm92aWRlZCB2YWx1ZXMgYXJlIGVtcHR5LlxuICovXG5mdW5jdGlvbiBnZXRDb25zdGFudExpdGVyYWxGcm9tQXJyYXkoXG4gICAgY29uc3RhbnRQb29sOiBDb25zdGFudFBvb2wsIHZhbHVlczogby5FeHByZXNzaW9uW10pOiBvLkV4cHJlc3Npb24ge1xuICByZXR1cm4gdmFsdWVzLmxlbmd0aCA/IGNvbnN0YW50UG9vbC5nZXRDb25zdExpdGVyYWwoby5saXRlcmFsQXJyKHZhbHVlcyksIHRydWUpIDogby5OVUxMX0VYUFI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByb3BlcnR5KG5hbWU6IHN0cmluZyk6XG4gICAge3Byb3BlcnR5OiBzdHJpbmcsIHVuaXQ6IHN0cmluZywgaGFzT3ZlcnJpZGVGbGFnOiBib29sZWFufSB7XG4gIGxldCBoYXNPdmVycmlkZUZsYWcgPSBmYWxzZTtcbiAgY29uc3Qgb3ZlcnJpZGVJbmRleCA9IG5hbWUuaW5kZXhPZihJTVBPUlRBTlRfRkxBRyk7XG4gIGlmIChvdmVycmlkZUluZGV4ICE9PSAtMSkge1xuICAgIG5hbWUgPSBvdmVycmlkZUluZGV4ID4gMCA/IG5hbWUuc3Vic3RyaW5nKDAsIG92ZXJyaWRlSW5kZXgpIDogJyc7XG4gICAgaGFzT3ZlcnJpZGVGbGFnID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCB1bml0ID0gJyc7XG4gIGxldCBwcm9wZXJ0eSA9IG5hbWU7XG4gIGNvbnN0IHVuaXRJbmRleCA9IG5hbWUubGFzdEluZGV4T2YoJy4nKTtcbiAgaWYgKHVuaXRJbmRleCA+IDApIHtcbiAgICB1bml0ID0gbmFtZS5zdWJzdHIodW5pdEluZGV4ICsgMSk7XG4gICAgcHJvcGVydHkgPSBuYW1lLnN1YnN0cmluZygwLCB1bml0SW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtwcm9wZXJ0eSwgdW5pdCwgaGFzT3ZlcnJpZGVGbGFnfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbnN0cnVjdGlvbiB0byBnZW5lcmF0ZSBmb3IgYW4gaW50ZXJwb2xhdGVkIGNsYXNzIG1hcC5cbiAqIEBwYXJhbSBpbnRlcnBvbGF0aW9uIEFuIEludGVycG9sYXRpb24gQVNUXG4gKi9cbmZ1bmN0aW9uIGdldENsYXNzTWFwSW50ZXJwb2xhdGlvbkV4cHJlc3Npb24oaW50ZXJwb2xhdGlvbjogSW50ZXJwb2xhdGlvbik6IG8uRXh0ZXJuYWxSZWZlcmVuY2Uge1xuICBzd2l0Y2ggKGdldEludGVycG9sYXRpb25BcmdzTGVuZ3RoKGludGVycG9sYXRpb24pKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFIzLmNsYXNzTWFwO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBSMy5jbGFzc01hcEludGVycG9sYXRlMTtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gUjMuY2xhc3NNYXBJbnRlcnBvbGF0ZTI7XG4gICAgY2FzZSA3OlxuICAgICAgcmV0dXJuIFIzLmNsYXNzTWFwSW50ZXJwb2xhdGUzO1xuICAgIGNhc2UgOTpcbiAgICAgIHJldHVybiBSMy5jbGFzc01hcEludGVycG9sYXRlNDtcbiAgICBjYXNlIDExOlxuICAgICAgcmV0dXJuIFIzLmNsYXNzTWFwSW50ZXJwb2xhdGU1O1xuICAgIGNhc2UgMTM6XG4gICAgICByZXR1cm4gUjMuY2xhc3NNYXBJbnRlcnBvbGF0ZTY7XG4gICAgY2FzZSAxNTpcbiAgICAgIHJldHVybiBSMy5jbGFzc01hcEludGVycG9sYXRlNztcbiAgICBjYXNlIDE3OlxuICAgICAgcmV0dXJuIFIzLmNsYXNzTWFwSW50ZXJwb2xhdGU4O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gUjMuY2xhc3NNYXBJbnRlcnBvbGF0ZVY7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbnN0cnVjdGlvbiB0byBnZW5lcmF0ZSBmb3IgYW4gaW50ZXJwb2xhdGVkIHN0eWxlIG1hcC5cbiAqIEBwYXJhbSBpbnRlcnBvbGF0aW9uIEFuIEludGVycG9sYXRpb24gQVNUXG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlTWFwSW50ZXJwb2xhdGlvbkV4cHJlc3Npb24oaW50ZXJwb2xhdGlvbjogSW50ZXJwb2xhdGlvbik6IG8uRXh0ZXJuYWxSZWZlcmVuY2Uge1xuICBzd2l0Y2ggKGdldEludGVycG9sYXRpb25BcmdzTGVuZ3RoKGludGVycG9sYXRpb24pKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFIzLnN0eWxlTWFwO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBSMy5zdHlsZU1hcEludGVycG9sYXRlMTtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gUjMuc3R5bGVNYXBJbnRlcnBvbGF0ZTI7XG4gICAgY2FzZSA3OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlTWFwSW50ZXJwb2xhdGUzO1xuICAgIGNhc2UgOTpcbiAgICAgIHJldHVybiBSMy5zdHlsZU1hcEludGVycG9sYXRlNDtcbiAgICBjYXNlIDExOlxuICAgICAgcmV0dXJuIFIzLnN0eWxlTWFwSW50ZXJwb2xhdGU1O1xuICAgIGNhc2UgMTM6XG4gICAgICByZXR1cm4gUjMuc3R5bGVNYXBJbnRlcnBvbGF0ZTY7XG4gICAgY2FzZSAxNTpcbiAgICAgIHJldHVybiBSMy5zdHlsZU1hcEludGVycG9sYXRlNztcbiAgICBjYXNlIDE3OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlTWFwSW50ZXJwb2xhdGU4O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gUjMuc3R5bGVNYXBJbnRlcnBvbGF0ZVY7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbnN0cnVjdGlvbiB0byBnZW5lcmF0ZSBmb3IgYW4gaW50ZXJwb2xhdGVkIHN0eWxlIHByb3AuXG4gKiBAcGFyYW0gaW50ZXJwb2xhdGlvbiBBbiBJbnRlcnBvbGF0aW9uIEFTVFxuICovXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbihpbnRlcnBvbGF0aW9uOiBJbnRlcnBvbGF0aW9uKSB7XG4gIHN3aXRjaCAoZ2V0SW50ZXJwb2xhdGlvbkFyZ3NMZW5ndGgoaW50ZXJwb2xhdGlvbikpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gUjMuc3R5bGVQcm9wO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBSMy5zdHlsZVByb3BJbnRlcnBvbGF0ZTE7XG4gICAgY2FzZSA1OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlUHJvcEludGVycG9sYXRlMjtcbiAgICBjYXNlIDc6XG4gICAgICByZXR1cm4gUjMuc3R5bGVQcm9wSW50ZXJwb2xhdGUzO1xuICAgIGNhc2UgOTpcbiAgICAgIHJldHVybiBSMy5zdHlsZVByb3BJbnRlcnBvbGF0ZTQ7XG4gICAgY2FzZSAxMTpcbiAgICAgIHJldHVybiBSMy5zdHlsZVByb3BJbnRlcnBvbGF0ZTU7XG4gICAgY2FzZSAxMzpcbiAgICAgIHJldHVybiBSMy5zdHlsZVByb3BJbnRlcnBvbGF0ZTY7XG4gICAgY2FzZSAxNTpcbiAgICAgIHJldHVybiBSMy5zdHlsZVByb3BJbnRlcnBvbGF0ZTc7XG4gICAgY2FzZSAxNzpcbiAgICAgIHJldHVybiBSMy5zdHlsZVByb3BJbnRlcnBvbGF0ZTg7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBSMy5zdHlsZVByb3BJbnRlcnBvbGF0ZVY7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcE5hbWUocHJvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGh5cGhlbmF0ZShwcm9wKTtcbn1cbiJdfQ==