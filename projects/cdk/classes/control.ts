import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {
    ChangeDetectorRef,
    computed,
    Directive,
    effect,
    inject,
    input,
    type Provider,
    signal,
    type Type,
    untracked,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    AbstractControl,
    type ControlValueAccessor,
    type FormControlStatus,
    NgControl,
    NgModel,
} from '@angular/forms';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {TUI_FALLBACK_VALUE} from '@taiga-ui/cdk/tokens';
import {tuiInjectFormField, tuiProvide} from '@taiga-ui/cdk/utils/di';
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

import {TUI_IDENTITY_VALUE_TRANSFORMER, TuiValueTransformer} from './value-transformer';

const FLAGS = {self: true, optional: true};

/**
 * Basic ControlValueAccessor class to build form components upon
 *
 * TODO(v6): implement `FormValueControl` from `@angular/forms/signals` once Angular 22 is the
 * minimal supported version. Most of the existed logic below goes away.
 *
 * [According to documentation](https://angular.dev/guide/forms/signals/migration#custom-controls):
 * > Any custom Signal Form Control can be used with Reactive (and Template-Driven) Forms as-is
 *
 * ```ts
 * export abstract class TuiControl<T> implements FormValueControl<T> {
 *     private readonly fallback = inject(TUI_FALLBACK_VALUE, FLAGS) as T;
 *
 *     protected transformer =
 *         inject(TuiValueTransformer, FLAGS) ?? TUI_IDENTITY_VALUE_TRANSFORMER;
 *
 *     public readonly disabled = input(false);
 *     public readonly invalid = input(false);
 *     public readonly touched = input(false);
 *     public readonly readonly = input(false);
 *     public readonly touch = output<void>();
 *
 *     public readonly value = model(this.fallback);
 *
 *     // https://angular.dev/guide/forms/signals/custom-controls#value-transformation
 *     // https://angular.dev/api/forms/signals/transformedValue
 *     protected readonly rawValue = transformedValue(this.value, {
 *         parse: (raw: T) => ({value: this.transformer.toControlValue(raw)}),
 *         format: (value) => this.transformer.fromControlValue(value),
 *     });
 *
 *     reset() {
 *         // [...]
 *     }
 *
 *     // [...]
 * }
 * ```
 */
@Directive()
export abstract class TuiControl<T> implements ControlValueAccessor {
    private readonly fallback = inject(TUI_FALLBACK_VALUE, FLAGS) as T;
    private readonly refresh$ = new Subject<void>();
    private readonly internal = signal(this.fallback);

    protected readonly control = inject(NgControl, {self: true});
    protected readonly cdr = inject(ChangeDetectorRef);
    protected readonly field = tuiInjectFormField(FLAGS);

    protected transformer =
        inject(TuiValueTransformer, FLAGS) ?? TUI_IDENTITY_VALUE_TRANSFORMER;

    public readonly value = computed(() => this.internal() ?? this.fallback);

    /**
     * @deprecated use `<input [readonly]="..." />` instead
     * TODO(v6): delete
     */
    public readonly readOnlyLegacy = input(false, {alias: 'readOnly'});
    /**
     * TODO(v6): delete, it's only for backward compatibility
     */
    public readonly readOnly = computed(() => this.readonly() || this.readOnlyLegacy());
    public readonly readonly = input(false, {transform: coerceBooleanProperty});
    /**
     * @deprecated use `<tui-textfield [invalid]="..." />` instead
     * TODO(v6): delete
     */
    public readonly pseudoInvalid = input<boolean | null>(undefined, {alias: 'invalid'});
    /**
     * @deprecated internal purpose only
     * TODO(v6): delete when `TuiControl[pseudoInvalid]` is deleted
     */
    public readonly externalInvalid = signal<boolean | null>(null);
    public readonly touched = signal(false);
    public readonly status = signal<FormControlStatus | undefined>(undefined);
    public readonly disabled = computed(() => this.status() === 'DISABLED');
    public readonly interactive = computed(() => !this.disabled() && !this.readOnly());

    public readonly invalid = computed(() => {
        const pseudoInvalid =
            this.externalInvalid() ?? (this.field() ? null : this.pseudoInvalid());

        return pseudoInvalid == null
            ? this.interactive() && this.touched() && this.status() === 'INVALID'
            : pseudoInvalid && this.interactive();
    });

    public readonly mode = computed(() =>
        // eslint-disable-next-line no-nested-ternary
        this.readOnly() ? 'readonly' : this.invalid() ? 'invalid' : 'valid',
    );

    public onTouched = EMPTY_FUNCTION;
    public onChange: (value: T) => void = EMPTY_FUNCTION;

    constructor() {
        this.control.valueAccessor = this;
        /**
         * Signal forms provide a fake `NgControl` which is not an `AbstractControl` and has no
         * observables — its state is exposed as signals, so reading it here subscribes to them.
         * For an `AbstractControl` nothing is tracked and this only makes the initial update.
         */
        effect(() => this.update());
        this.refresh$
            .pipe(
                delay(0),
                startWith(null),
                map(() => this.control.control),
                filter((c) => c instanceof AbstractControl),
                distinctUntilChanged(),
                switchMap((c) =>
                    merge(c.valueChanges, c.statusChanges, c.events).pipe(
                        startWith(null),
                    ),
                ),
                takeUntilDestroyed(),
            )
            .subscribe(() => this.update());
    }

    public registerOnChange(onChange: (value: unknown) => void): void {
        this.refresh$.next();

        this.onChange = (value: T) => {
            const internal = untracked(this.internal);

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
