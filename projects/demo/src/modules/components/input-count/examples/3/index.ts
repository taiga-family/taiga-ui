import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInputCountOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-count-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        tuiInputCountOptionsProvider({
            appearance: 'secondary',
            icons: {
                down: 'tuiIconChevronDown',
                up: 'tuiIconChevronUp',
            },
            max: 100,
            min: 10,
            step: 10,
        }),
    ],
})
export class TuiInputCountExample3 {
    testForm = new FormGroup({
        testValue1: new FormControl(10, Validators.required),
        testValue2: new FormControl(10, Validators.required),
    });
}
