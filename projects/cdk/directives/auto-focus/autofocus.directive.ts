import {AfterViewInit, Directive, Inject, Input} from '@angular/core';

import {
    TUI_AUTOFOCUS_HANDLER,
    TUI_AUTOFOCUS_PROVIDERS,
    TuiAutofocusHandler,
} from './autofocus.options';

// TODO: 3.0 change input name to tuiAutoFocus and handle empty string
@Directive({
    selector: '[tuiAutoFocus]',
    providers: TUI_AUTOFOCUS_PROVIDERS,
})
export class TuiAutoFocusDirective implements AfterViewInit {
    @Input()
    autoFocus = true;

    constructor(
        @Inject(TUI_AUTOFOCUS_HANDLER) private readonly handler: TuiAutofocusHandler,
    ) {}

    ngAfterViewInit(): void {
        if (this.autoFocus) {
            this.handler.setFocus();
        }
    }
}
