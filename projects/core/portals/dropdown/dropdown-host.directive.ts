import {Directive, ElementRef} from '@angular/core';
import {tuiGenerateId, tuiProvide} from '@taiga-ui/cdk/utils';

import {TUI_DROPDOWN_ANCHOR, TUI_DROPDOWN_HOST} from './dropdown.providers';

@Directive({
    providers: [
        tuiProvide(TUI_DROPDOWN_HOST, ElementRef),
        tuiProvide(TUI_DROPDOWN_ANCHOR, ElementRef),
    ],
    host: {
        '[attr.data-tui-anchor]': 'anchor',
        '[style.anchor-name]': 'anchor',
    },
})
export class TuiDropdownHost {
    protected readonly anchor = `--${tuiGenerateId()}`;
}
