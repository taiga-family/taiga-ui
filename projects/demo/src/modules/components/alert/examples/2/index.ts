import {Component, inject, type TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiAlertContext, TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-alerts-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAlertExampleComponent2 {
    private readonly alerts = inject(TuiAlertService);

    @ViewChild('withdrawTemplate')
    protected withdrawTemplate?: TemplateRef<TuiAlertContext>;

    @ViewChild('depositTemplate')
    protected depositTemplate?: TemplateRef<TuiAlertContext>;

    protected money = 1000;

    protected showWithdrawAlert(): void {
        this.alerts
            .open(this.withdrawTemplate || '', {
                label: 'A template sample',
                status: 'warning',
                autoClose: 0,
            })
            .subscribe();
    }

    protected showDepositAlert(): void {
        this.alerts
            .open(this.depositTemplate || '', {
                label: 'A template sample',
                status: 'success',
                autoClose: 0,
            })
            .subscribe();
    }

    protected withdraw(): void {
        this.money -= 100;
    }

    protected deposit(): void {
        this.money += 100;
    }
}
