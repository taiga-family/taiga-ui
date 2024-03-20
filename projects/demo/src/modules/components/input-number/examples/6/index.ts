import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-number-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputNumberOptionsProvider({
            precision: 0,
            step: 1,
        }),
    ],
})
export class TuiInputNumberExample6 {
    protected value = 237;
}
