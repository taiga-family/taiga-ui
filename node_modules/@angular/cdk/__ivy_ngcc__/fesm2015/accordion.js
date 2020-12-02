import { Directive, Input, EventEmitter, Optional, SkipSelf, ChangeDetectorRef, Output, NgModule } from '@angular/core';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject, Subscription } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/accordion.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/collections';
let nextId = 0;
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
class CdkAccordion {
    constructor() {
        /**
         * Emits when the state of the accordion changes
         */
        this._stateChanges = new Subject();
        /**
         * Stream that emits true/false when openAll/closeAll is triggered.
         */
        this._openCloseAllActions = new Subject();
        /**
         * A readonly id value to use for unique selection coordination.
         */
        this.id = `cdk-accordion-${nextId++}`;
        this._multi = false;
    }
    /**
     * Whether the accordion should allow multiple expanded accordion items simultaneously.
     * @return {?}
     */
    get multi() { return this._multi; }
    /**
     * @param {?} multi
     * @return {?}
     */
    set multi(multi) { this._multi = coerceBooleanProperty(multi); }
    /**
     * Opens all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    openAll() {
        this._openCloseAll(true);
    }
    /**
     * Closes all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    closeAll() {
        this._openCloseAll(false);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._stateChanges.next(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    /**
     * @private
     * @param {?} expanded
     * @return {?}
     */
    _openCloseAll(expanded) {
        if (this.multi) {
            this._openCloseAllActions.next(expanded);
        }
    }
}
CdkAccordion.ɵfac = function CdkAccordion_Factory(t) { return new (t || CdkAccordion)(); };
CdkAccordion.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkAccordion, selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]], inputs: { multi: "multi" }, exportAs: ["cdkAccordion"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
CdkAccordion.propDecorators = {
    multi: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkAccordion, [{
        type: Directive,
        args: [{
                selector: 'cdk-accordion, [cdkAccordion]',
                exportAs: 'cdkAccordion'
            }]
    }], function () { return []; }, { multi: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    CdkAccordion.ngAcceptInputType_multi;
    /**
     * Emits when the state of the accordion changes
     * @type {?}
     */
    CdkAccordion.prototype._stateChanges;
    /**
     * Stream that emits true/false when openAll/closeAll is triggered.
     * @type {?}
     */
    CdkAccordion.prototype._openCloseAllActions;
    /**
     * A readonly id value to use for unique selection coordination.
     * @type {?}
     */
    CdkAccordion.prototype.id;
    /**
     * @type {?}
     * @private
     */
    CdkAccordion.prototype._multi;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/accordion-item.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion item.
 * @type {?}
 */
let nextId$1 = 0;
const ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
class CdkAccordionItem {
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
        this.id = `cdk-accordion-child-${nextId$1++}`;
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
CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) { return new (t || CdkAccordionItem)(ɵngcc0.ɵɵdirectiveInject(CdkAccordion, 12), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.UniqueSelectionDispatcher)); };
CdkAccordionItem.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkAccordionItem, selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]], inputs: { expanded: "expanded", disabled: "disabled" }, outputs: { closed: "closed", opened: "opened", destroyed: "destroyed", expandedChange: "expandedChange" }, exportAs: ["cdkAccordionItem"], features: [ɵngcc0.ɵɵProvidersFeature([
            // Provide CdkAccordion as undefined to prevent nested accordion items from registering
            // to the same accordion.
            { provide: CdkAccordion, useValue: ɵ0 },
        ])] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkAccordionItem, [{
        type: Directive,
        args: [{
                selector: 'cdk-accordion-item, [cdkAccordionItem]',
                exportAs: 'cdkAccordionItem',
                providers: [
                    // Provide CdkAccordion as undefined to prevent nested accordion items from registering
                    // to the same accordion.
                    { provide: CdkAccordion, useValue: ɵ0 },
                ]
            }]
    }], function () { return [{ type: CdkAccordion, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.UniqueSelectionDispatcher }]; }, { closed: [{
            type: Output
        }], opened: [{
            type: Output
        }], destroyed: [{
            type: Output
        }], expandedChange: [{
            type: Output
        }], expanded: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/accordion-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdkAccordionModule {
}
CdkAccordionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CdkAccordionModule });
CdkAccordionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CdkAccordionModule_Factory(t) { return new (t || CdkAccordionModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CdkAccordionModule, { declarations: [CdkAccordion,
        CdkAccordionItem], exports: [CdkAccordion,
        CdkAccordionItem] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkAccordionModule, [{
        type: NgModule,
        args: [{
                exports: [CdkAccordion, CdkAccordionItem],
                declarations: [CdkAccordion, CdkAccordionItem]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CdkAccordion, CdkAccordionItem, CdkAccordionModule };

//# sourceMappingURL=accordion.js.map