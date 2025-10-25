import {type BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {type AfterViewInit, DestroyRef, Directive, inject, input} from '@angular/core';
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
export class TuiAutoFocus implements AfterViewInit {
    private readonly handler = inject(TUI_AUTOFOCUS_HANDLER);
    private readonly options = inject(TUI_AUTOFOCUS_OPTIONS);
    private readonly destroyRef = inject(DestroyRef);

    public readonly autoFocus = input<BooleanInput, any>(undefined, {
        alias: 'tuiAutoFocus',
        transform: coerceBooleanProperty,
    });

    public ngAfterViewInit(): void {
        if (this.autoFocus()) {
            this.focus();
        }
    }

    public focus(): void {
        if (Number.isNaN(this.options.delay)) {
            void Promise.resolve().then(() => this.handler.setFocus());
        } else {
            timer(this.options.delay)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe(() => this.handler.setFocus());
        }
    }
}
