import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiTextfield, TuiTextfieldItem} from '@taiga-ui/core';
import {TuiInputChip, TuiInputChipItem} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiHint,
        TuiInputChip,
        TuiInputChipItem,
        TuiTextfield,
        TuiTextfieldItem,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = ['Franklin', 'Trevor', 'Michael'];
}
