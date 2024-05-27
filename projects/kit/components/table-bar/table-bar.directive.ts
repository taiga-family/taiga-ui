import {Directive} from '@angular/core';
import {tuiAsPopover, TuiPopoverDirective} from '@taiga-ui/cdk';

import type {TuiTableBarOptions} from './table-bar.options';
import {TuiTableBarsService} from './table-bars.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiTableBar]',
    inputs: ['open: tuiTableBar', 'options: tuiTableBarOptions'],
    outputs: ['openChange: tuiTableBarChange'],
    providers: [tuiAsPopover(TuiTableBarsService)],
})
export class TuiTableBarDirective extends TuiPopoverDirective<TuiTableBarOptions> {}
