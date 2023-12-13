import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-filter-by-input-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiFilterByInputExample3 {
    readonly items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    readonly control = new UntypedFormControl([this.items[0]]);
}
