import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiInputChip, TuiTextfield],
    templateUrl: './index.html',
    styles: [':host {display: block; max-inline-size: 15rem;}'],
    encapsulation,
    changeDetection,
})
export default class Example {
    public readonly control = new FormControl([
        'brown',
        'blue',
        'violet sky',
        'hurtful',
        'purple',
        'anything',
        'you',
        'like',
    ]);
}
