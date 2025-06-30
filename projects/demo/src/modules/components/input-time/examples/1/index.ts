import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {MaskitoTimeMode} from '@maskito/kit';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputTime} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputTime, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly mode: MaskitoTimeMode = 'HH:MM:SS.MSS';
    protected value: TuiTime | null = new TuiTime(23, 59, 59, 999);
}
