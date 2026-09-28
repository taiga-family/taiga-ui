import {Directive, ElementRef} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';

import {TUI_DROPDOWN_ANCHOR, TUI_DROPDOWN_HOST} from './dropdown.providers';

@Directive({
    providers: [
        tuiAsRectAccessor(TuiDropdownAnchor),
        tuiProvide(TUI_DROPDOWN_HOST, ElementRef),
        tuiProvide(TUI_DROPDOWN_ANCHOR, ElementRef),
    ],
    host: {
        '[attr.data-tui-anchor]': 'anchor',
        '[style.anchor-name]': 'anchor',
    },
})
export class TuiDropdownAnchor extends TuiRectAccessor {
    protected readonly el = tuiInjectElement();
    protected readonly anchor = `--${tuiGenerateId()}`;

    public readonly type = 'dropdown';

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }
}
