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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkAccordionItem, [{ optional: true; skipSelf: true; }, null, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkAccordionItem, "cdk-accordion-item, [cdkAccordionItem]", ["cdkAccordionItem"], { "expanded": "expanded"; "disabled": "disabled"; }, { "closed": "closed"; "opened": "opened"; "destroyed": "destroyed"; "expandedChange": "expandedChange"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uZC50cyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLWl0ZW0uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IENka0FjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG4vKipcbiAqIEFuIGJhc2ljIGRpcmVjdGl2ZSBleHBlY3RlZCB0byBiZSBleHRlbmRlZCBhbmQgZGVjb3JhdGVkIGFzIGEgY29tcG9uZW50LiAgU2V0cyB1cCBhbGxcbiAqIGV2ZW50cyBhbmQgYXR0cmlidXRlcyBuZWVkZWQgdG8gYmUgbWFuYWdlZCBieSBhIENka0FjY29yZGlvbiBwYXJlbnQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka0FjY29yZGlvbkl0ZW0gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIGFjY29yZGlvbjogQ2RrQWNjb3JkaW9uO1xuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmO1xuICAgIHByb3RlY3RlZCBfZXhwYW5zaW9uRGlzcGF0Y2hlcjogVW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlcjtcbiAgICAvKiogU3Vic2NyaXB0aW9uIHRvIG9wZW5BbGwvY2xvc2VBbGwgZXZlbnRzLiAqL1xuICAgIHByaXZhdGUgX29wZW5DbG9zZUFsbFN1YnNjcmlwdGlvbjtcbiAgICAvKiogRXZlbnQgZW1pdHRlZCBldmVyeSB0aW1lIHRoZSBBY2NvcmRpb25JdGVtIGlzIGNsb3NlZC4gKi9cbiAgICBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICAvKiogRXZlbnQgZW1pdHRlZCBldmVyeSB0aW1lIHRoZSBBY2NvcmRpb25JdGVtIGlzIG9wZW5lZC4gKi9cbiAgICBvcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBBY2NvcmRpb25JdGVtIGlzIGRlc3Ryb3llZC4gKi9cbiAgICBkZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICAvKipcbiAgICAgKiBFbWl0cyB3aGVuZXZlciB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIGFjY29yZGlvbiBjaGFuZ2VzLlxuICAgICAqIFByaW1hcmlseSB1c2VkIHRvIGZhY2lsaXRhdGUgdHdvLXdheSBiaW5kaW5nLlxuICAgICAqIEBkb2NzLXByaXZhdGVcbiAgICAgKi9cbiAgICBleHBhbmRlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgIC8qKiBUaGUgdW5pcXVlIEFjY29yZGlvbkl0ZW0gaWQuICovXG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgICAvKiogV2hldGhlciB0aGUgQWNjb3JkaW9uSXRlbSBpcyBleHBhbmRlZC4gKi9cbiAgICBnZXQgZXhwYW5kZWQoKTogYW55O1xuICAgIHNldCBleHBhbmRlZChleHBhbmRlZDogYW55KTtcbiAgICBwcml2YXRlIF9leHBhbmRlZDtcbiAgICAvKiogV2hldGhlciB0aGUgQWNjb3JkaW9uSXRlbSBpcyBkaXNhYmxlZC4gKi9cbiAgICBnZXQgZGlzYWJsZWQoKTogYW55O1xuICAgIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYW55KTtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDtcbiAgICAvKiogVW5yZWdpc3RlciBmdW5jdGlvbiBmb3IgX2V4cGFuc2lvbkRpc3BhdGNoZXIuICovXG4gICAgcHJpdmF0ZSBfcmVtb3ZlVW5pcXVlU2VsZWN0aW9uTGlzdGVuZXI7XG4gICAgY29uc3RydWN0b3IoYWNjb3JkaW9uOiBDZGtBY2NvcmRpb24sIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIF9leHBhbnNpb25EaXNwYXRjaGVyOiBVbmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyKTtcbiAgICAvKiogRW1pdHMgYW4gZXZlbnQgZm9yIHRoZSBhY2NvcmRpb24gaXRlbSBiZWluZyBkZXN0cm95ZWQuICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKiogVG9nZ2xlcyB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIGFjY29yZGlvbiBpdGVtLiAqL1xuICAgIHRvZ2dsZSgpOiB2b2lkO1xuICAgIC8qKiBTZXRzIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiB0aGUgYWNjb3JkaW9uIGl0ZW0gdG8gZmFsc2UuICovXG4gICAgY2xvc2UoKTogdm9pZDtcbiAgICAvKiogU2V0cyB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIGFjY29yZGlvbiBpdGVtIHRvIHRydWUuICovXG4gICAgb3BlbigpOiB2b2lkO1xuICAgIHByaXZhdGUgX3N1YnNjcmliZVRvT3BlbkNsb3NlQWxsQWN0aW9ucztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZXhwYW5kZWQ6IEJvb2xlYW5JbnB1dDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==