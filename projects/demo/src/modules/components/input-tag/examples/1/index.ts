import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-tag-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputTagExample1 {
    protected readonly control = new FormControl<string[]>([]);
}
