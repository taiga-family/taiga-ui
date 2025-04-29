import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHintDirective, TuiTextfield, TuiTextfieldItem} from '@taiga-ui/core';
import {TuiInputChipItem, TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiInputChipItem,
        TuiHintDirective,
        TuiInputChip,
        TuiTextfield,
        TuiTextfieldItem,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    public readonly control = new FormControl(['invalid', 'value']);
}
