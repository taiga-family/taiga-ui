import {DecimalPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiKeySteps} from '@taiga-ui/kit';
import {TuiSlider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSlider, ReactiveFormsModule, NgForOf, DecimalPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly labels: string[] = ['5 000', '100 000', '300 000', '1 000 000'];
    protected readonly formControl = new FormControl(720_000);
    protected readonly segments = this.labels.length - 1;

    protected readonly keySteps: TuiKeySteps = [
        [0, 5_000],
        [100 / 3, 100_000],
        [(100 / 3) * 2, 300_000],
        [100, 1_000_000],
    ];
}
