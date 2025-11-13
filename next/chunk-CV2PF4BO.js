import"./chunk-42JZD6NG.js";var e=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [MaskitoDirective, ReactiveFormsModule, TuiInputChip, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl();
    protected readonly mask: MaskitoOptions = {
        mask: [/\\d/, /\\d/, /\\d/],
    };
}
`;export{e as default};
