import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly providers = import('./examples/import/providers.md');

    protected examples = ['Dropdown', 'Dropdown and custom portal', 'Hint'];
}
