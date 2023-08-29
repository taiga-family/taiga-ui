import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-time-example-5',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        tuiInputTimeOptionsProvider({
            maxValues: {HH: 11, MM: 59, MS: 999, SS: 59},
            mode: 'HH:MM',
        }),
    ],
})
export class TuiInputTimeExample5 {
    readonly testForm = new FormGroup({
        isPm: new FormControl(false),
        testValue: new FormControl(null),
    });

    get postfix(): string {
        return this.testForm.value?.isPm ? 'PM' : 'AM';
    }
}
