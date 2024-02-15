import {AfterViewInit, Directive, inject, Input} from '@angular/core';
import {tuiCoerceBooleanProperty} from '@taiga-ui/cdk/coercion';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {takeUntil, timer} from 'rxjs';

import {
    TUI_AUTOFOCUS_HANDLER,
    TUI_AUTOFOCUS_OPTIONS,
    TUI_AUTOFOCUS_PROVIDERS,
} from './autofocus.options';

@Directive({
    selector: '[tuiAutoFocus]',
    providers: TUI_AUTOFOCUS_PROVIDERS,
})
export class TuiAutoFocusDirective implements AfterViewInit {
    private readonly handler = inject(TUI_AUTOFOCUS_HANDLER);
    private readonly options = inject(TUI_AUTOFOCUS_OPTIONS);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});

    @Input('tuiAutoFocus')
    autoFocus: boolean | '' = true;

    ngAfterViewInit(): void {
        if (tuiCoerceBooleanProperty(this.autoFocus)) {
            this.focus();
        }
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
