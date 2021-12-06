import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {sum} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-ring-chart-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiRingChartExample2 {
    readonly value = [13769, 12367, 10172, 3018, 2592];

    private readonly sum = sum(...this.value);
    private readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'other'];

    getValue(index: number): number {
        return Number.isNaN(index) ? this.sum : this.value[index];
    }

    getLabel(index: number): string {
        return Number.isNaN(index) ? 'Total' : this.labels[index];
    }
}
