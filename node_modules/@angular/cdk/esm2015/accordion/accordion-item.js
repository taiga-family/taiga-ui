/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/accordion-item.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Output, Directive, EventEmitter, Input, Optional, ChangeDetectorRef, SkipSelf, } from '@angular/core';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { CdkAccordion } from './accordion';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subscription } from 'rxjs';
/**
 * Used to generate unique ID for each accordion item.
 * @type {?}
 */
let nextId = 0;
const ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
export class CdkAccordionItem {
    /**
     * @param {?} accordion
     * @param {?} _changeDetectorRef
     * @param {?} _expansionDispatcher
     */
    constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /**
         * Subscription to openAll/closeAll events.
         */
        this._openCloseAllSubscription = Subscription.EMPTY;
        /**
         * Event emitted every time the AccordionItem is closed.
         */
        this.closed = new EventEmitter();
        /**
         * Event emitted every time the AccordionItem is opened.
         */
        this.opened = new EventEmitter();
        /**
         * Event emitted when the AccordionItem is destroyed.
         */
        this.destroyed = new EventEmitter();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * \@docs-private
         */
        this.expandedChange = new EventEmitter();
        /**
         * The unique AccordionItem id.
         */
        this.id = `cdk-accordion-child-${nextId++}`;
        this._expanded = false;
        this._disabled = false;
        /**
         * Unregister function for _expansionDispatcher.
         */
        this._removeUniqueSelectionListener = (/**
         * @return {?}
         */
        () => { });
        this._removeUniqueSelectionListener =
            _expansionDispatcher.listen((/**
             * @param {?} id
             * @param {?} accordionId
             * @return {?}
             */
            (id, accordionId) => {
                if (this.accordion && !this.accordion.multi &&
                    this.accordion.id === accordionId && this.id !== id) {
                    this.expanded = false;
                }
            }));
        // When an accordion item is hosted in an accordion, subscribe to open/close events.
        if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
    }
    /**
     * Whether the AccordionItem is expanded.
     * @return {?}
     */
    get expanded() { return this._expanded; }
    /**
     * @param {?} expanded
     * @return {?}
     */
    set expanded(expanded) {
        expanded = coerceBooleanProperty(expanded);
        // Only emit events and update the internal value if the value changes.
        if (this._expanded !== expanded) {
            this._expanded = expanded;
            this.expandedChange.emit(expanded);
            if (expanded) {
                this.opened.emit();
                /**
                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                 * the name value is the id of the accordion.
                 * @type {?}
                 */
                const accordionId = this.accordion ? this.accordion.id : this.id;
                this._expansionDispatcher.notify(this.id, accordionId);
            }
            else {
                this.closed.emit();
            }
            // Ensures that the animation will run when the value is set outside of an `@Input`.
            // This includes cases like the open, close and toggle methods.
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the AccordionItem is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) { this._disabled = coerceBooleanProperty(disabled); }
    /**
     * Emits an event for the accordion item being destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
    }
    /**
     * Toggles the expanded state of the accordion item.
     * @return {?}
     */
    toggle() {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    }
    /**
     * Sets the expanded state of the accordion item to false.
     * @return {?}
     */
    close() {
        if (!this.disabled) {
            this.expanded = false;
        }
    }
    /**
     * Sets the expanded state of the accordion item to true.
     * @return {?}
     */
    open() {
        if (!this.disabled) {
            this.expanded = true;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _subscribeToOpenCloseAllActions() {
        return this.accordion._openCloseAllActions.subscribe((/**
         * @param {?} expanded
         * @return {?}
         */
        expanded => {
            // Only change expanded state if item is enabled
            if (!this.disabled) {
                this.expanded = expanded;
            }
        }));
    }
}
CdkAccordionItem.decorators = [
    { type: Directive, args: [{
                selector: 'cdk-accordion-item, [cdkAccordionItem]',
                exportAs: 'cdkAccordionItem',
                providers: [
                    // Provide CdkAccordion as undefined to prevent nested accordion items from registering
                    // to the same accordion.
                    { provide: CdkAccordion, useValue: ɵ0 },
                ],
            },] }
];
/** @nocollapse */
CdkAccordionItem.ctorParameters = () => [
    { type: CdkAccordion, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: ChangeDetectorRef },
    { type: UniqueSelectionDispatcher }
];
CdkAccordionItem.propDecorators = {
    closed: [{ type: Output }],
    opened: [{ type: Output }],
    destroyed: [{ type: Output }],
    expandedChange: [{ type: Output }],
    expanded: [{ type: Input }],
    disabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CdkAccordionItem.ngAcceptInputType_expanded;
    /** @type {?} */
    CdkAccordionItem.ngAcceptInputType_disabled;
    /**
     * Subscription to openAll/closeAll events.
     * @type {?}
     * @private
     */
    CdkAccordionItem.prototype._openCloseAllSubscription;
    /**
     * Event emitted every time the AccordionItem is closed.
     * @type {?}
     */
    CdkAccordionItem.prototype.closed;
    /**
     * Event emitted every time the AccordionItem is opened.
     * @type {?}
     */
    CdkAccordionItem.prototype.opened;
    /**
     * Event emitted when the AccordionItem is destroyed.
     * @type {?}
     */
    CdkAccordionItem.prototype.destroyed;
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     * \@docs-private
     * @type {?}
     */
    CdkAccordionItem.prototype.expandedChange;
    /**
     * The unique AccordionItem id.
     * @type {?}
     */
    CdkAccordionItem.prototype.id;
    /**
     * @type {?}
     * @private
     */
    CdkAccordionItem.prototype._expanded;
    /**
     * @type {?}
     * @private
     */
    CdkAccordionItem.prototype._disabled;
    /**
     * Unregister function for _expansionDispatcher.
     * @type {?}
     * @private
     */
    CdkAccordionItem.prototype._removeUniqueSelectionListener;
    /** @type {?} */
    CdkAccordionItem.prototype.accordion;
    /**
     * @type {?}
     * @private
     */
    CdkAccordionItem.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @protected
     */
    CdkAccordionItem.prototype._expansionDispatcher;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2FjY29yZGlvbi9hY2NvcmRpb24taXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7SUFHOUIsTUFBTSxHQUFHLENBQUM7V0FZd0IsU0FBUzs7Ozs7QUFHL0MsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBMkQzQixZQUEyQyxTQUF1QixFQUM5QyxrQkFBcUMsRUFDbkMsb0JBQStDO1FBRjFCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDOUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNuQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTJCOzs7O1FBM0Q3RCw4QkFBeUIsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDOzs7O1FBRTdDLFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7OztRQUV0RCxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7UUFFdEQsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDOzs7Ozs7UUFPekQsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQzs7OztRQUdyRSxPQUFFLEdBQVcsdUJBQXVCLE1BQU0sRUFBRSxFQUFFLENBQUM7UUE4QmhELGNBQVMs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QUNGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7SUFFTywrQkFBK0I7UUFDckMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFNBQVM7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRTtZQUM5RCxnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEzSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFNBQVMsRUFBRTtvQkFDVCx1RkFBdUY7b0JBQ3ZGLHlCQUF5QjtvQkFDekIsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsSUFBVyxFQUFDO2lCQUM3QzthQUNGOzs7O1lBbkJPLFlBQVksdUJBK0VMLFFBQVEsWUFBSSxRQUFRO1lBbkZqQyxpQkFBaUI7WUFHWCx5QkFBeUI7OztxQkF5QjlCLE1BQU07cUJBRU4sTUFBTTt3QkFFTixNQUFNOzZCQU9OLE1BQU07dUJBTU4sS0FBSzt1QkE4QkwsS0FBSzs7OztJQWlFTiw0Q0FBZ0Q7O0lBQ2hELDRDQUFnRDs7Ozs7O0lBbkhoRCxxREFBdUQ7Ozs7O0lBRXZELGtDQUFnRTs7Ozs7SUFFaEUsa0NBQWdFOzs7OztJQUVoRSxxQ0FBbUU7Ozs7Ozs7SUFPbkUsMENBQThFOzs7OztJQUc5RSw4QkFBd0Q7Ozs7O0lBOEJ4RCxxQ0FBMEI7Ozs7O0lBTTFCLHFDQUFtQzs7Ozs7O0lBR25DLDBEQUE4RDs7SUFFbEQscUNBQXNEOzs7OztJQUN0RCw4Q0FBNkM7Ozs7O0lBQzdDLGdEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBPdXRwdXQsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Q2RrQWNjb3JkaW9ufSBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG4vKiogVXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSUQgZm9yIGVhY2ggYWNjb3JkaW9uIGl0ZW0uICovXG5sZXQgbmV4dElkID0gMDtcblxuLyoqXG4gKiBBbiBiYXNpYyBkaXJlY3RpdmUgZXhwZWN0ZWQgdG8gYmUgZXh0ZW5kZWQgYW5kIGRlY29yYXRlZCBhcyBhIGNvbXBvbmVudC4gIFNldHMgdXAgYWxsXG4gKiBldmVudHMgYW5kIGF0dHJpYnV0ZXMgbmVlZGVkIHRvIGJlIG1hbmFnZWQgYnkgYSBDZGtBY2NvcmRpb24gcGFyZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjZGstYWNjb3JkaW9uLWl0ZW0sIFtjZGtBY2NvcmRpb25JdGVtXScsXG4gIGV4cG9ydEFzOiAnY2RrQWNjb3JkaW9uSXRlbScsXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIFByb3ZpZGUgQ2RrQWNjb3JkaW9uIGFzIHVuZGVmaW5lZCB0byBwcmV2ZW50IG5lc3RlZCBhY2NvcmRpb24gaXRlbXMgZnJvbSByZWdpc3RlcmluZ1xuICAgIC8vIHRvIHRoZSBzYW1lIGFjY29yZGlvbi5cbiAgICB7cHJvdmlkZTogQ2RrQWNjb3JkaW9uLCB1c2VWYWx1ZTogdW5kZWZpbmVkfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQWNjb3JkaW9uSXRlbSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gb3BlbkFsbC9jbG9zZUFsbCBldmVudHMuICovXG4gIHByaXZhdGUgX29wZW5DbG9zZUFsbFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgLyoqIEV2ZW50IGVtaXR0ZWQgZXZlcnkgdGltZSB0aGUgQWNjb3JkaW9uSXRlbSBpcyBjbG9zZWQuICovXG4gIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgLyoqIEV2ZW50IGVtaXR0ZWQgZXZlcnkgdGltZSB0aGUgQWNjb3JkaW9uSXRlbSBpcyBvcGVuZWQuICovXG4gIEBPdXRwdXQoKSBvcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgQWNjb3JkaW9uSXRlbSBpcyBkZXN0cm95ZWQuICovXG4gIEBPdXRwdXQoKSBkZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbmV2ZXIgdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSBhY2NvcmRpb24gY2hhbmdlcy5cbiAgICogUHJpbWFyaWx5IHVzZWQgdG8gZmFjaWxpdGF0ZSB0d28td2F5IGJpbmRpbmcuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBPdXRwdXQoKSBleHBhbmRlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKiBUaGUgdW5pcXVlIEFjY29yZGlvbkl0ZW0gaWQuICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmcgPSBgY2RrLWFjY29yZGlvbi1jaGlsZC0ke25leHRJZCsrfWA7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIEFjY29yZGlvbkl0ZW0gaXMgZXhwYW5kZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBleHBhbmRlZCgpOiBhbnkgeyByZXR1cm4gdGhpcy5fZXhwYW5kZWQ7IH1cbiAgc2V0IGV4cGFuZGVkKGV4cGFuZGVkOiBhbnkpIHtcbiAgICBleHBhbmRlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShleHBhbmRlZCk7XG5cbiAgICAvLyBPbmx5IGVtaXQgZXZlbnRzIGFuZCB1cGRhdGUgdGhlIGludGVybmFsIHZhbHVlIGlmIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgIGlmICh0aGlzLl9leHBhbmRlZCAhPT0gZXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuX2V4cGFuZGVkID0gZXhwYW5kZWQ7XG4gICAgICB0aGlzLmV4cGFuZGVkQ2hhbmdlLmVtaXQoZXhwYW5kZWQpO1xuXG4gICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuZWQuZW1pdCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW4gdGhlIHVuaXF1ZSBzZWxlY3Rpb24gZGlzcGF0Y2hlciwgdGhlIGlkIHBhcmFtZXRlciBpcyB0aGUgaWQgb2YgdGhlIENka0FjY29yZGlvbkl0ZW0sXG4gICAgICAgICAqIHRoZSBuYW1lIHZhbHVlIGlzIHRoZSBpZCBvZiB0aGUgYWNjb3JkaW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgYWNjb3JkaW9uSWQgPSB0aGlzLmFjY29yZGlvbiA/IHRoaXMuYWNjb3JkaW9uLmlkIDogdGhpcy5pZDtcbiAgICAgICAgdGhpcy5fZXhwYW5zaW9uRGlzcGF0Y2hlci5ub3RpZnkodGhpcy5pZCwgYWNjb3JkaW9uSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIGFuaW1hdGlvbiB3aWxsIHJ1biB3aGVuIHRoZSB2YWx1ZSBpcyBzZXQgb3V0c2lkZSBvZiBhbiBgQElucHV0YC5cbiAgICAgIC8vIFRoaXMgaW5jbHVkZXMgY2FzZXMgbGlrZSB0aGUgb3BlbiwgY2xvc2UgYW5kIHRvZ2dsZSBtZXRob2RzLlxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2V4cGFuZGVkID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIEFjY29yZGlvbkl0ZW0gaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpc2FibGVkKTsgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBVbnJlZ2lzdGVyIGZ1bmN0aW9uIGZvciBfZXhwYW5zaW9uRGlzcGF0Y2hlci4gKi9cbiAgcHJpdmF0ZSBfcmVtb3ZlVW5pcXVlU2VsZWN0aW9uTGlzdGVuZXI6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgYWNjb3JkaW9uOiBDZGtBY2NvcmRpb24sXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9leHBhbnNpb25EaXNwYXRjaGVyOiBVbmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyKSB7XG4gICAgdGhpcy5fcmVtb3ZlVW5pcXVlU2VsZWN0aW9uTGlzdGVuZXIgPVxuICAgICAgX2V4cGFuc2lvbkRpc3BhdGNoZXIubGlzdGVuKChpZDogc3RyaW5nLCBhY2NvcmRpb25JZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmFjY29yZGlvbiAmJiAhdGhpcy5hY2NvcmRpb24ubXVsdGkgJiZcbiAgICAgICAgICAgIHRoaXMuYWNjb3JkaW9uLmlkID09PSBhY2NvcmRpb25JZCAmJiB0aGlzLmlkICE9PSBpZCkge1xuICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyBXaGVuIGFuIGFjY29yZGlvbiBpdGVtIGlzIGhvc3RlZCBpbiBhbiBhY2NvcmRpb24sIHN1YnNjcmliZSB0byBvcGVuL2Nsb3NlIGV2ZW50cy5cbiAgICBpZiAodGhpcy5hY2NvcmRpb24pIHtcbiAgICAgIHRoaXMuX29wZW5DbG9zZUFsbFN1YnNjcmlwdGlvbiA9IHRoaXMuX3N1YnNjcmliZVRvT3BlbkNsb3NlQWxsQWN0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBFbWl0cyBhbiBldmVudCBmb3IgdGhlIGFjY29yZGlvbiBpdGVtIGJlaW5nIGRlc3Ryb3llZC4gKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vcGVuZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLmNsb3NlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveWVkLmVtaXQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX3JlbW92ZVVuaXF1ZVNlbGVjdGlvbkxpc3RlbmVyKCk7XG4gICAgdGhpcy5fb3BlbkNsb3NlQWxsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKiogVG9nZ2xlcyB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIGFjY29yZGlvbiBpdGVtLiAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSBhY2NvcmRpb24gaXRlbSB0byBmYWxzZS4gKi9cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSBhY2NvcmRpb24gaXRlbSB0byB0cnVlLiAqL1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9PcGVuQ2xvc2VBbGxBY3Rpb25zKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuYWNjb3JkaW9uLl9vcGVuQ2xvc2VBbGxBY3Rpb25zLnN1YnNjcmliZShleHBhbmRlZCA9PiB7XG4gICAgICAvLyBPbmx5IGNoYW5nZSBleHBhbmRlZCBzdGF0ZSBpZiBpdGVtIGlzIGVuYWJsZWRcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmV4cGFuZGVkID0gZXhwYW5kZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZXhwYW5kZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=