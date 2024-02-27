import {inject, Pipe, PipeTransform} from '@angular/core';
import {
    AbstractControl,
    ControlContainer,
    ControlValueAccessor,
    NgControl,
} from '@angular/forms';
import {tuiIsString, tuiPure, TuiValidationError} from '@taiga-ui/cdk';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {map, Observable, of} from 'rxjs';

const EMPTY_RECORD = {};

function unwrapObservable(
    content: Observable<PolymorpheusContent>,
    context: any,
): Observable<TuiValidationError> {
    return content.pipe(map(error => new TuiValidationError(error || '', context)));
}

function defaultError(
    content: PolymorpheusContent,
    context: any,
): Observable<TuiValidationError> {
    return of(new TuiValidationError(content || '', context));
}

@Pipe({
    name: 'tuiFieldError',
    pure: false,
})
export class TuiFieldErrorPipe implements PipeTransform, ControlValueAccessor {
    private order: readonly string[] = [];
    private readonly parent = inject(NgControl, {skipSelf: true, optional: true});
    private readonly self = inject(NgControl, {self: true, optional: true});
    private readonly container = inject(ControlContainer, {optional: true});
    private readonly validationErrors = inject(TUI_VALIDATION_ERRORS);

    constructor() {
        if (this.self && !this.self.valueAccessor) {
            this.self.valueAccessor = this;
        }
    }

    public transform(order: readonly string[]): Observable<TuiValidationError | null> {
        this.order = order;

        return this.computedError;
    }

    protected get computedError(): Observable<TuiValidationError | null> {
        return (this.invalid && this.touched && this.error) || of(null);
    }

    public registerOnChange(): void {}

    public registerOnTouched(): void {}

    public setDisabledState(): void {}

    public writeValue(): void {}

    private get error(): Observable<TuiValidationError> | null {
        const {errorId} = this;

        if (!errorId) {
            return null;
        }

        const firstError = this.controlErrors[errorId];
        const errorContent = this.validationErrors[errorId];

        return this.getError(firstError, errorContent);
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
    private getErrorId(
        order: readonly string[],
        controlErrors: Record<string, unknown>,
    ): string {
        const id = order?.find(errorId => controlErrors[errorId]);
        const fallback = Object.keys(controlErrors)[0];

        return id || fallback || '';
    }

    @tuiPure
    private getError(
        context: any,
        content?: Observable<PolymorpheusContent> | PolymorpheusContent,
    ): Observable<TuiValidationError> {
        if (context instanceof TuiValidationError) {
            return of(context);
        }

        if (content === undefined && tuiIsString(context)) {
            return of(new TuiValidationError(context));
        }

        if (content instanceof Observable) {
            return unwrapObservable(content, context);
        }

        if (content instanceof Function) {
            const message = content(context) as
                | Observable<PolymorpheusContent>
                | PolymorpheusContent;

            return message instanceof Observable
                ? unwrapObservable(message, context)
                : defaultError(message, context);
        }

        return defaultError(content, context);
    }
}
