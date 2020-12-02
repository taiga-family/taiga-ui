/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_trigger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AnimationStateStyles, AnimationTransitionFactory } from './animation_transition_factory';
/**
 * \@publicApi
 * @param {?} name
 * @param {?} ast
 * @return {?}
 */
export function buildTrigger(name, ast) {
    return new AnimationTrigger(name, ast);
}
/**
 * \@publicApi
 */
export class AnimationTrigger {
    /**
     * @param {?} name
     * @param {?} ast
     */
    constructor(name, ast) {
        this.name = name;
        this.ast = ast;
        this.transitionFactories = [];
        this.states = {};
        ast.states.forEach((/**
         * @param {?} ast
         * @return {?}
         */
        ast => {
            /** @type {?} */
            const defaultParams = (ast.options && ast.options.params) || {};
            this.states[ast.name] = new AnimationStateStyles(ast.style, defaultParams);
        }));
        balanceProperties(this.states, 'true', '1');
        balanceProperties(this.states, 'false', '0');
        ast.transitions.forEach((/**
         * @param {?} ast
         * @return {?}
         */
        ast => {
            this.transitionFactories.push(new AnimationTransitionFactory(name, ast, this.states));
        }));
        this.fallbackTransition = createFallbackTransition(name, this.states);
    }
    /**
     * @return {?}
     */
    get containsQueries() {
        return this.ast.queryCount > 0;
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @param {?} element
     * @param {?} params
     * @return {?}
     */
    matchTransition(currentState, nextState, element, params) {
        /** @type {?} */
        const entry = this.transitionFactories.find((/**
         * @param {?} f
         * @return {?}
         */
        f => f.match(currentState, nextState, element, params)));
        return entry || null;
    }
    /**
     * @param {?} currentState
     * @param {?} params
     * @param {?} errors
     * @return {?}
     */
    matchStyles(currentState, params, errors) {
        return this.fallbackTransition.buildStyles(currentState, params, errors);
    }
}
if (false) {
    /** @type {?} */
    AnimationTrigger.prototype.transitionFactories;
    /** @type {?} */
    AnimationTrigger.prototype.fallbackTransition;
    /** @type {?} */
    AnimationTrigger.prototype.states;
    /** @type {?} */
    AnimationTrigger.prototype.name;
    /** @type {?} */
    AnimationTrigger.prototype.ast;
}
/**
 * @param {?} triggerName
 * @param {?} states
 * @return {?}
 */
function createFallbackTransition(triggerName, states) {
    /** @type {?} */
    const matchers = [(/**
         * @param {?} fromState
         * @param {?} toState
         * @return {?}
         */
        (fromState, toState) => true)];
    /** @type {?} */
    const animation = { type: 2 /* Sequence */, steps: [], options: null };
    /** @type {?} */
    const transition = {
        type: 1 /* Transition */,
        animation,
        matchers,
        options: null,
        queryCount: 0,
        depCount: 0
    };
    return new AnimationTransitionFactory(triggerName, transition, states);
}
/**
 * @param {?} obj
 * @param {?} key1
 * @param {?} key2
 * @return {?}
 */
function balanceProperties(obj, key1, key2) {
    if (obj.hasOwnProperty(key1)) {
        if (!obj.hasOwnProperty(key2)) {
            obj[key2] = obj[key1];
        }
    }
    else if (obj.hasOwnProperty(key2)) {
        obj[key1] = obj[key2];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX3RyaWdnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL2RzbC9hbmltYXRpb25fdHJpZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVlBLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSwwQkFBMEIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7O0FBT2hHLE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBWSxFQUFFLEdBQWU7SUFDeEQsT0FBTyxJQUFJLGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6QyxDQUFDOzs7O0FBS0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFLM0IsWUFBbUIsSUFBWSxFQUFTLEdBQWU7UUFBcEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFKaEQsd0JBQW1CLEdBQWlDLEVBQUUsQ0FBQztRQUV2RCxXQUFNLEdBQWdELEVBQUUsQ0FBQztRQUc5RCxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTs7a0JBQ2pCLGFBQWEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksb0JBQW9CLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM3RSxDQUFDLEVBQUMsQ0FBQztRQUVILGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTdDLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHdCQUF3QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7OztJQUVELGVBQWUsQ0FBQyxZQUFpQixFQUFFLFNBQWMsRUFBRSxPQUFZLEVBQUUsTUFBNEI7O2NBRXJGLEtBQUssR0FDUCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBQztRQUN6RixPQUFPLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxZQUFpQixFQUFFLE1BQTRCLEVBQUUsTUFBYTtRQUN4RSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzRSxDQUFDO0NBQ0Y7OztJQWxDQywrQ0FBOEQ7O0lBQzlELDhDQUFzRDs7SUFDdEQsa0NBQWdFOztJQUVwRCxnQ0FBbUI7O0lBQUUsK0JBQXNCOzs7Ozs7O0FBZ0N6RCxTQUFTLHdCQUF3QixDQUM3QixXQUFtQixFQUNuQixNQUFtRDs7VUFDL0MsUUFBUSxHQUFHOzs7OztRQUFDLENBQUMsU0FBYyxFQUFFLE9BQVksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFDOztVQUNuRCxTQUFTLEdBQWdCLEVBQUMsSUFBSSxrQkFBZ0MsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUM7O1VBQ3pGLFVBQVUsR0FBa0I7UUFDaEMsSUFBSSxvQkFBa0M7UUFDdEMsU0FBUztRQUNULFFBQVE7UUFDUixPQUFPLEVBQUUsSUFBSTtRQUNiLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLENBQUM7S0FDWjtJQUNELE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pFLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEdBQXlCLEVBQUUsSUFBWSxFQUFFLElBQVk7SUFDOUUsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7S0FDRjtTQUFNLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7QW5pbWF0aW9uTWV0YWRhdGFUeXBlLCDJtVN0eWxlRGF0YX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7Y29weVN0eWxlcywgaW50ZXJwb2xhdGVQYXJhbXN9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQge1NlcXVlbmNlQXN0LCBTdHlsZUFzdCwgVHJhbnNpdGlvbkFzdCwgVHJpZ2dlckFzdH0gZnJvbSAnLi9hbmltYXRpb25fYXN0JztcbmltcG9ydCB7QW5pbWF0aW9uU3RhdGVTdHlsZXMsIEFuaW1hdGlvblRyYW5zaXRpb25GYWN0b3J5fSBmcm9tICcuL2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhY3RvcnknO1xuXG5cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRyaWdnZXIobmFtZTogc3RyaW5nLCBhc3Q6IFRyaWdnZXJBc3QpOiBBbmltYXRpb25UcmlnZ2VyIHtcbiAgcmV0dXJuIG5ldyBBbmltYXRpb25UcmlnZ2VyKG5hbWUsIGFzdCk7XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uVHJpZ2dlciB7XG4gIHB1YmxpYyB0cmFuc2l0aW9uRmFjdG9yaWVzOiBBbmltYXRpb25UcmFuc2l0aW9uRmFjdG9yeVtdID0gW107XG4gIHB1YmxpYyBmYWxsYmFja1RyYW5zaXRpb246IEFuaW1hdGlvblRyYW5zaXRpb25GYWN0b3J5O1xuICBwdWJsaWMgc3RhdGVzOiB7W3N0YXRlTmFtZTogc3RyaW5nXTogQW5pbWF0aW9uU3RhdGVTdHlsZXN9ID0ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFzdDogVHJpZ2dlckFzdCkge1xuICAgIGFzdC5zdGF0ZXMuZm9yRWFjaChhc3QgPT4ge1xuICAgICAgY29uc3QgZGVmYXVsdFBhcmFtcyA9IChhc3Qub3B0aW9ucyAmJiBhc3Qub3B0aW9ucy5wYXJhbXMpIHx8IHt9O1xuICAgICAgdGhpcy5zdGF0ZXNbYXN0Lm5hbWVdID0gbmV3IEFuaW1hdGlvblN0YXRlU3R5bGVzKGFzdC5zdHlsZSwgZGVmYXVsdFBhcmFtcyk7XG4gICAgfSk7XG5cbiAgICBiYWxhbmNlUHJvcGVydGllcyh0aGlzLnN0YXRlcywgJ3RydWUnLCAnMScpO1xuICAgIGJhbGFuY2VQcm9wZXJ0aWVzKHRoaXMuc3RhdGVzLCAnZmFsc2UnLCAnMCcpO1xuXG4gICAgYXN0LnRyYW5zaXRpb25zLmZvckVhY2goYXN0ID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkZhY3Rvcmllcy5wdXNoKG5ldyBBbmltYXRpb25UcmFuc2l0aW9uRmFjdG9yeShuYW1lLCBhc3QsIHRoaXMuc3RhdGVzKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZhbGxiYWNrVHJhbnNpdGlvbiA9IGNyZWF0ZUZhbGxiYWNrVHJhbnNpdGlvbihuYW1lLCB0aGlzLnN0YXRlcyk7XG4gIH1cblxuICBnZXQgY29udGFpbnNRdWVyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmFzdC5xdWVyeUNvdW50ID4gMDtcbiAgfVxuXG4gIG1hdGNoVHJhbnNpdGlvbihjdXJyZW50U3RhdGU6IGFueSwgbmV4dFN0YXRlOiBhbnksIGVsZW1lbnQ6IGFueSwgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6XG4gICAgICBBbmltYXRpb25UcmFuc2l0aW9uRmFjdG9yeXxudWxsIHtcbiAgICBjb25zdCBlbnRyeSA9XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZhY3Rvcmllcy5maW5kKGYgPT4gZi5tYXRjaChjdXJyZW50U3RhdGUsIG5leHRTdGF0ZSwgZWxlbWVudCwgcGFyYW1zKSk7XG4gICAgcmV0dXJuIGVudHJ5IHx8IG51bGw7XG4gIH1cblxuICBtYXRjaFN0eWxlcyhjdXJyZW50U3RhdGU6IGFueSwgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSwgZXJyb3JzOiBhbnlbXSk6IMm1U3R5bGVEYXRhIHtcbiAgICByZXR1cm4gdGhpcy5mYWxsYmFja1RyYW5zaXRpb24uYnVpbGRTdHlsZXMoY3VycmVudFN0YXRlLCBwYXJhbXMsIGVycm9ycyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFsbGJhY2tUcmFuc2l0aW9uKFxuICAgIHRyaWdnZXJOYW1lOiBzdHJpbmcsXG4gICAgc3RhdGVzOiB7W3N0YXRlTmFtZTogc3RyaW5nXTogQW5pbWF0aW9uU3RhdGVTdHlsZXN9KTogQW5pbWF0aW9uVHJhbnNpdGlvbkZhY3Rvcnkge1xuICBjb25zdCBtYXRjaGVycyA9IFsoZnJvbVN0YXRlOiBhbnksIHRvU3RhdGU6IGFueSkgPT4gdHJ1ZV07XG4gIGNvbnN0IGFuaW1hdGlvbjogU2VxdWVuY2VBc3QgPSB7dHlwZTogQW5pbWF0aW9uTWV0YWRhdGFUeXBlLlNlcXVlbmNlLCBzdGVwczogW10sIG9wdGlvbnM6IG51bGx9O1xuICBjb25zdCB0cmFuc2l0aW9uOiBUcmFuc2l0aW9uQXN0ID0ge1xuICAgIHR5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5UcmFuc2l0aW9uLFxuICAgIGFuaW1hdGlvbixcbiAgICBtYXRjaGVycyxcbiAgICBvcHRpb25zOiBudWxsLFxuICAgIHF1ZXJ5Q291bnQ6IDAsXG4gICAgZGVwQ291bnQ6IDBcbiAgfTtcbiAgcmV0dXJuIG5ldyBBbmltYXRpb25UcmFuc2l0aW9uRmFjdG9yeSh0cmlnZ2VyTmFtZSwgdHJhbnNpdGlvbiwgc3RhdGVzKTtcbn1cblxuZnVuY3Rpb24gYmFsYW5jZVByb3BlcnRpZXMob2JqOiB7W2tleTogc3RyaW5nXTogYW55fSwga2V5MTogc3RyaW5nLCBrZXkyOiBzdHJpbmcpIHtcbiAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkxKSkge1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleTIpKSB7XG4gICAgICBvYmpba2V5Ml0gPSBvYmpba2V5MV07XG4gICAgfVxuICB9IGVsc2UgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkyKSkge1xuICAgIG9ialtrZXkxXSA9IG9ialtrZXkyXTtcbiAgfVxufVxuIl19