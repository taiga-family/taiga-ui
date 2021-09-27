import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

interface User {
    name: string;
    role: string;
}

@Component({
    selector: 'tui-stringify-example1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiStringifyExample1 {
    value = null;

    readonly items: readonly User[] = [
        {
            name: 'John Cleese',
            role: 'Black Knight',
        },
        {
            name: 'Eric Idle',
            role: 'Dead collector',
        },
    ];
}
