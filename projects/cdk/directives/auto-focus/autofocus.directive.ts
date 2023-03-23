import type {AfterViewInit} from '@angular/core';
import {Directive, Inject, Input} from '@angular/core';
import {tuiCoerceBooleanProperty} from '@taiga-ui/cdk/coercion';

import type {TuiAutofocusHandler} from './autofocus.options';
import {TUI_AUTOFOCUS_HANDLER, TUI_AUTOFOCUS_PROVIDERS} from './autofocus.options';

@Directive({
    selector: '[tuiAutoFocus]',
    providers: TUI_AUTOFOCUS_PROVIDERS,
})
export class TuiAutoFocusDirective implements AfterViewInit {
    @Input('tuiAutoFocus')
    autoFocus: boolean | '' = true;

    constructor(
        @Inject(TUI_AUTOFOCUS_HANDLER)
        private readonly handler: TuiAutofocusHandler,
    ) {}

    ngAfterViewInit(): void {
        if (tuiCoerceBooleanProperty(this.autoFocus)) {
            this.focus();
        }
    }

    focus(): void {
        void Promise.resolve().then(() => this.handler.setFocus());
    }
}
