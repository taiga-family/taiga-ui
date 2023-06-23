import {AfterViewInit, Directive, Inject, Input, OnDestroy, Self} from '@angular/core';
import {tuiCoerceBooleanProperty} from '@taiga-ui/cdk/coercion';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {
    TUI_AUTOFOCUS_HANDLER,
    TUI_AUTOFOCUS_OPTIONS,
    TUI_AUTOFOCUS_PROVIDERS,
    TuiAutofocusHandler,
    TuiAutofocusOptions,
} from './autofocus.options';

@Directive({
    selector: '[tuiAutoFocus]',
    providers: TUI_AUTOFOCUS_PROVIDERS,
})
export class TuiAutoFocusDirective implements AfterViewInit, OnDestroy {
    @Input('tuiAutoFocus')
    autoFocus: boolean | '' = true;

    constructor(
        @Inject(TUI_AUTOFOCUS_HANDLER)
        private readonly handler: TuiAutofocusHandler,
        @Inject(TUI_AUTOFOCUS_OPTIONS)
        private readonly options: TuiAutofocusOptions,
        @Self()
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
    ) {}

    ngAfterViewInit(): void {
        if (tuiCoerceBooleanProperty(this.autoFocus)) {
            this.focus();
        }
    }

    ngOnDestroy(): void {
        this.handler.destroy?.();
    }

    focus(): void {
        if (Number.isNaN(this.options.delay)) {
            void Promise.resolve().then(() => this.handler.setFocus());
        } else {
            timer(this.options.delay)
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.handler.setFocus());
        }
    }
}
