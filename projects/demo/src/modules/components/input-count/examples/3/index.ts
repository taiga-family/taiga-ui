import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_INPUT_COUNT_DEFAULT_OPTIONS, TUI_INPUT_COUNT_OPTIONS} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-count-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_INPUT_COUNT_OPTIONS,
            useValue: {
                ...TUI_INPUT_COUNT_DEFAULT_OPTIONS,
                icons: {
                    up: 'tuiIconChevronUp',
                    down: 'tuiIconChevronDown',
                },
                appearance: 'secondary',
                step: 10,
                min: 10,
                max: 100,
            },
        },
    ],
})
export class TuiInputCountExample3 {
    testForm = new FormGroup({
        testValue1: new FormControl(10, Validators.required),
        testValue2: new FormControl(10, Validators.required),
    });
}
