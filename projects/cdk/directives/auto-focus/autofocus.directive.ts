import type {BooleanInput} from '@angular/cdk/coercion';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import type {AfterViewInit} from '@angular/core';
import {DestroyRef, Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {timer} from 'rxjs';

import {
    TUI_AUTOFOCUS_HANDLER,
    TUI_AUTOFOCUS_OPTIONS,
    TUI_AUTOFOCUS_PROVIDERS,
} from './autofocus.options';

@Directive({
    standalone: true,
    selector: '[tuiAutoFocus]',
    providers: TUI_AUTOFOCUS_PROVIDERS,
})
export class TuiAutoFocusDirective implements AfterViewInit {
    private readonly handler = inject(TUI_AUTOFOCUS_HANDLER);
    private readonly options = inject(TUI_AUTOFOCUS_OPTIONS);
    private readonly destroy$ = inject(DestroyRef);

    @Input({
        alias: 'tuiAutoFocus',
        transform: coerceBooleanProperty,
    })
    public autoFocus: BooleanInput;

    public ngAfterViewInit(): void {
        if (this.autoFocus) {
            this.focus();
        }
    }

    public focus(): void {
        if (Number.isNaN(this.options.delay)) {
            void Promise.resolve().then(() => this.handler.setFocus());
        } else {
            timer(this.options.delay)
                .pipe(takeUntilDestroyed(this.destroy$))
                .subscribe(() => this.handler.setFocus());
        }
    }
}
