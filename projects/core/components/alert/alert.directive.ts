import {Directive} from '@angular/core';
import {TuiPopoverDirective} from '@taiga-ui/cdk/directives/popover';
import {tuiAsPopover} from '@taiga-ui/cdk/services';

import type {TuiAlertOptions} from './alert.interfaces';
import {TuiAlertService} from './alert.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiAlert]',
    inputs: ['options: tuiAlertOptions', 'open: tuiAlert'],
    outputs: ['openChange: tuiAlertChange'],
    providers: [tuiAsPopover(TuiAlertService)],
})
export class TuiAlertDirective<T> extends TuiPopoverDirective<TuiAlertOptions<T>> {}
