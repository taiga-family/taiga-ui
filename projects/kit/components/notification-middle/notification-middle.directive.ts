import {Directive} from '@angular/core';
import {TuiPopoverDirective} from '@taiga-ui/cdk/directives/popover';
import {tuiAsPopover} from '@taiga-ui/cdk/services';

import {type TuiNotificationMiddleOptions} from './notification-middle.component';
import {TuiNotificationMiddleService} from './notification-middle.service';

@Directive({
    selector: 'ng-template[tuiNotificationMiddle]',
    inputs: ['options: tuiNotificationMiddleOptions', 'open: tuiNotificationMiddle'],
    outputs: ['openChange: tuiNotificationMiddleChange'],
    providers: [tuiAsPopover(TuiNotificationMiddleService)],
})
export class TuiNotificationMiddle extends TuiPopoverDirective<TuiNotificationMiddleOptions> {}
