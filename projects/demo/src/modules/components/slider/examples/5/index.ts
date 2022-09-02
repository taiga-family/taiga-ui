import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiKeySteps} from '@taiga-ui/kit';

@Component({
    selector: `tui-slider-example-5`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSliderExample5 {
    readonly labels: string[] = [`5 000`, `100 000`, `300 000`, `1 000 000`];
    readonly formControl = new FormControl(720_000);
    readonly segments = this.labels.length - 1;

    readonly keySteps: TuiKeySteps = [
        [0, 5_000],
        [100 / 3, 100_000],
        [(100 / 3) * 2, 300_000],
        [100, 1_000_000],
    ];
}
