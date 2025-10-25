import {
    ChangeDetectorRef,
    computed,
    Directive,
    inject,
    input,
    type Provider,
    signal,
    type Type,
    untracked,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    type ControlValueAccessor,
    type FormControlStatus,
    NgControl,
    NgModel,
} from '@angular/forms';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {TUI_FALLBACK_VALUE} from '@taiga-ui/cdk/tokens';
import {tuiProvide} from '@taiga-ui/cdk/utils';
import {
    delay,
    distinctUntilChanged,
    EMPTY,
    filter,
    map,
    merge,
    startWith,
    Subject,
    switchMap,
} from 'rxjs';

import {TUI_IDENTITY_VALUE_TRANSFORMER, TuiValueTransformer} from './value-transformer';

const FLAGS = {self: true, optional: true};

/**
 * Basic ControlValueAccessor class to build form components upon
 */
@Directive()
export abstract class TuiControl<T> implements ControlValueAccessor {
    private readonly fallback = inject(TUI_FALLBACK_VALUE, FLAGS) as T;
    private readonly refresh$ = new Subject<void>();
    private readonly internal = signal(this.fallback);

    protected readonly control = inject(NgControl, {self: true});
    protected readonly cdr = inject(ChangeDetectorRef);
    protected transformer =
        inject(TuiValueTransformer, FLAGS) ?? TUI_IDENTITY_VALUE_TRANSFORMER;

    public readonly value = computed(() => this.internal() ?? this.fallback);
    public readonly readOnly = input(false);
    public readonly pseudoInvalid = input<boolean | null>(null, {alias: 'invalid'});
    public readonly touched = signal(false);
    public readonly status = signal<FormControlStatus | undefined>(undefined);
    public readonly disabled = computed(() => this.status() === 'DISABLED');
    public readonly interactive = computed(() => !this.disabled() && !this.readOnly());
    public readonly invalid = computed(() =>
        this.pseudoInvalid() !== null
            ? !!this.pseudoInvalid() && this.interactive()
            : this.interactive() && this.touched() && this.status() === 'INVALID',
    );

    public readonly mode = computed(() =>
        // eslint-disable-next-line no-nested-ternary
        this.readOnly() ? 'readonly' : this.invalid() ? 'invalid' : 'valid',
    );

    public onTouched = EMPTY_FUNCTION;
    public onChange: (value: T) => void = EMPTY_FUNCTION;

    constructor() {
        this.control.valueAccessor = this;
        this.refresh$
            .pipe(
                delay(0),
                startWith(null),
                map(() => this.control.control),
                filter(Boolean),
                distinctUntilChanged(),
                switchMap((c) =>
                    merge(
                        c.valueChanges,
                        c.statusChanges,
                        (c as any).events || EMPTY,
                    ).pipe(startWith(null)),
                ),
                takeUntilDestroyed(),
            )
            .subscribe(() => this.update());
    }

    public registerOnChange(onChange: (value: unknown) => void): void {
        this.refresh$.next();

        this.onChange = (value: T) => {
            const internal = untracked(() => this.internal());

            if (value === internal) {
                return;
            }

            onChange(this.transformer.toControlValue(value));
            this.internal.set(value);
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
        // TODO: https://github.com/angular/angular/issues/14988
        const safe = this.control instanceof NgModel ? this.control.model : value;

        this.internal.set(this.transformer.fromControlValue(safe));
        this.update();
    }

    private update(): void {
        this.status.set(this.control.control?.status);
        this.touched.set(!!this.control.control?.touched);
        this.cdr.markForCheck();
    }
}

export function tuiAsControl<T>(control: Type<TuiControl<T>>): Provider {
    return tuiProvide(TuiControl, control);
}
