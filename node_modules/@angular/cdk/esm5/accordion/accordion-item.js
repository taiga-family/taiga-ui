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
/** Used to generate unique ID for each accordion item. */
var nextId = 0;
var ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
var CdkAccordionItem = /** @class */ (function () {
    function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
        var _this = this;
        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /** Subscription to openAll/closeAll events. */
        this._openCloseAllSubscription = Subscription.EMPTY;
        /** Event emitted every time the AccordionItem is closed. */
        this.closed = new EventEmitter();
        /** Event emitted every time the AccordionItem is opened. */
        this.opened = new EventEmitter();
        /** Event emitted when the AccordionItem is destroyed. */
        this.destroyed = new EventEmitter();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * @docs-private
         */
        this.expandedChange = new EventEmitter();
        /** The unique AccordionItem id. */
        this.id = "cdk-accordion-child-" + nextId++;
        this._expanded = false;
        this._disabled = false;
        /** Unregister function for _expansionDispatcher. */
        this._removeUniqueSelectionListener = function () { };
        this._removeUniqueSelectionListener =
            _expansionDispatcher.listen(function (id, accordionId) {
                if (_this.accordion && !_this.accordion.multi &&
                    _this.accordion.id === accordionId && _this.id !== id) {
                    _this.expanded = false;
                }
            });
        // When an accordion item is hosted in an accordion, subscribe to open/close events.
        if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
    }
    Object.defineProperty(CdkAccordionItem.prototype, "expanded", {
        /** Whether the AccordionItem is expanded. */
        get: function () { return this._expanded; },
        set: function (expanded) {
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
                     */
                    var accordionId = this.accordion ? this.accordion.id : this.id;
                    this._expansionDispatcher.notify(this.id, accordionId);
                }
                else {
                    this.closed.emit();
                }
                // Ensures that the animation will run when the value is set outside of an `@Input`.
                // This includes cases like the open, close and toggle methods.
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkAccordionItem.prototype, "disabled", {
        /** Whether the AccordionItem is disabled. */
        get: function () { return this._disabled; },
        set: function (disabled) { this._disabled = coerceBooleanProperty(disabled); },
        enumerable: true,
        configurable: true
    });
    /** Emits an event for the accordion item being destroyed. */
    CdkAccordionItem.prototype.ngOnDestroy = function () {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
    };
    /** Toggles the expanded state of the accordion item. */
    CdkAccordionItem.prototype.toggle = function () {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    };
    /** Sets the expanded state of the accordion item to false. */
    CdkAccordionItem.prototype.close = function () {
        if (!this.disabled) {
            this.expanded = false;
        }
    };
    /** Sets the expanded state of the accordion item to true. */
    CdkAccordionItem.prototype.open = function () {
        if (!this.disabled) {
            this.expanded = true;
        }
    };
    CdkAccordionItem.prototype._subscribeToOpenCloseAllActions = function () {
        var _this = this;
        return this.accordion._openCloseAllActions.subscribe(function (expanded) {
            // Only change expanded state if item is enabled
            if (!_this.disabled) {
                _this.expanded = expanded;
            }
        });
    };
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
    CdkAccordionItem.ctorParameters = function () { return [
        { type: CdkAccordion, decorators: [{ type: Optional }, { type: SkipSelf }] },
        { type: ChangeDetectorRef },
        { type: UniqueSelectionDispatcher }
    ]; };
    CdkAccordionItem.propDecorators = {
        closed: [{ type: Output }],
        opened: [{ type: Output }],
        destroyed: [{ type: Output }],
        expandedChange: [{ type: Output }],
        expanded: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return CdkAccordionItem;
}());
export { CdkAccordionItem };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2FjY29yZGlvbi9hY2NvcmRpb24taXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVsQywwREFBMEQ7QUFDMUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBWXVCLFNBQVM7QUFWL0M7OztHQUdHO0FBQ0g7SUFvRUUsMEJBQTJDLFNBQXVCLEVBQzlDLGtCQUFxQyxFQUNuQyxvQkFBK0M7UUFGckUsaUJBZUM7UUFmMEMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUM5Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMkI7UUE1RHJFLCtDQUErQztRQUN2Qyw4QkFBeUIsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3ZELDREQUE0RDtRQUNsRCxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDaEUsNERBQTREO1FBQ2xELFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNoRSx5REFBeUQ7UUFDL0MsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRW5FOzs7O1dBSUc7UUFDTyxtQkFBYyxHQUEw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SUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsZ0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELDZEQUE2RDtJQUM3RCwrQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRU8sMERBQStCLEdBQXZDO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUMzRCxnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkEzSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3Q0FBd0M7b0JBQ2xELFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFNBQVMsRUFBRTt3QkFDVCx1RkFBdUY7d0JBQ3ZGLHlCQUF5Qjt3QkFDekIsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsSUFBVyxFQUFDO3FCQUM3QztpQkFDRjs7OztnQkFuQk8sWUFBWSx1QkErRUwsUUFBUSxZQUFJLFFBQVE7Z0JBbkZqQyxpQkFBaUI7Z0JBR1gseUJBQXlCOzs7eUJBeUI5QixNQUFNO3lCQUVOLE1BQU07NEJBRU4sTUFBTTtpQ0FPTixNQUFNOzJCQU1OLEtBQUs7MkJBOEJMLEtBQUs7O0lBbUVSLHVCQUFDO0NBQUEsQUEvSEQsSUErSEM7U0F0SFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIE91dHB1dCxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVbmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtDZGtBY2NvcmRpb259IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbi8qKiBVc2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRCBmb3IgZWFjaCBhY2NvcmRpb24gaXRlbS4gKi9cbmxldCBuZXh0SWQgPSAwO1xuXG4vKipcbiAqIEFuIGJhc2ljIGRpcmVjdGl2ZSBleHBlY3RlZCB0byBiZSBleHRlbmRlZCBhbmQgZGVjb3JhdGVkIGFzIGEgY29tcG9uZW50LiAgU2V0cyB1cCBhbGxcbiAqIGV2ZW50cyBhbmQgYXR0cmlidXRlcyBuZWVkZWQgdG8gYmUgbWFuYWdlZCBieSBhIENka0FjY29yZGlvbiBwYXJlbnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2Nkay1hY2NvcmRpb24taXRlbSwgW2Nka0FjY29yZGlvbkl0ZW1dJyxcbiAgZXhwb3J0QXM6ICdjZGtBY2NvcmRpb25JdGVtJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gUHJvdmlkZSBDZGtBY2NvcmRpb24gYXMgdW5kZWZpbmVkIHRvIHByZXZlbnQgbmVzdGVkIGFjY29yZGlvbiBpdGVtcyBmcm9tIHJlZ2lzdGVyaW5nXG4gICAgLy8gdG8gdGhlIHNhbWUgYWNjb3JkaW9uLlxuICAgIHtwcm92aWRlOiBDZGtBY2NvcmRpb24sIHVzZVZhbHVlOiB1bmRlZmluZWR9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtBY2NvcmRpb25JdGVtIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBvcGVuQWxsL2Nsb3NlQWxsIGV2ZW50cy4gKi9cbiAgcHJpdmF0ZSBfb3BlbkNsb3NlQWxsU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAvKiogRXZlbnQgZW1pdHRlZCBldmVyeSB0aW1lIHRoZSBBY2NvcmRpb25JdGVtIGlzIGNsb3NlZC4gKi9cbiAgQE91dHB1dCgpIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAvKiogRXZlbnQgZW1pdHRlZCBldmVyeSB0aW1lIHRoZSBBY2NvcmRpb25JdGVtIGlzIG9wZW5lZC4gKi9cbiAgQE91dHB1dCgpIG9wZW5lZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBBY2NvcmRpb25JdGVtIGlzIGRlc3Ryb3llZC4gKi9cbiAgQE91dHB1dCgpIGRlc3Ryb3llZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuZXZlciB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIGFjY29yZGlvbiBjaGFuZ2VzLlxuICAgKiBQcmltYXJpbHkgdXNlZCB0byBmYWNpbGl0YXRlIHR3by13YXkgYmluZGluZy5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQE91dHB1dCgpIGV4cGFuZGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqIFRoZSB1bmlxdWUgQWNjb3JkaW9uSXRlbSBpZC4gKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZyA9IGBjZGstYWNjb3JkaW9uLWNoaWxkLSR7bmV4dElkKyt9YDtcblxuICAvKiogV2hldGhlciB0aGUgQWNjb3JkaW9uSXRlbSBpcyBleHBhbmRlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGV4cGFuZGVkKCk6IGFueSB7IHJldHVybiB0aGlzLl9leHBhbmRlZDsgfVxuICBzZXQgZXhwYW5kZWQoZXhwYW5kZWQ6IGFueSkge1xuICAgIGV4cGFuZGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGV4cGFuZGVkKTtcblxuICAgIC8vIE9ubHkgZW1pdCBldmVudHMgYW5kIHVwZGF0ZSB0aGUgaW50ZXJuYWwgdmFsdWUgaWYgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgaWYgKHRoaXMuX2V4cGFuZGVkICE9PSBleHBhbmRlZCkge1xuICAgICAgdGhpcy5fZXhwYW5kZWQgPSBleHBhbmRlZDtcbiAgICAgIHRoaXMuZXhwYW5kZWRDaGFuZ2UuZW1pdChleHBhbmRlZCk7XG5cbiAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICB0aGlzLm9wZW5lZC5lbWl0KCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbiB0aGUgdW5pcXVlIHNlbGVjdGlvbiBkaXNwYXRjaGVyLCB0aGUgaWQgcGFyYW1ldGVyIGlzIHRoZSBpZCBvZiB0aGUgQ2RrQWNjb3JkaW9uSXRlbSxcbiAgICAgICAgICogdGhlIG5hbWUgdmFsdWUgaXMgdGhlIGlkIG9mIHRoZSBhY2NvcmRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBhY2NvcmRpb25JZCA9IHRoaXMuYWNjb3JkaW9uID8gdGhpcy5hY2NvcmRpb24uaWQgOiB0aGlzLmlkO1xuICAgICAgICB0aGlzLl9leHBhbnNpb25EaXNwYXRjaGVyLm5vdGlmeSh0aGlzLmlkLCBhY2NvcmRpb25JZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIHdoZW4gdGhlIHZhbHVlIGlzIHNldCBvdXRzaWRlIG9mIGFuIGBASW5wdXRgLlxuICAgICAgLy8gVGhpcyBpbmNsdWRlcyBjYXNlcyBsaWtlIHRoZSBvcGVuLCBjbG9zZSBhbmQgdG9nZ2xlIG1ldGhvZHMuXG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZXhwYW5kZWQgPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgQWNjb3JkaW9uSXRlbSBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkOiBhbnkpIHsgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZGlzYWJsZWQpOyB9XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFVucmVnaXN0ZXIgZnVuY3Rpb24gZm9yIF9leHBhbnNpb25EaXNwYXRjaGVyLiAqL1xuICBwcml2YXRlIF9yZW1vdmVVbmlxdWVTZWxlY3Rpb25MaXN0ZW5lcjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBhY2NvcmRpb246IENka0FjY29yZGlvbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2V4cGFuc2lvbkRpc3BhdGNoZXI6IFVuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXIpIHtcbiAgICB0aGlzLl9yZW1vdmVVbmlxdWVTZWxlY3Rpb25MaXN0ZW5lciA9XG4gICAgICBfZXhwYW5zaW9uRGlzcGF0Y2hlci5saXN0ZW4oKGlkOiBzdHJpbmcsIGFjY29yZGlvbklkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYWNjb3JkaW9uICYmICF0aGlzLmFjY29yZGlvbi5tdWx0aSAmJlxuICAgICAgICAgICAgdGhpcy5hY2NvcmRpb24uaWQgPT09IGFjY29yZGlvbklkICYmIHRoaXMuaWQgIT09IGlkKSB7XG4gICAgICAgICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIC8vIFdoZW4gYW4gYWNjb3JkaW9uIGl0ZW0gaXMgaG9zdGVkIGluIGFuIGFjY29yZGlvbiwgc3Vic2NyaWJlIHRvIG9wZW4vY2xvc2UgZXZlbnRzLlxuICAgIGlmICh0aGlzLmFjY29yZGlvbikge1xuICAgICAgdGhpcy5fb3BlbkNsb3NlQWxsU3Vic2NyaXB0aW9uID0gdGhpcy5fc3Vic2NyaWJlVG9PcGVuQ2xvc2VBbGxBY3Rpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEVtaXRzIGFuIGV2ZW50IGZvciB0aGUgYWNjb3JkaW9uIGl0ZW0gYmVpbmcgZGVzdHJveWVkLiAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9wZW5lZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuY2xvc2VkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95ZWQuZW1pdCgpO1xuICAgIHRoaXMuZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fcmVtb3ZlVW5pcXVlU2VsZWN0aW9uTGlzdGVuZXIoKTtcbiAgICB0aGlzLl9vcGVuQ2xvc2VBbGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiB0aGUgYWNjb3JkaW9uIGl0ZW0uICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIGFjY29yZGlvbiBpdGVtIHRvIGZhbHNlLiAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIGFjY29yZGlvbiBpdGVtIHRvIHRydWUuICovXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdWJzY3JpYmVUb09wZW5DbG9zZUFsbEFjdGlvbnMoKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5hY2NvcmRpb24uX29wZW5DbG9zZUFsbEFjdGlvbnMuc3Vic2NyaWJlKGV4cGFuZGVkID0+IHtcbiAgICAgIC8vIE9ubHkgY2hhbmdlIGV4cGFuZGVkIHN0YXRlIGlmIGl0ZW0gaXMgZW5hYmxlZFxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSBleHBhbmRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9leHBhbmRlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==