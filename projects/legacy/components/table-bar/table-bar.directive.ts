import {Directive} from '@angular/core';
import {TuiPopoverDirective} from '@taiga-ui/cdk/directives/popover';
import {tuiAsPopover} from '@taiga-ui/cdk/services';

import {type TuiTableBarOptions} from './table-bar.options';
import {TuiTableBarsService} from './table-bars.service';

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 * https://taiga-ui.dev/components/actions-bar
 */
@Directive({
    standalone: true,
    selector: 'ng-template[tuiTableBar]',
    inputs: ['open: tuiTableBar', 'options: tuiTableBarOptions'],
    outputs: ['openChange: tuiTableBarChange'],
    providers: [tuiAsPopover(TuiTableBarsService)],
})
export class TuiTableBarDirective extends TuiPopoverDirective<TuiTableBarOptions> {}
