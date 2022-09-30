import {Directive, Input} from '@angular/core';
import {ALWAYS_TRUE_HANDLER} from '@taiga-ui/cdk';

import {AbstractTuiTableFilter} from './abstract-table-filter';

@Directive({
    selector: `[tuiGenericFilter]`,
    providers: [
        {
            provide: AbstractTuiTableFilter,
            useExisting: TuiGenericFilterDirective,
        },
    ],
})
export class TuiGenericFilterDirective<T, G> extends AbstractTuiTableFilter<T, G> {
    @Input()
    tuiGenericFilter: (item: T, value: G) => boolean = ALWAYS_TRUE_HANDLER;

    filter(item: T, value: G): boolean {
        return this.tuiGenericFilter(item, value);
    }
}
