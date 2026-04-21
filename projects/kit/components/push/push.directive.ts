import {Directive} from '@angular/core';
import {tuiAsPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';

import {TuiPushService} from './push.service';

@Directive({
    selector: 'ng-template[tuiPush]',
    providers: [tuiAsPortal(TuiPushService)],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: ['open: tuiPush'],
        },
    ],
})
export class TuiPushDirective {}
