/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Subject } from 'rxjs';
/**
 * Class to be used to power selecting one or more options from a list.
 */
export declare class SelectionModel<T> {
    private _multiple;
    private _emitChanges;
    /** Currently-selected values. */
    private _selection;
    /** Keeps track of the deselected options that haven't been emitted by the change event. */
    private _deselectedToEmit;
    /** Keeps track of the selected options that haven't been emitted by the change event. */
    private _selectedToEmit;
    /** Cache for the array value of the selected items. */
    private _selected;
    /** Selected values. */
    get selected(): T[];
    /** Event emitted when the value has changed. */
    changed: Subject<SelectionChange<T>>;
    constructor(_multiple?: boolean, initiallySelectedValues?: T[], _emitChanges?: boolean);
    /**
     * Selects a value or an array of values.
     */
    select(...values: T[]): void;
    /**
     * Deselects a value or an array of values.
     */
    deselect(...values: T[]): void;
    /**
     * Toggles a value between selected and deselected.
     */
    toggle(value: T): void;
    /**
     * Clears all of the selected values.
     */
    clear(): void;
    /**
     * Determines whether a value is selected.
     */
    isSelected(value: T): boolean;
    /**
     * Determines whether the model does not have a value.
     */
    isEmpty(): boolean;
    /**
     * Determines whether the model has a value.
     */
    hasValue(): boolean;
    /**
     * Sorts the selected values based on a predicate function.
     */
    sort(predicate?: (a: T, b: T) => number): void;
    /**
     * Gets whether multiple values can be selected.
     */
    isMultipleSelection(): boolean;
    /** Emits a change event and clears the records of selected and deselected values. */
    private _emitChangeEvent;
    /** Selects a value. */
    private _markSelected;
    /** Deselects a value. */
    private _unmarkSelected;
    /** Clears out the selected values. */
    private _unmarkAll;
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     */
    private _verifyValueAssignment;
}
/**
 * Event emitted when the value of a MatSelectionModel has changed.
 * @docs-private
 */
export interface SelectionChange<T> {
    /** Model that dispatched the event. */
    source: SelectionModel<T>;
    /** Options that were added to the model. */
    added: T[];
    /** Options that were removed from the model. */
    removed: T[];
}
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * @docs-private
 */
export declare function getMultipleValuesInSingleSelectionError(): Error;
