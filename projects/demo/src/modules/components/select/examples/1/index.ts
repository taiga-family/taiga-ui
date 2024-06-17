import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListDirective} from '@taiga-ui/core';
import {TuiDataListWrapperComponent} from '@taiga-ui/kit';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiSelectModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiDataListWrapperComponent,
        TuiDataListDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected testValue = new FormControl<string | null>(null);
}
