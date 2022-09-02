import type {TemplateRef} from '@angular/core';
import {Component, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiAlertContext} from '@taiga-ui/cdk';
import type {TuiAlertOptions} from '@taiga-ui/core';
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';

@Component({
    selector: `tui-alerts-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiAlertsExampleComponent2 {
    @ViewChild(`withdrawTemplate`)
    withdrawTemplate?: TemplateRef<TuiAlertContext<TuiAlertOptions<unknown>>>;

    @ViewChild(`depositTemplate`)
    depositTemplate?: TemplateRef<TuiAlertContext<TuiAlertOptions<unknown>>>;

    money = 1000;

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    showWithdrawAlert(): void {
        this.alertService
            .open(this.withdrawTemplate || ``, {
                label: `A template sample`,
                status: TuiNotification.Warning,
                autoClose: false,
            })
            .subscribe();
    }

    showDepositAlert(): void {
        this.alertService
            .open(this.depositTemplate || ``, {
                label: `A template sample`,
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
