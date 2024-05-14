import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZoneDirective, TuiDay} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiHostedDropdownModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiInputDateModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiHostedDropdownModule,
        TuiButtonDirective,
        TuiActiveZoneDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 2, 15)),
    });
}
