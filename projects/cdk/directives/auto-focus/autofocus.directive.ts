import {AfterViewInit, Directive, Inject, Input} from '@angular/core';
import {tuiCoerceBooleanProperty} from '@taiga-ui/cdk/coercion';

import {
    TUI_AUTOFOCUS_HANDLER,
    TUI_AUTOFOCUS_PROVIDERS,
    TuiAutofocusHandler,
} from './autofocus.options';

@Directive({
    selector: `[tuiAutoFocus]`,
    providers: TUI_AUTOFOCUS_PROVIDERS,
})
export class TuiAutoFocusDirective implements AfterViewInit {
    @Input(`tuiAutoFocus`)
    autoFocus: '' | boolean = true;

    constructor(
        @Inject(TUI_AUTOFOCUS_HANDLER) private readonly handler: TuiAutofocusHandler,
    ) {}

    ngAfterViewInit(): void {
        if (tuiCoerceBooleanProperty(this.autoFocus)) {
            this.handler.setFocus();
        }
    }
}
