import {Component} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';
import {TuiRadioList} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiRadioList, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        vertical: new FormControl(null, Validators.required),
    });

    protected readonly objects = [
        {
            name: 'King Arthur',
            description: 'Graham Chapman',
        },
        {
            name: "It's Man",
            description: 'Michael Palin',
        },
        {
            name: 'Silly Walks',
            description: 'John Cleese',
        },
    ];

    protected readonly strings = ['King Arthur', "It's Man", 'Silly Walks'];

    protected horizontal = this.strings[0];

    protected readonly handler: TuiBooleanHandler<string> = item =>
        item === this.strings[2];
}
