import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: `tui-input-time-example-4`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        tuiInputTimeOptionsProvider({
            mode: `HH:MM`,
            postfix: `left`,
            maxValues: {HH: 47, MM: 59, SS: 59, MS: 999},
        }),
    ],
})
export class TuiInputTimeExample4 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(null),
    });
}
