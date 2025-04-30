import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {TuiTextfield, TuiTextfieldItem} from '@taiga-ui/core';
import {TuiInputChip, TuiInputChipItem} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        MaskitoDirective,
        ReactiveFormsModule,
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
    protected readonly mask: MaskitoOptions = {
        mask: [/\D/, /\D/, /\D/],
    };

    protected readonly control = new FormControl([]);
}
