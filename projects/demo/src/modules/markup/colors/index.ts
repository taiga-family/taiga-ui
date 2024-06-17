import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

import {
    BASE,
    BASE_NIGHT,
    STATUS,
    STATUS_NIGHT,
    SUPPORT,
    TEXT,
    TEXT_NIGHT,
} from './constants';
import {TableComponent} from './examples/table/table.component';

@Component({
    standalone: true,
    imports: [TuiDemo, TableComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Page {
    protected readonly basicImportsLess = import(
        './examples/import/basic-imports-less.md?raw'
    );

    protected readonly base = BASE;
    protected readonly baseNight = BASE_NIGHT;
    protected readonly support = SUPPORT.map(name => ({name}));
    protected readonly text = TEXT;
    protected readonly textNight = TEXT_NIGHT;
    protected readonly status = STATUS;
    protected readonly statusNight = STATUS_NIGHT;
}
