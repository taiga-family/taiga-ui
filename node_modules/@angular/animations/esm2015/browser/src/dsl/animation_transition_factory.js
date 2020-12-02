/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_transition_factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getOrSetAsInMap } from '../render/shared';
import { copyObj, interpolateParams, iteratorToArray } from '../util';
import { buildAnimationTimelines } from './animation_timeline_builder';
import { createTransitionInstruction } from './animation_transition_instruction';
/** @type {?} */
const EMPTY_OBJECT = {};
export class AnimationTransitionFactory {
    /**
     * @param {?} _triggerName
     * @param {?} ast
     * @param {?} _stateStyles
     */
    constructor(_triggerName, ast, _stateStyles) {
        this._triggerName = _triggerName;
        this.ast = ast;
        this._stateStyles = _stateStyles;
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @param {?} element
     * @param {?} params
     * @return {?}
     */
    match(currentState, nextState, element, params) {
        return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
    }
    /**
     * @param {?} stateName
     * @param {?} params
     * @param {?} errors
     * @return {?}
     */
    buildStyles(stateName, params, errors) {
        /** @type {?} */
        const backupStateStyler = this._stateStyles['*'];
        /** @type {?} */
        const stateStyler = this._stateStyles[stateName];
        /** @type {?} */
        const backupStyles = backupStateStyler ? backupStateStyler.buildStyles(params, errors) : {};
        return stateStyler ? stateStyler.buildStyles(params, errors) : backupStyles;
    }
    /**
     * @param {?} driver
     * @param {?} element
     * @param {?} currentState
     * @param {?} nextState
     * @param {?} enterClassName
     * @param {?} leaveClassName
     * @param {?=} currentOptions
     * @param {?=} nextOptions
     * @param {?=} subInstructions
     * @param {?=} skipAstBuild
     * @return {?}
     */
    build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
        /** @type {?} */
        const errors = [];
        /** @type {?} */
        const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
        /** @type {?} */
        const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
        /** @type {?} */
        const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
        /** @type {?} */
        const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
        /** @type {?} */
        const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
        /** @type {?} */
        const queriedElements = new Set();
        /** @type {?} */
        const preStyleMap = new Map();
        /** @type {?} */
        const postStyleMap = new Map();
        /** @type {?} */
        const isRemoval = nextState === 'void';
        /** @type {?} */
        const animationOptions = { params: Object.assign(Object.assign({}, transitionAnimationParams), nextAnimationParams) };
        /** @type {?} */
        const timelines = skipAstBuild ?
            [] :
            buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
        /** @type {?} */
        let totalTime = 0;
        timelines.forEach((/**
         * @param {?} tl
         * @return {?}
         */
        tl => {
            totalTime = Math.max(tl.duration + tl.delay, totalTime);
        }));
        if (errors.length) {
            return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
        }
        timelines.forEach((/**
         * @param {?} tl
         * @return {?}
         */
        tl => {
            /** @type {?} */
            const elm = tl.element;
            /** @type {?} */
            const preProps = getOrSetAsInMap(preStyleMap, elm, {});
            tl.preStyleProps.forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => preProps[prop] = true));
            /** @type {?} */
            const postProps = getOrSetAsInMap(postStyleMap, elm, {});
            tl.postStyleProps.forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => postProps[prop] = true));
            if (elm !== element) {
                queriedElements.add(elm);
            }
        }));
        /** @type {?} */
        const queriedElementsList = iteratorToArray(queriedElements.values());
        return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, queriedElementsList, preStyleMap, postStyleMap, totalTime);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnimationTransitionFactory.prototype._triggerName;
    /** @type {?} */
    AnimationTransitionFactory.prototype.ast;
    /**
     * @type {?}
     * @private
     */
    AnimationTransitionFactory.prototype._stateStyles;
}
/**
 * @param {?} matchFns
 * @param {?} currentState
 * @param {?} nextState
 * @param {?} element
 * @param {?} params
 * @return {?}
 */
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
    return matchFns.some((/**
     * @param {?} fn
     * @return {?}
     */
    fn => fn(currentState, nextState, element, params)));
}
export class AnimationStateStyles {
    /**
     * @param {?} styles
     * @param {?} defaultParams
     */
    constructor(styles, defaultParams) {
        this.styles = styles;
        this.defaultParams = defaultParams;
    }
    /**
     * @param {?} params
     * @param {?} errors
     * @return {?}
     */
    buildStyles(params, errors) {
        /** @type {?} */
        const finalStyles = {};
        /** @type {?} */
        const combinedParams = copyObj(this.defaultParams);
        Object.keys(params).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const value = params[key];
            if (value != null) {
                combinedParams[key] = value;
            }
        }));
        this.styles.styles.forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (typeof value !== 'string') {
                /** @type {?} */
                const styleObj = (/** @type {?} */ (value));
                Object.keys(styleObj).forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                prop => {
                    /** @type {?} */
                    let val = styleObj[prop];
                    if (val.length > 1) {
                        val = interpolateParams(val, combinedParams, errors);
                    }
                    finalStyles[prop] = val;
                }));
            }
        }));
        return finalStyles;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnimationStateStyles.prototype.styles;
    /**
     * @type {?}
     * @private
     */
    AnimationStateStyles.prototype.defaultParams;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX3RyYW5zaXRpb25fZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuaW1hdGlvbnMvYnJvd3Nlci9zcmMvZHNsL2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFVQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQXdCLE1BQU0sU0FBUyxDQUFDO0FBRzNGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRXJFLE9BQU8sRUFBaUMsMkJBQTJCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQzs7TUFHekcsWUFBWSxHQUFHLEVBQUU7QUFFdkIsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBQ3JDLFlBQ1ksWUFBb0IsRUFBUyxHQUFrQixFQUMvQyxZQUF5RDtRQUR6RCxpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFDL0MsaUJBQVksR0FBWixZQUFZLENBQTZDO0lBQUcsQ0FBQzs7Ozs7Ozs7SUFFekUsS0FBSyxDQUFDLFlBQWlCLEVBQUUsU0FBYyxFQUFFLE9BQVksRUFBRSxNQUE0QjtRQUNqRixPQUFPLHlCQUF5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7Ozs7SUFFRCxXQUFXLENBQUMsU0FBaUIsRUFBRSxNQUE0QixFQUFFLE1BQWE7O2NBQ2xFLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDOztjQUMxQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7O2NBQzFD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QUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTs7a0JBQzFCLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ3pCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDakIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUM3QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFOztzQkFDdkIsUUFBUSxHQUFHLG1CQUFBLEtBQUssRUFBTztnQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLElBQUksQ0FBQyxFQUFFOzt3QkFDL0IsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xCLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUN0RDtvQkFDRCxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUMxQixDQUFDLEVBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0NBQ0Y7Ozs7OztJQXpCYSxzQ0FBd0I7Ozs7O0lBQUUsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBbmltYXRpb25PcHRpb25zLCDJtVN0eWxlRGF0YX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7QW5pbWF0aW9uRHJpdmVyfSBmcm9tICcuLi9yZW5kZXIvYW5pbWF0aW9uX2RyaXZlcic7XG5pbXBvcnQge2dldE9yU2V0QXNJbk1hcH0gZnJvbSAnLi4vcmVuZGVyL3NoYXJlZCc7XG5pbXBvcnQge2NvcHlPYmosIGludGVycG9sYXRlUGFyYW1zLCBpdGVyYXRvclRvQXJyYXksIG1lcmdlQW5pbWF0aW9uT3B0aW9uc30gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7U3R5bGVBc3QsIFRyYW5zaXRpb25Bc3R9IGZyb20gJy4vYW5pbWF0aW9uX2FzdCc7XG5pbXBvcnQge2J1aWxkQW5pbWF0aW9uVGltZWxpbmVzfSBmcm9tICcuL2FuaW1hdGlvbl90aW1lbGluZV9idWlsZGVyJztcbmltcG9ydCB7VHJhbnNpdGlvbk1hdGNoZXJGbn0gZnJvbSAnLi9hbmltYXRpb25fdHJhbnNpdGlvbl9leHByJztcbmltcG9ydCB7QW5pbWF0aW9uVHJhbnNpdGlvbkluc3RydWN0aW9uLCBjcmVhdGVUcmFuc2l0aW9uSW5zdHJ1Y3Rpb259IGZyb20gJy4vYW5pbWF0aW9uX3RyYW5zaXRpb25faW5zdHJ1Y3Rpb24nO1xuaW1wb3J0IHtFbGVtZW50SW5zdHJ1Y3Rpb25NYXB9IGZyb20gJy4vZWxlbWVudF9pbnN0cnVjdGlvbl9tYXAnO1xuXG5jb25zdCBFTVBUWV9PQkpFQ1QgPSB7fTtcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvblRyYW5zaXRpb25GYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF90cmlnZ2VyTmFtZTogc3RyaW5nLCBwdWJsaWMgYXN0OiBUcmFuc2l0aW9uQXN0LFxuICAgICAgcHJpdmF0ZSBfc3RhdGVTdHlsZXM6IHtbc3RhdGVOYW1lOiBzdHJpbmddOiBBbmltYXRpb25TdGF0ZVN0eWxlc30pIHt9XG5cbiAgbWF0Y2goY3VycmVudFN0YXRlOiBhbnksIG5leHRTdGF0ZTogYW55LCBlbGVtZW50OiBhbnksIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gb25lT3JNb3JlVHJhbnNpdGlvbnNNYXRjaCh0aGlzLmFzdC5tYXRjaGVycywgY3VycmVudFN0YXRlLCBuZXh0U3RhdGUsIGVsZW1lbnQsIHBhcmFtcyk7XG4gIH1cblxuICBidWlsZFN0eWxlcyhzdGF0ZU5hbWU6IHN0cmluZywgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSwgZXJyb3JzOiBhbnlbXSkge1xuICAgIGNvbnN0IGJhY2t1cFN0YXRlU3R5bGVyID0gdGhpcy5fc3RhdGVTdHlsZXNbJyonXTtcbiAgICBjb25zdCBzdGF0ZVN0eWxlciA9IHRoaXMuX3N0YXRlU3R5bGVzW3N0YXRlTmFtZV07XG4gICAgY29uc3QgYmFja3VwU3R5bGVzID0gYmFja3VwU3RhdGVTdHlsZXIgPyBiYWNrdXBTdGF0ZVN0eWxlci5idWlsZFN0eWxlcyhwYXJhbXMsIGVycm9ycykgOiB7fTtcbiAgICByZXR1cm4gc3RhdGVTdHlsZXIgPyBzdGF0ZVN0eWxlci5idWlsZFN0eWxlcyhwYXJhbXMsIGVycm9ycykgOiBiYWNrdXBTdHlsZXM7XG4gIH1cblxuICBidWlsZChcbiAgICAgIGRyaXZlcjogQW5pbWF0aW9uRHJpdmVyLCBlbGVtZW50OiBhbnksIGN1cnJlbnRTdGF0ZTogYW55LCBuZXh0U3RhdGU6IGFueSxcbiAgICAgIGVudGVyQ2xhc3NOYW1lOiBzdHJpbmcsIGxlYXZlQ2xhc3NOYW1lOiBzdHJpbmcsIGN1cnJlbnRPcHRpb25zPzogQW5pbWF0aW9uT3B0aW9ucyxcbiAgICAgIG5leHRPcHRpb25zPzogQW5pbWF0aW9uT3B0aW9ucywgc3ViSW5zdHJ1Y3Rpb25zPzogRWxlbWVudEluc3RydWN0aW9uTWFwLFxuICAgICAgc2tpcEFzdEJ1aWxkPzogYm9vbGVhbik6IEFuaW1hdGlvblRyYW5zaXRpb25JbnN0cnVjdGlvbiB7XG4gICAgY29uc3QgZXJyb3JzOiBhbnlbXSA9IFtdO1xuXG4gICAgY29uc3QgdHJhbnNpdGlvbkFuaW1hdGlvblBhcmFtcyA9IHRoaXMuYXN0Lm9wdGlvbnMgJiYgdGhpcy5hc3Qub3B0aW9ucy5wYXJhbXMgfHwgRU1QVFlfT0JKRUNUO1xuICAgIGNvbnN0IGN1cnJlbnRBbmltYXRpb25QYXJhbXMgPSBjdXJyZW50T3B0aW9ucyAmJiBjdXJyZW50T3B0aW9ucy5wYXJhbXMgfHwgRU1QVFlfT0JKRUNUO1xuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZVN0eWxlcyA9IHRoaXMuYnVpbGRTdHlsZXMoY3VycmVudFN0YXRlLCBjdXJyZW50QW5pbWF0aW9uUGFyYW1zLCBlcnJvcnMpO1xuICAgIGNvbnN0IG5leHRBbmltYXRpb25QYXJhbXMgPSBuZXh0T3B0aW9ucyAmJiBuZXh0T3B0aW9ucy5wYXJhbXMgfHwgRU1QVFlfT0JKRUNUO1xuICAgIGNvbnN0IG5leHRTdGF0ZVN0eWxlcyA9IHRoaXMuYnVpbGRTdHlsZXMobmV4dFN0YXRlLCBuZXh0QW5pbWF0aW9uUGFyYW1zLCBlcnJvcnMpO1xuXG4gICAgY29uc3QgcXVlcmllZEVsZW1lbnRzID0gbmV3IFNldDxhbnk+KCk7XG4gICAgY29uc3QgcHJlU3R5bGVNYXAgPSBuZXcgTWFwPGFueSwge1twcm9wOiBzdHJpbmddOiBib29sZWFufT4oKTtcbiAgICBjb25zdCBwb3N0U3R5bGVNYXAgPSBuZXcgTWFwPGFueSwge1twcm9wOiBzdHJpbmddOiBib29sZWFufT4oKTtcbiAgICBjb25zdCBpc1JlbW92YWwgPSBuZXh0U3RhdGUgPT09ICd2b2lkJztcblxuICAgIGNvbnN0IGFuaW1hdGlvbk9wdGlvbnMgPSB7cGFyYW1zOiB7Li4udHJhbnNpdGlvbkFuaW1hdGlvblBhcmFtcywgLi4ubmV4dEFuaW1hdGlvblBhcmFtc319O1xuXG4gICAgY29uc3QgdGltZWxpbmVzID0gc2tpcEFzdEJ1aWxkID9cbiAgICAgICAgW10gOlxuICAgICAgICBidWlsZEFuaW1hdGlvblRpbWVsaW5lcyhcbiAgICAgICAgICAgIGRyaXZlciwgZWxlbWVudCwgdGhpcy5hc3QuYW5pbWF0aW9uLCBlbnRlckNsYXNzTmFtZSwgbGVhdmVDbGFzc05hbWUsIGN1cnJlbnRTdGF0ZVN0eWxlcyxcbiAgICAgICAgICAgIG5leHRTdGF0ZVN0eWxlcywgYW5pbWF0aW9uT3B0aW9ucywgc3ViSW5zdHJ1Y3Rpb25zLCBlcnJvcnMpO1xuXG4gICAgbGV0IHRvdGFsVGltZSA9IDA7XG4gICAgdGltZWxpbmVzLmZvckVhY2godGwgPT4ge1xuICAgICAgdG90YWxUaW1lID0gTWF0aC5tYXgodGwuZHVyYXRpb24gKyB0bC5kZWxheSwgdG90YWxUaW1lKTtcbiAgICB9KTtcblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVHJhbnNpdGlvbkluc3RydWN0aW9uKFxuICAgICAgICAgIGVsZW1lbnQsIHRoaXMuX3RyaWdnZXJOYW1lLCBjdXJyZW50U3RhdGUsIG5leHRTdGF0ZSwgaXNSZW1vdmFsLCBjdXJyZW50U3RhdGVTdHlsZXMsXG4gICAgICAgICAgbmV4dFN0YXRlU3R5bGVzLCBbXSwgW10sIHByZVN0eWxlTWFwLCBwb3N0U3R5bGVNYXAsIHRvdGFsVGltZSwgZXJyb3JzKTtcbiAgICB9XG5cbiAgICB0aW1lbGluZXMuZm9yRWFjaCh0bCA9PiB7XG4gICAgICBjb25zdCBlbG0gPSB0bC5lbGVtZW50O1xuICAgICAgY29uc3QgcHJlUHJvcHMgPSBnZXRPclNldEFzSW5NYXAocHJlU3R5bGVNYXAsIGVsbSwge30pO1xuICAgICAgdGwucHJlU3R5bGVQcm9wcy5mb3JFYWNoKHByb3AgPT4gcHJlUHJvcHNbcHJvcF0gPSB0cnVlKTtcblxuICAgICAgY29uc3QgcG9zdFByb3BzID0gZ2V0T3JTZXRBc0luTWFwKHBvc3RTdHlsZU1hcCwgZWxtLCB7fSk7XG4gICAgICB0bC5wb3N0U3R5bGVQcm9wcy5mb3JFYWNoKHByb3AgPT4gcG9zdFByb3BzW3Byb3BdID0gdHJ1ZSk7XG5cbiAgICAgIGlmIChlbG0gIT09IGVsZW1lbnQpIHtcbiAgICAgICAgcXVlcmllZEVsZW1lbnRzLmFkZChlbG0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcXVlcmllZEVsZW1lbnRzTGlzdCA9IGl0ZXJhdG9yVG9BcnJheShxdWVyaWVkRWxlbWVudHMudmFsdWVzKCkpO1xuICAgIHJldHVybiBjcmVhdGVUcmFuc2l0aW9uSW5zdHJ1Y3Rpb24oXG4gICAgICAgIGVsZW1lbnQsIHRoaXMuX3RyaWdnZXJOYW1lLCBjdXJyZW50U3RhdGUsIG5leHRTdGF0ZSwgaXNSZW1vdmFsLCBjdXJyZW50U3RhdGVTdHlsZXMsXG4gICAgICAgIG5leHRTdGF0ZVN0eWxlcywgdGltZWxpbmVzLCBxdWVyaWVkRWxlbWVudHNMaXN0LCBwcmVTdHlsZU1hcCwgcG9zdFN0eWxlTWFwLCB0b3RhbFRpbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uZU9yTW9yZVRyYW5zaXRpb25zTWF0Y2goXG4gICAgbWF0Y2hGbnM6IFRyYW5zaXRpb25NYXRjaGVyRm5bXSwgY3VycmVudFN0YXRlOiBhbnksIG5leHRTdGF0ZTogYW55LCBlbGVtZW50OiBhbnksXG4gICAgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IGJvb2xlYW4ge1xuICByZXR1cm4gbWF0Y2hGbnMuc29tZShmbiA9PiBmbihjdXJyZW50U3RhdGUsIG5leHRTdGF0ZSwgZWxlbWVudCwgcGFyYW1zKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25TdGF0ZVN0eWxlcyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3R5bGVzOiBTdHlsZUFzdCwgcHJpdmF0ZSBkZWZhdWx0UGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSkge31cblxuICBidWlsZFN0eWxlcyhwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBlcnJvcnM6IHN0cmluZ1tdKTogybVTdHlsZURhdGEge1xuICAgIGNvbnN0IGZpbmFsU3R5bGVzOiDJtVN0eWxlRGF0YSA9IHt9O1xuICAgIGNvbnN0IGNvbWJpbmVkUGFyYW1zID0gY29weU9iaih0aGlzLmRlZmF1bHRQYXJhbXMpO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBwYXJhbXNba2V5XTtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGNvbWJpbmVkUGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0eWxlcy5zdHlsZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBzdHlsZU9iaiA9IHZhbHVlIGFzIGFueTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVPYmopLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgbGV0IHZhbCA9IHN0eWxlT2JqW3Byb3BdO1xuICAgICAgICAgIGlmICh2YWwubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFsID0gaW50ZXJwb2xhdGVQYXJhbXModmFsLCBjb21iaW5lZFBhcmFtcywgZXJyb3JzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmluYWxTdHlsZXNbcHJvcF0gPSB2YWw7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFN0eWxlcztcbiAgfVxufVxuIl19