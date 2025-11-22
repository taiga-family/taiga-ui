import {Directive, inject, Injectable, input} from '@angular/core';
import {tuiAsPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';
import {TuiAlertService} from '@taiga-ui/core/portals/alert';

import {TuiNotificationComponent} from './notification.component';
import {
    TUI_NOTIFICATION_CONCURRENCY,
    TUI_NOTIFICATION_OPTIONS,
    type TuiNotificationOptions,
} from './notification.options';

@Injectable({
    providedIn: 'root',
})
export class TuiNotificationService extends TuiAlertService<TuiNotificationOptions<any>> {
    protected override readonly options = inject(TUI_NOTIFICATION_OPTIONS);
    protected override readonly component = TuiNotificationComponent;

    constructor() {
        super(inject(TUI_NOTIFICATION_CONCURRENCY));
    }
}

@Directive({
    selector: 'ng-template[tuiNotification]',
    providers: [tuiAsPortal(TuiNotificationService)],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: ['options: tuiNotificationOptions', 'open: tuiNotification'],
            outputs: ['openChange: tuiNotificationChange'],
        },
    ],
})
export class TuiNotificationTemplate<T> {
    public readonly tuiNotificationOptions = input<Partial<TuiNotificationOptions<T>>>(
        {},
    );
}
