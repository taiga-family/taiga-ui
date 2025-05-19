import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';
import {TuiItem} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        MaskitoDirective,
        ReactiveFormsModule,
        TuiInputChip,
        TuiTextfield,
        TuiItem,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly mask: MaskitoOptions = {
        mask: [/\D/, /\D/, /\D/],
    };

    protected readonly control = new FormControl([]);
}
