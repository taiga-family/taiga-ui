/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/stepper/stepper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusKeyManager } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { END, ENTER, hasModifierKey, HOME, SPACE } from '@angular/cdk/keycodes';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, forwardRef, Inject, InjectionToken, Input, Optional, Output, QueryList, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { of as observableOf, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { CdkStepHeader } from './step-header';
import { CdkStepLabel } from './step-label';
/**
 * Used to generate unique ID for each stepper component.
 * @type {?}
 */
let nextId = 0;
/**
 * Change event emitted on selection changes.
 */
export class StepperSelectionEvent {
}
if (false) {
    /**
     * Index of the step now selected.
     * @type {?}
     */
    StepperSelectionEvent.prototype.selectedIndex;
    /**
     * Index of the step previously selected.
     * @type {?}
     */
    StepperSelectionEvent.prototype.previouslySelectedIndex;
    /**
     * The step instance now selected.
     * @type {?}
     */
    StepperSelectionEvent.prototype.selectedStep;
    /**
     * The step instance previously selected.
     * @type {?}
     */
    StepperSelectionEvent.prototype.previouslySelectedStep;
}
/**
 * Enum to represent the different states of the steps.
 * @type {?}
 */
export const STEP_STATE = {
    NUMBER: 'number',
    EDIT: 'edit',
    DONE: 'done',
    ERROR: 'error'
};
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @type {?}
 */
export const STEPPER_GLOBAL_OPTIONS = new InjectionToken('STEPPER_GLOBAL_OPTIONS');
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
 * \@breaking-change 8.0.0.
 * @type {?}
 */
export const MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;
/**
 * Configurable options for stepper.
 * @record
 */
export function StepperOptions() { }
if (false) {
    /**
     * Whether the stepper should display an error state or not.
     * Default behavior is assumed to be false.
     * @type {?|undefined}
     */
    StepperOptions.prototype.showError;
    /**
     * Whether the stepper should display the default indicator type
     * or not.
     * Default behavior is assumed to be true.
     * @type {?|undefined}
     */
    StepperOptions.prototype.displayDefaultIndicatorType;
}
export class CdkStep {
    /**
     * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
     * @param {?} _stepper
     * @param {?=} stepperOptions
     */
    constructor(_stepper, stepperOptions) {
        this._stepper = _stepper;
        /**
         * Whether user has seen the expanded step content or not.
         */
        this.interacted = false;
        this._editable = true;
        this._optional = false;
        this._completedOverride = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
        this._showError = !!this._stepperOptions.showError;
    }
    /**
     * Whether the user can return to this step once it has been marked as completed.
     * @return {?}
     */
    get editable() {
        return this._editable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set editable(value) {
        this._editable = coerceBooleanProperty(value);
    }
    /**
     * Whether the completion of step is optional.
     * @return {?}
     */
    get optional() {
        return this._optional;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set optional(value) {
        this._optional = coerceBooleanProperty(value);
    }
    /**
     * Whether step is marked as completed.
     * @return {?}
     */
    get completed() {
        return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set completed(value) {
        this._completedOverride = coerceBooleanProperty(value);
    }
    /**
     * @private
     * @return {?}
     */
    _getDefaultCompleted() {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    }
    /**
     * Whether step has an error.
     * @return {?}
     */
    get hasError() {
        return this._customError == null ? this._getDefaultError() : this._customError;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasError(value) {
        this._customError = coerceBooleanProperty(value);
    }
    /**
     * @private
     * @return {?}
     */
    _getDefaultError() {
        return this.stepControl && this.stepControl.invalid && this.interacted;
    }
    /**
     * Selects this step component.
     * @return {?}
     */
    select() {
        this._stepper.selected = this;
    }
    /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    reset() {
        this.interacted = false;
        if (this._completedOverride != null) {
            this._completedOverride = false;
        }
        if (this._customError != null) {
            this._customError = false;
        }
        if (this.stepControl) {
            this.stepControl.reset();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // Since basically all inputs of the MatStep get proxied through the view down to the
        // underlying MatStepHeader, we have to make sure that change detection runs correctly.
        this._stepper._stateChanged();
    }
}
CdkStep.decorators = [
    { type: Component, args: [{
                selector: 'cdk-step',
                exportAs: 'cdkStep',
                template: '<ng-template><ng-content></ng-content></ng-template>',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CdkStep.ctorParameters = () => [
    { type: CdkStepper, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => CdkStepper)),] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [STEPPER_GLOBAL_OPTIONS,] }] }
];
CdkStep.propDecorators = {
    stepLabel: [{ type: ContentChild, args: [CdkStepLabel,] }],
    content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    stepControl: [{ type: Input }],
    label: [{ type: Input }],
    errorMessage: [{ type: Input }],
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
    state: [{ type: Input }],
    editable: [{ type: Input }],
    optional: [{ type: Input }],
    completed: [{ type: Input }],
    hasError: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CdkStep.ngAcceptInputType_editable;
    /** @type {?} */
    CdkStep.ngAcceptInputType_hasError;
    /** @type {?} */
    CdkStep.ngAcceptInputType_optional;
    /** @type {?} */
    CdkStep.ngAcceptInputType_completed;
    /**
     * @type {?}
     * @private
     */
    CdkStep.prototype._stepperOptions;
    /** @type {?} */
    CdkStep.prototype._showError;
    /** @type {?} */
    CdkStep.prototype._displayDefaultIndicatorType;
    /**
     * Template for step label if it exists.
     * @type {?}
     */
    CdkStep.prototype.stepLabel;
    /**
     * Template for step content.
     * @type {?}
     */
    CdkStep.prototype.content;
    /**
     * The top level abstract control of the step.
     * @type {?}
     */
    CdkStep.prototype.stepControl;
    /**
     * Whether user has seen the expanded step content or not.
     * @type {?}
     */
    CdkStep.prototype.interacted;
    /**
     * Plain text label of the step.
     * @type {?}
     */
    CdkStep.prototype.label;
    /**
     * Error message to display when there's an error.
     * @type {?}
     */
    CdkStep.prototype.errorMessage;
    /**
     * Aria label for the tab.
     * @type {?}
     */
    CdkStep.prototype.ariaLabel;
    /**
     * Reference to the element that the tab is labelled by.
     * Will be cleared if `aria-label` is set at the same time.
     * @type {?}
     */
    CdkStep.prototype.ariaLabelledby;
    /**
     * State of the step.
     * @type {?}
     */
    CdkStep.prototype.state;
    /**
     * @type {?}
     * @private
     */
    CdkStep.prototype._editable;
    /**
     * @type {?}
     * @private
     */
    CdkStep.prototype._optional;
    /** @type {?} */
    CdkStep.prototype._completedOverride;
    /**
     * @type {?}
     * @private
     */
    CdkStep.prototype._customError;
    /**
     * @type {?}
     * @private
     */
    CdkStep.prototype._stepper;
}
export class CdkStepper {
    /**
     * @param {?} _dir
     * @param {?} _changeDetectorRef
     * @param {?=} _elementRef
     * @param {?=} _document
     */
    constructor(_dir, _changeDetectorRef, _elementRef, _document) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new Subject();
        this._linear = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the selected step has changed.
         */
        this.selectionChange = new EventEmitter();
        this._orientation = 'horizontal';
        this._groupId = nextId++;
        this._document = _document;
    }
    /**
     * The list of step components that the stepper is holding.
     * @return {?}
     */
    get steps() {
        return this._steps;
    }
    /**
     * Whether the validity of previous steps should be checked or not.
     * @return {?}
     */
    get linear() {
        return this._linear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set linear(value) {
        this._linear = coerceBooleanProperty(value);
    }
    /**
     * The index of the selected step.
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set selectedIndex(index) {
        /** @type {?} */
        const newIndex = coerceNumberProperty(index);
        if (this.steps) {
            // Ensure that the index can't be out of bounds.
            if (newIndex < 0 || newIndex > this.steps.length - 1) {
                throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
            }
            if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) &&
                (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                this._updateSelectedItemIndex(index);
            }
        }
        else {
            this._selectedIndex = newIndex;
        }
    }
    /**
     * The step that is selected.
     * @return {?}
     */
    get selected() {
        // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
        return this.steps ? this.steps.toArray()[this.selectedIndex] : (/** @type {?} */ (undefined));
    }
    /**
     * @param {?} step
     * @return {?}
     */
    set selected(step) {
        this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Note that while the step headers are content children by default, any components that
        // extend this one might have them as view children. We initialize the keyboard handling in
        // AfterViewInit so we're guaranteed for both view and content children to be defined.
        this._keyManager = new FocusKeyManager(this._stepHeader)
            .withWrap()
            .withVerticalOrientation(this._orientation === 'vertical');
        (this._dir ? ((/** @type {?} */ (this._dir.change))) : observableOf())
            .pipe(startWith(this._layoutDirection()), takeUntil(this._destroyed))
            .subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        direction => this._keyManager.withHorizontalOrientation(direction)));
        this._keyManager.updateActiveItem(this._selectedIndex);
        this.steps.changes.pipe(takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => {
            if (!this.selected) {
                this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    next() {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
    }
    /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    previous() {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    }
    /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    reset() {
        this._updateSelectedItemIndex(0);
        this.steps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        step => step.reset()));
        this._stateChanged();
    }
    /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    _getStepLabelId(i) {
        return `cdk-step-label-${this._groupId}-${i}`;
    }
    /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    _getStepContentId(i) {
        return `cdk-step-content-${this._groupId}-${i}`;
    }
    /**
     * Marks the component to be change detected.
     * @return {?}
     */
    _stateChanged() {
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    _getAnimationDirection(index) {
        /** @type {?} */
        const position = index - this._selectedIndex;
        if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
        }
        else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
        }
        return 'current';
    }
    /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @param {?=} state
     * @return {?}
     */
    _getIndicatorType(index, state = STEP_STATE.NUMBER) {
        /** @type {?} */
        const step = this.steps.toArray()[index];
        /** @type {?} */
        const isCurrentStep = this._isCurrentStep(index);
        return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) :
            this._getGuidelineLogic(step, isCurrentStep, state);
    }
    /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @return {?}
     */
    _getDefaultIndicatorLogic(step, isCurrentStep) {
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
        }
        else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
        }
    }
    /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @param {?=} state
     * @return {?}
     */
    _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE.NUMBER) {
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
        }
        else if (step.completed && isCurrentStep) {
            return state;
        }
        else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
        }
        else {
            return state;
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _isCurrentStep(index) {
        return this._selectedIndex === index;
    }
    /**
     * Returns the index of the currently-focused step header.
     * @return {?}
     */
    _getFocusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
    }
    /**
     * @private
     * @param {?} newIndex
     * @return {?}
     */
    _updateSelectedItemIndex(newIndex) {
        /** @type {?} */
        const stepsArray = this.steps.toArray();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex],
        });
        // If focus is inside the stepper, move it to the next header, otherwise it may become
        // lost when the active step content is hidden. We can't be more granular with the check
        // (e.g. checking whether focus is inside the active step), because we don't have a
        // reference to the elements that are rendering out the content.
        this._containsFocus() ? this._keyManager.setActiveItem(newIndex) :
            this._keyManager.updateActiveItem(newIndex);
        this._selectedIndex = newIndex;
        this._stateChanged();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onKeydown(event) {
        /** @type {?} */
        const hasModifier = hasModifierKey(event);
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const manager = this._keyManager;
        if (manager.activeItemIndex != null && !hasModifier &&
            (keyCode === SPACE || keyCode === ENTER)) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
        }
        else if (keyCode === HOME) {
            manager.setFirstItemActive();
            event.preventDefault();
        }
        else if (keyCode === END) {
            manager.setLastItemActive();
            event.preventDefault();
        }
        else {
            manager.onKeydown(event);
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _anyControlsInvalidOrPending(index) {
        /** @type {?} */
        const steps = this.steps.toArray();
        steps[this._selectedIndex].interacted = true;
        if (this._linear && index >= 0) {
            return steps.slice(0, index).some((/**
             * @param {?} step
             * @return {?}
             */
            step => {
                /** @type {?} */
                const control = step.stepControl;
                /** @type {?} */
                const isIncomplete = control ? (control.invalid || control.pending || !step.interacted) : !step.completed;
                return isIncomplete && !step.optional && !step._completedOverride;
            }));
        }
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    _layoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /**
     * Checks whether the stepper contains the focused element.
     * @private
     * @return {?}
     */
    _containsFocus() {
        if (!this._document || !this._elementRef) {
            return false;
        }
        /** @type {?} */
        const stepperElement = this._elementRef.nativeElement;
        /** @type {?} */
        const focusedElement = this._document.activeElement;
        return stepperElement === focusedElement || stepperElement.contains(focusedElement);
    }
}
CdkStepper.decorators = [
    { type: Directive, args: [{
                selector: '[cdkStepper]',
                exportAs: 'cdkStepper',
            },] }
];
/** @nocollapse */
CdkStepper.ctorParameters = () => [
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
CdkStepper.propDecorators = {
    _steps: [{ type: ContentChildren, args: [CdkStep, { descendants: true },] }],
    _stepHeader: [{ type: ContentChildren, args: [CdkStepHeader, { descendants: true },] }],
    linear: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    selected: [{ type: Input }],
    selectionChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CdkStepper.ngAcceptInputType_editable;
    /** @type {?} */
    CdkStepper.ngAcceptInputType_optional;
    /** @type {?} */
    CdkStepper.ngAcceptInputType_completed;
    /** @type {?} */
    CdkStepper.ngAcceptInputType_hasError;
    /** @type {?} */
    CdkStepper.ngAcceptInputType_linear;
    /** @type {?} */
    CdkStepper.ngAcceptInputType_selectedIndex;
    /**
     * Emits when the component is destroyed.
     * @type {?}
     * @protected
     */
    CdkStepper.prototype._destroyed;
    /**
     * Used for managing keyboard focus.
     * @type {?}
     * @private
     */
    CdkStepper.prototype._keyManager;
    /**
     * \@breaking-change 8.0.0 Remove `| undefined` once the `_document`
     * constructor param is required.
     * @type {?}
     * @private
     */
    CdkStepper.prototype._document;
    /**
     * The list of step components that the stepper is holding.
     * @deprecated use `steps` instead
     * \@breaking-change 9.0.0 remove this property
     * @type {?}
     */
    CdkStepper.prototype._steps;
    /**
     * The list of step headers of the steps in the stepper.
     * @deprecated Type to be changed to `QueryList<CdkStepHeader>`.
     * \@breaking-change 8.0.0
     * @type {?}
     */
    CdkStepper.prototype._stepHeader;
    /**
     * @type {?}
     * @private
     */
    CdkStepper.prototype._linear;
    /**
     * @type {?}
     * @private
     */
    CdkStepper.prototype._selectedIndex;
    /**
     * Event emitted when the selected step has changed.
     * @type {?}
     */
    CdkStepper.prototype.selectionChange;
    /**
     * Used to track unique ID for each stepper component.
     * @type {?}
     */
    CdkStepper.prototype._groupId;
    /**
     * @type {?}
     * @protected
     */
    CdkStepper.prototype._orientation;
    /**
     * @type {?}
     * @private
     */
    CdkStepper.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    CdkStepper.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    CdkStepper.prototype._elementRef;
}
/**
 * Simplified representation of an "AbstractControl" from \@angular/forms.
 * Used to avoid having to bring in \@angular/forms for a single optional interface.
 * \@docs-private
 * @record
 */
function AbstractControlLike() { }
if (false) {
    /** @type {?} */
    AbstractControlLike.prototype.asyncValidator;
    /** @type {?} */
    AbstractControlLike.prototype.dirty;
    /** @type {?} */
    AbstractControlLike.prototype.disabled;
    /** @type {?} */
    AbstractControlLike.prototype.enabled;
    /** @type {?} */
    AbstractControlLike.prototype.errors;
    /** @type {?} */
    AbstractControlLike.prototype.invalid;
    /** @type {?} */
    AbstractControlLike.prototype.parent;
    /** @type {?} */
    AbstractControlLike.prototype.pending;
    /** @type {?} */
    AbstractControlLike.prototype.pristine;
    /** @type {?} */
    AbstractControlLike.prototype.root;
    /** @type {?} */
    AbstractControlLike.prototype.status;
    /** @type {?} */
    AbstractControlLike.prototype.statusChanges;
    /** @type {?} */
    AbstractControlLike.prototype.touched;
    /** @type {?} */
    AbstractControlLike.prototype.untouched;
    /** @type {?} */
    AbstractControlLike.prototype.updateOn;
    /** @type {?} */
    AbstractControlLike.prototype.valid;
    /** @type {?} */
    AbstractControlLike.prototype.validator;
    /** @type {?} */
    AbstractControlLike.prototype.value;
    /** @type {?} */
    AbstractControlLike.prototype.valueChanges;
    /**
     * @return {?}
     */
    AbstractControlLike.prototype.clearAsyncValidators = function () { };
    /**
     * @return {?}
     */
    AbstractControlLike.prototype.clearValidators = function () { };
    /**
     * @param {?=} opts
     * @return {?}
     */
    AbstractControlLike.prototype.disable = function (opts) { };
    /**
     * @param {?=} opts
     * @return {?}
     */
    AbstractControlLike.prototype.enable = function (opts) { };
    /**
     * @param {?} path
     * @return {?}
     */
    AbstractControlLike.prototype.get = function (path) { };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlLike.prototype.getError = function (errorCode, path) { };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlLike.prototype.hasError = function (errorCode, path) { };
    /**
     * @return {?}
     */
    AbstractControlLike.prototype.markAllAsTouched = function () { };
    /**
     * @param {?=} opts
     * @return {?}
     */
    AbstractControlLike.prototype.markAsDirty = function (opts) { };
    /**
     * @param {?=} opts
     * @return {?}
     */
    AbstractControlLike.prototype.markAsPending = function (opts) { };
    /**
     * @param {?=} opts
     * @return {?}
     */
    AbstractControlLike.prototype.markAsPristine = function (opts) { };
    /**
     * @param {?=} opts
     * @return {?}
     */
    AbstractControlLike.prototype.markAsTouched = function (opts) { };
    /**
     * @param {?=} opts
     * @return {?}
     */
    AbstractControlLike.prototype.markAsUntouched = function (opts) { };
    /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControlLike.prototype.patchValue = function (value, options) { };
    /**
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControlLike.prototype.reset = function (value, options) { };
    /**
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControlLike.prototype.setAsyncValidators = function (newValidator) { };
    /**
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    AbstractControlLike.prototype.setErrors = function (errors, opts) { };
    /**
     * @param {?} parent
     * @return {?}
     */
    AbstractControlLike.prototype.setParent = function (parent) { };
    /**
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControlLike.prototype.setValidators = function (newValidator) { };
    /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControlLike.prototype.setValue = function (value, options) { };
    /**
     * @param {?=} opts
     * @return {?}
     */
    AbstractControlLike.prototype.updateValueAndValidity = function (opts) { };
    /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControlLike.prototype.patchValue = function (value, options) { };
    /**
     * @param {?=} formState
     * @param {?=} options
     * @return {?}
     */
    AbstractControlLike.prototype.reset = function (formState, options) { };
    /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControlLike.prototype.setValue = function (value, options) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc3RlcHBlci9zdGVwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBa0IsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxFQUFZLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFFTCxxQkFBcUIsRUFDckIsb0JBQW9CLEVBRXJCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixjQUFjLEVBQ2QsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYSxFQUFFLElBQUksWUFBWSxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7SUFHdEMsTUFBTSxHQUFHLENBQUM7Ozs7QUFZZCxNQUFNLE9BQU8scUJBQXFCO0NBWWpDOzs7Ozs7SUFWQyw4Q0FB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LHFDQUFlOztJQUNmLDRDQUErQjs7SUFDL0Isc0NBQWlCOztJQUNqQix3Q0FBbUI7O0lBQ25CLHVDQUFjOztJQUNkLG9DQUFlOztJQUNmLHdDQUEwQzs7SUFDMUMsb0NBQVc7O0lBQ1gsMkNBQThCOzs7O0lBQzlCLHFFQUE2Qjs7OztJQUM3QixnRUFBd0I7Ozs7O0lBQ3hCLDREQUEwQjs7Ozs7SUFDMUIsMkRBQXlCOzs7OztJQUN6Qix3REFBb0U7Ozs7OztJQUNwRSx3RUFBc0U7Ozs7OztJQUN0RSx3RUFBMEU7Ozs7SUFDMUUsaUVBQXlCOzs7OztJQUN6QixnRUFBOEI7Ozs7O0lBQzlCLGtFQUFnQzs7Ozs7SUFDaEMsbUVBQWlDOzs7OztJQUNqQyxrRUFBZ0M7Ozs7O0lBQ2hDLG9FQUFrQzs7Ozs7O0lBQ2xDLHlFQUErQzs7Ozs7O0lBQy9DLG9FQUEyQzs7Ozs7SUFDM0MsK0VBQzBDOzs7Ozs7SUFDMUMsc0VBQWlFOzs7OztJQUNqRSxnRUFBNkI7Ozs7O0lBQzdCLDBFQUMwQzs7Ozs7O0lBQzFDLHVFQUE2Qzs7Ozs7SUFDN0MsMkVBQXlDOzs7Ozs7SUFDekMseUVBQTRDOzs7Ozs7SUFDNUMsd0VBQTRDOzs7Ozs7SUFDNUMsdUVBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Rm9jdXNhYmxlT3B0aW9uLCBGb2N1c0tleU1hbmFnZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7RGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQm9vbGVhbklucHV0LFxuICBjb2VyY2VCb29sZWFuUHJvcGVydHksXG4gIGNvZXJjZU51bWJlclByb3BlcnR5LFxuICBOdW1iZXJJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtFTkQsIEVOVEVSLCBoYXNNb2RpZmllcktleSwgSE9NRSwgU1BBQ0V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7c3RhcnRXaXRoLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtDZGtTdGVwSGVhZGVyfSBmcm9tICcuL3N0ZXAtaGVhZGVyJztcbmltcG9ydCB7Q2RrU3RlcExhYmVsfSBmcm9tICcuL3N0ZXAtbGFiZWwnO1xuXG4vKiogVXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSUQgZm9yIGVhY2ggc3RlcHBlciBjb21wb25lbnQuICovXG5sZXQgbmV4dElkID0gMDtcblxuLyoqXG4gKiBQb3NpdGlvbiBzdGF0ZSBvZiB0aGUgY29udGVudCBvZiBlYWNoIHN0ZXAgaW4gc3RlcHBlciB0aGF0IGlzIHVzZWQgZm9yIHRyYW5zaXRpb25pbmdcbiAqIHRoZSBjb250ZW50IGludG8gY29ycmVjdCBwb3NpdGlvbiB1cG9uIHN0ZXAgc2VsZWN0aW9uIGNoYW5nZS5cbiAqL1xuZXhwb3J0IHR5cGUgU3RlcENvbnRlbnRQb3NpdGlvblN0YXRlID0gJ3ByZXZpb3VzJ3wnY3VycmVudCd8J25leHQnO1xuXG4vKiogUG9zc2libGUgb3JpZW50YXRpb24gb2YgYSBzdGVwcGVyLiAqL1xuZXhwb3J0IHR5cGUgU3RlcHBlck9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnfCd2ZXJ0aWNhbCc7XG5cbi8qKiBDaGFuZ2UgZXZlbnQgZW1pdHRlZCBvbiBzZWxlY3Rpb24gY2hhbmdlcy4gKi9cbmV4cG9ydCBjbGFzcyBTdGVwcGVyU2VsZWN0aW9uRXZlbnQge1xuICAvKiogSW5kZXggb2YgdGhlIHN0ZXAgbm93IHNlbGVjdGVkLiAqL1xuICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG5cbiAgLyoqIEluZGV4IG9mIHRoZSBzdGVwIHByZXZpb3VzbHkgc2VsZWN0ZWQuICovXG4gIHByZXZpb3VzbHlTZWxlY3RlZEluZGV4OiBudW1iZXI7XG5cbiAgLyoqIFRoZSBzdGVwIGluc3RhbmNlIG5vdyBzZWxlY3RlZC4gKi9cbiAgc2VsZWN0ZWRTdGVwOiBDZGtTdGVwO1xuXG4gIC8qKiBUaGUgc3RlcCBpbnN0YW5jZSBwcmV2aW91c2x5IHNlbGVjdGVkLiAqL1xuICBwcmV2aW91c2x5U2VsZWN0ZWRTdGVwOiBDZGtTdGVwO1xufVxuXG4vKiogVGhlIHN0YXRlIG9mIGVhY2ggc3RlcC4gKi9cbmV4cG9ydCB0eXBlIFN0ZXBTdGF0ZSA9ICdudW1iZXInfCdlZGl0J3wnZG9uZSd8J2Vycm9yJ3xzdHJpbmc7XG5cbi8qKiBFbnVtIHRvIHJlcHJlc2VudCB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiB0aGUgc3RlcHMuICovXG5leHBvcnQgY29uc3QgU1RFUF9TVEFURSA9IHtcbiAgTlVNQkVSOiAnbnVtYmVyJyxcbiAgRURJVDogJ2VkaXQnLFxuICBET05FOiAnZG9uZScsXG4gIEVSUk9SOiAnZXJyb3InXG59O1xuXG4vKiogSW5qZWN0aW9uVG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSBnbG9iYWwgc3RlcHBlciBvcHRpb25zLiAqL1xuZXhwb3J0IGNvbnN0IFNURVBQRVJfR0xPQkFMX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48U3RlcHBlck9wdGlvbnM+KCdTVEVQUEVSX0dMT0JBTF9PUFRJT05TJyk7XG5cbi8qKlxuICogSW5qZWN0aW9uVG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSBnbG9iYWwgc3RlcHBlciBvcHRpb25zLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBTVEVQUEVSX0dMT0JBTF9PUFRJT05TYCBpbnN0ZWFkLlxuICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMC5cbiAqL1xuZXhwb3J0IGNvbnN0IE1BVF9TVEVQUEVSX0dMT0JBTF9PUFRJT05TID0gU1RFUFBFUl9HTE9CQUxfT1BUSU9OUztcblxuLyoqIENvbmZpZ3VyYWJsZSBvcHRpb25zIGZvciBzdGVwcGVyLiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGVwcGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBzdGVwcGVyIHNob3VsZCBkaXNwbGF5IGFuIGVycm9yIHN0YXRlIG9yIG5vdC5cbiAgICogRGVmYXVsdCBiZWhhdmlvciBpcyBhc3N1bWVkIHRvIGJlIGZhbHNlLlxuICAgKi9cbiAgc2hvd0Vycm9yPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc3RlcHBlciBzaG91bGQgZGlzcGxheSB0aGUgZGVmYXVsdCBpbmRpY2F0b3IgdHlwZVxuICAgKiBvciBub3QuXG4gICAqIERlZmF1bHQgYmVoYXZpb3IgaXMgYXNzdW1lZCB0byBiZSB0cnVlLlxuICAgKi9cbiAgZGlzcGxheURlZmF1bHRJbmRpY2F0b3JUeXBlPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXN0ZXAnLFxuICBleHBvcnRBczogJ2Nka1N0ZXAnLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrU3RlcCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3N0ZXBwZXJPcHRpb25zOiBTdGVwcGVyT3B0aW9ucztcbiAgX3Nob3dFcnJvcjogYm9vbGVhbjtcbiAgX2Rpc3BsYXlEZWZhdWx0SW5kaWNhdG9yVHlwZTogYm9vbGVhbjtcblxuICAvKiogVGVtcGxhdGUgZm9yIHN0ZXAgbGFiZWwgaWYgaXQgZXhpc3RzLiAqL1xuICBAQ29udGVudENoaWxkKENka1N0ZXBMYWJlbCkgc3RlcExhYmVsOiBDZGtTdGVwTGFiZWw7XG5cbiAgLyoqIFRlbXBsYXRlIGZvciBzdGVwIGNvbnRlbnQuICovXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHtzdGF0aWM6IHRydWV9KSBjb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKiBUaGUgdG9wIGxldmVsIGFic3RyYWN0IGNvbnRyb2wgb2YgdGhlIHN0ZXAuICovXG4gIEBJbnB1dCgpIHN0ZXBDb250cm9sOiBBYnN0cmFjdENvbnRyb2xMaWtlO1xuXG4gIC8qKiBXaGV0aGVyIHVzZXIgaGFzIHNlZW4gdGhlIGV4cGFuZGVkIHN0ZXAgY29udGVudCBvciBub3QuICovXG4gIGludGVyYWN0ZWQgPSBmYWxzZTtcblxuICAvKiogUGxhaW4gdGV4dCBsYWJlbCBvZiB0aGUgc3RlcC4gKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKiogRXJyb3IgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlcmUncyBhbiBlcnJvci4gKi9cbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgLyoqIEFyaWEgbGFiZWwgZm9yIHRoZSB0YWIuICovXG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdGhhdCB0aGUgdGFiIGlzIGxhYmVsbGVkIGJ5LlxuICAgKiBXaWxsIGJlIGNsZWFyZWQgaWYgYGFyaWEtbGFiZWxgIGlzIHNldCBhdCB0aGUgc2FtZSB0aW1lLlxuICAgKi9cbiAgQElucHV0KCdhcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xuXG4gIC8qKiBTdGF0ZSBvZiB0aGUgc3RlcC4gKi9cbiAgQElucHV0KCkgc3RhdGU6IFN0ZXBTdGF0ZTtcblxuICAvKiogV2hldGhlciB0aGUgdXNlciBjYW4gcmV0dXJuIHRvIHRoaXMgc3RlcCBvbmNlIGl0IGhhcyBiZWVuIG1hcmtlZCBhcyBjb21wbGV0ZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBlZGl0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdGFibGU7XG4gIH1cbiAgc2V0IGVkaXRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWRpdGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2VkaXRhYmxlID0gdHJ1ZTtcblxuICAvKiogV2hldGhlciB0aGUgY29tcGxldGlvbiBvZiBzdGVwIGlzIG9wdGlvbmFsLiAqL1xuICBASW5wdXQoKVxuICBnZXQgb3B0aW9uYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbmFsO1xuICB9XG4gIHNldCBvcHRpb25hbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX29wdGlvbmFsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9vcHRpb25hbCA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHN0ZXAgaXMgbWFya2VkIGFzIGNvbXBsZXRlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbXBsZXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkT3ZlcnJpZGUgPT0gbnVsbCA/IHRoaXMuX2dldERlZmF1bHRDb21wbGV0ZWQoKSA6IHRoaXMuX2NvbXBsZXRlZE92ZXJyaWRlO1xuICB9XG4gIHNldCBjb21wbGV0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb21wbGV0ZWRPdmVycmlkZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgX2NvbXBsZXRlZE92ZXJyaWRlOiBib29sZWFufG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgX2dldERlZmF1bHRDb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcENvbnRyb2wgPyB0aGlzLnN0ZXBDb250cm9sLnZhbGlkICYmIHRoaXMuaW50ZXJhY3RlZCA6IHRoaXMuaW50ZXJhY3RlZDtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHN0ZXAgaGFzIGFuIGVycm9yLiAqL1xuICBASW5wdXQoKVxuICBnZXQgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUVycm9yID09IG51bGwgPyB0aGlzLl9nZXREZWZhdWx0RXJyb3IoKSA6IHRoaXMuX2N1c3RvbUVycm9yO1xuICB9XG4gIHNldCBoYXNFcnJvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2N1c3RvbUVycm9yID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9jdXN0b21FcnJvcjogYm9vbGVhbnxudWxsID0gbnVsbDtcblxuICBwcml2YXRlIF9nZXREZWZhdWx0RXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcENvbnRyb2wgJiYgdGhpcy5zdGVwQ29udHJvbC5pbnZhbGlkICYmIHRoaXMuaW50ZXJhY3RlZDtcbiAgfVxuXG4gIC8qKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHJlbW92ZSB0aGUgYD9gIGFmdGVyIGBzdGVwcGVyT3B0aW9uc2AgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gQ2RrU3RlcHBlcikpIHByaXZhdGUgX3N0ZXBwZXI6IENka1N0ZXBwZXIsXG4gICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFNURVBQRVJfR0xPQkFMX09QVElPTlMpIHN0ZXBwZXJPcHRpb25zPzogU3RlcHBlck9wdGlvbnMpIHtcbiAgICB0aGlzLl9zdGVwcGVyT3B0aW9ucyA9IHN0ZXBwZXJPcHRpb25zID8gc3RlcHBlck9wdGlvbnMgOiB7fTtcbiAgICB0aGlzLl9kaXNwbGF5RGVmYXVsdEluZGljYXRvclR5cGUgPSB0aGlzLl9zdGVwcGVyT3B0aW9ucy5kaXNwbGF5RGVmYXVsdEluZGljYXRvclR5cGUgIT09IGZhbHNlO1xuICAgIHRoaXMuX3Nob3dFcnJvciA9ICEhdGhpcy5fc3RlcHBlck9wdGlvbnMuc2hvd0Vycm9yO1xuICB9XG5cbiAgLyoqIFNlbGVjdHMgdGhpcyBzdGVwIGNvbXBvbmVudC4gKi9cbiAgc2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuX3N0ZXBwZXIuc2VsZWN0ZWQgPSB0aGlzO1xuICB9XG5cbiAgLyoqIFJlc2V0cyB0aGUgc3RlcCB0byBpdHMgaW5pdGlhbCBzdGF0ZS4gTm90ZSB0aGF0IHRoaXMgaW5jbHVkZXMgcmVzZXR0aW5nIGZvcm0gZGF0YS4gKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcmFjdGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5fY29tcGxldGVkT3ZlcnJpZGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fY29tcGxldGVkT3ZlcnJpZGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY3VzdG9tRXJyb3IgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGVwQ29udHJvbCkge1xuICAgICAgdGhpcy5zdGVwQ29udHJvbC5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIC8vIFNpbmNlIGJhc2ljYWxseSBhbGwgaW5wdXRzIG9mIHRoZSBNYXRTdGVwIGdldCBwcm94aWVkIHRocm91Z2ggdGhlIHZpZXcgZG93biB0byB0aGVcbiAgICAvLyB1bmRlcmx5aW5nIE1hdFN0ZXBIZWFkZXIsIHdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgY2hhbmdlIGRldGVjdGlvbiBydW5zIGNvcnJlY3RseS5cbiAgICB0aGlzLl9zdGVwcGVyLl9zdGF0ZUNoYW5nZWQoKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lZGl0YWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGFzRXJyb3I6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX29wdGlvbmFsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb21wbGV0ZWQ6IEJvb2xlYW5JbnB1dDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1N0ZXBwZXJdJyxcbiAgZXhwb3J0QXM6ICdjZGtTdGVwcGVyJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrU3RlcHBlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLiAqL1xuICBwcm90ZWN0ZWQgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIFVzZWQgZm9yIG1hbmFnaW5nIGtleWJvYXJkIGZvY3VzLiAqL1xuICBwcml2YXRlIF9rZXlNYW5hZ2VyOiBGb2N1c0tleU1hbmFnZXI8Rm9jdXNhYmxlT3B0aW9uPjtcblxuICAvKipcbiAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMCBSZW1vdmUgYHwgdW5kZWZpbmVkYCBvbmNlIHRoZSBgX2RvY3VtZW50YFxuICAgKiBjb25zdHJ1Y3RvciBwYXJhbSBpcyByZXF1aXJlZC5cbiAgICovXG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudHx1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHN0ZXAgY29tcG9uZW50cyB0aGF0IHRoZSBzdGVwcGVyIGlzIGhvbGRpbmcuXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgc3RlcHNgIGluc3RlYWRcbiAgICogQGJyZWFraW5nLWNoYW5nZSA5LjAuMCByZW1vdmUgdGhpcyBwcm9wZXJ0eVxuICAgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihDZGtTdGVwLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfc3RlcHM6IFF1ZXJ5TGlzdDxDZGtTdGVwPjtcblxuICAvKiogVGhlIGxpc3Qgb2Ygc3RlcCBjb21wb25lbnRzIHRoYXQgdGhlIHN0ZXBwZXIgaXMgaG9sZGluZy4gKi9cbiAgZ2V0IHN0ZXBzKCk6IFF1ZXJ5TGlzdDxDZGtTdGVwPiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHN0ZXAgaGVhZGVycyBvZiB0aGUgc3RlcHMgaW4gdGhlIHN0ZXBwZXIuXG4gICAqIEBkZXByZWNhdGVkIFR5cGUgdG8gYmUgY2hhbmdlZCB0byBgUXVlcnlMaXN0PENka1N0ZXBIZWFkZXI+YC5cbiAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICAgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihDZGtTdGVwSGVhZGVyLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfc3RlcEhlYWRlcjogUXVlcnlMaXN0PEZvY3VzYWJsZU9wdGlvbj47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHZhbGlkaXR5IG9mIHByZXZpb3VzIHN0ZXBzIHNob3VsZCBiZSBjaGVja2VkIG9yIG5vdC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGxpbmVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGluZWFyO1xuICB9XG4gIHNldCBsaW5lYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9saW5lYXIgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2xpbmVhciA9IGZhbHNlO1xuXG4gIC8qKiBUaGUgaW5kZXggb2YgdGhlIHNlbGVjdGVkIHN0ZXAuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG4gIHNldCBzZWxlY3RlZEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdJbmRleCA9IGNvZXJjZU51bWJlclByb3BlcnR5KGluZGV4KTtcblxuICAgIGlmICh0aGlzLnN0ZXBzKSB7XG4gICAgICAvLyBFbnN1cmUgdGhhdCB0aGUgaW5kZXggY2FuJ3QgYmUgb3V0IG9mIGJvdW5kcy5cbiAgICAgIGlmIChuZXdJbmRleCA8IDAgfHwgbmV3SW5kZXggPiB0aGlzLnN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2Nka1N0ZXBwZXI6IENhbm5vdCBhc3NpZ24gb3V0LW9mLWJvdW5kcyB2YWx1ZSB0byBgc2VsZWN0ZWRJbmRleGAuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9IG5ld0luZGV4ICYmICF0aGlzLl9hbnlDb250cm9sc0ludmFsaWRPclBlbmRpbmcobmV3SW5kZXgpICYmXG4gICAgICAgICAgKG5ld0luZGV4ID49IHRoaXMuX3NlbGVjdGVkSW5kZXggfHwgdGhpcy5zdGVwcy50b0FycmF5KClbbmV3SW5kZXhdLmVkaXRhYmxlKSkge1xuICAgICAgICB0aGlzLl91cGRhdGVTZWxlY3RlZEl0ZW1JbmRleChpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBuZXdJbmRleDtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleCA9IDA7XG5cbiAgLyoqIFRoZSBzdGVwIHRoYXQgaXMgc2VsZWN0ZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3RlZCgpOiBDZGtTdGVwIHtcbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIENoYW5nZSByZXR1cm4gdHlwZSB0byBgQ2RrU3RlcCB8IHVuZGVmaW5lZGAuXG4gICAgcmV0dXJuIHRoaXMuc3RlcHMgPyB0aGlzLnN0ZXBzLnRvQXJyYXkoKVt0aGlzLnNlbGVjdGVkSW5kZXhdIDogdW5kZWZpbmVkITtcbiAgfVxuICBzZXQgc2VsZWN0ZWQoc3RlcDogQ2RrU3RlcCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuc3RlcHMgPyB0aGlzLnN0ZXBzLnRvQXJyYXkoKS5pbmRleE9mKHN0ZXApIDogLTE7XG4gIH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzZWxlY3RlZCBzdGVwIGhhcyBjaGFuZ2VkLiAqL1xuICBAT3V0cHV0KClcbiAgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3RlcHBlclNlbGVjdGlvbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RlcHBlclNlbGVjdGlvbkV2ZW50PigpO1xuXG4gIC8qKiBVc2VkIHRvIHRyYWNrIHVuaXF1ZSBJRCBmb3IgZWFjaCBzdGVwcGVyIGNvbXBvbmVudC4gKi9cbiAgX2dyb3VwSWQ6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgX29yaWVudGF0aW9uOiBTdGVwcGVyT3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcmVjdGlvbmFsaXR5LCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIGBfZWxlbWVudFJlZmAgYW5kIGBfZG9jdW1lbnRgIHBhcmFtZXRlcnMgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZj86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ/OiBhbnkpIHtcbiAgICB0aGlzLl9ncm91cElkID0gbmV4dElkKys7XG4gICAgdGhpcy5fZG9jdW1lbnQgPSBfZG9jdW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gTm90ZSB0aGF0IHdoaWxlIHRoZSBzdGVwIGhlYWRlcnMgYXJlIGNvbnRlbnQgY2hpbGRyZW4gYnkgZGVmYXVsdCwgYW55IGNvbXBvbmVudHMgdGhhdFxuICAgIC8vIGV4dGVuZCB0aGlzIG9uZSBtaWdodCBoYXZlIHRoZW0gYXMgdmlldyBjaGlsZHJlbi4gV2UgaW5pdGlhbGl6ZSB0aGUga2V5Ym9hcmQgaGFuZGxpbmcgaW5cbiAgICAvLyBBZnRlclZpZXdJbml0IHNvIHdlJ3JlIGd1YXJhbnRlZWQgZm9yIGJvdGggdmlldyBhbmQgY29udGVudCBjaGlsZHJlbiB0byBiZSBkZWZpbmVkLlxuICAgIHRoaXMuX2tleU1hbmFnZXIgPSBuZXcgRm9jdXNLZXlNYW5hZ2VyPEZvY3VzYWJsZU9wdGlvbj4odGhpcy5fc3RlcEhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoV3JhcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAud2l0aFZlcnRpY2FsT3JpZW50YXRpb24odGhpcy5fb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpO1xuXG4gICAgKHRoaXMuX2RpciA/ICh0aGlzLl9kaXIuY2hhbmdlIGFzIE9ic2VydmFibGU8RGlyZWN0aW9uPikgOiBvYnNlcnZhYmxlT2Y8RGlyZWN0aW9uPigpKVxuICAgICAgICAucGlwZShzdGFydFdpdGgodGhpcy5fbGF5b3V0RGlyZWN0aW9uKCkpLCB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgICAgLnN1YnNjcmliZShkaXJlY3Rpb24gPT4gdGhpcy5fa2V5TWFuYWdlci53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKGRpcmVjdGlvbikpO1xuXG4gICAgdGhpcy5fa2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKHRoaXMuX3NlbGVjdGVkSW5kZXgpO1xuXG4gICAgdGhpcy5zdGVwcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IE1hdGgubWF4KHRoaXMuX3NlbGVjdGVkSW5kZXggLSAxLCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogU2VsZWN0cyBhbmQgZm9jdXNlcyB0aGUgbmV4dCBzdGVwIGluIGxpc3QuICovXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gTWF0aC5taW4odGhpcy5fc2VsZWN0ZWRJbmRleCArIDEsIHRoaXMuc3RlcHMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICAvKiogU2VsZWN0cyBhbmQgZm9jdXNlcyB0aGUgcHJldmlvdXMgc3RlcCBpbiBsaXN0LiAqL1xuICBwcmV2aW91cygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBNYXRoLm1heCh0aGlzLl9zZWxlY3RlZEluZGV4IC0gMSwgMCk7XG4gIH1cblxuICAvKiogUmVzZXRzIHRoZSBzdGVwcGVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLiBOb3RlIHRoYXQgdGhpcyBpbmNsdWRlcyBjbGVhcmluZyBmb3JtIGRhdGEuICovXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkSXRlbUluZGV4KDApO1xuICAgIHRoaXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHN0ZXAucmVzZXQoKSk7XG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VkKCk7XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHVuaXF1ZSBpZCBmb3IgZWFjaCBzdGVwIGxhYmVsIGVsZW1lbnQuICovXG4gIF9nZXRTdGVwTGFiZWxJZChpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgY2RrLXN0ZXAtbGFiZWwtJHt0aGlzLl9ncm91cElkfS0ke2l9YDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHVuaXF1ZSBpZCBmb3IgZWFjaCBzdGVwIGNvbnRlbnQgZWxlbWVudC4gKi9cbiAgX2dldFN0ZXBDb250ZW50SWQoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGNkay1zdGVwLWNvbnRlbnQtJHt0aGlzLl9ncm91cElkfS0ke2l9YDtcbiAgfVxuXG4gIC8qKiBNYXJrcyB0aGUgY29tcG9uZW50IHRvIGJlIGNoYW5nZSBkZXRlY3RlZC4gKi9cbiAgX3N0YXRlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHBvc2l0aW9uIHN0YXRlIG9mIHRoZSBzdGVwIHdpdGggdGhlIGdpdmVuIGluZGV4LiAqL1xuICBfZ2V0QW5pbWF0aW9uRGlyZWN0aW9uKGluZGV4OiBudW1iZXIpOiBTdGVwQ29udGVudFBvc2l0aW9uU3RhdGUge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaW5kZXggLSB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgIHJldHVybiB0aGlzLl9sYXlvdXREaXJlY3Rpb24oKSA9PT0gJ3J0bCcgPyAnbmV4dCcgOiAncHJldmlvdXMnO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGF5b3V0RGlyZWN0aW9uKCkgPT09ICdydGwnID8gJ3ByZXZpb3VzJyA6ICduZXh0JztcbiAgICB9XG4gICAgcmV0dXJuICdjdXJyZW50JztcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSB0eXBlIG9mIGljb24gdG8gYmUgZGlzcGxheWVkLiAqL1xuICBfZ2V0SW5kaWNhdG9yVHlwZShpbmRleDogbnVtYmVyLCBzdGF0ZTogU3RlcFN0YXRlID0gU1RFUF9TVEFURS5OVU1CRVIpOiBTdGVwU3RhdGUge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF07XG4gICAgY29uc3QgaXNDdXJyZW50U3RlcCA9IHRoaXMuX2lzQ3VycmVudFN0ZXAoaW5kZXgpO1xuXG4gICAgcmV0dXJuIHN0ZXAuX2Rpc3BsYXlEZWZhdWx0SW5kaWNhdG9yVHlwZSA/IHRoaXMuX2dldERlZmF1bHRJbmRpY2F0b3JMb2dpYyhzdGVwLCBpc0N1cnJlbnRTdGVwKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldEd1aWRlbGluZUxvZ2ljKHN0ZXAsIGlzQ3VycmVudFN0ZXAsIHN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERlZmF1bHRJbmRpY2F0b3JMb2dpYyhzdGVwOiBDZGtTdGVwLCBpc0N1cnJlbnRTdGVwOiBib29sZWFuKTogU3RlcFN0YXRlIHtcbiAgICBpZiAoc3RlcC5fc2hvd0Vycm9yICYmIHN0ZXAuaGFzRXJyb3IgJiYgIWlzQ3VycmVudFN0ZXApIHtcbiAgICAgIHJldHVybiBTVEVQX1NUQVRFLkVSUk9SO1xuICAgIH0gZWxzZSBpZiAoIXN0ZXAuY29tcGxldGVkIHx8IGlzQ3VycmVudFN0ZXApIHtcbiAgICAgIHJldHVybiBTVEVQX1NUQVRFLk5VTUJFUjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0ZXAuZWRpdGFibGUgPyBTVEVQX1NUQVRFLkVESVQgOiBTVEVQX1NUQVRFLkRPTkU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0R3VpZGVsaW5lTG9naWMoXG4gICAgICBzdGVwOiBDZGtTdGVwLCBpc0N1cnJlbnRTdGVwOiBib29sZWFuLCBzdGF0ZTogU3RlcFN0YXRlID0gU1RFUF9TVEFURS5OVU1CRVIpOiBTdGVwU3RhdGUge1xuICAgIGlmIChzdGVwLl9zaG93RXJyb3IgJiYgc3RlcC5oYXNFcnJvciAmJiAhaXNDdXJyZW50U3RlcCkge1xuICAgICAgcmV0dXJuIFNURVBfU1RBVEUuRVJST1I7XG4gICAgfSBlbHNlIGlmIChzdGVwLmNvbXBsZXRlZCAmJiAhaXNDdXJyZW50U3RlcCkge1xuICAgICAgcmV0dXJuIFNURVBfU1RBVEUuRE9ORTtcbiAgICB9IGVsc2UgaWYgKHN0ZXAuY29tcGxldGVkICYmIGlzQ3VycmVudFN0ZXApIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9IGVsc2UgaWYgKHN0ZXAuZWRpdGFibGUgJiYgaXNDdXJyZW50U3RlcCkge1xuICAgICAgcmV0dXJuIFNURVBfU1RBVEUuRURJVDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzQ3VycmVudFN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4ID09PSBpbmRleDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudGx5LWZvY3VzZWQgc3RlcCBoZWFkZXIuICovXG4gIF9nZXRGb2N1c0luZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlNYW5hZ2VyID8gdGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXggOiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU2VsZWN0ZWRJdGVtSW5kZXgobmV3SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXBzQXJyYXkgPSB0aGlzLnN0ZXBzLnRvQXJyYXkoKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHtcbiAgICAgIHNlbGVjdGVkSW5kZXg6IG5ld0luZGV4LFxuICAgICAgcHJldmlvdXNseVNlbGVjdGVkSW5kZXg6IHRoaXMuX3NlbGVjdGVkSW5kZXgsXG4gICAgICBzZWxlY3RlZFN0ZXA6IHN0ZXBzQXJyYXlbbmV3SW5kZXhdLFxuICAgICAgcHJldmlvdXNseVNlbGVjdGVkU3RlcDogc3RlcHNBcnJheVt0aGlzLl9zZWxlY3RlZEluZGV4XSxcbiAgICB9KTtcblxuICAgIC8vIElmIGZvY3VzIGlzIGluc2lkZSB0aGUgc3RlcHBlciwgbW92ZSBpdCB0byB0aGUgbmV4dCBoZWFkZXIsIG90aGVyd2lzZSBpdCBtYXkgYmVjb21lXG4gICAgLy8gbG9zdCB3aGVuIHRoZSBhY3RpdmUgc3RlcCBjb250ZW50IGlzIGhpZGRlbi4gV2UgY2FuJ3QgYmUgbW9yZSBncmFudWxhciB3aXRoIHRoZSBjaGVja1xuICAgIC8vIChlLmcuIGNoZWNraW5nIHdoZXRoZXIgZm9jdXMgaXMgaW5zaWRlIHRoZSBhY3RpdmUgc3RlcCksIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhXG4gICAgLy8gcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50cyB0aGF0IGFyZSByZW5kZXJpbmcgb3V0IHRoZSBjb250ZW50LlxuICAgIHRoaXMuX2NvbnRhaW5zRm9jdXMoKSA/IHRoaXMuX2tleU1hbmFnZXIuc2V0QWN0aXZlSXRlbShuZXdJbmRleCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleU1hbmFnZXIudXBkYXRlQWN0aXZlSXRlbShuZXdJbmRleCk7XG5cbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VkKCk7XG4gIH1cblxuICBfb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgaGFzTW9kaWZpZXIgPSBoYXNNb2RpZmllcktleShldmVudCk7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgY29uc3QgbWFuYWdlciA9IHRoaXMuX2tleU1hbmFnZXI7XG5cbiAgICBpZiAobWFuYWdlci5hY3RpdmVJdGVtSW5kZXggIT0gbnVsbCAmJiAhaGFzTW9kaWZpZXIgJiZcbiAgICAgICAgKGtleUNvZGUgPT09IFNQQUNFIHx8IGtleUNvZGUgPT09IEVOVEVSKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbWFuYWdlci5hY3RpdmVJdGVtSW5kZXg7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gSE9NRSkge1xuICAgICAgbWFuYWdlci5zZXRGaXJzdEl0ZW1BY3RpdmUoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBFTkQpIHtcbiAgICAgIG1hbmFnZXIuc2V0TGFzdEl0ZW1BY3RpdmUoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hbnlDb250cm9sc0ludmFsaWRPclBlbmRpbmcoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5zdGVwcy50b0FycmF5KCk7XG5cbiAgICBzdGVwc1t0aGlzLl9zZWxlY3RlZEluZGV4XS5pbnRlcmFjdGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9saW5lYXIgJiYgaW5kZXggPj0gMCkge1xuICAgICAgcmV0dXJuIHN0ZXBzLnNsaWNlKDAsIGluZGV4KS5zb21lKHN0ZXAgPT4ge1xuICAgICAgICBjb25zdCBjb250cm9sID0gc3RlcC5zdGVwQ29udHJvbDtcbiAgICAgICAgY29uc3QgaXNJbmNvbXBsZXRlID1cbiAgICAgICAgICAgIGNvbnRyb2wgPyAoY29udHJvbC5pbnZhbGlkIHx8IGNvbnRyb2wucGVuZGluZyB8fCAhc3RlcC5pbnRlcmFjdGVkKSA6ICFzdGVwLmNvbXBsZXRlZDtcbiAgICAgICAgcmV0dXJuIGlzSW5jb21wbGV0ZSAmJiAhc3RlcC5vcHRpb25hbCAmJiAhc3RlcC5fY29tcGxldGVkT3ZlcnJpZGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9sYXlvdXREaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyICYmIHRoaXMuX2Rpci52YWx1ZSA9PT0gJ3J0bCcgPyAncnRsJyA6ICdsdHInO1xuICB9XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIHRoZSBzdGVwcGVyIGNvbnRhaW5zIHRoZSBmb2N1c2VkIGVsZW1lbnQuICovXG4gIHByaXZhdGUgX2NvbnRhaW5zRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9kb2N1bWVudCB8fCAhdGhpcy5fZWxlbWVudFJlZikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHN0ZXBwZXJFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGZvY3VzZWRFbGVtZW50ID0gdGhpcy5fZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gc3RlcHBlckVsZW1lbnQgPT09IGZvY3VzZWRFbGVtZW50IHx8IHN0ZXBwZXJFbGVtZW50LmNvbnRhaW5zKGZvY3VzZWRFbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lZGl0YWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3B0aW9uYWw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbXBsZXRlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGFzRXJyb3I6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmVhcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0ZWRJbmRleDogTnVtYmVySW5wdXQ7XG59XG5cblxuLyoqXG4gKiBTaW1wbGlmaWVkIHJlcHJlc2VudGF0aW9uIG9mIGFuIFwiQWJzdHJhY3RDb250cm9sXCIgZnJvbSBAYW5ndWxhci9mb3Jtcy5cbiAqIFVzZWQgdG8gYXZvaWQgaGF2aW5nIHRvIGJyaW5nIGluIEBhbmd1bGFyL2Zvcm1zIGZvciBhIHNpbmdsZSBvcHRpb25hbCBpbnRlcmZhY2UuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmludGVyZmFjZSBBYnN0cmFjdENvbnRyb2xMaWtlIHtcbiAgYXN5bmNWYWxpZGF0b3I6ICgoY29udHJvbDogYW55KSA9PiBhbnkpIHwgbnVsbDtcbiAgZGlydHk6IGJvb2xlYW47XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBlbmFibGVkOiBib29sZWFuO1xuICBlcnJvcnM6IHtba2V5OiBzdHJpbmddOiBhbnl9IHwgbnVsbDtcbiAgaW52YWxpZDogYm9vbGVhbjtcbiAgcGFyZW50OiBhbnk7XG4gIHBlbmRpbmc6IGJvb2xlYW47XG4gIHByaXN0aW5lOiBib29sZWFuO1xuICByb290OiBBYnN0cmFjdENvbnRyb2xMaWtlO1xuICBzdGF0dXM6IHN0cmluZztcbiAgc3RhdHVzQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+O1xuICB0b3VjaGVkOiBib29sZWFuO1xuICB1bnRvdWNoZWQ6IGJvb2xlYW47XG4gIHVwZGF0ZU9uOiBhbnk7XG4gIHZhbGlkOiBib29sZWFuO1xuICB2YWxpZGF0b3I6ICgoY29udHJvbDogYW55KSA9PiBhbnkpIHwgbnVsbDtcbiAgdmFsdWU6IGFueTtcbiAgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT47XG4gIGNsZWFyQXN5bmNWYWxpZGF0b3JzKCk6IHZvaWQ7XG4gIGNsZWFyVmFsaWRhdG9ycygpOiB2b2lkO1xuICBkaXNhYmxlKG9wdHM/OiBhbnkpOiB2b2lkO1xuICBlbmFibGUob3B0cz86IGFueSk6IHZvaWQ7XG4gIGdldChwYXRoOiAoc3RyaW5nIHwgbnVtYmVyKVtdIHwgc3RyaW5nKTogQWJzdHJhY3RDb250cm9sTGlrZSB8IG51bGw7XG4gIGdldEVycm9yKGVycm9yQ29kZTogc3RyaW5nLCBwYXRoPzogKHN0cmluZyB8IG51bWJlcilbXSB8IHN0cmluZyk6IGFueTtcbiAgaGFzRXJyb3IoZXJyb3JDb2RlOiBzdHJpbmcsIHBhdGg/OiAoc3RyaW5nIHwgbnVtYmVyKVtdIHwgc3RyaW5nKTogYm9vbGVhbjtcbiAgbWFya0FsbEFzVG91Y2hlZCgpOiB2b2lkO1xuICBtYXJrQXNEaXJ0eShvcHRzPzogYW55KTogdm9pZDtcbiAgbWFya0FzUGVuZGluZyhvcHRzPzogYW55KTogdm9pZDtcbiAgbWFya0FzUHJpc3RpbmUob3B0cz86IGFueSk6IHZvaWQ7XG4gIG1hcmtBc1RvdWNoZWQob3B0cz86IGFueSk6IHZvaWQ7XG4gIG1hcmtBc1VudG91Y2hlZChvcHRzPzogYW55KTogdm9pZDtcbiAgcGF0Y2hWYWx1ZSh2YWx1ZTogYW55LCBvcHRpb25zPzogT2JqZWN0KTogdm9pZDtcbiAgcmVzZXQodmFsdWU/OiBhbnksIG9wdGlvbnM/OiBPYmplY3QpOiB2b2lkO1xuICBzZXRBc3luY1ZhbGlkYXRvcnMobmV3VmFsaWRhdG9yOiAoY29udHJvbDogYW55KSA9PiBhbnkgfFxuICAgICgoY29udHJvbDogYW55KSA9PiBhbnkpW10gfCBudWxsKTogdm9pZDtcbiAgc2V0RXJyb3JzKGVycm9yczoge1trZXk6IHN0cmluZ106IGFueX0gfCBudWxsLCBvcHRzPzogYW55KTogdm9pZDtcbiAgc2V0UGFyZW50KHBhcmVudDogYW55KTogdm9pZDtcbiAgc2V0VmFsaWRhdG9ycyhuZXdWYWxpZGF0b3I6IChjb250cm9sOiBhbnkpID0+IGFueSB8XG4gICAgKChjb250cm9sOiBhbnkpID0+IGFueSlbXSB8IG51bGwpOiB2b2lkO1xuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvcHRpb25zPzogT2JqZWN0KTogdm9pZDtcbiAgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRzPzogYW55KTogdm9pZDtcbiAgcGF0Y2hWYWx1ZSh2YWx1ZTogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgcmVzZXQoZm9ybVN0YXRlPzogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG59XG4iXX0=