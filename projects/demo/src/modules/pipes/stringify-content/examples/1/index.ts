import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

interface User {
    readonly name: string;
    readonly surname: string;
}

@Component({
    selector: 'tui-stringify-content-example1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiStringifyContentExample1 {
    value = null;

    readonly stringify = ({name, surname}: User) => `${name} ${surname}`;

    readonly items = [
        {
            name: 'John',
            surname: 'Cleese',
        },
        {
            name: 'Eric',
            surname: 'Idle',
        },
    ];
}
