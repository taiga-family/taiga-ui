import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeySteps} from '@taiga-ui/kit';

@Component({
    selector: 'tui-slider-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSliderExample5 {
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
