import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-multi-select-example-5',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiMultiSelectExample5 {
    readonly jedi: readonly string[] = [
        'Luke Skywalker',
        'Princess Leia',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    readonly sith: readonly string[] = ['Emperor', 'Darth Vader', 'Darth Maul'];

    value: readonly string[] = [this.jedi[0]];
}
