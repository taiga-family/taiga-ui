import {
    ChangeDetectorRef,
    Directive,
    HostBinding,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Optional,
    Provider,
    Type,
} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NgControl, NgModel} from '@angular/forms';
import {tuiAssert} from '@taiga-ui/cdk/classes';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {tuiDefaultProp} from '@taiga-ui/cdk/decorators';
import {TuiControlValueTransformer} from '@taiga-ui/cdk/interfaces';
import {tuiIsPresent} from '@taiga-ui/cdk/utils';
import {merge, Subject} from 'rxjs';
import {
    delay,
    distinctUntilChanged,
    filter,
    map,
    startWith,
    switchMap,
    takeUntil,
} from 'rxjs/operators';

import {AbstractTuiInteractive} from './interactive';
import {AbstractTuiValueTransformer} from './value-transformer';

/**
 * Basic ControlValueAccessor class to build form components upon
 */
@Directive()
export abstract class AbstractTuiControl<T>
    extends AbstractTuiInteractive
    implements OnDestroy, OnInit, ControlValueAccessor
{
    private previousInternalValue?: T | null;
    private readonly refresh$ = new Subject();

    private onTouched = EMPTY_FUNCTION;

    private onChange = EMPTY_FUNCTION;

    protected readonly fallbackValue = this.getFallbackValue();

    protected readonly destroy$ = new Subject<void>();

    @Input()
    @HostBinding(`class._readonly`)
    @tuiDefaultProp()
    readOnly = false;

    @Input()
    @tuiDefaultProp()
    pseudoInvalid: boolean | null = null;

    constructor(
        @Optional()
        private readonly ngControl: NgControl | null,
        protected readonly cdr: ChangeDetectorRef,
        @Optional()
        @Inject(AbstractTuiValueTransformer)
        protected readonly valueTransformer?: TuiControlValueTransformer<T> | null,
    ) {
        super();

        if (ngDevMode && this.ngControl === null) {
            tuiAssert.assert(
                false,
                `NgControl not injected in ${this.constructor.name}!\n`,
                `Use [(ngModel)] or [formControl] or formControlName for correct work.`,
            );
        }

        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    protected abstract getFallbackValue(): T;

    @HostBinding(`class._invalid`)
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

    set value(value: T) {
        this.updateValue(value);
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

    get computedName(): string | null {
        return this.controlName?.toString() ?? null;
    }

    protected get controlName(): string | null {
        return this.ngControl?.name?.toString() ?? null;
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

    ngOnInit(): void {
        this.refresh$
            .pipe(
                delay(0),
                startWith(null),
                map(() => this.ngControl?.control),
                filter(tuiIsPresent),
                distinctUntilChanged(),
                switchMap(control => merge(control.valueChanges, control.statusChanges)),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.refreshLocalValue(this.safeCurrentValue);
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    checkControlUpdate(): void {
        this.cdr.markForCheck();
    }

    registerOnChange(onChange: (value: T | unknown) => void): void {
        this.onChange = (componentValue: T) => {
            onChange(this.toControlValue(componentValue));
        };

        this.refresh$.next();
    }

    registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }

    setDisabledState(): void {
        this.checkControlUpdate();
    }

    writeValue(value: T | null): void {
        const controlValue =
            this.ngControl instanceof NgModel && this.previousInternalValue === undefined
                ? this.ngControl.model
                : value;

        this.refreshLocalValue(this.fromControlValue(controlValue));
    }

    protected override updateFocused(focused: boolean): void {
        if (!focused) {
            this.controlMarkAsTouched();
        }

        super.updateFocused(focused);
    }

    /**
     * @deprecated use `value` setter
     */
    protected updateValue(value: T): void {
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

    private controlMarkAsTouched(): void {
        this.onTouched();
        this.checkControlUpdate();
    }

    private controlSetValue(value: T): void {
        this.onChange(value);
        this.checkControlUpdate();
    }

    private refreshLocalValue(value: T | null): void {
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

export function tuiAsControl<T>(useExisting: Type<AbstractTuiControl<T>>): Provider {
    return {
        provide: AbstractTuiControl,
        useExisting,
    };
}
