(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/render3/view/styling_builder", ["require", "exports", "tslib", "@angular/compiler/src/expression_parser/ast", "@angular/compiler/src/output/output_ast", "@angular/compiler/src/template_parser/template_parser", "@angular/compiler/src/render3/r3_identifiers", "@angular/compiler/src/render3/view/style_parser", "@angular/compiler/src/render3/view/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ast_1 = require("@angular/compiler/src/expression_parser/ast");
    var o = require("@angular/compiler/src/output/output_ast");
    var template_parser_1 = require("@angular/compiler/src/template_parser/template_parser");
    var r3_identifiers_1 = require("@angular/compiler/src/render3/r3_identifiers");
    var style_parser_1 = require("@angular/compiler/src/render3/view/style_parser");
    var util_1 = require("@angular/compiler/src/render3/view/util");
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
    exports.MIN_STYLING_BINDING_SLOTS_REQUIRED = 2;
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
            if (template_parser_1.isEmptyExpression(value)) {
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
            if (template_parser_1.isEmptyExpression(value)) {
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
            if ((value instanceof ast_1.ASTWithSource) && (value.ast instanceof ast_1.BindingPipe)) {
                this.hasBindingsWithPipes = true;
            }
        };
        /**
         * Registers the element's static style string value to the builder.
         *
         * @param value the style string (e.g. `width:100px; height:200px;`)
         */
        StylingBuilder.prototype.registerStyleAttr = function (value) {
            this._initialStyleValues = style_parser_1.parse(value);
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
            var totalBindingSlotsRequired = exports.MIN_STYLING_BINDING_SLOTS_REQUIRED;
            // these values must be outside of the update block so that they can
            // be evaluated (the AST visit call) during creation time so that any
            // pipes can be picked up in time before the template is built
            var mapValue = stylingInput.value.visit(valueConverter);
            var reference;
            if (mapValue instanceof ast_1.Interpolation) {
                totalBindingSlotsRequired += mapValue.expressions.length;
                reference = isClassBased ? getClassMapInterpolationExpression(mapValue) :
                    getStyleMapInterpolationExpression(mapValue);
            }
            else {
                reference = isClassBased ? r3_identifiers_1.Identifiers.classMap : r3_identifiers_1.Identifiers.styleMap;
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
                var totalBindingSlotsRequired = exports.MIN_STYLING_BINDING_SLOTS_REQUIRED;
                if (value instanceof ast_1.Interpolation) {
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
                            params.push.apply(params, tslib_1.__spread(convertResult));
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
                                params.push(o.importExpr(r3_identifiers_1.Identifiers.defaultStyleSanitizer));
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
                return this._buildSingleInputs(r3_identifiers_1.Identifiers.classProp, this._singleClassInputs, valueConverter, null, true);
            }
            return [];
        };
        StylingBuilder.prototype._buildStyleInputs = function (valueConverter) {
            if (this._singleStyleInputs) {
                return this._buildSingleInputs(r3_identifiers_1.Identifiers.styleProp, this._singleStyleInputs, valueConverter, getStylePropInterpolationExpression, false);
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
                instructions.push.apply(instructions, tslib_1.__spread(this._buildStyleInputs(valueConverter)));
                instructions.push.apply(instructions, tslib_1.__spread(this._buildClassInputs(valueConverter)));
            }
            return instructions;
        };
        return StylingBuilder;
    }());
    exports.StylingBuilder = StylingBuilder;
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
    function parseProperty(name) {
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
    exports.parseProperty = parseProperty;
    /**
     * Gets the instruction to generate for an interpolated class map.
     * @param interpolation An Interpolation AST
     */
    function getClassMapInterpolationExpression(interpolation) {
        switch (util_1.getInterpolationArgsLength(interpolation)) {
            case 1:
                return r3_identifiers_1.Identifiers.classMap;
            case 3:
                return r3_identifiers_1.Identifiers.classMapInterpolate1;
            case 5:
                return r3_identifiers_1.Identifiers.classMapInterpolate2;
            case 7:
                return r3_identifiers_1.Identifiers.classMapInterpolate3;
            case 9:
                return r3_identifiers_1.Identifiers.classMapInterpolate4;
            case 11:
                return r3_identifiers_1.Identifiers.classMapInterpolate5;
            case 13:
                return r3_identifiers_1.Identifiers.classMapInterpolate6;
            case 15:
                return r3_identifiers_1.Identifiers.classMapInterpolate7;
            case 17:
                return r3_identifiers_1.Identifiers.classMapInterpolate8;
            default:
                return r3_identifiers_1.Identifiers.classMapInterpolateV;
        }
    }
    /**
     * Gets the instruction to generate for an interpolated style map.
     * @param interpolation An Interpolation AST
     */
    function getStyleMapInterpolationExpression(interpolation) {
        switch (util_1.getInterpolationArgsLength(interpolation)) {
            case 1:
                return r3_identifiers_1.Identifiers.styleMap;
            case 3:
                return r3_identifiers_1.Identifiers.styleMapInterpolate1;
            case 5:
                return r3_identifiers_1.Identifiers.styleMapInterpolate2;
            case 7:
                return r3_identifiers_1.Identifiers.styleMapInterpolate3;
            case 9:
                return r3_identifiers_1.Identifiers.styleMapInterpolate4;
            case 11:
                return r3_identifiers_1.Identifiers.styleMapInterpolate5;
            case 13:
                return r3_identifiers_1.Identifiers.styleMapInterpolate6;
            case 15:
                return r3_identifiers_1.Identifiers.styleMapInterpolate7;
            case 17:
                return r3_identifiers_1.Identifiers.styleMapInterpolate8;
            default:
                return r3_identifiers_1.Identifiers.styleMapInterpolateV;
        }
    }
    /**
     * Gets the instruction to generate for an interpolated style prop.
     * @param interpolation An Interpolation AST
     */
    function getStylePropInterpolationExpression(interpolation) {
        switch (util_1.getInterpolationArgsLength(interpolation)) {
            case 1:
                return r3_identifiers_1.Identifiers.styleProp;
            case 3:
                return r3_identifiers_1.Identifiers.stylePropInterpolate1;
            case 5:
                return r3_identifiers_1.Identifiers.stylePropInterpolate2;
            case 7:
                return r3_identifiers_1.Identifiers.stylePropInterpolate3;
            case 9:
                return r3_identifiers_1.Identifiers.stylePropInterpolate4;
            case 11:
                return r3_identifiers_1.Identifiers.stylePropInterpolate5;
            case 13:
                return r3_identifiers_1.Identifiers.stylePropInterpolate6;
            case 15:
                return r3_identifiers_1.Identifiers.stylePropInterpolate7;
            case 17:
                return r3_identifiers_1.Identifiers.stylePropInterpolate8;
            default:
                return r3_identifiers_1.Identifiers.stylePropInterpolateV;
        }
    }
    function normalizePropName(prop) {
        return style_parser_1.hyphenate(prop);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGluZ19idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3JlbmRlcjMvdmlldy9zdHlsaW5nX2J1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBU0EsbUVBQXdHO0lBQ3hHLDJEQUE2QztJQUU3Qyx5RkFBd0U7SUFFeEUsK0VBQW9EO0lBRXBELGdGQUE4RDtJQUU5RCxnRUFBaUU7SUFFakUsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDO0lBRXBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQStDSztJQUNRLFFBQUEsa0NBQWtDLEdBQUcsQ0FBQyxDQUFDO0lBOEJwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTRCRztJQUNIO1FBd0NFLHdCQUFvQixjQUFpQztZQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7WUF2Q3JELGlFQUFpRTtZQUN6RCxzQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDbEM7OztlQUdHO1lBQ0ksZ0JBQVcsR0FBRyxLQUFLLENBQUM7WUFDcEIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1lBRXBDLDJDQUEyQztZQUNuQyxtQkFBYyxHQUEyQixJQUFJLENBQUM7WUFDdEQsMkNBQTJDO1lBQ25DLG1CQUFjLEdBQTJCLElBQUksQ0FBQztZQUN0RCwwQ0FBMEM7WUFDbEMsdUJBQWtCLEdBQTZCLElBQUksQ0FBQztZQUM1RCwwQ0FBMEM7WUFDbEMsdUJBQWtCLEdBQTZCLElBQUksQ0FBQztZQUNwRCxzQkFBaUIsR0FBMkIsSUFBSSxDQUFDO1lBQ2pELHVCQUFrQixHQUEyQixJQUFJLENBQUM7WUFFMUQsd0RBQXdEO1lBQ3hELGtDQUFrQztZQUVsQzs7OztlQUlHO1lBQ0ssaUJBQVksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztZQUVqRDs7OztlQUlHO1lB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WUFDbEMsS0FBSyxDQUFDO2dCQUNKLE9BQU8sNEJBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsQyxLQUFLLENBQUM7Z0JBQ0osT0FBTyw0QkFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLEtBQUssRUFBRTtnQkFDTCxPQUFPLDRCQUFFLENBQUMscUJBQXFCLENBQUM7WUFDbEMsS0FBSyxFQUFFO2dCQUNMLE9BQU8sNEJBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsQyxLQUFLLEVBQUU7Z0JBQ0wsT0FBTyw0QkFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLEtBQUssRUFBRTtnQkFDTCxPQUFPLDRCQUFFLENBQUMscUJBQXFCLENBQUM7WUFDbEM7Z0JBQ0UsT0FBTyw0QkFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELFNBQVMsaUJBQWlCLENBQUMsSUFBWTtRQUNyQyxPQUFPLHdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Q29uc3RhbnRQb29sfSBmcm9tICcuLi8uLi9jb25zdGFudF9wb29sJztcbmltcG9ydCB7QXR0cmlidXRlTWFya2VyfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7QVNULCBBU1RXaXRoU291cmNlLCBCaW5kaW5nUGlwZSwgQmluZGluZ1R5cGUsIEludGVycG9sYXRpb259IGZyb20gJy4uLy4uL2V4cHJlc3Npb25fcGFyc2VyL2FzdCc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uLy4uL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tICcuLi8uLi9wYXJzZV91dGlsJztcbmltcG9ydCB7aXNFbXB0eUV4cHJlc3Npb259IGZyb20gJy4uLy4uL3RlbXBsYXRlX3BhcnNlci90ZW1wbGF0ZV9wYXJzZXInO1xuaW1wb3J0ICogYXMgdCBmcm9tICcuLi9yM19hc3QnO1xuaW1wb3J0IHtJZGVudGlmaWVycyBhcyBSM30gZnJvbSAnLi4vcjNfaWRlbnRpZmllcnMnO1xuXG5pbXBvcnQge2h5cGhlbmF0ZSwgcGFyc2UgYXMgcGFyc2VTdHlsZX0gZnJvbSAnLi9zdHlsZV9wYXJzZXInO1xuaW1wb3J0IHtWYWx1ZUNvbnZlcnRlcn0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQge0RlZmluaXRpb25NYXAsIGdldEludGVycG9sYXRpb25BcmdzTGVuZ3RofSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBJTVBPUlRBTlRfRkxBRyA9ICchaW1wb3J0YW50JztcblxuLyoqXG4gKiBNaW5pbXVtIGFtb3VudCBvZiBiaW5kaW5nIHNsb3RzIHJlcXVpcmVkIGluIHRoZSBydW50aW1lIGZvciBzdHlsZS9jbGFzcyBiaW5kaW5ncy5cbiAqXG4gKiBTdHlsaW5nIGluIEFuZ3VsYXIgdXNlcyB1cCB0d28gc2xvdHMgaW4gdGhlIHJ1bnRpbWUgTFZpZXcvVERhdGEgZGF0YSBzdHJ1Y3R1cmVzIHRvXG4gKiByZWNvcmQgYmluZGluZyBkYXRhLCBwcm9wZXJ0eSBpbmZvcm1hdGlvbiBhbmQgbWV0YWRhdGEuXG4gKlxuICogV2hlbiBhIGJpbmRpbmcgaXMgcmVnaXN0ZXJlZCBpdCB3aWxsIHBsYWNlIHRoZSBmb2xsb3dpbmcgaW5mb3JtYXRpb24gaW4gdGhlIGBMVmlld2A6XG4gKlxuICogc2xvdCAxKSBiaW5kaW5nIHZhbHVlXG4gKiBzbG90IDIpIGNhY2hlZCB2YWx1ZSAoYWxsIG90aGVyIHZhbHVlcyBjb2xsZWN0ZWQgYmVmb3JlIGl0IGluIHN0cmluZyBmb3JtKVxuICpcbiAqIFdoZW4gYSBiaW5kaW5nIGlzIHJlZ2lzdGVyZWQgaXQgd2lsbCBwbGFjZSB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uIGluIHRoZSBgVERhdGFgOlxuICpcbiAqIHNsb3QgMSkgcHJvcCBuYW1lXG4gKiBzbG90IDIpIGJpbmRpbmcgaW5kZXggdGhhdCBwb2ludHMgdG8gdGhlIHByZXZpb3VzIHN0eWxlL2NsYXNzIGJpbmRpbmcgKGFuZCBzb21lIGV4dHJhIGNvbmZpZ1xuICogdmFsdWVzKVxuICpcbiAqIExldCdzIGltYWdpbmUgd2UgaGF2ZSBhIGJpbmRpbmcgdGhhdCBsb29rcyBsaWtlIHNvOlxuICpcbiAqIGBgYFxuICogPGRpdiBbc3R5bGUud2lkdGhdPVwieFwiIFtzdHlsZS5oZWlnaHRdPVwieVwiPlxuICogYGBgXG4gKlxuICogT3VyIGBMVmlld2AgYW5kIGBURGF0YWAgZGF0YS1zdHJ1Y3R1cmVzIGxvb2sgbGlrZSBzbzpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBMVmlldyA9IFtcbiAqICAgLy8gLi4uXG4gKiAgIHgsIC8vIHZhbHVlIG9mIHhcbiAqICAgXCJ3aWR0aDogeFwiLFxuICpcbiAqICAgeSwgLy8gdmFsdWUgb2YgeVxuICogICBcIndpZHRoOiB4OyBoZWlnaHQ6IHlcIixcbiAqICAgLy8gLi4uXG4gKiBdO1xuICpcbiAqIFREYXRhID0gW1xuICogICAvLyAuLi5cbiAqICAgXCJ3aWR0aFwiLCAvLyBiaW5kaW5nIHNsb3QgMjBcbiAqICAgMCxcbiAqXG4gKiAgIFwiaGVpZ2h0XCIsXG4gKiAgIDIwLFxuICogICAvLyAuLi5cbiAqIF07XG4gKiBgYGBcbiAqXG4gKiAqL1xuZXhwb3J0IGNvbnN0IE1JTl9TVFlMSU5HX0JJTkRJTkdfU0xPVFNfUkVRVUlSRUQgPSAyO1xuXG4vKipcbiAqIEEgc3R5bGluZyBleHByZXNzaW9uIHN1bW1hcnkgdGhhdCBpcyB0byBiZSBwcm9jZXNzZWQgYnkgdGhlIGNvbXBpbGVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGluZ0luc3RydWN0aW9uIHtcbiAgcmVmZXJlbmNlOiBvLkV4dGVybmFsUmVmZXJlbmNlO1xuICAvKiogQ2FsbHMgdG8gaW5kaXZpZHVhbCBzdHlsaW5nIGluc3RydWN0aW9ucy4gVXNlZCB3aGVuIGNoYWluaW5nIGNhbGxzIHRvIHRoZSBzYW1lIGluc3RydWN0aW9uLiAqL1xuICBjYWxsczogU3R5bGluZ0luc3RydWN0aW9uQ2FsbFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxpbmdJbnN0cnVjdGlvbkNhbGwge1xuICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW58bnVsbDtcbiAgc3VwcG9ydHNJbnRlcnBvbGF0aW9uOiBib29sZWFuO1xuICBhbGxvY2F0ZUJpbmRpbmdTbG90czogbnVtYmVyO1xuICBwYXJhbXM6ICgoY29udmVydEZuOiAodmFsdWU6IGFueSkgPT4gby5FeHByZXNzaW9uIHwgby5FeHByZXNzaW9uW10pID0+IG8uRXhwcmVzc2lvbltdKTtcbn1cblxuLyoqXG4gKiBBbiBpbnRlcm5hbCByZWNvcmQgb2YgdGhlIGlucHV0IGRhdGEgZm9yIGEgc3R5bGluZyBiaW5kaW5nXG4gKi9cbmludGVyZmFjZSBCb3VuZFN0eWxpbmdFbnRyeSB7XG4gIGhhc092ZXJyaWRlRmxhZzogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nfG51bGw7XG4gIHVuaXQ6IHN0cmluZ3xudWxsO1xuICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW47XG4gIHNhbml0aXplOiBib29sZWFuO1xuICB2YWx1ZTogQVNUO1xufVxuXG4vKipcbiAqIFByb2R1Y2VzIGNyZWF0aW9uL3VwZGF0ZSBpbnN0cnVjdGlvbnMgZm9yIGFsbCBzdHlsaW5nIGJpbmRpbmdzIChjbGFzcyBhbmQgc3R5bGUpXG4gKlxuICogSXQgYWxzbyBwcm9kdWNlcyB0aGUgY3JlYXRpb24gaW5zdHJ1Y3Rpb24gdG8gcmVnaXN0ZXIgYWxsIGluaXRpYWwgc3R5bGluZyB2YWx1ZXNcbiAqICh3aGljaCBhcmUgYWxsIHRoZSBzdGF0aWMgY2xhc3M9XCIuLi5cIiBhbmQgc3R5bGU9XCIuLi5cIiBhdHRyaWJ1dGUgdmFsdWVzIHRoYXQgZXhpc3RcbiAqIG9uIGFuIGVsZW1lbnQgd2l0aGluIGEgdGVtcGxhdGUpLlxuICpcbiAqIFRoZSBidWlsZGVyIGNsYXNzIGJlbG93IGhhbmRsZXMgcHJvZHVjaW5nIGluc3RydWN0aW9ucyBmb3IgdGhlIGZvbGxvd2luZyBjYXNlczpcbiAqXG4gKiAtIFN0YXRpYyBzdHlsZS9jbGFzcyBhdHRyaWJ1dGVzIChzdHlsZT1cIi4uLlwiIGFuZCBjbGFzcz1cIi4uLlwiKVxuICogLSBEeW5hbWljIHN0eWxlL2NsYXNzIG1hcCBiaW5kaW5ncyAoW3N0eWxlXT1cIm1hcFwiIGFuZCBbY2xhc3NdPVwibWFwfHN0cmluZ1wiKVxuICogLSBEeW5hbWljIHN0eWxlL2NsYXNzIHByb3BlcnR5IGJpbmRpbmdzIChbc3R5bGUucHJvcF09XCJleHBcIiBhbmQgW2NsYXNzLm5hbWVdPVwiZXhwXCIpXG4gKlxuICogRHVlIHRvIHRoZSBjb21wbGV4IHJlbGF0aW9uc2hpcCBvZiBhbGwgb2YgdGhlc2UgY2FzZXMsIHRoZSBpbnN0cnVjdGlvbnMgZ2VuZXJhdGVkXG4gKiBmb3IgdGhlc2UgYXR0cmlidXRlcy9wcm9wZXJ0aWVzL2JpbmRpbmdzIG11c3QgYmUgZG9uZSBzbyBpbiB0aGUgY29ycmVjdCBvcmRlci4gVGhlXG4gKiBvcmRlciB3aGljaCB0aGVzZSBtdXN0IGJlIGdlbmVyYXRlZCBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIGlmIChjcmVhdGVNb2RlKSB7XG4gKiAgIHN0eWxpbmcoLi4uKVxuICogfVxuICogaWYgKHVwZGF0ZU1vZGUpIHtcbiAqICAgc3R5bGVNYXAoLi4uKVxuICogICBjbGFzc01hcCguLi4pXG4gKiAgIHN0eWxlUHJvcCguLi4pXG4gKiAgIGNsYXNzUHJvcCguLi4pXG4gKiB9XG4gKlxuICogVGhlIGNyZWF0aW9uL3VwZGF0ZSBtZXRob2RzIHdpdGhpbiB0aGUgYnVpbGRlciBjbGFzcyBwcm9kdWNlIHRoZXNlIGluc3RydWN0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0eWxpbmdCdWlsZGVyIHtcbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZXJlIGFyZSBhbnkgc3RhdGljIHN0eWxpbmcgdmFsdWVzIHByZXNlbnQgKi9cbiAgcHJpdmF0ZSBfaGFzSW5pdGlhbFZhbHVlcyA9IGZhbHNlO1xuICAvKipcbiAgICogIFdoZXRoZXIgb3Igbm90IHRoZXJlIGFyZSBhbnkgc3R5bGluZyBiaW5kaW5ncyBwcmVzZW50XG4gICAqICAoaS5lLiBgW3N0eWxlXWAsIGBbY2xhc3NdYCwgYFtzdHlsZS5wcm9wXWAgb3IgYFtjbGFzcy5uYW1lXWApXG4gICAqL1xuICBwdWJsaWMgaGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgcHVibGljIGhhc0JpbmRpbmdzV2l0aFBpcGVzID0gZmFsc2U7XG5cbiAgLyoqIHRoZSBpbnB1dCBmb3IgW2NsYXNzXSAoaWYgaXQgZXhpc3RzKSAqL1xuICBwcml2YXRlIF9jbGFzc01hcElucHV0OiBCb3VuZFN0eWxpbmdFbnRyeXxudWxsID0gbnVsbDtcbiAgLyoqIHRoZSBpbnB1dCBmb3IgW3N0eWxlXSAoaWYgaXQgZXhpc3RzKSAqL1xuICBwcml2YXRlIF9zdHlsZU1hcElucHV0OiBCb3VuZFN0eWxpbmdFbnRyeXxudWxsID0gbnVsbDtcbiAgLyoqIGFuIGFycmF5IG9mIGVhY2ggW3N0eWxlLnByb3BdIGlucHV0ICovXG4gIHByaXZhdGUgX3NpbmdsZVN0eWxlSW5wdXRzOiBCb3VuZFN0eWxpbmdFbnRyeVtdfG51bGwgPSBudWxsO1xuICAvKiogYW4gYXJyYXkgb2YgZWFjaCBbY2xhc3MubmFtZV0gaW5wdXQgKi9cbiAgcHJpdmF0ZSBfc2luZ2xlQ2xhc3NJbnB1dHM6IEJvdW5kU3R5bGluZ0VudHJ5W118bnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2xhc3RTdHlsaW5nSW5wdXQ6IEJvdW5kU3R5bGluZ0VudHJ5fG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9maXJzdFN0eWxpbmdJbnB1dDogQm91bmRTdHlsaW5nRW50cnl8bnVsbCA9IG51bGw7XG5cbiAgLy8gbWFwcyBhcmUgdXNlZCBpbnN0ZWFkIG9mIGhhc2ggbWFwcyBiZWNhdXNlIGEgTWFwIHdpbGxcbiAgLy8gcmV0YWluIHRoZSBvcmRlcmluZyBvZiB0aGUga2V5c1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBsb2NhdGlvbiBvZiBlYWNoIHN0eWxlIGJpbmRpbmcgaW4gdGhlIHRlbXBsYXRlXG4gICAqIChlLmcuIGA8ZGl2IFtzdHlsZS53aWR0aF09XCJ3XCIgW3N0eWxlLmhlaWdodF09XCJoXCI+YCBpbXBsaWVzXG4gICAqIHRoYXQgYHdpZHRoPTBgIGFuZCBgaGVpZ2h0PTFgKVxuICAgKi9cbiAgcHJpdmF0ZSBfc3R5bGVzSW5kZXggPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBsb2NhdGlvbiBvZiBlYWNoIGNsYXNzIGJpbmRpbmcgaW4gdGhlIHRlbXBsYXRlXG4gICAqIChlLmcuIGA8ZGl2IFtjbGFzcy5iaWddPVwiYlwiIFtjbGFzcy5oaWRkZW5dPVwiaFwiPmAgaW1wbGllc1xuICAgKiB0aGF0IGBiaWc9MGAgYW5kIGBoaWRkZW49MWApXG4gICAqL1xuICBwcml2YXRlIF9jbGFzc2VzSW5kZXggPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICBwcml2YXRlIF9pbml0aWFsU3R5bGVWYWx1ZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgX2luaXRpYWxDbGFzc1ZhbHVlczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaXJlY3RpdmVFeHByOiBvLkV4cHJlc3Npb258bnVsbCkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZ2l2ZW4gaW5wdXQgdG8gdGhlIHN0eWxpbmcgYnVpbGRlciB0byBiZSBsYXRlciB1c2VkIHdoZW4gcHJvZHVjaW5nIEFPVCBjb2RlLlxuICAgKlxuICAgKiBUaGUgY29kZSBiZWxvdyB3aWxsIG9ubHkgYWNjZXB0IHRoZSBpbnB1dCBpZiBpdCBpcyBzb21laG93IHRpZWQgdG8gc3R5bGluZyAod2hldGhlciBpdCBiZVxuICAgKiBzdHlsZS9jbGFzcyBiaW5kaW5ncyBvciBzdGF0aWMgc3R5bGUvY2xhc3MgYXR0cmlidXRlcykuXG4gICAqL1xuICByZWdpc3RlckJvdW5kSW5wdXQoaW5wdXQ6IHQuQm91bmRBdHRyaWJ1dGUpOiBib29sZWFuIHtcbiAgICAvLyBbYXR0ci5zdHlsZV0gb3IgW2F0dHIuY2xhc3NdIGFyZSBza2lwcGVkIGluIHRoZSBjb2RlIGJlbG93LFxuICAgIC8vIHRoZXkgc2hvdWxkIG5vdCBiZSB0cmVhdGVkIGFzIHN0eWxpbmctYmFzZWQgYmluZGluZ3Mgc2luY2VcbiAgICAvLyB0aGV5IGFyZSBpbnRlbmRlZCB0byBiZSB3cml0dGVuIGRpcmVjdGx5IHRvIHRoZSBhdHRyIGFuZFxuICAgIC8vIHdpbGwgdGhlcmVmb3JlIHNraXAgYWxsIHN0eWxlL2NsYXNzIHJlc29sdXRpb24gdGhhdCBpcyBwcmVzZW50XG4gICAgLy8gd2l0aCBzdHlsZT1cIlwiLCBbc3R5bGVdPVwiXCIgYW5kIFtzdHlsZS5wcm9wXT1cIlwiLCBjbGFzcz1cIlwiLFxuICAgIC8vIFtjbGFzcy5wcm9wXT1cIlwiLiBbY2xhc3NdPVwiXCIgYXNzaWdubWVudHNcbiAgICBsZXQgYmluZGluZzogQm91bmRTdHlsaW5nRW50cnl8bnVsbCA9IG51bGw7XG4gICAgbGV0IG5hbWUgPSBpbnB1dC5uYW1lO1xuICAgIHN3aXRjaCAoaW5wdXQudHlwZSkge1xuICAgICAgY2FzZSBCaW5kaW5nVHlwZS5Qcm9wZXJ0eTpcbiAgICAgICAgYmluZGluZyA9IHRoaXMucmVnaXN0ZXJJbnB1dEJhc2VkT25OYW1lKG5hbWUsIGlucHV0LnZhbHVlLCBpbnB1dC5zb3VyY2VTcGFuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJpbmRpbmdUeXBlLlN0eWxlOlxuICAgICAgICBiaW5kaW5nID0gdGhpcy5yZWdpc3RlclN0eWxlSW5wdXQobmFtZSwgZmFsc2UsIGlucHV0LnZhbHVlLCBpbnB1dC5zb3VyY2VTcGFuLCBpbnB1dC51bml0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJpbmRpbmdUeXBlLkNsYXNzOlxuICAgICAgICBiaW5kaW5nID0gdGhpcy5yZWdpc3RlckNsYXNzSW5wdXQobmFtZSwgZmFsc2UsIGlucHV0LnZhbHVlLCBpbnB1dC5zb3VyY2VTcGFuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcmVnaXN0ZXJJbnB1dEJhc2VkT25OYW1lKG5hbWU6IHN0cmluZywgZXhwcmVzc2lvbjogQVNULCBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHtcbiAgICBsZXQgYmluZGluZzogQm91bmRTdHlsaW5nRW50cnl8bnVsbCA9IG51bGw7XG4gICAgY29uc3QgcHJlZml4ID0gbmFtZS5zdWJzdHJpbmcoMCwgNik7XG4gICAgY29uc3QgaXNTdHlsZSA9IG5hbWUgPT09ICdzdHlsZScgfHwgcHJlZml4ID09PSAnc3R5bGUuJyB8fCBwcmVmaXggPT09ICdzdHlsZSEnO1xuICAgIGNvbnN0IGlzQ2xhc3MgPSAhaXNTdHlsZSAmJiAobmFtZSA9PT0gJ2NsYXNzJyB8fCBwcmVmaXggPT09ICdjbGFzcy4nIHx8IHByZWZpeCA9PT0gJ2NsYXNzIScpO1xuICAgIGlmIChpc1N0eWxlIHx8IGlzQ2xhc3MpIHtcbiAgICAgIGNvbnN0IGlzTWFwQmFzZWQgPSBuYW1lLmNoYXJBdCg1KSAhPT0gJy4nOyAgICAgICAgIC8vIHN0eWxlLnByb3Agb3IgY2xhc3MucHJvcCBtYWtlcyB0aGlzIGEgbm9cbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gbmFtZS5zdWJzdHIoaXNNYXBCYXNlZCA/IDUgOiA2KTsgIC8vIHRoZSBkb3QgZXhwbGFpbnMgd2h5IHRoZXJlJ3MgYSArMVxuICAgICAgaWYgKGlzU3R5bGUpIHtcbiAgICAgICAgYmluZGluZyA9IHRoaXMucmVnaXN0ZXJTdHlsZUlucHV0KHByb3BlcnR5LCBpc01hcEJhc2VkLCBleHByZXNzaW9uLCBzb3VyY2VTcGFuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJpbmRpbmcgPSB0aGlzLnJlZ2lzdGVyQ2xhc3NJbnB1dChwcm9wZXJ0eSwgaXNNYXBCYXNlZCwgZXhwcmVzc2lvbiwgc291cmNlU3Bhbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nO1xuICB9XG5cbiAgcmVnaXN0ZXJTdHlsZUlucHV0KFxuICAgICAgbmFtZTogc3RyaW5nLCBpc01hcEJhc2VkOiBib29sZWFuLCB2YWx1ZTogQVNULCBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgICB1bml0Pzogc3RyaW5nfG51bGwpOiBCb3VuZFN0eWxpbmdFbnRyeXxudWxsIHtcbiAgICBpZiAoaXNFbXB0eUV4cHJlc3Npb24odmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbmFtZSA9IG5vcm1hbGl6ZVByb3BOYW1lKG5hbWUpO1xuICAgIGNvbnN0IHtwcm9wZXJ0eSwgaGFzT3ZlcnJpZGVGbGFnLCB1bml0OiBiaW5kaW5nVW5pdH0gPSBwYXJzZVByb3BlcnR5KG5hbWUpO1xuICAgIGNvbnN0IGVudHJ5OiBCb3VuZFN0eWxpbmdFbnRyeSA9IHtcbiAgICAgIG5hbWU6IHByb3BlcnR5LFxuICAgICAgc2FuaXRpemU6IHByb3BlcnR5ID8gaXNTdHlsZVNhbml0aXphYmxlKHByb3BlcnR5KSA6IHRydWUsXG4gICAgICB1bml0OiB1bml0IHx8IGJpbmRpbmdVbml0LFxuICAgICAgdmFsdWUsXG4gICAgICBzb3VyY2VTcGFuLFxuICAgICAgaGFzT3ZlcnJpZGVGbGFnXG4gICAgfTtcbiAgICBpZiAoaXNNYXBCYXNlZCkge1xuICAgICAgdGhpcy5fc3R5bGVNYXBJbnB1dCA9IGVudHJ5O1xuICAgIH0gZWxzZSB7XG4gICAgICAodGhpcy5fc2luZ2xlU3R5bGVJbnB1dHMgPSB0aGlzLl9zaW5nbGVTdHlsZUlucHV0cyB8fCBbXSkucHVzaChlbnRyeSk7XG4gICAgICByZWdpc3RlckludG9NYXAodGhpcy5fc3R5bGVzSW5kZXgsIHByb3BlcnR5KTtcbiAgICB9XG4gICAgdGhpcy5fbGFzdFN0eWxpbmdJbnB1dCA9IGVudHJ5O1xuICAgIHRoaXMuX2ZpcnN0U3R5bGluZ0lucHV0ID0gdGhpcy5fZmlyc3RTdHlsaW5nSW5wdXQgfHwgZW50cnk7XG4gICAgdGhpcy5fY2hlY2tGb3JQaXBlcyh2YWx1ZSk7XG4gICAgdGhpcy5oYXNCaW5kaW5ncyA9IHRydWU7XG4gICAgcmV0dXJuIGVudHJ5O1xuICB9XG5cbiAgcmVnaXN0ZXJDbGFzc0lucHV0KG5hbWU6IHN0cmluZywgaXNNYXBCYXNlZDogYm9vbGVhbiwgdmFsdWU6IEFTVCwgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKTpcbiAgICAgIEJvdW5kU3R5bGluZ0VudHJ5fG51bGwge1xuICAgIGlmIChpc0VtcHR5RXhwcmVzc2lvbih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7cHJvcGVydHksIGhhc092ZXJyaWRlRmxhZ30gPSBwYXJzZVByb3BlcnR5KG5hbWUpO1xuICAgIGNvbnN0IGVudHJ5OiBCb3VuZFN0eWxpbmdFbnRyeSA9XG4gICAgICAgIHtuYW1lOiBwcm9wZXJ0eSwgdmFsdWUsIHNvdXJjZVNwYW4sIHNhbml0aXplOiBmYWxzZSwgaGFzT3ZlcnJpZGVGbGFnLCB1bml0OiBudWxsfTtcbiAgICBpZiAoaXNNYXBCYXNlZCkge1xuICAgICAgaWYgKHRoaXMuX2NsYXNzTWFwSW5wdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1tjbGFzc10gYW5kIFtjbGFzc05hbWVdIGJpbmRpbmdzIGNhbm5vdCBiZSB1c2VkIG9uIHRoZSBzYW1lIGVsZW1lbnQgc2ltdWx0YW5lb3VzbHknKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NsYXNzTWFwSW5wdXQgPSBlbnRyeTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHRoaXMuX3NpbmdsZUNsYXNzSW5wdXRzID0gdGhpcy5fc2luZ2xlQ2xhc3NJbnB1dHMgfHwgW10pLnB1c2goZW50cnkpO1xuICAgICAgcmVnaXN0ZXJJbnRvTWFwKHRoaXMuX2NsYXNzZXNJbmRleCwgcHJvcGVydHkpO1xuICAgIH1cbiAgICB0aGlzLl9sYXN0U3R5bGluZ0lucHV0ID0gZW50cnk7XG4gICAgdGhpcy5fZmlyc3RTdHlsaW5nSW5wdXQgPSB0aGlzLl9maXJzdFN0eWxpbmdJbnB1dCB8fCBlbnRyeTtcbiAgICB0aGlzLl9jaGVja0ZvclBpcGVzKHZhbHVlKTtcbiAgICB0aGlzLmhhc0JpbmRpbmdzID0gdHJ1ZTtcbiAgICByZXR1cm4gZW50cnk7XG4gIH1cblxuICBwcml2YXRlIF9jaGVja0ZvclBpcGVzKHZhbHVlOiBBU1QpIHtcbiAgICBpZiAoKHZhbHVlIGluc3RhbmNlb2YgQVNUV2l0aFNvdXJjZSkgJiYgKHZhbHVlLmFzdCBpbnN0YW5jZW9mIEJpbmRpbmdQaXBlKSkge1xuICAgICAgdGhpcy5oYXNCaW5kaW5nc1dpdGhQaXBlcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0aGUgZWxlbWVudCdzIHN0YXRpYyBzdHlsZSBzdHJpbmcgdmFsdWUgdG8gdGhlIGJ1aWxkZXIuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgc3R5bGUgc3RyaW5nIChlLmcuIGB3aWR0aDoxMDBweDsgaGVpZ2h0OjIwMHB4O2ApXG4gICAqL1xuICByZWdpc3RlclN0eWxlQXR0cih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5pdGlhbFN0eWxlVmFsdWVzID0gcGFyc2VTdHlsZSh2YWx1ZSk7XG4gICAgdGhpcy5faGFzSW5pdGlhbFZhbHVlcyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHRoZSBlbGVtZW50J3Mgc3RhdGljIGNsYXNzIHN0cmluZyB2YWx1ZSB0byB0aGUgYnVpbGRlci5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIHRoZSBjbGFzc05hbWUgc3RyaW5nIChlLmcuIGBkaXNhYmxlZCBnb2xkIHpvb21gKVxuICAgKi9cbiAgcmVnaXN0ZXJDbGFzc0F0dHIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luaXRpYWxDbGFzc1ZhbHVlcyA9IHZhbHVlLnRyaW0oKS5zcGxpdCgvXFxzKy9nKTtcbiAgICB0aGlzLl9oYXNJbml0aWFsVmFsdWVzID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGFsbCBzdHlsaW5nLXJlbGF0ZWQgZXhwcmVzc2lvbnMgdG8gdGhlIHByb3ZpZGVkIGF0dHJzIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0gYXR0cnMgYW4gZXhpc3RpbmcgYXJyYXkgd2hlcmUgZWFjaCBvZiB0aGUgc3R5bGluZyBleHByZXNzaW9uc1xuICAgKiB3aWxsIGJlIGluc2VydGVkIGludG8uXG4gICAqL1xuICBwb3B1bGF0ZUluaXRpYWxTdHlsaW5nQXR0cnMoYXR0cnM6IG8uRXhwcmVzc2lvbltdKTogdm9pZCB7XG4gICAgLy8gW0NMQVNTX01BUktFUiwgJ2ZvbycsICdiYXInLCAnYmF6JyAuLi5dXG4gICAgaWYgKHRoaXMuX2luaXRpYWxDbGFzc1ZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGF0dHJzLnB1c2goby5saXRlcmFsKEF0dHJpYnV0ZU1hcmtlci5DbGFzc2VzKSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2luaXRpYWxDbGFzc1ZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhdHRycy5wdXNoKG8ubGl0ZXJhbCh0aGlzLl9pbml0aWFsQ2xhc3NWYWx1ZXNbaV0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBbU1RZTEVfTUFSS0VSLCAnd2lkdGgnLCAnMjAwcHgnLCAnaGVpZ2h0JywgJzEwMHB4JywgLi4uXVxuICAgIGlmICh0aGlzLl9pbml0aWFsU3R5bGVWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICBhdHRycy5wdXNoKG8ubGl0ZXJhbChBdHRyaWJ1dGVNYXJrZXIuU3R5bGVzKSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2luaXRpYWxTdHlsZVZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICBhdHRycy5wdXNoKFxuICAgICAgICAgICAgby5saXRlcmFsKHRoaXMuX2luaXRpYWxTdHlsZVZhbHVlc1tpXSksIG8ubGl0ZXJhbCh0aGlzLl9pbml0aWFsU3R5bGVWYWx1ZXNbaSArIDFdKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhbiBpbnN0cnVjdGlvbiB3aXRoIGFsbCB0aGUgZXhwcmVzc2lvbnMgYW5kIHBhcmFtZXRlcnMgZm9yIGBlbGVtZW50SG9zdEF0dHJzYC5cbiAgICpcbiAgICogVGhlIGluc3RydWN0aW9uIGdlbmVyYXRpb24gY29kZSBiZWxvdyBpcyB1c2VkIGZvciBwcm9kdWNpbmcgdGhlIEFPVCBzdGF0ZW1lbnQgY29kZSB3aGljaCBpc1xuICAgKiByZXNwb25zaWJsZSBmb3IgcmVnaXN0ZXJpbmcgaW5pdGlhbCBzdHlsZXMgKHdpdGhpbiBhIGRpcmVjdGl2ZSBob3N0QmluZGluZ3MnIGNyZWF0aW9uIGJsb2NrKSxcbiAgICogYXMgd2VsbCBhcyBhbnkgb2YgdGhlIHByb3ZpZGVkIGF0dHJpYnV0ZSB2YWx1ZXMsIHRvIHRoZSBkaXJlY3RpdmUgaG9zdCBlbGVtZW50LlxuICAgKi9cbiAgYXNzaWduSG9zdEF0dHJzKGF0dHJzOiBvLkV4cHJlc3Npb25bXSwgZGVmaW5pdGlvbk1hcDogRGVmaW5pdGlvbk1hcCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kaXJlY3RpdmVFeHByICYmIChhdHRycy5sZW5ndGggfHwgdGhpcy5faGFzSW5pdGlhbFZhbHVlcykpIHtcbiAgICAgIHRoaXMucG9wdWxhdGVJbml0aWFsU3R5bGluZ0F0dHJzKGF0dHJzKTtcbiAgICAgIGRlZmluaXRpb25NYXAuc2V0KCdob3N0QXR0cnMnLCBvLmxpdGVyYWxBcnIoYXR0cnMpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGFuIGluc3RydWN0aW9uIHdpdGggYWxsIHRoZSBleHByZXNzaW9ucyBhbmQgcGFyYW1ldGVycyBmb3IgYGNsYXNzTWFwYC5cbiAgICpcbiAgICogVGhlIGluc3RydWN0aW9uIGRhdGEgd2lsbCBjb250YWluIGFsbCBleHByZXNzaW9ucyBmb3IgYGNsYXNzTWFwYCB0byBmdW5jdGlvblxuICAgKiB3aGljaCBpbmNsdWRlcyB0aGUgYFtjbGFzc11gIGV4cHJlc3Npb24gcGFyYW1zLlxuICAgKi9cbiAgYnVpbGRDbGFzc01hcEluc3RydWN0aW9uKHZhbHVlQ29udmVydGVyOiBWYWx1ZUNvbnZlcnRlcik6IFN0eWxpbmdJbnN0cnVjdGlvbnxudWxsIHtcbiAgICBpZiAodGhpcy5fY2xhc3NNYXBJbnB1dCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2J1aWxkTWFwQmFzZWRJbnN0cnVjdGlvbih2YWx1ZUNvbnZlcnRlciwgdHJ1ZSwgdGhpcy5fY2xhc3NNYXBJbnB1dCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhbiBpbnN0cnVjdGlvbiB3aXRoIGFsbCB0aGUgZXhwcmVzc2lvbnMgYW5kIHBhcmFtZXRlcnMgZm9yIGBzdHlsZU1hcGAuXG4gICAqXG4gICAqIFRoZSBpbnN0cnVjdGlvbiBkYXRhIHdpbGwgY29udGFpbiBhbGwgZXhwcmVzc2lvbnMgZm9yIGBzdHlsZU1hcGAgdG8gZnVuY3Rpb25cbiAgICogd2hpY2ggaW5jbHVkZXMgdGhlIGBbc3R5bGVdYCBleHByZXNzaW9uIHBhcmFtcy5cbiAgICovXG4gIGJ1aWxkU3R5bGVNYXBJbnN0cnVjdGlvbih2YWx1ZUNvbnZlcnRlcjogVmFsdWVDb252ZXJ0ZXIpOiBTdHlsaW5nSW5zdHJ1Y3Rpb258bnVsbCB7XG4gICAgaWYgKHRoaXMuX3N0eWxlTWFwSW5wdXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9idWlsZE1hcEJhc2VkSW5zdHJ1Y3Rpb24odmFsdWVDb252ZXJ0ZXIsIGZhbHNlLCB0aGlzLl9zdHlsZU1hcElucHV0KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9idWlsZE1hcEJhc2VkSW5zdHJ1Y3Rpb24oXG4gICAgICB2YWx1ZUNvbnZlcnRlcjogVmFsdWVDb252ZXJ0ZXIsIGlzQ2xhc3NCYXNlZDogYm9vbGVhbixcbiAgICAgIHN0eWxpbmdJbnB1dDogQm91bmRTdHlsaW5nRW50cnkpOiBTdHlsaW5nSW5zdHJ1Y3Rpb24ge1xuICAgIC8vIGVhY2ggc3R5bGluZyBiaW5kaW5nIHZhbHVlIGlzIHN0b3JlZCBpbiB0aGUgTFZpZXdcbiAgICAvLyBtYXAtYmFzZWQgYmluZGluZ3MgYWxsb2NhdGUgdHdvIHNsb3RzOiBvbmUgZm9yIHRoZVxuICAgIC8vIHByZXZpb3VzIGJpbmRpbmcgdmFsdWUgYW5kIGFub3RoZXIgZm9yIHRoZSBwcmV2aW91c1xuICAgIC8vIGNsYXNzTmFtZSBvciBzdHlsZSBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgbGV0IHRvdGFsQmluZGluZ1Nsb3RzUmVxdWlyZWQgPSBNSU5fU1RZTElOR19CSU5ESU5HX1NMT1RTX1JFUVVJUkVEO1xuXG4gICAgLy8gdGhlc2UgdmFsdWVzIG11c3QgYmUgb3V0c2lkZSBvZiB0aGUgdXBkYXRlIGJsb2NrIHNvIHRoYXQgdGhleSBjYW5cbiAgICAvLyBiZSBldmFsdWF0ZWQgKHRoZSBBU1QgdmlzaXQgY2FsbCkgZHVyaW5nIGNyZWF0aW9uIHRpbWUgc28gdGhhdCBhbnlcbiAgICAvLyBwaXBlcyBjYW4gYmUgcGlja2VkIHVwIGluIHRpbWUgYmVmb3JlIHRoZSB0ZW1wbGF0ZSBpcyBidWlsdFxuICAgIGNvbnN0IG1hcFZhbHVlID0gc3R5bGluZ0lucHV0LnZhbHVlLnZpc2l0KHZhbHVlQ29udmVydGVyKTtcbiAgICBsZXQgcmVmZXJlbmNlOiBvLkV4dGVybmFsUmVmZXJlbmNlO1xuICAgIGlmIChtYXBWYWx1ZSBpbnN0YW5jZW9mIEludGVycG9sYXRpb24pIHtcbiAgICAgIHRvdGFsQmluZGluZ1Nsb3RzUmVxdWlyZWQgKz0gbWFwVmFsdWUuZXhwcmVzc2lvbnMubGVuZ3RoO1xuICAgICAgcmVmZXJlbmNlID0gaXNDbGFzc0Jhc2VkID8gZ2V0Q2xhc3NNYXBJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbihtYXBWYWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U3R5bGVNYXBJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbihtYXBWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZmVyZW5jZSA9IGlzQ2xhc3NCYXNlZCA/IFIzLmNsYXNzTWFwIDogUjMuc3R5bGVNYXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZmVyZW5jZSxcbiAgICAgIGNhbGxzOiBbe1xuICAgICAgICBzdXBwb3J0c0ludGVycG9sYXRpb246IHRydWUsXG4gICAgICAgIHNvdXJjZVNwYW46IHN0eWxpbmdJbnB1dC5zb3VyY2VTcGFuLFxuICAgICAgICBhbGxvY2F0ZUJpbmRpbmdTbG90czogdG90YWxCaW5kaW5nU2xvdHNSZXF1aXJlZCxcbiAgICAgICAgcGFyYW1zOiAoY29udmVydEZuOiAodmFsdWU6IGFueSkgPT4gby5FeHByZXNzaW9ufG8uRXhwcmVzc2lvbltdKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udmVydFJlc3VsdCA9IGNvbnZlcnRGbihtYXBWYWx1ZSk7XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0gQXJyYXkuaXNBcnJheShjb252ZXJ0UmVzdWx0KSA/IGNvbnZlcnRSZXN1bHQgOiBbY29udmVydFJlc3VsdF07XG4gICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRTaW5nbGVJbnB1dHMoXG4gICAgICByZWZlcmVuY2U6IG8uRXh0ZXJuYWxSZWZlcmVuY2UsIGlucHV0czogQm91bmRTdHlsaW5nRW50cnlbXSwgdmFsdWVDb252ZXJ0ZXI6IFZhbHVlQ29udmVydGVyLFxuICAgICAgZ2V0SW50ZXJwb2xhdGlvbkV4cHJlc3Npb25GbjogKCh2YWx1ZTogSW50ZXJwb2xhdGlvbikgPT4gby5FeHRlcm5hbFJlZmVyZW5jZSl8bnVsbCxcbiAgICAgIGlzQ2xhc3NCYXNlZDogYm9vbGVhbik6IFN0eWxpbmdJbnN0cnVjdGlvbltdIHtcbiAgICBjb25zdCBpbnN0cnVjdGlvbnM6IFN0eWxpbmdJbnN0cnVjdGlvbltdID0gW107XG5cbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBjb25zdCBwcmV2aW91c0luc3RydWN0aW9uOiBTdHlsaW5nSW5zdHJ1Y3Rpb258dW5kZWZpbmVkID1cbiAgICAgICAgICBpbnN0cnVjdGlvbnNbaW5zdHJ1Y3Rpb25zLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZS52aXNpdCh2YWx1ZUNvbnZlcnRlcik7XG4gICAgICBsZXQgcmVmZXJlbmNlRm9yQ2FsbCA9IHJlZmVyZW5jZTtcblxuICAgICAgLy8gZWFjaCBzdHlsaW5nIGJpbmRpbmcgdmFsdWUgaXMgc3RvcmVkIGluIHRoZSBMVmlld1xuICAgICAgLy8gYnV0IHRoZXJlIGFyZSB0d28gdmFsdWVzIHN0b3JlZCBmb3IgZWFjaCBiaW5kaW5nOlxuICAgICAgLy8gICAxKSB0aGUgdmFsdWUgaXRzZWxmXG4gICAgICAvLyAgIDIpIGFuIGludGVybWVkaWF0ZSB2YWx1ZSAoY29uY2F0ZW5hdGlvbiBvZiBzdHlsZSB1cCB0byB0aGlzIHBvaW50KS5cbiAgICAgIC8vICAgICAgV2UgbmVlZCB0byBzdG9yZSB0aGUgaW50ZXJtZWRpYXRlIHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3QgYWxsb2NhdGVcbiAgICAgIC8vICAgICAgdGhlIHN0cmluZ3Mgb24gZWFjaCBDRC5cbiAgICAgIGxldCB0b3RhbEJpbmRpbmdTbG90c1JlcXVpcmVkID0gTUlOX1NUWUxJTkdfQklORElOR19TTE9UU19SRVFVSVJFRDtcblxuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSW50ZXJwb2xhdGlvbikge1xuICAgICAgICB0b3RhbEJpbmRpbmdTbG90c1JlcXVpcmVkICs9IHZhbHVlLmV4cHJlc3Npb25zLmxlbmd0aDtcblxuICAgICAgICBpZiAoZ2V0SW50ZXJwb2xhdGlvbkV4cHJlc3Npb25Gbikge1xuICAgICAgICAgIHJlZmVyZW5jZUZvckNhbGwgPSBnZXRJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbkZuKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWxsID0ge1xuICAgICAgICBzb3VyY2VTcGFuOiBpbnB1dC5zb3VyY2VTcGFuLFxuICAgICAgICBhbGxvY2F0ZUJpbmRpbmdTbG90czogdG90YWxCaW5kaW5nU2xvdHNSZXF1aXJlZCxcbiAgICAgICAgc3VwcG9ydHNJbnRlcnBvbGF0aW9uOiAhIWdldEludGVycG9sYXRpb25FeHByZXNzaW9uRm4sXG4gICAgICAgIHBhcmFtczogKGNvbnZlcnRGbjogKHZhbHVlOiBhbnkpID0+IG8uRXhwcmVzc2lvbiB8IG8uRXhwcmVzc2lvbltdKSA9PiB7XG4gICAgICAgICAgLy8gcGFyYW1zID0+IHN0eWxpbmdQcm9wKHByb3BOYW1lLCB2YWx1ZSwgc3VmZml4fHNhbml0aXplcilcbiAgICAgICAgICBjb25zdCBwYXJhbXM6IG8uRXhwcmVzc2lvbltdID0gW107XG4gICAgICAgICAgcGFyYW1zLnB1c2goby5saXRlcmFsKGlucHV0Lm5hbWUpKTtcblxuICAgICAgICAgIGNvbnN0IGNvbnZlcnRSZXN1bHQgPSBjb252ZXJ0Rm4odmFsdWUpO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnZlcnRSZXN1bHQpKSB7XG4gICAgICAgICAgICBwYXJhbXMucHVzaCguLi5jb252ZXJ0UmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyYW1zLnB1c2goY29udmVydFJlc3VsdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gW3N0eWxlLnByb3BdIGJpbmRpbmdzIG1heSB1c2Ugc3VmZml4IHZhbHVlcyAoZS5nLiBweCwgZW0sIGV0Yy4uLikgYW5kIHRoZXlcbiAgICAgICAgICAvLyBjYW4gYWxzbyB1c2UgYSBzYW5pdGl6ZXIuIFNhbml0aXphdGlvbiBvY2N1cnMgZm9yIHVybC1iYXNlZCBlbnRyaWVzLiBIYXZpbmdcbiAgICAgICAgICAvLyB0aGUgc3VmZml4IHZhbHVlIGFuZCBhIHNhbml0aXplciB0b2dldGhlciBpbnRvIHRoZSBpbnN0cnVjdGlvbiBkb2Vzbid0IG1ha2VcbiAgICAgICAgICAvLyBhbnkgc2Vuc2UgKHVybC1iYXNlZCBlbnRyaWVzIGNhbm5vdCBiZSBzYW5pdGl6ZWQpLlxuICAgICAgICAgIGlmICghaXNDbGFzc0Jhc2VkKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudW5pdCkge1xuICAgICAgICAgICAgICBwYXJhbXMucHVzaChvLmxpdGVyYWwoaW5wdXQudW5pdCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5zYW5pdGl6ZSkge1xuICAgICAgICAgICAgICBwYXJhbXMucHVzaChvLmltcG9ydEV4cHIoUjMuZGVmYXVsdFN0eWxlU2FuaXRpemVyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gSWYgd2UgZW5kZWQgdXAgZ2VuZXJhdGluZyBhIGNhbGwgdG8gdGhlIHNhbWUgaW5zdHJ1Y3Rpb24gYXMgdGhlIHByZXZpb3VzIHN0eWxpbmcgcHJvcGVydHlcbiAgICAgIC8vIHdlIGNhbiBjaGFpbiB0aGUgY2FsbHMgdG9nZXRoZXIgc2FmZWx5IHRvIHNhdmUgc29tZSBieXRlcywgb3RoZXJ3aXNlIHdlIGhhdmUgdG8gZ2VuZXJhdGVcbiAgICAgIC8vIGEgc2VwYXJhdGUgaW5zdHJ1Y3Rpb24gY2FsbC4gVGhpcyBpcyBwcmltYXJpbHkgYSBjb25jZXJuIHdpdGggaW50ZXJwb2xhdGlvbiBpbnN0cnVjdGlvbnNcbiAgICAgIC8vIHdoZXJlIHdlIG1heSBzdGFydCBvZmYgd2l0aCBvbmUgYHJlZmVyZW5jZWAsIGJ1dCBlbmQgdXAgdXNpbmcgYW5vdGhlciBiYXNlZCBvbiB0aGVcbiAgICAgIC8vIG51bWJlciBvZiBpbnRlcnBvbGF0aW9ucy5cbiAgICAgIGlmIChwcmV2aW91c0luc3RydWN0aW9uICYmIHByZXZpb3VzSW5zdHJ1Y3Rpb24ucmVmZXJlbmNlID09PSByZWZlcmVuY2VGb3JDYWxsKSB7XG4gICAgICAgIHByZXZpb3VzSW5zdHJ1Y3Rpb24uY2FsbHMucHVzaChjYWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RydWN0aW9ucy5wdXNoKHtyZWZlcmVuY2U6IHJlZmVyZW5jZUZvckNhbGwsIGNhbGxzOiBbY2FsbF19KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBpbnN0cnVjdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIF9idWlsZENsYXNzSW5wdXRzKHZhbHVlQ29udmVydGVyOiBWYWx1ZUNvbnZlcnRlcik6IFN0eWxpbmdJbnN0cnVjdGlvbltdIHtcbiAgICBpZiAodGhpcy5fc2luZ2xlQ2xhc3NJbnB1dHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9idWlsZFNpbmdsZUlucHV0cyhcbiAgICAgICAgICBSMy5jbGFzc1Byb3AsIHRoaXMuX3NpbmdsZUNsYXNzSW5wdXRzLCB2YWx1ZUNvbnZlcnRlciwgbnVsbCwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkU3R5bGVJbnB1dHModmFsdWVDb252ZXJ0ZXI6IFZhbHVlQ29udmVydGVyKTogU3R5bGluZ0luc3RydWN0aW9uW10ge1xuICAgIGlmICh0aGlzLl9zaW5nbGVTdHlsZUlucHV0cykge1xuICAgICAgcmV0dXJuIHRoaXMuX2J1aWxkU2luZ2xlSW5wdXRzKFxuICAgICAgICAgIFIzLnN0eWxlUHJvcCwgdGhpcy5fc2luZ2xlU3R5bGVJbnB1dHMsIHZhbHVlQ29udmVydGVyLFxuICAgICAgICAgIGdldFN0eWxlUHJvcEludGVycG9sYXRpb25FeHByZXNzaW9uLCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGFsbCBpbnN0cnVjdGlvbnMgd2hpY2ggY29udGFpbiB0aGUgZXhwcmVzc2lvbnMgdGhhdCB3aWxsIGJlIHBsYWNlZFxuICAgKiBpbnRvIHRoZSB1cGRhdGUgYmxvY2sgb2YgYSB0ZW1wbGF0ZSBmdW5jdGlvbiBvciBhIGRpcmVjdGl2ZSBob3N0QmluZGluZ3MgZnVuY3Rpb24uXG4gICAqL1xuICBidWlsZFVwZGF0ZUxldmVsSW5zdHJ1Y3Rpb25zKHZhbHVlQ29udmVydGVyOiBWYWx1ZUNvbnZlcnRlcikge1xuICAgIGNvbnN0IGluc3RydWN0aW9uczogU3R5bGluZ0luc3RydWN0aW9uW10gPSBbXTtcbiAgICBpZiAodGhpcy5oYXNCaW5kaW5ncykge1xuICAgICAgY29uc3Qgc3R5bGVNYXBJbnN0cnVjdGlvbiA9IHRoaXMuYnVpbGRTdHlsZU1hcEluc3RydWN0aW9uKHZhbHVlQ29udmVydGVyKTtcbiAgICAgIGlmIChzdHlsZU1hcEluc3RydWN0aW9uKSB7XG4gICAgICAgIGluc3RydWN0aW9ucy5wdXNoKHN0eWxlTWFwSW5zdHJ1Y3Rpb24pO1xuICAgICAgfVxuICAgICAgY29uc3QgY2xhc3NNYXBJbnN0cnVjdGlvbiA9IHRoaXMuYnVpbGRDbGFzc01hcEluc3RydWN0aW9uKHZhbHVlQ29udmVydGVyKTtcbiAgICAgIGlmIChjbGFzc01hcEluc3RydWN0aW9uKSB7XG4gICAgICAgIGluc3RydWN0aW9ucy5wdXNoKGNsYXNzTWFwSW5zdHJ1Y3Rpb24pO1xuICAgICAgfVxuICAgICAgaW5zdHJ1Y3Rpb25zLnB1c2goLi4udGhpcy5fYnVpbGRTdHlsZUlucHV0cyh2YWx1ZUNvbnZlcnRlcikpO1xuICAgICAgaW5zdHJ1Y3Rpb25zLnB1c2goLi4udGhpcy5fYnVpbGRDbGFzc0lucHV0cyh2YWx1ZUNvbnZlcnRlcikpO1xuICAgIH1cbiAgICByZXR1cm4gaW5zdHJ1Y3Rpb25zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVySW50b01hcChtYXA6IE1hcDxzdHJpbmcsIG51bWJlcj4sIGtleTogc3RyaW5nKSB7XG4gIGlmICghbWFwLmhhcyhrZXkpKSB7XG4gICAgbWFwLnNldChrZXksIG1hcC5zaXplKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N0eWxlU2FuaXRpemFibGUocHJvcDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIE5vdGUgdGhhdCBicm93c2VycyBzdXBwb3J0IGJvdGggdGhlIGRhc2ggY2FzZSBhbmRcbiAgLy8gY2FtZWwgY2FzZSBwcm9wZXJ0eSBuYW1lcyB3aGVuIHNldHRpbmcgdGhyb3VnaCBKUy5cbiAgcmV0dXJuIHByb3AgPT09ICdiYWNrZ3JvdW5kLWltYWdlJyB8fCBwcm9wID09PSAnYmFja2dyb3VuZEltYWdlJyB8fCBwcm9wID09PSAnYmFja2dyb3VuZCcgfHxcbiAgICAgIHByb3AgPT09ICdib3JkZXItaW1hZ2UnIHx8IHByb3AgPT09ICdib3JkZXJJbWFnZScgfHwgcHJvcCA9PT0gJ2JvcmRlci1pbWFnZS1zb3VyY2UnIHx8XG4gICAgICBwcm9wID09PSAnYm9yZGVySW1hZ2VTb3VyY2UnIHx8IHByb3AgPT09ICdmaWx0ZXInIHx8IHByb3AgPT09ICdsaXN0LXN0eWxlJyB8fFxuICAgICAgcHJvcCA9PT0gJ2xpc3RTdHlsZScgfHwgcHJvcCA9PT0gJ2xpc3Qtc3R5bGUtaW1hZ2UnIHx8IHByb3AgPT09ICdsaXN0U3R5bGVJbWFnZScgfHxcbiAgICAgIHByb3AgPT09ICdjbGlwLXBhdGgnIHx8IHByb3AgPT09ICdjbGlwUGF0aCc7XG59XG5cbi8qKlxuICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBlaXRoZXIgcHJvdmlkZSB0aGUgY29uc3RhbnQgbGl0ZXJhbCB0aGF0IHdpbGwgaG91c2UgdGhlIHZhbHVlXG4gKiBoZXJlIG9yIGEgbnVsbCB2YWx1ZSBpZiB0aGUgcHJvdmlkZWQgdmFsdWVzIGFyZSBlbXB0eS5cbiAqL1xuZnVuY3Rpb24gZ2V0Q29uc3RhbnRMaXRlcmFsRnJvbUFycmF5KFxuICAgIGNvbnN0YW50UG9vbDogQ29uc3RhbnRQb29sLCB2YWx1ZXM6IG8uRXhwcmVzc2lvbltdKTogby5FeHByZXNzaW9uIHtcbiAgcmV0dXJuIHZhbHVlcy5sZW5ndGggPyBjb25zdGFudFBvb2wuZ2V0Q29uc3RMaXRlcmFsKG8ubGl0ZXJhbEFycih2YWx1ZXMpLCB0cnVlKSA6IG8uTlVMTF9FWFBSO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9wZXJ0eShuYW1lOiBzdHJpbmcpOlxuICAgIHtwcm9wZXJ0eTogc3RyaW5nLCB1bml0OiBzdHJpbmcsIGhhc092ZXJyaWRlRmxhZzogYm9vbGVhbn0ge1xuICBsZXQgaGFzT3ZlcnJpZGVGbGFnID0gZmFsc2U7XG4gIGNvbnN0IG92ZXJyaWRlSW5kZXggPSBuYW1lLmluZGV4T2YoSU1QT1JUQU5UX0ZMQUcpO1xuICBpZiAob3ZlcnJpZGVJbmRleCAhPT0gLTEpIHtcbiAgICBuYW1lID0gb3ZlcnJpZGVJbmRleCA+IDAgPyBuYW1lLnN1YnN0cmluZygwLCBvdmVycmlkZUluZGV4KSA6ICcnO1xuICAgIGhhc092ZXJyaWRlRmxhZyA9IHRydWU7XG4gIH1cblxuICBsZXQgdW5pdCA9ICcnO1xuICBsZXQgcHJvcGVydHkgPSBuYW1lO1xuICBjb25zdCB1bml0SW5kZXggPSBuYW1lLmxhc3RJbmRleE9mKCcuJyk7XG4gIGlmICh1bml0SW5kZXggPiAwKSB7XG4gICAgdW5pdCA9IG5hbWUuc3Vic3RyKHVuaXRJbmRleCArIDEpO1xuICAgIHByb3BlcnR5ID0gbmFtZS5zdWJzdHJpbmcoMCwgdW5pdEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7cHJvcGVydHksIHVuaXQsIGhhc092ZXJyaWRlRmxhZ307XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5zdHJ1Y3Rpb24gdG8gZ2VuZXJhdGUgZm9yIGFuIGludGVycG9sYXRlZCBjbGFzcyBtYXAuXG4gKiBAcGFyYW0gaW50ZXJwb2xhdGlvbiBBbiBJbnRlcnBvbGF0aW9uIEFTVFxuICovXG5mdW5jdGlvbiBnZXRDbGFzc01hcEludGVycG9sYXRpb25FeHByZXNzaW9uKGludGVycG9sYXRpb246IEludGVycG9sYXRpb24pOiBvLkV4dGVybmFsUmVmZXJlbmNlIHtcbiAgc3dpdGNoIChnZXRJbnRlcnBvbGF0aW9uQXJnc0xlbmd0aChpbnRlcnBvbGF0aW9uKSkge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBSMy5jbGFzc01hcDtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gUjMuY2xhc3NNYXBJbnRlcnBvbGF0ZTE7XG4gICAgY2FzZSA1OlxuICAgICAgcmV0dXJuIFIzLmNsYXNzTWFwSW50ZXJwb2xhdGUyO1xuICAgIGNhc2UgNzpcbiAgICAgIHJldHVybiBSMy5jbGFzc01hcEludGVycG9sYXRlMztcbiAgICBjYXNlIDk6XG4gICAgICByZXR1cm4gUjMuY2xhc3NNYXBJbnRlcnBvbGF0ZTQ7XG4gICAgY2FzZSAxMTpcbiAgICAgIHJldHVybiBSMy5jbGFzc01hcEludGVycG9sYXRlNTtcbiAgICBjYXNlIDEzOlxuICAgICAgcmV0dXJuIFIzLmNsYXNzTWFwSW50ZXJwb2xhdGU2O1xuICAgIGNhc2UgMTU6XG4gICAgICByZXR1cm4gUjMuY2xhc3NNYXBJbnRlcnBvbGF0ZTc7XG4gICAgY2FzZSAxNzpcbiAgICAgIHJldHVybiBSMy5jbGFzc01hcEludGVycG9sYXRlODtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFIzLmNsYXNzTWFwSW50ZXJwb2xhdGVWO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5zdHJ1Y3Rpb24gdG8gZ2VuZXJhdGUgZm9yIGFuIGludGVycG9sYXRlZCBzdHlsZSBtYXAuXG4gKiBAcGFyYW0gaW50ZXJwb2xhdGlvbiBBbiBJbnRlcnBvbGF0aW9uIEFTVFxuICovXG5mdW5jdGlvbiBnZXRTdHlsZU1hcEludGVycG9sYXRpb25FeHByZXNzaW9uKGludGVycG9sYXRpb246IEludGVycG9sYXRpb24pOiBvLkV4dGVybmFsUmVmZXJlbmNlIHtcbiAgc3dpdGNoIChnZXRJbnRlcnBvbGF0aW9uQXJnc0xlbmd0aChpbnRlcnBvbGF0aW9uKSkge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBSMy5zdHlsZU1hcDtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gUjMuc3R5bGVNYXBJbnRlcnBvbGF0ZTE7XG4gICAgY2FzZSA1OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlTWFwSW50ZXJwb2xhdGUyO1xuICAgIGNhc2UgNzpcbiAgICAgIHJldHVybiBSMy5zdHlsZU1hcEludGVycG9sYXRlMztcbiAgICBjYXNlIDk6XG4gICAgICByZXR1cm4gUjMuc3R5bGVNYXBJbnRlcnBvbGF0ZTQ7XG4gICAgY2FzZSAxMTpcbiAgICAgIHJldHVybiBSMy5zdHlsZU1hcEludGVycG9sYXRlNTtcbiAgICBjYXNlIDEzOlxuICAgICAgcmV0dXJuIFIzLnN0eWxlTWFwSW50ZXJwb2xhdGU2O1xuICAgIGNhc2UgMTU6XG4gICAgICByZXR1cm4gUjMuc3R5bGVNYXBJbnRlcnBvbGF0ZTc7XG4gICAgY2FzZSAxNzpcbiAgICAgIHJldHVybiBSMy5zdHlsZU1hcEludGVycG9sYXRlODtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlTWFwSW50ZXJwb2xhdGVWO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5zdHJ1Y3Rpb24gdG8gZ2VuZXJhdGUgZm9yIGFuIGludGVycG9sYXRlZCBzdHlsZSBwcm9wLlxuICogQHBhcmFtIGludGVycG9sYXRpb24gQW4gSW50ZXJwb2xhdGlvbiBBU1RcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wSW50ZXJwb2xhdGlvbkV4cHJlc3Npb24oaW50ZXJwb2xhdGlvbjogSW50ZXJwb2xhdGlvbikge1xuICBzd2l0Y2ggKGdldEludGVycG9sYXRpb25BcmdzTGVuZ3RoKGludGVycG9sYXRpb24pKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFIzLnN0eWxlUHJvcDtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gUjMuc3R5bGVQcm9wSW50ZXJwb2xhdGUxO1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBSMy5zdHlsZVByb3BJbnRlcnBvbGF0ZTI7XG4gICAgY2FzZSA3OlxuICAgICAgcmV0dXJuIFIzLnN0eWxlUHJvcEludGVycG9sYXRlMztcbiAgICBjYXNlIDk6XG4gICAgICByZXR1cm4gUjMuc3R5bGVQcm9wSW50ZXJwb2xhdGU0O1xuICAgIGNhc2UgMTE6XG4gICAgICByZXR1cm4gUjMuc3R5bGVQcm9wSW50ZXJwb2xhdGU1O1xuICAgIGNhc2UgMTM6XG4gICAgICByZXR1cm4gUjMuc3R5bGVQcm9wSW50ZXJwb2xhdGU2O1xuICAgIGNhc2UgMTU6XG4gICAgICByZXR1cm4gUjMuc3R5bGVQcm9wSW50ZXJwb2xhdGU3O1xuICAgIGNhc2UgMTc6XG4gICAgICByZXR1cm4gUjMuc3R5bGVQcm9wSW50ZXJwb2xhdGU4O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gUjMuc3R5bGVQcm9wSW50ZXJwb2xhdGVWO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BOYW1lKHByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBoeXBoZW5hdGUocHJvcCk7XG59XG4iXX0=