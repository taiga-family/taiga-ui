import {AsyncPipe, NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLegendItemComponent, TuiRingChartComponent} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiPure, tuiSum} from '@taiga-ui/cdk';
import {
    TuiAlertService,
    tuiFormatNumber,
    TuiNotificationComponent,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {TuiCheckboxComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiNotificationComponent,
        TuiLegendItemComponent,
        TuiCheckboxComponent,
        NgForOf,
        TuiRingChartComponent,
        TuiAmountPipe,
        AsyncPipe,
        TuiSvgComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
                .open(`Category spending: ${tuiFormatNumber(this.data[index])} ₽`, {
                    label: this.labels[index],
                })
                .subscribe();
        } else {
            this.toggle(index);
        }
    }

    protected getColor(index: number): string {
        return `var(--tui-chart-${index})`;
    }

    @tuiPure
    private getValue(
        data: readonly number[],
        enabled: readonly number[],
    ): readonly number[] {
        return data.map((value, index) => (enabled[index] ? value : 0));
    }
}
