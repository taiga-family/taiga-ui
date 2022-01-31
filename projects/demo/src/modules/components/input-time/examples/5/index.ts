import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_INPUT_TIME_DEFAULT_OPTIONS, TUI_INPUT_TIME_OPTIONS} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-time-example-5',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_INPUT_TIME_OPTIONS,
            useValue: {
                ...TUI_INPUT_TIME_DEFAULT_OPTIONS,
                mode: 'HH:MM',
                maxValues: {HH: 11, MM: 59},
            },
        },
    ],
})
export class TuiInputTimeExample5 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(null),
        isPm: new FormControl(false),
    });

    get postfix(): string {
        return this.testForm.value?.isPm ? 'PM' : 'AM';
    }
}
