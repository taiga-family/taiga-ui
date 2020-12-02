/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { CdkAccordion } from './accordion';
import { BooleanInput } from '@angular/cdk/coercion';
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
export declare class CdkAccordionItem implements OnDestroy {
    accordion: CdkAccordion;
    private _changeDetectorRef;
    protected _expansionDispatcher: UniqueSelectionDispatcher;
    /** Subscription to openAll/closeAll events. */
    private _openCloseAllSubscription;
    /** Event emitted every time the AccordionItem is closed. */
    closed: EventEmitter<void>;
    /** Event emitted every time the AccordionItem is opened. */
    opened: EventEmitter<void>;
    /** Event emitted when the AccordionItem is destroyed. */
    destroyed: EventEmitter<void>;
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     * @docs-private
     */
    expandedChange: EventEmitter<boolean>;
    /** The unique AccordionItem id. */
    readonly id: string;
    /** Whether the AccordionItem is expanded. */
    get expanded(): any;
    set expanded(expanded: any);
    private _expanded;
    /** Whether the AccordionItem is disabled. */
    get disabled(): any;
    set disabled(disabled: any);
    private _disabled;
    /** Unregister function for _expansionDispatcher. */
    private _removeUniqueSelectionListener;
    constructor(accordion: CdkAccordion, _changeDetectorRef: ChangeDetectorRef, _expansionDispatcher: UniqueSelectionDispatcher);
    /** Emits an event for the accordion item being destroyed. */
    ngOnDestroy(): void;
    /** Toggles the expanded state of the accordion item. */
    toggle(): void;
    /** Sets the expanded state of the accordion item to false. */
    close(): void;
    /** Sets the expanded state of the accordion item to true. */
    open(): void;
    private _subscribeToOpenCloseAllActions;
    static ngAcceptInputType_expanded: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
}
