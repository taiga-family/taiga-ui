import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineChart} from '@taiga-ui/addon-charts';
import {type TuiPoint} from '@taiga-ui/core';

@Component({
    imports: [TuiAxes, TuiLineChart],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly dotted: readonly TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
    ];

    protected readonly solid: readonly TuiPoint[] = [
        [150, 50],
        [200, 150],
        [250, 155],
    ];

    protected readonly dashed: readonly TuiPoint[] = [
        [250, 155],
        [300, 190],
        [350, 90],
    ];
}
`;export{o as default};
