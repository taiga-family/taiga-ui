import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCounter} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCounter],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly step = 1_000;
    protected value = 9_000;
}
