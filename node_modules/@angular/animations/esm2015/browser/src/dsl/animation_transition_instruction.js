/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_transition_instruction.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AnimationTransitionInstruction() { }
if (false) {
    /** @type {?} */
    AnimationTransitionInstruction.prototype.element;
    /** @type {?} */
    AnimationTransitionInstruction.prototype.triggerName;
    /** @type {?} */
    AnimationTransitionInstruction.prototype.isRemovalTransition;
    /** @type {?} */
    AnimationTransitionInstruction.prototype.fromState;
    /** @type {?} */
    AnimationTransitionInstruction.prototype.fromStyles;
    /** @type {?} */
    AnimationTransitionInstruction.prototype.toState;
    /** @type {?} */
    AnimationTransitionInstruction.prototype.toStyles;
    /** @type {?} */
    AnimationTransitionInstruction.prototype.timelines;
    /** @type {?} */
    AnimationTransitionInstruction.prototype.queriedElements;
    /** @type {?} */
    AnimationTransitionInstruction.prototype.preStyleProps;
    /** @type {?} */
    AnimationTransitionInstruction.prototype.postStyleProps;
    /** @type {?} */
    AnimationTransitionInstruction.prototype.totalTime;
    /** @type {?|undefined} */
    AnimationTransitionInstruction.prototype.errors;
}
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} isRemovalTransition
 * @param {?} fromStyles
 * @param {?} toStyles
 * @param {?} timelines
 * @param {?} queriedElements
 * @param {?} preStyleProps
 * @param {?} postStyleProps
 * @param {?} totalTime
 * @param {?=} errors
 * @return {?}
 */
export function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
    return {
        type: 0 /* TransitionAnimation */,
        element,
        triggerName,
        isRemovalTransition,
        fromState,
        fromStyles,
        toState,
        toStyles,
        timelines,
        queriedElements,
        preStyleProps,
        postStyleProps,
        totalTime,
        errors
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX3RyYW5zaXRpb25faW5zdHJ1Y3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL2RzbC9hbmltYXRpb25fdHJhbnNpdGlvbl9pbnN0cnVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVdBLG9EQWNDOzs7SUFiQyxpREFBYTs7SUFDYixxREFBb0I7O0lBQ3BCLDZEQUE2Qjs7SUFDN0IsbURBQWtCOztJQUNsQixvREFBdUI7O0lBQ3ZCLGlEQUFnQjs7SUFDaEIsa0RBQXFCOztJQUNyQixtREFBMEM7O0lBQzFDLHlEQUF1Qjs7SUFDdkIsdURBQW1EOztJQUNuRCx3REFBb0Q7O0lBQ3BELG1EQUFrQjs7SUFDbEIsZ0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdqQixNQUFNLFVBQVUsMkJBQTJCLENBQ3ZDLE9BQVksRUFBRSxXQUFtQixFQUFFLFNBQWlCLEVBQUUsT0FBZSxFQUNyRSxtQkFBNEIsRUFBRSxVQUFzQixFQUFFLFFBQW9CLEVBQzFFLFNBQXlDLEVBQUUsZUFBc0IsRUFDakUsYUFBa0QsRUFDbEQsY0FBbUQsRUFBRSxTQUFpQixFQUN0RSxNQUFjO0lBQ2hCLE9BQU87UUFDTCxJQUFJLDZCQUF3RDtRQUM1RCxPQUFPO1FBQ1AsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1QsVUFBVTtRQUNWLE9BQU87UUFDUCxRQUFRO1FBQ1IsU0FBUztRQUNULGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLFNBQVM7UUFDVCxNQUFNO0tBQ1AsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge8m1U3R5bGVEYXRhfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7QW5pbWF0aW9uRW5naW5lSW5zdHJ1Y3Rpb24sIEFuaW1hdGlvblRyYW5zaXRpb25JbnN0cnVjdGlvblR5cGV9IGZyb20gJy4uL3JlbmRlci9hbmltYXRpb25fZW5naW5lX2luc3RydWN0aW9uJztcbmltcG9ydCB7QW5pbWF0aW9uVGltZWxpbmVJbnN0cnVjdGlvbn0gZnJvbSAnLi9hbmltYXRpb25fdGltZWxpbmVfaW5zdHJ1Y3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvblRyYW5zaXRpb25JbnN0cnVjdGlvbiBleHRlbmRzIEFuaW1hdGlvbkVuZ2luZUluc3RydWN0aW9uIHtcbiAgZWxlbWVudDogYW55O1xuICB0cmlnZ2VyTmFtZTogc3RyaW5nO1xuICBpc1JlbW92YWxUcmFuc2l0aW9uOiBib29sZWFuO1xuICBmcm9tU3RhdGU6IHN0cmluZztcbiAgZnJvbVN0eWxlczogybVTdHlsZURhdGE7XG4gIHRvU3RhdGU6IHN0cmluZztcbiAgdG9TdHlsZXM6IMm1U3R5bGVEYXRhO1xuICB0aW1lbGluZXM6IEFuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb25bXTtcbiAgcXVlcmllZEVsZW1lbnRzOiBhbnlbXTtcbiAgcHJlU3R5bGVQcm9wczogTWFwPGFueSwge1twcm9wOiBzdHJpbmddOiBib29sZWFufT47XG4gIHBvc3RTdHlsZVByb3BzOiBNYXA8YW55LCB7W3Byb3A6IHN0cmluZ106IGJvb2xlYW59PjtcbiAgdG90YWxUaW1lOiBudW1iZXI7XG4gIGVycm9ycz86IGFueVtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhbnNpdGlvbkluc3RydWN0aW9uKFxuICAgIGVsZW1lbnQ6IGFueSwgdHJpZ2dlck5hbWU6IHN0cmluZywgZnJvbVN0YXRlOiBzdHJpbmcsIHRvU3RhdGU6IHN0cmluZyxcbiAgICBpc1JlbW92YWxUcmFuc2l0aW9uOiBib29sZWFuLCBmcm9tU3R5bGVzOiDJtVN0eWxlRGF0YSwgdG9TdHlsZXM6IMm1U3R5bGVEYXRhLFxuICAgIHRpbWVsaW5lczogQW5pbWF0aW9uVGltZWxpbmVJbnN0cnVjdGlvbltdLCBxdWVyaWVkRWxlbWVudHM6IGFueVtdLFxuICAgIHByZVN0eWxlUHJvcHM6IE1hcDxhbnksIHtbcHJvcDogc3RyaW5nXTogYm9vbGVhbn0+LFxuICAgIHBvc3RTdHlsZVByb3BzOiBNYXA8YW55LCB7W3Byb3A6IHN0cmluZ106IGJvb2xlYW59PiwgdG90YWxUaW1lOiBudW1iZXIsXG4gICAgZXJyb3JzPzogYW55W10pOiBBbmltYXRpb25UcmFuc2l0aW9uSW5zdHJ1Y3Rpb24ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFuaW1hdGlvblRyYW5zaXRpb25JbnN0cnVjdGlvblR5cGUuVHJhbnNpdGlvbkFuaW1hdGlvbixcbiAgICBlbGVtZW50LFxuICAgIHRyaWdnZXJOYW1lLFxuICAgIGlzUmVtb3ZhbFRyYW5zaXRpb24sXG4gICAgZnJvbVN0YXRlLFxuICAgIGZyb21TdHlsZXMsXG4gICAgdG9TdGF0ZSxcbiAgICB0b1N0eWxlcyxcbiAgICB0aW1lbGluZXMsXG4gICAgcXVlcmllZEVsZW1lbnRzLFxuICAgIHByZVN0eWxlUHJvcHMsXG4gICAgcG9zdFN0eWxlUHJvcHMsXG4gICAgdG90YWxUaW1lLFxuICAgIGVycm9yc1xuICB9O1xufVxuIl19