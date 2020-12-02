/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_dsl_visitor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AnimationDslVisitor() { }
if (false) {
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitTrigger = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitState = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitTransition = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitSequence = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitGroup = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitAnimate = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitStyle = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitKeyframes = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitReference = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitAnimateChild = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitAnimateRef = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitQuery = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitStagger = function (node, context) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX2RzbF92aXNpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3NyYy9kc2wvYW5pbWF0aW9uX2RzbF92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBU0EseUNBY0M7Ozs7Ozs7SUFiQywwRUFBZ0U7Ozs7OztJQUNoRSx3RUFBNEQ7Ozs7OztJQUM1RCw2RUFBc0U7Ozs7OztJQUN0RSwyRUFBa0U7Ozs7OztJQUNsRSx3RUFBNEQ7Ozs7OztJQUM1RCwwRUFBZ0U7Ozs7OztJQUNoRSx3RUFBNEQ7Ozs7OztJQUM1RCw0RUFBNEU7Ozs7OztJQUM1RSw0RUFBb0U7Ozs7OztJQUNwRSwrRUFBMEU7Ozs7OztJQUMxRSw2RUFBc0U7Ozs7OztJQUN0RSx3RUFBNEQ7Ozs7OztJQUM1RCwwRUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FuaW1hdGlvbkFuaW1hdGVDaGlsZE1ldGFkYXRhLCBBbmltYXRpb25BbmltYXRlTWV0YWRhdGEsIEFuaW1hdGlvbkFuaW1hdGVSZWZNZXRhZGF0YSwgQW5pbWF0aW9uR3JvdXBNZXRhZGF0YSwgQW5pbWF0aW9uS2V5ZnJhbWVzU2VxdWVuY2VNZXRhZGF0YSwgQW5pbWF0aW9uTWV0YWRhdGEsIEFuaW1hdGlvblF1ZXJ5TWV0YWRhdGEsIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLCBBbmltYXRpb25TZXF1ZW5jZU1ldGFkYXRhLCBBbmltYXRpb25TdGFnZ2VyTWV0YWRhdGEsIEFuaW1hdGlvblN0YXRlTWV0YWRhdGEsIEFuaW1hdGlvblN0eWxlTWV0YWRhdGEsIEFuaW1hdGlvblRyYW5zaXRpb25NZXRhZGF0YSwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25Ec2xWaXNpdG9yIHtcbiAgdmlzaXRUcmlnZ2VyKG5vZGU6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFN0YXRlKG5vZGU6IEFuaW1hdGlvblN0YXRlTWV0YWRhdGEsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRUcmFuc2l0aW9uKG5vZGU6IEFuaW1hdGlvblRyYW5zaXRpb25NZXRhZGF0YSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFNlcXVlbmNlKG5vZGU6IEFuaW1hdGlvblNlcXVlbmNlTWV0YWRhdGEsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRHcm91cChub2RlOiBBbmltYXRpb25Hcm91cE1ldGFkYXRhLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0QW5pbWF0ZShub2RlOiBBbmltYXRpb25BbmltYXRlTWV0YWRhdGEsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRTdHlsZShub2RlOiBBbmltYXRpb25TdHlsZU1ldGFkYXRhLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0S2V5ZnJhbWVzKG5vZGU6IEFuaW1hdGlvbktleWZyYW1lc1NlcXVlbmNlTWV0YWRhdGEsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRSZWZlcmVuY2Uobm9kZTogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRBbmltYXRlQ2hpbGQobm9kZTogQW5pbWF0aW9uQW5pbWF0ZUNoaWxkTWV0YWRhdGEsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRBbmltYXRlUmVmKG5vZGU6IEFuaW1hdGlvbkFuaW1hdGVSZWZNZXRhZGF0YSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFF1ZXJ5KG5vZGU6IEFuaW1hdGlvblF1ZXJ5TWV0YWRhdGEsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRTdGFnZ2VyKG5vZGU6IEFuaW1hdGlvblN0YWdnZXJNZXRhZGF0YSwgY29udGV4dDogYW55KTogYW55O1xufVxuIl19