import {AsyncPipe} from '@angular/common';
import type {TemplateRef} from '@angular/core';
import {Component, inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import type {TuiAlertContext} from '@taiga-ui/core';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiButton,
        TuiAmountPipe,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
    ],
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
