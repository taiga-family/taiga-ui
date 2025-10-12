import {AsyncPipe} from '@angular/common';
import {Component, inject, type TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {type TuiAlertContext, TuiAlertService, TuiButton} from '@taiga-ui/core';
import {PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

@Component({
    imports: [AsyncPipe, PolymorpheusTemplate, TuiAmountPipe, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
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
                appearance: 'warning',
                autoClose: 0,
            })
            .subscribe();
    }

    protected showDepositAlert(): void {
        this.alerts
            .open(this.depositTemplate || '', {
                label: 'A template sample',
                appearance: 'positive',
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
