import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

interface User {
    readonly name: string;
    readonly surname: string;
}

@Component({
    selector: `tui-stringify-content-example1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiStringifyContentExample1 {
    value = null;

    readonly items = [
        {
            name: `John`,
            surname: `Cleese`,
        },
        {
            name: `Eric`,
            surname: `Idle`,
        },
    ];

    readonly stringify = ({name, surname}: User): string => `${name} ${surname}`;
}
