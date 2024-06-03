import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiRangeComponent} from '@taiga-ui/kit';
import {TuiCardLargeDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardLargeDirective,
        TuiSurfaceDirective,
        TuiRangeComponent,
        FormsModule,
        JsonPipe,
        ReactiveFormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected smallRangeValue = [0, 40];

    protected readonly bigRangeControl = new FormControl([40, 60]);
}
