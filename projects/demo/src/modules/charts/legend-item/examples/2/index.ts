import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {sum, tuiPure} from '@taiga-ui/cdk';
import {formatNumber, TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-legend-item-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiLegendItemExample2 {
    private enabled = Array(5).fill(true);

    readonly data = [13769, 12367, 10172, 3018, 2592];
    readonly sum = sum(...this.data);
    readonly labels = ['Axes', 'Faxes', 'Taxes', 'Saxes', 'Other'];

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    get value(): readonly number[] {
        return this.getValue(this.data, this.enabled);
    }

    isEnabled(index: number): boolean {
        return this.enabled[index];
    }

    toggle(index: number): void {
        this.enabled = this.enabled.map((value, i) => (i === index ? !value : value));
    }

    onClick(index: number): void {
        if (this.isEnabled(index)) {
            this.alertService
                .open(`Category spendings: ${formatNumber(this.data[index])} ₽`, {
                    label: this.labels[index],
                })
                .subscribe();
        } else {
            this.toggle(index);
        }
    }

    getColor(index: number): string {
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
