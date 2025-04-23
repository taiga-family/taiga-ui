import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHintDirective, TuiTextfield, TuiTextfieldMultiItem} from '@taiga-ui/core';
import {TuiDefaultChip, TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiDefaultChip,
        TuiHintDirective,
        TuiInputChip,
        TuiTextfield,
        TuiTextfieldMultiItem,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    public readonly control = new FormControl(['invalid', 'value']);
}
