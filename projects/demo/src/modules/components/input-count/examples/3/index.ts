import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInputCountOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: `tui-input-count-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        tuiInputCountOptionsProvider({
            icons: {
                up: `tuiIconChevronUp`,
                down: `tuiIconChevronDown`,
            },
            appearance: `secondary`,
            step: 10,
            min: 10,
            max: 100,
        }),
    ],
})
export class TuiInputCountExample3 {
    testForm = new FormGroup({
        testValue1: new FormControl(10, Validators.required),
        testValue2: new FormControl(10, Validators.required),
    });
}
