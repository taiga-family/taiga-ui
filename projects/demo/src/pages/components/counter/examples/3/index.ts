import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCounter} from '@taiga-ui/kit';
import {TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiCounter, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly step = 1_000;
    protected value = 9_000;
}
