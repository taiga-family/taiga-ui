import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDataListComponent,
    TuiDataListDirective,
    TuiOptGroupDirective,
    TuiOptionComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiDataListComponent,
        TuiDataListDirective,
        NgForOf,
        TuiOptionComponent,
        TuiOptGroupDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly jedi: readonly string[] = [
        'Luke Skywalker',
        'Princess Leia',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected readonly sith: readonly string[] = ['Emperor', 'Darth Vader', 'Darth Maul'];

    protected value: readonly string[] = [this.jedi[0]];
}
