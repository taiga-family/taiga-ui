import type {PipeTransform, Signal} from '@angular/core';
import {inject, Pipe, untracked} from '@angular/core';
import type {AbstractControl, ControlValueAccessor} from '@angular/forms';
import {ControlContainer, NgControl} from '@angular/forms';
import {tuiIsString, TuiObservablePipe, tuiPure, TuiValidationError} from '@taiga-ui/cdk';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {map, Observable, of} from 'rxjs';

const EMPTY_RECORD = {};

function unwrapObservable(
    content: Observable<PolymorpheusContent>,
    context: any,
): Observable<TuiValidationError | null> {
    return content.pipe(map(error => defaultError(error, context)));
}

function defaultError(content: PolymorpheusContent, context: any): TuiValidationError {
    return new TuiValidationError(content || '', context);
}

@Pipe({
    standalone: true,
    name: 'tuiFieldError',
    pure: false,
})
export class TuiFieldErrorPipe
    extends TuiObservablePipe
    implements PipeTransform, ControlValueAccessor
{
    private order: readonly string[] = [];
    private readonly parent = inject(NgControl, {skipSelf: true, optional: true});
    private readonly self = inject(NgControl, {self: true, optional: true});
    private readonly container = inject(ControlContainer, {optional: true});
    private readonly validationErrors = inject(TUI_VALIDATION_ERRORS);

    constructor() {
        super();

        if (this.self && !this.self.valueAccessor) {
            this.self.valueAccessor = this;
        }
    }

    public transform(order: readonly string[]): TuiValidationError | null {
        this.order = order;

        return this.computedError;
    }

    public registerOnChange(): void {}

    public registerOnTouched(): void {}

    public setDisabledState(): void {}

    public writeValue(): void {}

    protected get computedError(): TuiValidationError | null {
        return (this.invalid && this.touched && this.error) || null;
    }

    private get error(): TuiValidationError | null {
        const {errorId} = this;

        if (!errorId) {
            return null;
        }

        const firstError = this.controlErrors[errorId];
        const errorContent = this.validationErrors[errorId];
        const error = untracked(() => this.getError(firstError, errorContent));

        return error();
    }

    private get invalid(): boolean {
        return !!this.control?.invalid;
    }

    private get touched(): boolean {
        return !!this.control?.touched;
    }

    private get control(): AbstractControl | null | undefined {
        return this.self?.control || this.parent?.control || this.container?.control;
    }

    private get errorId(): string {
        return this.getErrorId(this.order, this.controlErrors);
    }

    private get controlErrors(): Record<string, unknown> {
        return this.control?.errors || EMPTY_RECORD;
    }

    @tuiPure
    private getError(
        context: any,
        content?: Observable<PolymorpheusContent> | PolymorpheusContent,
    ): Signal<TuiValidationError | null> {
        let error$: Observable<TuiValidationError | null>;

        if (context instanceof TuiValidationError) {
            error$ = of(context);
        } else if (content === undefined && tuiIsString(context)) {
            error$ = of(new TuiValidationError(context));
        } else if (content instanceof Observable) {
            error$ = unwrapObservable(content, context);
        } else if (content instanceof Function) {
            const message = content(context) as
                | Observable<PolymorpheusContent>
                | PolymorpheusContent;

            error$ =
                message instanceof Observable
                    ? unwrapObservable(message, context)
                    : of(defaultError(message, context));
        } else {
            error$ = of(defaultError(content, context));
        }

        return this.toSignal(error$, null);
    }

    @tuiPure
    private getErrorId(
        order: readonly string[],
        controlErrors: Record<string, unknown>,
    ): string {
        const id = order?.find(errorId => controlErrors[errorId]);
        const fallback = Object.keys(controlErrors)[0];

        return id || fallback || '';
    }
}
