import {
    ChangeDetectorRef,
    Directive,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NgControl, NgModel} from '@angular/forms';
import {tuiAssert} from '@taiga-ui/cdk/classes';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {tuiDefaultProp} from '@taiga-ui/cdk/decorators';
import {TuiControlValueTransformer} from '@taiga-ui/cdk/interfaces';
import {merge, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {AbstractTuiInteractive} from './interactive';

/**
 * Basic ControlValueAccessor class to build form components upon
 */
@Directive()
export abstract class AbstractTuiControl<T>
    extends AbstractTuiInteractive
    implements OnDestroy, OnInit, ControlValueAccessor
{
    private previousInternalValue?: T | null;

    private onTouched = EMPTY_FUNCTION;

    private onChange = EMPTY_FUNCTION;

    protected readonly fallbackValue = this.getFallbackValue();

    protected readonly destroy$ = new Subject<void>();

    @Input()
    @HostBinding('class._readonly')
    @tuiDefaultProp()
    readOnly = false;

    @Input()
    @tuiDefaultProp()
    pseudoInvalid: boolean | null = null;

    protected constructor(
        private readonly ngControl: NgControl | null,
        protected readonly changeDetectorRef: ChangeDetectorRef,
        protected readonly valueTransformer?: TuiControlValueTransformer<T> | null,
    ) {
        super();

        if (this.ngControl === null) {
            tuiAssert.assert(
                false,
                `NgControl not injected in ${this.constructor.name}!\n`,
                'Use [(ngModel)] or [formControl] or formControlName for correct work.',
            );
        } else {
            this.ngControl.valueAccessor = this;
        }
    }

    protected abstract getFallbackValue(): T;

    @HostBinding('class._invalid')
    get computedInvalid(): boolean {
        return (
            this.interactive &&
            (this.pseudoInvalid !== null
                ? this.pseudoInvalid
                : this.touched && this.invalid)
        );
    }

    get value(): T {
        return this.previousInternalValue ?? this.fallbackValue;
    }

    get safeCurrentValue(): T {
        return this.rawValue ?? this.fallbackValue;
    }

    get invalid(): boolean {
        return this.safeNgControlData<boolean>(({invalid}) => invalid, false);
    }

    get valid(): boolean {
        return this.safeNgControlData<boolean>(({valid}) => valid, false);
    }

    get touched(): boolean {
        return this.safeNgControlData<boolean>(({touched}) => touched, false);
    }

    get disabled(): boolean {
        return this.safeNgControlData<boolean>(({disabled}) => disabled, false);
    }

    get interactive(): boolean {
        return !this.readOnly && !this.computedDisabled;
    }

    get control(): AbstractControl | null {
        return this.safeNgControlData<AbstractControl | null>(
            ({control}) => control,
            null,
        );
    }

    get computedName(): string | number | null {
        return this.controlName;
    }

    protected get controlName(): string | number | null {
        return this.ngControl && this.ngControl.name;
    }

    private get rawValue(): T | undefined {
        const {ngControl} = this;

        if (ngControl === null) {
            return undefined;
        }

        const controlValue =
            ngControl instanceof NgModel && this.previousInternalValue === undefined
                ? ngControl.viewModel
                : ngControl.value;

        return this.fromControlValue(controlValue);
    }

    ngOnInit() {
        if (!this.ngControl?.valueChanges || !this.ngControl?.statusChanges) {
            return;
        }

        merge(this.ngControl.valueChanges, this.ngControl.statusChanges)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.refreshLocalValue(this.safeCurrentValue));
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    checkControlUpdate() {
        this.changeDetectorRef.markForCheck();
    }

    registerOnChange(onChange: (value: T | unknown) => void) {
        this.onChange = (componentValue: T) => {
            onChange(this.toControlValue(componentValue));
        };
    }

    registerOnTouched(onTouched: () => void) {
        this.onTouched = onTouched;
    }

    setDisabledState() {
        this.checkControlUpdate();
    }

    writeValue(value: T | null) {
        const controlValue =
            this.ngControl instanceof NgModel && this.previousInternalValue === undefined
                ? this.ngControl.model
                : value;

        this.refreshLocalValue(this.fromControlValue(controlValue));
    }

    protected updateFocused(focused: boolean) {
        if (!focused) {
            this.controlMarkAsTouched();
        }

        super.updateFocused(focused);
    }

    protected updateValue(value: T) {
        if (this.disabled || this.valueIdenticalComparator(this.value, value)) {
            return;
        }

        this.previousInternalValue = value;
        this.controlSetValue(value);
    }

    protected valueIdenticalComparator(oldValue: T, newValue: T): boolean {
        return oldValue === newValue;
    }

    private safeNgControlData<T>(
        extractor: (ngControl: NgControl) => T | null | undefined,
        defaultFieldValue: T,
    ): T {
        return (this.ngControl && extractor(this.ngControl)) ?? defaultFieldValue;
    }

    private controlMarkAsTouched() {
        this.onTouched();
        this.checkControlUpdate();
    }

    private controlSetValue(value: T) {
        this.onChange(value);
        this.checkControlUpdate();
    }

    private refreshLocalValue(value: T | null) {
        this.previousInternalValue = value;
        this.checkControlUpdate();
    }

    private fromControlValue(controlValue: unknown): T {
        return this.valueTransformer
            ? this.valueTransformer.fromControlValue(controlValue)
            : (controlValue as T);
    }

    private toControlValue(componentValue: T): unknown {
        return this.valueTransformer
            ? this.valueTransformer.toControlValue(componentValue)
            : componentValue;
    }
}
