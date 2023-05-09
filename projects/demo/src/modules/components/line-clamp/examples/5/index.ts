import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

@Component({
    selector: 'tui-line-clamp-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiLineClampExample5 {
    readonly user: User = {
        id: '5a006cb3-2b69-4b23',
        email: 'extremely.long.information@example.com',
        firstName: 'John',
        lastName: 'Doe',
    };
}
