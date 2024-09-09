import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoNumberOptionsGenerator} from '@maskito/kit';
import {TuiTextfield} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [FormsModule, MaskitoDirective, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = Math.PI.toFixed(48);
    protected readonly options = maskitoNumberOptionsGenerator({
        decimalSeparator: ',',
        precision: Infinity,
        min: 0,
    });
}
