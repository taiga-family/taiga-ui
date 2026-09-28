import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiFlagPipe, TuiInputTime, TuiTimeFormat} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiFlagPipe, TuiInputTime, TuiTimeFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = new TuiTime(18, 5, 5, 766);
}
