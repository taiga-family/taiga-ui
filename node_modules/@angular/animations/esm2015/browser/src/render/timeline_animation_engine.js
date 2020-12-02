/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/timeline_animation_engine.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AUTO_STYLE } from '@angular/animations';
import { buildAnimationAst } from '../dsl/animation_ast_builder';
import { buildAnimationTimelines } from '../dsl/animation_timeline_builder';
import { ElementInstructionMap } from '../dsl/element_instruction_map';
import { ENTER_CLASSNAME, LEAVE_CLASSNAME } from '../util';
import { getOrSetAsInMap, listenOnPlayer, makeAnimationEvent, normalizeKeyframes, optimizeGroupPlayer } from './shared';
/** @type {?} */
const EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
export class TimelineAnimationEngine {
    /**
     * @param {?} bodyNode
     * @param {?} _driver
     * @param {?} _normalizer
     */
    constructor(bodyNode, _driver, _normalizer) {
        this.bodyNode = bodyNode;
        this._driver = _driver;
        this._normalizer = _normalizer;
        this._animations = {};
        this._playersById = {};
        this.players = [];
    }
    /**
     * @param {?} id
     * @param {?} metadata
     * @return {?}
     */
    register(id, metadata) {
        /** @type {?} */
        const errors = [];
        /** @type {?} */
        const ast = buildAnimationAst(this._driver, metadata, errors);
        if (errors.length) {
            throw new Error(`Unable to build the animation due to the following errors: ${errors.join('\n')}`);
        }
        else {
            this._animations[id] = ast;
        }
    }
    /**
     * @private
     * @param {?} i
     * @param {?} preStyles
     * @param {?=} postStyles
     * @return {?}
     */
    _buildPlayer(i, preStyles, postStyles) {
        /** @type {?} */
        const element = i.element;
        /** @type {?} */
        const keyframes = normalizeKeyframes(this._driver, this._normalizer, element, i.keyframes, preStyles, postStyles);
        return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
    }
    /**
     * @param {?} id
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    create(id, element, options = {}) {
        /** @type {?} */
        const errors = [];
        /** @type {?} */
        const ast = this._animations[id];
        /** @type {?} */
        let instructions;
        /** @type {?} */
        const autoStylesMap = new Map();
        if (ast) {
            instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, {}, {}, options, EMPTY_INSTRUCTION_MAP, errors);
            instructions.forEach((/**
             * @param {?} inst
             * @return {?}
             */
            inst => {
                /** @type {?} */
                const styles = getOrSetAsInMap(autoStylesMap, inst.element, {});
                inst.postStyleProps.forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                prop => styles[prop] = null));
            }));
        }
        else {
            errors.push('The requested animation doesn\'t exist or has already been destroyed');
            instructions = [];
        }
        if (errors.length) {
            throw new Error(`Unable to create the animation due to the following errors: ${errors.join('\n')}`);
        }
        autoStylesMap.forEach((/**
         * @param {?} styles
         * @param {?} element
         * @return {?}
         */
        (styles, element) => {
            Object.keys(styles).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                styles[prop] = this._driver.computeStyle(element, prop, AUTO_STYLE);
            }));
        }));
        /** @type {?} */
        const players = instructions.map((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            /** @type {?} */
            const styles = autoStylesMap.get(i.element);
            return this._buildPlayer(i, {}, styles);
        }));
        /** @type {?} */
        const player = optimizeGroupPlayer(players);
        this._playersById[id] = player;
        player.onDestroy((/**
         * @return {?}
         */
        () => this.destroy(id)));
        this.players.push(player);
        return player;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    destroy(id) {
        /** @type {?} */
        const player = this._getPlayer(id);
        player.destroy();
        delete this._playersById[id];
        /** @type {?} */
        const index = this.players.indexOf(player);
        if (index >= 0) {
            this.players.splice(index, 1);
        }
    }
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    _getPlayer(id) {
        /** @type {?} */
        const player = this._playersById[id];
        if (!player) {
            throw new Error(`Unable to find the timeline player referenced by ${id}`);
        }
        return player;
    }
    /**
     * @param {?} id
     * @param {?} element
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    listen(id, element, eventName, callback) {
        // triggerName, fromState, toState are all ignored for timeline animations
        /** @type {?} */
        const baseEvent = makeAnimationEvent(element, '', '', '');
        listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
        return (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} id
     * @param {?} element
     * @param {?} command
     * @param {?} args
     * @return {?}
     */
    command(id, element, command, args) {
        if (command == 'register') {
            this.register(id, (/** @type {?} */ (args[0])));
            return;
        }
        if (command == 'create') {
            /** @type {?} */
            const options = (/** @type {?} */ ((args[0] || {})));
            this.create(id, element, options);
            return;
        }
        /** @type {?} */
        const player = this._getPlayer(id);
        switch (command) {
            case 'play':
                player.play();
                break;
            case 'pause':
                player.pause();
                break;
            case 'reset':
                player.reset();
                break;
            case 'restart':
                player.restart();
                break;
            case 'finish':
                player.finish();
                break;
            case 'init':
                player.init();
                break;
            case 'setPosition':
                player.setPosition(parseFloat((/** @type {?} */ (args[0]))));
                break;
            case 'destroy':
                this.destroy(id);
                break;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TimelineAnimationEngine.prototype._animations;
    /**
     * @type {?}
     * @private
     */
    TimelineAnimationEngine.prototype._playersById;
    /** @type {?} */
    TimelineAnimationEngine.prototype.players;
    /** @type {?} */
    TimelineAnimationEngine.prototype.bodyNode;
    /**
     * @type {?}
     * @private
     */
    TimelineAnimationEngine.prototype._driver;
    /**
     * @type {?}
     * @private
     */
    TimelineAnimationEngine.prototype._normalizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmVfYW5pbWF0aW9uX2VuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuaW1hdGlvbnMvYnJvd3Nlci9zcmMvcmVuZGVyL3RpbWVsaW5lX2FuaW1hdGlvbl9lbmdpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUE4RSxVQUFVLEVBQWEsTUFBTSxxQkFBcUIsQ0FBQztBQUd4SSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVyRSxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUd6RCxPQUFPLEVBQUMsZUFBZSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLFVBQVUsQ0FBQzs7TUFFaEgscUJBQXFCLEdBQUcsSUFBSSxxQkFBcUIsRUFBRTtBQUV6RCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFLbEMsWUFDVyxRQUFhLEVBQVUsT0FBd0IsRUFDOUMsV0FBcUM7UUFEdEMsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQzlDLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtRQU56QyxnQkFBVyxHQUErQyxFQUFFLENBQUM7UUFDN0QsaUJBQVksR0FBb0MsRUFBRSxDQUFDO1FBQ3BELFlBQU8sR0FBc0IsRUFBRSxDQUFDO0lBSWEsQ0FBQzs7Ozs7O0lBRXJELFFBQVEsQ0FBQyxFQUFVLEVBQUUsUUFBK0M7O2NBQzVELE1BQU0sR0FBVSxFQUFFOztjQUNsQixHQUFHLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO1FBQzdELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUNYLDhEQUE4RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4RjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7Ozs7OztJQUVPLFlBQVksQ0FDaEIsQ0FBK0IsRUFBRSxTQUFxQixFQUN0RCxVQUF1Qjs7Y0FDbkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPOztjQUNuQixTQUFTLEdBQUcsa0JBQWtCLENBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO1FBQ2hGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxFQUFVLEVBQUUsT0FBWSxFQUFFLFVBQTRCLEVBQUU7O2NBQ3ZELE1BQU0sR0FBVSxFQUFFOztjQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7O1lBQzVCLFlBQTRDOztjQUUxQyxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQW1CO1FBRWhELElBQUksR0FBRyxFQUFFO1lBQ1AsWUFBWSxHQUFHLHVCQUF1QixDQUNsQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFDN0UscUJBQXFCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkMsWUFBWSxDQUFDLE9BQU87Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTs7c0JBQ3BCLE1BQU0sR0FBRyxlQUFlLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2dCQUMvRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU87Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1lBQ3BGLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FDWCwrREFBK0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekY7UUFFRCxhQUFhLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTtnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdEUsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQzs7Y0FFRyxPQUFPLEdBQUcsWUFBWSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTs7a0JBQzdCLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDM0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDOztjQUNJLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxFQUFVOztjQUNWLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztjQUN2QixLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxFQUFVOztjQUNyQixNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsb0RBQW9ELEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDM0U7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxFQUFVLEVBQUUsT0FBZSxFQUFFLFNBQWlCLEVBQUUsUUFBNkI7OztjQUc1RSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3pELGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEU7OztRQUFPLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztJQUNsQixDQUFDOzs7Ozs7OztJQUVELE9BQU8sQ0FBQyxFQUFVLEVBQUUsT0FBWSxFQUFFLE9BQWUsRUFBRSxJQUFXO1FBQzVELElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxtQkFBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQTJDLENBQUMsQ0FBQztZQUN0RSxPQUFPO1NBQ1I7UUFFRCxJQUFJLE9BQU8sSUFBSSxRQUFRLEVBQUU7O2tCQUNqQixPQUFPLEdBQUcsbUJBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQW9CO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsQyxPQUFPO1NBQ1I7O2NBRUssTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQ2xDLFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxNQUFNO2dCQUNULE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDZCxNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hCLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNkLE1BQU07WUFDUixLQUFLLGFBQWE7Z0JBQ2hCLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLG1CQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbEQsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1NBQ1Q7SUFDSCxDQUFDO0NBQ0Y7Ozs7OztJQXpJQyw4Q0FBcUU7Ozs7O0lBQ3JFLCtDQUEyRDs7SUFDM0QsMENBQXVDOztJQUduQywyQ0FBb0I7Ozs7O0lBQUUsMENBQWdDOzs7OztJQUN0RCw4Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FuaW1hdGlvbk1ldGFkYXRhLCBBbmltYXRpb25NZXRhZGF0YVR5cGUsIEFuaW1hdGlvbk9wdGlvbnMsIEFuaW1hdGlvblBsYXllciwgQVVUT19TVFlMRSwgybVTdHlsZURhdGF9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQge0FzdH0gZnJvbSAnLi4vZHNsL2FuaW1hdGlvbl9hc3QnO1xuaW1wb3J0IHtidWlsZEFuaW1hdGlvbkFzdH0gZnJvbSAnLi4vZHNsL2FuaW1hdGlvbl9hc3RfYnVpbGRlcic7XG5pbXBvcnQge2J1aWxkQW5pbWF0aW9uVGltZWxpbmVzfSBmcm9tICcuLi9kc2wvYW5pbWF0aW9uX3RpbWVsaW5lX2J1aWxkZXInO1xuaW1wb3J0IHtBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9ufSBmcm9tICcuLi9kc2wvYW5pbWF0aW9uX3RpbWVsaW5lX2luc3RydWN0aW9uJztcbmltcG9ydCB7RWxlbWVudEluc3RydWN0aW9uTWFwfSBmcm9tICcuLi9kc2wvZWxlbWVudF9pbnN0cnVjdGlvbl9tYXAnO1xuaW1wb3J0IHtBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXJ9IGZyb20gJy4uL2RzbC9zdHlsZV9ub3JtYWxpemF0aW9uL2FuaW1hdGlvbl9zdHlsZV9ub3JtYWxpemVyJztcbmltcG9ydCB7RU5URVJfQ0xBU1NOQU1FLCBMRUFWRV9DTEFTU05BTUV9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQge0FuaW1hdGlvbkRyaXZlcn0gZnJvbSAnLi9hbmltYXRpb25fZHJpdmVyJztcbmltcG9ydCB7Z2V0T3JTZXRBc0luTWFwLCBsaXN0ZW5PblBsYXllciwgbWFrZUFuaW1hdGlvbkV2ZW50LCBub3JtYWxpemVLZXlmcmFtZXMsIG9wdGltaXplR3JvdXBQbGF5ZXJ9IGZyb20gJy4vc2hhcmVkJztcblxuY29uc3QgRU1QVFlfSU5TVFJVQ1RJT05fTUFQID0gbmV3IEVsZW1lbnRJbnN0cnVjdGlvbk1hcCgpO1xuXG5leHBvcnQgY2xhc3MgVGltZWxpbmVBbmltYXRpb25FbmdpbmUge1xuICBwcml2YXRlIF9hbmltYXRpb25zOiB7W2lkOiBzdHJpbmddOiBBc3Q8QW5pbWF0aW9uTWV0YWRhdGFUeXBlPn0gPSB7fTtcbiAgcHJpdmF0ZSBfcGxheWVyc0J5SWQ6IHtbaWQ6IHN0cmluZ106IEFuaW1hdGlvblBsYXllcn0gPSB7fTtcbiAgcHVibGljIHBsYXllcnM6IEFuaW1hdGlvblBsYXllcltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgYm9keU5vZGU6IGFueSwgcHJpdmF0ZSBfZHJpdmVyOiBBbmltYXRpb25Ecml2ZXIsXG4gICAgICBwcml2YXRlIF9ub3JtYWxpemVyOiBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIpIHt9XG5cbiAgcmVnaXN0ZXIoaWQ6IHN0cmluZywgbWV0YWRhdGE6IEFuaW1hdGlvbk1ldGFkYXRhfEFuaW1hdGlvbk1ldGFkYXRhW10pIHtcbiAgICBjb25zdCBlcnJvcnM6IGFueVtdID0gW107XG4gICAgY29uc3QgYXN0ID0gYnVpbGRBbmltYXRpb25Bc3QodGhpcy5fZHJpdmVyLCBtZXRhZGF0YSwgZXJyb3JzKTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBVbmFibGUgdG8gYnVpbGQgdGhlIGFuaW1hdGlvbiBkdWUgdG8gdGhlIGZvbGxvd2luZyBlcnJvcnM6ICR7ZXJyb3JzLmpvaW4oJ1xcbicpfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25zW2lkXSA9IGFzdDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9idWlsZFBsYXllcihcbiAgICAgIGk6IEFuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb24sIHByZVN0eWxlczogybVTdHlsZURhdGEsXG4gICAgICBwb3N0U3R5bGVzPzogybVTdHlsZURhdGEpOiBBbmltYXRpb25QbGF5ZXIge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG4gICAgY29uc3Qga2V5ZnJhbWVzID0gbm9ybWFsaXplS2V5ZnJhbWVzKFxuICAgICAgICB0aGlzLl9kcml2ZXIsIHRoaXMuX25vcm1hbGl6ZXIsIGVsZW1lbnQsIGkua2V5ZnJhbWVzLCBwcmVTdHlsZXMsIHBvc3RTdHlsZXMpO1xuICAgIHJldHVybiB0aGlzLl9kcml2ZXIuYW5pbWF0ZShlbGVtZW50LCBrZXlmcmFtZXMsIGkuZHVyYXRpb24sIGkuZGVsYXksIGkuZWFzaW5nLCBbXSwgdHJ1ZSk7XG4gIH1cblxuICBjcmVhdGUoaWQ6IHN0cmluZywgZWxlbWVudDogYW55LCBvcHRpb25zOiBBbmltYXRpb25PcHRpb25zID0ge30pOiBBbmltYXRpb25QbGF5ZXIge1xuICAgIGNvbnN0IGVycm9yczogYW55W10gPSBbXTtcbiAgICBjb25zdCBhc3QgPSB0aGlzLl9hbmltYXRpb25zW2lkXTtcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zOiBBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uW107XG5cbiAgICBjb25zdCBhdXRvU3R5bGVzTWFwID0gbmV3IE1hcDxhbnksIMm1U3R5bGVEYXRhPigpO1xuXG4gICAgaWYgKGFzdCkge1xuICAgICAgaW5zdHJ1Y3Rpb25zID0gYnVpbGRBbmltYXRpb25UaW1lbGluZXMoXG4gICAgICAgICAgdGhpcy5fZHJpdmVyLCBlbGVtZW50LCBhc3QsIEVOVEVSX0NMQVNTTkFNRSwgTEVBVkVfQ0xBU1NOQU1FLCB7fSwge30sIG9wdGlvbnMsXG4gICAgICAgICAgRU1QVFlfSU5TVFJVQ1RJT05fTUFQLCBlcnJvcnMpO1xuICAgICAgaW5zdHJ1Y3Rpb25zLmZvckVhY2goaW5zdCA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldE9yU2V0QXNJbk1hcChhdXRvU3R5bGVzTWFwLCBpbnN0LmVsZW1lbnQsIHt9KTtcbiAgICAgICAgaW5zdC5wb3N0U3R5bGVQcm9wcy5mb3JFYWNoKHByb3AgPT4gc3R5bGVzW3Byb3BdID0gbnVsbCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JzLnB1c2goJ1RoZSByZXF1ZXN0ZWQgYW5pbWF0aW9uIGRvZXNuXFwndCBleGlzdCBvciBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZCcpO1xuICAgICAgaW5zdHJ1Y3Rpb25zID0gW107XG4gICAgfVxuXG4gICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgYW5pbWF0aW9uIGR1ZSB0byB0aGUgZm9sbG93aW5nIGVycm9yczogJHtlcnJvcnMuam9pbignXFxuJyl9YCk7XG4gICAgfVxuXG4gICAgYXV0b1N0eWxlc01hcC5mb3JFYWNoKChzdHlsZXMsIGVsZW1lbnQpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgc3R5bGVzW3Byb3BdID0gdGhpcy5fZHJpdmVyLmNvbXB1dGVTdHlsZShlbGVtZW50LCBwcm9wLCBBVVRPX1NUWUxFKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcGxheWVycyA9IGluc3RydWN0aW9ucy5tYXAoaSA9PiB7XG4gICAgICBjb25zdCBzdHlsZXMgPSBhdXRvU3R5bGVzTWFwLmdldChpLmVsZW1lbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuX2J1aWxkUGxheWVyKGksIHt9LCBzdHlsZXMpO1xuICAgIH0pO1xuICAgIGNvbnN0IHBsYXllciA9IG9wdGltaXplR3JvdXBQbGF5ZXIocGxheWVycyk7XG4gICAgdGhpcy5fcGxheWVyc0J5SWRbaWRdID0gcGxheWVyO1xuICAgIHBsYXllci5vbkRlc3Ryb3koKCkgPT4gdGhpcy5kZXN0cm95KGlkKSk7XG5cbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgIHJldHVybiBwbGF5ZXI7XG4gIH1cblxuICBkZXN0cm95KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLl9nZXRQbGF5ZXIoaWQpO1xuICAgIHBsYXllci5kZXN0cm95KCk7XG4gICAgZGVsZXRlIHRoaXMuX3BsYXllcnNCeUlkW2lkXTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMucGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFBsYXllcihpZDogc3RyaW5nKTogQW5pbWF0aW9uUGxheWVyIHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLl9wbGF5ZXJzQnlJZFtpZF07XG4gICAgaWYgKCFwbGF5ZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgdGhlIHRpbWVsaW5lIHBsYXllciByZWZlcmVuY2VkIGJ5ICR7aWR9YCk7XG4gICAgfVxuICAgIHJldHVybiBwbGF5ZXI7XG4gIH1cblxuICBsaXN0ZW4oaWQ6IHN0cmluZywgZWxlbWVudDogc3RyaW5nLCBldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiBhbnkpOlxuICAgICAgKCkgPT4gdm9pZCB7XG4gICAgLy8gdHJpZ2dlck5hbWUsIGZyb21TdGF0ZSwgdG9TdGF0ZSBhcmUgYWxsIGlnbm9yZWQgZm9yIHRpbWVsaW5lIGFuaW1hdGlvbnNcbiAgICBjb25zdCBiYXNlRXZlbnQgPSBtYWtlQW5pbWF0aW9uRXZlbnQoZWxlbWVudCwgJycsICcnLCAnJyk7XG4gICAgbGlzdGVuT25QbGF5ZXIodGhpcy5fZ2V0UGxheWVyKGlkKSwgZXZlbnROYW1lLCBiYXNlRXZlbnQsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH1cblxuICBjb21tYW5kKGlkOiBzdHJpbmcsIGVsZW1lbnQ6IGFueSwgY29tbWFuZDogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmIChjb21tYW5kID09ICdyZWdpc3RlcicpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXIoaWQsIGFyZ3NbMF0gYXMgQW5pbWF0aW9uTWV0YWRhdGEgfCBBbmltYXRpb25NZXRhZGF0YVtdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29tbWFuZCA9PSAnY3JlYXRlJykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IChhcmdzWzBdIHx8IHt9KSBhcyBBbmltYXRpb25PcHRpb25zO1xuICAgICAgdGhpcy5jcmVhdGUoaWQsIGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuX2dldFBsYXllcihpZCk7XG4gICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICBjYXNlICdwbGF5JzpcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYXVzZSc6XG4gICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Jlc2V0JzpcbiAgICAgICAgcGxheWVyLnJlc2V0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVzdGFydCc6XG4gICAgICAgIHBsYXllci5yZXN0YXJ0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmluaXNoJzpcbiAgICAgICAgcGxheWVyLmZpbmlzaCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICBwbGF5ZXIuaW5pdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NldFBvc2l0aW9uJzpcbiAgICAgICAgcGxheWVyLnNldFBvc2l0aW9uKHBhcnNlRmxvYXQoYXJnc1swXSBhcyBzdHJpbmcpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXN0cm95JzpcbiAgICAgICAgdGhpcy5kZXN0cm95KGlkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=