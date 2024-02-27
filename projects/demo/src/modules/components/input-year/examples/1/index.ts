import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'input-year-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class InputYearExample1 {
    protected readonly control = new FormControl<number | null>(null);
}
