import {Directive} from '@angular/core';
import {tuiAsPopover, TuiPopoverDirective} from '@taiga-ui/cdk';

import {TuiActionsBarsService} from './actions-bars.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiActionsBar]',
    inputs: ['open: tuiActionsBar'],
    outputs: ['openChange: tuiActionsBarChange'],
    providers: [tuiAsPopover(TuiActionsBarsService)],
})
export class TuiActionsBarDirective extends TuiPopoverDirective<void> {}
