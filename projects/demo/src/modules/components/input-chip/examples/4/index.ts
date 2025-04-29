import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield, TuiTextfieldItem} from '@taiga-ui/core';
import {TuiInputChipItem, TuiInputChip} from '@taiga-ui/kit';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiInputChipItem,
        TuiInputChip,
        TuiTextfield,
        TuiTextfieldItem,
        MaskitoDirective,
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
