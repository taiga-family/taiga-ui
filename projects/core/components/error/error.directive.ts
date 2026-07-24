import {
    computed,
    Directive,
    inject,
    input,
    isSignal,
    model,
    type Signal,
    TemplateRef,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    type AbstractControl,
    type ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    NgControl,
    type ValidationErrors,
    type Validator,
} from '@angular/forms';
import {
    type TuiFormValueControl,
    type TuiSignalValidationError,
    TuiValidationError,
} from '@taiga-ui/cdk/classes';
import {TuiId} from '@taiga-ui/cdk/directives/id';
import {type TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiDirectiveBinding, tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/core/tokens';
import {
    PolymorpheusComponent,
    type PolymorpheusContent,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';
import {
    BehaviorSubject,
    distinctUntilChanged,
    filter,
    map,
    startWith,
    switchMap,
} from 'rxjs';

import {TuiErrorComponent} from './error.component';

@Directive({
    hostDirectives: [TuiId],
    host: {'aria-live': 'polite'},
})
export abstract class AbstractTuiErrorDirective {
    protected abstract readonly error: Signal<TuiValidationError | null>;
    protected readonly el = tuiInjectElement();
    protected readonly content = inject(TUI_VALIDATION_ERRORS);

    public readonly order = input<readonly string[]>([]);

    protected readonly $ = tuiDirectiveBinding(
        TuiErrorComponent,
        'error',
        computed(() => this.error()),
        {self: true, optional: true},
    );

    protected getError(
        context: unknown,
        content?: PolymorpheusContent | Signal<PolymorpheusContent>,
    ): TuiValidationError {
        context = isSignal(context) ? context() : context;

        if (context instanceof TuiValidationError) {
            return context;
        }

        if (content === undefined && isContent(context)) {
            return getError(context);
        }

        if (isSignal(content)) {
            return getError(content(), context);
        }

        if (content instanceof Function) {
            const message = content(context);

            return getError(isSignal(message) ? message() : message, context);
        }

        return getError(content, context);
    }
}

@Directive({
    selector:
        'tui-error[ngModel], tui-error[formControlName], tui-error[formControl], tui-error[formGroup], tui-error[formGroupName], tui-error[formArrayName], tui-error[formArray]',
    providers: [
        tuiProvide(NG_VALUE_ACCESSOR, TuiErrorDirective, true),
        tuiProvide(NG_VALIDATORS, TuiErrorDirective, true),
    ],
    host: {'(document:tui-validator.zoneless)': 'onValidator($event.detail)'},
})
export class TuiErrorDirective
    extends AbstractTuiErrorDirective
    implements ControlValueAccessor, Validator
{
    private readonly control = new BehaviorSubject<AbstractControl | null>(null);
    private readonly errors = toSignal(
        this.control.pipe(
            filter(Boolean),
            distinctUntilChanged(),
            switchMap((control) =>
                control.events.pipe(
                    startWith(null),
                    map(() => !control.disabled && control.touched && control.errors),
                ),
            ),
        ),
    );

    private readonly key = computed(
        (errors = this.errors() || {}) =>
            this.order().find((id) => errors[id]) || Object.keys(errors)[0] || '',
    );

    public readonly error = computed(
        (errors = this.errors() || null) =>
            errors && this.getError(errors[this.key()], this.content[this.key()]),
    );

    public registerOnChange(): void {}

    public registerOnTouched(): void {}

    public writeValue(): void {}

    public validate(control: AbstractControl): ValidationErrors | null {
        this.control.next(control);

        return null;
    }

    protected onValidator(validator: TuiNativeValidator): void {
        if (this.control.value && validator.control === this.control.value) {
            validator.id = this.el.id;
        }
    }
}

@Directive({
    selector: 'tui-error[formField]',
    host: {'(document:tui-validator.zoneless)': 'onValidator($event.detail)'},
})
export class TuiErrorField
    extends AbstractTuiErrorDirective
    implements TuiFormValueControl<unknown>
{
    // TODO: use inject(FORM_FIELD) from `@angular/forms/signals`
    // @ts-expect-error
    private readonly field = inject(NgControl, {self: true}).field;

    public readonly errors = input<readonly TuiSignalValidationError[]>([]);
    public readonly disabled = input(false);
    public readonly touched = input(false);
    public readonly value = model<unknown>(null);

    public readonly error = computed((errors = this.errors()) => {
        if (!this.touched()) {
            return null;
        }

        const kind = this.order().find((id) => errors.find(({kind}) => kind === id));
        const error = kind ? errors.find((x) => x.kind === kind) : errors[0];

        return error
            ? this.getError(error, error.message ?? this.content[error.kind])
            : null;
    });

    protected onValidator(validator: TuiNativeValidator): void {
        /**
         * Signal forms have no `AbstractControl`: `inject(NgControl)` returns Angular's internal
         * `InteropNgControl`, and every `[formField]` builds ITS OWN INSTANCE. So two bindings of the
         * same field hold two different controls, and comparing them by identity is meaningless:
         *
         * ```html
         * <input [formField]="form.name" />
         * <tui-error [formField]="form.name" />
         * ```
         *
         * What they do share is the `FieldState` behind them, but the only way to it is the
         * undocumented `field` property — hence the index access.
         *
         * TODO: read the state through the public `FORM_FIELD` token once Taiga UI drops Angular < 22
         * https://angular.dev/api/forms/signals/FORM_FIELD
         */
        // @ts-ignore
        const validatorField = validator.control.field?.();
        const field = this.field?.();

        if (field && validatorField === field) {
            validator.id = this.el.id;
        }
    }
}

function getError(content: unknown = '', context?: any): TuiValidationError {
    return new TuiValidationError(content as PolymorpheusContent, context);
}

function isContent(value: unknown): value is PolymorpheusContent {
    return (
        tuiIsString(value) ||
        value instanceof TemplateRef ||
        value instanceof PolymorpheusTemplate ||
        value instanceof PolymorpheusComponent
    );
}
