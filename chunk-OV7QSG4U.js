import"./chunk-42JZD6NG.js";var i=`import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLegendItem, TuiRingChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiPure, tuiSum} from '@taiga-ui/cdk';
import {TuiAlertService, tuiFormatNumber, TuiIcon, TuiNotification} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

@Component({
    imports: [
        AsyncPipe,
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
    private readonly alerts = inject(TuiAlertService);
    private enabled = new Array(5).fill(true);

    protected readonly data = [13769, 12367, 10172, 3018, 2592];
    protected readonly sum = tuiSum(...this.data);
    protected readonly labels = ['Axes', 'Faxes', 'Taxes', 'Saxes', 'Other'];

    protected get value(): readonly number[] {
        return this.getValue(this.data, this.enabled);
    }

    protected isEnabled(index: number): boolean {
        return this.enabled[index];
    }

    protected toggle(index: number): void {
        this.enabled = this.enabled.map((value, i) => (i === index ? !value : value));
    }

    protected onClick(index: number): void {
        if (this.isEnabled(index)) {
            this.alerts
                .open(\`Category spending: \${tuiFormatNumber(this.data[index] ?? 0)} \u20BD\`, {
                    label: this.labels[index],
                })
                .subscribe();
        } else {
            this.toggle(index);
        }
    }

    @tuiPure
    private getValue(
        data: readonly number[],
        enabled: readonly number[],
    ): readonly number[] {
        return data.map((value, index) => (enabled[index] ? value : 0));
    }
}
`;export{i as default};
