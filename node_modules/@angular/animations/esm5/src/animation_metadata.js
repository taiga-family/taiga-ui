/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Specifies automatic styling.
 *
 * @publicApi
 */
export var AUTO_STYLE = '*';
/**
 * Creates a named animation trigger, containing a  list of `state()`
 * and `transition()` entries to be evaluated when the expression
 * bound to the trigger changes.
 *
 * @param name An identifying string.
 * @param definitions  An animation definition object, containing an array of `state()`
 * and `transition()` declarations.
 *
 * @return An object that encapsulates the trigger data.
 *
 * @usageNotes
 * Define an animation trigger in the `animations` section of `@Component` metadata.
 * In the template, reference the trigger by name and bind it to a trigger expression that
 * evaluates to a defined animation state, using the following format:
 *
 * `[@triggerName]="expression"`
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
 * @Component({
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
 * <div [@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * ### Using an inline function
 * The `transition` animation method also supports reading an inline function which can decide
 * if its associated animation should be run.
 *
 * ```typescript
 * // this method is run each time the `myAnimationTrigger` trigger value changes.
 * function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:
 string]: any}): boolean {
 *   // notice that `element` and `params` are also available here
 *   return toState == 'yes-please-animate';
 * }
 *
 * @Component({
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
 * When true, the special animation control binding `@.disabled` binding prevents
 * all animations from rendering.
 * Place the  `@.disabled` binding on an element to disable
 * animations on the element itself, as well as any inner animation triggers
 * within the element.
 *
 * The following example shows how to use this feature:
 *
 * ```typescript
 * @Component({
 *   selector: 'my-component',
 *   template: `
 *     <div [@.disabled]="isDisabled">
 *       <div [@childAnimation]="exp"></div>
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
 * When `@.disabled` is true, it prevents the `@childAnimation` trigger from animating,
 * along with any inner animations.
 *
 * ### Disable animations application-wide
 * When an area of the template is set to have animations disabled,
 * **all** inner components have their animations disabled as well.
 * This means that you can disable all animations for an app
 * by placing a host binding set on `@.disabled` on the topmost Angular component.
 *
 * ```typescript
 * import {Component, HostBinding} from '@angular/core';
 *
 * @Component({
 *   selector: 'app-component',
 *   templateUrl: 'app.component.html',
 * })
 * class AppComponent {
 *   @HostBinding('@.disabled')
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
 * @publicApi
 */
export function trigger(name, definitions) {
    return { type: 7 /* Trigger */, name: name, definitions: definitions, options: {} };
}
/**
 * Defines an animation step that combines styling information with timing information.
 *
 * @param timings Sets `AnimateTimings` for the parent animation.
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
 * @param styles Sets AnimationStyles for the parent animation.
 * A function call to either `style()` or `keyframes()`
 * that returns a collection of CSS style entries to be applied to the parent animation.
 * When null, uses the styles from the destination state.
 * This is useful when describing an animation step that will complete an animation;
 * see "Animating to the final state" in `transitions()`.
 * @returns An object that encapsulates the animation step.
 *
 * @usageNotes
 * Call within an animation `sequence()`, `{@link animations/group group()}`, or
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
 * @publicApi
 */
export function animate(timings, styles) {
    if (styles === void 0) { styles = null; }
    return { type: 4 /* Animate */, styles: styles, timings: timings };
}
/**
 * @description Defines a list of animation steps to be run in parallel.
 *
 * @param steps An array of animation step objects.
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
 * @param options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return An object that encapsulates the group data.
 *
 * @usageNotes
 * Grouped animations are useful when a series of styles must be
 * animated at different starting times and closed off at different ending times.
 *
 * When called within a `sequence()` or a
 * `transition()` call, does not continue to the next
 * instruction until all of the inner animation steps have completed.
 *
 * @publicApi
 */
export function group(steps, options) {
    if (options === void 0) { options = null; }
    return { type: 3 /* Group */, steps: steps, options: options };
}
/**
 * Defines a list of animation steps to be run sequentially, one by one.
 *
 * @param steps An array of animation step objects.
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
 * @param options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return An object that encapsulates the sequence data.
 *
 * @usageNotes
 * When you pass an array of steps to a
 * `transition()` call, the steps run sequentially by default.
 * Compare this to the `{@link animations/group group()}` call, which runs animation steps in
 *parallel.
 *
 * When a sequence is used within a `{@link animations/group group()}` or a `transition()` call,
 * execution continues to the next instruction only after each of the inner animation
 * steps have completed.
 *
 * @publicApi
 **/
export function sequence(steps, options) {
    if (options === void 0) { options = null; }
    return { type: 2 /* Sequence */, steps: steps, options: options };
}
/**
 * Declares a key/value object containing CSS properties/styles that
 * can then be used for an animation `state`, within an animation `sequence`,
 * or as styling data for calls to `animate()` and `keyframes()`.
 *
 * @param tokens A set of CSS styles or HTML styles associated with an animation state.
 * The value can be any of the following:
 * - A key-value style pair associating a CSS property with a value.
 * - An array of key-value style pairs.
 * - An asterisk (*), to use auto-styling, where styles are derived from the element
 * being animated and applied to the animation when it starts.
 *
 * Auto-styling can be used to define a state that depends on layout or other
 * environmental factors.
 *
 * @return An object that encapsulates the style data.
 *
 * @usageNotes
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
 * @publicApi
 **/
export function style(tokens) {
    return { type: 6 /* Style */, styles: tokens, offset: null };
}
/**
 * Declares an animation state within a trigger attached to an element.
 *
 * @param name One or more names for the defined state in a comma-separated string.
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
 * @param styles A set of CSS styles associated with this state, created using the
 * `style()` function.
 * This set of styles persists on the element once the state has been reached.
 * @param options Parameters that can be passed to the state when it is invoked.
 * 0 or more key-value pairs.
 * @return An object that encapsulates the new state data.
 *
 * @usageNotes
 * Use the `trigger()` function to register states to an animation trigger.
 * Use the `transition()` function to animate between states.
 * When a state is active within a component, its associated styles persist on the element,
 * even when the animation ends.
 *
 * @publicApi
 **/
export function state(name, styles, options) {
    return { type: 0 /* State */, name: name, styles: styles, options: options };
}
/**
 * Defines a set of animation styles, associating each style with an optional `offset` value.
 *
 * @param steps A set of animation styles with optional offset data.
 * The optional `offset` value for a style specifies a percentage of the total animation
 * time at which that style is applied.
 * @returns An object that encapsulates the keyframes data.
 *
 * @usageNotes
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
 *```

 * @publicApi
 */
export function keyframes(steps) {
    return { type: 5 /* Keyframes */, steps: steps };
}
/**
 * Declares an animation transition as a sequence of animation steps to run when a given
 * condition is satisfied. The condition is a Boolean expression or function that compares
 * the previous and current animation states, and returns true if this transition should occur.
 * When the state criteria of a defined transition are met, the associated animation is
 * triggered.
 *
 * @param stateChangeExpr A Boolean expression or function that compares the previous and current
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
 * @param steps One or more animation objects, as returned by the `animate()` or
 * `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param options An options object that can contain a delay value for the start of the animation,
 * and additional developer-defined parameters. Provided values for additional parameters are used
 * as defaults, and override values can be passed to the caller on invocation.
 * @returns An object that encapsulates the transition data.
 *
 * @usageNotes
 * The template associated with a component binds an animation trigger to an element.
 *
 * ```HTML
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [@myAnimationTrigger]="myStatusExp">...</div>
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
 * Note that when you call the `sequence()` function within a `{@link animations/group group()}`
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
 * <div [@openClose]="open ? true : false">...</div>
 * // in the component metadata
 * trigger('openClose', [
 *   state('true', style({ height: '*' })),
 *   state('false', style({ height: '0px' })),
 *   transition('false <=> true', animate(500))
 * ])
 * ```
 *
 * @publicApi
 **/
export function transition(stateChangeExpr, steps, options) {
    if (options === void 0) { options = null; }
    return { type: 1 /* Transition */, expr: stateChangeExpr, animation: steps, options: options };
}
/**
 * Produces a reusable animation that can be invoked in another animation or sequence,
 * by calling the `useAnimation()` function.
 *
 * @param steps One or more animation objects, as returned by the `animate()`
 * or `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param options An options object that can contain a delay value for the start of the
 * animation, and additional developer-defined parameters.
 * Provided values for additional parameters are used as defaults,
 * and override values can be passed to the caller on invocation.
 * @returns An object that encapsulates the animation data.
 *
 * @usageNotes
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
 * @publicApi
 */
export function animation(steps, options) {
    if (options === void 0) { options = null; }
    return { type: 8 /* Reference */, animation: steps, options: options };
}
/**
 * Executes a queried inner animation element within an animation sequence.
 *
 * @param options An options object that can contain a delay value for the start of the
 * animation, and additional override values for developer-defined parameters.
 * @return An object that encapsulates the child animation data.
 *
 * @usageNotes
 * Each time an animation is triggered in Angular, the parent animation
 * has priority and any child animations are blocked. In order
 * for a child animation to run, the parent animation must query each of the elements
 * containing child animations, and run them using this function.
 *
 * Note that this feature is designed to be used with `query()` and it will only work
 * with animations that are assigned using the Angular animation library. CSS keyframes
 * and transitions are not handled by this API.
 *
 * @publicApi
 */
export function animateChild(options) {
    if (options === void 0) { options = null; }
    return { type: 9 /* AnimateChild */, options: options };
}
/**
 * Starts a reusable animation that is created using the `animation()` function.
 *
 * @param animation The reusable animation to start.
 * @param options An options object that can contain a delay value for the start of
 * the animation, and additional override values for developer-defined parameters.
 * @return An object that contains the animation parameters.
 *
 * @publicApi
 */
export function useAnimation(animation, options) {
    if (options === void 0) { options = null; }
    return { type: 10 /* AnimateRef */, animation: animation, options: options };
}
/**
 * Finds one or more inner elements within the current element that is
 * being animated within a sequence. Use with `animate()`.
 *
 * @param selector The element to query, or a set of elements that contain Angular-specific
 * characteristics, specified with one or more of the following tokens.
 *  - `query(":enter")` or `query(":leave")` : Query for newly inserted/removed elements.
 *  - `query(":animating")` : Query all currently animating elements.
 *  - `query("@triggerName")` : Query elements that contain an animation trigger.
 *  - `query("@*")` : Query all elements that contain an animation triggers.
 *  - `query(":self")` : Include the current element into the animation sequence.
 *
 * @param animation One or more animation steps to apply to the queried element or elements.
 * An array is treated as an animation sequence.
 * @param options An options object. Use the 'limit' field to limit the total number of
 * items to collect.
 * @return An object that encapsulates the query data.
 *
 * @usageNotes
 * Tokens can be merged into a combined query selector string. For example:
 *
 * ```typescript
 *  query(':self, .record:enter, .record:leave, @subTrigger', [...])
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
 * @Component({
 *   selector: 'inner',
 *   template: `
 *     <div [@queryAnimation]="exp">
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
 * @publicApi
 */
export function query(selector, animation, options) {
    if (options === void 0) { options = null; }
    return { type: 11 /* Query */, selector: selector, animation: animation, options: options };
}
/**
 * Use within an animation `query()` call to issue a timing gap after
 * each queried item is animated.
 *
 * @param timings A delay value.
 * @param animation One ore more animation steps.
 * @returns An object that encapsulates the stagger data.
 *
 * @usageNotes
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
 * <div [@listAnimation]="items.length">
 *   <div *ngFor="let item of items">
 *     {{ item }}
 *   </div>
 * </div>
 * ```
 *
 * Here is the component code:
 *
 * ```typescript
 * import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
 * @Component({
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
 * @publicApi
 */
export function stagger(timings, animation) {
    return { type: 12 /* Stagger */, timings: timings, animation: animation };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX21ldGFkYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9zcmMvYW5pbWF0aW9uX21ldGFkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQStKSDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztBQXlSOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1KRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsSUFBWSxFQUFFLFdBQWdDO0lBQ3BFLE9BQU8sRUFBQyxJQUFJLGlCQUErQixFQUFFLElBQUksTUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQztBQUMvRSxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlERztBQUNILE1BQU0sVUFBVSxPQUFPLENBQ25CLE9BQXNCLEVBQ3RCLE1BQ1E7SUFEUix1QkFBQSxFQUFBLGFBQ1E7SUFDVixPQUFPLEVBQUMsSUFBSSxpQkFBK0IsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLFNBQUEsRUFBQyxDQUFDO0FBQ2hFLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ0c7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUNqQixLQUEwQixFQUFFLE9BQXFDO0lBQXJDLHdCQUFBLEVBQUEsY0FBcUM7SUFDbkUsT0FBTyxFQUFDLElBQUksZUFBNkIsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBQyxDQUFDO0FBQzdELENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQ0k7QUFDSixNQUFNLFVBQVUsUUFBUSxDQUNwQixLQUEwQixFQUFFLE9BQXFDO0lBQXJDLHdCQUFBLEVBQUEsY0FBcUM7SUFDbkUsT0FBTyxFQUFDLElBQUksa0JBQWdDLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUMsQ0FBQztBQUNoRSxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0NJO0FBQ0osTUFBTSxVQUFVLEtBQUssQ0FBQyxNQUMyQztJQUMvRCxPQUFPLEVBQUMsSUFBSSxlQUE2QixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQzNFLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRCSTtBQUNKLE1BQU0sVUFBVSxLQUFLLENBQ2pCLElBQVksRUFBRSxNQUE4QixFQUM1QyxPQUF5QztJQUMzQyxPQUFPLEVBQUMsSUFBSSxlQUE2QixFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFDLENBQUM7QUFDcEUsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRDRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBK0I7SUFDdkQsT0FBTyxFQUFDLElBQUksbUJBQWlDLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUtJO0FBQ0osTUFBTSxVQUFVLFVBQVUsQ0FDdEIsZUFDK0YsRUFDL0YsS0FBNEMsRUFDNUMsT0FBcUM7SUFBckMsd0JBQUEsRUFBQSxjQUFxQztJQUN2QyxPQUFPLEVBQUMsSUFBSSxvQkFBa0MsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxTQUFBLEVBQUMsQ0FBQztBQUNwRyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNENHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FDckIsS0FBNEMsRUFDNUMsT0FBcUM7SUFBckMsd0JBQUEsRUFBQSxjQUFxQztJQUN2QyxPQUFPLEVBQUMsSUFBSSxtQkFBaUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sU0FBQSxFQUFDLENBQUM7QUFDNUUsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLE9BQXdDO0lBQXhDLHdCQUFBLEVBQUEsY0FBd0M7SUFFbkUsT0FBTyxFQUFDLElBQUksc0JBQW9DLEVBQUUsT0FBTyxTQUFBLEVBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FDeEIsU0FBcUMsRUFDckMsT0FBcUM7SUFBckMsd0JBQUEsRUFBQSxjQUFxQztJQUN2QyxPQUFPLEVBQUMsSUFBSSxxQkFBa0MsRUFBRSxTQUFTLFdBQUEsRUFBRSxPQUFPLFNBQUEsRUFBQyxDQUFDO0FBQ3RFLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzRkc7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUNqQixRQUFnQixFQUFFLFNBQWdELEVBQ2xFLE9BQTBDO0lBQTFDLHdCQUFBLEVBQUEsY0FBMEM7SUFDNUMsT0FBTyxFQUFDLElBQUksZ0JBQTZCLEVBQUUsUUFBUSxVQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUMsQ0FBQztBQUMzRSxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErRUc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLE9BQXNCLEVBQUUsU0FBZ0Q7SUFFOUYsT0FBTyxFQUFDLElBQUksa0JBQStCLEVBQUUsT0FBTyxTQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUMsQ0FBQztBQUNuRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBzZXQgb2YgQ1NTIHN0eWxlcyBmb3IgdXNlIGluIGFuIGFuaW1hdGlvbiBzdHlsZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSDJtVN0eWxlRGF0YSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXI7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbmltYXRpb24tc3RlcCB0aW1pbmcgcGFyYW1ldGVycyBmb3IgYW4gYW5pbWF0aW9uIHN0ZXAuXG4gKiBAc2VlIGBhbmltYXRlKClgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZGVjbGFyZSB0eXBlIEFuaW1hdGVUaW1pbmdzID0ge1xuICAvKipcbiAgICogVGhlIGZ1bGwgZHVyYXRpb24gb2YgYW4gYW5pbWF0aW9uIHN0ZXAuIEEgbnVtYmVyIGFuZCBvcHRpb25hbCB0aW1lIHVuaXQsXG4gICAqIHN1Y2ggYXMgXCIxc1wiIG9yIFwiMTBtc1wiIGZvciBvbmUgc2Vjb25kIGFuZCAxMCBtaWxsaXNlY29uZHMsIHJlc3BlY3RpdmVseS5cbiAgICogVGhlIGRlZmF1bHQgdW5pdCBpcyBtaWxsaXNlY29uZHMuXG4gICAqL1xuICBkdXJhdGlvbjogbnVtYmVyLFxuICAvKipcbiAgICogVGhlIGRlbGF5IGluIGFwcGx5aW5nIGFuIGFuaW1hdGlvbiBzdGVwLiBBIG51bWJlciBhbmQgb3B0aW9uYWwgdGltZSB1bml0LlxuICAgKiBUaGUgZGVmYXVsdCB1bml0IGlzIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIGRlbGF5OiBudW1iZXIsXG4gIC8qKlxuICAgKiBBbiBlYXNpbmcgc3R5bGUgdGhhdCBjb250cm9scyBob3cgYW4gYW5pbWF0aW9ucyBzdGVwIGFjY2VsZXJhdGVzXG4gICAqIGFuZCBkZWNlbGVyYXRlcyBkdXJpbmcgaXRzIHJ1biB0aW1lLiBBbiBlYXNpbmcgZnVuY3Rpb24gc3VjaCBhcyBgY3ViaWMtYmV6aWVyKClgLFxuICAgKiBvciBvbmUgb2YgdGhlIGZvbGxvd2luZyBjb25zdGFudHM6XG4gICAqIC0gYGVhc2UtaW5gXG4gICAqIC0gYGVhc2Utb3V0YFxuICAgKiAtIGBlYXNlLWluLWFuZC1vdXRgXG4gICAqL1xuICBlYXNpbmc6IHN0cmluZyB8IG51bGxcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIE9wdGlvbnMgdGhhdCBjb250cm9sIGFuaW1hdGlvbiBzdHlsaW5nIGFuZCB0aW1pbmcuXG4gKlxuICogVGhlIGZvbGxvd2luZyBhbmltYXRpb24gZnVuY3Rpb25zIGFjY2VwdCBgQW5pbWF0aW9uT3B0aW9uc2AgZGF0YTpcbiAqXG4gKiAtIGB0cmFuc2l0aW9uKClgXG4gKiAtIGBzZXF1ZW5jZSgpYFxuICogLSBge0BsaW5rIGFuaW1hdGlvbnMvZ3JvdXAgZ3JvdXAoKX1gXG4gKiAtIGBxdWVyeSgpYFxuICogLSBgYW5pbWF0aW9uKClgXG4gKiAtIGB1c2VBbmltYXRpb24oKWBcbiAqIC0gYGFuaW1hdGVDaGlsZCgpYFxuICpcbiAqIFByb2dyYW1tYXRpYyBhbmltYXRpb25zIGJ1aWx0IHVzaW5nIHRoZSBgQW5pbWF0aW9uQnVpbGRlcmAgc2VydmljZSBhbHNvXG4gKiBtYWtlIHVzZSBvZiBgQW5pbWF0aW9uT3B0aW9uc2AuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQW5pbWF0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXRzIGEgdGltZS1kZWxheSBmb3IgaW5pdGlhdGluZyBhbiBhbmltYXRpb24gYWN0aW9uLlxuICAgKiBBIG51bWJlciBhbmQgb3B0aW9uYWwgdGltZSB1bml0LCBzdWNoIGFzIFwiMXNcIiBvciBcIjEwbXNcIiBmb3Igb25lIHNlY29uZFxuICAgKiBhbmQgMTAgbWlsbGlzZWNvbmRzLCByZXNwZWN0aXZlbHkuVGhlIGRlZmF1bHQgdW5pdCBpcyBtaWxsaXNlY29uZHMuXG4gICAqIERlZmF1bHQgdmFsdWUgaXMgMCwgbWVhbmluZyBubyBkZWxheS5cbiAgICovXG4gIGRlbGF5PzogbnVtYmVyfHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2V0IG9mIGRldmVsb3Blci1kZWZpbmVkIHBhcmFtZXRlcnMgdGhhdCBtb2RpZnkgc3R5bGluZyBhbmQgdGltaW5nXG4gICAqIHdoZW4gYW4gYW5pbWF0aW9uIGFjdGlvbiBzdGFydHMuIEFuIGFycmF5IG9mIGtleS12YWx1ZSBwYWlycywgd2hlcmUgdGhlIHByb3ZpZGVkIHZhbHVlXG4gICAqIGlzIHVzZWQgYXMgYSBkZWZhdWx0LlxuICAgKi9cbiAgcGFyYW1zPzoge1tuYW1lOiBzdHJpbmddOiBhbnl9O1xufVxuXG4vKipcbiAqIEFkZHMgZHVyYXRpb24gb3B0aW9ucyB0byBjb250cm9sIGFuaW1hdGlvbiBzdHlsaW5nIGFuZCB0aW1pbmcgZm9yIGEgY2hpbGQgYW5pbWF0aW9uLlxuICpcbiAqIEBzZWUgYGFuaW1hdGVDaGlsZCgpYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFuaW1hdGVDaGlsZE9wdGlvbnMgZXh0ZW5kcyBBbmltYXRpb25PcHRpb25zIHtcbiAgZHVyYXRpb24/OiBudW1iZXJ8c3RyaW5nO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDb25zdGFudHMgZm9yIHRoZSBjYXRlZ29yaWVzIG9mIHBhcmFtZXRlcnMgdGhhdCBjYW4gYmUgZGVmaW5lZCBmb3IgYW5pbWF0aW9ucy5cbiAqXG4gKiBBIGNvcnJlc3BvbmRpbmcgZnVuY3Rpb24gZGVmaW5lcyBhIHNldCBvZiBwYXJhbWV0ZXJzIGZvciBlYWNoIGNhdGVnb3J5LCBhbmRcbiAqIGNvbGxlY3RzIHRoZW0gaW50byBhIGNvcnJlc3BvbmRpbmcgYEFuaW1hdGlvbk1ldGFkYXRhYCBvYmplY3QuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgZW51bSBBbmltYXRpb25NZXRhZGF0YVR5cGUge1xuICAvKipcbiAgICogQXNzb2NpYXRlcyBhIG5hbWVkIGFuaW1hdGlvbiBzdGF0ZSB3aXRoIGEgc2V0IG9mIENTUyBzdHlsZXMuXG4gICAqIFNlZSBgc3RhdGUoKWBcbiAgICovXG4gIFN0YXRlID0gMCxcbiAgLyoqXG4gICAqIERhdGEgZm9yIGEgdHJhbnNpdGlvbiBmcm9tIG9uZSBhbmltYXRpb24gc3RhdGUgdG8gYW5vdGhlci5cbiAgICogU2VlIGB0cmFuc2l0aW9uKClgXG4gICAqL1xuICBUcmFuc2l0aW9uID0gMSxcbiAgLyoqXG4gICAqIENvbnRhaW5zIGEgc2V0IG9mIGFuaW1hdGlvbiBzdGVwcy5cbiAgICogU2VlIGBzZXF1ZW5jZSgpYFxuICAgKi9cbiAgU2VxdWVuY2UgPSAyLFxuICAvKipcbiAgICogQ29udGFpbnMgYSBzZXQgb2YgYW5pbWF0aW9uIHN0ZXBzLlxuICAgKiBTZWUgYHtAbGluayBhbmltYXRpb25zL2dyb3VwIGdyb3VwKCl9YFxuICAgKi9cbiAgR3JvdXAgPSAzLFxuICAvKipcbiAgICogQ29udGFpbnMgYW4gYW5pbWF0aW9uIHN0ZXAuXG4gICAqIFNlZSBgYW5pbWF0ZSgpYFxuICAgKi9cbiAgQW5pbWF0ZSA9IDQsXG4gIC8qKlxuICAgKiBDb250YWlucyBhIHNldCBvZiBhbmltYXRpb24gc3RlcHMuXG4gICAqIFNlZSBga2V5ZnJhbWVzKClgXG4gICAqL1xuICBLZXlmcmFtZXMgPSA1LFxuICAvKipcbiAgICogQ29udGFpbnMgYSBzZXQgb2YgQ1NTIHByb3BlcnR5LXZhbHVlIHBhaXJzIGludG8gYSBuYW1lZCBzdHlsZS5cbiAgICogU2VlIGBzdHlsZSgpYFxuICAgKi9cbiAgU3R5bGUgPSA2LFxuICAvKipcbiAgICogQXNzb2NpYXRlcyBhbiBhbmltYXRpb24gd2l0aCBhbiBlbnRyeSB0cmlnZ2VyIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIGFuIGVsZW1lbnQuXG4gICAqIFNlZSBgdHJpZ2dlcigpYFxuICAgKi9cbiAgVHJpZ2dlciA9IDcsXG4gIC8qKlxuICAgKiBDb250YWlucyBhIHJlLXVzYWJsZSBhbmltYXRpb24uXG4gICAqIFNlZSBgYW5pbWF0aW9uKClgXG4gICAqL1xuICBSZWZlcmVuY2UgPSA4LFxuICAvKipcbiAgICogQ29udGFpbnMgZGF0YSB0byB1c2UgaW4gZXhlY3V0aW5nIGNoaWxkIGFuaW1hdGlvbnMgcmV0dXJuZWQgYnkgYSBxdWVyeS5cbiAgICogU2VlIGBhbmltYXRlQ2hpbGQoKWBcbiAgICovXG4gIEFuaW1hdGVDaGlsZCA9IDksXG4gIC8qKlxuICAgKiBDb250YWlucyBhbmltYXRpb24gcGFyYW1ldGVycyBmb3IgYSByZS11c2FibGUgYW5pbWF0aW9uLlxuICAgKiBTZWUgYHVzZUFuaW1hdGlvbigpYFxuICAgKi9cbiAgQW5pbWF0ZVJlZiA9IDEwLFxuICAvKipcbiAgICogQ29udGFpbnMgY2hpbGQtYW5pbWF0aW9uIHF1ZXJ5IGRhdGEuXG4gICAqIFNlZSBgcXVlcnkoKWBcbiAgICovXG4gIFF1ZXJ5ID0gMTEsXG4gIC8qKlxuICAgKiBDb250YWlucyBkYXRhIGZvciBzdGFnZ2VyaW5nIGFuIGFuaW1hdGlvbiBzZXF1ZW5jZS5cbiAgICogU2VlIGBzdGFnZ2VyKClgXG4gICAqL1xuICBTdGFnZ2VyID0gMTJcbn1cblxuLyoqXG4gKiBTcGVjaWZpZXMgYXV0b21hdGljIHN0eWxpbmcuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgQVVUT19TVFlMRSA9ICcqJztcblxuLyoqXG4gKiBCYXNlIGZvciBhbmltYXRpb24gZGF0YSBzdHJ1Y3R1cmVzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25NZXRhZGF0YSB7XG4gIHR5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZTtcbn1cblxuLyoqXG4gKiBDb250YWlucyBhbiBhbmltYXRpb24gdHJpZ2dlci4gSW5zdGFudGlhdGVkIGFuZCByZXR1cm5lZCBieSB0aGVcbiAqIGB0cmlnZ2VyKClgIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBUaGUgdHJpZ2dlciBuYW1lLCB1c2VkIHRvIGFzc29jaWF0ZSBpdCB3aXRoIGFuIGVsZW1lbnQuIFVuaXF1ZSB3aXRoaW4gdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIEFuIGFuaW1hdGlvbiBkZWZpbml0aW9uIG9iamVjdCwgY29udGFpbmluZyBhbiBhcnJheSBvZiBzdGF0ZSBhbmQgdHJhbnNpdGlvbiBkZWNsYXJhdGlvbnMuXG4gICAqL1xuICBkZWZpbml0aW9uczogQW5pbWF0aW9uTWV0YWRhdGFbXTtcbiAgLyoqXG4gICAqIEFuIG9wdGlvbnMgb2JqZWN0IGNvbnRhaW5pbmcgYSBkZWxheSBhbmRcbiAgICogZGV2ZWxvcGVyLWRlZmluZWQgcGFyYW1ldGVycyB0aGF0IHByb3ZpZGUgc3R5bGluZyBkZWZhdWx0cyBhbmRcbiAgICogY2FuIGJlIG92ZXJyaWRkZW4gb24gaW52b2NhdGlvbi4gRGVmYXVsdCBkZWxheSBpcyAwLlxuICAgKi9cbiAgb3B0aW9uczoge3BhcmFtcz86IHtbbmFtZTogc3RyaW5nXTogYW55fX18bnVsbDtcbn1cblxuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYW4gYW5pbWF0aW9uIHN0YXRlIGJ5IGFzc29jaWF0aW5nIGEgc3RhdGUgbmFtZSB3aXRoIGEgc2V0IG9mIENTUyBzdHlsZXMuXG4gKiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBgc3RhdGUoKWAgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvblN0YXRlTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBUaGUgc3RhdGUgbmFtZSwgdW5pcXVlIHdpdGhpbiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogIFRoZSBDU1Mgc3R5bGVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHN0YXRlLlxuICAgKi9cbiAgc3R5bGVzOiBBbmltYXRpb25TdHlsZU1ldGFkYXRhO1xuICAvKipcbiAgICogQW4gb3B0aW9ucyBvYmplY3QgY29udGFpbmluZ1xuICAgKiBkZXZlbG9wZXItZGVmaW5lZCBwYXJhbWV0ZXJzIHRoYXQgcHJvdmlkZSBzdHlsaW5nIGRlZmF1bHRzIGFuZFxuICAgKiBjYW4gYmUgb3ZlcnJpZGRlbiBvbiBpbnZvY2F0aW9uLlxuICAgKi9cbiAgb3B0aW9ucz86IHtwYXJhbXM6IHtbbmFtZTogc3RyaW5nXTogYW55fX07XG59XG5cbi8qKlxuICogRW5jYXBzdWxhdGVzIGFuIGFuaW1hdGlvbiB0cmFuc2l0aW9uLiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5IHRoZVxuICogYHRyYW5zaXRpb24oKWAgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvblRyYW5zaXRpb25NZXRhZGF0YSBleHRlbmRzIEFuaW1hdGlvbk1ldGFkYXRhIHtcbiAgLyoqXG4gICAqIEFuIGV4cHJlc3Npb24gdGhhdCBkZXNjcmliZXMgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqL1xuICBleHByOiBzdHJpbmd8XG4gICAgICAoKGZyb21TdGF0ZTogc3RyaW5nLCB0b1N0YXRlOiBzdHJpbmcsIGVsZW1lbnQ/OiBhbnksXG4gICAgICAgIHBhcmFtcz86IHtba2V5OiBzdHJpbmddOiBhbnl9KSA9PiBib29sZWFuKTtcbiAgLyoqXG4gICAqIE9uZSBvciBtb3JlIGFuaW1hdGlvbiBvYmplY3RzIHRvIHdoaWNoIHRoaXMgdHJhbnNpdGlvbiBhcHBsaWVzLlxuICAgKi9cbiAgYW5pbWF0aW9uOiBBbmltYXRpb25NZXRhZGF0YXxBbmltYXRpb25NZXRhZGF0YVtdO1xuICAvKipcbiAgICogQW4gb3B0aW9ucyBvYmplY3QgY29udGFpbmluZyBhIGRlbGF5IGFuZFxuICAgKiBkZXZlbG9wZXItZGVmaW5lZCBwYXJhbWV0ZXJzIHRoYXQgcHJvdmlkZSBzdHlsaW5nIGRlZmF1bHRzIGFuZFxuICAgKiBjYW4gYmUgb3ZlcnJpZGRlbiBvbiBpbnZvY2F0aW9uLiBEZWZhdWx0IGRlbGF5IGlzIDAuXG4gICAqL1xuICBvcHRpb25zOiBBbmltYXRpb25PcHRpb25zfG51bGw7XG59XG5cbi8qKlxuICogRW5jYXBzdWxhdGVzIGEgcmV1c2FibGUgYW5pbWF0aW9uLCB3aGljaCBpcyBhIGNvbGxlY3Rpb24gb2YgaW5kaXZpZHVhbCBhbmltYXRpb24gc3RlcHMuXG4gKiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBgYW5pbWF0aW9uKClgIGZ1bmN0aW9uLCBhbmRcbiAqIHBhc3NlZCB0byB0aGUgYHVzZUFuaW1hdGlvbigpYCBmdW5jdGlvbi5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XG4gIC8qKlxuICAgKiAgT25lIG9yIG1vcmUgYW5pbWF0aW9uIHN0ZXAgb2JqZWN0cy5cbiAgICovXG4gIGFuaW1hdGlvbjogQW5pbWF0aW9uTWV0YWRhdGF8QW5pbWF0aW9uTWV0YWRhdGFbXTtcbiAgLyoqXG4gICAqIEFuIG9wdGlvbnMgb2JqZWN0IGNvbnRhaW5pbmcgYSBkZWxheSBhbmRcbiAgICogZGV2ZWxvcGVyLWRlZmluZWQgcGFyYW1ldGVycyB0aGF0IHByb3ZpZGUgc3R5bGluZyBkZWZhdWx0cyBhbmRcbiAgICogY2FuIGJlIG92ZXJyaWRkZW4gb24gaW52b2NhdGlvbi4gRGVmYXVsdCBkZWxheSBpcyAwLlxuICAgKi9cbiAgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9uc3xudWxsO1xufVxuXG4vKipcbiAqIEVuY2Fwc3VsYXRlcyBhbiBhbmltYXRpb24gcXVlcnkuIEluc3RhbnRpYXRlZCBhbmQgcmV0dXJuZWQgYnlcbiAqIHRoZSBgcXVlcnkoKWAgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvblF1ZXJ5TWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XG4gIC8qKlxuICAgKiAgVGhlIENTUyBzZWxlY3RvciBmb3IgdGhpcyBxdWVyeS5cbiAgICovXG4gIHNlbGVjdG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPbmUgb3IgbW9yZSBhbmltYXRpb24gc3RlcCBvYmplY3RzLlxuICAgKi9cbiAgYW5pbWF0aW9uOiBBbmltYXRpb25NZXRhZGF0YXxBbmltYXRpb25NZXRhZGF0YVtdO1xuICAvKipcbiAgICogQSBxdWVyeSBvcHRpb25zIG9iamVjdC5cbiAgICovXG4gIG9wdGlvbnM6IEFuaW1hdGlvblF1ZXJ5T3B0aW9uc3xudWxsO1xufVxuXG4vKipcbiAqIEVuY2Fwc3VsYXRlcyBhIGtleWZyYW1lcyBzZXF1ZW5jZS4gSW5zdGFudGlhdGVkIGFuZCByZXR1cm5lZCBieVxuICogdGhlIGBrZXlmcmFtZXMoKWAgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbktleWZyYW1lc1NlcXVlbmNlTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBhbmltYXRpb24gc3R5bGVzLlxuICAgKi9cbiAgc3RlcHM6IEFuaW1hdGlvblN0eWxlTWV0YWRhdGFbXTtcbn1cblxuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYW4gYW5pbWF0aW9uIHN0eWxlLiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5XG4gKiB0aGUgYHN0eWxlKClgIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25TdHlsZU1ldGFkYXRhIGV4dGVuZHMgQW5pbWF0aW9uTWV0YWRhdGEge1xuICAvKipcbiAgICogQSBzZXQgb2YgQ1NTIHN0eWxlIHByb3BlcnRpZXMuXG4gICAqL1xuICBzdHlsZXM6ICcqJ3x7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyfXxBcnJheTx7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyfXwnKic+O1xuICAvKipcbiAgICogQSBwZXJjZW50YWdlIG9mIHRoZSB0b3RhbCBhbmltYXRlIHRpbWUgYXQgd2hpY2ggdGhlIHN0eWxlIGlzIHRvIGJlIGFwcGxpZWQuXG4gICAqL1xuICBvZmZzZXQ6IG51bWJlcnxudWxsO1xufVxuXG4vKipcbiAqIEVuY2Fwc3VsYXRlcyBhbiBhbmltYXRpb24gc3RlcC4gSW5zdGFudGlhdGVkIGFuZCByZXR1cm5lZCBieVxuICogdGhlIGBhbmltYXRlKClgIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25BbmltYXRlTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBUaGUgdGltaW5nIGRhdGEgZm9yIHRoZSBzdGVwLlxuICAgKi9cbiAgdGltaW5nczogc3RyaW5nfG51bWJlcnxBbmltYXRlVGltaW5ncztcbiAgLyoqXG4gICAqIEEgc2V0IG9mIHN0eWxlcyB1c2VkIGluIHRoZSBzdGVwLlxuICAgKi9cbiAgc3R5bGVzOiBBbmltYXRpb25TdHlsZU1ldGFkYXRhfEFuaW1hdGlvbktleWZyYW1lc1NlcXVlbmNlTWV0YWRhdGF8bnVsbDtcbn1cblxuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYSBjaGlsZCBhbmltYXRpb24sIHRoYXQgY2FuIGJlIHJ1biBleHBsaWNpdGx5IHdoZW4gdGhlIHBhcmVudCBpcyBydW4uXG4gKiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBgYW5pbWF0ZUNoaWxkYCBmdW5jdGlvbi5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uQW5pbWF0ZUNoaWxkTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBBbiBvcHRpb25zIG9iamVjdCBjb250YWluaW5nIGEgZGVsYXkgYW5kXG4gICAqIGRldmVsb3Blci1kZWZpbmVkIHBhcmFtZXRlcnMgdGhhdCBwcm92aWRlIHN0eWxpbmcgZGVmYXVsdHMgYW5kXG4gICAqIGNhbiBiZSBvdmVycmlkZGVuIG9uIGludm9jYXRpb24uIERlZmF1bHQgZGVsYXkgaXMgMC5cbiAgICovXG4gIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnN8bnVsbDtcbn1cblxuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYSByZXVzYWJsZSBhbmltYXRpb24uXG4gKiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBgdXNlQW5pbWF0aW9uKClgIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25BbmltYXRlUmVmTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBBbiBhbmltYXRpb24gcmVmZXJlbmNlIG9iamVjdC5cbiAgICovXG4gIGFuaW1hdGlvbjogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGE7XG4gIC8qKlxuICAgKiBBbiBvcHRpb25zIG9iamVjdCBjb250YWluaW5nIGEgZGVsYXkgYW5kXG4gICAqIGRldmVsb3Blci1kZWZpbmVkIHBhcmFtZXRlcnMgdGhhdCBwcm92aWRlIHN0eWxpbmcgZGVmYXVsdHMgYW5kXG4gICAqIGNhbiBiZSBvdmVycmlkZGVuIG9uIGludm9jYXRpb24uIERlZmF1bHQgZGVsYXkgaXMgMC5cbiAgICovXG4gIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnN8bnVsbDtcbn1cblxuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYW4gYW5pbWF0aW9uIHNlcXVlbmNlLlxuICogSW5zdGFudGlhdGVkIGFuZCByZXR1cm5lZCBieSB0aGUgYHNlcXVlbmNlKClgIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25TZXF1ZW5jZU1ldGFkYXRhIGV4dGVuZHMgQW5pbWF0aW9uTWV0YWRhdGEge1xuICAvKipcbiAgICogIEFuIGFycmF5IG9mIGFuaW1hdGlvbiBzdGVwIG9iamVjdHMuXG4gICAqL1xuICBzdGVwczogQW5pbWF0aW9uTWV0YWRhdGFbXTtcbiAgLyoqXG4gICAqIEFuIG9wdGlvbnMgb2JqZWN0IGNvbnRhaW5pbmcgYSBkZWxheSBhbmRcbiAgICogZGV2ZWxvcGVyLWRlZmluZWQgcGFyYW1ldGVycyB0aGF0IHByb3ZpZGUgc3R5bGluZyBkZWZhdWx0cyBhbmRcbiAgICogY2FuIGJlIG92ZXJyaWRkZW4gb24gaW52b2NhdGlvbi4gRGVmYXVsdCBkZWxheSBpcyAwLlxuICAgKi9cbiAgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9uc3xudWxsO1xufVxuXG4vKipcbiAqIEVuY2Fwc3VsYXRlcyBhbiBhbmltYXRpb24gZ3JvdXAuXG4gKiBJbnN0YW50aWF0ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBge0BsaW5rIGFuaW1hdGlvbnMvZ3JvdXAgZ3JvdXAoKX1gIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25Hcm91cE1ldGFkYXRhIGV4dGVuZHMgQW5pbWF0aW9uTWV0YWRhdGEge1xuICAvKipcbiAgICogT25lIG9yIG1vcmUgYW5pbWF0aW9uIG9yIHN0eWxlIHN0ZXBzIHRoYXQgZm9ybSB0aGlzIGdyb3VwLlxuICAgKi9cbiAgc3RlcHM6IEFuaW1hdGlvbk1ldGFkYXRhW107XG4gIC8qKlxuICAgKiBBbiBvcHRpb25zIG9iamVjdCBjb250YWluaW5nIGEgZGVsYXkgYW5kXG4gICAqIGRldmVsb3Blci1kZWZpbmVkIHBhcmFtZXRlcnMgdGhhdCBwcm92aWRlIHN0eWxpbmcgZGVmYXVsdHMgYW5kXG4gICAqIGNhbiBiZSBvdmVycmlkZGVuIG9uIGludm9jYXRpb24uIERlZmF1bHQgZGVsYXkgaXMgMC5cbiAgICovXG4gIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnN8bnVsbDtcbn1cblxuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYW5pbWF0aW9uIHF1ZXJ5IG9wdGlvbnMuXG4gKiBQYXNzZWQgdG8gdGhlIGBxdWVyeSgpYCBmdW5jdGlvbi5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBbmltYXRpb25RdWVyeU9wdGlvbnMgZXh0ZW5kcyBBbmltYXRpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhpcyBxdWVyeSBpcyBvcHRpb25hbCwgZmFsc2UgaWYgaXQgaXMgcmVxdWlyZWQuIERlZmF1bHQgaXMgZmFsc2UuXG4gICAqIEEgcmVxdWlyZWQgcXVlcnkgdGhyb3dzIGFuIGVycm9yIGlmIG5vIGVsZW1lbnRzIGFyZSByZXRyaWV2ZWQgd2hlblxuICAgKiB0aGUgcXVlcnkgaXMgZXhlY3V0ZWQuIEFuIG9wdGlvbmFsIHF1ZXJ5IGRvZXMgbm90LlxuICAgKlxuICAgKi9cbiAgb3B0aW9uYWw/OiBib29sZWFuO1xuICAvKipcbiAgICogQSBtYXhpbXVtIHRvdGFsIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVybiBmcm9tIHRoZSBxdWVyeS5cbiAgICogSWYgbmVnYXRpdmUsIHJlc3VsdHMgYXJlIGxpbWl0ZWQgZnJvbSB0aGUgZW5kIG9mIHRoZSBxdWVyeSBsaXN0IHRvd2FyZHMgdGhlIGJlZ2lubmluZy5cbiAgICogQnkgZGVmYXVsdCwgcmVzdWx0cyBhcmUgbm90IGxpbWl0ZWQuXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgcGFyYW1ldGVycyBmb3Igc3RhZ2dlcmluZyB0aGUgc3RhcnQgdGltZXMgb2YgYSBzZXQgb2YgYW5pbWF0aW9uIHN0ZXBzLlxuICogSW5zdGFudGlhdGVkIGFuZCByZXR1cm5lZCBieSB0aGUgYHN0YWdnZXIoKWAgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICoqL1xuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25TdGFnZ2VyTWV0YWRhdGEgZXh0ZW5kcyBBbmltYXRpb25NZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBUaGUgdGltaW5nIGRhdGEgZm9yIHRoZSBzdGVwcy5cbiAgICovXG4gIHRpbWluZ3M6IHN0cmluZ3xudW1iZXI7XG4gIC8qKlxuICAgKiBPbmUgb3IgbW9yZSBhbmltYXRpb24gc3RlcHMuXG4gICAqL1xuICBhbmltYXRpb246IEFuaW1hdGlvbk1ldGFkYXRhfEFuaW1hdGlvbk1ldGFkYXRhW107XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5hbWVkIGFuaW1hdGlvbiB0cmlnZ2VyLCBjb250YWluaW5nIGEgIGxpc3Qgb2YgYHN0YXRlKClgXG4gKiBhbmQgYHRyYW5zaXRpb24oKWAgZW50cmllcyB0byBiZSBldmFsdWF0ZWQgd2hlbiB0aGUgZXhwcmVzc2lvblxuICogYm91bmQgdG8gdGhlIHRyaWdnZXIgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0gbmFtZSBBbiBpZGVudGlmeWluZyBzdHJpbmcuXG4gKiBAcGFyYW0gZGVmaW5pdGlvbnMgIEFuIGFuaW1hdGlvbiBkZWZpbml0aW9uIG9iamVjdCwgY29udGFpbmluZyBhbiBhcnJheSBvZiBgc3RhdGUoKWBcbiAqIGFuZCBgdHJhbnNpdGlvbigpYCBkZWNsYXJhdGlvbnMuXG4gKlxuICogQHJldHVybiBBbiBvYmplY3QgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIHRyaWdnZXIgZGF0YS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogRGVmaW5lIGFuIGFuaW1hdGlvbiB0cmlnZ2VyIGluIHRoZSBgYW5pbWF0aW9uc2Agc2VjdGlvbiBvZiBgQENvbXBvbmVudGAgbWV0YWRhdGEuXG4gKiBJbiB0aGUgdGVtcGxhdGUsIHJlZmVyZW5jZSB0aGUgdHJpZ2dlciBieSBuYW1lIGFuZCBiaW5kIGl0IHRvIGEgdHJpZ2dlciBleHByZXNzaW9uIHRoYXRcbiAqIGV2YWx1YXRlcyB0byBhIGRlZmluZWQgYW5pbWF0aW9uIHN0YXRlLCB1c2luZyB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiAqXG4gKiBgW0B0cmlnZ2VyTmFtZV09XCJleHByZXNzaW9uXCJgXG4gKlxuICogQW5pbWF0aW9uIHRyaWdnZXIgYmluZGluZ3MgY29udmVydCBhbGwgdmFsdWVzIHRvIHN0cmluZ3MsIGFuZCB0aGVuIG1hdGNoIHRoZVxuICogcHJldmlvdXMgYW5kIGN1cnJlbnQgdmFsdWVzIGFnYWluc3QgYW55IGxpbmtlZCB0cmFuc2l0aW9ucy5cbiAqIEJvb2xlYW5zIGNhbiBiZSBzcGVjaWZpZWQgYXMgYDFgIG9yIGB0cnVlYCBhbmQgYDBgIG9yIGBmYWxzZWAuXG4gKlxuICogIyMjIFVzYWdlIEV4YW1wbGVcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgY3JlYXRlcyBhbiBhbmltYXRpb24gdHJpZ2dlciByZWZlcmVuY2UgYmFzZWQgb24gdGhlIHByb3ZpZGVkXG4gKiBuYW1lIHZhbHVlLlxuICogVGhlIHByb3ZpZGVkIGFuaW1hdGlvbiB2YWx1ZSBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheSBjb25zaXN0aW5nIG9mIHN0YXRlIGFuZFxuICogdHJhbnNpdGlvbiBkZWNsYXJhdGlvbnMuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiBcIm15LWNvbXBvbmVudFwiLFxuICogICB0ZW1wbGF0ZVVybDogXCJteS1jb21wb25lbnQtdHBsLmh0bWxcIixcbiAqICAgYW5pbWF0aW9uczogW1xuICogICAgIHRyaWdnZXIoXCJteUFuaW1hdGlvblRyaWdnZXJcIiwgW1xuICogICAgICAgc3RhdGUoLi4uKSxcbiAqICAgICAgIHN0YXRlKC4uLiksXG4gKiAgICAgICB0cmFuc2l0aW9uKC4uLiksXG4gKiAgICAgICB0cmFuc2l0aW9uKC4uLilcbiAqICAgICBdKVxuICogICBdXG4gKiB9KVxuICogY2xhc3MgTXlDb21wb25lbnQge1xuICogICBteVN0YXR1c0V4cCA9IFwic29tZXRoaW5nXCI7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBUaGUgdGVtcGxhdGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29tcG9uZW50IG1ha2VzIHVzZSBvZiB0aGUgZGVmaW5lZCB0cmlnZ2VyXG4gKiBieSBiaW5kaW5nIHRvIGFuIGVsZW1lbnQgd2l0aGluIGl0cyB0ZW1wbGF0ZSBjb2RlLlxuICpcbiAqIGBgYGh0bWxcbiAqIDwhLS0gc29tZXdoZXJlIGluc2lkZSBvZiBteS1jb21wb25lbnQtdHBsLmh0bWwgLS0+XG4gKiA8ZGl2IFtAbXlBbmltYXRpb25UcmlnZ2VyXT1cIm15U3RhdHVzRXhwXCI+Li4uPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiAjIyMgVXNpbmcgYW4gaW5saW5lIGZ1bmN0aW9uXG4gKiBUaGUgYHRyYW5zaXRpb25gIGFuaW1hdGlvbiBtZXRob2QgYWxzbyBzdXBwb3J0cyByZWFkaW5nIGFuIGlubGluZSBmdW5jdGlvbiB3aGljaCBjYW4gZGVjaWRlXG4gKiBpZiBpdHMgYXNzb2NpYXRlZCBhbmltYXRpb24gc2hvdWxkIGJlIHJ1bi5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAvLyB0aGlzIG1ldGhvZCBpcyBydW4gZWFjaCB0aW1lIHRoZSBgbXlBbmltYXRpb25UcmlnZ2VyYCB0cmlnZ2VyIHZhbHVlIGNoYW5nZXMuXG4gKiBmdW5jdGlvbiBteUlubGluZU1hdGNoZXJGbihmcm9tU3RhdGU6IHN0cmluZywgdG9TdGF0ZTogc3RyaW5nLCBlbGVtZW50OiBhbnksIHBhcmFtczoge1trZXk6XG4gc3RyaW5nXTogYW55fSk6IGJvb2xlYW4ge1xuICogICAvLyBub3RpY2UgdGhhdCBgZWxlbWVudGAgYW5kIGBwYXJhbXNgIGFyZSBhbHNvIGF2YWlsYWJsZSBoZXJlXG4gKiAgIHJldHVybiB0b1N0YXRlID09ICd5ZXMtcGxlYXNlLWFuaW1hdGUnO1xuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ215LWNvbXBvbmVudCcsXG4gKiAgIHRlbXBsYXRlVXJsOiAnbXktY29tcG9uZW50LXRwbC5odG1sJyxcbiAqICAgYW5pbWF0aW9uczogW1xuICogICAgIHRyaWdnZXIoJ215QW5pbWF0aW9uVHJpZ2dlcicsIFtcbiAqICAgICAgIHRyYW5zaXRpb24obXlJbmxpbmVNYXRjaGVyRm4sIFtcbiAqICAgICAgICAgLy8gdGhlIGFuaW1hdGlvbiBzZXF1ZW5jZSBjb2RlXG4gKiAgICAgICBdKSxcbiAqICAgICBdKVxuICogICBdXG4gKiB9KVxuICogY2xhc3MgTXlDb21wb25lbnQge1xuICogICBteVN0YXR1c0V4cCA9IFwieWVzLXBsZWFzZS1hbmltYXRlXCI7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiAjIyMgRGlzYWJsaW5nIEFuaW1hdGlvbnNcbiAqIFdoZW4gdHJ1ZSwgdGhlIHNwZWNpYWwgYW5pbWF0aW9uIGNvbnRyb2wgYmluZGluZyBgQC5kaXNhYmxlZGAgYmluZGluZyBwcmV2ZW50c1xuICogYWxsIGFuaW1hdGlvbnMgZnJvbSByZW5kZXJpbmcuXG4gKiBQbGFjZSB0aGUgIGBALmRpc2FibGVkYCBiaW5kaW5nIG9uIGFuIGVsZW1lbnQgdG8gZGlzYWJsZVxuICogYW5pbWF0aW9ucyBvbiB0aGUgZWxlbWVudCBpdHNlbGYsIGFzIHdlbGwgYXMgYW55IGlubmVyIGFuaW1hdGlvbiB0cmlnZ2Vyc1xuICogd2l0aGluIHRoZSBlbGVtZW50LlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzaG93cyBob3cgdG8gdXNlIHRoaXMgZmVhdHVyZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxkaXYgW0AuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiPlxuICogICAgICAgPGRpdiBbQGNoaWxkQW5pbWF0aW9uXT1cImV4cFwiPjwvZGl2PlxuICogICAgIDwvZGl2PlxuICogICBgLFxuICogICBhbmltYXRpb25zOiBbXG4gKiAgICAgdHJpZ2dlcihcImNoaWxkQW5pbWF0aW9uXCIsIFtcbiAqICAgICAgIC8vIC4uLlxuICogICAgIF0pXG4gKiAgIF1cbiAqIH0pXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XG4gKiAgIGlzRGlzYWJsZWQgPSB0cnVlO1xuICogICBleHAgPSAnLi4uJztcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW4gYEAuZGlzYWJsZWRgIGlzIHRydWUsIGl0IHByZXZlbnRzIHRoZSBgQGNoaWxkQW5pbWF0aW9uYCB0cmlnZ2VyIGZyb20gYW5pbWF0aW5nLFxuICogYWxvbmcgd2l0aCBhbnkgaW5uZXIgYW5pbWF0aW9ucy5cbiAqXG4gKiAjIyMgRGlzYWJsZSBhbmltYXRpb25zIGFwcGxpY2F0aW9uLXdpZGVcbiAqIFdoZW4gYW4gYXJlYSBvZiB0aGUgdGVtcGxhdGUgaXMgc2V0IHRvIGhhdmUgYW5pbWF0aW9ucyBkaXNhYmxlZCxcbiAqICoqYWxsKiogaW5uZXIgY29tcG9uZW50cyBoYXZlIHRoZWlyIGFuaW1hdGlvbnMgZGlzYWJsZWQgYXMgd2VsbC5cbiAqIFRoaXMgbWVhbnMgdGhhdCB5b3UgY2FuIGRpc2FibGUgYWxsIGFuaW1hdGlvbnMgZm9yIGFuIGFwcFxuICogYnkgcGxhY2luZyBhIGhvc3QgYmluZGluZyBzZXQgb24gYEAuZGlzYWJsZWRgIG9uIHRoZSB0b3Btb3N0IEFuZ3VsYXIgY29tcG9uZW50LlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwLWNvbXBvbmVudCcsXG4gKiAgIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAqIH0pXG4gKiBjbGFzcyBBcHBDb21wb25lbnQge1xuICogICBASG9zdEJpbmRpbmcoJ0AuZGlzYWJsZWQnKVxuICogICBwdWJsaWMgYW5pbWF0aW9uc0Rpc2FibGVkID0gdHJ1ZTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqICMjIyBPdmVycmlkaW5nIGRpc2FibGVtZW50IG9mIGlubmVyIGFuaW1hdGlvbnNcbiAqIERlc3BpdGUgaW5uZXIgYW5pbWF0aW9ucyBiZWluZyBkaXNhYmxlZCwgYSBwYXJlbnQgYW5pbWF0aW9uIGNhbiBgcXVlcnkoKWBcbiAqIGZvciBpbm5lciBlbGVtZW50cyBsb2NhdGVkIGluIGRpc2FibGVkIGFyZWFzIG9mIHRoZSB0ZW1wbGF0ZSBhbmQgc3RpbGwgYW5pbWF0ZVxuICogdGhlbSBpZiBuZWVkZWQuIFRoaXMgaXMgYWxzbyB0aGUgY2FzZSBmb3Igd2hlbiBhIHN1YiBhbmltYXRpb24gaXNcbiAqIHF1ZXJpZWQgYnkgYSBwYXJlbnQgYW5kIHRoZW4gbGF0ZXIgYW5pbWF0ZWQgdXNpbmcgYGFuaW1hdGVDaGlsZCgpYC5cbiAqXG4gKiAjIyMgRGV0ZWN0aW5nIHdoZW4gYW4gYW5pbWF0aW9uIGlzIGRpc2FibGVkXG4gKiBJZiBhIHJlZ2lvbiBvZiB0aGUgRE9NIChvciB0aGUgZW50aXJlIGFwcGxpY2F0aW9uKSBoYXMgaXRzIGFuaW1hdGlvbnMgZGlzYWJsZWQsIHRoZSBhbmltYXRpb25cbiAqIHRyaWdnZXIgY2FsbGJhY2tzIHN0aWxsIGZpcmUsIGJ1dCBmb3IgemVybyBzZWNvbmRzLiBXaGVuIHRoZSBjYWxsYmFjayBmaXJlcywgaXQgcHJvdmlkZXNcbiAqIGFuIGluc3RhbmNlIG9mIGFuIGBBbmltYXRpb25FdmVudGAuIElmIGFuaW1hdGlvbnMgYXJlIGRpc2FibGVkLFxuICogdGhlIGAuZGlzYWJsZWRgIGZsYWcgb24gdGhlIGV2ZW50IGlzIHRydWUuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlcihuYW1lOiBzdHJpbmcsIGRlZmluaXRpb25zOiBBbmltYXRpb25NZXRhZGF0YVtdKTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHt0eXBlOiBBbmltYXRpb25NZXRhZGF0YVR5cGUuVHJpZ2dlciwgbmFtZSwgZGVmaW5pdGlvbnMsIG9wdGlvbnM6IHt9fTtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIGFuIGFuaW1hdGlvbiBzdGVwIHRoYXQgY29tYmluZXMgc3R5bGluZyBpbmZvcm1hdGlvbiB3aXRoIHRpbWluZyBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcGFyYW0gdGltaW5ncyBTZXRzIGBBbmltYXRlVGltaW5nc2AgZm9yIHRoZSBwYXJlbnQgYW5pbWF0aW9uLlxuICogQSBzdHJpbmcgaW4gdGhlIGZvcm1hdCBcImR1cmF0aW9uIFtkZWxheV0gW2Vhc2luZ11cIi5cbiAqICAtIER1cmF0aW9uIGFuZCBkZWxheSBhcmUgZXhwcmVzc2VkIGFzIGEgbnVtYmVyIGFuZCBvcHRpb25hbCB0aW1lIHVuaXQsXG4gKiBzdWNoIGFzIFwiMXNcIiBvciBcIjEwbXNcIiBmb3Igb25lIHNlY29uZCBhbmQgMTAgbWlsbGlzZWNvbmRzLCByZXNwZWN0aXZlbHkuXG4gKiBUaGUgZGVmYXVsdCB1bml0IGlzIG1pbGxpc2Vjb25kcy5cbiAqICAtIFRoZSBlYXNpbmcgdmFsdWUgY29udHJvbHMgaG93IHRoZSBhbmltYXRpb24gYWNjZWxlcmF0ZXMgYW5kIGRlY2VsZXJhdGVzXG4gKiBkdXJpbmcgaXRzIHJ1bnRpbWUuIFZhbHVlIGlzIG9uZSBvZiAgYGVhc2VgLCBgZWFzZS1pbmAsIGBlYXNlLW91dGAsXG4gKiBgZWFzZS1pbi1vdXRgLCBvciBhIGBjdWJpYy1iZXppZXIoKWAgZnVuY3Rpb24gY2FsbC5cbiAqIElmIG5vdCBzdXBwbGllZCwgbm8gZWFzaW5nIGlzIGFwcGxpZWQuXG4gKlxuICogRm9yIGV4YW1wbGUsIHRoZSBzdHJpbmcgXCIxcyAxMDBtcyBlYXNlLW91dFwiIHNwZWNpZmllcyBhIGR1cmF0aW9uIG9mXG4gKiAxMDAwIG1pbGxpc2Vjb25kcywgYW5kIGRlbGF5IG9mIDEwMCBtcywgYW5kIHRoZSBcImVhc2Utb3V0XCIgZWFzaW5nIHN0eWxlLFxuICogd2hpY2ggZGVjZWxlcmF0ZXMgbmVhciB0aGUgZW5kIG9mIHRoZSBkdXJhdGlvbi5cbiAqIEBwYXJhbSBzdHlsZXMgU2V0cyBBbmltYXRpb25TdHlsZXMgZm9yIHRoZSBwYXJlbnQgYW5pbWF0aW9uLlxuICogQSBmdW5jdGlvbiBjYWxsIHRvIGVpdGhlciBgc3R5bGUoKWAgb3IgYGtleWZyYW1lcygpYFxuICogdGhhdCByZXR1cm5zIGEgY29sbGVjdGlvbiBvZiBDU1Mgc3R5bGUgZW50cmllcyB0byBiZSBhcHBsaWVkIHRvIHRoZSBwYXJlbnQgYW5pbWF0aW9uLlxuICogV2hlbiBudWxsLCB1c2VzIHRoZSBzdHlsZXMgZnJvbSB0aGUgZGVzdGluYXRpb24gc3RhdGUuXG4gKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGRlc2NyaWJpbmcgYW4gYW5pbWF0aW9uIHN0ZXAgdGhhdCB3aWxsIGNvbXBsZXRlIGFuIGFuaW1hdGlvbjtcbiAqIHNlZSBcIkFuaW1hdGluZyB0byB0aGUgZmluYWwgc3RhdGVcIiBpbiBgdHJhbnNpdGlvbnMoKWAuXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIGFuaW1hdGlvbiBzdGVwLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBDYWxsIHdpdGhpbiBhbiBhbmltYXRpb24gYHNlcXVlbmNlKClgLCBge0BsaW5rIGFuaW1hdGlvbnMvZ3JvdXAgZ3JvdXAoKX1gLCBvclxuICogYHRyYW5zaXRpb24oKWAgY2FsbCB0byBzcGVjaWZ5IGFuIGFuaW1hdGlvbiBzdGVwXG4gKiB0aGF0IGFwcGxpZXMgZ2l2ZW4gc3R5bGUgZGF0YSB0byB0aGUgcGFyZW50IGFuaW1hdGlvbiBmb3IgYSBnaXZlbiBhbW91bnQgb2YgdGltZS5cbiAqXG4gKiAjIyMgU3ludGF4IEV4YW1wbGVzXG4gKiAqKlRpbWluZyBleGFtcGxlcyoqXG4gKlxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlcyBzaG93IHZhcmlvdXMgYHRpbWluZ3NgIHNwZWNpZmljYXRpb25zLlxuICogLSBgYW5pbWF0ZSg1MDApYCA6IER1cmF0aW9uIGlzIDUwMCBtaWxsaXNlY29uZHMuXG4gKiAtIGBhbmltYXRlKFwiMXNcIilgIDogRHVyYXRpb24gaXMgMTAwMCBtaWxsaXNlY29uZHMuXG4gKiAtIGBhbmltYXRlKFwiMTAwbXMgMC41c1wiKWAgOiBEdXJhdGlvbiBpcyAxMDAgbWlsbGlzZWNvbmRzLCBkZWxheSBpcyA1MDAgbWlsbGlzZWNvbmRzLlxuICogLSBgYW5pbWF0ZShcIjVzIGVhc2UtaW5cIilgIDogRHVyYXRpb24gaXMgNTAwMCBtaWxsaXNlY29uZHMsIGVhc2luZyBpbi5cbiAqIC0gYGFuaW1hdGUoXCI1cyAxMG1zIGN1YmljLWJlemllciguMTcsLjY3LC44OCwuMSlcIilgIDogRHVyYXRpb24gaXMgNTAwMCBtaWxsaXNlY29uZHMsIGRlbGF5IGlzIDEwXG4gKiBtaWxsaXNlY29uZHMsIGVhc2luZyBhY2NvcmRpbmcgdG8gYSBiZXppZXIgY3VydmUuXG4gKlxuICogKipTdHlsZSBleGFtcGxlcyoqXG4gKlxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGNhbGxzIGBzdHlsZSgpYCB0byBzZXQgYSBzaW5nbGUgQ1NTIHN0eWxlLlxuICogYGBgdHlwZXNjcmlwdFxuICogYW5pbWF0ZSg1MDAsIHN0eWxlKHsgYmFja2dyb3VuZDogXCJyZWRcIiB9KSlcbiAqIGBgYFxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGNhbGxzIGBrZXlmcmFtZXMoKWAgdG8gc2V0IGEgQ1NTIHN0eWxlXG4gKiB0byBkaWZmZXJlbnQgdmFsdWVzIGZvciBzdWNjZXNzaXZlIGtleWZyYW1lcy5cbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGFuaW1hdGUoNTAwLCBrZXlmcmFtZXMoXG4gKiAgW1xuICogICBzdHlsZSh7IGJhY2tncm91bmQ6IFwiYmx1ZVwiIH0pKSxcbiAqICAgc3R5bGUoeyBiYWNrZ3JvdW5kOiBcInJlZFwiIH0pKVxuICogIF0pXG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlKFxuICAgIHRpbWluZ3M6IHN0cmluZ3xudW1iZXIsXG4gICAgc3R5bGVzOiBBbmltYXRpb25TdHlsZU1ldGFkYXRhfEFuaW1hdGlvbktleWZyYW1lc1NlcXVlbmNlTWV0YWRhdGF8bnVsbCA9XG4gICAgICAgIG51bGwpOiBBbmltYXRpb25BbmltYXRlTWV0YWRhdGEge1xuICByZXR1cm4ge3R5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5BbmltYXRlLCBzdHlsZXMsIHRpbWluZ3N9O1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIGEgbGlzdCBvZiBhbmltYXRpb24gc3RlcHMgdG8gYmUgcnVuIGluIHBhcmFsbGVsLlxuICpcbiAqIEBwYXJhbSBzdGVwcyBBbiBhcnJheSBvZiBhbmltYXRpb24gc3RlcCBvYmplY3RzLlxuICogLSBXaGVuIHN0ZXBzIGFyZSBkZWZpbmVkIGJ5IGBzdHlsZSgpYCBvciBgYW5pbWF0ZSgpYFxuICogZnVuY3Rpb24gY2FsbHMsIGVhY2ggY2FsbCB3aXRoaW4gdGhlIGdyb3VwIGlzIGV4ZWN1dGVkIGluc3RhbnRseS5cbiAqIC0gVG8gc3BlY2lmeSBvZmZzZXQgc3R5bGVzIHRvIGJlIGFwcGxpZWQgYXQgYSBsYXRlciB0aW1lLCBkZWZpbmUgc3RlcHMgd2l0aFxuICogYGtleWZyYW1lcygpYCwgb3IgdXNlIGBhbmltYXRlKClgIGNhbGxzIHdpdGggYSBkZWxheSB2YWx1ZS5cbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGdyb3VwKFtcbiAqICAgYW5pbWF0ZShcIjFzXCIsIHN0eWxlKHsgYmFja2dyb3VuZDogXCJibGFja1wiIH0pKSxcbiAqICAgYW5pbWF0ZShcIjJzXCIsIHN0eWxlKHsgY29sb3I6IFwid2hpdGVcIiB9KSlcbiAqIF0pXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvcHRpb25zIG9iamVjdCBjb250YWluaW5nIGEgZGVsYXkgYW5kXG4gKiBkZXZlbG9wZXItZGVmaW5lZCBwYXJhbWV0ZXJzIHRoYXQgcHJvdmlkZSBzdHlsaW5nIGRlZmF1bHRzIGFuZFxuICogY2FuIGJlIG92ZXJyaWRkZW4gb24gaW52b2NhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIEFuIG9iamVjdCB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgZ3JvdXAgZGF0YS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogR3JvdXBlZCBhbmltYXRpb25zIGFyZSB1c2VmdWwgd2hlbiBhIHNlcmllcyBvZiBzdHlsZXMgbXVzdCBiZVxuICogYW5pbWF0ZWQgYXQgZGlmZmVyZW50IHN0YXJ0aW5nIHRpbWVzIGFuZCBjbG9zZWQgb2ZmIGF0IGRpZmZlcmVudCBlbmRpbmcgdGltZXMuXG4gKlxuICogV2hlbiBjYWxsZWQgd2l0aGluIGEgYHNlcXVlbmNlKClgIG9yIGFcbiAqIGB0cmFuc2l0aW9uKClgIGNhbGwsIGRvZXMgbm90IGNvbnRpbnVlIHRvIHRoZSBuZXh0XG4gKiBpbnN0cnVjdGlvbiB1bnRpbCBhbGwgb2YgdGhlIGlubmVyIGFuaW1hdGlvbiBzdGVwcyBoYXZlIGNvbXBsZXRlZC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBncm91cChcbiAgICBzdGVwczogQW5pbWF0aW9uTWV0YWRhdGFbXSwgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9uc3xudWxsID0gbnVsbCk6IEFuaW1hdGlvbkdyb3VwTWV0YWRhdGEge1xuICByZXR1cm4ge3R5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5Hcm91cCwgc3RlcHMsIG9wdGlvbnN9O1xufVxuXG4vKipcbiAqIERlZmluZXMgYSBsaXN0IG9mIGFuaW1hdGlvbiBzdGVwcyB0byBiZSBydW4gc2VxdWVudGlhbGx5LCBvbmUgYnkgb25lLlxuICpcbiAqIEBwYXJhbSBzdGVwcyBBbiBhcnJheSBvZiBhbmltYXRpb24gc3RlcCBvYmplY3RzLlxuICogLSBTdGVwcyBkZWZpbmVkIGJ5IGBzdHlsZSgpYCBjYWxscyBhcHBseSB0aGUgc3R5bGluZyBkYXRhIGltbWVkaWF0ZWx5LlxuICogLSBTdGVwcyBkZWZpbmVkIGJ5IGBhbmltYXRlKClgIGNhbGxzIGFwcGx5IHRoZSBzdHlsaW5nIGRhdGEgb3ZlciB0aW1lXG4gKiAgIGFzIHNwZWNpZmllZCBieSB0aGUgdGltaW5nIGRhdGEuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogc2VxdWVuY2UoW1xuICogICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gKiAgIGFuaW1hdGUoXCIxc1wiLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpXG4gKiBdKVxuICogYGBgXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgQW4gb3B0aW9ucyBvYmplY3QgY29udGFpbmluZyBhIGRlbGF5IGFuZFxuICogZGV2ZWxvcGVyLWRlZmluZWQgcGFyYW1ldGVycyB0aGF0IHByb3ZpZGUgc3R5bGluZyBkZWZhdWx0cyBhbmRcbiAqIGNhbiBiZSBvdmVycmlkZGVuIG9uIGludm9jYXRpb24uXG4gKlxuICogQHJldHVybiBBbiBvYmplY3QgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIHNlcXVlbmNlIGRhdGEuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIFdoZW4geW91IHBhc3MgYW4gYXJyYXkgb2Ygc3RlcHMgdG8gYVxuICogYHRyYW5zaXRpb24oKWAgY2FsbCwgdGhlIHN0ZXBzIHJ1biBzZXF1ZW50aWFsbHkgYnkgZGVmYXVsdC5cbiAqIENvbXBhcmUgdGhpcyB0byB0aGUgYHtAbGluayBhbmltYXRpb25zL2dyb3VwIGdyb3VwKCl9YCBjYWxsLCB3aGljaCBydW5zIGFuaW1hdGlvbiBzdGVwcyBpblxuICpwYXJhbGxlbC5cbiAqXG4gKiBXaGVuIGEgc2VxdWVuY2UgaXMgdXNlZCB3aXRoaW4gYSBge0BsaW5rIGFuaW1hdGlvbnMvZ3JvdXAgZ3JvdXAoKX1gIG9yIGEgYHRyYW5zaXRpb24oKWAgY2FsbCxcbiAqIGV4ZWN1dGlvbiBjb250aW51ZXMgdG8gdGhlIG5leHQgaW5zdHJ1Y3Rpb24gb25seSBhZnRlciBlYWNoIG9mIHRoZSBpbm5lciBhbmltYXRpb25cbiAqIHN0ZXBzIGhhdmUgY29tcGxldGVkLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShcbiAgICBzdGVwczogQW5pbWF0aW9uTWV0YWRhdGFbXSwgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9uc3xudWxsID0gbnVsbCk6IEFuaW1hdGlvblNlcXVlbmNlTWV0YWRhdGEge1xuICByZXR1cm4ge3R5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5TZXF1ZW5jZSwgc3RlcHMsIG9wdGlvbnN9O1xufVxuXG4vKipcbiAqIERlY2xhcmVzIGEga2V5L3ZhbHVlIG9iamVjdCBjb250YWluaW5nIENTUyBwcm9wZXJ0aWVzL3N0eWxlcyB0aGF0XG4gKiBjYW4gdGhlbiBiZSB1c2VkIGZvciBhbiBhbmltYXRpb24gYHN0YXRlYCwgd2l0aGluIGFuIGFuaW1hdGlvbiBgc2VxdWVuY2VgLFxuICogb3IgYXMgc3R5bGluZyBkYXRhIGZvciBjYWxscyB0byBgYW5pbWF0ZSgpYCBhbmQgYGtleWZyYW1lcygpYC5cbiAqXG4gKiBAcGFyYW0gdG9rZW5zIEEgc2V0IG9mIENTUyBzdHlsZXMgb3IgSFRNTCBzdHlsZXMgYXNzb2NpYXRlZCB3aXRoIGFuIGFuaW1hdGlvbiBzdGF0ZS5cbiAqIFRoZSB2YWx1ZSBjYW4gYmUgYW55IG9mIHRoZSBmb2xsb3dpbmc6XG4gKiAtIEEga2V5LXZhbHVlIHN0eWxlIHBhaXIgYXNzb2NpYXRpbmcgYSBDU1MgcHJvcGVydHkgd2l0aCBhIHZhbHVlLlxuICogLSBBbiBhcnJheSBvZiBrZXktdmFsdWUgc3R5bGUgcGFpcnMuXG4gKiAtIEFuIGFzdGVyaXNrICgqKSwgdG8gdXNlIGF1dG8tc3R5bGluZywgd2hlcmUgc3R5bGVzIGFyZSBkZXJpdmVkIGZyb20gdGhlIGVsZW1lbnRcbiAqIGJlaW5nIGFuaW1hdGVkIGFuZCBhcHBsaWVkIHRvIHRoZSBhbmltYXRpb24gd2hlbiBpdCBzdGFydHMuXG4gKlxuICogQXV0by1zdHlsaW5nIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIHN0YXRlIHRoYXQgZGVwZW5kcyBvbiBsYXlvdXQgb3Igb3RoZXJcbiAqIGVudmlyb25tZW50YWwgZmFjdG9ycy5cbiAqXG4gKiBAcmV0dXJuIEFuIG9iamVjdCB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgc3R5bGUgZGF0YS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogVGhlIGZvbGxvd2luZyBleGFtcGxlcyBjcmVhdGUgYW5pbWF0aW9uIHN0eWxlcyB0aGF0IGNvbGxlY3QgYSBzZXQgb2ZcbiAqIENTUyBwcm9wZXJ0eSB2YWx1ZXM6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogLy8gc3RyaW5nIHZhbHVlcyBmb3IgQ1NTIHByb3BlcnRpZXNcbiAqIHN0eWxlKHsgYmFja2dyb3VuZDogXCJyZWRcIiwgY29sb3I6IFwiYmx1ZVwiIH0pXG4gKlxuICogLy8gbnVtZXJpY2FsIHBpeGVsIHZhbHVlc1xuICogc3R5bGUoeyB3aWR0aDogMTAwLCBoZWlnaHQ6IDAgfSlcbiAqIGBgYFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSB1c2VzIGF1dG8tc3R5bGluZyB0byBhbGxvdyBhIGNvbXBvbmVudCB0byBhbmltYXRlIGZyb21cbiAqIGEgaGVpZ2h0IG9mIDAgdXAgdG8gdGhlIGhlaWdodCBvZiB0aGUgcGFyZW50IGVsZW1lbnQ6XG4gKlxuICogYGBgXG4gKiBzdHlsZSh7IGhlaWdodDogMCB9KSxcbiAqIGFuaW1hdGUoXCIxc1wiLCBzdHlsZSh7IGhlaWdodDogXCIqXCIgfSkpXG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc3R5bGUodG9rZW5zOiAnKid8e1trZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcn18XG4gICAgICAgICAgICAgICAgICAgICAgQXJyYXk8JyonfHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXJ9Pik6IEFuaW1hdGlvblN0eWxlTWV0YWRhdGEge1xuICByZXR1cm4ge3R5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5TdHlsZSwgc3R5bGVzOiB0b2tlbnMsIG9mZnNldDogbnVsbH07XG59XG5cbi8qKlxuICogRGVjbGFyZXMgYW4gYW5pbWF0aW9uIHN0YXRlIHdpdGhpbiBhIHRyaWdnZXIgYXR0YWNoZWQgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gbmFtZSBPbmUgb3IgbW9yZSBuYW1lcyBmb3IgdGhlIGRlZmluZWQgc3RhdGUgaW4gYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxuICogVGhlIGZvbGxvd2luZyByZXNlcnZlZCBzdGF0ZSBuYW1lcyBjYW4gYmUgc3VwcGxpZWQgdG8gZGVmaW5lIGEgc3R5bGUgZm9yIHNwZWNpZmljIHVzZVxuICogY2FzZXM6XG4gKlxuICogLSBgdm9pZGAgWW91IGNhbiBhc3NvY2lhdGUgc3R5bGVzIHdpdGggdGhpcyBuYW1lIHRvIGJlIHVzZWQgd2hlblxuICogdGhlIGVsZW1lbnQgaXMgZGV0YWNoZWQgZnJvbSB0aGUgYXBwbGljYXRpb24uIEZvciBleGFtcGxlLCB3aGVuIGFuIGBuZ0lmYCBldmFsdWF0ZXNcbiAqIHRvIGZhbHNlLCB0aGUgc3RhdGUgb2YgdGhlIGFzc29jaWF0ZWQgZWxlbWVudCBpcyB2b2lkLlxuICogIC0gYCpgIChhc3RlcmlzaykgSW5kaWNhdGVzIHRoZSBkZWZhdWx0IHN0YXRlLiBZb3UgY2FuIGFzc29jaWF0ZSBzdHlsZXMgd2l0aCB0aGlzIG5hbWVcbiAqIHRvIGJlIHVzZWQgYXMgdGhlIGZhbGxiYWNrIHdoZW4gdGhlIHN0YXRlIHRoYXQgaXMgYmVpbmcgYW5pbWF0ZWQgaXMgbm90IGRlY2xhcmVkXG4gKiB3aXRoaW4gdGhlIHRyaWdnZXIuXG4gKlxuICogQHBhcmFtIHN0eWxlcyBBIHNldCBvZiBDU1Mgc3R5bGVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHN0YXRlLCBjcmVhdGVkIHVzaW5nIHRoZVxuICogYHN0eWxlKClgIGZ1bmN0aW9uLlxuICogVGhpcyBzZXQgb2Ygc3R5bGVzIHBlcnNpc3RzIG9uIHRoZSBlbGVtZW50IG9uY2UgdGhlIHN0YXRlIGhhcyBiZWVuIHJlYWNoZWQuXG4gKiBAcGFyYW0gb3B0aW9ucyBQYXJhbWV0ZXJzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgc3RhdGUgd2hlbiBpdCBpcyBpbnZva2VkLlxuICogMCBvciBtb3JlIGtleS12YWx1ZSBwYWlycy5cbiAqIEByZXR1cm4gQW4gb2JqZWN0IHRoYXQgZW5jYXBzdWxhdGVzIHRoZSBuZXcgc3RhdGUgZGF0YS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogVXNlIHRoZSBgdHJpZ2dlcigpYCBmdW5jdGlvbiB0byByZWdpc3RlciBzdGF0ZXMgdG8gYW4gYW5pbWF0aW9uIHRyaWdnZXIuXG4gKiBVc2UgdGhlIGB0cmFuc2l0aW9uKClgIGZ1bmN0aW9uIHRvIGFuaW1hdGUgYmV0d2VlbiBzdGF0ZXMuXG4gKiBXaGVuIGEgc3RhdGUgaXMgYWN0aXZlIHdpdGhpbiBhIGNvbXBvbmVudCwgaXRzIGFzc29jaWF0ZWQgc3R5bGVzIHBlcnNpc3Qgb24gdGhlIGVsZW1lbnQsXG4gKiBldmVuIHdoZW4gdGhlIGFuaW1hdGlvbiBlbmRzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZShcbiAgICBuYW1lOiBzdHJpbmcsIHN0eWxlczogQW5pbWF0aW9uU3R5bGVNZXRhZGF0YSxcbiAgICBvcHRpb25zPzoge3BhcmFtczoge1tuYW1lOiBzdHJpbmddOiBhbnl9fSk6IEFuaW1hdGlvblN0YXRlTWV0YWRhdGEge1xuICByZXR1cm4ge3R5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5TdGF0ZSwgbmFtZSwgc3R5bGVzLCBvcHRpb25zfTtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIGEgc2V0IG9mIGFuaW1hdGlvbiBzdHlsZXMsIGFzc29jaWF0aW5nIGVhY2ggc3R5bGUgd2l0aCBhbiBvcHRpb25hbCBgb2Zmc2V0YCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gc3RlcHMgQSBzZXQgb2YgYW5pbWF0aW9uIHN0eWxlcyB3aXRoIG9wdGlvbmFsIG9mZnNldCBkYXRhLlxuICogVGhlIG9wdGlvbmFsIGBvZmZzZXRgIHZhbHVlIGZvciBhIHN0eWxlIHNwZWNpZmllcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIGFuaW1hdGlvblxuICogdGltZSBhdCB3aGljaCB0aGF0IHN0eWxlIGlzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIGtleWZyYW1lcyBkYXRhLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBVc2Ugd2l0aCB0aGUgYGFuaW1hdGUoKWAgY2FsbC4gSW5zdGVhZCBvZiBhcHBseWluZyBhbmltYXRpb25zXG4gKiBmcm9tIHRoZSBjdXJyZW50IHN0YXRlXG4gKiB0byB0aGUgZGVzdGluYXRpb24gc3RhdGUsIGtleWZyYW1lcyBkZXNjcmliZSBob3cgZWFjaCBzdHlsZSBlbnRyeSBpcyBhcHBsaWVkIGFuZCBhdCB3aGF0IHBvaW50XG4gKiB3aXRoaW4gdGhlIGFuaW1hdGlvbiBhcmMuXG4gKiBDb21wYXJlIFtDU1MgS2V5ZnJhbWUgQW5pbWF0aW9uc10oaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3MvY3NzM19hbmltYXRpb25zLmFzcCkuXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLCB0aGUgb2Zmc2V0IHZhbHVlcyBkZXNjcmliZVxuICogd2hlbiBlYWNoIGBiYWNrZ3JvdW5kQ29sb3JgIHZhbHVlIGlzIGFwcGxpZWQuIFRoZSBjb2xvciBpcyByZWQgYXQgdGhlIHN0YXJ0LCBhbmQgY2hhbmdlcyB0b1xuICogYmx1ZSB3aGVuIDIwJSBvZiB0aGUgdG90YWwgdGltZSBoYXMgZWxhcHNlZC5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAvLyB0aGUgcHJvdmlkZWQgb2Zmc2V0IHZhbHVlc1xuICogYW5pbWF0ZShcIjVzXCIsIGtleWZyYW1lcyhbXG4gKiAgIHN0eWxlKHsgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLCBvZmZzZXQ6IDAgfSksXG4gKiAgIHN0eWxlKHsgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIiwgb2Zmc2V0OiAwLjIgfSksXG4gKiAgIHN0eWxlKHsgYmFja2dyb3VuZENvbG9yOiBcIm9yYW5nZVwiLCBvZmZzZXQ6IDAuMyB9KSxcbiAqICAgc3R5bGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgb2Zmc2V0OiAxIH0pXG4gKiBdKSlcbiAqIGBgYFxuICpcbiAqIElmIHRoZXJlIGFyZSBubyBgb2Zmc2V0YCB2YWx1ZXMgc3BlY2lmaWVkIGluIHRoZSBzdHlsZSBlbnRyaWVzLCB0aGUgb2Zmc2V0c1xuICogYXJlIGNhbGN1bGF0ZWQgYXV0b21hdGljYWxseS5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBhbmltYXRlKFwiNXNcIiwga2V5ZnJhbWVzKFtcbiAqICAgc3R5bGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIgfSkgLy8gb2Zmc2V0ID0gMFxuICogICBzdHlsZSh7IGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIgfSkgLy8gb2Zmc2V0ID0gMC4zM1xuICogICBzdHlsZSh7IGJhY2tncm91bmRDb2xvcjogXCJvcmFuZ2VcIiB9KSAvLyBvZmZzZXQgPSAwLjY2XG4gKiAgIHN0eWxlKHsgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgfSkgLy8gb2Zmc2V0ID0gMVxuICogXSkpXG4gKmBgYFxuXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBrZXlmcmFtZXMoc3RlcHM6IEFuaW1hdGlvblN0eWxlTWV0YWRhdGFbXSk6IEFuaW1hdGlvbktleWZyYW1lc1NlcXVlbmNlTWV0YWRhdGEge1xuICByZXR1cm4ge3R5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5LZXlmcmFtZXMsIHN0ZXBzfTtcbn1cblxuLyoqXG4gKiBEZWNsYXJlcyBhbiBhbmltYXRpb24gdHJhbnNpdGlvbiBhcyBhIHNlcXVlbmNlIG9mIGFuaW1hdGlvbiBzdGVwcyB0byBydW4gd2hlbiBhIGdpdmVuXG4gKiBjb25kaXRpb24gaXMgc2F0aXNmaWVkLiBUaGUgY29uZGl0aW9uIGlzIGEgQm9vbGVhbiBleHByZXNzaW9uIG9yIGZ1bmN0aW9uIHRoYXQgY29tcGFyZXNcbiAqIHRoZSBwcmV2aW91cyBhbmQgY3VycmVudCBhbmltYXRpb24gc3RhdGVzLCBhbmQgcmV0dXJucyB0cnVlIGlmIHRoaXMgdHJhbnNpdGlvbiBzaG91bGQgb2NjdXIuXG4gKiBXaGVuIHRoZSBzdGF0ZSBjcml0ZXJpYSBvZiBhIGRlZmluZWQgdHJhbnNpdGlvbiBhcmUgbWV0LCB0aGUgYXNzb2NpYXRlZCBhbmltYXRpb24gaXNcbiAqIHRyaWdnZXJlZC5cbiAqXG4gKiBAcGFyYW0gc3RhdGVDaGFuZ2VFeHByIEEgQm9vbGVhbiBleHByZXNzaW9uIG9yIGZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgdGhlIHByZXZpb3VzIGFuZCBjdXJyZW50XG4gKiBhbmltYXRpb24gc3RhdGVzLCBhbmQgcmV0dXJucyB0cnVlIGlmIHRoaXMgdHJhbnNpdGlvbiBzaG91bGQgb2NjdXIuIE5vdGUgdGhhdCAgXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIlxuICogbWF0Y2ggMSBhbmQgMCwgcmVzcGVjdGl2ZWx5LiBBbiBleHByZXNzaW9uIGlzIGV2YWx1YXRlZCBlYWNoIHRpbWUgYSBzdGF0ZSBjaGFuZ2Ugb2NjdXJzIGluIHRoZVxuICogYW5pbWF0aW9uIHRyaWdnZXIgZWxlbWVudC5cbiAqIFRoZSBhbmltYXRpb24gc3RlcHMgcnVuIHdoZW4gdGhlIGV4cHJlc3Npb24gZXZhbHVhdGVzIHRvIHRydWUuXG4gKlxuICogLSBBIHN0YXRlLWNoYW5nZSBzdHJpbmcgdGFrZXMgdGhlIGZvcm0gXCJzdGF0ZTEgPT4gc3RhdGUyXCIsIHdoZXJlIGVhY2ggc2lkZSBpcyBhIGRlZmluZWQgYW5pbWF0aW9uXG4gKiBzdGF0ZSwgb3IgYW4gYXN0ZXJpeCAoKikgdG8gcmVmZXIgdG8gYSBkeW5hbWljIHN0YXJ0IG9yIGVuZCBzdGF0ZS5cbiAqICAgLSBUaGUgZXhwcmVzc2lvbiBzdHJpbmcgY2FuIGNvbnRhaW4gbXVsdGlwbGUgY29tbWEtc2VwYXJhdGVkIHN0YXRlbWVudHM7XG4gKiBmb3IgZXhhbXBsZSBcInN0YXRlMSA9PiBzdGF0ZTIsIHN0YXRlMyA9PiBzdGF0ZTRcIi5cbiAqICAgLSBTcGVjaWFsIHZhbHVlcyBgOmVudGVyYCBhbmQgYDpsZWF2ZWAgaW5pdGlhdGUgYSB0cmFuc2l0aW9uIG9uIHRoZSBlbnRyeSBhbmQgZXhpdCBzdGF0ZXMsXG4gKiBlcXVpdmFsZW50IHRvICBcInZvaWQgPT4gKlwiICBhbmQgXCIqID0+IHZvaWRcIi5cbiAqICAgLSBTcGVjaWFsIHZhbHVlcyBgOmluY3JlbWVudGAgYW5kIGA6ZGVjcmVtZW50YCBpbml0aWF0ZSBhIHRyYW5zaXRpb24gd2hlbiBhIG51bWVyaWMgdmFsdWUgaGFzXG4gKiBpbmNyZWFzZWQgb3IgZGVjcmVhc2VkIGluIHZhbHVlLlxuICogLSBBIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIGVhY2ggdGltZSBhIHN0YXRlIGNoYW5nZSBvY2N1cnMgaW4gdGhlIGFuaW1hdGlvbiB0cmlnZ2VyIGVsZW1lbnQuXG4gKiBUaGUgYW5pbWF0aW9uIHN0ZXBzIHJ1biB3aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRydWUuXG4gKlxuICogQHBhcmFtIHN0ZXBzIE9uZSBvciBtb3JlIGFuaW1hdGlvbiBvYmplY3RzLCBhcyByZXR1cm5lZCBieSB0aGUgYGFuaW1hdGUoKWAgb3JcbiAqIGBzZXF1ZW5jZSgpYCBmdW5jdGlvbiwgdGhhdCBmb3JtIGEgdHJhbnNmb3JtYXRpb24gZnJvbSBvbmUgc3RhdGUgdG8gYW5vdGhlci5cbiAqIEEgc2VxdWVuY2UgaXMgdXNlZCBieSBkZWZhdWx0IHdoZW4geW91IHBhc3MgYW4gYXJyYXkuXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvcHRpb25zIG9iamVjdCB0aGF0IGNhbiBjb250YWluIGEgZGVsYXkgdmFsdWUgZm9yIHRoZSBzdGFydCBvZiB0aGUgYW5pbWF0aW9uLFxuICogYW5kIGFkZGl0aW9uYWwgZGV2ZWxvcGVyLWRlZmluZWQgcGFyYW1ldGVycy4gUHJvdmlkZWQgdmFsdWVzIGZvciBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgYXJlIHVzZWRcbiAqIGFzIGRlZmF1bHRzLCBhbmQgb3ZlcnJpZGUgdmFsdWVzIGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNhbGxlciBvbiBpbnZvY2F0aW9uLlxuICogQHJldHVybnMgQW4gb2JqZWN0IHRoYXQgZW5jYXBzdWxhdGVzIHRoZSB0cmFuc2l0aW9uIGRhdGEuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIFRoZSB0ZW1wbGF0ZSBhc3NvY2lhdGVkIHdpdGggYSBjb21wb25lbnQgYmluZHMgYW4gYW5pbWF0aW9uIHRyaWdnZXIgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBgYGBIVE1MXG4gKiA8IS0tIHNvbWV3aGVyZSBpbnNpZGUgb2YgbXktY29tcG9uZW50LXRwbC5odG1sIC0tPlxuICogPGRpdiBbQG15QW5pbWF0aW9uVHJpZ2dlcl09XCJteVN0YXR1c0V4cFwiPi4uLjwvZGl2PlxuICogYGBgXG4gKlxuICogQWxsIHRyYW5zaXRpb25zIGFyZSBkZWZpbmVkIHdpdGhpbiBhbiBhbmltYXRpb24gdHJpZ2dlcixcbiAqIGFsb25nIHdpdGggbmFtZWQgc3RhdGVzIHRoYXQgdGhlIHRyYW5zaXRpb25zIGNoYW5nZSB0byBhbmQgZnJvbS5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0cmlnZ2VyKFwibXlBbmltYXRpb25UcmlnZ2VyXCIsIFtcbiAqICAvLyBkZWZpbmUgc3RhdGVzXG4gKiAgc3RhdGUoXCJvblwiLCBzdHlsZSh7IGJhY2tncm91bmQ6IFwiZ3JlZW5cIiB9KSksXG4gKiAgc3RhdGUoXCJvZmZcIiwgc3R5bGUoeyBiYWNrZ3JvdW5kOiBcImdyZXlcIiB9KSksXG4gKiAgLi4uXVxuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IHdoZW4geW91IGNhbGwgdGhlIGBzZXF1ZW5jZSgpYCBmdW5jdGlvbiB3aXRoaW4gYSBge0BsaW5rIGFuaW1hdGlvbnMvZ3JvdXAgZ3JvdXAoKX1gXG4gKiBvciBhIGB0cmFuc2l0aW9uKClgIGNhbGwsIGV4ZWN1dGlvbiBkb2VzIG5vdCBjb250aW51ZSB0byB0aGUgbmV4dCBpbnN0cnVjdGlvblxuICogdW50aWwgZWFjaCBvZiB0aGUgaW5uZXIgYW5pbWF0aW9uIHN0ZXBzIGhhdmUgY29tcGxldGVkLlxuICpcbiAqICMjIyBTeW50YXggZXhhbXBsZXNcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGVzIGRlZmluZSB0cmFuc2l0aW9ucyBiZXR3ZWVuIHRoZSB0d28gZGVmaW5lZCBzdGF0ZXMgKGFuZCBkZWZhdWx0IHN0YXRlcyksXG4gKiB1c2luZyB2YXJpb3VzIG9wdGlvbnM6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogLy8gVHJhbnNpdGlvbiBvY2N1cnMgd2hlbiB0aGUgc3RhdGUgdmFsdWVcbiAqIC8vIGJvdW5kIHRvIFwibXlBbmltYXRpb25UcmlnZ2VyXCIgY2hhbmdlcyBmcm9tIFwib25cIiB0byBcIm9mZlwiXG4gKiB0cmFuc2l0aW9uKFwib24gPT4gb2ZmXCIsIGFuaW1hdGUoNTAwKSlcbiAqIC8vIFJ1biB0aGUgc2FtZSBhbmltYXRpb24gZm9yIGJvdGggZGlyZWN0aW9uc1xuICogdHJhbnNpdGlvbihcIm9uIDw9PiBvZmZcIiwgYW5pbWF0ZSg1MDApKVxuICogLy8gRGVmaW5lIG11bHRpcGxlIHN0YXRlLWNoYW5nZSBwYWlycyBzZXBhcmF0ZWQgYnkgY29tbWFzXG4gKiB0cmFuc2l0aW9uKFwib24gPT4gb2ZmLCBvZmYgPT4gdm9pZFwiLCBhbmltYXRlKDUwMCkpXG4gKiBgYGBcbiAqXG4gKiAjIyMgU3BlY2lhbCB2YWx1ZXMgZm9yIHN0YXRlLWNoYW5nZSBleHByZXNzaW9uc1xuICpcbiAqIC0gQ2F0Y2gtYWxsIHN0YXRlIGNoYW5nZSBmb3Igd2hlbiBhbiBlbGVtZW50IGlzIGluc2VydGVkIGludG8gdGhlIHBhZ2UgYW5kIHRoZVxuICogZGVzdGluYXRpb24gc3RhdGUgaXMgdW5rbm93bjpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0cmFuc2l0aW9uKFwidm9pZCA9PiAqXCIsIFtcbiAqICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gKiAgYW5pbWF0ZSg1MDApXG4gKiAgXSlcbiAqIGBgYFxuICpcbiAqIC0gQ2FwdHVyZSBhIHN0YXRlIGNoYW5nZSBiZXR3ZWVuIGFueSBzdGF0ZXM6XG4gKlxuICogIGB0cmFuc2l0aW9uKFwiKiA9PiAqXCIsIGFuaW1hdGUoXCIxcyAwc1wiKSlgXG4gKlxuICogLSBFbnRyeSBhbmQgZXhpdCB0cmFuc2l0aW9uczpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0cmFuc2l0aW9uKFwiOmVudGVyXCIsIFtcbiAqICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxuICogICBhbmltYXRlKDUwMCwgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKVxuICogICBdKSxcbiAqIHRyYW5zaXRpb24oXCI6bGVhdmVcIiwgW1xuICogICBhbmltYXRlKDUwMCwgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICogICBdKVxuICogYGBgXG4gKlxuICogLSBVc2UgYDppbmNyZW1lbnRgIGFuZCBgOmRlY3JlbWVudGAgdG8gaW5pdGlhdGUgdHJhbnNpdGlvbnM6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogdHJhbnNpdGlvbihcIjppbmNyZW1lbnRcIiwgZ3JvdXAoW1xuICogIHF1ZXJ5KCc6ZW50ZXInLCBbXG4gKiAgICAgc3R5bGUoeyBsZWZ0OiAnMTAwJScgfSksXG4gKiAgICAgYW5pbWF0ZSgnMC41cyBlYXNlLW91dCcsIHN0eWxlKCcqJykpXG4gKiAgIF0pLFxuICogIHF1ZXJ5KCc6bGVhdmUnLCBbXG4gKiAgICAgYW5pbWF0ZSgnMC41cyBlYXNlLW91dCcsIHN0eWxlKHsgbGVmdDogJy0xMDAlJyB9KSlcbiAqICBdKVxuICogXSkpXG4gKlxuICogdHJhbnNpdGlvbihcIjpkZWNyZW1lbnRcIiwgZ3JvdXAoW1xuICogIHF1ZXJ5KCc6ZW50ZXInLCBbXG4gKiAgICAgc3R5bGUoeyBsZWZ0OiAnMTAwJScgfSksXG4gKiAgICAgYW5pbWF0ZSgnMC41cyBlYXNlLW91dCcsIHN0eWxlKCcqJykpXG4gKiAgIF0pLFxuICogIHF1ZXJ5KCc6bGVhdmUnLCBbXG4gKiAgICAgYW5pbWF0ZSgnMC41cyBlYXNlLW91dCcsIHN0eWxlKHsgbGVmdDogJy0xMDAlJyB9KSlcbiAqICBdKVxuICogXSkpXG4gKiBgYGBcbiAqXG4gKiAjIyMgU3RhdGUtY2hhbmdlIGZ1bmN0aW9uc1xuICpcbiAqIEhlcmUgaXMgYW4gZXhhbXBsZSBvZiBhIGBmcm9tU3RhdGVgIHNwZWNpZmllZCBhcyBhIHN0YXRlLWNoYW5nZSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYW5cbiAqIGFuaW1hdGlvbiB3aGVuIHRydWU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogdHJhbnNpdGlvbigoZnJvbVN0YXRlLCB0b1N0YXRlKSA9PlxuICogIHtcbiAqICAgcmV0dXJuIGZyb21TdGF0ZSA9PSBcIm9mZlwiICYmIHRvU3RhdGUgPT0gXCJvblwiO1xuICogIH0sXG4gKiAgYW5pbWF0ZShcIjFzIDBzXCIpKVxuICogYGBgXG4gKlxuICogIyMjIEFuaW1hdGluZyB0byB0aGUgZmluYWwgc3RhdGVcbiAqXG4gKiBJZiB0aGUgZmluYWwgc3RlcCBpbiBhIHRyYW5zaXRpb24gaXMgYSBjYWxsIHRvIGBhbmltYXRlKClgIHRoYXQgdXNlcyBhIHRpbWluZyB2YWx1ZVxuICogd2l0aCBubyBzdHlsZSBkYXRhLCB0aGF0IHN0ZXAgaXMgYXV0b21hdGljYWxseSBjb25zaWRlcmVkIHRoZSBmaW5hbCBhbmltYXRpb24gYXJjLFxuICogZm9yIHRoZSBlbGVtZW50IHRvIHJlYWNoIHRoZSBmaW5hbCBzdGF0ZS4gQW5ndWxhciBhdXRvbWF0aWNhbGx5IGFkZHMgb3IgcmVtb3Zlc1xuICogQ1NTIHN0eWxlcyB0byBlbnN1cmUgdGhhdCB0aGUgZWxlbWVudCBpcyBpbiB0aGUgY29ycmVjdCBmaW5hbCBzdGF0ZS5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgZGVmaW5lcyBhIHRyYW5zaXRpb24gdGhhdCBzdGFydHMgYnkgaGlkaW5nIHRoZSBlbGVtZW50LFxuICogdGhlbiBtYWtlcyBzdXJlIHRoYXQgaXQgYW5pbWF0ZXMgcHJvcGVybHkgdG8gd2hhdGV2ZXIgc3RhdGUgaXMgY3VycmVudGx5IGFjdGl2ZSBmb3IgdHJpZ2dlcjpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0cmFuc2l0aW9uKFwidm9pZCA9PiAqXCIsIFtcbiAqICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxuICogICBhbmltYXRlKDUwMClcbiAqICBdKVxuICogYGBgXG4gKiAjIyMgQm9vbGVhbiB2YWx1ZSBtYXRjaGluZ1xuICogSWYgYSB0cmlnZ2VyIGJpbmRpbmcgdmFsdWUgaXMgYSBCb29sZWFuLCBpdCBjYW4gYmUgbWF0Y2hlZCB1c2luZyBhIHRyYW5zaXRpb24gZXhwcmVzc2lvblxuICogdGhhdCBjb21wYXJlcyB0cnVlIGFuZCBmYWxzZSBvciAxIGFuZCAwLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBcbiAqIC8vIGluIHRoZSB0ZW1wbGF0ZVxuICogPGRpdiBbQG9wZW5DbG9zZV09XCJvcGVuID8gdHJ1ZSA6IGZhbHNlXCI+Li4uPC9kaXY+XG4gKiAvLyBpbiB0aGUgY29tcG9uZW50IG1ldGFkYXRhXG4gKiB0cmlnZ2VyKCdvcGVuQ2xvc2UnLCBbXG4gKiAgIHN0YXRlKCd0cnVlJywgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSksXG4gKiAgIHN0YXRlKCdmYWxzZScsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSksXG4gKiAgIHRyYW5zaXRpb24oJ2ZhbHNlIDw9PiB0cnVlJywgYW5pbWF0ZSg1MDApKVxuICogXSlcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uKFxuICAgIHN0YXRlQ2hhbmdlRXhwcjogc3RyaW5nfFxuICAgICgoZnJvbVN0YXRlOiBzdHJpbmcsIHRvU3RhdGU6IHN0cmluZywgZWxlbWVudD86IGFueSwgcGFyYW1zPzoge1trZXk6IHN0cmluZ106IGFueX0pID0+IGJvb2xlYW4pLFxuICAgIHN0ZXBzOiBBbmltYXRpb25NZXRhZGF0YXxBbmltYXRpb25NZXRhZGF0YVtdLFxuICAgIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnN8bnVsbCA9IG51bGwpOiBBbmltYXRpb25UcmFuc2l0aW9uTWV0YWRhdGEge1xuICByZXR1cm4ge3R5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5UcmFuc2l0aW9uLCBleHByOiBzdGF0ZUNoYW5nZUV4cHIsIGFuaW1hdGlvbjogc3RlcHMsIG9wdGlvbnN9O1xufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgcmV1c2FibGUgYW5pbWF0aW9uIHRoYXQgY2FuIGJlIGludm9rZWQgaW4gYW5vdGhlciBhbmltYXRpb24gb3Igc2VxdWVuY2UsXG4gKiBieSBjYWxsaW5nIHRoZSBgdXNlQW5pbWF0aW9uKClgIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSBzdGVwcyBPbmUgb3IgbW9yZSBhbmltYXRpb24gb2JqZWN0cywgYXMgcmV0dXJuZWQgYnkgdGhlIGBhbmltYXRlKClgXG4gKiBvciBgc2VxdWVuY2UoKWAgZnVuY3Rpb24sIHRoYXQgZm9ybSBhIHRyYW5zZm9ybWF0aW9uIGZyb20gb25lIHN0YXRlIHRvIGFub3RoZXIuXG4gKiBBIHNlcXVlbmNlIGlzIHVzZWQgYnkgZGVmYXVsdCB3aGVuIHlvdSBwYXNzIGFuIGFycmF5LlxuICogQHBhcmFtIG9wdGlvbnMgQW4gb3B0aW9ucyBvYmplY3QgdGhhdCBjYW4gY29udGFpbiBhIGRlbGF5IHZhbHVlIGZvciB0aGUgc3RhcnQgb2YgdGhlXG4gKiBhbmltYXRpb24sIGFuZCBhZGRpdGlvbmFsIGRldmVsb3Blci1kZWZpbmVkIHBhcmFtZXRlcnMuXG4gKiBQcm92aWRlZCB2YWx1ZXMgZm9yIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBhcmUgdXNlZCBhcyBkZWZhdWx0cyxcbiAqIGFuZCBvdmVycmlkZSB2YWx1ZXMgY2FuIGJlIHBhc3NlZCB0byB0aGUgY2FsbGVyIG9uIGludm9jYXRpb24uXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIGFuaW1hdGlvbiBkYXRhLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgZGVmaW5lcyBhIHJldXNhYmxlIGFuaW1hdGlvbiwgcHJvdmlkaW5nIHNvbWUgZGVmYXVsdCBwYXJhbWV0ZXJcbiAqIHZhbHVlcy5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB2YXIgZmFkZUFuaW1hdGlvbiA9IGFuaW1hdGlvbihbXG4gKiAgIHN0eWxlKHsgb3BhY2l0eTogJ3t7IHN0YXJ0IH19JyB9KSxcbiAqICAgYW5pbWF0ZSgne3sgdGltZSB9fScsXG4gKiAgIHN0eWxlKHsgb3BhY2l0eTogJ3t7IGVuZCB9fSd9KSlcbiAqICAgXSxcbiAqICAgeyBwYXJhbXM6IHsgdGltZTogJzEwMDBtcycsIHN0YXJ0OiAwLCBlbmQ6IDEgfX0pO1xuICogYGBgXG4gKlxuICogVGhlIGZvbGxvd2luZyBpbnZva2VzIHRoZSBkZWZpbmVkIGFuaW1hdGlvbiB3aXRoIGEgY2FsbCB0byBgdXNlQW5pbWF0aW9uKClgLFxuICogcGFzc2luZyBpbiBvdmVycmlkZSBwYXJhbWV0ZXIgdmFsdWVzLlxuICpcbiAqIGBgYGpzXG4gKiB1c2VBbmltYXRpb24oZmFkZUFuaW1hdGlvbiwge1xuICogICBwYXJhbXM6IHtcbiAqICAgICB0aW1lOiAnMnMnLFxuICogICAgIHN0YXJ0OiAxLFxuICogICAgIGVuZDogMFxuICogICB9XG4gKiB9KVxuICogYGBgXG4gKlxuICogSWYgYW55IG9mIHRoZSBwYXNzZWQtaW4gcGFyYW1ldGVyIHZhbHVlcyBhcmUgbWlzc2luZyBmcm9tIHRoaXMgY2FsbCxcbiAqIHRoZSBkZWZhdWx0IHZhbHVlcyBhcmUgdXNlZC4gSWYgb25lIG9yIG1vcmUgcGFyYW1ldGVyIHZhbHVlcyBhcmUgbWlzc2luZyBiZWZvcmUgYSBzdGVwIGlzXG4gKiBhbmltYXRlZCwgYHVzZUFuaW1hdGlvbigpYCB0aHJvd3MgYW4gZXJyb3IuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0aW9uKFxuICAgIHN0ZXBzOiBBbmltYXRpb25NZXRhZGF0YXxBbmltYXRpb25NZXRhZGF0YVtdLFxuICAgIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnN8bnVsbCA9IG51bGwpOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSB7XG4gIHJldHVybiB7dHlwZTogQW5pbWF0aW9uTWV0YWRhdGFUeXBlLlJlZmVyZW5jZSwgYW5pbWF0aW9uOiBzdGVwcywgb3B0aW9uc307XG59XG5cbi8qKlxuICogRXhlY3V0ZXMgYSBxdWVyaWVkIGlubmVyIGFuaW1hdGlvbiBlbGVtZW50IHdpdGhpbiBhbiBhbmltYXRpb24gc2VxdWVuY2UuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgQW4gb3B0aW9ucyBvYmplY3QgdGhhdCBjYW4gY29udGFpbiBhIGRlbGF5IHZhbHVlIGZvciB0aGUgc3RhcnQgb2YgdGhlXG4gKiBhbmltYXRpb24sIGFuZCBhZGRpdGlvbmFsIG92ZXJyaWRlIHZhbHVlcyBmb3IgZGV2ZWxvcGVyLWRlZmluZWQgcGFyYW1ldGVycy5cbiAqIEByZXR1cm4gQW4gb2JqZWN0IHRoYXQgZW5jYXBzdWxhdGVzIHRoZSBjaGlsZCBhbmltYXRpb24gZGF0YS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogRWFjaCB0aW1lIGFuIGFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgaW4gQW5ndWxhciwgdGhlIHBhcmVudCBhbmltYXRpb25cbiAqIGhhcyBwcmlvcml0eSBhbmQgYW55IGNoaWxkIGFuaW1hdGlvbnMgYXJlIGJsb2NrZWQuIEluIG9yZGVyXG4gKiBmb3IgYSBjaGlsZCBhbmltYXRpb24gdG8gcnVuLCB0aGUgcGFyZW50IGFuaW1hdGlvbiBtdXN0IHF1ZXJ5IGVhY2ggb2YgdGhlIGVsZW1lbnRzXG4gKiBjb250YWluaW5nIGNoaWxkIGFuaW1hdGlvbnMsIGFuZCBydW4gdGhlbSB1c2luZyB0aGlzIGZ1bmN0aW9uLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGZlYXR1cmUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIGBxdWVyeSgpYCBhbmQgaXQgd2lsbCBvbmx5IHdvcmtcbiAqIHdpdGggYW5pbWF0aW9ucyB0aGF0IGFyZSBhc3NpZ25lZCB1c2luZyB0aGUgQW5ndWxhciBhbmltYXRpb24gbGlicmFyeS4gQ1NTIGtleWZyYW1lc1xuICogYW5kIHRyYW5zaXRpb25zIGFyZSBub3QgaGFuZGxlZCBieSB0aGlzIEFQSS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlQ2hpbGQob3B0aW9uczogQW5pbWF0ZUNoaWxkT3B0aW9uc3xudWxsID0gbnVsbCk6XG4gICAgQW5pbWF0aW9uQW5pbWF0ZUNoaWxkTWV0YWRhdGEge1xuICByZXR1cm4ge3R5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5BbmltYXRlQ2hpbGQsIG9wdGlvbnN9O1xufVxuXG4vKipcbiAqIFN0YXJ0cyBhIHJldXNhYmxlIGFuaW1hdGlvbiB0aGF0IGlzIGNyZWF0ZWQgdXNpbmcgdGhlIGBhbmltYXRpb24oKWAgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIGFuaW1hdGlvbiBUaGUgcmV1c2FibGUgYW5pbWF0aW9uIHRvIHN0YXJ0LlxuICogQHBhcmFtIG9wdGlvbnMgQW4gb3B0aW9ucyBvYmplY3QgdGhhdCBjYW4gY29udGFpbiBhIGRlbGF5IHZhbHVlIGZvciB0aGUgc3RhcnQgb2ZcbiAqIHRoZSBhbmltYXRpb24sIGFuZCBhZGRpdGlvbmFsIG92ZXJyaWRlIHZhbHVlcyBmb3IgZGV2ZWxvcGVyLWRlZmluZWQgcGFyYW1ldGVycy5cbiAqIEByZXR1cm4gQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGFuaW1hdGlvbiBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuaW1hdGlvbihcbiAgICBhbmltYXRpb246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLFxuICAgIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnN8bnVsbCA9IG51bGwpOiBBbmltYXRpb25BbmltYXRlUmVmTWV0YWRhdGEge1xuICByZXR1cm4ge3R5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5BbmltYXRlUmVmLCBhbmltYXRpb24sIG9wdGlvbnN9O1xufVxuXG4vKipcbiAqIEZpbmRzIG9uZSBvciBtb3JlIGlubmVyIGVsZW1lbnRzIHdpdGhpbiB0aGUgY3VycmVudCBlbGVtZW50IHRoYXQgaXNcbiAqIGJlaW5nIGFuaW1hdGVkIHdpdGhpbiBhIHNlcXVlbmNlLiBVc2Ugd2l0aCBgYW5pbWF0ZSgpYC5cbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgVGhlIGVsZW1lbnQgdG8gcXVlcnksIG9yIGEgc2V0IG9mIGVsZW1lbnRzIHRoYXQgY29udGFpbiBBbmd1bGFyLXNwZWNpZmljXG4gKiBjaGFyYWN0ZXJpc3RpY3MsIHNwZWNpZmllZCB3aXRoIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmcgdG9rZW5zLlxuICogIC0gYHF1ZXJ5KFwiOmVudGVyXCIpYCBvciBgcXVlcnkoXCI6bGVhdmVcIilgIDogUXVlcnkgZm9yIG5ld2x5IGluc2VydGVkL3JlbW92ZWQgZWxlbWVudHMuXG4gKiAgLSBgcXVlcnkoXCI6YW5pbWF0aW5nXCIpYCA6IFF1ZXJ5IGFsbCBjdXJyZW50bHkgYW5pbWF0aW5nIGVsZW1lbnRzLlxuICogIC0gYHF1ZXJ5KFwiQHRyaWdnZXJOYW1lXCIpYCA6IFF1ZXJ5IGVsZW1lbnRzIHRoYXQgY29udGFpbiBhbiBhbmltYXRpb24gdHJpZ2dlci5cbiAqICAtIGBxdWVyeShcIkAqXCIpYCA6IFF1ZXJ5IGFsbCBlbGVtZW50cyB0aGF0IGNvbnRhaW4gYW4gYW5pbWF0aW9uIHRyaWdnZXJzLlxuICogIC0gYHF1ZXJ5KFwiOnNlbGZcIilgIDogSW5jbHVkZSB0aGUgY3VycmVudCBlbGVtZW50IGludG8gdGhlIGFuaW1hdGlvbiBzZXF1ZW5jZS5cbiAqXG4gKiBAcGFyYW0gYW5pbWF0aW9uIE9uZSBvciBtb3JlIGFuaW1hdGlvbiBzdGVwcyB0byBhcHBseSB0byB0aGUgcXVlcmllZCBlbGVtZW50IG9yIGVsZW1lbnRzLlxuICogQW4gYXJyYXkgaXMgdHJlYXRlZCBhcyBhbiBhbmltYXRpb24gc2VxdWVuY2UuXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvcHRpb25zIG9iamVjdC4gVXNlIHRoZSAnbGltaXQnIGZpZWxkIHRvIGxpbWl0IHRoZSB0b3RhbCBudW1iZXIgb2ZcbiAqIGl0ZW1zIHRvIGNvbGxlY3QuXG4gKiBAcmV0dXJuIEFuIG9iamVjdCB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgcXVlcnkgZGF0YS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogVG9rZW5zIGNhbiBiZSBtZXJnZWQgaW50byBhIGNvbWJpbmVkIHF1ZXJ5IHNlbGVjdG9yIHN0cmluZy4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogIHF1ZXJ5KCc6c2VsZiwgLnJlY29yZDplbnRlciwgLnJlY29yZDpsZWF2ZSwgQHN1YlRyaWdnZXInLCBbLi4uXSlcbiAqIGBgYFxuICpcbiAqIFRoZSBgcXVlcnkoKWAgZnVuY3Rpb24gY29sbGVjdHMgbXVsdGlwbGUgZWxlbWVudHMgYW5kIHdvcmtzIGludGVybmFsbHkgYnkgdXNpbmdcbiAqIGBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGxgLiBVc2UgdGhlIGBsaW1pdGAgZmllbGQgb2YgYW4gb3B0aW9ucyBvYmplY3QgdG8gbGltaXRcbiAqIHRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgdG8gYmUgY29sbGVjdGVkLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogcXVlcnkoJ2RpdicsIFtcbiAqICAgYW5pbWF0ZSguLi4pLFxuICogICBhbmltYXRlKC4uLilcbiAqIF0sIHsgbGltaXQ6IDEgfSlcbiAqIGBgYFxuICpcbiAqIEJ5IGRlZmF1bHQsIHRocm93cyBhbiBlcnJvciB3aGVuIHplcm8gaXRlbXMgYXJlIGZvdW5kLiBTZXQgdGhlXG4gKiBgb3B0aW9uYWxgIGZsYWcgdG8gaWdub3JlIHRoaXMgZXJyb3IuIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiBxdWVyeSgnLnNvbWUtZWxlbWVudC10aGF0LW1heS1ub3QtYmUtdGhlcmUnLCBbXG4gKiAgIGFuaW1hdGUoLi4uKSxcbiAqICAgYW5pbWF0ZSguLi4pXG4gKiBdLCB7IG9wdGlvbmFsOiB0cnVlIH0pXG4gKiBgYGBcbiAqXG4gKiAjIyMgVXNhZ2UgRXhhbXBsZVxuICpcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBxdWVyaWVzIGZvciBpbm5lciBlbGVtZW50cyBhbmQgYW5pbWF0ZXMgdGhlbVxuICogaW5kaXZpZHVhbGx5IHVzaW5nIGBhbmltYXRlKClgLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2lubmVyJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8ZGl2IFtAcXVlcnlBbmltYXRpb25dPVwiZXhwXCI+XG4gKiAgICAgICA8aDE+VGl0bGU8L2gxPlxuICogICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAqICAgICAgICAgQmxhaCBibGFoIGJsYWhcbiAqICAgICAgIDwvZGl2PlxuICogICAgIDwvZGl2PlxuICogICBgLFxuICogICBhbmltYXRpb25zOiBbXG4gKiAgICB0cmlnZ2VyKCdxdWVyeUFuaW1hdGlvbicsIFtcbiAqICAgICAgdHJhbnNpdGlvbignKiA9PiBnb0FuaW1hdGUnLCBbXG4gKiAgICAgICAgLy8gaGlkZSB0aGUgaW5uZXIgZWxlbWVudHNcbiAqICAgICAgICBxdWVyeSgnaDEnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpLFxuICogICAgICAgIHF1ZXJ5KCcuY29udGVudCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gKlxuICogICAgICAgIC8vIGFuaW1hdGUgdGhlIGlubmVyIGVsZW1lbnRzIGluLCBvbmUgYnkgb25lXG4gKiAgICAgICAgcXVlcnkoJ2gxJywgYW5pbWF0ZSgxMDAwLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpKSxcbiAqICAgICAgICBxdWVyeSgnLmNvbnRlbnQnLCBhbmltYXRlKDEwMDAsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSkpLFxuICogICAgICBdKVxuICogICAgXSlcbiAqICBdXG4gKiB9KVxuICogY2xhc3MgQ21wIHtcbiAqICAgZXhwID0gJyc7XG4gKlxuICogICBnb0FuaW1hdGUoKSB7XG4gKiAgICAgdGhpcy5leHAgPSAnZ29BbmltYXRlJztcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoXG4gICAgc2VsZWN0b3I6IHN0cmluZywgYW5pbWF0aW9uOiBBbmltYXRpb25NZXRhZGF0YXxBbmltYXRpb25NZXRhZGF0YVtdLFxuICAgIG9wdGlvbnM6IEFuaW1hdGlvblF1ZXJ5T3B0aW9uc3xudWxsID0gbnVsbCk6IEFuaW1hdGlvblF1ZXJ5TWV0YWRhdGEge1xuICByZXR1cm4ge3R5cGU6IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5RdWVyeSwgc2VsZWN0b3IsIGFuaW1hdGlvbiwgb3B0aW9uc307XG59XG5cbi8qKlxuICogVXNlIHdpdGhpbiBhbiBhbmltYXRpb24gYHF1ZXJ5KClgIGNhbGwgdG8gaXNzdWUgYSB0aW1pbmcgZ2FwIGFmdGVyXG4gKiBlYWNoIHF1ZXJpZWQgaXRlbSBpcyBhbmltYXRlZC5cbiAqXG4gKiBAcGFyYW0gdGltaW5ncyBBIGRlbGF5IHZhbHVlLlxuICogQHBhcmFtIGFuaW1hdGlvbiBPbmUgb3JlIG1vcmUgYW5pbWF0aW9uIHN0ZXBzLlxuICogQHJldHVybnMgQW4gb2JqZWN0IHRoYXQgZW5jYXBzdWxhdGVzIHRoZSBzdGFnZ2VyIGRhdGEuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgYSBjb250YWluZXIgZWxlbWVudCB3cmFwcyBhIGxpc3Qgb2YgaXRlbXMgc3RhbXBlZCBvdXRcbiAqIGJ5IGFuIGBuZ0ZvcmAuIFRoZSBjb250YWluZXIgZWxlbWVudCBjb250YWlucyBhbiBhbmltYXRpb24gdHJpZ2dlciB0aGF0IHdpbGwgbGF0ZXIgYmUgc2V0XG4gKiB0byBxdWVyeSBmb3IgZWFjaCBvZiB0aGUgaW5uZXIgaXRlbXMuXG4gKlxuICogRWFjaCB0aW1lIGl0ZW1zIGFyZSBhZGRlZCwgdGhlIG9wYWNpdHkgZmFkZS1pbiBhbmltYXRpb24gcnVucyxcbiAqIGFuZCBlYWNoIHJlbW92ZWQgaXRlbSBpcyBmYWRlZCBvdXQuXG4gKiBXaGVuIGVpdGhlciBvZiB0aGVzZSBhbmltYXRpb25zIG9jY3VyLCB0aGUgc3RhZ2dlciBlZmZlY3QgaXNcbiAqIGFwcGxpZWQgYWZ0ZXIgZWFjaCBpdGVtJ3MgYW5pbWF0aW9uIGlzIHN0YXJ0ZWQuXG4gKlxuICogYGBgaHRtbFxuICogPCEtLSBsaXN0LmNvbXBvbmVudC5odG1sIC0tPlxuICogPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlKClcIj5TaG93IC8gSGlkZSBJdGVtczwvYnV0dG9uPlxuICogPGhyIC8+XG4gKiA8ZGl2IFtAbGlzdEFuaW1hdGlvbl09XCJpdGVtcy5sZW5ndGhcIj5cbiAqICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICogICAgIHt7IGl0ZW0gfX1cbiAqICAgPC9kaXY+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIEhlcmUgaXMgdGhlIGNvbXBvbmVudCBjb2RlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7dHJpZ2dlciwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUsIHF1ZXJ5LCBzdGFnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbiAqIEBDb21wb25lbnQoe1xuICogICB0ZW1wbGF0ZVVybDogJ2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICogICBhbmltYXRpb25zOiBbXG4gKiAgICAgdHJpZ2dlcignbGlzdEFuaW1hdGlvbicsIFtcbiAqICAgICAuLi5cbiAqICAgICBdKVxuICogICBdXG4gKiB9KVxuICogY2xhc3MgTGlzdENvbXBvbmVudCB7XG4gKiAgIGl0ZW1zID0gW107XG4gKlxuICogICBzaG93SXRlbXMoKSB7XG4gKiAgICAgdGhpcy5pdGVtcyA9IFswLDEsMiwzLDRdO1xuICogICB9XG4gKlxuICogICBoaWRlSXRlbXMoKSB7XG4gKiAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICogICB9XG4gKlxuICogICB0b2dnbGUoKSB7XG4gKiAgICAgdGhpcy5pdGVtcy5sZW5ndGggPyB0aGlzLmhpZGVJdGVtcygpIDogdGhpcy5zaG93SXRlbXMoKTtcbiAqICAgIH1cbiAqICB9XG4gKiBgYGBcbiAqXG4gKiBIZXJlIGlzIHRoZSBhbmltYXRpb24gdHJpZ2dlciBjb2RlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHRyaWdnZXIoJ2xpc3RBbmltYXRpb24nLCBbXG4gKiAgIHRyYW5zaXRpb24oJyogPT4gKicsIFsgLy8gZWFjaCB0aW1lIHRoZSBiaW5kaW5nIHZhbHVlIGNoYW5nZXNcbiAqICAgICBxdWVyeSgnOmxlYXZlJywgW1xuICogICAgICAgc3RhZ2dlcigxMDAsIFtcbiAqICAgICAgICAgYW5pbWF0ZSgnMC41cycsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAqICAgICAgIF0pXG4gKiAgICAgXSksXG4gKiAgICAgcXVlcnkoJzplbnRlcicsIFtcbiAqICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcbiAqICAgICAgIHN0YWdnZXIoMTAwLCBbXG4gKiAgICAgICAgIGFuaW1hdGUoJzAuNXMnLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpXG4gKiAgICAgICBdKVxuICogICAgIF0pXG4gKiAgIF0pXG4gKiBdKVxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhZ2dlcih0aW1pbmdzOiBzdHJpbmd8bnVtYmVyLCBhbmltYXRpb246IEFuaW1hdGlvbk1ldGFkYXRhfEFuaW1hdGlvbk1ldGFkYXRhW10pOlxuICAgIEFuaW1hdGlvblN0YWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB7dHlwZTogQW5pbWF0aW9uTWV0YWRhdGFUeXBlLlN0YWdnZXIsIHRpbWluZ3MsIGFuaW1hdGlvbn07XG59XG4iXX0=