import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
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
