/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/key-manager/list-key-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { QueryList } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, TAB, A, Z, ZERO, NINE, hasModifierKey, } from '@angular/cdk/keycodes';
import { debounceTime, filter, map, tap } from 'rxjs/operators';
/**
 * This interface is for items that can be passed to a ListKeyManager.
 * @record
 */
export function ListKeyManagerOption() { }
if (false) {
    /**
     * Whether the option is disabled.
     * @type {?|undefined}
     */
    ListKeyManagerOption.prototype.disabled;
    /**
     * Gets the label for this option.
     * @return {?}
     */
    ListKeyManagerOption.prototype.getLabel = function () { };
}
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */
export class ListKeyManager {
    /**
     * @param {?} _items
     */
    constructor(_items) {
        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new Subject();
        this._typeaheadSubscription = Subscription.EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */
        this._skipPredicateFn = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.disabled);
        // Buffer for the letters that the user has pressed when the typeahead option is turned on.
        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new Subject();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */
        this.change = new Subject();
        // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (_items instanceof QueryList) {
            _items.changes.subscribe((/**
             * @param {?} newItems
             * @return {?}
             */
            (newItems) => {
                if (this._activeItem) {
                    /** @type {?} */
                    const itemArray = newItems.toArray();
                    /** @type {?} */
                    const newIndex = itemArray.indexOf(this._activeItem);
                    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
                        this._activeItemIndex = newIndex;
                    }
                }
            }));
        }
    }
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @template THIS
     * @this {THIS}
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {THIS}
     */
    skipPredicate(predicate) {
        (/** @type {?} */ (this))._skipPredicateFn = predicate;
        return (/** @type {?} */ (this));
    }
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @template THIS
     * @this {THIS}
     * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
     * @return {THIS}
     */
    withWrap(shouldWrap = true) {
        (/** @type {?} */ (this))._wrap = shouldWrap;
        return (/** @type {?} */ (this));
    }
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @template THIS
     * @this {THIS}
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {THIS}
     */
    withVerticalOrientation(enabled = true) {
        (/** @type {?} */ (this))._vertical = enabled;
        return (/** @type {?} */ (this));
    }
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @template THIS
     * @this {THIS}
     * @param {?} direction Direction in which the selection can be moved.
     * @return {THIS}
     */
    withHorizontalOrientation(direction) {
        (/** @type {?} */ (this))._horizontal = direction;
        return (/** @type {?} */ (this));
    }
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     * @template THIS
     * @this {THIS}
     * @param {?} keys
     * @return {THIS}
     */
    withAllowedModifierKeys(keys) {
        (/** @type {?} */ (this))._allowedModifierKeys = keys;
        return (/** @type {?} */ (this));
    }
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @template THIS
     * @this {THIS}
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {THIS}
     */
    withTypeAhead(debounceInterval = 200) {
        if ((/** @type {?} */ (this))._items.length && (/** @type {?} */ (this))._items.some((/**
         * @param {?} item
         * @return {?}
         */
        item => typeof item.getLabel !== 'function'))) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        (/** @type {?} */ (this))._typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.
        (/** @type {?} */ (this))._typeaheadSubscription = (/** @type {?} */ (this))._letterKeyStream.pipe(tap((/**
         * @param {?} letter
         * @return {?}
         */
        letter => (/** @type {?} */ (this))._pressedLetters.push(letter))), debounceTime(debounceInterval), filter((/**
         * @return {?}
         */
        () => (/** @type {?} */ (this))._pressedLetters.length > 0)), map((/**
         * @return {?}
         */
        () => (/** @type {?} */ (this))._pressedLetters.join('')))).subscribe((/**
         * @param {?} inputString
         * @return {?}
         */
        inputString => {
            /** @type {?} */
            const items = (/** @type {?} */ (this))._getItemsArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (let i = 1; i < items.length + 1; i++) {
                /** @type {?} */
                const index = ((/** @type {?} */ (this))._activeItemIndex + i) % items.length;
                /** @type {?} */
                const item = items[index];
                if (!(/** @type {?} */ (this))._skipPredicateFn(item) &&
                    (/** @type {?} */ (item.getLabel))().toUpperCase().trim().indexOf(inputString) === 0) {
                    (/** @type {?} */ (this)).setActiveItem(index);
                    break;
                }
            }
            (/** @type {?} */ (this))._pressedLetters = [];
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setActiveItem(item) {
        /** @type {?} */
        const previousIndex = this._activeItemIndex;
        this.updateActiveItem(item);
        if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
        }
    }
    /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    onKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
        /** @type {?} */
        const isModifierAllowed = modifiers.every((/**
         * @param {?} modifier
         * @return {?}
         */
        modifier => {
            return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
        }));
        switch (keyCode) {
            case TAB:
                this.tabOut.next();
                return;
            case DOWN_ARROW:
                if (this._vertical && isModifierAllowed) {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case UP_ARROW:
                if (this._vertical && isModifierAllowed) {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case RIGHT_ARROW:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case LEFT_ARROW:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            default:
                if (isModifierAllowed || hasModifierKey(event, 'shiftKey')) {
                    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                    // otherwise fall back to resolving alphanumeric characters via the keyCode.
                    if (event.key && event.key.length === 1) {
                        this._letterKeyStream.next(event.key.toLocaleUpperCase());
                    }
                    else if ((keyCode >= A && keyCode <= Z) || (keyCode >= ZERO && keyCode <= NINE)) {
                        this._letterKeyStream.next(String.fromCharCode(keyCode));
                    }
                }
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        this._pressedLetters = [];
        event.preventDefault();
    }
    /**
     * Index of the currently active item.
     * @return {?}
     */
    get activeItemIndex() {
        return this._activeItemIndex;
    }
    /**
     * The active item.
     * @return {?}
     */
    get activeItem() {
        return this._activeItem;
    }
    /**
     * Gets whether the user is currently typing into the manager using the typeahead feature.
     * @return {?}
     */
    isTyping() {
        return this._pressedLetters.length > 0;
    }
    /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    setFirstItemActive() {
        this._setActiveItemByIndex(0, 1);
    }
    /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    setLastItemActive() {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    }
    /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    setNextItemActive() {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    }
    /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    setPreviousItemActive() {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    updateActiveItem(item) {
        /** @type {?} */
        const itemArray = this._getItemsArray();
        /** @type {?} */
        const index = typeof item === 'number' ? item : itemArray.indexOf(item);
        /** @type {?} */
        const activeItem = itemArray[index];
        // Explicitly check for `null` and `undefined` because other falsy values are valid.
        this._activeItem = activeItem == null ? null : activeItem;
        this._activeItemIndex = index;
    }
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @private
     * @param {?} delta
     * @return {?}
     */
    _setActiveItemByDelta(delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
    }
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @private
     * @param {?} delta
     * @return {?}
     */
    _setActiveInWrapMode(delta) {
        /** @type {?} */
        const items = this._getItemsArray();
        for (let i = 1; i <= items.length; i++) {
            /** @type {?} */
            const index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            /** @type {?} */
            const item = items[index];
            if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    }
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @private
     * @param {?} delta
     * @return {?}
     */
    _setActiveInDefaultMode(delta) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
    }
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @private
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */
    _setActiveItemByIndex(index, fallbackDelta) {
        /** @type {?} */
        const items = this._getItemsArray();
        if (!items[index]) {
            return;
        }
        while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    }
    /**
     * Returns the items as an array.
     * @private
     * @return {?}
     */
    _getItemsArray() {
        return this._items instanceof QueryList ? this._items.toArray() : this._items;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListKeyManager.prototype._activeItemIndex;
    /**
     * @type {?}
     * @private
     */
    ListKeyManager.prototype._activeItem;
    /**
     * @type {?}
     * @private
     */
    ListKeyManager.prototype._wrap;
    /**
     * @type {?}
     * @private
     */
    ListKeyManager.prototype._letterKeyStream;
    /**
     * @type {?}
     * @private
     */
    ListKeyManager.prototype._typeaheadSubscription;
    /**
     * @type {?}
     * @private
     */
    ListKeyManager.prototype._vertical;
    /**
     * @type {?}
     * @private
     */
    ListKeyManager.prototype._horizontal;
    /**
     * @type {?}
     * @private
     */
    ListKeyManager.prototype._allowedModifierKeys;
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager. By default, disabled items are skipped.
     * @type {?}
     * @private
     */
    ListKeyManager.prototype._skipPredicateFn;
    /**
     * @type {?}
     * @private
     */
    ListKeyManager.prototype._pressedLetters;
    /**
     * Stream that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     * @type {?}
     */
    ListKeyManager.prototype.tabOut;
    /**
     * Stream that emits whenever the active item of the list manager changes.
     * @type {?}
     */
    ListKeyManager.prototype.change;
    /**
     * @type {?}
     * @private
     */
    ListKeyManager.prototype._items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1rZXktbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvYTExeS9rZXktbWFuYWdlci9saXN0LWtleS1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUNMLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxHQUFHLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxJQUFJLEVBQ0osSUFBSSxFQUNKLGNBQWMsR0FDZixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFHOUQsMENBTUM7Ozs7OztJQUpDLHdDQUFtQjs7Ozs7SUFHbkIsMERBQW9COzs7Ozs7O0FBVXRCLE1BQU0sT0FBTyxjQUFjOzs7O0lBbUJ6QixZQUFvQixNQUEwQjtRQUExQixXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQWxCdEMscUJBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsZ0JBQVcsR0FBYSxJQUFJLENBQUM7UUFDN0IsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDekMsMkJBQXNCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUM1QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLHlCQUFvQixHQUFnQyxFQUFFLENBQUM7Ozs7O1FBTXZELHFCQUFnQjs7OztRQUFHLENBQUMsSUFBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDOztRQUc5QyxvQkFBZSxHQUFh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LENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDMUMsS0FBSyxJQUFJLGFBQWEsQ0FBQztZQUV2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixPQUFPO2FBQ1I7U0FDRjtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBR08sY0FBYztRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hGLENBQUM7Q0FDRjs7Ozs7O0lBM1ZDLDBDQUE4Qjs7Ozs7SUFDOUIscUNBQXFDOzs7OztJQUNyQywrQkFBc0I7Ozs7O0lBQ3RCLDBDQUFpRDs7Ozs7SUFDakQsZ0RBQW9EOzs7OztJQUNwRCxtQ0FBeUI7Ozs7O0lBQ3pCLHFDQUEwQzs7Ozs7SUFDMUMsOENBQStEOzs7Ozs7O0lBTS9ELDBDQUFzRDs7Ozs7SUFHdEQseUNBQXVDOzs7Ozs7SUF3QnZDLGdDQUE0Qzs7Ozs7SUFHNUMsZ0NBQStCOzs7OztJQXpCbkIsZ0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UXVlcnlMaXN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIFVQX0FSUk9XLFxuICBET1dOX0FSUk9XLFxuICBMRUZUX0FSUk9XLFxuICBSSUdIVF9BUlJPVyxcbiAgVEFCLFxuICBBLFxuICBaLFxuICBaRVJPLFxuICBOSU5FLFxuICBoYXNNb2RpZmllcktleSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBmaWx0ZXIsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBUaGlzIGludGVyZmFjZSBpcyBmb3IgaXRlbXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgTGlzdEtleU1hbmFnZXIuICovXG5leHBvcnQgaW50ZXJmYWNlIExpc3RLZXlNYW5hZ2VyT3B0aW9uIHtcbiAgLyoqIFdoZXRoZXIgdGhlIG9wdGlvbiBpcyBkaXNhYmxlZC4gKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIC8qKiBHZXRzIHRoZSBsYWJlbCBmb3IgdGhpcyBvcHRpb24uICovXG4gIGdldExhYmVsPygpOiBzdHJpbmc7XG59XG5cbi8qKiBNb2RpZmllciBrZXlzIGhhbmRsZWQgYnkgdGhlIExpc3RLZXlNYW5hZ2VyLiAqL1xuZXhwb3J0IHR5cGUgTGlzdEtleU1hbmFnZXJNb2RpZmllcktleSA9ICdhbHRLZXknIHwgJ2N0cmxLZXknIHwgJ21ldGFLZXknIHwgJ3NoaWZ0S2V5JztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIG1hbmFnZXMga2V5Ym9hcmQgZXZlbnRzIGZvciBzZWxlY3RhYmxlIGxpc3RzLiBJZiB5b3UgcGFzcyBpdCBhIHF1ZXJ5IGxpc3RcbiAqIG9mIGl0ZW1zLCBpdCB3aWxsIHNldCB0aGUgYWN0aXZlIGl0ZW0gY29ycmVjdGx5IHdoZW4gYXJyb3cgZXZlbnRzIG9jY3VyLlxuICovXG5leHBvcnQgY2xhc3MgTGlzdEtleU1hbmFnZXI8VCBleHRlbmRzIExpc3RLZXlNYW5hZ2VyT3B0aW9uPiB7XG4gIHByaXZhdGUgX2FjdGl2ZUl0ZW1JbmRleCA9IC0xO1xuICBwcml2YXRlIF9hY3RpdmVJdGVtOiBUIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3dyYXAgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGV0dGVyS2V5U3RyZWFtID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBwcml2YXRlIF90eXBlYWhlYWRTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaG9yaXpvbnRhbDogJ2x0cicgfCAncnRsJyB8IG51bGw7XG4gIHByaXZhdGUgX2FsbG93ZWRNb2RpZmllcktleXM6IExpc3RLZXlNYW5hZ2VyTW9kaWZpZXJLZXlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBjaGVjayB3aGV0aGVyIGFuIGl0ZW0gc2hvdWxkIGJlIHNraXBwZWRcbiAgICogYnkgdGhlIGtleSBtYW5hZ2VyLiBCeSBkZWZhdWx0LCBkaXNhYmxlZCBpdGVtcyBhcmUgc2tpcHBlZC5cbiAgICovXG4gIHByaXZhdGUgX3NraXBQcmVkaWNhdGVGbiA9IChpdGVtOiBUKSA9PiBpdGVtLmRpc2FibGVkO1xuXG4gIC8vIEJ1ZmZlciBmb3IgdGhlIGxldHRlcnMgdGhhdCB0aGUgdXNlciBoYXMgcHJlc3NlZCB3aGVuIHRoZSB0eXBlYWhlYWQgb3B0aW9uIGlzIHR1cm5lZCBvbi5cbiAgcHJpdmF0ZSBfcHJlc3NlZExldHRlcnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaXRlbXM6IFF1ZXJ5TGlzdDxUPiB8IFRbXSkge1xuICAgIC8vIFdlIGFsbG93IGZvciB0aGUgaXRlbXMgdG8gYmUgYW4gYXJyYXkgYmVjYXVzZSwgaW4gc29tZSBjYXNlcywgdGhlIGNvbnN1bWVyIG1heVxuICAgIC8vIG5vdCBoYXZlIGFjY2VzcyB0byBhIFF1ZXJ5TGlzdCBvZiB0aGUgaXRlbXMgdGhleSB3YW50IHRvIG1hbmFnZSAoZS5nLiB3aGVuIHRoZVxuICAgIC8vIGl0ZW1zIGFyZW4ndCBiZWluZyBjb2xsZWN0ZWQgdmlhIGBWaWV3Q2hpbGRyZW5gIG9yIGBDb250ZW50Q2hpbGRyZW5gKS5cbiAgICBpZiAoX2l0ZW1zIGluc3RhbmNlb2YgUXVlcnlMaXN0KSB7XG4gICAgICBfaXRlbXMuY2hhbmdlcy5zdWJzY3JpYmUoKG5ld0l0ZW1zOiBRdWVyeUxpc3Q8VD4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUl0ZW0pIHtcbiAgICAgICAgICBjb25zdCBpdGVtQXJyYXkgPSBuZXdJdGVtcy50b0FycmF5KCk7XG4gICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBpdGVtQXJyYXkuaW5kZXhPZih0aGlzLl9hY3RpdmVJdGVtKTtcblxuICAgICAgICAgIGlmIChuZXdJbmRleCA+IC0xICYmIG5ld0luZGV4ICE9PSB0aGlzLl9hY3RpdmVJdGVtSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUl0ZW1JbmRleCA9IG5ld0luZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0cmVhbSB0aGF0IGVtaXRzIGFueSB0aW1lIHRoZSBUQUIga2V5IGlzIHByZXNzZWQsIHNvIGNvbXBvbmVudHMgY2FuIHJlYWN0XG4gICAqIHdoZW4gZm9jdXMgaXMgc2hpZnRlZCBvZmYgb2YgdGhlIGxpc3QuXG4gICAqL1xuICB0YWJPdXQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgYWN0aXZlIGl0ZW0gb2YgdGhlIGxpc3QgbWFuYWdlciBjaGFuZ2VzLiAqL1xuICBjaGFuZ2UgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hpY2ggaXRlbXMgc2hvdWxkIGJlIHNraXBwZWQgYnkgdGhlXG4gICAqIGxpc3Qga2V5IG1hbmFnZXIuXG4gICAqIEBwYXJhbSBwcmVkaWNhdGUgRnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGl0ZW0gc2hvdWxkIGJlIHNraXBwZWQuXG4gICAqL1xuICBza2lwUHJlZGljYXRlKHByZWRpY2F0ZTogKGl0ZW06IFQpID0+IGJvb2xlYW4pOiB0aGlzIHtcbiAgICB0aGlzLl9za2lwUHJlZGljYXRlRm4gPSBwcmVkaWNhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB3cmFwcGluZyBtb2RlLCB3aGljaCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGFjdGl2ZSBpdGVtIHdpbGwgd3JhcCB0b1xuICAgKiB0aGUgb3RoZXIgZW5kIG9mIGxpc3Qgd2hlbiB0aGVyZSBhcmUgbm8gbW9yZSBpdGVtcyBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBAcGFyYW0gc2hvdWxkV3JhcCBXaGV0aGVyIHRoZSBsaXN0IHNob3VsZCB3cmFwIHdoZW4gcmVhY2hpbmcgdGhlIGVuZC5cbiAgICovXG4gIHdpdGhXcmFwKHNob3VsZFdyYXAgPSB0cnVlKTogdGhpcyB7XG4gICAgdGhpcy5fd3JhcCA9IHNob3VsZFdyYXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB3aGV0aGVyIHRoZSBrZXkgbWFuYWdlciBzaG91bGQgYmUgYWJsZSB0byBtb3ZlIHRoZSBzZWxlY3Rpb24gdmVydGljYWxseS5cbiAgICogQHBhcmFtIGVuYWJsZWQgV2hldGhlciB2ZXJ0aWNhbCBzZWxlY3Rpb24gc2hvdWxkIGJlIGVuYWJsZWQuXG4gICAqL1xuICB3aXRoVmVydGljYWxPcmllbnRhdGlvbihlbmFibGVkOiBib29sZWFuID0gdHJ1ZSk6IHRoaXMge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gZW5hYmxlZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBrZXkgbWFuYWdlciB0byBtb3ZlIHRoZSBzZWxlY3Rpb24gaG9yaXpvbnRhbGx5LlxuICAgKiBQYXNzaW5nIGluIGBudWxsYCB3aWxsIGRpc2FibGUgaG9yaXpvbnRhbCBtb3ZlbWVudC5cbiAgICogQHBhcmFtIGRpcmVjdGlvbiBEaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQuXG4gICAqL1xuICB3aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKGRpcmVjdGlvbjogJ2x0cicgfCAncnRsJyB8IG51bGwpOiB0aGlzIHtcbiAgICB0aGlzLl9ob3Jpem9udGFsID0gZGlyZWN0aW9uO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIGtleXMgd2hpY2ggYXJlIGFsbG93ZWQgdG8gYmUgaGVsZCBkb3duIGFuZCB3aG9zZSBkZWZhdWx0IGFjdGlvbnMgd2lsbCBiZSBwcmV2ZW50ZWRcbiAgICogYXMgdGhlIHVzZXIgaXMgcHJlc3NpbmcgdGhlIGFycm93IGtleXMuIERlZmF1bHRzIHRvIG5vdCBhbGxvd2luZyBhbnkgbW9kaWZpZXIga2V5cy5cbiAgICovXG4gIHdpdGhBbGxvd2VkTW9kaWZpZXJLZXlzKGtleXM6IExpc3RLZXlNYW5hZ2VyTW9kaWZpZXJLZXlbXSk6IHRoaXMge1xuICAgIHRoaXMuX2FsbG93ZWRNb2RpZmllcktleXMgPSBrZXlzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm5zIG9uIHR5cGVhaGVhZCBtb2RlIHdoaWNoIGFsbG93cyB1c2VycyB0byBzZXQgdGhlIGFjdGl2ZSBpdGVtIGJ5IHR5cGluZy5cbiAgICogQHBhcmFtIGRlYm91bmNlSW50ZXJ2YWwgVGltZSB0byB3YWl0IGFmdGVyIHRoZSBsYXN0IGtleXN0cm9rZSBiZWZvcmUgc2V0dGluZyB0aGUgYWN0aXZlIGl0ZW0uXG4gICAqL1xuICB3aXRoVHlwZUFoZWFkKGRlYm91bmNlSW50ZXJ2YWw6IG51bWJlciA9IDIwMCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9pdGVtcy5sZW5ndGggJiYgdGhpcy5faXRlbXMuc29tZShpdGVtID0+IHR5cGVvZiBpdGVtLmdldExhYmVsICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0xpc3RLZXlNYW5hZ2VyIGl0ZW1zIGluIHR5cGVhaGVhZCBtb2RlIG11c3QgaW1wbGVtZW50IHRoZSBgZ2V0TGFiZWxgIG1ldGhvZC4nKTtcbiAgICB9XG5cbiAgICB0aGlzLl90eXBlYWhlYWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIC8vIERlYm91bmNlIHRoZSBwcmVzc2VzIG9mIG5vbi1uYXZpZ2F0aW9uYWwga2V5cywgY29sbGVjdCB0aGUgb25lcyB0aGF0IGNvcnJlc3BvbmQgdG8gbGV0dGVyc1xuICAgIC8vIGFuZCBjb252ZXJ0IHRob3NlIGxldHRlcnMgYmFjayBpbnRvIGEgc3RyaW5nLiBBZnRlcndhcmRzIGZpbmQgdGhlIGZpcnN0IGl0ZW0gdGhhdCBzdGFydHNcbiAgICAvLyB3aXRoIHRoYXQgc3RyaW5nIGFuZCBzZWxlY3QgaXQuXG4gICAgdGhpcy5fdHlwZWFoZWFkU3Vic2NyaXB0aW9uID0gdGhpcy5fbGV0dGVyS2V5U3RyZWFtLnBpcGUoXG4gICAgICB0YXAobGV0dGVyID0+IHRoaXMuX3ByZXNzZWRMZXR0ZXJzLnB1c2gobGV0dGVyKSksXG4gICAgICBkZWJvdW5jZVRpbWUoZGVib3VuY2VJbnRlcnZhbCksXG4gICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fcHJlc3NlZExldHRlcnMubGVuZ3RoID4gMCksXG4gICAgICBtYXAoKCkgPT4gdGhpcy5fcHJlc3NlZExldHRlcnMuam9pbignJykpXG4gICAgKS5zdWJzY3JpYmUoaW5wdXRTdHJpbmcgPT4ge1xuICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLl9nZXRJdGVtc0FycmF5KCk7XG5cbiAgICAgIC8vIFN0YXJ0IGF0IDEgYmVjYXVzZSB3ZSB3YW50IHRvIHN0YXJ0IHNlYXJjaGluZyBhdCB0aGUgaXRlbSBpbW1lZGlhdGVseVxuICAgICAgLy8gZm9sbG93aW5nIHRoZSBjdXJyZW50IGFjdGl2ZSBpdGVtLlxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpdGVtcy5sZW5ndGggKyAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSAodGhpcy5fYWN0aXZlSXRlbUluZGV4ICsgaSkgJSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG5cbiAgICAgICAgaWYgKCF0aGlzLl9za2lwUHJlZGljYXRlRm4oaXRlbSkgJiZcbiAgICAgICAgICAgIGl0ZW0uZ2V0TGFiZWwhKCkudG9VcHBlckNhc2UoKS50cmltKCkuaW5kZXhPZihpbnB1dFN0cmluZykgPT09IDApIHtcblxuICAgICAgICAgIHRoaXMuc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcHJlc3NlZExldHRlcnMgPSBbXTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHRvIHRoZSBpdGVtIGF0IHRoZSBpbmRleCBzcGVjaWZpZWQuXG4gICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gYmUgc2V0IGFzIGFjdGl2ZS5cbiAgICovXG4gIHNldEFjdGl2ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHRvIHRoZSBzcGVjaWZpZWQgaXRlbS5cbiAgICogQHBhcmFtIGl0ZW0gVGhlIGl0ZW0gdG8gYmUgc2V0IGFzIGFjdGl2ZS5cbiAgICovXG4gIHNldEFjdGl2ZUl0ZW0oaXRlbTogVCk6IHZvaWQ7XG5cbiAgc2V0QWN0aXZlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gdGhpcy5fYWN0aXZlSXRlbUluZGV4O1xuXG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtKGl0ZW0pO1xuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZUl0ZW1JbmRleCAhPT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgdGhpcy5jaGFuZ2UubmV4dCh0aGlzLl9hY3RpdmVJdGVtSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhY3RpdmUgaXRlbSBkZXBlbmRpbmcgb24gdGhlIGtleSBldmVudCBwYXNzZWQgaW4uXG4gICAqIEBwYXJhbSBldmVudCBLZXlib2FyZCBldmVudCB0byBiZSB1c2VkIGZvciBkZXRlcm1pbmluZyB3aGljaCBlbGVtZW50IHNob3VsZCBiZSBhY3RpdmUuXG4gICAqL1xuICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICBjb25zdCBtb2RpZmllcnM6IExpc3RLZXlNYW5hZ2VyTW9kaWZpZXJLZXlbXSA9IFsnYWx0S2V5JywgJ2N0cmxLZXknLCAnbWV0YUtleScsICdzaGlmdEtleSddO1xuICAgIGNvbnN0IGlzTW9kaWZpZXJBbGxvd2VkID0gbW9kaWZpZXJzLmV2ZXJ5KG1vZGlmaWVyID0+IHtcbiAgICAgIHJldHVybiAhZXZlbnRbbW9kaWZpZXJdIHx8IHRoaXMuX2FsbG93ZWRNb2RpZmllcktleXMuaW5kZXhPZihtb2RpZmllcikgPiAtMTtcbiAgICB9KTtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBUQUI6XG4gICAgICAgIHRoaXMudGFiT3V0Lm5leHQoKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIGlmICh0aGlzLl92ZXJ0aWNhbCAmJiBpc01vZGlmaWVyQWxsb3dlZCkge1xuICAgICAgICAgIHRoaXMuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMuX3ZlcnRpY2FsICYmIGlzTW9kaWZpZXJBbGxvd2VkKSB7XG4gICAgICAgICAgdGhpcy5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMuX2hvcml6b250YWwgJiYgaXNNb2RpZmllckFsbG93ZWQpIHtcbiAgICAgICAgICB0aGlzLl9ob3Jpem9udGFsID09PSAncnRsJyA/IHRoaXMuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCkgOiB0aGlzLnNldE5leHRJdGVtQWN0aXZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMuX2hvcml6b250YWwgJiYgaXNNb2RpZmllckFsbG93ZWQpIHtcbiAgICAgICAgICB0aGlzLl9ob3Jpem9udGFsID09PSAncnRsJyA/IHRoaXMuc2V0TmV4dEl0ZW1BY3RpdmUoKSA6IHRoaXMuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoaXNNb2RpZmllckFsbG93ZWQgfHwgaGFzTW9kaWZpZXJLZXkoZXZlbnQsICdzaGlmdEtleScpKSB7XG4gICAgICAgICAgLy8gQXR0ZW1wdCB0byB1c2UgdGhlIGBldmVudC5rZXlgIHdoaWNoIGFsc28gbWFwcyBpdCB0byB0aGUgdXNlcidzIGtleWJvYXJkIGxhbmd1YWdlLFxuICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gcmVzb2x2aW5nIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIHZpYSB0aGUga2V5Q29kZS5cbiAgICAgICAgICBpZiAoZXZlbnQua2V5ICYmIGV2ZW50LmtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2xldHRlcktleVN0cmVhbS5uZXh0KGV2ZW50LmtleS50b0xvY2FsZVVwcGVyQ2FzZSgpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKChrZXlDb2RlID49IEEgJiYga2V5Q29kZSA8PSBaKSB8fCAoa2V5Q29kZSA+PSBaRVJPICYmIGtleUNvZGUgPD0gTklORSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2xldHRlcktleVN0cmVhbS5uZXh0KFN0cmluZy5mcm9tQ2hhckNvZGUoa2V5Q29kZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSByZXR1cm4gaGVyZSwgaW4gb3JkZXIgdG8gYXZvaWQgcHJldmVudGluZ1xuICAgICAgICAvLyB0aGUgZGVmYXVsdCBhY3Rpb24gb2Ygbm9uLW5hdmlnYXRpb25hbCBrZXlzLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcHJlc3NlZExldHRlcnMgPSBbXTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLyoqIEluZGV4IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIGl0ZW0uICovXG4gIGdldCBhY3RpdmVJdGVtSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUl0ZW1JbmRleDtcbiAgfVxuXG4gIC8qKiBUaGUgYWN0aXZlIGl0ZW0uICovXG4gIGdldCBhY3RpdmVJdGVtKCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlSXRlbTtcbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgdGhlIHVzZXIgaXMgY3VycmVudGx5IHR5cGluZyBpbnRvIHRoZSBtYW5hZ2VyIHVzaW5nIHRoZSB0eXBlYWhlYWQgZmVhdHVyZS4gKi9cbiAgaXNUeXBpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXNzZWRMZXR0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgYWN0aXZlIGl0ZW0gdG8gdGhlIGZpcnN0IGVuYWJsZWQgaXRlbSBpbiB0aGUgbGlzdC4gKi9cbiAgc2V0Rmlyc3RJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldEFjdGl2ZUl0ZW1CeUluZGV4KDAsIDEpO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHRvIHRoZSBsYXN0IGVuYWJsZWQgaXRlbSBpbiB0aGUgbGlzdC4gKi9cbiAgc2V0TGFzdEl0ZW1BY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0QWN0aXZlSXRlbUJ5SW5kZXgodGhpcy5faXRlbXMubGVuZ3RoIC0gMSwgLTEpO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHRvIHRoZSBuZXh0IGVuYWJsZWQgaXRlbSBpbiB0aGUgbGlzdC4gKi9cbiAgc2V0TmV4dEl0ZW1BY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5fYWN0aXZlSXRlbUluZGV4IDwgMCA/IHRoaXMuc2V0Rmlyc3RJdGVtQWN0aXZlKCkgOiB0aGlzLl9zZXRBY3RpdmVJdGVtQnlEZWx0YSgxKTtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBhY3RpdmUgaXRlbSB0byBhIHByZXZpb3VzIGVuYWJsZWQgaXRlbSBpbiB0aGUgbGlzdC4gKi9cbiAgc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMuX2FjdGl2ZUl0ZW1JbmRleCA8IDAgJiYgdGhpcy5fd3JhcCA/IHRoaXMuc2V0TGFzdEl0ZW1BY3RpdmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX3NldEFjdGl2ZUl0ZW1CeURlbHRhKC0xKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3Mgc2V0dGluZyB0aGUgYWN0aXZlIHdpdGhvdXQgYW55IG90aGVyIGVmZmVjdHMuXG4gICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgaXRlbSB0byBiZSBzZXQgYXMgYWN0aXZlLlxuICAgKi9cbiAgdXBkYXRlQWN0aXZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogQWxsb3dzIHNldHRpbmcgdGhlIGFjdGl2ZSBpdGVtIHdpdGhvdXQgYW55IG90aGVyIGVmZmVjdHMuXG4gICAqIEBwYXJhbSBpdGVtIEl0ZW0gdG8gYmUgc2V0IGFzIGFjdGl2ZS5cbiAgICovXG4gIHVwZGF0ZUFjdGl2ZUl0ZW0oaXRlbTogVCk6IHZvaWQ7XG5cbiAgdXBkYXRlQWN0aXZlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtQXJyYXkgPSB0aGlzLl9nZXRJdGVtc0FycmF5KCk7XG4gICAgY29uc3QgaW5kZXggPSB0eXBlb2YgaXRlbSA9PT0gJ251bWJlcicgPyBpdGVtIDogaXRlbUFycmF5LmluZGV4T2YoaXRlbSk7XG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IGl0ZW1BcnJheVtpbmRleF07XG5cbiAgICAvLyBFeHBsaWNpdGx5IGNoZWNrIGZvciBgbnVsbGAgYW5kIGB1bmRlZmluZWRgIGJlY2F1c2Ugb3RoZXIgZmFsc3kgdmFsdWVzIGFyZSB2YWxpZC5cbiAgICB0aGlzLl9hY3RpdmVJdGVtID0gYWN0aXZlSXRlbSA9PSBudWxsID8gbnVsbCA6IGFjdGl2ZUl0ZW07XG4gICAgdGhpcy5fYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2V0cyB0aGUgYWN0aXZlIGl0ZW0sIGdpdmVuIGEgbGlzdCBvZiBpdGVtcyBhbmQgdGhlIGRlbHRhIGJldHdlZW4gdGhlXG4gICAqIGN1cnJlbnRseSBhY3RpdmUgaXRlbSBhbmQgdGhlIG5ldyBhY3RpdmUgaXRlbS4gSXQgd2lsbCBjYWxjdWxhdGUgZGlmZmVyZW50bHlcbiAgICogZGVwZW5kaW5nIG9uIHdoZXRoZXIgd3JhcCBtb2RlIGlzIHR1cm5lZCBvbi5cbiAgICovXG4gIHByaXZhdGUgX3NldEFjdGl2ZUl0ZW1CeURlbHRhKGRlbHRhOiAtMSB8IDEpOiB2b2lkIHtcbiAgICB0aGlzLl93cmFwID8gdGhpcy5fc2V0QWN0aXZlSW5XcmFwTW9kZShkZWx0YSkgOiB0aGlzLl9zZXRBY3RpdmVJbkRlZmF1bHRNb2RlKGRlbHRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhY3RpdmUgaXRlbSBwcm9wZXJseSBnaXZlbiBcIndyYXBcIiBtb2RlLiBJbiBvdGhlciB3b3JkcywgaXQgd2lsbCBjb250aW51ZSB0byBtb3ZlXG4gICAqIGRvd24gdGhlIGxpc3QgdW50aWwgaXQgZmluZHMgYW4gaXRlbSB0aGF0IGlzIG5vdCBkaXNhYmxlZCwgYW5kIGl0IHdpbGwgd3JhcCBpZiBpdFxuICAgKiBlbmNvdW50ZXJzIGVpdGhlciBlbmQgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBwcml2YXRlIF9zZXRBY3RpdmVJbldyYXBNb2RlKGRlbHRhOiAtMSB8IDEpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zQXJyYXkoKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbmRleCA9ICh0aGlzLl9hY3RpdmVJdGVtSW5kZXggKyAoZGVsdGEgKiBpKSArIGl0ZW1zLmxlbmd0aCkgJSBpdGVtcy5sZW5ndGg7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuXG4gICAgICBpZiAoIXRoaXMuX3NraXBQcmVkaWNhdGVGbihpdGVtKSkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHByb3Blcmx5IGdpdmVuIHRoZSBkZWZhdWx0IG1vZGUuIEluIG90aGVyIHdvcmRzLCBpdCB3aWxsXG4gICAqIGNvbnRpbnVlIHRvIG1vdmUgZG93biB0aGUgbGlzdCB1bnRpbCBpdCBmaW5kcyBhbiBpdGVtIHRoYXQgaXMgbm90IGRpc2FibGVkLiBJZlxuICAgKiBpdCBlbmNvdW50ZXJzIGVpdGhlciBlbmQgb2YgdGhlIGxpc3QsIGl0IHdpbGwgc3RvcCBhbmQgbm90IHdyYXAuXG4gICAqL1xuICBwcml2YXRlIF9zZXRBY3RpdmVJbkRlZmF1bHRNb2RlKGRlbHRhOiAtMSB8IDEpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRBY3RpdmVJdGVtQnlJbmRleCh0aGlzLl9hY3RpdmVJdGVtSW5kZXggKyBkZWx0YSwgZGVsdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHRvIHRoZSBmaXJzdCBlbmFibGVkIGl0ZW0gc3RhcnRpbmcgYXQgdGhlIGluZGV4IHNwZWNpZmllZC4gSWYgdGhlXG4gICAqIGl0ZW0gaXMgZGlzYWJsZWQsIGl0IHdpbGwgbW92ZSBpbiB0aGUgZmFsbGJhY2tEZWx0YSBkaXJlY3Rpb24gdW50aWwgaXQgZWl0aGVyXG4gICAqIGZpbmRzIGFuIGVuYWJsZWQgaXRlbSBvciBlbmNvdW50ZXJzIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBwcml2YXRlIF9zZXRBY3RpdmVJdGVtQnlJbmRleChpbmRleDogbnVtYmVyLCBmYWxsYmFja0RlbHRhOiAtMSB8IDEpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zQXJyYXkoKTtcblxuICAgIGlmICghaXRlbXNbaW5kZXhdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2hpbGUgKHRoaXMuX3NraXBQcmVkaWNhdGVGbihpdGVtc1tpbmRleF0pKSB7XG4gICAgICBpbmRleCArPSBmYWxsYmFja0RlbHRhO1xuXG4gICAgICBpZiAoIWl0ZW1zW2luZGV4XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBpdGVtcyBhcyBhbiBhcnJheS4gKi9cbiAgcHJpdmF0ZSBfZ2V0SXRlbXNBcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcyBpbnN0YW5jZW9mIFF1ZXJ5TGlzdCA/IHRoaXMuX2l0ZW1zLnRvQXJyYXkoKSA6IHRoaXMuX2l0ZW1zO1xuICB9XG59XG4iXX0=