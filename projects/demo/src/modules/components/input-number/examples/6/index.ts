import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-number-example-6',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        tuiInputNumberOptionsProvider({
            decimal: 'never',
            step: 1,
        }),
    ],
})
export class TuiInputNumberExample6 {
    value = 237;
}
