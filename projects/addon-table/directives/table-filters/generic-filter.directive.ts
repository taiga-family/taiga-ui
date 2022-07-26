import {Directive, Input} from '@angular/core';
import {TuiCheck} from '@taiga-ui/addon-table/interfaces';
import {TUI_TABLE_FILTER} from '@taiga-ui/addon-table/tokens';
import {ALWAYS_TRUE_HANDLER} from '@taiga-ui/cdk';

@Directive({
    selector: '[tuiGenericFilter]',
    providers: [
        {
            provide: TUI_TABLE_FILTER,
            useExisting: TuiGenericFilterDirective,
        },
    ],
})
export class TuiGenericFilterDirective implements TuiCheck {
    @Input()
    tuiGenericFilter: (item: any, value: any) => boolean = ALWAYS_TRUE_HANDLER;

    check(item: any, value: any): boolean {
        return this.tuiGenericFilter(item, value);
    }
}
