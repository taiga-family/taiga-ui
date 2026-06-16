import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Mobile — medium size',
        'Desktop — large size',
        'Variants',
        'Dialog',
        'Dynamic header',
        'iOS Liquid glass',
        'Dynamic header (Liquid glass)',
        'Color background',
    ];
}
