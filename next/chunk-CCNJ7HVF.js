import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiChartHint, TuiPieChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiHint} from '@taiga-ui/core';

@Component({
    imports: [TuiAmountPipe, TuiChartHint, TuiHint, TuiPieChart],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];
}
`;export{o as default};
