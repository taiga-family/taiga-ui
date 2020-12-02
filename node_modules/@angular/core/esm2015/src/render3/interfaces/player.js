/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/interfaces/player.ts
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
 * A shared interface which contains an animation player
 * @record
 */
export function Player() { }
if (false) {
    /** @type {?|undefined} */
    Player.prototype.parent;
    /** @type {?} */
    Player.prototype.state;
    /**
     * @return {?}
     */
    Player.prototype.play = function () { };
    /**
     * @return {?}
     */
    Player.prototype.pause = function () { };
    /**
     * @return {?}
     */
    Player.prototype.finish = function () { };
    /**
     * @return {?}
     */
    Player.prototype.destroy = function () { };
    /**
     * @param {?} state
     * @param {?} cb
     * @return {?}
     */
    Player.prototype.addEventListener = function (state, cb) { };
}
/** @enum {number} */
const BindingType = {
    Unset: 0,
    Class: 1,
    Style: 2,
};
export { BindingType };
/**
 * @record
 */
export function BindingStore() { }
if (false) {
    /**
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    BindingStore.prototype.setValue = function (prop, value) { };
}
/**
 * Defines the shape which produces the Player.
 *
 * Used to produce a player that will be placed on an element that contains
 * styling bindings that make use of the player. This function is designed
 * to be used with `PlayerFactory`.
 * @record
 */
export function PlayerFactoryBuildFn() { }
/**
 * Used as a reference to build a player from a styling template binding
 * (`[style]` and `[class]`).
 *
 * The `fn` function will be called once any styling-related changes are
 * evaluated on an element and is expected to return a player that will
 * be then run on the element.
 *
 * `[style]`, `[style.prop]`, `[class]` and `[class.name]` template bindings
 * all accept a `PlayerFactory` as input and this player factories.
 * @record
 */
export function PlayerFactory() { }
if (false) {
    /** @type {?} */
    PlayerFactory.prototype.__brand__;
}
/**
 * @record
 */
export function PlayerBuilder() { }
if (false) {
    /**
     * @param {?} currentPlayer
     * @param {?} isFirstRender
     * @return {?}
     */
    PlayerBuilder.prototype.buildPlayer = function (currentPlayer, isFirstRender) { };
}
/** @enum {number} */
const PlayState = {
    Pending: 0,
    Running: 1,
    Paused: 2,
    Finished: 100,
    Destroyed: 200,
};
export { PlayState };
/**
 * The context that stores all the active players and queued player factories present on an element.
 * @record
 */
export function PlayerContext() { }
if (false) {
    /* Skipping unnamed member:
    [PlayerIndex.NonBuilderPlayersStart]: number;*/
    /* Skipping unnamed member:
    [PlayerIndex.ClassMapPlayerBuilderPosition]: PlayerBuilder|null;*/
    /* Skipping unnamed member:
    [PlayerIndex.ClassMapPlayerPosition]: Player|null;*/
    /* Skipping unnamed member:
    [PlayerIndex.StyleMapPlayerBuilderPosition]: PlayerBuilder|null;*/
    /* Skipping unnamed member:
    [PlayerIndex.StyleMapPlayerPosition]: Player|null;*/
}
/**
 * Designed to be used as an injection service to capture all animation players.
 *
 * When present all animation players will be passed into the flush method below.
 * This feature is designed to service application-wide animation testing, live
 * debugging as well as custom animation choreographing tools.
 * @record
 */
export function PlayerHandler() { }
if (false) {
    /**
     * Designed to kick off the player at the end of change detection
     * @return {?}
     */
    PlayerHandler.prototype.flushPlayers = function () { };
    /**
     * @param {?} player The player that has been scheduled to run within the application.
     * @param {?} context The context as to where the player was bound to
     * @return {?}
     */
    PlayerHandler.prototype.queuePlayer = function (player, context) { };
}
/** @enum {number} */
const PlayerIndex = {
    // The position where the index that reveals where players start in the PlayerContext
    NonBuilderPlayersStart: 0,
    // The position where the player builder lives (which handles {key:value} map expression) for
    // classes
    ClassMapPlayerBuilderPosition: 1,
    // The position where the last player assigned to the class player builder is stored
    ClassMapPlayerPosition: 2,
    // The position where the player builder lives (which handles {key:value} map expression) for
    // styles
    StyleMapPlayerBuilderPosition: 3,
    // The position where the last player assigned to the style player builder is stored
    StyleMapPlayerPosition: 4,
    // The position where any player builders start in the PlayerContext
    PlayerBuildersStartPosition: 1,
    // The position where non map-based player builders start in the PlayerContext
    SinglePlayerBuildersStartPosition: 5,
    // For each player builder there is a player in the player context (therefore size = 2)
    PlayerAndPlayerBuildersTupleSize: 2,
    // The player exists next to the player builder in the list
    PlayerOffsetPosition: 1,
};
export { PlayerIndex };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9pbnRlcmZhY2VzL3BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsNEJBUUM7OztJQVBDLHdCQUFxQjs7SUFDckIsdUJBQWlCOzs7O0lBQ2pCLHdDQUFhOzs7O0lBQ2IseUNBQWM7Ozs7SUFDZCwwQ0FBZTs7OztJQUNmLDJDQUFnQjs7Ozs7O0lBQ2hCLDZEQUF5RTs7O0FBRzNFLE1BQWtCLFdBQVc7SUFDM0IsS0FBSyxHQUFJO0lBQ1QsS0FBSyxHQUFJO0lBQ1QsS0FBSyxHQUFJO0VBQ1Y7Ozs7O0FBRUQsa0NBRUM7Ozs7Ozs7SUFEQyw2REFBeUM7Ozs7Ozs7Ozs7QUFVM0MsMENBR0M7Ozs7Ozs7Ozs7Ozs7QUFhRCxtQ0FFQzs7O0lBREMsa0NBQStEOzs7OztBQUdqRSxtQ0FFQzs7Ozs7OztJQURDLGtGQUF1Rjs7O0FBVXpGLE1BQWtCLFNBQVM7SUFDekIsT0FBTyxHQUFJO0lBQ1gsT0FBTyxHQUFJO0lBQ1gsTUFBTSxHQUFJO0lBQ1YsUUFBUSxLQUFNO0lBQ2QsU0FBUyxLQUFNO0VBQ2hCOzs7Ozs7QUFLRCxtQ0FNQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0QsbUNBV0M7Ozs7OztJQVBDLHVEQUFxQjs7Ozs7O0lBTXJCLHFFQUE0Rjs7O0FBRzlGLE1BQWtCLFdBQVc7SUFDM0IscUZBQXFGO0lBQ3JGLHNCQUFzQixHQUFJO0lBQzFCLDZGQUE2RjtJQUM3RixVQUFVO0lBQ1YsNkJBQTZCLEdBQUk7SUFDakMsb0ZBQW9GO0lBQ3BGLHNCQUFzQixHQUFJO0lBQzFCLDZGQUE2RjtJQUM3RixTQUFTO0lBQ1QsNkJBQTZCLEdBQUk7SUFDakMsb0ZBQW9GO0lBQ3BGLHNCQUFzQixHQUFJO0lBQzFCLG9FQUFvRTtJQUNwRSwyQkFBMkIsR0FBSTtJQUMvQiw4RUFBOEU7SUFDOUUsaUNBQWlDLEdBQUk7SUFDckMsdUZBQXVGO0lBQ3ZGLGdDQUFnQyxHQUFJO0lBQ3BDLDJEQUEyRDtJQUMzRCxvQkFBb0IsR0FBSTtFQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBBIHNoYXJlZCBpbnRlcmZhY2Ugd2hpY2ggY29udGFpbnMgYW4gYW5pbWF0aW9uIHBsYXllclxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllciB7XG4gIHBhcmVudD86IFBsYXllcnxudWxsO1xuICBzdGF0ZTogUGxheVN0YXRlO1xuICBwbGF5KCk6IHZvaWQ7XG4gIHBhdXNlKCk6IHZvaWQ7XG4gIGZpbmlzaCgpOiB2b2lkO1xuICBkZXN0cm95KCk6IHZvaWQ7XG4gIGFkZEV2ZW50TGlzdGVuZXIoc3RhdGU6IFBsYXlTdGF0ZXxzdHJpbmcsIGNiOiAoZGF0YT86IGFueSkgPT4gYW55KTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gQmluZGluZ1R5cGUge1xuICBVbnNldCA9IDAsXG4gIENsYXNzID0gMSxcbiAgU3R5bGUgPSAyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpbmRpbmdTdG9yZSB7XG4gIHNldFZhbHVlKHByb3A6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgd2hpY2ggcHJvZHVjZXMgdGhlIFBsYXllci5cbiAqXG4gKiBVc2VkIHRvIHByb2R1Y2UgYSBwbGF5ZXIgdGhhdCB3aWxsIGJlIHBsYWNlZCBvbiBhbiBlbGVtZW50IHRoYXQgY29udGFpbnNcbiAqIHN0eWxpbmcgYmluZGluZ3MgdGhhdCBtYWtlIHVzZSBvZiB0aGUgcGxheWVyLiBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkXG4gKiB0byBiZSB1c2VkIHdpdGggYFBsYXllckZhY3RvcnlgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllckZhY3RvcnlCdWlsZEZuIHtcbiAgKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBCaW5kaW5nVHlwZSwgdmFsdWVzOiB7W2tleTogc3RyaW5nXTogYW55fSwgaXNGaXJzdFJlbmRlcjogYm9vbGVhbixcbiAgIGN1cnJlbnRQbGF5ZXI6IFBsYXllcnxudWxsKTogUGxheWVyfG51bGw7XG59XG5cbi8qKlxuICogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byBidWlsZCBhIHBsYXllciBmcm9tIGEgc3R5bGluZyB0ZW1wbGF0ZSBiaW5kaW5nXG4gKiAoYFtzdHlsZV1gIGFuZCBgW2NsYXNzXWApLlxuICpcbiAqIFRoZSBgZm5gIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIG9uY2UgYW55IHN0eWxpbmctcmVsYXRlZCBjaGFuZ2VzIGFyZVxuICogZXZhbHVhdGVkIG9uIGFuIGVsZW1lbnQgYW5kIGlzIGV4cGVjdGVkIHRvIHJldHVybiBhIHBsYXllciB0aGF0IHdpbGxcbiAqIGJlIHRoZW4gcnVuIG9uIHRoZSBlbGVtZW50LlxuICpcbiAqIGBbc3R5bGVdYCwgYFtzdHlsZS5wcm9wXWAsIGBbY2xhc3NdYCBhbmQgYFtjbGFzcy5uYW1lXWAgdGVtcGxhdGUgYmluZGluZ3NcbiAqIGFsbCBhY2NlcHQgYSBgUGxheWVyRmFjdG9yeWAgYXMgaW5wdXQgYW5kIHRoaXMgcGxheWVyIGZhY3Rvcmllcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJGYWN0b3J5IHtcbiAgJ19fYnJhbmRfXyc6ICdCcmFuZCBmb3IgUGxheWVyRmFjdG9yeSB0aGF0IG5vdGhpbmcgd2lsbCBtYXRjaCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyQnVpbGRlciBleHRlbmRzIEJpbmRpbmdTdG9yZSB7XG4gIGJ1aWxkUGxheWVyKGN1cnJlbnRQbGF5ZXI6IFBsYXllcnxudWxsLCBpc0ZpcnN0UmVuZGVyOiBib29sZWFuKTogUGxheWVyfHVuZGVmaW5lZHxudWxsO1xufVxuXG4vKipcbiAqIFRoZSBzdGF0ZSBvZiBhIGdpdmVuIHBsYXllclxuICpcbiAqIERvIG5vdCBjaGFuZ2UgdGhlIGluY3JlYXNpbmcgbmF0dXJlIG9mIHRoZSBudW1iZXJzIHNpbmNlIHRoZSBwbGF5ZXJcbiAqIGNvZGUgbWF5IGNvbXBhcmUgc3RhdGUgYnkgY2hlY2tpbmcgaWYgYSBudW1iZXIgaXMgaGlnaGVyIG9yIGxvd2VyIHRoYW5cbiAqIGEgY2VydGFpbiBudW1lcmljIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgZW51bSBQbGF5U3RhdGUge1xuICBQZW5kaW5nID0gMCxcbiAgUnVubmluZyA9IDEsXG4gIFBhdXNlZCA9IDIsXG4gIEZpbmlzaGVkID0gMTAwLFxuICBEZXN0cm95ZWQgPSAyMDBcbn1cblxuLyoqXG4gKiBUaGUgY29udGV4dCB0aGF0IHN0b3JlcyBhbGwgdGhlIGFjdGl2ZSBwbGF5ZXJzIGFuZCBxdWV1ZWQgcGxheWVyIGZhY3RvcmllcyBwcmVzZW50IG9uIGFuIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyQ29udGV4dCBleHRlbmRzIEFycmF5PG51bGx8bnVtYmVyfFBsYXllcnxQbGF5ZXJCdWlsZGVyPiB7XG4gIFtQbGF5ZXJJbmRleC5Ob25CdWlsZGVyUGxheWVyc1N0YXJ0XTogbnVtYmVyO1xuICBbUGxheWVySW5kZXguQ2xhc3NNYXBQbGF5ZXJCdWlsZGVyUG9zaXRpb25dOiBQbGF5ZXJCdWlsZGVyfG51bGw7XG4gIFtQbGF5ZXJJbmRleC5DbGFzc01hcFBsYXllclBvc2l0aW9uXTogUGxheWVyfG51bGw7XG4gIFtQbGF5ZXJJbmRleC5TdHlsZU1hcFBsYXllckJ1aWxkZXJQb3NpdGlvbl06IFBsYXllckJ1aWxkZXJ8bnVsbDtcbiAgW1BsYXllckluZGV4LlN0eWxlTWFwUGxheWVyUG9zaXRpb25dOiBQbGF5ZXJ8bnVsbDtcbn1cblxuLyoqXG4gKiBEZXNpZ25lZCB0byBiZSB1c2VkIGFzIGFuIGluamVjdGlvbiBzZXJ2aWNlIHRvIGNhcHR1cmUgYWxsIGFuaW1hdGlvbiBwbGF5ZXJzLlxuICpcbiAqIFdoZW4gcHJlc2VudCBhbGwgYW5pbWF0aW9uIHBsYXllcnMgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgZmx1c2ggbWV0aG9kIGJlbG93LlxuICogVGhpcyBmZWF0dXJlIGlzIGRlc2lnbmVkIHRvIHNlcnZpY2UgYXBwbGljYXRpb24td2lkZSBhbmltYXRpb24gdGVzdGluZywgbGl2ZVxuICogZGVidWdnaW5nIGFzIHdlbGwgYXMgY3VzdG9tIGFuaW1hdGlvbiBjaG9yZW9ncmFwaGluZyB0b29scy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJIYW5kbGVyIHtcbiAgLyoqXG4gICAqIERlc2lnbmVkIHRvIGtpY2sgb2ZmIHRoZSBwbGF5ZXIgYXQgdGhlIGVuZCBvZiBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAqL1xuICBmbHVzaFBsYXllcnMoKTogdm9pZDtcblxuICAvKipcbiAgICogQHBhcmFtIHBsYXllciBUaGUgcGxheWVyIHRoYXQgaGFzIGJlZW4gc2NoZWR1bGVkIHRvIHJ1biB3aXRoaW4gdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCBhcyB0byB3aGVyZSB0aGUgcGxheWVyIHdhcyBib3VuZCB0b1xuICAgKi9cbiAgcXVldWVQbGF5ZXIocGxheWVyOiBQbGF5ZXIsIGNvbnRleHQ6IENvbXBvbmVudEluc3RhbmNlfERpcmVjdGl2ZUluc3RhbmNlfEhUTUxFbGVtZW50KTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gUGxheWVySW5kZXgge1xuICAvLyBUaGUgcG9zaXRpb24gd2hlcmUgdGhlIGluZGV4IHRoYXQgcmV2ZWFscyB3aGVyZSBwbGF5ZXJzIHN0YXJ0IGluIHRoZSBQbGF5ZXJDb250ZXh0XG4gIE5vbkJ1aWxkZXJQbGF5ZXJzU3RhcnQgPSAwLFxuICAvLyBUaGUgcG9zaXRpb24gd2hlcmUgdGhlIHBsYXllciBidWlsZGVyIGxpdmVzICh3aGljaCBoYW5kbGVzIHtrZXk6dmFsdWV9IG1hcCBleHByZXNzaW9uKSBmb3JcbiAgLy8gY2xhc3Nlc1xuICBDbGFzc01hcFBsYXllckJ1aWxkZXJQb3NpdGlvbiA9IDEsXG4gIC8vIFRoZSBwb3NpdGlvbiB3aGVyZSB0aGUgbGFzdCBwbGF5ZXIgYXNzaWduZWQgdG8gdGhlIGNsYXNzIHBsYXllciBidWlsZGVyIGlzIHN0b3JlZFxuICBDbGFzc01hcFBsYXllclBvc2l0aW9uID0gMixcbiAgLy8gVGhlIHBvc2l0aW9uIHdoZXJlIHRoZSBwbGF5ZXIgYnVpbGRlciBsaXZlcyAod2hpY2ggaGFuZGxlcyB7a2V5OnZhbHVlfSBtYXAgZXhwcmVzc2lvbikgZm9yXG4gIC8vIHN0eWxlc1xuICBTdHlsZU1hcFBsYXllckJ1aWxkZXJQb3NpdGlvbiA9IDMsXG4gIC8vIFRoZSBwb3NpdGlvbiB3aGVyZSB0aGUgbGFzdCBwbGF5ZXIgYXNzaWduZWQgdG8gdGhlIHN0eWxlIHBsYXllciBidWlsZGVyIGlzIHN0b3JlZFxuICBTdHlsZU1hcFBsYXllclBvc2l0aW9uID0gNCxcbiAgLy8gVGhlIHBvc2l0aW9uIHdoZXJlIGFueSBwbGF5ZXIgYnVpbGRlcnMgc3RhcnQgaW4gdGhlIFBsYXllckNvbnRleHRcbiAgUGxheWVyQnVpbGRlcnNTdGFydFBvc2l0aW9uID0gMSxcbiAgLy8gVGhlIHBvc2l0aW9uIHdoZXJlIG5vbiBtYXAtYmFzZWQgcGxheWVyIGJ1aWxkZXJzIHN0YXJ0IGluIHRoZSBQbGF5ZXJDb250ZXh0XG4gIFNpbmdsZVBsYXllckJ1aWxkZXJzU3RhcnRQb3NpdGlvbiA9IDUsXG4gIC8vIEZvciBlYWNoIHBsYXllciBidWlsZGVyIHRoZXJlIGlzIGEgcGxheWVyIGluIHRoZSBwbGF5ZXIgY29udGV4dCAodGhlcmVmb3JlIHNpemUgPSAyKVxuICBQbGF5ZXJBbmRQbGF5ZXJCdWlsZGVyc1R1cGxlU2l6ZSA9IDIsXG4gIC8vIFRoZSBwbGF5ZXIgZXhpc3RzIG5leHQgdG8gdGhlIHBsYXllciBidWlsZGVyIGluIHRoZSBsaXN0XG4gIFBsYXllck9mZnNldFBvc2l0aW9uID0gMSxcbn1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBDb21wb25lbnRJbnN0YW5jZSA9IHt9O1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBEaXJlY3RpdmVJbnN0YW5jZSA9IHt9O1xuIl19