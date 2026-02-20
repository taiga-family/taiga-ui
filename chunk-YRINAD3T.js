import"./chunk-HU6DUUP4.js";var l=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTree} from '@taiga-ui/kit';

@Component({
    imports: [TuiTree],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
`;export{l as default};
