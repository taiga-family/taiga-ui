import {Directive, input} from '@angular/core';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

import {AbstractTuiTableFilter} from './abstract-table-filter';

@Directive({
    selector: '[tuiGenericFilter]',
    providers: [tuiProvide(AbstractTuiTableFilter, TuiGenericFilter)],
})
export class TuiGenericFilter<T, G> extends AbstractTuiTableFilter<T, G> {
    public readonly tuiGenericFilter =
        input<(item: T, value: G) => boolean>(TUI_TRUE_HANDLER);

    public filter: (item: T, value: G) => boolean = this.tuiGenericFilter();
}
