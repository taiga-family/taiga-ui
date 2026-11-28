import"./chunk-LQ6M4NCU.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiDemo, TuiList],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly component = import('./examples/import/component.md');

    protected readonly examples = [
        'assert',
        'getPaymentSystem',
        'isPresent',
        'markControlAsTouchedAndValidate',
    ];
}
`;export{o as default};
