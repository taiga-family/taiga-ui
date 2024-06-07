import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiMultiSelectModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected readonly control = new FormControl([this.items[0]]);
}
