import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDateModule} from '@taiga-ui/legacy';

import {ExampleNativeDateTransformer} from './native-date-transformer.directive';

@Component({
    standalone: true,
    imports: [TuiInputDateModule, ReactiveFormsModule, ExampleNativeDateTransformer],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly nativeDateControl = new FormControl(new Date(2022, 0, 26));
    protected readonly defaultControl = new FormControl(new TuiDay(2022, 0, 26));
}
