/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_timeline_builder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AUTO_STYLE, ɵPRE_STYLE as PRE_STYLE } from '@angular/animations';
import { copyObj, copyStyles, interpolateParams, iteratorToArray, resolveTiming, resolveTimingValue, visitDslNode } from '../util';
import { createTimelineInstruction } from './animation_timeline_instruction';
import { ElementInstructionMap } from './element_instruction_map';
/** @type {?} */
const ONE_FRAME_IN_MILLISECONDS = 1;
/** @type {?} */
const ENTER_TOKEN = ':enter';
/** @type {?} */
const ENTER_TOKEN_REGEX = new RegExp(ENTER_TOKEN, 'g');
/** @type {?} */
const LEAVE_TOKEN = ':leave';
/** @type {?} */
const LEAVE_TOKEN_REGEX = new RegExp(LEAVE_TOKEN, 'g');
/*
 * The code within this file aims to generate web-animations-compatible keyframes from Angular's
 * animation DSL code.
 *
 * The code below will be converted from:
 *
 * ```
 * sequence([
 *   style({ opacity: 0 }),
 *   animate(1000, style({ opacity: 0 }))
 * ])
 * ```
 *
 * To:
 * ```
 * keyframes = [{ opacity: 0, offset: 0 }, { opacity: 1, offset: 1 }]
 * duration = 1000
 * delay = 0
 * easing = ''
 * ```
 *
 * For this operation to cover the combination of animation verbs (style, animate, group, etc...) a
 * combination of prototypical inheritance, AST traversal and merge-sort-like algorithms are used.
 *
 * [AST Traversal]
 * Each of the animation verbs, when executed, will return an string-map object representing what
 * type of action it is (style, animate, group, etc...) and the data associated with it. This means
 * that when functional composition mix of these functions is evaluated (like in the example above)
 * then it will end up producing a tree of objects representing the animation itself.
 *
 * When this animation object tree is processed by the visitor code below it will visit each of the
 * verb statements within the visitor. And during each visit it will build the context of the
 * animation keyframes by interacting with the `TimelineBuilder`.
 *
 * [TimelineBuilder]
 * This class is responsible for tracking the styles and building a series of keyframe objects for a
 * timeline between a start and end time. The builder starts off with an initial timeline and each
 * time the AST comes across a `group()`, `keyframes()` or a combination of the two wihtin a
 * `sequence()` then it will generate a sub timeline for each step as well as a new one after
 * they are complete.
 *
 * As the AST is traversed, the timing state on each of the timelines will be incremented. If a sub
 * timeline was created (based on one of the cases above) then the parent timeline will attempt to
 * merge the styles used within the sub timelines into itself (only with group() this will happen).
 * This happens with a merge operation (much like how the merge works in mergesort) and it will only
 * copy the most recently used styles from the sub timelines into the parent timeline. This ensures
 * that if the styles are used later on in another phase of the animation then they will be the most
 * up-to-date values.
 *
 * [How Missing Styles Are Updated]
 * Each timeline has a `backFill` property which is responsible for filling in new styles into
 * already processed keyframes if a new style shows up later within the animation sequence.
 *
 * ```
 * sequence([
 *   style({ width: 0 }),
 *   animate(1000, style({ width: 100 })),
 *   animate(1000, style({ width: 200 })),
 *   animate(1000, style({ width: 300 }))
 *   animate(1000, style({ width: 400, height: 400 })) // notice how `height` doesn't exist anywhere
 * else
 * ])
 * ```
 *
 * What is happening here is that the `height` value is added later in the sequence, but is missing
 * from all previous animation steps. Therefore when a keyframe is created it would also be missing
 * from all previous keyframes up until where it is first used. For the timeline keyframe generation
 * to properly fill in the style it will place the previous value (the value from the parent
 * timeline) or a default value of `*` into the backFill object. Given that each of the keyframe
 * styles are objects that prototypically inhert from the backFill object, this means that if a
 * value is added into the backFill then it will automatically propagate any missing values to all
 * keyframes. Therefore the missing `height` value will be properly filled into the already
 * processed keyframes.
 *
 * When a sub-timeline is created it will have its own backFill property. This is done so that
 * styles present within the sub-timeline do not accidentally seep into the previous/future timeline
 * keyframes
 *
 * (For prototypically-inherited contents to be detected a `for(i in obj)` loop must be used.)
 *
 * [Validation]
 * The code in this file is not responsible for validation. That functionality happens with within
 * the `AnimationValidatorVisitor` code.
 */
/**
 * @param {?} driver
 * @param {?} rootElement
 * @param {?} ast
 * @param {?} enterClassName
 * @param {?} leaveClassName
 * @param {?=} startingStyles
 * @param {?=} finalStyles
 * @param {?=} options
 * @param {?=} subInstructions
 * @param {?=} errors
 * @return {?}
 */
export function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = {}, finalStyles = {}, options, subInstructions, errors = []) {
    return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
export class AnimationTimelineBuilderVisitor {
    /**
     * @param {?} driver
     * @param {?} rootElement
     * @param {?} ast
     * @param {?} enterClassName
     * @param {?} leaveClassName
     * @param {?} startingStyles
     * @param {?} finalStyles
     * @param {?} options
     * @param {?=} subInstructions
     * @param {?=} errors
     * @return {?}
     */
    buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
        subInstructions = subInstructions || new ElementInstructionMap();
        /** @type {?} */
        const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
        context.options = options;
        context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
        visitDslNode(this, ast, context);
        // this checks to see if an actual animation happened
        /** @type {?} */
        const timelines = context.timelines.filter((/**
         * @param {?} timeline
         * @return {?}
         */
        timeline => timeline.containsAnimation()));
        if (timelines.length && Object.keys(finalStyles).length) {
            /** @type {?} */
            const tl = timelines[timelines.length - 1];
            if (!tl.allowOnlyTimelineStyles()) {
                tl.setStyles([finalStyles], null, context.errors, options);
            }
        }
        return timelines.length ? timelines.map((/**
         * @param {?} timeline
         * @return {?}
         */
        timeline => timeline.buildKeyframes())) :
            [createTimelineInstruction(rootElement, [], [], [], 0, 0, '', false)];
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitTrigger(ast, context) {
        // these values are not visited in this AST
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitState(ast, context) {
        // these values are not visited in this AST
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitTransition(ast, context) {
        // these values are not visited in this AST
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitAnimateChild(ast, context) {
        /** @type {?} */
        const elementInstructions = context.subInstructions.consume(context.element);
        if (elementInstructions) {
            /** @type {?} */
            const innerContext = context.createSubContext(ast.options);
            /** @type {?} */
            const startTime = context.currentTimeline.currentTime;
            /** @type {?} */
            const endTime = this._visitSubInstructions(elementInstructions, innerContext, (/** @type {?} */ (innerContext.options)));
            if (startTime != endTime) {
                // we do this on the upper context because we created a sub context for
                // the sub child animations
                context.transformIntoNewTimeline(endTime);
            }
        }
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitAnimateRef(ast, context) {
        /** @type {?} */
        const innerContext = context.createSubContext(ast.options);
        innerContext.transformIntoNewTimeline();
        this.visitReference(ast.animation, innerContext);
        context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
        context.previousNode = ast;
    }
    /**
     * @private
     * @param {?} instructions
     * @param {?} context
     * @param {?} options
     * @return {?}
     */
    _visitSubInstructions(instructions, context, options) {
        /** @type {?} */
        const startTime = context.currentTimeline.currentTime;
        /** @type {?} */
        let furthestTime = startTime;
        // this is a special-case for when a user wants to skip a sub
        // animation from being fired entirely.
        /** @type {?} */
        const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
        /** @type {?} */
        const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
        if (duration !== 0) {
            instructions.forEach((/**
             * @param {?} instruction
             * @return {?}
             */
            instruction => {
                /** @type {?} */
                const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
                furthestTime =
                    Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
            }));
        }
        return furthestTime;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitReference(ast, context) {
        context.updateOptions(ast.options, true);
        visitDslNode(this, ast.animation, context);
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitSequence(ast, context) {
        /** @type {?} */
        const subContextCount = context.subContextCount;
        /** @type {?} */
        let ctx = context;
        /** @type {?} */
        const options = ast.options;
        if (options && (options.params || options.delay)) {
            ctx = context.createSubContext(options);
            ctx.transformIntoNewTimeline();
            if (options.delay != null) {
                if (ctx.previousNode.type == 6 /* Style */) {
                    ctx.currentTimeline.snapshotCurrentStyles();
                    ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
                }
                /** @type {?} */
                const delay = resolveTimingValue(options.delay);
                ctx.delayNextStep(delay);
            }
        }
        if (ast.steps.length) {
            ast.steps.forEach((/**
             * @param {?} s
             * @return {?}
             */
            s => visitDslNode(this, s, ctx)));
            // this is here just incase the inner steps only contain or end with a style() call
            ctx.currentTimeline.applyStylesToKeyframe();
            // this means that some animation function within the sequence
            // ended up creating a sub timeline (which means the current
            // timeline cannot overlap with the contents of the sequence)
            if (ctx.subContextCount > subContextCount) {
                ctx.transformIntoNewTimeline();
            }
        }
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitGroup(ast, context) {
        /** @type {?} */
        const innerTimelines = [];
        /** @type {?} */
        let furthestTime = context.currentTimeline.currentTime;
        /** @type {?} */
        const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
        ast.steps.forEach((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            /** @type {?} */
            const innerContext = context.createSubContext(ast.options);
            if (delay) {
                innerContext.delayNextStep(delay);
            }
            visitDslNode(this, s, innerContext);
            furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
            innerTimelines.push(innerContext.currentTimeline);
        }));
        // this operation is run after the AST loop because otherwise
        // if the parent timeline's collected styles were updated then
        // it would pass in invalid data into the new-to-be forked items
        innerTimelines.forEach((/**
         * @param {?} timeline
         * @return {?}
         */
        timeline => context.currentTimeline.mergeTimelineCollectedStyles(timeline)));
        context.transformIntoNewTimeline(furthestTime);
        context.previousNode = ast;
    }
    /**
     * @private
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    _visitTiming(ast, context) {
        if (((/** @type {?} */ (ast))).dynamic) {
            /** @type {?} */
            const strValue = ((/** @type {?} */ (ast))).strValue;
            /** @type {?} */
            const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
            return resolveTiming(timingValue, context.errors);
        }
        else {
            return { duration: ast.duration, delay: ast.delay, easing: ast.easing };
        }
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitAnimate(ast, context) {
        /** @type {?} */
        const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
        /** @type {?} */
        const timeline = context.currentTimeline;
        if (timings.delay) {
            context.incrementTime(timings.delay);
            timeline.snapshotCurrentStyles();
        }
        /** @type {?} */
        const style = ast.style;
        if (style.type == 5 /* Keyframes */) {
            this.visitKeyframes(style, context);
        }
        else {
            context.incrementTime(timings.duration);
            this.visitStyle((/** @type {?} */ (style)), context);
            timeline.applyStylesToKeyframe();
        }
        context.currentAnimateTimings = null;
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitStyle(ast, context) {
        /** @type {?} */
        const timeline = context.currentTimeline;
        /** @type {?} */
        const timings = (/** @type {?} */ (context.currentAnimateTimings));
        // this is a special case for when a style() call
        // directly follows  an animate() call (but not inside of an animate() call)
        if (!timings && timeline.getCurrentStyleProperties().length) {
            timeline.forwardFrame();
        }
        /** @type {?} */
        const easing = (timings && timings.easing) || ast.easing;
        if (ast.isEmptyStep) {
            timeline.applyEmptyStep(easing);
        }
        else {
            timeline.setStyles(ast.styles, easing, context.errors, context.options);
        }
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitKeyframes(ast, context) {
        /** @type {?} */
        const currentAnimateTimings = (/** @type {?} */ (context.currentAnimateTimings));
        /** @type {?} */
        const startTime = ((/** @type {?} */ (context.currentTimeline))).duration;
        /** @type {?} */
        const duration = currentAnimateTimings.duration;
        /** @type {?} */
        const innerContext = context.createSubContext();
        /** @type {?} */
        const innerTimeline = innerContext.currentTimeline;
        innerTimeline.easing = currentAnimateTimings.easing;
        ast.styles.forEach((/**
         * @param {?} step
         * @return {?}
         */
        step => {
            /** @type {?} */
            const offset = step.offset || 0;
            innerTimeline.forwardTime(offset * duration);
            innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
            innerTimeline.applyStylesToKeyframe();
        }));
        // this will ensure that the parent timeline gets all the styles from
        // the child even if the new timeline below is not used
        context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
        // we do this because the window between this timeline and the sub timeline
        // should ensure that the styles within are exactly the same as they were before
        context.transformIntoNewTimeline(startTime + duration);
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitQuery(ast, context) {
        // in the event that the first step before this is a style step we need
        // to ensure the styles are applied before the children are animated
        /** @type {?} */
        const startTime = context.currentTimeline.currentTime;
        /** @type {?} */
        const options = (/** @type {?} */ ((ast.options || {})));
        /** @type {?} */
        const delay = options.delay ? resolveTimingValue(options.delay) : 0;
        if (delay &&
            (context.previousNode.type === 6 /* Style */ ||
                (startTime == 0 && context.currentTimeline.getCurrentStyleProperties().length))) {
            context.currentTimeline.snapshotCurrentStyles();
            context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        /** @type {?} */
        let furthestTime = startTime;
        /** @type {?} */
        const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
        context.currentQueryTotal = elms.length;
        /** @type {?} */
        let sameElementTimeline = null;
        elms.forEach((/**
         * @param {?} element
         * @param {?} i
         * @return {?}
         */
        (element, i) => {
            context.currentQueryIndex = i;
            /** @type {?} */
            const innerContext = context.createSubContext(ast.options, element);
            if (delay) {
                innerContext.delayNextStep(delay);
            }
            if (element === context.element) {
                sameElementTimeline = innerContext.currentTimeline;
            }
            visitDslNode(this, ast.animation, innerContext);
            // this is here just incase the inner steps only contain or end
            // with a style() call (which is here to signal that this is a preparatory
            // call to style an element before it is animated again)
            innerContext.currentTimeline.applyStylesToKeyframe();
            /** @type {?} */
            const endTime = innerContext.currentTimeline.currentTime;
            furthestTime = Math.max(furthestTime, endTime);
        }));
        context.currentQueryIndex = 0;
        context.currentQueryTotal = 0;
        context.transformIntoNewTimeline(furthestTime);
        if (sameElementTimeline) {
            context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
            context.currentTimeline.snapshotCurrentStyles();
        }
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitStagger(ast, context) {
        /** @type {?} */
        const parentContext = (/** @type {?} */ (context.parentContext));
        /** @type {?} */
        const tl = context.currentTimeline;
        /** @type {?} */
        const timings = ast.timings;
        /** @type {?} */
        const duration = Math.abs(timings.duration);
        /** @type {?} */
        const maxTime = duration * (context.currentQueryTotal - 1);
        /** @type {?} */
        let delay = duration * context.currentQueryIndex;
        /** @type {?} */
        let staggerTransformer = timings.duration < 0 ? 'reverse' : timings.easing;
        switch (staggerTransformer) {
            case 'reverse':
                delay = maxTime - delay;
                break;
            case 'full':
                delay = parentContext.currentStaggerTime;
                break;
        }
        /** @type {?} */
        const timeline = context.currentTimeline;
        if (delay) {
            timeline.delayNextStep(delay);
        }
        /** @type {?} */
        const startingTime = timeline.currentTime;
        visitDslNode(this, ast.animation, context);
        context.previousNode = ast;
        // time = duration + delay
        // the reason why this computation is so complex is because
        // the inner timeline may either have a delay value or a stretched
        // keyframe depending on if a subtimeline is not used or is used.
        parentContext.currentStaggerTime =
            (tl.currentTime - startingTime) + (tl.startTime - parentContext.currentTimeline.startTime);
    }
}
/** @type {?} */
const DEFAULT_NOOP_PREVIOUS_NODE = (/** @type {?} */ ({}));
export class AnimationTimelineContext {
    /**
     * @param {?} _driver
     * @param {?} element
     * @param {?} subInstructions
     * @param {?} _enterClassName
     * @param {?} _leaveClassName
     * @param {?} errors
     * @param {?} timelines
     * @param {?=} initialTimeline
     */
    constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
        this._driver = _driver;
        this.element = element;
        this.subInstructions = subInstructions;
        this._enterClassName = _enterClassName;
        this._leaveClassName = _leaveClassName;
        this.errors = errors;
        this.timelines = timelines;
        this.parentContext = null;
        this.currentAnimateTimings = null;
        this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        this.subContextCount = 0;
        this.options = {};
        this.currentQueryIndex = 0;
        this.currentQueryTotal = 0;
        this.currentStaggerTime = 0;
        this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
        timelines.push(this.currentTimeline);
    }
    /**
     * @return {?}
     */
    get params() {
        return this.options.params;
    }
    /**
     * @param {?} options
     * @param {?=} skipIfExists
     * @return {?}
     */
    updateOptions(options, skipIfExists) {
        if (!options)
            return;
        /** @type {?} */
        const newOptions = (/** @type {?} */ (options));
        /** @type {?} */
        let optionsToUpdate = this.options;
        // NOTE: this will get patched up when other animation methods support duration overrides
        if (newOptions.duration != null) {
            ((/** @type {?} */ (optionsToUpdate))).duration = resolveTimingValue(newOptions.duration);
        }
        if (newOptions.delay != null) {
            optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
        }
        /** @type {?} */
        const newParams = newOptions.params;
        if (newParams) {
            /** @type {?} */
            let paramsToUpdate = (/** @type {?} */ (optionsToUpdate.params));
            if (!paramsToUpdate) {
                paramsToUpdate = this.options.params = {};
            }
            Object.keys(newParams).forEach((/**
             * @param {?} name
             * @return {?}
             */
            name => {
                if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
                    paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
                }
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _copyOptions() {
        /** @type {?} */
        const options = {};
        if (this.options) {
            /** @type {?} */
            const oldParams = this.options.params;
            if (oldParams) {
                /** @type {?} */
                const params = options['params'] = {};
                Object.keys(oldParams).forEach((/**
                 * @param {?} name
                 * @return {?}
                 */
                name => {
                    params[name] = oldParams[name];
                }));
            }
        }
        return options;
    }
    /**
     * @param {?=} options
     * @param {?=} element
     * @param {?=} newTime
     * @return {?}
     */
    createSubContext(options = null, element, newTime) {
        /** @type {?} */
        const target = element || this.element;
        /** @type {?} */
        const context = new AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
        context.previousNode = this.previousNode;
        context.currentAnimateTimings = this.currentAnimateTimings;
        context.options = this._copyOptions();
        context.updateOptions(options);
        context.currentQueryIndex = this.currentQueryIndex;
        context.currentQueryTotal = this.currentQueryTotal;
        context.parentContext = this;
        this.subContextCount++;
        return context;
    }
    /**
     * @param {?=} newTime
     * @return {?}
     */
    transformIntoNewTimeline(newTime) {
        this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
        this.timelines.push(this.currentTimeline);
        return this.currentTimeline;
    }
    /**
     * @param {?} instruction
     * @param {?} duration
     * @param {?} delay
     * @return {?}
     */
    appendInstructionToTimeline(instruction, duration, delay) {
        /** @type {?} */
        const updatedTimings = {
            duration: duration != null ? duration : instruction.duration,
            delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
            easing: ''
        };
        /** @type {?} */
        const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
        this.timelines.push(builder);
        return updatedTimings;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    incrementTime(time) {
        this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
    }
    /**
     * @param {?} delay
     * @return {?}
     */
    delayNextStep(delay) {
        // negative delays are not yet supported
        if (delay > 0) {
            this.currentTimeline.delayNextStep(delay);
        }
    }
    /**
     * @param {?} selector
     * @param {?} originalSelector
     * @param {?} limit
     * @param {?} includeSelf
     * @param {?} optional
     * @param {?} errors
     * @return {?}
     */
    invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
        /** @type {?} */
        let results = [];
        if (includeSelf) {
            results.push(this.element);
        }
        if (selector.length > 0) { // if :self is only used then the selector is empty
            selector = selector.replace(ENTER_TOKEN_REGEX, '.' + this._enterClassName);
            selector = selector.replace(LEAVE_TOKEN_REGEX, '.' + this._leaveClassName);
            /** @type {?} */
            const multi = limit != 1;
            /** @type {?} */
            let elements = this._driver.query(this.element, selector, multi);
            if (limit !== 0) {
                elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) :
                    elements.slice(0, limit);
            }
            results.push(...elements);
        }
        if (!optional && results.length == 0) {
            errors.push(`\`query("${originalSelector}")\` returned zero elements. (Use \`query("${originalSelector}", { optional: true })\` if you wish to allow this.)`);
        }
        return results;
    }
}
if (false) {
    /** @type {?} */
    AnimationTimelineContext.prototype.parentContext;
    /** @type {?} */
    AnimationTimelineContext.prototype.currentTimeline;
    /** @type {?} */
    AnimationTimelineContext.prototype.currentAnimateTimings;
    /** @type {?} */
    AnimationTimelineContext.prototype.previousNode;
    /** @type {?} */
    AnimationTimelineContext.prototype.subContextCount;
    /** @type {?} */
    AnimationTimelineContext.prototype.options;
    /** @type {?} */
    AnimationTimelineContext.prototype.currentQueryIndex;
    /** @type {?} */
    AnimationTimelineContext.prototype.currentQueryTotal;
    /** @type {?} */
    AnimationTimelineContext.prototype.currentStaggerTime;
    /**
     * @type {?}
     * @private
     */
    AnimationTimelineContext.prototype._driver;
    /** @type {?} */
    AnimationTimelineContext.prototype.element;
    /** @type {?} */
    AnimationTimelineContext.prototype.subInstructions;
    /**
     * @type {?}
     * @private
     */
    AnimationTimelineContext.prototype._enterClassName;
    /**
     * @type {?}
     * @private
     */
    AnimationTimelineContext.prototype._leaveClassName;
    /** @type {?} */
    AnimationTimelineContext.prototype.errors;
    /** @type {?} */
    AnimationTimelineContext.prototype.timelines;
}
export class TimelineBuilder {
    /**
     * @param {?} _driver
     * @param {?} element
     * @param {?} startTime
     * @param {?=} _elementTimelineStylesLookup
     */
    constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
        this._driver = _driver;
        this.element = element;
        this.startTime = startTime;
        this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
        this.duration = 0;
        this._previousKeyframe = {};
        this._currentKeyframe = {};
        this._keyframes = new Map();
        this._styleSummary = {};
        this._pendingStyles = {};
        this._backFill = {};
        this._currentEmptyStepKeyframe = null;
        if (!this._elementTimelineStylesLookup) {
            this._elementTimelineStylesLookup = new Map();
        }
        this._localTimelineStyles = Object.create(this._backFill, {});
        this._globalTimelineStyles = (/** @type {?} */ (this._elementTimelineStylesLookup.get(element)));
        if (!this._globalTimelineStyles) {
            this._globalTimelineStyles = this._localTimelineStyles;
            this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
        }
        this._loadKeyframe();
    }
    /**
     * @return {?}
     */
    containsAnimation() {
        switch (this._keyframes.size) {
            case 0:
                return false;
            case 1:
                return this.getCurrentStyleProperties().length > 0;
            default:
                return true;
        }
    }
    /**
     * @return {?}
     */
    getCurrentStyleProperties() {
        return Object.keys(this._currentKeyframe);
    }
    /**
     * @return {?}
     */
    get currentTime() {
        return this.startTime + this.duration;
    }
    /**
     * @param {?} delay
     * @return {?}
     */
    delayNextStep(delay) {
        // in the event that a style() step is placed right before a stagger()
        // and that style() step is the very first style() value in the animation
        // then we need to make a copy of the keyframe [0, copy, 1] so that the delay
        // properly applies the style() values to work with the stagger...
        /** @type {?} */
        const hasPreStyleStep = this._keyframes.size == 1 && Object.keys(this._pendingStyles).length;
        if (this.duration || hasPreStyleStep) {
            this.forwardTime(this.currentTime + delay);
            if (hasPreStyleStep) {
                this.snapshotCurrentStyles();
            }
        }
        else {
            this.startTime += delay;
        }
    }
    /**
     * @param {?} element
     * @param {?=} currentTime
     * @return {?}
     */
    fork(element, currentTime) {
        this.applyStylesToKeyframe();
        return new TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
    }
    /**
     * @private
     * @return {?}
     */
    _loadKeyframe() {
        if (this._currentKeyframe) {
            this._previousKeyframe = this._currentKeyframe;
        }
        this._currentKeyframe = (/** @type {?} */ (this._keyframes.get(this.duration)));
        if (!this._currentKeyframe) {
            this._currentKeyframe = Object.create(this._backFill, {});
            this._keyframes.set(this.duration, this._currentKeyframe);
        }
    }
    /**
     * @return {?}
     */
    forwardFrame() {
        this.duration += ONE_FRAME_IN_MILLISECONDS;
        this._loadKeyframe();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    forwardTime(time) {
        this.applyStylesToKeyframe();
        this.duration = time;
        this._loadKeyframe();
    }
    /**
     * @private
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    _updateStyle(prop, value) {
        this._localTimelineStyles[prop] = value;
        this._globalTimelineStyles[prop] = value;
        this._styleSummary[prop] = { time: this.currentTime, value };
    }
    /**
     * @return {?}
     */
    allowOnlyTimelineStyles() {
        return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    /**
     * @param {?} easing
     * @return {?}
     */
    applyEmptyStep(easing) {
        if (easing) {
            this._previousKeyframe['easing'] = easing;
        }
        // special case for animate(duration):
        // all missing styles are filled with a `*` value then
        // if any destination styles are filled in later on the same
        // keyframe then they will override the overridden styles
        // We use `_globalTimelineStyles` here because there may be
        // styles in previous keyframes that are not present in this timeline
        Object.keys(this._globalTimelineStyles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            this._backFill[prop] = this._globalTimelineStyles[prop] || AUTO_STYLE;
            this._currentKeyframe[prop] = AUTO_STYLE;
        }));
        this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    /**
     * @param {?} input
     * @param {?} easing
     * @param {?} errors
     * @param {?=} options
     * @return {?}
     */
    setStyles(input, easing, errors, options) {
        if (easing) {
            this._previousKeyframe['easing'] = easing;
        }
        /** @type {?} */
        const params = (options && options.params) || {};
        /** @type {?} */
        const styles = flattenStyles(input, this._globalTimelineStyles);
        Object.keys(styles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const val = interpolateParams(styles[prop], params, errors);
            this._pendingStyles[prop] = val;
            if (!this._localTimelineStyles.hasOwnProperty(prop)) {
                this._backFill[prop] = this._globalTimelineStyles.hasOwnProperty(prop) ?
                    this._globalTimelineStyles[prop] :
                    AUTO_STYLE;
            }
            this._updateStyle(prop, val);
        }));
    }
    /**
     * @return {?}
     */
    applyStylesToKeyframe() {
        /** @type {?} */
        const styles = this._pendingStyles;
        /** @type {?} */
        const props = Object.keys(styles);
        if (props.length == 0)
            return;
        this._pendingStyles = {};
        props.forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const val = styles[prop];
            this._currentKeyframe[prop] = val;
        }));
        Object.keys(this._localTimelineStyles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            if (!this._currentKeyframe.hasOwnProperty(prop)) {
                this._currentKeyframe[prop] = this._localTimelineStyles[prop];
            }
        }));
    }
    /**
     * @return {?}
     */
    snapshotCurrentStyles() {
        Object.keys(this._localTimelineStyles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const val = this._localTimelineStyles[prop];
            this._pendingStyles[prop] = val;
            this._updateStyle(prop, val);
        }));
    }
    /**
     * @return {?}
     */
    getFinalKeyframe() {
        return this._keyframes.get(this.duration);
    }
    /**
     * @return {?}
     */
    get properties() {
        /** @type {?} */
        const properties = [];
        for (let prop in this._currentKeyframe) {
            properties.push(prop);
        }
        return properties;
    }
    /**
     * @param {?} timeline
     * @return {?}
     */
    mergeTimelineCollectedStyles(timeline) {
        Object.keys(timeline._styleSummary).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const details0 = this._styleSummary[prop];
            /** @type {?} */
            const details1 = timeline._styleSummary[prop];
            if (!details0 || details1.time > details0.time) {
                this._updateStyle(prop, details1.value);
            }
        }));
    }
    /**
     * @return {?}
     */
    buildKeyframes() {
        this.applyStylesToKeyframe();
        /** @type {?} */
        const preStyleProps = new Set();
        /** @type {?} */
        const postStyleProps = new Set();
        /** @type {?} */
        const isEmpty = this._keyframes.size === 1 && this.duration === 0;
        /** @type {?} */
        let finalKeyframes = [];
        this._keyframes.forEach((/**
         * @param {?} keyframe
         * @param {?} time
         * @return {?}
         */
        (keyframe, time) => {
            /** @type {?} */
            const finalKeyframe = copyStyles(keyframe, true);
            Object.keys(finalKeyframe).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                /** @type {?} */
                const value = finalKeyframe[prop];
                if (value == PRE_STYLE) {
                    preStyleProps.add(prop);
                }
                else if (value == AUTO_STYLE) {
                    postStyleProps.add(prop);
                }
            }));
            if (!isEmpty) {
                finalKeyframe['offset'] = time / this.duration;
            }
            finalKeyframes.push(finalKeyframe);
        }));
        /** @type {?} */
        const preProps = preStyleProps.size ? iteratorToArray(preStyleProps.values()) : [];
        /** @type {?} */
        const postProps = postStyleProps.size ? iteratorToArray(postStyleProps.values()) : [];
        // special case for a 0-second animation (which is designed just to place styles onscreen)
        if (isEmpty) {
            /** @type {?} */
            const kf0 = finalKeyframes[0];
            /** @type {?} */
            const kf1 = copyObj(kf0);
            kf0['offset'] = 0;
            kf1['offset'] = 1;
            finalKeyframes = [kf0, kf1];
        }
        return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
    }
}
if (false) {
    /** @type {?} */
    TimelineBuilder.prototype.duration;
    /** @type {?} */
    TimelineBuilder.prototype.easing;
    /**
     * @type {?}
     * @private
     */
    TimelineBuilder.prototype._previousKeyframe;
    /**
     * @type {?}
     * @private
     */
    TimelineBuilder.prototype._currentKeyframe;
    /**
     * @type {?}
     * @private
     */
    TimelineBuilder.prototype._keyframes;
    /**
     * @type {?}
     * @private
     */
    TimelineBuilder.prototype._styleSummary;
    /**
     * @type {?}
     * @private
     */
    TimelineBuilder.prototype._localTimelineStyles;
    /**
     * @type {?}
     * @private
     */
    TimelineBuilder.prototype._globalTimelineStyles;
    /**
     * @type {?}
     * @private
     */
    TimelineBuilder.prototype._pendingStyles;
    /**
     * @type {?}
     * @private
     */
    TimelineBuilder.prototype._backFill;
    /**
     * @type {?}
     * @private
     */
    TimelineBuilder.prototype._currentEmptyStepKeyframe;
    /**
     * @type {?}
     * @private
     */
    TimelineBuilder.prototype._driver;
    /** @type {?} */
    TimelineBuilder.prototype.element;
    /** @type {?} */
    TimelineBuilder.prototype.startTime;
    /**
     * @type {?}
     * @private
     */
    TimelineBuilder.prototype._elementTimelineStylesLookup;
}
class SubTimelineBuilder extends TimelineBuilder {
    /**
     * @param {?} driver
     * @param {?} element
     * @param {?} keyframes
     * @param {?} preStyleProps
     * @param {?} postStyleProps
     * @param {?} timings
     * @param {?=} _stretchStartingKeyframe
     */
    constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
        super(driver, element, timings.delay);
        this.element = element;
        this.keyframes = keyframes;
        this.preStyleProps = preStyleProps;
        this.postStyleProps = postStyleProps;
        this._stretchStartingKeyframe = _stretchStartingKeyframe;
        this.timings = { duration: timings.duration, delay: timings.delay, easing: timings.easing };
    }
    /**
     * @return {?}
     */
    containsAnimation() {
        return this.keyframes.length > 1;
    }
    /**
     * @return {?}
     */
    buildKeyframes() {
        /** @type {?} */
        let keyframes = this.keyframes;
        let { delay, duration, easing } = this.timings;
        if (this._stretchStartingKeyframe && delay) {
            /** @type {?} */
            const newKeyframes = [];
            /** @type {?} */
            const totalTime = duration + delay;
            /** @type {?} */
            const startingGap = delay / totalTime;
            // the original starting keyframe now starts once the delay is done
            /** @type {?} */
            const newFirstKeyframe = copyStyles(keyframes[0], false);
            newFirstKeyframe['offset'] = 0;
            newKeyframes.push(newFirstKeyframe);
            /** @type {?} */
            const oldFirstKeyframe = copyStyles(keyframes[0], false);
            oldFirstKeyframe['offset'] = roundOffset(startingGap);
            newKeyframes.push(oldFirstKeyframe);
            /*
                    When the keyframe is stretched then it means that the delay before the animation
                    starts is gone. Instead the first keyframe is placed at the start of the animation
                    and it is then copied to where it starts when the original delay is over. This basically
                    means nothing animates during that delay, but the styles are still renderered. For this
                    to work the original offset values that exist in the original keyframes must be "warped"
                    so that they can take the new keyframe + delay into account.
            
                    delay=1000, duration=1000, keyframes = 0 .5 1
            
                    turns into
            
                    delay=0, duration=2000, keyframes = 0 .33 .66 1
                   */
            // offsets between 1 ... n -1 are all warped by the keyframe stretch
            /** @type {?} */
            const limit = keyframes.length - 1;
            for (let i = 1; i <= limit; i++) {
                /** @type {?} */
                let kf = copyStyles(keyframes[i], false);
                /** @type {?} */
                const oldOffset = (/** @type {?} */ (kf['offset']));
                /** @type {?} */
                const timeAtKeyframe = delay + oldOffset * duration;
                kf['offset'] = roundOffset(timeAtKeyframe / totalTime);
                newKeyframes.push(kf);
            }
            // the new starting keyframe should be added at the start
            duration = totalTime;
            delay = 0;
            easing = '';
            keyframes = newKeyframes;
        }
        return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
    }
}
if (false) {
    /** @type {?} */
    SubTimelineBuilder.prototype.timings;
    /** @type {?} */
    SubTimelineBuilder.prototype.element;
    /** @type {?} */
    SubTimelineBuilder.prototype.keyframes;
    /** @type {?} */
    SubTimelineBuilder.prototype.preStyleProps;
    /** @type {?} */
    SubTimelineBuilder.prototype.postStyleProps;
    /**
     * @type {?}
     * @private
     */
    SubTimelineBuilder.prototype._stretchStartingKeyframe;
}
/**
 * @param {?} offset
 * @param {?=} decimalPoints
 * @return {?}
 */
function roundOffset(offset, decimalPoints = 3) {
    /** @type {?} */
    const mult = Math.pow(10, decimalPoints - 1);
    return Math.round(offset * mult) / mult;
}
/**
 * @param {?} input
 * @param {?} allStyles
 * @return {?}
 */
function flattenStyles(input, allStyles) {
    /** @type {?} */
    const styles = {};
    /** @type {?} */
    let allProperties;
    input.forEach((/**
     * @param {?} token
     * @return {?}
     */
    token => {
        if (token === '*') {
            allProperties = allProperties || Object.keys(allStyles);
            allProperties.forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                styles[prop] = AUTO_STYLE;
            }));
        }
        else {
            copyStyles((/** @type {?} */ (token)), false, styles);
        }
    }));
    return styles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX3RpbWVsaW5lX2J1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL2RzbC9hbmltYXRpb25fdGltZWxpbmVfYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQXNHLFVBQVUsRUFBRSxVQUFVLElBQUksU0FBUyxFQUFhLE1BQU0scUJBQXFCLENBQUM7QUFHekwsT0FBTyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFHakksT0FBTyxFQUErQix5QkFBeUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pHLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDOztNQUUxRCx5QkFBeUIsR0FBRyxDQUFDOztNQUM3QixXQUFXLEdBQUcsUUFBUTs7TUFDdEIsaUJBQWlCLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQzs7TUFDaEQsV0FBVyxHQUFHLFFBQVE7O01BQ3RCLGlCQUFpQixHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0Z0RCxNQUFNLFVBQVUsdUJBQXVCLENBQ25DLE1BQXVCLEVBQUUsV0FBZ0IsRUFBRSxHQUErQixFQUMxRSxjQUFzQixFQUFFLGNBQXNCLEVBQUUsaUJBQTZCLEVBQUUsRUFDL0UsY0FBMEIsRUFBRSxFQUFFLE9BQXlCLEVBQ3ZELGVBQXVDLEVBQUUsU0FBZ0IsRUFBRTtJQUM3RCxP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cEIsSUFBSSxLQUFLLEtBQUssR0FBRyxFQUFFO1lBQ2pCLGFBQWEsR0FBRyxhQUFhLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4RCxhQUFhLENBQUMsT0FBTzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDO1lBQzVCLENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFVBQVUsQ0FBQyxtQkFBQSxLQUFLLEVBQWMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FuaW1hdGVDaGlsZE9wdGlvbnMsIEFuaW1hdGVUaW1pbmdzLCBBbmltYXRpb25NZXRhZGF0YVR5cGUsIEFuaW1hdGlvbk9wdGlvbnMsIEFuaW1hdGlvblF1ZXJ5T3B0aW9ucywgQVVUT19TVFlMRSwgybVQUkVfU1RZTEUgYXMgUFJFX1NUWUxFLCDJtVN0eWxlRGF0YX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7QW5pbWF0aW9uRHJpdmVyfSBmcm9tICcuLi9yZW5kZXIvYW5pbWF0aW9uX2RyaXZlcic7XG5pbXBvcnQge2NvcHlPYmosIGNvcHlTdHlsZXMsIGludGVycG9sYXRlUGFyYW1zLCBpdGVyYXRvclRvQXJyYXksIHJlc29sdmVUaW1pbmcsIHJlc29sdmVUaW1pbmdWYWx1ZSwgdmlzaXREc2xOb2RlfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IHtBbmltYXRlQXN0LCBBbmltYXRlQ2hpbGRBc3QsIEFuaW1hdGVSZWZBc3QsIEFzdCwgQXN0VmlzaXRvciwgRHluYW1pY1RpbWluZ0FzdCwgR3JvdXBBc3QsIEtleWZyYW1lc0FzdCwgUXVlcnlBc3QsIFJlZmVyZW5jZUFzdCwgU2VxdWVuY2VBc3QsIFN0YWdnZXJBc3QsIFN0YXRlQXN0LCBTdHlsZUFzdCwgVGltaW5nQXN0LCBUcmFuc2l0aW9uQXN0LCBUcmlnZ2VyQXN0fSBmcm9tICcuL2FuaW1hdGlvbl9hc3QnO1xuaW1wb3J0IHtBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uLCBjcmVhdGVUaW1lbGluZUluc3RydWN0aW9ufSBmcm9tICcuL2FuaW1hdGlvbl90aW1lbGluZV9pbnN0cnVjdGlvbic7XG5pbXBvcnQge0VsZW1lbnRJbnN0cnVjdGlvbk1hcH0gZnJvbSAnLi9lbGVtZW50X2luc3RydWN0aW9uX21hcCc7XG5cbmNvbnN0IE9ORV9GUkFNRV9JTl9NSUxMSVNFQ09ORFMgPSAxO1xuY29uc3QgRU5URVJfVE9LRU4gPSAnOmVudGVyJztcbmNvbnN0IEVOVEVSX1RPS0VOX1JFR0VYID0gbmV3IFJlZ0V4cChFTlRFUl9UT0tFTiwgJ2cnKTtcbmNvbnN0IExFQVZFX1RPS0VOID0gJzpsZWF2ZSc7XG5jb25zdCBMRUFWRV9UT0tFTl9SRUdFWCA9IG5ldyBSZWdFeHAoTEVBVkVfVE9LRU4sICdnJyk7XG5cbi8qXG4gKiBUaGUgY29kZSB3aXRoaW4gdGhpcyBmaWxlIGFpbXMgdG8gZ2VuZXJhdGUgd2ViLWFuaW1hdGlvbnMtY29tcGF0aWJsZSBrZXlmcmFtZXMgZnJvbSBBbmd1bGFyJ3NcbiAqIGFuaW1hdGlvbiBEU0wgY29kZS5cbiAqXG4gKiBUaGUgY29kZSBiZWxvdyB3aWxsIGJlIGNvbnZlcnRlZCBmcm9tOlxuICpcbiAqIGBgYFxuICogc2VxdWVuY2UoW1xuICogICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gKiAgIGFuaW1hdGUoMTAwMCwgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICogXSlcbiAqIGBgYFxuICpcbiAqIFRvOlxuICogYGBgXG4gKiBrZXlmcmFtZXMgPSBbeyBvcGFjaXR5OiAwLCBvZmZzZXQ6IDAgfSwgeyBvcGFjaXR5OiAxLCBvZmZzZXQ6IDEgfV1cbiAqIGR1cmF0aW9uID0gMTAwMFxuICogZGVsYXkgPSAwXG4gKiBlYXNpbmcgPSAnJ1xuICogYGBgXG4gKlxuICogRm9yIHRoaXMgb3BlcmF0aW9uIHRvIGNvdmVyIHRoZSBjb21iaW5hdGlvbiBvZiBhbmltYXRpb24gdmVyYnMgKHN0eWxlLCBhbmltYXRlLCBncm91cCwgZXRjLi4uKSBhXG4gKiBjb21iaW5hdGlvbiBvZiBwcm90b3R5cGljYWwgaW5oZXJpdGFuY2UsIEFTVCB0cmF2ZXJzYWwgYW5kIG1lcmdlLXNvcnQtbGlrZSBhbGdvcml0aG1zIGFyZSB1c2VkLlxuICpcbiAqIFtBU1QgVHJhdmVyc2FsXVxuICogRWFjaCBvZiB0aGUgYW5pbWF0aW9uIHZlcmJzLCB3aGVuIGV4ZWN1dGVkLCB3aWxsIHJldHVybiBhbiBzdHJpbmctbWFwIG9iamVjdCByZXByZXNlbnRpbmcgd2hhdFxuICogdHlwZSBvZiBhY3Rpb24gaXQgaXMgKHN0eWxlLCBhbmltYXRlLCBncm91cCwgZXRjLi4uKSBhbmQgdGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIGl0LiBUaGlzIG1lYW5zXG4gKiB0aGF0IHdoZW4gZnVuY3Rpb25hbCBjb21wb3NpdGlvbiBtaXggb2YgdGhlc2UgZnVuY3Rpb25zIGlzIGV2YWx1YXRlZCAobGlrZSBpbiB0aGUgZXhhbXBsZSBhYm92ZSlcbiAqIHRoZW4gaXQgd2lsbCBlbmQgdXAgcHJvZHVjaW5nIGEgdHJlZSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgYW5pbWF0aW9uIGl0c2VsZi5cbiAqXG4gKiBXaGVuIHRoaXMgYW5pbWF0aW9uIG9iamVjdCB0cmVlIGlzIHByb2Nlc3NlZCBieSB0aGUgdmlzaXRvciBjb2RlIGJlbG93IGl0IHdpbGwgdmlzaXQgZWFjaCBvZiB0aGVcbiAqIHZlcmIgc3RhdGVtZW50cyB3aXRoaW4gdGhlIHZpc2l0b3IuIEFuZCBkdXJpbmcgZWFjaCB2aXNpdCBpdCB3aWxsIGJ1aWxkIHRoZSBjb250ZXh0IG9mIHRoZVxuICogYW5pbWF0aW9uIGtleWZyYW1lcyBieSBpbnRlcmFjdGluZyB3aXRoIHRoZSBgVGltZWxpbmVCdWlsZGVyYC5cbiAqXG4gKiBbVGltZWxpbmVCdWlsZGVyXVxuICogVGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgdHJhY2tpbmcgdGhlIHN0eWxlcyBhbmQgYnVpbGRpbmcgYSBzZXJpZXMgb2Yga2V5ZnJhbWUgb2JqZWN0cyBmb3IgYVxuICogdGltZWxpbmUgYmV0d2VlbiBhIHN0YXJ0IGFuZCBlbmQgdGltZS4gVGhlIGJ1aWxkZXIgc3RhcnRzIG9mZiB3aXRoIGFuIGluaXRpYWwgdGltZWxpbmUgYW5kIGVhY2hcbiAqIHRpbWUgdGhlIEFTVCBjb21lcyBhY3Jvc3MgYSBgZ3JvdXAoKWAsIGBrZXlmcmFtZXMoKWAgb3IgYSBjb21iaW5hdGlvbiBvZiB0aGUgdHdvIHdpaHRpbiBhXG4gKiBgc2VxdWVuY2UoKWAgdGhlbiBpdCB3aWxsIGdlbmVyYXRlIGEgc3ViIHRpbWVsaW5lIGZvciBlYWNoIHN0ZXAgYXMgd2VsbCBhcyBhIG5ldyBvbmUgYWZ0ZXJcbiAqIHRoZXkgYXJlIGNvbXBsZXRlLlxuICpcbiAqIEFzIHRoZSBBU1QgaXMgdHJhdmVyc2VkLCB0aGUgdGltaW5nIHN0YXRlIG9uIGVhY2ggb2YgdGhlIHRpbWVsaW5lcyB3aWxsIGJlIGluY3JlbWVudGVkLiBJZiBhIHN1YlxuICogdGltZWxpbmUgd2FzIGNyZWF0ZWQgKGJhc2VkIG9uIG9uZSBvZiB0aGUgY2FzZXMgYWJvdmUpIHRoZW4gdGhlIHBhcmVudCB0aW1lbGluZSB3aWxsIGF0dGVtcHQgdG9cbiAqIG1lcmdlIHRoZSBzdHlsZXMgdXNlZCB3aXRoaW4gdGhlIHN1YiB0aW1lbGluZXMgaW50byBpdHNlbGYgKG9ubHkgd2l0aCBncm91cCgpIHRoaXMgd2lsbCBoYXBwZW4pLlxuICogVGhpcyBoYXBwZW5zIHdpdGggYSBtZXJnZSBvcGVyYXRpb24gKG11Y2ggbGlrZSBob3cgdGhlIG1lcmdlIHdvcmtzIGluIG1lcmdlc29ydCkgYW5kIGl0IHdpbGwgb25seVxuICogY29weSB0aGUgbW9zdCByZWNlbnRseSB1c2VkIHN0eWxlcyBmcm9tIHRoZSBzdWIgdGltZWxpbmVzIGludG8gdGhlIHBhcmVudCB0aW1lbGluZS4gVGhpcyBlbnN1cmVzXG4gKiB0aGF0IGlmIHRoZSBzdHlsZXMgYXJlIHVzZWQgbGF0ZXIgb24gaW4gYW5vdGhlciBwaGFzZSBvZiB0aGUgYW5pbWF0aW9uIHRoZW4gdGhleSB3aWxsIGJlIHRoZSBtb3N0XG4gKiB1cC10by1kYXRlIHZhbHVlcy5cbiAqXG4gKiBbSG93IE1pc3NpbmcgU3R5bGVzIEFyZSBVcGRhdGVkXVxuICogRWFjaCB0aW1lbGluZSBoYXMgYSBgYmFja0ZpbGxgIHByb3BlcnR5IHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciBmaWxsaW5nIGluIG5ldyBzdHlsZXMgaW50b1xuICogYWxyZWFkeSBwcm9jZXNzZWQga2V5ZnJhbWVzIGlmIGEgbmV3IHN0eWxlIHNob3dzIHVwIGxhdGVyIHdpdGhpbiB0aGUgYW5pbWF0aW9uIHNlcXVlbmNlLlxuICpcbiAqIGBgYFxuICogc2VxdWVuY2UoW1xuICogICBzdHlsZSh7IHdpZHRoOiAwIH0pLFxuICogICBhbmltYXRlKDEwMDAsIHN0eWxlKHsgd2lkdGg6IDEwMCB9KSksXG4gKiAgIGFuaW1hdGUoMTAwMCwgc3R5bGUoeyB3aWR0aDogMjAwIH0pKSxcbiAqICAgYW5pbWF0ZSgxMDAwLCBzdHlsZSh7IHdpZHRoOiAzMDAgfSkpXG4gKiAgIGFuaW1hdGUoMTAwMCwgc3R5bGUoeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDQwMCB9KSkgLy8gbm90aWNlIGhvdyBgaGVpZ2h0YCBkb2Vzbid0IGV4aXN0IGFueXdoZXJlXG4gKiBlbHNlXG4gKiBdKVxuICogYGBgXG4gKlxuICogV2hhdCBpcyBoYXBwZW5pbmcgaGVyZSBpcyB0aGF0IHRoZSBgaGVpZ2h0YCB2YWx1ZSBpcyBhZGRlZCBsYXRlciBpbiB0aGUgc2VxdWVuY2UsIGJ1dCBpcyBtaXNzaW5nXG4gKiBmcm9tIGFsbCBwcmV2aW91cyBhbmltYXRpb24gc3RlcHMuIFRoZXJlZm9yZSB3aGVuIGEga2V5ZnJhbWUgaXMgY3JlYXRlZCBpdCB3b3VsZCBhbHNvIGJlIG1pc3NpbmdcbiAqIGZyb20gYWxsIHByZXZpb3VzIGtleWZyYW1lcyB1cCB1bnRpbCB3aGVyZSBpdCBpcyBmaXJzdCB1c2VkLiBGb3IgdGhlIHRpbWVsaW5lIGtleWZyYW1lIGdlbmVyYXRpb25cbiAqIHRvIHByb3Blcmx5IGZpbGwgaW4gdGhlIHN0eWxlIGl0IHdpbGwgcGxhY2UgdGhlIHByZXZpb3VzIHZhbHVlICh0aGUgdmFsdWUgZnJvbSB0aGUgcGFyZW50XG4gKiB0aW1lbGluZSkgb3IgYSBkZWZhdWx0IHZhbHVlIG9mIGAqYCBpbnRvIHRoZSBiYWNrRmlsbCBvYmplY3QuIEdpdmVuIHRoYXQgZWFjaCBvZiB0aGUga2V5ZnJhbWVcbiAqIHN0eWxlcyBhcmUgb2JqZWN0cyB0aGF0IHByb3RvdHlwaWNhbGx5IGluaGVydCBmcm9tIHRoZSBiYWNrRmlsbCBvYmplY3QsIHRoaXMgbWVhbnMgdGhhdCBpZiBhXG4gKiB2YWx1ZSBpcyBhZGRlZCBpbnRvIHRoZSBiYWNrRmlsbCB0aGVuIGl0IHdpbGwgYXV0b21hdGljYWxseSBwcm9wYWdhdGUgYW55IG1pc3NpbmcgdmFsdWVzIHRvIGFsbFxuICoga2V5ZnJhbWVzLiBUaGVyZWZvcmUgdGhlIG1pc3NpbmcgYGhlaWdodGAgdmFsdWUgd2lsbCBiZSBwcm9wZXJseSBmaWxsZWQgaW50byB0aGUgYWxyZWFkeVxuICogcHJvY2Vzc2VkIGtleWZyYW1lcy5cbiAqXG4gKiBXaGVuIGEgc3ViLXRpbWVsaW5lIGlzIGNyZWF0ZWQgaXQgd2lsbCBoYXZlIGl0cyBvd24gYmFja0ZpbGwgcHJvcGVydHkuIFRoaXMgaXMgZG9uZSBzbyB0aGF0XG4gKiBzdHlsZXMgcHJlc2VudCB3aXRoaW4gdGhlIHN1Yi10aW1lbGluZSBkbyBub3QgYWNjaWRlbnRhbGx5IHNlZXAgaW50byB0aGUgcHJldmlvdXMvZnV0dXJlIHRpbWVsaW5lXG4gKiBrZXlmcmFtZXNcbiAqXG4gKiAoRm9yIHByb3RvdHlwaWNhbGx5LWluaGVyaXRlZCBjb250ZW50cyB0byBiZSBkZXRlY3RlZCBhIGBmb3IoaSBpbiBvYmopYCBsb29wIG11c3QgYmUgdXNlZC4pXG4gKlxuICogW1ZhbGlkYXRpb25dXG4gKiBUaGUgY29kZSBpbiB0aGlzIGZpbGUgaXMgbm90IHJlc3BvbnNpYmxlIGZvciB2YWxpZGF0aW9uLiBUaGF0IGZ1bmN0aW9uYWxpdHkgaGFwcGVucyB3aXRoIHdpdGhpblxuICogdGhlIGBBbmltYXRpb25WYWxpZGF0b3JWaXNpdG9yYCBjb2RlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRBbmltYXRpb25UaW1lbGluZXMoXG4gICAgZHJpdmVyOiBBbmltYXRpb25Ecml2ZXIsIHJvb3RFbGVtZW50OiBhbnksIGFzdDogQXN0PEFuaW1hdGlvbk1ldGFkYXRhVHlwZT4sXG4gICAgZW50ZXJDbGFzc05hbWU6IHN0cmluZywgbGVhdmVDbGFzc05hbWU6IHN0cmluZywgc3RhcnRpbmdTdHlsZXM6IMm1U3R5bGVEYXRhID0ge30sXG4gICAgZmluYWxTdHlsZXM6IMm1U3R5bGVEYXRhID0ge30sIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnMsXG4gICAgc3ViSW5zdHJ1Y3Rpb25zPzogRWxlbWVudEluc3RydWN0aW9uTWFwLCBlcnJvcnM6IGFueVtdID0gW10pOiBBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uW10ge1xuICByZXR1cm4gbmV3IEFuaW1hdGlvblRpbWVsaW5lQnVpbGRlclZpc2l0b3IoKS5idWlsZEtleWZyYW1lcyhcbiAgICAgIGRyaXZlciwgcm9vdEVsZW1lbnQsIGFzdCwgZW50ZXJDbGFzc05hbWUsIGxlYXZlQ2xhc3NOYW1lLCBzdGFydGluZ1N0eWxlcywgZmluYWxTdHlsZXMsXG4gICAgICBvcHRpb25zLCBzdWJJbnN0cnVjdGlvbnMsIGVycm9ycyk7XG59XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25UaW1lbGluZUJ1aWxkZXJWaXNpdG9yIGltcGxlbWVudHMgQXN0VmlzaXRvciB7XG4gIGJ1aWxkS2V5ZnJhbWVzKFxuICAgICAgZHJpdmVyOiBBbmltYXRpb25Ecml2ZXIsIHJvb3RFbGVtZW50OiBhbnksIGFzdDogQXN0PEFuaW1hdGlvbk1ldGFkYXRhVHlwZT4sXG4gICAgICBlbnRlckNsYXNzTmFtZTogc3RyaW5nLCBsZWF2ZUNsYXNzTmFtZTogc3RyaW5nLCBzdGFydGluZ1N0eWxlczogybVTdHlsZURhdGEsXG4gICAgICBmaW5hbFN0eWxlczogybVTdHlsZURhdGEsIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnMsIHN1Ykluc3RydWN0aW9ucz86IEVsZW1lbnRJbnN0cnVjdGlvbk1hcCxcbiAgICAgIGVycm9yczogYW55W10gPSBbXSk6IEFuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb25bXSB7XG4gICAgc3ViSW5zdHJ1Y3Rpb25zID0gc3ViSW5zdHJ1Y3Rpb25zIHx8IG5ldyBFbGVtZW50SW5zdHJ1Y3Rpb25NYXAoKTtcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IEFuaW1hdGlvblRpbWVsaW5lQ29udGV4dChcbiAgICAgICAgZHJpdmVyLCByb290RWxlbWVudCwgc3ViSW5zdHJ1Y3Rpb25zLCBlbnRlckNsYXNzTmFtZSwgbGVhdmVDbGFzc05hbWUsIGVycm9ycywgW10pO1xuICAgIGNvbnRleHQub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgY29udGV4dC5jdXJyZW50VGltZWxpbmUuc2V0U3R5bGVzKFtzdGFydGluZ1N0eWxlc10sIG51bGwsIGNvbnRleHQuZXJyb3JzLCBvcHRpb25zKTtcblxuICAgIHZpc2l0RHNsTm9kZSh0aGlzLCBhc3QsIGNvbnRleHQpO1xuXG4gICAgLy8gdGhpcyBjaGVja3MgdG8gc2VlIGlmIGFuIGFjdHVhbCBhbmltYXRpb24gaGFwcGVuZWRcbiAgICBjb25zdCB0aW1lbGluZXMgPSBjb250ZXh0LnRpbWVsaW5lcy5maWx0ZXIodGltZWxpbmUgPT4gdGltZWxpbmUuY29udGFpbnNBbmltYXRpb24oKSk7XG4gICAgaWYgKHRpbWVsaW5lcy5sZW5ndGggJiYgT2JqZWN0LmtleXMoZmluYWxTdHlsZXMpLmxlbmd0aCkge1xuICAgICAgY29uc3QgdGwgPSB0aW1lbGluZXNbdGltZWxpbmVzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKCF0bC5hbGxvd09ubHlUaW1lbGluZVN0eWxlcygpKSB7XG4gICAgICAgIHRsLnNldFN0eWxlcyhbZmluYWxTdHlsZXNdLCBudWxsLCBjb250ZXh0LmVycm9ycywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbWVsaW5lcy5sZW5ndGggPyB0aW1lbGluZXMubWFwKHRpbWVsaW5lID0+IHRpbWVsaW5lLmJ1aWxkS2V5ZnJhbWVzKCkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcmVhdGVUaW1lbGluZUluc3RydWN0aW9uKHJvb3RFbGVtZW50LCBbXSwgW10sIFtdLCAwLCAwLCAnJywgZmFsc2UpXTtcbiAgfVxuXG4gIHZpc2l0VHJpZ2dlcihhc3Q6IFRyaWdnZXJBc3QsIGNvbnRleHQ6IEFuaW1hdGlvblRpbWVsaW5lQ29udGV4dCk6IGFueSB7XG4gICAgLy8gdGhlc2UgdmFsdWVzIGFyZSBub3QgdmlzaXRlZCBpbiB0aGlzIEFTVFxuICB9XG5cbiAgdmlzaXRTdGF0ZShhc3Q6IFN0YXRlQXN0LCBjb250ZXh0OiBBbmltYXRpb25UaW1lbGluZUNvbnRleHQpOiBhbnkge1xuICAgIC8vIHRoZXNlIHZhbHVlcyBhcmUgbm90IHZpc2l0ZWQgaW4gdGhpcyBBU1RcbiAgfVxuXG4gIHZpc2l0VHJhbnNpdGlvbihhc3Q6IFRyYW5zaXRpb25Bc3QsIGNvbnRleHQ6IEFuaW1hdGlvblRpbWVsaW5lQ29udGV4dCk6IGFueSB7XG4gICAgLy8gdGhlc2UgdmFsdWVzIGFyZSBub3QgdmlzaXRlZCBpbiB0aGlzIEFTVFxuICB9XG5cbiAgdmlzaXRBbmltYXRlQ2hpbGQoYXN0OiBBbmltYXRlQ2hpbGRBc3QsIGNvbnRleHQ6IEFuaW1hdGlvblRpbWVsaW5lQ29udGV4dCk6IGFueSB7XG4gICAgY29uc3QgZWxlbWVudEluc3RydWN0aW9ucyA9IGNvbnRleHQuc3ViSW5zdHJ1Y3Rpb25zLmNvbnN1bWUoY29udGV4dC5lbGVtZW50KTtcbiAgICBpZiAoZWxlbWVudEluc3RydWN0aW9ucykge1xuICAgICAgY29uc3QgaW5uZXJDb250ZXh0ID0gY29udGV4dC5jcmVhdGVTdWJDb250ZXh0KGFzdC5vcHRpb25zKTtcbiAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IGNvbnRleHQuY3VycmVudFRpbWVsaW5lLmN1cnJlbnRUaW1lO1xuICAgICAgY29uc3QgZW5kVGltZSA9IHRoaXMuX3Zpc2l0U3ViSW5zdHJ1Y3Rpb25zKFxuICAgICAgICAgIGVsZW1lbnRJbnN0cnVjdGlvbnMsIGlubmVyQ29udGV4dCwgaW5uZXJDb250ZXh0Lm9wdGlvbnMgYXMgQW5pbWF0ZUNoaWxkT3B0aW9ucyk7XG4gICAgICBpZiAoc3RhcnRUaW1lICE9IGVuZFRpbWUpIHtcbiAgICAgICAgLy8gd2UgZG8gdGhpcyBvbiB0aGUgdXBwZXIgY29udGV4dCBiZWNhdXNlIHdlIGNyZWF0ZWQgYSBzdWIgY29udGV4dCBmb3JcbiAgICAgICAgLy8gdGhlIHN1YiBjaGlsZCBhbmltYXRpb25zXG4gICAgICAgIGNvbnRleHQudHJhbnNmb3JtSW50b05ld1RpbWVsaW5lKGVuZFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0LnByZXZpb3VzTm9kZSA9IGFzdDtcbiAgfVxuXG4gIHZpc2l0QW5pbWF0ZVJlZihhc3Q6IEFuaW1hdGVSZWZBc3QsIGNvbnRleHQ6IEFuaW1hdGlvblRpbWVsaW5lQ29udGV4dCk6IGFueSB7XG4gICAgY29uc3QgaW5uZXJDb250ZXh0ID0gY29udGV4dC5jcmVhdGVTdWJDb250ZXh0KGFzdC5vcHRpb25zKTtcbiAgICBpbm5lckNvbnRleHQudHJhbnNmb3JtSW50b05ld1RpbWVsaW5lKCk7XG4gICAgdGhpcy52aXNpdFJlZmVyZW5jZShhc3QuYW5pbWF0aW9uLCBpbm5lckNvbnRleHQpO1xuICAgIGNvbnRleHQudHJhbnNmb3JtSW50b05ld1RpbWVsaW5lKGlubmVyQ29udGV4dC5jdXJyZW50VGltZWxpbmUuY3VycmVudFRpbWUpO1xuICAgIGNvbnRleHQucHJldmlvdXNOb2RlID0gYXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRTdWJJbnN0cnVjdGlvbnMoXG4gICAgICBpbnN0cnVjdGlvbnM6IEFuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb25bXSwgY29udGV4dDogQW5pbWF0aW9uVGltZWxpbmVDb250ZXh0LFxuICAgICAgb3B0aW9uczogQW5pbWF0ZUNoaWxkT3B0aW9ucyk6IG51bWJlciB7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gY29udGV4dC5jdXJyZW50VGltZWxpbmUuY3VycmVudFRpbWU7XG4gICAgbGV0IGZ1cnRoZXN0VGltZSA9IHN0YXJ0VGltZTtcblxuICAgIC8vIHRoaXMgaXMgYSBzcGVjaWFsLWNhc2UgZm9yIHdoZW4gYSB1c2VyIHdhbnRzIHRvIHNraXAgYSBzdWJcbiAgICAvLyBhbmltYXRpb24gZnJvbSBiZWluZyBmaXJlZCBlbnRpcmVseS5cbiAgICBjb25zdCBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gIT0gbnVsbCA/IHJlc29sdmVUaW1pbmdWYWx1ZShvcHRpb25zLmR1cmF0aW9uKSA6IG51bGw7XG4gICAgY29uc3QgZGVsYXkgPSBvcHRpb25zLmRlbGF5ICE9IG51bGwgPyByZXNvbHZlVGltaW5nVmFsdWUob3B0aW9ucy5kZWxheSkgOiBudWxsO1xuICAgIGlmIChkdXJhdGlvbiAhPT0gMCkge1xuICAgICAgaW5zdHJ1Y3Rpb25zLmZvckVhY2goaW5zdHJ1Y3Rpb24gPT4ge1xuICAgICAgICBjb25zdCBpbnN0cnVjdGlvblRpbWluZ3MgPVxuICAgICAgICAgICAgY29udGV4dC5hcHBlbmRJbnN0cnVjdGlvblRvVGltZWxpbmUoaW5zdHJ1Y3Rpb24sIGR1cmF0aW9uLCBkZWxheSk7XG4gICAgICAgIGZ1cnRoZXN0VGltZSA9XG4gICAgICAgICAgICBNYXRoLm1heChmdXJ0aGVzdFRpbWUsIGluc3RydWN0aW9uVGltaW5ncy5kdXJhdGlvbiArIGluc3RydWN0aW9uVGltaW5ncy5kZWxheSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVydGhlc3RUaW1lO1xuICB9XG5cbiAgdmlzaXRSZWZlcmVuY2UoYXN0OiBSZWZlcmVuY2VBc3QsIGNvbnRleHQ6IEFuaW1hdGlvblRpbWVsaW5lQ29udGV4dCkge1xuICAgIGNvbnRleHQudXBkYXRlT3B0aW9ucyhhc3Qub3B0aW9ucywgdHJ1ZSk7XG4gICAgdmlzaXREc2xOb2RlKHRoaXMsIGFzdC5hbmltYXRpb24sIGNvbnRleHQpO1xuICAgIGNvbnRleHQucHJldmlvdXNOb2RlID0gYXN0O1xuICB9XG5cbiAgdmlzaXRTZXF1ZW5jZShhc3Q6IFNlcXVlbmNlQXN0LCBjb250ZXh0OiBBbmltYXRpb25UaW1lbGluZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJDb250ZXh0Q291bnQgPSBjb250ZXh0LnN1YkNvbnRleHRDb3VudDtcbiAgICBsZXQgY3R4ID0gY29udGV4dDtcbiAgICBjb25zdCBvcHRpb25zID0gYXN0Lm9wdGlvbnM7XG5cbiAgICBpZiAob3B0aW9ucyAmJiAob3B0aW9ucy5wYXJhbXMgfHwgb3B0aW9ucy5kZWxheSkpIHtcbiAgICAgIGN0eCA9IGNvbnRleHQuY3JlYXRlU3ViQ29udGV4dChvcHRpb25zKTtcbiAgICAgIGN0eC50cmFuc2Zvcm1JbnRvTmV3VGltZWxpbmUoKTtcblxuICAgICAgaWYgKG9wdGlvbnMuZGVsYXkgIT0gbnVsbCkge1xuICAgICAgICBpZiAoY3R4LnByZXZpb3VzTm9kZS50eXBlID09IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5TdHlsZSkge1xuICAgICAgICAgIGN0eC5jdXJyZW50VGltZWxpbmUuc25hcHNob3RDdXJyZW50U3R5bGVzKCk7XG4gICAgICAgICAgY3R4LnByZXZpb3VzTm9kZSA9IERFRkFVTFRfTk9PUF9QUkVWSU9VU19OT0RFO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsYXkgPSByZXNvbHZlVGltaW5nVmFsdWUob3B0aW9ucy5kZWxheSk7XG4gICAgICAgIGN0eC5kZWxheU5leHRTdGVwKGRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXN0LnN0ZXBzLmxlbmd0aCkge1xuICAgICAgYXN0LnN0ZXBzLmZvckVhY2gocyA9PiB2aXNpdERzbE5vZGUodGhpcywgcywgY3R4KSk7XG5cbiAgICAgIC8vIHRoaXMgaXMgaGVyZSBqdXN0IGluY2FzZSB0aGUgaW5uZXIgc3RlcHMgb25seSBjb250YWluIG9yIGVuZCB3aXRoIGEgc3R5bGUoKSBjYWxsXG4gICAgICBjdHguY3VycmVudFRpbWVsaW5lLmFwcGx5U3R5bGVzVG9LZXlmcmFtZSgpO1xuXG4gICAgICAvLyB0aGlzIG1lYW5zIHRoYXQgc29tZSBhbmltYXRpb24gZnVuY3Rpb24gd2l0aGluIHRoZSBzZXF1ZW5jZVxuICAgICAgLy8gZW5kZWQgdXAgY3JlYXRpbmcgYSBzdWIgdGltZWxpbmUgKHdoaWNoIG1lYW5zIHRoZSBjdXJyZW50XG4gICAgICAvLyB0aW1lbGluZSBjYW5ub3Qgb3ZlcmxhcCB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgc2VxdWVuY2UpXG4gICAgICBpZiAoY3R4LnN1YkNvbnRleHRDb3VudCA+IHN1YkNvbnRleHRDb3VudCkge1xuICAgICAgICBjdHgudHJhbnNmb3JtSW50b05ld1RpbWVsaW5lKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5wcmV2aW91c05vZGUgPSBhc3Q7XG4gIH1cblxuICB2aXNpdEdyb3VwKGFzdDogR3JvdXBBc3QsIGNvbnRleHQ6IEFuaW1hdGlvblRpbWVsaW5lQ29udGV4dCkge1xuICAgIGNvbnN0IGlubmVyVGltZWxpbmVzOiBUaW1lbGluZUJ1aWxkZXJbXSA9IFtdO1xuICAgIGxldCBmdXJ0aGVzdFRpbWUgPSBjb250ZXh0LmN1cnJlbnRUaW1lbGluZS5jdXJyZW50VGltZTtcbiAgICBjb25zdCBkZWxheSA9IGFzdC5vcHRpb25zICYmIGFzdC5vcHRpb25zLmRlbGF5ID8gcmVzb2x2ZVRpbWluZ1ZhbHVlKGFzdC5vcHRpb25zLmRlbGF5KSA6IDA7XG5cbiAgICBhc3Quc3RlcHMuZm9yRWFjaChzID0+IHtcbiAgICAgIGNvbnN0IGlubmVyQ29udGV4dCA9IGNvbnRleHQuY3JlYXRlU3ViQ29udGV4dChhc3Qub3B0aW9ucyk7XG4gICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgaW5uZXJDb250ZXh0LmRlbGF5TmV4dFN0ZXAoZGVsYXkpO1xuICAgICAgfVxuXG4gICAgICB2aXNpdERzbE5vZGUodGhpcywgcywgaW5uZXJDb250ZXh0KTtcbiAgICAgIGZ1cnRoZXN0VGltZSA9IE1hdGgubWF4KGZ1cnRoZXN0VGltZSwgaW5uZXJDb250ZXh0LmN1cnJlbnRUaW1lbGluZS5jdXJyZW50VGltZSk7XG4gICAgICBpbm5lclRpbWVsaW5lcy5wdXNoKGlubmVyQ29udGV4dC5jdXJyZW50VGltZWxpbmUpO1xuICAgIH0pO1xuXG4gICAgLy8gdGhpcyBvcGVyYXRpb24gaXMgcnVuIGFmdGVyIHRoZSBBU1QgbG9vcCBiZWNhdXNlIG90aGVyd2lzZVxuICAgIC8vIGlmIHRoZSBwYXJlbnQgdGltZWxpbmUncyBjb2xsZWN0ZWQgc3R5bGVzIHdlcmUgdXBkYXRlZCB0aGVuXG4gICAgLy8gaXQgd291bGQgcGFzcyBpbiBpbnZhbGlkIGRhdGEgaW50byB0aGUgbmV3LXRvLWJlIGZvcmtlZCBpdGVtc1xuICAgIGlubmVyVGltZWxpbmVzLmZvckVhY2goXG4gICAgICAgIHRpbWVsaW5lID0+IGNvbnRleHQuY3VycmVudFRpbWVsaW5lLm1lcmdlVGltZWxpbmVDb2xsZWN0ZWRTdHlsZXModGltZWxpbmUpKTtcbiAgICBjb250ZXh0LnRyYW5zZm9ybUludG9OZXdUaW1lbGluZShmdXJ0aGVzdFRpbWUpO1xuICAgIGNvbnRleHQucHJldmlvdXNOb2RlID0gYXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRUaW1pbmcoYXN0OiBUaW1pbmdBc3QsIGNvbnRleHQ6IEFuaW1hdGlvblRpbWVsaW5lQ29udGV4dCk6IEFuaW1hdGVUaW1pbmdzIHtcbiAgICBpZiAoKGFzdCBhcyBEeW5hbWljVGltaW5nQXN0KS5keW5hbWljKSB7XG4gICAgICBjb25zdCBzdHJWYWx1ZSA9IChhc3QgYXMgRHluYW1pY1RpbWluZ0FzdCkuc3RyVmFsdWU7XG4gICAgICBjb25zdCB0aW1pbmdWYWx1ZSA9XG4gICAgICAgICAgY29udGV4dC5wYXJhbXMgPyBpbnRlcnBvbGF0ZVBhcmFtcyhzdHJWYWx1ZSwgY29udGV4dC5wYXJhbXMsIGNvbnRleHQuZXJyb3JzKSA6IHN0clZhbHVlO1xuICAgICAgcmV0dXJuIHJlc29sdmVUaW1pbmcodGltaW5nVmFsdWUsIGNvbnRleHQuZXJyb3JzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtkdXJhdGlvbjogYXN0LmR1cmF0aW9uLCBkZWxheTogYXN0LmRlbGF5LCBlYXNpbmc6IGFzdC5lYXNpbmd9O1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QW5pbWF0ZShhc3Q6IEFuaW1hdGVBc3QsIGNvbnRleHQ6IEFuaW1hdGlvblRpbWVsaW5lQ29udGV4dCkge1xuICAgIGNvbnN0IHRpbWluZ3MgPSBjb250ZXh0LmN1cnJlbnRBbmltYXRlVGltaW5ncyA9IHRoaXMuX3Zpc2l0VGltaW5nKGFzdC50aW1pbmdzLCBjb250ZXh0KTtcbiAgICBjb25zdCB0aW1lbGluZSA9IGNvbnRleHQuY3VycmVudFRpbWVsaW5lO1xuICAgIGlmICh0aW1pbmdzLmRlbGF5KSB7XG4gICAgICBjb250ZXh0LmluY3JlbWVudFRpbWUodGltaW5ncy5kZWxheSk7XG4gICAgICB0aW1lbGluZS5zbmFwc2hvdEN1cnJlbnRTdHlsZXMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IGFzdC5zdHlsZTtcbiAgICBpZiAoc3R5bGUudHlwZSA9PSBBbmltYXRpb25NZXRhZGF0YVR5cGUuS2V5ZnJhbWVzKSB7XG4gICAgICB0aGlzLnZpc2l0S2V5ZnJhbWVzKHN0eWxlLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5pbmNyZW1lbnRUaW1lKHRpbWluZ3MuZHVyYXRpb24pO1xuICAgICAgdGhpcy52aXNpdFN0eWxlKHN0eWxlIGFzIFN0eWxlQXN0LCBjb250ZXh0KTtcbiAgICAgIHRpbWVsaW5lLmFwcGx5U3R5bGVzVG9LZXlmcmFtZSgpO1xuICAgIH1cblxuICAgIGNvbnRleHQuY3VycmVudEFuaW1hdGVUaW1pbmdzID0gbnVsbDtcbiAgICBjb250ZXh0LnByZXZpb3VzTm9kZSA9IGFzdDtcbiAgfVxuXG4gIHZpc2l0U3R5bGUoYXN0OiBTdHlsZUFzdCwgY29udGV4dDogQW5pbWF0aW9uVGltZWxpbmVDb250ZXh0KSB7XG4gICAgY29uc3QgdGltZWxpbmUgPSBjb250ZXh0LmN1cnJlbnRUaW1lbGluZTtcbiAgICBjb25zdCB0aW1pbmdzID0gY29udGV4dC5jdXJyZW50QW5pbWF0ZVRpbWluZ3MhO1xuXG4gICAgLy8gdGhpcyBpcyBhIHNwZWNpYWwgY2FzZSBmb3Igd2hlbiBhIHN0eWxlKCkgY2FsbFxuICAgIC8vIGRpcmVjdGx5IGZvbGxvd3MgIGFuIGFuaW1hdGUoKSBjYWxsIChidXQgbm90IGluc2lkZSBvZiBhbiBhbmltYXRlKCkgY2FsbClcbiAgICBpZiAoIXRpbWluZ3MgJiYgdGltZWxpbmUuZ2V0Q3VycmVudFN0eWxlUHJvcGVydGllcygpLmxlbmd0aCkge1xuICAgICAgdGltZWxpbmUuZm9yd2FyZEZyYW1lKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZWFzaW5nID0gKHRpbWluZ3MgJiYgdGltaW5ncy5lYXNpbmcpIHx8IGFzdC5lYXNpbmc7XG4gICAgaWYgKGFzdC5pc0VtcHR5U3RlcCkge1xuICAgICAgdGltZWxpbmUuYXBwbHlFbXB0eVN0ZXAoZWFzaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZWxpbmUuc2V0U3R5bGVzKGFzdC5zdHlsZXMsIGVhc2luZywgY29udGV4dC5lcnJvcnMsIGNvbnRleHQub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY29udGV4dC5wcmV2aW91c05vZGUgPSBhc3Q7XG4gIH1cblxuICB2aXNpdEtleWZyYW1lcyhhc3Q6IEtleWZyYW1lc0FzdCwgY29udGV4dDogQW5pbWF0aW9uVGltZWxpbmVDb250ZXh0KSB7XG4gICAgY29uc3QgY3VycmVudEFuaW1hdGVUaW1pbmdzID0gY29udGV4dC5jdXJyZW50QW5pbWF0ZVRpbWluZ3MhO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IChjb250ZXh0LmN1cnJlbnRUaW1lbGluZSEpLmR1cmF0aW9uO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gY3VycmVudEFuaW1hdGVUaW1pbmdzLmR1cmF0aW9uO1xuICAgIGNvbnN0IGlubmVyQ29udGV4dCA9IGNvbnRleHQuY3JlYXRlU3ViQ29udGV4dCgpO1xuICAgIGNvbnN0IGlubmVyVGltZWxpbmUgPSBpbm5lckNvbnRleHQuY3VycmVudFRpbWVsaW5lO1xuICAgIGlubmVyVGltZWxpbmUuZWFzaW5nID0gY3VycmVudEFuaW1hdGVUaW1pbmdzLmVhc2luZztcblxuICAgIGFzdC5zdHlsZXMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldDogbnVtYmVyID0gc3RlcC5vZmZzZXQgfHwgMDtcbiAgICAgIGlubmVyVGltZWxpbmUuZm9yd2FyZFRpbWUob2Zmc2V0ICogZHVyYXRpb24pO1xuICAgICAgaW5uZXJUaW1lbGluZS5zZXRTdHlsZXMoc3RlcC5zdHlsZXMsIHN0ZXAuZWFzaW5nLCBjb250ZXh0LmVycm9ycywgY29udGV4dC5vcHRpb25zKTtcbiAgICAgIGlubmVyVGltZWxpbmUuYXBwbHlTdHlsZXNUb0tleWZyYW1lKCk7XG4gICAgfSk7XG5cbiAgICAvLyB0aGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIHBhcmVudCB0aW1lbGluZSBnZXRzIGFsbCB0aGUgc3R5bGVzIGZyb21cbiAgICAvLyB0aGUgY2hpbGQgZXZlbiBpZiB0aGUgbmV3IHRpbWVsaW5lIGJlbG93IGlzIG5vdCB1c2VkXG4gICAgY29udGV4dC5jdXJyZW50VGltZWxpbmUubWVyZ2VUaW1lbGluZUNvbGxlY3RlZFN0eWxlcyhpbm5lclRpbWVsaW5lKTtcblxuICAgIC8vIHdlIGRvIHRoaXMgYmVjYXVzZSB0aGUgd2luZG93IGJldHdlZW4gdGhpcyB0aW1lbGluZSBhbmQgdGhlIHN1YiB0aW1lbGluZVxuICAgIC8vIHNob3VsZCBlbnN1cmUgdGhhdCB0aGUgc3R5bGVzIHdpdGhpbiBhcmUgZXhhY3RseSB0aGUgc2FtZSBhcyB0aGV5IHdlcmUgYmVmb3JlXG4gICAgY29udGV4dC50cmFuc2Zvcm1JbnRvTmV3VGltZWxpbmUoc3RhcnRUaW1lICsgZHVyYXRpb24pO1xuICAgIGNvbnRleHQucHJldmlvdXNOb2RlID0gYXN0O1xuICB9XG5cbiAgdmlzaXRRdWVyeShhc3Q6IFF1ZXJ5QXN0LCBjb250ZXh0OiBBbmltYXRpb25UaW1lbGluZUNvbnRleHQpIHtcbiAgICAvLyBpbiB0aGUgZXZlbnQgdGhhdCB0aGUgZmlyc3Qgc3RlcCBiZWZvcmUgdGhpcyBpcyBhIHN0eWxlIHN0ZXAgd2UgbmVlZFxuICAgIC8vIHRvIGVuc3VyZSB0aGUgc3R5bGVzIGFyZSBhcHBsaWVkIGJlZm9yZSB0aGUgY2hpbGRyZW4gYXJlIGFuaW1hdGVkXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gY29udGV4dC5jdXJyZW50VGltZWxpbmUuY3VycmVudFRpbWU7XG4gICAgY29uc3Qgb3B0aW9ucyA9IChhc3Qub3B0aW9ucyB8fCB7fSkgYXMgQW5pbWF0aW9uUXVlcnlPcHRpb25zO1xuICAgIGNvbnN0IGRlbGF5ID0gb3B0aW9ucy5kZWxheSA/IHJlc29sdmVUaW1pbmdWYWx1ZShvcHRpb25zLmRlbGF5KSA6IDA7XG5cbiAgICBpZiAoZGVsYXkgJiZcbiAgICAgICAgKGNvbnRleHQucHJldmlvdXNOb2RlLnR5cGUgPT09IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5TdHlsZSB8fFxuICAgICAgICAgKHN0YXJ0VGltZSA9PSAwICYmIGNvbnRleHQuY3VycmVudFRpbWVsaW5lLmdldEN1cnJlbnRTdHlsZVByb3BlcnRpZXMoKS5sZW5ndGgpKSkge1xuICAgICAgY29udGV4dC5jdXJyZW50VGltZWxpbmUuc25hcHNob3RDdXJyZW50U3R5bGVzKCk7XG4gICAgICBjb250ZXh0LnByZXZpb3VzTm9kZSA9IERFRkFVTFRfTk9PUF9QUkVWSU9VU19OT0RFO1xuICAgIH1cblxuICAgIGxldCBmdXJ0aGVzdFRpbWUgPSBzdGFydFRpbWU7XG4gICAgY29uc3QgZWxtcyA9IGNvbnRleHQuaW52b2tlUXVlcnkoXG4gICAgICAgIGFzdC5zZWxlY3RvciwgYXN0Lm9yaWdpbmFsU2VsZWN0b3IsIGFzdC5saW1pdCwgYXN0LmluY2x1ZGVTZWxmLFxuICAgICAgICBvcHRpb25zLm9wdGlvbmFsID8gdHJ1ZSA6IGZhbHNlLCBjb250ZXh0LmVycm9ycyk7XG5cbiAgICBjb250ZXh0LmN1cnJlbnRRdWVyeVRvdGFsID0gZWxtcy5sZW5ndGg7XG4gICAgbGV0IHNhbWVFbGVtZW50VGltZWxpbmU6IFRpbWVsaW5lQnVpbGRlcnxudWxsID0gbnVsbDtcbiAgICBlbG1zLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnRleHQuY3VycmVudFF1ZXJ5SW5kZXggPSBpO1xuICAgICAgY29uc3QgaW5uZXJDb250ZXh0ID0gY29udGV4dC5jcmVhdGVTdWJDb250ZXh0KGFzdC5vcHRpb25zLCBlbGVtZW50KTtcbiAgICAgIGlmIChkZWxheSkge1xuICAgICAgICBpbm5lckNvbnRleHQuZGVsYXlOZXh0U3RlcChkZWxheSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50ID09PSBjb250ZXh0LmVsZW1lbnQpIHtcbiAgICAgICAgc2FtZUVsZW1lbnRUaW1lbGluZSA9IGlubmVyQ29udGV4dC5jdXJyZW50VGltZWxpbmU7XG4gICAgICB9XG5cbiAgICAgIHZpc2l0RHNsTm9kZSh0aGlzLCBhc3QuYW5pbWF0aW9uLCBpbm5lckNvbnRleHQpO1xuXG4gICAgICAvLyB0aGlzIGlzIGhlcmUganVzdCBpbmNhc2UgdGhlIGlubmVyIHN0ZXBzIG9ubHkgY29udGFpbiBvciBlbmRcbiAgICAgIC8vIHdpdGggYSBzdHlsZSgpIGNhbGwgKHdoaWNoIGlzIGhlcmUgdG8gc2lnbmFsIHRoYXQgdGhpcyBpcyBhIHByZXBhcmF0b3J5XG4gICAgICAvLyBjYWxsIHRvIHN0eWxlIGFuIGVsZW1lbnQgYmVmb3JlIGl0IGlzIGFuaW1hdGVkIGFnYWluKVxuICAgICAgaW5uZXJDb250ZXh0LmN1cnJlbnRUaW1lbGluZS5hcHBseVN0eWxlc1RvS2V5ZnJhbWUoKTtcblxuICAgICAgY29uc3QgZW5kVGltZSA9IGlubmVyQ29udGV4dC5jdXJyZW50VGltZWxpbmUuY3VycmVudFRpbWU7XG4gICAgICBmdXJ0aGVzdFRpbWUgPSBNYXRoLm1heChmdXJ0aGVzdFRpbWUsIGVuZFRpbWUpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5jdXJyZW50UXVlcnlJbmRleCA9IDA7XG4gICAgY29udGV4dC5jdXJyZW50UXVlcnlUb3RhbCA9IDA7XG4gICAgY29udGV4dC50cmFuc2Zvcm1JbnRvTmV3VGltZWxpbmUoZnVydGhlc3RUaW1lKTtcblxuICAgIGlmIChzYW1lRWxlbWVudFRpbWVsaW5lKSB7XG4gICAgICBjb250ZXh0LmN1cnJlbnRUaW1lbGluZS5tZXJnZVRpbWVsaW5lQ29sbGVjdGVkU3R5bGVzKHNhbWVFbGVtZW50VGltZWxpbmUpO1xuICAgICAgY29udGV4dC5jdXJyZW50VGltZWxpbmUuc25hcHNob3RDdXJyZW50U3R5bGVzKCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5wcmV2aW91c05vZGUgPSBhc3Q7XG4gIH1cblxuICB2aXNpdFN0YWdnZXIoYXN0OiBTdGFnZ2VyQXN0LCBjb250ZXh0OiBBbmltYXRpb25UaW1lbGluZUNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dC5wYXJlbnRDb250ZXh0ITtcbiAgICBjb25zdCB0bCA9IGNvbnRleHQuY3VycmVudFRpbWVsaW5lO1xuICAgIGNvbnN0IHRpbWluZ3MgPSBhc3QudGltaW5ncztcbiAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGguYWJzKHRpbWluZ3MuZHVyYXRpb24pO1xuICAgIGNvbnN0IG1heFRpbWUgPSBkdXJhdGlvbiAqIChjb250ZXh0LmN1cnJlbnRRdWVyeVRvdGFsIC0gMSk7XG4gICAgbGV0IGRlbGF5ID0gZHVyYXRpb24gKiBjb250ZXh0LmN1cnJlbnRRdWVyeUluZGV4O1xuXG4gICAgbGV0IHN0YWdnZXJUcmFuc2Zvcm1lciA9IHRpbWluZ3MuZHVyYXRpb24gPCAwID8gJ3JldmVyc2UnIDogdGltaW5ncy5lYXNpbmc7XG4gICAgc3dpdGNoIChzdGFnZ2VyVHJhbnNmb3JtZXIpIHtcbiAgICAgIGNhc2UgJ3JldmVyc2UnOlxuICAgICAgICBkZWxheSA9IG1heFRpbWUgLSBkZWxheTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgZGVsYXkgPSBwYXJlbnRDb250ZXh0LmN1cnJlbnRTdGFnZ2VyVGltZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgdGltZWxpbmUgPSBjb250ZXh0LmN1cnJlbnRUaW1lbGluZTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHRpbWVsaW5lLmRlbGF5TmV4dFN0ZXAoZGVsYXkpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0aW5nVGltZSA9IHRpbWVsaW5lLmN1cnJlbnRUaW1lO1xuICAgIHZpc2l0RHNsTm9kZSh0aGlzLCBhc3QuYW5pbWF0aW9uLCBjb250ZXh0KTtcbiAgICBjb250ZXh0LnByZXZpb3VzTm9kZSA9IGFzdDtcblxuICAgIC8vIHRpbWUgPSBkdXJhdGlvbiArIGRlbGF5XG4gICAgLy8gdGhlIHJlYXNvbiB3aHkgdGhpcyBjb21wdXRhdGlvbiBpcyBzbyBjb21wbGV4IGlzIGJlY2F1c2VcbiAgICAvLyB0aGUgaW5uZXIgdGltZWxpbmUgbWF5IGVpdGhlciBoYXZlIGEgZGVsYXkgdmFsdWUgb3IgYSBzdHJldGNoZWRcbiAgICAvLyBrZXlmcmFtZSBkZXBlbmRpbmcgb24gaWYgYSBzdWJ0aW1lbGluZSBpcyBub3QgdXNlZCBvciBpcyB1c2VkLlxuICAgIHBhcmVudENvbnRleHQuY3VycmVudFN0YWdnZXJUaW1lID1cbiAgICAgICAgKHRsLmN1cnJlbnRUaW1lIC0gc3RhcnRpbmdUaW1lKSArICh0bC5zdGFydFRpbWUgLSBwYXJlbnRDb250ZXh0LmN1cnJlbnRUaW1lbGluZS5zdGFydFRpbWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3R5bGVBdFRpbWUgPSB7XG4gIHRpbWU6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbn07XG5cbmNvbnN0IERFRkFVTFRfTk9PUF9QUkVWSU9VU19OT0RFID0gPEFzdDxBbmltYXRpb25NZXRhZGF0YVR5cGU+Pnt9O1xuZXhwb3J0IGNsYXNzIEFuaW1hdGlvblRpbWVsaW5lQ29udGV4dCB7XG4gIHB1YmxpYyBwYXJlbnRDb250ZXh0OiBBbmltYXRpb25UaW1lbGluZUNvbnRleHR8bnVsbCA9IG51bGw7XG4gIHB1YmxpYyBjdXJyZW50VGltZWxpbmU6IFRpbWVsaW5lQnVpbGRlcjtcbiAgcHVibGljIGN1cnJlbnRBbmltYXRlVGltaW5nczogQW5pbWF0ZVRpbWluZ3N8bnVsbCA9IG51bGw7XG4gIHB1YmxpYyBwcmV2aW91c05vZGU6IEFzdDxBbmltYXRpb25NZXRhZGF0YVR5cGU+ID0gREVGQVVMVF9OT09QX1BSRVZJT1VTX05PREU7XG4gIHB1YmxpYyBzdWJDb250ZXh0Q291bnQgPSAwO1xuICBwdWJsaWMgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9ucyA9IHt9O1xuICBwdWJsaWMgY3VycmVudFF1ZXJ5SW5kZXg6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBjdXJyZW50UXVlcnlUb3RhbDogbnVtYmVyID0gMDtcbiAgcHVibGljIGN1cnJlbnRTdGFnZ2VyVGltZTogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2RyaXZlcjogQW5pbWF0aW9uRHJpdmVyLCBwdWJsaWMgZWxlbWVudDogYW55LFxuICAgICAgcHVibGljIHN1Ykluc3RydWN0aW9uczogRWxlbWVudEluc3RydWN0aW9uTWFwLCBwcml2YXRlIF9lbnRlckNsYXNzTmFtZTogc3RyaW5nLFxuICAgICAgcHJpdmF0ZSBfbGVhdmVDbGFzc05hbWU6IHN0cmluZywgcHVibGljIGVycm9yczogYW55W10sIHB1YmxpYyB0aW1lbGluZXM6IFRpbWVsaW5lQnVpbGRlcltdLFxuICAgICAgaW5pdGlhbFRpbWVsaW5lPzogVGltZWxpbmVCdWlsZGVyKSB7XG4gICAgdGhpcy5jdXJyZW50VGltZWxpbmUgPSBpbml0aWFsVGltZWxpbmUgfHwgbmV3IFRpbWVsaW5lQnVpbGRlcih0aGlzLl9kcml2ZXIsIGVsZW1lbnQsIDApO1xuICAgIHRpbWVsaW5lcy5wdXNoKHRoaXMuY3VycmVudFRpbWVsaW5lKTtcbiAgfVxuXG4gIGdldCBwYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wYXJhbXM7XG4gIH1cblxuICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnN8bnVsbCwgc2tpcElmRXhpc3RzPzogYm9vbGVhbikge1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuO1xuXG4gICAgY29uc3QgbmV3T3B0aW9ucyA9IG9wdGlvbnMgYXMgYW55O1xuICAgIGxldCBvcHRpb25zVG9VcGRhdGUgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAvLyBOT1RFOiB0aGlzIHdpbGwgZ2V0IHBhdGNoZWQgdXAgd2hlbiBvdGhlciBhbmltYXRpb24gbWV0aG9kcyBzdXBwb3J0IGR1cmF0aW9uIG92ZXJyaWRlc1xuICAgIGlmIChuZXdPcHRpb25zLmR1cmF0aW9uICE9IG51bGwpIHtcbiAgICAgIChvcHRpb25zVG9VcGRhdGUgYXMgYW55KS5kdXJhdGlvbiA9IHJlc29sdmVUaW1pbmdWYWx1ZShuZXdPcHRpb25zLmR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAobmV3T3B0aW9ucy5kZWxheSAhPSBudWxsKSB7XG4gICAgICBvcHRpb25zVG9VcGRhdGUuZGVsYXkgPSByZXNvbHZlVGltaW5nVmFsdWUobmV3T3B0aW9ucy5kZWxheSk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UGFyYW1zID0gbmV3T3B0aW9ucy5wYXJhbXM7XG4gICAgaWYgKG5ld1BhcmFtcykge1xuICAgICAgbGV0IHBhcmFtc1RvVXBkYXRlOiB7W25hbWU6IHN0cmluZ106IGFueX0gPSBvcHRpb25zVG9VcGRhdGUucGFyYW1zITtcbiAgICAgIGlmICghcGFyYW1zVG9VcGRhdGUpIHtcbiAgICAgICAgcGFyYW1zVG9VcGRhdGUgPSB0aGlzLm9wdGlvbnMucGFyYW1zID0ge307XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG5ld1BhcmFtcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKCFza2lwSWZFeGlzdHMgfHwgIXBhcmFtc1RvVXBkYXRlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgcGFyYW1zVG9VcGRhdGVbbmFtZV0gPSBpbnRlcnBvbGF0ZVBhcmFtcyhuZXdQYXJhbXNbbmFtZV0sIHBhcmFtc1RvVXBkYXRlLCB0aGlzLmVycm9ycyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvcHlPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnMgPSB7fTtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICBjb25zdCBvbGRQYXJhbXMgPSB0aGlzLm9wdGlvbnMucGFyYW1zO1xuICAgICAgaWYgKG9sZFBhcmFtcykge1xuICAgICAgICBjb25zdCBwYXJhbXM6IHtbbmFtZTogc3RyaW5nXTogYW55fSA9IG9wdGlvbnNbJ3BhcmFtcyddID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKG9sZFBhcmFtcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICBwYXJhbXNbbmFtZV0gPSBvbGRQYXJhbXNbbmFtZV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGNyZWF0ZVN1YkNvbnRleHQob3B0aW9uczogQW5pbWF0aW9uT3B0aW9uc3xudWxsID0gbnVsbCwgZWxlbWVudD86IGFueSwgbmV3VGltZT86IG51bWJlcik6XG4gICAgICBBbmltYXRpb25UaW1lbGluZUNvbnRleHQge1xuICAgIGNvbnN0IHRhcmdldCA9IGVsZW1lbnQgfHwgdGhpcy5lbGVtZW50O1xuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQW5pbWF0aW9uVGltZWxpbmVDb250ZXh0KFxuICAgICAgICB0aGlzLl9kcml2ZXIsIHRhcmdldCwgdGhpcy5zdWJJbnN0cnVjdGlvbnMsIHRoaXMuX2VudGVyQ2xhc3NOYW1lLCB0aGlzLl9sZWF2ZUNsYXNzTmFtZSxcbiAgICAgICAgdGhpcy5lcnJvcnMsIHRoaXMudGltZWxpbmVzLCB0aGlzLmN1cnJlbnRUaW1lbGluZS5mb3JrKHRhcmdldCwgbmV3VGltZSB8fCAwKSk7XG4gICAgY29udGV4dC5wcmV2aW91c05vZGUgPSB0aGlzLnByZXZpb3VzTm9kZTtcbiAgICBjb250ZXh0LmN1cnJlbnRBbmltYXRlVGltaW5ncyA9IHRoaXMuY3VycmVudEFuaW1hdGVUaW1pbmdzO1xuXG4gICAgY29udGV4dC5vcHRpb25zID0gdGhpcy5fY29weU9wdGlvbnMoKTtcbiAgICBjb250ZXh0LnVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBjb250ZXh0LmN1cnJlbnRRdWVyeUluZGV4ID0gdGhpcy5jdXJyZW50UXVlcnlJbmRleDtcbiAgICBjb250ZXh0LmN1cnJlbnRRdWVyeVRvdGFsID0gdGhpcy5jdXJyZW50UXVlcnlUb3RhbDtcbiAgICBjb250ZXh0LnBhcmVudENvbnRleHQgPSB0aGlzO1xuICAgIHRoaXMuc3ViQ29udGV4dENvdW50Kys7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICB0cmFuc2Zvcm1JbnRvTmV3VGltZWxpbmUobmV3VGltZT86IG51bWJlcikge1xuICAgIHRoaXMucHJldmlvdXNOb2RlID0gREVGQVVMVF9OT09QX1BSRVZJT1VTX05PREU7XG4gICAgdGhpcy5jdXJyZW50VGltZWxpbmUgPSB0aGlzLmN1cnJlbnRUaW1lbGluZS5mb3JrKHRoaXMuZWxlbWVudCwgbmV3VGltZSk7XG4gICAgdGhpcy50aW1lbGluZXMucHVzaCh0aGlzLmN1cnJlbnRUaW1lbGluZSk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWVsaW5lO1xuICB9XG5cbiAgYXBwZW5kSW5zdHJ1Y3Rpb25Ub1RpbWVsaW5lKFxuICAgICAgaW5zdHJ1Y3Rpb246IEFuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb24sIGR1cmF0aW9uOiBudW1iZXJ8bnVsbCxcbiAgICAgIGRlbGF5OiBudW1iZXJ8bnVsbCk6IEFuaW1hdGVUaW1pbmdzIHtcbiAgICBjb25zdCB1cGRhdGVkVGltaW5nczogQW5pbWF0ZVRpbWluZ3MgPSB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gIT0gbnVsbCA/IGR1cmF0aW9uIDogaW5zdHJ1Y3Rpb24uZHVyYXRpb24sXG4gICAgICBkZWxheTogdGhpcy5jdXJyZW50VGltZWxpbmUuY3VycmVudFRpbWUgKyAoZGVsYXkgIT0gbnVsbCA/IGRlbGF5IDogMCkgKyBpbnN0cnVjdGlvbi5kZWxheSxcbiAgICAgIGVhc2luZzogJydcbiAgICB9O1xuICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgU3ViVGltZWxpbmVCdWlsZGVyKFxuICAgICAgICB0aGlzLl9kcml2ZXIsIGluc3RydWN0aW9uLmVsZW1lbnQsIGluc3RydWN0aW9uLmtleWZyYW1lcywgaW5zdHJ1Y3Rpb24ucHJlU3R5bGVQcm9wcyxcbiAgICAgICAgaW5zdHJ1Y3Rpb24ucG9zdFN0eWxlUHJvcHMsIHVwZGF0ZWRUaW1pbmdzLCBpbnN0cnVjdGlvbi5zdHJldGNoU3RhcnRpbmdLZXlmcmFtZSk7XG4gICAgdGhpcy50aW1lbGluZXMucHVzaChidWlsZGVyKTtcbiAgICByZXR1cm4gdXBkYXRlZFRpbWluZ3M7XG4gIH1cblxuICBpbmNyZW1lbnRUaW1lKHRpbWU6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudFRpbWVsaW5lLmZvcndhcmRUaW1lKHRoaXMuY3VycmVudFRpbWVsaW5lLmR1cmF0aW9uICsgdGltZSk7XG4gIH1cblxuICBkZWxheU5leHRTdGVwKGRlbGF5OiBudW1iZXIpIHtcbiAgICAvLyBuZWdhdGl2ZSBkZWxheXMgYXJlIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgdGhpcy5jdXJyZW50VGltZWxpbmUuZGVsYXlOZXh0U3RlcChkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgaW52b2tlUXVlcnkoXG4gICAgICBzZWxlY3Rvcjogc3RyaW5nLCBvcmlnaW5hbFNlbGVjdG9yOiBzdHJpbmcsIGxpbWl0OiBudW1iZXIsIGluY2x1ZGVTZWxmOiBib29sZWFuLFxuICAgICAgb3B0aW9uYWw6IGJvb2xlYW4sIGVycm9yczogYW55W10pOiBhbnlbXSB7XG4gICAgbGV0IHJlc3VsdHM6IGFueVtdID0gW107XG4gICAgaWYgKGluY2x1ZGVTZWxmKSB7XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdG9yLmxlbmd0aCA+IDApIHsgIC8vIGlmIDpzZWxmIGlzIG9ubHkgdXNlZCB0aGVuIHRoZSBzZWxlY3RvciBpcyBlbXB0eVxuICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKEVOVEVSX1RPS0VOX1JFR0VYLCAnLicgKyB0aGlzLl9lbnRlckNsYXNzTmFtZSk7XG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoTEVBVkVfVE9LRU5fUkVHRVgsICcuJyArIHRoaXMuX2xlYXZlQ2xhc3NOYW1lKTtcbiAgICAgIGNvbnN0IG11bHRpID0gbGltaXQgIT0gMTtcbiAgICAgIGxldCBlbGVtZW50cyA9IHRoaXMuX2RyaXZlci5xdWVyeSh0aGlzLmVsZW1lbnQsIHNlbGVjdG9yLCBtdWx0aSk7XG4gICAgICBpZiAobGltaXQgIT09IDApIHtcbiAgICAgICAgZWxlbWVudHMgPSBsaW1pdCA8IDAgPyBlbGVtZW50cy5zbGljZShlbGVtZW50cy5sZW5ndGggKyBsaW1pdCwgZWxlbWVudHMubGVuZ3RoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuc2xpY2UoMCwgbGltaXQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0cy5wdXNoKC4uLmVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbmFsICYmIHJlc3VsdHMubGVuZ3RoID09IDApIHtcbiAgICAgIGVycm9ycy5wdXNoKGBcXGBxdWVyeShcIiR7b3JpZ2luYWxTZWxlY3Rvcn1cIilcXGAgcmV0dXJuZWQgemVybyBlbGVtZW50cy4gKFVzZSBcXGBxdWVyeShcIiR7XG4gICAgICAgICAgb3JpZ2luYWxTZWxlY3Rvcn1cIiwgeyBvcHRpb25hbDogdHJ1ZSB9KVxcYCBpZiB5b3Ugd2lzaCB0byBhbGxvdyB0aGlzLilgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVGltZWxpbmVCdWlsZGVyIHtcbiAgcHVibGljIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHVibGljIGVhc2luZyE6IHN0cmluZ3xudWxsO1xuICBwcml2YXRlIF9wcmV2aW91c0tleWZyYW1lOiDJtVN0eWxlRGF0YSA9IHt9O1xuICBwcml2YXRlIF9jdXJyZW50S2V5ZnJhbWU6IMm1U3R5bGVEYXRhID0ge307XG4gIHByaXZhdGUgX2tleWZyYW1lcyA9IG5ldyBNYXA8bnVtYmVyLCDJtVN0eWxlRGF0YT4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVTdW1tYXJ5OiB7W3Byb3A6IHN0cmluZ106IFN0eWxlQXRUaW1lfSA9IHt9O1xuICBwcml2YXRlIF9sb2NhbFRpbWVsaW5lU3R5bGVzOiDJtVN0eWxlRGF0YTtcbiAgcHJpdmF0ZSBfZ2xvYmFsVGltZWxpbmVTdHlsZXM6IMm1U3R5bGVEYXRhO1xuICBwcml2YXRlIF9wZW5kaW5nU3R5bGVzOiDJtVN0eWxlRGF0YSA9IHt9O1xuICBwcml2YXRlIF9iYWNrRmlsbDogybVTdHlsZURhdGEgPSB7fTtcbiAgcHJpdmF0ZSBfY3VycmVudEVtcHR5U3RlcEtleWZyYW1lOiDJtVN0eWxlRGF0YXxudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2RyaXZlcjogQW5pbWF0aW9uRHJpdmVyLCBwdWJsaWMgZWxlbWVudDogYW55LCBwdWJsaWMgc3RhcnRUaW1lOiBudW1iZXIsXG4gICAgICBwcml2YXRlIF9lbGVtZW50VGltZWxpbmVTdHlsZXNMb29rdXA/OiBNYXA8YW55LCDJtVN0eWxlRGF0YT4pIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnRUaW1lbGluZVN0eWxlc0xvb2t1cCkge1xuICAgICAgdGhpcy5fZWxlbWVudFRpbWVsaW5lU3R5bGVzTG9va3VwID0gbmV3IE1hcDxhbnksIMm1U3R5bGVEYXRhPigpO1xuICAgIH1cblxuICAgIHRoaXMuX2xvY2FsVGltZWxpbmVTdHlsZXMgPSBPYmplY3QuY3JlYXRlKHRoaXMuX2JhY2tGaWxsLCB7fSk7XG4gICAgdGhpcy5fZ2xvYmFsVGltZWxpbmVTdHlsZXMgPSB0aGlzLl9lbGVtZW50VGltZWxpbmVTdHlsZXNMb29rdXAuZ2V0KGVsZW1lbnQpITtcbiAgICBpZiAoIXRoaXMuX2dsb2JhbFRpbWVsaW5lU3R5bGVzKSB7XG4gICAgICB0aGlzLl9nbG9iYWxUaW1lbGluZVN0eWxlcyA9IHRoaXMuX2xvY2FsVGltZWxpbmVTdHlsZXM7XG4gICAgICB0aGlzLl9lbGVtZW50VGltZWxpbmVTdHlsZXNMb29rdXAuc2V0KGVsZW1lbnQsIHRoaXMuX2xvY2FsVGltZWxpbmVTdHlsZXMpO1xuICAgIH1cbiAgICB0aGlzLl9sb2FkS2V5ZnJhbWUoKTtcbiAgfVxuXG4gIGNvbnRhaW5zQW5pbWF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHN3aXRjaCAodGhpcy5fa2V5ZnJhbWVzLnNpemUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50U3R5bGVQcm9wZXJ0aWVzKCkubGVuZ3RoID4gMDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRTdHlsZVByb3BlcnRpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9jdXJyZW50S2V5ZnJhbWUpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0VGltZSArIHRoaXMuZHVyYXRpb247XG4gIH1cblxuICBkZWxheU5leHRTdGVwKGRlbGF5OiBudW1iZXIpIHtcbiAgICAvLyBpbiB0aGUgZXZlbnQgdGhhdCBhIHN0eWxlKCkgc3RlcCBpcyBwbGFjZWQgcmlnaHQgYmVmb3JlIGEgc3RhZ2dlcigpXG4gICAgLy8gYW5kIHRoYXQgc3R5bGUoKSBzdGVwIGlzIHRoZSB2ZXJ5IGZpcnN0IHN0eWxlKCkgdmFsdWUgaW4gdGhlIGFuaW1hdGlvblxuICAgIC8vIHRoZW4gd2UgbmVlZCB0byBtYWtlIGEgY29weSBvZiB0aGUga2V5ZnJhbWUgWzAsIGNvcHksIDFdIHNvIHRoYXQgdGhlIGRlbGF5XG4gICAgLy8gcHJvcGVybHkgYXBwbGllcyB0aGUgc3R5bGUoKSB2YWx1ZXMgdG8gd29yayB3aXRoIHRoZSBzdGFnZ2VyLi4uXG4gICAgY29uc3QgaGFzUHJlU3R5bGVTdGVwID0gdGhpcy5fa2V5ZnJhbWVzLnNpemUgPT0gMSAmJiBPYmplY3Qua2V5cyh0aGlzLl9wZW5kaW5nU3R5bGVzKS5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5kdXJhdGlvbiB8fCBoYXNQcmVTdHlsZVN0ZXApIHtcbiAgICAgIHRoaXMuZm9yd2FyZFRpbWUodGhpcy5jdXJyZW50VGltZSArIGRlbGF5KTtcbiAgICAgIGlmIChoYXNQcmVTdHlsZVN0ZXApIHtcbiAgICAgICAgdGhpcy5zbmFwc2hvdEN1cnJlbnRTdHlsZXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGFydFRpbWUgKz0gZGVsYXk7XG4gICAgfVxuICB9XG5cbiAgZm9yayhlbGVtZW50OiBhbnksIGN1cnJlbnRUaW1lPzogbnVtYmVyKTogVGltZWxpbmVCdWlsZGVyIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzVG9LZXlmcmFtZSgpO1xuICAgIHJldHVybiBuZXcgVGltZWxpbmVCdWlsZGVyKFxuICAgICAgICB0aGlzLl9kcml2ZXIsIGVsZW1lbnQsIGN1cnJlbnRUaW1lIHx8IHRoaXMuY3VycmVudFRpbWUsIHRoaXMuX2VsZW1lbnRUaW1lbGluZVN0eWxlc0xvb2t1cCk7XG4gIH1cblxuICBwcml2YXRlIF9sb2FkS2V5ZnJhbWUoKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRLZXlmcmFtZSkge1xuICAgICAgdGhpcy5fcHJldmlvdXNLZXlmcmFtZSA9IHRoaXMuX2N1cnJlbnRLZXlmcmFtZTtcbiAgICB9XG4gICAgdGhpcy5fY3VycmVudEtleWZyYW1lID0gdGhpcy5fa2V5ZnJhbWVzLmdldCh0aGlzLmR1cmF0aW9uKSE7XG4gICAgaWYgKCF0aGlzLl9jdXJyZW50S2V5ZnJhbWUpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRLZXlmcmFtZSA9IE9iamVjdC5jcmVhdGUodGhpcy5fYmFja0ZpbGwsIHt9KTtcbiAgICAgIHRoaXMuX2tleWZyYW1lcy5zZXQodGhpcy5kdXJhdGlvbiwgdGhpcy5fY3VycmVudEtleWZyYW1lKTtcbiAgICB9XG4gIH1cblxuICBmb3J3YXJkRnJhbWUoKSB7XG4gICAgdGhpcy5kdXJhdGlvbiArPSBPTkVfRlJBTUVfSU5fTUlMTElTRUNPTkRTO1xuICAgIHRoaXMuX2xvYWRLZXlmcmFtZSgpO1xuICB9XG5cbiAgZm9yd2FyZFRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgdGhpcy5hcHBseVN0eWxlc1RvS2V5ZnJhbWUoKTtcbiAgICB0aGlzLmR1cmF0aW9uID0gdGltZTtcbiAgICB0aGlzLl9sb2FkS2V5ZnJhbWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlKHByb3A6IHN0cmluZywgdmFsdWU6IHN0cmluZ3xudW1iZXIpIHtcbiAgICB0aGlzLl9sb2NhbFRpbWVsaW5lU3R5bGVzW3Byb3BdID0gdmFsdWU7XG4gICAgdGhpcy5fZ2xvYmFsVGltZWxpbmVTdHlsZXNbcHJvcF0gPSB2YWx1ZTtcbiAgICB0aGlzLl9zdHlsZVN1bW1hcnlbcHJvcF0gPSB7dGltZTogdGhpcy5jdXJyZW50VGltZSwgdmFsdWV9O1xuICB9XG5cbiAgYWxsb3dPbmx5VGltZWxpbmVTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRFbXB0eVN0ZXBLZXlmcmFtZSAhPT0gdGhpcy5fY3VycmVudEtleWZyYW1lO1xuICB9XG5cbiAgYXBwbHlFbXB0eVN0ZXAoZWFzaW5nOiBzdHJpbmd8bnVsbCkge1xuICAgIGlmIChlYXNpbmcpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzS2V5ZnJhbWVbJ2Vhc2luZyddID0gZWFzaW5nO1xuICAgIH1cblxuICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgYW5pbWF0ZShkdXJhdGlvbik6XG4gICAgLy8gYWxsIG1pc3Npbmcgc3R5bGVzIGFyZSBmaWxsZWQgd2l0aCBhIGAqYCB2YWx1ZSB0aGVuXG4gICAgLy8gaWYgYW55IGRlc3RpbmF0aW9uIHN0eWxlcyBhcmUgZmlsbGVkIGluIGxhdGVyIG9uIHRoZSBzYW1lXG4gICAgLy8ga2V5ZnJhbWUgdGhlbiB0aGV5IHdpbGwgb3ZlcnJpZGUgdGhlIG92ZXJyaWRkZW4gc3R5bGVzXG4gICAgLy8gV2UgdXNlIGBfZ2xvYmFsVGltZWxpbmVTdHlsZXNgIGhlcmUgYmVjYXVzZSB0aGVyZSBtYXkgYmVcbiAgICAvLyBzdHlsZXMgaW4gcHJldmlvdXMga2V5ZnJhbWVzIHRoYXQgYXJlIG5vdCBwcmVzZW50IGluIHRoaXMgdGltZWxpbmVcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9nbG9iYWxUaW1lbGluZVN0eWxlcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIHRoaXMuX2JhY2tGaWxsW3Byb3BdID0gdGhpcy5fZ2xvYmFsVGltZWxpbmVTdHlsZXNbcHJvcF0gfHwgQVVUT19TVFlMRTtcbiAgICAgIHRoaXMuX2N1cnJlbnRLZXlmcmFtZVtwcm9wXSA9IEFVVE9fU1RZTEU7XG4gICAgfSk7XG4gICAgdGhpcy5fY3VycmVudEVtcHR5U3RlcEtleWZyYW1lID0gdGhpcy5fY3VycmVudEtleWZyYW1lO1xuICB9XG5cbiAgc2V0U3R5bGVzKFxuICAgICAgaW5wdXQ6ICjJtVN0eWxlRGF0YXxzdHJpbmcpW10sIGVhc2luZzogc3RyaW5nfG51bGwsIGVycm9yczogYW55W10sXG4gICAgICBvcHRpb25zPzogQW5pbWF0aW9uT3B0aW9ucykge1xuICAgIGlmIChlYXNpbmcpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzS2V5ZnJhbWVbJ2Vhc2luZyddID0gZWFzaW5nO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IChvcHRpb25zICYmIG9wdGlvbnMucGFyYW1zKSB8fCB7fTtcbiAgICBjb25zdCBzdHlsZXMgPSBmbGF0dGVuU3R5bGVzKGlucHV0LCB0aGlzLl9nbG9iYWxUaW1lbGluZVN0eWxlcyk7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgY29uc3QgdmFsID0gaW50ZXJwb2xhdGVQYXJhbXMoc3R5bGVzW3Byb3BdLCBwYXJhbXMsIGVycm9ycyk7XG4gICAgICB0aGlzLl9wZW5kaW5nU3R5bGVzW3Byb3BdID0gdmFsO1xuICAgICAgaWYgKCF0aGlzLl9sb2NhbFRpbWVsaW5lU3R5bGVzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHRoaXMuX2JhY2tGaWxsW3Byb3BdID0gdGhpcy5fZ2xvYmFsVGltZWxpbmVTdHlsZXMuaGFzT3duUHJvcGVydHkocHJvcCkgP1xuICAgICAgICAgICAgdGhpcy5fZ2xvYmFsVGltZWxpbmVTdHlsZXNbcHJvcF0gOlxuICAgICAgICAgICAgQVVUT19TVFlMRTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKHByb3AsIHZhbCk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseVN0eWxlc1RvS2V5ZnJhbWUoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5fcGVuZGluZ1N0eWxlcztcbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5rZXlzKHN0eWxlcyk7XG4gICAgaWYgKHByb3BzLmxlbmd0aCA9PSAwKSByZXR1cm47XG5cbiAgICB0aGlzLl9wZW5kaW5nU3R5bGVzID0ge307XG5cbiAgICBwcm9wcy5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgY29uc3QgdmFsID0gc3R5bGVzW3Byb3BdO1xuICAgICAgdGhpcy5fY3VycmVudEtleWZyYW1lW3Byb3BdID0gdmFsO1xuICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5fbG9jYWxUaW1lbGluZVN0eWxlcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIGlmICghdGhpcy5fY3VycmVudEtleWZyYW1lLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRLZXlmcmFtZVtwcm9wXSA9IHRoaXMuX2xvY2FsVGltZWxpbmVTdHlsZXNbcHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzbmFwc2hvdEN1cnJlbnRTdHlsZXMoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5fbG9jYWxUaW1lbGluZVN0eWxlcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMuX2xvY2FsVGltZWxpbmVTdHlsZXNbcHJvcF07XG4gICAgICB0aGlzLl9wZW5kaW5nU3R5bGVzW3Byb3BdID0gdmFsO1xuICAgICAgdGhpcy5fdXBkYXRlU3R5bGUocHJvcCwgdmFsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbmFsS2V5ZnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleWZyYW1lcy5nZXQodGhpcy5kdXJhdGlvbik7XG4gIH1cblxuICBnZXQgcHJvcGVydGllcygpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5fY3VycmVudEtleWZyYW1lKSB7XG4gICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgbWVyZ2VUaW1lbGluZUNvbGxlY3RlZFN0eWxlcyh0aW1lbGluZTogVGltZWxpbmVCdWlsZGVyKSB7XG4gICAgT2JqZWN0LmtleXModGltZWxpbmUuX3N0eWxlU3VtbWFyeSkuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIGNvbnN0IGRldGFpbHMwID0gdGhpcy5fc3R5bGVTdW1tYXJ5W3Byb3BdO1xuICAgICAgY29uc3QgZGV0YWlsczEgPSB0aW1lbGluZS5fc3R5bGVTdW1tYXJ5W3Byb3BdO1xuICAgICAgaWYgKCFkZXRhaWxzMCB8fCBkZXRhaWxzMS50aW1lID4gZGV0YWlsczAudGltZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVTdHlsZShwcm9wLCBkZXRhaWxzMS52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBidWlsZEtleWZyYW1lcygpOiBBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzVG9LZXlmcmFtZSgpO1xuICAgIGNvbnN0IHByZVN0eWxlUHJvcHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCBwb3N0U3R5bGVQcm9wcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGNvbnN0IGlzRW1wdHkgPSB0aGlzLl9rZXlmcmFtZXMuc2l6ZSA9PT0gMSAmJiB0aGlzLmR1cmF0aW9uID09PSAwO1xuXG4gICAgbGV0IGZpbmFsS2V5ZnJhbWVzOiDJtVN0eWxlRGF0YVtdID0gW107XG4gICAgdGhpcy5fa2V5ZnJhbWVzLmZvckVhY2goKGtleWZyYW1lLCB0aW1lKSA9PiB7XG4gICAgICBjb25zdCBmaW5hbEtleWZyYW1lID0gY29weVN0eWxlcyhrZXlmcmFtZSwgdHJ1ZSk7XG4gICAgICBPYmplY3Qua2V5cyhmaW5hbEtleWZyYW1lKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGZpbmFsS2V5ZnJhbWVbcHJvcF07XG4gICAgICAgIGlmICh2YWx1ZSA9PSBQUkVfU1RZTEUpIHtcbiAgICAgICAgICBwcmVTdHlsZVByb3BzLmFkZChwcm9wKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBBVVRPX1NUWUxFKSB7XG4gICAgICAgICAgcG9zdFN0eWxlUHJvcHMuYWRkKHByb3ApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghaXNFbXB0eSkge1xuICAgICAgICBmaW5hbEtleWZyYW1lWydvZmZzZXQnXSA9IHRpbWUgLyB0aGlzLmR1cmF0aW9uO1xuICAgICAgfVxuICAgICAgZmluYWxLZXlmcmFtZXMucHVzaChmaW5hbEtleWZyYW1lKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByZVByb3BzOiBzdHJpbmdbXSA9IHByZVN0eWxlUHJvcHMuc2l6ZSA/IGl0ZXJhdG9yVG9BcnJheShwcmVTdHlsZVByb3BzLnZhbHVlcygpKSA6IFtdO1xuICAgIGNvbnN0IHBvc3RQcm9wczogc3RyaW5nW10gPSBwb3N0U3R5bGVQcm9wcy5zaXplID8gaXRlcmF0b3JUb0FycmF5KHBvc3RTdHlsZVByb3BzLnZhbHVlcygpKSA6IFtdO1xuXG4gICAgLy8gc3BlY2lhbCBjYXNlIGZvciBhIDAtc2Vjb25kIGFuaW1hdGlvbiAod2hpY2ggaXMgZGVzaWduZWQganVzdCB0byBwbGFjZSBzdHlsZXMgb25zY3JlZW4pXG4gICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgIGNvbnN0IGtmMCA9IGZpbmFsS2V5ZnJhbWVzWzBdO1xuICAgICAgY29uc3Qga2YxID0gY29weU9iaihrZjApO1xuICAgICAga2YwWydvZmZzZXQnXSA9IDA7XG4gICAgICBrZjFbJ29mZnNldCddID0gMTtcbiAgICAgIGZpbmFsS2V5ZnJhbWVzID0gW2tmMCwga2YxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlVGltZWxpbmVJbnN0cnVjdGlvbihcbiAgICAgICAgdGhpcy5lbGVtZW50LCBmaW5hbEtleWZyYW1lcywgcHJlUHJvcHMsIHBvc3RQcm9wcywgdGhpcy5kdXJhdGlvbiwgdGhpcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMuZWFzaW5nLCBmYWxzZSk7XG4gIH1cbn1cblxuY2xhc3MgU3ViVGltZWxpbmVCdWlsZGVyIGV4dGVuZHMgVGltZWxpbmVCdWlsZGVyIHtcbiAgcHVibGljIHRpbWluZ3M6IEFuaW1hdGVUaW1pbmdzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgZHJpdmVyOiBBbmltYXRpb25Ecml2ZXIsIHB1YmxpYyBlbGVtZW50OiBhbnksIHB1YmxpYyBrZXlmcmFtZXM6IMm1U3R5bGVEYXRhW10sXG4gICAgICBwdWJsaWMgcHJlU3R5bGVQcm9wczogc3RyaW5nW10sIHB1YmxpYyBwb3N0U3R5bGVQcm9wczogc3RyaW5nW10sIHRpbWluZ3M6IEFuaW1hdGVUaW1pbmdzLFxuICAgICAgcHJpdmF0ZSBfc3RyZXRjaFN0YXJ0aW5nS2V5ZnJhbWU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHN1cGVyKGRyaXZlciwgZWxlbWVudCwgdGltaW5ncy5kZWxheSk7XG4gICAgdGhpcy50aW1pbmdzID0ge2R1cmF0aW9uOiB0aW1pbmdzLmR1cmF0aW9uLCBkZWxheTogdGltaW5ncy5kZWxheSwgZWFzaW5nOiB0aW1pbmdzLmVhc2luZ307XG4gIH1cblxuICBjb250YWluc0FuaW1hdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5rZXlmcmFtZXMubGVuZ3RoID4gMTtcbiAgfVxuXG4gIGJ1aWxkS2V5ZnJhbWVzKCk6IEFuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb24ge1xuICAgIGxldCBrZXlmcmFtZXMgPSB0aGlzLmtleWZyYW1lcztcbiAgICBsZXQge2RlbGF5LCBkdXJhdGlvbiwgZWFzaW5nfSA9IHRoaXMudGltaW5ncztcbiAgICBpZiAodGhpcy5fc3RyZXRjaFN0YXJ0aW5nS2V5ZnJhbWUgJiYgZGVsYXkpIHtcbiAgICAgIGNvbnN0IG5ld0tleWZyYW1lczogybVTdHlsZURhdGFbXSA9IFtdO1xuICAgICAgY29uc3QgdG90YWxUaW1lID0gZHVyYXRpb24gKyBkZWxheTtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nR2FwID0gZGVsYXkgLyB0b3RhbFRpbWU7XG5cbiAgICAgIC8vIHRoZSBvcmlnaW5hbCBzdGFydGluZyBrZXlmcmFtZSBub3cgc3RhcnRzIG9uY2UgdGhlIGRlbGF5IGlzIGRvbmVcbiAgICAgIGNvbnN0IG5ld0ZpcnN0S2V5ZnJhbWUgPSBjb3B5U3R5bGVzKGtleWZyYW1lc1swXSwgZmFsc2UpO1xuICAgICAgbmV3Rmlyc3RLZXlmcmFtZVsnb2Zmc2V0J10gPSAwO1xuICAgICAgbmV3S2V5ZnJhbWVzLnB1c2gobmV3Rmlyc3RLZXlmcmFtZSk7XG5cbiAgICAgIGNvbnN0IG9sZEZpcnN0S2V5ZnJhbWUgPSBjb3B5U3R5bGVzKGtleWZyYW1lc1swXSwgZmFsc2UpO1xuICAgICAgb2xkRmlyc3RLZXlmcmFtZVsnb2Zmc2V0J10gPSByb3VuZE9mZnNldChzdGFydGluZ0dhcCk7XG4gICAgICBuZXdLZXlmcmFtZXMucHVzaChvbGRGaXJzdEtleWZyYW1lKTtcblxuICAgICAgLypcbiAgICAgICAgV2hlbiB0aGUga2V5ZnJhbWUgaXMgc3RyZXRjaGVkIHRoZW4gaXQgbWVhbnMgdGhhdCB0aGUgZGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb25cbiAgICAgICAgc3RhcnRzIGlzIGdvbmUuIEluc3RlYWQgdGhlIGZpcnN0IGtleWZyYW1lIGlzIHBsYWNlZCBhdCB0aGUgc3RhcnQgb2YgdGhlIGFuaW1hdGlvblxuICAgICAgICBhbmQgaXQgaXMgdGhlbiBjb3BpZWQgdG8gd2hlcmUgaXQgc3RhcnRzIHdoZW4gdGhlIG9yaWdpbmFsIGRlbGF5IGlzIG92ZXIuIFRoaXMgYmFzaWNhbGx5XG4gICAgICAgIG1lYW5zIG5vdGhpbmcgYW5pbWF0ZXMgZHVyaW5nIHRoYXQgZGVsYXksIGJ1dCB0aGUgc3R5bGVzIGFyZSBzdGlsbCByZW5kZXJlcmVkLiBGb3IgdGhpc1xuICAgICAgICB0byB3b3JrIHRoZSBvcmlnaW5hbCBvZmZzZXQgdmFsdWVzIHRoYXQgZXhpc3QgaW4gdGhlIG9yaWdpbmFsIGtleWZyYW1lcyBtdXN0IGJlIFwid2FycGVkXCJcbiAgICAgICAgc28gdGhhdCB0aGV5IGNhbiB0YWtlIHRoZSBuZXcga2V5ZnJhbWUgKyBkZWxheSBpbnRvIGFjY291bnQuXG5cbiAgICAgICAgZGVsYXk9MTAwMCwgZHVyYXRpb249MTAwMCwga2V5ZnJhbWVzID0gMCAuNSAxXG5cbiAgICAgICAgdHVybnMgaW50b1xuXG4gICAgICAgIGRlbGF5PTAsIGR1cmF0aW9uPTIwMDAsIGtleWZyYW1lcyA9IDAgLjMzIC42NiAxXG4gICAgICAgKi9cblxuICAgICAgLy8gb2Zmc2V0cyBiZXR3ZWVuIDEgLi4uIG4gLTEgYXJlIGFsbCB3YXJwZWQgYnkgdGhlIGtleWZyYW1lIHN0cmV0Y2hcbiAgICAgIGNvbnN0IGxpbWl0ID0ga2V5ZnJhbWVzLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBsaW1pdDsgaSsrKSB7XG4gICAgICAgIGxldCBrZiA9IGNvcHlTdHlsZXMoa2V5ZnJhbWVzW2ldLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IG9sZE9mZnNldCA9IGtmWydvZmZzZXQnXSBhcyBudW1iZXI7XG4gICAgICAgIGNvbnN0IHRpbWVBdEtleWZyYW1lID0gZGVsYXkgKyBvbGRPZmZzZXQgKiBkdXJhdGlvbjtcbiAgICAgICAga2ZbJ29mZnNldCddID0gcm91bmRPZmZzZXQodGltZUF0S2V5ZnJhbWUgLyB0b3RhbFRpbWUpO1xuICAgICAgICBuZXdLZXlmcmFtZXMucHVzaChrZik7XG4gICAgICB9XG5cbiAgICAgIC8vIHRoZSBuZXcgc3RhcnRpbmcga2V5ZnJhbWUgc2hvdWxkIGJlIGFkZGVkIGF0IHRoZSBzdGFydFxuICAgICAgZHVyYXRpb24gPSB0b3RhbFRpbWU7XG4gICAgICBkZWxheSA9IDA7XG4gICAgICBlYXNpbmcgPSAnJztcblxuICAgICAga2V5ZnJhbWVzID0gbmV3S2V5ZnJhbWVzO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVUaW1lbGluZUluc3RydWN0aW9uKFxuICAgICAgICB0aGlzLmVsZW1lbnQsIGtleWZyYW1lcywgdGhpcy5wcmVTdHlsZVByb3BzLCB0aGlzLnBvc3RTdHlsZVByb3BzLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZyxcbiAgICAgICAgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcm91bmRPZmZzZXQob2Zmc2V0OiBudW1iZXIsIGRlY2ltYWxQb2ludHMgPSAzKTogbnVtYmVyIHtcbiAgY29uc3QgbXVsdCA9IE1hdGgucG93KDEwLCBkZWNpbWFsUG9pbnRzIC0gMSk7XG4gIHJldHVybiBNYXRoLnJvdW5kKG9mZnNldCAqIG11bHQpIC8gbXVsdDtcbn1cblxuZnVuY3Rpb24gZmxhdHRlblN0eWxlcyhpbnB1dDogKMm1U3R5bGVEYXRhfHN0cmluZylbXSwgYWxsU3R5bGVzOiDJtVN0eWxlRGF0YSkge1xuICBjb25zdCBzdHlsZXM6IMm1U3R5bGVEYXRhID0ge307XG4gIGxldCBhbGxQcm9wZXJ0aWVzOiBzdHJpbmdbXTtcbiAgaW5wdXQuZm9yRWFjaCh0b2tlbiA9PiB7XG4gICAgaWYgKHRva2VuID09PSAnKicpIHtcbiAgICAgIGFsbFByb3BlcnRpZXMgPSBhbGxQcm9wZXJ0aWVzIHx8IE9iamVjdC5rZXlzKGFsbFN0eWxlcyk7XG4gICAgICBhbGxQcm9wZXJ0aWVzLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgIHN0eWxlc1twcm9wXSA9IEFVVE9fU1RZTEU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyh0b2tlbiBhcyDJtVN0eWxlRGF0YSwgZmFsc2UsIHN0eWxlcyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN0eWxlcztcbn1cbiJdfQ==