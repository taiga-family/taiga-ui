import {Directive, Input} from '@angular/core';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

import {AbstractTuiTableFilter} from './abstract-table-filter';

@Directive({
    standalone: true,
    selector: '[tuiGenericFilter]',
    providers: [tuiProvide(AbstractTuiTableFilter, TuiGenericFilterDirective)],
})
export class TuiGenericFilterDirective<T, G> extends AbstractTuiTableFilter<T, G> {
    @Input('tuiGenericFilter')
    public filter: (item: T, value: G) => boolean = TUI_TRUE_HANDLER;
}
