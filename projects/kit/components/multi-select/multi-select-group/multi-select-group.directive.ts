import {Directive} from '@angular/core';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';

import {TuiMultiSelectOption} from '../multi-select-option/multi-select-option.component';

@Directive({
    selector: '[tuiMultiSelectGroup]',
    providers: [tuiAsOptionContent(TuiMultiSelectOption)],
})
export class TuiMultiSelectGroupDirective {}
