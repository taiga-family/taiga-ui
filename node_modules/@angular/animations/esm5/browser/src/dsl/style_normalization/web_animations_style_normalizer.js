import { __extends } from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { dashCaseToCamelCase } from '../../util';
import { AnimationStyleNormalizer } from './animation_style_normalizer';
var WebAnimationsStyleNormalizer = /** @class */ (function (_super) {
    __extends(WebAnimationsStyleNormalizer, _super);
    function WebAnimationsStyleNormalizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebAnimationsStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) {
        return dashCaseToCamelCase(propertyName);
    };
    WebAnimationsStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) {
        var unit = '';
        var strVal = value.toString().trim();
        if (DIMENSIONAL_PROP_MAP[normalizedProperty] && value !== 0 && value !== '0') {
            if (typeof value === 'number') {
                unit = 'px';
            }
            else {
                var valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
                if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
                    errors.push("Please provide a CSS unit value for " + userProvidedProperty + ":" + value);
                }
            }
        }
        return strVal + unit;
    };
    return WebAnimationsStyleNormalizer;
}(AnimationStyleNormalizer));
export { WebAnimationsStyleNormalizer };
var ɵ0 = function () { return makeBooleanMap('width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'
    .split(',')); };
var DIMENSIONAL_PROP_MAP = (ɵ0)();
function makeBooleanMap(keys) {
    var map = {};
    keys.forEach(function (key) { return map[key] = true; });
    return map;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViX2FuaW1hdGlvbnNfc3R5bGVfbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuaW1hdGlvbnMvYnJvd3Nlci9zcmMvZHNsL3N0eWxlX25vcm1hbGl6YXRpb24vd2ViX2FuaW1hdGlvbnNfc3R5bGVfbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sWUFBWSxDQUFDO0FBRS9DLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRXRFO0lBQWtELGdEQUF3QjtJQUExRTs7SUF1QkEsQ0FBQztJQXRCQyw0REFBcUIsR0FBckIsVUFBc0IsWUFBb0IsRUFBRSxNQUFnQjtRQUMxRCxPQUFPLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwwREFBbUIsR0FBbkIsVUFDSSxvQkFBNEIsRUFBRSxrQkFBMEIsRUFBRSxLQUFvQixFQUM5RSxNQUFnQjtRQUNsQixJQUFJLElBQUksR0FBVyxFQUFFLENBQUM7UUFDdEIsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXZDLElBQUksb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxHQUFHLEVBQUU7WUFDNUUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzdCLElBQUksR0FBRyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxJQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLHlDQUF1QyxvQkFBb0IsU0FBSSxLQUFPLENBQUMsQ0FBQztpQkFDckY7YUFDRjtTQUNGO1FBQ0QsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxtQ0FBQztBQUFELENBQUMsQUF2QkQsQ0FBa0Qsd0JBQXdCLEdBdUJ6RTs7U0FHSSxjQUFNLE9BQUEsY0FBYyxDQUNoQixnVUFBZ1U7S0FDM1QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBRmQsQ0FFYztBQUh6QixJQUFNLG9CQUFvQixHQUN0QixJQUVzQixFQUFFLENBQUM7QUFFN0IsU0FBUyxjQUFjLENBQUMsSUFBYztJQUNwQyxJQUFNLEdBQUcsR0FBNkIsRUFBRSxDQUFDO0lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7ZGFzaENhc2VUb0NhbWVsQ2FzZX0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmltcG9ydCB7QW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyfSBmcm9tICcuL2FuaW1hdGlvbl9zdHlsZV9ub3JtYWxpemVyJztcblxuZXhwb3J0IGNsYXNzIFdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIgZXh0ZW5kcyBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIge1xuICBub3JtYWxpemVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGVycm9yczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiBkYXNoQ2FzZVRvQ2FtZWxDYXNlKHByb3BlcnR5TmFtZSk7XG4gIH1cblxuICBub3JtYWxpemVTdHlsZVZhbHVlKFxuICAgICAgdXNlclByb3ZpZGVkUHJvcGVydHk6IHN0cmluZywgbm9ybWFsaXplZFByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd8bnVtYmVyLFxuICAgICAgZXJyb3JzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgbGV0IHVuaXQ6IHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IHN0clZhbCA9IHZhbHVlLnRvU3RyaW5nKCkudHJpbSgpO1xuXG4gICAgaWYgKERJTUVOU0lPTkFMX1BST1BfTUFQW25vcm1hbGl6ZWRQcm9wZXJ0eV0gJiYgdmFsdWUgIT09IDAgJiYgdmFsdWUgIT09ICcwJykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdW5pdCA9ICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWxBbmRTdWZmaXhNYXRjaCA9IHZhbHVlLm1hdGNoKC9eWystXT9bXFxkXFwuXSsoW2Etel0qKSQvKTtcbiAgICAgICAgaWYgKHZhbEFuZFN1ZmZpeE1hdGNoICYmIHZhbEFuZFN1ZmZpeE1hdGNoWzFdLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goYFBsZWFzZSBwcm92aWRlIGEgQ1NTIHVuaXQgdmFsdWUgZm9yICR7dXNlclByb3ZpZGVkUHJvcGVydHl9OiR7dmFsdWV9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0clZhbCArIHVuaXQ7XG4gIH1cbn1cblxuY29uc3QgRElNRU5TSU9OQUxfUFJPUF9NQVAgPVxuICAgICgoKSA9PiBtYWtlQm9vbGVhbk1hcChcbiAgICAgICAgICd3aWR0aCxoZWlnaHQsbWluV2lkdGgsbWluSGVpZ2h0LG1heFdpZHRoLG1heEhlaWdodCxsZWZ0LHRvcCxib3R0b20scmlnaHQsZm9udFNpemUsb3V0bGluZVdpZHRoLG91dGxpbmVPZmZzZXQscGFkZGluZ1RvcCxwYWRkaW5nTGVmdCxwYWRkaW5nQm90dG9tLHBhZGRpbmdSaWdodCxtYXJnaW5Ub3AsbWFyZ2luTGVmdCxtYXJnaW5Cb3R0b20sbWFyZ2luUmlnaHQsYm9yZGVyUmFkaXVzLGJvcmRlcldpZHRoLGJvcmRlclRvcFdpZHRoLGJvcmRlckxlZnRXaWR0aCxib3JkZXJSaWdodFdpZHRoLGJvcmRlckJvdHRvbVdpZHRoLHRleHRJbmRlbnQscGVyc3BlY3RpdmUnXG4gICAgICAgICAgICAgLnNwbGl0KCcsJykpKSgpO1xuXG5mdW5jdGlvbiBtYWtlQm9vbGVhbk1hcChrZXlzOiBzdHJpbmdbXSk6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSB7XG4gIGNvbnN0IG1hcDoge1trZXk6IHN0cmluZ106IGJvb2xlYW59ID0ge307XG4gIGtleXMuZm9yRWFjaChrZXkgPT4gbWFwW2tleV0gPSB0cnVlKTtcbiAgcmV0dXJuIG1hcDtcbn1cbiJdfQ==