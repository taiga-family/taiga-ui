import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiHint,
        TuiIcon,
        TuiInputChip,
        TuiTextfield,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(['Keep', 'it', 'simple']);
}
