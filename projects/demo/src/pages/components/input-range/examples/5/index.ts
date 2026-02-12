import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiKeySteps} from '@taiga-ui/core';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputRange],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [100_000, 500_000];
    protected readonly min = 0;
    protected readonly max = 1_000_000;
    protected readonly step = 5;
    protected readonly ticksLabels = ['0', '10K', '100K', '500k', '1000K'];
    protected readonly segments = this.ticksLabels.length - 1;

    protected readonly keySteps: TuiKeySteps = [
        // [percent, value]
        [0, this.min],
        [25, 10_000],
        [50, 100_000],
        [75, 500_000],
        [100, this.max],
    ];
}
