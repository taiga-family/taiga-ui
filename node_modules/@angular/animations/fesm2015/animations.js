/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/animation_builder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An injectable service that produces an animation sequence programmatically within an
 * Angular component or directive.
 * Provided by the `BrowserAnimationsModule` or `NoopAnimationsModule`.
 *
 * \@usageNotes
 *
 * To use this service, add it to your component or directive as a dependency.
 * The service is instantiated along with your component.
 *
 * Apps do not typically need to create their own animation players, but if you
 * do need to, follow these steps:
 *
 * 1. Use the `build()` method to create a programmatic animation using the
 * `animate()` function. The method returns an `AnimationFactory` instance.
 *
 * 2. Use the factory object to create an `AnimationPlayer` and attach it to a DOM element.
 *
 * 3. Use the player object to control the animation programmatically.
 *
 * For example:
 *
 * ```ts
 * // import the service from BrowserAnimationsModule
 * import {AnimationBuilder} from '\@angular/animations';
 * // require the service as a dependency
 * class MyCmp {
 *   constructor(private _builder: AnimationBuilder) {}
 *
 *   makeAnimation(element: any) {
 *     // first define a reusable animation
 *     const myAnimation = this._builder.build([
 *       style({ width: 0 }),
 *       animate(1000, style({ width: '100px' }))
 *     ]);
 *
 *     // use the returned factory object to create a player
 *     const player = myAnimation.create(element);
 *
 *     player.play();
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @abstract
 */
class AnimationBuilder {
}
if (false) {
    /**
     * Builds a factory for producing a defined animation.
     * @see `animate()`
     * @abstract
     * @param {?} animation A reusable animation definition.
     * @return {?} A factory object that can create a player for the defined animation.
     */
    AnimationBuilder.prototype.build = function (animation) { };
}
/**
 * A factory object returned from the `AnimationBuilder`.`build()` method.
 *
 * \@publicApi
 * @abstract
 */
class AnimationFactory {
}
if (false) {
    /**
     * Creates an `AnimationPlayer` instance for the reusable animation defined by
     * the `AnimationBuilder`.`build()` method that created this factory.
     * Attaches the new player a DOM element.
     * @abstract
     * @param {?} element The DOM element to which to attach the animation.
     * @param {?=} options A set of options that can include a time delay and
     * additional developer-defined parameters.
     * @return {?}
     */
    AnimationFactory.prototype.create = function (element, options) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/animation_metadata.ts
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
 * Represents a set of CSS styles for use in an animation style.
 * @record
 */
function ɵStyleData() { }
/** @enum {number} */
const AnimationMetadataType = {
    /**
     * Associates a named animation state with a set of CSS styles.
     * See `state()`
     */
    State: 0,
    /**
     * Data for a transition from one animation state to another.
     * See `transition()`
     */
    Transition: 1,
    /**
     * Contains a set of animation steps.
     * See `sequence()`
     */
    Sequence: 2,
    /**
     * Contains a set of animation steps.
     * See `{@link animations/group group()}`
     */
    Group: 3,
    /**
     * Contains an animation step.
     * See `animate()`
     */
    Animate: 4,
    /**
     * Contains a set of animation steps.
     * See `keyframes()`
     */
    Keyframes: 5,
    /**
     * Contains a set of CSS property-value pairs into a named style.
     * See `style()`
     */
    Style: 6,
    /**
     * Associates an animation with an entry trigger that can be attached to an element.
     * See `trigger()`
     */
    Trigger: 7,
    /**
     * Contains a re-usable animation.
     * See `animation()`
     */
    Reference: 8,
    /**
     * Contains data to use in executing child animations returned by a query.
     * See `animateChild()`
     */
    AnimateChild: 9,
    /**
     * Contains animation parameters for a re-usable animation.
     * See `useAnimation()`
     */
    AnimateRef: 10,
    /**
     * Contains child-animation query data.
     * See `query()`
     */
    Query: 11,
    /**
     * Contains data for staggering an animation sequence.
     * See `stagger()`
     */
    Stagger: 12,
};
/**
 * Specifies automatic styling.
 *
 * \@publicApi
 * @type {?}
 */
const AUTO_STYLE = '*';
/**
 * Base for animation data structures.
 *
 * \@publicApi
 * @record
 */
function AnimationMetadata() { }
if (false) {
    /** @type {?} */
    AnimationMetadata.prototype.type;
}
/**
 * Contains an animation trigger. Instantiated and returned by the
 * `trigger()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationTriggerMetadata() { }
if (false) {
    /**
     * The trigger name, used to associate it with an element. Unique within the component.
     * @type {?}
     */
    AnimationTriggerMetadata.prototype.name;
    /**
     * An animation definition object, containing an array of state and transition declarations.
     * @type {?}
     */
    AnimationTriggerMetadata.prototype.definitions;
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     * @type {?}
     */
    AnimationTriggerMetadata.prototype.options;
}
/**
 * Encapsulates an animation state by associating a state name with a set of CSS styles.
 * Instantiated and returned by the `state()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationStateMetadata() { }
if (false) {
    /**
     * The state name, unique within the component.
     * @type {?}
     */
    AnimationStateMetadata.prototype.name;
    /**
     *  The CSS styles associated with this state.
     * @type {?}
     */
    AnimationStateMetadata.prototype.styles;
    /**
     * An options object containing
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation.
     * @type {?|undefined}
     */
    AnimationStateMetadata.prototype.options;
}
/**
 * Encapsulates an animation transition. Instantiated and returned by the
 * `transition()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationTransitionMetadata() { }
if (false) {
    /**
     * An expression that describes a state change.
     * @type {?}
     */
    AnimationTransitionMetadata.prototype.expr;
    /**
     * One or more animation objects to which this transition applies.
     * @type {?}
     */
    AnimationTransitionMetadata.prototype.animation;
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     * @type {?}
     */
    AnimationTransitionMetadata.prototype.options;
}
/**
 * Encapsulates a reusable animation, which is a collection of individual animation steps.
 * Instantiated and returned by the `animation()` function, and
 * passed to the `useAnimation()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationReferenceMetadata() { }
if (false) {
    /**
     *  One or more animation step objects.
     * @type {?}
     */
    AnimationReferenceMetadata.prototype.animation;
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     * @type {?}
     */
    AnimationReferenceMetadata.prototype.options;
}
/**
 * Encapsulates an animation query. Instantiated and returned by
 * the `query()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationQueryMetadata() { }
if (false) {
    /**
     *  The CSS selector for this query.
     * @type {?}
     */
    AnimationQueryMetadata.prototype.selector;
    /**
     * One or more animation step objects.
     * @type {?}
     */
    AnimationQueryMetadata.prototype.animation;
    /**
     * A query options object.
     * @type {?}
     */
    AnimationQueryMetadata.prototype.options;
}
/**
 * Encapsulates a keyframes sequence. Instantiated and returned by
 * the `keyframes()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationKeyframesSequenceMetadata() { }
if (false) {
    /**
     * An array of animation styles.
     * @type {?}
     */
    AnimationKeyframesSequenceMetadata.prototype.steps;
}
/**
 * Encapsulates an animation style. Instantiated and returned by
 * the `style()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationStyleMetadata() { }
if (false) {
    /**
     * A set of CSS style properties.
     * @type {?}
     */
    AnimationStyleMetadata.prototype.styles;
    /**
     * A percentage of the total animate time at which the style is to be applied.
     * @type {?}
     */
    AnimationStyleMetadata.prototype.offset;
}
/**
 * Encapsulates an animation step. Instantiated and returned by
 * the `animate()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationAnimateMetadata() { }
if (false) {
    /**
     * The timing data for the step.
     * @type {?}
     */
    AnimationAnimateMetadata.prototype.timings;
    /**
     * A set of styles used in the step.
     * @type {?}
     */
    AnimationAnimateMetadata.prototype.styles;
}
/**
 * Encapsulates a child animation, that can be run explicitly when the parent is run.
 * Instantiated and returned by the `animateChild` function.
 *
 * \@publicApi
 * @record
 */
function AnimationAnimateChildMetadata() { }
if (false) {
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     * @type {?}
     */
    AnimationAnimateChildMetadata.prototype.options;
}
/**
 * Encapsulates a reusable animation.
 * Instantiated and returned by the `useAnimation()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationAnimateRefMetadata() { }
if (false) {
    /**
     * An animation reference object.
     * @type {?}
     */
    AnimationAnimateRefMetadata.prototype.animation;
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     * @type {?}
     */
    AnimationAnimateRefMetadata.prototype.options;
}
/**
 * Encapsulates an animation sequence.
 * Instantiated and returned by the `sequence()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationSequenceMetadata() { }
if (false) {
    /**
     *  An array of animation step objects.
     * @type {?}
     */
    AnimationSequenceMetadata.prototype.steps;
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     * @type {?}
     */
    AnimationSequenceMetadata.prototype.options;
}
/**
 * Encapsulates an animation group.
 * Instantiated and returned by the `{\@link animations/group group()}` function.
 *
 * \@publicApi
 * @record
 */
function AnimationGroupMetadata() { }
if (false) {
    /**
     * One or more animation or style steps that form this group.
     * @type {?}
     */
    AnimationGroupMetadata.prototype.steps;
    /**
     * An options object containing a delay and
     * developer-defined parameters that provide styling defaults and
     * can be overridden on invocation. Default delay is 0.
     * @type {?}
     */
    AnimationGroupMetadata.prototype.options;
}
/**
 * Encapsulates parameters for staggering the start times of a set of animation steps.
 * Instantiated and returned by the `stagger()` function.
 *
 * \@publicApi
 *
 * @record
 */
function AnimationStaggerMetadata() { }
if (false) {
    /**
     * The timing data for the steps.
     * @type {?}
     */
    AnimationStaggerMetadata.prototype.timings;
    /**
     * One or more animation steps.
     * @type {?}
     */
    AnimationStaggerMetadata.prototype.animation;
}
/**
 * Creates a named animation trigger, containing a  list of `state()`
 * and `transition()` entries to be evaluated when the expression
 * bound to the trigger changes.
 *
 * \@usageNotes
 * Define an animation trigger in the `animations` section of `\@Component` metadata.
 * In the template, reference the trigger by name and bind it to a trigger expression that
 * evaluates to a defined animation state, using the following format:
 *
 * `[\@triggerName]="expression"`
 *
 * Animation trigger bindings convert all values to strings, and then match the
 * previous and current values against any linked transitions.
 * Booleans can be specified as `1` or `true` and `0` or `false`.
 *
 * ### Usage Example
 *
 * The following example creates an animation trigger reference based on the provided
 * name value.
 * The provided animation value is expected to be an array consisting of state and
 * transition declarations.
 *
 * ```typescript
 * \@Component({
 *   selector: "my-component",
 *   templateUrl: "my-component-tpl.html",
 *   animations: [
 *     trigger("myAnimationTrigger", [
 *       state(...),
 *       state(...),
 *       transition(...),
 *       transition(...)
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "something";
 * }
 * ```
 *
 * The template associated with this component makes use of the defined trigger
 * by binding to an element within its template code.
 *
 * ```html
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [\@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * ### Using an inline function
 * The `transition` animation method also supports reading an inline function which can decide
 * if its associated animation should be run.
 *
 * ```typescript
 * // this method is run each time the `myAnimationTrigger` trigger value changes.
 * function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:
 * string]: any}): boolean {
 *   // notice that `element` and `params` are also available here
 *   return toState == 'yes-please-animate';
 * }
 *  /
 *   selector: 'my-component',
 *   templateUrl: 'my-component-tpl.html',
 *   animations: [
 *     trigger('myAnimationTrigger', [
 *       transition(myInlineMatcherFn, [
 *         // the animation sequence code
 *       ]),
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "yes-please-animate";
 * }
 * ```
 *
 * ### Disabling Animations
 * When true, the special animation control binding `\@.disabled` binding prevents
 * all animations from rendering.
 * Place the  `\@.disabled` binding on an element to disable
 * animations on the element itself, as well as any inner animation triggers
 * within the element.
 *
 * The following example shows how to use this feature:
 *
 * ```typescript /
 *   selector: 'my-component',
 *   template: `
 *     <div [\@.disabled]="isDisabled">
 *       <div [\@childAnimation]="exp"></div>
 *     </div>
 *   `,
 *   animations: [
 *     trigger("childAnimation", [
 *       // ...
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   isDisabled = true;
 *   exp = '...';
 * }
 * ```
 *
 * When `\@.disabled` is true, it prevents the `\@childAnimation` trigger from animating,
 * along with any inner animations.
 *
 * ### Disable animations application-wide
 * When an area of the template is set to have animations disabled,
 * **all** inner components have their animations disabled as well.
 * This means that you can disable all animations for an app
 * by placing a host binding set on `\@.disabled` on the topmost Angular component.
 *
 * ```typescript
 * import {Component, HostBinding} from '\@angular/core';
 *  /
 *   selector: 'app-component',
 *   templateUrl: 'app.component.html',
 * })
 * class AppComponent {
 * \@HostBinding('@.disabled')
 *   public animationsDisabled = true;
 * }
 * ```
 *
 * ### Overriding disablement of inner animations
 * Despite inner animations being disabled, a parent animation can `query()`
 * for inner elements located in disabled areas of the template and still animate
 * them if needed. This is also the case for when a sub animation is
 * queried by a parent and then later animated using `animateChild()`.
 *
 * ### Detecting when an animation is disabled
 * If a region of the DOM (or the entire application) has its animations disabled, the animation
 * trigger callbacks still fire, but for zero seconds. When the callback fires, it provides
 * an instance of an `AnimationEvent`. If animations are disabled,
 * the `.disabled` flag on the event is true.
 *
 * \@publicApi
 * @param {?} name An identifying string.
 * @param {?} definitions  An animation definition object, containing an array of `state()`
 * and `transition()` declarations.
 *
 * @return {?} An object that encapsulates the trigger data.
 *
 */
function trigger(name, definitions) {
    return { type: 7 /* Trigger */, name, definitions, options: {} };
}
/**
 * Defines an animation step that combines styling information with timing information.
 *
 * \@usageNotes
 * Call within an animation `sequence()`, `{\@link animations/group group()}`, or
 * `transition()` call to specify an animation step
 * that applies given style data to the parent animation for a given amount of time.
 *
 * ### Syntax Examples
 * **Timing examples**
 *
 * The following examples show various `timings` specifications.
 * - `animate(500)` : Duration is 500 milliseconds.
 * - `animate("1s")` : Duration is 1000 milliseconds.
 * - `animate("100ms 0.5s")` : Duration is 100 milliseconds, delay is 500 milliseconds.
 * - `animate("5s ease-in")` : Duration is 5000 milliseconds, easing in.
 * - `animate("5s 10ms cubic-bezier(.17,.67,.88,.1)")` : Duration is 5000 milliseconds, delay is 10
 * milliseconds, easing according to a bezier curve.
 *
 * **Style examples**
 *
 * The following example calls `style()` to set a single CSS style.
 * ```typescript
 * animate(500, style({ background: "red" }))
 * ```
 * The following example calls `keyframes()` to set a CSS style
 * to different values for successive keyframes.
 * ```typescript
 * animate(500, keyframes(
 *  [
 *   style({ background: "blue" })),
 *   style({ background: "red" }))
 *  ])
 * ```
 *
 * \@publicApi
 * @param {?} timings Sets `AnimateTimings` for the parent animation.
 * A string in the format "duration [delay] [easing]".
 *  - Duration and delay are expressed as a number and optional time unit,
 * such as "1s" or "10ms" for one second and 10 milliseconds, respectively.
 * The default unit is milliseconds.
 *  - The easing value controls how the animation accelerates and decelerates
 * during its runtime. Value is one of  `ease`, `ease-in`, `ease-out`,
 * `ease-in-out`, or a `cubic-bezier()` function call.
 * If not supplied, no easing is applied.
 *
 * For example, the string "1s 100ms ease-out" specifies a duration of
 * 1000 milliseconds, and delay of 100 ms, and the "ease-out" easing style,
 * which decelerates near the end of the duration.
 * @param {?=} styles Sets AnimationStyles for the parent animation.
 * A function call to either `style()` or `keyframes()`
 * that returns a collection of CSS style entries to be applied to the parent animation.
 * When null, uses the styles from the destination state.
 * This is useful when describing an animation step that will complete an animation;
 * see "Animating to the final state" in `transitions()`.
 * @return {?} An object that encapsulates the animation step.
 *
 */
function animate(timings, styles = null) {
    return { type: 4 /* Animate */, styles, timings };
}
/**
 * \@description Defines a list of animation steps to be run in parallel.
 *
 * \@usageNotes
 * Grouped animations are useful when a series of styles must be
 * animated at different starting times and closed off at different ending times.
 *
 * When called within a `sequence()` or a
 * `transition()` call, does not continue to the next
 * instruction until all of the inner animation steps have completed.
 *
 * \@publicApi
 * @param {?} steps An array of animation step objects.
 * - When steps are defined by `style()` or `animate()`
 * function calls, each call within the group is executed instantly.
 * - To specify offset styles to be applied at a later time, define steps with
 * `keyframes()`, or use `animate()` calls with a delay value.
 * For example:
 *
 * ```typescript
 * group([
 *   animate("1s", style({ background: "black" })),
 *   animate("2s", style({ color: "white" }))
 * ])
 * ```
 *
 * @param {?=} options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return {?} An object that encapsulates the group data.
 *
 */
function group(steps, options = null) {
    return { type: 3 /* Group */, steps, options };
}
/**
 * Defines a list of animation steps to be run sequentially, one by one.
 *
 * \@usageNotes
 * When you pass an array of steps to a
 * `transition()` call, the steps run sequentially by default.
 * Compare this to the `{\@link animations/group group()}` call, which runs animation steps in
 * parallel.
 *
 * When a sequence is used within a `{\@link animations/group group()}` or a `transition()` call,
 * execution continues to the next instruction only after each of the inner animation
 * steps have completed.
 *
 * \@publicApi
 *
 * @param {?} steps An array of animation step objects.
 * - Steps defined by `style()` calls apply the styling data immediately.
 * - Steps defined by `animate()` calls apply the styling data over time
 *   as specified by the timing data.
 *
 * ```typescript
 * sequence([
 *   style({ opacity: 0 }),
 *   animate("1s", style({ opacity: 1 }))
 * ])
 * ```
 *
 * @param {?=} options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return {?} An object that encapsulates the sequence data.
 *
 */
function sequence(steps, options = null) {
    return { type: 2 /* Sequence */, steps, options };
}
/**
 * Declares a key/value object containing CSS properties/styles that
 * can then be used for an animation `state`, within an animation `sequence`,
 * or as styling data for calls to `animate()` and `keyframes()`.
 *
 * \@usageNotes
 * The following examples create animation styles that collect a set of
 * CSS property values:
 *
 * ```typescript
 * // string values for CSS properties
 * style({ background: "red", color: "blue" })
 *
 * // numerical pixel values
 * style({ width: 100, height: 0 })
 * ```
 *
 * The following example uses auto-styling to allow a component to animate from
 * a height of 0 up to the height of the parent element:
 *
 * ```
 * style({ height: 0 }),
 * animate("1s", style({ height: "*" }))
 * ```
 *
 * \@publicApi
 *
 * @param {?} tokens A set of CSS styles or HTML styles associated with an animation state.
 * The value can be any of the following:
 * - A key-value style pair associating a CSS property with a value.
 * - An array of key-value style pairs.
 * - An asterisk (*), to use auto-styling, where styles are derived from the element
 * being animated and applied to the animation when it starts.
 *
 * Auto-styling can be used to define a state that depends on layout or other
 * environmental factors.
 *
 * @return {?} An object that encapsulates the style data.
 *
 */
function style(tokens) {
    return { type: 6 /* Style */, styles: tokens, offset: null };
}
/**
 * Declares an animation state within a trigger attached to an element.
 *
 * \@usageNotes
 * Use the `trigger()` function to register states to an animation trigger.
 * Use the `transition()` function to animate between states.
 * When a state is active within a component, its associated styles persist on the element,
 * even when the animation ends.
 *
 * \@publicApi
 *
 * @param {?} name One or more names for the defined state in a comma-separated string.
 * The following reserved state names can be supplied to define a style for specific use
 * cases:
 *
 * - `void` You can associate styles with this name to be used when
 * the element is detached from the application. For example, when an `ngIf` evaluates
 * to false, the state of the associated element is void.
 *  - `*` (asterisk) Indicates the default state. You can associate styles with this name
 * to be used as the fallback when the state that is being animated is not declared
 * within the trigger.
 *
 * @param {?} styles A set of CSS styles associated with this state, created using the
 * `style()` function.
 * This set of styles persists on the element once the state has been reached.
 * @param {?=} options Parameters that can be passed to the state when it is invoked.
 * 0 or more key-value pairs.
 * @return {?} An object that encapsulates the new state data.
 *
 */
function state(name, styles, options) {
    return { type: 0 /* State */, name, styles, options };
}
/**
 * Defines a set of animation styles, associating each style with an optional `offset` value.
 *
 * \@usageNotes
 * Use with the `animate()` call. Instead of applying animations
 * from the current state
 * to the destination state, keyframes describe how each style entry is applied and at what point
 * within the animation arc.
 * Compare [CSS Keyframe Animations](https://www.w3schools.com/css/css3_animations.asp).
 *
 * ### Usage
 *
 * In the following example, the offset values describe
 * when each `backgroundColor` value is applied. The color is red at the start, and changes to
 * blue when 20% of the total time has elapsed.
 *
 * ```typescript
 * // the provided offset values
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red", offset: 0 }),
 *   style({ backgroundColor: "blue", offset: 0.2 }),
 *   style({ backgroundColor: "orange", offset: 0.3 }),
 *   style({ backgroundColor: "black", offset: 1 })
 * ]))
 * ```
 *
 * If there are no `offset` values specified in the style entries, the offsets
 * are calculated automatically.
 *
 * ```typescript
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red" }) // offset = 0
 *   style({ backgroundColor: "blue" }) // offset = 0.33
 *   style({ backgroundColor: "orange" }) // offset = 0.66
 *   style({ backgroundColor: "black" }) // offset = 1
 * ]))
 * ```
 * \@publicApi
 * @param {?} steps A set of animation styles with optional offset data.
 * The optional `offset` value for a style specifies a percentage of the total animation
 * time at which that style is applied.
 * @return {?} An object that encapsulates the keyframes data.
 *
 */
function keyframes(steps) {
    return { type: 5 /* Keyframes */, steps };
}
/**
 * Declares an animation transition as a sequence of animation steps to run when a given
 * condition is satisfied. The condition is a Boolean expression or function that compares
 * the previous and current animation states, and returns true if this transition should occur.
 * When the state criteria of a defined transition are met, the associated animation is
 * triggered.
 *
 * \@usageNotes
 * The template associated with a component binds an animation trigger to an element.
 *
 * ```HTML
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [\@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * All transitions are defined within an animation trigger,
 * along with named states that the transitions change to and from.
 *
 * ```typescript
 * trigger("myAnimationTrigger", [
 *  // define states
 *  state("on", style({ background: "green" })),
 *  state("off", style({ background: "grey" })),
 *  ...]
 * ```
 *
 * Note that when you call the `sequence()` function within a `{\@link animations/group group()}`
 * or a `transition()` call, execution does not continue to the next instruction
 * until each of the inner animation steps have completed.
 *
 * ### Syntax examples
 *
 * The following examples define transitions between the two defined states (and default states),
 * using various options:
 *
 * ```typescript
 * // Transition occurs when the state value
 * // bound to "myAnimationTrigger" changes from "on" to "off"
 * transition("on => off", animate(500))
 * // Run the same animation for both directions
 * transition("on <=> off", animate(500))
 * // Define multiple state-change pairs separated by commas
 * transition("on => off, off => void", animate(500))
 * ```
 *
 * ### Special values for state-change expressions
 *
 * - Catch-all state change for when an element is inserted into the page and the
 * destination state is unknown:
 *
 * ```typescript
 * transition("void => *", [
 *  style({ opacity: 0 }),
 *  animate(500)
 *  ])
 * ```
 *
 * - Capture a state change between any states:
 *
 *  `transition("* => *", animate("1s 0s"))`
 *
 * - Entry and exit transitions:
 *
 * ```typescript
 * transition(":enter", [
 *   style({ opacity: 0 }),
 *   animate(500, style({ opacity: 1 }))
 *   ]),
 * transition(":leave", [
 *   animate(500, style({ opacity: 0 }))
 *   ])
 * ```
 *
 * - Use `:increment` and `:decrement` to initiate transitions:
 *
 * ```typescript
 * transition(":increment", group([
 *  query(':enter', [
 *     style({ left: '100%' }),
 *     animate('0.5s ease-out', style('*'))
 *   ]),
 *  query(':leave', [
 *     animate('0.5s ease-out', style({ left: '-100%' }))
 *  ])
 * ]))
 *
 * transition(":decrement", group([
 *  query(':enter', [
 *     style({ left: '100%' }),
 *     animate('0.5s ease-out', style('*'))
 *   ]),
 *  query(':leave', [
 *     animate('0.5s ease-out', style({ left: '-100%' }))
 *  ])
 * ]))
 * ```
 *
 * ### State-change functions
 *
 * Here is an example of a `fromState` specified as a state-change function that invokes an
 * animation when true:
 *
 * ```typescript
 * transition((fromState, toState) =>
 *  {
 *   return fromState == "off" && toState == "on";
 *  },
 *  animate("1s 0s"))
 * ```
 *
 * ### Animating to the final state
 *
 * If the final step in a transition is a call to `animate()` that uses a timing value
 * with no style data, that step is automatically considered the final animation arc,
 * for the element to reach the final state. Angular automatically adds or removes
 * CSS styles to ensure that the element is in the correct final state.
 *
 * The following example defines a transition that starts by hiding the element,
 * then makes sure that it animates properly to whatever state is currently active for trigger:
 *
 * ```typescript
 * transition("void => *", [
 *   style({ opacity: 0 }),
 *   animate(500)
 *  ])
 * ```
 * ### Boolean value matching
 * If a trigger binding value is a Boolean, it can be matched using a transition expression
 * that compares true and false or 1 and 0. For example:
 *
 * ```
 * // in the template
 * <div [\@openClose]="open ? true : false">...</div>
 * // in the component metadata
 * trigger('openClose', [
 *   state('true', style({ height: '*' })),
 *   state('false', style({ height: '0px' })),
 *   transition('false <=> true', animate(500))
 * ])
 * ```
 *
 * \@publicApi
 *
 * @param {?} stateChangeExpr A Boolean expression or function that compares the previous and current
 * animation states, and returns true if this transition should occur. Note that  "true" and "false"
 * match 1 and 0, respectively. An expression is evaluated each time a state change occurs in the
 * animation trigger element.
 * The animation steps run when the expression evaluates to true.
 *
 * - A state-change string takes the form "state1 => state2", where each side is a defined animation
 * state, or an asterix (*) to refer to a dynamic start or end state.
 *   - The expression string can contain multiple comma-separated statements;
 * for example "state1 => state2, state3 => state4".
 *   - Special values `:enter` and `:leave` initiate a transition on the entry and exit states,
 * equivalent to  "void => *"  and "* => void".
 *   - Special values `:increment` and `:decrement` initiate a transition when a numeric value has
 * increased or decreased in value.
 * - A function is executed each time a state change occurs in the animation trigger element.
 * The animation steps run when the function returns true.
 *
 * @param {?} steps One or more animation objects, as returned by the `animate()` or
 * `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param {?=} options An options object that can contain a delay value for the start of the animation,
 * and additional developer-defined parameters. Provided values for additional parameters are used
 * as defaults, and override values can be passed to the caller on invocation.
 * @return {?} An object that encapsulates the transition data.
 *
 */
function transition(stateChangeExpr, steps, options = null) {
    return { type: 1 /* Transition */, expr: stateChangeExpr, animation: steps, options };
}
/**
 * Produces a reusable animation that can be invoked in another animation or sequence,
 * by calling the `useAnimation()` function.
 *
 * \@usageNotes
 * The following example defines a reusable animation, providing some default parameter
 * values.
 *
 * ```typescript
 * var fadeAnimation = animation([
 *   style({ opacity: '{{ start }}' }),
 *   animate('{{ time }}',
 *   style({ opacity: '{{ end }}'}))
 *   ],
 *   { params: { time: '1000ms', start: 0, end: 1 }});
 * ```
 *
 * The following invokes the defined animation with a call to `useAnimation()`,
 * passing in override parameter values.
 *
 * ```js
 * useAnimation(fadeAnimation, {
 *   params: {
 *     time: '2s',
 *     start: 1,
 *     end: 0
 *   }
 * })
 * ```
 *
 * If any of the passed-in parameter values are missing from this call,
 * the default values are used. If one or more parameter values are missing before a step is
 * animated, `useAnimation()` throws an error.
 *
 * \@publicApi
 * @param {?} steps One or more animation objects, as returned by the `animate()`
 * or `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param {?=} options An options object that can contain a delay value for the start of the
 * animation, and additional developer-defined parameters.
 * Provided values for additional parameters are used as defaults,
 * and override values can be passed to the caller on invocation.
 * @return {?} An object that encapsulates the animation data.
 *
 */
function animation(steps, options = null) {
    return { type: 8 /* Reference */, animation: steps, options };
}
/**
 * Executes a queried inner animation element within an animation sequence.
 *
 * \@usageNotes
 * Each time an animation is triggered in Angular, the parent animation
 * has priority and any child animations are blocked. In order
 * for a child animation to run, the parent animation must query each of the elements
 * containing child animations, and run them using this function.
 *
 * Note that this feature is designed to be used with `query()` and it will only work
 * with animations that are assigned using the Angular animation library. CSS keyframes
 * and transitions are not handled by this API.
 *
 * \@publicApi
 * @param {?=} options An options object that can contain a delay value for the start of the
 * animation, and additional override values for developer-defined parameters.
 * @return {?} An object that encapsulates the child animation data.
 *
 */
function animateChild(options = null) {
    return { type: 9 /* AnimateChild */, options };
}
/**
 * Starts a reusable animation that is created using the `animation()` function.
 *
 * \@publicApi
 * @param {?} animation The reusable animation to start.
 * @param {?=} options An options object that can contain a delay value for the start of
 * the animation, and additional override values for developer-defined parameters.
 * @return {?} An object that contains the animation parameters.
 *
 */
function useAnimation(animation, options = null) {
    return { type: 10 /* AnimateRef */, animation, options };
}
/**
 * Finds one or more inner elements within the current element that is
 * being animated within a sequence. Use with `animate()`.
 *
 * \@usageNotes
 * Tokens can be merged into a combined query selector string. For example:
 *
 * ```typescript
 *  query(':self, .record:enter, .record:leave, \@subTrigger', [...])
 * ```
 *
 * The `query()` function collects multiple elements and works internally by using
 * `element.querySelectorAll`. Use the `limit` field of an options object to limit
 * the total number of items to be collected. For example:
 *
 * ```js
 * query('div', [
 *   animate(...),
 *   animate(...)
 * ], { limit: 1 })
 * ```
 *
 * By default, throws an error when zero items are found. Set the
 * `optional` flag to ignore this error. For example:
 *
 * ```js
 * query('.some-element-that-may-not-be-there', [
 *   animate(...),
 *   animate(...)
 * ], { optional: true })
 * ```
 *
 * ### Usage Example
 *
 * The following example queries for inner elements and animates them
 * individually using `animate()`.
 *
 * ```typescript
 * \@Component({
 *   selector: 'inner',
 *   template: `
 *     <div [\@queryAnimation]="exp">
 *       <h1>Title</h1>
 *       <div class="content">
 *         Blah blah blah
 *       </div>
 *     </div>
 *   `,
 *   animations: [
 *    trigger('queryAnimation', [
 *      transition('* => goAnimate', [
 *        // hide the inner elements
 *        query('h1', style({ opacity: 0 })),
 *        query('.content', style({ opacity: 0 })),
 *
 *        // animate the inner elements in, one by one
 *        query('h1', animate(1000, style({ opacity: 1 }))),
 *        query('.content', animate(1000, style({ opacity: 1 }))),
 *      ])
 *    ])
 *  ]
 * })
 * class Cmp {
 *   exp = '';
 *
 *   goAnimate() {
 *     this.exp = 'goAnimate';
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @param {?} selector The element to query, or a set of elements that contain Angular-specific
 * characteristics, specified with one or more of the following tokens.
 *  - `query(":enter")` or `query(":leave")` : Query for newly inserted/removed elements.
 *  - `query(":animating")` : Query all currently animating elements.
 *  - `query("\@triggerName")` : Query elements that contain an animation trigger.
 *  - `query("\@*")` : Query all elements that contain an animation triggers.
 *  - `query(":self")` : Include the current element into the animation sequence.
 *
 * @param {?} animation One or more animation steps to apply to the queried element or elements.
 * An array is treated as an animation sequence.
 * @param {?=} options An options object. Use the 'limit' field to limit the total number of
 * items to collect.
 * @return {?} An object that encapsulates the query data.
 *
 */
function query(selector, animation, options = null) {
    return { type: 11 /* Query */, selector, animation, options };
}
/**
 * Use within an animation `query()` call to issue a timing gap after
 * each queried item is animated.
 *
 * \@usageNotes
 * In the following example, a container element wraps a list of items stamped out
 * by an `ngFor`. The container element contains an animation trigger that will later be set
 * to query for each of the inner items.
 *
 * Each time items are added, the opacity fade-in animation runs,
 * and each removed item is faded out.
 * When either of these animations occur, the stagger effect is
 * applied after each item's animation is started.
 *
 * ```html
 * <!-- list.component.html -->
 * <button (click)="toggle()">Show / Hide Items</button>
 * <hr />
 * <div [\@listAnimation]="items.length">
 *   <div *ngFor="let item of items">
 *     {{ item }}
 *   </div>
 * </div>
 * ```
 *
 * Here is the component code:
 *
 * ```typescript
 * import {trigger, transition, style, animate, query, stagger} from '\@angular/animations';
 * \@Component({
 *   templateUrl: 'list.component.html',
 *   animations: [
 *     trigger('listAnimation', [
 *     ...
 *     ])
 *   ]
 * })
 * class ListComponent {
 *   items = [];
 *
 *   showItems() {
 *     this.items = [0,1,2,3,4];
 *   }
 *
 *   hideItems() {
 *     this.items = [];
 *   }
 *
 *   toggle() {
 *     this.items.length ? this.hideItems() : this.showItems();
 *    }
 *  }
 * ```
 *
 * Here is the animation trigger code:
 *
 * ```typescript
 * trigger('listAnimation', [
 *   transition('* => *', [ // each time the binding value changes
 *     query(':leave', [
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 0 }))
 *       ])
 *     ]),
 *     query(':enter', [
 *       style({ opacity: 0 }),
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 1 }))
 *       ])
 *     ])
 *   ])
 * ])
 * ```
 *
 * \@publicApi
 * @param {?} timings A delay value.
 * @param {?} animation One ore more animation steps.
 * @return {?} An object that encapsulates the stagger data.
 *
 */
function stagger(timings, animation) {
    return { type: 12 /* Stagger */, timings, animation };
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @param {?} cb
 * @return {?}
 */
function scheduleMicroTask(cb) {
    Promise.resolve(null).then(cb);
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/players/animation_player.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides programmatic control of a reusable animation sequence,
 * built using the `build()` method of `AnimationBuilder`. The `build()` method
 * returns a factory, whose `create()` method instantiates and initializes this interface.
 *
 * @see `AnimationBuilder`
 * @see `AnimationFactory`
 * @see `animate()`
 *
 * \@publicApi
 * @record
 */
function AnimationPlayer() { }
if (false) {
    /**
     * The parent of this player, if any.
     * @type {?}
     */
    AnimationPlayer.prototype.parentPlayer;
    /**
     * The total run time of the animation, in milliseconds.
     * @type {?}
     */
    AnimationPlayer.prototype.totalTime;
    /**
     * Provides a callback to invoke before the animation is destroyed.
     * @type {?|undefined}
     */
    AnimationPlayer.prototype.beforeDestroy;
    /**
     * \@internal
     * Internal
     * @type {?|undefined}
     */
    AnimationPlayer.prototype.triggerCallback;
    /**
     * \@internal
     * Internal
     * @type {?|undefined}
     */
    AnimationPlayer.prototype.disabled;
    /**
     * Provides a callback to invoke when the animation finishes.
     * @see `finish()`
     * @param {?} fn The callback function.
     * @return {?}
     */
    AnimationPlayer.prototype.onDone = function (fn) { };
    /**
     * Provides a callback to invoke when the animation starts.
     * @see `run()`
     * @param {?} fn The callback function.
     * @return {?}
     */
    AnimationPlayer.prototype.onStart = function (fn) { };
    /**
     * Provides a callback to invoke after the animation is destroyed.
     * @see `destroy()` / `beforeDestroy()`
     * @param {?} fn The callback function.
     * @return {?}
     */
    AnimationPlayer.prototype.onDestroy = function (fn) { };
    /**
     * Initializes the animation.
     * @return {?}
     */
    AnimationPlayer.prototype.init = function () { };
    /**
     * Reports whether the animation has started.
     * @return {?} True if the animation has started, false otherwise.
     */
    AnimationPlayer.prototype.hasStarted = function () { };
    /**
     * Runs the animation, invoking the `onStart()` callback.
     * @return {?}
     */
    AnimationPlayer.prototype.play = function () { };
    /**
     * Pauses the animation.
     * @return {?}
     */
    AnimationPlayer.prototype.pause = function () { };
    /**
     * Restarts the paused animation.
     * @return {?}
     */
    AnimationPlayer.prototype.restart = function () { };
    /**
     * Ends the animation, invoking the `onDone()` callback.
     * @return {?}
     */
    AnimationPlayer.prototype.finish = function () { };
    /**
     * Destroys the animation, after invoking the `beforeDestroy()` callback.
     * Calls the `onDestroy()` callback when destruction is completed.
     * @return {?}
     */
    AnimationPlayer.prototype.destroy = function () { };
    /**
     * Resets the animation to its initial state.
     * @return {?}
     */
    AnimationPlayer.prototype.reset = function () { };
    /**
     * Sets the position of the animation.
     * @param {?} position A 0-based offset into the duration, in milliseconds.
     * @return {?}
     */
    AnimationPlayer.prototype.setPosition = function (position) { };
    /**
     * Reports the current position of the animation.
     * @return {?} A 0-based offset into the duration, in milliseconds.
     */
    AnimationPlayer.prototype.getPosition = function () { };
}
/**
 * An empty programmatic controller for reusable animations.
 * Used internally when animations are disabled, to avoid
 * checking for the null case when an animation player is expected.
 *
 * @see `animate()`
 * @see `AnimationPlayer`
 * @see `GroupPlayer`
 *
 * \@publicApi
 */
class NoopAnimationPlayer {
    /**
     * @param {?=} duration
     * @param {?=} delay
     */
    constructor(duration = 0, delay = 0) {
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._started = false;
        this._destroyed = false;
        this._finished = false;
        this.parentPlayer = null;
        this.totalTime = duration + delay;
    }
    /**
     * @private
     * @return {?}
     */
    _onFinish() {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDoneFns = [];
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onStart(fn) {
        this._onStartFns.push(fn);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDone(fn) {
        this._onDoneFns.push(fn);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDestroy(fn) {
        this._onDestroyFns.push(fn);
    }
    /**
     * @return {?}
     */
    hasStarted() {
        return this._started;
    }
    /**
     * @return {?}
     */
    init() { }
    /**
     * @return {?}
     */
    play() {
        if (!this.hasStarted()) {
            this._onStart();
            this.triggerMicrotask();
        }
        this._started = true;
    }
    /**
     * \@internal
     * @return {?}
     */
    triggerMicrotask() {
        scheduleMicroTask((/**
         * @return {?}
         */
        () => this._onFinish()));
    }
    /**
     * @private
     * @return {?}
     */
    _onStart() {
        this._onStartFns.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        this._onStartFns = [];
    }
    /**
     * @return {?}
     */
    pause() { }
    /**
     * @return {?}
     */
    restart() { }
    /**
     * @return {?}
     */
    finish() {
        this._onFinish();
    }
    /**
     * @return {?}
     */
    destroy() {
        if (!this._destroyed) {
            this._destroyed = true;
            if (!this.hasStarted()) {
                this._onStart();
            }
            this.finish();
            this._onDestroyFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDestroyFns = [];
        }
    }
    /**
     * @return {?}
     */
    reset() { }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) { }
    /**
     * @return {?}
     */
    getPosition() {
        return 0;
    }
    /**
     * \@internal
     * @param {?} phaseName
     * @return {?}
     */
    triggerCallback(phaseName) {
        /** @type {?} */
        const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        methods.length = 0;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._onDoneFns;
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._onStartFns;
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._onDestroyFns;
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._started;
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._finished;
    /** @type {?} */
    NoopAnimationPlayer.prototype.parentPlayer;
    /** @type {?} */
    NoopAnimationPlayer.prototype.totalTime;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/players/animation_group_player.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A programmatic controller for a group of reusable animations.
 * Used internally to control animations.
 *
 * @see `AnimationPlayer`
 * @see `{\@link animations/group group()}`
 *
 */
class AnimationGroupPlayer {
    /**
     * @param {?} _players
     */
    constructor(_players) {
        this._onDoneFns = [];
        this._onStartFns = [];
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this._onDestroyFns = [];
        this.parentPlayer = null;
        this.totalTime = 0;
        this.players = _players;
        /** @type {?} */
        let doneCount = 0;
        /** @type {?} */
        let destroyCount = 0;
        /** @type {?} */
        let startCount = 0;
        /** @type {?} */
        const total = this.players.length;
        if (total == 0) {
            scheduleMicroTask((/**
             * @return {?}
             */
            () => this._onFinish()));
        }
        else {
            this.players.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => {
                player.onDone((/**
                 * @return {?}
                 */
                () => {
                    if (++doneCount == total) {
                        this._onFinish();
                    }
                }));
                player.onDestroy((/**
                 * @return {?}
                 */
                () => {
                    if (++destroyCount == total) {
                        this._onDestroy();
                    }
                }));
                player.onStart((/**
                 * @return {?}
                 */
                () => {
                    if (++startCount == total) {
                        this._onStart();
                    }
                }));
            }));
        }
        this.totalTime = this.players.reduce((/**
         * @param {?} time
         * @param {?} player
         * @return {?}
         */
        (time, player) => Math.max(time, player.totalTime)), 0);
    }
    /**
     * @private
     * @return {?}
     */
    _onFinish() {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDoneFns = [];
        }
    }
    /**
     * @return {?}
     */
    init() {
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => player.init()));
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onStart(fn) {
        this._onStartFns.push(fn);
    }
    /**
     * @private
     * @return {?}
     */
    _onStart() {
        if (!this.hasStarted()) {
            this._started = true;
            this._onStartFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onStartFns = [];
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDone(fn) {
        this._onDoneFns.push(fn);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDestroy(fn) {
        this._onDestroyFns.push(fn);
    }
    /**
     * @return {?}
     */
    hasStarted() {
        return this._started;
    }
    /**
     * @return {?}
     */
    play() {
        if (!this.parentPlayer) {
            this.init();
        }
        this._onStart();
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => player.play()));
    }
    /**
     * @return {?}
     */
    pause() {
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => player.pause()));
    }
    /**
     * @return {?}
     */
    restart() {
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => player.restart()));
    }
    /**
     * @return {?}
     */
    finish() {
        this._onFinish();
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => player.finish()));
    }
    /**
     * @return {?}
     */
    destroy() {
        this._onDestroy();
    }
    /**
     * @private
     * @return {?}
     */
    _onDestroy() {
        if (!this._destroyed) {
            this._destroyed = true;
            this._onFinish();
            this.players.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => player.destroy()));
            this._onDestroyFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDestroyFns = [];
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => player.reset()));
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    }
    /**
     * @param {?} p
     * @return {?}
     */
    setPosition(p) {
        /** @type {?} */
        const timeAtPosition = p * this.totalTime;
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            /** @type {?} */
            const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
            player.setPosition(position);
        }));
    }
    /**
     * @return {?}
     */
    getPosition() {
        /** @type {?} */
        let min = 0;
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            /** @type {?} */
            const p = player.getPosition();
            min = Math.min(p, min);
        }));
        return min;
    }
    /**
     * @return {?}
     */
    beforeDestroy() {
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            if (player.beforeDestroy) {
                player.beforeDestroy();
            }
        }));
    }
    /**
     * \@internal
     * @param {?} phaseName
     * @return {?}
     */
    triggerCallback(phaseName) {
        /** @type {?} */
        const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        methods.length = 0;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnimationGroupPlayer.prototype._onDoneFns;
    /**
     * @type {?}
     * @private
     */
    AnimationGroupPlayer.prototype._onStartFns;
    /**
     * @type {?}
     * @private
     */
    AnimationGroupPlayer.prototype._finished;
    /**
     * @type {?}
     * @private
     */
    AnimationGroupPlayer.prototype._started;
    /**
     * @type {?}
     * @private
     */
    AnimationGroupPlayer.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    AnimationGroupPlayer.prototype._onDestroyFns;
    /** @type {?} */
    AnimationGroupPlayer.prototype.parentPlayer;
    /** @type {?} */
    AnimationGroupPlayer.prototype.totalTime;
    /** @type {?} */
    AnimationGroupPlayer.prototype.players;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/private_export.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ɵPRE_STYLE = '!';

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AUTO_STYLE, AnimationBuilder, AnimationFactory, NoopAnimationPlayer, animate, animateChild, animation, group, keyframes, query, sequence, stagger, state, style, transition, trigger, useAnimation, AnimationGroupPlayer as ɵAnimationGroupPlayer, ɵPRE_STYLE };
//# sourceMappingURL=animations.js.map
