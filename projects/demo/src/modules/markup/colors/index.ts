import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

import {BACKGROUNDS, CHARTS, OTHERS, STATUSES, TEXT} from './constants';
import {TableColors} from './examples/table/table.component';

@Component({
    standalone: true,
    imports: [TuiDemo, TableColors],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly basicImportsLess = import(
        './examples/import/basic-imports-less.md?raw'
    );

    protected readonly backgrounds = BACKGROUNDS;
    protected readonly text = TEXT;
    protected readonly statuses = STATUSES;
    protected readonly others = OTHERS;
    protected readonly charts = CHARTS;
}
