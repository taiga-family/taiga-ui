import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDateModule} from '@taiga-ui/legacy';

import {ExampleNativeDateTransformerDirective} from './native-date-transformer.directive';

@Component({
    standalone: true,
    imports: [
        TuiInputDateModule,
        ReactiveFormsModule,
        ExampleNativeDateTransformerDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly nativeDateControl = new FormControl(new Date(2022, 0, 26));
    protected readonly defaultControl = new FormControl(new TuiDay(2022, 0, 26));
}
