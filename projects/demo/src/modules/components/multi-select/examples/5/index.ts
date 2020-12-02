import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-multi-select-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMultiSelectExample5 {
    readonly jedi: ReadonlyArray<string> = [
        'Luke Skywalker',
        'Princess Leia',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    readonly sith: ReadonlyArray<string> = ['Emperor', 'Darth Vader', 'Darth Maul'];

    value: ReadonlyArray<string> = [this.jedi[0]];
}
