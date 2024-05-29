import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDataListWrapper, TuiFilterByInputPipeModule} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiFilterByInputPipeModule,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    protected value = '';
}
