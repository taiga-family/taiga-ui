import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTree} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiTree],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = [
        'Top level 1',
        ['Second level item', ['Third level 1', 'Third level 2', 'Third level 3']],
        'Top level 2',
        'Top level 3',
        ['Second 1', 'Second 2'],
    ];
}
