import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHintDirective} from '@taiga-ui/core';
import {TuiLineClamp} from '@taiga-ui/kit';

interface User {
    email: string;
    firstName: string;
    id: string;
    lastName: string;
}

@Component({
    imports: [TuiHintDirective, TuiLineClamp],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly user: User = {
        id: '5a006cb3-2b69-4b23',
        email: 'extremely.long.information@example.com',
        firstName: 'John',
        lastName: 'Doe',
    };
}
