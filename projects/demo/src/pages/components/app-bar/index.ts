import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page extends Array {
    protected readonly examples = [
        'Mobile — medium size',
        'Desktop — large size',
        'Variants',
        'Dialog',
        'Dynamic header',
        'iOS Liquid glass',
        'Color background',
    ];

    protected readonly [4] = {
        'component.ts': import('./examples/5/component.ts?raw', {with: {loader: 'text'}}),
        'component.less': import('./examples/5/component.less'),
    };
}
