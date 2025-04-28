import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield, TuiTextfieldItem} from '@taiga-ui/core';
import {TuiDefaultChip, TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiDefaultChip, TuiInputChip, TuiTextfield, TuiTextfieldItem],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = ['say', 'my', 'name'];
}
