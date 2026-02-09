import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLegendItem, TuiRingChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiSum} from '@taiga-ui/cdk';
import {
    TuiCheckbox,
    tuiFormatNumber,
    TuiIcon,
    TuiNotification,
    TuiNotificationService,
} from '@taiga-ui/core';

@Component({
    imports: [
        TuiAmountPipe,
        TuiCheckbox,
        TuiIcon,
        TuiLegendItem,
        TuiNotification,
        TuiRingChart,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);
    private enabled = Array.from<unknown, boolean>({length: 5}, () => true);

    protected readonly data = [13769, 12367, 10172, 3018, 2592];
    protected readonly sum = tuiSum(...this.data);
    protected readonly labels = ['Axes', 'Faxes', 'Taxes', 'Saxes', 'Other'];

    protected get value(): readonly number[] {
        return this.data.map((value, index) => (this.enabled[index] ? value : 0));
    }

    protected isEnabled(index: number): boolean {
        return this.enabled[index] ?? false;
    }

    protected toggle(index: number): void {
        this.enabled = this.enabled.map((value, i) => (i === index ? !value : value));
    }

    protected onClick(index: number): void {
        if (this.isEnabled(index)) {
            this.alerts
                .open(`Category spending: ${tuiFormatNumber(this.data[index] ?? 0)} ₽`, {
                    label: this.labels[index],
                })
                .subscribe();
        } else {
            this.toggle(index);
        }
    }
}
