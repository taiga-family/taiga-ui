import {Component, Inject, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {AlertExampleWithCustomLabelComponent} from './alert-example-with-custom-label/alert-example-with-custom-label.component';
import {CustomLabelComponent} from './custom-label/custom-label.component';

@Component({
    selector: `tui-alerts-example-5`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiAlertsExampleComponent5 {
    readonly notification: Observable<void>;
    readonly notificationWithCustomLabel: Observable<void>;

    constructor(
        @Inject(TuiAlertService) alertService: TuiAlertService,
        @Inject(Router) router: Router,
        @Inject(Injector) private readonly injector: Injector,
    ) {
        this.notification = alertService
            .open(
                new PolymorpheusComponent(
                    AlertExampleWithCustomLabelComponent,
                    this.injector,
                ),
                {
                    label: ({$implicit}: TuiContextWithImplicit<TuiNotification>) =>
                        $implicit === TuiNotification.Error
                            ? `Error label from function`
                            : `Info label from function`,
                    status: TuiNotification.Info,
                    autoClose: false,
                },
            )
            .pipe(takeUntil(router.events));

        this.notificationWithCustomLabel = alertService
            .open(
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

    showNotification(): void {
        this.notification.subscribe();
    }

    showNotificationWithCustomLabel(): void {
        this.notificationWithCustomLabel.subscribe();
    }
}
