/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { QueryList } from '@angular/core';
import { Subject } from 'rxjs';
/** This interface is for items that can be passed to a ListKeyManager. */
export interface ListKeyManagerOption {
    /** Whether the option is disabled. */
    disabled?: boolean;
    /** Gets the label for this option. */
    getLabel?(): string;
}
/** Modifier keys handled by the ListKeyManager. */
export declare type ListKeyManagerModifierKey = 'altKey' | 'ctrlKey' | 'metaKey' | 'shiftKey';
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
export declare class ListKeyManager<T extends ListKeyManagerOption> {
    private _items;
    private _activeItemIndex;
    private _activeItem;
    private _wrap;
    private _letterKeyStream;
    private _typeaheadSubscription;
    private _vertical;
    private _horizontal;
    private _allowedModifierKeys;
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager. By default, disabled items are skipped.
     */
    private _skipPredicateFn;
    private _pressedLetters;
    constructor(_items: QueryList<T> | T[]);
    /**
     * Stream that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     */
    tabOut: Subject<void>;
    /** Stream that emits whenever the active item of the list manager changes. */
    change: Subject<number>;
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param predicate Function that determines whether the given item should be skipped.
     */
    skipPredicate(predicate: (item: T) => boolean): this;
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @param shouldWrap Whether the list should wrap when reaching the end.
     */
    withWrap(shouldWrap?: boolean): this;
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param enabled Whether vertical selection should be enabled.
     */
    withVerticalOrientation(enabled?: boolean): this;
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param direction Direction in which the selection can be moved.
     */
    withHorizontalOrientation(direction: 'ltr' | 'rtl' | null): this;
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     */
    withAllowedModifierKeys(keys: ListKeyManagerModifierKey[]): this;
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */
    withTypeAhead(debounceInterval?: number): this;
    /**
     * Sets the active item to the item at the index specified.
     * @param index The index of the item to be set as active.
     */
    setActiveItem(index: number): void;
    /**
     * Sets the active item to the specified item.
     * @param item The item to be set as active.
     */
    setActiveItem(item: T): void;
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    onKeydown(event: KeyboardEvent): void;
    /** Index of the currently active item. */
    get activeItemIndex(): number | null;
    /** The active item. */
    get activeItem(): T | null;
    /** Gets whether the user is currently typing into the manager using the typeahead feature. */
    isTyping(): boolean;
    /** Sets the active item to the first enabled item in the list. */
    setFirstItemActive(): void;
    /** Sets the active item to the last enabled item in the list. */
    setLastItemActive(): void;
    /** Sets the active item to the next enabled item in the list. */
    setNextItemActive(): void;
    /** Sets the active item to a previous enabled item in the list. */
    setPreviousItemActive(): void;
    /**
     * Allows setting the active without any other effects.
     * @param index Index of the item to be set as active.
     */
    updateActiveItem(index: number): void;
    /**
     * Allows setting the active item without any other effects.
     * @param item Item to be set as active.
     */
    updateActiveItem(item: T): void;
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     */
    private _setActiveItemByDelta;
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     */
    private _setActiveInWrapMode;
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     */
    private _setActiveInDefaultMode;
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     */
    private _setActiveItemByIndex;
    /** Returns the items as an array. */
    private _getItemsArray;
}
