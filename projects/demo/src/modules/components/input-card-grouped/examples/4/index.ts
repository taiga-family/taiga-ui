import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiCard} from '@taiga-ui/addon-commerce';
import {TuiInputCardGroupedComponent} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [TuiInputCardGroupedComponent, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected control = new FormControl<TuiCard | null>({
        card: '',
        expire: '',
        cvc: '***',
    });
}
