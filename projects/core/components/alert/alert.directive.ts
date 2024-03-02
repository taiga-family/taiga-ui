import {Directive} from '@angular/core';
import {tuiAsPopover, TuiPopoverDirective} from '@taiga-ui/cdk';

import {type TuiAlertOptions} from './alert.interfaces';
import {TuiAlertService} from './alert.service';

@Directive({
    selector: 'ng-template[tuiAlert]',
    inputs: ['options: tuiAlertOptions', 'open: tuiAlert'],
    outputs: ['openChange: tuiAlertChange'],
    providers: [tuiAsPopover(TuiAlertService)],
})
export class TuiAlertDirective<T> extends TuiPopoverDirective<TuiAlertOptions<T>> {}
