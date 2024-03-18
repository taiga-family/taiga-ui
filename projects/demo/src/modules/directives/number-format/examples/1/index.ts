import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormatModule} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-number-format-example-1',
    imports: [TuiInputNumberModule, TuiNumberFormatModule, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiNumberFormatExample1 {
    protected readonly control = new FormControl(120.234);
}
