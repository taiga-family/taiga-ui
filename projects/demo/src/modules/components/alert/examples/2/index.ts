import {Component, inject, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertContext, TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-alerts-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAlertExampleComponent2 {
    private readonly alerts = inject(TuiAlertService);

    @ViewChild('withdrawTemplate')
    withdrawTemplate?: TemplateRef<TuiAlertContext>;

    @ViewChild('depositTemplate')
    depositTemplate?: TemplateRef<TuiAlertContext>;

    money = 1000;

    showWithdrawAlert(): void {
        this.alerts
            .open(this.withdrawTemplate || '', {
                label: 'A template sample',
                status: 'warning',
                autoClose: 0,
            })
            .subscribe();
    }

    showDepositAlert(): void {
        this.alerts
            .open(this.depositTemplate || '', {
                label: 'A template sample',
                status: 'success',
                autoClose: 0,
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
