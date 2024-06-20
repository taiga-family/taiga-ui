import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRingChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiSum} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiRingChart, TuiAmountPipe, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'other'];
    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly total = tuiSum(...this.value);

    protected index = NaN;

    protected get sum(): number {
        return Number.isNaN(this.index) ? this.total : this.value[this.index];
    }

    protected get label(): string {
        return Number.isNaN(this.index) ? 'Total' : this.labels[this.index];
    }
}
