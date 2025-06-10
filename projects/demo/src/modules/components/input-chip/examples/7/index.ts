import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiFilterByInputPipe, TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInputChip,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = [];
    protected readonly items: string[] = ['Franklin', 'Trevor', 'Michael'];
}
