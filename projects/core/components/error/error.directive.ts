import {
    computed,
    Directive,
    inject,
    input,
    isSignal,
    type Signal,
    TemplateRef,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    type AbstractControl,
    type ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    type ValidationErrors,
    type Validator,
} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk/classes';
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
    selector:
        'tui-error[ngModel], tui-error[formControlName], tui-error[formControl], tui-error[formGroup], tui-error[formGroupName], tui-error[formArrayName], tui-error[formArray]',
    providers: [
        tuiProvide(NG_VALUE_ACCESSOR, TuiErrorDirective, true),
        tuiProvide(NG_VALIDATORS, TuiErrorDirective, true),
    ],
    hostDirectives: [TuiId],
    host: {
        'aria-live': 'polite',
        '(document:tui-validator.zoneless)': 'onValidator($event.detail)',
    },
})
export class TuiErrorDirective implements ControlValueAccessor, Validator {
    private readonly el = tuiInjectElement();
    private readonly content = inject(TUI_VALIDATION_ERRORS);
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

    public readonly order = input<readonly string[]>([]);

    public readonly error = tuiDirectiveBinding(
        TuiErrorComponent,
        'error',
        computed(
            (errors = this.errors() || null) =>
                errors && this.getError(errors[this.key()], this.content[this.key()]),
        ),
        {self: true, optional: true},
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

    private getError(
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
