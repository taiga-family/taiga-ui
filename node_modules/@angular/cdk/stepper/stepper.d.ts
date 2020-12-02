/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusableOption } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, InjectionToken, OnChanges, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CdkStepLabel } from './step-label';
/**
 * Position state of the content of each step in stepper that is used for transitioning
 * the content into correct position upon step selection change.
 */
import * as ɵngcc0 from '@angular/core';
export declare type StepContentPositionState = 'previous' | 'current' | 'next';
/** Possible orientation of a stepper. */
export declare type StepperOrientation = 'horizontal' | 'vertical';
/** Change event emitted on selection changes. */
export declare class StepperSelectionEvent {
    /** Index of the step now selected. */
    selectedIndex: number;
    /** Index of the step previously selected. */
    previouslySelectedIndex: number;
    /** The step instance now selected. */
    selectedStep: CdkStep;
    /** The step instance previously selected. */
    previouslySelectedStep: CdkStep;
}
/** The state of each step. */
export declare type StepState = 'number' | 'edit' | 'done' | 'error' | string;
/** Enum to represent the different states of the steps. */
export declare const STEP_STATE: {
    NUMBER: string;
    EDIT: string;
    DONE: string;
    ERROR: string;
};
/** InjectionToken that can be used to specify the global stepper options. */
export declare const STEPPER_GLOBAL_OPTIONS: InjectionToken<StepperOptions>;
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
 * @breaking-change 8.0.0.
 */
export declare const MAT_STEPPER_GLOBAL_OPTIONS: InjectionToken<StepperOptions>;
/** Configurable options for stepper. */
export interface StepperOptions {
    /**
     * Whether the stepper should display an error state or not.
     * Default behavior is assumed to be false.
     */
    showError?: boolean;
    /**
     * Whether the stepper should display the default indicator type
     * or not.
     * Default behavior is assumed to be true.
     */
    displayDefaultIndicatorType?: boolean;
}
export declare class CdkStep implements OnChanges {
    private _stepper;
    private _stepperOptions;
    _showError: boolean;
    _displayDefaultIndicatorType: boolean;
    /** Template for step label if it exists. */
    stepLabel: CdkStepLabel;
    /** Template for step content. */
    content: TemplateRef<any>;
    /** The top level abstract control of the step. */
    stepControl: AbstractControlLike;
    /** Whether user has seen the expanded step content or not. */
    interacted: boolean;
    /** Plain text label of the step. */
    label: string;
    /** Error message to display when there's an error. */
    errorMessage: string;
    /** Aria label for the tab. */
    ariaLabel: string;
    /**
     * Reference to the element that the tab is labelled by.
     * Will be cleared if `aria-label` is set at the same time.
     */
    ariaLabelledby: string;
    /** State of the step. */
    state: StepState;
    /** Whether the user can return to this step once it has been marked as completed. */
    get editable(): boolean;
    set editable(value: boolean);
    private _editable;
    /** Whether the completion of step is optional. */
    get optional(): boolean;
    set optional(value: boolean);
    private _optional;
    /** Whether step is marked as completed. */
    get completed(): boolean;
    set completed(value: boolean);
    _completedOverride: boolean | null;
    private _getDefaultCompleted;
    /** Whether step has an error. */
    get hasError(): boolean;
    set hasError(value: boolean);
    private _customError;
    private _getDefaultError;
    /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
    constructor(_stepper: CdkStepper, stepperOptions?: StepperOptions);
    /** Selects this step component. */
    select(): void;
    /** Resets the step to its initial state. Note that this includes resetting form data. */
    reset(): void;
    ngOnChanges(): void;
    static ngAcceptInputType_editable: BooleanInput;
    static ngAcceptInputType_hasError: BooleanInput;
    static ngAcceptInputType_optional: BooleanInput;
    static ngAcceptInputType_completed: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkStep, [null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkStep, "cdk-step", ["cdkStep"], { "editable": "editable"; "optional": "optional"; "completed": "completed"; "hasError": "hasError"; "stepControl": "stepControl"; "label": "label"; "errorMessage": "errorMessage"; "ariaLabel": "aria-label"; "ariaLabelledby": "aria-labelledby"; "state": "state"; }, {}, ["stepLabel"], ["*"]>;
}
export declare class CdkStepper implements AfterViewInit, OnDestroy {
    private _dir;
    private _changeDetectorRef;
    private _elementRef?;
    /** Emits when the component is destroyed. */
    protected _destroyed: Subject<void>;
    /** Used for managing keyboard focus. */
    private _keyManager;
    /**
     * @breaking-change 8.0.0 Remove `| undefined` once the `_document`
     * constructor param is required.
     */
    private _document;
    /**
     * The list of step components that the stepper is holding.
     * @deprecated use `steps` instead
     * @breaking-change 9.0.0 remove this property
     */
    _steps: QueryList<CdkStep>;
    /** The list of step components that the stepper is holding. */
    get steps(): QueryList<CdkStep>;
    /**
     * The list of step headers of the steps in the stepper.
     * @deprecated Type to be changed to `QueryList<CdkStepHeader>`.
     * @breaking-change 8.0.0
     */
    _stepHeader: QueryList<FocusableOption>;
    /** Whether the validity of previous steps should be checked or not. */
    get linear(): boolean;
    set linear(value: boolean);
    private _linear;
    /** The index of the selected step. */
    get selectedIndex(): number;
    set selectedIndex(index: number);
    private _selectedIndex;
    /** The step that is selected. */
    get selected(): CdkStep;
    set selected(step: CdkStep);
    /** Event emitted when the selected step has changed. */
    selectionChange: EventEmitter<StepperSelectionEvent>;
    /** Used to track unique ID for each stepper component. */
    _groupId: number;
    protected _orientation: StepperOrientation;
    constructor(_dir: Directionality, _changeDetectorRef: ChangeDetectorRef, _elementRef?: ElementRef<HTMLElement> | undefined, _document?: any);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Selects and focuses the next step in list. */
    next(): void;
    /** Selects and focuses the previous step in list. */
    previous(): void;
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */
    reset(): void;
    /** Returns a unique id for each step label element. */
    _getStepLabelId(i: number): string;
    /** Returns unique id for each step content element. */
    _getStepContentId(i: number): string;
    /** Marks the component to be change detected. */
    _stateChanged(): void;
    /** Returns position state of the step with the given index. */
    _getAnimationDirection(index: number): StepContentPositionState;
    /** Returns the type of icon to be displayed. */
    _getIndicatorType(index: number, state?: StepState): StepState;
    private _getDefaultIndicatorLogic;
    private _getGuidelineLogic;
    private _isCurrentStep;
    /** Returns the index of the currently-focused step header. */
    _getFocusIndex(): number | null;
    private _updateSelectedItemIndex;
    _onKeydown(event: KeyboardEvent): void;
    private _anyControlsInvalidOrPending;
    private _layoutDirection;
    /** Checks whether the stepper contains the focused element. */
    private _containsFocus;
    static ngAcceptInputType_editable: BooleanInput;
    static ngAcceptInputType_optional: BooleanInput;
    static ngAcceptInputType_completed: BooleanInput;
    static ngAcceptInputType_hasError: BooleanInput;
    static ngAcceptInputType_linear: BooleanInput;
    static ngAcceptInputType_selectedIndex: NumberInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkStepper, [{ optional: true; }, null, null, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkStepper, "[cdkStepper]", ["cdkStepper"], { "linear": "linear"; "selectedIndex": "selectedIndex"; "selected": "selected"; }, { "selectionChange": "selectionChange"; }, ["_steps", "_stepHeader"]>;
}
/**
 * Simplified representation of an "AbstractControl" from @angular/forms.
 * Used to avoid having to bring in @angular/forms for a single optional interface.
 * @docs-private
 */
interface AbstractControlLike {
    asyncValidator: ((control: any) => any) | null;
    dirty: boolean;
    disabled: boolean;
    enabled: boolean;
    errors: {
        [key: string]: any;
    } | null;
    invalid: boolean;
    parent: any;
    pending: boolean;
    pristine: boolean;
    root: AbstractControlLike;
    status: string;
    statusChanges: Observable<any>;
    touched: boolean;
    untouched: boolean;
    updateOn: any;
    valid: boolean;
    validator: ((control: any) => any) | null;
    value: any;
    valueChanges: Observable<any>;
    clearAsyncValidators(): void;
    clearValidators(): void;
    disable(opts?: any): void;
    enable(opts?: any): void;
    get(path: (string | number)[] | string): AbstractControlLike | null;
    getError(errorCode: string, path?: (string | number)[] | string): any;
    hasError(errorCode: string, path?: (string | number)[] | string): boolean;
    markAllAsTouched(): void;
    markAsDirty(opts?: any): void;
    markAsPending(opts?: any): void;
    markAsPristine(opts?: any): void;
    markAsTouched(opts?: any): void;
    markAsUntouched(opts?: any): void;
    patchValue(value: any, options?: Object): void;
    reset(value?: any, options?: Object): void;
    setAsyncValidators(newValidator: (control: any) => any | ((control: any) => any)[] | null): void;
    setErrors(errors: {
        [key: string]: any;
    } | null, opts?: any): void;
    setParent(parent: any): void;
    setValidators(newValidator: (control: any) => any | ((control: any) => any)[] | null): void;
    setValue(value: any, options?: Object): void;
    updateValueAndValidity(opts?: any): void;
    patchValue(value: any, options?: any): void;
    reset(formState?: any, options?: any): void;
    setValue(value: any, options?: any): void;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5kLnRzIiwic291cmNlcyI6WyJzdGVwcGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgRm9jdXNhYmxlT3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE51bWJlcklucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGlvblRva2VuLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2RrU3RlcExhYmVsIH0gZnJvbSAnLi9zdGVwLWxhYmVsJztcbi8qKlxuICogUG9zaXRpb24gc3RhdGUgb2YgdGhlIGNvbnRlbnQgb2YgZWFjaCBzdGVwIGluIHN0ZXBwZXIgdGhhdCBpcyB1c2VkIGZvciB0cmFuc2l0aW9uaW5nXG4gKiB0aGUgY29udGVudCBpbnRvIGNvcnJlY3QgcG9zaXRpb24gdXBvbiBzdGVwIHNlbGVjdGlvbiBjaGFuZ2UuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3RlcENvbnRlbnRQb3NpdGlvblN0YXRlID0gJ3ByZXZpb3VzJyB8ICdjdXJyZW50JyB8ICduZXh0Jztcbi8qKiBQb3NzaWJsZSBvcmllbnRhdGlvbiBvZiBhIHN0ZXBwZXIuICovXG5leHBvcnQgZGVjbGFyZSB0eXBlIFN0ZXBwZXJPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG4vKiogQ2hhbmdlIGV2ZW50IGVtaXR0ZWQgb24gc2VsZWN0aW9uIGNoYW5nZXMuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdGVwcGVyU2VsZWN0aW9uRXZlbnQge1xuICAgIC8qKiBJbmRleCBvZiB0aGUgc3RlcCBub3cgc2VsZWN0ZWQuICovXG4gICAgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICAgIC8qKiBJbmRleCBvZiB0aGUgc3RlcCBwcmV2aW91c2x5IHNlbGVjdGVkLiAqL1xuICAgIHByZXZpb3VzbHlTZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gICAgLyoqIFRoZSBzdGVwIGluc3RhbmNlIG5vdyBzZWxlY3RlZC4gKi9cbiAgICBzZWxlY3RlZFN0ZXA6IENka1N0ZXA7XG4gICAgLyoqIFRoZSBzdGVwIGluc3RhbmNlIHByZXZpb3VzbHkgc2VsZWN0ZWQuICovXG4gICAgcHJldmlvdXNseVNlbGVjdGVkU3RlcDogQ2RrU3RlcDtcbn1cbi8qKiBUaGUgc3RhdGUgb2YgZWFjaCBzdGVwLiAqL1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdGVwU3RhdGUgPSAnbnVtYmVyJyB8ICdlZGl0JyB8ICdkb25lJyB8ICdlcnJvcicgfCBzdHJpbmc7XG4vKiogRW51bSB0byByZXByZXNlbnQgdGhlIGRpZmZlcmVudCBzdGF0ZXMgb2YgdGhlIHN0ZXBzLiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgU1RFUF9TVEFURToge1xuICAgIE5VTUJFUjogc3RyaW5nO1xuICAgIEVESVQ6IHN0cmluZztcbiAgICBET05FOiBzdHJpbmc7XG4gICAgRVJST1I6IHN0cmluZztcbn07XG4vKiogSW5qZWN0aW9uVG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSBnbG9iYWwgc3RlcHBlciBvcHRpb25zLiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgU1RFUFBFUl9HTE9CQUxfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48U3RlcHBlck9wdGlvbnM+O1xuLyoqXG4gKiBJbmplY3Rpb25Ub2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgdGhlIGdsb2JhbCBzdGVwcGVyIG9wdGlvbnMuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYFNURVBQRVJfR0xPQkFMX09QVElPTlNgIGluc3RlYWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wLlxuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBNQVRfU1RFUFBFUl9HTE9CQUxfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48U3RlcHBlck9wdGlvbnM+O1xuLyoqIENvbmZpZ3VyYWJsZSBvcHRpb25zIGZvciBzdGVwcGVyLiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGVwcGVyT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgc3RlcHBlciBzaG91bGQgZGlzcGxheSBhbiBlcnJvciBzdGF0ZSBvciBub3QuXG4gICAgICogRGVmYXVsdCBiZWhhdmlvciBpcyBhc3N1bWVkIHRvIGJlIGZhbHNlLlxuICAgICAqL1xuICAgIHNob3dFcnJvcj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgc3RlcHBlciBzaG91bGQgZGlzcGxheSB0aGUgZGVmYXVsdCBpbmRpY2F0b3IgdHlwZVxuICAgICAqIG9yIG5vdC5cbiAgICAgKiBEZWZhdWx0IGJlaGF2aW9yIGlzIGFzc3VtZWQgdG8gYmUgdHJ1ZS5cbiAgICAgKi9cbiAgICBkaXNwbGF5RGVmYXVsdEluZGljYXRvclR5cGU/OiBib29sZWFuO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrU3RlcCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBfc3RlcHBlcjtcbiAgICBwcml2YXRlIF9zdGVwcGVyT3B0aW9ucztcbiAgICBfc2hvd0Vycm9yOiBib29sZWFuO1xuICAgIF9kaXNwbGF5RGVmYXVsdEluZGljYXRvclR5cGU6IGJvb2xlYW47XG4gICAgLyoqIFRlbXBsYXRlIGZvciBzdGVwIGxhYmVsIGlmIGl0IGV4aXN0cy4gKi9cbiAgICBzdGVwTGFiZWw6IENka1N0ZXBMYWJlbDtcbiAgICAvKiogVGVtcGxhdGUgZm9yIHN0ZXAgY29udGVudC4gKi9cbiAgICBjb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKiBUaGUgdG9wIGxldmVsIGFic3RyYWN0IGNvbnRyb2wgb2YgdGhlIHN0ZXAuICovXG4gICAgc3RlcENvbnRyb2w6IEFic3RyYWN0Q29udHJvbExpa2U7XG4gICAgLyoqIFdoZXRoZXIgdXNlciBoYXMgc2VlbiB0aGUgZXhwYW5kZWQgc3RlcCBjb250ZW50IG9yIG5vdC4gKi9cbiAgICBpbnRlcmFjdGVkOiBib29sZWFuO1xuICAgIC8qKiBQbGFpbiB0ZXh0IGxhYmVsIG9mIHRoZSBzdGVwLiAqL1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgLyoqIEVycm9yIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZXJlJ3MgYW4gZXJyb3IuICovXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgLyoqIEFyaWEgbGFiZWwgZm9yIHRoZSB0YWIuICovXG4gICAgYXJpYUxhYmVsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHRoYXQgdGhlIHRhYiBpcyBsYWJlbGxlZCBieS5cbiAgICAgKiBXaWxsIGJlIGNsZWFyZWQgaWYgYGFyaWEtbGFiZWxgIGlzIHNldCBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqL1xuICAgIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gICAgLyoqIFN0YXRlIG9mIHRoZSBzdGVwLiAqL1xuICAgIHN0YXRlOiBTdGVwU3RhdGU7XG4gICAgLyoqIFdoZXRoZXIgdGhlIHVzZXIgY2FuIHJldHVybiB0byB0aGlzIHN0ZXAgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgY29tcGxldGVkLiAqL1xuICAgIGdldCBlZGl0YWJsZSgpOiBib29sZWFuO1xuICAgIHNldCBlZGl0YWJsZSh2YWx1ZTogYm9vbGVhbik7XG4gICAgcHJpdmF0ZSBfZWRpdGFibGU7XG4gICAgLyoqIFdoZXRoZXIgdGhlIGNvbXBsZXRpb24gb2Ygc3RlcCBpcyBvcHRpb25hbC4gKi9cbiAgICBnZXQgb3B0aW9uYWwoKTogYm9vbGVhbjtcbiAgICBzZXQgb3B0aW9uYWwodmFsdWU6IGJvb2xlYW4pO1xuICAgIHByaXZhdGUgX29wdGlvbmFsO1xuICAgIC8qKiBXaGV0aGVyIHN0ZXAgaXMgbWFya2VkIGFzIGNvbXBsZXRlZC4gKi9cbiAgICBnZXQgY29tcGxldGVkKCk6IGJvb2xlYW47XG4gICAgc2V0IGNvbXBsZXRlZCh2YWx1ZTogYm9vbGVhbik7XG4gICAgX2NvbXBsZXRlZE92ZXJyaWRlOiBib29sZWFuIHwgbnVsbDtcbiAgICBwcml2YXRlIF9nZXREZWZhdWx0Q29tcGxldGVkO1xuICAgIC8qKiBXaGV0aGVyIHN0ZXAgaGFzIGFuIGVycm9yLiAqL1xuICAgIGdldCBoYXNFcnJvcigpOiBib29sZWFuO1xuICAgIHNldCBoYXNFcnJvcih2YWx1ZTogYm9vbGVhbik7XG4gICAgcHJpdmF0ZSBfY3VzdG9tRXJyb3I7XG4gICAgcHJpdmF0ZSBfZ2V0RGVmYXVsdEVycm9yO1xuICAgIC8qKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHJlbW92ZSB0aGUgYD9gIGFmdGVyIGBzdGVwcGVyT3B0aW9uc2AgKi9cbiAgICBjb25zdHJ1Y3Rvcihfc3RlcHBlcjogQ2RrU3RlcHBlciwgc3RlcHBlck9wdGlvbnM/OiBTdGVwcGVyT3B0aW9ucyk7XG4gICAgLyoqIFNlbGVjdHMgdGhpcyBzdGVwIGNvbXBvbmVudC4gKi9cbiAgICBzZWxlY3QoKTogdm9pZDtcbiAgICAvKiogUmVzZXRzIHRoZSBzdGVwIHRvIGl0cyBpbml0aWFsIHN0YXRlLiBOb3RlIHRoYXQgdGhpcyBpbmNsdWRlcyByZXNldHRpbmcgZm9ybSBkYXRhLiAqL1xuICAgIHJlc2V0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZWRpdGFibGU6IEJvb2xlYW5JbnB1dDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGFzRXJyb3I6IEJvb2xlYW5JbnB1dDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3B0aW9uYWw6IEJvb2xlYW5JbnB1dDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29tcGxldGVkOiBCb29sZWFuSW5wdXQ7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtTdGVwcGVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9kaXI7XG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZj87XG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gICAgcHJvdGVjdGVkIF9kZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD47XG4gICAgLyoqIFVzZWQgZm9yIG1hbmFnaW5nIGtleWJvYXJkIGZvY3VzLiAqL1xuICAgIHByaXZhdGUgX2tleU1hbmFnZXI7XG4gICAgLyoqXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMCBSZW1vdmUgYHwgdW5kZWZpbmVkYCBvbmNlIHRoZSBgX2RvY3VtZW50YFxuICAgICAqIGNvbnN0cnVjdG9yIHBhcmFtIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2RvY3VtZW50O1xuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIHN0ZXAgY29tcG9uZW50cyB0aGF0IHRoZSBzdGVwcGVyIGlzIGhvbGRpbmcuXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIGBzdGVwc2AgaW5zdGVhZFxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgOS4wLjAgcmVtb3ZlIHRoaXMgcHJvcGVydHlcbiAgICAgKi9cbiAgICBfc3RlcHM6IFF1ZXJ5TGlzdDxDZGtTdGVwPjtcbiAgICAvKiogVGhlIGxpc3Qgb2Ygc3RlcCBjb21wb25lbnRzIHRoYXQgdGhlIHN0ZXBwZXIgaXMgaG9sZGluZy4gKi9cbiAgICBnZXQgc3RlcHMoKTogUXVlcnlMaXN0PENka1N0ZXA+O1xuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIHN0ZXAgaGVhZGVycyBvZiB0aGUgc3RlcHMgaW4gdGhlIHN0ZXBwZXIuXG4gICAgICogQGRlcHJlY2F0ZWQgVHlwZSB0byBiZSBjaGFuZ2VkIHRvIGBRdWVyeUxpc3Q8Q2RrU3RlcEhlYWRlcj5gLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiAgICAgKi9cbiAgICBfc3RlcEhlYWRlcjogUXVlcnlMaXN0PEZvY3VzYWJsZU9wdGlvbj47XG4gICAgLyoqIFdoZXRoZXIgdGhlIHZhbGlkaXR5IG9mIHByZXZpb3VzIHN0ZXBzIHNob3VsZCBiZSBjaGVja2VkIG9yIG5vdC4gKi9cbiAgICBnZXQgbGluZWFyKCk6IGJvb2xlYW47XG4gICAgc2V0IGxpbmVhcih2YWx1ZTogYm9vbGVhbik7XG4gICAgcHJpdmF0ZSBfbGluZWFyO1xuICAgIC8qKiBUaGUgaW5kZXggb2YgdGhlIHNlbGVjdGVkIHN0ZXAuICovXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyO1xuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4OiBudW1iZXIpO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg7XG4gICAgLyoqIFRoZSBzdGVwIHRoYXQgaXMgc2VsZWN0ZWQuICovXG4gICAgZ2V0IHNlbGVjdGVkKCk6IENka1N0ZXA7XG4gICAgc2V0IHNlbGVjdGVkKHN0ZXA6IENka1N0ZXApO1xuICAgIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHNlbGVjdGVkIHN0ZXAgaGFzIGNoYW5nZWQuICovXG4gICAgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3RlcHBlclNlbGVjdGlvbkV2ZW50PjtcbiAgICAvKiogVXNlZCB0byB0cmFjayB1bmlxdWUgSUQgZm9yIGVhY2ggc3RlcHBlciBjb21wb25lbnQuICovXG4gICAgX2dyb3VwSWQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX29yaWVudGF0aW9uOiBTdGVwcGVyT3JpZW50YXRpb247XG4gICAgY29uc3RydWN0b3IoX2RpcjogRGlyZWN0aW9uYWxpdHksIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIF9lbGVtZW50UmVmPzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gfCB1bmRlZmluZWQsIF9kb2N1bWVudD86IGFueSk7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKiogU2VsZWN0cyBhbmQgZm9jdXNlcyB0aGUgbmV4dCBzdGVwIGluIGxpc3QuICovXG4gICAgbmV4dCgpOiB2b2lkO1xuICAgIC8qKiBTZWxlY3RzIGFuZCBmb2N1c2VzIHRoZSBwcmV2aW91cyBzdGVwIGluIGxpc3QuICovXG4gICAgcHJldmlvdXMoKTogdm9pZDtcbiAgICAvKiogUmVzZXRzIHRoZSBzdGVwcGVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLiBOb3RlIHRoYXQgdGhpcyBpbmNsdWRlcyBjbGVhcmluZyBmb3JtIGRhdGEuICovXG4gICAgcmVzZXQoKTogdm9pZDtcbiAgICAvKiogUmV0dXJucyBhIHVuaXF1ZSBpZCBmb3IgZWFjaCBzdGVwIGxhYmVsIGVsZW1lbnQuICovXG4gICAgX2dldFN0ZXBMYWJlbElkKGk6IG51bWJlcik6IHN0cmluZztcbiAgICAvKiogUmV0dXJucyB1bmlxdWUgaWQgZm9yIGVhY2ggc3RlcCBjb250ZW50IGVsZW1lbnQuICovXG4gICAgX2dldFN0ZXBDb250ZW50SWQoaTogbnVtYmVyKTogc3RyaW5nO1xuICAgIC8qKiBNYXJrcyB0aGUgY29tcG9uZW50IHRvIGJlIGNoYW5nZSBkZXRlY3RlZC4gKi9cbiAgICBfc3RhdGVDaGFuZ2VkKCk6IHZvaWQ7XG4gICAgLyoqIFJldHVybnMgcG9zaXRpb24gc3RhdGUgb2YgdGhlIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gaW5kZXguICovXG4gICAgX2dldEFuaW1hdGlvbkRpcmVjdGlvbihpbmRleDogbnVtYmVyKTogU3RlcENvbnRlbnRQb3NpdGlvblN0YXRlO1xuICAgIC8qKiBSZXR1cm5zIHRoZSB0eXBlIG9mIGljb24gdG8gYmUgZGlzcGxheWVkLiAqL1xuICAgIF9nZXRJbmRpY2F0b3JUeXBlKGluZGV4OiBudW1iZXIsIHN0YXRlPzogU3RlcFN0YXRlKTogU3RlcFN0YXRlO1xuICAgIHByaXZhdGUgX2dldERlZmF1bHRJbmRpY2F0b3JMb2dpYztcbiAgICBwcml2YXRlIF9nZXRHdWlkZWxpbmVMb2dpYztcbiAgICBwcml2YXRlIF9pc0N1cnJlbnRTdGVwO1xuICAgIC8qKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudGx5LWZvY3VzZWQgc3RlcCBoZWFkZXIuICovXG4gICAgX2dldEZvY3VzSW5kZXgoKTogbnVtYmVyIHwgbnVsbDtcbiAgICBwcml2YXRlIF91cGRhdGVTZWxlY3RlZEl0ZW1JbmRleDtcbiAgICBfb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICBwcml2YXRlIF9hbnlDb250cm9sc0ludmFsaWRPclBlbmRpbmc7XG4gICAgcHJpdmF0ZSBfbGF5b3V0RGlyZWN0aW9uO1xuICAgIC8qKiBDaGVja3Mgd2hldGhlciB0aGUgc3RlcHBlciBjb250YWlucyB0aGUgZm9jdXNlZCBlbGVtZW50LiAqL1xuICAgIHByaXZhdGUgX2NvbnRhaW5zRm9jdXM7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2VkaXRhYmxlOiBCb29sZWFuSW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX29wdGlvbmFsOiBCb29sZWFuSW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbXBsZXRlZDogQm9vbGVhbklucHV0O1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oYXNFcnJvcjogQm9vbGVhbklucHV0O1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saW5lYXI6IEJvb2xlYW5JbnB1dDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0ZWRJbmRleDogTnVtYmVySW5wdXQ7XG59XG4vKipcbiAqIFNpbXBsaWZpZWQgcmVwcmVzZW50YXRpb24gb2YgYW4gXCJBYnN0cmFjdENvbnRyb2xcIiBmcm9tIEBhbmd1bGFyL2Zvcm1zLlxuICogVXNlZCB0byBhdm9pZCBoYXZpbmcgdG8gYnJpbmcgaW4gQGFuZ3VsYXIvZm9ybXMgZm9yIGEgc2luZ2xlIG9wdGlvbmFsIGludGVyZmFjZS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuaW50ZXJmYWNlIEFic3RyYWN0Q29udHJvbExpa2Uge1xuICAgIGFzeW5jVmFsaWRhdG9yOiAoKGNvbnRyb2w6IGFueSkgPT4gYW55KSB8IG51bGw7XG4gICAgZGlydHk6IGJvb2xlYW47XG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgZW5hYmxlZDogYm9vbGVhbjtcbiAgICBlcnJvcnM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH0gfCBudWxsO1xuICAgIGludmFsaWQ6IGJvb2xlYW47XG4gICAgcGFyZW50OiBhbnk7XG4gICAgcGVuZGluZzogYm9vbGVhbjtcbiAgICBwcmlzdGluZTogYm9vbGVhbjtcbiAgICByb290OiBBYnN0cmFjdENvbnRyb2xMaWtlO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIHN0YXR1c0NoYW5nZXM6IE9ic2VydmFibGU8YW55PjtcbiAgICB0b3VjaGVkOiBib29sZWFuO1xuICAgIHVudG91Y2hlZDogYm9vbGVhbjtcbiAgICB1cGRhdGVPbjogYW55O1xuICAgIHZhbGlkOiBib29sZWFuO1xuICAgIHZhbGlkYXRvcjogKChjb250cm9sOiBhbnkpID0+IGFueSkgfCBudWxsO1xuICAgIHZhbHVlOiBhbnk7XG4gICAgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT47XG4gICAgY2xlYXJBc3luY1ZhbGlkYXRvcnMoKTogdm9pZDtcbiAgICBjbGVhclZhbGlkYXRvcnMoKTogdm9pZDtcbiAgICBkaXNhYmxlKG9wdHM/OiBhbnkpOiB2b2lkO1xuICAgIGVuYWJsZShvcHRzPzogYW55KTogdm9pZDtcbiAgICBnZXQocGF0aDogKHN0cmluZyB8IG51bWJlcilbXSB8IHN0cmluZyk6IEFic3RyYWN0Q29udHJvbExpa2UgfCBudWxsO1xuICAgIGdldEVycm9yKGVycm9yQ29kZTogc3RyaW5nLCBwYXRoPzogKHN0cmluZyB8IG51bWJlcilbXSB8IHN0cmluZyk6IGFueTtcbiAgICBoYXNFcnJvcihlcnJvckNvZGU6IHN0cmluZywgcGF0aD86IChzdHJpbmcgfCBudW1iZXIpW10gfCBzdHJpbmcpOiBib29sZWFuO1xuICAgIG1hcmtBbGxBc1RvdWNoZWQoKTogdm9pZDtcbiAgICBtYXJrQXNEaXJ0eShvcHRzPzogYW55KTogdm9pZDtcbiAgICBtYXJrQXNQZW5kaW5nKG9wdHM/OiBhbnkpOiB2b2lkO1xuICAgIG1hcmtBc1ByaXN0aW5lKG9wdHM/OiBhbnkpOiB2b2lkO1xuICAgIG1hcmtBc1RvdWNoZWQob3B0cz86IGFueSk6IHZvaWQ7XG4gICAgbWFya0FzVW50b3VjaGVkKG9wdHM/OiBhbnkpOiB2b2lkO1xuICAgIHBhdGNoVmFsdWUodmFsdWU6IGFueSwgb3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XG4gICAgcmVzZXQodmFsdWU/OiBhbnksIG9wdGlvbnM/OiBPYmplY3QpOiB2b2lkO1xuICAgIHNldEFzeW5jVmFsaWRhdG9ycyhuZXdWYWxpZGF0b3I6IChjb250cm9sOiBhbnkpID0+IGFueSB8ICgoY29udHJvbDogYW55KSA9PiBhbnkpW10gfCBudWxsKTogdm9pZDtcbiAgICBzZXRFcnJvcnMoZXJyb3JzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9IHwgbnVsbCwgb3B0cz86IGFueSk6IHZvaWQ7XG4gICAgc2V0UGFyZW50KHBhcmVudDogYW55KTogdm9pZDtcbiAgICBzZXRWYWxpZGF0b3JzKG5ld1ZhbGlkYXRvcjogKGNvbnRyb2w6IGFueSkgPT4gYW55IHwgKChjb250cm9sOiBhbnkpID0+IGFueSlbXSB8IG51bGwpOiB2b2lkO1xuICAgIHNldFZhbHVlKHZhbHVlOiBhbnksIG9wdGlvbnM/OiBPYmplY3QpOiB2b2lkO1xuICAgIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0cz86IGFueSk6IHZvaWQ7XG4gICAgcGF0Y2hWYWx1ZSh2YWx1ZTogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICByZXNldChmb3JtU3RhdGU/OiBhbnksIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xuICAgIHNldFZhbHVlKHZhbHVlOiBhbnksIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xufVxuZXhwb3J0IHt9O1xuIl19