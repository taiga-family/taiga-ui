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
        'font-heading-1',
        'font-heading-2',
        'font-heading-3',
        'font-heading-4',
        'font-heading-5',
        'font-heading-6',
        'font-text-xl',
        'font-text-l',
        'font-text-m',
        'font-text-s',
        'font-text-xs',
    ];
}
