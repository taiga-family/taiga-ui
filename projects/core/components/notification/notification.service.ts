import {Directive, inject, Injectable, input} from '@angular/core';
import {
    tuiAsPortal,
    TuiPortalDirective,
    type TuiPortalService,
} from '@taiga-ui/cdk/portals';
import {TuiAlertService} from '@taiga-ui/core/portals/alert';
import {TuiPopupService} from '@taiga-ui/core/portals/popup';

import {TuiNotificationComponent} from './notification.component';
import {
    TUI_NOTIFICATION_CONCURRENCY,
    TUI_NOTIFICATION_OPTIONS,
    type TuiNotificationOptions,
} from './notification.options';

@Injectable({
    providedIn: 'root',
    deps: [TuiPopupService],
    useClass: TuiNotificationService,
})
export class TuiNotificationService extends TuiAlertService<TuiNotificationOptions<any>> {
    protected override readonly options = inject(TUI_NOTIFICATION_OPTIONS);
    protected override readonly component = TuiNotificationComponent;

    // eslint-disable-next-line @angular-eslint/prefer-inject
    constructor(service: TuiPortalService) {
        super(inject(TUI_NOTIFICATION_CONCURRENCY), service);
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
