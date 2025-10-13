import {DestroyRef, Directive, inject} from '@angular/core';
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
export class TuiPushDirective {
    private readonly sub = inject(TuiPortalDirective).openChange.subscribe(() => {});

    constructor() {
        inject(DestroyRef).onDestroy(() => this.sub.unsubscribe());
    }
}
