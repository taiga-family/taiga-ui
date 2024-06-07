import type {Provider, Type} from '@angular/core';
import {
    ChangeDetectorRef,
    computed,
    DestroyRef,
    Directive,
    effect,
    inject,
    Input,
    signal,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {ControlValueAccessor, FormControlStatus} from '@angular/forms';
import {NgControl, NgModel} from '@angular/forms';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {TUI_FALLBACK_VALUE} from '@taiga-ui/cdk/tokens';
import {tuiIsPresent, tuiProvide, tuiPure} from '@taiga-ui/cdk/utils';
import {
    delay,
    distinctUntilChanged,
    filter,
    map,
    merge,
    startWith,
    Subject,
    switchMap,
} from 'rxjs';

import {TuiValueTransformer} from './value-transformer';

/**
 * Basic ControlValueAccessor class to build form components upon
 */
@Directive()
export abstract class TuiControl<T> implements ControlValueAccessor {
    private readonly pseudoInvalid = signal<boolean | null>(null);

    private readonly ngControl = inject(NgControl, {self: true});
    private readonly refresh$ = new Subject<void>();

    protected onChange = EMPTY_FUNCTION;

    protected readonly destroyRef = inject(DestroyRef);
    protected readonly cdr = inject(ChangeDetectorRef);
    protected readonly transformer = inject<TuiValueTransformer<T>>(TuiValueTransformer, {
        optional: true,
    });

    public readonly value = signal(
        inject(TUI_FALLBACK_VALUE, {self: true, optional: true}) as T,
    );

    public readonly readOnly = signal(false);
    public readonly touched = signal(false);
    public readonly status = signal<FormControlStatus | undefined>(undefined);
    public readonly disabled = computed(() => this.status() === 'DISABLED');
    public readonly interactive = computed(() => !this.disabled() && !this.readOnly());
    public readonly invalid = computed(() =>
        this.interactive() && this.pseudoInvalid() !== null
            ? !!this.pseudoInvalid()
            : this.touched() && this.status() === 'INVALID',
    );

    public readonly mode = computed(() =>
        // eslint-disable-next-line no-nested-ternary
        this.readOnly() ? 'readonly' : this.invalid() ? 'invalid' : 'valid',
    );

    public onTouched = EMPTY_FUNCTION;

    constructor() {
        effect(() => this.onChange(this.value()), {allowSignalWrites: true});
        this.ngControl.valueAccessor = this;
        this.refresh$
            .pipe(
                delay(0),
                startWith(null),
                map(() => this.ngControl.control),
                filter(tuiIsPresent),
                distinctUntilChanged(),
                switchMap(control => merge(control.valueChanges, control.statusChanges)),
                filter(
                    () =>
                        this.safeValue() !== this.value() ||
                        this.ngControl.status !== this.status(),
                ),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => {
                this.value.set(this.safeValue());
                this.update();
            });
    }

    @Input('readOnly')
    public set readOnlySetter(readOnly: boolean) {
        this.readOnly.set(readOnly);
    }

    @Input('invalid')
    public set invalidSetter(invalid: boolean | null) {
        this.pseudoInvalid.set(invalid);
    }

    public registerOnChange(onChange: (value: T | unknown) => void): void {
        this.refresh$.next();

        this.onChange = (value: T) => {
            onChange(this.toControlValue(value));
            this.update();
        };
    }

    public registerOnTouched(onTouched: () => void): void {
        this.onTouched = () => {
            onTouched();
            this.update();
        };
    }

    public setDisabledState(): void {
        this.update();
    }

    public writeValue(value: T | null): void {
        this.value.set(this.safeValue(value));
        this.update();
    }

    @tuiPure
    private fromControlValue(value: unknown): T {
        return this.transformer ? this.transformer.fromControlValue(value) : (value as T);
    }

    @tuiPure
    private toControlValue(value: T): unknown {
        return this.transformer ? this.transformer.toControlValue(value) : value;
    }

    private safeValue(value: T | null = this.ngControl.value): T {
        return this.fromControlValue(
            this.ngControl instanceof NgModel ? this.ngControl.model : value,
        );
    }

    private update(): void {
        this.status.set(this.ngControl.control?.status);
        this.touched.set(!!this.ngControl.control?.touched);
        this.cdr.markForCheck();
    }
}

// TODO: Rename as tuiAsControl when old control is moved to legacy before 4.0
export function tuiAsSignalControl<T>(control: Type<TuiControl<T>>): Provider {
    return tuiProvide(TuiControl, control);
}
