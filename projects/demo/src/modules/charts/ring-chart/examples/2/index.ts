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
    private readonly labels = [
        'Супермаркеты',
        'Рестораны',
        'Распутство',
        'Транспорт',
        'Другое',
    ];

    getValue(index: number | null): number {
        return index === null ? this.sum : this.value[index];
    }

    getLabel(index: number | null): string {
        return index === null ? 'Всего' : this.labels[index];
    }
}
