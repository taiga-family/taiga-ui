import {Directive, input} from '@angular/core';
import {tuiAsPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';

import {type TuiNotificationMiddleOptions} from './notification-middle.component';
import {TuiNotificationMiddleService} from './notification-middle.service';

@Directive({
    selector: 'ng-template[tuiNotificationMiddle]',
    providers: [tuiAsPortal(TuiNotificationMiddleService)],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: [
                'options: tuiNotificationMiddleOptions',
                'open: tuiNotificationMiddle',
            ],
            outputs: ['openChange: tuiNotificationMiddleChange'],
        },
    ],
})
export class TuiNotificationMiddle {
    public readonly tuiNotificationMiddleOptions = input<
        Partial<TuiNotificationMiddleOptions>
    >({});
}
