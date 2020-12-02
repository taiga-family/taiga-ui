/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/animation_event.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An instance of this class is returned as an event parameter when an animation
 * callback is captured for an animation either during the start or done phase.
 *
 * ```typescript
 * \@Component({
 *   host: {
 *     '[\@myAnimationTrigger]': 'someExpression',
 *     '(\@myAnimationTrigger.start)': 'captureStartEvent($event)',
 *     '(\@myAnimationTrigger.done)': 'captureDoneEvent($event)',
 *   },
 *   animations: [
 *     trigger("myAnimationTrigger", [
 *        // ...
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   someExpression: any = false;
 *   captureStartEvent(event: AnimationEvent) {
 *     // the toState, fromState and totalTime data is accessible from the event variable
 *   }
 *
 *   captureDoneEvent(event: AnimationEvent) {
 *     // the toState, fromState and totalTime data is accessible from the event variable
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @record
 */
export function AnimationEvent() { }
if (false) {
    /**
     * The name of the state from which the animation is triggered.
     * @type {?}
     */
    AnimationEvent.prototype.fromState;
    /**
     * The name of the state in which the animation completes.
     * @type {?}
     */
    AnimationEvent.prototype.toState;
    /**
     * The time it takes the animation to complete, in milliseconds.
     * @type {?}
     */
    AnimationEvent.prototype.totalTime;
    /**
     * The animation phase in which the callback was invoked, one of
     * "start" or "done".
     * @type {?}
     */
    AnimationEvent.prototype.phaseName;
    /**
     * The element to which the animation is attached.
     * @type {?}
     */
    AnimationEvent.prototype.element;
    /**
     * Internal.
     * @type {?}
     */
    AnimationEvent.prototype.triggerName;
    /**
     * Internal.
     * @type {?}
     */
    AnimationEvent.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX2V2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9zcmMvYW5pbWF0aW9uX2V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBLG9DQThCQzs7Ozs7O0lBMUJDLG1DQUFrQjs7Ozs7SUFJbEIsaUNBQWdCOzs7OztJQUloQixtQ0FBa0I7Ozs7OztJQUtsQixtQ0FBa0I7Ozs7O0lBSWxCLGlDQUFhOzs7OztJQUliLHFDQUFvQjs7Ozs7SUFJcEIsa0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgaXMgcmV0dXJuZWQgYXMgYW4gZXZlbnQgcGFyYW1ldGVyIHdoZW4gYW4gYW5pbWF0aW9uXG4gKiBjYWxsYmFjayBpcyBjYXB0dXJlZCBmb3IgYW4gYW5pbWF0aW9uIGVpdGhlciBkdXJpbmcgdGhlIHN0YXJ0IG9yIGRvbmUgcGhhc2UuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7XG4gKiAgIGhvc3Q6IHtcbiAqICAgICAnW0BteUFuaW1hdGlvblRyaWdnZXJdJzogJ3NvbWVFeHByZXNzaW9uJyxcbiAqICAgICAnKEBteUFuaW1hdGlvblRyaWdnZXIuc3RhcnQpJzogJ2NhcHR1cmVTdGFydEV2ZW50KCRldmVudCknLFxuICogICAgICcoQG15QW5pbWF0aW9uVHJpZ2dlci5kb25lKSc6ICdjYXB0dXJlRG9uZUV2ZW50KCRldmVudCknLFxuICogICB9LFxuICogICBhbmltYXRpb25zOiBbXG4gKiAgICAgdHJpZ2dlcihcIm15QW5pbWF0aW9uVHJpZ2dlclwiLCBbXG4gKiAgICAgICAgLy8gLi4uXG4gKiAgICAgXSlcbiAqICAgXVxuICogfSlcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgc29tZUV4cHJlc3Npb246IGFueSA9IGZhbHNlO1xuICogICBjYXB0dXJlU3RhcnRFdmVudChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAqICAgICAvLyB0aGUgdG9TdGF0ZSwgZnJvbVN0YXRlIGFuZCB0b3RhbFRpbWUgZGF0YSBpcyBhY2Nlc3NpYmxlIGZyb20gdGhlIGV2ZW50IHZhcmlhYmxlXG4gKiAgIH1cbiAqXG4gKiAgIGNhcHR1cmVEb25lRXZlbnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gKiAgICAgLy8gdGhlIHRvU3RhdGUsIGZyb21TdGF0ZSBhbmQgdG90YWxUaW1lIGRhdGEgaXMgYWNjZXNzaWJsZSBmcm9tIHRoZSBldmVudCB2YXJpYWJsZVxuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uRXZlbnQge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIHN0YXRlIGZyb20gd2hpY2ggdGhlIGFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQuXG4gICAqL1xuICBmcm9tU3RhdGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBzdGF0ZSBpbiB3aGljaCB0aGUgYW5pbWF0aW9uIGNvbXBsZXRlcy5cbiAgICovXG4gIHRvU3RhdGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB0aW1lIGl0IHRha2VzIHRoZSBhbmltYXRpb24gdG8gY29tcGxldGUsIGluIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIHRvdGFsVGltZTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGFuaW1hdGlvbiBwaGFzZSBpbiB3aGljaCB0aGUgY2FsbGJhY2sgd2FzIGludm9rZWQsIG9uZSBvZlxuICAgKiBcInN0YXJ0XCIgb3IgXCJkb25lXCIuXG4gICAqL1xuICBwaGFzZU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBlbGVtZW50IHRvIHdoaWNoIHRoZSBhbmltYXRpb24gaXMgYXR0YWNoZWQuXG4gICAqL1xuICBlbGVtZW50OiBhbnk7XG4gIC8qKlxuICAgKiBJbnRlcm5hbC5cbiAgICovXG4gIHRyaWdnZXJOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbnRlcm5hbC5cbiAgICovXG4gIGRpc2FibGVkOiBib29sZWFuO1xufVxuIl19