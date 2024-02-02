import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {takeUntil} from 'rxjs';

import {AlertExampleWithCustomLabelComponent} from './alert-example-with-custom-label/alert-example-with-custom-label.component';
import {CustomLabelComponent} from './custom-label/custom-label.component';

@Component({
    selector: 'tui-alerts-example-5',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAlertExampleComponent5 {
    private readonly router = inject(Router);
    private readonly alerts = inject(TuiAlertService);

    private readonly notification = this.alerts
        .open(new PolymorpheusComponent(AlertExampleWithCustomLabelComponent), {
            label: ({status}) =>
                status === 'error'
                    ? 'Error label from function'
                    : 'Info label from function',
            status: 'error',
            autoClose: 0,
        })
        .pipe(takeUntil(this.router.events));

    private readonly notificationWithCustomLabel = this.alerts
        .open(new PolymorpheusComponent(AlertExampleWithCustomLabelComponent), {
            label: new PolymorpheusComponent(CustomLabelComponent),
            status: 'warning',
            autoClose: 0,
        })
        .pipe(takeUntil(this.router.events));

    showNotification(): void {
        this.notification.subscribe();
    }

    showNotificationWithCustomLabel(): void {
        this.notificationWithCustomLabel.subscribe();
    }
}
