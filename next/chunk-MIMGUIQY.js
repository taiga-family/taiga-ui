import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [MaskitoDirective, ReactiveFormsModule, TuiInputChip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl();
    protected readonly mask: MaskitoOptions = {mask: [/\\d/, /\\d/, /\\d/]};
}
`;export{e as default};
