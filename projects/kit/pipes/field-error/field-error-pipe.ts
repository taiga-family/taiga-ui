import type {Injector, PipeTransform, Signal} from '@angular/core';
import {inject, INJECTOR, Pipe, signal, untracked} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import type {AbstractControl, ControlValueAccessor} from '@angular/forms';
import {ControlContainer, NgControl} from '@angular/forms';
import {tuiIsString, tuiPure, TuiValidationError} from '@taiga-ui/cdk';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {map, Observable, Subject, takeUntil} from 'rxjs';

const EMPTY_RECORD = {};

function unwrapObservable(
    content: Observable<PolymorpheusContent>,
    context: any,
    injector: Injector,
): Signal<TuiValidationError | null> {
    return toSignal(
        content.pipe(map(error => new TuiValidationError(error || '', context))),
        {
            initialValue: null,
            injector,
        },
    );
}

function defaultError(
    content: PolymorpheusContent,
    context: any,
): Signal<TuiValidationError> {
    return signal(new TuiValidationError(content || '', context));
}

@Pipe({
    standalone: true,
    name: 'tuiFieldError',
    pure: false,
})
export class TuiFieldErrorPipe implements PipeTransform, ControlValueAccessor {
    private order: readonly string[] = [];
    private readonly parent = inject(NgControl, {skipSelf: true, optional: true});
    private readonly self = inject(NgControl, {self: true, optional: true});
    private readonly container = inject(ControlContainer, {optional: true});
    private readonly validationErrors = inject(TUI_VALIDATION_ERRORS);
    private readonly injector = inject(INJECTOR);
    private readonly destroy$ = new Subject<void>();

    constructor() {
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
        this.destroy$.next();

        if (context instanceof TuiValidationError) {
            return signal(context);
        }

        if (content === undefined && tuiIsString(context)) {
            return signal(new TuiValidationError(context));
        }

        if (content instanceof Observable) {
            return unwrapObservable(
                content.pipe(takeUntil(this.destroy$)),
                context,
                this.injector,
            );
        }

        if (content instanceof Function) {
            const message = content(context) as
                | Observable<PolymorpheusContent>
                | PolymorpheusContent;

            return message instanceof Observable
                ? unwrapObservable(
                      message.pipe(takeUntil(this.destroy$)),
                      context,
                      this.injector,
                  )
                : defaultError(message, context);
        }

        return defaultError(content, context);
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
