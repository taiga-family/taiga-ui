import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSurface} from '@taiga-ui/core';
import {TuiRange} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        JsonPipe,
        ReactiveFormsModule,
        TuiCardLarge,
        TuiRange,
        TuiSurface,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected smallRangeValue = [0, 40];

    protected readonly bigRangeControl = new FormControl([40, 60]);
}
