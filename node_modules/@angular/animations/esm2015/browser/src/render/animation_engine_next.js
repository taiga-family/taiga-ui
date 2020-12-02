/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/animation_engine_next.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { buildAnimationAst } from '../dsl/animation_ast_builder';
import { buildTrigger } from '../dsl/animation_trigger';
import { parseTimelineCommand } from './shared';
import { TimelineAnimationEngine } from './timeline_animation_engine';
import { TransitionAnimationEngine } from './transition_animation_engine';
export class AnimationEngine {
    /**
     * @param {?} bodyNode
     * @param {?} _driver
     * @param {?} normalizer
     */
    constructor(bodyNode, _driver, normalizer) {
        this.bodyNode = bodyNode;
        this._driver = _driver;
        this._triggerCache = {};
        // this method is designed to be overridden by the code that uses this engine
        this.onRemovalComplete = (/**
         * @param {?} element
         * @param {?} context
         * @return {?}
         */
        (element, context) => { });
        this._transitionEngine = new TransitionAnimationEngine(bodyNode, _driver, normalizer);
        this._timelineEngine = new TimelineAnimationEngine(bodyNode, _driver, normalizer);
        this._transitionEngine.onRemovalComplete = (/**
         * @param {?} element
         * @param {?} context
         * @return {?}
         */
        (element, context) => this.onRemovalComplete(element, context));
    }
    /**
     * @param {?} componentId
     * @param {?} namespaceId
     * @param {?} hostElement
     * @param {?} name
     * @param {?} metadata
     * @return {?}
     */
    registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
        /** @type {?} */
        const cacheKey = componentId + '-' + name;
        /** @type {?} */
        let trigger = this._triggerCache[cacheKey];
        if (!trigger) {
            /** @type {?} */
            const errors = [];
            /** @type {?} */
            const ast = (/** @type {?} */ (buildAnimationAst(this._driver, (/** @type {?} */ (metadata)), errors)));
            if (errors.length) {
                throw new Error(`The animation trigger "${name}" has failed to build due to the following errors:\n - ${errors.join('\n - ')}`);
            }
            trigger = buildTrigger(name, ast);
            this._triggerCache[cacheKey] = trigger;
        }
        this._transitionEngine.registerTrigger(namespaceId, name, trigger);
    }
    /**
     * @param {?} namespaceId
     * @param {?} hostElement
     * @return {?}
     */
    register(namespaceId, hostElement) {
        this._transitionEngine.register(namespaceId, hostElement);
    }
    /**
     * @param {?} namespaceId
     * @param {?} context
     * @return {?}
     */
    destroy(namespaceId, context) {
        this._transitionEngine.destroy(namespaceId, context);
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} parent
     * @param {?} insertBefore
     * @return {?}
     */
    onInsert(namespaceId, element, parent, insertBefore) {
        this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} context
     * @param {?=} isHostElement
     * @return {?}
     */
    onRemove(namespaceId, element, context, isHostElement) {
        this._transitionEngine.removeNode(namespaceId, element, isHostElement || false, context);
    }
    /**
     * @param {?} element
     * @param {?} disable
     * @return {?}
     */
    disableAnimations(element, disable) {
        this._transitionEngine.markElementAsDisabled(element, disable);
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    process(namespaceId, element, property, value) {
        if (property.charAt(0) == '@') {
            const [id, action] = parseTimelineCommand(property);
            /** @type {?} */
            const args = (/** @type {?} */ (value));
            this._timelineEngine.command(id, element, action, args);
        }
        else {
            this._transitionEngine.trigger(namespaceId, element, property, value);
        }
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    listen(namespaceId, element, eventName, eventPhase, callback) {
        // @@listen
        if (eventName.charAt(0) == '@') {
            const [id, action] = parseTimelineCommand(eventName);
            return this._timelineEngine.listen(id, element, action, callback);
        }
        return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
    }
    /**
     * @param {?=} microtaskId
     * @return {?}
     */
    flush(microtaskId = -1) {
        this._transitionEngine.flush(microtaskId);
    }
    /**
     * @return {?}
     */
    get players() {
        return ((/** @type {?} */ (this._transitionEngine.players)))
            .concat((/** @type {?} */ (this._timelineEngine.players)));
    }
    /**
     * @return {?}
     */
    whenRenderingDone() {
        return this._transitionEngine.whenRenderingDone();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnimationEngine.prototype._transitionEngine;
    /**
     * @type {?}
     * @private
     */
    AnimationEngine.prototype._timelineEngine;
    /**
     * @type {?}
     * @private
     */
    AnimationEngine.prototype._triggerCache;
    /** @type {?} */
    AnimationEngine.prototype.onRemovalComplete;
    /**
     * @type {?}
     * @private
     */
    AnimationEngine.prototype.bodyNode;
    /**
     * @type {?}
     * @private
     */
    AnimationEngine.prototype._driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX2VuZ2luZV9uZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3NyYy9yZW5kZXIvYW5pbWF0aW9uX2VuZ2luZV9uZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFtQixZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUl4RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDOUMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFFeEUsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQVMxQixZQUNZLFFBQWEsRUFBVSxPQUF3QixFQUN2RCxVQUFvQztRQUQ1QixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFObkQsa0JBQWEsR0FBc0MsRUFBRSxDQUFDOztRQUd2RCxzQkFBaUI7Ozs7O1FBQUcsQ0FBQyxPQUFZLEVBQUUsT0FBWSxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFLNUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUkseUJBQXlCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksdUJBQXVCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVsRixJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCOzs7OztRQUFHLENBQUMsT0FBWSxFQUFFLE9BQVksRUFBRSxFQUFFLENBQ3RFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsT0FB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LE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7a0JBQ3hCLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQztZQUNwRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RixDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxjQUFzQixDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQXFCLENBQUM7YUFDdkQsTUFBTSxDQUFDLG1CQUFBLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFxQixDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEQsQ0FBQztDQUNGOzs7Ozs7SUExRkMsNENBQXFEOzs7OztJQUNyRCwwQ0FBaUQ7Ozs7O0lBRWpELHdDQUE4RDs7SUFHOUQsNENBQThEOzs7OztJQUcxRCxtQ0FBcUI7Ozs7O0lBQUUsa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBbmltYXRpb25NZXRhZGF0YSwgQW5pbWF0aW9uUGxheWVyLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGF9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtUcmlnZ2VyQXN0fSBmcm9tICcuLi9kc2wvYW5pbWF0aW9uX2FzdCc7XG5pbXBvcnQge2J1aWxkQW5pbWF0aW9uQXN0fSBmcm9tICcuLi9kc2wvYW5pbWF0aW9uX2FzdF9idWlsZGVyJztcbmltcG9ydCB7QW5pbWF0aW9uVHJpZ2dlciwgYnVpbGRUcmlnZ2VyfSBmcm9tICcuLi9kc2wvYW5pbWF0aW9uX3RyaWdnZXInO1xuaW1wb3J0IHtBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXJ9IGZyb20gJy4uL2RzbC9zdHlsZV9ub3JtYWxpemF0aW9uL2FuaW1hdGlvbl9zdHlsZV9ub3JtYWxpemVyJztcblxuaW1wb3J0IHtBbmltYXRpb25Ecml2ZXJ9IGZyb20gJy4vYW5pbWF0aW9uX2RyaXZlcic7XG5pbXBvcnQge3BhcnNlVGltZWxpbmVDb21tYW5kfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQge1RpbWVsaW5lQW5pbWF0aW9uRW5naW5lfSBmcm9tICcuL3RpbWVsaW5lX2FuaW1hdGlvbl9lbmdpbmUnO1xuaW1wb3J0IHtUcmFuc2l0aW9uQW5pbWF0aW9uRW5naW5lfSBmcm9tICcuL3RyYW5zaXRpb25fYW5pbWF0aW9uX2VuZ2luZSc7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25FbmdpbmUge1xuICBwcml2YXRlIF90cmFuc2l0aW9uRW5naW5lOiBUcmFuc2l0aW9uQW5pbWF0aW9uRW5naW5lO1xuICBwcml2YXRlIF90aW1lbGluZUVuZ2luZTogVGltZWxpbmVBbmltYXRpb25FbmdpbmU7XG5cbiAgcHJpdmF0ZSBfdHJpZ2dlckNhY2hlOiB7W2tleTogc3RyaW5nXTogQW5pbWF0aW9uVHJpZ2dlcn0gPSB7fTtcblxuICAvLyB0aGlzIG1ldGhvZCBpcyBkZXNpZ25lZCB0byBiZSBvdmVycmlkZGVuIGJ5IHRoZSBjb2RlIHRoYXQgdXNlcyB0aGlzIGVuZ2luZVxuICBwdWJsaWMgb25SZW1vdmFsQ29tcGxldGUgPSAoZWxlbWVudDogYW55LCBjb250ZXh0OiBhbnkpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBib2R5Tm9kZTogYW55LCBwcml2YXRlIF9kcml2ZXI6IEFuaW1hdGlvbkRyaXZlcixcbiAgICAgIG5vcm1hbGl6ZXI6IEFuaW1hdGlvblN0eWxlTm9ybWFsaXplcikge1xuICAgIHRoaXMuX3RyYW5zaXRpb25FbmdpbmUgPSBuZXcgVHJhbnNpdGlvbkFuaW1hdGlvbkVuZ2luZShib2R5Tm9kZSwgX2RyaXZlciwgbm9ybWFsaXplcik7XG4gICAgdGhpcy5fdGltZWxpbmVFbmdpbmUgPSBuZXcgVGltZWxpbmVBbmltYXRpb25FbmdpbmUoYm9keU5vZGUsIF9kcml2ZXIsIG5vcm1hbGl6ZXIpO1xuXG4gICAgdGhpcy5fdHJhbnNpdGlvbkVuZ2luZS5vblJlbW92YWxDb21wbGV0ZSA9IChlbGVtZW50OiBhbnksIGNvbnRleHQ6IGFueSkgPT5cbiAgICAgICAgdGhpcy5vblJlbW92YWxDb21wbGV0ZShlbGVtZW50LCBjb250ZXh0KTtcbiAgfVxuXG4gIHJlZ2lzdGVyVHJpZ2dlcihcbiAgICAgIGNvbXBvbmVudElkOiBzdHJpbmcsIG5hbWVzcGFjZUlkOiBzdHJpbmcsIGhvc3RFbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZyxcbiAgICAgIG1ldGFkYXRhOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEpOiB2b2lkIHtcbiAgICBjb25zdCBjYWNoZUtleSA9IGNvbXBvbmVudElkICsgJy0nICsgbmFtZTtcbiAgICBsZXQgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJDYWNoZVtjYWNoZUtleV07XG4gICAgaWYgKCF0cmlnZ2VyKSB7XG4gICAgICBjb25zdCBlcnJvcnM6IGFueVtdID0gW107XG4gICAgICBjb25zdCBhc3QgPVxuICAgICAgICAgIGJ1aWxkQW5pbWF0aW9uQXN0KHRoaXMuX2RyaXZlciwgbWV0YWRhdGEgYXMgQW5pbWF0aW9uTWV0YWRhdGEsIGVycm9ycykgYXMgVHJpZ2dlckFzdDtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGFuaW1hdGlvbiB0cmlnZ2VyIFwiJHtcbiAgICAgICAgICAgIG5hbWV9XCIgaGFzIGZhaWxlZCB0byBidWlsZCBkdWUgdG8gdGhlIGZvbGxvd2luZyBlcnJvcnM6XFxuIC0gJHtlcnJvcnMuam9pbignXFxuIC0gJyl9YCk7XG4gICAgICB9XG4gICAgICB0cmlnZ2VyID0gYnVpbGRUcmlnZ2VyKG5hbWUsIGFzdCk7XG4gICAgICB0aGlzLl90cmlnZ2VyQ2FjaGVbY2FjaGVLZXldID0gdHJpZ2dlcjtcbiAgICB9XG4gICAgdGhpcy5fdHJhbnNpdGlvbkVuZ2luZS5yZWdpc3RlclRyaWdnZXIobmFtZXNwYWNlSWQsIG5hbWUsIHRyaWdnZXIpO1xuICB9XG5cbiAgcmVnaXN0ZXIobmFtZXNwYWNlSWQ6IHN0cmluZywgaG9zdEVsZW1lbnQ6IGFueSkge1xuICAgIHRoaXMuX3RyYW5zaXRpb25FbmdpbmUucmVnaXN0ZXIobmFtZXNwYWNlSWQsIGhvc3RFbGVtZW50KTtcbiAgfVxuXG4gIGRlc3Ryb3kobmFtZXNwYWNlSWQ6IHN0cmluZywgY29udGV4dDogYW55KSB7XG4gICAgdGhpcy5fdHJhbnNpdGlvbkVuZ2luZS5kZXN0cm95KG5hbWVzcGFjZUlkLCBjb250ZXh0KTtcbiAgfVxuXG4gIG9uSW5zZXJ0KG5hbWVzcGFjZUlkOiBzdHJpbmcsIGVsZW1lbnQ6IGFueSwgcGFyZW50OiBhbnksIGluc2VydEJlZm9yZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3RyYW5zaXRpb25FbmdpbmUuaW5zZXJ0Tm9kZShuYW1lc3BhY2VJZCwgZWxlbWVudCwgcGFyZW50LCBpbnNlcnRCZWZvcmUpO1xuICB9XG5cbiAgb25SZW1vdmUobmFtZXNwYWNlSWQ6IHN0cmluZywgZWxlbWVudDogYW55LCBjb250ZXh0OiBhbnksIGlzSG9zdEVsZW1lbnQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fdHJhbnNpdGlvbkVuZ2luZS5yZW1vdmVOb2RlKG5hbWVzcGFjZUlkLCBlbGVtZW50LCBpc0hvc3RFbGVtZW50IHx8IGZhbHNlLCBjb250ZXh0KTtcbiAgfVxuXG4gIGRpc2FibGVBbmltYXRpb25zKGVsZW1lbnQ6IGFueSwgZGlzYWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3RyYW5zaXRpb25FbmdpbmUubWFya0VsZW1lbnRBc0Rpc2FibGVkKGVsZW1lbnQsIGRpc2FibGUpO1xuICB9XG5cbiAgcHJvY2VzcyhuYW1lc3BhY2VJZDogc3RyaW5nLCBlbGVtZW50OiBhbnksIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAocHJvcGVydHkuY2hhckF0KDApID09ICdAJykge1xuICAgICAgY29uc3QgW2lkLCBhY3Rpb25dID0gcGFyc2VUaW1lbGluZUNvbW1hbmQocHJvcGVydHkpO1xuICAgICAgY29uc3QgYXJncyA9IHZhbHVlIGFzIGFueVtdO1xuICAgICAgdGhpcy5fdGltZWxpbmVFbmdpbmUuY29tbWFuZChpZCwgZWxlbWVudCwgYWN0aW9uLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHJhbnNpdGlvbkVuZ2luZS50cmlnZ2VyKG5hbWVzcGFjZUlkLCBlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGxpc3RlbihcbiAgICAgIG5hbWVzcGFjZUlkOiBzdHJpbmcsIGVsZW1lbnQ6IGFueSwgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50UGhhc2U6IHN0cmluZyxcbiAgICAgIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gYW55KTogKCkgPT4gYW55IHtcbiAgICAvLyBAQGxpc3RlblxuICAgIGlmIChldmVudE5hbWUuY2hhckF0KDApID09ICdAJykge1xuICAgICAgY29uc3QgW2lkLCBhY3Rpb25dID0gcGFyc2VUaW1lbGluZUNvbW1hbmQoZXZlbnROYW1lKTtcbiAgICAgIHJldHVybiB0aGlzLl90aW1lbGluZUVuZ2luZS5saXN0ZW4oaWQsIGVsZW1lbnQsIGFjdGlvbiwgY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvbkVuZ2luZS5saXN0ZW4obmFtZXNwYWNlSWQsIGVsZW1lbnQsIGV2ZW50TmFtZSwgZXZlbnRQaGFzZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgZmx1c2gobWljcm90YXNrSWQ6IG51bWJlciA9IC0xKTogdm9pZCB7XG4gICAgdGhpcy5fdHJhbnNpdGlvbkVuZ2luZS5mbHVzaChtaWNyb3Rhc2tJZCk7XG4gIH1cblxuICBnZXQgcGxheWVycygpOiBBbmltYXRpb25QbGF5ZXJbXSB7XG4gICAgcmV0dXJuICh0aGlzLl90cmFuc2l0aW9uRW5naW5lLnBsYXllcnMgYXMgQW5pbWF0aW9uUGxheWVyW10pXG4gICAgICAgIC5jb25jYXQodGhpcy5fdGltZWxpbmVFbmdpbmUucGxheWVycyBhcyBBbmltYXRpb25QbGF5ZXJbXSk7XG4gIH1cblxuICB3aGVuUmVuZGVyaW5nRG9uZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uRW5naW5lLndoZW5SZW5kZXJpbmdEb25lKCk7XG4gIH1cbn1cbiJdfQ==