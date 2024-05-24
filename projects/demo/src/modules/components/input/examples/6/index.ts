import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiTextfieldControllerModule, TuiTextfieldOptionsDirective} from '@taiga-ui/core';
import {TuiDataListWrapperModule} from '@taiga-ui/kit';
import {
    TuiInputDateModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiSelectModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiTextfieldOptionsDirective,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiInputModule,
        TuiTable,
        TuiInputDateModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiInputNumberModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly items = ['Black', 'Gold', 'Silver'];
    protected readonly form = new FormGroup({
        name: new FormControl('', Validators.required),
        date: new FormControl(null, Validators.required),
        color: new FormControl(null, Validators.required),
        quantity: new FormControl<number | null>(null),
        sum: new FormControl(255),
    });
}
