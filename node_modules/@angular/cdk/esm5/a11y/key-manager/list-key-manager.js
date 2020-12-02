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
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
var ListKeyManager = /** @class */ (function () {
    function ListKeyManager(_items) {
        var _this = this;
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
        this._skipPredicateFn = function (item) { return item.disabled; };
        // Buffer for the letters that the user has pressed when the typeahead option is turned on.
        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new Subject();
        /** Stream that emits whenever the active item of the list manager changes. */
        this.change = new Subject();
        // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (_items instanceof QueryList) {
            _items.changes.subscribe(function (newItems) {
                if (_this._activeItem) {
                    var itemArray = newItems.toArray();
                    var newIndex = itemArray.indexOf(_this._activeItem);
                    if (newIndex > -1 && newIndex !== _this._activeItemIndex) {
                        _this._activeItemIndex = newIndex;
                    }
                }
            });
        }
    }
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param predicate Function that determines whether the given item should be skipped.
     */
    ListKeyManager.prototype.skipPredicate = function (predicate) {
        this._skipPredicateFn = predicate;
        return this;
    };
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @param shouldWrap Whether the list should wrap when reaching the end.
     */
    ListKeyManager.prototype.withWrap = function (shouldWrap) {
        if (shouldWrap === void 0) { shouldWrap = true; }
        this._wrap = shouldWrap;
        return this;
    };
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param enabled Whether vertical selection should be enabled.
     */
    ListKeyManager.prototype.withVerticalOrientation = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        this._vertical = enabled;
        return this;
    };
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param direction Direction in which the selection can be moved.
     */
    ListKeyManager.prototype.withHorizontalOrientation = function (direction) {
        this._horizontal = direction;
        return this;
    };
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     */
    ListKeyManager.prototype.withAllowedModifierKeys = function (keys) {
        this._allowedModifierKeys = keys;
        return this;
    };
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */
    ListKeyManager.prototype.withTypeAhead = function (debounceInterval) {
        var _this = this;
        if (debounceInterval === void 0) { debounceInterval = 200; }
        if (this._items.length && this._items.some(function (item) { return typeof item.getLabel !== 'function'; })) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        this._typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.
        this._typeaheadSubscription = this._letterKeyStream.pipe(tap(function (letter) { return _this._pressedLetters.push(letter); }), debounceTime(debounceInterval), filter(function () { return _this._pressedLetters.length > 0; }), map(function () { return _this._pressedLetters.join(''); })).subscribe(function (inputString) {
            var items = _this._getItemsArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (var i = 1; i < items.length + 1; i++) {
                var index = (_this._activeItemIndex + i) % items.length;
                var item = items[index];
                if (!_this._skipPredicateFn(item) &&
                    item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                    _this.setActiveItem(index);
                    break;
                }
            }
            _this._pressedLetters = [];
        });
        return this;
    };
    ListKeyManager.prototype.setActiveItem = function (item) {
        var previousIndex = this._activeItemIndex;
        this.updateActiveItem(item);
        if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
        }
    };
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    ListKeyManager.prototype.onKeydown = function (event) {
        var _this = this;
        var keyCode = event.keyCode;
        var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
        var isModifierAllowed = modifiers.every(function (modifier) {
            return !event[modifier] || _this._allowedModifierKeys.indexOf(modifier) > -1;
        });
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
    };
    Object.defineProperty(ListKeyManager.prototype, "activeItemIndex", {
        /** Index of the currently active item. */
        get: function () {
            return this._activeItemIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListKeyManager.prototype, "activeItem", {
        /** The active item. */
        get: function () {
            return this._activeItem;
        },
        enumerable: true,
        configurable: true
    });
    /** Gets whether the user is currently typing into the manager using the typeahead feature. */
    ListKeyManager.prototype.isTyping = function () {
        return this._pressedLetters.length > 0;
    };
    /** Sets the active item to the first enabled item in the list. */
    ListKeyManager.prototype.setFirstItemActive = function () {
        this._setActiveItemByIndex(0, 1);
    };
    /** Sets the active item to the last enabled item in the list. */
    ListKeyManager.prototype.setLastItemActive = function () {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    };
    /** Sets the active item to the next enabled item in the list. */
    ListKeyManager.prototype.setNextItemActive = function () {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    };
    /** Sets the active item to a previous enabled item in the list. */
    ListKeyManager.prototype.setPreviousItemActive = function () {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    };
    ListKeyManager.prototype.updateActiveItem = function (item) {
        var itemArray = this._getItemsArray();
        var index = typeof item === 'number' ? item : itemArray.indexOf(item);
        var activeItem = itemArray[index];
        // Explicitly check for `null` and `undefined` because other falsy values are valid.
        this._activeItem = activeItem == null ? null : activeItem;
        this._activeItemIndex = index;
    };
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     */
    ListKeyManager.prototype._setActiveItemByDelta = function (delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
    };
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     */
    ListKeyManager.prototype._setActiveInWrapMode = function (delta) {
        var items = this._getItemsArray();
        for (var i = 1; i <= items.length; i++) {
            var index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            var item = items[index];
            if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    };
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     */
    ListKeyManager.prototype._setActiveInDefaultMode = function (delta) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
    };
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     */
    ListKeyManager.prototype._setActiveItemByIndex = function (index, fallbackDelta) {
        var items = this._getItemsArray();
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
    };
    /** Returns the items as an array. */
    ListKeyManager.prototype._getItemsArray = function () {
        return this._items instanceof QueryList ? this._items.toArray() : this._items;
    };
    return ListKeyManager;
}());
export { ListKeyManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1rZXktbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvYTExeS9rZXktbWFuYWdlci9saXN0LWtleS1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUNMLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxHQUFHLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxJQUFJLEVBQ0osSUFBSSxFQUNKLGNBQWMsR0FDZixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQWM5RDs7O0dBR0c7QUFDSDtJQW1CRSx3QkFBb0IsTUFBMEI7UUFBOUMsaUJBZ0JDO1FBaEJtQixXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQWxCdEMscUJBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsZ0JBQVcsR0FBYSxJQUFJLENBQUM7UUFDN0IsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDekMsMkJBQXNCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUM1QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLHlCQUFvQixHQUFnQyxFQUFFLENBQUM7UUFFL0Q7OztXQUdHO1FBQ0sscUJBQWdCLEdBQUcsVUFBQyxJQUFPLElBQUssT0FBQSxJQUFJLENBQUMsUUFBUSxFQUFiLENBQWEsQ0FBQztRQUV0RCwyRkFBMkY7UUFDbkYsb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFvQnZDOzs7V0FHRztRQUNILFdBQU0sR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUU1Qyw4RUFBOEU7UUFDOUUsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUF4QjdCLGlGQUFpRjtRQUNqRixpRkFBaUY7UUFDakYseUVBQXlFO1FBQ3pFLElBQUksTUFBTSxZQUFZLFNBQVMsRUFBRTtZQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQXNCO2dCQUM5QyxJQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3BCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDckMsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRXJELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsS0FBSyxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3ZELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7cUJBQ2xDO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFXRDs7OztPQUlHO0lBQ0gsc0NBQWEsR0FBYixVQUFjLFNBQStCO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlDQUFRLEdBQVIsVUFBUyxVQUFpQjtRQUFqQiwyQkFBQSxFQUFBLGlCQUFpQjtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSCxnREFBdUIsR0FBdkIsVUFBd0IsT0FBdUI7UUFBdkIsd0JBQUEsRUFBQSxjQUF1QjtRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsa0RBQXlCLEdBQXpCLFVBQTBCLFNBQStCO1FBQ3ZELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdEQUF1QixHQUF2QixVQUF3QixJQUFpQztRQUN2RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILHNDQUFhLEdBQWIsVUFBYyxnQkFBOEI7UUFBNUMsaUJBb0NDO1FBcENhLGlDQUFBLEVBQUEsc0JBQThCO1FBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFuQyxDQUFtQyxDQUFDLEVBQUU7WUFDdkYsTUFBTSxLQUFLLENBQUMsOEVBQThFLENBQUMsQ0FBQztTQUM3RjtRQUVELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUxQyw2RkFBNkY7UUFDN0YsMkZBQTJGO1FBQzNGLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FDdEQsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQWpDLENBQWlDLENBQUMsRUFDaEQsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQzlCLE1BQU0sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUEvQixDQUErQixDQUFDLEVBQzdDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FDekMsQ0FBQyxTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ3JCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVwQyx3RUFBd0U7WUFDeEUscUNBQXFDO1lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDekQsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUUxQixJQUFJLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBRXBFLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFCLE1BQU07aUJBQ1A7YUFDRjtZQUVELEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBY0Qsc0NBQWEsR0FBYixVQUFjLElBQVM7UUFDckIsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBRTVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxhQUFhLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0NBQVMsR0FBVCxVQUFVLEtBQW9CO1FBQTlCLGlCQThEQztRQTdEQyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQU0sU0FBUyxHQUFnQyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzVGLElBQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFBLFFBQVE7WUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlFLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLEdBQUc7Z0JBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsT0FBTztZQUVULEtBQUssVUFBVTtnQkFDYixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksaUJBQWlCLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QixNQUFNO2lCQUNQO3FCQUFNO29CQUNMLE9BQU87aUJBQ1I7WUFFSCxLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLGlCQUFpQixFQUFFO29CQUN2QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDN0IsTUFBTTtpQkFDUDtxQkFBTTtvQkFDTCxPQUFPO2lCQUNSO1lBRUgsS0FBSyxXQUFXO2dCQUNkLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxpQkFBaUIsRUFBRTtvQkFDekMsSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDckYsTUFBTTtpQkFDUDtxQkFBTTtvQkFDTCxPQUFPO2lCQUNSO1lBRUgsS0FBSyxVQUFVO2dCQUNiLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxpQkFBaUIsRUFBRTtvQkFDekMsSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDckYsTUFBTTtpQkFDUDtxQkFBTTtvQkFDTCxPQUFPO2lCQUNSO1lBRUg7Z0JBQ0EsSUFBSSxpQkFBaUIsSUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFFO29CQUN4RCxxRkFBcUY7b0JBQ3JGLDRFQUE0RTtvQkFDNUUsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTt3QkFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztxQkFDM0Q7eUJBQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLEVBQUU7d0JBQ2pGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3FCQUMxRDtpQkFDRjtnQkFFRCx5REFBeUQ7Z0JBQ3pELCtDQUErQztnQkFDL0MsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxzQkFBSSwyQ0FBZTtRQURuQiwwQ0FBMEM7YUFDMUM7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHNDQUFVO1FBRGQsdUJBQXVCO2FBQ3ZCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsOEZBQThGO0lBQzlGLGlDQUFRLEdBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLDJDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSwwQ0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSwwQ0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsOENBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFjRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBUztRQUN4QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEMsSUFBTSxLQUFLLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBDLG9GQUFvRjtRQUNwRixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzFELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyw4Q0FBcUIsR0FBN0IsVUFBOEIsS0FBYTtRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLDZDQUFvQixHQUE1QixVQUE2QixLQUFhO1FBQ3hDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNsRixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsT0FBTzthQUNSO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGdEQUF1QixHQUEvQixVQUFnQyxLQUFhO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssOENBQXFCLEdBQTdCLFVBQThCLEtBQWEsRUFBRSxhQUFxQjtRQUNoRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMxQyxLQUFLLElBQUksYUFBYSxDQUFDO1lBRXZCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLE9BQU87YUFDUjtTQUNGO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQscUNBQXFDO0lBQzdCLHVDQUFjLEdBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNoRixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBNVZELElBNFZDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UXVlcnlMaXN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIFVQX0FSUk9XLFxuICBET1dOX0FSUk9XLFxuICBMRUZUX0FSUk9XLFxuICBSSUdIVF9BUlJPVyxcbiAgVEFCLFxuICBBLFxuICBaLFxuICBaRVJPLFxuICBOSU5FLFxuICBoYXNNb2RpZmllcktleSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBmaWx0ZXIsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBUaGlzIGludGVyZmFjZSBpcyBmb3IgaXRlbXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgTGlzdEtleU1hbmFnZXIuICovXG5leHBvcnQgaW50ZXJmYWNlIExpc3RLZXlNYW5hZ2VyT3B0aW9uIHtcbiAgLyoqIFdoZXRoZXIgdGhlIG9wdGlvbiBpcyBkaXNhYmxlZC4gKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIC8qKiBHZXRzIHRoZSBsYWJlbCBmb3IgdGhpcyBvcHRpb24uICovXG4gIGdldExhYmVsPygpOiBzdHJpbmc7XG59XG5cbi8qKiBNb2RpZmllciBrZXlzIGhhbmRsZWQgYnkgdGhlIExpc3RLZXlNYW5hZ2VyLiAqL1xuZXhwb3J0IHR5cGUgTGlzdEtleU1hbmFnZXJNb2RpZmllcktleSA9ICdhbHRLZXknIHwgJ2N0cmxLZXknIHwgJ21ldGFLZXknIHwgJ3NoaWZ0S2V5JztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIG1hbmFnZXMga2V5Ym9hcmQgZXZlbnRzIGZvciBzZWxlY3RhYmxlIGxpc3RzLiBJZiB5b3UgcGFzcyBpdCBhIHF1ZXJ5IGxpc3RcbiAqIG9mIGl0ZW1zLCBpdCB3aWxsIHNldCB0aGUgYWN0aXZlIGl0ZW0gY29ycmVjdGx5IHdoZW4gYXJyb3cgZXZlbnRzIG9jY3VyLlxuICovXG5leHBvcnQgY2xhc3MgTGlzdEtleU1hbmFnZXI8VCBleHRlbmRzIExpc3RLZXlNYW5hZ2VyT3B0aW9uPiB7XG4gIHByaXZhdGUgX2FjdGl2ZUl0ZW1JbmRleCA9IC0xO1xuICBwcml2YXRlIF9hY3RpdmVJdGVtOiBUIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3dyYXAgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGV0dGVyS2V5U3RyZWFtID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBwcml2YXRlIF90eXBlYWhlYWRTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaG9yaXpvbnRhbDogJ2x0cicgfCAncnRsJyB8IG51bGw7XG4gIHByaXZhdGUgX2FsbG93ZWRNb2RpZmllcktleXM6IExpc3RLZXlNYW5hZ2VyTW9kaWZpZXJLZXlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBjaGVjayB3aGV0aGVyIGFuIGl0ZW0gc2hvdWxkIGJlIHNraXBwZWRcbiAgICogYnkgdGhlIGtleSBtYW5hZ2VyLiBCeSBkZWZhdWx0LCBkaXNhYmxlZCBpdGVtcyBhcmUgc2tpcHBlZC5cbiAgICovXG4gIHByaXZhdGUgX3NraXBQcmVkaWNhdGVGbiA9IChpdGVtOiBUKSA9PiBpdGVtLmRpc2FibGVkO1xuXG4gIC8vIEJ1ZmZlciBmb3IgdGhlIGxldHRlcnMgdGhhdCB0aGUgdXNlciBoYXMgcHJlc3NlZCB3aGVuIHRoZSB0eXBlYWhlYWQgb3B0aW9uIGlzIHR1cm5lZCBvbi5cbiAgcHJpdmF0ZSBfcHJlc3NlZExldHRlcnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaXRlbXM6IFF1ZXJ5TGlzdDxUPiB8IFRbXSkge1xuICAgIC8vIFdlIGFsbG93IGZvciB0aGUgaXRlbXMgdG8gYmUgYW4gYXJyYXkgYmVjYXVzZSwgaW4gc29tZSBjYXNlcywgdGhlIGNvbnN1bWVyIG1heVxuICAgIC8vIG5vdCBoYXZlIGFjY2VzcyB0byBhIFF1ZXJ5TGlzdCBvZiB0aGUgaXRlbXMgdGhleSB3YW50IHRvIG1hbmFnZSAoZS5nLiB3aGVuIHRoZVxuICAgIC8vIGl0ZW1zIGFyZW4ndCBiZWluZyBjb2xsZWN0ZWQgdmlhIGBWaWV3Q2hpbGRyZW5gIG9yIGBDb250ZW50Q2hpbGRyZW5gKS5cbiAgICBpZiAoX2l0ZW1zIGluc3RhbmNlb2YgUXVlcnlMaXN0KSB7XG4gICAgICBfaXRlbXMuY2hhbmdlcy5zdWJzY3JpYmUoKG5ld0l0ZW1zOiBRdWVyeUxpc3Q8VD4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUl0ZW0pIHtcbiAgICAgICAgICBjb25zdCBpdGVtQXJyYXkgPSBuZXdJdGVtcy50b0FycmF5KCk7XG4gICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBpdGVtQXJyYXkuaW5kZXhPZih0aGlzLl9hY3RpdmVJdGVtKTtcblxuICAgICAgICAgIGlmIChuZXdJbmRleCA+IC0xICYmIG5ld0luZGV4ICE9PSB0aGlzLl9hY3RpdmVJdGVtSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUl0ZW1JbmRleCA9IG5ld0luZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0cmVhbSB0aGF0IGVtaXRzIGFueSB0aW1lIHRoZSBUQUIga2V5IGlzIHByZXNzZWQsIHNvIGNvbXBvbmVudHMgY2FuIHJlYWN0XG4gICAqIHdoZW4gZm9jdXMgaXMgc2hpZnRlZCBvZmYgb2YgdGhlIGxpc3QuXG4gICAqL1xuICB0YWJPdXQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgYWN0aXZlIGl0ZW0gb2YgdGhlIGxpc3QgbWFuYWdlciBjaGFuZ2VzLiAqL1xuICBjaGFuZ2UgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hpY2ggaXRlbXMgc2hvdWxkIGJlIHNraXBwZWQgYnkgdGhlXG4gICAqIGxpc3Qga2V5IG1hbmFnZXIuXG4gICAqIEBwYXJhbSBwcmVkaWNhdGUgRnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGl0ZW0gc2hvdWxkIGJlIHNraXBwZWQuXG4gICAqL1xuICBza2lwUHJlZGljYXRlKHByZWRpY2F0ZTogKGl0ZW06IFQpID0+IGJvb2xlYW4pOiB0aGlzIHtcbiAgICB0aGlzLl9za2lwUHJlZGljYXRlRm4gPSBwcmVkaWNhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB3cmFwcGluZyBtb2RlLCB3aGljaCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGFjdGl2ZSBpdGVtIHdpbGwgd3JhcCB0b1xuICAgKiB0aGUgb3RoZXIgZW5kIG9mIGxpc3Qgd2hlbiB0aGVyZSBhcmUgbm8gbW9yZSBpdGVtcyBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBAcGFyYW0gc2hvdWxkV3JhcCBXaGV0aGVyIHRoZSBsaXN0IHNob3VsZCB3cmFwIHdoZW4gcmVhY2hpbmcgdGhlIGVuZC5cbiAgICovXG4gIHdpdGhXcmFwKHNob3VsZFdyYXAgPSB0cnVlKTogdGhpcyB7XG4gICAgdGhpcy5fd3JhcCA9IHNob3VsZFdyYXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB3aGV0aGVyIHRoZSBrZXkgbWFuYWdlciBzaG91bGQgYmUgYWJsZSB0byBtb3ZlIHRoZSBzZWxlY3Rpb24gdmVydGljYWxseS5cbiAgICogQHBhcmFtIGVuYWJsZWQgV2hldGhlciB2ZXJ0aWNhbCBzZWxlY3Rpb24gc2hvdWxkIGJlIGVuYWJsZWQuXG4gICAqL1xuICB3aXRoVmVydGljYWxPcmllbnRhdGlvbihlbmFibGVkOiBib29sZWFuID0gdHJ1ZSk6IHRoaXMge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gZW5hYmxlZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBrZXkgbWFuYWdlciB0byBtb3ZlIHRoZSBzZWxlY3Rpb24gaG9yaXpvbnRhbGx5LlxuICAgKiBQYXNzaW5nIGluIGBudWxsYCB3aWxsIGRpc2FibGUgaG9yaXpvbnRhbCBtb3ZlbWVudC5cbiAgICogQHBhcmFtIGRpcmVjdGlvbiBEaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQuXG4gICAqL1xuICB3aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKGRpcmVjdGlvbjogJ2x0cicgfCAncnRsJyB8IG51bGwpOiB0aGlzIHtcbiAgICB0aGlzLl9ob3Jpem9udGFsID0gZGlyZWN0aW9uO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIGtleXMgd2hpY2ggYXJlIGFsbG93ZWQgdG8gYmUgaGVsZCBkb3duIGFuZCB3aG9zZSBkZWZhdWx0IGFjdGlvbnMgd2lsbCBiZSBwcmV2ZW50ZWRcbiAgICogYXMgdGhlIHVzZXIgaXMgcHJlc3NpbmcgdGhlIGFycm93IGtleXMuIERlZmF1bHRzIHRvIG5vdCBhbGxvd2luZyBhbnkgbW9kaWZpZXIga2V5cy5cbiAgICovXG4gIHdpdGhBbGxvd2VkTW9kaWZpZXJLZXlzKGtleXM6IExpc3RLZXlNYW5hZ2VyTW9kaWZpZXJLZXlbXSk6IHRoaXMge1xuICAgIHRoaXMuX2FsbG93ZWRNb2RpZmllcktleXMgPSBrZXlzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm5zIG9uIHR5cGVhaGVhZCBtb2RlIHdoaWNoIGFsbG93cyB1c2VycyB0byBzZXQgdGhlIGFjdGl2ZSBpdGVtIGJ5IHR5cGluZy5cbiAgICogQHBhcmFtIGRlYm91bmNlSW50ZXJ2YWwgVGltZSB0byB3YWl0IGFmdGVyIHRoZSBsYXN0IGtleXN0cm9rZSBiZWZvcmUgc2V0dGluZyB0aGUgYWN0aXZlIGl0ZW0uXG4gICAqL1xuICB3aXRoVHlwZUFoZWFkKGRlYm91bmNlSW50ZXJ2YWw6IG51bWJlciA9IDIwMCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9pdGVtcy5sZW5ndGggJiYgdGhpcy5faXRlbXMuc29tZShpdGVtID0+IHR5cGVvZiBpdGVtLmdldExhYmVsICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0xpc3RLZXlNYW5hZ2VyIGl0ZW1zIGluIHR5cGVhaGVhZCBtb2RlIG11c3QgaW1wbGVtZW50IHRoZSBgZ2V0TGFiZWxgIG1ldGhvZC4nKTtcbiAgICB9XG5cbiAgICB0aGlzLl90eXBlYWhlYWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIC8vIERlYm91bmNlIHRoZSBwcmVzc2VzIG9mIG5vbi1uYXZpZ2F0aW9uYWwga2V5cywgY29sbGVjdCB0aGUgb25lcyB0aGF0IGNvcnJlc3BvbmQgdG8gbGV0dGVyc1xuICAgIC8vIGFuZCBjb252ZXJ0IHRob3NlIGxldHRlcnMgYmFjayBpbnRvIGEgc3RyaW5nLiBBZnRlcndhcmRzIGZpbmQgdGhlIGZpcnN0IGl0ZW0gdGhhdCBzdGFydHNcbiAgICAvLyB3aXRoIHRoYXQgc3RyaW5nIGFuZCBzZWxlY3QgaXQuXG4gICAgdGhpcy5fdHlwZWFoZWFkU3Vic2NyaXB0aW9uID0gdGhpcy5fbGV0dGVyS2V5U3RyZWFtLnBpcGUoXG4gICAgICB0YXAobGV0dGVyID0+IHRoaXMuX3ByZXNzZWRMZXR0ZXJzLnB1c2gobGV0dGVyKSksXG4gICAgICBkZWJvdW5jZVRpbWUoZGVib3VuY2VJbnRlcnZhbCksXG4gICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fcHJlc3NlZExldHRlcnMubGVuZ3RoID4gMCksXG4gICAgICBtYXAoKCkgPT4gdGhpcy5fcHJlc3NlZExldHRlcnMuam9pbignJykpXG4gICAgKS5zdWJzY3JpYmUoaW5wdXRTdHJpbmcgPT4ge1xuICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLl9nZXRJdGVtc0FycmF5KCk7XG5cbiAgICAgIC8vIFN0YXJ0IGF0IDEgYmVjYXVzZSB3ZSB3YW50IHRvIHN0YXJ0IHNlYXJjaGluZyBhdCB0aGUgaXRlbSBpbW1lZGlhdGVseVxuICAgICAgLy8gZm9sbG93aW5nIHRoZSBjdXJyZW50IGFjdGl2ZSBpdGVtLlxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpdGVtcy5sZW5ndGggKyAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSAodGhpcy5fYWN0aXZlSXRlbUluZGV4ICsgaSkgJSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG5cbiAgICAgICAgaWYgKCF0aGlzLl9za2lwUHJlZGljYXRlRm4oaXRlbSkgJiZcbiAgICAgICAgICAgIGl0ZW0uZ2V0TGFiZWwhKCkudG9VcHBlckNhc2UoKS50cmltKCkuaW5kZXhPZihpbnB1dFN0cmluZykgPT09IDApIHtcblxuICAgICAgICAgIHRoaXMuc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcHJlc3NlZExldHRlcnMgPSBbXTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHRvIHRoZSBpdGVtIGF0IHRoZSBpbmRleCBzcGVjaWZpZWQuXG4gICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gYmUgc2V0IGFzIGFjdGl2ZS5cbiAgICovXG4gIHNldEFjdGl2ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHRvIHRoZSBzcGVjaWZpZWQgaXRlbS5cbiAgICogQHBhcmFtIGl0ZW0gVGhlIGl0ZW0gdG8gYmUgc2V0IGFzIGFjdGl2ZS5cbiAgICovXG4gIHNldEFjdGl2ZUl0ZW0oaXRlbTogVCk6IHZvaWQ7XG5cbiAgc2V0QWN0aXZlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gdGhpcy5fYWN0aXZlSXRlbUluZGV4O1xuXG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtKGl0ZW0pO1xuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZUl0ZW1JbmRleCAhPT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgdGhpcy5jaGFuZ2UubmV4dCh0aGlzLl9hY3RpdmVJdGVtSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhY3RpdmUgaXRlbSBkZXBlbmRpbmcgb24gdGhlIGtleSBldmVudCBwYXNzZWQgaW4uXG4gICAqIEBwYXJhbSBldmVudCBLZXlib2FyZCBldmVudCB0byBiZSB1c2VkIGZvciBkZXRlcm1pbmluZyB3aGljaCBlbGVtZW50IHNob3VsZCBiZSBhY3RpdmUuXG4gICAqL1xuICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICBjb25zdCBtb2RpZmllcnM6IExpc3RLZXlNYW5hZ2VyTW9kaWZpZXJLZXlbXSA9IFsnYWx0S2V5JywgJ2N0cmxLZXknLCAnbWV0YUtleScsICdzaGlmdEtleSddO1xuICAgIGNvbnN0IGlzTW9kaWZpZXJBbGxvd2VkID0gbW9kaWZpZXJzLmV2ZXJ5KG1vZGlmaWVyID0+IHtcbiAgICAgIHJldHVybiAhZXZlbnRbbW9kaWZpZXJdIHx8IHRoaXMuX2FsbG93ZWRNb2RpZmllcktleXMuaW5kZXhPZihtb2RpZmllcikgPiAtMTtcbiAgICB9KTtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBUQUI6XG4gICAgICAgIHRoaXMudGFiT3V0Lm5leHQoKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIGlmICh0aGlzLl92ZXJ0aWNhbCAmJiBpc01vZGlmaWVyQWxsb3dlZCkge1xuICAgICAgICAgIHRoaXMuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMuX3ZlcnRpY2FsICYmIGlzTW9kaWZpZXJBbGxvd2VkKSB7XG4gICAgICAgICAgdGhpcy5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMuX2hvcml6b250YWwgJiYgaXNNb2RpZmllckFsbG93ZWQpIHtcbiAgICAgICAgICB0aGlzLl9ob3Jpem9udGFsID09PSAncnRsJyA/IHRoaXMuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCkgOiB0aGlzLnNldE5leHRJdGVtQWN0aXZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMuX2hvcml6b250YWwgJiYgaXNNb2RpZmllckFsbG93ZWQpIHtcbiAgICAgICAgICB0aGlzLl9ob3Jpem9udGFsID09PSAncnRsJyA/IHRoaXMuc2V0TmV4dEl0ZW1BY3RpdmUoKSA6IHRoaXMuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoaXNNb2RpZmllckFsbG93ZWQgfHwgaGFzTW9kaWZpZXJLZXkoZXZlbnQsICdzaGlmdEtleScpKSB7XG4gICAgICAgICAgLy8gQXR0ZW1wdCB0byB1c2UgdGhlIGBldmVudC5rZXlgIHdoaWNoIGFsc28gbWFwcyBpdCB0byB0aGUgdXNlcidzIGtleWJvYXJkIGxhbmd1YWdlLFxuICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gcmVzb2x2aW5nIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIHZpYSB0aGUga2V5Q29kZS5cbiAgICAgICAgICBpZiAoZXZlbnQua2V5ICYmIGV2ZW50LmtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2xldHRlcktleVN0cmVhbS5uZXh0KGV2ZW50LmtleS50b0xvY2FsZVVwcGVyQ2FzZSgpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKChrZXlDb2RlID49IEEgJiYga2V5Q29kZSA8PSBaKSB8fCAoa2V5Q29kZSA+PSBaRVJPICYmIGtleUNvZGUgPD0gTklORSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2xldHRlcktleVN0cmVhbS5uZXh0KFN0cmluZy5mcm9tQ2hhckNvZGUoa2V5Q29kZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSByZXR1cm4gaGVyZSwgaW4gb3JkZXIgdG8gYXZvaWQgcHJldmVudGluZ1xuICAgICAgICAvLyB0aGUgZGVmYXVsdCBhY3Rpb24gb2Ygbm9uLW5hdmlnYXRpb25hbCBrZXlzLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcHJlc3NlZExldHRlcnMgPSBbXTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLyoqIEluZGV4IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIGl0ZW0uICovXG4gIGdldCBhY3RpdmVJdGVtSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUl0ZW1JbmRleDtcbiAgfVxuXG4gIC8qKiBUaGUgYWN0aXZlIGl0ZW0uICovXG4gIGdldCBhY3RpdmVJdGVtKCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlSXRlbTtcbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgdGhlIHVzZXIgaXMgY3VycmVudGx5IHR5cGluZyBpbnRvIHRoZSBtYW5hZ2VyIHVzaW5nIHRoZSB0eXBlYWhlYWQgZmVhdHVyZS4gKi9cbiAgaXNUeXBpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXNzZWRMZXR0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgYWN0aXZlIGl0ZW0gdG8gdGhlIGZpcnN0IGVuYWJsZWQgaXRlbSBpbiB0aGUgbGlzdC4gKi9cbiAgc2V0Rmlyc3RJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldEFjdGl2ZUl0ZW1CeUluZGV4KDAsIDEpO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHRvIHRoZSBsYXN0IGVuYWJsZWQgaXRlbSBpbiB0aGUgbGlzdC4gKi9cbiAgc2V0TGFzdEl0ZW1BY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0QWN0aXZlSXRlbUJ5SW5kZXgodGhpcy5faXRlbXMubGVuZ3RoIC0gMSwgLTEpO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHRvIHRoZSBuZXh0IGVuYWJsZWQgaXRlbSBpbiB0aGUgbGlzdC4gKi9cbiAgc2V0TmV4dEl0ZW1BY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5fYWN0aXZlSXRlbUluZGV4IDwgMCA/IHRoaXMuc2V0Rmlyc3RJdGVtQWN0aXZlKCkgOiB0aGlzLl9zZXRBY3RpdmVJdGVtQnlEZWx0YSgxKTtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBhY3RpdmUgaXRlbSB0byBhIHByZXZpb3VzIGVuYWJsZWQgaXRlbSBpbiB0aGUgbGlzdC4gKi9cbiAgc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMuX2FjdGl2ZUl0ZW1JbmRleCA8IDAgJiYgdGhpcy5fd3JhcCA/IHRoaXMuc2V0TGFzdEl0ZW1BY3RpdmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX3NldEFjdGl2ZUl0ZW1CeURlbHRhKC0xKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3Mgc2V0dGluZyB0aGUgYWN0aXZlIHdpdGhvdXQgYW55IG90aGVyIGVmZmVjdHMuXG4gICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgaXRlbSB0byBiZSBzZXQgYXMgYWN0aXZlLlxuICAgKi9cbiAgdXBkYXRlQWN0aXZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogQWxsb3dzIHNldHRpbmcgdGhlIGFjdGl2ZSBpdGVtIHdpdGhvdXQgYW55IG90aGVyIGVmZmVjdHMuXG4gICAqIEBwYXJhbSBpdGVtIEl0ZW0gdG8gYmUgc2V0IGFzIGFjdGl2ZS5cbiAgICovXG4gIHVwZGF0ZUFjdGl2ZUl0ZW0oaXRlbTogVCk6IHZvaWQ7XG5cbiAgdXBkYXRlQWN0aXZlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtQXJyYXkgPSB0aGlzLl9nZXRJdGVtc0FycmF5KCk7XG4gICAgY29uc3QgaW5kZXggPSB0eXBlb2YgaXRlbSA9PT0gJ251bWJlcicgPyBpdGVtIDogaXRlbUFycmF5LmluZGV4T2YoaXRlbSk7XG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IGl0ZW1BcnJheVtpbmRleF07XG5cbiAgICAvLyBFeHBsaWNpdGx5IGNoZWNrIGZvciBgbnVsbGAgYW5kIGB1bmRlZmluZWRgIGJlY2F1c2Ugb3RoZXIgZmFsc3kgdmFsdWVzIGFyZSB2YWxpZC5cbiAgICB0aGlzLl9hY3RpdmVJdGVtID0gYWN0aXZlSXRlbSA9PSBudWxsID8gbnVsbCA6IGFjdGl2ZUl0ZW07XG4gICAgdGhpcy5fYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2V0cyB0aGUgYWN0aXZlIGl0ZW0sIGdpdmVuIGEgbGlzdCBvZiBpdGVtcyBhbmQgdGhlIGRlbHRhIGJldHdlZW4gdGhlXG4gICAqIGN1cnJlbnRseSBhY3RpdmUgaXRlbSBhbmQgdGhlIG5ldyBhY3RpdmUgaXRlbS4gSXQgd2lsbCBjYWxjdWxhdGUgZGlmZmVyZW50bHlcbiAgICogZGVwZW5kaW5nIG9uIHdoZXRoZXIgd3JhcCBtb2RlIGlzIHR1cm5lZCBvbi5cbiAgICovXG4gIHByaXZhdGUgX3NldEFjdGl2ZUl0ZW1CeURlbHRhKGRlbHRhOiAtMSB8IDEpOiB2b2lkIHtcbiAgICB0aGlzLl93cmFwID8gdGhpcy5fc2V0QWN0aXZlSW5XcmFwTW9kZShkZWx0YSkgOiB0aGlzLl9zZXRBY3RpdmVJbkRlZmF1bHRNb2RlKGRlbHRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhY3RpdmUgaXRlbSBwcm9wZXJseSBnaXZlbiBcIndyYXBcIiBtb2RlLiBJbiBvdGhlciB3b3JkcywgaXQgd2lsbCBjb250aW51ZSB0byBtb3ZlXG4gICAqIGRvd24gdGhlIGxpc3QgdW50aWwgaXQgZmluZHMgYW4gaXRlbSB0aGF0IGlzIG5vdCBkaXNhYmxlZCwgYW5kIGl0IHdpbGwgd3JhcCBpZiBpdFxuICAgKiBlbmNvdW50ZXJzIGVpdGhlciBlbmQgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBwcml2YXRlIF9zZXRBY3RpdmVJbldyYXBNb2RlKGRlbHRhOiAtMSB8IDEpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zQXJyYXkoKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbmRleCA9ICh0aGlzLl9hY3RpdmVJdGVtSW5kZXggKyAoZGVsdGEgKiBpKSArIGl0ZW1zLmxlbmd0aCkgJSBpdGVtcy5sZW5ndGg7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuXG4gICAgICBpZiAoIXRoaXMuX3NraXBQcmVkaWNhdGVGbihpdGVtKSkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHByb3Blcmx5IGdpdmVuIHRoZSBkZWZhdWx0IG1vZGUuIEluIG90aGVyIHdvcmRzLCBpdCB3aWxsXG4gICAqIGNvbnRpbnVlIHRvIG1vdmUgZG93biB0aGUgbGlzdCB1bnRpbCBpdCBmaW5kcyBhbiBpdGVtIHRoYXQgaXMgbm90IGRpc2FibGVkLiBJZlxuICAgKiBpdCBlbmNvdW50ZXJzIGVpdGhlciBlbmQgb2YgdGhlIGxpc3QsIGl0IHdpbGwgc3RvcCBhbmQgbm90IHdyYXAuXG4gICAqL1xuICBwcml2YXRlIF9zZXRBY3RpdmVJbkRlZmF1bHRNb2RlKGRlbHRhOiAtMSB8IDEpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRBY3RpdmVJdGVtQnlJbmRleCh0aGlzLl9hY3RpdmVJdGVtSW5kZXggKyBkZWx0YSwgZGVsdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBpdGVtIHRvIHRoZSBmaXJzdCBlbmFibGVkIGl0ZW0gc3RhcnRpbmcgYXQgdGhlIGluZGV4IHNwZWNpZmllZC4gSWYgdGhlXG4gICAqIGl0ZW0gaXMgZGlzYWJsZWQsIGl0IHdpbGwgbW92ZSBpbiB0aGUgZmFsbGJhY2tEZWx0YSBkaXJlY3Rpb24gdW50aWwgaXQgZWl0aGVyXG4gICAqIGZpbmRzIGFuIGVuYWJsZWQgaXRlbSBvciBlbmNvdW50ZXJzIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBwcml2YXRlIF9zZXRBY3RpdmVJdGVtQnlJbmRleChpbmRleDogbnVtYmVyLCBmYWxsYmFja0RlbHRhOiAtMSB8IDEpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zQXJyYXkoKTtcblxuICAgIGlmICghaXRlbXNbaW5kZXhdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2hpbGUgKHRoaXMuX3NraXBQcmVkaWNhdGVGbihpdGVtc1tpbmRleF0pKSB7XG4gICAgICBpbmRleCArPSBmYWxsYmFja0RlbHRhO1xuXG4gICAgICBpZiAoIWl0ZW1zW2luZGV4XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBpdGVtcyBhcyBhbiBhcnJheS4gKi9cbiAgcHJpdmF0ZSBfZ2V0SXRlbXNBcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcyBpbnN0YW5jZW9mIFF1ZXJ5TGlzdCA/IHRoaXMuX2l0ZW1zLnRvQXJyYXkoKSA6IHRoaXMuX2l0ZW1zO1xuICB9XG59XG4iXX0=