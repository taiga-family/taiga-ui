import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiIcon, TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        TuiIcon,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTabs,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 0;

    protected readonly steps = ['Sales', 'Settings', 'News'];

    protected onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
