import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiNotification,
    TuiNotificationContentContext,
    TuiNotificationsService,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-notifications-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiNotificationsExampleComponent2 {
    @ViewChild('withdrawTemplate')
    withdrawTemplate?: TemplateRef<TuiNotificationContentContext>;

    @ViewChild('depositTemplate')
    depositTemplate?: TemplateRef<TuiNotificationContentContext>;

    money = 1000;

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
    ) {}

    showWithdrawAlert(): void {
        this.notificationsService
            .show(this.withdrawTemplate || '', {
                label: 'A template sample',
                status: TuiNotification.Warning,
                autoClose: false,
            })
            .subscribe();
    }

    showDepositAlert(): void {
        this.notificationsService
            .show(this.depositTemplate || '', {
                label: 'A template sample',
                status: TuiNotification.Success,
                autoClose: false,
            })
            .subscribe();
    }

    withdraw(): void {
        this.money -= 100;
    }

    deposit(): void {
        this.money += 100;
    }
}
