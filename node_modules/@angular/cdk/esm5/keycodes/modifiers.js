/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
export function hasModifierKey(event) {
    var modifiers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        modifiers[_i - 1] = arguments[_i];
    }
    if (modifiers.length) {
        return modifiers.some(function (modifier) { return event[modifier]; });
    }
    return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZpZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9rZXljb2Rlcy9tb2RpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUg7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFvQjtJQUFFLG1CQUEyQjtTQUEzQixVQUEyQixFQUEzQixxQkFBMkIsRUFBM0IsSUFBMkI7UUFBM0Isa0NBQTJCOztJQUM5RSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7UUFDcEIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEO0lBRUQsT0FBTyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQzFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxudHlwZSBNb2RpZmllcktleSA9ICdhbHRLZXknIHwgJ3NoaWZ0S2V5JyB8ICdjdHJsS2V5JyB8ICdtZXRhS2V5JztcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhIG1vZGlmaWVyIGtleSBpcyBwcmVzc2VkLlxuICogQHBhcmFtIGV2ZW50IEV2ZW50IHRvIGJlIGNoZWNrZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNNb2RpZmllcktleShldmVudDogS2V5Ym9hcmRFdmVudCwgLi4ubW9kaWZpZXJzOiBNb2RpZmllcktleVtdKTogYm9vbGVhbiB7XG4gIGlmIChtb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVycy5zb21lKG1vZGlmaWVyID0+IGV2ZW50W21vZGlmaWVyXSk7XG4gIH1cblxuICByZXR1cm4gZXZlbnQuYWx0S2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleTtcbn1cbiJdfQ==