import {Directive} from '@angular/core';
import {TUI_OPTION_CONTENT} from '@taiga-ui/core';

// TODO: Remove and switch to viewProviders when Angular is updated to Ivy
/** @deprecated */
@Directive({
    selector: '[tuiMultiSelectGroupReset]',
    providers: [
        {
            provide: TUI_OPTION_CONTENT,
            useValue: null,
        },
    ],
})
export class TuiMultiSelectGroupResetDirective {}
