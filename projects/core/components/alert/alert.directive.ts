import {Directive, input} from '@angular/core';
import {tuiAsPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';

import {type TuiAlertOptions} from './alert.interfaces';
import {TuiAlertService} from './alert.service';

@Directive({
    selector: 'ng-template[tuiAlert]',
    providers: [tuiAsPortal(TuiAlertService)],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: ['options: tuiAlertOptions', 'open: tuiAlert'],
            outputs: ['openChange: tuiAlertChange'],
        },
    ],
})
export class TuiAlert<T> {
    public readonly tuiAlertOptions = input<Partial<TuiAlertOptions<T>>>({});
}
