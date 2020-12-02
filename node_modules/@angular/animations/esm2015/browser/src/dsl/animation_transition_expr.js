/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_transition_expr.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
export const ANY_STATE = '*';
/**
 * @param {?} transitionValue
 * @param {?} errors
 * @return {?}
 */
export function parseTransitionExpr(transitionValue, errors) {
    /** @type {?} */
    const expressions = [];
    if (typeof transitionValue == 'string') {
        transitionValue.split(/\s*,\s*/).forEach((/**
         * @param {?} str
         * @return {?}
         */
        str => parseInnerTransitionStr(str, expressions, errors)));
    }
    else {
        expressions.push((/** @type {?} */ (transitionValue)));
    }
    return expressions;
}
/**
 * @param {?} eventStr
 * @param {?} expressions
 * @param {?} errors
 * @return {?}
 */
function parseInnerTransitionStr(eventStr, expressions, errors) {
    if (eventStr[0] == ':') {
        /** @type {?} */
        const result = parseAnimationAlias(eventStr, errors);
        if (typeof result == 'function') {
            expressions.push(result);
            return;
        }
        eventStr = result;
    }
    /** @type {?} */
    const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
    if (match == null || match.length < 4) {
        errors.push(`The provided transition expression "${eventStr}" is not supported`);
        return expressions;
    }
    /** @type {?} */
    const fromState = match[1];
    /** @type {?} */
    const separator = match[2];
    /** @type {?} */
    const toState = match[3];
    expressions.push(makeLambdaFromStates(fromState, toState));
    /** @type {?} */
    const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
    if (separator[0] == '<' && !isFullAnyStateExpr) {
        expressions.push(makeLambdaFromStates(toState, fromState));
    }
}
/**
 * @param {?} alias
 * @param {?} errors
 * @return {?}
 */
function parseAnimationAlias(alias, errors) {
    switch (alias) {
        case ':enter':
            return 'void => *';
        case ':leave':
            return '* => void';
        case ':increment':
            return (/**
             * @param {?} fromState
             * @param {?} toState
             * @return {?}
             */
            (fromState, toState) => parseFloat(toState) > parseFloat(fromState));
        case ':decrement':
            return (/**
             * @param {?} fromState
             * @param {?} toState
             * @return {?}
             */
            (fromState, toState) => parseFloat(toState) < parseFloat(fromState));
        default:
            errors.push(`The transition alias value "${alias}" is not supported`);
            return '* => *';
    }
}
// DO NOT REFACTOR ... keep the follow set instantiations
// with the values intact (closure compiler for some reason
// removes follow-up lines that add the values outside of
// the constructor...
/** @type {?} */
const TRUE_BOOLEAN_VALUES = new Set(['true', '1']);
/** @type {?} */
const FALSE_BOOLEAN_VALUES = new Set(['false', '0']);
/**
 * @param {?} lhs
 * @param {?} rhs
 * @return {?}
 */
function makeLambdaFromStates(lhs, rhs) {
    /** @type {?} */
    const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
    /** @type {?} */
    const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
    return (/**
     * @param {?} fromState
     * @param {?} toState
     * @return {?}
     */
    (fromState, toState) => {
        /** @type {?} */
        let lhsMatch = lhs == ANY_STATE || lhs == fromState;
        /** @type {?} */
        let rhsMatch = rhs == ANY_STATE || rhs == toState;
        if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === 'boolean') {
            lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
        }
        if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === 'boolean') {
            rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
        }
        return lhsMatch && rhsMatch;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX3RyYW5zaXRpb25fZXhwci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuaW1hdGlvbnMvYnJvd3Nlci9zcmMvZHNsL2FuaW1hdGlvbl90cmFuc2l0aW9uX2V4cHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU9BLE1BQU0sT0FBTyxTQUFTLEdBQUcsR0FBRzs7Ozs7O0FBSTVCLE1BQU0sVUFBVSxtQkFBbUIsQ0FDL0IsZUFBMkMsRUFBRSxNQUFnQjs7VUFDekQsV0FBVyxHQUEwQixFQUFFO0lBQzdDLElBQUksT0FBTyxlQUFlLElBQUksUUFBUSxFQUFFO1FBQ3RDLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTzs7OztRQUNwQyxHQUFHLENBQUMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLEVBQUMsQ0FBQztLQUMvRDtTQUFNO1FBQ0wsV0FBVyxDQUFDLElBQUksQ0FBQyxtQkFBcUIsZUFBZSxFQUFBLENBQUMsQ0FBQztLQUN4RDtJQUNELE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLHVCQUF1QixDQUM1QixRQUFnQixFQUFFLFdBQWtDLEVBQUUsTUFBZ0I7SUFDeEUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFOztjQUNoQixNQUFNLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUNwRCxJQUFJLE9BQU8sTUFBTSxJQUFJLFVBQVUsRUFBRTtZQUMvQixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLE9BQU87U0FDUjtRQUNELFFBQVEsR0FBRyxNQUFNLENBQUM7S0FDbkI7O1VBRUssS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUM7SUFD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QUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkY7UUFFRCxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUM7SUFDOUIsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmV4cG9ydCBjb25zdCBBTllfU1RBVEUgPSAnKic7XG5leHBvcnQgZGVjbGFyZSB0eXBlIFRyYW5zaXRpb25NYXRjaGVyRm4gPVxuICAgIChmcm9tU3RhdGU6IGFueSwgdG9TdGF0ZTogYW55LCBlbGVtZW50OiBhbnksIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pID0+IGJvb2xlYW47XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyYW5zaXRpb25FeHByKFxuICAgIHRyYW5zaXRpb25WYWx1ZTogc3RyaW5nfFRyYW5zaXRpb25NYXRjaGVyRm4sIGVycm9yczogc3RyaW5nW10pOiBUcmFuc2l0aW9uTWF0Y2hlckZuW10ge1xuICBjb25zdCBleHByZXNzaW9uczogVHJhbnNpdGlvbk1hdGNoZXJGbltdID0gW107XG4gIGlmICh0eXBlb2YgdHJhbnNpdGlvblZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgdHJhbnNpdGlvblZhbHVlLnNwbGl0KC9cXHMqLFxccyovKS5mb3JFYWNoKFxuICAgICAgICBzdHIgPT4gcGFyc2VJbm5lclRyYW5zaXRpb25TdHIoc3RyLCBleHByZXNzaW9ucywgZXJyb3JzKSk7XG4gIH0gZWxzZSB7XG4gICAgZXhwcmVzc2lvbnMucHVzaCg8VHJhbnNpdGlvbk1hdGNoZXJGbj50cmFuc2l0aW9uVmFsdWUpO1xuICB9XG4gIHJldHVybiBleHByZXNzaW9ucztcbn1cblxuZnVuY3Rpb24gcGFyc2VJbm5lclRyYW5zaXRpb25TdHIoXG4gICAgZXZlbnRTdHI6IHN0cmluZywgZXhwcmVzc2lvbnM6IFRyYW5zaXRpb25NYXRjaGVyRm5bXSwgZXJyb3JzOiBzdHJpbmdbXSkge1xuICBpZiAoZXZlbnRTdHJbMF0gPT0gJzonKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gcGFyc2VBbmltYXRpb25BbGlhcyhldmVudFN0ciwgZXJyb3JzKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBleHByZXNzaW9ucy5wdXNoKHJlc3VsdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50U3RyID0gcmVzdWx0O1xuICB9XG5cbiAgY29uc3QgbWF0Y2ggPSBldmVudFN0ci5tYXRjaCgvXihcXCp8Wy1cXHddKylcXHMqKDw/Wz0tXT4pXFxzKihcXCp8Wy1cXHddKykkLyk7XG4gIGlmIChtYXRjaCA9PSBudWxsIHx8IG1hdGNoLmxlbmd0aCA8IDQpIHtcbiAgICBlcnJvcnMucHVzaChgVGhlIHByb3ZpZGVkIHRyYW5zaXRpb24gZXhwcmVzc2lvbiBcIiR7ZXZlbnRTdHJ9XCIgaXMgbm90IHN1cHBvcnRlZGApO1xuICAgIHJldHVybiBleHByZXNzaW9ucztcbiAgfVxuXG4gIGNvbnN0IGZyb21TdGF0ZSA9IG1hdGNoWzFdO1xuICBjb25zdCBzZXBhcmF0b3IgPSBtYXRjaFsyXTtcbiAgY29uc3QgdG9TdGF0ZSA9IG1hdGNoWzNdO1xuICBleHByZXNzaW9ucy5wdXNoKG1ha2VMYW1iZGFGcm9tU3RhdGVzKGZyb21TdGF0ZSwgdG9TdGF0ZSkpO1xuXG4gIGNvbnN0IGlzRnVsbEFueVN0YXRlRXhwciA9IGZyb21TdGF0ZSA9PSBBTllfU1RBVEUgJiYgdG9TdGF0ZSA9PSBBTllfU1RBVEU7XG4gIGlmIChzZXBhcmF0b3JbMF0gPT0gJzwnICYmICFpc0Z1bGxBbnlTdGF0ZUV4cHIpIHtcbiAgICBleHByZXNzaW9ucy5wdXNoKG1ha2VMYW1iZGFGcm9tU3RhdGVzKHRvU3RhdGUsIGZyb21TdGF0ZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlQW5pbWF0aW9uQWxpYXMoYWxpYXM6IHN0cmluZywgZXJyb3JzOiBzdHJpbmdbXSk6IHN0cmluZ3xUcmFuc2l0aW9uTWF0Y2hlckZuIHtcbiAgc3dpdGNoIChhbGlhcykge1xuICAgIGNhc2UgJzplbnRlcic6XG4gICAgICByZXR1cm4gJ3ZvaWQgPT4gKic7XG4gICAgY2FzZSAnOmxlYXZlJzpcbiAgICAgIHJldHVybiAnKiA9PiB2b2lkJztcbiAgICBjYXNlICc6aW5jcmVtZW50JzpcbiAgICAgIHJldHVybiAoZnJvbVN0YXRlOiBhbnksIHRvU3RhdGU6IGFueSk6IGJvb2xlYW4gPT4gcGFyc2VGbG9hdCh0b1N0YXRlKSA+IHBhcnNlRmxvYXQoZnJvbVN0YXRlKTtcbiAgICBjYXNlICc6ZGVjcmVtZW50JzpcbiAgICAgIHJldHVybiAoZnJvbVN0YXRlOiBhbnksIHRvU3RhdGU6IGFueSk6IGJvb2xlYW4gPT4gcGFyc2VGbG9hdCh0b1N0YXRlKSA8IHBhcnNlRmxvYXQoZnJvbVN0YXRlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgZXJyb3JzLnB1c2goYFRoZSB0cmFuc2l0aW9uIGFsaWFzIHZhbHVlIFwiJHthbGlhc31cIiBpcyBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICByZXR1cm4gJyogPT4gKic7XG4gIH1cbn1cblxuLy8gRE8gTk9UIFJFRkFDVE9SIC4uLiBrZWVwIHRoZSBmb2xsb3cgc2V0IGluc3RhbnRpYXRpb25zXG4vLyB3aXRoIHRoZSB2YWx1ZXMgaW50YWN0IChjbG9zdXJlIGNvbXBpbGVyIGZvciBzb21lIHJlYXNvblxuLy8gcmVtb3ZlcyBmb2xsb3ctdXAgbGluZXMgdGhhdCBhZGQgdGhlIHZhbHVlcyBvdXRzaWRlIG9mXG4vLyB0aGUgY29uc3RydWN0b3IuLi5cbmNvbnN0IFRSVUVfQk9PTEVBTl9WQUxVRVMgPSBuZXcgU2V0PHN0cmluZz4oWyd0cnVlJywgJzEnXSk7XG5jb25zdCBGQUxTRV9CT09MRUFOX1ZBTFVFUyA9IG5ldyBTZXQ8c3RyaW5nPihbJ2ZhbHNlJywgJzAnXSk7XG5cbmZ1bmN0aW9uIG1ha2VMYW1iZGFGcm9tU3RhdGVzKGxoczogc3RyaW5nLCByaHM6IHN0cmluZyk6IFRyYW5zaXRpb25NYXRjaGVyRm4ge1xuICBjb25zdCBMSFNfTUFUQ0hfQk9PTEVBTiA9IFRSVUVfQk9PTEVBTl9WQUxVRVMuaGFzKGxocykgfHwgRkFMU0VfQk9PTEVBTl9WQUxVRVMuaGFzKGxocyk7XG4gIGNvbnN0IFJIU19NQVRDSF9CT09MRUFOID0gVFJVRV9CT09MRUFOX1ZBTFVFUy5oYXMocmhzKSB8fCBGQUxTRV9CT09MRUFOX1ZBTFVFUy5oYXMocmhzKTtcblxuICByZXR1cm4gKGZyb21TdGF0ZTogYW55LCB0b1N0YXRlOiBhbnkpOiBib29sZWFuID0+IHtcbiAgICBsZXQgbGhzTWF0Y2ggPSBsaHMgPT0gQU5ZX1NUQVRFIHx8IGxocyA9PSBmcm9tU3RhdGU7XG4gICAgbGV0IHJoc01hdGNoID0gcmhzID09IEFOWV9TVEFURSB8fCByaHMgPT0gdG9TdGF0ZTtcblxuICAgIGlmICghbGhzTWF0Y2ggJiYgTEhTX01BVENIX0JPT0xFQU4gJiYgdHlwZW9mIGZyb21TdGF0ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBsaHNNYXRjaCA9IGZyb21TdGF0ZSA/IFRSVUVfQk9PTEVBTl9WQUxVRVMuaGFzKGxocykgOiBGQUxTRV9CT09MRUFOX1ZBTFVFUy5oYXMobGhzKTtcbiAgICB9XG4gICAgaWYgKCFyaHNNYXRjaCAmJiBSSFNfTUFUQ0hfQk9PTEVBTiAmJiB0eXBlb2YgdG9TdGF0ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByaHNNYXRjaCA9IHRvU3RhdGUgPyBUUlVFX0JPT0xFQU5fVkFMVUVTLmhhcyhyaHMpIDogRkFMU0VfQk9PTEVBTl9WQUxVRVMuaGFzKHJocyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxoc01hdGNoICYmIHJoc01hdGNoO1xuICB9O1xufVxuIl19