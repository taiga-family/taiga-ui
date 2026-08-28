import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoNumber} from '@maskito/kit';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, MaskitoDirective, ReactiveFormsModule, TuiInputInline],
    templateUrl: './index.html',
    styleUrl: 'index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = null;
    protected readonly mask = maskitoNumber({
        prefix: '$',
        min: 0,
        maximumFractionDigits: 2,
    });
}
