import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';
import {TuiDefaultItem} from '@taiga-ui/kit/components/input-chip';
import {TuiItem} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputChip, TuiTextfield, TuiDefaultItem, TuiItem],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = [];
}
