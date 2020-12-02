import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {
    TuiNotification,
    TuiNotificationContentContext,
    TuiNotificationsService,
} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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
            .showNotification(this.withdrawTemplate || '', {
                label: 'Пример с шаблоном',
                status: TuiNotification.Warning,
                autoClose: false,
            })
            .subscribe();
    }

    showDepositAlert() {
        this.notificationsService
            .showNotification(this.depositTemplate || '', {
                label: 'Пример с шаблоном',
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
