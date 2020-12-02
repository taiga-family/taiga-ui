/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/style_normalization/web_animations_style_normalizer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { dashCaseToCamelCase } from '../../util';
import { AnimationStyleNormalizer } from './animation_style_normalizer';
export class WebAnimationsStyleNormalizer extends AnimationStyleNormalizer {
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    normalizePropertyName(propertyName, errors) {
        return dashCaseToCamelCase(propertyName);
    }
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
        /** @type {?} */
        let unit = '';
        /** @type {?} */
        const strVal = value.toString().trim();
        if (DIMENSIONAL_PROP_MAP[normalizedProperty] && value !== 0 && value !== '0') {
            if (typeof value === 'number') {
                unit = 'px';
            }
            else {
                /** @type {?} */
                const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
                if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
                    errors.push(`Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
                }
            }
        }
        return strVal + unit;
    }
}
const ɵ0 = /**
 * @return {?}
 */
() => makeBooleanMap('width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'
    .split(','));
/** @type {?} */
const DIMENSIONAL_PROP_MAP = ((ɵ0))();
/**
 * @param {?} keys
 * @return {?}
 */
function makeBooleanMap(keys) {
    /** @type {?} */
    const map = {};
    keys.forEach((/**
     * @param {?} key
     * @return {?}
     */
    key => map[key] = true));
    return map;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViX2FuaW1hdGlvbnNfc3R5bGVfbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuaW1hdGlvbnMvYnJvd3Nlci9zcmMvZHNsL3N0eWxlX25vcm1hbGl6YXRpb24vd2ViX2FuaW1hdGlvbnNfc3R5bGVfbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFL0MsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFFdEUsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHdCQUF3Qjs7Ozs7O0lBQ3hFLHFCQUFxQixDQUFDLFlBQW9CLEVBQUUsTUFBZ0I7UUFDMUQsT0FBTyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7OztJQUVELG1CQUFtQixDQUNmLG9CQUE0QixFQUFFLGtCQUEwQixFQUFFLEtBQW9CLEVBQzlFLE1BQWdCOztZQUNkLElBQUksR0FBVyxFQUFFOztjQUNmLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFO1FBRXRDLElBQUksb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxHQUFHLEVBQUU7WUFDNUUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzdCLElBQUksR0FBRyxJQUFJLENBQUM7YUFDYjtpQkFBTTs7c0JBQ0MsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztnQkFDL0QsSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxvQkFBb0IsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNyRjthQUNGO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztDQUNGOzs7O0FBR0ksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUNoQixnVUFBZ1U7S0FDM1QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztNQUhuQixvQkFBb0IsR0FDdEIsTUFFc0IsRUFBRTs7Ozs7QUFFNUIsU0FBUyxjQUFjLENBQUMsSUFBYzs7VUFDOUIsR0FBRyxHQUE2QixFQUFFO0lBQ3hDLElBQUksQ0FBQyxPQUFPOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFDLENBQUM7SUFDckMsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtkYXNoQ2FzZVRvQ2FtZWxDYXNlfSBmcm9tICcuLi8uLi91dGlsJztcblxuaW1wb3J0IHtBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXJ9IGZyb20gJy4vYW5pbWF0aW9uX3N0eWxlX25vcm1hbGl6ZXInO1xuXG5leHBvcnQgY2xhc3MgV2ViQW5pbWF0aW9uc1N0eWxlTm9ybWFsaXplciBleHRlbmRzIEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciB7XG4gIG5vcm1hbGl6ZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgZXJyb3JzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRhc2hDYXNlVG9DYW1lbENhc2UocHJvcGVydHlOYW1lKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZVN0eWxlVmFsdWUoXG4gICAgICB1c2VyUHJvdmlkZWRQcm9wZXJ0eTogc3RyaW5nLCBub3JtYWxpemVkUHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZ3xudW1iZXIsXG4gICAgICBlcnJvcnM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBsZXQgdW5pdDogc3RyaW5nID0gJyc7XG4gICAgY29uc3Qgc3RyVmFsID0gdmFsdWUudG9TdHJpbmcoKS50cmltKCk7XG5cbiAgICBpZiAoRElNRU5TSU9OQUxfUFJPUF9NQVBbbm9ybWFsaXplZFByb3BlcnR5XSAmJiB2YWx1ZSAhPT0gMCAmJiB2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICB1bml0ID0gJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhbEFuZFN1ZmZpeE1hdGNoID0gdmFsdWUubWF0Y2goL15bKy1dP1tcXGRcXC5dKyhbYS16XSopJC8pO1xuICAgICAgICBpZiAodmFsQW5kU3VmZml4TWF0Y2ggJiYgdmFsQW5kU3VmZml4TWF0Y2hbMV0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChgUGxlYXNlIHByb3ZpZGUgYSBDU1MgdW5pdCB2YWx1ZSBmb3IgJHt1c2VyUHJvdmlkZWRQcm9wZXJ0eX06JHt2YWx1ZX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyVmFsICsgdW5pdDtcbiAgfVxufVxuXG5jb25zdCBESU1FTlNJT05BTF9QUk9QX01BUCA9XG4gICAgKCgpID0+IG1ha2VCb29sZWFuTWFwKFxuICAgICAgICAgJ3dpZHRoLGhlaWdodCxtaW5XaWR0aCxtaW5IZWlnaHQsbWF4V2lkdGgsbWF4SGVpZ2h0LGxlZnQsdG9wLGJvdHRvbSxyaWdodCxmb250U2l6ZSxvdXRsaW5lV2lkdGgsb3V0bGluZU9mZnNldCxwYWRkaW5nVG9wLHBhZGRpbmdMZWZ0LHBhZGRpbmdCb3R0b20scGFkZGluZ1JpZ2h0LG1hcmdpblRvcCxtYXJnaW5MZWZ0LG1hcmdpbkJvdHRvbSxtYXJnaW5SaWdodCxib3JkZXJSYWRpdXMsYm9yZGVyV2lkdGgsYm9yZGVyVG9wV2lkdGgsYm9yZGVyTGVmdFdpZHRoLGJvcmRlclJpZ2h0V2lkdGgsYm9yZGVyQm90dG9tV2lkdGgsdGV4dEluZGVudCxwZXJzcGVjdGl2ZSdcbiAgICAgICAgICAgICAuc3BsaXQoJywnKSkpKCk7XG5cbmZ1bmN0aW9uIG1ha2VCb29sZWFuTWFwKGtleXM6IHN0cmluZ1tdKToge1trZXk6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgY29uc3QgbWFwOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0gPSB7fTtcbiAga2V5cy5mb3JFYWNoKGtleSA9PiBtYXBba2V5XSA9IHRydWUpO1xuICByZXR1cm4gbWFwO1xufVxuIl19