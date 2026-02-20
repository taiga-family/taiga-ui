import"./chunk-HU6DUUP4.js";var o=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiKeySteps} from '@taiga-ui/core';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiRange],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly ticksLabels = ['0', '10K', '100K', '500k', '1000K'];
    protected readonly segments = this.ticksLabels.length - 1;

    // 12.5% (of total distance) per step
    protected readonly stepPercentage = 100 / (2 * this.segments);

    protected value = [0, 100_000];

    protected readonly keySteps: TuiKeySteps = [
        // [percent, value]
        [0, 0],
        [25, 10_000],
        [50, 100_000],
        [75, 500_000],
        [100, 1_000_000],
    ];
}
`;export{o as default};
