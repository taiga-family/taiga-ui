import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCopy} from '@taiga-ui/kit';

@Component({
    imports: [TuiCopy],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly fonts = [
        'font-heading-h1',
        'font-heading-h2',
        'font-heading-h3',
        'font-heading-h4',
        'font-heading-h5',
        'font-heading-h6',
        'font-body-l',
        'font-body-m',
        'font-body-s',
        'font-body-xs',
        'font-ui-l',
        'font-ui-m',
        'font-ui-s',
        'font-ui-xs',
    ];
}
