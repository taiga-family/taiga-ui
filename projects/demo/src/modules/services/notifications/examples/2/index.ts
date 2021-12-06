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
    money = 1000;

    @ViewChild('withdrawTemplate')
    withdrawTemplate?: TemplateRef<TuiNotificationContentContext>;

    @ViewChild('depositTemplate')
    depositTemplate?: TemplateRef<TuiNotificationContentContext>;

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
    ) {}

    showWithdrawAlert() {
        this.notificationsService
            .show(this.withdrawTemplate || '', {
                label: 'A template sample',
                status: TuiNotification.Warning,
                autoClose: false,
            })
            .subscribe();
    }

    showDepositAlert() {
        this.notificationsService
            .show(this.depositTemplate || '', {
                label: 'A template sample',
                status: TuiNotification.Success,
                autoClose: false,
            })
            .subscribe();
    }

    withdraw() {
        this.money -= 100;
    }

    deposit() {
        this.money += 100;
    }
}
