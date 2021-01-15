import {Component} from '@angular/core';
import {sum} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-ring-chart-example-2',
    templateUrl: './index.html',
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
