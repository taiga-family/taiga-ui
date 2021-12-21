import {Component, Inject, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {AlertExampleWithCustomLabelComponent} from './alert-example-with-custom-label/alert-example-with-custom-label.component';
import {CustomLabelComponent} from './custom-label/custom-label.component';

@Component({
    selector: 'tui-notifications-example-5',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiNotificationsExampleComponent5 {
    readonly notification: Observable<void>;
    readonly notificationWithCustomLabel: Observable<void>;

    constructor(
        @Inject(TuiNotificationsService) notificationsService: TuiNotificationsService,
        @Inject(Router) router: Router,
        @Inject(Injector) private readonly injector: Injector,
    ) {
        this.notification = notificationsService
            .show<undefined>(
                new PolymorpheusComponent(
                    AlertExampleWithCustomLabelComponent,
                    this.injector,
                ),
                {
                    label: ({$implicit}: any) =>
                        $implicit === TuiNotification.Error
                            ? 'Error label from function'
                            : 'Info label from function',
                    status: TuiNotification.Info,
                    autoClose: false,
                },
            )
            .pipe(takeUntil(router.events));

        this.notificationWithCustomLabel = notificationsService
            .show<undefined>(
                new PolymorpheusComponent(
                    AlertExampleWithCustomLabelComponent,
                    this.injector,
                ),
                {
                    label: new PolymorpheusComponent(CustomLabelComponent, this.injector),
                    status: TuiNotification.Warning,
                    autoClose: false,
                },
            )
            .pipe(takeUntil(router.events));
    }

    showNotification() {
        this.notification.subscribe();
    }

    showNotificationWithCustomLabel() {
        this.notificationWithCustomLabel.subscribe();
    }
}
