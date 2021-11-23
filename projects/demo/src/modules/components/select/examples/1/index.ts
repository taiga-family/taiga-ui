import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-select-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiSelectExample1 {
    items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    testValue = new FormControl(this.items[0]);
}
